import React from 'react';

// Gradient cards: accent-only (membership banners, SOS, etc.)
const GRADS = {
  primary:  'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
  teal:     'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
  gold:     'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  sos:      'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
  platinum: 'linear-gradient(135deg, #818CF8 0%, #4F46E5 100%)',
  silver:   'linear-gradient(135deg, #94A3B8 0%, #64748B 100%)',
};

export function Card({ children, gradient, padding = 16, radius, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const press = typeof onClick === 'function';
  const r = radius ?? (gradient ? 14 : 12);

  return (
    <div
      onClick={onClick}
      onPointerDown={() => press && setP(true)}
      onPointerUp={() => setP(false)}
      onPointerLeave={() => setP(false)}
      style={{
        borderRadius: r,
        padding,
        boxSizing: 'border-box',
        background: gradient ? GRADS[gradient] : 'var(--card)',
        color: gradient ? '#fff' : 'var(--text-primary)',
        // Minimal: border instead of shadow for default cards
        border: gradient ? 'none' : '1px solid var(--border)',
        boxShadow: gradient ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
        cursor: press ? 'pointer' : 'default',
        WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-base) var(--ease-std), opacity var(--dur-base)',
        transform: p && press ? 'scale(0.99)' : 'scale(1)',
        opacity: p && press ? 0.92 : 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
