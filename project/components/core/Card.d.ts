import React from 'react';

export type CardGradient = 'primary' | 'teal' | 'gold' | 'sos';

/**
 * Rounded content surface — the primary container in VitaCare Plus.
 * Plain white with a soft shadow, or a gradient hero variant with a colored glow.
 */
export interface CardProps {
  children: React.ReactNode;
  /** Render as a gradient hero card (white text + colored glow) instead of a plain surface. */
  gradient?: CardGradient;
  /** Inner padding in px. @default 16 */
  padding?: number;
  /** Corner radius in px. @default 16 */
  radius?: number;
  /** When provided, the card becomes pressable and shrinks to 0.98 on tap. */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
