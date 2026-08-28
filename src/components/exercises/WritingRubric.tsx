'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Award, BookOpen, ChevronDown, ChevronUp, Sparkles, Send } from 'lucide-react';
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
    if (wordCount < 20) {
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
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider">
              {exercise.taskType} · Writing Studio
            </span>
            <span className="font-mono text-xs bg-[#C4502A]/10 text-[#C4502A] px-2.5 py-0.5 rounded-full">
              Min. {exercise.minWordCount} Words
            </span>
          </div>

          {/* Timer pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 font-mono text-xs text-[#1A1714]">
              <Clock className="w-3.5 h-3.5 text-[#C4502A]" />
              <span>{formattedTime}</span>
            </div>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#1A1714] text-white hover:bg-[#C4502A] transition-colors"
            >
              {timerRunning ? 'Pause' : 'Start Timer'}
            </button>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="p-6 rounded-2xl bg-white/85 border border-white/90 shadow-sm space-y-3">
          <h3 className="text-lg font-serif text-[#1A1714] leading-snug">
            {exercise.prompt}
          </h3>
          <p className="text-xs text-[#82796A]">
            Tuliskan esai lengkap dengan struktur introduction, body paragraphs, dan conclusion. Gunakan kosakata akademis yang relevan.
          </p>
        </div>
      </div>

      {/* Editor & Word count bar */}
      <div className="space-y-2">
        <div className="relative">
          <textarea
            value={essayText}
            onChange={(e) => {
              setEssayText(e.target.value);
              setIsSaved(false);
            }}
            rows={12}
            placeholder="Mulai ketik esaimu di sini..."
            className="w-full p-6 rounded-2xl bg-white/90 border border-[#1A1714]/15 focus:border-[#C4502A] focus:ring-3 focus:ring-[#C4502A]/15 outline-hidden text-[#1A1714] leading-relaxed font-sans text-sm sm:text-base transition-all resize-y shadow-xs"
          />
        </div>

        {/* Live Word Count Strip */}
        <div className="flex items-center justify-between px-2 text-xs font-mono text-[#82796A]">
          <div className="flex items-center gap-3">
            <span>
              Jumlah Kata:{' '}
              <strong
                className={clsx(
                  wordCount >= exercise.minWordCount
                    ? 'text-emerald-700 font-bold'
                    : 'text-amber-700'
                )}
              >
                {wordCount}
              </strong>{' '}
              / {exercise.minWordCount} kata
            </span>
            {wordCount >= exercise.minWordCount && (
              <span className="text-emerald-600 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Target Terpenuhi
              </span>
            )}
          </div>

          <button
            onClick={handleSaveSubmission}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#1A1714] hover:bg-[#C4502A] text-white transition-all text-xs font-sans font-medium shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Simpan Esai</span>
          </button>
        </div>
      </div>

      {/* Recommended Vocabulary Chips */}
      {exercise.recommendedVocabulary && exercise.recommendedVocabulary.length > 0 && (
        <div className="p-5 rounded-2xl bg-black/02 border border-black/05 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#1A1714]">
            <Sparkles className="w-3.5 h-3.5 text-[#C4502A]" />
            <span>High-Yield Vocabulary to Incorporate:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {exercise.recommendedVocabulary.map((item) => (
              <div key={item.term} className="p-3 rounded-xl bg-white border border-black/05 space-y-1">
                <span className="font-medium text-xs text-[#C4502A] block">{item.term}</span>
                <p className="text-[11px] text-[#82796A]">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Cambridge / ETS Self-Evaluation Rubric */}
      <div className="space-y-4 pt-4 border-t border-black/10">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-base font-serif text-[#1A1714]">
              Official Rubric Self-Assessment
            </h4>
            <p className="text-xs text-[#82796A]">
              Pilih level deskriptor yang paling mencerminkan tulisanmu untuk menghitung estimasi band score.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white border border-black/10 flex items-center gap-2 font-mono text-xs">
            <Award className="w-4 h-4 text-[#C4502A]" />
            <span>Estimated Band: <strong className="text-base text-[#1A1714]">{averageScore}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercise.criteria.map((crit) => {
            const currentSelected = criteriaScores[crit.id];

            return (
              <div key={crit.id} className="p-5 rounded-2xl bg-white/70 border border-white/90 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm text-[#1A1714]">{crit.name}</span>
                  <span className="font-mono text-xs text-[#82796A]">{crit.weightPercent}%</span>
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
                          'p-2.5 rounded-xl border text-left transition-all space-y-1',
                          isSelected
                            ? 'bg-[#1A1714] text-white border-[#1A1714] shadow-xs'
                            : 'bg-white hover:bg-black/02 border-black/10 text-[#38332C]'
                        )}
                      >
                        <span className="font-mono text-xs font-bold block">{desc.label}</span>
                        <p className="text-[10px] leading-tight opacity-80 line-clamp-3">
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
        <div className="p-6 rounded-2xl bg-[#EFE8DC]/70 border border-[#1A1714]/10 space-y-4">
          <div
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C4502A]" />
              <h4 className="font-serif text-lg text-[#1A1714] group-hover:text-[#C4502A] transition-colors">
                Contoh Jawaban Acuan ({exercise.modelAnswer.bandOrScore})
              </h4>
            </div>
            <button className="p-1 rounded-full text-[#82796A] group-hover:text-[#1A1714]">
              {showModelAnswer ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showModelAnswer && (
            <div className="space-y-4 pt-3 border-t border-black/10 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-white/90 border border-black/05 leading-relaxed text-sm text-[#1A1714] whitespace-pre-line font-sans">
                {exercise.modelAnswer.text}
              </div>

              {exercise.modelAnswer.analysis && (
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#82796A] block">
                    Bedah Struktur Kunci (Examiner's Analysis):
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#38332C]">
                    {exercise.modelAnswer.analysis.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C4502A] font-bold">✓</span>
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
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-emerald-950 text-xs font-medium">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Esai dan hasil evaluasi mandiri berhasil tersimpan ke riwayat belajarmu!</span>
        </div>
      )}
    </div>
  );
}
