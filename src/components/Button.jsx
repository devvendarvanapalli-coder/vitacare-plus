import React from 'react';
import { Icon } from './Icon';

function Spinner() {
  return <span style={{ width: 16, height: 16, border: '1.5px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', borderRadius: '50%', display: 'inline-block', animation: 'vcspin .7s linear infinite' }} />;
}

export function Button({ children, variant = 'primary', size = 'md', fullWidth, loading, disabled, leadingIcon, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const isOff = disabled || loading;
  const H = { sm: 36, md: 44, lg: 50 }[size];

  const fills = {
    // Flat fills — no gradients, minimal shadows
    primary:  { background: 'var(--primary)',   color: 'var(--on-primary)', boxShadow: 'none' },
    secondary:{ background: 'var(--surface-high)', color: 'var(--text-primary)', boxShadow: 'none' },
    danger:   { background: 'var(--error)',      color: '#130000',           boxShadow: 'none' },
    outlined: { background: 'transparent',       color: 'var(--primary)',    border: '1px solid var(--border)' },
    ghost:    { background: 'transparent',       color: 'var(--text-secondary)', border: '1px solid var(--border)' },
  }[variant];

  return (
    <button
      onClick={isOff ? undefined : onClick}
      onPointerDown={() => setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        width: fullWidth ? '100%' : 'auto', height: H, padding: size === 'sm' ? '0 14px' : '0 20px',
        borderRadius: 'var(--r-lg)', border: 'none', fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 13 : 14, fontWeight: 500, letterSpacing: 0.1,
        cursor: isOff ? 'default' : 'pointer', WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-fast) var(--ease-std), opacity var(--dur-fast)',
        transform: p && !isOff ? 'scale(0.97)' : 'scale(1)',
        opacity: isOff ? 0.42 : 1,
        ...fills,
        ...style,
      }}
    >
      {loading ? <Spinner /> : <>{leadingIcon && <Icon name={leadingIcon} size={16} />}<span>{children}</span></>}
    </button>
  );
}
