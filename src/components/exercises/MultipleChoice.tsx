'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Volume2, HelpCircle, ArrowRight, Check } from 'lucide-react';
import { MultipleChoiceExercise } from '@/types/exercise';
import { playNativeAudio } from '@/services/speech';
import { clsx } from 'clsx';

interface Props {
  exercise: MultipleChoiceExercise;
  onAnswerSelected?: (isCorrect: boolean, selectedId: string) => void;
}

export function MultipleChoice({ exercise, onAnswerSelected }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Reset local state when exercise changes
  useEffect(() => {
    setSelectedId(null);
    setSubmitted(false);
  }, [exercise.id]);

  const handleSelect = (id: string) => {
    if (submitted) return;
    setSelectedId(id);
    setSubmitted(true);
    const isCorrect = id === exercise.correctAnswerId;
    if (onAnswerSelected) {
      onAnswerSelected(isCorrect, id);
    }
  };

  const handleReset = () => {
    setSelectedId(null);
    setSubmitted(false);
  };

  const isCorrect = selectedId === exercise.correctAnswerId;

  return (
    <div className="space-y-6">
      {/* Exercise Instruction & Prompt */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider font-bold">
            Pilihan Ganda · {exercise.points} Pts
          </span>
          <button
            onClick={() => playNativeAudio(exercise.question)}
            className="flex items-center gap-1.5 text-xs text-[#00638E] dark:text-[#BFD8E3] hover:text-[#0F172A] dark:text-[#FFFFFF] transition-colors font-mono font-bold tactile-btn cursor-pointer"
            title="Dengarkan pelafalan soal"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Soal</span>
          </button>
        </div>

        <p className="text-sm text-[#334155] dark:text-[#8CB9CC] leading-relaxed">
          {exercise.instruction}
        </p>

        {exercise.contextSnippet && (
          <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border-l-4 border-l-[#00638E] dark:border-l-[#8CB9CC] border-y border-r border-[#CBD5E1] dark:border-white/10 italic text-sm text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs">
            "{exercise.contextSnippet}"
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF] leading-snug">
            {exercise.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div role="radiogroup" aria-label={exercise.question} className="space-y-2.5">
        {exercise.options.map((option, oIdx) => {
          const isSelected = selectedId === option.id;
          const isThisCorrect = option.id === exercise.correctAnswerId;

          let cardStyle = 'bg-white dark:bg-[#1C1C1C] hover:bg-[#F1F5F9] dark:hover:bg-[#262626] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs';

          if (submitted) {
            if (isThisCorrect) {
              cardStyle = 'bg-[#00638E]/15 dark:bg-[#00638E]/25 border-2 border-[#00638E] text-[#004A6B] dark:text-[#FFFFFF] font-bold shadow-xs';
            } else if (isSelected && !isThisCorrect) {
              cardStyle = 'bg-rose-500/10 dark:bg-rose-500/20 border-2 border-rose-400 text-rose-700 dark:text-rose-400 font-semibold';
            } else {
              cardStyle = 'bg-[#F8FAFC] dark:bg-[#1C1C1C]/40 border-[#CBD5E1]/50 dark:border-transparent opacity-50 text-[#475569] dark:text-[#7A8992]';
            }
          } else if (isSelected) {
            cardStyle = 'bg-[#00638E] text-white shadow-xs font-bold border-[#00638E]';
          }

          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(option.id)}
              disabled={submitted}
              className={clsx(
                'w-full text-left p-4 rounded-2xl border transition-all tactile-btn flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default min-h-[48px]',
                cardStyle
              )}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="w-6 h-6 rounded-lg bg-[#F1F5F9] dark:bg-white/10 border border-[#CBD5E1] dark:border-white/10 font-mono text-xs flex items-center justify-center font-bold text-[#0F172A] dark:text-[#DFE5EA] shrink-0 mt-0.5">
                  {['A', 'B', 'C', 'D'][oIdx] || oIdx + 1}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed">{option.text}</span>
              </div>

              {submitted && isThisCorrect && (
                <Check className="w-5 h-5 text-[#00638E] dark:text-[#BFD8E3] shrink-0 font-bold" aria-hidden="true" />
              )}
              {submitted && isSelected && !isThisCorrect && (
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className={clsx(
            'p-5 rounded-2xl border text-xs sm:text-sm space-y-2 animate-in fade-in duration-200 shadow-2xs',
            isCorrect
              ? 'bg-[#00638E]/10 dark:bg-[#00638E]/15 border-[#00638E]/30 dark:border-[#BFD8E3]/35 text-[#0F172A] dark:text-[#FFFFFF]'
              : 'bg-rose-500/10 dark:bg-rose-500/20 border-rose-300 dark:border-rose-800 text-[#0F172A] dark:text-[#FFFFFF]'
          )}
        >
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3]" />
                  <span className="text-[#004A6B] dark:text-[#BFD8E3]">Jawaban Tepat! (+{exercise.points} Poin)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="text-rose-700 dark:text-rose-400">Kurang Tepat. Periksa Pembahasan di Bawah.</span>
                </>
              )}
            </span>

            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] hover:underline cursor-pointer px-3 py-1.5 rounded-lg min-h-[44px] inline-flex items-center"
            >
              Ulangi Soal
            </button>
          </div>

          <p className="text-xs leading-relaxed text-[#1E293B] dark:text-[#BFD8E3] pt-1 border-t border-[#CBD5E1] dark:border-white/10">
            <strong>Pembahasan:</strong>{' '}
            {exercise.options.find((o) => o.id === (selectedId || exercise.correctAnswerId))?.explanation ||
              exercise.grammarTip ||
              'Kaidah gramatikal sesuai dengan struktur kalimat baku.'}
          </p>
        </div>
      )}
    </div>
  );
}
