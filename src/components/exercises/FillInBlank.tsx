'use client';

import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RefreshCw, Volume2 } from 'lucide-react';
import { FillBlankExercise } from '@/types/exercise';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

interface Props {
  exercise: FillBlankExercise;
  onAnswerChecked?: (isCorrect: boolean) => void;
}

export function FillInBlank({ exercise, onAnswerChecked }: Props) {
  const [userInputs, setUserInputs] = useState<string[]>(
    exercise.targets.map(() => '')
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleInputChange = (index: number, val: string) => {
    const next = [...userInputs];
    next[index] = val;
    setUserInputs(next);
    setIsSubmitted(false);
  };

  const handleWordBankClick = (word: string) => {
    // Find first empty target or replace target 0
    const emptyIndex = userInputs.findIndex((t) => t.trim() === '');
    const targetIndex = emptyIndex !== -1 ? emptyIndex : 0;
    handleInputChange(targetIndex, word);
  };

  const isTargetCorrect = (index: number): boolean => {
    const input = (userInputs[index] || '').trim().toLowerCase();
    const target = exercise.targets[index];
    return target.correctAnswers.some((ans) => ans.trim().toLowerCase() === input);
  };

  const allCorrect = exercise.targets.every((_, i) => isTargetCorrect(i));

  const handleCheck = () => {
    setIsSubmitted(true);
    if (onAnswerChecked) {
      onAnswerChecked(allCorrect);
    }
  };

  const handleReset = () => {
    setUserInputs(exercise.targets.map(() => ''));
    setIsSubmitted(false);
    setShowHint(false);
  };

  // Render sentence with input targets replacing [___]
  const sentenceParts = exercise.sentence.split(/\[___\]/);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider">
          Fill in the Blank · {exercise.points} Pts
        </span>
        <button
          onClick={() => playTextToSpeech(exercise.sentence.replace(/\[___\]/g, 'blank'))}
          className="flex items-center gap-1.5 text-xs text-[#82796A] hover:text-[#1A1714] transition-colors font-mono"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Listen</span>
        </button>
      </div>

      <p className="text-sm text-[#82796A] leading-relaxed">
        {exercise.instruction}
      </p>

      {/* Sentence Box */}
      <div className="p-6 rounded-2xl bg-white/75 border border-white/90 shadow-xs leading-loose text-base sm:text-lg text-[#1A1714]">
        {sentenceParts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < exercise.targets.length && (
              <span className="inline-block mx-1.5 my-1 align-baseline">
                <input
                  type="text"
                  value={userInputs[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="type here..."
                  className={clsx(
                    'px-3 py-1 text-sm sm:text-base rounded-lg border font-medium outline-hidden transition-all text-center min-w-[130px]',
                    isSubmitted
                      ? isTargetCorrect(index)
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-400/30'
                        : 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-400/30'
                      : 'bg-white/90 border-[#1A1714]/20 focus:border-[#C4502A] focus:ring-2 focus:ring-[#C4502A]/20'
                  )}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Word Bank if available */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="space-y-2 p-4 rounded-xl bg-black/02 border border-black/05">
          <span className="font-mono text-[11px] text-[#82796A] uppercase tracking-wider block">
            Word Bank (Click to insert):
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => handleWordBankClick(word)}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white hover:bg-[#1A1714] hover:text-white border border-black/10 text-[#38332C] transition-all shadow-xs"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hints & Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-1.5 text-xs text-[#82796A] hover:text-[#C4502A] transition-colors font-mono"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-[#1A1714]/15 hover:bg-white text-[#82796A] hover:text-[#1A1714] transition-colors"
            title="Reset"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleCheck}
            className="px-6 py-2.5 rounded-xl bg-[#1A1714] hover:bg-[#C4502A] text-white font-medium text-sm transition-all shadow-xs"
          >
            Periksa Jawaban
          </button>
        </div>
      </div>

      {showHint && exercise.targets[0]?.hint && (
        <div className="p-4 rounded-xl bg-amber-500/08 border border-amber-500/25 text-amber-950 text-xs">
          <strong>Petunjuk:</strong> {exercise.targets[0].hint}
        </div>
      )}

      {/* Explanation Banner */}
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
                <span>Luar biasa! Jawabanmu tepat.</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>
                  Kunci jawaban yang benar:{' '}
                  <span className="font-mono underline">
                    {exercise.targets.map((t) => t.correctAnswers[0]).join(', ')}
                  </span>
                </span>
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
