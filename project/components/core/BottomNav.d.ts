import React from 'react';

export interface BottomNavItem {
  /** Material Symbols Rounded glyph name (e.g. "home", "calendar_today"). */
  icon: string;
  label: string;
  /** Show a red notification dot on the icon. @default false */
  badge?: boolean;
}

/**
 * Mobile bottom navigation bar. Up to 5 items; the active one shows
 * a filled icon + primary-blue label. Floats above content with shadow-nav.
 * Render it inside a fixed-height flex column below the scrollable content area.
 */
export interface BottomNavProps {
  items: BottomNavItem[];
  /** Zero-based index of the active tab. @default 0 */
  activeIndex?: number;
  /** Called with the tapped index. */
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}

export function BottomNav(props: BottomNavProps): JSX.Element;
