/* VitaCare Plus — Appointments (Upcoming/Past tabs) + booking bottom sheet. */

const VC_UPCOMING = [
  ['Dr. Priya Sharma', 'Diabetologist', 'Tomorrow', '10:00 AM', 'video', 'confirmed'],
  ['Dr. Rajesh Gupta', 'Cardiologist', 'In 5 days', '2:30 PM', 'clinic', 'confirmed'],
];
const VC_PAST = [
  ['Dr. Priya Sharma', 'Diabetologist', '15 days ago', '11:00 AM', 'video', 'completed'],
  ['Dr. Meera Patel', 'Ophthalmologist', 'Last month', '4:00 PM', 'clinic', 'completed'],
];

function AppointmentsScreen() {
  const [tab, setTab] = React.useState('upcoming');
  const [sheet, setSheet] = React.useState(false);
  const list = tab === 'upcoming' ? VC_UPCOMING : VC_PAST;
  return (
    <div style={{ minHeight: '100%', position: 'relative' }}>
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3 }}>Appointments</div>
        {/* tabs */}
        <div style={{ display: 'flex', gap: 24, marginTop: 14, borderBottom: '1px solid var(--border)' }}>
          {['upcoming', 'past'].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: tab === t ? 600 : 500, color: tab === t ? 'var(--primary)' : 'var(--text-secondary)', padding: '0 0 10px', borderBottom: `2px solid ${tab === t ? 'var(--primary)' : 'transparent'}`, marginBottom: -1, textTransform: 'capitalize' }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((a, i) => <ApptCard key={i} a={a} />)}
      </div>

      {/* FAB */}
      <button onClick={() => setSheet(true)} style={{ position: 'absolute', right: 20, bottom: 24, height: 52, padding: '0 20px', borderRadius: 'var(--r-pill)', border: 'none', background: 'var(--primary)', color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', boxShadow: 'var(--shadow-primary)' }}>
        <Icon name="add" size={20} color="#fff" />Book
      </button>

      {sheet && <BookSheet onClose={() => setSheet(false)} />}
    </div>
  );
}

function ApptCard({ a }) {
  const [doctor, specialty, day, time, type, status] = a;
  const isVideo = type === 'video';
  const color = isVideo ? 'var(--primary)' : 'var(--secondary)';
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: 'var(--r-xl)', background: `color-mix(in srgb, ${color} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={isVideo ? 'videocam' : 'local_hospital'} size={22} color={color} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{doctor}</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{specialty}</div>
        </div>
        <Badge status={status === 'confirmed' ? 'success' : 'info'}>{status === 'confirmed' ? 'Confirmed' : 'Completed'}</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 12, flexWrap: 'wrap' }}>
        <Icon name="calendar_today" size={14} color="var(--text-secondary)" />
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)' }}>{day}</span>
        <Icon name="schedule" size={14} color="var(--text-secondary)" style={{ marginLeft: 8 }} />
        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{time}</span>
        <Icon name={isVideo ? 'videocam' : 'location_on'} size={14} color="var(--text-secondary)" style={{ marginLeft: 8 }} />
        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{isVideo ? 'Video Call' : 'In-Clinic'}</span>
      </div>
      {status === 'confirmed' && isVideo && (
        <Button variant="primary" size="sm" fullWidth leadingIcon="videocam" style={{ marginTop: 12 }}>Join Video Call</Button>
      )}
    </Card>
  );
}

function BookSheet({ onClose }) {
  const specialties = ['Diabetologist', 'Cardiologist', 'Ophthalmologist', 'Nephrologist', 'Orthopedist'];
  const [spec, setSpec] = React.useState('Diabetologist');
  const [type, setType] = React.useState('video');
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.4)', animation: 'vcfade .2s ease' }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--surface)', borderRadius: '20px 20px 0 0', padding: '12px 20px 28px', animation: 'vcsheet .3s cubic-bezier(.2,.8,.2,1)', maxHeight: '88%', overflowY: 'auto' }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)', margin: '0 auto 16px' }} />
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3 }}>Book Appointment</div>

        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}>Specialty</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {specialties.map((s) => <Chip key={s} selected={spec === s} onClick={() => setSpec(s)}>{s}</Chip>)}
        </div>

        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}>Consultation Type</div>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          {[['video', 'videocam', 'Video Call', 'var(--primary)'], ['clinic', 'local_hospital', 'In-Clinic', 'var(--secondary)']].map(([id, ico, lbl, c]) => (
            <button key={id} onClick={() => setType(id)} style={{ flex: 1, appearance: 'none', cursor: 'pointer', background: type === id ? `color-mix(in srgb, ${c} 8%, transparent)` : 'var(--surface)', border: `${type === id ? 1.5 : 1}px solid ${type === id ? c : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: 14, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <Icon name={ico} size={24} color={type === id ? c : 'var(--text-secondary)'} />
              <span style={{ fontSize: 12, fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>{lbl}</span>
            </button>
          ))}
        </div>

        <Button variant="primary" size="lg" fullWidth style={{ marginTop: 24 }} onClick={onClose}>Confirm Booking</Button>
      </div>
    </div>
  );
}

Object.assign(window, { AppointmentsScreen });
