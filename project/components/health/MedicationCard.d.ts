import React from 'react';

/**
 * Single medication row showing drug name, dosage schedule, and a Taken/Pending status pill.
 * Tap to toggle status or navigate to the detail screen.
 *
 * @startingPoint section="Health" subtitle="Medication row with taken/pending state" viewport="500x120"
 */
export interface MedicationCardProps {
  name: string;
  /** Dosage + schedule string, e.g. "1 tablet · 9:00 AM" or "1 capsule before breakfast". */
  dosage: string;
  /** @default false — shows "Pending" warning badge; true shows "Taken" success badge. */
  taken?: boolean;
  /** Material Symbols glyph name. @default "medication" */
  icon?: string;
  /** Called when the card is tapped (use for toggle or navigation). */
  onToggle?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function MedicationCard(props: MedicationCardProps): JSX.Element;
