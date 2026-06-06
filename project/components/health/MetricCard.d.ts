import React from 'react';

/**
 * Health vital metric tile. Shows an icon tile, a large number, a unit label,
 * and an optional ± percentage delta badge (red = up bad, green = down good —
 * correct for glucose/HbA1c; invert colors for weight/BP if clinical context differs).
 *
 * @startingPoint section="Health" subtitle="Vital metric card with delta indicator" viewport="500x200"
 */
export interface MetricCardProps {
  label: string;
  /** Formatted value string, e.g. "6.8" or "128/82". */
  value: string | number;
  /** Unit string, e.g. "%" or "mg/dL". */
  unit: string;
  /** Material Symbols glyph name, e.g. "water_drop". */
  icon: string;
  /** CSS color for the icon and tint background. Use a `--vc-*` accent token. */
  iconColor: string;
  /**
   * Percentage delta vs. last period.
   * Positive = red (trending up = worse for glucose).
   * Negative = green (trending down = better).
   * Omit to hide the delta badge.
   */
  delta?: number;
  /** Sub-label under the delta, e.g. "from last month". */
  deltaLabel?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function MetricCard(props: MetricCardProps): JSX.Element;
