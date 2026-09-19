'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Award, PenTool, Library, Clock, CheckCircle2, ChevronRight, Bookmark, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
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
    <div className="min-h-screen bg-[#F4F7F9] dark:bg-[#000000] text-[#141414] dark:text-[#FFFFFF] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 sm:pb-36 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
            <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] uppercase tracking-widest font-semibold">
              Curriculum Tracks Navigator
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141414] dark:text-[#FFFFFF] font-bold">
            Struktur Jalur Belajar Mandiri
          </h1>
          <p className="text-[#50585C] dark:text-[#7A8992] text-sm sm:text-base leading-relaxed font-normal">
            Jalur belajar terstruktur dari tingkatan paling mendasar hingga kesiapan ujian IELTS dan TOEFL iBT. Pilih topik yang ingin kamu kuasai hari ini.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/10 w-fit">
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
                'px-4 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn',
                selectedLevel === lvl.id
                  ? 'bg-[#00638E] text-white font-bold shadow-xs'
                  : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] hover:bg-[#BFD8E3]/30 dark:hover:bg-[#2B2B2B]'
              )}
            >
              {lvl.label}
            </button>
          ))}
        </div>

        {/* Tracks and Lessons Accordion/List */}
        <div className="space-y-12">
          {filteredTracks.map((track, trackIdx) => {
            const trackCompletedCount = track.lessons.filter((l) => completedSet.has(l.id)).length;
            const trackPct = Math.round((trackCompletedCount / track.totalLessons) * 100);

            return (
              <div key={track.id} id={track.slug} className="space-y-6">
                {/* Track Header Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border-l-4 border-l-[#00638E] border-y border-r border-[#BFD8E3]/30 dark:border-white/10 shadow-xs space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] font-semibold">Track 0{trackIdx + 1}</span>
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#00638E] dark:text-[#8CB9CC] font-bold">
                          {track.badgeText}
                        </span>
                        <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">~{track.estimatedHours} Jam Belajar</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF]">
                        {track.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992] max-w-2xl leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    <div className="w-full md:w-56 space-y-1.5 bg-[#EDF3F7] dark:bg-[#1C1C1C] p-4 rounded-2xl border border-[#BFD8E3]/30 dark:border-white/10">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#50585C] dark:text-[#7A8992]">Progres:</span>
                        <span className="font-bold text-[#141414] dark:text-[#FFFFFF]">
                          {trackCompletedCount}/{track.totalLessons} ({trackPct}%)
                        </span>
                      </div>
                      <div className="w-full bg-[#F4F7F9] dark:bg-[#000000] rounded-full h-2 overflow-hidden">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                          'h-full p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 hover:border-[#00638E] shadow-xs',
                          isDone ? 'bg-[#EDF3F7] dark:bg-[#1C1C1C] border-[#00638E]/40' : 'bg-white dark:bg-[#141414] border-[#BFD8E3]/30 dark:border-white/10'
                        )}>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                                Modul {lessonIdx + 1 < 10 ? `0${lessonIdx + 1}` : lessonIdx + 1}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {isSaved && <Bookmark className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC] fill-[#00638E]" />}
                                {isDone ? (
                                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#00638E] dark:text-[#BFD8E3] bg-[#00638E]/20 px-2 py-0.5 rounded-full font-bold">
                                    <CheckCircle2 className="w-3 h-3" /> Selesai
                                  </span>
                                ) : (
                                  <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] bg-[#EDF3F7] dark:bg-[#1C1C1C] px-2 py-0.5 rounded-md">
                                    {lesson.difficulty}
                                  </span>
                                )}
                              </div>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-[#141414] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:text-[#8CB9CC] transition-colors leading-snug">
                              {lesson.title}
                            </h3>
                            <p className="text-xs text-[#50585C] dark:text-[#7A8992] line-clamp-2 leading-relaxed">
                              {lesson.summary}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-[#BFD8E3]/30 dark:border-white/10 text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {lesson.readTimeMin} menit
                            </span>
                            <span className="flex items-center gap-1 text-[#141414] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:text-[#8CB9CC] group-hover:translate-x-0.5 transition-all">
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
      </main>
    </div>
  );
}
