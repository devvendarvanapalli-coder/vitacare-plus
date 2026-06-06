import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Avatar } from '../../../components/Avatar';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

const RX_DEFAULTS = [
  { name: 'Metformin 500mg',  sig: '1 tablet before breakfast and dinner', duration: '30 days' },
  { name: 'Glimepiride 2mg',  sig: '1 tablet before breakfast',            duration: '30 days' },
];

const SUGGESTIONS = [
  'Metformin 500mg', 'Metformin 1000mg', 'Glimepiride 1mg', 'Glimepiride 2mg',
  'Sitagliptin 100mg', 'Empagliflozin 10mg', 'Insulin Glargine', 'Vitamin D3 60k',
  'Calcium + D3', 'Rosuvastatin 10mg', 'Amlodipine 5mg', 'Losartan 50mg',
];

export function RxScreen({ patient = {}, onBack }) {
  const [search, setSearch] = React.useState('');
  const [meds, setMeds] = React.useState(RX_DEFAULTS);
  const [showSug, setShowSug] = React.useState(false);
  const name = patient.name || 'Rohan Kapoor';
  const initials = patient.initials || 'RK';

  const filtered = search.length > 1
    ? SUGGESTIONS.filter(s => s.toLowerCase().includes(search.toLowerCase()) && !meds.find(m => m.name === s))
    : [];

  const addMed = (medName) => {
    setMeds(prev => [...prev, { name: medName, sig: '', duration: '30 days' }]);
    setSearch('');
    setShowSug(false);
  };

  const removeMed = i => setMeds(prev => prev.filter((_, j) => j !== i));
  const updateSig = (i, sig) => setMeds(prev => prev.map((m, j) => j === i ? { ...m, sig } : m));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--border)', background: 'var(--bg)', flexShrink: 0 }}>
        <button onClick={onBack} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <Icon name="arrow_back" size={22} color="var(--text-primary)" />
        </button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 17, fontWeight: 700 }}>New Prescription</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{name}</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 0' }}>
        {/* Patient mini header */}
        <Card gradient="primary" style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <Avatar initials={initials} size={42} gradient="primary"
            style={{ background: 'rgba(255,255,255,0.2)' }} />
          <div>
            <div style={{ fontWeight: 700 }}>{name}</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              {patient.age || 34} yrs · {(patient.conditions || ['Diabetes']).join(', ')}
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.75 }}>
            {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </Card>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <Input
            value={search}
            onChange={e => { setSearch(e.target.value); setShowSug(true); }}
            placeholder="Search medication to add…"
            leadingIcon="search"
            onFocus={() => setShowSug(true)}
          />
          {showSug && filtered.length > 0 && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'var(--surface)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-pop)', zIndex: 10, marginTop: 4, overflow: 'hidden' }}>
              {filtered.slice(0, 5).map(s => (
                <button key={s} onClick={() => addMed(s)}
                  style={{ appearance: 'none', background: 'none', border: 'none', width: '100%', textAlign: 'left', padding: '12px 16px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="medication" size={16} color="var(--primary)" fill={1} />
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Medications list */}
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, color: 'var(--text-secondary)', marginBottom: 10 }}>
          Medications ({meds.length})
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          {meds.map((m, i) => (
            <Card key={i} padding={14}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 'var(--r-md)', background: 'color-mix(in srgb, var(--primary) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="medication" size={16} color="var(--primary)" fill={1} />
                </div>
                <span style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>{m.name}</span>
                <button onClick={() => removeMed(i)}
                  style={{ appearance: 'none', background: 'color-mix(in srgb, var(--error) 10%, transparent)', border: 'none', borderRadius: '50%', width: 28, height: 28, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="close" size={14} color="var(--error)" />
                </button>
              </div>
              <input
                value={m.sig}
                onChange={e => updateSig(i, e.target.value)}
                placeholder="Instructions (e.g. 1 tablet before breakfast)"
                style={{ width: '100%', boxSizing: 'border-box', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '8px 12px', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-primary)', background: 'var(--bg)', outline: 'none' }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Footer action */}
      <div style={{ padding: '12px 20px 24px', borderTop: '1px solid var(--border)', background: 'var(--bg)', flexShrink: 0 }}>
        <Button variant="primary" fullWidth leadingIcon="description" onClick={onBack}>
          Issue Prescription
        </Button>
      </div>
    </div>
  );
}
