const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

// GET /medications — active medications
router.get('/', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const meds = await prisma.medication.findMany({
    where: { patientId: patient.id, ...(req.query.active !== 'false' && { active: true }) },
    include: {
      logs: {
        where: {
          takenAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lt: new Date(new Date().setHours(23, 59, 59, 999)),
          },
        },
      },
    },
    orderBy: { createdAt: 'asc' },
  });
  res.json(meds);
});

// POST /medications
router.post(
  '/',
  validate(
    z.object({
      name: z.string(),
      dose: z.string(),
      frequency: z.string(),
      timing: z.string().optional(),
      withFood: z.boolean().optional(),
      prescribedBy: z.string().optional(),
      startDate: z.string().optional(),
      endDate: z.string().optional(),
    })
  ),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    const med = await prisma.medication.create({
      data: {
        patientId: patient.id,
        ...req.body,
        ...(req.body.startDate && { startDate: new Date(req.body.startDate) }),
        ...(req.body.endDate && { endDate: new Date(req.body.endDate) }),
      },
    });
    res.status(201).json(med);
  }
);

// PUT /medications/:id
router.put('/:id', async (req, res) => {
  const med = await prisma.medication.update({
    where: { id: req.params.id },
    data: {
      ...req.body,
      ...(req.body.startDate && { startDate: new Date(req.body.startDate) }),
      ...(req.body.endDate && { endDate: new Date(req.body.endDate) }),
    },
  });
  res.json(med);
});

router.delete('/:id', async (req, res) => {
  await prisma.medication.update({ where: { id: req.params.id }, data: { active: false } });
  res.json({ message: 'Medication discontinued' });
});

// POST /medications/:id/log — mark taken/missed/skipped
router.post(
  '/:id/log',
  validate(z.object({ status: z.enum(['TAKEN', 'MISSED', 'SKIPPED']), notes: z.string().optional() })),
  async (req, res) => {
    const log = await prisma.medicationLog.create({
      data: { medicationId: req.params.id, status: req.body.status, notes: req.body.notes },
    });
    res.status(201).json(log);
  }
);

// GET /medications/:id/logs — log history
router.get('/:id/logs', async (req, res) => {
  const days = Math.min(Number(req.query.days) || 7, 30);
  const since = new Date(Date.now() - days * 86400000);
  const logs = await prisma.medicationLog.findMany({
    where: { medicationId: req.params.id, takenAt: { gte: since } },
    orderBy: { takenAt: 'desc' },
  });
  res.json(logs);
});

module.exports = router;
