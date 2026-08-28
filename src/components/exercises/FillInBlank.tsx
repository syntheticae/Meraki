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
        <span className="font-mono text-xs text-[#7A7265] uppercase tracking-wider font-semibold">
          Isian Rumpang (Cloze) · {exercise.points} Pts
        </span>
        <button
          type="button"
          onClick={() => playNativeAudio(exercise.sentence.replace(/\[___\]/g, 'blank'))}
          className="flex items-center gap-1.5 text-xs text-[#535841] hover:text-[#1E1B17] transition-colors font-mono tactile-btn"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Audio Kalimat</span>
        </button>
      </div>

      <p className="text-sm text-[#7A7265] leading-relaxed">
        {exercise.instruction}
      </p>

      {/* Sentence Box */}
      <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] shadow-xs leading-loose text-base sm:text-lg text-[#1E1B17] font-serif">
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
                        ? 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold'
                        : 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]'
                      : 'bg-[#EFE9DF] border-[#C8C0B0] text-[#1E1B17] focus:border-[#A84A28]'
                  )}
                />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Word Bank if available */}
      {exercise.wordBank && exercise.wordBank.length > 0 && (
        <div className="space-y-2 p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0]">
          <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block font-semibold">
            Bank Kata (Klik untuk memasukkan):
          </span>
          <div className="flex flex-wrap gap-2">
            {exercise.wordBank.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => handleWordBankClick(word)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-[#EFE9DF] hover:bg-[#1E1B17] hover:text-[#EFE9DF] border border-[#C8C0B0] text-[#1E1B17] transition-all tactile-btn"
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
          className="flex items-center gap-1.5 text-xs text-[#7A7265] hover:text-[#A84A28] transition-colors font-mono tactile-btn"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>{showHint ? 'Sembunyikan Petunjuk' : 'Lihat Petunjuk'}</span>
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={handleReset}
            className="p-2.5 rounded-2xl border border-[#C8C0B0] bg-[#DDD7CA] hover:bg-[#C8C0B0] text-[#7A7265] hover:text-[#1E1B17] transition-colors tactile-btn min-h-[44px]"
            title="Reset Isian"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] font-medium text-xs font-mono transition-all shadow-xs tactile-btn min-h-[44px]"
          >
            Periksa Jawaban
          </button>
        </div>
      </div>

      {showHint && exercise.targets[0]?.hint && (
        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-[#1E1B17] text-xs">
          <strong>Petunjuk:</strong> {exercise.targets[0].hint}
        </div>
      )}

      {/* Explanation Banner */}
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
                <span>Luar biasa! Seluruh kata yang diisikan tepat. (+{exercise.points} Pts)</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-[#A84A28]" />
                <span>
                  Kunci jawaban baku:{' '}
                  <span className="font-mono font-bold underline">
                    {exercise.targets.map((t) => t.correctAnswers[0]).join(', ')}
                  </span>
                </span>
              </>
            )}
          </div>
          <p className="text-xs text-[#524C42] leading-relaxed pt-1 border-t border-[#C8C0B0]/60">
            <strong>Penjelasan:</strong> {exercise.explanation}
          </p>
        </div>
      )}
    </form>
  );
}
