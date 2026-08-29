'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { clsx } from 'clsx';

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'p-2 rounded-xl border transition-all duration-200 tactile-btn flex items-center justify-center',
        isDark
          ? 'bg-[#27231E] hover:bg-[#342F29] text-[#E06D44] border-[#3A342D]'
          : 'bg-[#DDD7CA] hover:bg-[#C8C0B0] text-[#1E1B17] border-[#C8C0B0]',
        className
      )}
      title={isDark ? 'Beralih ke Mode Kertas Terang' : 'Beralih ke Mode Obsidian Night Paper'}
      aria-label="Toggle Obsidian Dark Mode"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#E06D44] transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#524C42] transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
