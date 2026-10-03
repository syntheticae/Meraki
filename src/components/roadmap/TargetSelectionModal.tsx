'use client';

import React from 'react';
import { X, CheckCircle2, Clock, Target, ArrowRight, Sparkles } from 'lucide-react';
import { ROADMAP_PRESETS } from '@/lib/roadmapEngine';
import { RoadmapTargetId } from '@/types/roadmap';
import { clsx } from 'clsx';

interface TargetSelectionModalProps {
  isOpen: boolean;
  currentTargetId: RoadmapTargetId;
  onClose: () => void;
  onSelectTarget: (targetId: RoadmapTargetId) => void;
}

export function TargetSelectionModal({
  isOpen,
  currentTargetId,
  onClose,
  onSelectTarget,
}: TargetSelectionModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="roadmap-target-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#CBD5E1] dark:border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
              <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase tracking-wider font-bold">
                Personalisasi Kurikulum
              </span>
            </div>
            <h2 id="roadmap-target-title" className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-white">
              Pilih Target Jalur Belajar
            </h2>
            <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
              Pilih jalur yang paling selaras dengan tujuan belajarmu saat ini. Sistem akan menyusunkan
              distribusi materi harian secara seimbang (Teori + Lab + Review).
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal pilihan target"
            className="p-2 rounded-xl text-[#475569] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1C1C1C] transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Presets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ROADMAP_PRESETS.map((preset) => {
            const isSelected = preset.id === currentTargetId;

            return (
              <div
                key={preset.id}
                onClick={() => onSelectTarget(preset.id)}
                className={clsx(
                  'p-5 rounded-2xl border transition-all text-left flex flex-col justify-between space-y-3 cursor-pointer group shadow-2xs',
                  isSelected
                    ? 'border-2 border-[#00638E] bg-[#00638E]/5 dark:bg-[#00638E]/10'
                    : 'border-[#CBD5E1] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#1C1C1C] hover:border-[#00638E]'
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-[#00638E]/10 text-[#00638E] dark:bg-[#00638E]/20 dark:text-[#8CB9CC]">
                      {preset.badge}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-[#475569] dark:text-[#94A3B8]">
                      <Clock className="w-3 h-3 text-[#00638E]" /> {preset.durationDays} Hari
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#0F172A] dark:text-white group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC] transition-colors">
                    {preset.title}
                  </h3>

                  <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                    {preset.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#CBD5E1]/60 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-[#475569] dark:text-[#94A3B8]">
                    ~{preset.estimatedHours} jam total
                  </span>
                  <div className="flex items-center gap-1 font-bold text-[#00638E] dark:text-[#8CB9CC]">
                    <span>{isSelected ? 'Jalur Aktif' : 'Pilih Jalur'}</span>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="p-3.5 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2.5 text-xs text-[#475569] dark:text-[#94A3B8]">
          <Sparkles className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
          <span>
            Kamu dapat mengganti target kapan saja. Progres modul yang sudah kamu selesaikan tetap tersimpan aman.
          </span>
        </div>
      </div>
    </div>
  );
}
