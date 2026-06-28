const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { generateCode, sendOtp } = require('../lib/otp');
const { issueTokenPair, verifyRefresh } = require('../lib/jwt');
const { validate } = require('../middleware/validate');

const OTP_TTL_MS = 5 * 60 * 1000; // 5 minutes

// POST /auth/otp/send
router.post('/otp/send', validate(z.object({ phone: z.string().min(10) })), async (req, res) => {
  const { phone } = req.body;

  let user = await prisma.user.findUnique({ where: { phone } });
  if (!user) {
    user = await prisma.user.create({
      data: { phone },
      include: { patient: true },
    });
    // auto-create patient profile for new users
    await prisma.patient.create({ data: { userId: user.id } });
  }

  // Invalidate old OTPs
  await prisma.otp.updateMany({ where: { userId: user.id, used: false }, data: { used: true } });

  const code = generateCode(6);
  await prisma.otp.create({
    data: { userId: user.id, code, expiresAt: new Date(Date.now() + OTP_TTL_MS) },
  });

  await sendOtp(phone, code);
  res.json({ message: `OTP sent to ${phone}`, ...(process.env.NODE_ENV !== 'production' && { _devCode: code }) });
});

// POST /auth/otp/verify
router.post(
  '/otp/verify',
  validate(z.object({ phone: z.string().min(10), code: z.string().length(6) })),
  async (req, res) => {
    const { phone, code } = req.body;

    const user = await prisma.user.findUnique({
      where: { phone },
      include: { patient: true, doctor: true },
    });
    if (!user) return res.status(404).json({ error: 'Phone number not registered' });

    const otp = await prisma.otp.findFirst({
      where: { userId: user.id, code, used: false, expiresAt: { gt: new Date() } },
    });
    if (!otp) return res.status(401).json({ error: 'Invalid or expired OTP' });

    await prisma.otp.update({ where: { id: otp.id }, data: { used: true } });

    const tokens = issueTokenPair(user);
    res.json({
      ...tokens,
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name,
        role: user.role,
        hasProfile: !!(user.patient || user.doctor),
      },
    });
  }
);

// POST /auth/refresh
router.post('/refresh', validate(z.object({ refreshToken: z.string() })), async (req, res) => {
  try {
    const payload = verifyRefresh(req.body.refreshToken);
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) return res.status(401).json({ error: 'User not found' });
    res.json(issueTokenPair(user));
  } catch {
    res.status(401).json({ error: 'Refresh token expired or invalid' });
  }
});

// GET /auth/me
const { requireAuth } = require('../middleware/auth');
router.get('/me', requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.sub },
    include: {
      patient: {
        include: {
          conditions: true,
          allergies: true,
          emergencyContacts: true,
        },
      },
      doctor: true,
    },
  });
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

module.exports = router;
