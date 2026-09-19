'use client';

import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Volume2,
  RotateCcw,
  Send,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { PARAPHRASING_TASKS_DATA, ParaphraseTask } from '@/data/meraki-matrices';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

export default function SyntaxStudioPage() {
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const [techniqueFilter, setTechniqueFilter] = useState<'all' | 'Active to Passive' | 'Nominalization' | 'Clause to Participle'>('all');

  const filteredTasks = PARAPHRASING_TASKS_DATA.filter((t) => {
    if (techniqueFilter === 'all') return true;
    return t.technique === techniqueFilter;
  });

  const currentTask: ParaphraseTask = filteredTasks[selectedTaskIndex] || filteredTasks[0];

  const handleReset = () => {
    setUserInput('');
    setIsRevealed(false);
  };

  return (
    <AppShell
      category="Laboratorium Bahasa"
      title="Studio Sintaksis & Parafrase Akademik"
    >
      <div className="space-y-6">
        {/* Header Intro */}
        <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC]">
              Syntactic Density & Paraphrasing Engine
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
            Transformasi Kalimat & Peningkatan Ragam Bahasa
          </h2>
          <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992] max-w-3xl leading-relaxed">
            Latih kemampuan memparafrase kalimat akademis menggunakan 3 teknik utama: Active-to-Passive, Nominalisasi frasa verba, dan Reduksi Klausa menjadi Participle Phrase.
          </p>

          {/* Technique Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
            <span className="text-[#50585C] dark:text-[#7A8992]">Teknik:</span>
            {(['all', 'Active to Passive', 'Nominalization', 'Clause to Participle'] as const).map((tech) => (
              <button
                key={tech}
                onClick={() => {
                  setTechniqueFilter(tech);
                  setSelectedTaskIndex(0);
                  handleReset();
                }}
                className={clsx(
                  'px-3 py-1.5 rounded-xl transition-all cursor-pointer',
                  techniqueFilter === tech
                    ? 'bg-[#00638E] text-white font-bold shadow-xs'
                    : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-[#FFFFFF]'
                )}
              >
                {tech === 'all' ? 'Semua Teknik' : tech}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Workspace */}
        {currentTask ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#BFD8E3]/40 dark:border-white/5 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#00638E] dark:text-[#8CB9CC] font-bold">
                  {currentTask.technique}
                </span>
                <span className="text-[#50585C] dark:text-[#7A8992]">
                  Fokus: {currentTask.targetFocus}
                </span>
              </div>
              <span className="text-[#50585C] dark:text-[#7A8992]">
                Tugas {selectedTaskIndex + 1} dari {filteredTasks.length}
              </span>
            </div>

            {/* Original Sentence */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#50585C] dark:text-[#7A8992] font-semibold">
                  Kalimat Asal (Original Prompt):
                </span>
                <button
                  onClick={() => playTextToSpeech(currentTask.originalSentence)}
                  className="p-1 rounded-md text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
                  title="Dengarkan pengucapan"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-sm sm:text-base font-serif font-bold text-[#141414] dark:text-[#FFFFFF] leading-relaxed">
                "{currentTask.originalSentence}"
              </div>
            </div>

            {/* Input Area */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-[#50585C] dark:text-[#7A8992] block font-semibold">
                Ketikkan Hasil Parafrasemu (Gunakan teknik: {currentTask.technique}):
              </label>
              <textarea
                rows={3}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Tulis rekonstruksi kalimat akademis Anda di sini..."
                className="w-full p-4 rounded-2xl bg-[#F4F7F9] dark:bg-[#000000] border border-[#BFD8E3]/40 dark:border-white/10 text-sm font-sans text-[#141414] dark:text-[#FFFFFF] outline-hidden focus:border-[#00638E] resize-none"
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRevealed(true)}
                  className="px-5 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer shadow-xs"
                >
                  Bandingkan dengan Contoh Acuan
                </button>
                <button
                  onClick={handleReset}
                  className="px-3.5 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-[#FFFFFF] transition-all cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Revealed Reference Solution */}
            {isRevealed && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5 space-y-4 animate-in fade-in text-xs">
                <div className="space-y-1">
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block">
                    ✓ Rekomendasi Parafrase Baku (Top-Tier Academic):
                  </span>
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/5 text-sm font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
                    "{currentTask.sampleParaphrase}"
                  </div>
                </div>

                {currentTask.acceptableVariations && currentTask.acceptableVariations.length > 0 && (
                  <div className="space-y-1">
                    <span className="font-mono text-[11px] font-bold text-[#50585C] dark:text-[#7A8992] uppercase block">
                      Variasi Lain yang Diterima:
                    </span>
                    <ul className="space-y-1">
                      {currentTask.acceptableVariations.map((v, idx) => (
                        <li key={idx} className="font-mono text-xs text-[#141414] dark:text-[#FFFFFF] pl-3 border-l-2 border-[#00638E]">
                          "{v}"
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-1 pt-2 border-t border-[#BFD8E3]/30 dark:border-white/5">
                  <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                    Penjelasan Transformasi Sintaksis:
                  </span>
                  <p className="text-[#50585C] dark:text-[#7A8992] leading-relaxed">
                    {currentTask.explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Stepper Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-[#BFD8E3]/40 dark:border-white/5">
              <button
                onClick={() => {
                  setSelectedTaskIndex((prev) => Math.max(0, prev - 1));
                  handleReset();
                }}
                disabled={selectedTaskIndex === 0}
                className="px-4 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              >
                ← Tugas Sebelumnya
              </button>
              <button
                onClick={() => {
                  setSelectedTaskIndex((prev) => Math.min(filteredTasks.length - 1, prev + 1));
                  handleReset();
                }}
                disabled={selectedTaskIndex >= filteredTasks.length - 1}
                className="px-5 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-xs"
              >
                Tugas Berikutnya →
              </button>
            </div>
          </div>
        ) : (
          <div className="p-12 text-center text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
            Tidak ada tugas untuk teknik ini.
          </div>
        )}
      </div>
    </AppShell>
  );
}
