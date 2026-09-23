'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  ListCheck,
  CreditCard,
  Archive,
  MoreHorizontal,
  Table,
  Compass,
  Sparkles,
  Headphones,
  Library,
  PenTool,
  Award,
  ShieldCheck,
  X,
} from 'lucide-react';
import { clsx } from 'clsx';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const PRIMARY_NAV = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Beranda' },
  { id: 'modules', icon: BookOpen, label: 'Modul' },
  { id: 'practice', icon: ListCheck, label: 'Latihan' },
  { id: 'flashcards', icon: CreditCard, label: 'Kartu' },
  { id: 'vault', icon: Archive, label: 'Vault' },
];

const MORE_FEATURES = [
  { id: 'matrices', icon: Table, label: 'Master Matriks', desc: '16 tabel kaidah grammar & rumus' },
  { id: 'syntax', icon: Compass, label: 'Studio Sintaksis', desc: 'Analisis kalimat & parafrase' },
  { id: 'collocations', icon: Sparkles, label: 'Diksi & Kolokasi', desc: 'Academic Collocation List' },
  { id: 'phonetics', icon: Headphones, label: 'Fonetik IPA', desc: '44 fonem & minimal pairs' },
  { id: 'vocabulary', icon: Library, label: 'AWL Lexicon', desc: 'Kosakata akademis Oxford' },
  { id: 'writing-pad', icon: PenTool, label: 'Writing Studio', desc: 'Linter & evaluasi esai' },
  { id: 'exam', icon: Award, label: 'IELTS & TOEFL', desc: 'Simulasi ujian internasional' },
  { id: 'diagnostic', icon: ShieldCheck, label: 'Diagnostik CEFR', desc: 'Uji level kompetensi mandiri' },
];

export function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isMoreActive = MORE_FEATURES.some((f) => f.id === activeTab);

  return (
    <>
      {/* More Features Drawer Sheet */}
      {isMoreOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in"
          onClick={() => setIsMoreOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu Fitur Lengkap"
            className="fixed bottom-0 left-0 right-0 max-h-[80vh] bg-white dark:bg-[#141414] border-t border-[#CBD5E1] dark:border-white/10 rounded-t-3xl p-5 pb-8 overflow-y-auto space-y-4 shadow-2xl animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-white/10">
              <div>
                <h3 className="font-serif font-bold text-base text-[#0F172A] dark:text-white">
                  Laboratorium & Fitur Lengkap
                </h3>
                <p className="text-[11px] text-[#475569] dark:text-[#8CB9CC] font-mono">
                  Akses langsung seluruh fitur Meraki Studio
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMoreOpen(false)}
                aria-label="Tutup menu fitur"
                className="p-2 rounded-xl text-[#475569] dark:text-[#8CB9CC] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MORE_FEATURES.map(({ id, icon: Icon, label, desc }) => {
                const isActive = activeTab === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      onTabChange(id);
                      setIsMoreOpen(false);
                    }}
                    className={clsx(
                      'p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer min-h-[52px] tactile-btn',
                      isActive
                        ? 'bg-[#00638E] text-white font-bold border-[#00638E] shadow-xs'
                        : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-[#0F172A] dark:text-white'
                    )}
                  >
                    <div
                      className={clsx(
                        'p-2 rounded-xl shrink-0 mt-0.5',
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-white dark:bg-[#2B2B2B] text-[#00638E] dark:text-[#8CB9CC] border border-[#CBD5E1] dark:border-transparent'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold leading-tight truncate">{label}</div>
                      <div
                        className={clsx(
                          'text-[11px] leading-tight truncate mt-0.5',
                          isActive ? 'text-white/80' : 'text-[#64748B] dark:text-[#8CB9CC]'
                        )}
                      >
                        {desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Persistent Bottom Bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#141414]/95 backdrop-blur-lg border-t border-[#CBD5E1] dark:border-white/10 flex items-stretch pb-safe shadow-lg"
        aria-label="Navigasi utama mobile"
      >
        {PRIMARY_NAV.map(({ id, icon: Icon, label }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onTabChange(id)}
              className={clsx(
                'flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 px-0.5 transition-all cursor-pointer min-h-[54px] tactile-btn',
                isActive
                  ? 'text-[#00638E] dark:text-[#8CB9CC] font-bold'
                  : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white font-medium'
              )}
              aria-current={isActive ? 'page' : undefined}
              aria-label={label}
            >
              <div
                className={clsx(
                  'w-6 h-1 rounded-full mb-0.5 transition-all duration-200',
                  isActive ? 'bg-[#00638E] dark:bg-[#8CB9CC]' : 'bg-transparent'
                )}
              />
              <Icon
                className={clsx(
                  'transition-transform',
                  isActive ? 'w-5 h-5 scale-105' : 'w-[18px] h-[18px] opacity-80 hover:opacity-100'
                )}
                strokeWidth={isActive ? 2.5 : 1.75}
              />
              <span className="text-[11px] font-mono leading-tight tracking-tight">
                {label}
              </span>
            </button>
          );
        })}

        {/* 6th "Lainnya" Button */}
        <button
          type="button"
          onClick={() => setIsMoreOpen(true)}
          className={clsx(
            'flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 px-0.5 transition-all cursor-pointer min-h-[54px] tactile-btn',
            isMoreActive
              ? 'text-[#00638E] dark:text-[#8CB9CC] font-bold'
              : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white font-medium'
          )}
          aria-label="Menu Fitur Lainnya"
        >
          <div
            className={clsx(
              'w-6 h-1 rounded-full mb-0.5 transition-all duration-200',
              isMoreActive ? 'bg-[#00638E] dark:bg-[#8CB9CC]' : 'bg-transparent'
            )}
          />
          <MoreHorizontal
            className={clsx(
              'transition-transform',
              isMoreActive ? 'w-5 h-5 scale-105' : 'w-[18px] h-[18px] opacity-80 hover:opacity-100'
            )}
            strokeWidth={isMoreActive ? 2.5 : 1.75}
          />
          <span className="text-[11px] font-mono leading-tight tracking-tight">
            Lainnya
          </span>
        </button>
      </nav>
    </>
  );
}
