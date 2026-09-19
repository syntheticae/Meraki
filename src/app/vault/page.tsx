'use client';

import React, { useState, useEffect } from 'react';
import {
  Archive,
  BarChart2,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Check,
  Clock,
  Trash2,
  Sparkles,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { clsx } from 'clsx';

export interface MistakeItem {
  id: string;
  type: 'quiz' | 'doctor' | 'collocation' | 'prep';
  title: string;
  question: string;
  prompt: string;
  correctAnswer: string;
  explanation: string;
  timestamp: number;
  timesMissed?: number;
  category?: string;
  srsStage?: number; // 1 to 5
  nextReviewDate?: number;
  lastReviewedDate?: number;
}

export default function VaultPage() {
  const [mistakeVault, setMistakeVault] = useState<MistakeItem[]>([]);
  const [vaultSrsFilter, setVaultSrsFilter] = useState<'all' | 'due'>('all');
  const [vaultReQuizId, setVaultReQuizId] = useState<string | null>(null);
  const [vaultReQuizAnswer, setVaultReQuizAnswer] = useState<string>('');
  const [vaultReQuizFeedback, setVaultReQuizFeedback] = useState<{ isCorrect: boolean } | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('meraki_mistake_vault');
      if (saved) setMistakeVault(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleRemoveFromVault = (id: string) => {
    const updated = mistakeVault.filter((m) => m.id !== id);
    setMistakeVault(updated);
    try {
      localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAll = () => {
    if (confirm('Yakin ingin mengosongkan semua catatan kesalahan di Bank Khilaf?')) {
      setMistakeVault([]);
      try {
        localStorage.removeItem('meraki_mistake_vault');
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleCheckVaultReQuiz = (item: MistakeItem, userAnswer: string) => {
    const cleanInput = userAnswer.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    const cleanCorrect = item.correctAnswer.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    const isMatch = cleanInput === cleanCorrect;

    setVaultReQuizFeedback({ isCorrect: isMatch });

    if (isMatch) {
      const currentStage = item.srsStage || 1;
      const newStage = Math.min(5, currentStage + 1);
      const intervals = [0, 1, 3, 7, 14, 30];
      const nextIntervalMs = (intervals[newStage] || 30) * 24 * 60 * 60 * 1000;
      const nextReview = Date.now() + nextIntervalMs;

      const updated = mistakeVault.map((m) => {
        if (m.id === item.id) {
          return {
            ...m,
            srsStage: newStage,
            nextReviewDate: nextReview,
            lastReviewedDate: Date.now(),
          };
        }
        return m;
      });
      setMistakeVault(updated);
      try {
        localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const totalMistakes = mistakeVault.length;
  const dueMistakesCount = mistakeVault.filter(
    (m) => !m.nextReviewDate || m.nextReviewDate <= Date.now()
  ).length;

  const quizCount = mistakeVault.filter((m) => m.type === 'quiz').length;
  const doctorCount = mistakeVault.filter((m) => m.type === 'doctor').length;
  const collocationCount = mistakeVault.filter((m) => m.type === 'collocation').length;
  const prepCount = mistakeVault.filter((m) => m.type === 'prep').length;

  const quizPct = totalMistakes > 0 ? Math.round((quizCount / totalMistakes) * 100) : 0;
  const doctorPct = totalMistakes > 0 ? Math.round((doctorCount / totalMistakes) * 100) : 0;
  const colPct = totalMistakes > 0 ? Math.round((collocationCount / totalMistakes) * 100) : 0;
  const prepPct = totalMistakes > 0 ? Math.round((prepCount / totalMistakes) * 100) : 0;

  const filteredMistakes = mistakeVault.filter((item) =>
    vaultSrsFilter === 'due' ? !item.nextReviewDate || item.nextReviewDate <= Date.now() : true
  );

  return (
    <AppShell category="Ujian & Evaluasi" title="Bank Khilaf (Mistake SRS)">
      <div className="space-y-6 max-w-5xl mx-auto pb-12">
        {/* Header Hero Liquid Glass */}
        <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] text-xs font-mono font-medium">
                <Archive className="w-3.5 h-3.5" />
                <span>Personal Error Repository & Weakness Diagnostics</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#141414] dark:text-white">
                Bank Khilaf: Rekam Jejak & Uji Ulang Kelemahan
              </h1>
              <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992]">
                Semua soal latihan, bedah kalimat, dan kolokasi yang pernah Anda jawab keliru dikumpulkan di sini untuk dilatih ulang berjarak.
              </p>
            </div>

            {totalMistakes > 0 && (
              <button
                onClick={handleClearAll}
                className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono flex items-center gap-2 transition-colors self-start md:self-auto shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kosongkan Vault</span>
              </button>
            )}
          </div>
        </div>

        {totalMistakes === 0 ? (
          <div className="p-12 text-center bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl rounded-3xl border border-[#BFD8E3]/40 dark:border-white/5 space-y-4 shadow-xs">
            <CheckCircle2 className="w-12 h-12 text-[#00638E] dark:text-[#8CB9CC] mx-auto opacity-80" />
            <h3 className="font-serif text-2xl font-bold text-[#141414] dark:text-white">Mistake Vault Bersih!</h3>
            <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992] max-w-md mx-auto leading-relaxed">
              Semua latihan yang Anda kerjakan telah dijawab dengan tepat, atau Anda telah menyelesaikan seluruh siklus uji ulang kelemahan.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Error Distribution Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase tracking-wider block font-semibold">
                    Analisis Frekuensi & Pola Kelemahan
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#141414] dark:text-white">
                    Distribusi {totalMistakes} Catatan Kesalahan
                  </h3>
                </div>
                <BarChart2 className="w-5 h-5 text-[#00638E] dark:text-[#8CB9CC]" />
              </div>

              {/* Stacked Percentage Bar */}
              <div className="w-full h-3.5 bg-[#EDF3F7] dark:bg-[#1C1C1C] rounded-full overflow-hidden flex border border-[#BFD8E3]/30 dark:border-white/10">
                {quizPct > 0 && <div style={{ width: `${quizPct}%` }} className="bg-[#00638E] h-full" title={`Grammar/Quiz: ${quizPct}%`} />}
                {colPct > 0 && <div style={{ width: `${colPct}%` }} className="bg-[#004A6B] h-full" title={`Kolokasi/Diksi: ${colPct}%`} />}
                {prepPct > 0 && <div style={{ width: `${prepPct}%` }} className="bg-[#8CB9CC] h-full" title={`Preposisi: ${prepPct}%`} />}
                {doctorPct > 0 && <div style={{ width: `${doctorPct}%` }} className="bg-[#141414] dark:bg-white h-full" title={`Sintaksis/Doctor: ${doctorPct}%`} />}
              </div>

              {/* Legend Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
                  <span>Grammar ({quizCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004A6B]" />
                  <span>Kolokasi ({collocationCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8CB9CC]" />
                  <span>Preposisi ({prepCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#141414] dark:bg-white" />
                  <span>Sintaksis ({doctorCount})</span>
                </div>
              </div>
            </div>

            {/* SRS Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs">
              <div className="flex gap-2">
                <button
                  onClick={() => setVaultSrsFilter('all')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-xs font-mono transition-all',
                    vaultSrsFilter === 'all'
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                  )}
                >
                  Semua Kesalahan ({mistakeVault.length})
                </button>
                <button
                  onClick={() => setVaultSrsFilter('due')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5',
                    vaultSrsFilter === 'due'
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                  )}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Jatuh Tempo Hari Ini ({dueMistakesCount})</span>
                </button>
              </div>

              <span className="text-[11px] font-mono text-[#00638E] dark:text-[#8CB9CC]">
                Algoritma Leitner SM-2 (5 Tahap)
              </span>
            </div>

            {/* Mistake Items Feed */}
            <div className="space-y-4">
              {filteredMistakes.map((item) => {
                const isReQuizzing = vaultReQuizId === item.id;
                const srsStage = item.srsStage || 1;
                const isDue = !item.nextReviewDate || item.nextReviewDate <= Date.now();

                return (
                  <div
                    key={item.id}
                    className="p-6 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] px-3 py-1 rounded-full font-semibold">
                          {item.type === 'quiz'
                            ? 'Pilihan Ganda'
                            : item.type === 'doctor'
                            ? 'Bedah Kalimat'
                            : item.type === 'collocation'
                            ? 'Kolokasi & Diksi'
                            : 'Preposisi'}
                        </span>

                        <span
                          className={clsx(
                            'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold',
                            srsStage >= 5
                              ? 'bg-[#004A6B] text-white'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#004A6B] dark:text-[#BFD8E3]'
                          )}
                        >
                          {srsStage >= 5 ? 'SRS Mastered (Tahap 5)' : `SRS Tahap ${srsStage}/5`}
                        </span>

                        {isDue && (
                          <span className="font-mono text-[10px] bg-[#00638E] text-white px-2.5 py-0.5 rounded-full font-semibold">
                            Perlu Review
                          </span>
                        )}

                        {item.timesMissed && item.timesMissed > 1 && (
                          <span className="font-mono text-[10px] bg-rose-500/15 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded-full font-bold">
                            Salah {item.timesMissed}x
                          </span>
                        )}

                        <span className="text-xs text-[#50585C] dark:text-[#7A8992]">{item.title}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            if (isReQuizzing) {
                              setVaultReQuizId(null);
                              setVaultReQuizAnswer('');
                              setVaultReQuizFeedback(null);
                            } else {
                              setVaultReQuizId(item.id);
                              setVaultReQuizAnswer('');
                              setVaultReQuizFeedback(null);
                            }
                          }}
                          className="text-xs font-mono text-[#00638E] dark:text-[#8CB9CC] hover:underline flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{isReQuizzing ? 'Tutup Uji Ulang' : 'Uji Ulang (SRS)'}</span>
                        </button>
                        <button
                          onClick={() => handleRemoveFromVault(item.id)}
                          className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Sudah Paham (Hapus)</span>
                        </button>
                      </div>
                    </div>

                    <p className="text-base font-serif font-bold text-[#141414] dark:text-white leading-relaxed">
                      "{item.question}"
                    </p>

                    {/* Interactive Re-Quiz Form */}
                    {isReQuizzing ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleCheckVaultReQuiz(item, vaultReQuizAnswer);
                        }}
                        className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-3 animate-in fade-in duration-200"
                      >
                        <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase block font-semibold">
                          Coba Jawab Ulang Secara Mandiri:
                        </span>
                        <input
                          type="text"
                          value={vaultReQuizAnswer}
                          onChange={(e) => {
                            setVaultReQuizAnswer(e.target.value);
                            setVaultReQuizFeedback(null);
                          }}
                          placeholder="Ketik jawaban / opsi yang benar..."
                          className="w-full p-2.5 text-xs bg-white dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 rounded-xl outline-none focus:border-[#00638E] text-[#141414] dark:text-white"
                        />
                        <div className="flex items-center justify-between">
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-medium hover:bg-[#004A6B] transition-colors"
                          >
                            Verifikasi Jawaban
                          </button>
                        </div>

                        {vaultReQuizFeedback && (
                          <div
                            className={clsx(
                              'p-3.5 rounded-xl border text-xs space-y-1.5 animate-in fade-in',
                              vaultReQuizFeedback.isCorrect
                                ? 'bg-[#004A6B]/10 dark:bg-[#00638E]/20 border-[#00638E] text-[#141414] dark:text-white'
                                : 'bg-rose-500/10 border-rose-300 text-rose-700 dark:text-rose-300'
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold flex items-center gap-1.5">
                                {vaultReQuizFeedback.isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                                    <span>Luar Biasa! Jawaban Benar · Naik ke SRS Tahap {srsStage}</span>
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="w-4 h-4 text-rose-500" />
                                    <span>Masih Kurang Tepat. Kunci: {item.correctAnswer}</span>
                                  </>
                                )}
                              </span>
                              {vaultReQuizFeedback.isCorrect && (
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFromVault(item.id)}
                                  className="px-3 py-1 rounded-lg bg-[#004A6B] text-white text-[10px] font-mono font-medium"
                                >
                                  Hapus Permanen
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </form>
                    ) : (
                      <div className="space-y-2">
                        <div className="p-3.5 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 dark:border-[#8CB9CC]/30 text-xs text-[#141414] dark:text-white">
                          {item.prompt}
                        </div>

                        <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-1.5">
                          <p>
                            <strong>Kunci Jawaban Baku:</strong> {item.correctAnswer}
                          </p>
                          <p className="text-[#2B2B2B] dark:text-[#BFD8E3] leading-relaxed">
                            <strong>Pembahasan:</strong> {item.explanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
