'use client';

import React, { useState } from 'react';
import {
  Volume2,
  RotateCcw,
} from 'lucide-react';
import { PARAPHRASING_TASKS_DATA, ParaphraseTask } from '@/data/meraki-matrices';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

export function SyntaxView() {
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
    <div className="space-y-6">
      {/* Header Intro */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
            Syntactic Density & Paraphrasing Engine
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
          Transformasi Kalimat & Peningkatan Ragam Bahasa
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] dark:text-[#7A8992] max-w-3xl leading-relaxed">
          Latih kemampuan memparafrase kalimat akademis menggunakan 3 teknik utama: Active-to-Passive, Nominalisasi frasa verba, dan Reduksi Klausa menjadi Participle Phrase.
        </p>

        {/* Technique Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <span className="text-[#475569] dark:text-[#7A8992] font-semibold">Teknik:</span>
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
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
              )}
            >
              {tech === 'all' ? 'Semua Teknik' : tech}
            </button>
          ))}
        </div>
      </div>

      {/* Studio Interactive Area */}
      {currentTask ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CBD5E1] dark:border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                {currentTask.technique}
              </span>
              <span className="text-[#475569] dark:text-[#7A8992]">
                Fokus: {currentTask.targetFocus}
              </span>
            </div>
            <span className="text-[#475569] dark:text-[#7A8992]">
              Tugas {selectedTaskIndex + 1} dari {filteredTasks.length}
            </span>
          </div>

          {/* Original Sentence */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                Kalimat Asal (Original Prompt):
              </span>
              <button
                onClick={() => playTextToSpeech(currentTask.originalSentence)}
                className="p-1 rounded-md text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
                title="Dengarkan pengucapan"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-sm sm:text-base font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed shadow-2xs">
              "{currentTask.originalSentence}"
            </div>
          </div>

          {/* Input Area */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC] block font-bold">
              Ketikkan Hasil Parafrasemu (Gunakan teknik: {currentTask.technique}):
            </label>
            <textarea
              rows={3}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Tulis rekonstruksi kalimat akademis Anda di sini..."
              className="w-full p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#000000] border border-[#CBD5E1] dark:border-white/10 text-sm font-sans text-[#0F172A] dark:text-[#FFFFFF] outline-hidden focus:border-[#00638E] resize-none shadow-2xs"
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
                className="px-3.5 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF] transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Revealed Reference Solution */}
          {isRevealed && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4 animate-in fade-in text-xs shadow-2xs">
              <div className="space-y-1">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 block">
                  ✓ Rekomendasi Parafrase Baku (Top-Tier Academic):
                </span>
                <div className="p-3.5 rounded-xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 text-sm font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs">
                  "{currentTask.sampleParaphrase}"
                </div>
              </div>

              {currentTask.acceptableVariations && currentTask.acceptableVariations.length > 0 && (
                <div className="space-y-1">
                  <span className="font-mono text-[11px] font-bold text-[#004A6B] dark:text-[#8CB9CC] uppercase block">
                    Variasi Lain yang Diterima:
                  </span>
                  <ul className="space-y-1">
                    {currentTask.acceptableVariations.map((v, idx) => (
                      <li key={idx} className="font-mono text-xs text-[#0F172A] dark:text-[#FFFFFF] pl-3 border-l-2 border-[#00638E] font-medium">
                        "{v}"
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-1 pt-2 border-t border-[#CBD5E1] dark:border-white/10">
                <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                  Penjelasan Transformasi Sintaksis:
                </span>
                <p className="text-[#334155] dark:text-[#7A8992] leading-relaxed">
                  {currentTask.explanation}
                </p>
              </div>
            </div>
          )}

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-[#CBD5E1] dark:border-white/10">
            <button
              onClick={() => {
                setSelectedTaskIndex((prev) => Math.max(0, prev - 1));
                handleReset();
              }}
              disabled={selectedTaskIndex === 0}
              className="px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:border-[#00638E]"
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
  );
}
