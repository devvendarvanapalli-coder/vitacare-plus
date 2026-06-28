require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding VitaCare Plus database...');

  // ─── Community Groups ──────────────────────────────────────────────────────
  const groups = [
    { name: 'Diabetes Warriors', slug: 'diabetes', description: 'Share tips on blood sugar control, meal plans, and living well with diabetes.', icon: 'water_drop', color: '#2563EB', condition: 'Diabetes' },
    { name: 'Arthritis Support', slug: 'arthritis', description: 'Joint pain management, physiotherapy tips, and emotional support.', icon: 'accessibility_new', color: '#7C3AED', condition: 'Arthritis' },
    { name: 'Heart & BP Club', slug: 'hypertension', description: 'Track BP together. Salt-free recipes, yoga tips, medication reminders.', icon: 'favorite', color: '#DC2626', condition: 'Hypertension' },
    { name: 'Anemia Awareness', slug: 'anemia', description: 'Iron-rich foods, haemoglobin tracking, community stories and support.', icon: 'bloodtype', color: '#EA580C', condition: 'Anemia' },
    { name: 'Vitamin D & Bone Health', slug: 'vitamin-d', description: 'Sunlight routines, supplements, calcium intake, and bone density discussions.', icon: 'wb_sunny', color: '#F59E0B', condition: 'Vitamin D' },
    { name: "Women's Wellness Circle", slug: 'womens-health', description: 'PCOS, thyroid, hormonal health, and women-specific chronic disease management.', icon: 'female', color: '#EC4899', condition: "Women's Health" },
  ];

  for (const g of groups) {
    await prisma.communityGroup.upsert({ where: { slug: g.slug }, create: g, update: g });
  }
  console.log('✅ Community groups created');

  // ─── Demo Doctor ───────────────────────────────────────────────────────────
  const doctorUser = await prisma.user.upsert({
    where: { phone: '+91 97777 77777' },
    create: { phone: '+91 97777 77777', name: 'Dr. Priya Sharma', email: 'priya@vitacare.in', role: 'DOCTOR' },
    update: {},
  });
  await prisma.doctor.upsert({
    where: { userId: doctorUser.id },
    create: {
      userId: doctorUser.id,
      specialty: 'Diabetologist',
      licenseNo: 'MCI-2018-DL-12345',
      consultationFee: 500,
      bio: 'Specialist in Type 2 Diabetes and metabolic disorders. 8 years experience at Apollo Hospitals, Delhi.',
      experienceYears: 8,
      rating: 4.8,
      totalReviews: 127,
      verified: true,
    },
    update: {},
  });

  const drNairUser = await prisma.user.upsert({
    where: { phone: '+91 96666 66666' },
    create: { phone: '+91 96666 66666', name: 'Dr. Arjun Nair', email: 'arjun@vitacare.in', role: 'DOCTOR' },
    update: {},
  });
  await prisma.doctor.upsert({
    where: { userId: drNairUser.id },
    create: {
      userId: drNairUser.id,
      specialty: 'Orthopaedics',
      licenseNo: 'MCI-2015-MH-98765',
      consultationFee: 700,
      bio: 'Consultant Orthopaedic Surgeon. Specialises in knee replacement, fracture management, and sports injuries.',
      experienceYears: 11,
      rating: 4.9,
      totalReviews: 89,
      verified: true,
    },
    update: {},
  });
  console.log('✅ Demo doctors created');

  // ─── Demo Patient ──────────────────────────────────────────────────────────
  const patientUser = await prisma.user.upsert({
    where: { phone: '+91 99999 99999' },
    create: { phone: '+91 99999 99999', name: 'Rohan Kapoor', email: 'rohan@example.com', role: 'PATIENT' },
    update: {},
  });

  const patient = await prisma.patient.upsert({
    where: { userId: patientUser.id },
    create: {
      userId: patientUser.id,
      bloodGroup: 'O+',
      dateOfBirth: new Date('1991-03-12'),
      gender: 'Male',
      membershipTier: 'GOLD',
      membershipExpiry: new Date('2026-12-31'),
      streakDays: 12,
      badgeCount: 3,
      lastActivityAt: new Date(),
    },
    update: {},
  });

  // Conditions
  await prisma.patientCondition.deleteMany({ where: { patientId: patient.id } });
  await prisma.patientCondition.createMany({
    data: [
      { patientId: patient.id, name: 'Type 2 Diabetes' },
      { patientId: patient.id, name: 'Hypertension' },
    ],
  });

  // Allergies
  await prisma.patientAllergy.deleteMany({ where: { patientId: patient.id } });
  await prisma.patientAllergy.createMany({
    data: [
      { patientId: patient.id, name: 'Penicillin', severity: 'SEVERE' },
      { patientId: patient.id, name: 'Sulfa drugs', severity: 'MODERATE' },
    ],
  });

  // Emergency contacts
  await prisma.emergencyContact.deleteMany({ where: { patientId: patient.id } });
  await prisma.emergencyContact.createMany({
    data: [
      { patientId: patient.id, name: 'Sunita Kapoor', phone: '+91 98888 88888', relation: 'Spouse' },
      { patientId: patient.id, name: 'Dr. Priya Sharma', phone: '+91 97777 77777', relation: 'Primary Doctor' },
    ],
  });

  // Medications
  await prisma.medication.deleteMany({ where: { patientId: patient.id } });
  await prisma.medication.createMany({
    data: [
      { patientId: patient.id, name: 'Metformin 500mg', dose: '500mg', frequency: 'twice_daily', timing: 'morning', withFood: true, prescribedBy: 'Dr. Priya Sharma' },
      { patientId: patient.id, name: 'Glimepiride 2mg', dose: '2mg', frequency: 'once_daily', timing: 'morning', withFood: false, prescribedBy: 'Dr. Priya Sharma' },
      { patientId: patient.id, name: 'Telmisartan 40mg', dose: '40mg', frequency: 'once_daily', timing: 'night', withFood: false, prescribedBy: 'Dr. Priya Sharma' },
    ],
  });

  // Health metrics (last 30 days of HbA1c + blood sugar)
  await prisma.healthMetric.deleteMany({ where: { patientId: patient.id } });
  const metricData = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    metricData.push({ patientId: patient.id, type: 'BLOOD_SUGAR', value: String(Math.round(118 + Math.random() * 30)), unit: 'mg/dL', recordedAt: d });
  }
  metricData.push({ patientId: patient.id, type: 'HBAIC', value: '6.8', unit: '%', recordedAt: new Date() });
  metricData.push({ patientId: patient.id, type: 'BLOOD_PRESSURE', value: '128/82', unit: 'mmHg', recordedAt: new Date() });
  metricData.push({ patientId: patient.id, type: 'WEIGHT', value: '74.5', unit: 'kg', recordedAt: new Date() });
  await prisma.healthMetric.createMany({ data: metricData });

  // Family members
  await prisma.familyMember.deleteMany({ where: { patientId: patient.id } });
  await prisma.familyMember.createMany({
    data: [
      { patientId: patient.id, name: 'Sunita Kapoor', relation: 'Spouse', phone: '+91 98888 88888', bloodGroup: 'A+', dateOfBirth: new Date('1993-07-18') },
      { patientId: patient.id, name: 'Arjun Kapoor', relation: 'Son', phone: null, bloodGroup: 'O+', dateOfBirth: new Date('2017-02-03') },
    ],
  });
  console.log('✅ Demo patient seeded');

  // ─── Demo Community Posts ──────────────────────────────────────────────────
  const diabetesGroup = await prisma.communityGroup.findUnique({ where: { slug: 'diabetes' } });
  const vitdGroup = await prisma.communityGroup.findUnique({ where: { slug: 'vitamin-d' } });

  const postCount = await prisma.communityPost.count({ where: { authorId: patient.id } });
  if (postCount === 0) {
    await prisma.communityPost.createMany({
      data: [
        { groupId: diabetesGroup.id, authorId: patient.id, content: 'My HbA1c dropped from 8.2% to 6.8% in 3 months using the app\'s logging feature! Walking 30 min every evening made a huge difference. 🎉' },
        { groupId: diabetesGroup.id, authorId: patient.id, content: 'Meal prep Sunday tip: Made bitter gourd sabzi, methi roti, and moong dal. Glucose only went to 132 after this meal! Highly recommend.' },
        { groupId: vitdGroup.id, authorId: patient.id, content: 'Doctor prescribed Vitamin D3 60,000 IU weekly. Anyone else on this dose? How long until you saw improvement in energy levels?' },
      ],
    });
  }

  // Join the diabetes group
  await prisma.communityMember.upsert({
    where: { groupId_patientId: { groupId: diabetesGroup.id, patientId: patient.id } },
    create: { groupId: diabetesGroup.id, patientId: patient.id },
    update: {},
  });
  await prisma.communityMember.upsert({
    where: { groupId_patientId: { groupId: vitdGroup.id, patientId: patient.id } },
    create: { groupId: vitdGroup.id, patientId: patient.id },
    update: {},
  });
  console.log('✅ Community posts and memberships seeded');

  console.log('\n🎉 Seed complete! Demo credentials:');
  console.log('   Patient phone: +91 99999 99999');
  console.log('   Doctor phone:  +91 97777 77777');
  console.log('   OTP is logged to console in dev mode');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
