import React from 'react';

/**
 * VitaCare Plus — BottomSheet
 * Modal overlay that slides up from the bottom. 20px top corners, drag handle,
 * optional title + close button. Backdrop click dismisses.
 * Mirrors Flutter's showModalBottomSheet behavior.
 */
export function BottomSheet({ open = false, onClose, title, children, maxHeight = '80vh', style }) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(15,23,42,0.5)',
          zIndex: 200,
          animation: 'vc-bs-fade var(--dur-medium) var(--ease-std)',
        }}
      />
      {/* Sheet */}
      <div
        style={{
          position: 'fixed', left: 0, right: 0, bottom: 0,
          background: 'var(--surface)',
          borderRadius: '20px 20px 0 0',
          zIndex: 201,
          maxHeight,
          overflowY: 'auto',
          boxSizing: 'border-box',
          animation: 'vc-bs-up var(--dur-medium) var(--ease-std)',
          ...style,
        }}
      >
        {/* Handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--border)' }} />
        </div>
        {/* Header */}
        {(title || onClose) && (
          <div style={{ display: 'flex', alignItems: 'center', padding: '8px 20px 12px' }}>
            {title && (
              <span style={{
                flex: 1, fontSize: 18, fontWeight: 700,
                color: 'var(--text-primary)', fontFamily: 'var(--font-sans)',
              }}>
                {title}
              </span>
            )}
            {onClose && (
              <button
                onClick={onClose}
                style={{
                  appearance: 'none', background: 'rgba(15,23,42,0.06)',
                  border: 'none', borderRadius: '50%',
                  width: 32, height: 32, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span className="iconify" data-icon="material-symbols:close-rounded"
                  style={{ fontSize: 18, color: 'var(--text-secondary)' }} />
              </button>
            )}
          </div>
        )}
        {/* Content */}
        <div style={{ padding: '0 20px 32px' }}>{children}</div>
      </div>
      <style>{`
        @keyframes vc-bs-fade{from{opacity:0}to{opacity:1}}
        @keyframes vc-bs-up{from{transform:translateY(100%)}to{transform:translateY(0)}}
      `}</style>
    </>
  );
}
