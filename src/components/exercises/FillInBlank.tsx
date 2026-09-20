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
        <span className="font-mono text-xs text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider font-bold">
          Isian Rumpang (Cloze) · {exercise.points} Pts
        </span>
        <button
          type="button"
          onClick={() => playNativeAudio(exercise.sentence.replace(/\[___\]/g, '... '))}
          className="flex items-center gap-1.5 text-xs text-[#00638E] dark:text-[#BFD8E3] hover:text-[#0F172A] dark:text-[#FFFFFF] transition-colors font-mono font-bold tactile-btn cursor-pointer"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Audio Kalimat</span>
        </button>
      </div>

      <p className="text-sm text-[#334155] dark:text-[#8CB9CC] leading-relaxed">
        {exercise.instruction}
      </p>

      {/* Sentence Box */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 shadow-xs leading-loose text-base sm:text-lg text-[#0F172A] dark:text-[#FFFFFF] font-serif">
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
                        ? 'bg-[#00638E]/15 dark:bg-[#00638E]/25 border-2 border-[#00638E] text-[#004A6B] dark:text-[#FFFFFF] font-bold shadow-xs'
                        : 'bg-rose-500/10 dark:bg-rose-500/20 border-2 border-rose-400 text-rose-700 dark:text-rose-400 font-semibold'
                      : 'bg-[#F8FAFC] dark:bg-[#000000] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] focus:border-[#00638E]'
                  )}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Word Bank if available */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="space-y-2 p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 shadow-2xs">
          <span className="font-mono text-[11px] text-[#475569] dark:text-[#8CB9CC] uppercase tracking-wider block font-bold">
            Bank Kata (Klik untuk memasukkan):
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => handleWordBankClick(word)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-white dark:bg-[#000000] hover:bg-[#00638E] hover:text-white border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] transition-all tactile-btn shadow-2xs cursor-pointer"
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
          className="flex items-center gap-1.5 text-xs text-[#475569] dark:text-[#8CB9CC] hover:text-[#00638E] dark:hover:text-[#FFFFFF] transition-colors font-mono font-semibold tactile-btn cursor-pointer"
        >
          <HelpCircle className="w-3.5 h-3.5 text-[#00638E]" />
          <span>{showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-2xl border border-[#CBD5E1] dark:border-white/10 bg-[#F1F5F9] dark:bg-[#1C1C1C] hover:bg-[#E2E8F0] dark:hover:bg-[#2B2B2B] text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-[#FFFFFF] transition-colors tactile-btn min-h-[44px] cursor-pointer"
            title="Reset Isian"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-2xl bg-[#00638E] hover:bg-[#004A6B] text-white font-bold text-xs font-mono transition-all shadow-xs tactile-btn min-h-[44px] cursor-pointer"
          >
            Periksa Jawaban
          </button>
        </div>
      </div>

      {showHint && exercise.targets[0]?.hint && (
        <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] text-xs shadow-2xs">
          <strong className="text-[#00638E]">Petunjuk:</strong> {exercise.targets[0].hint}
        </div>
      )}

      {/* Explanation Banner */}
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
                <span className="text-[#004A6B] dark:text-[#BFD8E3]">Luar biasa! Seluruh kata yang diisikan tepat. (+{exercise.points} Pts)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                <span className="text-rose-700 dark:text-rose-400">
                  Kunci jawaban baku:{' '}
                  <span className="font-mono font-bold underline">
                    {exercise.targets.map((t) => t.correctAnswers[0]).join(', ')}
                  </span>
                </span>
              </>
            )}
          </div>
          <p className="text-xs text-[#1E293B] dark:text-[#BFD8E3] leading-relaxed pt-1 border-t border-[#CBD5E1] dark:border-white/10">
            <strong>Penjelasan:</strong> {exercise.explanation}
          </p>
        </div>
      )}
    </form>
  );
}
