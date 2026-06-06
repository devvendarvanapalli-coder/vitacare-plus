/* VitaCare Plus — App shell: post-login tab navigation with center SOS button,
 * plus pushed screens (membership, sos) with a back header. */

function TopBar({ title, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
      <button onClick={onBack} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
        <Icon name="arrow_back" size={22} color="var(--text-primary)" />
      </button>
      <span style={{ fontSize: 18, fontWeight: 700 }}>{title}</span>
    </div>
  );
}

function EmptyTab({ icon, title, sub }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: 40, textAlign: 'center' }}>
      <div style={{ width: 64, height: 64, borderRadius: 'var(--r-2xl)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={30} color="var(--primary)" />
      </div>
      <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 240, lineHeight: 1.5 }}>{sub}</div>
    </div>
  );
}

function ModulesTab() {
  return (
    <div style={{ padding: '14px 20px 24px' }}>
      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3, marginBottom: 16 }}>Health Modules</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {VC_MODULES.map(([name, ico, color]) => (
          <Card key={name} onClick={() => {}} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--r-xl)', background: `color-mix(in srgb, ${color} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={ico} size={22} color={color} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Track &amp; manage</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ProfileTab() {
  return (
    <div style={{ padding: '20px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar initials="RK" size={64} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Rohan Kapoor</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>+91 99999 99999</div>
          <div style={{ marginTop: 6 }}><Badge status="gold" dot={false}>Gold Member</Badge></div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
        {[['person', 'Personal Details'], ['favorite', 'Health Profile'], ['description', 'My Reports'], ['credit_card', 'Billing & Payments'], ['notifications', 'Notifications'], ['settings', 'Settings'], ['logout', 'Sign Out']].map(([ico, lbl]) => (
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

function BottomNav({ tab, onTab, onSos }) {
  const items = [['home', 'Home', 'home'], ['grid_view', 'Modules', 'modules'], null, ['calendar_today', 'Appts', 'appts'], ['person', 'Profile', 'profile']];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', height: 72, paddingBottom: 4, background: 'var(--surface)', borderTop: '1px solid var(--border)', boxShadow: 'var(--shadow-nav)', position: 'relative' }}>
      {items.map((it, i) => {
        if (!it) {
          return (
            <div key="sos" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 6 }}>
              <button onClick={onSos} style={{ width: 52, height: 52, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'var(--grad-sos)', boxShadow: 'var(--shadow-sos)', color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: 0.5 }}>SOS</button>
              <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--vc-sos)', marginTop: 3 }}>Emergency</span>
            </div>
          );
        }
        const [ico, lbl, id] = it;
        const active = tab === id;
        return (
          <button key={id} onClick={() => onTab(id)} style={{ flex: 1, appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingTop: 12 }}>
            <Icon name={ico} size={22} fill={active ? 1 : 0} color={active ? 'var(--primary)' : 'var(--text-secondary)'} />
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, color: active ? 'var(--primary)' : 'var(--text-secondary)' }}>{lbl}</span>
          </button>
        );
      })}
    </div>
  );
}

function App() {
  const [authed, setAuthed] = React.useState(false);
  const [tab, setTab] = React.useState('home');
  const [push, setPush] = React.useState(null); // 'membership' | 'sos'

  if (!authed) {
    return <IOSDevice><LoginScreen onLogin={() => setAuthed(true)} /></IOSDevice>;
  }

  let body, topBar = null, showNav = true;
  if (push === 'membership') { body = <MembershipScreen />; topBar = <TopBar title="Membership Plans" onBack={() => setPush(null)} />; showNav = false; }
  else if (push === 'sos') { body = <SosScreen />; topBar = <TopBar title="Emergency SOS" onBack={() => setPush(null)} />; showNav = false; }
  else if (tab === 'home') body = <DashboardScreen onOpenMembership={() => setPush('membership')} onOpenAppointments={() => setTab('appts')} />;
  else if (tab === 'modules') body = <ModulesTab />;
  else if (tab === 'appts') body = <AppointmentsScreen />;
  else if (tab === 'profile') body = <ProfileTab />;

  return (
    <IOSDevice>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
        <div style={{ height: 50, flexShrink: 0 }} />
        {topBar}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>{body}</div>
        {showNav && <BottomNav tab={tab} onTab={setTab} onSos={() => setPush('sos')} />}
        <div style={{ height: 20, flexShrink: 0, background: showNav ? 'var(--surface)' : 'var(--bg)' }} />
      </div>
    </IOSDevice>
  );
}

Object.assign(window, { App });
