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
      type="button"
      aria-pressed={isDark}
      aria-label={isDark ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
      title={isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap (Onyx)'}
      className={clsx(
        'p-2.5 rounded-xl border transition-all duration-200 tactile-btn flex items-center justify-center min-h-[44px] min-w-[44px] cursor-pointer',
        isDark
          ? 'bg-[#141414] hover:bg-[#2B2B2B] text-[#BFD8E3] border-white/10 hover:border-[#00638E]/50'
          : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#00638E] border-[#CBD5E1] shadow-2xs',
        className
      )}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#BFD8E3] transition-transform rotate-0 hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-[#00638E] transition-transform rotate-0 hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
