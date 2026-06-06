import React from 'react';

/**
 * VitaCare Plus — Chip
 * Selectable pill used in filters and the appointment booking sheet.
 * Selected state = tinted background + colored 1.5px border + colored label.
 */
export function Chip({ children, selected = false, color = 'primary', onClick, style, ...rest }) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        appearance: 'none',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 500,
        padding: '8px 14px',
        borderRadius: 'var(--r-pill)',
        cursor: 'pointer',
        transition: 'all var(--dur-medium) var(--ease-std)',
        background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)',
        border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`,
        color: selected ? c : 'var(--text-primary)',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
