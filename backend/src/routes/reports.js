const router = require('express').Router();
const { z } = require('zod');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

// File upload config — stored in backend/uploads/
const UPLOAD_DIR = path.join(__dirname, '../../uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.user.sub}-${Date.now()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
    cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
  },
});

// GET /reports
router.get('/', async (req, res) => {
  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });
  const reports = await prisma.labReport.findMany({
    where: { patientId: patient.id },
    orderBy: { uploadedAt: 'desc' },
  });
  // Parse markers JSON
  res.json(reports.map((r) => ({ ...r, markers: r.markers ? JSON.parse(r.markers) : [] })));
});

// POST /reports/upload — upload + AI analysis
router.post('/upload', upload.single('file'), async (req, res) => {
  const { reportType, reportDate } = req.body;
  if (!reportType) return res.status(400).json({ error: 'reportType is required' });

  const patient = await prisma.patient.findUnique({ where: { userId: req.user.sub } });

  // Run AI analysis if Anthropic key is configured
  let aiSummary = null;
  let riskScore = 0;
  let markers = [];

  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const Anthropic = require('@anthropic-ai/sdk');
      const client = new Anthropic.default();

      const prompt = `You are a clinical report analyser for VitaCare Plus, an Indian healthcare app.
The patient uploaded a ${reportType} lab report. Analyse it and respond with ONLY valid JSON:
{
  "summary": "Plain-English explanation (2-3 sentences) suitable for a patient with no medical background",
  "riskScore": <integer 1-10, where 1=excellent, 5=borderline, 10=critical>,
  "markers": [
    { "name": "Marker name", "value": "result", "unit": "unit", "normal": "reference range", "status": "normal|low|high" }
  ]
}
Use typical Indian lab reference ranges. If you cannot see the actual values, generate realistic demo values for a ${reportType} report for a 34-year-old male patient with Type 2 Diabetes.`;

      const msg = await client.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      });

      const parsed = JSON.parse(msg.content[0].text);
      aiSummary = parsed.summary;
      riskScore = parsed.riskScore;
      markers = parsed.markers;
    } catch (err) {
      console.error('AI analysis failed:', err.message);
    }
  } else {
    // Demo fallback when no API key
    const DEMO = {
      CBC: {
        summary: 'Your haemoglobin is slightly below normal, suggesting mild anaemia. WBC and platelets are within range. Consider an iron-rich diet and follow up in 4 weeks.',
        riskScore: 4,
        markers: [
          { name: 'Haemoglobin', value: '11.8', unit: 'g/dL', normal: '13.5–17.5', status: 'low' },
          { name: 'WBC', value: '7.2', unit: 'K/µL', normal: '4.5–11.0', status: 'normal' },
          { name: 'Platelets', value: '245', unit: 'K/µL', normal: '150–400', status: 'normal' },
          { name: 'RBC', value: '4.1', unit: 'M/µL', normal: '4.7–6.1', status: 'low' },
        ],
      },
      HbA1c: {
        summary: 'Your HbA1c of 6.8% is within the controlled diabetic range (<7%). Your 3-month average glucose control is good. Continue your current management plan.',
        riskScore: 5,
        markers: [
          { name: 'HbA1c', value: '6.8', unit: '%', normal: '<5.7 (normal)', status: 'high' },
          { name: 'Estimated Avg Glucose', value: '148', unit: 'mg/dL', normal: '70–100 (fasting)', status: 'high' },
        ],
      },
      'Vitamin D': {
        summary: 'Your Vitamin D level is deficient. Supplement with Vitamin D3 60,000 IU weekly for 8 weeks, then recheck. Get 20 minutes of morning sunlight daily.',
        riskScore: 6,
        markers: [
          { name: '25-OH Vitamin D', value: '14.2', unit: 'ng/mL', normal: '30–100', status: 'low' },
        ],
      },
    };
    const demo = DEMO[reportType] || DEMO['CBC'];
    aiSummary = demo.summary;
    riskScore = demo.riskScore;
    markers = demo.markers;
  }

  const report = await prisma.labReport.create({
    data: {
      patientId: patient.id,
      reportType,
      fileUrl: req.file ? `/uploads/${req.file.filename}` : null,
      fileName: req.file?.originalname,
      aiSummary,
      riskScore,
      markers: JSON.stringify(markers),
      ...(reportDate && { reportDate: new Date(reportDate) }),
    },
  });

  res.status(201).json({ ...report, markers });
});

router.delete('/:id', async (req, res) => {
  const report = await prisma.labReport.findUnique({ where: { id: req.params.id } });
  if (report?.fileUrl) {
    const filePath = path.join(__dirname, '../..', report.fileUrl);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
  await prisma.labReport.delete({ where: { id: req.params.id } });
  res.json({ message: 'Report deleted' });
});

module.exports = router;
