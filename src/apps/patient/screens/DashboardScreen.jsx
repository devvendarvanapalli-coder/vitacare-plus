import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Avatar } from '../../../components/Avatar';
import { SectionHeader } from '../../../components/SectionHeader';
import { MetricCard } from '../../../components/MetricCard';

export const VC_MODULES = [
  ['Diabetes', 'water_drop', '#2563EB'],
  ['Vitamin D', 'wb_sunny', '#F59E0B'],
  ['Arthritis', 'accessibility_new', '#7C3AED'],
  ['Anemia', 'bloodtype', '#DC2626'],
  ['Ortho', 'directions_walk', '#059669'],
  ['Hair', 'face', '#D97706'],
  ["Women's", 'favorite', '#EC4899'],
  ['Reports', 'description', '#0D9488'],
];

const VC_MEDS = [
  ['Metformin 500mg', '1 tablet · 9:00 AM', true, 'medication'],
  ['Glimepiride 2mg', '1 tablet · 8:00 AM', true, 'medication'],
  ['Vitamin D3 60k', '1 capsule · 2:00 PM', false, 'medication_liquid'],
];

function AlertRow({ severity, title, message }) {
  const color = severity === 'critical' ? 'var(--error)' : severity === 'warning' ? 'var(--warning)' : 'var(--primary)';
  const ico = severity === 'critical' ? 'error' : severity === 'warning' ? 'warning' : 'info';
  return (
    <Card padding={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: `color-mix(in srgb, ${color} 12%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={ico} size={18} color={color} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4, marginTop: 2 }}>{message}</div>
      </div>
    </Card>
  );
}

const FAMILY_MEMBERS = [
  { initials: 'RK', name: 'Rohan', relation: 'Me', metrics: { hba1c: '6.8', sugar: '126', weight: '74.5', bp: '128/82' } },
  { initials: 'SK', name: 'Sunita', relation: 'Spouse', metrics: { hba1c: '5.4', sugar: '98', weight: '62.1', bp: '118/76' } },
  { initials: 'AK', name: 'Arjun', relation: 'Son', metrics: { hba1c: '5.1', sugar: '88', weight: '58.0', bp: '112/70' } },
];

export function DashboardScreen({ onOpenMembership, onOpenAppointments }) {
  const [activeMember, setActiveMember] = React.useState(0);
  const member = FAMILY_MEMBERS[activeMember];
  const m = member.metrics;

  return (
    <div style={{ paddingBottom: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px 4px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Good Morning</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>{member.name}</div>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginRight: 10 }}>
          <Icon name="notifications" size={20} color="var(--text-secondary)" />
          <span style={{ position: 'absolute', top: 9, right: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--vc-sos)' }} />
        </div>
        <Avatar initials={member.initials} />
      </div>

      {/* Family switcher */}
      <div style={{ display: 'flex', gap: 8, padding: '8px 20px 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {FAMILY_MEMBERS.map((fm, i) => (
          <button
            key={fm.initials}
            onClick={() => setActiveMember(i)}
            style={{ appearance: 'none', border: `1.5px solid ${activeMember === i ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 'var(--r-pill)', padding: '5px 12px', background: activeMember === i ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'var(--surface)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}
          >
            <Avatar initials={fm.initials} size={22} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: activeMember === i ? 'var(--primary)' : 'var(--text-primary)' }}>{fm.name}</div>
              <div style={{ fontSize: 10, color: 'var(--text-secondary)' }}>{fm.relation}</div>
            </div>
          </button>
        ))}
        <button style={{ appearance: 'none', border: '1.5px dashed var(--border)', borderRadius: 'var(--r-pill)', padding: '5px 14px', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
          <Icon name="person_add" size={16} color="var(--text-secondary)" />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)' }}>Add</span>
        </button>
      </div>

      {/* Streak + Gamification */}
      <div style={{ padding: '12px 20px 0' }}>
        <Card gradient="teal" padding={16} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 26 }}>🔥</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: -0.5 }}>12 Day Streak!</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.78)', marginTop: 2 }}>Log today to keep your streak alive</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 8 }}>
              {[1,2,3,4,5,6,7].map(d => (
                <div key={d} style={{ flex: 1, height: 5, borderRadius: 3, background: d <= 5 ? '#fff' : 'rgba(255,255,255,0.3)' }} />
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
              <Icon name="workspace_premium" size={20} fill={1} color="#F59E0B" />
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>3 badges</div>
          </div>
        </Card>
      </div>

      <div style={{ padding: '8px 20px 0' }}>
        {/* Membership banner */}
        <Card gradient="primary" onClick={onOpenMembership} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="workspace_premium" size={16} fill={1} color="#F59E0B" />
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, color: '#F59E0B' }}>GOLD MEMBER</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>Your plan is active</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.75)' }}>Valid till Dec 31, 2025</div>
          </div>
          <Icon name="chevron_right" size={20} color="rgba(255,255,255,0.7)" />
        </Card>
      </div>

      {/* Health overview */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Health Overview" action="See All" />
      </div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 20px', scrollbarWidth: 'none' }}>
        <MetricCard label="HbA1c" value={m.hba1c} unit="%" icon="water_drop" iconColor="var(--vc-hba1c-teal)" delta={-3.2} deltaLabel="from last month" />
        <MetricCard label="Blood Sugar" value={m.sugar} unit="mg/dL" icon="monitor_heart" iconColor="var(--vc-glucose-blue)" delta={1.4} deltaLabel="fasting" />
        <MetricCard label="Weight" value={m.weight} unit="kg" icon="monitor_weight" iconColor="var(--vc-weight-purple)" />
        <MetricCard label="Blood Pressure" value={m.bp} unit="mmHg" icon="favorite" iconColor="var(--vc-bp-orange)" />
      </div>

      {/* Alerts */}
      <div style={{ padding: '8px 20px 0' }}>
        <SectionHeader title="Active Alerts" action="Dismiss all" />
        <div style={{ marginTop: 12 }}>
          <AlertRow severity="warning" title="Fasting sugar trending up" message="Your last 3 readings are above target. Consider logging your meals." />
        </div>
      </div>

      {/* Upcoming appointment */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Upcoming Appointment" action="View all" onAction={onOpenAppointments} />
        <Card onClick={onOpenAppointments} style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 50, height: 50, borderRadius: 'var(--r-xl)', background: 'var(--grad-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="videocam" size={22} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Dr. Priya Sharma</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Diabetologist</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 6 }}>
              <Icon name="calendar_today" size={12} color="var(--text-secondary)" />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)' }}>Tomorrow</span>
              <Icon name="schedule" size={12} color="var(--text-secondary)" style={{ marginLeft: 8 }} />
              <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>10:00 AM</span>
            </div>
          </div>
          <Badge status="info">Video</Badge>
        </Card>
      </div>

      {/* Medications */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Today's Medications" action="Manage" />
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {VC_MEDS.map(([name, sub, taken, ico]) => (
            <Card key={name} padding={0} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px' }}>
              <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: `color-mix(in srgb, ${taken ? 'var(--success)' : 'var(--warning)'} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={ico} size={18} color={taken ? 'var(--success)' : 'var(--warning)'} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{sub}</div>
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 'var(--r-sm)', color: taken ? 'var(--success)' : 'var(--warning)', background: `color-mix(in srgb, ${taken ? 'var(--success)' : 'var(--warning)'} 10%, transparent)` }}>{taken ? 'Taken' : 'Pending'}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Modules grid */}
      <div style={{ padding: '20px 20px 0' }}>
        <SectionHeader title="Health Modules" action="All" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 14 }}>
          {VC_MODULES.map(([name, ico, color]) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <div style={{ width: 52, height: 52, borderRadius: 'var(--r-xl)', background: `color-mix(in srgb, ${color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={ico} size={22} color={color} />
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', textAlign: 'center' }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
