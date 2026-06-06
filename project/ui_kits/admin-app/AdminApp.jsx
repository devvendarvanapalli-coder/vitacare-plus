/* VitaCare Plus — Admin dashboard App shell: sidebar + routing */

const ADMIN_NAV = [
  { icon: 'home',              label: 'Overview',      id: 'overview' },
  { icon: 'group',             label: 'Users',         id: 'users' },
  { icon: 'calendar_today',    label: 'Appointments',  id: 'appointments' },
  { icon: 'workspace_premium', label: 'Subscriptions', id: 'subscriptions' },
  { icon: 'description',       label: 'Reports',       id: 'reports' },
  { icon: 'settings',          label: 'Settings',      id: 'settings' },
];

function Sidebar({ active, onNav }) {
  return (
    <div style={{
      width: 230, flexShrink: 0, background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      height: '100%', boxSizing: 'border-box',
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-primary)' }}>
            <span className="iconify" data-icon="material-symbols:favorite-rounded" style={{ fontSize: 18, color: '#fff' }} />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: -0.3 }}>VitaCare Plus</div>
            <div style={{ fontSize: 10, color: 'var(--text-secondary)', fontWeight: 500 }}>Admin Dashboard</div>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {ADMIN_NAV.map(item => {
          const isActive = active === item.id;
          return (
            <button key={item.id} onClick={() => onNav(item.id)}
              style={{
                appearance: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 12px', borderRadius: 'var(--r-lg)',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: isActive ? 600 : 500,
                background: isActive ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                transition: 'all var(--dur-medium) var(--ease-std)',
                textAlign: 'left', width: '100%',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg)'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
            >
              <span className="iconify"
                data-icon={`material-symbols:${item.icon.replace(/_/g,'-')}${isActive ? '-rounded' : '-outline-rounded'}`}
                style={{ fontSize: 20, flexShrink: 0 }}
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom: admin user */}
      <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 34, height: 34, borderRadius: 'var(--r-lg)', background: 'var(--grad-sos)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>AD</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Admin User</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>admin@vitacare.in</div>
        </div>
        <span className="iconify" data-icon="material-symbols:logout-rounded" style={{ fontSize: 18, color: 'var(--text-hint)', cursor: 'pointer', flexShrink: 0 }} />
      </div>
    </div>
  );
}

function PlaceholderScreen({ title, icon }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, color: 'var(--text-secondary)' }}>
      <div style={{ width: 60, height: 60, borderRadius: 'var(--r-2xl)', background: 'var(--primary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="iconify" data-icon={`material-symbols:${icon}-rounded`} style={{ fontSize: 28, color: 'var(--primary)' }} />
      </div>
      <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' }}>{title}</div>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>This screen is a placeholder — extend as needed.</div>
    </div>
  );
}

function AdminApp() {
  const [screen, setScreen] = React.useState('overview');

  let content;
  if (screen === 'overview')      content = <OverviewScreen />;
  else if (screen === 'users')    content = <UsersScreen />;
  else if (screen === 'appointments') content = <PlaceholderScreen title="Appointments" icon="calendar-today" />;
  else if (screen === 'subscriptions') content = <PlaceholderScreen title="Subscriptions" icon="workspace-premium" />;
  else if (screen === 'reports')  content = <PlaceholderScreen title="Reports" icon="description" />;
  else                            content = <PlaceholderScreen title="Settings" icon="settings" />;

  return (
    <div style={{ display: 'flex', height: '100%', fontFamily: 'var(--font-sans)', background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <Sidebar active={screen} onNav={setScreen} />
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {content}
      </div>
    </div>
  );
}

Object.assign(window, { AdminApp });
