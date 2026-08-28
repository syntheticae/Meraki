'use client';

import React, { useState } from 'react';
import { CheckCircle, XCircle, Volume2, HelpCircle, ArrowRight } from 'lucide-react';
import { MultipleChoiceExercise } from '@/types/exercise';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

interface Props {
  exercise: MultipleChoiceExercise;
  onAnswerSelected?: (isCorrect: boolean, selectedId: string) => void;
}

export function MultipleChoice({ exercise, onAnswerSelected }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider">
            Multiple Choice · {exercise.points} Pts
          </span>
          <button
            onClick={() => playTextToSpeech(exercise.question)}
            className="flex items-center gap-1.5 text-xs text-[#82796A] hover:text-[#1A1714] transition-colors font-mono"
            title="Listen to question pronunciation"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Listen</span>
          </button>
        </div>

        <p className="text-base text-[#82796A] leading-relaxed">
          {exercise.instruction}
        </p>

        {exercise.contextSnippet && (
          <div className="p-4 rounded-xl bg-black/03 border-l-2 border-[#1A1714]/20 italic text-sm text-[#38332C]">
            "{exercise.contextSnippet}"
          </div>
        )}

        <div className="p-5 rounded-2xl bg-white/70 border border-white/90 shadow-xs">
          <h3 className="text-lg font-medium text-[#1A1714] leading-snug">
            {exercise.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div className="space-y-3">
        {exercise.options.map((option) => {
          const isSelected = selectedId === option.id;
          const isThisCorrect = option.id === exercise.correctAnswerId;

          let cardStyle = 'bg-white/60 hover:bg-white border-white/80 text-[#1A1714]';

          if (submitted) {
            if (isThisCorrect) {
              cardStyle = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 font-medium shadow-xs';
            } else if (isSelected && !isThisCorrect) {
              cardStyle = 'bg-rose-500/10 border-rose-500/30 text-rose-950';
            } else {
              cardStyle = 'bg-black/02 border-transparent opacity-60 text-[#82796A]';
            }
          } else if (isSelected) {
            cardStyle = 'bg-[#1A1714] text-white border-[#1A1714] shadow-xs';
          }

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              disabled={submitted}
              className={clsx(
                'w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 cursor-pointer disabled:cursor-default',
                cardStyle
              )}
            >
              <div
                className={clsx(
                  'w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs shrink-0 transition-colors uppercase',
                  submitted && isThisCorrect
                    ? 'bg-emerald-600 text-white'
                    : submitted && isSelected && !isThisCorrect
                    ? 'bg-rose-600 text-white'
                    : isSelected
                    ? 'bg-white text-[#1A1714]'
                    : 'bg-[#1A1714]/08 text-[#82796A]'
                )}
              >
                {option.id}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base leading-relaxed">{option.text}</span>
                  {submitted && isThisCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {submitted && isSelected && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                  )}
                </div>

                {submitted && (isSelected || isThisCorrect) && (
                  <p className="text-xs text-[#82796A] mt-2 pt-2 border-t border-black/05 leading-relaxed">
                    {option.explanation}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Grammar Tip / Result Banner */}
      {submitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border transition-all space-y-3',
            isCorrect
              ? 'bg-emerald-500/08 border-emerald-500/25 text-emerald-950'
              : 'bg-amber-500/08 border-amber-500/25 text-amber-950'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold text-sm">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Jawaban Tepat! (+{exercise.points} Poin)</span>
                </>
              ) : (
                <>
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Tinjau Pembahasan di Atas</span>
                </>
              )}
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-mono underline hover:opacity-80 transition-opacity"
            >
              Coba Ulang
            </button>
          </div>

          {exercise.grammarTip && (
            <p className="text-xs text-[#82796A] leading-relaxed pt-2 border-t border-black/05">
              <strong className="text-[#1A1714]">Grammar Rule: </strong>
              {exercise.grammarTip}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
