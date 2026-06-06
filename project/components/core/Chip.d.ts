import React from 'react';

/**
 * Selectable pill for single/multi choice (specialty filters, consultation type, etc).
 */
export interface ChipProps {
  children: React.ReactNode;
  /** Selected styling — tinted fill + colored border. @default false */
  selected?: boolean;
  /** Accent when selected. @default "primary" */
  color?: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

export function Chip(props: ChipProps): JSX.Element;
