import React from 'react';

/**
 * VitaCare Plus — Input
 * Labeled text field with focus/error states and optional icon slots.
 * Mirrors Flutter's VcTextField: 12px radius, 1.5px focus border, Inter.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helper,
  error,
  leadingIcon,
  trailingIcon,
  onTrailingIconClick,
  disabled = false,
  size = 'md',
  id,
  style,
  inputStyle,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const uid = id || `vc-input-${React.useId ? React.useId() : Math.random().toString(36).slice(2)}`;

  const borderColor = error
    ? 'var(--error)'
    : focused
    ? 'var(--primary)'
    : 'var(--border)';

  const heights = { sm: 44, md: 52, lg: 56 };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }}>
      {label && (
        <label
          htmlFor={uid}
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: error ? 'var(--error)' : 'var(--text-primary)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: heights[size],
          padding: '0 14px',
          borderRadius: 'var(--r-lg)',
          border: `1.5px solid ${borderColor}`,
          background: disabled ? 'rgba(15,23,42,0.04)' : 'var(--surface)',
          transition: 'border-color var(--dur-medium) var(--ease-std)',
          boxSizing: 'border-box',
        }}
      >
        {leadingIcon && (
          <span
            className="iconify"
            data-icon={`material-symbols:${String(leadingIcon).replace(/_/g, '-')}-outline-rounded`}
            style={{
              fontSize: 20,
              color: error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--text-secondary)',
              flexShrink: 0,
              transition: 'color var(--dur-medium) var(--ease-std)',
            }}
          />
        )}
        <input
          id={uid}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: size === 'sm' ? 13 : 15,
            fontWeight: 400,
            color: disabled ? 'var(--text-hint)' : 'var(--text-primary)',
            cursor: disabled ? 'not-allowed' : 'text',
            ...inputStyle,
          }}
          {...rest}
        />
        {trailingIcon && (
          <span
            className="iconify"
            data-icon={`material-symbols:${String(trailingIcon).replace(/_/g, '-')}-outline-rounded`}
            onClick={onTrailingIconClick}
            style={{
              fontSize: 20,
              color: 'var(--text-secondary)',
              flexShrink: 0,
              cursor: onTrailingIconClick ? 'pointer' : 'default',
            }}
          />
        )}
      </div>
      {(helper || error) && (
        <span style={{ fontSize: 12, color: error ? 'var(--error)' : 'var(--text-secondary)' }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
