'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, Award, PenTool, Library, Clock, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C4502A]" />
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-widest">
            Curriculum Navigator
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          Struktur Kurikulum Belajar Mandiri
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed font-normal">
          Jalur belajar terstruktur dari tingkatan paling mendasar hingga kesiapan ujian IELTS dan TOEFL iBT. Pilih topik yang ingin kamu kuasai hari ini.
        </p>
      </div>

      {/* Level Filters */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 w-fit">
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
              'px-5 py-2 rounded-full text-xs font-medium transition-all',
              selectedLevel === lvl.id
                ? 'bg-[#1A1714] text-white shadow-xs'
                : 'text-[#82796A] hover:text-[#1A1714] hover:bg-black/03'
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

          return (
            <div key={track.id} id={track.slug} className="space-y-6">
              {/* Track Header Card */}
              <GlassCard padded="md" className="border-l-4 border-l-[#C4502A]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#82796A]">Track 0{trackIdx + 1}</span>
                      <Badge variant="accent">{track.badgeText}</Badge>
                      <span className="font-mono text-xs text-[#82796A]">~{track.estimatedHours} Jam Belajar</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1714]">
                      {track.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#82796A] max-w-2xl">
                      {track.description}
                    </p>
                  </div>

                  <div className="w-full md:w-56 space-y-2">
                    <ProgressBar
                      current={trackCompletedCount}
                      total={track.totalLessons}
                      label="Progress Track"
                    />
                  </div>
                </div>
              </GlassCard>

              {/* Lesson Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-4">
                {track.lessons.map((lesson) => {
                  const isDone = completedSet.has(lesson.id);
                  const isSaved = bookmarkedSet.has(lesson.id);

                  return (
                    <Link
                      key={lesson.id}
                      href={`/learn/${track.slug}/${lesson.slug}`}
                      className="group"
                    >
                      <GlassCard
                        padded="md"
                        hoverEffect
                        className="h-full flex flex-col justify-between space-y-4 group-hover:border-[#C4502A]/30 bg-white/70"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-[#82796A]">
                              Pelajaran {lesson.order}
                            </span>
                            <div className="flex items-center gap-2">
                              {isDone && (
                                <span className="flex items-center gap-1 font-mono text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Selesai
                                </span>
                              )}
                              <Badge variant="outline">{lesson.difficulty}</Badge>
                            </div>
                          </div>

                          <h3 className="text-lg font-serif text-[#1A1714] group-hover:text-[#C4502A] transition-colors leading-snug">
                            {lesson.title}
                          </h3>

                          <p className="text-xs text-[#82796A] line-clamp-2 leading-relaxed">
                            {lesson.summary}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-black/05 flex items-center justify-between text-xs font-mono text-[#82796A]">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{lesson.readTimeMin} menit baca + latihan</span>
                          </div>
                          <span className="text-[#1A1714] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                            Buka Materi <ChevronRight className="w-3 h-3" />
                          </span>
                        </div>
                      </GlassCard>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
