import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

const VC_NO_OUTLINE = new Set([
  'trending_up', 'trending_down', 'trending_flat', 'add', 'arrow_back', 'chevron_right',
  'directions_walk', 'family_restroom', 'accessibility_new', 'logout', 'wifi_calling_3', 'sos',
  'monitor_weight', 'face', 'credit_card',
]);

function vcIconId(name, fill) {
  const base = name.replace(/_/g, '-');
  const filled = fill === 1 || fill === true || VC_NO_OUTLINE.has(name);
  return `material-symbols:${base}${filled ? '-rounded' : '-outline-rounded'}`;
}

export function Icon({ name, size = 22, fill = 0, color = 'currentColor', style = {}, onClick }) {
  return (
    <IconifyIcon
      icon={vcIconId(name, fill)}
      width={size}
      height={size}
      onClick={onClick}
      style={{ color, flexShrink: 0, display: 'inline-flex', cursor: onClick ? 'pointer' : undefined, ...style }}
    />
  );
}
