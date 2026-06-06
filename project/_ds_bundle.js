/* @ds-bundle: {"format":3,"namespace":"VitaCarePlusDesignSystem_da9342","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BottomNav","sourcePath":"components/core/BottomNav.jsx"},{"name":"BottomSheet","sourcePath":"components/core/BottomSheet.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"MedicationCard","sourcePath":"components/health/MedicationCard.jsx"},{"name":"MetricCard","sourcePath":"components/health/MetricCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"19f256a456fe","components/core/Badge.jsx":"450a7efe94f1","components/core/BottomNav.jsx":"a4bb0d44e70f","components/core/BottomSheet.jsx":"5520fe4fdd8c","components/core/Button.jsx":"544351a6a1e9","components/core/Card.jsx":"d80fab2fef6a","components/core/Chip.jsx":"7ac0413947f0","components/core/Input.jsx":"b2ac4cdbee4c","components/health/MedicationCard.jsx":"aaa83b399758","components/health/MetricCard.jsx":"f468e3f32629","ui_kits/admin-app/AdminApp.jsx":"5c7fafd03b4c","ui_kits/admin-app/screen-overview.jsx":"cbd5b33278da","ui_kits/admin-app/screen-users.jsx":"c0dd086d97ca","ui_kits/doctor-app/DoctorApp.jsx":"74b0823446c1","ui_kits/doctor-app/ios-frame.jsx":"be3343be4b51","ui_kits/doctor-app/screen-consultation.jsx":"7460f94f0a55","ui_kits/doctor-app/screen-patients.jsx":"2ac4996d47f9","ui_kits/doctor-app/screen-rx.jsx":"5784272405a0","ui_kits/doctor-app/screen-schedule.jsx":"3c02c642b94d","ui_kits/doctor-app/vc-ui.jsx":"fe201703f546","ui_kits/patient-app/App.jsx":"a83dc70571a6","ui_kits/patient-app/ios-frame.jsx":"be3343be4b51","ui_kits/patient-app/screen-appointments.jsx":"4ed2961eb456","ui_kits/patient-app/screen-dashboard.jsx":"973b7c4ba839","ui_kits/patient-app/screen-login.jsx":"774803fa9cb8","ui_kits/patient-app/screen-membership.jsx":"131c79ca4749","ui_kits/patient-app/screen-sos.jsx":"41d6fb40dd91","ui_kits/patient-app/vc-ui.jsx":"7e78d211615f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VitaCarePlusDesignSystem_da9342 = window.VitaCarePlusDesignSystem_da9342 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Avatar
 * Gradient rounded-square (or circle) with user initials, or an image.
 */
function Avatar({
  initials,
  src,
  size = 42,
  shape = 'squircle',
  gradient = 'primary',
  style,
  ...rest
}) {
  const gradients = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)',
      background: src ? `center/cover url(${src})` : gradients[gradient] || gradients.primary,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.34,
      flexShrink: 0,
      overflow: 'hidden',
      ...style
    }
  }, rest), !src && (initials || 'U'));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Badge
 * Pill with a 10% color tint, colored label and optional leading dot.
 * Mirrors StatusBadge (normal/warning/critical/success/info).
 */
function Badge({
  children,
  status = 'info',
  dot = true,
  style,
  ...rest
}) {
  const colors = {
    info: 'var(--primary)',
    success: 'var(--success)',
    normal: 'var(--success)',
    warning: 'var(--warning)',
    critical: 'var(--error)',
    error: 'var(--error)',
    gold: 'var(--gold)'
  };
  const c = colors[status] || colors.info;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--r-pill)',
      background: `color-mix(in srgb, ${c} 10%, transparent)`,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c,
      flexShrink: 0
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BottomNav.jsx
try { (() => {
/**
 * VitaCare Plus — BottomNav
 * Fixed bottom navigation bar with up to 5 items.
 * Active tab: filled icon + primary-blue label.
 * Inactive tab: outlined icon + slate-500 label.
 * Floats above content with shadow-nav.
 */
function BottomNav({
  items,
  activeIndex = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: 'var(--shadow-nav)',
      boxSizing: 'border-box',
      ...style
    }
  }, items.map((item, i) => {
    const isActive = i === activeIndex;
    const iconName = `material-symbols:${String(item.icon).replace(/_/g, '-')}${isActive ? '-rounded' : '-outline-rounded'}`;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onSelect?.(i),
      style: {
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '10px 4px 14px',
        WebkitTapHighlightColor: 'transparent',
        fontFamily: 'var(--font-sans)',
        transition: 'opacity var(--dur-fast) var(--ease-std)'
      }
    }, item.badge ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "iconify",
      "data-icon": iconName,
      style: {
        fontSize: 24,
        color: isActive ? 'var(--primary)' : 'var(--text-hint)',
        display: 'block',
        transition: 'color var(--dur-medium) var(--ease-std)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: -2,
        right: -4,
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--error)',
        border: '1.5px solid var(--surface)'
      }
    })) : /*#__PURE__*/React.createElement("span", {
      className: "iconify",
      "data-icon": iconName,
      style: {
        fontSize: 24,
        color: isActive ? 'var(--primary)' : 'var(--text-hint)',
        transition: 'color var(--dur-medium) var(--ease-std)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: isActive ? 700 : 500,
        color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-medium) var(--ease-std)'
      }
    }, item.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/core/BottomSheet.jsx
try { (() => {
/**
 * VitaCare Plus — BottomSheet
 * Modal overlay that slides up from the bottom. 20px top corners, drag handle,
 * optional title + close button. Backdrop click dismisses.
 * Mirrors Flutter's showModalBottomSheet behavior.
 */
function BottomSheet({
  open = false,
  onClose,
  title,
  children,
  maxHeight = '80vh',
  style
}) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(15,23,42,0.5)',
      zIndex: 200,
      animation: 'vc-bs-fade var(--dur-medium) var(--ease-std)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--surface)',
      borderRadius: '20px 20px 0 0',
      zIndex: 201,
      maxHeight,
      overflowY: 'auto',
      boxSizing: 'border-box',
      animation: 'vc-bs-up var(--dur-medium) var(--ease-std)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '12px 0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--border)'
    }
  })), (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 20px 12px'
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 18,
      fontWeight: 700,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      appearance: 'none',
      background: 'rgba(15,23,42,0.06)',
      border: 'none',
      borderRadius: '50%',
      width: 32,
      height: 32,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:close-rounded",
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 32px'
    }
  }, children)), /*#__PURE__*/React.createElement("style", null, `
        @keyframes vc-bs-fade{from{opacity:0}to{opacity:1}}
        @keyframes vc-bs-up{from{transform:translateY(100%)}to{transform:translateY(0)}}
      `));
}
Object.assign(__ds_scope, { BottomSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BottomSheet.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Button
 * Gradient-filled primary/secondary/danger, outlined & ghost variants.
 * Tap-down shrink to 0.97 mirrors the Flutter AppButton.
 */
function Button({
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
  const heights = {
    sm: 40,
    md: 52,
    lg: 54
  };
  const fontSizes = {
    sm: 14,
    md: 15,
    lg: 15
  };
  const fills = {
    primary: {
      background: 'var(--grad-primary)',
      color: 'var(--on-primary)',
      boxShadow: 'var(--shadow-primary)'
    },
    secondary: {
      background: 'var(--grad-teal)',
      color: '#fff'
    },
    danger: {
      background: 'var(--grad-sos)',
      color: '#fff',
      boxShadow: 'var(--shadow-sos)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)'
    }
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
    ...fills[variant]
  };
  const disabledStyle = isDisabled ? {
    background: variant === 'outlined' || variant === 'ghost' ? 'transparent' : 'rgba(15,23,42,0.12)',
    color: 'rgba(15,23,42,0.38)',
    border: variant === 'outlined' ? '1.5px solid rgba(15,23,42,0.12)' : base.border,
    boxShadow: 'none'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      ...base,
      ...disabledStyle,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, {
    color: base.color
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon ? /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 18
  }) : null, /*#__PURE__*/React.createElement("span", null, children), trailingIcon ? /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 18
  }) : null));
}
function Icon({
  name,
  size
}) {
  // Inline SVG via Iconify (consumer loads the iconify script once); filled rounded
  // Material Symbols to match VitaCare's button iconography.
  return /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${String(name).replace(/_/g, '-')}-rounded`,
    style: {
      fontSize: size,
      lineHeight: 0,
      display: 'inline-flex',
      flexShrink: 0
    }
  });
}
function Spinner({
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: `2px solid ${color === '#fff' || color === 'var(--on-primary)' ? 'rgba(255,255,255,0.4)' : 'rgba(37,99,235,0.3)'}`,
      borderTopColor: color === 'var(--primary)' ? 'var(--primary)' : '#fff',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'vc-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes vc-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Card
 * Rounded 16px surface. Solid white by default (soft neutral shadow),
 * or a gradient hero card with a colored glow. Pressable when `onClick` is set.
 */
function Card({
  children,
  gradient,
  padding = 16,
  onClick,
  radius = 16,
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const isPressable = typeof onClick === 'function';
  const gradients = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)',
    sos: 'var(--grad-sos)'
  };
  const glow = {
    primary: 'var(--shadow-primary)',
    teal: '0 4px 16px rgba(13,148,136,0.3)',
    gold: 'var(--shadow-gold)',
    sos: 'var(--shadow-sos)'
  };
  const isGradient = Boolean(gradient);
  const base = {
    borderRadius: radius,
    padding,
    background: isGradient ? gradients[gradient] || gradient : 'var(--card)',
    boxShadow: isGradient ? glow[gradient] || 'var(--shadow-pop)' : 'var(--shadow-card)',
    color: isGradient ? '#fff' : 'var(--text-primary)',
    border: 'none',
    cursor: isPressable ? 'pointer' : 'default',
    transition: 'transform var(--dur-base) var(--ease-std)',
    transform: pressed && isPressable ? 'scale(0.98)' : 'scale(1)',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onPointerDown: () => isPressable && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Chip
 * Selectable pill used in filters and the appointment booking sheet.
 * Selected state = tinted background + colored 1.5px border + colored label.
 */
function Chip({
  children,
  selected = false,
  color = 'primary',
  onClick,
  style,
  ...rest
}) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      transition: 'all var(--dur-medium) var(--ease-std)',
      background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)',
      border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`,
      color: selected ? c : 'var(--text-primary)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VitaCare Plus — Input
 * Labeled text field with focus/error states and optional icon slots.
 * Mirrors Flutter's VcTextField: 12px radius, 1.5px focus border, Inter.
 */
function Input({
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
  const borderColor = error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--border)';
  const heights = {
    sm: 44,
    md: 52,
    lg: 56
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: error ? 'var(--error)' : 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: heights[size],
      padding: '0 14px',
      borderRadius: 'var(--r-lg)',
      border: `1.5px solid ${borderColor}`,
      background: disabled ? 'rgba(15,23,42,0.04)' : 'var(--surface)',
      transition: 'border-color var(--dur-medium) var(--ease-std)',
      boxSizing: 'border-box'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${String(leadingIcon).replace(/_/g, '-')}-outline-rounded`,
    style: {
      fontSize: 20,
      color: error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--text-secondary)',
      flexShrink: 0,
      transition: 'color var(--dur-medium) var(--ease-std)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 13 : 15,
      fontWeight: 400,
      color: disabled ? 'var(--text-hint)' : 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'text',
      ...inputStyle
    }
  }, rest)), trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${String(trailingIcon).replace(/_/g, '-')}-outline-rounded`,
    onClick: onTrailingIconClick,
    style: {
      fontSize: 20,
      color: 'var(--text-secondary)',
      flexShrink: 0,
      cursor: onTrailingIconClick ? 'pointer' : 'default'
    }
  })), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--text-secondary)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/health/MedicationCard.jsx
try { (() => {
/**
 * VitaCare Plus — MedicationCard
 * Single medication row: icon tile, drug name + dosage schedule, Taken/Pending status pill.
 * Used in Today's Medications on the dashboard and the medication management screen.
 */
function MedicationCard({
  name,
  dosage,
  taken = false,
  icon = 'medication',
  onToggle,
  onClick,
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const press = typeof onClick === 'function' || typeof onToggle === 'function';
  const handler = onClick || onToggle;
  const color = taken ? 'var(--success)' : 'var(--warning)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: handler,
    onPointerDown: () => press && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 'var(--r-card)',
      background: 'var(--card)',
      boxShadow: 'var(--shadow-card)',
      cursor: press ? 'pointer' : 'default',
      transform: pressed && press ? 'scale(0.98)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-std)',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${color} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${String(icon).replace(/_/g, '-')}-rounded`,
    style: {
      fontSize: 18,
      color
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, dosage)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--r-sm)',
      flexShrink: 0,
      color,
      background: `color-mix(in srgb, ${color} 10%, transparent)`
    }
  }, taken ? 'Taken' : 'Pending'));
}
Object.assign(__ds_scope, { MedicationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/health/MedicationCard.jsx", error: String((e && e.message) || e) }); }

// components/health/MetricCard.jsx
try { (() => {
/**
 * VitaCare Plus — MetricCard
 * Health vital display: icon tile, big number, unit, optional ±% delta badge.
 * Used in the dashboard Health Overview strip and module detail screens.
 * Each tracked vital owns a fixed iconColor accent:
 *   glucose → var(--vc-glucose-blue)  |  HbA1c → var(--vc-hba1c-teal)
 *   weight  → var(--vc-weight-purple) |  BP    → var(--vc-bp-orange)
 *   HR      → var(--vc-heart-rate)
 */
function MetricCard({
  label,
  value,
  unit,
  icon,
  iconColor,
  delta,
  deltaLabel,
  onClick,
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const press = typeof onClick === 'function';
  const up = (delta ?? 0) > 0;
  const down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onPointerDown: () => press && setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      borderRadius: 'var(--r-card)',
      padding: 16,
      background: 'var(--card)',
      boxShadow: 'var(--shadow-card)',
      width: 140,
      flexShrink: 0,
      cursor: press ? 'pointer' : 'default',
      transform: pressed && press ? 'scale(0.98)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-std)',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${iconColor} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${String(icon).replace(/_/g, '-')}-rounded`,
    style: {
      fontSize: 20,
      color: iconColor
    }
  })), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: '3px 6px',
      borderRadius: 6,
      background: `color-mix(in srgb, ${tc} 10%, transparent)`,
      color: tc,
      fontSize: 10,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${up ? 'trending-up' : down ? 'trending-down' : 'trending-flat'}-rounded`,
    style: {
      fontSize: 12
    }
  }), Math.abs(delta).toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: -1,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      paddingBottom: 2
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, label), deltaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: tc,
      marginTop: 2
    }
  }, deltaLabel));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/health/MetricCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-app/AdminApp.jsx
try { (() => {
/* VitaCare Plus — Admin dashboard App shell: sidebar + routing */

const ADMIN_NAV = [{
  icon: 'home',
  label: 'Overview',
  id: 'overview'
}, {
  icon: 'group',
  label: 'Users',
  id: 'users'
}, {
  icon: 'calendar_today',
  label: 'Appointments',
  id: 'appointments'
}, {
  icon: 'workspace_premium',
  label: 'Subscriptions',
  id: 'subscriptions'
}, {
  icon: 'description',
  label: 'Reports',
  id: 'reports'
}, {
  icon: 'settings',
  label: 'Settings',
  id: 'settings'
}];
function Sidebar({
  active,
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 230,
      flexShrink: 0,
      background: 'var(--surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 20px',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'var(--grad-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:favorite-rounded",
    style: {
      fontSize: 18,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "VitaCare Plus"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--text-secondary)',
      fontWeight: 500
    }
  }, "Admin Dashboard")))), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      padding: '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, ADMIN_NAV.map(item => {
    const isActive = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onNav(item.id),
      style: {
        appearance: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 12px',
        borderRadius: 'var(--r-lg)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        background: isActive ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'transparent',
        color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
        transition: 'all var(--dur-medium) var(--ease-std)',
        textAlign: 'left',
        width: '100%'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = 'var(--bg)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "iconify",
      "data-icon": `material-symbols:${item.icon.replace(/_/g, '-')}${isActive ? '-rounded' : '-outline-rounded'}`,
      style: {
        fontSize: 20,
        flexShrink: 0
      }
    }), item.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--r-lg)',
      background: 'var(--grad-sos)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0
    }
  }, "AD"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Admin User"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, "admin@vitacare.in")), /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:logout-rounded",
    style: {
      fontSize: 18,
      color: 'var(--text-hint)',
      cursor: 'pointer',
      flexShrink: 0
    }
  })));
}
function PlaceholderScreen({
  title,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: 'var(--r-2xl)',
      background: 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${icon}-rounded`,
    style: {
      fontSize: 28,
      color: 'var(--primary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "This screen is a placeholder \u2014 extend as needed."));
}
function AdminApp() {
  const [screen, setScreen] = React.useState('overview');
  let content;
  if (screen === 'overview') content = /*#__PURE__*/React.createElement(OverviewScreen, null);else if (screen === 'users') content = /*#__PURE__*/React.createElement(UsersScreen, null);else if (screen === 'appointments') content = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    title: "Appointments",
    icon: "calendar-today"
  });else if (screen === 'subscriptions') content = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    title: "Subscriptions",
    icon: "workspace-premium"
  });else if (screen === 'reports') content = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    title: "Reports",
    icon: "description"
  });else content = /*#__PURE__*/React.createElement(PlaceholderScreen, {
    title: "Settings",
    icon: "settings"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      fontFamily: 'var(--font-sans)',
      background: 'var(--bg)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: screen,
    onNav: setScreen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column'
    }
  }, content));
}
Object.assign(window, {
  AdminApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-app/AdminApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-app/screen-overview.jsx
try { (() => {
/* VitaCare Plus — Admin dashboard: Overview screen */

const APPTS_BY_DAY = [{
  day: 'Mon',
  count: 38
}, {
  day: 'Tue',
  count: 52
}, {
  day: 'Wed',
  count: 61
}, {
  day: 'Thu',
  count: 47
}, {
  day: 'Fri',
  count: 73
}, {
  day: 'Sat',
  count: 29
}, {
  day: 'Sun',
  count: 14
}];
const PLANS = [{
  name: 'Silver',
  count: 2841,
  revenue: '₹14.2L',
  color: 'var(--vc-slate-400, #94A3B8)',
  grad: 'var(--grad-silver)'
}, {
  name: 'Gold',
  count: 5103,
  revenue: '₹51.0L',
  color: 'var(--vc-gold, #D97706)',
  grad: 'var(--grad-gold)',
  badge: true
}, {
  name: 'Platinum',
  count: 998,
  revenue: '₹19.9L',
  color: '#818CF8',
  grad: 'var(--grad-platinum)'
}];
const RECENT_APPTS = [{
  patient: 'Rohan Kapoor',
  doctor: 'Dr. Priya Sharma',
  type: 'Video',
  time: '10:00 AM',
  status: 'confirmed'
}, {
  patient: 'Anjali Mehta',
  doctor: 'Dr. Rajesh Gupta',
  type: 'In-Clinic',
  time: '10:30 AM',
  status: 'confirmed'
}, {
  patient: 'Vikram Nair',
  doctor: 'Dr. Priya Sharma',
  type: 'Video',
  time: '11:15 AM',
  status: 'pending'
}, {
  patient: 'Sunita Verma',
  doctor: 'Dr. Amara Singh',
  type: 'In-Clinic',
  time: '11:30 AM',
  status: 'confirmed'
}, {
  patient: 'Suresh Kumar',
  doctor: 'Dr. Priya Sharma',
  type: 'Video',
  time: '2:00 PM',
  status: 'pending'
}];
function KpiCard({
  icon,
  label,
  value,
  sub,
  color,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      padding: '20px 22px',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${color} 12%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${icon.replace(/_/g, '-')}-rounded`,
    style: {
      fontSize: 20,
      color
    }
  })), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: trend > 0 ? 'var(--success)' : 'var(--error)',
      background: `color-mix(in srgb, ${trend > 0 ? 'var(--success)' : 'var(--error)'} 10%, transparent)`,
      padding: '3px 8px',
      borderRadius: 6
    }
  }, trend > 0 ? '+' : '', trend, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: -0.5,
      color: 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, sub)));
}
function BarChart({
  data
}) {
  const max = Math.max(...data.map(d => d.count));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      height: 120,
      padding: '0 4px'
    }
  }, data.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, d.count), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      borderRadius: '4px 4px 0 0',
      background: 'var(--grad-primary)',
      height: `${d.count / max * 80}px`,
      minHeight: 4,
      opacity: d.day === 'Fri' ? 1 : 0.5
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, d.day))));
}
function OverviewScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 40px',
      overflowY: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: -0.5
    }
  }, "Overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    icon: "group",
    label: "Total Patients",
    value: "12,483",
    sub: "Active registered users",
    color: "var(--primary)",
    trend: 8.2
  }), /*#__PURE__*/React.createElement(KpiCard, {
    icon: "workspace_premium",
    label: "Active Subscriptions",
    value: "8,942",
    sub: "Gold 57% \xB7 Silver 32%",
    color: "var(--gold)",
    trend: 4.1
  }), /*#__PURE__*/React.createElement(KpiCard, {
    icon: "payments",
    label: "Today's Revenue",
    value: "\u20B989,420",
    sub: "18% GST included",
    color: "var(--success)",
    trend: 12.5
  }), /*#__PURE__*/React.createElement(KpiCard, {
    icon: "calendar_today",
    label: "Appointments Today",
    value: "247",
    sub: "Video 68% \xB7 In-Clinic 32%",
    color: "var(--secondary)",
    trend: -3.0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      padding: 20,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 4
    }
  }, "Appointments This Week"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginBottom: 20
    }
  }, "Total: ", APPTS_BY_DAY.reduce((s, d) => s + d.count, 0), " consultations"), /*#__PURE__*/React.createElement(BarChart, {
    data: APPTS_BY_DAY
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      padding: 20,
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 16
    }
  }, "Subscriptions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-md)',
      background: p.grad,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:workspace-premium-rounded",
    style: {
      fontSize: 18,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, p.name), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: 0.5,
      color: '#fff',
      background: 'var(--grad-gold)',
      padding: '2px 6px',
      borderRadius: 4
    }
  }, "POPULAR")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 3,
      background: 'var(--border)',
      marginTop: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${p.count / 8942 * 100}%`,
      background: p.grad,
      borderRadius: 3
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, p.count.toLocaleString('en-IN')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, p.revenue))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      flex: 1
    }
  }, "Recent Appointments"), /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)',
      fontFamily: 'var(--font-sans)'
    }
  }, "View All")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg)'
    }
  }, ['Patient', 'Doctor', 'Type', 'Time', 'Status'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 20px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, RECENT_APPTS.map((a, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < RECENT_APPTS.length - 1 ? '1px solid var(--border)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 600
    }
  }, a.patient), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, a.doctor), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      fontWeight: 500,
      color: a.type === 'Video' ? 'var(--primary)' : 'var(--secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": `material-symbols:${a.type === 'Video' ? 'videocam' : 'local-hospital'}-rounded`,
    style: {
      fontSize: 14
    }
  }), a.type)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, a.time), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '12px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 10px',
      borderRadius: 'var(--r-pill)',
      fontSize: 11,
      fontWeight: 600,
      background: `color-mix(in srgb, ${a.status === 'confirmed' ? 'var(--success)' : 'var(--warning)'} 10%, transparent)`,
      color: a.status === 'confirmed' ? 'var(--success)' : 'var(--warning)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), a.status === 'confirmed' ? 'Confirmed' : 'Pending'))))))));
}
Object.assign(window, {
  OverviewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-app/screen-overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin-app/screen-users.jsx
try { (() => {
/* VitaCare Plus — Admin dashboard: Users screen (patients + doctors) */

const PATIENTS = [{
  name: 'Rohan Kapoor',
  phone: '+91 98765 43210',
  conditions: ['Diabetes', 'Hypertension'],
  plan: 'Gold',
  lastActive: 'Today',
  status: 'active'
}, {
  name: 'Anjali Mehta',
  phone: '+91 91234 56789',
  conditions: ['Anemia', 'Vitamin D'],
  plan: 'Silver',
  lastActive: 'Yesterday',
  status: 'active'
}, {
  name: 'Vikram Nair',
  phone: '+91 99988 77666',
  conditions: ['Diabetes', 'Arthritis'],
  plan: 'Platinum',
  lastActive: '2 days ago',
  status: 'active'
}, {
  name: 'Sunita Verma',
  phone: '+91 77654 32109',
  conditions: ['Arthritis'],
  plan: 'Silver',
  lastActive: '5 days ago',
  status: 'active'
}, {
  name: 'Suresh Kumar',
  phone: '+91 88001 23456',
  conditions: ['Diabetes'],
  plan: 'Gold',
  lastActive: 'Today',
  status: 'active'
}, {
  name: 'Preethi Rajan',
  phone: '+91 90012 34567',
  conditions: ['Hypertension'],
  plan: 'Silver',
  lastActive: '3 days ago',
  status: 'inactive'
}];
const DOCTORS = [{
  name: 'Dr. Priya Sharma',
  spec: 'Diabetologist',
  patients: 127,
  rating: '4.9',
  status: 'active',
  joined: 'Jan 2023'
}, {
  name: 'Dr. Rajesh Gupta',
  spec: 'Cardiologist',
  patients: 89,
  rating: '4.7',
  status: 'active',
  joined: 'Mar 2023'
}, {
  name: 'Dr. Amara Singh',
  spec: 'Orthopaedic',
  patients: 61,
  rating: '4.8',
  status: 'active',
  joined: 'Jun 2023'
}, {
  name: 'Dr. Kavya Reddy',
  spec: 'Gynaecologist',
  patients: 74,
  rating: '4.6',
  status: 'active',
  joined: 'Sep 2023'
}, {
  name: 'Dr. Arjun Mehta',
  spec: 'Dermatologist',
  patients: 43,
  rating: '4.5',
  status: 'inactive',
  joined: 'Dec 2023'
}];
const PLAN_COLORS = {
  Gold: 'var(--gold)',
  Silver: 'var(--vc-slate-400,#94A3B8)',
  Platinum: '#818CF8'
};
function UsersScreen() {
  const [activeTab, setActiveTab] = React.useState('patients');
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('all');
  const filteredPatients = PATIENTS.filter(p => (!query || p.name.toLowerCase().includes(query.toLowerCase()) || p.phone.includes(query)) && (statusFilter === 'all' || p.status === statusFilter));
  const filteredDoctors = DOCTORS.filter(d => (!query || d.name.toLowerCase().includes(query.toLowerCase()) || d.spec.toLowerCase().includes(query.toLowerCase())) && (statusFilter === 'all' || d.status === statusFilter));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 40px',
      overflowY: 'auto',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      display: 'flex',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: -0.5
    }
  }, "Users"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, PATIENTS.length, " patients \xB7 ", DOCTORS.length, " doctors")), /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      background: 'var(--grad-primary)',
      border: 'none',
      borderRadius: 'var(--r-lg)',
      padding: '10px 20px',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      boxShadow: 'var(--shadow-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:person-add-rounded",
    style: {
      fontSize: 18
    }
  }), "Add User")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      background: 'var(--card)',
      borderRadius: 'var(--r-lg)',
      padding: 4,
      boxShadow: 'var(--shadow-card)'
    }
  }, ['patients', 'doctors'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => {
      setActiveTab(t);
      setQuery('');
    },
    style: {
      appearance: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 20px',
      borderRadius: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      transition: 'all var(--dur-medium) var(--ease-std)',
      background: activeTab === t ? 'var(--primary)' : 'transparent',
      color: activeTab === t ? '#fff' : 'var(--text-secondary)',
      boxShadow: activeTab === t ? 'var(--shadow-primary)' : 'none'
    }
  }, t.charAt(0).toUpperCase() + t.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:search-rounded",
    style: {
      fontSize: 18,
      color: 'var(--text-secondary)',
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: `Search ${activeTab}…`,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      height: 44,
      paddingLeft: 40,
      paddingRight: 14,
      border: '1.5px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      background: 'var(--surface)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--primary)',
    onBlur: e => e.target.style.borderColor = 'var(--border)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['all', 'active', 'inactive'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setStatusFilter(s),
    style: {
      appearance: 'none',
      border: `1.5px solid ${statusFilter === s ? 'var(--primary)' : 'var(--border)'}`,
      borderRadius: 'var(--r-pill)',
      padding: '7px 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      background: statusFilter === s ? 'color-mix(in srgb, var(--primary) 10%, transparent)' : 'var(--surface)',
      color: statusFilter === s ? 'var(--primary)' : 'var(--text-primary)',
      transition: 'all var(--dur-medium) var(--ease-std)'
    }
  }, s.charAt(0).toUpperCase() + s.slice(1))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, activeTab === 'patients' ? /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg)'
    }
  }, ['Patient', 'Phone', 'Conditions', 'Plan', 'Last Active', 'Status', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 20px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)',
      whiteSpace: 'nowrap'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filteredPatients.map((p, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < filteredPatients.length - 1 ? '1px solid var(--border)' : 'none',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--bg)',
    onMouseLeave: e => e.currentTarget.style.background = ''
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--r-md)',
      background: 'var(--grad-primary)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0
    }
  }, p.name.split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, p.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, p.phone), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, p.conditions.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '2px 8px',
      borderRadius: 'var(--r-pill)',
      background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
      color: 'var(--primary)'
    }
  }, c)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: PLAN_COLORS[p.plan]
    }
  }, p.plan)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, p.lastActive), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 'var(--r-pill)',
      background: `color-mix(in srgb, ${p.status === 'active' ? 'var(--success)' : 'var(--text-hint)'} 10%, transparent)`,
      color: p.status === 'active' ? 'var(--success)' : 'var(--text-hint)'
    }
  }, p.status === 'active' ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      background: 'none',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: '6px 12px',
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "View")))))) : /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg)'
    }
  }, ['Doctor', 'Specialization', 'Patients', 'Rating', 'Status', 'Joined', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '10px 20px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, filteredDoctors.map((d, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i < filteredDoctors.length - 1 ? '1px solid var(--border)' : 'none',
      cursor: 'pointer'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--bg)',
    onMouseLeave: e => e.currentTarget.style.background = ''
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--r-md)',
      background: 'var(--grad-teal)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 12,
      flexShrink: 0
    }
  }, d.name.replace('Dr. ', '').split(' ').map(w => w[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, d.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, d.spec), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 14,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, d.patients), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--gold)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": "material-symbols:star-rounded",
    style: {
      fontSize: 14
    }
  }), d.rating)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 'var(--r-pill)',
      background: `color-mix(in srgb, ${d.status === 'active' ? 'var(--success)' : 'var(--text-hint)'} 10%, transparent)`,
      color: d.status === 'active' ? 'var(--success)' : 'var(--text-hint)'
    }
  }, d.status === 'active' ? 'Active' : 'Inactive')), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, d.joined), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      background: 'none',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: '6px 12px',
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, "View"))))))));
}
Object.assign(window, {
  UsersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin-app/screen-users.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/DoctorApp.jsx
try { (() => {
/* VitaCare Plus — Doctor App shell: bottom nav + screen routing */

const DOC_NAV = [{
  icon: 'home',
  label: 'Schedule'
}, {
  icon: 'people',
  label: 'Patients'
}, {
  icon: 'description',
  label: 'Rx'
}, {
  icon: 'person',
  label: 'Profile'
}];
function ProfileTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "PS",
    gradient: "teal",
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "Dr. Priya Sharma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Diabetologist \xB7 MBBS, MD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Reg. No. MCI-2891234"))), /*#__PURE__*/React.createElement(Card, {
    gradient: "teal",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, [['127', 'Patients'], ['4.9', 'Rating'], ['8', 'Yrs Exp']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: 0.8,
      marginTop: 2
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [['schedule', 'My Schedule'], ['workspace_premium', 'Subscription'], ['notifications', 'Notifications'], ['settings', 'Settings'], ['logout', 'Sign Out']].map(([ico, lbl]) => /*#__PURE__*/React.createElement(Card, {
    key: lbl,
    onClick: () => {},
    padding: 0,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500
    }
  }, lbl), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    color: "var(--text-hint)"
  })))));
}
function RxListTab({
  onNew
}) {
  const items = [{
    patient: 'Rohan Kapoor',
    date: 'Jun 9, 2025',
    count: 3
  }, {
    patient: 'Suresh Kumar',
    date: 'Jun 9, 2025',
    count: 2
  }, {
    patient: 'Preethi Rajan',
    date: 'Jun 8, 2025',
    count: 1
  }, {
    patient: 'Vikram Nair',
    date: 'Jun 7, 2025',
    count: 2
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      flex: 1,
      letterSpacing: -0.3
    }
  }, "Prescriptions"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    leadingIcon: "add",
    onClick: onNew
  }, "New Rx")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.patient,
    onClick: () => {},
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-md)',
      background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "description",
    size: 20,
    color: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, r.patient), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, r.count, " medication", r.count > 1 ? 's' : '', " \xB7 ", r.date)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 18,
    color: "var(--text-hint)"
  })))));
}
function DoctorNav({
  tab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: 'var(--shadow-nav)'
    }
  }, DOC_NAV.map((item, i) => {
    const active = tab === i;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onTab(i),
      style: {
        flex: 1,
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '10px 4px 14px',
        fontFamily: 'var(--font-sans)',
        WebkitTapHighlightColor: 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 24,
      fill: active,
      color: active ? 'var(--primary)' : 'var(--text-hint)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--primary)' : 'var(--text-secondary)'
      }
    }, item.label));
  }));
}
function DoctorApp() {
  const [tab, setTab] = React.useState(0);
  const [push, setPush] = React.useState(null); // { screen: 'consultation'|'rx', data }

  if (push) {
    if (push.screen === 'consultation') {
      return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 50,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement(ConsultationScreen, {
        patient: push.data,
        onBack: () => setPush(null),
        onWriteRx: () => setPush({
          screen: 'rx',
          data: push.data
        })
      })));
    }
    if (push.screen === 'rx') {
      return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
        style: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 50,
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement(RxScreen, {
        patient: push.data,
        onBack: () => setPush(null)
      })));
    }
  }
  let body;
  if (tab === 0) body = /*#__PURE__*/React.createElement(ScheduleScreen, {
    onOpenConsultation: d => setPush({
      screen: 'consultation',
      data: d
    })
  });else if (tab === 1) body = /*#__PURE__*/React.createElement(PatientsScreen, {
    onOpenConsultation: d => setPush({
      screen: 'consultation',
      data: d
    })
  });else if (tab === 2) body = /*#__PURE__*/React.createElement(RxListTab, {
    onNew: () => setPush({
      screen: 'rx',
      data: {}
    })
  });else body = /*#__PURE__*/React.createElement(ProfileTab, null);
  return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, body), /*#__PURE__*/React.createElement(DoctorNav, {
    tab: tab,
    onTab: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20,
      flexShrink: 0,
      background: 'var(--surface)'
    }
  })));
}
Object.assign(window, {
  DoctorApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/DoctorApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/screen-consultation.jsx
try { (() => {
/* VitaCare Plus — Doctor app: Patient consultation detail screen */

const RECENT_RX = [{
  name: 'Metformin 500mg',
  sig: '1 tablet before breakfast &amp; dinner',
  date: 'Jun 2, 2025'
}, {
  name: 'Glimepiride 2mg',
  sig: '1 tablet before breakfast',
  date: 'Jun 2, 2025'
}, {
  name: 'Vitamin D3 60k',
  sig: '1 capsule once a week',
  date: 'May 15, 2025'
}];
const HISTORY = [{
  label: 'Last HbA1c',
  value: '7.2%',
  date: 'Apr 2025',
  trend: 'down'
}, {
  label: 'Last Glucose',
  value: '148 mg/dL',
  date: 'May 2025',
  trend: 'up'
}];
function ConsultationScreen({
  patient = {},
  onBack,
  onWriteRx
}) {
  const [notes, setNotes] = React.useState('');
  const name = patient.name || 'Rohan Kapoor';
  const initials = patient.initials || 'RK';
  const age = patient.age || 34;
  const gender = patient.gender || 'M';
  const conditions = patient.conditions || ['Diabetes', 'Hypertension'];
  const gradient = patient.gradient || 'primary';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 22,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 17,
      fontWeight: 700
    }
  }, "Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    leadingIcon: "videocam"
  }, "Video Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    gradient: gradient,
    size: 60
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, age, " yrs \xB7 ", gender === 'M' ? 'Male' : 'Female', " \xB7 +91 99999 00000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, conditions.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    status: "info",
    dot: false,
    style: {
      fontSize: 10,
      padding: '2px 8px'
    }
  }, c)), /*#__PURE__*/React.createElement(Badge, {
    status: "gold",
    dot: false,
    style: {
      fontSize: 10,
      padding: '2px 8px'
    }
  }, "Gold Member")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Latest Vitals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(VitalTile, {
    label: "HbA1c",
    value: "6.8",
    unit: "%",
    icon: "water_drop",
    color: "var(--vc-hba1c-teal, #0D9488)"
  }), /*#__PURE__*/React.createElement(VitalTile, {
    label: "Glucose",
    value: "126",
    unit: "mg/dL",
    icon: "monitor_heart",
    color: "var(--vc-glucose-blue, #2563EB)"
  }), /*#__PURE__*/React.createElement(VitalTile, {
    label: "Weight",
    value: "74.5",
    unit: "kg",
    icon: "monitor_weight",
    color: "var(--vc-weight-purple, #7C3AED)"
  }), /*#__PURE__*/React.createElement(VitalTile, {
    label: "BP",
    value: "128/82",
    unit: "mmHg",
    icon: "favorite",
    color: "var(--vc-bp-orange, #EA580C)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Consultation Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    placeholder: "Add your clinical notes here\u2026",
    style: {
      width: '100%',
      minHeight: 90,
      boxSizing: 'border-box',
      padding: '12px 14px',
      borderRadius: 'var(--r-lg)',
      border: '1.5px solid var(--border)',
      background: 'var(--surface)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      resize: 'vertical',
      outline: 'none',
      lineHeight: 1.6
    },
    onFocus: e => e.target.style.borderColor = 'var(--primary)',
    onBlur: e => e.target.style.borderColor = 'var(--border)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Recent Prescriptions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 12
    }
  }, RECENT_RX.map(rx => /*#__PURE__*/React.createElement(Card, {
    key: rx.name,
    padding: 12,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--r-md)',
      background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medication",
    size: 18,
    color: "var(--primary)",
    fill: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, rx.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 2
    },
    dangerouslySetInnerHTML: {
      __html: rx.sig
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-hint)',
      flexShrink: 0
    }
  }, rx.date))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 0',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    leadingIcon: "description",
    onClick: onWriteRx
  }, "Write Prescription"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    style: {
      flexShrink: 0,
      paddingLeft: 16,
      paddingRight: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "note_add",
    size: 18,
    color: "var(--primary)"
  })))));
}
Object.assign(window, {
  ConsultationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/screen-consultation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/screen-patients.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* VitaCare Plus — Doctor app: Patient list screen */

const DR_PATIENTS = [{
  initials: 'RK',
  name: 'Rohan Kapoor',
  age: 34,
  gender: 'M',
  conditions: ['Diabetes', 'Hypertension'],
  lastVisit: '2 days ago',
  metricLabel: 'HbA1c',
  metricValue: '6.8%',
  gradient: 'primary'
}, {
  initials: 'AM',
  name: 'Anjali Mehta',
  age: 28,
  gender: 'F',
  conditions: ['Anemia', 'Vitamin D'],
  lastVisit: '1 week ago',
  metricLabel: 'Hb',
  metricValue: '10.2 g/dL',
  gradient: 'teal'
}, {
  initials: 'VN',
  name: 'Vikram Nair',
  age: 52,
  gender: 'M',
  conditions: ['Diabetes', 'Arthritis'],
  lastVisit: '3 days ago',
  metricLabel: 'HbA1c',
  metricValue: '8.1%',
  gradient: 'gold'
}, {
  initials: 'SV',
  name: 'Sunita Verma',
  age: 61,
  gender: 'F',
  conditions: ['Arthritis'],
  lastVisit: '2 weeks ago',
  metricLabel: 'Pain Score',
  metricValue: '6/10',
  gradient: 'primary'
}, {
  initials: 'SK',
  name: 'Suresh Kumar',
  age: 45,
  gender: 'M',
  conditions: ['Diabetes'],
  lastVisit: 'Today',
  metricLabel: 'Glucose',
  metricValue: '148 mg/dL',
  gradient: 'teal'
}, {
  initials: 'PR',
  name: 'Preethi Rajan',
  age: 38,
  gender: 'F',
  conditions: ['Hypertension', 'Anemia'],
  lastVisit: 'Today',
  metricLabel: 'BP',
  metricValue: '138/88',
  gradient: 'primary'
}];
const FILTERS = ['All', 'Diabetes', 'Anemia', 'Arthritis', 'Vitamin D', 'Hypertension'];
function PatientsScreen({
  onOpenConsultation
}) {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState('All');
  const visible = DR_PATIENTS.filter(p => {
    const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === 'All' || p.conditions.includes(filter);
    return matchQuery && matchFilter;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.3,
      marginBottom: 14
    }
  }, "Patients"), /*#__PURE__*/React.createElement(Input, {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search by name or condition\u2026",
    leadingIcon: "search",
    trailingIcon: query ? 'close' : ''
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      padding: '8px 20px',
      scrollbarWidth: 'none'
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f),
    style: {
      flexShrink: 0
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 8px',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, visible.length, " patient", visible.length !== 1 ? 's' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '0 20px'
    }
  }, visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 0',
      color: 'var(--text-secondary)'
    }
  }, "No patients match your search") : visible.map(p => /*#__PURE__*/React.createElement(PatientRow, _extends({
    key: p.name
  }, p, {
    onTap: () => onOpenConsultation(p)
  })))));
}
Object.assign(window, {
  PatientsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/screen-patients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/screen-rx.jsx
try { (() => {
/* VitaCare Plus — Doctor app: Prescription writing screen */

const RX_DEFAULTS = [{
  name: 'Metformin 500mg',
  sig: '1 tablet before breakfast and dinner',
  duration: '30 days'
}, {
  name: 'Glimepiride 2mg',
  sig: '1 tablet before breakfast',
  duration: '30 days'
}];
const SUGGESTIONS = ['Metformin 500mg', 'Metformin 1000mg', 'Glimepiride 1mg', 'Glimepiride 2mg', 'Sitagliptin 100mg', 'Empagliflozin 10mg', 'Insulin Glargine', 'Vitamin D3 60k', 'Calcium + D3', 'Rosuvastatin 10mg', 'Amlodipine 5mg', 'Losartan 50mg'];
function RxScreen({
  patient = {},
  onBack
}) {
  const [search, setSearch] = React.useState('');
  const [meds, setMeds] = React.useState(RX_DEFAULTS);
  const [showSug, setShowSug] = React.useState(false);
  const name = patient.name || 'Rohan Kapoor';
  const initials = patient.initials || 'RK';
  const filtered = search.length > 1 ? SUGGESTIONS.filter(s => s.toLowerCase().includes(search.toLowerCase()) && !meds.find(m => m.name === s)) : [];
  const addMed = name => {
    setMeds(prev => [...prev, {
      name,
      sig: '',
      duration: '30 days'
    }]);
    setSearch('');
    setShowSug(false);
  };
  const removeMed = i => setMeds(prev => prev.filter((_, j) => j !== i));
  const updateSig = (i, sig) => setMeds(prev => prev.map((m, j) => j === i ? {
    ...m,
    sig
  } : m));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 22,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, "New Prescription"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, name))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    gradient: "primary",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    size: 42,
    gradient: "primary",
    style: {
      background: 'rgba(255,255,255,0.2)',
      backdropFilter: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.8
    }
  }, patient.age || 34, " yrs \xB7 ", (patient.conditions || ['Diabetes']).join(', '))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      opacity: 0.75
    }
  }, new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: search,
    onChange: e => {
      setSearch(e.target.value);
      setShowSug(true);
    },
    placeholder: "Search medication to add\u2026",
    leadingIcon: "search",
    onFocus: () => setShowSug(true)
  }), showSug && filtered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'var(--surface)',
      borderRadius: 'var(--r-lg)',
      boxShadow: 'var(--shadow-pop)',
      zIndex: 10,
      marginTop: 4,
      overflow: 'hidden'
    }
  }, filtered.slice(0, 5).map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => addMed(s),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      width: '100%',
      textAlign: 'left',
      padding: '12px 16px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medication",
    size: 16,
    color: "var(--primary)",
    fill: true
  }), s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Medications (", meds.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 20
    }
  }, meds.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--r-md)',
      background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medication",
    size: 16,
    color: "var(--primary)",
    fill: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 700
    }
  }, m.name), /*#__PURE__*/React.createElement("button", {
    onClick: () => removeMed(i),
    style: {
      appearance: 'none',
      background: 'color-mix(in srgb, var(--error) 10%, transparent)',
      border: 'none',
      borderRadius: '50%',
      width: 28,
      height: 28,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14,
    color: "var(--error)"
  }))), /*#__PURE__*/React.createElement("input", {
    value: m.sig,
    onChange: e => updateSig(i, e.target.value),
    placeholder: "Instructions (e.g. 1 tablet before breakfast)",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      padding: '8px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-primary)',
      background: 'var(--bg)',
      outline: 'none'
    },
    onFocus: e => e.target.style.borderColor = 'var(--primary)',
    onBlur: e => e.target.style.borderColor = 'var(--border)'
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 24px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    leadingIcon: "description",
    onClick: onBack
  }, "Issue Prescription")));
}
Object.assign(window, {
  RxScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/screen-rx.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/screen-schedule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* VitaCare Plus — Doctor app: Today's Schedule screen */

const DR_SCHEDULE = [{
  patient: 'Rohan Kapoor',
  initials: 'RK',
  specialty: 'Diabetes — HbA1c review',
  time: '10:00 AM',
  type: 'video',
  status: 'upcoming'
}, {
  patient: 'Anjali Mehta',
  initials: 'AM',
  specialty: 'Anemia follow-up',
  time: '11:30 AM',
  type: 'in-clinic',
  status: 'upcoming'
}, {
  patient: 'Vikram Nair',
  initials: 'VN',
  specialty: 'Vitamin D deficiency',
  time: '2:00 PM',
  type: 'video',
  status: 'upcoming'
}, {
  patient: 'Sunita Verma',
  initials: 'SV',
  specialty: 'Arthritis management',
  time: '3:30 PM',
  type: 'in-clinic',
  status: 'upcoming'
}];
const DR_PAST = [{
  patient: 'Suresh Kumar',
  initials: 'SK',
  specialty: 'Monthly diabetes checkup',
  time: '9:00 AM',
  type: 'video',
  status: 'done'
}, {
  patient: 'Preethi Rajan',
  initials: 'PR',
  specialty: 'Blood pressure monitoring',
  time: '9:45 AM',
  type: 'in-clinic',
  status: 'done'
}];
function ScheduleScreen({
  onOpenConsultation
}) {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, dateStr), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, "Good Morning, Dr. Priya")), /*#__PURE__*/React.createElement("button", {
    style: {
      appearance: 'none',
      background: 'var(--card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)',
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications",
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 9,
      right: 9,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--error)'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    initials: "PS",
    gradient: "teal",
    size: 40
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(QuickStat, {
    value: "12",
    label: "Today",
    color: "var(--primary)"
  }), /*#__PURE__*/React.createElement(QuickStat, {
    value: "2",
    label: "Done",
    color: "var(--success)"
  }), /*#__PURE__*/React.createElement(QuickStat, {
    value: "4",
    label: "Upcoming",
    color: "var(--warning)"
  }), /*#__PURE__*/React.createElement(QuickStat, {
    value: "2",
    label: "Rx Due",
    color: "var(--vc-weight-purple, #7C3AED)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Upcoming"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 12
    }
  }, DR_SCHEDULE.map(a => /*#__PURE__*/React.createElement(AppointmentCard, _extends({
    key: a.patient
  }, a, {
    onTap: () => onOpenConsultation(a)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Completed"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 12
    }
  }, DR_PAST.map(a => /*#__PURE__*/React.createElement(AppointmentCard, _extends({
    key: a.patient
  }, a, {
    onTap: () => onOpenConsultation(a)
  }))))));
}
Object.assign(window, {
  ScheduleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/screen-schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/doctor-app/vc-ui.jsx
try { (() => {
/* VitaCare Plus — Doctor UI kit primitives
 * Self-contained clone of components/core/* plus doctor-specific widgets.
 * Mirrors Flutter app styling 1:1. Iconify must be loaded before this file. */

// ── Shared icon helper ───────────────────────────────────────────────────────
const VC_FILLED = new Set(['trending_up', 'trending_down', 'trending_flat', 'add', 'arrow_back', 'chevron_right', 'close', 'sos', 'logout', 'wifi_calling_3', 'workspace_premium']);
function vcIcon(name, fill) {
  const base = name.replace(/_/g, '-');
  const filled = fill || VC_FILLED.has(name);
  return `material-symbols:${base}${filled ? '-rounded' : '-outline-rounded'}`;
}
function Icon({
  name,
  size = 22,
  fill = false,
  color = 'currentColor',
  style = {},
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": vcIcon(name, fill),
    onClick: onClick,
    style: {
      fontSize: size,
      lineHeight: 0,
      color,
      flexShrink: 0,
      display: 'inline-flex',
      ...style
    }
  });
}

// ── Primitives ───────────────────────────────────────────────────────────────
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  loading,
  disabled,
  leadingIcon,
  trailingIcon,
  onClick,
  style = {}
}) {
  const [p, setP] = React.useState(false);
  const off = disabled || loading;
  const H = {
    sm: 40,
    md: 52,
    lg: 54
  }[size];
  const fills = {
    primary: {
      background: 'var(--grad-primary)',
      color: '#fff',
      boxShadow: 'var(--shadow-primary)'
    },
    secondary: {
      background: 'var(--grad-teal)',
      color: '#fff'
    },
    danger: {
      background: 'var(--grad-sos)',
      color: '#fff',
      boxShadow: 'var(--shadow-sos)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: off ? undefined : onClick,
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      height: H,
      padding: '0 24px',
      borderRadius: 'var(--r-lg)',
      border: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 14 : 15,
      fontWeight: 600,
      letterSpacing: 'var(--ls-button)',
      cursor: off ? 'default' : 'pointer',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform var(--dur-fast) var(--ease-std)',
      transform: p && !off ? 'scale(0.97)' : 'scale(1)',
      ...(off ? {
        background: 'rgba(15,23,42,0.12)',
        color: 'rgba(15,23,42,0.38)',
        boxShadow: 'none'
      } : fills),
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: '2px solid rgba(255,255,255,0.4)',
      borderTopColor: '#fff',
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'vcspin .7s linear infinite'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, children), trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 18
  })));
}
function Card({
  children,
  gradient,
  padding = 16,
  radius = 16,
  onClick,
  style = {}
}) {
  const [p, setP] = React.useState(false);
  const press = typeof onClick === 'function';
  const grads = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)',
    sos: 'var(--grad-sos)'
  };
  const glow = {
    primary: 'var(--shadow-primary)',
    teal: '0 4px 16px rgba(13,148,136,.3)',
    gold: 'var(--shadow-gold)',
    sos: 'var(--shadow-sos)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onPointerDown: () => press && setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      borderRadius: radius,
      padding,
      boxSizing: 'border-box',
      background: gradient ? grads[gradient] : 'var(--card)',
      color: gradient ? '#fff' : 'var(--text-primary)',
      boxShadow: gradient ? glow[gradient] : 'var(--shadow-card)',
      cursor: press ? 'pointer' : 'default',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform var(--dur-base) var(--ease-std)',
      transform: p && press ? 'scale(0.98)' : 'scale(1)',
      ...style
    }
  }, children);
}
function Badge({
  children,
  status = 'info',
  dot = true,
  style = {}
}) {
  const c = {
    info: 'var(--primary)',
    success: 'var(--success)',
    normal: 'var(--success)',
    warning: 'var(--warning)',
    critical: 'var(--error)',
    error: 'var(--error)',
    gold: 'var(--gold)'
  }[status] || 'var(--primary)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--r-pill)',
      background: `color-mix(in srgb, ${c} 10%, transparent)`,
      color: c,
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }), children);
}
function Avatar({
  initials = 'U',
  src,
  size = 42,
  shape = 'squircle',
  gradient = 'primary',
  style = {}
}) {
  const grads = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)',
      background: src ? `center/cover url(${src})` : grads[gradient],
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.34,
      flexShrink: 0,
      overflow: 'hidden',
      ...style
    }
  }, !src && (initials || 'U'));
}
function Chip({
  children,
  selected,
  color = 'primary',
  onClick,
  style = {}
}) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      transition: 'all var(--dur-medium) var(--ease-std)',
      background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)',
      border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`,
      color: selected ? c : 'var(--text-primary)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, children);
}
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  helper,
  error,
  leadingIcon,
  trailingIcon,
  disabled = false,
  style = {}
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--error)' : focused ? 'var(--primary)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: error ? 'var(--error)' : 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 52,
      padding: '0 14px',
      borderRadius: 'var(--r-lg)',
      border: `1.5px solid ${borderColor}`,
      background: disabled ? 'rgba(15,23,42,0.04)' : 'var(--surface)',
      transition: 'border-color var(--dur-medium) var(--ease-std)',
      boxSizing: 'border-box'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 20,
    color: focused ? 'var(--primary)' : 'var(--text-secondary)'
  }), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }), trailingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: trailingIcon,
    size: 20,
    color: "var(--text-secondary)"
  })), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--error)' : 'var(--text-secondary)'
    }
  }, error || helper));
}
function SectionHeader({
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, action));
}

// ── Doctor-specific components ───────────────────────────────────────────────
function QuickStat({
  value,
  label,
  color = 'var(--primary)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12px 8px',
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      boxShadow: 'var(--shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: -0.5,
      color,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      marginTop: 2,
      textAlign: 'center'
    }
  }, label));
}
function AppointmentCard({
  patient,
  initials,
  specialty,
  time,
  timeLabel = '',
  type = 'video',
  status = 'upcoming',
  onTap
}) {
  const statusMap = {
    upcoming: ['info', 'Upcoming'],
    done: ['success', 'Done'],
    pending: ['warning', 'Pending']
  };
  const [st, stLabel] = statusMap[status] || statusMap.upcoming;
  return /*#__PURE__*/React.createElement(Card, {
    onClick: onTap,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    size: 46,
    gradient: status === 'done' ? 'teal' : 'primary'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, patient), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, specialty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 12,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, time), timeLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, timeLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: st,
    dot: false
  }, stLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: type === 'video' ? 'videocam' : 'local_hospital',
    size: 14,
    color: "var(--text-secondary)",
    fill: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, type === 'video' ? 'Video' : 'In-Clinic'))));
}
function PatientRow({
  initials,
  name,
  age,
  gender,
  conditions = [],
  lastVisit,
  metricLabel,
  metricValue,
  gradient = 'primary',
  onTap
}) {
  return /*#__PURE__*/React.createElement(Card, {
    onClick: onTap,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    size: 46,
    gradient: gradient
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, age, " \xB7 ", gender)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, conditions.map(c => /*#__PURE__*/React.createElement(Badge, {
    key: c,
    status: "info",
    dot: false,
    style: {
      fontSize: 10,
      padding: '2px 8px'
    }
  }, c))), lastVisit && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Last visit: ", lastVisit)), metricLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: -0.5,
      fontVariantNumeric: 'tabular-nums'
    }
  }, metricValue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--text-secondary)'
    }
  }, metricLabel)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 18,
    color: "var(--text-hint)"
  }));
}
function VitalTile({
  label,
  value,
  unit,
  icon,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--card)',
      borderRadius: 'var(--r-card)',
      padding: '12px 10px',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${color} 12%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    color: color,
    fill: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 2,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: -0.5,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--text-secondary)',
      paddingBottom: 2
    }
  }, unit)));
}
Object.assign(window, {
  Icon,
  Button,
  Card,
  Badge,
  Avatar,
  Chip,
  Input,
  SectionHeader,
  QuickStat,
  AppointmentCard,
  PatientRow,
  VitalTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/doctor-app/vc-ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/App.jsx
try { (() => {
/* VitaCare Plus — App shell: post-login tab navigation with center SOS button,
 * plus pushed screens (membership, sos) with a back header. */

function TopBar({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '12px 16px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow_back",
    size: 22,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, title));
}
function EmptyTab({
  icon,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--r-2xl)',
      background: 'var(--primary-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30,
    color: "var(--primary)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      maxWidth: 240,
      lineHeight: 1.5
    }
  }, sub));
}
function ModulesTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.3,
      marginBottom: 16
    }
  }, "Health Modules"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, VC_MODULES.map(([name, ico, color]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    onClick: () => {},
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--r-xl)',
      background: `color-mix(in srgb, ${color} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 22,
    color: color
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, "Track & manage"))))));
}
function ProfileTab() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "RK",
    size: 64
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: -0.3
    }
  }, "Rohan Kapoor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "+91 99999 99999"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    status: "gold",
    dot: false
  }, "Gold Member")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 20
    }
  }, [['person', 'Personal Details'], ['favorite', 'Health Profile'], ['description', 'My Reports'], ['credit_card', 'Billing & Payments'], ['notifications', 'Notifications'], ['settings', 'Settings'], ['logout', 'Sign Out']].map(([ico, lbl]) => /*#__PURE__*/React.createElement(Card, {
    key: lbl,
    onClick: () => {},
    padding: 0,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500
    }
  }, lbl), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    color: "var(--text-hint)"
  })))));
}
function BottomNav({
  tab,
  onTab,
  onSos
}) {
  const items = [['home', 'Home', 'home'], ['grid_view', 'Modules', 'modules'], null, ['calendar_today', 'Appts', 'appts'], ['person', 'Profile', 'profile']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      height: 72,
      paddingBottom: 4,
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: 'var(--shadow-nav)',
      position: 'relative'
    }
  }, items.map((it, i) => {
    if (!it) {
      return /*#__PURE__*/React.createElement("div", {
        key: "sos",
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 6
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: onSos,
        style: {
          width: 52,
          height: 52,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'var(--grad-sos)',
          boxShadow: 'var(--shadow-sos)',
          color: '#fff',
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 0.5
        }
      }, "SOS"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 9,
          fontWeight: 600,
          color: 'var(--vc-sos)',
          marginTop: 3
        }
      }, "Emergency"));
    }
    const [ico, lbl, id] = it;
    const active = tab === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onTab(id),
      style: {
        flex: 1,
        appearance: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        paddingTop: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ico,
      size: 22,
      fill: active ? 1 : 0,
      color: active ? 'var(--primary)' : 'var(--text-secondary)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--primary)' : 'var(--text-secondary)'
      }
    }, lbl));
  }));
}
function App() {
  const [authed, setAuthed] = React.useState(false);
  const [tab, setTab] = React.useState('home');
  const [push, setPush] = React.useState(null); // 'membership' | 'sos'

  if (!authed) {
    return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement(LoginScreen, {
      onLogin: () => setAuthed(true)
    }));
  }
  let body,
    topBar = null,
    showNav = true;
  if (push === 'membership') {
    body = /*#__PURE__*/React.createElement(MembershipScreen, null);
    topBar = /*#__PURE__*/React.createElement(TopBar, {
      title: "Membership Plans",
      onBack: () => setPush(null)
    });
    showNav = false;
  } else if (push === 'sos') {
    body = /*#__PURE__*/React.createElement(SosScreen, null);
    topBar = /*#__PURE__*/React.createElement(TopBar, {
      title: "Emergency SOS",
      onBack: () => setPush(null)
    });
    showNav = false;
  } else if (tab === 'home') body = /*#__PURE__*/React.createElement(DashboardScreen, {
    onOpenMembership: () => setPush('membership'),
    onOpenAppointments: () => setTab('appts')
  });else if (tab === 'modules') body = /*#__PURE__*/React.createElement(ModulesTab, null);else if (tab === 'appts') body = /*#__PURE__*/React.createElement(AppointmentsScreen, null);else if (tab === 'profile') body = /*#__PURE__*/React.createElement(ProfileTab, null);
  return /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 50,
      flexShrink: 0
    }
  }), topBar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, body), showNav && /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    onTab: setTab,
    onSos: () => setPush('sos')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20,
      flexShrink: 0,
      background: showNav ? 'var(--surface)' : 'var(--bg)'
    }
  })));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screen-appointments.jsx
try { (() => {
/* VitaCare Plus — Appointments (Upcoming/Past tabs) + booking bottom sheet. */

const VC_UPCOMING = [['Dr. Priya Sharma', 'Diabetologist', 'Tomorrow', '10:00 AM', 'video', 'confirmed'], ['Dr. Rajesh Gupta', 'Cardiologist', 'In 5 days', '2:30 PM', 'clinic', 'confirmed']];
const VC_PAST = [['Dr. Priya Sharma', 'Diabetologist', '15 days ago', '11:00 AM', 'video', 'completed'], ['Dr. Meera Patel', 'Ophthalmologist', 'Last month', '4:00 PM', 'clinic', 'completed']];
function AppointmentsScreen() {
  const [tab, setTab] = React.useState('upcoming');
  const [sheet, setSheet] = React.useState(false);
  const list = tab === 'upcoming' ? VC_UPCOMING : VC_PAST;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, "Appointments"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 14,
      borderBottom: '1px solid var(--border)'
    }
  }, ['upcoming', 'past'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: tab === t ? 600 : 500,
      color: tab === t ? 'var(--primary)' : 'var(--text-secondary)',
      padding: '0 0 10px',
      borderBottom: `2px solid ${tab === t ? 'var(--primary)' : 'transparent'}`,
      marginBottom: -1,
      textTransform: 'capitalize'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, list.map((a, i) => /*#__PURE__*/React.createElement(ApptCard, {
    key: i,
    a: a
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSheet(true),
    style: {
      position: 'absolute',
      right: 20,
      bottom: 24,
      height: 52,
      padding: '0 20px',
      borderRadius: 'var(--r-pill)',
      border: 'none',
      background: 'var(--primary)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-primary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "add",
    size: 20,
    color: "#fff"
  }), "Book"), sheet && /*#__PURE__*/React.createElement(BookSheet, {
    onClose: () => setSheet(false)
  }));
}
function ApptCard({
  a
}) {
  const [doctor, specialty, day, time, type, status] = a;
  const isVideo = type === 'video';
  const color = isVideo ? 'var(--primary)' : 'var(--secondary)';
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--r-xl)',
      background: `color-mix(in srgb, ${color} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isVideo ? 'videocam' : 'local_hospital',
    size: 22,
    color: color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, doctor), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, specialty)), /*#__PURE__*/React.createElement(Badge, {
    status: status === 'confirmed' ? 'success' : 'info'
  }, status === 'confirmed' ? 'Confirmed' : 'Completed')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar_today",
    size: 14,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, day), /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 14,
    color: "var(--text-secondary)",
    style: {
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, time), /*#__PURE__*/React.createElement(Icon, {
    name: isVideo ? 'videocam' : 'location_on',
    size: 14,
    color: "var(--text-secondary)",
    style: {
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, isVideo ? 'Video Call' : 'In-Clinic')), status === 'confirmed' && isVideo && /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true,
    leadingIcon: "videocam",
    style: {
      marginTop: 12
    }
  }, "Join Video Call"));
}
function BookSheet({
  onClose
}) {
  const specialties = ['Diabetologist', 'Cardiologist', 'Ophthalmologist', 'Nephrologist', 'Orthopedist'];
  const [spec, setSpec] = React.useState('Diabetologist');
  const [type, setType] = React.useState('video');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.4)',
      animation: 'vcfade .2s ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--surface)',
      borderRadius: '20px 20px 0 0',
      padding: '12px 20px 28px',
      animation: 'vcsheet .3s cubic-bezier(.2,.8,.2,1)',
      maxHeight: '88%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--border)',
      margin: '0 auto 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, "Book Appointment"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 20
    }
  }, "Specialty"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12
    }
  }, specialties.map(s => /*#__PURE__*/React.createElement(Chip, {
    key: s,
    selected: spec === s,
    onClick: () => setSpec(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 20
    }
  }, "Consultation Type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, [['video', 'videocam', 'Video Call', 'var(--primary)'], ['clinic', 'local_hospital', 'In-Clinic', 'var(--secondary)']].map(([id, ico, lbl, c]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setType(id),
    style: {
      flex: 1,
      appearance: 'none',
      cursor: 'pointer',
      background: type === id ? `color-mix(in srgb, ${c} 8%, transparent)` : 'var(--surface)',
      border: `${type === id ? 1.5 : 1}px solid ${type === id ? c : 'var(--border)'}`,
      borderRadius: 'var(--r-lg)',
      padding: 14,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 24,
    color: type === id ? c : 'var(--text-secondary)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, lbl)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    style: {
      marginTop: 24
    },
    onClick: onClose
  }, "Confirm Booking")));
}
Object.assign(window, {
  AppointmentsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screen-appointments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screen-dashboard.jsx
try { (() => {
/* VitaCare Plus — Patient dashboard: greeting header, membership banner,
 * health-overview metric strip, alerts, appointment, medications, module grid. */

const VC_MODULES = [['Diabetes', 'water_drop', '#2563EB'], ['Vitamin D', 'wb_sunny', '#F59E0B'], ['Arthritis', 'accessibility_new', '#7C3AED'], ['Anemia', 'bloodtype', '#DC2626'], ['Ortho', 'directions_walk', '#059669'], ['Hair', 'face', '#D97706'], ["Women's", 'favorite', '#EC4899'], ['Reports', 'description', '#0D9488']];
const VC_MEDS = [['Metformin 500mg', '1 tablet · 9:00 AM', true, 'medication'], ['Glimepiride 2mg', '1 tablet · 8:00 AM', true, 'medication'], ['Vitamin D3 60k', '1 capsule · 2:00 PM', false, 'medication_liquid']];
function DashboardScreen({
  onOpenMembership,
  onOpenAppointments
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Good Morning"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, "Rohan")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border)',
      background: 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginRight: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notifications",
    size: 20,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 9,
      right: 9,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--vc-sos)'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    initials: "RK"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    gradient: "primary",
    onClick: onOpenMembership,
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "workspace_premium",
    size: 16,
    fill: 1,
    color: "#F59E0B"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: 1,
      color: '#F59E0B'
    }
  }, "GOLD MEMBER")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      marginTop: 4
    }
  }, "Your plan is active"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.75)'
    }
  }, "Valid till Dec 31, 2025")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 20,
    color: "rgba(255,255,255,0.7)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Health Overview",
    action: "See All"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      padding: '12px 20px',
      scrollbarWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "HbA1c",
    value: "6.8",
    unit: "%",
    icon: "water_drop",
    iconColor: "var(--vc-hba1c-teal)",
    delta: -3.2,
    deltaLabel: "from last month"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Blood Sugar",
    value: "126",
    unit: "mg/dL",
    icon: "monitor_heart",
    iconColor: "var(--vc-glucose-blue)",
    delta: 1.4,
    deltaLabel: "fasting"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Weight",
    value: "74.5",
    unit: "kg",
    icon: "monitor_weight",
    iconColor: "var(--vc-weight-purple)"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Blood Pressure",
    value: "128/82",
    unit: "mmHg",
    icon: "favorite",
    iconColor: "var(--vc-bp-orange)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Active Alerts",
    action: "Dismiss all"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(AlertRow, {
    severity: "warning",
    title: "Fasting sugar trending up",
    message: "Your last 3 readings are above target. Consider logging your meals."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Upcoming Appointment",
    action: "View all",
    onAction: onOpenAppointments
  }), /*#__PURE__*/React.createElement(Card, {
    onClick: onOpenAppointments,
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 'var(--r-xl)',
      background: 'var(--grad-teal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "videocam",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, "Dr. Priya Sharma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Diabetologist"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar_today",
    size: 12,
    color: "var(--text-secondary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, "Tomorrow"), /*#__PURE__*/React.createElement(Icon, {
    name: "schedule",
    size: 12,
    color: "var(--text-secondary)",
    style: {
      marginLeft: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, "10:00 AM"))), /*#__PURE__*/React.createElement(Badge, {
    status: "info"
  }, "Video"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Today's Medications",
    action: "Manage"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, VC_MEDS.map(([name, sub, taken, ico]) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    padding: 0,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${taken ? 'var(--success)' : 'var(--warning)'} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 18,
    color: taken ? 'var(--success)' : 'var(--warning)'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--r-sm)',
      color: taken ? 'var(--success)' : 'var(--warning)',
      background: `color-mix(in srgb, ${taken ? 'var(--success)' : 'var(--warning)'} 10%, transparent)`
    }
  }, taken ? 'Taken' : 'Pending'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Health Modules",
    action: "All"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12,
      marginTop: 14
    }
  }, VC_MODULES.map(([name, ico, color]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--r-xl)',
      background: `color-mix(in srgb, ${color} 10%, transparent)`,
      border: `1px solid color-mix(in srgb, ${color} 30%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 22,
    color: color
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--text-secondary)',
      textAlign: 'center'
    }
  }, name))))));
}
function AlertRow({
  severity,
  title,
  message
}) {
  const color = severity === 'critical' ? 'var(--error)' : severity === 'warning' ? 'var(--warning)' : 'var(--primary)';
  const ico = severity === 'critical' ? 'error' : severity === 'warning' ? 'warning' : 'info';
  return /*#__PURE__*/React.createElement(Card, {
    padding: 14,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${color} 12%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 18,
    color: color
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--text-secondary)',
      lineHeight: 1.4,
      marginTop: 2
    }
  }, message)));
}
Object.assign(window, {
  DashboardScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screen-dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screen-login.jsx
try { (() => {
/* VitaCare Plus — Login screen (animated radial bg + decorative circles + logo). */

function LoginScreen({
  onLogin
}) {
  const [mobile, setMobile] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const doLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 900);
  };
  const demo = () => {
    setMobile('9999999999');
    setPass('Demo@1234');
    setTimeout(doLogin, 150);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      position: 'relative',
      background: 'radial-gradient(120% 90% at 25% 8%, var(--primary-surface) 0%, var(--bg) 60%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -100,
      right: -80,
      width: 300,
      height: 300,
      borderRadius: '50%',
      background: 'rgba(37,99,235,0.12)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -60,
      left: -60,
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'rgba(13,148,136,0.10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '52px 24px 32px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40,
      animation: 'vcpop .8s cubic-bezier(.2,1.3,.4,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 'var(--r-2xl)',
      background: 'var(--grad-primary)',
      boxShadow: '0 8px 20px rgba(37,99,235,0.35)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "favorite",
    size: 36,
    fill: 1,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: -0.5,
      marginTop: 12
    }
  }, "VitaCare Plus"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      letterSpacing: 0.5
    }
  }, "Premium Healthcare")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      letterSpacing: -0.5,
      lineHeight: 1.2
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, "Sign in to continue your health journey"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Mobile Number",
    icon: "phone",
    prefix: "+91",
    value: mobile,
    onChange: setMobile,
    placeholder: "9876543210"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Password",
    icon: "lock",
    type: "password",
    value: pass,
    onChange: setPass,
    placeholder: "Enter your password"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--primary)',
      cursor: 'pointer'
    }
  }, "Forgot Password?")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    loading: loading,
    onClick: doLogin
  }, "Sign In"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    fullWidth: true,
    onClick: demo
  }, "Demo: Login as Patient")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 32,
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--primary)',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Register"))));
}
function Field({
  label,
  icon,
  prefix,
  type,
  value,
  onChange,
  placeholder
}) {
  const [focus, setFocus] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const isPw = type === 'password';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 50,
      padding: '0 14px',
      background: 'var(--bg)',
      borderRadius: 'var(--r-lg)',
      border: `${focus ? 2 : 1}px solid ${focus ? 'var(--primary)' : 'var(--border)'}`,
      transition: 'border var(--dur-medium)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: "var(--text-secondary)"
  }), prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    type: isPw && !show ? 'password' : 'text',
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }), isPw && /*#__PURE__*/React.createElement(Icon, {
    name: show ? 'visibility' : 'visibility_off',
    size: 20,
    color: "var(--text-secondary)",
    style: {
      cursor: 'pointer'
    },
    onClick: () => setShow(!show)
  })));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screen-login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screen-membership.jsx
try { (() => {
/* VitaCare Plus — Membership tiers (Silver / Gold / Platinum) with Razorpay framing. */

const VC_PLANS = [{
  id: 'silver',
  name: 'Silver',
  price: '₹499/mo',
  grad: 'var(--grad-silver)',
  accent: '#64748B',
  features: ['Basic health tracking', 'Blood sugar logging', 'Monthly reports', 'Email support', 'Up to 3 health modules']
}, {
  id: 'gold',
  name: 'Gold',
  price: '₹999/mo',
  grad: 'var(--grad-gold)',
  accent: '#D97706',
  best: true,
  features: ['All Silver features', 'AI health insights', 'Teleconsultation (2/month)', 'Priority support', 'Complication risk tracking', 'All health modules', 'Family member tracking']
}, {
  id: 'platinum',
  name: 'Platinum',
  price: '₹1999/mo',
  grad: 'var(--grad-platinum)',
  accent: '#4F46E5',
  features: ['All Gold features', 'Unlimited teleconsultation', 'Home health visits (2/month)', 'Dedicated care manager', 'Emergency SOS priority', 'Lab test discounts (30%)', 'Specialist access']
}];
function MembershipScreen() {
  const [current, setCurrent] = React.useState('gold');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px 28px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    gradient: "primary",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "workspace_premium",
    size: 28,
    fill: 1,
    color: "#F59E0B"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)'
    }
  }, "Current Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      textTransform: 'capitalize'
    }
  }, current, " Member"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Active \xB7 Renews Jan 1, 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.3,
      marginTop: 24
    }
  }, "Upgrade Your Plan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "All plans include 7-day free trial"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 20
    }
  }, VC_PLANS.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.id,
    p: p,
    current: current,
    onUpgrade: () => setCurrent(p.id)
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "Frequently Asked"), [['Can I cancel anytime?', 'Yes, cancel anytime. No cancellation fee.'], ['Is GST included?', 'All prices are inclusive of 18% GST.'], ['Can I switch plans?', 'Upgrade or downgrade anytime. Prorated billing.']].map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, a)))));
}
function PlanCard({
  p,
  current,
  onUpgrade
}) {
  const isCurrent = p.id === current;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--r-2xl)',
      overflow: 'hidden',
      border: `${isCurrent ? 2 : 1}px solid ${isCurrent ? p.accent : 'var(--border)'}`,
      background: 'var(--surface)',
      boxShadow: isCurrent ? `0 4px 20px color-mix(in srgb, ${p.accent} 20%, transparent)` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.grad,
      padding: '16px 16px 14px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, p.best && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 9,
      fontWeight: 800,
      letterSpacing: 1,
      color: '#fff',
      background: 'rgba(255,255,255,0.25)',
      borderRadius: 4,
      padding: '3px 8px',
      marginBottom: 4
    }
  }, "MOST POPULAR"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: '#fff'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: '#fff'
    }
  }, p.price), isCurrent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      color: '#fff',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: 6,
      padding: '3px 8px',
      marginTop: 4
    }
  }, "Current"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check_circle",
    size: 16,
    fill: 1,
    color: p.accent
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, f))), !isCurrent && /*#__PURE__*/React.createElement("button", {
    onClick: onUpgrade,
    style: {
      width: '100%',
      height: 44,
      marginTop: 8,
      border: 'none',
      borderRadius: 'var(--r-lg)',
      background: p.accent,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Upgrade to ", p.name)));
}
Object.assign(window, {
  MembershipScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screen-membership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screen-sos.jsx
try { (() => {
/* VitaCare Plus — Emergency SOS: pulsing rings, confirm dialog, action grid,
 * emergency medication + blood-group card. */

function SosScreen() {
  const [triggered, setTriggered] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const fire = () => {
    setConfirm(false);
    setTriggered(true);
    setTimeout(() => setTriggered(false), 3500);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      position: 'relative',
      padding: '8px 24px 28px'
    }
  }, triggered && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      padding: 12,
      borderRadius: 'var(--r-lg)',
      background: 'color-mix(in srgb, var(--vc-sos) 10%, transparent)',
      border: '1px solid color-mix(in srgb, var(--vc-sos) 30%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wifi_calling_3",
    size: 18,
    color: "var(--vc-sos)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--vc-sos)'
    }
  }, "SOS ACTIVE \u2014 Help is on the way")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginTop: triggered ? 8 : 32
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      width: 120,
      height: 120,
      borderRadius: '50%',
      border: '2px solid var(--vc-sos)',
      animation: 'vcpulse 1.8s ease-out infinite',
      animationDelay: `${i * 0.45}s`
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setConfirm(true),
    style: {
      position: 'relative',
      width: 120,
      height: 120,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--grad-sos)',
      boxShadow: '0 0 30px 4px rgba(220,38,38,0.4)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      fontWeight: 900,
      letterSpacing: 3
    }
  }, "SOS"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.7)',
      letterSpacing: 1
    }
  }, "CALL 108"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Tap for Emergency"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 32
    }
  }, [['Call Doctor', 'medical_services', 'var(--primary)'], ['Share GPS', 'location_on', 'var(--secondary)'], ['Alert Family', 'family_restroom', 'var(--warning)'], ['Nearest Hospital', 'local_hospital', 'var(--success)']].map(([lbl, ico, c]) => /*#__PURE__*/React.createElement("div", {
    key: lbl,
    style: {
      background: `color-mix(in srgb, ${c} 8%, transparent)`,
      border: `1px solid color-mix(in srgb, ${c} 20%, transparent)`,
      borderRadius: 'var(--r-card)',
      padding: '16px 12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: `color-mix(in srgb, ${c} 15%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ico,
    size: 22,
    color: c
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700
    }
  }, lbl)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--r-md)',
      background: 'color-mix(in srgb, var(--vc-sos) 10%, transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "medication",
    size: 18,
    color: "var(--vc-sos)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, "Emergency Medications")), /*#__PURE__*/React.createElement(MedRow, {
    name: "Metformin 500mg",
    dose: "1 tablet at night"
  }), /*#__PURE__*/React.createElement(MedRow, {
    name: "Glimepiride 2mg",
    dose: "1 before breakfast"
  }), /*#__PURE__*/React.createElement(MedRow, {
    name: "Penicillin",
    dose: "ALLERGY \u2014 Do NOT give",
    allergy: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8,
      padding: 10,
      borderRadius: 'var(--r-sm)',
      background: 'color-mix(in srgb, var(--error) 8%, transparent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bloodtype",
    size: 16,
    color: "var(--error)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--error)'
    }
  }, "Blood Group: O+"))), confirm && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setConfirm(false),
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(15,23,42,0.45)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface)',
      borderRadius: 'var(--r-2xl)',
      padding: 22,
      width: '100%',
      maxWidth: 320,
      animation: 'vcpop .25s cubic-bezier(.2,1.2,.4,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "warning",
    size: 24,
    color: "var(--error)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 700
    }
  }, "Emergency SOS")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, "This will call 108 Emergency Services and alert your emergency contacts with your GPS location. Proceed?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setConfirm(false)
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    onClick: fire
  }, "Call Now")))));
}
function MedRow({
  name,
  dose,
  allergy
}) {
  const c = allergy ? 'var(--error)' : 'var(--success)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: allergy ? 'dangerous' : 'check_circle',
    size: 16,
    color: c
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: allergy ? 700 : 500,
      color: allergy ? c : 'var(--text-primary)'
    }
  }, name, " \u2014 ", dose));
}
Object.assign(window, {
  SosScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screen-sos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/vc-ui.jsx
try { (() => {
/* VitaCare Plus — UI kit primitives (self-contained recreation of the
 * component library for an openable, dependency-free prototype).
 * Mirrors components/core/* and the Flutter widgets 1:1 on styling. */

/* Icons render as inline (light-DOM) SVG via the Iconify scanning library,
 * pulling the exact Material Symbols Rounded set the app uses. Inline SVG so it
 * rasterizes everywhere (live, DS-tab thumbnails, PDF/PNG export). */
const VC_NO_OUTLINE = new Set(['trending_up', 'trending_down', 'trending_flat', 'add', 'arrow_back', 'chevron_right', 'directions_walk', 'family_restroom', 'accessibility_new', 'logout', 'wifi_calling_3', 'sos', 'monitor_weight', 'face', 'credit_card']);
function vcIconId(name, fill) {
  const base = name.replace(/_/g, '-');
  const filled = fill === 1 || VC_NO_OUTLINE.has(name);
  return `material-symbols:${base}${filled ? '-rounded' : '-outline-rounded'}`;
}
function Icon({
  name,
  size = 22,
  fill = 0,
  color = 'currentColor',
  style = {},
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "iconify",
    "data-icon": vcIconId(name, fill),
    onClick: onClick,
    style: {
      fontSize: size,
      lineHeight: 0,
      color,
      flexShrink: 0,
      display: 'inline-flex',
      ...style
    }
  });
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth,
  loading,
  disabled,
  leadingIcon,
  onClick,
  style = {}
}) {
  const [p, setP] = React.useState(false);
  const isOff = disabled || loading;
  const H = {
    sm: 40,
    md: 52,
    lg: 54
  }[size];
  const fills = {
    primary: {
      background: 'var(--grad-primary)',
      color: '#fff',
      boxShadow: 'var(--shadow-primary)'
    },
    secondary: {
      background: 'var(--grad-teal)',
      color: '#fff'
    },
    danger: {
      background: 'var(--grad-sos)',
      color: '#fff',
      boxShadow: 'var(--shadow-sos)'
    },
    outlined: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--primary)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    onClick: isOff ? undefined : onClick,
    onPointerDown: () => setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      height: H,
      padding: '0 24px',
      borderRadius: 'var(--r-lg)',
      border: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 14 : 15,
      fontWeight: 600,
      letterSpacing: 'var(--ls-button)',
      cursor: isOff ? 'default' : 'pointer',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform var(--dur-fast) var(--ease-std)',
      transform: p && !isOff ? 'scale(0.97)' : 'scale(1)',
      ...fills,
      ...(isOff ? {
        background: variant === 'outlined' || variant === 'ghost' ? 'transparent' : 'rgba(15,23,42,0.12)',
        color: 'rgba(15,23,42,0.38)',
        boxShadow: 'none',
        border: variant === 'outlined' ? '1.5px solid rgba(15,23,42,0.12)' : undefined
      } : {}),
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, leadingIcon && /*#__PURE__*/React.createElement(Icon, {
    name: leadingIcon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, children)));
}
function Spinner({
  color = '#fff'
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: '2px solid rgba(255,255,255,0.4)',
      borderTopColor: color,
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'vcspin .7s linear infinite'
    }
  });
}
function Card({
  children,
  gradient,
  padding = 16,
  radius = 16,
  onClick,
  style = {}
}) {
  const [p, setP] = React.useState(false);
  const press = typeof onClick === 'function';
  const grads = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)',
    sos: 'var(--grad-sos)'
  };
  const glow = {
    primary: 'var(--shadow-primary)',
    teal: '0 4px 16px rgba(13,148,136,.3)',
    gold: 'var(--shadow-gold)',
    sos: 'var(--shadow-sos)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onPointerDown: () => press && setP(true),
    onPointerUp: () => setP(false),
    onPointerLeave: () => setP(false),
    style: {
      borderRadius: radius,
      padding,
      boxSizing: 'border-box',
      background: gradient ? grads[gradient] : 'var(--card)',
      color: gradient ? '#fff' : 'var(--text-primary)',
      boxShadow: gradient ? glow[gradient] : 'var(--shadow-card)',
      cursor: press ? 'pointer' : 'default',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform var(--dur-base) var(--ease-std)',
      transform: p && press ? 'scale(0.98)' : 'scale(1)',
      ...style
    }
  }, children);
}
function Badge({
  children,
  status = 'info',
  dot = true,
  style = {}
}) {
  const c = {
    info: 'var(--primary)',
    success: 'var(--success)',
    normal: 'var(--success)',
    warning: 'var(--warning)',
    critical: 'var(--error)',
    error: 'var(--error)',
    gold: 'var(--gold)'
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      borderRadius: 'var(--r-pill)',
      background: `color-mix(in srgb, ${c} 10%, transparent)`,
      color: c,
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }), children);
}
function Avatar({
  initials = 'U',
  size = 42,
  shape = 'squircle',
  gradient = 'primary',
  style = {}
}) {
  const grads = {
    primary: 'var(--grad-primary)',
    teal: 'var(--grad-teal)',
    gold: 'var(--grad-gold)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: shape === 'circle' ? '50%' : 'var(--r-lg)',
      background: grads[gradient],
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: size * 0.34,
      flexShrink: 0,
      ...style
    }
  }, initials);
}
function Chip({
  children,
  selected,
  color = 'primary',
  onClick,
  style = {}
}) {
  const c = color === 'secondary' ? 'var(--secondary)' : 'var(--primary)';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: 'var(--r-pill)',
      cursor: 'pointer',
      transition: 'all var(--dur-medium) var(--ease-std)',
      background: selected ? `color-mix(in srgb, ${c} 10%, transparent)` : 'var(--surface)',
      border: `${selected ? 1.5 : 1}px solid ${selected ? c : 'var(--border)'}`,
      color: selected ? c : 'var(--text-primary)',
      WebkitTapHighlightColor: 'transparent',
      ...style
    }
  }, children);
}
function SectionHeader({
  title,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), action && /*#__PURE__*/React.createElement("button", {
    onClick: onAction,
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--primary)'
    }
  }, action));
}
function MetricCard({
  label,
  value,
  unit,
  icon,
  iconColor,
  delta,
  deltaLabel,
  onClick
}) {
  const up = (delta ?? 0) > 0,
    down = (delta ?? 0) < 0;
  const tc = up ? 'var(--error)' : down ? 'var(--success)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    onClick: onClick,
    style: {
      width: 140,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--r-md)',
      background: `color-mix(in srgb, ${iconColor} 10%, transparent)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: iconColor
  })), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: '3px 6px',
      borderRadius: 6,
      background: `color-mix(in srgb, ${tc} 10%, transparent)`,
      color: tc,
      fontSize: 10,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: up ? 'trending_up' : down ? 'trending_down' : 'trending_flat',
    size: 12,
    color: tc
  }), Math.abs(delta).toFixed(1), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 3,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      letterSpacing: -1,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      paddingBottom: 2
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, label), deltaLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: tc,
      marginTop: 2
    }
  }, deltaLabel));
}
Object.assign(window, {
  Icon,
  Button,
  Spinner,
  Card,
  Badge,
  Avatar,
  Chip,
  SectionHeader,
  MetricCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/vc-ui.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.BottomSheet = __ds_scope.BottomSheet;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.MedicationCard = __ds_scope.MedicationCard;

__ds_ns.MetricCard = __ds_scope.MetricCard;

})();
