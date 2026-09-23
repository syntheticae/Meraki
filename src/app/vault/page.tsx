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
import { useRouter } from 'next/navigation';
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

export function VaultView() {
  const [mistakeVault, setMistakeVault] = useState<MistakeItem[]>([]);
  const [vaultSrsFilter, setVaultSrsFilter] = useState<'all' | 'due'>('all');
  const [vaultReQuizId, setVaultReQuizId] = useState<string | null>(null);
  const [vaultReQuizAnswer, setVaultReQuizAnswer] = useState<string>('');
  const [vaultReQuizFeedback, setVaultReQuizFeedback] = useState<{ isCorrect: boolean } | null>(null);
  const [confirmClear, setConfirmClear] = useState<boolean>(false);
  // Confirmation state for single-item delete (prevents accidental deletion)
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

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
    setMistakeVault([]);
    setConfirmClear(false);
    try {
      localStorage.removeItem('meraki_mistake_vault');
    } catch (e) {
      console.error(e);
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
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
        {/* Header Hero Liquid Glass */}
        <div className="bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#8CB9CC] text-xs font-mono font-medium">
                <Archive className="w-3.5 h-3.5" />
                <span>Personal Error Repository & Weakness Diagnostics</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-white">
                Bank Khilaf: Rekam Jejak & Uji Ulang Kelemahan
              </h1>
              <p className="text-xs sm:text-sm text-[#475569] dark:text-[#7A8992]">
                Semua soal latihan, bedah kalimat, dan kolokasi yang pernah Anda jawab keliru dikumpulkan di sini untuk dilatih ulang berjarak.
              </p>
            </div>

            {totalMistakes > 0 && (
              confirmClear ? (
                <div className="flex items-center gap-2 self-start md:self-auto shrink-0 animate-in fade-in duration-150">
                  <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                    Yakin hapus?
                  </span>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-mono font-bold shadow-xs cursor-pointer"
                  >
                    Ya, Kosongkan
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmClear(false)}
                    className="px-3 py-1.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono font-semibold text-[#0F172A] dark:text-white cursor-pointer hover:bg-black/5"
                  >
                    Batal
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmClear(true)}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-[#141414] hover:bg-rose-500 hover:text-white text-rose-600 dark:text-rose-400 text-xs font-mono font-bold flex items-center gap-2 transition-all self-start md:self-auto shrink-0 border-2 border-rose-400 dark:border-rose-500/40 cursor-pointer shadow-2xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Kosongkan Vault</span>
                </button>
              )
            )}
          </div>
        </div>

        {totalMistakes === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#141414] rounded-3xl border border-[#CBD5E1] dark:border-white/10 space-y-4 shadow-xs">
            <CheckCircle2 className="w-12 h-12 text-[#00638E] dark:text-[#8CB9CC] mx-auto opacity-80" />
            <h3 className="font-serif text-2xl font-bold text-[#0F172A] dark:text-white">Mistake Vault Bersih!</h3>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#7A8992] max-w-md mx-auto leading-relaxed">
              Semua latihan yang Anda kerjakan telah dijawab dengan tepat, atau Anda telah menyelesaikan seluruh siklus uji ulang kelemahan.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Error Distribution Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#004A6B] dark:text-[#7A8992] uppercase tracking-wider block font-bold">
                    Analisis Frekuensi & Pola Kelemahan
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0F172A] dark:text-white">
                    Distribusi {totalMistakes} Catatan Kesalahan
                  </h3>
                </div>
                <BarChart2 className="w-5 h-5 text-[#00638E] dark:text-[#8CB9CC]" />
              </div>

              {/* Stacked Percentage Bar */}
              <div className="w-full h-3.5 bg-[#CBD5E1] dark:bg-[#1C1C1C] rounded-full overflow-hidden flex border border-[#CBD5E1] dark:border-white/10">
                {quizPct > 0 && <div style={{ width: `${quizPct}%` }} className="bg-[#00638E] h-full" title={`Grammar/Quiz: ${quizPct}%`} />}
                {colPct > 0 && <div style={{ width: `${colPct}%` }} className="bg-[#004A6B] h-full" title={`Kolokasi/Diksi: ${colPct}%`} />}
                {prepPct > 0 && <div style={{ width: `${prepPct}%` }} className="bg-[#8CB9CC] h-full" title={`Preposisi: ${prepPct}%`} />}
                {doctorPct > 0 && <div style={{ width: `${doctorPct}%` }} className="bg-[#0F172A] dark:bg-white h-full" title={`Sintaksis/Doctor: ${doctorPct}%`} />}
              </div>

              {/* Legend Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
                  <span className="text-[#0F172A] dark:text-white font-medium">Grammar ({quizCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004A6B]" />
                  <span className="text-[#0F172A] dark:text-white font-medium">Kolokasi ({collocationCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8CB9CC]" />
                  <span className="text-[#0F172A] dark:text-white font-medium">Preposisi ({prepCount})</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center gap-2 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A] dark:bg-white" />
                  <span className="text-[#0F172A] dark:text-white font-medium">Sintaksis ({doctorCount})</span>
                </div>
              </div>
            </div>

            {/* SRS Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
              <div className="flex gap-2">
                <button
                  onClick={() => setVaultSrsFilter('all')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer',
                    vaultSrsFilter === 'all'
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-white'
                  )}
                >
                  Semua Kesalahan ({mistakeVault.length})
                </button>
                <button
                  onClick={() => setVaultSrsFilter('due')}
                  className={clsx(
                    'px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5',
                    vaultSrsFilter === 'due'
                      ? 'bg-[#00638E] text-white font-bold shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] text-[#334155] dark:text-[#8CB9CC] hover:text-[#0F172A] dark:hover:text-white border border-[#CBD5E1] dark:border-transparent font-medium'
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
                    className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#8CB9CC] px-3 py-1 rounded-full font-bold">
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
                              : 'bg-[#E2ECF2] dark:bg-[#1C1C1C] text-[#004A6B] dark:text-[#BFD8E3]'
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
                          <span className="font-mono text-[10px] bg-rose-500/15 text-rose-700 dark:text-rose-400 px-2 py-0.5 rounded-full font-bold">
                            Salah {item.timesMissed}x
                          </span>
                        )}

                        <span className="text-xs text-[#475569] dark:text-[#7A8992] font-medium">{item.title}</span>
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
                          className="min-h-[44px] text-xs font-mono text-[#00638E] dark:text-[#8CB9CC] hover:underline flex items-center gap-1 cursor-pointer font-semibold px-2"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{isReQuizzing ? 'Tutup Uji Ulang' : 'Uji Ulang (SRS)'}</span>
                        </button>

                        {/* Two-step confirmation for destructive delete */}
                        {confirmDeleteId === item.id ? (
                          <div className="flex items-center gap-2 animate-in fade-in duration-200">
                            <span className="text-xs text-rose-600 dark:text-rose-400 font-mono font-semibold">Hapus?</span>
                            <button
                              onClick={() => {
                                handleRemoveFromVault(item.id);
                                setConfirmDeleteId(null);
                              }}
                              className="min-h-[36px] px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-mono font-medium hover:bg-rose-700 transition-colors"
                            >
                              Ya, Hapus
                            </button>
                            <button
                              onClick={() => setConfirmDeleteId(null)}
                              className="min-h-[36px] px-3 py-1.5 rounded-lg border border-[#CBD5E1] dark:border-white/20 text-xs font-mono text-[#475569] dark:text-[#7A8992] hover:bg-[#F1F5F9] dark:hover:bg-white/5 transition-colors"
                            >
                              Batal
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDeleteId(item.id)}
                            className="min-h-[44px] text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer font-semibold px-2"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Sudah Paham (Hapus)</span>
                          </button>
                        )}
                      </div>

                    </div>

                    <p className="text-base font-serif font-bold text-[#0F172A] dark:text-white leading-relaxed">
                      "{item.question}"
                    </p>

                    {/* Interactive Re-Quiz Form */}
                    {isReQuizzing ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleCheckVaultReQuiz(item, vaultReQuizAnswer);
                        }}
                        className="p-5 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-3 animate-in fade-in duration-200 shadow-2xs"
                      >
                        <span className="font-mono text-[10px] text-[#004A6B] dark:text-[#7A8992] uppercase block font-bold">
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
                          className="w-full p-2.5 text-xs bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 rounded-xl outline-none focus:border-[#00638E] text-[#0F172A] dark:text-white"
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
                                ? 'bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E] text-[#0F172A] dark:text-white font-medium'
                                : 'bg-rose-500/10 border border-rose-300 text-rose-700 dark:text-rose-300 font-medium'
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
                        <div className="p-3.5 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 dark:border-[#8CB9CC]/30 text-xs text-[#0F172A] dark:text-white font-medium">
                          {item.prompt}
                        </div>

                        <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs space-y-1.5 text-[#0F172A] dark:text-white shadow-2xs">
                          <p>
                            <strong className="text-[#00638E] dark:text-[#8CB9CC]">Kunci Jawaban Baku:</strong> {item.correctAnswer}
                          </p>
                          <p className="text-[#1E293B] dark:text-[#BFD8E3] leading-relaxed">
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
  );
}

export default function VaultPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=vault'); }, [router]);
  return null;
}
