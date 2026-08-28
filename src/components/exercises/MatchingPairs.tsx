'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Link as LinkIcon } from 'lucide-react';
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
    // Shuffle right-side items on load
    const rights = exercise.pairs.map((p) => ({ id: p.id, text: p.right }));
    rights.sort(() => Math.random() - 0.5);
    setShuffledRights(rights);
    setMatches({});
    setIsSubmitted(false);
  }, [exercise]);

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
        <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider">
          Matching Pairs · {exercise.points} Pts
        </span>
        <span className="font-mono text-xs text-[#82796A]">
          {Object.keys(matches).length}/{exercise.pairs.length} Terpasang
        </span>
      </div>

      <p className="text-sm text-[#82796A] leading-relaxed">
        {exercise.instruction} (Klik item di sebelah kiri, lalu klik pasangannya di sebelah kanan).
      </p>

      {/* Grid Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] text-[#82796A] uppercase tracking-wider block mb-1">
            Kolom A (Item Utama)
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
                  'w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between gap-3',
                  isSubmitted
                    ? isCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 font-medium'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-950'
                    : isSelected
                    ? 'bg-[#1A1714] text-white border-[#1A1714] shadow-xs'
                    : hasMatch
                    ? 'bg-white/90 border-[#C4502A]/30 text-[#1A1714] ring-1 ring-[#C4502A]/20'
                    : 'bg-white/60 hover:bg-white border-white/80 text-[#1A1714]'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-black/05 text-[11px] font-mono flex items-center justify-center">
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
                    className="text-[11px] text-[#C4502A] hover:underline font-mono"
                  >
                    Batal
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <span className="font-mono text-[11px] text-[#82796A] uppercase tracking-wider block mb-1">
            Kolom B (Pasangan)
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
                  'w-full text-left p-4 rounded-xl border transition-all text-sm flex items-center justify-between gap-3',
                  isUsed
                    ? 'bg-white/90 border-[#C4502A]/30 text-[#1A1714] ring-1 ring-[#C4502A]/20'
                    : selectedLeft
                    ? 'bg-amber-500/05 hover:bg-amber-500/15 border-amber-500/30 text-[#1A1714] cursor-pointer'
                    : 'bg-white/40 border-white/60 text-[#82796A] opacity-75'
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-black/05 text-[11px] font-mono flex items-center justify-center">
                    {letter}
                  </span>
                  <span>{item.text}</span>
                </div>
                {isUsed && (
                  <span className="font-mono text-[10px] bg-[#C4502A]/10 text-[#C4502A] px-2 py-0.5 rounded-full">
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
          className="flex items-center gap-1.5 text-xs text-[#82796A] hover:text-[#1A1714] font-mono"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Semua Pasangan</span>
        </button>

        <button
          type="button"
          disabled={!allMatched}
          onClick={handleCheck}
          className={clsx(
            'px-6 py-2.5 rounded-xl font-medium text-sm transition-all shadow-xs',
            allMatched
              ? 'bg-[#1A1714] hover:bg-[#C4502A] text-white cursor-pointer'
              : 'bg-black/10 text-[#82796A]/60 cursor-not-allowed'
          )}
        >
          Periksa Semua Pasangan
        </button>
      </div>

      {/* Result Explanation */}
      {isSubmitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border transition-all space-y-2',
            allCorrect
              ? 'bg-emerald-500/08 border-emerald-500/25 text-emerald-950'
              : 'bg-rose-500/08 border-rose-500/25 text-rose-950'
          )}
        >
          <div className="flex items-center gap-2 font-semibold text-sm">
            {allCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Semua pasangan cocok dengan tepat! (+{exercise.points} Poin)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>Beberapa pasangan belum tepat. Coba periksa kembali.</span>
              </>
            )}
          </div>
          <p className="text-xs text-[#82796A] leading-relaxed">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
