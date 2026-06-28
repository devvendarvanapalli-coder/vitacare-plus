import React from 'react';
import { Icon } from '../../../components/Icon';

const CATEGORIES = [
  {
    id: 'endocrine',
    name: 'Endocrine & Metabolic',
    icon: 'water_drop',
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
    icon: 'favorite',
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
    icon: 'air',
    color: '#0D9488',
    conditions: [
      'Asthma', 'Chronic Obstructive Pulmonary Disease', 'Bronchiectasis',
      'Interstitial Lung Disease', 'Obstructive Sleep Apnea',
    ],
  },
  {
    id: 'ortho',
    name: 'Orthopaedics & Rheumatology',
    icon: 'accessibility_new',
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
    icon: 'opacity',
    color: '#EA580C',
    conditions: [
      'Chronic Kidney Disease', 'Diabetic Nephropathy',
      'Nephrotic Syndrome', 'Recurrent Kidney Stone Disease',
    ],
  },
  {
    id: 'neuro',
    name: 'Neurological',
    icon: 'psychology',
    color: '#0891B2',
    conditions: [
      'Epilepsy', 'Parkinson\'s Disease', 'Alzheimer\'s Disease',
      'Migraine', 'Multiple Sclerosis',
    ],
  },
  {
    id: 'gastro',
    name: 'Gastroenterology',
    icon: 'local_dining',
    color: '#B45309',
    conditions: [
      'Gastroesophageal Reflux Disease', 'Chronic Liver Disease', 'Cirrhosis',
      'Inflammatory Bowel Disease', 'Irritable Bowel Syndrome',
    ],
  },
  {
    id: 'hematology',
    name: 'Hematology',
    icon: 'bloodtype',
    color: '#DC2626',
    conditions: [
      'Iron Deficiency Anemia', 'Thalassemia', 'Sickle Cell Disease',
    ],
  },
  {
    id: 'mental',
    name: 'Mental Health',
    icon: 'self_improvement',
    color: '#6D28D9',
    conditions: [
      'Depression', 'Generalized Anxiety Disorder', 'Bipolar Disorder', 'Schizophrenia',
    ],
  },
  {
    id: 'derma',
    name: 'Dermatology',
    icon: 'face',
    color: '#D97706',
    conditions: [
      'Psoriasis', 'Atopic Dermatitis', 'Vitiligo', 'Chronic Hair Loss Disorders',
    ],
  },
  {
    id: 'womens',
    name: "Women's Health",
    icon: 'female',
    color: '#EC4899',
    conditions: [
      'Polycystic Ovary Syndrome', 'Endometriosis',
      'Menopause Follow-up', 'High-risk Pregnancy Follow-up',
    ],
  },
  {
    id: 'infectious',
    name: 'Infectious Diseases',
    icon: 'coronavirus',
    color: '#059669',
    conditions: [
      'HIV Infection', 'Tuberculosis', 'Chronic Viral Hepatitis',
    ],
  },
  {
    id: 'oncology',
    name: 'Oncology Follow-Up',
    icon: 'science',
    color: '#4F46E5',
    conditions: [
      'Breast Cancer Survivor Follow-up', 'Colon Cancer Survivor Follow-up',
      'Prostate Cancer Survivor Follow-up', 'Thyroid Cancer Survivor Follow-up',
      'General Post-Cancer Surveillance',
    ],
  },
];

const TOTAL = CATEGORIES.reduce((s, c) => s + c.conditions.length, 0);

// Default enrolled conditions matching the patient demo data
const DEFAULT_ENROLLED = new Set(['Type 2 Diabetes', 'Hypertension', 'Vitamin D Deficiency']);

function CategoryRow({ cat, enrolled, onToggle, expanded, onExpand }) {
  const activeCount = cat.conditions.filter(c => enrolled.has(c)).length;

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Category header */}
      <button
        onClick={onExpand}
        style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', fontFamily: 'var(--font-sans)', textAlign: 'left' }}
      >
        <div style={{ width: 34, height: 34, borderRadius: 9, background: `color-mix(in srgb, ${cat.color} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={cat.icon} size={17} color={cat.color} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{cat.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text-hint)', marginTop: 1 }}>
            {cat.conditions.length} conditions{activeCount > 0 ? ` · ${activeCount} active` : ''}
          </div>
        </div>
        {activeCount > 0 && (
          <span style={{ fontSize: 10, fontWeight: 700, color: cat.color, padding: '2px 8px', borderRadius: 999, background: `color-mix(in srgb, ${cat.color} 10%, transparent)`, marginRight: 4 }}>
            {activeCount}
          </span>
        )}
        <Icon name={expanded ? 'expand_less' : 'expand_more'} size={18} color="var(--text-hint)" />
      </button>

      {/* Conditions list */}
      {expanded && (
        <div style={{ paddingBottom: 8 }}>
          {cat.conditions.map((condition, i) => {
            const active = enrolled.has(condition);
            return (
              <div key={condition} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 20px 9px 66px', borderTop: i === 0 ? '1px solid var(--border)' : 'none' }}>
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
  const [enrolled, setEnrolled] = React.useState(DEFAULT_ENROLLED);
  const [expanded, setExpanded] = React.useState(new Set(['endocrine']));
  const [query, setQuery] = React.useState('');

  const toggleEnroll = (condition) => {
    setEnrolled(prev => {
      const next = new Set(prev);
      next.has(condition) ? next.delete(condition) : next.add(condition);
      return next;
    });
  };

  const toggleExpand = (id) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // Filter by search query
  const filteredCategories = query.trim()
    ? CATEGORIES.map(cat => ({
        ...cat,
        conditions: cat.conditions.filter(c => c.toLowerCase().includes(query.toLowerCase())),
      })).filter(cat => cat.conditions.length > 0 || cat.name.toLowerCase().includes(query.toLowerCase()))
    : CATEGORIES;

  const activeList = [...enrolled];

  return (
    <div style={{ paddingBottom: 32, background: '#fff' }}>
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

      {/* Active conditions */}
      {activeList.length > 0 && !query && (
        <>
          <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>My Conditions ({activeList.length})</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 20px 14px' }}>
            {activeList.map(c => {
              const cat = CATEGORIES.find(cat => cat.conditions.includes(c));
              return (
                <span
                  key={c}
                  onClick={() => toggleEnroll(c)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '5px 10px', borderRadius: 999, border: `1px solid ${cat?.color || 'var(--border)'}`, background: `color-mix(in srgb, ${cat?.color || '#000'} 8%, transparent)`, cursor: 'pointer', fontSize: 12, fontWeight: 500, color: cat?.color || 'var(--text-primary)' }}
                >
                  {c}
                  <Icon name="close" size={12} color={cat?.color || 'var(--text-hint)'} />
                </span>
              );
            })}
          </div>
          <div style={{ height: 1, background: 'var(--border)', margin: '0 0 4px' }} />
        </>
      )}

      {/* Priority modules strip (non-search mode) */}
      {!query && (
        <>
          <div style={{ padding: '12px 20px 8px', fontSize: 11, fontWeight: 600, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Most Common
          </div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '0 20px 14px', scrollbarWidth: 'none' }}>
            {['Type 2 Diabetes', 'Hypertension', 'Obesity', 'Osteoarthritis', 'Vitamin D Deficiency', 'Chronic Kidney Disease', 'Asthma', 'COPD'].map(name => {
              const cat = CATEGORIES.find(c => c.conditions.includes(name) || name === 'COPD' && c.conditions.includes('Chronic Obstructive Pulmonary Disease'));
              const realName = name === 'COPD' ? 'Chronic Obstructive Pulmonary Disease' : name;
              const active = enrolled.has(realName);
              return (
                <button
                  key={name}
                  onClick={() => toggleEnroll(realName)}
                  style={{ appearance: 'none', flexShrink: 0, padding: '6px 12px', borderRadius: 999, border: `1px solid ${active ? cat?.color : 'var(--border)'}`, background: active ? `color-mix(in srgb, ${cat?.color} 10%, transparent)` : '#fff', color: active ? cat?.color : 'var(--text-secondary)', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'all 0.15s' }}
                >
                  {name} {active ? '✓' : '+'}
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
            expanded={expanded.has(cat.id) || !!query}
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
