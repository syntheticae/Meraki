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
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs">
          <div className="flex items-center gap-3">
            <Link
              href="/exam"
              className="p-2 rounded-xl bg-[#DDD7CA] hover:bg-[#C8C0B0] text-[#1E1B17] transition-colors tactile-btn"
              title="Keluar dari simulasi"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <h1 className="text-base sm:text-lg font-serif font-bold text-[#1E1B17] leading-none">
                {currentExam.title}
              </h1>
              <span className="font-mono text-[11px] text-[#7A7265]">
                {currentExam.difficulty} · {questions.length} Soal
              </span>
            </div>
          </div>

          {/* Timer & Submit Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17]">
              <Clock className="w-3.5 h-3.5 text-[#A84A28]" />
              <span className="font-bold">{timeFormatted}</span>
            </div>

            {!isSubmitted && (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all flex items-center gap-1.5 shadow-xs tactile-btn"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Selesai & Kumpulkan</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile View Switcher Tab (Visible only on < lg screens) */}
        <div className="lg:hidden flex items-center p-1.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] gap-1">
          <button
            onClick={() => setMobileTab('passage')}
            className={clsx(
              'flex-1 py-2 rounded-xl text-xs font-mono font-semibold transition-all tactile-btn flex items-center justify-center gap-1.5',
              mobileTab === 'passage'
                ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs'
                : 'text-[#7A7265] hover:text-[#1E1B17]'
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
                ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs'
                : 'text-[#7A7265] hover:text-[#1E1B17]'
            )}
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Soal No. {currentQuestionIndex + 1}</span>
          </button>
        </div>

        {/* Result Modal Banner if Submitted */}
        {isSubmitted && examResult && (
          <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#A84A28]/40 space-y-4 shadow-md animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#C8C0B0]">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A84A28] font-bold">
                  Hasil Evaluasi Simulasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B17]">
                  Perolehan Skor: <span className="text-[#A84A28]">{examResult.bandOrScore}</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#535841]/20 text-[#535841] font-bold">
                  CEFR {examResult.cefr}
                </span>
                <div className="font-mono text-xs text-[#7A7265]">
                  Akurasi: {examResult.correctCount}/{examResult.totalCount} Soal ({Math.round((examResult.correctCount / examResult.totalCount) * 100)}%)
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#7A7265]">
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
            <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] max-h-[75vh] overflow-y-auto space-y-4 shadow-xs">
              {passage && (
                <div className="space-y-4">
                  <div className="pb-3 border-b border-[#C8C0B0]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] font-semibold">
                      Reading Passage ({passage.wordCount} Kata)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E1B17] mt-1">
                      {passage.title}
                    </h3>
                  </div>
                  <div className="text-sm sm:text-base text-[#1E1B17] leading-relaxed whitespace-pre-line font-serif space-y-3">
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
            <div className="p-3 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] flex flex-wrap gap-2 shadow-xs">
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
                        ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold ring-2 ring-[#A84A28]'
                        : isAnswered
                        ? 'bg-[#A84A28]/20 text-[#A84A28] font-bold'
                        : 'bg-[#DDD7CA] text-[#7A7265] hover:bg-[#C8C0B0]'
                    )}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Active Question Card */}
            {currentQuestion && (
              <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#DDD7CA] text-[#1E1B17] font-semibold">
                    Soal {currentQuestion.questionNumber} dari {questions.length}
                  </span>
                  <span className="font-mono text-xs text-[#7A7265]">
                    Skill: {currentQuestion.skillTested}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-serif font-bold text-[#1E1B17] leading-snug">
                  {currentQuestion.prompt}
                </h4>

                {/* Options */}
                <div className="space-y-2.5">
                  {currentQuestion.options?.map((opt) => {
                    const isSelected = userAnswers[currentQuestion.id] === opt.id;
                    const isCorrect = opt.id === currentQuestion.correctAnswer;

                    let style = 'bg-[#DDD7CA] hover:bg-[#C8C0B0] border-[#C8C0B0] text-[#1E1B17]';
                    if (isSubmitted) {
                      if (isCorrect) {
                        style = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                      } else if (isSelected && !isCorrect) {
                        style = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                      }
                    } else if (isSelected) {
                      style = 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-xs font-semibold';
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
                          <CheckCircle2 className="w-4 h-4 text-[#535841] shrink-0" />
                        )}
                        {isSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-[#A84A28] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation when submitted */}
                {isSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1">
                    <span className="font-mono text-[#A84A28] uppercase font-bold block">
                      Pembahasan Kunci Jawaban:
                    </span>
                    <p className="text-[#524C42] leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Prev / Next Question Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-[#C8C0B0]">
                  <button
                    type="button"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="px-3 py-1.5 rounded-xl bg-[#DDD7CA] text-xs font-mono text-[#7A7265] hover:text-[#1E1B17] disabled:opacity-30 flex items-center gap-1 tactile-btn"
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
                    className="px-3 py-1.5 rounded-xl bg-[#DDD7CA] text-xs font-mono text-[#1E1B17] hover:bg-[#C8C0B0] disabled:opacity-30 flex items-center gap-1 tactile-btn"
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
