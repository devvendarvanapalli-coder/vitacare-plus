import React from 'react';

/**
 * VitaCare Plus — MedicationCard
 * Single medication row: icon tile, drug name + dosage schedule, Taken/Pending status pill.
 * Used in Today's Medications on the dashboard and the medication management screen.
 */
export function MedicationCard({ name, dosage, taken = false, icon = 'medication', onToggle, onClick, style }) {
  const [pressed, setPressed] = React.useState(false);
  const press = typeof onClick === 'function' || typeof onToggle === 'function';
  const handler = onClick || onToggle;
  const color = taken ? 'var(--success)' : 'var(--warning)';

  return (
    <div
      onClick={handler}
      onPointerDown={() => press && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 14px',
        borderRadius: 'var(--r-card)',
        background: 'var(--card)',
        boxShadow: 'var(--shadow-card)',
        cursor: press ? 'pointer' : 'default',
        transform: pressed && press ? 'scale(0.98)' : 'scale(1)',
        transition: 'transform var(--dur-base) var(--ease-std)',
        fontFamily: 'var(--font-sans)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 'var(--r-md)',
        background: `color-mix(in srgb, ${color} 10%, transparent)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <span className="iconify"
          data-icon={`material-symbols:${String(icon).replace(/_/g, '-')}-rounded`}
          style={{ fontSize: 18, color }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {name}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2 }}>{dosage}</div>
      </div>
      <span style={{
        fontSize: 11, fontWeight: 600, padding: '4px 10px',
        borderRadius: 'var(--r-sm)', flexShrink: 0, color,
        background: `color-mix(in srgb, ${color} 10%, transparent)`,
      }}>
        {taken ? 'Taken' : 'Pending'}
      </span>
    </div>
  );
}
