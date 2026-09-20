'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Award, PenTool, Library, Clock, CheckCircle2, ChevronRight, Bookmark, ArrowRight } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { TRACKS } from '@/data/tracks';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { clsx } from 'clsx';

export default function LearnIndexPage() {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    progressRepository.getProgress().then(setProgress);
  }, []);

  const completedSet = new Set(progress?.completedLessons || []);
  const bookmarkedSet = new Set(progress?.bookmarkedLessons || []);

  const filteredTracks = TRACKS.filter((track) => {
    if (selectedLevel === 'all') return true;
    if (selectedLevel === 'basic') return track.level === 'basic';
    if (selectedLevel === 'intermediate') return track.level === 'intermediate';
    if (selectedLevel === 'advanced') return track.level === 'advanced';
    if (selectedLevel === 'exam-prep') return track.level === 'exam-prep';
    return true;
  });

  return (
    <AppShell
      category="Kurikulum Tracks"
      title="Struktur Jalur Belajar Mandiri"
    >
      <div className="space-y-8">
        {/* Header Intro Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
            <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase tracking-widest font-bold">
              7 Jalur Terstruktur
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#0F172A] dark:text-[#FFFFFF] font-bold">
            Peta Kurikulum & Jalur Spesialisasi
          </h1>
          <p className="text-[#334155] dark:text-[#8CB9CC] text-xs sm:text-sm leading-relaxed max-w-3xl">
            Jalur belajar terstruktur dari tingkatan paling mendasar hingga kesiapan ujian IELTS dan TOEFL iBT. Pilih topik yang ingin kamu kuasai hari ini.
          </p>

          {/* Level Filters */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Semua Track' },
              { id: 'basic', label: 'Basic Fundamentals' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced Writing/Reading' },
              { id: 'exam-prep', label: 'IELTS & TOEFL Prep' },
            ].map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={clsx(
                  'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn cursor-pointer',
                  selectedLevel === lvl.id
                    ? 'bg-[#00638E] text-white font-bold shadow-xs'
                    : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#8CB9CC] hover:text-[#0F172A] dark:hover:text-[#FFFFFF] hover:bg-[#E2E8F0] dark:hover:bg-[#2B2B2B]'
                )}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks and Lessons Accordion/List */}
        <div className="space-y-8">
          {filteredTracks.map((track, trackIdx) => {
            const trackCompletedCount = track.lessons.filter((l) => completedSet.has(l.id)).length;
            const trackPct = Math.round((trackCompletedCount / track.totalLessons) * 100);

            return (
              <div key={track.id} id={track.slug} className="space-y-4">
                {/* Track Header Card */}
                <div className="p-5 sm:p-6 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border-l-4 border-l-[#00638E] border-y border-r border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs text-[#475569] dark:text-[#8CB9CC] font-bold">Track 0{trackIdx + 1}</span>
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#00638E] dark:text-[#8CB9CC] font-bold">
                          {track.badgeText}
                        </span>
                        <span className="font-mono text-[10px] text-[#475569] dark:text-[#8CB9CC]">~{track.estimatedHours} Jam Belajar</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                        {track.title}
                      </h2>
                      <p className="text-xs text-[#334155] dark:text-[#8CB9CC] max-w-2xl leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    <div className="w-full md:w-52 space-y-1.5 bg-[#F8FAFC] dark:bg-[#1C1C1C] p-3.5 rounded-2xl border border-[#CBD5E1] dark:border-white/10 shrink-0">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#475569] dark:text-[#8CB9CC] font-medium">Progres:</span>
                        <span className="font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                          {trackCompletedCount}/{track.totalLessons} ({trackPct}%)
                        </span>
                      </div>
                      <div className="w-full bg-[#E2E8F0] dark:bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <div
                          style={{ width: `${trackPct}%` }}
                          className={clsx(
                            'h-full rounded-full transition-all',
                            track.level === 'exam-prep' ? 'bg-[#004A6B]' : 'bg-[#00638E]'
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lesson Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {track.lessons.map((lesson, lessonIdx) => {
                    const isDone = completedSet.has(lesson.id);
                    const isSaved = bookmarkedSet.has(lesson.id);

                    return (
                      <Link
                        key={lesson.id}
                        href={`/learn/${track.slug}/${lesson.slug}`}
                        className="group"
                      >
                        <div className={clsx(
                          'h-full p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 hover:border-[#00638E] shadow-xs',
                          isDone
                            ? 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border-2 border-[#00638E]/50 dark:border-[#00638E]/40'
                            : 'bg-[#FFFFFF] dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10'
                        )}>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-[#475569] dark:text-[#8CB9CC] font-semibold">
                                Modul {lessonIdx + 1 < 10 ? `0${lessonIdx + 1}` : lessonIdx + 1}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {isSaved && <Bookmark className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC] fill-[#00638E]" />}
                                {isDone ? (
                                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#004A6B] dark:text-[#BFD8E3] bg-[#00638E]/15 border border-[#00638E]/30 px-2 py-0.5 rounded-full font-bold">
                                    <CheckCircle2 className="w-3 h-3" /> Selesai
                                  </span>
                                ) : (
                                  <span className="font-mono text-[10px] font-semibold text-[#475569] dark:text-[#8CB9CC] bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 px-2 py-0.5 rounded-md">
                                    {lesson.difficulty}
                                  </span>
                                )}
                              </div>
                            </div>

                            <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC] transition-colors leading-snug">
                              {lesson.title}
                            </h3>
                            <p className="text-xs text-[#334155] dark:text-[#8CB9CC] line-clamp-2 leading-relaxed">
                              {lesson.summary}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2.5 border-t border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#475569] dark:text-[#8CB9CC]">
                            <span className="flex items-center gap-1 font-medium">
                              <Clock className="w-3 h-3 text-[#00638E]" /> {lesson.readTimeMin} mnt
                            </span>
                            <span className="flex items-center gap-1 text-[#0F172A] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC] group-hover:translate-x-0.5 transition-all font-bold">
                              Mulai <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
