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
        <span className="font-mono text-xs text-[#7A7265] uppercase tracking-wider font-semibold">
          Pasangan Cocok (Matching) · {exercise.points} Pts
        </span>
        <span className="font-mono text-xs text-[#1E1B17] font-bold px-2.5 py-0.5 rounded-full bg-[#DDD7CA]">
          {Object.keys(matches).length}/{exercise.pairs.length} Terpasang
        </span>
      </div>

      <p className="text-sm text-[#7A7265] leading-relaxed">
        {exercise.instruction} (Pilih satu item di Kolom A, lalu pilih pasangannya di Kolom B).
      </p>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-2.5">
          <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block mb-1 font-semibold">
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
                  'w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all text-xs sm:text-sm flex items-center justify-between gap-3 tactile-btn min-h-[48px]',
                  isSubmitted
                    ? isCorrect
                      ? 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-semibold'
                      : 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]'
                    : isSelected
                    ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-xs font-semibold'
                    : hasMatch
                    ? 'bg-[#DDD7CA] border-[#A84A28] text-[#1E1B17] ring-1 ring-[#A84A28]/30'
                    : 'bg-[#DDD7CA] hover:bg-[#C8C0B0] border-[#C8C0B0] text-[#1E1B17]'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-black/05 text-[10px] font-mono flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span>{pair.left}</span>
                </div>

                {hasMatch && !isSubmitted && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveMatch(pair.id);
                    }}
                    className="text-[11px] text-[#A84A28] hover:underline font-mono font-bold"
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
          <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block mb-1 font-semibold">
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
                    ? 'bg-[#DDD7CA] border-[#A84A28] text-[#1E1B17] ring-1 ring-[#A84A28]/30'
                    : selectedLeft
                    ? 'bg-[#EFE9DF] hover:bg-[#C8C0B0] border-[#535841] text-[#1E1B17] cursor-pointer'
                    : 'bg-[#DDD7CA]/50 border-[#C8C0B0]/60 text-[#7A7265] opacity-70'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-lg bg-black/05 text-[10px] font-mono flex items-center justify-center font-bold">
                    {letter}
                  </span>
                  <span>{item.text}</span>
                </div>
                {isUsed && (
                  <span className="font-mono text-[10px] bg-[#A84A28]/15 text-[#A84A28] px-2 py-0.5 rounded-full font-bold">
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
          className="flex items-center gap-1.5 text-xs text-[#7A7265] hover:text-[#1E1B17] font-mono tactile-btn"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Semua Pasangan</span>
        </button>

        <button
          type="button"
          disabled={!allMatched}
          onClick={handleCheck}
          className={clsx(
            'px-6 py-2.5 rounded-2xl font-medium text-xs font-mono transition-all shadow-xs tactile-btn min-h-[44px]',
            allMatched
              ? 'bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] cursor-pointer'
              : 'bg-[#DDD7CA] text-[#7A7265]/60 cursor-not-allowed border border-[#C8C0B0]'
          )}
        >
          Periksa Semua Pasangan
        </button>
      </div>

      {/* Result Explanation */}
      {isSubmitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border transition-all space-y-2 animate-in fade-in duration-200',
            allCorrect
              ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]'
              : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
          )}
        >
          <div className="flex items-center gap-2 font-semibold text-sm">
            {allCorrect ? (
              <>
                <Check className="w-5 h-5 text-[#535841]" />
                <span>Semua pasangan cocok dengan tepat! (+{exercise.points} Poin)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-[#A84A28]" />
                <span>Beberapa pasangan belum tepat. Silakan tinjau kembali.</span>
              </>
            )}
          </div>
          <p className="text-xs text-[#524C42] leading-relaxed pt-1 border-t border-[#C8C0B0]/60">
            <strong>Pembahasan:</strong> {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
