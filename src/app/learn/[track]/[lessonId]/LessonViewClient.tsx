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
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-3xl font-serif text-[#1A1714]">Pelajaran Tidak Ditemukan</h2>
        <p className="text-[#82796A]">Silakan kembali ke daftar kurikulum utama.</p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1714] text-white text-xs font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Kurikulum</span>
        </Link>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Breadcrumbs & Quick Nav */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1A1714]/10">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#82796A] hover:text-[#1A1714] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Semua Track</span>
          <span>/</span>
          <span className="text-[#1A1714] font-medium">{track.title}</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleBookmark}
            className={clsx(
              'p-2 rounded-full border transition-all text-xs font-mono flex items-center gap-1.5',
              isBookmarked
                ? 'bg-[#C4502A]/10 border-[#C4502A]/30 text-[#C4502A]'
                : 'bg-white/70 border-black/10 text-[#82796A] hover:text-[#1A1714]'
            )}
            title="Bookmark pelajaran ini"
          >
            <Bookmark className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
            <span className="hidden sm:inline">{isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
          </button>

          <button
            onClick={handleMarkComplete}
            className={clsx(
              'px-4 py-2 rounded-full font-mono text-xs font-medium transition-all flex items-center gap-2',
              isCompleted
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-[#1A1714] hover:bg-[#C4502A] text-white shadow-xs'
            )}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{isCompleted ? 'Sudah Selesai' : 'Tandai Selesai'}</span>
          </button>
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="accent">Pelajaran 0{lesson.order}</Badge>
          <Badge variant="outline">{lesson.difficulty}</Badge>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#82796A]">
            <Clock className="w-3.5 h-3.5" />
            <span>{lesson.readTimeMin} Menit Pembelajaran</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1714] leading-tight">
          {lesson.title}
        </h1>

        <p className="text-base sm:text-lg text-[#82796A] max-w-4xl leading-relaxed">
          {lesson.summary}
        </p>
      </div>

      {/* Tabs Navigation (Reading Content vs Practice vs Summary) */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 w-fit">
        <button
          onClick={() => setActiveTab('content')}
          className={clsx(
            'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2',
            activeTab === 'content'
              ? 'bg-[#1A1714] text-white shadow-xs'
              : 'text-[#82796A] hover:text-[#1A1714]'
          )}
        >
          <BookOpen className="w-4 h-4" />
          <span>Materi & Kaidah ({lesson.sections.length} Bagian)</span>
        </button>

        <button
          onClick={() => setActiveTab('practice')}
          className={clsx(
            'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2',
            activeTab === 'practice'
              ? 'bg-[#1A1714] text-white shadow-xs'
              : 'text-[#82796A] hover:text-[#1A1714]'
          )}
        >
          <ListCheck className="w-4 h-4" />
          <span>Latihan Interaktif ({exercises.length} Soal)</span>
        </button>

        <button
          onClick={() => setActiveTab('summary')}
          className={clsx(
            'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2',
            activeTab === 'summary'
              ? 'bg-[#1A1714] text-white shadow-xs'
              : 'text-[#82796A] hover:text-[#1A1714]'
          )}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Rangkuman Inti</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Central Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* TAB 1: READING CONTENT */}
          {activeTab === 'content' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {/* Objectives Box */}
              <GlassCard padded="md" className="bg-[#EFE8DC]/60 border-[#1A1714]/10 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1A1714] font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C4502A]" />
                  <span>Target Pembelajaran:</span>
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#38332C]">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#C4502A] font-bold mt-0.5">✓</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Sections */}
              {lesson.sections.map((section) => (
                <GlassCard key={section.id} padded="lg" className="space-y-6 bg-white/85">
                  <div className="space-y-2">
                    {section.badge && <Badge variant="default">{section.badge}</Badge>}
                    <h3 className="text-2xl font-serif text-[#1A1714]">{section.title}</h3>
                  </div>

                  {/* Markdown-style content formatted */}
                  <div className="text-sm sm:text-base text-[#38332C] leading-relaxed whitespace-pre-line font-normal space-y-4">
                    {section.content}
                  </div>

                  {/* Rule Box */}
                  {section.ruleBox && (
                    <div className="p-5 rounded-2xl bg-black/03 border border-black/08 space-y-2 font-mono text-xs">
                      <div className="text-[#C4502A] font-bold uppercase tracking-wider">
                        Rumus / Formula:
                      </div>
                      <div className="p-3 rounded-xl bg-white text-[#1A1714] font-medium border border-black/05">
                        {section.ruleBox.formula}
                      </div>
                      <p className="text-[#82796A] font-sans pt-1">
                        {section.ruleBox.explanation}
                      </p>
                      {section.ruleBox.pitfall && (
                        <p className="text-rose-900 font-sans pt-1">
                          ⚠️ <strong>Jebakan Umum:</strong> {section.ruleBox.pitfall}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Examples */}
                  {section.examples && section.examples.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#82796A] block">
                        Contoh Kalimat Kontekstual:
                      </span>
                      {section.examples.map((ex, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-white border border-black/08 space-y-2 shadow-xs"
                        >
                          <div className="flex items-center justify-between">
                            <p className="font-serif text-base text-[#1A1714] italic">
                              "{ex.sentence}"
                            </p>
                            <button
                              onClick={() => playTextToSpeech(ex.sentence)}
                              className="p-1.5 rounded-full hover:bg-black/05 text-[#82796A] hover:text-[#1A1714] transition-colors"
                              title="Dengarkan pelafalan kalimat"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                          {ex.translation && (
                            <p className="text-xs text-[#82796A]">{ex.translation}</p>
                          )}
                          {ex.explanation && (
                            <p className="text-xs text-[#5F6244] font-mono">{ex.explanation}</p>
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
                          ? 'bg-amber-500/08 border-amber-500/25 text-amber-950'
                          : section.callout.type === 'warning'
                          ? 'bg-rose-500/08 border-rose-500/25 text-rose-950'
                          : 'bg-blue-500/08 border-blue-500/25 text-blue-950'
                      )}
                    >
                      <h4 className="font-semibold">{section.callout.title}</h4>
                      <p className="leading-relaxed opacity-90">{section.callout.text}</p>
                    </div>
                  )}
                </GlassCard>
              ))}

              {/* Bottom Next CTA */}
              <div className="p-6 rounded-2xl bg-white/70 border border-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#1A1714]">Sudah Memahami Kaidah di Atas?</h4>
                  <p className="text-xs text-[#82796A]">Uji pemahamanmu dengan latihan interaktif langsung.</p>
                </div>
                <button
                  onClick={() => setActiveTab('practice')}
                  className="px-6 py-3 rounded-full bg-[#1A1714] hover:bg-[#C4502A] text-white text-xs font-mono transition-colors flex items-center gap-2"
                >
                  <span>Mulai Latihan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PRACTICE */}
          {activeTab === 'practice' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              {exercises.length === 0 ? (
                <GlassCard padded="lg" className="text-center py-12 text-[#82796A]">
                  <p>Latihan untuk modul ini sedang disiapkan.</p>
                </GlassCard>
              ) : (
                exercises.map((exercise, idx) => (
                  <GlassCard key={exercise.id} padded="lg" className="space-y-6 bg-white/90">
                    <div className="flex items-center justify-between pb-4 border-b border-black/05">
                      <span className="font-mono text-xs text-[#C4502A] font-semibold uppercase tracking-wider">
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
                  </GlassCard>
                ))
              )}
            </div>
          )}

          {/* TAB 3: KEY SUMMARY */}
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <GlassCard padded="lg" className="space-y-6 bg-white/85">
                <div className="space-y-2">
                  <Badge variant="moss">Executive Summary</Badge>
                  <h3 className="text-2xl font-serif text-[#1A1714]">
                    Poin Kunci yang Harus Diingat
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-[#38332C]">
                  {lesson.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="p-4 rounded-xl bg-white border border-black/05 flex items-start gap-3 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-[#5F6244] text-white flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          )}

          {/* Bottom Next/Prev Lesson Navigator */}
          <div className="pt-6 flex items-center justify-between border-t border-[#1A1714]/10">
            {lesson.prevLessonId ? (
              <Link
                href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.prevLessonId)?.slug || ''}`}
                className="px-5 py-2.5 rounded-full bg-white/80 hover:bg-white border border-black/10 text-xs font-mono flex items-center gap-2 text-[#1A1714]"
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
                className="px-5 py-2.5 rounded-full bg-[#1A1714] hover:bg-[#C4502A] text-white text-xs font-mono flex items-center gap-2 transition-colors"
              >
                <span>Pelajaran Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href="/learn"
                className="px-5 py-2.5 rounded-full bg-[#1A1714] text-white text-xs font-mono flex items-center gap-2"
              >
                <span>Selesai Track Ini</span>
                <CheckCircle className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Right Sticky Sidebar (Track Index) */}
        <div className="lg:col-span-4 sticky top-28 space-y-6">
          <GlassCard padded="md" className="space-y-4 bg-white/75">
            <div className="flex items-center justify-between pb-3 border-b border-black/05">
              <span className="font-mono text-xs uppercase tracking-wider text-[#82796A]">
                Daftar Isi Track
              </span>
              <span className="font-mono text-xs text-[#C4502A]">
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
                      'p-3 rounded-xl block text-xs transition-all',
                      isCurrent
                        ? 'bg-[#1A1714] text-white shadow-xs font-medium'
                        : 'hover:bg-black/05 text-[#38332C]'
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
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
