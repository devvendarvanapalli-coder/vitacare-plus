import React from 'react';

/**
 * VitaCare Plus — Button
 * Gradient-filled primary/secondary/danger, outlined & ghost variants.
 * Tap-down shrink to 0.97 mirrors the Flutter AppButton.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const isDisabled = disabled || loading;

  const heights = { sm: 40, md: 52, lg: 54 };
  const fontSizes = { sm: 14, md: 15, lg: 15 };

  const fills = {
    primary: { background: 'var(--grad-primary)', color: 'var(--on-primary)', boxShadow: 'var(--shadow-primary)' },
    secondary: { background: 'var(--grad-teal)', color: '#fff' },
    danger: { background: 'var(--grad-sos)', color: '#fff', boxShadow: 'var(--shadow-sos)' },
    outlined: { background: 'transparent', color: 'var(--primary)', border: '1.5px solid var(--primary)' },
    ghost: { background: 'transparent', color: 'var(--primary)' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: fullWidth ? '100%' : 'auto',
    height: heights[size],
    padding: '0 24px',
    borderRadius: 'var(--r-lg)',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontSize: fontSizes[size],
    fontWeight: 600,
    letterSpacing: 'var(--ls-button)',
    lineHeight: 1.3,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'transform var(--dur-fast) var(--ease-std), box-shadow var(--dur-medium) var(--ease-std)',
    transform: pressed && !isDisabled ? 'scale(0.97)' : 'scale(1)',
    WebkitTapHighlightColor: 'transparent',
    ...fills[variant],
  };

  const disabledStyle = isDisabled
    ? {
        background: variant === 'outlined' || variant === 'ghost' ? 'transparent' : 'rgba(15,23,42,0.12)',
        color: 'rgba(15,23,42,0.38)',
        border: variant === 'outlined' ? '1.5px solid rgba(15,23,42,0.12)' : base.border,
        boxShadow: 'none',
      }
    : {};

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      style={{ ...base, ...disabledStyle, ...style }}
      {...rest}
    >
      {loading ? (
        <Spinner color={base.color} />
      ) : (
        <>
          {leadingIcon ? <Icon name={leadingIcon} size={18} /> : null}
          <span>{children}</span>
          {trailingIcon ? <Icon name={trailingIcon} size={18} /> : null}
        </>
      )}
    </button>
  );
}

function Icon({ name, size }) {
  // Inline SVG via Iconify (consumer loads the iconify script once); filled rounded
  // Material Symbols to match VitaCare's button iconography.
  return (
    <span
      className="iconify"
      data-icon={`material-symbols:${String(name).replace(/_/g, '-')}-rounded`}
      style={{ fontSize: size, lineHeight: 0, display: 'inline-flex', flexShrink: 0 }}
    />
  );
}

function Spinner({ color }) {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        border: `2px solid ${color === '#fff' || color === 'var(--on-primary)' ? 'rgba(255,255,255,0.4)' : 'rgba(37,99,235,0.3)'}`,
        borderTopColor: color === 'var(--primary)' ? 'var(--primary)' : '#fff',
        borderRadius: '50%',
        display: 'inline-block',
        animation: 'vc-spin 0.7s linear infinite',
      }}
    >
      <style>{`@keyframes vc-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
