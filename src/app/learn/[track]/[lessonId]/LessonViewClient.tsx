'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  ListCheck,
  Lightbulb,
  CheckCircle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Volume2,
  Sparkles,
  ArrowLeft,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AppShell } from '@/components/layout/AppShell';
import { getLessonBySlug } from '@/data/tracks';
import { progressRepository } from '@/services/storage';
import { playTextToSpeech } from '@/services/speech';
import { MultipleChoice } from '@/components/exercises/MultipleChoice';
import { FillInBlank } from '@/components/exercises/FillInBlank';
import { MatchingPairs } from '@/components/exercises/MatchingPairs';
import { ShadowingPlayer } from '@/components/exercises/ShadowingPlayer';
import { WritingRubric } from '@/components/exercises/WritingRubric';
import { clsx } from 'clsx';

export default function LessonViewClient({
  trackSlug,
  lessonSlug,
}: {
  trackSlug: string;
  lessonSlug: string;
}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'content' | 'practice' | 'summary'>('content');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const lessonData = getLessonBySlug(trackSlug, lessonSlug);

  useEffect(() => {
    if (lessonData?.lesson) {
      progressRepository.isLessonCompleted(lessonData.lesson.id).then(setIsCompleted);
      progressRepository.getProgress().then((data) => {
        setIsBookmarked(data.bookmarkedLessons.includes(lessonData.lesson.id));
      });
    }
  }, [lessonData]);

  if (!lessonData) {
    return (
      <AppShell category="Kurikulum Tracks" title="Pelajaran Tidak Ditemukan">
        <div className="p-8 text-center space-y-4 max-w-md mx-auto rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <p className="text-sm font-mono text-[#475569] dark:text-[#7A8992]">Pelajaran tidak ditemukan.</p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono bg-[#00638E] text-white hover:bg-[#004A6B] transition-all cursor-pointer font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Kurikulum</span>
          </Link>
        </div>
      </AppShell>
    );
  }

  const { track, lesson, exercises } = lessonData;

  const handleMarkComplete = async () => {
    await progressRepository.markLessonComplete(lesson.id);
    setIsCompleted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleToggleBookmark = async () => {
    const res = await progressRepository.toggleBookmark(lesson.id);
    setIsBookmarked(res);
  };

  return (
    <AppShell
      category={track.title}
      title={lesson.title}
      activeTab="tracks"
      headerAction={
        <div className="flex items-center gap-2">
          {/* Bookmark */}
          <button
            type="button"
            onClick={handleToggleBookmark}
            className={clsx(
              'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer font-medium',
              isBookmarked
                ? 'bg-[#00638E]/15 border border-[#00638E]/40 text-[#00638E] dark:text-[#8CB9CC]'
                : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
            )}
          >
            <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline">{isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
          </button>
          {/* Mark complete */}
          <button
            type="button"
            onClick={handleMarkComplete}
            className={clsx(
              'flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-xs',
              isCompleted
                ? 'bg-[#00638E]/15 text-[#004A6B] dark:text-[#BFD8E3] border border-[#00638E]/30'
                : 'bg-[#00638E] text-white hover:bg-[#004A6B]'
            )}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{isCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Lesson header card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-[#00638E]/15 border border-[#00638E]/30 text-[#004A6B] dark:text-[#8CB9CC] font-bold">
              Pelajaran {lesson.order}
            </span>
            <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#1C1C1C] text-[#334155] dark:text-[#BFD8E3] border border-[#CBD5E1] dark:border-white/10 font-semibold">
              {track.badgeText}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#E2E8F0] font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
              {lesson.readTimeMin} menit
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight text-[#0F172A] dark:text-white">
            {lesson.title}
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[#334155] dark:text-[#BFD8E3]">
            {lesson.summary}
          </p>

          {/* Sub-tabs: Materi / Latihan / Rangkuman */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#CBD5E1] dark:border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('content')}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer tactile-btn',
                activeTab === 'content'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#8FA4AD] hover:text-[#0F172A] dark:hover:text-white'
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Materi ({lesson.sections.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('practice')}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer tactile-btn',
                activeTab === 'practice'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#8FA4AD] hover:text-[#0F172A] dark:hover:text-white'
              )}
            >
              <ListCheck className="w-3.5 h-3.5" />
              <span>Latihan ({exercises.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('summary')}
              className={clsx(
                'px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer tactile-btn',
                activeTab === 'summary'
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#334155] dark:text-[#8FA4AD] hover:text-[#0F172A] dark:hover:text-white'
              )}
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Rangkuman</span>
            </button>
          </div>
        </div>

        {/* 2-column layout: content on left, track index on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main content col */}
          <div className="lg:col-span-8 space-y-6">
            {/* TAB 1: CONTENT */}
            {activeTab === 'content' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Objectives */}
                <div className="p-5 sm:p-6 rounded-3xl bg-[#00638E]/10 dark:bg-[#00638E]/15 border border-[#00638E]/30 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold flex items-center gap-2 text-[#00638E] dark:text-[#8CB9CC]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Target Pembelajaran
                  </span>
                  <ul className="space-y-2">
                    {lesson.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F172A] dark:text-white">
                        <span className="font-bold mt-0.5 shrink-0 text-[#00638E] dark:text-[#8CB9CC]">✓</span>
                        <span className="text-[#1E293B] dark:text-[#DFE5EA]">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sections */}
                {lesson.sections.map((section) => (
                  <div key={section.id} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
                    <div className="space-y-1.5 pb-3 border-b border-[#CBD5E1] dark:border-white/10">
                      {section.badge && (
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md font-bold inline-block bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/25">
                          {section.badge}
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-white">
                        {section.title}
                      </h3>
                    </div>

                    <div className="text-sm leading-relaxed whitespace-pre-line space-y-4 text-[#1E293B] dark:text-[#D5E2E8]">
                      {section.content}
                    </div>

                    {/* Rule Box */}
                    {section.ruleBox && (
                      <div className="p-4 sm:p-5 rounded-2xl space-y-2.5 font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/15 border border-[#00638E]/30">
                        <div className="font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
                          Rumus / Formula:
                        </div>
                        <div className="p-3 rounded-xl font-medium bg-[#F8FAFC] dark:bg-[#141414] text-[#0F172A] dark:text-white border border-[#CBD5E1] dark:border-white/10">
                          {section.ruleBox.formula}
                        </div>
                        <p className="font-sans text-xs text-[#334155] dark:text-[#BFD8E3]">
                          {section.ruleBox.explanation}
                        </p>
                        {section.ruleBox.pitfall && (
                          <p className="font-sans text-xs font-bold text-[#004A6B] dark:text-[#8CB9CC]">
                            ⚠️ Jebakan Umum: {section.ruleBox.pitfall}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Examples */}
                    {section.examples && section.examples.length > 0 && (
                      <div className="space-y-2.5">
                        <span className="font-mono text-[10px] uppercase tracking-wider block font-bold text-[#475569] dark:text-[#7A8992]">
                          Contoh Kalimat Riil:
                        </span>
                        {section.examples.map((ex, i) => (
                          <div key={i} className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-1.5 shadow-2xs">
                            <div className="flex items-center justify-between gap-2">
                              <p className="font-serif text-sm italic font-semibold text-[#0F172A] dark:text-white">
                                "{ex.sentence}"
                              </p>
                              <button
                                type="button"
                                onClick={() => playTextToSpeech(ex.sentence)}
                                className="p-1.5 rounded-lg text-[#00638E] dark:text-[#8CB9CC] hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                                title="Dengarkan pengucapan"
                              >
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                            {ex.translation && (
                              <p className="text-xs text-[#334155] dark:text-[#BFD8E3]">{ex.translation}</p>
                            )}
                            {ex.explanation && (
                              <p className="text-xs font-mono text-[#475569] dark:text-[#7A8992]">{ex.explanation}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Callout */}
                    {section.callout && (
                      <div
                        className={clsx(
                          'p-4 rounded-2xl text-xs sm:text-sm space-y-1 border',
                          section.callout.type === 'tip'
                            ? 'bg-[#00638E]/10 border-[#00638E]/30 text-[#004A6B] dark:text-[#BFD8E3]'
                            : section.callout.type === 'warning'
                            ? 'bg-[var(--ao-error-bg)] border-[var(--ao-error-border)] text-[#0F172A] dark:text-white'
                            : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-white'
                        )}
                      >
                        <h4 className="font-bold">{section.callout.title}</h4>
                        <p className="leading-relaxed opacity-90">{section.callout.text}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA to practice */}
                <div className="p-5 sm:p-6 rounded-3xl bg-[#00638E]/10 dark:bg-[#00638E]/15 border border-[#00638E]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-base font-bold text-[#0F172A] dark:text-white">Sudah Memahami Kaidah?</h4>
                    <p className="text-xs text-[#334155] dark:text-[#BFD8E3]">Uji pemahamanmu dengan latihan interaktif.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('practice')}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#00638E] text-white hover:bg-[#004A6B] transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-xs tactile-btn"
                  >
                    <span>Mulai Latihan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: PRACTICE */}
            {activeTab === 'practice' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {exercises.length === 0 ? (
                  <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10">
                    <p className="text-sm font-mono text-[#475569] dark:text-[#7A8992]">Latihan untuk modul ini sedang disiapkan.</p>
                  </div>
                ) : (
                  exercises.map((exercise, idx) => (
                    <div key={exercise.id} className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
                      <div className="flex items-center pb-3 border-b border-[#CBD5E1] dark:border-white/10">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC]">
                          Soal {idx + 1} dari {exercises.length}
                        </span>
                      </div>
                      {exercise.type === 'multiple-choice' && <MultipleChoice exercise={exercise} />}
                      {exercise.type === 'fill-blank' && <FillInBlank exercise={exercise} />}
                      {exercise.type === 'matching' && <MatchingPairs exercise={exercise} />}
                      {exercise.type === 'shadowing' && <ShadowingPlayer exercise={exercise} />}
                      {exercise.type === 'writing-rubric' && <WritingRubric exercise={exercise} />}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* TAB 3: SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
                  <div className="space-y-1.5 pb-3 border-b border-[#CBD5E1] dark:border-white/10">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md font-bold inline-block bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/25">
                      Executive Summary
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-white">
                      Poin Kunci yang Harus Diingat
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {lesson.keyTakeaways.map((point, idx) => (
                      <li
                        key={idx}
                        className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-start gap-3 text-sm text-[#0F172A] dark:text-white shadow-2xs"
                      >
                        <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 font-bold bg-[#00638E] text-white">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed text-[#1E293B] dark:text-[#DFE5EA]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Prev / Next navigation */}
            <div className="pt-4 flex items-center justify-between border-t border-[#CBD5E1] dark:border-white/10">
              {lesson.prevLessonId ? (
                <Link
                  href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.prevLessonId)?.slug || ''}`}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 bg-[#F1F5F9] dark:bg-[#1C1C1C] text-[#0F172A] dark:text-[#BFD8E3] hover:border-[#00638E]/50 border border-[#CBD5E1] dark:border-white/10 transition-all font-medium tactile-btn"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </Link>
              ) : <div />}

              {lesson.nextLessonId ? (
                <Link
                  href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.nextLessonId)?.slug || ''}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 bg-[#00638E] text-white hover:bg-[#004A6B] transition-all shadow-xs tactile-btn"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/learn"
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/30 tactile-btn"
                >
                  <span>Selesai Track</span>
                  <CheckCircle className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Right: Track Index Sidebar */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#475569] dark:text-[#7A8992]">
                  Daftar Isi Track
                </span>
                <span className="font-mono text-xs font-bold text-[#00638E] dark:text-[#8CB9CC]">
                  {track.lessons.length} Pelajaran
                </span>
              </div>
              <div className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1 no-scrollbar">
                {track.lessons.map((item) => {
                  const isCurrent = item.id === lesson.id;
                  return (
                    <Link
                      key={item.id}
                      href={`/learn/${track.slug}/${item.slug}`}
                      className={clsx(
                        'block p-3 rounded-2xl text-xs transition-all border tactile-btn',
                        isCurrent
                          ? 'bg-[#00638E] text-white font-bold border-[#00638E] shadow-xs'
                          : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-[#BFD8E3] hover:border-[#00638E]'
                      )}
                    >
                      <div className="flex items-center justify-between mb-1 opacity-75">
                        <span className="font-mono text-[10px]">{String(item.order).padStart(2, '0')}</span>
                        <span className="font-mono text-[10px]">{item.readTimeMin}m</span>
                      </div>
                      <span className="line-clamp-2 font-semibold text-xs leading-snug">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
