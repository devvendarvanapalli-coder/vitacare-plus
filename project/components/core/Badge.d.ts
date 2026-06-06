import React from 'react';

export type BadgeStatus = 'info' | 'success' | 'normal' | 'warning' | 'critical' | 'error' | 'gold';

/**
 * Status pill — a tinted capsule with a colored label and optional dot.
 * Used for appointment states, medication status, vitals severity, etc.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** Semantic color. @default "info" */
  status?: BadgeStatus;
  /** Show the leading dot. @default true */
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
