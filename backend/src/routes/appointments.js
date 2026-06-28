const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { requireRole } = require('../middleware/roles');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

// GET /appointments — patient's own appointments
router.get('/', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  if (!patient) return res.status(404).json({ error: 'Patient profile not found' });

  const status = req.query.status; // filter by status
  const appointments = await prisma.appointment.findMany({
    where: { patientId: patient.id, ...(status && { status }) },
    include: {
      doctor: {
        include: { user: { select: { name: true, phone: true } } },
      },
    },
    orderBy: { scheduledAt: 'asc' },
  });
  res.json(appointments);
});

// POST /appointments — book an appointment
router.post(
  '/',
  validate(
    z.object({
      doctorId: z.string(),
      scheduledAt: z.string(),
      type: z.enum(['VIDEO', 'IN_PERSON', 'HOME_VISIT']).default('VIDEO'),
      symptoms: z.string().optional(),
      notes: z.string().optional(),
    })
  ),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    if (!patient) return res.status(404).json({ error: 'Patient profile not found' });

    const doctor = await prisma.doctor.findUnique({ where: { id: req.body.doctorId } });
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });

    // Check for scheduling conflict
    const scheduledAt = new Date(req.body.scheduledAt);
    const conflict = await prisma.appointment.findFirst({
      where: {
        doctorId: req.body.doctorId,
        status: { in: ['PENDING', 'CONFIRMED'] },
        scheduledAt: {
          gte: new Date(scheduledAt.getTime() - 30 * 60000),
          lte: new Date(scheduledAt.getTime() + 30 * 60000),
        },
      },
    });
    if (conflict) return res.status(409).json({ error: 'Doctor is not available at this time' });

    const videoLink = req.body.type === 'VIDEO' ? `https://meet.vitacare.in/${Date.now().toString(36)}` : null;

    const appt = await prisma.appointment.create({
      data: {
        patientId: patient.id,
        doctorId: req.body.doctorId,
        scheduledAt,
        type: req.body.type,
        symptoms: req.body.symptoms,
        notes: req.body.notes,
        fee: doctor.consultationFee,
        videoLink,
      },
      include: {
        doctor: { include: { user: { select: { name: true } } } },
      },
    });
    res.status(201).json(appt);
  }
);

// PUT /appointments/:id/cancel
router.put('/:id/cancel', async (req, res) => {
  const appt = await prisma.appointment.update({
    where: { id: req.params.id },
    data: { status: 'CANCELLED' },
  });
  res.json(appt);
});

// Doctor: GET /appointments/doctor — doctor's schedule
router.get('/doctor', requireRole('DOCTOR'), async (req, res) => {
  const doctor = await prisma.doctor.findUnique({ where: { userId: req.user.sub } });
  if (!doctor) return res.status(404).json({ error: 'Doctor profile not found' });

  const date = req.query.date ? new Date(req.query.date) : new Date();
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  const appointments = await prisma.appointment.findMany({
    where: { doctorId: doctor.id, scheduledAt: { gte: startOfDay, lte: endOfDay } },
    include: {
      patient: { include: { user: { select: { name: true, phone: true } }, conditions: true } },
    },
    orderBy: { scheduledAt: 'asc' },
  });
  res.json(appointments);
});

// Doctor: PUT /appointments/:id/status
router.put('/:id/status', requireRole('DOCTOR', 'ADMIN'), async (req, res) => {
  const { status, notes } = req.body;
  const appt = await prisma.appointment.update({
    where: { id: req.params.id },
    data: { status, ...(notes && { notes }) },
  });
  res.json(appt);
});

// GET /appointments/doctors — list available doctors
router.get('/doctors', async (req, res) => {
  const { specialty } = req.query;
  const doctors = await prisma.doctor.findMany({
    where: { verified: true, ...(specialty && { specialty }) },
    include: { user: { select: { name: true } } },
    orderBy: { rating: 'desc' },
  });
  res.json(doctors);
});

module.exports = router;
