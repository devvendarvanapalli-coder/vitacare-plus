const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

// GET /patients/profile
router.get('/profile', async (req, res) => {
  const patient = await prisma.patient.findUnique({
    where: { userId: req.user.sub },
    include: {
      user: { select: { name: true, phone: true, email: true } },
      conditions: true,
      allergies: true,
      emergencyContacts: true,
      familyMembers: true,
    },
  });
  if (!patient) return res.status(404).json({ error: 'Patient profile not found' });
  res.json(patient);
});

// PUT /patients/profile
router.put(
  '/profile',
  validate(
    z.object({
      name: z.string().optional(),
      email: z.string().email().optional(),
      bloodGroup: z.string().optional(),
      dateOfBirth: z.string().optional(),
      gender: z.string().optional(),
    })
  ),
  async (req, res) => {
    const { name, email, bloodGroup, dateOfBirth, gender } = req.body;
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    if (!patient) return res.status(404).json({ error: 'Patient profile not found' });

    const [updatedUser, updatedPatient] = await Promise.all([
      prisma.user.update({
        where: { id: req.user.sub },
        data: { ...(name && { name }), ...(email && { email }) },
      }),
      prisma.patient.update({
        where: { userId: req.user.sub },
        data: {
          ...(bloodGroup && { bloodGroup }),
          ...(dateOfBirth && { dateOfBirth: new Date(dateOfBirth) }),
          ...(gender && { gender }),
        },
      }),
    ]);
    res.json({ ...updatedPatient, user: updatedUser });
  }
);

// POST /patients/conditions
router.post('/conditions', validate(z.object({ name: z.string() })), async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const condition = await prisma.patientCondition.create({
    data: { patientId: patient.id, name: req.body.name },
  });
  res.status(201).json(condition);
});

router.delete('/conditions/:id', async (req, res) => {
  await prisma.patientCondition.delete({ where: { id: req.params.id } });
  res.json({ message: 'Condition removed' });
});

// POST /patients/allergies
router.post(
  '/allergies',
  validate(z.object({ name: z.string(), severity: z.string().optional() })),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    const allergy = await prisma.patientAllergy.create({
      data: { patientId: patient.id, name: req.body.name, severity: req.body.severity || 'MODERATE' },
    });
    res.status(201).json(allergy);
  }
);

router.delete('/allergies/:id', async (req, res) => {
  await prisma.patientAllergy.delete({ where: { id: req.params.id } });
  res.json({ message: 'Allergy removed' });
});

// Emergency contacts
router.get('/emergency-contacts', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const contacts = await prisma.emergencyContact.findMany({ where: { patientId: patient.id } });
  res.json(contacts);
});

router.post(
  '/emergency-contacts',
  validate(z.object({ name: z.string(), phone: z.string().min(10), relation: z.string() })),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    const contact = await prisma.emergencyContact.create({
      data: { patientId: patient.id, ...req.body },
    });
    res.status(201).json(contact);
  }
);

router.delete('/emergency-contacts/:id', async (req, res) => {
  await prisma.emergencyContact.delete({ where: { id: req.params.id } });
  res.json({ message: 'Contact removed' });
});

// Family members
router.get('/family', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const members = await prisma.familyMember.findMany({ where: { patientId: patient.id } });
  res.json(members);
});

router.post(
  '/family',
  validate(
    z.object({
      name: z.string(),
      relation: z.string(),
      phone: z.string().optional(),
      bloodGroup: z.string().optional(),
      dateOfBirth: z.string().optional(),
    })
  ),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    const member = await prisma.familyMember.create({
      data: {
        patientId: patient.id,
        ...req.body,
        ...(req.body.dateOfBirth && { dateOfBirth: new Date(req.body.dateOfBirth) }),
      },
    });
    res.status(201).json(member);
  }
);

router.delete('/family/:id', async (req, res) => {
  await prisma.familyMember.delete({ where: { id: req.params.id } });
  res.json({ message: 'Family member removed' });
});

// GET /patients/streak
router.get('/streak', async (req, res) => {
  const patient = await prisma.patient.findUnique({
    where: { userId: req.user.sub },
    select: { streakDays: true, badgeCount: true, lastActivityAt: true },
  });
  res.json(patient);
});

// POST /patients/streak/checkin — call once per day to update streak
router.post('/streak/checkin', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const now = new Date();
  const last = patient.lastActivityAt;
  const daysSinceLast = last ? Math.floor((now - last) / 86400000) : null;

  let streakDays = patient.streakDays;
  if (daysSinceLast === null || daysSinceLast === 1) streakDays += 1;
  else if (daysSinceLast > 1) streakDays = 1;

  const badgeCount = Math.floor(streakDays / 7); // badge per 7-day streak

  const updated = await prisma.patient.update({
    where: { id: patient.id },
    data: { streakDays, lastActivityAt: now, badgeCount },
    select: { streakDays: true, badgeCount: true, lastActivityAt: true },
  });
  res.json(updated);
});

module.exports = router;
