import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining class names with Tailwind conflict resolution.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * Usage: cn('p-4', isActive && 'text-blue-500', 'p-6') → 'text-blue-500 p-6'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
