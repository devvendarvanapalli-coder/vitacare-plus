/* VitaCare Plus — Membership tiers (Silver / Gold / Platinum) with Razorpay framing. */

const VC_PLANS = [
  { id: 'silver', name: 'Silver', price: '₹499/mo', grad: 'var(--grad-silver)', accent: '#64748B', features: ['Basic health tracking', 'Blood sugar logging', 'Monthly reports', 'Email support', 'Up to 3 health modules'] },
  { id: 'gold', name: 'Gold', price: '₹999/mo', grad: 'var(--grad-gold)', accent: '#D97706', best: true, features: ['All Silver features', 'AI health insights', 'Teleconsultation (2/month)', 'Priority support', 'Complication risk tracking', 'All health modules', 'Family member tracking'] },
  { id: 'platinum', name: 'Platinum', price: '₹1999/mo', grad: 'var(--grad-platinum)', accent: '#4F46E5', features: ['All Gold features', 'Unlimited teleconsultation', 'Home health visits (2/month)', 'Dedicated care manager', 'Emergency SOS priority', 'Lab test discounts (30%)', 'Specialist access'] },
];

function MembershipScreen() {
  const [current, setCurrent] = React.useState('gold');
  return (
    <div style={{ padding: '14px 20px 28px' }}>
      <Card gradient="primary" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon name="workspace_premium" size={28} fill={1} color="#F59E0B" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>Current Plan</div>
          <div style={{ fontSize: 18, fontWeight: 800, textTransform: 'capitalize' }}>{current} Member</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Active · Renews Jan 1, 2026</div>
        </div>
      </Card>

      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3, marginTop: 24 }}>Upgrade Your Plan</div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>All plans include 7-day free trial</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
        {VC_PLANS.map((p) => <PlanCard key={p.id} p={p} current={current} onUpgrade={() => setCurrent(p.id)} />)}
      </div>

      <Card style={{ marginTop: 24 }}>
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>Frequently Asked</div>
        {[['Can I cancel anytime?', 'Yes, cancel anytime. No cancellation fee.'], ['Is GST included?', 'All prices are inclusive of 18% GST.'], ['Can I switch plans?', 'Upgrade or downgrade anytime. Prorated billing.']].map(([q, a]) => (
          <div key={q} style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{q}</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{a}</div>
          </div>
        ))}
      </Card>
    </div>
  );
}

function PlanCard({ p, current, onUpgrade }) {
  const isCurrent = p.id === current;
  return (
    <div style={{ borderRadius: 'var(--r-2xl)', overflow: 'hidden', border: `${isCurrent ? 2 : 1}px solid ${isCurrent ? p.accent : 'var(--border)'}`, background: 'var(--surface)', boxShadow: isCurrent ? `0 4px 20px color-mix(in srgb, ${p.accent} 20%, transparent)` : 'none' }}>
      <div style={{ background: p.grad, padding: '16px 16px 14px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          {p.best && <span style={{ display: 'inline-block', fontSize: 9, fontWeight: 800, letterSpacing: 1, color: '#fff', background: 'rgba(255,255,255,0.25)', borderRadius: 4, padding: '3px 8px', marginBottom: 4 }}>MOST POPULAR</span>}
          <div style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>{p.name}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{p.price}</div>
          {isCurrent && <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, color: '#fff', background: 'rgba(255,255,255,0.2)', borderRadius: 6, padding: '3px 8px', marginTop: 4 }}>Current</span>}
        </div>
      </div>
      <div style={{ padding: 16 }}>
        {p.features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Icon name="check_circle" size={16} fill={1} color={p.accent} />
            <span style={{ fontSize: 13 }}>{f}</span>
          </div>
        ))}
        {!isCurrent && (
          <button onClick={onUpgrade} style={{ width: '100%', height: 44, marginTop: 8, border: 'none', borderRadius: 'var(--r-lg)', background: p.accent, color: '#fff', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>Upgrade to {p.name}</button>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { MembershipScreen });
