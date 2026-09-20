'use client';

import React from 'react';
import {
  LayoutDashboard,
  BookOpen,
  ListCheck,
  CreditCard,
  MoreHorizontal,
  Archive,
} from 'lucide-react';
import { clsx } from 'clsx';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const NAV_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'modules', icon: BookOpen, label: 'Modul' },
  { id: 'practice', icon: ListCheck, label: 'Latihan' },
  { id: 'flashcards', icon: CreditCard, label: 'Kartu' },
  { id: 'vault', icon: Archive, label: 'Vault' },
];

export function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-lg border-t border-[#CBD5E1] dark:border-white/10 flex items-stretch pb-safe shadow-lg"
      aria-label="Navigasi utama"
    >
      {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onTabChange(id)}
            className={clsx(
              'flex-1 flex flex-col items-center justify-center gap-1 py-2 px-1 transition-all cursor-pointer min-h-[56px] tactile-btn',
              isActive
                ? 'text-[#00638E] dark:text-[#8CB9CC] font-bold'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white font-medium'
            )}
            aria-current={isActive ? 'page' : undefined}
            aria-label={label}
          >
            <div
              className={clsx(
                'w-8 h-1 rounded-full mb-0.5 transition-all duration-200',
                isActive ? 'bg-[#00638E] dark:bg-[#8CB9CC]' : 'bg-transparent'
              )}
            />
            <Icon
              className={clsx(
                'transition-transform',
                isActive ? 'w-5 h-5 scale-105' : 'w-4.5 h-4.5 opacity-80 hover:opacity-100'
              )}
              strokeWidth={isActive ? 2.5 : 1.75}
            />
            <span className="text-[10px] font-mono leading-tight tracking-tight">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
