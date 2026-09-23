'use client';

import React from 'react';

/**
 * Generic skeleton loader for tab views while data loads.
 * Mimics the general layout structure (heading + cards grid + content block).
 */
export function ViewSkeleton() {
  return (
    <div className="space-y-6 animate-pulse" role="status" aria-label="Memuat konten...">
      {/* Header skeleton */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3">
        <div className="h-3 w-24 rounded-full bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
        <div className="h-6 w-64 rounded-xl bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
        <div className="h-3 w-48 rounded-full bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
      </div>

      {/* Cards grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-36 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10"
          />
        ))}
      </div>

      {/* Large content block skeleton */}
      <div className="h-52 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10" />

      <span className="sr-only">Memuat...</span>
    </div>
  );
}

/**
 * Skeleton specifically shaped for the Modules/Lesson view
 */
export function LessonSkeleton() {
  return (
    <div className="space-y-4 animate-pulse" role="status" aria-label="Memuat modul...">
      <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3">
        <div className="h-3 w-20 rounded-full bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
        <div className="h-7 w-3/4 rounded-xl bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
        <div className="h-3 w-1/2 rounded-full bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
      </div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-4 rounded-full bg-[#CBD5E1] dark:bg-[#2B2B2B]" style={{ width: `${85 - i * 8}%` }} />
      ))}
      <div className="h-32 rounded-2xl bg-[#CBD5E1] dark:bg-[#2B2B2B]" />
      <span className="sr-only">Memuat...</span>
    </div>
  );
}
