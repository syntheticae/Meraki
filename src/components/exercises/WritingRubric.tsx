'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Clock, CheckCircle, Award, BookOpen, ChevronDown, ChevronUp, Sparkles, Send, Check, AlertTriangle, ShieldCheck, Zap, Activity } from 'lucide-react';
import { WritingRubricExercise } from '@/types/exercise';
import { progressRepository } from '@/services/storage';
import { analyzeAcademicText, WritingMetrics } from '@/services/linter';
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

  // Real-time Text Analytics & Linter
  const metrics: WritingMetrics = useMemo(() => {
    return analyzeAcademicText(essayText);
  }, [essayText]);

  const wordCount = metrics.wordCount;

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
            <span className="font-mono text-xs text-[#7A7265] dark:text-[#948B7C] uppercase tracking-wider font-semibold">
              {exercise.taskType} · Writing Studio
            </span>
            <span className="font-mono text-xs bg-[#A84A28]/15 dark:bg-[#D45B34]/20 text-[#A84A28] dark:text-[#D45B34] px-2.5 py-0.5 rounded-full font-bold">
              Min. {exercise.minWordCount} Kata
            </span>
          </div>

          {/* Timer pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-[#DDD7CA] dark:bg-[#28241F] border border-[#C8C0B0] dark:border-[#3A342D] font-mono text-xs text-[#1E1B17] dark:text-[#EFEAE1]">
              <Clock className="w-3.5 h-3.5 text-[#A84A28] dark:text-[#D45B34]" />
              <span className="font-bold">{formattedTime}</span>
            </div>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-3.5 py-1.5 rounded-2xl text-xs font-mono bg-[#1E1B17] dark:bg-[#D45B34] text-[#EFE9DF] dark:text-white hover:bg-[#A84A28] transition-colors tactile-btn"
            >
              {timerRunning ? 'Jeda Timer' : 'Mulai Timer'}
            </button>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="p-6 rounded-3xl bg-[#DDD7CA] dark:bg-[#201D19] border border-[#C8C0B0] dark:border-[#3A342D] shadow-xs space-y-2">
          <h3 className="text-lg font-serif font-bold text-[#1E1B17] dark:text-[#EFEAE1] leading-snug">
            {exercise.prompt}
          </h3>
          <p className="text-xs text-[#7A7265] dark:text-[#948B7C]">
            Tuliskan esai lengkap dengan struktur pendahuluan, paragraf tubuh argumen, dan kesimpulan.
          </p>
        </div>
      </div>

      {/* Editor & Live Analytics */}
      <div className="space-y-3">
        <div className="relative">
          <textarea
            value={essayText}
            onChange={(e) => {
              setEssayText(e.target.value);
              setIsSaved(false);
            }}
            rows={12}
            placeholder="Mulai ketik esaimu di sini..."
            className="w-full p-5 sm:p-6 rounded-3xl bg-[#EFE9DF] dark:bg-[#141210] border border-[#C8C0B0] dark:border-[#3A342D] focus:border-[#A84A28] dark:focus:border-[#D45B34] outline-hidden text-[#1E1B17] dark:text-[#EFEAE1] leading-relaxed font-sans text-sm sm:text-base transition-all resize-y shadow-inner placeholder:text-[#7A7265] dark:placeholder:text-[#6A6255]"
          />
        </div>

        {/* Live Word Count & Real-time Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#DDD7CA]/60 dark:bg-[#201D19]/60 border border-[#C8C0B0] dark:border-[#3A342D] text-xs font-mono text-[#7A7265] dark:text-[#948B7C]">
          <div className="flex flex-wrap items-center gap-4">
            <span>
              Kata:{' '}
              <strong
                className={clsx(
                  wordCount >= exercise.minWordCount
                    ? 'text-[#535841] dark:text-[#7A855F] font-bold text-sm'
                    : 'text-[#A84A28] dark:text-[#D45B34]'
                )}
              >
                {wordCount}
              </strong>{' '}
              / {exercise.minWordCount}
            </span>

            <span>
              Kalimat: <strong className="text-[#1E1B17] dark:text-[#EFEAE1]">{metrics.sentenceCount}</strong>
            </span>

            <span>
              Rata-rata Kata/Kalimat:{' '}
              <strong className="text-[#1E1B17] dark:text-[#EFEAE1]">{metrics.avgSentenceLength}</strong>
            </span>

            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-[#535841] dark:text-[#7A855F]" />
              <span>
                Densitas Leksikal:{' '}
                <strong className={clsx(
                  metrics.lexicalDiversityPercent >= 60 ? 'text-[#535841] dark:text-[#7A855F] font-bold' : 'text-[#A84A28] dark:text-[#D45B34]'
                )}>
                  {metrics.lexicalDiversityPercent}%
                </strong>
              </span>
            </span>
          </div>

          <button
            onClick={handleSaveSubmission}
            className="flex items-center gap-1.5 px-5 py-2 rounded-2xl bg-[#1E1B17] dark:bg-[#D45B34] hover:bg-[#A84A28] text-[#EFE9DF] dark:text-white transition-all text-xs font-mono font-medium shadow-xs tactile-btn"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Simpan Esai</span>
          </button>
        </div>
      </div>

      {/* Live Academic Linter Diagnostics Card */}
      {essayText.trim().length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] dark:bg-[#1E1B18] border border-[#C8C0B0] dark:border-[#3A342D] space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0] dark:border-[#3A342D]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A84A28] dark:text-[#D45B34]" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#1E1B17] dark:text-[#EFEAE1]">
                Academic Linter & L1 Diagnostics
              </h4>
            </div>
            <span className={clsx(
              'font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold',
              metrics.issues.length === 0
                ? 'bg-[#535841]/20 text-[#535841] dark:text-[#7A855F]'
                : 'bg-[#A84A28]/20 text-[#A84A28] dark:text-[#D45B34]'
            )}>
              {metrics.issues.length === 0 ? '✓ Tidak Ada Jebakan Terdeteksi' : `${metrics.issues.length} Poin Evaluasi`}
            </span>
          </div>

          {metrics.issues.length === 0 ? (
            <p className="text-xs text-[#535841] dark:text-[#7A855F] font-sans">
              Struktur kalimat dan kolokasi tulisanmu sejauh ini bersih dari kesalahan umum interferensi bahasa ibu.
            </p>
          ) : (
            <div className="space-y-2.5">
              {metrics.issues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-3.5 rounded-2xl bg-[#DDD7CA] dark:bg-[#28241F] border-l-4 border-l-[#A84A28] dark:border-l-[#D45B34] border-y border-r border-[#C8C0B0] dark:border-[#3A342D] space-y-1.5 text-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono font-bold text-[#A84A28] dark:text-[#D45B34]">
                      "{issue.phrase}"
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#C8C0B0] dark:bg-[#3A352D] text-[#524C42] dark:text-[#C4BCAD]">
                      {issue.type === 'l1-error' ? 'Jebakan Bahasa Ibu (L1)' : issue.type === 'grammar' ? 'Grammar Rule' : 'Stylistic'}
                    </span>
                  </div>
                  <p className="text-[#1E1B17] dark:text-[#EFEAE1] font-medium">{issue.message}</p>
                  {issue.replacementSuggestion && (
                    <p className="text-[11px] font-mono text-[#535841] dark:text-[#7A855F]">
                      Saran: <strong>{issue.replacementSuggestion}</strong>
                    </p>
                  )}
                  <p className="text-[11px] text-[#7A7265] dark:text-[#948B7C] italic">{issue.linguisticRationale}</p>
                </div>
              ))}
            </div>
          )}

          {/* Repetitive Words Tracker */}
          {metrics.repetitiveWords.length > 0 && (
            <div className="pt-3 border-t border-[#C8C0B0] dark:border-[#3A342D] space-y-2 text-xs">
              <span className="font-mono text-[11px] text-[#7A7265] dark:text-[#948B7C] uppercase font-semibold">
                Kata Berfrekuensi Tinggi (&gt; 3x Pemakaian):
              </span>
              <div className="flex flex-wrap gap-2">
                {metrics.repetitiveWords.map((item) => (
                  <span
                    key={item.word}
                    className="px-2.5 py-1 rounded-xl bg-[#DDD7CA] dark:bg-[#28241F] border border-[#C8C0B0] dark:border-[#3A342D] font-mono text-[11px] text-[#1E1B17] dark:text-[#EFEAE1]"
                  >
                    "{item.word}" ({item.count}x)
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

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
