'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Award, BookOpen, ChevronDown, ChevronUp, Sparkles, Send, Check } from 'lucide-react';
import { WritingRubricExercise } from '@/types/exercise';
import { progressRepository } from '@/services/storage';
import { clsx } from 'clsx';

interface Props {
  exercise: WritingRubricExercise;
  onSubmitted?: (score: number) => void;
}

export function WritingRubric({ exercise, onSubmitted }: Props) {
  const [essayText, setEssayText] = useState('');
  const [timeLeftSec, setTimeLeftSec] = useState(exercise.suggestedTimeMin * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [criteriaScores, setCriteriaScores] = useState<Record<string, number>>({});
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setEssayText('');
    setTimeLeftSec(exercise.suggestedTimeMin * 60);
    setTimerRunning(false);
    setCriteriaScores({});
    setShowModelAnswer(false);
    setIsSaved(false);
  }, [exercise.id]);

  useEffect(() => {
    let interval: any;
    if (timerRunning && timeLeftSec > 0) {
      interval = setInterval(() => {
        setTimeLeftSec((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeftSec]);

  // Word count calculation
  const words = essayText.trim().split(/\s+/).filter((w) => w.length > 0);
  const wordCount = essayText.trim() === '' ? 0 : words.length;

  const minutes = Math.floor(timeLeftSec / 60);
  const seconds = timeLeftSec % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const handleScoreSelect = (criterionId: string, score: number) => {
    setCriteriaScores((prev) => ({
      ...prev,
      [criterionId]: score,
    }));
  };

  // Calculate average score
  const criterionKeys = Object.keys(criteriaScores);
  const averageScore =
    criterionKeys.length > 0
      ? (
          criterionKeys.reduce((sum, key) => sum + criteriaScores[key], 0) /
          criterionKeys.length
        ).toFixed(1)
      : '0.0';

  const handleSaveSubmission = async () => {
    if (wordCount < 10) {
      alert('Tulis esai minimal beberapa kalimat terlebih dahulu.');
      return;
    }

    await progressRepository.saveWritingSubmission({
      id: 'sub_' + Date.now(),
      exerciseId: exercise.id,
      promptTitle: exercise.title,
      taskType: exercise.taskType,
      submittedText: essayText,
      wordCount,
      timeSpentSeconds: exercise.suggestedTimeMin * 60 - timeLeftSec,
      criteriaScores,
      overallScore: parseFloat(averageScore),
      submittedAt: new Date().toISOString(),
    });

    setIsSaved(true);
    if (onSubmitted) {
      onSubmitted(parseFloat(averageScore));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Prompt */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#7A7265] uppercase tracking-wider font-semibold">
              {exercise.taskType} · Writing Studio
            </span>
            <span className="font-mono text-xs bg-[#A84A28]/15 text-[#A84A28] px-2.5 py-0.5 rounded-full font-bold">
              Min. {exercise.minWordCount} Kata
            </span>
          </div>

          {/* Timer pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17]">
              <Clock className="w-3.5 h-3.5 text-[#A84A28]" />
              <span className="font-bold">{formattedTime}</span>
            </div>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-3.5 py-1.5 rounded-2xl text-xs font-mono bg-[#1E1B17] text-[#EFE9DF] hover:bg-[#A84A28] transition-colors tactile-btn"
            >
              {timerRunning ? 'Jeda Timer' : 'Mulai Timer'}
            </button>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] shadow-xs space-y-2">
          <h3 className="text-lg font-serif font-bold text-[#1E1B17] leading-snug">
            {exercise.prompt}
          </h3>
          <p className="text-xs text-[#7A7265]">
            Tuliskan esai lengkap dengan struktur pendahuluan, paragraf tubuh argumen, dan kesimpulan.
          </p>
        </div>
      </div>

      {/* Editor & Word count bar */}
      <div className="space-y-2.5">
        <div className="relative">
          <textarea
            value={essayText}
            onChange={(e) => {
              setEssayText(e.target.value);
              setIsSaved(false);
            }}
            rows={12}
            placeholder="Mulai ketik esaimu di sini..."
            className="w-full p-5 sm:p-6 rounded-3xl bg-[#EFE9DF] border border-[#C8C0B0] focus:border-[#A84A28] outline-hidden text-[#1E1B17] leading-relaxed font-sans text-sm sm:text-base transition-all resize-y shadow-inner"
          />
        </div>

        {/* Live Word Count Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-2 text-xs font-mono text-[#7A7265]">
          <div className="flex items-center gap-3">
            <span>
              Jumlah Kata:{' '}
              <strong
                className={clsx(
                  wordCount >= exercise.minWordCount
                    ? 'text-[#535841] font-bold text-sm'
                    : 'text-[#A84A28]'
                )}
              >
                {wordCount}
              </strong>{' '}
              / {exercise.minWordCount} kata
            </span>
            {wordCount >= exercise.minWordCount && (
              <span className="text-[#535841] flex items-center gap-1 font-bold">
                <Check className="w-3.5 h-3.5" /> Target Terpenuhi
              </span>
            )}
          </div>

          <button
            onClick={handleSaveSubmission}
            className="flex items-center gap-1.5 px-5 py-2 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] transition-all text-xs font-mono font-medium shadow-xs tactile-btn"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Simpan Esai</span>
          </button>
        </div>
      </div>

      {/* Recommended Vocabulary Chips */}
      {exercise.recommendedVocabulary && exercise.recommendedVocabulary.length > 0 && (
        <div className="p-5 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1E1B17] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#A84A28]" />
            <span>Rekomendasi Kosakata Akademis (High-Yield):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {exercise.recommendedVocabulary.map((item) => (
              <div key={item.term} className="p-3.5 rounded-2xl bg-[#EFE9DF] border border-[#C8C0B0] space-y-1">
                <span className="font-serif font-bold text-sm text-[#A84A28] block">{item.term}</span>
                <p className="text-[11px] text-[#7A7265] leading-snug">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Cambridge / ETS Self-Evaluation Rubric */}
      <div className="space-y-4 pt-4 border-t border-[#C8C0B0]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-base font-serif font-bold text-[#1E1B17]">
              Evaluasi Mandiri Berbasis Rubrik Resmi
            </h4>
            <p className="text-xs text-[#7A7265]">
              Pilih level deskriptor yang paling mencerminkan tulisanmu untuk menghitung estimasi band score.
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center gap-2 font-mono text-xs shrink-0">
            <Award className="w-4 h-4 text-[#A84A28]" />
            <span>Estimasi Skor: <strong className="text-sm text-[#1E1B17]">{averageScore}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercise.criteria.map((crit) => {
            const currentSelected = criteriaScores[crit.id];

            return (
              <div key={crit.id} className="p-5 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#1E1B17]">{crit.name}</span>
                  <span className="font-mono text-xs text-[#7A7265]">{crit.weightPercent}%</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {crit.descriptors.map((desc) => {
                    const isSelected = currentSelected === desc.score;
                    return (
                      <button
                        key={desc.score}
                        type="button"
                        onClick={() => handleScoreSelect(crit.id, desc.score)}
                        className={clsx(
                          'p-2.5 rounded-2xl border text-left transition-all space-y-1 tactile-btn',
                          isSelected
                            ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-xs'
                            : 'bg-[#EFE9DF] hover:bg-[#C8C0B0] border-[#C8C0B0] text-[#1E1B17]'
                        )}
                      >
                        <span className="font-mono text-xs font-bold block">{desc.label}</span>
                        <p className="text-[10px] leading-tight opacity-85 line-clamp-3">
                          {desc.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Model Answer Accordion */}
      {exercise.modelAnswer && (
        <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-4">
          <div
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="flex items-center justify-between cursor-pointer group select-none"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#A84A28]" />
              <h4 className="font-serif text-lg font-bold text-[#1E1B17] group-hover:text-[#A84A28] transition-colors">
                Contoh Jawaban Acuan ({exercise.modelAnswer.bandOrScore})
              </h4>
            </div>
            <button className="p-1.5 rounded-full text-[#7A7265] group-hover:text-[#1E1B17]">
              {showModelAnswer ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showModelAnswer && (
            <div className="space-y-4 pt-3 border-t border-[#C8C0B0] animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-[#EFE9DF] border border-[#C8C0B0] leading-relaxed text-sm text-[#1E1B17] whitespace-pre-line font-serif">
                {exercise.modelAnswer.text}
              </div>

              {exercise.modelAnswer.analysis && (
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#7A7265] block font-semibold">
                    Bedah Struktur Kunci (Examiner's Analysis):
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#1E1B17]">
                    {exercise.modelAnswer.analysis.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A84A28] font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {isSaved && (
        <div className="p-4 rounded-2xl bg-[#535841]/15 border border-[#535841]/30 flex items-center gap-2 text-[#1E1B17] text-xs font-medium animate-in fade-in">
          <Check className="w-4 h-4 text-[#535841] shrink-0" />
          <span>Esai dan hasil evaluasi mandiri berhasil tersimpan ke riwayat belajarmu!</span>
        </div>
      )}
    </div>
  );
}
