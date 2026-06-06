/* VitaCare Plus — UI kit primitives (self-contained recreation of the
 * component library for an openable, dependency-free prototype).
 * Mirrors components/core/* and the Flutter widgets 1:1 on styling. */

/* Icons render as inline (light-DOM) SVG via the Iconify scanning library,
 * pulling the exact Material Symbols Rounded set the app uses. Inline SVG so it
 * rasterizes everywhere (live, DS-tab thumbnails, PDF/PNG export). */
const VC_NO_OUTLINE = new Set([
  'trending_up', 'trending_down', 'trending_flat', 'add', 'arrow_back', 'chevron_right',
  'directions_walk', 'family_restroom', 'accessibility_new', 'logout', 'wifi_calling_3', 'sos',
  'monitor_weight', 'face', 'credit_card',
]);

function vcIconId(name, fill) {
  const base = name.replace(/_/g, '-');
  const filled = fill === 1 || VC_NO_OUTLINE.has(name);
  return `material-symbols:${base}${filled ? '-rounded' : '-outline-rounded'}`;
}

function Icon({ name, size = 22, fill = 0, color = 'currentColor', style = {}, onClick }) {
  return (
    <span
      className="iconify"
      data-icon={vcIconId(name, fill)}
      onClick={onClick}
      style={{ fontSize: size, lineHeight: 0, color, flexShrink: 0, display: 'inline-flex', ...style }}
    />
  );
}

function Button({ children, variant = 'primary', size = 'md', fullWidth, loading, disabled, leadingIcon, onClick, style = {} }) {
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

function Spinner({ color = '#fff' }) {
  return <span style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.4)', borderTopColor: color, borderRadius: '50%', display: 'inline-block', animation: 'vcspin .7s linear infinite' }} />;
}

function Card({ children, gradient, padding = 16, radius = 16, onClick, style = {} }) {
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

function Badge({ children, status = 'info', dot = true, style = {} }) {
  const c = { info: 'var(--primary)', success: 'var(--success)', normal: 'var(--success)', warning: 'var(--warning)', critical: 'var(--error)', error: 'var(--error)', gold: 'var(--gold)' }[status];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 'var(--r-pill)', background: `color-mix(in srgb, ${c} 10%, transparent)`, color: c, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />}
      {children}
    </span>
  );
}

function Avatar({ initials = 'U', size = 42, shape = 'squircle', gradient = 'primary', style = {} }) {
  const grads = { primary: 'var(--grad-primary)', teal: 'var(--grad-teal)', gold: 'var(--grad-gold)' };
  return (
    <div style={{ width: size, height: size, borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)', background: grads[gradient], color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size * 0.34, flexShrink: 0, ...style }}>{initials}</div>
  );
}

function Chip({ children, selected, color = 'primary', onClick, style = {} }) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return (
    <button onClick={onClick} style={{ appearance: 'none', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, padding: '8px 14px', borderRadius: 'var(--r-pill)', cursor: 'pointer', transition: 'all var(--dur-medium) var(--ease-std)', background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)', border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`, color: selected ? c : 'var(--text-primary)', WebkitTapHighlightColor: 'transparent', ...style }}>{children}</button>
  );
}

function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>{title}</span>
      {action && <button onClick={onAction} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--primary)' }}>{action}</button>}
    </div>
  );
}

function MetricCard({ label, value, unit, icon, iconColor, delta, deltaLabel, onClick }) {
  const up = (delta ?? 0) > 0, down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';
  return (
    <Card padding={16} onClick={onClick} style={{ width: 140, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 40, height: 40, borderRadius: 'var(--r-md)', background: `color-mix(in srgb, ${iconColor} 10%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} size={20} color={iconColor} />
        </div>
        {delta != null && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: '3px 6px', borderRadius: 6, background: `color-mix(in srgb, ${tc} 10%, transparent)`, color: tc, fontSize: 10, fontWeight: 600 }}>
            <Icon name={up ? 'trending_up' : down ? 'trending_down' : 'trending_flat'} size={12} color={tc} />
            {Math.abs(delta).toFixed(1)}%
          </span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginTop: 12 }}>
        <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', paddingBottom: 2 }}>{unit}</span>
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-secondary)', marginTop: 4 }}>{label}</div>
      {deltaLabel && <div style={{ fontSize: 10, color: tc, marginTop: 2 }}>{deltaLabel}</div>}
    </Card>
  );
}

Object.assign(window, { Icon, Button, Spinner, Card, Badge, Avatar, Chip, SectionHeader, MetricCard });
