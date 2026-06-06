import React from 'react';

/**
 * VitaCare Plus — Card
 * Rounded 16px surface. Solid white by default (soft neutral shadow),
 * or a gradient hero card with a colored glow. Pressable when `onClick` is set.
 */
export function Card({
  children,
  gradient,
  padding = 16,
  onClick,
  radius = 16,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const isPressable = typeof onClick === 'function';

  const gradients = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)',
    sos: 'var(--grad-sos)',
  };
  const glow = {
    primary: 'var(--shadow-primary)',
    teal: '0 4px 16px rgba(13,148,136,0.3)',
    gold: 'var(--shadow-gold)',
    sos: 'var(--shadow-sos)',
  };

  const isGradient = Boolean(gradient);

  const base = {
    borderRadius: radius,
    padding,
    background: isGradient ? gradients[gradient] || gradient : 'var(--card)',
    boxShadow: isGradient ? glow[gradient] || 'var(--shadow-pop)' : 'var(--shadow-card)',
    color: isGradient ? '#fff' : 'var(--text-primary)',
    border: 'none',
    cursor: isPressable ? 'pointer' : 'default',
    transition: 'transform var(--dur-base) var(--ease-std)',
    transform: pressed && isPressable ? 'scale(0.98)' : 'scale(1)',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
  };

  return (
    <div
      onClick={onClick}
      onPointerDown={() => isPressable && setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{ ...base, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
