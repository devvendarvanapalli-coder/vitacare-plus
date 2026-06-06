/* VitaCare Plus — Doctor app: Today's Schedule screen */

const DR_SCHEDULE = [
  { patient: 'Rohan Kapoor',   initials: 'RK', specialty: 'Diabetes — HbA1c review',    time: '10:00 AM', type: 'video',     status: 'upcoming' },
  { patient: 'Anjali Mehta',   initials: 'AM', specialty: 'Anemia follow-up',             time: '11:30 AM', type: 'in-clinic', status: 'upcoming' },
  { patient: 'Vikram Nair',    initials: 'VN', specialty: 'Vitamin D deficiency',         time: '2:00 PM',  type: 'video',     status: 'upcoming' },
  { patient: 'Sunita Verma',   initials: 'SV', specialty: 'Arthritis management',         time: '3:30 PM',  type: 'in-clinic', status: 'upcoming' },
];

const DR_PAST = [
  { patient: 'Suresh Kumar',   initials: 'SK', specialty: 'Monthly diabetes checkup',     time: '9:00 AM',  type: 'video',     status: 'done' },
  { patient: 'Preethi Rajan',  initials: 'PR', specialty: 'Blood pressure monitoring',    time: '9:45 AM',  type: 'in-clinic', status: 'done' },
];

function ScheduleScreen({ onOpenConsultation }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' });
  return (
    <div style={{ paddingBottom: 24 }}>
      {/* Header */}
      <div style={{ padding: '14px 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{dateStr}</div>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>Good Morning, Dr. Priya</div>
        </div>
        <button style={{ appearance: 'none', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}>
          <Icon name="notifications" size={20} color="var(--text-secondary)" />
          <span style={{ position: 'absolute', top: 9, right: 9, width: 7, height: 7, borderRadius: '50%', background: 'var(--error)' }} />
        </button>
        <Avatar initials="PS" gradient="teal" size={40} />
      </div>

      {/* Quick stats */}
      <div style={{ display: 'flex', gap: 10, padding: '14px 20px 0' }}>
        <QuickStat value="12" label="Today" color="var(--primary)" />
        <QuickStat value="2" label="Done" color="var(--success)" />
        <QuickStat value="4" label="Upcoming" color="var(--warning)" />
        <QuickStat value="2" label="Rx Due" color="var(--vc-weight-purple, #7C3AED)" />
      </div>

      {/* Upcoming */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Upcoming" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {DR_SCHEDULE.map(a => (
            <AppointmentCard key={a.patient} {...a} onTap={() => onOpenConsultation(a)} />
          ))}
        </div>
      </div>

      {/* Completed */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Completed" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {DR_PAST.map(a => (
            <AppointmentCard key={a.patient} {...a} onTap={() => onOpenConsultation(a)} />
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScheduleScreen });
