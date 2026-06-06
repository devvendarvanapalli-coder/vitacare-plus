/* VitaCare Plus — Patient dashboard: greeting header, membership banner,
 * health-overview metric strip, alerts, appointment, medications, module grid. */

const VC_MODULES = [
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

function DashboardScreen({ onOpenMembership, onOpenAppointments }) {
  return (
    <div style={{ paddingBottom: 24 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px 4px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Good Morning</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Rohan</div>
        </div>
        <div style={{ width: 42, height: 42, borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginRight: 10 }}>
          <Icon name="notifications" size={20} color="var(--text-secondary)" />
          <span style={{ position: 'absolute', top: 9, right: 9, width: 8, height: 8, borderRadius: '50%', background: 'var(--vc-sos)' }} />
        </div>
        <Avatar initials="RK" />
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
        <MetricCard label="HbA1c" value="6.8" unit="%" icon="water_drop" iconColor="var(--vc-hba1c-teal)" delta={-3.2} deltaLabel="from last month" />
        <MetricCard label="Blood Sugar" value="126" unit="mg/dL" icon="monitor_heart" iconColor="var(--vc-glucose-blue)" delta={1.4} deltaLabel="fasting" />
        <MetricCard label="Weight" value="74.5" unit="kg" icon="monitor_weight" iconColor="var(--vc-weight-purple)" />
        <MetricCard label="Blood Pressure" value="128/82" unit="mmHg" icon="favorite" iconColor="var(--vc-bp-orange)" />
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

Object.assign(window, { DashboardScreen });
