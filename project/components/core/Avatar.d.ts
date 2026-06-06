import React from 'react';

/**
 * User avatar — a gradient squircle (or circle) holding initials, or a photo.
 */
export interface AvatarProps {
  /** 1–2 character initials shown when no `src`. */
  initials?: string;
  /** Image URL; overrides initials/gradient. */
  src?: string;
  /** Pixel size (width = height). @default 42 */
  size?: number;
  /** @default "squircle" (12px radius). */
  shape?: 'squircle' | 'circle';
  /** Gradient fill behind initials. @default "primary" */
  gradient?: 'primary' | 'teal' | 'gold';
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
