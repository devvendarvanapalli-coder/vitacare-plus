const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { requireRole } = require('../middleware/roles');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

// GET /doctors — list all verified doctors (patient-facing)
router.get('/', async (req, res) => {
  const { specialty, q } = req.query;
  const doctors = await prisma.doctor.findMany({
    where: {
      verified: true,
      ...(specialty && { specialty }),
      ...(q && { user: { name: { contains: q } } }),
    },
    include: { user: { select: { name: true } } },
    orderBy: { rating: 'desc' },
  });
  res.json(doctors);
});

// GET /doctors/profile — doctor's own profile
router.get('/profile', requireRole('DOCTOR'), async (req, res) => {
  const doctor = await prisma.doctor.findUnique({
    where: { userId: req.user.sub },
    include: {
      user: { select: { name: true, phone: true, email: true } },
      schedules: true,
    },
  });
  if (!doctor) return res.status(404).json({ error: 'Doctor profile not found' });
  res.json(doctor);
});

// PUT /doctors/profile
router.put(
  '/profile',
  requireRole('DOCTOR'),
  validate(
    z.object({
      name: z.string().optional(),
      specialty: z.string().optional(),
      licenseNo: z.string().optional(),
      consultationFee: z.number().optional(),
      bio: z.string().optional(),
      experienceYears: z.number().optional(),
    })
  ),
  async (req, res) => {
    const { name, ...doctorData } = req.body;
    const [user, doctor] = await Promise.all([
      name ? prisma.user.update({ where: { id: req.user.sub }, data: { name } }) : Promise.resolve(null),
      prisma.doctor.update({ where: { userId: req.user.sub }, data: doctorData }),
    ]);
    res.json({ ...doctor, user });
  }
);

// GET /doctors/schedule
router.get('/schedule', requireRole('DOCTOR'), async (req, res) => {
  const doctor = await prisma.doctor.findUnique({ where: { userId: req.user.sub } });
  const schedules = await prisma.doctorSchedule.findMany({ where: { doctorId: doctor.id } });
  res.json(schedules);
});

// PUT /doctors/schedule — upsert schedule for given day
router.put(
  '/schedule',
  requireRole('DOCTOR'),
  validate(
    z.object({
      dayOfWeek: z.number().int().min(0).max(6),
      startTime: z.string(),
      endTime: z.string(),
      slotMins: z.number().optional(),
      active: z.boolean().optional(),
    })
  ),
  async (req, res) => {
    const doctor = await prisma.doctor.findUnique({ where: { userId: req.user.sub } });
    const existing = await prisma.doctorSchedule.findFirst({
      where: { doctorId: doctor.id, dayOfWeek: req.body.dayOfWeek },
    });
    const schedule = existing
      ? await prisma.doctorSchedule.update({ where: { id: existing.id }, data: req.body })
      : await prisma.doctorSchedule.create({ data: { doctorId: doctor.id, ...req.body } });
    res.json(schedule);
  }
);

// GET /doctors/:id/slots — available appointment slots for a day
router.get('/:id/slots', async (req, res) => {
  const { date } = req.query;
  if (!date) return res.status(400).json({ error: 'date query param required (YYYY-MM-DD)' });

  const targetDate = new Date(date);
  const dayOfWeek = targetDate.getDay();

  const doctor = await prisma.doctor.findUnique({ where: { id: req.params.id } });
  if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

  const schedule = await prisma.doctorSchedule.findFirst({
    where: { doctorId: doctor.id, dayOfWeek, active: true },
  });
  if (!schedule) return res.json({ slots: [] });

  // Generate all time slots
  const slots = [];
  const [sh, sm] = schedule.startTime.split(':').map(Number);
  const [eh, em] = schedule.endTime.split(':').map(Number);
  let cur = sh * 60 + sm;
  const end = eh * 60 + em;
  while (cur + schedule.slotMins <= end) {
    const h = String(Math.floor(cur / 60)).padStart(2, '0');
    const m = String(cur % 60).padStart(2, '0');
    slots.push(`${date}T${h}:${m}:00.000Z`);
    cur += schedule.slotMins;
  }

  // Remove already booked slots
  const booked = await prisma.appointment.findMany({
    where: {
      doctorId: doctor.id,
      status: { in: ['PENDING', 'CONFIRMED'] },
      scheduledAt: { gte: new Date(`${date}T00:00:00Z`), lt: new Date(`${date}T23:59:59Z`) },
    },
    select: { scheduledAt: true },
  });
  const bookedTimes = new Set(booked.map((a) => a.scheduledAt.toISOString()));

  res.json({ slots: slots.filter((s) => !bookedTimes.has(s)), doctor: { name: null, specialty: doctor.specialty, fee: doctor.consultationFee } });
});

module.exports = router;
