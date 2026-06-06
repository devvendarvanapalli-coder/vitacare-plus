/* VitaCare Plus — Doctor App shell: bottom nav + screen routing */

const DOC_NAV = [
  { icon: 'home',          label: 'Schedule' },
  { icon: 'people',        label: 'Patients' },
  { icon: 'description',   label: 'Rx' },
  { icon: 'person',        label: 'Profile' },
];

function ProfileTab() {
  return (
    <div style={{ padding: '20px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
        <Avatar initials="PS" gradient="teal" size={64} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Dr. Priya Sharma</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Diabetologist · MBBS, MD</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Reg. No. MCI-2891234</div>
        </div>
      </div>
      <Card gradient="teal" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {[['127','Patients'],['4.9','Rating'],['8','Yrs Exp']].map(([v,l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{v}</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[['schedule','My Schedule'],['workspace_premium','Subscription'],['notifications','Notifications'],['settings','Settings'],['logout','Sign Out']].map(([ico, lbl]) => (
          <Card key={lbl} onClick={() => {}} padding={0} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px' }}>
            <Icon name={ico} size={20} color="var(--text-secondary)" />
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{lbl}</span>
            <Icon name="chevron_right" size={20} color="var(--text-hint)" />
          </Card>
        ))}
      </div>
    </div>
  );
}

function RxListTab({ onNew }) {
  const items = [
    { patient: 'Rohan Kapoor', date: 'Jun 9, 2025', count: 3 },
    { patient: 'Suresh Kumar', date: 'Jun 9, 2025', count: 2 },
    { patient: 'Preethi Rajan', date: 'Jun 8, 2025', count: 1 },
    { patient: 'Vikram Nair', date: 'Jun 7, 2025', count: 2 },
  ];
  return (
    <div style={{ padding: '20px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 24, fontWeight: 700, flex: 1, letterSpacing: -0.3 }}>Prescriptions</span>
        <Button variant="primary" size="sm" leadingIcon="add" onClick={onNew}>New Rx</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(r => (
          <Card key={r.patient} onClick={() => {}} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="description" size={20} color="var(--primary)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{r.patient}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{r.count} medication{r.count > 1 ? 's' : ''} · {r.date}</div>
            </div>
            <Icon name="chevron_right" size={18} color="var(--text-hint)" />
          </Card>
        ))}
      </div>
    </div>
  );
}

function DoctorNav({ tab, onTab }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', background: 'var(--surface)', borderTop: '1px solid var(--border)', boxShadow: 'var(--shadow-nav)' }}>
      {DOC_NAV.map((item, i) => {
        const active = tab === i;
        return (
          <button key={i} onClick={() => onTab(i)}
            style={{ flex: 1, appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '10px 4px 14px', fontFamily: 'var(--font-sans)', WebkitTapHighlightColor: 'transparent' }}>
            <Icon name={item.icon} size={24} fill={active} color={active ? 'var(--primary)' : 'var(--text-hint)'} />
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, color: active ? 'var(--primary)' : 'var(--text-secondary)' }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function DoctorApp() {
  const [tab, setTab] = React.useState(0);
  const [push, setPush] = React.useState(null); // { screen: 'consultation'|'rx', data }

  if (push) {
    if (push.screen === 'consultation') {
      return (
        <IOSDevice>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
            <div style={{ height: 50, flexShrink: 0 }} />
            <ConsultationScreen
              patient={push.data}
              onBack={() => setPush(null)}
              onWriteRx={() => setPush({ screen: 'rx', data: push.data })}
            />
          </div>
        </IOSDevice>
      );
    }
    if (push.screen === 'rx') {
      return (
        <IOSDevice>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
            <div style={{ height: 50, flexShrink: 0 }} />
            <RxScreen patient={push.data} onBack={() => setPush(null)} />
          </div>
        </IOSDevice>
      );
    }
  }

  let body;
  if (tab === 0) body = <ScheduleScreen onOpenConsultation={d => setPush({ screen: 'consultation', data: d })} />;
  else if (tab === 1) body = <PatientsScreen onOpenConsultation={d => setPush({ screen: 'consultation', data: d })} />;
  else if (tab === 2) body = <RxListTab onNew={() => setPush({ screen: 'rx', data: {} })} />;
  else body = <ProfileTab />;

  return (
    <IOSDevice>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        <div style={{ height: 50, flexShrink: 0 }} />
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>{body}</div>
        <DoctorNav tab={tab} onTab={setTab} />
        <div style={{ height: 20, flexShrink: 0, background: 'var(--surface)' }} />
      </div>
    </IOSDevice>
  );
}

Object.assign(window, { DoctorApp });
