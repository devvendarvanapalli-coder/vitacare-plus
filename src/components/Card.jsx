import React from 'react';

export function Card({ children, gradient, padding = 16, radius = 16, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const press = typeof onClick === 'function';
  const grads = { primary: 'var(--grad-primary)', teal: 'var(--grad-teal)', gold: 'var(--grad-gold)', sos: 'var(--grad-sos)' };
  const glow = { primary: 'var(--shadow-primary)', teal: '0 4px 16px rgba(13,148,136,.3)', gold: 'var(--shadow-gold)', sos: 'var(--shadow-sos)' };
  return (
    <div
      onClick={onClick}
      onPointerDown={() => press && setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{
        borderRadius: radius, padding, boxSizing: 'border-box',
        background: gradient ? grads[gradient] : 'var(--card)',
        color: gradient ? '#fff' : 'var(--text-primary)',
        boxShadow: gradient ? glow[gradient] : 'var(--shadow-card)',
        cursor: press ? 'pointer' : 'default', WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-base) var(--ease-std)',
        transform: p && press ? 'scale(0.98)' : 'scale(1)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
