const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

// POST /sos/trigger — log an SOS event, alert emergency contacts
router.post(
  '/trigger',
  validate(
    z.object({
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      address: z.string().optional(),
    })
  ),
  async (req, res) => {
    const patient = await prisma.patient.findUnique({
      where: { userId: req.user.sub },
      include: {
        user: { select: { name: true, phone: true } },
        emergencyContacts: true,
        conditions: true,
        allergies: true,
      },
    });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });

    const { latitude, longitude, address } = req.body;

    // In production: send SMS/WhatsApp to each emergency contact via MSG91
    const alertsSent = patient.emergencyContacts.map((c) => ({
      name: c.name,
      phone: c.phone,
      relation: c.relation,
      // SMS would be: "URGENT: {patient.user.name} needs help! Location: {address}"
      status: 'SENT (demo)',
    }));

    console.log(`🚨 SOS triggered by ${patient.user.name} (${patient.user.phone})`);
    if (latitude) console.log(`   📍 Location: ${latitude}, ${longitude}`);
    console.log(`   Alerts sent to: ${patient.emergencyContacts.map((c) => c.name).join(', ')}`);

    res.json({
      message: 'SOS triggered successfully',
      patient: {
        name: patient.user.name,
        phone: patient.user.phone,
        bloodGroup: patient.bloodGroup,
        conditions: patient.conditions.map((c) => c.name),
        allergies: patient.allergies.map((a) => a.name),
      },
      location: latitude ? { latitude, longitude, address } : null,
      alertsSent,
      emergencyNumber: '108',
    });
  }
);

// GET /sos/passport — return medical info for Health Passport / QR display
router.get('/passport', async (req, res) => {
  const patient = await prisma.patient.findUnique({
    where: { userId: req.user.sub },
    include: {
      user: { select: { name: true, phone: true } },
      conditions: true,
      allergies: true,
      emergencyContacts: true,
      medications: { where: { active: true } },
    },
  });
  if (!patient) return res.status(404).json({ error: 'Patient not found' });

  res.json({
    name: patient.user.name,
    phone: patient.user.phone,
    bloodGroup: patient.bloodGroup,
    gender: patient.gender,
    dateOfBirth: patient.dateOfBirth,
    conditions: patient.conditions.map((c) => c.name),
    allergies: patient.allergies.map((a) => ({ name: a.name, severity: a.severity })),
    medications: patient.medications.map((m) => ({ name: m.name, dose: m.dose, frequency: m.frequency })),
    emergencyContacts: patient.emergencyContacts,
  });
});

// GET /sos/passport/qr — generate QR code PNG pointing to passport URL
router.get('/passport/qr', async (req, res) => {
  const QRCode = require('qrcode');
  const baseUrl = process.env.APP_URL || `http://localhost:${process.env.PORT || 4000}`;
  const url = `${baseUrl}/api/sos/passport?userId=${req.user.sub}`;
  const qr = await QRCode.toDataURL(url, { errorCorrectionLevel: 'H', margin: 2, width: 300 });
  res.json({ qrDataUrl: qr, passportUrl: url });
});

module.exports = router;
