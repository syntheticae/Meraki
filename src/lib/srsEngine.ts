/**
 * Meraki English — Centralized Spaced Repetition System (SRS) Engine
 * Unified intervals for Leitner Box & Spaced Memory retrieval.
 */

export const SRS_INTERVAL_DAYS = [1, 3, 7, 14, 30] as const;

/**
 * Calculates next review timestamp based on box/review level.
 * @param level 1-indexed box or review count (1 to 5+)
 * @returns Millisecond timestamp for next due date
 */
export function calculateNextReviewDate(level: number): number {
  const index = Math.min(Math.max(0, level - 1), SRS_INTERVAL_DAYS.length - 1);
  const days = SRS_INTERVAL_DAYS[index] ?? 1;
  return Date.now() + days * 24 * 60 * 60 * 1000;
}

/**
 * Returns human-readable relative label for SRS interval.
 */
export function getSrsIntervalLabel(level: number): string {
  const index = Math.min(Math.max(0, level - 1), SRS_INTERVAL_DAYS.length - 1);
  const days = SRS_INTERVAL_DAYS[index] ?? 1;
  if (days === 1) return 'Besok (1 hari)';
  return `${days} hari`;
}
