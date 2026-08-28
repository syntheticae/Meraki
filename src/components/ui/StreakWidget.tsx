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
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/15 border border-amber-500/25 text-amber-900 font-mono text-xs shadow-xs">
        <Flame className="w-4 h-4 text-[#C4502A] animate-pulse" />
        <span className="font-semibold text-[#C4502A]">{streak.currentStreak} Hari</span>
        <span className="text-[#82796A] hidden sm:inline text-[11px]">Streak</span>
      </div>

      <div className="hidden md:flex items-center gap-1">
        {last7Days.map((day) => (
          <div
            key={day.dateStr}
            title={`${day.dateStr} ${day.isCompleted ? '(Selesai Belajar)' : ''}`}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${
              day.isCompleted
                ? 'bg-[#5F6244] text-white font-bold shadow-xs'
                : day.isToday
                ? 'border border-dashed border-[#C4502A] text-[#C4502A]'
                : 'bg-[#1A1714]/06 text-[#82796A]/60'
            }`}
          >
            {day.isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : day.dayName[0]}
          </div>
        ))}
      </div>
    </div>
  );
}
