// OTP service — provider is selected via OTP_PROVIDER env var.
// "console" → logs the OTP to stdout (for development / demo)
// "msg91"   → sends SMS via MSG91 (production)

const crypto = require('crypto');

function generateCode(length = 6) {
  return String(crypto.randomInt(10 ** (length - 1), 10 ** length));
}

async function sendOtp(phone, code) {
  const provider = process.env.OTP_PROVIDER || 'console';

  if (provider === 'console') {
    console.log(`\n📱 OTP for ${phone}: ${code}\n`);
    return;
  }

  if (provider === 'msg91') {
    // Production: swap in your MSG91 auth key + template ID
    const res = await fetch('https://api.msg91.com/api/v5/otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authkey: process.env.MSG91_AUTH_KEY },
      body: JSON.stringify({
        template_id: process.env.MSG91_TEMPLATE_ID,
        mobile: `91${phone.replace(/\D/g, '')}`,
        otp: code,
      }),
    });
    if (!res.ok) throw new Error('MSG91 send failed');
    return;
  }

  throw new Error(`Unknown OTP_PROVIDER: ${provider}`);
}

module.exports = { generateCode, sendOtp };
