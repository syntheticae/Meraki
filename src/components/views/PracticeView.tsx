'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  BookOpenCheck,
} from 'lucide-react';
import { MERAKI_CURRICULUM, PracticeQuestion, ErrorCorrectionTask } from '@/data/meraki-data';
import {
  IELTS_PASSAGES,
  IELTS_READING_QUESTIONS,
  IELTSReadingQuestion,
  IELTSPassage,
  IELTSQuestionType,
} from '@/data/ielts-reading-practice';
import { progressRepository } from '@/services/storage';
import { clsx } from 'clsx';

export function PracticeView() {
  const [activeMode, setActiveMode] = useState<'quiz' | 'doctor' | 'ielts'>('quiz');
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

  // IELTS Reading Practice state
  const [ieltsTypeFilter, setIeltsTypeFilter] = useState<IELTSQuestionType | 'all'>('all');
  const [ieltsIndex, setIeltsIndex] = useState(0);
  const [ieltsAnswers, setIeltsAnswers] = useState<Record<string, string>>({});
  const [ieltsSubmitted, setIeltsSubmitted] = useState<Record<string, boolean>>({});
  const [ieltsScore, setIeltsScore] = useState({ correct: 0, total: 0 });
  const [ieltsTextInput, setIeltsTextInput] = useState<Record<string, string>>({});

  const passageMap = useMemo(() => {
    const map: Record<string, IELTSPassage> = {};
    IELTS_PASSAGES.forEach((p) => { map[p.id] = p; });
    return map;
  }, []);

  const filteredIeltsQuestions = useMemo(() => {
    if (ieltsTypeFilter === 'all') return IELTS_READING_QUESTIONS;
    return IELTS_READING_QUESTIONS.filter((q) => q.type === ieltsTypeFilter);
  }, [ieltsTypeFilter]);

  const currentIeltsQ = filteredIeltsQuestions[ieltsIndex] ?? filteredIeltsQuestions[0];

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

  // Reset quiz index whenever filter changes to prevent out-of-bounds (U-C3 fix)
  useEffect(() => {
    setCurrentQuizIndex(0);
  }, [selectedCategory, searchQuery]);

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

    // Record practice score to central storage
    progressRepository.recordPracticeScore(isCorrect ? 1 : 0, 1);

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

  const handleIeltsAnswer = (questionId: string, answer: string) => {
    if (ieltsSubmitted[questionId]) return;
    const q = IELTS_READING_QUESTIONS.find((q) => q.id === questionId);
    if (!q) return;
    const isCorrect = answer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
    setIeltsAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setIeltsSubmitted((prev) => ({ ...prev, [questionId]: true }));
    setIeltsScore((prev) => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1,
    }));
    if (!isCorrect) {
      try {
        const storedVault = localStorage.getItem('meraki_mistake_vault');
        const parsed = storedVault ? JSON.parse(storedVault) : [];
        const newItem = {
          id: questionId,
          type: 'quiz',
          title: `IELTS Reading — ${q.type}`,
          question: q.questionText,
          prompt: `Jawaban Anda: "${answer}" (Salah)`,
          correctAnswer: q.correctAnswer,
          explanation: q.strategyWalkthrough,
          timestamp: Date.now(),
          category: 'IELTS Reading',
        };
        const updated = [newItem, ...parsed.filter((m: any) => m.id !== questionId)];
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

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
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
          <button
            onClick={() => setActiveMode('ielts')}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all tactile-btn cursor-pointer',
              activeMode === 'ielts'
                ? 'bg-[#00638E] text-white shadow-xs'
                : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
            )}
          >
            <BookOpenCheck className="w-4 h-4" />
            <span>IELTS Reading ({IELTS_READING_QUESTIONS.length})</span>
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
                aria-label="Cari topik atau kata kunci soal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none focus:ring-2 focus:ring-[#00638E] focus:ring-offset-1 rounded-lg px-2 py-1 text-[#0F172A] dark:text-[#FFFFFF]"
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

      {/* MODE 3: IELTS Reading Practice */}
      {activeMode === 'ielts' && (
        <div className="space-y-4">
          {/* Type Filter Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-[#475569] dark:text-[#7A8992] font-semibold shrink-0">Tipe Soal:</span>
              {(['all', 'TFNG', 'MatchingHeadings', 'SentenceCompletion', 'SummaryCompletion', 'MatchingFeatures'] as const).map((type) => {
                const labels: Record<string, string> = {
                  all: 'Semua',
                  TFNG: 'True/False/NG',
                  MatchingHeadings: 'Matching Headings',
                  SentenceCompletion: 'Sentence Completion',
                  SummaryCompletion: 'Summary Completion',
                  MatchingFeatures: 'Matching Features',
                };
                return (
                  <button
                    key={type}
                    onClick={() => { setIeltsTypeFilter(type); setIeltsIndex(0); }}
                    className={clsx(
                      'px-3 py-1.5 rounded-xl transition-all cursor-pointer',
                      ieltsTypeFilter === type
                        ? 'bg-[#00638E] text-white font-bold shadow-xs'
                        : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992] hover:text-[#00638E]'
                    )}
                  >
                    {labels[type]}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-[#475569] dark:text-[#7A8992]">
                Skor: <strong className="text-[#00638E] dark:text-[#8CB9CC]">{ieltsScore.correct}</strong>/{ieltsScore.total}
              </span>
              <button
                onClick={() => { setIeltsAnswers({}); setIeltsSubmitted({}); setIeltsScore({ correct: 0, total: 0 }); setIeltsTextInput({}); }}
                className="flex items-center gap-1 text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Question Card */}
          {currentIeltsQ ? ((() => {
            const passage = passageMap[currentIeltsQ.passageId];
            const isSubmitted = ieltsSubmitted[currentIeltsQ.id];
            const userAnswer = ieltsAnswers[currentIeltsQ.id];
            const isCorrect = userAnswer?.trim().toLowerCase() === currentIeltsQ.correctAnswer.trim().toLowerCase();
            const hasOptions = !!currentIeltsQ.options && currentIeltsQ.options.length > 0;

            return (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#CBD5E1] dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                      {currentIeltsQ.type}
                    </span>
                    {passage && (
                      <span className="text-[#475569] dark:text-[#7A8992]">{passage.title}</span>
                    )}
                  </div>
                  <span className="text-[#475569] dark:text-[#7A8992]">
                    Soal {ieltsIndex + 1} dari {filteredIeltsQuestions.length}
                  </span>
                </div>

                {/* Passage Excerpt */}
                {passage && (
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#CBD5E1] dark:border-white/8 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#004A6B] dark:text-[#8CB9CC] uppercase tracking-wider">
                      Passage: {passage.topic}
                    </span>
                    <p className="text-xs sm:text-sm text-[#334155] dark:text-[#BFD8E3] leading-relaxed font-serif line-clamp-6">
                      {passage.body}
                    </p>
                    {currentIeltsQ.keywordHint && (
                      <p className="text-xs font-mono text-[#475569] dark:text-[#7A8992] pt-1">
                        🔍 Scanning hint:{' '}
                        <span className="text-[#00638E] dark:text-[#8CB9CC] font-bold">
                          &quot;{currentIeltsQ.keywordHint}&quot;
                        </span>
                      </p>
                    )}
                  </div>
                )}

                {/* Question */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC] font-bold">
                    Pertanyaan:
                  </span>
                  <p className="text-base sm:text-lg font-medium text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed">
                    {currentIeltsQ.questionText}
                  </p>
                </div>

                {/* Answer Options */}
                {hasOptions && (
                  <div className="grid grid-cols-1 gap-2">
                    {currentIeltsQ.options!.map((opt) => {
                      const isSelected = userAnswer === opt;
                      const isThisCorrect = opt === currentIeltsQ.correctAnswer;
                      let style = 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF]';
                      if (isSubmitted) {
                        if (isThisCorrect) style = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 font-bold';
                        else if (isSelected) style = 'bg-rose-50 border-rose-500 text-rose-900 dark:bg-rose-950/40 dark:text-rose-300';
                        else style = 'opacity-40 bg-[#F1F5F9] dark:bg-[#1C1C1C] border-[#CBD5E1]';
                      } else if (isSelected) {
                        style = 'bg-[#00638E] text-white border-[#00638E] font-bold shadow-xs';
                      }
                      return (
                        <button
                          key={opt}
                          onClick={() => handleIeltsAnswer(currentIeltsQ.id, opt)}
                          disabled={isSubmitted}
                          className={clsx(
                            'p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-mono transition-all tactile-btn cursor-pointer flex items-center justify-between gap-2',
                            style
                          )}
                        >
                          <span>{opt}</span>
                          {isSubmitted && isThisCorrect && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                          {isSubmitted && isSelected && !isThisCorrect && <X className="w-4 h-4 text-rose-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Text Input for completion questions */}
                {!hasOptions && !isSubmitted && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ketik jawaban dari passage (maks. 3 kata)..."
                      aria-label="Jawaban soal IELTS"
                      value={ieltsTextInput[currentIeltsQ.id] ?? ''}
                      onChange={(e) => setIeltsTextInput((prev) => ({ ...prev, [currentIeltsQ.id]: e.target.value }))}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const val = (ieltsTextInput[currentIeltsQ.id] ?? '').trim();
                          if (val) handleIeltsAnswer(currentIeltsQ.id, val.toLowerCase());
                        }
                      }}
                      className="w-full px-4 py-3 rounded-2xl border border-[#CBD5E1] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#1C1C1C] text-[#0F172A] dark:text-[#FFFFFF] text-sm font-mono outline-none focus:ring-2 focus:ring-[#00638E] transition-all"
                    />
                    <button
                      onClick={() => {
                        const val = (ieltsTextInput[currentIeltsQ.id] ?? '').trim();
                        if (val) handleIeltsAnswer(currentIeltsQ.id, val.toLowerCase());
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] shadow-xs cursor-pointer transition-all"
                    >
                      Jawab →
                    </button>
                  </div>
                )}

                {/* Text Input answered (show answer) */}
                {!hasOptions && isSubmitted && (
                  <div className="p-3.5 rounded-2xl border border-[#CBD5E1] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#1C1C1C] text-xs font-mono">
                    <span className="text-[#475569] dark:text-[#7A8992]">Jawaban Anda: </span>
                    <span className={isCorrect ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                      &quot;{userAnswer}&quot;
                    </span>
                    {!isCorrect && (
                      <span className="text-[#475569] dark:text-[#7A8992]"> → Benar: <span className="text-emerald-600 font-bold">&quot;{currentIeltsQ.correctAnswer}&quot;</span></span>
                    )}
                  </div>
                )}

                {/* Post-submit Strategy Walkthrough */}
                {isSubmitted && (
                  <div className={clsx(
                    'p-5 rounded-2xl border space-y-3 animate-in fade-in duration-300',
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-500/30'
                      : 'bg-rose-50 dark:bg-rose-950/30 border-rose-500/30'
                  )}>
                    <div className="flex items-center gap-2">
                      {isCorrect
                        ? <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        : <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      }
                      <span className={clsx(
                        'font-mono font-bold text-sm',
                        isCorrect ? 'text-emerald-800 dark:text-emerald-300' : 'text-rose-800 dark:text-rose-300'
                      )}>
                        {isCorrect ? '✓ Jawaban Benar!' : `✗ Jawaban Salah`}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                        📋 Strategi & Penjelasan:
                      </span>
                      <p className="text-[#334155] dark:text-[#BFD8E3] leading-relaxed">
                        {currentIeltsQ.strategyWalkthrough}
                      </p>
                    </div>
                    {!isCorrect && currentIeltsQ.trapExplanation && (
                      <div className="pt-2 border-t border-rose-200 dark:border-rose-800/40 space-y-1 text-xs">
                        <span className="font-mono font-bold text-rose-700 dark:text-rose-400 block">
                          ⚠️ Jebakan yang Perlu Diwaspadai:
                        </span>
                        <p className="text-rose-800 dark:text-rose-300 leading-relaxed">
                          {currentIeltsQ.trapExplanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4 border-t border-[#CBD5E1] dark:border-white/10">
                  <button
                    onClick={() => setIeltsIndex((prev) => Math.max(0, prev - 1))}
                    disabled={ieltsIndex === 0}
                    className="px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#FFFFFF] text-xs font-mono disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed hover:border-[#00638E]"
                  >
                    ← Soal Sebelumnya
                  </button>
                  <button
                    onClick={() => setIeltsIndex((prev) => Math.min(filteredIeltsQuestions.length - 1, prev + 1))}
                    disabled={ieltsIndex >= filteredIeltsQuestions.length - 1}
                    className="px-5 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed shadow-xs"
                  >
                    Soal Berikutnya →
                  </button>
                </div>
              </div>
            );
          })()) : (
            <div className="p-8 text-center text-xs font-mono text-[#475569] dark:text-[#7A8992]">
              Belum ada soal untuk tipe ini.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
