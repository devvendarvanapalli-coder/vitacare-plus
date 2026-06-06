import React from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Labeled text field. Use for all form inputs in VitaCare Plus flows:
 * phone number, OTP, vitals entry, search fields.
 * Focus state shows a 1.5px primary-blue border; error state turns it red
 * and shows a helper message below.
 */
export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  /** Helper text shown below the field in rest state. */
  helper?: string;
  /** Error message — overrides helper and sets red border + label. */
  error?: string;
  /** Material Symbols Rounded glyph shown inside the left edge. */
  leadingIcon?: string;
  /** Material Symbols Rounded glyph shown inside the right edge. */
  trailingIcon?: string;
  /** Called when the trailing icon is clicked (e.g. toggle password). */
  onTrailingIconClick?: () => void;
  disabled?: boolean;
  /** @default "md" (52px height). sm=44, lg=56. */
  size?: InputSize;
  id?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
