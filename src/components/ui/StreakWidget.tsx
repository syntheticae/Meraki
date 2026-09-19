'use client';

import React, { useEffect, useState } from 'react';
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

  // Generate the last 7 days badges
  const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (6 - i));
    const dateStr = d.toISOString().split('T')[0];
    const dayName = days[d.getDay()];
    const isCompleted = streak.historyDates.includes(dateStr);
    const isToday = dateStr === today.toISOString().split('T')[0];
    return { dateStr, dayName, isCompleted, isToday };
  });

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 text-[#00638E] dark:text-[#8CB9CC] font-mono text-xs shadow-xs">
        <Flame className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] animate-pulse" />
        <span className="font-semibold text-[#00638E] dark:text-[#8CB9CC]">{streak.currentStreak} Hari</span>
        <span className="text-[#50585C] dark:text-[#7A8992] hidden sm:inline text-[11px]">Streak</span>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {last7Days.map((day) => (
          <div
            key={day.dateStr}
            title={`${day.dateStr} ${day.isCompleted ? '(Selesai Belajar)' : ''}`}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
              day.isCompleted
                ? 'bg-[#00638E] text-white font-bold shadow-xs'
                : day.isToday
                ? 'border border-dashed border-[#00638E] text-[#00638E] dark:text-[#8CB9CC]'
                : 'bg-[#141414]/5 dark:bg-white/10 text-[#50585C] dark:text-[#7A8992]'
            }`}
          >
            {day.isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : day.dayName[0]}
          </div>
        ))}
      </div>
    </div>
  );
}
