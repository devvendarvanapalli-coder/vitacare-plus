import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import { Avatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button';

const PASSPORT = {
  name: 'Rohan Kapoor',
  age: 34,
  gender: 'Male',
  dob: '12 Mar 1991',
  bloodGroup: 'O+',
  phone: '+91 99999 99999',
  conditions: ['Type 2 Diabetes', 'Hypertension'],
  medications: [
    { name: 'Metformin 500mg', dose: '1 tab · twice daily' },
    { name: 'Glimepiride 2mg', dose: '1 tab · before breakfast' },
    { name: 'Telmisartan 40mg', dose: '1 tab · at bedtime' },
  ],
  allergies: ['Penicillin', 'Sulfa drugs'],
  emergencyContacts: [
    { name: 'Sunita Kapoor', relation: 'Spouse', phone: '+91 98888 88888' },
    { name: 'Dr. Priya Sharma', relation: 'Primary Doctor', phone: '+91 97777 77777' },
  ],
};

function QRCode() {
  const cells = [];
  const size = 11;
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1],
    [0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0],
    [1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1],
  ];
  return (
    <div style={{ display: 'inline-block', padding: 10, background: 'var(--card)', borderRadius: 10 }}>
      {pattern.map((row, r) => (
        <div key={r} style={{ display: 'flex' }}>
          {row.map((cell, c) => (
            <div key={c} style={{ width: 5.5, height: 5.5, background: cell ? '#0f172a' : '#fff' }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function HealthPassportScreen() {
  const [shared, setShared] = React.useState(false);

  const handleShare = () => {
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div style={{ paddingBottom: 28 }}>
      {/* Passport header card */}
      <Card gradient="primary" style={{ margin: '14px 20px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -24, right: -24, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar initials="RK" size={56} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{PASSPORT.name}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{PASSPORT.age} yrs · {PASSPORT.gender} · DOB: {PASSPORT.dob}</div>
            <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 10px', fontSize: 12, fontWeight: 800, color: '#fff' }}>
                <Icon name="bloodtype" size={14} color="#ff6b6b" fill={1} />
                {PASSPORT.bloodGroup}
              </span>
            </div>
          </div>
          <Icon name="verified" size={24} fill={1} color="#F59E0B" />
        </div>
      </Card>

      {/* QR Code */}
      <div style={{ margin: '16px 20px 0', background: 'var(--surface)', borderRadius: 'var(--r-xl)', padding: '20px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>Scan for Instant Medical Info</div>
        <QRCode />
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', textAlign: 'center' }}>
          Show this QR at any hospital for instant access to your medical record
        </div>
        <Button
          variant={shared ? 'secondary' : 'primary'}
          size="sm"
          onClick={handleShare}
          style={{ minWidth: 160 }}
        >
          <Icon name={shared ? 'check' : 'share'} size={16} color={shared ? 'var(--success)' : '#fff'} />
          <span style={{ marginLeft: 6 }}>{shared ? 'Link Copied!' : 'Share Medical Card'}</span>
        </Button>
      </div>

      {/* Blood group + allergies */}
      <div style={{ margin: '14px 20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: 'color-mix(in srgb, var(--error) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--error) 22%, transparent)', borderRadius: 'var(--r-lg)', padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <Icon name="bloodtype" size={16} color="var(--error)" fill={1} />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--error)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Blood Group</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--error)', letterSpacing: -0.5 }}>{PASSPORT.bloodGroup}</div>
        </div>
        <div style={{ background: 'color-mix(in srgb, var(--warning) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--warning) 22%, transparent)', borderRadius: 'var(--r-lg)', padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <Icon name="warning" size={16} color="var(--warning)" />
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--warning)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Allergies</span>
          </div>
          {PASSPORT.allergies.map(a => (
            <div key={a} style={{ fontSize: 11, fontWeight: 700, color: 'var(--warning)', lineHeight: 1.5 }}>⚠ {a}</div>
          ))}
        </div>
      </div>

      {/* Conditions */}
      <div style={{ margin: '14px 20px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Conditions</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {PASSPORT.conditions.map(c => (
            <span key={c} style={{ padding: '6px 14px', borderRadius: 'var(--r-pill)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)', fontSize: 12, fontWeight: 700, border: '1px solid color-mix(in srgb, var(--primary) 25%, transparent)' }}>{c}</span>
          ))}
        </div>
      </div>

      {/* Medications */}
      <div style={{ margin: '14px 20px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Current Medications</div>
        <Card padding={0}>
          {PASSPORT.medications.map((med, i) => (
            <div key={med.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: i < PASSPORT.medications.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ width: 32, height: 32, borderRadius: 'var(--r-md)', background: 'color-mix(in srgb, var(--secondary) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="medication" size={16} color="var(--secondary)" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{med.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>{med.dose}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Emergency contacts */}
      <div style={{ margin: '14px 20px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Emergency Contacts</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PASSPORT.emergencyContacts.map(ec => (
            <Card key={ec.name} padding={0}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px' }}>
                <Avatar initials={ec.name.split(' ').map(w => w[0]).join('').slice(0, 2)} size={36} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{ec.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>{ec.relation} · {ec.phone}</div>
                </div>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'color-mix(in srgb, var(--success) 12%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Icon name="call" size={16} color="var(--success)" fill={1} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ margin: '16px 20px 0', padding: '10px 14px', borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--primary) 6%, transparent)', border: '1px solid color-mix(in srgb, var(--primary) 16%, transparent)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon name="shield" size={16} color="var(--primary)" fill={1} />
        <span style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.4 }}>This passport is end-to-end encrypted. Only emergency responders with the QR scanner can access your data.</span>
      </div>
    </div>
  );
}
