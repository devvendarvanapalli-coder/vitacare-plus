import React from 'react';
import { Icon } from './Icon';
import { Card } from './Card';

export function MetricCard({ label, value, unit, icon, iconColor, delta, deltaLabel, onClick }) {
  const up = (delta ?? 0) > 0, down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';
  return (
    <Card padding={16} onClick={onClick} style={{ width: 140, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: `color-mix(in srgb, ${iconColor} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={20} color={iconColor} />
        </div>
        {delta != null && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: '3px 6px', borderRadius: 6, background: `color-mix(in srgb, ${tc} 10%, transparent)`, color: tc, fontSize: 10, fontWeight: 600 }}>
            <Icon name={up ? 'trending_up' : down ? 'trending_down' : 'trending_flat'} size={12} color={tc} />
            {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginTop: 12 }}>
        <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', paddingBottom: 2 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginTop: 4 }}>{label}</div>
      {deltaLabel && <div style={{ fontSize: 10, color: tc, marginTop: 2 }}>{deltaLabel}</div>}
    </Card>
  );
}
