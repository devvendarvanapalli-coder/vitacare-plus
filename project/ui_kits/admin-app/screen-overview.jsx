/* VitaCare Plus — Admin dashboard: Overview screen */

const APPTS_BY_DAY = [
  { day: 'Mon', count: 38 },
  { day: 'Tue', count: 52 },
  { day: 'Wed', count: 61 },
  { day: 'Thu', count: 47 },
  { day: 'Fri', count: 73 },
  { day: 'Sat', count: 29 },
  { day: 'Sun', count: 14 },
];

const PLANS = [
  { name: 'Silver', count: 2841, revenue: '₹14.2L', color: 'var(--vc-slate-400, #94A3B8)', grad: 'var(--grad-silver)' },
  { name: 'Gold',   count: 5103, revenue: '₹51.0L', color: 'var(--vc-gold, #D97706)',     grad: 'var(--grad-gold)',   badge: true },
  { name: 'Platinum',count: 998, revenue: '₹19.9L', color: '#818CF8',                      grad: 'var(--grad-platinum)' },
];

const RECENT_APPTS = [
  { patient: 'Rohan Kapoor',  doctor: 'Dr. Priya Sharma',  type: 'Video',     time: '10:00 AM', status: 'confirmed' },
  { patient: 'Anjali Mehta',  doctor: 'Dr. Rajesh Gupta',  type: 'In-Clinic', time: '10:30 AM', status: 'confirmed' },
  { patient: 'Vikram Nair',   doctor: 'Dr. Priya Sharma',  type: 'Video',     time: '11:15 AM', status: 'pending'   },
  { patient: 'Sunita Verma',  doctor: 'Dr. Amara Singh',   type: 'In-Clinic', time: '11:30 AM', status: 'confirmed' },
  { patient: 'Suresh Kumar',  doctor: 'Dr. Priya Sharma',  type: 'Video',     time: '2:00 PM',  status: 'pending'   },
];

function KpiCard({ icon, label, value, sub, color, trend }) {
  return (
    <div style={{ background: 'var(--card)', borderRadius: 'var(--r-card)', padding: '20px 22px', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: `color-mix(in srgb, ${color} 12%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="iconify" data-icon={`material-symbols:${icon.replace(/_/g,'-')}-rounded`} style={{ fontSize: 20, color }} />
        </div>
        {trend && (
          <span style={{ fontSize: 11, fontWeight: 600, color: trend > 0 ? 'var(--success)' : 'var(--error)', background: `color-mix(in srgb, ${trend > 0 ? 'var(--success)' : 'var(--error)'} 10%, transparent)`, padding: '3px 8px', borderRadius: 6 }}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5, color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.count));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120, padding: '0 4px' }}>
      {data.map(d => (
        <div key={d.day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)' }}>{d.count}</span>
          <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: 'var(--grad-primary)', height: `${(d.count / max) * 80}px`, minHeight: 4, opacity: d.day === 'Fri' ? 1 : 0.5 }} />
          <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{d.day}</span>
        </div>
      ))}
    </div>
  );
}

function OverviewScreen() {
  return (
    <div style={{ padding: '28px 28px 40px', overflowY: 'auto', height: '100%', boxSizing: 'border-box' }}>
      {/* Page header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }}>Overview</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>

      {/* KPI strip */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        <KpiCard icon="group" label="Total Patients" value="12,483" sub="Active registered users" color="var(--primary)" trend={8.2} />
        <KpiCard icon="workspace_premium" label="Active Subscriptions" value="8,942" sub="Gold 57% · Silver 32%" color="var(--gold)" trend={4.1} />
        <KpiCard icon="payments" label="Today's Revenue" value="₹89,420" sub="18% GST included" color="var(--success)" trend={12.5} />
        <KpiCard icon="calendar_today" label="Appointments Today" value="247" sub="Video 68% · In-Clinic 32%" color="var(--secondary)" trend={-3.0} />
      </div>

      {/* Two-column */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, marginBottom: 24 }}>
        {/* Bar chart */}
        <div style={{ background: 'var(--card)', borderRadius: 'var(--r-card)', padding: 20, boxShadow: 'var(--shadow-card)' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Appointments This Week</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 20 }}>Total: {APPTS_BY_DAY.reduce((s, d) => s + d.count, 0)} consultations</div>
          <BarChart data={APPTS_BY_DAY} />
        </div>

        {/* Subscription breakdown */}
        <div style={{ background: 'var(--card)', borderRadius: 'var(--r-card)', padding: 20, boxShadow: 'var(--shadow-card)' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>Subscriptions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PLANS.map(p => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: p.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span className="iconify" data-icon="material-symbols:workspace-premium-rounded" style={{ fontSize: 18, color: '#fff' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</span>
                    {p.badge && <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.5, color: '#fff', background: 'var(--grad-gold)', padding: '2px 6px', borderRadius: 4 }}>POPULAR</span>}
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: 'var(--border)', marginTop: 6, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(p.count / 8942) * 100}%`, background: p.grad, borderRadius: 3 }} />
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{p.count.toLocaleString('en-IN')}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{p.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent appointments table */}
      <div style={{ background: 'var(--card)', borderRadius: 'var(--r-card)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 15, fontWeight: 700, flex: 1 }}>Recent Appointments</span>
          <button style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 600, color: 'var(--primary)', fontFamily: 'var(--font-sans)' }}>View All</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg)' }}>
              {['Patient','Doctor','Type','Time','Status'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 20px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECENT_APPTS.map((a, i) => (
              <tr key={i} style={{ borderBottom: i < RECENT_APPTS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <td style={{ padding: '12px 20px', fontSize: 14, fontWeight: 600 }}>{a.patient}</td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: 'var(--text-secondary)' }}>{a.doctor}</td>
                <td style={{ padding: '12px 20px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 500, color: a.type === 'Video' ? 'var(--primary)' : 'var(--secondary)' }}>
                    <span className="iconify" data-icon={`material-symbols:${a.type === 'Video' ? 'videocam' : 'local-hospital'}-rounded`} style={{ fontSize: 14 }} />
                    {a.type}
                  </span>
                </td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{a.time}</td>
                <td style={{ padding: '12px 20px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 'var(--r-pill)', fontSize: 11, fontWeight: 600, background: `color-mix(in srgb, ${a.status === 'confirmed' ? 'var(--success)' : 'var(--warning)'} 10%, transparent)`, color: a.status === 'confirmed' ? 'var(--success)' : 'var(--warning)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'currentColor' }} />
                    {a.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Object.assign(window, { OverviewScreen });
