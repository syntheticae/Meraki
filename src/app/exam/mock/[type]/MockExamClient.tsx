'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  Send, 
  RotateCcw, 
  BookOpen, 
  ChevronRight, 
  ChevronLeft,
  FileText,
  ListOrdered
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { SAMPLE_MOCK_EXAMS, calculateIELTSBand, calculateTOEFLScore } from '@/data/mock-exams';
import { progressRepository } from '@/services/storage';
import { clsx } from 'clsx';

export default function MockExamClient({ examType }: { examType: string }) {
  const router = useRouter();

  const currentExam =
    SAMPLE_MOCK_EXAMS.find((e) => e.type === examType) || SAMPLE_MOCK_EXAMS[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(
    currentExam.totalTimeMinutes * 60
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mobileTab, setMobileTab] = useState<'passage' | 'questions'>('questions');
  const [examResult, setExamResult] = useState<{
    correctCount: number;
    totalCount: number;
    bandOrScore: string;
    cefr: string;
  } | null>(null);

  const questions = currentExam.sections[0]?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const passage = currentExam.sections[0]?.passage;

  // Timer countdown
  useEffect(() => {
    if (isSubmitted || timeLeftSeconds <= 0) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeftSeconds]);

  const handleSelectAnswer = (questionId: string, answer: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    let correctCount = 0;
    questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      if (userAns && userAns.trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) {
        correctCount += 1;
      }
    });

    let bandOrScore = '';
    let cefr = 'B2';

    if (currentExam.type === 'ielts') {
      const scaledRaw = Math.round((correctCount / questions.length) * 40);
      const band = calculateIELTSBand(scaledRaw);
      bandOrScore = `Band ${band.bandScore.toFixed(1)}`;
      cefr = band.cefrLevel;
    } else {
      const toefl = calculateTOEFLScore(correctCount, questions.length);
      bandOrScore = `${toefl.scoreOutOf120} / 120`;
      cefr = toefl.cefr;
    }

    const result = {
      correctCount,
      totalCount: questions.length,
      bandOrScore,
      cefr,
    };

    setExamResult(result);
    setIsSubmitted(true);
    setMobileTab('questions');

    // Save to repository
    await progressRepository.saveMockExamResult({
      examId: currentExam.id,
      examTitle: currentExam.title,
      examType: currentExam.type,
      bandOrScore,
      sectionBreakdown: { Reading: correctCount },
    });

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 },
    });
  };

  const minutes = Math.floor(timeLeftSeconds / 60);
  const seconds = timeLeftSeconds % 60;
  const timeFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="min-h-screen bg-[#F4F7F9] dark:bg-[#000000] text-[#141414] dark:text-[#FFFFFF] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-28 sm:pb-36 space-y-6">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 shadow-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/exam"
              className="p-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-[#141414] dark:text-[#FFFFFF] transition-colors tactile-btn"
              title="Keluar dari simulasi"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-base sm:text-lg font-serif font-bold text-[#141414] dark:text-[#FFFFFF] leading-none">
                {currentExam.title}
              </h1>
              <span className="font-mono text-[11px] text-[#50585C] dark:text-[#7A8992]">
                {currentExam.difficulty} · {questions.length} Soal
              </span>
            </div>
          </div>

          {/* Timer & Submit Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 font-mono text-xs text-[#141414] dark:text-[#FFFFFF]">
              <Clock className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
              <span className="font-bold">{timeFormatted}</span>
            </div>

            {!isSubmitted && (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-2xl bg-[#141414] dark:bg-[#00638E] text-white hover:bg-[#00638E] text-white text-white text-xs font-mono font-medium transition-all flex items-center gap-1.5 shadow-xs tactile-btn"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Selesai & Kumpulkan</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile View Switcher Tab (Visible only on < lg screens) */}
        <div className="lg:hidden flex items-center p-1.5 rounded-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 gap-1">
          <button
            onClick={() => setMobileTab('passage')}
            className={clsx(
              'flex-1 py-2 rounded-xl text-xs font-mono font-semibold transition-all tactile-btn flex items-center justify-center gap-1.5',
              mobileTab === 'passage'
                ? 'bg-[#00638E] text-white shadow-xs font-semibold shadow-xs'
                : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF]'
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Teks Bacaan (Passage)</span>
          </button>

          <button
            onClick={() => setMobileTab('questions')}
            className={clsx(
              'flex-1 py-2 rounded-xl text-xs font-mono font-semibold transition-all tactile-btn flex items-center justify-center gap-1.5',
              mobileTab === 'questions'
                ? 'bg-[#00638E] text-white shadow-xs font-semibold shadow-xs'
                : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF]'
            )}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Soal No. {currentQuestionIndex + 1}</span>
          </button>
        </div>

        {/* Result Modal Banner if Submitted */}
        {isSubmitted && examResult && (
          <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#00638E]/40 space-y-4 shadow-md animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#BFD8E3]/40 dark:border-white/10">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC] font-bold">
                  Hasil Evaluasi Simulasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
                  Perolehan Skor: <span className="text-[#00638E] dark:text-[#8CB9CC]">{examResult.bandOrScore}</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#004A6B]/20 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#BFD8E3] font-bold">
                  CEFR {examResult.cefr}
                </span>
                <div className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                  Akurasi: {examResult.correctCount}/{examResult.totalCount} Soal ({Math.round((examResult.correctCount / examResult.totalCount) * 100)}%)
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992]">
              Tinjau penjelasan kunci jawaban per soal pada kolom sebelah kanan untuk memperdalam strategi menjawabmu.
            </p>
          </div>
        )}

        {/* Split Pane View: Passage Left (60%), Questions Right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Academic Reading Passage */}
          <div className={clsx(
            'lg:col-span-7 space-y-4',
            mobileTab === 'questions' ? 'hidden lg:block' : 'block'
          )}>
            <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 max-h-[75vh] overflow-y-auto space-y-4 shadow-xs">
              {passage && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-[#BFD8E3]/40 dark:border-white/10">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#50585C] dark:text-[#7A8992] font-semibold">
                      Reading Passage ({passage.wordCount} Kata)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF] mt-1">
                      {passage.title}
                    </h3>
                  </div>
                  <div className="text-sm sm:text-base text-[#141414] dark:text-[#FFFFFF] leading-relaxed whitespace-pre-line font-serif space-y-3">
                    {passage.text}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Question Navigator & Active Item */}
          <div className={clsx(
            'lg:col-span-5 space-y-4',
            mobileTab === 'passage' ? 'hidden lg:block' : 'block'
          )}>
            {/* Question Number Pills */}
            <div className="p-3 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 flex flex-wrap gap-2 shadow-xs">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isCurrent = idx === currentQuestionIndex;

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(idx);
                      setMobileTab('questions');
                    }}
                    className={clsx(
                      'w-8 h-8 rounded-xl font-mono text-xs transition-all flex items-center justify-center tactile-btn',
                      isCurrent
                        ? 'bg-[#00638E] text-white shadow-xs font-bold ring-2 ring-[#00638E] dark:ring-[#8CB9CC]'
                        : isAnswered
                        ? 'bg-[#00638E]/20 dark:bg-[#00638E]/30 text-[#00638E] dark:text-[#8CB9CC] font-bold'
                        : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B]'
                    )}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Active Question Card */}
            {currentQuestion && (
              <div className="p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#141414] dark:text-[#FFFFFF] font-semibold">
                    Soal {currentQuestion.questionNumber} dari {questions.length}
                  </span>
                  <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                    Skill: {currentQuestion.skillTested}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif font-bold text-[#141414] dark:text-[#FFFFFF] leading-snug">
                  {currentQuestion.prompt}
                </h4>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQuestion.options?.map((opt) => {
                    const isSelected = userAnswers[currentQuestion.id] === opt.id;
                    const isCorrect = opt.id === currentQuestion.correctAnswer;

                    let style = 'bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF]';
                    if (isSubmitted) {
                      if (isCorrect) {
                        style = 'bg-[#004A6B]/20 dark:bg-[#00638E]/25 border-[#004A6B] dark:border-[#00638E] text-[#141414] dark:text-[#FFFFFF] font-bold';
                      } else if (isSelected && !isCorrect) {
                        style = 'bg-[#00638E]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#141414] dark:text-[#FFFFFF]';
                      }
                    } else if (isSelected) {
                      style = 'bg-[#00638E] text-white shadow-xs font-semibold border-[#00638E] shadow-xs font-semibold';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectAnswer(currentQuestion.id, opt.id)}
                        disabled={isSubmitted}
                        className={clsx(
                          'w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm flex items-center justify-between gap-3 transition-all tactile-btn min-h-[44px]',
                          style
                        )}
                      >
                        <span>{opt.text}</span>
                        {isSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-[#004A6B] dark:text-[#BFD8E3] shrink-0" />
                        )}
                        {isSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation when submitted */}
                {isSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-1">
                    <span className="font-mono text-[#00638E] dark:text-[#8CB9CC] uppercase font-bold block">
                      Pembahasan Kunci Jawaban:
                    </span>
                    <p className="text-[#2B2B2B] dark:text-[#BFD8E3] leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Prev / Next Question Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-[#BFD8E3]/40 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-3 py-1.5 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] disabled:opacity-30 flex items-center gap-1 tactile-btn"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentQuestionIndex((prev) =>
                        Math.min(questions.length - 1, prev + 1)
                      )
                    }
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="px-3 py-1.5 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono text-[#141414] dark:text-[#FFFFFF] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] disabled:opacity-30 flex items-center gap-1 tactile-btn"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
