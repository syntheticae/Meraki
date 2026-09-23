'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { StreakData } from '@/types/user';

export function StreakWidget() {
  const [streak, setStreak] = useState<StreakData | null>(null);

  useEffect(() => {
    progressRepository.getProgress().then((data) => {
      setStreak(data.streak);
    });
  }, []);

  if (!streak) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 text-[#00638E] dark:text-[#8CB9CC] font-mono text-xs shadow-xs">
        <Flame className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] animate-pulse" />
        <span className="font-semibold text-[#00638E] dark:text-[#8CB9CC]">{streak.currentStreak} Hari</span>
        <span className="text-[#50585C] dark:text-[#7A8992] hidden sm:inline text-[11px]">Streak</span>
      </div>

      {/* 4-week heatmap on md+ screens */}
      <HeatmapDots historyDates={streak.historyDates} />
    </div>
  );
}

function HeatmapDots({ historyDates }: { historyDates: string[] }) {
  // Build last 28 days grid (4 rows × 7 cols, Mon→Sun layout)
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const historySet = useMemo(() => new Set(historyDates), [historyDates]);

  // Start 27 days ago (inclusive of today = 28 days)
  const days = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => {
      const d = new Date();
      d.setDate(today.getDate() - (27 - i));
      const dateStr = d.toISOString().split('T')[0];
      const isCompleted = historySet.has(dateStr);
      const isToday = dateStr === todayStr;
      return { dateStr, isCompleted, isToday };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historySet, todayStr]);

  return (
    <div className="hidden md:flex flex-col gap-0.5" title="Aktivitas 28 hari terakhir">
      {/* 4 rows of 7 days */}
      {Array.from({ length: 4 }, (_, rowIdx) => (
        <div key={rowIdx} className="flex items-center gap-0.5">
          {days.slice(rowIdx * 7, rowIdx * 7 + 7).map((day) => (
            <div
              key={day.dateStr}
              title={`${day.dateStr}${day.isCompleted ? ' ✓ Belajar' : ''}`}
              className={[
                'w-[10px] h-[10px] rounded-sm transition-all',
                day.isCompleted
                  ? 'bg-[#00638E] dark:bg-[#8CB9CC] opacity-90'
                  : day.isToday
                  ? 'border border-dashed border-[#00638E] dark:border-[#8CB9CC] opacity-70'
                  : 'bg-[#CBD5E1] dark:bg-white/10 opacity-40',
              ].join(' ')}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
