'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  CheckCircle, 
  Bookmark, 
  Volume2, 
  Sparkles, 
  Clock, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  ListCheck, 
  Lightbulb 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { MultipleChoice } from '@/components/exercises/MultipleChoice';
import { FillInBlank } from '@/components/exercises/FillInBlank';
import { MatchingPairs } from '@/components/exercises/MatchingPairs';
import { ShadowingPlayer } from '@/components/exercises/ShadowingPlayer';
import { WritingRubric } from '@/components/exercises/WritingRubric';
import { getLessonBySlug } from '@/data/tracks';
import { progressRepository } from '@/services/storage';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

export default function LessonViewClient({
  trackSlug,
  lessonSlug,
}: {
  trackSlug: string;
  lessonSlug: string;
}) {
  const [activeTab, setActiveTab] = useState<'content' | 'practice' | 'summary'>('content');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [exerciseScores, setExerciseScores] = useState<Record<string, boolean>>({});

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
      <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#1E1B17]">Pelajaran Tidak Ditemukan</h2>
          <p className="text-[#7A7265]">Silakan kembali ke daftar kurikulum utama.</p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono tactile-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Kurikulum</span>
          </Link>
        </main>
      </div>
    );
  }

  const { track, lesson, exercises } = lessonData;

  const handleMarkComplete = async () => {
    await progressRepository.markLessonComplete(lesson.id);
    setIsCompleted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleToggleBookmark = async () => {
    const res = await progressRepository.toggleBookmark(lesson.id);
    setIsBookmarked(res);
  };

  return (
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Top Breadcrumbs & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#C8C0B0]">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7A7265] hover:text-[#1E1B17] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Semua Track</span>
            <span>/</span>
            <span className="text-[#1E1B17] font-semibold">{track.title}</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleBookmark}
              className={clsx(
                'px-3.5 py-1.5 rounded-2xl border transition-all text-xs font-mono flex items-center gap-1.5 tactile-btn',
                isBookmarked
                  ? 'bg-[#A84A28]/15 border-[#A84A28]/40 text-[#A84A28] font-bold'
                  : 'bg-[#DDD7CA] border-[#C8C0B0] text-[#7A7265] hover:text-[#1E1B17]'
              )}
              title="Bookmark pelajaran ini"
            >
              <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
            </button>

            <button
              onClick={handleMarkComplete}
              className={clsx(
                'px-4 py-1.5 rounded-2xl font-mono text-xs font-medium transition-all flex items-center gap-1.5 tactile-btn',
                isCompleted
                  ? 'bg-[#535841] text-[#EFE9DF] shadow-xs'
                  : 'bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] shadow-xs'
              )}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isCompleted ? 'Sudah Selesai' : 'Tandai Selesai'}</span>
            </button>
          </div>
        </div>

        {/* Lesson Header Banner */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#A84A28]/15 text-[#A84A28] font-bold">
              Pelajaran 0{lesson.order}
            </span>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#DDD7CA] text-[#7A7265]">
              {lesson.difficulty}
            </span>
            <div className="flex items-center gap-1 text-xs font-mono text-[#7A7265]">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.readTimeMin} Menit</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1E1B17] leading-tight">
            {lesson.title}
          </h1>

          <p className="text-sm sm:text-base text-[#7A7265] max-w-4xl leading-relaxed font-sans">
            {lesson.summary}
          </p>
        </div>

        {/* Tabs Navigation (Reading Content vs Practice vs Summary) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] w-fit">
          <button
            onClick={() => setActiveTab('content')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 tactile-btn',
              activeTab === 'content'
                ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                : 'text-[#7A7265] hover:text-[#1E1B17] hover:bg-[#DDD7CA]'
            )}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Materi & Kaidah ({lesson.sections.length} Bagian)</span>
          </button>

          <button
            onClick={() => setActiveTab('practice')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 tactile-btn',
              activeTab === 'practice'
                ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                : 'text-[#7A7265] hover:text-[#1E1B17] hover:bg-[#DDD7CA]'
            )}
          >
            <ListCheck className="w-3.5 h-3.5" />
            <span>Latihan Interaktif ({exercises.length} Soal)</span>
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={clsx(
              'px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 tactile-btn',
              activeTab === 'summary'
                ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                : 'text-[#7A7265] hover:text-[#1E1B17] hover:bg-[#DDD7CA]'
            )}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Rangkuman Inti</span>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Central Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* TAB 1: READING CONTENT */}
            {activeTab === 'content' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {/* Objectives Box */}
                <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3 shadow-xs">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#1E1B17] font-semibold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#A84A28]" />
                    <span>Target Pembelajaran:</span>
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#1E1B17]">
                    {lesson.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A84A28] font-bold mt-0.5">✓</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sections */}
                {lesson.sections.map((section) => (
                  <div key={section.id} className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-6 shadow-xs">
                    <div className="space-y-2">
                      {section.badge && (
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#DDD7CA] text-[#A84A28] font-bold">
                          {section.badge}
                        </span>
                      )}
                      <h3 className="text-2xl font-serif font-bold text-[#1E1B17]">{section.title}</h3>
                    </div>

                    {/* Markdown-style content formatted */}
                    <div className="text-sm sm:text-base text-[#1E1B17] leading-relaxed whitespace-pre-line font-normal space-y-4">
                      {section.content}
                    </div>

                    {/* Rule Box */}
                    {section.ruleBox && (
                      <div className="p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2 font-mono text-xs">
                        <div className="text-[#A84A28] font-bold uppercase tracking-wider">
                          Rumus / Formula:
                        </div>
                        <div className="p-3 rounded-xl bg-[#EFE9DF] text-[#1E1B17] font-medium border border-[#C8C0B0]">
                          {section.ruleBox.formula}
                        </div>
                        <p className="text-[#7A7265] font-sans pt-1">
                          {section.ruleBox.explanation}
                        </p>
                        {section.ruleBox.pitfall && (
                          <p className="text-[#A84A28] font-sans pt-1 font-semibold">
                            ⚠️ Jebakan Umum: {section.ruleBox.pitfall}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Examples */}
                    {section.examples && section.examples.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#7A7265] block font-semibold">
                          Contoh Kalimat Kontekstual:
                        </span>
                        {section.examples.map((ex, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2 shadow-xs"
                          >
                            <div className="flex items-center justify-between">
                              <p className="font-serif text-base text-[#1E1B17] italic">
                                "{ex.sentence}"
                              </p>
                              <button
                                onClick={() => playTextToSpeech(ex.sentence)}
                                className="p-1.5 rounded-xl hover:bg-[#C8C0B0] text-[#7A7265] hover:text-[#1E1B17] transition-colors"
                                title="Dengarkan pelafalan kalimat"
                              >
                                <Volume2 className="w-4 h-4 text-[#A84A28]" />
                              </button>
                            </div>
                            {ex.translation && (
                              <p className="text-xs text-[#7A7265]">{ex.translation}</p>
                            )}
                            {ex.explanation && (
                              <p className="text-xs text-[#535841] font-mono">{ex.explanation}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Callout */}
                    {section.callout && (
                      <div
                        className={clsx(
                          'p-5 rounded-2xl border text-xs sm:text-sm space-y-1',
                          section.callout.type === 'tip'
                            ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]'
                            : section.callout.type === 'warning'
                            ? 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                            : 'bg-[#DDD7CA] border-[#C8C0B0] text-[#1E1B17]'
                        )}
                      >
                        <h4 className="font-bold">{section.callout.title}</h4>
                        <p className="leading-relaxed opacity-90">{section.callout.text}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Bottom Next CTA */}
                <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#1E1B17]">Sudah Memahami Kaidah di Atas?</h4>
                    <p className="text-xs text-[#7A7265]">Uji pemahamanmu dengan latihan interaktif langsung.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('practice')}
                    className="px-6 py-3 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono transition-all flex items-center gap-2 tactile-btn"
                  >
                    <span>Mulai Latihan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: INTERACTIVE PRACTICE */}
            {activeTab === 'practice' && (
              <div className="space-y-8 animate-in fade-in duration-200">
                {exercises.length === 0 ? (
                  <div className="p-12 text-center text-[#7A7265] bg-[#E6E0D4] rounded-3xl border border-[#C8C0B0]">
                    <p>Latihan untuk modul ini sedang disiapkan.</p>
                  </div>
                ) : (
                  exercises.map((exercise, idx) => (
                    <div key={exercise.id} className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-[#C8C0B0]">
                        <span className="font-mono text-xs text-[#A84A28] font-bold uppercase tracking-wider">
                          Soal {idx + 1} dari {exercises.length}
                        </span>
                      </div>

                      {exercise.type === 'multiple-choice' && (
                        <MultipleChoice exercise={exercise} />
                      )}

                      {exercise.type === 'fill-blank' && (
                        <FillInBlank exercise={exercise} />
                      )}

                      {exercise.type === 'matching' && (
                        <MatchingPairs exercise={exercise} />
                      )}

                      {exercise.type === 'shadowing' && (
                        <ShadowingPlayer exercise={exercise} />
                      )}

                      {exercise.type === 'writing-rubric' && (
                        <WritingRubric exercise={exercise} />
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* TAB 3: KEY SUMMARY */}
            {activeTab === 'summary' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#535841]/20 text-[#535841] font-bold">
                      Executive Summary
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-[#1E1B17]">
                      Poin Kunci yang Harus Diingat
                    </h3>
                  </div>

                  <ul className="space-y-3 text-sm text-[#1E1B17]">
                    {lesson.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-start gap-3 shadow-xs">
                        <span className="w-5 h-5 rounded-full bg-[#535841] text-[#EFE9DF] flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Bottom Next/Prev Lesson Navigator */}
            <div className="pt-6 flex items-center justify-between border-t border-[#C8C0B0]">
              {lesson.prevLessonId ? (
                <Link
                  href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.prevLessonId)?.slug || ''}`}
                  className="px-5 py-2.5 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] text-xs font-mono flex items-center gap-2 text-[#1E1B17] tactile-btn"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Pelajaran Sebelumnya</span>
                </Link>
              ) : (
                <div />
              )}

              {lesson.nextLessonId ? (
                <Link
                  href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.nextLessonId)?.slug || ''}`}
                  className="px-5 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono flex items-center gap-2 transition-colors tactile-btn"
                >
                  <span>Pelajaran Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/learn"
                  className="px-5 py-2.5 rounded-2xl bg-[#535841] hover:bg-[#3E4230] text-[#EFE9DF] text-xs font-mono flex items-center gap-2 tactile-btn"
                >
                  <span>Selesai Track Ini</span>
                  <CheckCircle className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Sticky Sidebar (Track Index) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#7A7265] font-semibold">
                  Daftar Isi Track
                </span>
                <span className="font-mono text-xs text-[#A84A28] font-bold">
                  {track.lessons.length} Pelajaran
                </span>
              </div>

              <div className="space-y-2">
                {track.lessons.map((item) => {
                  const isCurrent = item.id === lesson.id;
                  return (
                    <Link
                      key={item.id}
                      href={`/learn/${track.slug}/${item.slug}`}
                      className={clsx(
                        'p-3 rounded-2xl block text-xs transition-all tactile-btn',
                        isCurrent
                          ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs font-semibold'
                          : 'hover:bg-[#DDD7CA] text-[#1E1B17]'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] opacity-70">
                          0{item.order}
                        </span>
                        <span className="font-mono text-[10px] opacity-70">
                          {item.readTimeMin}m
                        </span>
                      </div>
                      <span className="line-clamp-1 mt-1 text-sm font-serif">
                        {item.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
