import React from 'react';
import { Icon } from './Icon';

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
  onFocus: onFocusProp,
  onBlur: onBlurProp,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const uid = id || `vc-input-${React.useId()}`;

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
          <Icon
            name={leadingIcon}
            size={20}
            color={error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--text-secondary)'}
          />
        )}
        <input
          id={uid}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={(e) => { setFocused(true); onFocusProp && onFocusProp(e); }}
          onBlur={(e) => { setFocused(false); onBlurProp && onBlurProp(e); }}
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
          <Icon
            name={trailingIcon}
            size={20}
            color="var(--text-secondary)"
            onClick={onTrailingIconClick}
            style={{ cursor: onTrailingIconClick ? 'pointer' : 'default' }}
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
