'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Link as LinkIcon, Check } from 'lucide-react';
import { MatchingExercise } from '@/types/exercise';
import { clsx } from 'clsx';

interface Props {
  exercise: MatchingExercise;
  onAnswerChecked?: (isCorrect: boolean) => void;
}

export function MatchingPairs({ exercise, onAnswerChecked }: Props) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({}); // leftId -> rightId
  const [shuffledRights, setShuffledRights] = useState<Array<{ id: string; text: string }>>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Shuffle right-side items on load or exercise change
    const rights = exercise.pairs.map((p) => ({ id: p.id, text: p.right }));
    rights.sort(() => Math.random() - 0.5);
    setShuffledRights(rights);
    setMatches({});
    setSelectedLeft(null);
    setIsSubmitted(false);
  }, [exercise.id]);

  const handleLeftClick = (id: string) => {
    if (isSubmitted) return;
    setSelectedLeft(selectedLeft === id ? null : id);
  };

  const handleRightClick = (rightId: string) => {
    if (isSubmitted || !selectedLeft) return;
    setMatches((prev) => ({
      ...prev,
      [selectedLeft]: rightId,
    }));
    setSelectedLeft(null);
  };

  const handleRemoveMatch = (leftId: string) => {
    if (isSubmitted) return;
    setMatches((prev) => {
      const next = { ...prev };
      delete next[leftId];
      return next;
    });
  };

  const isPairCorrect = (leftId: string) => {
    return matches[leftId] === leftId;
  };

  const allMatched = Object.keys(matches).length === exercise.pairs.length;
  const allCorrect = exercise.pairs.every((p) => matches[p.id] === p.id);

  const handleCheck = () => {
    setIsSubmitted(true);
    if (onAnswerChecked) {
      onAnswerChecked(allCorrect);
    }
  };

  const handleReset = () => {
    setMatches({});
    setSelectedLeft(null);
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider font-bold">
          Pasangan Cocok (Matching) · {exercise.points} Pts
        </span>
        <span className="font-mono text-xs text-[#0F172A] dark:text-[#FFFFFF] font-bold px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 shadow-2xs">
          {Object.keys(matches).length}/{exercise.pairs.length} Terpasang
        </span>
      </div>

      <p className="text-sm text-[#334155] dark:text-[#8CB9CC] leading-relaxed">
        {exercise.instruction} (Pilih satu item di Kolom A, lalu pilih pasangannya di Kolom B).
      </p>

      {/* Dynamic guidance hint (Fix N5) */}
      {selectedLeft && !isSubmitted && (
        <div className="p-3 rounded-xl bg-[#00638E]/10 border border-[#00638E]/30 text-xs font-mono text-[#004A6B] dark:text-[#8CB9CC] flex items-center gap-2 animate-in fade-in">
          <span className="w-2 h-2 rounded-full bg-[#00638E] animate-pulse" />
          <span>Item terpilih! Sekarang klik pasangannya di Kolom B untuk menyambungkan.</span>
        </div>
      )}

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-2.5">
          <span className="font-mono text-[11px] text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider block mb-1 font-bold">
            Kolom A (Item Konsep)
          </span>
          {exercise.pairs.map((pair, index) => {
            const isSelected = selectedLeft === pair.id;
            const hasMatch = matches[pair.id] !== undefined;
            const isCorrect = isPairCorrect(pair.id);

            return (
              <button
                key={pair.id}
                type="button"
                onClick={() => handleLeftClick(pair.id)}
                disabled={isSubmitted}
                className={clsx(
                  'w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between gap-3 tactile-btn min-h-[48px] cursor-pointer shadow-2xs',
                  isSubmitted
                    ? isCorrect
                      ? 'bg-[#00638E]/15 dark:bg-[#00638E]/25 border-2 border-[#00638E] text-[#004A6B] dark:text-[#FFFFFF] font-bold'
                      : 'bg-rose-500/10 dark:bg-rose-500/20 border-2 border-rose-400 text-rose-700 dark:text-rose-400 font-semibold'
                    : isSelected
                    ? 'bg-[#00638E] text-white shadow-xs font-bold border-[#00638E]'
                    : hasMatch
                    ? 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-2 border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF]'
                    : 'bg-white dark:bg-[#1C1C1C] hover:bg-[#F1F5F9] dark:hover:bg-[#262626] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF]'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-[#F1F5F9] dark:bg-white/10 border border-[#CBD5E1] dark:border-white/10 text-[10px] font-mono flex items-center justify-center font-bold text-[#0F172A] dark:text-[#DFE5EA]">
                    {index + 1}
                  </span>
                  <span className="font-medium">{pair.left}</span>
                </div>

                {hasMatch && !isSubmitted && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveMatch(pair.id);
                    }}
                    className="text-[11px] text-[#00638E] dark:text-[#8CB9CC] hover:underline font-mono font-bold"
                  >
                    Batal
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-2.5">
          <span className="font-mono text-[11px] text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider block mb-1 font-bold">
            Kolom B (Pasangan Kaidah)
          </span>
          {shuffledRights.map((item, index) => {
            const matchedLeftId = Object.keys(matches).find((k) => matches[k] === item.id);
            const isUsed = matchedLeftId !== undefined;
            const letter = String.fromCharCode(65 + index);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleRightClick(item.id)}
                disabled={isSubmitted || !selectedLeft}
                className={clsx(
                  'w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between gap-3 tactile-btn min-h-[48px]',
                  isUsed
                    ? 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-2 border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF]'
                    : selectedLeft
                    ? 'bg-white dark:bg-[#000000] hover:bg-[#F1F5F9] dark:hover:bg-[#2B2B2B] border-2 border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF] cursor-pointer shadow-xs'
                    : 'bg-[#F8FAFC] dark:bg-[#1C1C1C]/50 border border-[#CBD5E1] dark:border-white/10 text-[#475569] dark:text-[#7A8992]'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-[#F1F5F9] dark:bg-white/10 border border-[#CBD5E1] dark:border-white/10 text-[10px] font-mono flex items-center justify-center font-bold text-[#0F172A] dark:text-[#DFE5EA]">
                    {letter}
                  </span>
                  <span className="font-medium">{item.text}</span>
                </div>
                {isUsed && (
                  <span className="font-mono text-[10px] bg-[#00638E]/15 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/30 px-2 py-0.5 rounded-full font-bold">
                    Terhubung
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-[#475569] dark:text-[#8CB9CC] hover:text-[#00638E] dark:hover:text-[#FFFFFF] font-mono font-bold tactile-btn cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Semua Pasangan</span>
        </button>

        <button
          type="button"
          disabled={!allMatched}
          onClick={handleCheck}
          className={clsx(
            'px-6 py-2.5 rounded-2xl font-bold text-xs font-mono transition-all shadow-xs tactile-btn min-h-[44px]',
            allMatched
              ? 'bg-[#00638E] hover:bg-[#004A6B] text-white cursor-pointer shadow-sm'
              : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] text-[#94A3B8] dark:text-[#7A8992]/60 cursor-not-allowed border border-[#CBD5E1] dark:border-white/10'
          )}
        >
          Periksa Semua Pasangan
        </button>
      </div>

      {/* Result Explanation */}
      {isSubmitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border transition-all space-y-2 animate-in fade-in duration-200 shadow-2xs',
            allCorrect
              ? 'bg-[#00638E]/10 dark:bg-[#00638E]/15 border-[#00638E]/30 dark:border-[#BFD8E3]/35 text-[#0F172A] dark:text-[#FFFFFF]'
              : 'bg-rose-500/10 dark:bg-rose-500/20 border-rose-300 dark:border-rose-800 text-[#0F172A] dark:text-[#FFFFFF]'
          )}
        >
          <div className="flex items-center gap-2 font-bold text-sm">
            {allCorrect ? (
              <>
                <Check className="w-5 h-5 text-[#00638E] dark:text-[#BFD8E3]" />
                <span className="text-[#004A6B] dark:text-[#BFD8E3]">Semua pasangan cocok dengan tepat! (+{exercise.points} Poin)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span className="text-rose-700 dark:text-rose-400">Beberapa pasangan belum tepat. Silakan tinjau kembali.</span>
              </>
            )}
          </div>
          <p className="text-xs text-[#1E293B] dark:text-[#BFD8E3] leading-relaxed pt-1 border-t border-[#CBD5E1] dark:border-white/10">
            <strong>Pembahasan:</strong> {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
