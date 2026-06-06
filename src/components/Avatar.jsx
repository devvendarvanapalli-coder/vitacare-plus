export function Avatar({ initials = 'U', size = 42, shape = 'squircle', gradient = 'primary', style = {} }) {
  const grads = { primary: 'var(--grad-primary)', teal: 'var(--grad-teal)', gold: 'var(--grad-gold)' };
  return (
    <div style={{ width: size, height: size, borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)', background: grads[gradient] || grads.primary, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: size * 0.34, flexShrink: 0, ...style }}>{initials}</div>
  );
}
