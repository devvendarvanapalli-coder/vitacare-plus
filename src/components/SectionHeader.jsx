export function SectionHeader({ title, action, onAction }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)' }}>{title}</span>
      {action && <button onClick={onAction} style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--primary)' }}>{action}</button>}
    </div>
  );
}
