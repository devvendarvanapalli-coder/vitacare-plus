import React from 'react';

/**
 * VitaCare Plus — Badge
 * Pill with a 10% color tint, colored label and optional leading dot.
 * Mirrors StatusBadge (normal/warning/critical/success/info).
 */
export function Badge({ children, status = 'info', dot = true, style, ...rest }) {
  const colors = {
    info: 'var(--primary)',
    success: 'var(--success)',
    normal: 'var(--success)',
    warning: 'var(--warning)',
    critical: 'var(--error)',
    error: 'var(--error)',
    gold: 'var(--gold)',
  };
  const c = colors[status] || colors.info;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        padding: '4px 10px',
        borderRadius: 'var(--r-pill)',
        background: `color-mix(in srgb, ${c} 10%, transparent)`,
        color: c,
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 600,
        lineHeight: 1.4,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot ? (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: c, flexShrink: 0 }} />
      ) : null}
      {children}
    </span>
  );
}
