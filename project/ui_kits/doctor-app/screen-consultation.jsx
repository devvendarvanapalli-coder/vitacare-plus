/* VitaCare Plus — Doctor app: Patient consultation detail screen */

const RECENT_RX = [
  { name: 'Metformin 500mg',  sig: '1 tablet before breakfast &amp; dinner', date: 'Jun 2, 2025' },
  { name: 'Glimepiride 2mg',  sig: '1 tablet before breakfast',              date: 'Jun 2, 2025' },
  { name: 'Vitamin D3 60k',   sig: '1 capsule once a week',                  date: 'May 15, 2025' },
];

const HISTORY = [
  { label: 'Last HbA1c', value: '7.2%', date: 'Apr 2025', trend: 'down' },
  { label: 'Last Glucose', value: '148 mg/dL', date: 'May 2025', trend: 'up' },
];

function ConsultationScreen({ patient = {}, onBack, onWriteRx }) {
  const [notes, setNotes] = React.useState('');
  const name       = patient.name    || 'Rohan Kapoor';
  const initials   = patient.initials|| 'RK';
  const age        = patient.age     || 34;
  const gender     = patient.gender  || 'M';
  const conditions = patient.conditions || ['Diabetes', 'Hypertension'];
  const gradient   = patient.gradient  || 'primary';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--bg)', flexShrink: 0 }}>
        <button onClick={onBack} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <Icon name="arrow_back" size={22} color="var(--text-primary)" />
        </button>
        <span style={{ flex: 1, fontSize: 17, fontWeight: 700 }}>Consultation</span>
        <Button variant="secondary" size="sm" leadingIcon="videocam">Video Call</Button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 24 }}>
        {/* Patient header */}
        <div style={{ padding: '16px 20px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar initials={initials} gradient={gradient} size={60} />
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3 }}>{name}</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>
              {age} yrs · {gender === 'M' ? 'Male' : 'Female'} · +91 99999 00000
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 6, flexWrap: 'wrap' }}>
              {conditions.map(c => <Badge key={c} status="info" dot={false} style={{ fontSize: 10, padding: '2px 8px' }}>{c}</Badge>)}
              <Badge status="gold" dot={false} style={{ fontSize: 10, padding: '2px 8px' }}>Gold Member</Badge>
            </div>
          </div>
        </div>

        {/* Vitals strip */}
        <div style={{ padding: '16px 20px 0' }}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, color: 'var(--text-secondary)', marginBottom: 10 }}>Latest Vitals</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <VitalTile label="HbA1c"     value="6.8"    unit="%"     icon="water_drop"    color="var(--vc-hba1c-teal, #0D9488)" />
            <VitalTile label="Glucose"   value="126"    unit="mg/dL" icon="monitor_heart" color="var(--vc-glucose-blue, #2563EB)" />
            <VitalTile label="Weight"    value="74.5"   unit="kg"    icon="monitor_weight" color="var(--vc-weight-purple, #7C3AED)" />
            <VitalTile label="BP"        value="128/82" unit="mmHg"  icon="favorite"      color="var(--vc-bp-orange, #EA580C)" />
          </div>
        </div>

        {/* Notes */}
        <div style={{ padding: '16px 20px 0' }}>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, color: 'var(--text-secondary)', marginBottom: 10 }}>Consultation Notes</div>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Add your clinical notes here…"
            style={{
              width: '100%', minHeight: 90, boxSizing: 'border-box',
              padding: '12px 14px', borderRadius: 'var(--r-lg)',
              border: '1.5px solid var(--border)', background: 'var(--surface)',
              fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)',
              resize: 'vertical', outline: 'none', lineHeight: 1.6,
            }}
            onFocus={e => e.target.style.borderColor = 'var(--primary)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        {/* Recent prescriptions */}
        <div style={{ padding: '16px 20px 0' }}>
          <SectionHeader title="Recent Prescriptions" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
            {RECENT_RX.map(rx => (
              <Card key={rx.name} padding={12} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 'var(--r-md)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="medication" size={18} color="var(--primary)" fill />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{rx.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }} dangerouslySetInnerHTML={{ __html: rx.sig }} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-hint)', flexShrink: 0 }}>{rx.date}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ padding: '16px 20px 0', display: 'flex', gap: 10 }}>
          <Button variant="primary" fullWidth leadingIcon="description" onClick={onWriteRx}>
            Write Prescription
          </Button>
          <Button variant="outlined" style={{ flexShrink: 0, paddingLeft: 16, paddingRight: 16 }}>
            <Icon name="note_add" size={18} color="var(--primary)" />
          </Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ConsultationScreen });
