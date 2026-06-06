export function Chip({ children, selected, color = 'primary', onClick, style = {} }) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return (
    <button onClick={onClick} style={{ appearance: 'none', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, padding: '8px 14px', borderRadius: 'var(--r-pill)', cursor: 'pointer', transition: 'all var(--dur-medium) var(--ease-std)', background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)', border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`, color: selected ? c : 'var(--text-primary)', WebkitTapHighlightColor: 'transparent', ...style }}>{children}</button>
  );
}
