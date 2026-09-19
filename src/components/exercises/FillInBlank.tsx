'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, HelpCircle, RefreshCw, Volume2, Check } from 'lucide-react';
import { FillBlankExercise } from '@/types/exercise';
import { playNativeAudio } from '@/services/speech';
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

  useEffect(() => {
    setUserInputs(exercise.targets.map(() => ''));
    setIsSubmitted(false);
    setShowHint(false);
  }, [exercise.id]);

  const normalize = (s: string) => {
    return (s || '')
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ');
  };

  const handleInputChange = (index: number, val: string) => {
    const next = [...userInputs];
    next[index] = val;
    setUserInputs(next);
    setIsSubmitted(false);
  };

  const handleWordBankClick = (word: string) => {
    const emptyIndex = userInputs.findIndex((t) => t.trim() === '');
    const targetIndex = emptyIndex !== -1 ? emptyIndex : 0;
    handleInputChange(targetIndex, word);
  };

  const isTargetCorrect = (index: number): boolean => {
    const input = normalize(userInputs[index]);
    const target = exercise.targets[index];
    if (!target) return false;
    return target.correctAnswers.some((ans) => normalize(ans) === input);
  };

  const allCorrect = exercise.targets.every((_, i) => isTargetCorrect(i));

  const handleCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
    <form onSubmit={handleCheck} className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] uppercase tracking-wider font-semibold">
          Isian Rumpang (Cloze) · {exercise.points} Pts
        </span>
        <button
          type="button"
          onClick={() => playNativeAudio(exercise.sentence.replace(/\[___\]/g, 'blank'))}
          className="flex items-center gap-1.5 text-xs text-[#004A6B] dark:text-[#BFD8E3] hover:text-[#141414] dark:text-[#FFFFFF] transition-colors font-mono tactile-btn"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Audio Kalimat</span>
        </button>
      </div>

      <p className="text-sm text-[#50585C] dark:text-[#7A8992] leading-relaxed">
        {exercise.instruction}
      </p>

      {/* Sentence Box */}
      <div className="p-6 rounded-3xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 shadow-xs leading-loose text-base sm:text-lg text-[#141414] dark:text-[#FFFFFF] font-serif">
        {sentenceParts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < exercise.targets.length && (
              <span className="inline-block mx-1.5 my-1 align-baseline">
                <input
                  type="text"
                  value={userInputs[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="ketik di sini..."
                  className={clsx(
                    'px-3 py-1 text-base rounded-xl border font-sans font-medium outline-hidden transition-all text-center min-w-[140px]',
                    isSubmitted
                      ? isTargetCorrect(index)
                        ? 'bg-[#004A6B]/20 dark:bg-[#00638E]/25 border-[#004A6B] dark:border-[#00638E] text-[#141414] dark:text-[#FFFFFF] font-bold'
                        : 'bg-[#00638E]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#141414] dark:text-[#FFFFFF]'
                      : 'bg-[#F4F7F9] dark:bg-[#000000] border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF] focus:border-[#00638E]'
                  )}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Word Bank if available */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="space-y-2 p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10">
          <span className="font-mono text-[11px] text-[#50585C] dark:text-[#7A8992] uppercase tracking-wider block font-semibold">
            Bank Kata (Klik untuk memasukkan):
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => handleWordBankClick(word)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-[#F4F7F9] dark:bg-[#000000] hover:bg-[#141414] dark:bg-[#00638E] text-white hover:text-white border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF] transition-all tactile-btn"
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
          className="flex items-center gap-1.5 text-xs text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] dark:text-[#8CB9CC] transition-colors font-mono tactile-btn"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-2xl border border-[#BFD8E3]/40 dark:border-white/10 bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] transition-colors tactile-btn min-h-[44px]"
            title="Reset Isian"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-2xl bg-[#141414] dark:bg-[#00638E] text-white hover:bg-[#00638E] text-white text-white font-medium text-xs font-mono transition-all shadow-xs tactile-btn min-h-[44px]"
          >
            Periksa Jawaban
          </button>
        </div>
      </div>

      {showHint && exercise.targets[0]?.hint && (
        <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF] text-xs">
          <strong>Petunjuk:</strong> {exercise.targets[0].hint}
        </div>
      )}

      {/* Explanation Banner */}
      {isSubmitted && (
        <div
          className={clsx(
            'p-5 rounded-2xl border transition-all space-y-2 animate-in fade-in duration-200',
            allCorrect
              ? 'bg-[#004A6B]/10 dark:bg-[#00638E]/15 border-[#004A6B]/30 dark:border-[#BFD8E3]/35 text-[#141414] dark:text-[#FFFFFF]'
              : 'bg-[#00638E]/10 dark:bg-[#00638E]/20 border-[#00638E]/35 dark:border-[#8CB9CC]/40 text-[#141414] dark:text-[#FFFFFF]'
          )}
        >
          <div className="flex items-center gap-2 font-semibold text-sm">
            {allCorrect ? (
              <>
                <Check className="w-5 h-5 text-[#004A6B] dark:text-[#BFD8E3]" />
                <span>Luar biasa! Seluruh kata yang diisikan tepat. (+{exercise.points} Pts)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-[#00638E] dark:text-[#8CB9CC]" />
                <span>
                  Kunci jawaban baku:{' '}
                  <span className="font-mono font-bold underline">
                    {exercise.targets.map((t) => t.correctAnswers[0]).join(', ')}
                  </span>
                </span>
              </>
            )}
          </div>
          <p className="text-xs text-[#2B2B2B] dark:text-[#BFD8E3] leading-relaxed pt-1 border-t border-[#BFD8E3]/30 dark:border-white/10">
            <strong>Penjelasan:</strong> {exercise.explanation}
          </p>
        </div>
      )}
    </form>
  );
}
