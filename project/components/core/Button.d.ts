import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outlined' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button. Use `primary` for the main action on a screen,
 * `secondary` (teal) for supporting actions, `danger` for destructive/SOS flows,
 * `outlined`/`ghost` for low-emphasis actions.
 *
 * @startingPoint section="Core" subtitle="Gradient & outline button variants" viewport="700x180"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual emphasis. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" (52px). lg is 54px for prominent forms. */
  size?: ButtonSize;
  /** Stretch to container width. @default false */
  fullWidth?: boolean;
  /** Show a spinner and block interaction. @default false */
  loading?: boolean;
  disabled?: boolean;
  /** Material Symbols Rounded glyph name shown before the label. */
  leadingIcon?: string;
  /** Material Symbols Rounded glyph name shown after the label. */
  trailingIcon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
