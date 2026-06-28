const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

const METRIC_TYPES = ['HBAIC', 'BLOOD_SUGAR', 'BLOOD_PRESSURE', 'WEIGHT', 'HAEMOGLOBIN', 'VITAMIN_D', 'CHOLESTEROL', 'HEART_RATE', 'SPO2'];

// GET /metrics — latest value per type
router.get('/', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  // Get the latest reading for each metric type
  const latest = await Promise.all(
    METRIC_TYPES.map((type) =>
      prisma.healthMetric.findFirst({
        where: { patientId: patient.id, type },
        orderBy: { recordedAt: 'desc' },
      })
    )
  );
  res.json(latest.filter(Boolean));
});

// GET /metrics/:type — history for one type
router.get('/:type', async (req, res) => {
  const type = req.params.type.toUpperCase();
  if (!METRIC_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid metric type', valid: METRIC_TYPES });

  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const limit = Math.min(Number(req.query.limit) || 30, 100);

  const history = await prisma.healthMetric.findMany({
    where: { patientId: patient.id, type },
    orderBy: { recordedAt: 'desc' },
    take: limit,
  });
  res.json(history);
});

// POST /metrics
router.post(
  '/',
  validate(
    z.object({
      type: z.string(),
      value: z.string(),
      unit: z.string().optional(),
      notes: z.string().optional(),
      recordedAt: z.string().optional(),
    })
  ),
  async (req, res) => {
    const type = req.body.type.toUpperCase();
    if (!METRIC_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid metric type' });

    const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
    const metric = await prisma.healthMetric.create({
      data: {
        patientId: patient.id,
        type,
        value: req.body.value,
        unit: req.body.unit,
        notes: req.body.notes,
        ...(req.body.recordedAt && { recordedAt: new Date(req.body.recordedAt) }),
      },
    });
    res.status(201).json(metric);
  }
);

router.delete('/:id', async (req, res) => {
  await prisma.healthMetric.delete({ where: { id: req.params.id } });
  res.json({ message: 'Metric deleted' });
});

module.exports = router;
