'use client';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Volume2,
  Clock,
  Award,
  Layers,
  Sparkles,
  Search,
  Check,
  RotateCcw,
  Headphones,
  FileText,
  X,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { MERAKI_CURRICULUM, LearningTopic, PracticeQuestion } from '@/data/meraki-data';
import { progressRepository } from '@/services/storage';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

function ModuleReaderContent() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get('topic') || 'modul-00a-alphabet-phonetics';

  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopic);
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [isModuleSelectorOpen, setIsModuleSelectorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'reading' | 'quiz'>('reading');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const topicParam = searchParams.get('topic');
    if (topicParam && MERAKI_CURRICULUM.some((t) => t.id === topicParam)) {
      setSelectedTopicId(topicParam);
    }
  }, [searchParams]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('meraki_completed_topics');
      if (stored) setCompletedTopicIds(JSON.parse(stored));
    } catch (e) {}
  }, []);

  const currentTopicIndex = useMemo(() => {
    const idx = MERAKI_CURRICULUM.findIndex((t) => t.id === selectedTopicId);
    return idx >= 0 ? idx : 0;
  }, [selectedTopicId]);

  const currentTopic: LearningTopic = MERAKI_CURRICULUM[currentTopicIndex] || MERAKI_CURRICULUM[0];
  const prevTopic = currentTopicIndex > 0 ? MERAKI_CURRICULUM[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex < MERAKI_CURRICULUM.length - 1 ? MERAKI_CURRICULUM[currentTopicIndex + 1] : null;

  const isCurrentCompleted = completedTopicIds.includes(currentTopic.id);

  const toggleTopicCompleted = () => {
    setCompletedTopicIds((prev) => {
      const isDone = prev.includes(currentTopic.id);
      const next = isDone ? prev.filter((id) => id !== currentTopic.id) : [...prev, currentTopic.id];
      try {
        localStorage.setItem('meraki_completed_topics', JSON.stringify(next));
      } catch (e) {}
      if (!isDone) {
        progressRepository.markLessonComplete(currentTopic.id).catch(() => {});
      }
      return next;
    });
  };

  const handleAnswerSelect = (qId: string, choice: string) => {
    if (submittedQuiz[qId]) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: choice }));
    setSubmittedQuiz((prev) => ({ ...prev, [qId]: true }));
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

  return (
    <div className="space-y-6">
      {/* Top Bar Controls */}
      <div className="p-4 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Module Selector Trigger */}
          <button
            onClick={() => setIsModuleSelectorOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5 text-xs font-mono font-bold hover:border-[#00638E] transition-all truncate max-w-xs sm:max-w-md cursor-pointer"
          >
            <span className="px-2 py-0.5 rounded-md bg-[#00638E] text-white text-[11px]">
              Modul {String(currentTopic.moduleNumber).padStart(2, '0')}
            </span>
            <span className="truncate text-[#141414] dark:text-[#FFFFFF]">{currentTopic.title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#50585C] dark:text-[#7A8992] shrink-0" />
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Audio TTS Button */}
          <button
            onClick={() => playTextToSpeech(currentTopic.title)}
            className="p-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-[#00638E] dark:text-[#8CB9CC] transition-colors cursor-pointer"
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
                : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-[#FFFFFF]'
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isCurrentCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
          </button>

          {/* Stepper Buttons */}
          <div className="flex items-center gap-1 bg-[#EDF3F7] dark:bg-[#1C1C1C] p-1 rounded-xl">
            <button
              onClick={() => prevTopic && setSelectedTopicId(prevTopic.id)}
              disabled={!prevTopic}
              className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-[#FFFFFF] dark:hover:bg-[#141414] text-[#141414] dark:text-[#FFFFFF] transition-colors cursor-pointer disabled:cursor-not-allowed"
              title={prevTopic ? prevTopic.title : 'Awal'}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono px-2 font-bold text-[#141414] dark:text-[#FFFFFF]">
              {currentTopicIndex + 1}/40
            </span>
            <button
              onClick={() => nextTopic && setSelectedTopicId(nextTopic.id)}
              disabled={!nextTopic}
              className="p-1.5 rounded-lg disabled:opacity-30 hover:bg-[#FFFFFF] dark:hover:bg-[#141414] text-[#141414] dark:text-[#FFFFFF] transition-colors cursor-pointer disabled:cursor-not-allowed"
              title={nextTopic ? nextTopic.title : 'Akhir'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-8">
        {/* Module Header */}
        <div className="space-y-4 pb-6 border-b border-[#BFD8E3]/40 dark:border-white/5">
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

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-[#141414] dark:text-[#FFFFFF] leading-tight">
            {currentTopic.title}
          </h1>

          <p className="text-sm sm:text-base text-[#50585C] dark:text-[#7A8992] leading-relaxed max-w-4xl">
            {currentTopic.subtitle}
          </p>
        </div>

        {/* Tab Selector: Reading vs Practice */}
        <div className="flex items-center gap-2 border-b border-[#BFD8E3]/40 dark:border-white/5 pb-2">
          <button
            onClick={() => setActiveTab('reading')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer',
              activeTab === 'reading'
                ? 'bg-[#00638E] text-white shadow-xs'
                : 'text-[#50585C] dark:text-[#7A8992] hover:bg-black/5 dark:hover:bg-white/5'
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
                  : 'text-[#50585C] dark:text-[#7A8992] hover:bg-black/5 dark:hover:bg-white/5'
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
                  className="p-5 sm:p-6 rounded-2xl bg-[#EDF3F7]/60 dark:bg-[#1C1C1C] border border-[#BFD8E3]/30 dark:border-white/5 space-y-4"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#BFD8E3]/30 dark:border-white/5">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
                      {sec.title || `Langkah ${sec.stepNumber}`}
                    </h3>
                    <button
                      onClick={() => playTextToSpeech(sec.title || `Langkah ${sec.stepNumber}`)}
                      className="p-1.5 rounded-lg text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#8CB9CC] transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Prose Explanation */}
                  <div className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm text-[#141414] dark:text-[#FFFFFF] leading-relaxed whitespace-pre-line font-sans">
                    {sec.explanation}
                  </div>

                  {/* Formula if present */}
                  {sec.formula && (
                    <div className="p-3.5 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 text-xs font-mono text-[#00638E] dark:text-[#8CB9CC]">
                      <strong>Rumus:</strong> {sec.formula}
                    </div>
                  )}

                  {/* Examples if present */}
                  {sec.examples && sec.examples.length > 0 && (
                    <div className="p-4 rounded-xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 space-y-2">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC] block">
                        Contoh Kalimat Riil:
                      </span>
                      <ul className="space-y-2">
                        {sec.examples.map((ex, exIdx) => (
                          <li key={exIdx} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                            <div>
                              <span className="font-medium text-[#141414] dark:text-[#FFFFFF] block">
                                {ex.sentence}
                              </span>
                              <span className="text-[11px] text-[#50585C] dark:text-[#7A8992]">
                                {ex.translation}
                              </span>
                            </div>
                            <button
                              onClick={() => playTextToSpeech(ex.sentence)}
                              className="p-1 rounded-md text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] shrink-0 cursor-pointer"
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
            <div className="pt-6 border-t border-[#BFD8E3]/40 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
              {prevTopic ? (
                <button
                  onClick={() => setSelectedTopicId(prevTopic.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono font-semibold hover:border-[#00638E] border border-transparent transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya: {prevTopic.title}</span>
                </button>
              ) : <div />}

              {nextTopic && (
                <button
                  onClick={() => setSelectedTopicId(nextTopic.id)}
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
                  className="p-5 sm:p-6 rounded-2xl bg-[#EDF3F7]/60 dark:bg-[#1C1C1C] border border-[#BFD8E3]/30 dark:border-white/5 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      Soal {qIdx + 1}
                    </span>
                    {isAnswered && (
                      <span className={clsx(
                        'text-xs font-mono font-bold px-2.5 py-0.5 rounded-full',
                        isCorrect ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/20 text-rose-600 dark:text-rose-400'
                      )}>
                        {isCorrect ? '✓ Benar' : '✗ Belum Tepat'}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-[#141414] dark:text-[#FFFFFF]">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selected === opt;
                      const isOptionCorrect = opt === q.correctAnswer;

                      let buttonStyle = 'bg-[#FFFFFF] dark:bg-[#141414] border-[#BFD8E3]/40 dark:border-white/10 hover:border-[#00638E]';
                      if (isAnswered) {
                        if (isOptionCorrect) {
                          buttonStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                        } else if (isOptionSelected) {
                          buttonStyle = 'bg-rose-500/15 border-rose-500 text-rose-800 dark:text-rose-200';
                        } else {
                          buttonStyle = 'bg-[#FFFFFF] dark:bg-[#141414] opacity-50';
                        }
                      } else if (isOptionSelected) {
                        buttonStyle = 'bg-[#00638E] text-white border-[#00638E] font-bold';
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
                    <div className="p-3.5 rounded-xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/5 space-y-1 text-xs">
                      <span className="font-mono font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                        Penjelasan Kaidah:
                      </span>
                      <p className="text-[#50585C] dark:text-[#7A8992] leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
            className="w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-5 border-b border-[#BFD8E3]/40 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                <h3 className="font-serif text-lg font-bold text-[#141414] dark:text-[#FFFFFF]">
                  Katalog 40 Modul Pembelajaran
                </h3>
              </div>
              <button
                onClick={() => setIsModuleSelectorOpen(false)}
                className="p-1.5 rounded-lg text-[#50585C] dark:text-[#7A8992] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 no-scrollbar">
              {stageGroups.map(({ stageName, topics }, sIdx) => (
                <div key={stageName} className="space-y-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC] block">
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
                            setSelectedTopicId(t.id);
                            setIsModuleSelectorOpen(false);
                            setActiveTab('reading');
                          }}
                          className={clsx(
                            'p-3 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between gap-2 cursor-pointer',
                            isSelected
                              ? 'bg-[#00638E] text-white font-bold border-[#00638E]'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] border-[#BFD8E3]/30 dark:border-white/5 hover:border-[#00638E] text-[#141414] dark:text-[#FFFFFF]'
                          )}
                        >
                          <div className="truncate">
                            <span className="opacity-70 mr-1.5">[{String(t.moduleNumber).padStart(2, '0')}]</span>
                            <span>{t.title}</span>
                          </div>
                          {isCompleted && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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

export default function ModulesPage() {
  return (
    <AppShell
      category="Kurikulum Inti"
      title="Modul Materi (40 Bab Lengkap)"
    >
      <Suspense fallback={
        <div className="p-8 text-center text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
          Memuat modul pembelajaran...
        </div>
      }>
        <ModuleReaderContent />
      </Suspense>
    </AppShell>
  );
}
