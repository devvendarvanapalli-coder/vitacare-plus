import React from 'react';
import { IOSDevice } from '../../shared/IOSFrame';
import { Icon } from '../../components/Icon';
import { Card } from '../../components/Card';
import { Badge } from '../../components/Badge';
import { Avatar } from '../../components/Avatar';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { AppointmentsScreen } from './screens/AppointmentsScreen';
import { MembershipScreen } from './screens/MembershipScreen';
import { SosScreen } from './screens/SosScreen';
import { HealthPassportScreen } from './screens/HealthPassportScreen';
import { HealthReportScreen } from './screens/HealthReportScreen';
import { CommunityScreen } from './screens/CommunityScreen';
import { ModulesScreen } from './screens/ModulesScreen';

function TopBar({ title, onBack }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', height: 48, borderBottom: '1px solid var(--border)', background: '#fff' }}>
      <button onClick={onBack} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: 'var(--text-primary)' }}>
        <Icon name="arrow_back" size={20} color="var(--text-primary)" />
      </button>
      <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>{title}</span>
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


function ProfileTab({ onOpenPassport, onOpenCommunity }) {
  return (
    <div style={{ padding: '20px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <Avatar initials="RK" size={64} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Rohan Kapoor</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>+91 99999 99999</div>
          <div style={{ marginTop: 6 }}><Badge status="gold" dot={false}>Free Plan</Badge></div>
        </div>
      </div>

      {/* Streak summary */}
      <div style={{ marginTop: 14, padding: '12px 14px', borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--secondary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--secondary) 20%, transparent)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 24 }}>🔥</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>12 Day Streak</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>3 badges earned · Keep going!</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['🥇', '💊', '📊'].map(b => <span key={b} style={{ fontSize: 18 }}>{b}</span>)}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
        {[
          ['person', 'Personal Details', null],
          ['favorite', 'Health Profile', null],
          ['qr_code', 'Health Passport', onOpenPassport],
          ['description', 'My Reports', null],
          ['groups', 'Community', onOpenCommunity],
          ['credit_card', 'Billing & Payments', null],
          ['notifications', 'Notifications', null],
          ['settings', 'Settings', null],
          ['logout', 'Sign Out', null],
        ].map(([ico, lbl, handler]) => (
          <Card key={lbl} onClick={handler || (() => {})} padding={0} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px' }}>
            <Icon name={ico} size={20} color={handler ? 'var(--primary)' : 'var(--text-secondary)'} />
            <span style={{ flex: 1, fontSize: 14, fontWeight: handler ? 600 : 500, color: handler ? 'var(--text-primary)' : 'var(--text-primary)' }}>{lbl}</span>
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
    <div style={{ display: 'flex', alignItems: 'center', height: 60, background: '#fff', borderTop: '1px solid var(--border)' }}>
      {items.map((it, i) => {
        if (!it) {
          return (
            <div key="sos" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
              <button onClick={onSos} style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer', background: '#DC2626', color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 0.3 }}>SOS</button>
            </div>
          );
        }
        const [ico, lbl, id] = it;
        const active = tab === id;
        return (
          <button key={id} onClick={() => onTab(id)} style={{ flex: 1, appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '8px 0' }}>
            <Icon name={ico} size={20} fill={active ? 1 : 0} color={active ? 'var(--primary)' : 'var(--text-hint)'} />
            <span style={{ fontSize: 10, fontWeight: active ? 600 : 400, color: active ? 'var(--primary)' : 'var(--text-hint)' }}>{lbl}</span>
          </button>
        );
      })}
    </div>
  );
}

export function PatientApp() {
  const [authed, setAuthed] = React.useState(false);
  const [tab, setTab] = React.useState('home');
  const [push, setPush] = React.useState(null); // 'membership' | 'sos' | 'passport' | 'reports' | 'community'

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)' }}>
        <IOSDevice>
          <LoginScreen onLogin={() => setAuthed(true)} />
        </IOSDevice>
      </div>
    );
  }

  let body, topBar = null, showNav = true;
  if (push === 'membership') { body = <MembershipScreen />; topBar = <TopBar title="Membership Plans" onBack={() => setPush(null)} />; showNav = false; }
  else if (push === 'sos') { body = <SosScreen />; topBar = <TopBar title="Emergency SOS" onBack={() => setPush(null)} />; showNav = false; }
  else if (push === 'passport') { body = <HealthPassportScreen />; topBar = <TopBar title="Health Passport" onBack={() => setPush(null)} />; showNav = false; }
  else if (push === 'reports') { body = <HealthReportScreen />; topBar = <TopBar title="Health Reports" onBack={() => setPush(null)} />; showNav = false; }
  else if (push === 'community') { body = <CommunityScreen />; topBar = <TopBar title="Community" onBack={() => setPush(null)} />; showNav = false; }
  else if (tab === 'home') body = <DashboardScreen onOpenMembership={() => setPush('membership')} onOpenAppointments={() => setTab('appts')} onOpenModules={() => setTab('modules')} />;
  else if (tab === 'modules') body = <ModulesScreen />;
  else if (tab === 'appts') body = <AppointmentsScreen />;
  else if (tab === 'profile') body = <ProfileTab onOpenPassport={() => setPush('passport')} onOpenCommunity={() => setPush('community')} />;

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)' }}>
      <IOSDevice>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
          <div style={{ height: 50, flexShrink: 0 }} />
          {topBar}
          <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', background: '#fff' }}>{body}</div>
          {showNav && <BottomNav tab={tab} onTab={setTab} onSos={() => setPush('sos')} />}
          <div style={{ height: 20, flexShrink: 0, background: '#fff' }} />
        </div>
      </IOSDevice>
    </div>
  );
}
