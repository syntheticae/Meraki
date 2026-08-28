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
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 sm:pb-36 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A84A28]" />
            <span className="font-mono text-xs text-[#7A7265] uppercase tracking-widest font-semibold">
              Curriculum Tracks Navigator
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1B17] font-bold">
            Struktur Jalur Belajar Mandiri
          </h1>
          <p className="text-[#7A7265] text-sm sm:text-base leading-relaxed font-normal">
            Jalur belajar terstruktur dari tingkatan paling mendasar hingga kesiapan ujian IELTS dan TOEFL iBT. Pilih topik yang ingin kamu kuasai hari ini.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] w-fit">
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
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                  : 'bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17] hover:bg-[#C8C0B0]'
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
                <div className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border-l-4 border-l-[#A84A28] border-y border-r border-[#C8C0B0] shadow-xs space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-[#7A7265] font-semibold">Track 0{trackIdx + 1}</span>
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#DDD7CA] text-[#A84A28] font-bold">
                          {track.badgeText}
                        </span>
                        <span className="font-mono text-xs text-[#7A7265]">~{track.estimatedHours} Jam Belajar</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B17]">
                        {track.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#7A7265] max-w-2xl leading-relaxed">
                        {track.description}
                      </p>
                    </div>

                    <div className="w-full md:w-56 space-y-1.5 bg-[#DDD7CA] p-4 rounded-2xl border border-[#C8C0B0]">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#7A7265]">Progres:</span>
                        <span className="font-bold text-[#1E1B17]">
                          {trackCompletedCount}/{track.totalLessons} ({trackPct}%)
                        </span>
                      </div>
                      <div className="w-full bg-[#EFE9DF] rounded-full h-2 overflow-hidden">
                        <div
                          style={{ width: `${trackPct}%` }}
                          className={clsx(
                            'h-full rounded-full transition-all',
                            track.level === 'exam-prep' ? 'bg-[#535841]' : 'bg-[#A84A28]'
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
                          'h-full p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 hover:border-[#A84A28] shadow-xs',
                          isDone ? 'bg-[#DDD7CA] border-[#535841]' : 'bg-[#E6E0D4] border-[#C8C0B0]'
                        )}>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-xs text-[#7A7265]">
                                Modul {lessonIdx + 1 < 10 ? `0${lessonIdx + 1}` : lessonIdx + 1}
                              </span>
                              <div className="flex items-center gap-1.5">
                                {isSaved && <Bookmark className="w-3.5 h-3.5 text-[#A84A28] fill-[#A84A28]" />}
                                {isDone ? (
                                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#535841] bg-[#535841]/20 px-2 py-0.5 rounded-full font-bold">
                                    <CheckCircle2 className="w-3 h-3" /> Selesai
                                  </span>
                                ) : (
                                  <span className="font-mono text-[10px] text-[#7A7265] bg-[#DDD7CA] px-2 py-0.5 rounded-md">
                                    {lesson.difficulty}
                                  </span>
                                )}
                              </div>
                            </div>

                            <h3 className="font-serif text-lg font-bold text-[#1E1B17] group-hover:text-[#A84A28] transition-colors leading-snug">
                              {lesson.title}
                            </h3>
                            <p className="text-xs text-[#7A7265] line-clamp-2 leading-relaxed">
                              {lesson.summary}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-[#C8C0B0] text-xs font-mono text-[#7A7265]">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {lesson.readTimeMin} menit
                            </span>
                            <span className="flex items-center gap-1 text-[#1E1B17] group-hover:text-[#A84A28] group-hover:translate-x-0.5 transition-all">
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
