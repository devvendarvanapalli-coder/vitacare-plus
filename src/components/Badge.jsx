export function Badge({ children, status = 'info', dot = true, style = {} }) {
  const c = { info: 'var(--primary)', success: 'var(--success)', normal: 'var(--success)', warning: 'var(--warning)', critical: 'var(--error)', error: 'var(--error)', gold: 'var(--gold)' }[status] || 'var(--primary)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 'var(--r-pill)', background: `color-mix(in srgb, ${c} 10%, transparent)`, color: c, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap', ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: c }} />}
      {children}
    </span>
  );
}
