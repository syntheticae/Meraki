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
import { MERAKI_CURRICULUM, PracticeQuestion, ErrorCorrectionTask } from '@/data/meraki-data';
import { clsx } from 'clsx';

export function PracticeView() {
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
    <div className="space-y-6">
      {/* Mode Selector & Stats Header */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
              Bank Latihan Terpadu
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
            Uji Pemahaman & Analisis Kesalahan
          </h2>
          <p className="text-xs text-[#475569] dark:text-[#7A8992]">
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
                : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
            )}
          >
            <ListCheck className="w-4 h-4" />
            <span>Pilihan Ganda ({allQuestions.length})</span>
          </button>
          <button
            onClick={() => setActiveMode('doctor')}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all tactile-btn cursor-pointer',
              activeMode === 'doctor'
                ? 'bg-[#00638E] text-white shadow-xs'
                : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
            )}
          >
            <Stethoscope className="w-4 h-4" />
            <span>Bedah Kalimat ({allDoctorTasks.length})</span>
          </button>
        </div>
      </div>

      {/* MODE 1: Multiple Choice Quiz Engine */}
      {activeMode === 'quiz' && (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-[#475569] dark:text-[#7A8992]" />
              <input
                type="text"
                placeholder="Cari topik atau kata kunci soal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-hidden text-[#0F172A] dark:text-[#FFFFFF]"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#475569] dark:text-[#7A8992]">
                Skor: <strong className="text-[#00638E] dark:text-[#8CB9CC]">{score.correct}</strong>/{score.total}
              </span>
              <button
                onClick={() => {
                  setUserAnswers({});
                  setSubmittedQuiz({});
                  setScore({ correct: 0, total: 0 });
                }}
                className="flex items-center gap-1 text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Question Card */}
          {currentQ ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CBD5E1] dark:border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                    Modul {String(currentQ.moduleNumber).padStart(2, '0')}
                  </span>
                  <span className="text-[#475569] dark:text-[#7A8992]">
                    {currentQ.topicTitle}
                  </span>
                </div>
                <span className="text-[#475569] dark:text-[#7A8992]">
                  Soal {currentQuizIndex + 1} dari {filteredQuestions.length}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                  Pertanyaan:
                </span>
                <p className="text-base sm:text-lg font-medium text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentQ.id] === opt;
                  const isAnswered = submittedQuiz[currentQ.id];
                  const isCorrect = opt === currentQ.correctAnswer;

                  let style = 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs';
                  if (isAnswered) {
                    if (isCorrect) {
                      style = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 font-bold';
                    } else if (isSelected) {
                      style = 'bg-rose-50 border-rose-500 text-rose-900 dark:bg-rose-950/40 dark:text-rose-300';
                    } else {
                      style = 'opacity-40 bg-[#F1F5F9] dark:bg-[#1C1C1C] border-[#CBD5E1]';
                    }
                  } else if (isSelected) {
                    style = 'bg-[#00638E] text-white border-[#00638E] font-bold shadow-xs';
                  }

                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectAnswer(opt)}
                      disabled={isAnswered}
                      className={clsx(
                        'p-4 rounded-2xl border text-left text-xs sm:text-sm font-mono transition-all tactile-btn cursor-pointer flex items-center justify-between gap-2',
                        style
                      )}
                    >
                      <span>{opt}</span>
                      {isAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                      {isAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {submittedQuiz[currentQ.id] && (
                <div className="p-4 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-1.5 text-xs shadow-2xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                    <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      Penjelasan & Logika Kaidah:
                    </span>
                  </div>
                  <p className="text-[#334155] dark:text-[#7A8992] leading-relaxed pl-6">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-[#CBD5E1] dark:border-white/10">
                <button
                  onClick={() => setCurrentQuizIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuizIndex === 0}
                  className="px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:border-[#00638E]"
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
            <div className="p-8 text-center text-xs font-mono text-[#475569] dark:text-[#7A8992]">
              Tidak ada soal yang sesuai dengan filter pencarian.
            </div>
          )}
        </div>
      )}

      {/* MODE 2: Sentence Doctor (Bedah Kalimat Salah) */}
      {activeMode === 'doctor' && (
        <div className="space-y-4">
          {currentDoc && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CBD5E1] dark:border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                    Modul {String(currentDoc.moduleNumber).padStart(2, '0')}
                  </span>
                  <span className="text-[#475569] dark:text-[#7A8992]">
                    {currentDoc.topicTitle}
                  </span>
                </div>
                <span className="text-[#475569] dark:text-[#7A8992]">
                  Kasus {currentDoctorIndex + 1} dari {allDoctorTasks.length}
                </span>
              </div>

              {/* Erroneous Sentence Card */}
              <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/25 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 text-xs font-mono font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Kalimat Bermasalah (Salah):</span>
                </div>
                <p className="text-base sm:text-lg font-serif font-semibold text-rose-950 dark:text-rose-200">
                  "{currentDoc.flawedSentence}"
                </p>
                <p className="text-xs text-rose-800 dark:text-rose-300/80 font-mono">
                  Petunjuk Letak Kesalahan: {currentDoc.flawLocation}
                </p>
              </div>

              {/* Reveal Correction Button */}
              {!doctorRevealed[currentDoc.id] ? (
                <button
                  onClick={() => setDoctorRevealed((prev) => ({ ...prev, [currentDoc.id]: true }))}
                  className="w-full py-3.5 rounded-2xl bg-[#00638E] hover:bg-[#004A6B] text-white text-xs font-mono font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Bedah Kalimat & Tampilkan Koreksi Kaidah</span>
                </button>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Correct Sentence Card */}
                  <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Koreksi Sempurna (Gramatikal):</span>
                    </div>
                    <p className="text-base sm:text-lg font-serif font-bold text-emerald-950 dark:text-emerald-200">
                      "{currentDoc.correctedSentence}"
                    </p>
                  </div>

                  {/* Linguistic Explanation */}
                  <div className="p-5 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-2 text-xs shadow-2xs">
                    <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                      Analisis Linguistik & Logika Gramatika:
                    </span>
                    <p className="text-[#334155] dark:text-[#7A8992] leading-relaxed">
                      {currentDoc.linguisticExplanation}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-[#CBD5E1] dark:border-white/10">
                <button
                  onClick={() => setCurrentDoctorIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentDoctorIndex === 0}
                  className="px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:border-[#00638E]"
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
  );
}
