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
  ChevronLeft 
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/exam"
            className="p-2 rounded-full hover:bg-black/05 text-[#82796A] hover:text-[#1A1714]"
            title="Keluar dari simulasi"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-base sm:text-lg font-serif text-[#1A1714] leading-none">
              {currentExam.title}
            </h1>
            <span className="font-mono text-[11px] text-[#82796A]">
              {currentExam.difficulty}
            </span>
          </div>
        </div>

        {/* Timer & Submit Pill */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/03 border border-black/05 font-mono text-xs text-[#1A1714]">
            <Clock className="w-3.5 h-3.5 text-[#C4502A]" />
            <span className="font-semibold">{timeFormatted}</span>
          </div>

          {!isSubmitted && (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-full bg-[#1A1714] hover:bg-[#C4502A] text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Selesai & Kumpulkan</span>
            </button>
          )}
        </div>
      </div>

      {/* Result Modal Banner if Submitted */}
      {isSubmitted && examResult && (
        <GlassCard padded="lg" className="bg-white/95 border-[#C4502A]/30 space-y-4 shadow-md animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/05">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#C4502A] font-semibold">
                Hasil Evaluasi Simulasi
              </span>
              <h2 className="text-3xl font-serif text-[#1A1714]">
                Perolehan Skor: <strong className="text-[#C4502A]">{examResult.bandOrScore}</strong>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="accent">CEFR {examResult.cefr}</Badge>
              <div className="font-mono text-xs text-[#82796A]">
                Akurasi: {examResult.correctCount}/{examResult.totalCount} Soal ({Math.round((examResult.correctCount / examResult.totalCount) * 100)}%)
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#82796A]">
            Tinjau penjelasan kunci jawaban per soal pada kolom sebelah kanan untuk memperdalam strategi menjawabmu.
          </p>
        </GlassCard>
      )}

      {/* Split Pane View: Passage Left (60%), Questions Right (40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Academic Reading Passage */}
        <div className="lg:col-span-7 space-y-4">
          <GlassCard padded="lg" className="bg-white/85 max-h-[75vh] overflow-y-auto space-y-4">
            {passage && (
              <div className="space-y-4">
                <div className="pb-3 border-b border-black/05">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#82796A]">
                    Reading Passage ({passage.wordCount} Kata)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1A1714] mt-1">
                    {passage.title}
                  </h3>
                </div>
                <div className="text-sm sm:text-base text-[#38332C] leading-relaxed whitespace-pre-line font-serif space-y-3">
                  {passage.text}
                </div>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Right Column: Question Navigator & Active Item */}
        <div className="lg:col-span-5 space-y-4">
          {/* Question Number Pills */}
          <div className="p-3 rounded-2xl bg-white/70 border border-white flex flex-wrap gap-2">
            {questions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = idx === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={clsx(
                    'w-8 h-8 rounded-xl font-mono text-xs transition-all flex items-center justify-center',
                    isCurrent
                      ? 'bg-[#1A1714] text-white font-bold ring-2 ring-[#C4502A]'
                      : isAnswered
                      ? 'bg-[#C4502A]/15 text-[#C4502A] font-semibold'
                      : 'bg-black/05 text-[#82796A] hover:bg-black/10'
                  )}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active Question Card */}
          {currentQuestion && (
            <GlassCard padded="md" className="space-y-6 bg-white/90">
              <div className="flex items-center justify-between">
                <Badge variant="outline">
                  Soal {currentQuestion.questionNumber} dari {questions.length}
                </Badge>
                <span className="font-mono text-xs text-[#82796A]">
                  Skill: {currentQuestion.skillTested}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-medium text-[#1A1714] leading-snug">
                {currentQuestion.prompt}
              </h4>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQuestion.options?.map((opt) => {
                  const isSelected = userAnswers[currentQuestion.id] === opt.id;
                  const isCorrect = opt.id === currentQuestion.correctAnswer;

                  let style = 'bg-black/02 hover:bg-black/05 border-black/08 text-[#1A1714]';
                  if (isSubmitted) {
                    if (isCorrect) {
                      style = 'bg-emerald-500/10 border-emerald-500/40 text-emerald-950 font-medium';
                    } else if (isSelected && !isCorrect) {
                      style = 'bg-rose-500/10 border-rose-500/30 text-rose-950';
                    }
                  } else if (isSelected) {
                    style = 'bg-[#1A1714] text-white border-[#1A1714] shadow-xs';
                  }

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectAnswer(currentQuestion.id, opt.id)}
                      disabled={isSubmitted}
                      className={clsx(
                        'w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 transition-all',
                        style
                      )}
                    >
                      <span>{opt.text}</span>
                      {isSubmitted && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation when submitted */}
              {isSubmitted && (
                <div className="p-4 rounded-xl bg-black/03 border border-black/08 text-xs space-y-1">
                  <span className="font-mono text-[#C4502A] uppercase font-bold block">
                    Pembahasan Kunci Jawaban:
                  </span>
                  <p className="text-[#38332C] leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Prev / Next Question Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-black/05">
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="p-2 text-xs font-mono text-[#82796A] hover:text-[#1A1714] disabled:opacity-30 flex items-center gap-1"
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
                  className="p-2 text-xs font-mono text-[#1A1714] hover:text-[#C4502A] disabled:opacity-30 flex items-center gap-1"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}
