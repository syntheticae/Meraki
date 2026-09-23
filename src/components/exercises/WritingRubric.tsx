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
  const [validationError, setValidationError] = useState<string | null>(null);
  const [autoSavedAt, setAutoSavedAt] = useState<string | null>(null);

  useEffect(() => {
    // Restore autosaved draft if exists
    try {
      const draft = localStorage.getItem(`meraki_writing_autosave_${exercise.id}`);
      if (draft) {
        setEssayText(draft);
        setAutoSavedAt('Tersimpan sebelumnya');
      } else {
        setEssayText('');
      }
    } catch {
      setEssayText('');
    }
    setTimeLeftSec(exercise.suggestedTimeMin * 60);
    setTimerRunning(false);
    setCriteriaScores({});
    setShowModelAnswer(false);
    setIsSaved(false);
    setValidationError(null);
  }, [exercise.id, exercise.suggestedTimeMin]);

  // Periodic autosave every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (essayText.trim().length > 0) {
        try {
          localStorage.setItem(`meraki_writing_autosave_${exercise.id}`, essayText);
          const now = new Date();
          setAutoSavedAt(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        } catch {}
      }
    }, 30000);
    return () => clearInterval(timer);
  }, [essayText, exercise.id]);

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
      setValidationError('Tulis esai minimal beberapa kalimat (minimal 10 kata) terlebih dahulu.');
      return;
    }
    setValidationError(null);

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

    // Clear autosave draft on successful submission
    try {
      localStorage.removeItem(`meraki_writing_autosave_${exercise.id}`);
    } catch {}

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
            <span className="font-mono text-xs text-[#475569] dark:text-[#7A8992] uppercase tracking-wider font-semibold">
              {exercise.taskType} · Writing Studio
            </span>
            <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20 px-2.5 py-0.5 rounded-full font-bold">
              Min. {exercise.minWordCount} Kata
            </span>
          </div>

          {/* Timer pill */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 font-mono text-xs text-[#0F172A] dark:text-[#FFFFFF]">
              <Clock className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
              <span className="font-bold">{formattedTime}</span>
            </div>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="px-3.5 py-1.5 rounded-2xl text-xs font-mono bg-[#00638E] text-white hover:bg-[#004A6B] transition-colors shadow-xs tactile-btn"
            >
              {timerRunning ? 'Jeda Timer' : 'Mulai Timer'}
            </button>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-2">
          <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF] leading-snug">
            {exercise.prompt}
          </h3>
          <p className="text-xs text-[#334155] dark:text-[#7A8992]">
            Tuliskan esai lengkap dengan struktur pendahuluan, paragraf tubuh argumen, dan kesimpulan.
          </p>
        </div>
      </div>

      {/* Editor & Live Analytics */}
      <div className="space-y-3">
        <label htmlFor="essay-input" className="sr-only">
          Tulis esaimu di sini
        </label>
        <div className="relative">
          <textarea
            id="essay-input"
            aria-label="Editor teks esai"
            value={essayText}
            onChange={(e) => {
              setEssayText(e.target.value);
              setIsSaved(false);
              setValidationError(null);
            }}
            rows={12}
            placeholder="Mulai ketik esaimu di sini..."
            className="w-full p-5 sm:p-6 rounded-3xl bg-[#F8FAFC] dark:bg-[#000000] border border-[#CBD5E1] dark:border-white/10 focus:border-[#00638E] focus:ring-2 focus:ring-[#00638E]/20 outline-none text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed font-sans text-sm sm:text-base transition-all resize-y shadow-inner placeholder:text-[#475569] dark:placeholder:text-[#7A8992]"
          />
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div
            role="alert"
            className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-300 dark:border-rose-800 text-xs font-mono text-rose-700 dark:text-rose-400 animate-in fade-in"
          >
            {validationError}
          </div>
        )}

        {/* Live Word Count & Real-time Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#334155] dark:text-[#7A8992] shadow-xs">
          <div className="flex flex-wrap items-center gap-3">
            {autoSavedAt && (
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {autoSavedAt.startsWith('Tersimpan') ? autoSavedAt : `Draft tersimpan (${autoSavedAt})`}
              </span>
            )}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#F8FAFC] dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10">
              <span>Kata:</span>
              <strong
                className={clsx(
                  wordCount >= exercise.minWordCount
                    ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                    : 'text-[#00638E] dark:text-[#8CB9CC] font-bold'
                )}
              >
                {wordCount}
              </strong>
              <span className="text-[#64748B]">/ {exercise.minWordCount}</span>
              {wordCount >= exercise.minWordCount ? (
                <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-bold ml-1">✓ Cukup</span>
              ) : (
                <span className="text-[#64748B] text-[10px] ml-1">(-{exercise.minWordCount - wordCount})</span>
              )}
            </span>

            <span>
              Kalimat: <strong className="text-[#0F172A] dark:text-[#FFFFFF]">{metrics.sentenceCount}</strong>
            </span>

            <span>
              Rata-rata Kata/Kalimat:{' '}
              <strong className="text-[#0F172A] dark:text-[#FFFFFF]">{metrics.avgSentenceLength}</strong>
            </span>

            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
              <span>
                Densitas Leksikal:{' '}
                <strong className={clsx(
                  metrics.lexicalDiversityPercent >= 60 ? 'text-[#004A6B] dark:text-[#BFD8E3] font-bold' : 'text-[#00638E] dark:text-[#8CB9CC]'
                )}>
                  {metrics.lexicalDiversityPercent}%
                </strong>
              </span>
            </span>
          </div>

          <button
            onClick={handleSaveSubmission}
            className="flex items-center gap-1.5 px-5 py-2 rounded-2xl bg-[#00638E] hover:bg-[#004A6B] text-white transition-all text-xs font-mono font-medium shadow-xs tactile-btn cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Simpan Esai</span>
          </button>
        </div>
      </div>

      {/* Live Academic Linter Diagnostics Card */}
      {essayText.trim().length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-white/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                Academic Linter &amp; L1 Diagnostics
              </h4>
            </div>
            <span className={clsx(
              'font-mono text-[11px] px-2.5 py-0.5 rounded-full font-bold',
              metrics.issues.length === 0
                ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-300'
                : 'bg-[#00638E]/10 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20'
            )}>
              {metrics.issues.length === 0 ? '✓ Tidak Ada Jebakan Terdeteksi' : `${metrics.issues.length} Poin Evaluasi`}
            </span>
          </div>

          {metrics.issues.length === 0 ? (
            <p className="text-xs text-[#004A6B] dark:text-[#BFD8E3] font-sans">
              Struktur kalimat dan kolokasi tulisanmu sejauh ini bersih dari kesalahan umum interferensi bahasa ibu.
            </p>
          ) : (
            <div className="space-y-2.5">
              {metrics.issues.map((issue) => (
                <div
                  key={issue.id}
                  className="p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border-l-4 border-l-[#00638E] dark:border-l-[#8CB9CC] border-y border-r border-[#CBD5E1] dark:border-white/10 space-y-1.5 text-xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      "{issue.phrase}"
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#CBD5E1]/30 dark:bg-[#2B2B2B] text-[#004A6B] dark:text-[#BFD8E3] font-bold">
                      {issue.type === 'l1-error' ? 'Jebakan Bahasa Ibu (L1)' : issue.type === 'grammar' ? 'Grammar Rule' : 'Stylistic'}
                    </span>
                  </div>
                  <p className="text-[#0F172A] dark:text-[#FFFFFF] font-medium">{issue.message}</p>
                  {issue.replacementSuggestion && (
                    <p className="text-[11px] font-mono text-[#004A6B] dark:text-[#BFD8E3]">
                      Saran: <strong>{issue.replacementSuggestion}</strong>
                    </p>
                  )}
                  <p className="text-[11px] text-[#475569] dark:text-[#7A8992] italic">{issue.linguisticRationale}</p>
                </div>
              ))}
            </div>
          )}

          {/* Repetitive Words Tracker */}
          {metrics.repetitiveWords.length > 0 && (
            <div className="pt-3 border-t border-[#CBD5E1] dark:border-white/10 space-y-2 text-xs">
              <span className="font-mono text-[11px] text-[#475569] dark:text-[#8CB9CC] uppercase font-semibold">
                Kata Berfrekuensi Tinggi (&gt; 3x Pemakaian):
              </span>
              <div className="flex flex-wrap gap-2">
                {metrics.repetitiveWords.map((item) => (
                  <span
                    key={item.word}
                    className="px-2.5 py-1 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 font-mono text-[11px] text-[#0F172A] dark:text-[#FFFFFF] font-medium"
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
        <div className="p-5 rounded-3xl bg-[#F8FAFC] dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#0F172A] dark:text-[#FFFFFF] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
            <span>Rekomendasi Kosakata Akademis (High-Yield):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {exercise.recommendedVocabulary.map((item) => (
              <div key={item.term} className="p-3.5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-1 shadow-2xs">
                <span className="font-serif font-bold text-sm text-[#00638E] dark:text-[#8CB9CC] block">{item.term}</span>
                <p className="text-[11px] text-[#334155] dark:text-[#8CB9CC] leading-snug">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Official Cambridge / ETS Self-Evaluation Rubric */}
      <div className="space-y-4 pt-4 border-t border-[#CBD5E1] dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
              Evaluasi Mandiri Berbasis Rubrik Resmi
            </h4>
            <p className="text-xs text-[#334155] dark:text-[#8CB9CC]">
              Pilih level deskriptor yang paling mencerminkan tulisanmu untuk menghitung estimasi band score.
            </p>
          </div>
          <div className="px-3.5 py-1.5 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2 font-mono text-xs shrink-0 shadow-2xs">
            <Award className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
            <span className="text-[#334155] dark:text-[#8CB9CC]">Estimasi Skor: <strong className="text-sm text-[#0F172A] dark:text-[#FFFFFF]">{averageScore}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercise.criteria.map((crit) => {
            const currentSelected = criteriaScores[crit.id];

            return (
              <div key={crit.id} className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#0F172A] dark:text-[#FFFFFF]">{crit.name}</span>
                  <span className="font-mono text-xs font-semibold text-[#475569] dark:text-[#8CB9CC]">{crit.weightPercent}%</span>
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
                            ? 'bg-[#00638E] text-white shadow-xs font-semibold border-[#00638E]'
                            : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] hover:bg-[#F1F5F9] dark:hover:bg-[#262626] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF]'
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
        <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-4 shadow-xs">
          <button
            type="button"
            aria-expanded={showModelAnswer}
            onClick={() => setShowModelAnswer(!showModelAnswer)}
            className="w-full flex items-center justify-between text-left cursor-pointer group select-none tactile-btn"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" aria-hidden="true" />
              <h4 className="font-serif text-lg font-bold text-[#0F172A] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC] transition-colors">
                Contoh Jawaban Acuan ({exercise.modelAnswer.bandOrScore})
              </h4>
            </div>
            <div className="p-1.5 rounded-full text-[#475569] dark:text-[#8CB9CC] group-hover:text-[#0F172A] dark:group-hover:text-[#FFFFFF]">
              {showModelAnswer ? <ChevronUp className="w-5 h-5" aria-hidden="true" /> : <ChevronDown className="w-5 h-5" aria-hidden="true" />}
            </div>
          </button>

          {showModelAnswer && (
            <div className="space-y-4 pt-3 border-t border-[#CBD5E1] dark:border-white/10 animate-in fade-in duration-200">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#000000] border border-[#CBD5E1] dark:border-white/10 leading-relaxed text-sm text-[#0F172A] dark:text-[#FFFFFF] whitespace-pre-line font-serif">
                {exercise.modelAnswer.text}
              </div>

              {exercise.modelAnswer.analysis && (
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#475569] dark:text-[#8CB9CC] block font-bold">
                    Bedah Struktur Kunci (Examiner's Analysis):
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#0F172A] dark:text-[#FFFFFF]">
                    {exercise.modelAnswer.analysis.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00638E] dark:text-[#8CB9CC] font-bold">✓</span>
                        <span className="text-[#1E293B] dark:text-[#DFE5EA]">{pt}</span>
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
        <div className="p-4 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/30 dark:border-[#BFD8E3]/35 flex items-center gap-2 text-[#0F172A] dark:text-[#FFFFFF] text-xs font-semibold animate-in fade-in">
          <Check className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3] shrink-0" />
          <span>Esai dan hasil evaluasi mandiri berhasil tersimpan ke riwayat belajarmu!</span>
        </div>
      )}
    </div>
  );
}
