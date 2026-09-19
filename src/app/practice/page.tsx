'use client';

import React, { useState, useMemo } from 'react';
import {
  ListCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  Search,
  Filter,
  ArrowRight,
  RotateCcw,
  Check,
  X,
  Stethoscope,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { MERAKI_CURRICULUM, PracticeQuestion, ErrorCorrectionTask } from '@/data/meraki-data';
import { clsx } from 'clsx';

export default function PracticeHubPage() {
  const [activeMode, setActiveMode] = useState<'quiz' | 'doctor'>('quiz');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect all practice questions across all 40 topics
  const allQuestions = useMemo(() => {
    const list: (PracticeQuestion & { topicTitle: string; moduleNumber: number | string })[] = [];
    MERAKI_CURRICULUM.forEach((topic) => {
      topic.questions?.forEach((q) => {
        list.push({ ...q, topicTitle: topic.title, moduleNumber: topic.moduleNumber });
      });
    });
    return list;
  }, []);

  // Collect all error correction tasks
  const allDoctorTasks = useMemo(() => {
    const list: (ErrorCorrectionTask & { topicTitle: string; moduleNumber: number | string })[] = [];
    MERAKI_CURRICULUM.forEach((topic) => {
      topic.errorCorrectionTasks?.forEach((task) => {
        list.push({ ...task, topicTitle: topic.title, moduleNumber: topic.moduleNumber });
      });
    });
    return list;
  }, []);

  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // Doctor state
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);
  const [doctorRevealed, setDoctorRevealed] = useState<Record<string, boolean>>({});

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchCat = selectedCategory === 'all' || q.category === selectedCategory;
      const matchSearch =
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topicTitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [allQuestions, selectedCategory, searchQuery]);

  const currentQ = filteredQuestions[currentQuizIndex] || filteredQuestions[0];
  const currentDoc = allDoctorTasks[currentDoctorIndex] || allDoctorTasks[0];

  const handleSelectAnswer = (choice: string) => {
    if (!currentQ || submittedQuiz[currentQ.id]) return;
    const isCorrect = choice === currentQ.correctAnswer;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: choice }));
    setSubmittedQuiz((prev) => ({ ...prev, [currentQ.id]: true }));
    setScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
    }));

    // If incorrect, record in Mistake Vault!
    if (!isCorrect) {
      try {
        const storedVault = localStorage.getItem('meraki_mistake_vault');
        const parsed = storedVault ? JSON.parse(storedVault) : [];
        const newItem = {
          id: currentQ.id,
          type: 'quiz',
          title: currentQ.topicTitle,
          question: currentQ.question,
          prompt: `Pilihan Anda: "${choice}" (Salah)`,
          correctAnswer: currentQ.correctAnswer,
          explanation: currentQ.explanation,
          timestamp: Date.now(),
          category: currentQ.category,
        };
        const updated = [newItem, ...parsed.filter((m: any) => m.id !== currentQ.id)];
        localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
      } catch (e) {}
    }
  };

  return (
    <AppShell
      category="Kurikulum & Evaluasi"
      title="Latihan & Bedah Soal Akademik"
    >
      <div className="space-y-6">
        {/* Mode Selector & Stats Header */}
        <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC]">
                Bank Latihan Terpadu
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
              Uji Pemahaman & Analisis Kesalahan
            </h2>
            <p className="text-xs text-[#50585C] dark:text-[#7A8992]">
              Setiap jawaban keliru otomatis tersimpan ke Bank Khilaf untuk pengulangan berkala.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setActiveMode('quiz')}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all tactile-btn cursor-pointer',
                activeMode === 'quiz'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-[#FFFFFF]'
              )}
            >
              <ListCheck className="w-4 h-4" />
              <span>Pilihan Ganda</span>
            </button>
            <button
              onClick={() => setActiveMode('doctor')}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all tactile-btn cursor-pointer',
                activeMode === 'doctor'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-[#FFFFFF]'
              )}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Sentence Doctor</span>
            </button>
          </div>
        </div>

        {/* Mode 1: Multiple Choice Quiz */}
        {activeMode === 'quiz' && (
          <div className="space-y-6">
            {/* Filters Bar */}
            <div className="p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#50585C] dark:text-[#7A8992]">Kategori:</span>
                {['all', 'Word Classes', 'Sentence Architecture', 'Tenses Logic', 'Complex Structures'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setCurrentQuizIndex(0);
                    }}
                    className={clsx(
                      'px-3 py-1 rounded-lg transition-all cursor-pointer',
                      selectedCategory === cat
                        ? 'bg-[#00638E] text-white font-bold'
                        : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:bg-[#BFD8E3]/30'
                    )}
                  >
                    {cat === 'all' ? 'Semua Kategori' : cat}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#50585C] dark:text-[#7A8992]">Skor Sesi:</span>
                <span className="font-bold text-[#00638E] dark:text-[#8CB9CC]">
                  {score.correct}/{score.total} Benar
                </span>
              </div>
            </div>

            {/* Question Card */}
            {currentQ ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#BFD8E3]/40 dark:border-white/5 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#00638E] dark:text-[#8CB9CC] font-bold">
                      {currentQ.category}
                    </span>
                    <span className="text-[#50585C] dark:text-[#7A8992]">
                      Modul {String(currentQ.moduleNumber).padStart(2, '0')}: {currentQ.topicTitle}
                    </span>
                  </div>
                  <span className="text-[#50585C] dark:text-[#7A8992]">
                    Soal {currentQuizIndex + 1} dari {filteredQuestions.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {currentQ.context && (
                    <div className="p-3.5 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/30 dark:border-white/5 text-xs text-[#50585C] dark:text-[#7A8992] italic">
                      {currentQ.context}
                    </div>
                  )}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#141414] dark:text-[#FFFFFF] leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt) => {
                    const isSelected = userAnswers[currentQ.id] === opt;
                    const isSubmitted = submittedQuiz[currentQ.id];
                    const isCorrect = opt === currentQ.correctAnswer;

                    let btnClass = 'bg-[#EDF3F7] dark:bg-[#1C1C1C] border-[#BFD8E3]/40 dark:border-white/5 hover:border-[#00638E] text-[#141414] dark:text-[#FFFFFF]';
                    if (isSubmitted) {
                      if (isCorrect) {
                        btnClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                      } else if (isSelected) {
                        btnClass = 'bg-rose-500/20 border-rose-500 text-rose-800 dark:text-rose-200';
                      } else {
                        btnClass = 'bg-[#EDF3F7] dark:bg-[#1C1C1C] opacity-40';
                      }
                    } else if (isSelected) {
                      btnClass = 'bg-[#00638E] text-white font-bold border-[#00638E]';
                    }

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(opt)}
                        disabled={isSubmitted}
                        className={clsx(
                          'p-4 rounded-2xl border text-left text-xs font-mono transition-all tactile-btn cursor-pointer',
                          btnClass
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {submittedQuiz[currentQ.id] && (
                  <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5 space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">
                        Kaidah & Pembahasan:
                      </span>
                      {currentQ.ruleReference && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[#50585C] dark:text-[#7A8992]">
                          Ref: {currentQ.ruleReference}
                        </span>
                      )}
                    </div>
                    <p className="text-[#141414] dark:text-[#FFFFFF] leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                )}

                {/* Next / Prev Stepper */}
                <div className="flex items-center justify-between pt-4 border-t border-[#BFD8E3]/40 dark:border-white/5">
                  <button
                    onClick={() => setCurrentQuizIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuizIndex === 0}
                    className="px-4 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  >
                    ← Soal Sebelumnya
                  </button>
                  <button
                    onClick={() => setCurrentQuizIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
                    disabled={currentQuizIndex >= filteredQuestions.length - 1}
                    className="px-5 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    Soal Berikutnya →
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
                Tidak ada soal yang sesuai dengan filter.
              </div>
            )}
          </div>
        )}

        {/* Mode 2: Sentence Doctor (Error Correction) */}
        {activeMode === 'doctor' && (
          <div className="space-y-6">
            {currentDoc && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#BFD8E3]/40 dark:border-white/5 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#00638E] dark:text-[#8CB9CC] font-bold">
                    Bedah Kesalahan Gramatika ({currentDoctorIndex + 1}/{allDoctorTasks.length})
                  </span>
                  <span className="text-[#50585C] dark:text-[#7A8992]">
                    Modul {String(currentDoc.moduleNumber).padStart(2, '0')}: {currentDoc.topicTitle}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#50585C] dark:text-[#7A8992] block">
                    Kalimat Mengandung Kesalahan:
                  </span>
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-900 dark:text-rose-200 font-mono text-sm sm:text-base">
                    "{currentDoc.flawedSentence}"
                  </div>
                  <p className="text-xs text-[#50585C] dark:text-[#7A8992]">
                    Lokasi letak kesalahan: <strong>{currentDoc.flawLocation}</strong>
                  </p>
                </div>

                <button
                  onClick={() =>
                    setDoctorRevealed((prev) => ({
                      ...prev,
                      [currentDoc.id]: !prev[currentDoc.id],
                    }))
                  }
                  className="px-5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer shadow-xs"
                >
                  {doctorRevealed[currentDoc.id] ? 'Sembunyikan Pembahasan' : 'Bedah & Tampilkan Perbaikan'}
                </button>

                {doctorRevealed[currentDoc.id] && (
                  <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5 space-y-3 animate-in fade-in text-xs">
                    <div>
                      <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                        ✓ Kalimat Standar Baku (Corrected):
                      </span>
                      <p className="font-mono text-sm text-[#141414] dark:text-[#FFFFFF] bg-white dark:bg-[#141414] p-3 rounded-xl border border-[#BFD8E3]/30 dark:border-white/5">
                        "{currentDoc.correctedSentence}"
                      </p>
                    </div>

                    <div>
                      <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block mb-1">
                        Analisis Linguistik & Logika Gramatika:
                      </span>
                      <p className="text-[#50585C] dark:text-[#7A8992] leading-relaxed">
                        {currentDoc.linguisticExplanation}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-[#BFD8E3]/40 dark:border-white/5">
                  <button
                    onClick={() => setCurrentDoctorIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentDoctorIndex === 0}
                    className="px-4 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                  >
                    ← Kasus Sebelumnya
                  </button>
                  <button
                    onClick={() => setCurrentDoctorIndex((prev) => Math.min(allDoctorTasks.length - 1, prev + 1))}
                    disabled={currentDoctorIndex >= allDoctorTasks.length - 1}
                    className="px-5 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    Kasus Berikutnya →
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </AppShell>
  );
}
