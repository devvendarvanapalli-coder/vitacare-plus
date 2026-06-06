import React from 'react';

/**
 * Modal overlay that slides up from the bottom of the screen.
 * Use for booking flows, filter panels, action menus, and appointment detail sheets.
 * Renders into the current stacking context — wrap the app in a relative container
 * or use a portal if z-index conflicts occur.
 */
export interface BottomSheetProps {
  /** Controls visibility. Toggle to show/hide with animation. */
  open: boolean;
  /** Called when the backdrop or close button is clicked. */
  onClose?: () => void;
  /** Title shown in the sheet header. */
  title?: string;
  children?: React.ReactNode;
  /** CSS max-height of the sheet. @default "80vh" */
  maxHeight?: string;
  style?: React.CSSProperties;
}

export function BottomSheet(props: BottomSheetProps): JSX.Element | null;
