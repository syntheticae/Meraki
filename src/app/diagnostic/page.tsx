'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck,
  Timer,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  BarChart2,
  Award,
  ChevronRight,
  Filter,
  Layers,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { MERAKI_CURRICULUM, PracticeQuestion } from '@/data/meraki-data';
import { clsx } from 'clsx';

export default function DiagnosticPage() {
  const allDiagnosticQuestions: PracticeQuestion[] = useMemo(() => {
    return MERAKI_CURRICULUM.flatMap((t) => t.questions);
  }, []);

  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, string>>({});
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Diagnostic Timer
  const [timerMode, setTimerMode] = useState<number | null>(null); // seconds or null for untimed
  const [timerSeconds, setTimerSeconds] = useState<number | null>(null);

  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem('meraki_diagnostic_answers');
      if (savedAnswers) setDiagnosticAnswers(JSON.parse(savedAnswers));
      const savedSubmitted = localStorage.getItem('meraki_diagnostic_submitted');
      if (savedSubmitted === 'true') setDiagnosticSubmitted(true);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (timerSeconds === null || timerSeconds <= 0 || diagnosticSubmitted) return;

    const interval = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          handleSubmitDiagnostic();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerSeconds, diagnosticSubmitted]);

  const handleSelectDiagnosticAnswer = (questionId: string, answer: string) => {
    const updated = { ...diagnosticAnswers, [questionId]: answer };
    setDiagnosticAnswers(updated);
    try {
      localStorage.setItem('meraki_diagnostic_answers', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitDiagnostic = () => {
    setDiagnosticSubmitted(true);
    try {
      localStorage.setItem('meraki_diagnostic_submitted', 'true');
    } catch (e) {
      console.error(e);
    }

    // Record mistakes in Mistake Vault
    const mistakesToRecord = allDiagnosticQuestions
      .filter((q) => diagnosticAnswers[q.id] && diagnosticAnswers[q.id] !== q.correctAnswer)
      .map((q) => ({
        id: `diag-${q.id}`,
        type: 'quiz' as const,
        title: `Diagnostik: ${q.category}`,
        question: q.question,
        prompt: `Pilihan Anda: "${diagnosticAnswers[q.id]}" (Kurang tepat)`,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        timestamp: Date.now(),
        category: q.category,
      }));

    if (mistakesToRecord.length > 0) {
      try {
        const prevStr = localStorage.getItem('meraki_mistake_vault');
        const prev = prevStr ? JSON.parse(prevStr) : [];
        const combined = [...mistakesToRecord, ...prev.filter((p: any) => !p.id.startsWith('diag-'))];
        localStorage.setItem('meraki_mistake_vault', JSON.stringify(combined));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleResetDiagnostic = () => {
    if (confirm('Uji ulang tes diagnostik dari awal? Lembar jawaban saat ini akan direset.')) {
      setDiagnosticAnswers({});
      setDiagnosticSubmitted(false);
      setTimerSeconds(timerMode);
      try {
        localStorage.removeItem('meraki_diagnostic_answers');
        localStorage.removeItem('meraki_diagnostic_submitted');
      } catch (e) {
        console.error(e);
      }
    }
  };

  const diagnosticAnalytics = useMemo(() => {
    let correctTotal = 0;
    const categoryStats: Record<string, { correct: number; total: number }> = {};

    allDiagnosticQuestions.forEach((q) => {
      const cat = q.category || 'General Grammar';
      if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
      categoryStats[cat].total += 1;

      if (diagnosticAnswers[q.id] === q.correctAnswer) {
        correctTotal++;
        categoryStats[cat].correct += 1;
      }
    });

    const total = allDiagnosticQuestions.length;
    const percentage = total > 0 ? Math.round((correctTotal / total) * 100) : 0;

    let estimatedCefr = 'A1';
    if (percentage >= 90) estimatedCefr = 'C1 (Advanced Proficiency)';
    else if (percentage >= 75) estimatedCefr = 'B2 (Vantage / Upper-Intermediate)';
    else if (percentage >= 60) estimatedCefr = 'B1 (Threshold / Intermediate)';
    else if (percentage >= 40) estimatedCefr = 'A2 (Waystage / Elementary)';
    else estimatedCefr = 'A1 (Breakthrough / Novice)';

    return {
      correctTotal,
      total,
      percentage,
      categoryStats,
      estimatedCefr,
    };
  }, [diagnosticAnswers, allDiagnosticQuestions]);

  const categories = useMemo(() => {
    const set = new Set(allDiagnosticQuestions.map((q) => q.category || 'General'));
    return ['all', ...Array.from(set)];
  }, [allDiagnosticQuestions]);

  const filteredQuestions = allDiagnosticQuestions.filter((q) => {
    if (selectedCategory === 'all') return true;
    return (q.category || 'General') === selectedCategory;
  });

  return (
    <AppShell category="Ujian & Evaluasi" title="Matriks Diagnostik CEFR">
      <div className="space-y-6 max-w-5xl mx-auto pb-12">
        {/* Header Hero Liquid Glass */}
        <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] text-xs font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Standardized CEFR Diagnostic Assessment Matrix</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#141414] dark:text-white">
                Matriks Diagnostik: Pemetaan Kompetensi
              </h1>
              <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992]">
                Evaluasi komprehensif {allDiagnosticQuestions.length} pertanyaan lintas bab untuk mengukur kesiapan IELTS, TOEFL, dan akurasi akademis.
              </p>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#EDF3F7] dark:bg-[#1C1C1C] rounded-2xl border border-[#BFD8E3]/40 dark:border-white/10 shrink-0">
              <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase px-2 font-semibold flex items-center gap-1">
                <Timer className="w-3 h-3 text-[#00638E] dark:text-[#8CB9CC]" />
                <span>Timer:</span>
              </span>
              {[
                { label: 'Bebas', seconds: null },
                { label: '30m', seconds: 1800 },
                { label: '60m', seconds: 3600 },
              ].map((tm) => (
                <button
                  key={tm.label}
                  disabled={diagnosticSubmitted}
                  onClick={() => {
                    setTimerMode(tm.seconds);
                    setTimerSeconds(tm.seconds);
                  }}
                  className={clsx(
                    'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all',
                    timerMode === tm.seconds
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                  )}
                >
                  {tm.label}
                </button>
              ))}
              {timerSeconds !== null && (
                <span className="font-mono text-xs font-bold text-[#00638E] dark:text-[#8CB9CC] px-2 py-0.5 bg-[#00638E]/10 dark:bg-[#00638E]/20 rounded-lg">
                  {Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Analytics Card When Submitted */}
        {diagnosticSubmitted && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#BFD8E3]/40 dark:border-white/10">
              <div className="space-y-1">
                <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] uppercase font-semibold">
                  Hasil Evaluasi Diagnostik Global:
                </span>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#141414] dark:text-white">
                    {diagnosticAnalytics.percentage}%
                  </h3>
                  <span className="text-sm font-mono text-[#00638E] dark:text-[#8CB9CC]">
                    ({diagnosticAnalytics.correctTotal} dari {diagnosticAnalytics.total} Soal Benar)
                  </span>
                </div>
                <div className="pt-1">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#004A6B]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#BFD8E3] font-mono">
                    Estimasi Level CEFR: {diagnosticAnalytics.estimatedCefr}
                  </span>
                </div>
              </div>

              <button
                onClick={handleResetDiagnostic}
                className="px-5 py-2.5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-xs font-mono text-[#141414] dark:text-white border border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Uji Ulang Tes</span>
              </button>
            </div>

            {/* Category Breakdown Bars */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase text-[#141414] dark:text-white font-semibold block">
                Matriks Kompetensi per Domain Tata Bahasa:
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(diagnosticAnalytics.categoryStats).map(([catName, stats]) => {
                  const catPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                  const isWeak = catPct < 70;

                  return (
                    <div
                      key={catName}
                      className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#141414] dark:text-white truncate max-w-[200px]">
                          {catName}
                        </span>
                        <span
                          className={clsx(
                            'font-mono px-2 py-0.5 rounded text-[10px] font-semibold',
                            catPct >= 80
                              ? 'bg-[#004A6B]/20 text-[#004A6B] dark:text-[#BFD8E3]'
                              : isWeak
                              ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                              : 'bg-black/5 dark:bg-white/5 text-[#50585C] dark:text-[#7A8992]'
                          )}
                        >
                          {catPct >= 80 ? 'Solid' : isWeak ? 'Kelemahan' : 'Cukup'} ({catPct}%)
                        </span>
                      </div>

                      <div className="w-full h-2 bg-[#BFD8E3]/40 dark:bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={clsx(
                            'h-full transition-all duration-500',
                            catPct >= 80 ? 'bg-[#00638E]' : isWeak ? 'bg-rose-500' : 'bg-[#004A6B]'
                          )}
                          style={{ width: `${catPct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-2 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all',
                selectedCategory === cat
                  ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                  : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
              )}
            >
              {cat === 'all' ? 'Semua Kategori' : cat}
            </button>
          ))}
        </div>

        {/* Questions Stream */}
        <div className="space-y-4">
          {filteredQuestions.map((q, idx) => {
            const userSelected = diagnosticAnswers[q.id];
            const isCorrect = userSelected === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="p-6 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">Soal {idx + 1}</span>
                    <span className="font-mono text-[10px] bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] px-2 py-0.5 rounded">
                      {q.category}
                    </span>
                  </div>

                  {diagnosticSubmitted && (
                    <span
                      className={clsx(
                        'text-xs font-mono font-medium',
                        isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                      )}
                    >
                      {isCorrect ? '✓ Benar' : '✗ Salah'}
                    </span>
                  )}
                </div>

                <p className="text-base font-serif font-bold text-[#141414] dark:text-white leading-relaxed">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options?.map((opt, oIdx) => {
                    const isThisSelected = userSelected === opt;
                    const isThisCorrect = opt === q.correctAnswer;

                    let btnStyle =
                      'bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#EDF3F7]/80 dark:hover:bg-[#1C1C1C]/80 border-[#BFD8E3]/40 dark:border-white/10 text-[#2B2B2B] dark:text-white';

                    if (diagnosticSubmitted) {
                      if (isThisCorrect) {
                        btnStyle =
                          'bg-[#004A6B]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#00638E] dark:text-white font-medium';
                      } else if (isThisSelected && !isThisCorrect) {
                        btnStyle = 'bg-rose-500/15 border-rose-400 text-rose-600 dark:text-rose-400';
                      }
                    } else if (isThisSelected) {
                      btnStyle = 'bg-[#00638E] text-white font-semibold border-[#00638E]';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => {
                          if (!diagnosticSubmitted) {
                            handleSelectDiagnosticAnswer(q.id, opt);
                          }
                        }}
                        className={clsx(
                          'p-3.5 rounded-2xl border text-xs text-left transition-all min-h-[44px]',
                          btnStyle
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {diagnosticSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs text-[#50585C] dark:text-[#7A8992] space-y-1">
                    <span className="font-mono text-[#00638E] dark:text-[#8CB9CC] block font-semibold">
                      Penjelasan Kaidah:
                    </span>
                    <p className="text-[#2B2B2B] dark:text-white leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sticky Submission Bar */}
        {!diagnosticSubmitted && (
          <div className="sticky bottom-6 z-20 p-5 rounded-3xl bg-white/95 dark:bg-[#141414]/95 backdrop-blur-xl border border-[#00638E]/40 dark:border-white/10 shadow-2xl flex flex-wrap items-center justify-between gap-4 animate-in slide-in-from-bottom-3 duration-200">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] text-[#00638E] dark:text-[#8CB9CC] uppercase font-bold block">
                Status Lembar Jawaban Diagnostik
              </span>
              <span className="font-serif text-sm font-semibold text-[#141414] dark:text-white">
                {Object.keys(diagnosticAnswers).length} dari {allDiagnosticQuestions.length} Soal Terjawab
              </span>
            </div>
            <button
              onClick={handleSubmitDiagnostic}
              className="px-6 py-3 rounded-2xl bg-[#00638E] hover:bg-[#004A6B] text-white text-xs font-mono font-medium transition-colors shadow-md min-h-[44px]"
            >
              Kumpulkan Lembar Jawaban & Analisis
            </button>
          </div>
        )}
      </div>
    </AppShell>
  );
}
