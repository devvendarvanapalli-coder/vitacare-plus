import React from 'react';

/**
 * VitaCare Plus — Avatar
 * Gradient rounded-square (or circle) with user initials, or an image.
 */
export function Avatar({ initials, src, size = 42, shape = 'squircle', gradient = 'primary', style, ...rest }) {
  const gradients = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)',
  };
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)',
        background: src ? `center/cover url(${src})` : gradients[gradient] || gradients.primary,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: size * 0.34,
        flexShrink: 0,
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {!src && (initials || 'U')}
    </div>
  );
}
