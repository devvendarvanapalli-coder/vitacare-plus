import React from 'react';
import { Icon } from './Icon';

export function MetricCard({ label, value, unit, icon, iconColor, delta, deltaLabel, onClick }) {
  const up = (delta ?? 0) > 0, down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';
  return (
    <div
      onClick={onClick}
      style={{
        width: 130, flexShrink: 0, padding: 14, borderRadius: 12,
        border: '1px solid var(--border)', background: 'var(--card)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <Icon name={icon} size={16} color={iconColor} />
        {delta != null && (
          <span style={{ fontSize: 10, fontWeight: 600, color: tc }}>{up ? '↑' : down ? '↓' : '—'} {Math.abs(delta).toFixed(1)}%</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.8, lineHeight: 1, fontVariantNumeric: 'tabular-nums', color: 'var(--text-primary)' }}>{value}</span>
        <span style={{ fontSize: 11, color: 'var(--text-hint)', marginLeft: 1 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4, fontWeight: 500 }}>{label}</div>
      {deltaLabel && <div style={{ fontSize: 10, color: 'var(--text-hint)', marginTop: 2 }}>{deltaLabel}</div>}
    </div>
  );
}
