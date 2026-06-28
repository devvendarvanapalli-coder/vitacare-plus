const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { requireRole } = require('../middleware/roles');
const { validate } = require('../middleware/validate');

router.use(requireAuth, requireRole('ADMIN'));

// GET /admin/overview — dashboard KPIs
router.get('/overview', async (req, res) => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfToday = new Date(now.setHours(0, 0, 0, 0));

  const [totalPatients, totalDoctors, totalAppointments, todayAppointments, revenueResult, membershipBreakdown, recentAppointments] =
    await Promise.all([
      prisma.patient.count(),
      prisma.doctor.count(),
      prisma.appointment.count(),
      prisma.appointment.count({ where: { scheduledAt: { gte: startOfToday } } }),
      prisma.appointment.aggregate({
        where: { status: 'COMPLETED', createdAt: { gte: startOfMonth } },
        _sum: { fee: true },
      }),
      prisma.patient.groupBy({ by: ['membershipTier'], _count: true }),
      prisma.appointment.findMany({
        take: 10,
        orderBy: { scheduledAt: 'desc' },
        include: {
          patient: { include: { user: { select: { name: true } } } },
          doctor: { include: { user: { select: { name: true } } } },
        },
      }),
    ]);

  res.json({
    kpis: {
      totalPatients,
      totalDoctors,
      totalAppointments,
      todayAppointments,
      monthlyRevenue: revenueResult._sum.fee || 0,
    },
    membershipBreakdown: membershipBreakdown.map((m) => ({ tier: m.membershipTier, count: m._count })),
    recentAppointments,
  });
});

// GET /admin/users — list all users with search + filter
router.get('/users', async (req, res) => {
  const { role, q, page = 1, limit = 20 } = req.query;
  const skip = (Number(page) - 1) * Number(limit);

  const where = {
    ...(role && { role }),
    ...(q && { name: { contains: q } }),
  };

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      include: {
        patient: { select: { membershipTier: true, streakDays: true } },
        doctor: { select: { specialty: true, verified: true, rating: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: Number(limit),
    }),
    prisma.user.count({ where }),
  ]);

  res.json({ users, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
});

// PUT /admin/users/:id/role — change user role
router.put('/:id/role', validate(z.object({ role: z.enum(['PATIENT', 'DOCTOR', 'ADMIN']) })), async (req, res) => {
  const user = await prisma.user.update({ where: { id: req.params.id }, data: { role: req.body.role } });

  // Auto-create doctor profile if promoted to DOCTOR
  if (req.body.role === 'DOCTOR') {
    await prisma.doctor.upsert({
      where: { userId: user.id },
      create: { userId: user.id },
      update: {},
    });
  }
  res.json(user);
});

// PUT /admin/doctors/:id/verify
router.put('/doctors/:id/verify', async (req, res) => {
  const doctor = await prisma.doctor.update({ where: { id: req.params.id }, data: { verified: true } });
  res.json(doctor);
});

// GET /admin/appointments — all appointments with filters
router.get('/appointments', async (req, res) => {
  const { status, date, doctorId } = req.query;
  const appointments = await prisma.appointment.findMany({
    where: {
      ...(status && { status }),
      ...(doctorId && { doctorId }),
      ...(date && {
        scheduledAt: {
          gte: new Date(`${date}T00:00:00Z`),
          lt: new Date(`${date}T23:59:59Z`),
        },
      }),
    },
    include: {
      patient: { include: { user: { select: { name: true, phone: true } } } },
      doctor: { include: { user: { select: { name: true } } } },
    },
    orderBy: { scheduledAt: 'desc' },
    take: 100,
  });
  res.json(appointments);
});

// GET /admin/revenue — monthly revenue chart data
router.get('/revenue', async (req, res) => {
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const end = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);
    const result = await prisma.appointment.aggregate({
      where: { status: 'COMPLETED', createdAt: { gte: d, lt: end } },
      _sum: { fee: true },
      _count: true,
    });
    months.push({
      month: d.toLocaleString('default', { month: 'short', year: '2-digit' }),
      revenue: result._sum.fee || 0,
      appointments: result._count,
    });
  }
  res.json(months);
});

module.exports = router;
