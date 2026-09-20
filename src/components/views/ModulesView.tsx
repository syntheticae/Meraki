'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Volume2,
  Clock,
  Check,
  X,
  Trophy,
  RotateCcw,
} from 'lucide-react';
import { MERAKI_CURRICULUM, LearningTopic } from '@/data/meraki-data';
import { progressRepository } from '@/services/storage';
import { playTextToSpeech } from '@/services/speech';
import { useAppStore } from '@/stores/useAppStore';
import { clsx } from 'clsx';

interface ModulesViewProps {
  initialTopicId?: string;
  onTopicChange?: (topicId: string) => void;
}

export function ModulesView({ initialTopicId, onTopicChange }: ModulesViewProps) {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || 'modul-00a-alphabet-phonetics'
  );
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'reading' | 'quiz'>('reading');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<string, boolean>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  const setLastViewedTopicId = useAppStore((s) => s.setLastViewedTopicId);

  // Load progress from unified repository
  useEffect(() => {
    progressRepository.getProgress().then((p) => {
      setCompletedTopicIds(p.completedTopics ?? []);
    });
  }, []);

  useEffect(() => {
    if (initialTopicId && MERAKI_CURRICULUM.some((t) => t.id === initialTopicId)) {
      setSelectedTopicId(initialTopicId);
    }
  }, [initialTopicId]);

  // Reset quiz state when topic changes
  useEffect(() => {
    setActiveTab('reading');
    setUserAnswers({});
    setSubmittedQuiz({});
    setQuizFinished(false);
  }, [selectedTopicId]);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setLastViewedTopicId(topicId);
    progressRepository.updateLastViewedTopic(topicId);
    if (onTopicChange) onTopicChange(topicId);
  };

  const currentTopicIndex = useMemo(() => {
    const idx = MERAKI_CURRICULUM.findIndex((t) => t.id === selectedTopicId);
    return idx >= 0 ? idx : 0;
  }, [selectedTopicId]);

  const currentTopic: LearningTopic = MERAKI_CURRICULUM[currentTopicIndex] || MERAKI_CURRICULUM[0];
  const prevTopic = currentTopicIndex > 0 ? MERAKI_CURRICULUM[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < MERAKI_CURRICULUM.length - 1 ? MERAKI_CURRICULUM[currentTopicIndex + 1] : null;

  const isCurrentCompleted = completedTopicIds.includes(currentTopic.id);

  const toggleTopicCompleted = async () => {
    if (isCurrentCompleted) {
      const updated = await progressRepository.unmarkTopicComplete(currentTopic.id);
      setCompletedTopicIds(updated.completedTopics ?? []);
    } else {
      const updated = await progressRepository.markTopicComplete(currentTopic.id);
      setCompletedTopicIds(updated.completedTopics ?? []);
    }
  };

  const handleAnswerSelect = async (qId: string, choice: string) => {
    if (submittedQuiz[qId]) return;
    const newAnswers = { ...userAnswers, [qId]: choice };
    const newSubmitted = { ...submittedQuiz, [qId]: true };
    setUserAnswers(newAnswers);
    setSubmittedQuiz(newSubmitted);

    // Check if all questions answered
    const allQuestions = currentTopic.questions ?? [];
    const allAnswered = allQuestions.every((q) => newSubmitted[q.id]);
    if (allAnswered && allQuestions.length > 0) {
      setQuizFinished(true);
      // Auto-vault wrong answers
      const wrongItems = allQuestions
        .filter((q) => newAnswers[q.id] !== q.correctAnswer)
        .map((q) => ({
          sourceType: 'module-quiz' as const,
          question: q.question,
          correctAnswer: q.correctAnswer,
          userAnswer: newAnswers[q.id],
          topicTitle: currentTopic.title,
        }));
      if (wrongItems.length > 0) {
        await progressRepository.addToVault(wrongItems);
      }
    }
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setSubmittedQuiz({});
    setQuizFinished(false);
  };

  // Group modules by stages
  const stageGroups = useMemo(() => {
    const map = new Map<string, LearningTopic[]>();
    MERAKI_CURRICULUM.forEach((topic) => {
      const list = map.get(topic.stageName) || [];
      list.push(topic);
      map.set(topic.stageName, list);
    });
    return Array.from(map.entries()).map(([stageName, topics]) => ({ stageName, topics }));
  }, []);

  // Quiz score computation
  const quizScore = useMemo(() => {
    const questions = currentTopic.questions ?? [];
    if (questions.length === 0) return null;
    const correct = questions.filter((q) => userAnswers[q.id] === q.correctAnswer).length;
    return { correct, total: questions.length, pct: Math.round((correct / questions.length) * 100) };
  }, [userAnswers, currentTopic]);

  return (
    <div className="space-y-6">
      {/* Top Bar Controls */}
      <div className="p-4 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Module Selector Trigger */}
          <button
            onClick={() => setIsModuleSelectorOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono font-bold hover:border-[#00638E] transition-all truncate max-w-xs sm:max-w-md cursor-pointer"
          >
            <span className="px-2 py-0.5 rounded-md bg-[#00638E] text-white text-[11px]">
              Modul {String(currentTopic.moduleNumber).padStart(2, '0')}
            </span>
            <span className="truncate text-[#0F172A] dark:text-[#FFFFFF]">{currentTopic.title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#475569] dark:text-[#7A8992] shrink-0" />
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Audio TTS Button */}
          <button
            onClick={() => playTextToSpeech(currentTopic.title)}
            className="p-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-[#00638E] dark:text-[#8CB9CC] transition-colors cursor-pointer"
            title="Dengarkan Pelafalan Judul Modul"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Mark Completed Button */}
          <button
            onClick={toggleTopicCompleted}
            className={clsx(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer',
              isCurrentCompleted
                ? 'bg-[#00638E] text-white shadow-xs'
                : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isCurrentCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
          </button>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-1 bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 p-1 rounded-xl">
            <button
              onClick={() => prevTopic && handleSelectTopic(prevTopic.id)}
              disabled={!prevTopic}
              className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-white dark:hover:bg-[#141414] text-[#0F172A] dark:text-[#FFFFFF] transition-colors cursor-pointer disabled:cursor-not-allowed"
              title={prevTopic ? prevTopic.title : 'Awal'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-2 font-bold text-[#0F172A] dark:text-[#FFFFFF]">
              {currentTopicIndex + 1}/40
            </span>
            <button
              onClick={() => nextTopic && handleSelectTopic(nextTopic.id)}
              disabled={!nextTopic}
              className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-white dark:hover:bg-[#141414] text-[#0F172A] dark:text-[#FFFFFF] transition-colors cursor-pointer disabled:cursor-not-allowed"
              title={nextTopic ? nextTopic.title : 'Akhir'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-8">
        {/* Module Header */}
        <div className="space-y-4 pb-6 border-b border-[#CBD5E1] dark:border-white/10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#00638E] dark:text-[#8CB9CC] text-xs font-mono font-bold uppercase">
              {currentTopic.stageName}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
              <Clock className="w-3.5 h-3.5" /> ~{currentTopic.estimatedMinutes} menit baca
            </span>
            {currentTopic.prerequisite && (
              <span className="text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
                Prasyarat: {currentTopic.prerequisite}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#0F172A] dark:text-[#FFFFFF] leading-tight">
            {currentTopic.title}
          </h1>

          <p className="text-sm sm:text-base text-[#334155] dark:text-[#7A8992] leading-relaxed max-w-4xl">
            {currentTopic.subtitle}
          </p>
        </div>

        {/* Tab Selector: Reading vs Practice */}
        <div className="flex items-center gap-2 border-b border-[#CBD5E1] dark:border-white/10 pb-2">
          <button
            onClick={() => setActiveTab('reading')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer',
              activeTab === 'reading'
                ? 'bg-[#00638E] text-white shadow-xs'
                : 'text-[#334155] dark:text-[#7A8992] hover:bg-[#F1F5F9] dark:hover:bg-white/5'
            )}
          >
            📖 Materi Lengkap
          </button>
          {currentTopic.questions && currentTopic.questions.length > 0 && (
            <button
              onClick={() => setActiveTab('quiz')}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer',
                activeTab === 'quiz'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'text-[#334155] dark:text-[#7A8992] hover:bg-[#F1F5F9] dark:hover:bg-white/5'
              )}
            >
              ✍ Latihan Soal ({currentTopic.questions.length})
            </button>
          )}
        </div>

        {/* Tab 1: Reading View */}
        {activeTab === 'reading' && (
          <div className="space-y-8">
            {/* Sections */}
            <div className="space-y-6">
              {currentTopic.sections.map((sec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4 shadow-2xs"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1] dark:border-white/10">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                      {sec.title || `Langkah ${sec.stepNumber}`}
                    </h3>
                    <button
                      onClick={() => playTextToSpeech(sec.title || `Langkah ${sec.stepNumber}`)}
                      className="p-1.5 rounded-lg text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#8CB9CC] transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Prose Explanation */}
                  <div className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed whitespace-pre-line font-sans">
                    {sec.explanation}
                  </div>

                  {/* Formula if present */}
                  {sec.formula && (
                    <div className="p-3.5 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 text-xs font-mono text-[#004A6B] dark:text-[#8CB9CC] font-semibold">
                      <strong>Rumus:</strong> {sec.formula}
                    </div>
                  )}

                  {/* Examples if present */}
                  {sec.examples && sec.examples.length > 0 && (
                    <div className="p-4 rounded-xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-2 shadow-2xs">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC] block">
                        Contoh Kalimat Riil:
                      </span>
                      <ul className="space-y-2">
                        {sec.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                            <div>
                              <span className="font-semibold text-[#0F172A] dark:text-[#FFFFFF] block">
                                {ex.sentence}
                              </span>
                              <span className="text-[11px] text-[#475569] dark:text-[#7A8992]">
                                {ex.translation}
                              </span>
                            </div>
                            <button
                              onClick={() => playTextToSpeech(ex.sentence)}
                              className="p-1 rounded-md text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] shrink-0 cursor-pointer"
                              title="Dengarkan pengucapan"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Navigation */}
            <div className="pt-6 border-t border-[#CBD5E1] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              {prevTopic ? (
                <button
                  onClick={() => handleSelectTopic(prevTopic.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono font-semibold hover:border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya: {prevTopic.title}</span>
                </button>
              ) : <div />}

              {nextTopic && (
                <button
                  onClick={() => handleSelectTopic(nextTopic.id)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer shadow-xs"
                >
                  <span>Lanjut: {nextTopic.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Quiz View */}
        {activeTab === 'quiz' && currentTopic.questions && (
          <div className="space-y-6">
            {currentTopic.questions.map((q, qIdx) => {
              const selected = userAnswers[q.id];
              const isAnswered = submittedQuiz[q.id];
              const isCorrect = selected === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      Soal {qIdx + 1}
                    </span>
                    {isAnswered && (
                      <span className={clsx(
                        'text-xs font-mono font-bold px-2.5 py-0.5 rounded-full',
                        isCorrect ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' : 'bg-rose-500/20 text-rose-700 dark:text-rose-400'
                      )}>
                        {isCorrect ? '✓ Benar' : '✗ Belum Tepat'}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-[#0F172A] dark:text-[#FFFFFF]">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selected === opt;
                      const isOptionCorrect = opt === q.correctAnswer;

                      let buttonStyle = 'bg-white dark:bg-[#141414] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs';
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 font-bold';
                        } else if (isOptionSelected) {
                          buttonStyle = 'bg-rose-50 border-rose-500 text-rose-900 dark:bg-rose-950/40 dark:text-rose-300 opacity-90';
                        } else {
                          buttonStyle = 'bg-[#F1F5F9] dark:bg-[#141414] opacity-50 border-[#CBD5E1]';
                        }
                      } else if (isOptionSelected) {
                        buttonStyle = 'bg-[#00638E] text-white border-[#00638E] font-bold shadow-xs';
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswerSelect(q.id, opt)}
                          disabled={isAnswered}
                          className={clsx(
                            'p-3 rounded-xl border text-left text-xs font-mono transition-all tactile-btn cursor-pointer',
                            buttonStyle
                          )}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-1 text-xs shadow-2xs">
                      <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                        Penjelasan Kaidah:
                      </span>
                      <p className="text-[#334155] dark:text-[#7A8992] leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quiz Score Summary — shown when all questions answered */}
            {quizFinished && quizScore && (
              <div className="p-5 sm:p-6 rounded-2xl border-2 border-[#00638E]/50 bg-white dark:bg-[#141414] space-y-4 animate-in fade-in duration-300 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#00638E] flex items-center justify-center shrink-0 shadow-xs">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#7A8992]">
                      Hasil Latihan Soal
                    </p>
                    <h3 className="font-serif font-bold text-lg text-[#0F172A] dark:text-[#FFFFFF]">
                      {quizScore.correct} / {quizScore.total} Benar — {quizScore.pct}%
                    </h3>
                  </div>
                  <span className={clsx(
                    'ml-auto px-3 py-1 rounded-xl text-xs font-mono font-bold',
                    quizScore.pct >= 80
                      ? 'bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/25'
                      : quizScore.pct >= 60
                      ? 'bg-[#E2ECF2] text-[#004A6B] dark:text-[#BFD8E3]'
                      : 'bg-black/10 dark:bg-white/10 text-[#475569] dark:text-[#7A8992]'
                  )}>
                    {quizScore.pct >= 80 ? 'Luar Biasa!' : quizScore.pct >= 60 ? 'Cukup Baik' : 'Perlu Latihan'}
                  </span>
                </div>

                {quizScore.correct < quizScore.total && (
                  <p className="text-xs text-[#334155] dark:text-[#7A8992] font-mono">
                    {quizScore.total - quizScore.correct} soal yang salah telah otomatis disimpan ke <strong className="text-[#00638E] dark:text-[#8CB9CC]">Bank Khilaf</strong> untuk ulasan berkala.
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono font-semibold text-[#0F172A] dark:text-[#FFFFFF] hover:border-[#00638E] transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Coba Lagi</span>
                  </button>
                  {nextTopic && (
                    <button
                      type="button"
                      onClick={() => handleSelectTopic(nextTopic.id)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer shadow-xs"
                    >
                      <span>Lanjut Modul Berikutnya</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>


      {/* Module Selector Modal Drawer */}
      {isModuleSelectorOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsModuleSelectorOpen(false)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-[#CBD5E1] dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                <h3 className="font-serif text-lg font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                  Katalog 40 Modul Pembelajaran
                </h3>
              </div>
              <button
                onClick={() => setIsModuleSelectorOpen(false)}
                className="p-1.5 rounded-lg text-[#475569] dark:text-[#7A8992] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 no-scrollbar">
              {stageGroups.map(({ stageName, topics }, sIdx) => (
                <div key={stageName} className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC] block">
                    Tahap {sIdx}: {stageName}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topics.map((t) => {
                      const isSelected = t.id === selectedTopicId;
                      const isCompleted = completedTopicIds.includes(t.id);

                      return (
                        <button
                          key={t.id}
                          onClick={() => {
                            handleSelectTopic(t.id);
                            setIsModuleSelectorOpen(false);
                            setActiveTab('reading');
                          }}
                          className={clsx(
                            'p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between gap-2 cursor-pointer shadow-2xs',
                            isSelected
                              ? 'bg-[#00638E] text-white font-bold border-[#00638E]'
                              : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] hover:bg-white text-[#0F172A] dark:text-[#FFFFFF]'
                          )}
                        >
                          <div className="truncate">
                            <span className="opacity-70 mr-1.5">[{String(t.moduleNumber).padStart(2, '0')}]</span>
                            <span>{t.title}</span>
                          </div>
                          {isCompleted && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
