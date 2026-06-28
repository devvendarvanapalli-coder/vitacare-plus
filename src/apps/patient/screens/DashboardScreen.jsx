import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Avatar } from '../../../components/Avatar';
import { SectionHeader } from '../../../components/SectionHeader';
import { MetricCard } from '../../../components/MetricCard';

export const VC_MODULES = [
  ['Diabetes', '💉', '#2563EB'],
  ['Vitamin D', '☀️', '#F59E0B'],
  ['Arthritis', '🦴', '#7C3AED'],
  ['Anemia', '🩸', '#DC2626'],
  ['Ortho', '🦴', '#059669'],
  ['Hair', '✨', '#D97706'],
  ["Women's", '🌸', '#EC4899'],
  ['Reports', '🔬', '#0D9488'],
];

const VC_MEDS = [
  ['Metformin 500mg', '9:00 AM · With food', true],
  ['Glimepiride 2mg', '8:00 AM · Before breakfast', true],
  ['Vitamin D3 60k', '2:00 PM · Weekly', false],
];

const FAMILY_MEMBERS = [
  { initials: 'RK', name: 'Rohan', relation: 'Me', metrics: { hba1c: '6.8', sugar: '126', weight: '74.5', bp: '128/82' } },
  { initials: 'SK', name: 'Sunita', relation: 'Spouse', metrics: { hba1c: '5.4', sugar: '98', weight: '62.1', bp: '118/76' } },
  { initials: 'AK', name: 'Arjun', relation: 'Son', metrics: { hba1c: '5.1', sugar: '88', weight: '58.0', bp: '112/70' } },
];

function Divider() {
  return <div style={{ height: 1, background: 'var(--border)', margin: '0 20px' }} />;
}

export function DashboardScreen({ onOpenMembership, onOpenAppointments, onOpenModules }) {
  const [activeMember, setActiveMember] = React.useState(0);
  const member = FAMILY_MEMBERS[activeMember];
  const m = member.metrics;

  return (
    <div style={{ paddingBottom: 32, background: '#fff' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px 12px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-hint)', letterSpacing: 0.3, textTransform: 'uppercase' }}>Good morning</div>
          <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.4, color: 'var(--text-primary)', marginTop: 1 }}>{member.name}</div>
        </div>
        <button style={{ appearance: 'none', background: 'none', border: '1px solid var(--border)', borderRadius: 10, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', marginRight: 10 }}>
          <Icon name="notifications" size={18} color="var(--text-secondary)" />
          <span style={{ position: 'absolute', top: 8, right: 8, width: 6, height: 6, borderRadius: '50%', background: '#EF4444', border: '1.5px solid #fff' }} />
        </button>
        <Avatar initials={member.initials} size={38} />
      </div>

      {/* Family switcher */}
      <div style={{ display: 'flex', gap: 6, padding: '0 20px 14px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {FAMILY_MEMBERS.map((fm, i) => (
          <button
            key={fm.initials}
            onClick={() => setActiveMember(i)}
            style={{
              appearance: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px 5px 6px',
              borderRadius: 999, border: `1px solid ${activeMember === i ? 'var(--primary)' : 'var(--border)'}`,
              background: activeMember === i ? 'var(--primary-surface)' : '#fff',
              cursor: 'pointer',
            }}
          >
            <Avatar initials={fm.initials} size={20} />
            <span style={{ fontSize: 12, fontWeight: 500, color: activeMember === i ? 'var(--primary)' : 'var(--text-secondary)' }}>{fm.name}</span>
          </button>
        ))}
        <button style={{ appearance: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 999, border: '1px dashed var(--border)', background: 'transparent', cursor: 'pointer' }}>
          <Icon name="add" size={13} color="var(--text-hint)" />
          <span style={{ fontSize: 12, color: 'var(--text-hint)' }}>Add</span>
        </button>
      </div>

      <Divider />

      {/* Streak — minimal inline strip */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px' }}>
        <span style={{ fontSize: 18 }}>🔥</span>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>12-day streak</span>
          <span style={{ fontSize: 12, color: 'var(--text-hint)', marginLeft: 8 }}>Log today to keep it going</span>
        </div>
        <div style={{ display: 'flex', gap: 3 }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i < 5 ? 'var(--primary)' : 'var(--border)' }} />
          ))}
        </div>
        <span style={{ fontSize: 11, color: 'var(--text-hint)', padding: '3px 8px', borderRadius: 999, border: '1px solid var(--border)' }}>🥇 3 badges</span>
      </div>

      <Divider />

      {/* Membership banner — minimal */}
      <button
        onClick={onOpenMembership}
        style={{ appearance: 'none', display: 'flex', alignItems: 'center', width: '100%', padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 10 }}
      >
        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="workspace_premium" size={16} fill={1} color="#F59E0B" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>Free Plan · Upgrade to Gold</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>₹299/yr — AI insights, teleconsultation & more</div>
        </div>
        <Icon name="chevron_right" size={18} color="var(--text-hint)" />
      </button>

      <Divider />

      {/* Health overview */}
      <div style={{ padding: '16px 20px 0' }}>
        <SectionHeader title="Health Overview" action="History" />
      </div>
      <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '10px 20px', scrollbarWidth: 'none' }}>
        <MetricCard label="HbA1c" value={m.hba1c} unit="%" icon="water_drop" iconColor="var(--vc-hba1c-teal)" delta={-3.2} deltaLabel="vs last month" />
        <MetricCard label="Blood Sugar" value={m.sugar} unit="mg/dL" icon="monitor_heart" iconColor="var(--vc-glucose-blue)" delta={1.4} deltaLabel="fasting" />
        <MetricCard label="Weight" value={m.weight} unit="kg" icon="monitor_weight" iconColor="var(--vc-weight-purple)" />
        <MetricCard label="BP" value={m.bp} unit="mmHg" icon="favorite" iconColor="var(--vc-bp-orange)" />
      </div>

      <Divider />

      {/* Alert — inline, no heavy card */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 20px' }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(217,119,6,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
          <Icon name="warning" size={14} color="#D97706" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>Fasting sugar trending up</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.5 }}>Last 3 readings above target. Log meals to identify triggers.</div>
        </div>
        <button style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon name="close" size={15} color="var(--text-hint)" />
        </button>
      </div>

      <Divider />

      {/* Upcoming appointment */}
      <div style={{ padding: '16px 20px 0' }}>
        <SectionHeader title="Upcoming" action="View all" onAction={onOpenAppointments} />
        <button
          onClick={onOpenAppointments}
          style={{ appearance: 'none', background: 'none', border: '1px solid var(--border)', borderRadius: 12, padding: '12px 14px', marginTop: 10, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', width: '100%', textAlign: 'left', fontFamily: 'var(--font-sans)' }}
        >
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--secondary-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="videocam" size={18} color="var(--secondary)" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Dr. Priya Sharma</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 1 }}>Diabetologist</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
              <Icon name="calendar_today" size={11} color="var(--text-hint)" />
              <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>Tomorrow · 10:00 AM</span>
              <span style={{ padding: '2px 7px', borderRadius: 999, background: 'var(--secondary-surface)', color: 'var(--secondary)', fontSize: 10, fontWeight: 600 }}>Video</span>
            </div>
          </div>
          <Icon name="chevron_right" size={16} color="var(--text-hint)" />
        </button>
      </div>

      <Divider style={{ marginTop: 16 }} />

      {/* Medications */}
      <div style={{ padding: '16px 20px 0' }}>
        <SectionHeader title="Today's Medications" action="Manage" />
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column' }}>
          {VC_MEDS.map(([name, sub, taken], i) => (
            <div key={name}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: taken ? 'var(--success)' : 'var(--border)', flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-hint)', marginTop: 1 }}>{sub}</div>
                </div>
                <span style={{ fontSize: 11, fontWeight: 500, color: taken ? 'var(--success)' : 'var(--warning)' }}>{taken ? 'Taken' : 'Pending'}</span>
              </div>
              {i < VC_MEDS.length - 1 && <div style={{ height: 1, background: 'var(--border)' }} />}
            </div>
          ))}
        </div>
      </div>

      <Divider style={{ marginTop: 16 }} />

      {/* Modules grid */}
      <div style={{ padding: '16px 20px 0' }}>
        <SectionHeader title="Health Modules" action="All" onAction={onOpenModules} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 14 }}>
          {VC_MODULES.map(([name, emoji, color]) => (
            <button key={name} onClick={onOpenModules} style={{ appearance: 'none', background: 'none', fontFamily: 'var(--font-sans)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '10px 4px', borderRadius: 10, border: '1px solid var(--border)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `color-mix(in srgb, ${color} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>{emoji}</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--text-secondary)', textAlign: 'center' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
