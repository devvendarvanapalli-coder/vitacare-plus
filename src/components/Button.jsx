import React from 'react';
import { Icon } from './Icon';

function Spinner({ color = '#fff' }) {
  return <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: color, borderRadius: '50%', display: 'inline-block', animation: 'vcspin .7s linear infinite' }} />;
}

export function Button({ children, variant = 'primary', size = 'md', fullWidth, loading, disabled, leadingIcon, onClick, style = {} }) {
  const [p, setP] = React.useState(false);
  const isOff = disabled || loading;
  const H = { sm: 40, md: 52, lg: 54 }[size];
  const fills = {
    primary: { background: 'var(--grad-primary)', color: '#fff', boxShadow: 'var(--shadow-primary)' },
    secondary: { background: 'var(--grad-teal)', color: '#fff' },
    danger: { background: 'var(--grad-sos)', color: '#fff', boxShadow: 'var(--shadow-sos)' },
    outlined: { background: 'transparent', color: 'var(--primary)', border: '1.5px solid var(--primary)' },
    ghost: { background: 'transparent', color: 'var(--primary)' },
  }[variant];
  return (
    <button
      onClick={isOff ? undefined : onClick}
      onPointerDown={() => setP(true)} onPointerUp={() => setP(false)} onPointerLeave={() => setP(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        width: fullWidth ? '100%' : 'auto', height: H, padding: '0 24px',
        borderRadius: 'var(--r-lg)', border: 'none', fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 14 : 15, fontWeight: 600, letterSpacing: 'var(--ls-button)',
        cursor: isOff ? 'default' : 'pointer', WebkitTapHighlightColor: 'transparent',
        transition: 'transform var(--dur-fast) var(--ease-std)',
        transform: p && !isOff ? 'scale(0.97)' : 'scale(1)',
        ...fills,
        ...(isOff ? { background: variant === 'outlined' || variant === 'ghost' ? 'transparent' : 'rgba(15,23,42,0.12)', color: 'rgba(15,23,42,0.38)', boxShadow: 'none', border: variant === 'outlined' ? '1.5px solid rgba(15,23,42,0.12)' : undefined } : {}),
        ...style,
      }}
    >
      {loading ? <Spinner /> : <>{leadingIcon && <Icon name={leadingIcon} size={18} />}<span>{children}</span></>}
    </button>
  );
}
