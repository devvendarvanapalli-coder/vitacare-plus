import React from 'react';
import { Icon } from '../../../components/Icon';

const CATEGORIES = [
  {
    id: 'endocrine',
    name: 'Endocrine & Metabolic',
    emoji: '💉',
    color: '#2563EB',
    conditions: [
      'Type 2 Diabetes', 'Type 1 Diabetes', 'Prediabetes', 'Obesity',
      'Metabolic Syndrome', 'Hypothyroidism', 'Hyperthyroidism',
      'Vitamin D Deficiency', 'Vitamin B12 Deficiency', 'Dyslipidemia',
    ],
  },
  {
    id: 'cardio',
    name: 'Cardiovascular',
    emoji: '❤️',
    color: '#DC2626',
    conditions: [
      'Hypertension', 'Coronary Artery Disease', 'Heart Failure',
      'Atrial Fibrillation', 'Peripheral Arterial Disease',
      'Chronic Venous Insufficiency', 'Post-Stroke Syndrome',
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    emoji: '💨',
    color: '#0D9488',
    conditions: [
      'Asthma', 'Chronic Obstructive Pulmonary Disease', 'Bronchiectasis',
      'Interstitial Lung Disease', 'Obstructive Sleep Apnea',
    ],
  },
  {
    id: 'ortho',
    name: 'Orthopaedics & Rheumatology',
    emoji: '🦴',
    color: '#7C3AED',
    conditions: [
      'Osteoarthritis', 'Rheumatoid Arthritis', 'Gout', 'Osteoporosis',
      'Chronic Low Back Pain', 'Lumbar Canal Stenosis', 'Cervical Spondylosis',
      'Ankylosing Spondylitis', 'Avascular Necrosis', 'Nonunion', 'Malunion',
      'Follow-up after joint replacement (THR/TKR)', 'Follow-up after spine surgery',
    ],
  },
  {
    id: 'kidney',
    name: 'Kidney Diseases',
    emoji: '💧',
    color: '#EA580C',
    conditions: [
      'Chronic Kidney Disease', 'Diabetic Nephropathy',
      'Nephrotic Syndrome', 'Recurrent Kidney Stone Disease',
    ],
  },
  {
    id: 'neuro',
    name: 'Neurological',
    emoji: '🧠',
    color: '#0891B2',
    conditions: [
      'Epilepsy', 'Parkinson\'s Disease', 'Alzheimer\'s Disease',
      'Migraine', 'Multiple Sclerosis',
    ],
  },
  {
    id: 'gastro',
    name: 'Gastroenterology',
    emoji: '🫙',
    color: '#B45309',
    conditions: [
      'Gastroesophageal Reflux Disease', 'Chronic Liver Disease', 'Cirrhosis',
      'Inflammatory Bowel Disease', 'Irritable Bowel Syndrome',
    ],
  },
  {
    id: 'hematology',
    name: 'Hematology',
    emoji: '🩸',
    color: '#DC2626',
    conditions: [
      'Iron Deficiency Anemia', 'Thalassemia', 'Sickle Cell Disease',
    ],
  },
  {
    id: 'mental',
    name: 'Mental Health',
    emoji: '🧘',
    color: '#6D28D9',
    conditions: [
      'Depression', 'Generalized Anxiety Disorder', 'Bipolar Disorder', 'Schizophrenia',
    ],
  },
  {
    id: 'derma',
    name: 'Dermatology',
    emoji: '✨',
    color: '#D97706',
    conditions: [
      'Psoriasis', 'Atopic Dermatitis', 'Vitiligo', 'Chronic Hair Loss Disorders',
    ],
  },
  {
    id: 'womens',
    name: "Women's Health",
    emoji: '🌸',
    color: '#EC4899',
    conditions: [
      'Polycystic Ovary Syndrome', 'Endometriosis',
      'Menopause Follow-up', 'High-risk Pregnancy Follow-up',
    ],
  },
  {
    id: 'infectious',
    name: 'Infectious Diseases',
    emoji: '🦠',
    color: '#059669',
    conditions: [
      'HIV Infection', 'Tuberculosis', 'Chronic Viral Hepatitis',
    ],
  },
  {
    id: 'oncology',
    name: 'Oncology Follow-Up',
    emoji: '🔬',
    color: '#4F46E5',
    conditions: [
      'Breast Cancer Survivor Follow-up', 'Colon Cancer Survivor Follow-up',
      'Prostate Cancer Survivor Follow-up', 'Thyroid Cancer Survivor Follow-up',
      'General Post-Cancer Surveillance',
    ],
  },
];

const TOTAL = CATEGORIES.reduce((s, c) => s + c.conditions.length, 0);

const DEFAULT_ENROLLED = new Set(['Type 2 Diabetes', 'Hypertension', 'Vitamin D Deficiency']);

const MOST_COMMON = [
  { name: 'Type 2 Diabetes', emoji: '💉' },
  { name: 'Hypertension', emoji: '❤️' },
  { name: 'Obesity', emoji: '⚖️' },
  { name: 'Osteoarthritis', emoji: '🦴' },
  { name: 'Vitamin D Deficiency', emoji: '☀️' },
  { name: 'Chronic Kidney Disease', emoji: '💧' },
  { name: 'COPD', emoji: '💨', real: 'Chronic Obstructive Pulmonary Disease' },
  { name: 'Asthma', emoji: '💨' },
];

function CategoryRow({ cat, enrolled, onToggle, expanded, onExpand }) {
  const activeCount = cat.conditions.filter(c => enrolled.includes(c)).length;

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={onExpand}
        style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', fontFamily: 'var(--font-sans)', textAlign: 'left' }}
      >
        {/* Logo */}
        <div style={{
          width: 42, height: 42, borderRadius: 12,
          background: `color-mix(in srgb, ${cat.color} 12%, transparent)`,
          border: `1px solid color-mix(in srgb, ${cat.color} 20%, transparent)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontSize: 20, lineHeight: 1 }}>{cat.emoji}</span>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{cat.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text-hint)', marginTop: 1 }}>
            {cat.conditions.length} conditions{activeCount > 0 ? ` · ${activeCount} active` : ''}
          </div>
        </div>

        {activeCount > 0 && (
          <span style={{ fontSize: 10, fontWeight: 700, color: cat.color, padding: '2px 8px', borderRadius: 999, background: `color-mix(in srgb, ${cat.color} 10%, transparent)`, flexShrink: 0 }}>
            {activeCount}
          </span>
        )}
        <Icon name={expanded ? 'expand_less' : 'expand_more'} size={18} color="var(--text-hint)" />
      </button>

      {expanded && (
        <div style={{ paddingBottom: 8 }}>
          {cat.conditions.map((condition, i) => {
            const active = enrolled.includes(condition);
            return (
              <div key={condition} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 20px 9px 74px', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: active ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: active ? 500 : 400 }}>{condition}</div>
                </div>
                <button
                  onClick={() => onToggle(condition)}
                  style={{
                    appearance: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                    fontSize: 11, fontWeight: 600, padding: '4px 12px', borderRadius: 999,
                    border: `1px solid ${active ? cat.color : 'var(--border)'}`,
                    background: active ? `color-mix(in srgb, ${cat.color} 10%, transparent)` : '#fff',
                    color: active ? cat.color : 'var(--text-hint)',
                    transition: 'all 0.15s',
                  }}
                >
                  {active ? 'Active ✓' : 'Add'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ModulesScreen() {
  const [enrolled, setEnrolled] = React.useState([...DEFAULT_ENROLLED]);
  const [expanded, setExpanded] = React.useState(['endocrine']);
  const [query, setQuery] = React.useState('');

  const toggleEnroll = (condition) => {
    setEnrolled(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    );
  };

  const toggleExpand = (id) => {
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filteredCategories = query.trim()
    ? CATEGORIES.map(cat => ({
        ...cat,
        conditions: cat.conditions.filter(c => c.toLowerCase().includes(query.toLowerCase())),
      })).filter(cat => cat.conditions.length > 0 || cat.name.toLowerCase().includes(query.toLowerCase()))
    : CATEGORIES;

  const activeList = enrolled;

  return (
    <div style={{ paddingBottom: 32, background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px 12px' }}>
        <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.4, color: 'var(--text-primary)' }}>Health Modules</div>
        <div style={{ fontSize: 12, color: 'var(--text-hint)', marginTop: 3 }}>{TOTAL} conditions across {CATEGORIES.length} specialties</div>
      </div>

      {/* Search */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px', height: 40, borderRadius: 10, border: '1px solid var(--border)', background: '#FAFAFA' }}>
          <Icon name="search" size={16} color="var(--text-hint)" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search conditions…"
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: 13, color: 'var(--text-primary)', fontFamily: 'var(--font-sans)' }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <Icon name="close" size={14} color="var(--text-hint)" />
            </button>
          )}
        </div>
      </div>

      {/* Active conditions chips */}
      {activeList.length > 0 && !query && (
        <>
          <div style={{ padding: '0 20px 8px' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>My Conditions ({activeList.length})</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 20px 14px' }}>
            {activeList.map(c => {
              const cat = CATEGORIES.find(category => category.conditions.includes(c));
              return (
                <span
                  key={c}
                  onClick={() => toggleEnroll(c)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 999, border: `1px solid ${cat?.color || 'var(--border)'}`, background: `color-mix(in srgb, ${cat?.color || '#000'} 8%, transparent)`, cursor: 'pointer', fontSize: 12, fontWeight: 500, color: cat?.color || 'var(--text-primary)' }}
                >
                  {cat?.emoji} {c}
                  <Icon name="close" size={12} color={cat?.color || 'var(--text-hint)'} />
                </span>
              );
            })}
          </div>
          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 4px' }} />
        </>
      )}

      {/* Most Common strip */}
      {!query && (
        <>
          <div style={{ padding: '12px 20px 8px', fontSize: 11, fontWeight: 600, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Most Common
          </div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 20px 14px', scrollbarWidth: 'none' }}>
            {MOST_COMMON.map(({ name, emoji, real }) => {
              const realName = real || name;
              const cat = CATEGORIES.find(c => c.conditions.includes(realName));
              const active = enrolled.includes(realName);
              return (
                <button
                  key={name}
                  onClick={() => toggleEnroll(realName)}
                  style={{ appearance: 'none', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 999, border: `1px solid ${active ? cat?.color : 'var(--border)'}`, background: active ? `color-mix(in srgb, ${cat?.color} 10%, transparent)` : '#fff', color: active ? cat?.color : 'var(--text-secondary)', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'all 0.15s' }}
                >
                  <span style={{ fontSize: 14 }}>{emoji}</span>
                  {name} {active ? '✓' : '+'}
                </button>
              );
            })}
          </div>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 4 }} />
        </>
      )}

      {/* Specialty grid — shown before category list when not searching */}
      {!query && (
        <>
          <div style={{ padding: '12px 20px 8px', fontSize: 11, fontWeight: 600, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Specialties
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, padding: '0 20px 16px' }}>
            {CATEGORIES.map(cat => {
              const isExpanded = expanded.includes(cat.id);
              const activeCount = cat.conditions.filter(c => enrolled.includes(c)).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    toggleExpand(cat.id);
                    // scroll to category list — handled by expand
                  }}
                  style={{
                    appearance: 'none', fontFamily: 'var(--font-sans)', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                    padding: '12px 8px', borderRadius: 12,
                    border: `1px solid ${isExpanded ? cat.color : 'var(--border)'}`,
                    background: isExpanded ? `color-mix(in srgb, ${cat.color} 6%, transparent)` : '#fff',
                    transition: 'all 0.15s', position: 'relative',
                  }}
                >
                  <span style={{ fontSize: 24, lineHeight: 1 }}>{cat.emoji}</span>
                  <span style={{ fontSize: 10, fontWeight: 600, color: isExpanded ? cat.color : 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.3 }}>
                    {cat.name.split(' & ')[0].split(' ')[0]}
                  </span>
                  {activeCount > 0 && (
                    <span style={{ position: 'absolute', top: 6, right: 6, width: 16, height: 16, borderRadius: '50%', background: cat.color, color: '#fff', fontSize: 9, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {activeCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div style={{ height: 1, background: 'var(--border)', marginBottom: 4 }} />
        </>
      )}

      {/* Category list */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {filteredCategories.map(cat => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            enrolled={enrolled}
            onToggle={toggleEnroll}
            expanded={expanded.includes(cat.id) || !!query}
            onExpand={() => toggleExpand(cat.id)}
          />
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-hint)', fontSize: 13 }}>
          No conditions match "{query}"
        </div>
      )}
    </div>
  );
}
