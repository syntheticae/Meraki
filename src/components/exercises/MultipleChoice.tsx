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
          <span className="font-mono text-xs text-[#7A7265] uppercase tracking-wider font-semibold">
            Pilihan Ganda · {exercise.points} Pts
          </span>
          <button
            onClick={() => playNativeAudio(exercise.question)}
            className="flex items-center gap-1.5 text-xs text-[#535841] hover:text-[#1E1B17] transition-colors font-mono tactile-btn"
            title="Dengarkan pelafalan soal"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Audio Soal</span>
          </button>
        </div>

        <p className="text-sm text-[#7A7265] leading-relaxed">
          {exercise.instruction}
        </p>

        {exercise.contextSnippet && (
          <div className="p-4 rounded-2xl bg-[#DDD7CA] border-l-4 border-l-[#A84A28] border-y border-r border-[#C8C0B0] italic text-sm text-[#1E1B17]">
            "{exercise.contextSnippet}"
          </div>
        )}

        <div className="p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] shadow-xs">
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#1E1B17] leading-snug">
            {exercise.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div className="space-y-2.5">
        {exercise.options.map((option, oIdx) => {
          const isSelected = selectedId === option.id;
          const isThisCorrect = option.id === exercise.correctAnswerId;

          let cardStyle = 'bg-[#DDD7CA] hover:bg-[#C8C0B0] border-[#C8C0B0] text-[#1E1B17]';

          if (submitted) {
            if (isThisCorrect) {
              cardStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-semibold shadow-xs';
            } else if (isSelected && !isThisCorrect) {
              cardStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
            } else {
              cardStyle = 'bg-[#DDD7CA]/40 border-transparent opacity-50 text-[#7A7265]';
            }
          } else if (isSelected) {
            cardStyle = 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-xs font-semibold';
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
                <span className="w-6 h-6 rounded-lg bg-black/05 border border-black/10 font-mono text-xs flex items-center justify-center font-bold text-[#7A7265] shrink-0 mt-0.5">
                  {['A', 'B', 'C', 'D'][oIdx] || oIdx + 1}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed">{option.text}</span>
              </div>

              {submitted && isThisCorrect && (
                <Check className="w-5 h-5 text-[#535841] shrink-0" />
              )}
              {submitted && isSelected && !isThisCorrect && (
                <XCircle className="w-5 h-5 text-[#A84A28] shrink-0" />
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
              ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]'
              : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
          )}
        >
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <Check className="w-4 h-4 text-[#535841]" />
                  <span>Jawaban Tepat! (+{exercise.points} Poin)</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-[#A84A28]" />
                  <span>Kurang Tepat. Periksa Pembahasan di Bawah.</span>
                </>
              )}
            </span>

            <button
              onClick={handleReset}
              className="text-xs font-mono text-[#7A7265] hover:text-[#1E1B17] hover:underline"
            >
              Ulangi Soal
            </button>
          </div>

          <p className="text-xs leading-relaxed text-[#524C42] pt-1 border-t border-[#C8C0B0]/60">
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
