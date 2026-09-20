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
          ? 'bg-[#141414] hover:bg-[#2B2B2B] text-[#BFD8E3] border-white/10 hover:border-[#00638E]/50'
          : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#00638E] border-[#CBD5E1] shadow-2xs',
        className
      )}
      title={isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap (Onyx)'}
      aria-label="Toggle Theme Mode"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#BFD8E3] transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#00638E] transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
