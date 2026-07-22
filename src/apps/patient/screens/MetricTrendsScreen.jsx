import React from 'react';
import { Icon } from '../../../components/Icon';

// Demo data: 5 reports uploaded over 6 months showing real improvement
const REPORT_HISTORY = [
  {
    label: 'Jan', date: '15 Jan 2025', lab: 'Thyrocare',
    hba1c: 8.4, glucose: 162, vitD: 11.3, vitB12: 210, hb: 12.8,
    creatinine: 1.1, egfr: 72, tsh: 5.8, cholesterol: 218, ldl: 148, hdl: 38, trig: 198,
    sbp: 142, dbp: 92,
  },
  {
    label: 'Feb', date: '22 Feb 2025', lab: 'Dr. Lal PathLabs',
    hba1c: 8.0, glucose: 151, vitD: 14.2, vitB12: 235, hb: 13.1,
    creatinine: 1.05, egfr: 76, tsh: 4.9, cholesterol: 205, ldl: 138, hdl: 40, trig: 182,
    sbp: 138, dbp: 89,
  },
  {
    label: 'Apr', date: '10 Apr 2025', lab: 'SRL Diagnostics',
    hba1c: 7.5, glucose: 138, vitD: 22.8, vitB12: 280, hb: 13.6,
    creatinine: 0.98, egfr: 80, tsh: 3.8, cholesterol: 192, ldl: 124, hdl: 43, trig: 165,
    sbp: 134, dbp: 86,
  },
  {
    label: 'Jun', date: '5 Jun 2025', lab: 'Metropolis',
    hba1c: 7.1, glucose: 126, vitD: 31.4, vitB12: 340, hb: 14.0,
    creatinine: 0.92, egfr: 85, tsh: 3.2, cholesterol: 181, ldl: 112, hdl: 46, trig: 148,
    sbp: 130, dbp: 84,
  },
  {
    label: 'Jul', date: '18 Jul 2025', lab: 'Thyrocare',
    hba1c: 6.8, glucose: 118, vitD: 38.2, vitB12: 398, hb: 14.4,
    creatinine: 0.88, egfr: 89, tsh: 2.9, cholesterol: 172, ldl: 102, hdl: 49, trig: 132,
    sbp: 126, dbp: 81,
  },
];

const MODULES = [
  {
    id: 'diabetes', name: 'Diabetes', emoji: '💉', color: '#2563EB',
    metrics: [
      { key: 'hba1c',   name: 'HbA1c',          unit: '%',    normalMin: 4.0, normalMax: 5.7, warnMax: 6.4,  decimals: 1 },
      { key: 'glucose',  name: 'Fasting Glucose', unit: 'mg/dL', normalMin: 70,  normalMax: 99,  warnMax: 125,  decimals: 0 },
    ],
  },
  {
    id: 'cardio', name: 'Cardiovascular', emoji: '❤️', color: '#DC2626',
    metrics: [
      { key: 'sbp',         name: 'Systolic BP',   unit: 'mmHg', normalMin: 90,  normalMax: 120, warnMax: 130,  decimals: 0 },
      { key: 'cholesterol', name: 'Total Cholesterol', unit: 'mg/dL', normalMin: 100, normalMax: 200, warnMax: 239, decimals: 0 },
      { key: 'ldl',         name: 'LDL',           unit: 'mg/dL', normalMin: 0,   normalMax: 100, warnMax: 130,  decimals: 0 },
      { key: 'hdl',         name: 'HDL (Good)',    unit: 'mg/dL', normalMin: 40,  normalMax: 100, warnMin: 40,   decimals: 0 },
    ],
  },
  {
    id: 'nutrition', name: 'Nutrition', emoji: '☀️', color: '#F59E0B',
    metrics: [
      { key: 'vitD',  name: 'Vitamin D',  unit: 'ng/mL', normalMin: 30, normalMax: 100, warnMin: 20,  decimals: 1 },
      { key: 'vitB12', name: 'Vitamin B12', unit: 'pg/mL', normalMin: 200, normalMax: 900, warnMin: 300, decimals: 0 },
    ],
  },
  {
    id: 'blood', name: 'Blood', emoji: '🩸', color: '#EF4444',
    metrics: [
      { key: 'hb',   name: 'Haemoglobin', unit: 'g/dL', normalMin: 12,  normalMax: 17,  warnMin: 12,  decimals: 1 },
      { key: 'trig', name: 'Triglycerides', unit: 'mg/dL', normalMin: 0, normalMax: 150, warnMax: 200, decimals: 0 },
    ],
  },
  {
    id: 'kidney', name: 'Kidney', emoji: '💧', color: '#EA580C',
    metrics: [
      { key: 'creatinine', name: 'Creatinine', unit: 'mg/dL', normalMin: 0.6, normalMax: 1.2, warnMax: 1.3, decimals: 2 },
      { key: 'egfr',       name: 'eGFR',       unit: 'mL/min', normalMin: 60,  normalMax: 120, warnMin: 60,  decimals: 0 },
    ],
  },
  {
    id: 'thyroid', name: 'Thyroid', emoji: '🧬', color: '#7C3AED',
    metrics: [
      { key: 'tsh', name: 'TSH', unit: 'mIU/L', normalMin: 0.4, normalMax: 4.0, warnMax: 4.5, decimals: 1 },
    ],
  },
];

function getStatus(value, m) {
  if (m.warnMax && value > m.warnMax) return 'high';
  if (m.warnMin && value < m.warnMin) return 'low';
  if (value > m.normalMax) return 'borderline';
  if (value < m.normalMin) return 'borderline';
  return 'normal';
}

function statusColor(status) {
  return { normal: '#4ade80', borderline: '#fbbf24', high: '#f87171', low: '#60a5fa' }[status] || '#8e9192';
}

function statusLabel(status) {
  return { normal: 'Normal', borderline: 'Borderline', high: 'High', low: 'Low' }[status] || '—';
}

function trendIcon(data, key) {
  if (data.length < 2) return null;
  const diff = data[data.length - 1][key] - data[data.length - 2][key];
  if (Math.abs(diff) < 0.01) return '→';
  return diff > 0 ? '↑' : '↓';
}

// Pure SVG line chart — no external library
function LineChart({ data, metricKey, metric, color }) {
  const values = data.map(d => d[metricKey]).filter(v => v != null);
  if (values.length < 2) return null;

  const W = 320, H = 130;
  const padL = 38, padR = 10, padT = 12, padB = 28;
  const cW = W - padL - padR;
  const cH = H - padT - padB;

  const allV = [...values, metric.normalMin, metric.normalMax];
  const rawMin = Math.min(...allV);
  const rawMax = Math.max(...allV);
  const range = rawMax - rawMin || 1;
  const minV = rawMin - range * 0.1;
  const maxV = rawMax + range * 0.1;

  const xS = i => padL + (i / (data.length - 1)) * cW;
  const yS = v => padT + cH - ((v - minV) / (maxV - minV)) * cH;

  const points = data.map((d, i) => [xS(i), yS(d[metricKey])]);
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const areaD = pathD + ` L ${points[points.length - 1][0].toFixed(1)} ${(padT + cH).toFixed(1)} L ${padL} ${(padT + cH).toFixed(1)} Z`;

  // Y axis labels
  const yTicks = [minV, (minV + maxV) / 2, maxV].map(v => ({
    v, y: yS(v), label: v.toFixed(metric.decimals),
  }));

  const nMinY = yS(Math.min(metric.normalMax, maxV));
  const nMaxY = yS(Math.max(metric.normalMin, minV));

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
      {/* Normal range band */}
      <rect x={padL} y={nMinY} width={cW} height={Math.max(0, nMaxY - nMinY)}
        fill={`${color}18`} />
      <line x1={padL} y1={yS(metric.normalMin)} x2={padL + cW} y2={yS(metric.normalMin)}
        stroke={color} strokeWidth={1} strokeDasharray="4 3" opacity={0.4} />
      <line x1={padL} y1={yS(metric.normalMax)} x2={padL + cW} y2={yS(metric.normalMax)}
        stroke={color} strokeWidth={1} strokeDasharray="4 3" opacity={0.4} />

      {/* Gridlines + Y labels */}
      {yTicks.map((t, i) => (
        <g key={i}>
          <line x1={padL} y1={t.y} x2={padL + cW} y2={t.y}
            stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
          <text x={padL - 4} y={t.y + 3.5} textAnchor="end"
            fontSize={9} fill="#8e9192">{t.label}</text>
        </g>
      ))}

      {/* Area fill */}
      <path d={areaD} fill={`${color}12`} />

      {/* Line */}
      <path d={pathD} stroke={color} strokeWidth={2.2} fill="none"
        strokeLinecap="round" strokeLinejoin="round" />

      {/* Dots */}
      {points.map((p, i) => {
        const isLast = i === points.length - 1;
        const val = data[i][metricKey];
        const st = getStatus(val, metric);
        const dc = statusColor(st);
        return (
          <g key={i}>
            {isLast && <circle cx={p[0]} cy={p[1]} r={9} fill={`${color}20`} />}
            <circle cx={p[0]} cy={p[1]} r={isLast ? 5 : 3.5}
              fill={isLast ? dc : '#1c1b1b'}
              stroke={isLast ? dc : color}
              strokeWidth={2} />
          </g>
        );
      })}

      {/* X axis labels */}
      {data.map((d, i) => (
        <text key={i} x={xS(i)} y={H - 4} textAnchor="middle"
          fontSize={9} fill="#8e9192">{d.label}</text>
      ))}

      {/* Latest value label */}
      {(() => {
        const last = points[points.length - 1];
        const val = data[data.length - 1][metricKey];
        return (
          <text x={last[0]} y={last[1] - 11} textAnchor="middle"
            fontSize={10} fontWeight="700" fill={statusColor(getStatus(val, metric))}>
            {val.toFixed(metric.decimals)}
          </text>
        );
      })()}
    </svg>
  );
}

function MetricCard({ metricDef, data, moduleColor }) {
  const latestVal = data[data.length - 1][metricDef.key];
  const status = getStatus(latestVal, metricDef);
  const sc = statusColor(status);
  const trend = trendIcon(data, metricDef.key);
  const prevVal = data.length >= 2 ? data[data.length - 2][metricDef.key] : null;
  const diff = prevVal != null ? (latestVal - prevVal).toFixed(metricDef.decimals) : null;

  return (
    <div style={{
      background: 'var(--card)', borderRadius: 16, padding: '14px 16px',
      border: `1px solid ${status !== 'normal' ? sc + '40' : 'var(--border)'}`,
      marginBottom: 12,
      boxShadow: status !== 'normal' ? `0 0 0 3px ${sc}10` : 'none',
    }}>
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>{metricDef.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text-hint)', marginTop: 1 }}>
            Normal: {metricDef.normalMin}–{metricDef.normalMax} {metricDef.unit}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: sc, letterSpacing: -0.5 }}>
            {latestVal.toFixed(metricDef.decimals)}
            <span style={{ fontSize: 12, fontWeight: 500, marginLeft: 3 }}>{metricDef.unit}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end', marginTop: 3 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: sc,
              background: sc + '15', padding: '2px 8px', borderRadius: 99 }}>
              {statusLabel(status)}
            </span>
            {diff != null && (
              <span style={{ fontSize: 11, fontWeight: 600, color: trend === '↓' ? 'var(--success)' : trend === '↑' ? 'var(--error)' : 'var(--text-hint)' }}>
                {trend} {Math.abs(diff)}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Chart */}
      <LineChart data={data} metricKey={metricDef.key} metric={metricDef} color={moduleColor} />

      {/* Bottom: report count */}
      <div style={{ marginTop: 8, fontSize: 11, color: 'var(--text-hint)', textAlign: 'right' }}>
        Based on {data.filter(d => d[metricDef.key] != null).length} reports
      </div>
    </div>
  );
}

export function MetricTrendsScreen() {
  const [activeModule, setActiveModule] = React.useState('diabetes');
  const mod = MODULES.find(m => m.id === activeModule);

  return (
    <div style={{ paddingBottom: 32, background: 'var(--bg)', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg)', padding: '16px 20px 12px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: -0.4 }}>Health Trends</div>
        <div style={{ fontSize: 12, color: 'var(--text-hint)', marginTop: 2 }}>
          Tracking {REPORT_HISTORY.length} reports · Jan–Jul 2025
        </div>
      </div>

      {/* Module selector */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '12px 20px', scrollbarWidth: 'none', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        {MODULES.map(m => {
          const active = m.id === activeModule;
          return (
            <button
              key={m.id}
              onClick={() => setActiveModule(m.id)}
              style={{
                appearance: 'none', flexShrink: 0, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 14px', borderRadius: 99, fontFamily: 'var(--font-sans)',
                border: `1.5px solid ${active ? m.color : 'var(--border)'}`,
                background: active ? m.color : 'var(--surface-highest)',
                color: active ? '#fff' : 'var(--text-secondary)',
                fontSize: 12, fontWeight: 600, transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 14 }}>{m.emoji}</span>
              {m.name}
            </button>
          );
        })}
      </div>

      {/* Summary strip */}
      <div style={{ padding: '12px 20px', background: 'var(--bg)', marginBottom: 8, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: 16 }}>
          {mod.metrics.slice(0, 2).map(metric => {
            const first = REPORT_HISTORY[0][metric.key];
            const last = REPORT_HISTORY[REPORT_HISTORY.length - 1][metric.key];
            const improved = metric.warnMax ? last < first : last > first;
            const pct = Math.abs(((last - first) / first) * 100).toFixed(1);
            return (
              <div key={metric.key} style={{ flex: 1, padding: '10px 12px', borderRadius: 12,
                background: improved ? 'rgba(74,222,128,0.08)' : 'rgba(251,191,36,0.08)',
                border: `1px solid ${improved ? 'rgba(74,222,128,0.25)' : 'rgba(251,191,36,0.25)'}` }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {metric.name}
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: improved ? 'var(--success)' : 'var(--warning)', marginTop: 2 }}>
                  {improved ? '↓' : '↑'} {pct}%
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-hint)', marginTop: 1 }}>since Jan 2025</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metric charts */}
      <div style={{ padding: '4px 16px' }}>
        {mod.metrics.map(metric => (
          <MetricCard
            key={metric.key}
            metricDef={metric}
            data={REPORT_HISTORY}
            moduleColor={mod.color}
          />
        ))}
      </div>

      {/* Report list */}
      <div style={{ padding: '8px 16px 0' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-hint)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, paddingLeft: 4 }}>
          Reports Used
        </div>
        {REPORT_HISTORY.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
            background: 'var(--card)', borderRadius: 12, marginBottom: 6, border: '1px solid var(--border)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: `${mod.color}15`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
              {mod.emoji}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{r.lab}</div>
              <div style={{ fontSize: 11, color: 'var(--text-hint)' }}>{r.date}</div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: mod.color,
              background: `${mod.color}12`, padding: '3px 8px', borderRadius: 99 }}>
              {mod.metrics.filter(m => r[m.key] != null).length} metrics
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
