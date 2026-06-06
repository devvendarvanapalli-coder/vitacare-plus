import React from 'react';

/**
 * VitaCare Plus — BottomNav
 * Fixed bottom navigation bar with up to 5 items.
 * Active tab: filled icon + primary-blue label.
 * Inactive tab: outlined icon + slate-500 label.
 * Floats above content with shadow-nav.
 */
export function BottomNav({ items, activeIndex = 0, onSelect, style }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: 'var(--shadow-nav)',
      boxSizing: 'border-box',
      ...style,
    }}>
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        const iconName = `material-symbols:${String(item.icon).replace(/_/g, '-')}${isActive ? '-rounded' : '-outline-rounded'}`;
        return (
          <button
            key={i}
            onClick={() => onSelect?.(i)}
            style={{
              appearance: 'none', background: 'none', border: 'none',
              cursor: 'pointer', flex: 1,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: 3,
              padding: '10px 4px 14px',
              WebkitTapHighlightColor: 'transparent',
              fontFamily: 'var(--font-sans)',
              transition: 'opacity var(--dur-fast) var(--ease-std)',
            }}
          >
            {item.badge ? (
              <div style={{ position: 'relative' }}>
                <span className="iconify" data-icon={iconName}
                  style={{ fontSize: 24, color: isActive ? 'var(--primary)' : 'var(--text-hint)', display: 'block', transition: 'color var(--dur-medium) var(--ease-std)' }}
                />
                <span style={{
                  position: 'absolute', top: -2, right: -4,
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--error)',
                  border: '1.5px solid var(--surface)',
                }} />
              </div>
            ) : (
              <span className="iconify" data-icon={iconName}
                style={{ fontSize: 24, color: isActive ? 'var(--primary)' : 'var(--text-hint)', transition: 'color var(--dur-medium) var(--ease-std)' }}
              />
            )}
            <span style={{
              fontSize: 10,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
              transition: 'color var(--dur-medium) var(--ease-std)',
            }}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
