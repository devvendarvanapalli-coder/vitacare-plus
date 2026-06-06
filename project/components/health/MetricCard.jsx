import React from 'react';

/**
 * VitaCare Plus — MetricCard
 * Health vital display: icon tile, big number, unit, optional ±% delta badge.
 * Used in the dashboard Health Overview strip and module detail screens.
 * Each tracked vital owns a fixed iconColor accent:
 *   glucose → var(--vc-glucose-blue)  |  HbA1c → var(--vc-hba1c-teal)
 *   weight  → var(--vc-weight-purple) |  BP    → var(--vc-bp-orange)
 *   HR      → var(--vc-heart-rate)
 */
export function MetricCard({ label, value, unit, icon, iconColor, delta, deltaLabel, onClick, style }) {
  const [pressed, setPressed] = React.useState(false);
  const press = typeof onClick === 'function';
  const up = (delta ?? 0) > 0;
  const down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';

  return (
    <div
      onClick={onClick}
      onPointerDown={() => press && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        borderRadius: 'var(--r-card)',
        padding: 16,
        background: 'var(--card)',
        boxShadow: 'var(--shadow-card)',
        width: 140,
        flexShrink: 0,
        cursor: press ? 'pointer' : 'default',
        transform: pressed && press ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform var(--dur-base) var(--ease-std)',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: 40, height: 40, borderRadius: 'var(--r-md)',
          background: `color-mix(in srgb, ${iconColor} 10%, transparent)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="iconify"
            data-icon={`material-symbols:${String(icon).replace(/_/g, '-')}-rounded`}
            style={{ fontSize: 20, color: iconColor }}
          />
        </div>
        {delta != null && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 2,
            padding: '3px 6px', borderRadius: 6,
            background: `color-mix(in srgb, ${tc} 10%, transparent)`,
            color: tc, fontSize: 10, fontWeight: 600,
          }}>
            <span className="iconify"
              data-icon={`material-symbols:${up ? 'trending-up' : down ? 'trending-down' : 'trending-flat'}-rounded`}
              style={{ fontSize: 12 }}
            />
            {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginTop: 12 }}>
        <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
          {value}
        </span>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', paddingBottom: 2 }}>
          {unit}
        </span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginTop: 4 }}>{label}</div>
      {deltaLabel && (
        <div style={{ fontSize: 10, color: tc, marginTop: 2 }}>{deltaLabel}</div>
      )}
    </div>
  );
}
