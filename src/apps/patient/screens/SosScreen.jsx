import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Button } from '../../../components/Button';

function MedRow({ name, dose, allergy }) {
  const c = allergy ? 'var(--error)' : 'var(--success)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
      <Icon name={allergy ? 'dangerous' : 'check_circle'} size={16} color={c} />
      <span style={{ fontSize: 12, fontWeight: allergy ? 700 : 500, color: allergy ? c : 'var(--text-primary)' }}>{name} — {dose}</span>
    </div>
  );
}

export function SosScreen() {
  const [triggered, setTriggered] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const fire = () => {
    setConfirm(false); setTriggered(true);
    setTimeout(() => setTriggered(false), 3500);
  };

  return (
    <div style={{ minHeight: '100%', position: 'relative', padding: '8px 24px 28px' }}>
      {triggered && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24, padding: 12, borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--vc-sos) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--vc-sos) 30%, transparent)' }}>
          <Icon name="wifi_calling_3" size={18} color="var(--vc-sos)" />
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--vc-sos)' }}>SOS ACTIVE — Help is on the way</span>
        </div>
      )}

      <div style={{ height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: triggered ? 8 : 32 }}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', border: '2px solid var(--vc-sos)', animation: 'vcpulse 1.8s ease-out infinite', animationDelay: `${i * 0.45}s` }} />
        ))}
        <button onClick={() => setConfirm(true)} style={{ position: 'relative', width: 120, height: 120, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'var(--grad-sos)', boxShadow: '0 0 30px 4px rgba(220,38,38,0.4)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 32, fontWeight: 900, letterSpacing: 3 }}>SOS</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: 1 }}>CALL 108</span>
        </button>
      </div>
      <div style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>Tap for Emergency</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 32 }}>
        {[['Call Doctor', 'medical_services', 'var(--primary)'], ['Share GPS', 'location_on', 'var(--secondary)'], ['Alert Family', 'family_restroom', 'var(--warning)'], ['Nearest Hospital', 'local_hospital', 'var(--success)']].map(([lbl, ico, c]) => (
          <div key={lbl} style={{ background: `color-mix(in srgb, ${c} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${c} 20%, transparent)`, borderRadius: 'var(--r-card)', padding: '16px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: `color-mix(in srgb, ${c} 15%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={ico} size={22} color={c} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700 }}>{lbl}</span>
          </div>
        ))}
      </div>

      <Card style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 'var(--r-md)', background: 'color-mix(in srgb, var(--vc-sos) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="medication" size={18} color="var(--vc-sos)" />
          </div>
          <span style={{ fontSize: 18, fontWeight: 600 }}>Emergency Medications</span>
        </div>
        <MedRow name="Metformin 500mg" dose="1 tablet at night" />
        <MedRow name="Glimepiride 2mg" dose="1 before breakfast" />
        <MedRow name="Penicillin" dose="ALLERGY — Do NOT give" allergy />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, padding: 10, borderRadius: 'var(--r-sm)', background: 'color-mix(in srgb, var(--error) 8%, transparent)' }}>
          <Icon name="bloodtype" size={16} color="var(--error)" />
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--error)' }}>Blood Group: O+</span>
        </div>
      </Card>

      {confirm && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={() => setConfirm(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.45)' }} />
          <div style={{ position: 'relative', background: 'var(--surface)', borderRadius: 'var(--r-2xl)', padding: 22, width: '100%', maxWidth: 320, animation: 'vcpop .25s cubic-bezier(.2,1.2,.4,1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Icon name="warning" size={24} color="var(--error)" />
              <span style={{ fontSize: 18, fontWeight: 700 }}>Emergency SOS</span>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>This will call 108 Emergency Services and alert your emergency contacts with your GPS location. Proceed?</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 20 }}>
              <Button variant="ghost" onClick={() => setConfirm(false)}>Cancel</Button>
              <Button variant="danger" size="sm" onClick={fire}>Call Now</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
