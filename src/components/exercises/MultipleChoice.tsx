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
          <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] uppercase tracking-wider font-semibold">
            Pilihan Ganda · {exercise.points} Pts
          </span>
          <button
            onClick={() => playNativeAudio(exercise.question)}
            className="flex items-center gap-1.5 text-xs text-[#004A6B] dark:text-[#BFD8E3] hover:text-[#141414] dark:text-[#FFFFFF] transition-colors font-mono tactile-btn"
            title="Dengarkan pelafalan soal"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Soal</span>
          </button>
        </div>

        <p className="text-sm text-[#50585C] dark:text-[#7A8992] leading-relaxed">
          {exercise.instruction}
        </p>

        {exercise.contextSnippet && (
          <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border-l-4 border-l-[#00638E] dark:border-l-[#8CB9CC] border-y border-r border-[#BFD8E3]/40 dark:border-white/10 italic text-sm text-[#141414] dark:text-[#FFFFFF]">
            "{exercise.contextSnippet}"
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 shadow-xs">
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#141414] dark:text-[#FFFFFF] leading-snug">
            {exercise.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div className="space-y-2.5">
        {exercise.options.map((option, oIdx) => {
          const isSelected = selectedId === option.id;
          const isThisCorrect = option.id === exercise.correctAnswerId;

          let cardStyle = 'bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF]';

          if (submitted) {
            if (isThisCorrect) {
              cardStyle = 'bg-[#004A6B]/20 dark:bg-[#00638E]/25 border-[#004A6B] dark:border-[#00638E] text-[#141414] dark:text-[#FFFFFF] font-semibold shadow-xs';
            } else if (isSelected && !isThisCorrect) {
              cardStyle = 'bg-[#00638E]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#141414] dark:text-[#FFFFFF]';
            } else {
              cardStyle = 'bg-[#EDF3F7] dark:bg-[#1C1C1C]/40 border-transparent opacity-50 text-[#50585C] dark:text-[#7A8992]';
            }
          } else if (isSelected) {
            cardStyle = 'bg-[#00638E] text-white shadow-xs font-semibold border-[#00638E] shadow-xs font-semibold';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={submitted}
              className={clsx(
                'w-full text-left p-4 rounded-2xl border transition-all tactile-btn flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default min-h-[48px]',
                cardStyle
              )}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <span className="w-6 h-6 rounded-lg bg-black/05 border border-black/10 font-mono text-xs flex items-center justify-center font-bold text-[#50585C] dark:text-[#7A8992] shrink-0 mt-0.5">
                  {['A', 'B', 'C', 'D'][oIdx] || oIdx + 1}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed">{option.text}</span>
              </div>

              {submitted && isThisCorrect && (
                <Check className="w-5 h-5 text-[#004A6B] dark:text-[#BFD8E3] shrink-0" />
              )}
              {submitted && isSelected && !isThisCorrect && (
                <XCircle className="w-5 h-5 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Banner */}
      {submitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border text-xs sm:text-sm space-y-2 animate-in fade-in duration-200',
            isCorrect
              ? 'bg-[#004A6B]/10 dark:bg-[#00638E]/15 border-[#004A6B]/30 dark:border-[#BFD8E3]/35 text-[#141414] dark:text-[#FFFFFF]'
              : 'bg-[#00638E]/10 dark:bg-[#00638E]/20 border-[#00638E]/35 dark:border-[#8CB9CC]/40 text-[#141414] dark:text-[#FFFFFF]'
          )}
        >
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-[#004A6B] dark:text-[#BFD8E3]" />
                  <span>Jawaban Tepat! (+{exercise.points} Poin)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                  <span>Kurang Tepat. Periksa Pembahasan di Bawah.</span>
                </>
              )}
            </span>

            <button
              onClick={handleReset}
              className="text-xs font-mono text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] hover:underline"
            >
              Ulangi Soal
            </button>
          </div>

          <p className="text-xs leading-relaxed text-[#2B2B2B] dark:text-[#BFD8E3] pt-1 border-t border-[#BFD8E3]/30 dark:border-white/10">
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
