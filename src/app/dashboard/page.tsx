'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Flame, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  PenTool, 
  RotateCcw,
  Sparkles,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { getAllLessons, TRACKS } from '@/data/tracks';

export default function UserDashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    progressRepository.getProgress().then(setProgress);
  }, []);

  if (!progress) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center font-mono text-xs text-[#82796A]">
        Memuat data progres belajar...
      </div>
    );
  }

  const allLessons = getAllLessons();
  const completedLessonsData = allLessons.filter((l) =>
    progress.completedLessons.includes(l.id)
  );
  const bookmarkedLessonsData = allLessons.filter((l) =>
    progress.bookmarkedLessons.includes(l.id)
  );

  const totalLessons = allLessons.length;
  const overallPercentage = Math.round(
    (progress.completedLessons.length / totalLessons) * 100
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#1A1714]/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="font-mono text-xs text-[#82796A] uppercase tracking-widest">
              Scholar Learning Hub
            </span>
          </div>
          <h1 className="text-4xl font-serif text-[#1A1714]">
            Progres Belajar & Pencapaian
          </h1>
          <p className="text-xs sm:text-sm text-[#82796A]">
            Data kemajuan belajarmu tersimpan secara lokal dan siap dihubungkan ke cloud Supabase kelak.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="accent">{progress.level}</Badge>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 font-mono text-xs text-[#1A1714]">
            <Flame className="w-4 h-4 text-[#C4502A]" />
            <span>{progress.streak.currentStreak} Hari Streak</span>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <GlassCard padded="md" className="space-y-2 bg-white/80">
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider block">
            Lesson Selesai
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1714]">
              {progress.completedLessons.length}
            </span>
            <span className="font-mono text-xs text-[#82796A]">/ {totalLessons} Modul</span>
          </div>
          <ProgressBar current={progress.completedLessons.length} total={totalLessons} showPercentage={false} />
        </GlassCard>

        <GlassCard padded="md" className="space-y-2 bg-white/80">
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider block">
            Streak Belajar
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C4502A]">
              {progress.streak.currentStreak}
            </span>
            <span className="font-mono text-xs text-[#82796A]">Hari Aktif</span>
          </div>
          <span className="text-[11px] text-[#82796A] font-mono block">
            Rekor terpanjang: {progress.streak.longestStreak} hari
          </span>
        </GlassCard>

        <GlassCard padded="md" className="space-y-2 bg-white/80">
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider block">
            Esai & Latihan
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-[#5F6244]">
              {progress.stats.totalExercisesCompleted}
            </span>
            <span className="font-mono text-xs text-[#82796A]">Aktivitas</span>
          </div>
          <span className="text-[11px] text-[#82796A] font-mono block">
            {progress.writingSubmissions.length} Esai tersimpan
          </span>
        </GlassCard>

        <GlassCard padded="md" className="space-y-2 bg-white/80">
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-wider block">
            Simulasi Ujian
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-blue-900">
              {progress.mockExamResults.length}
            </span>
            <span className="font-mono text-xs text-[#82796A]">Tes Diikuti</span>
          </div>
          <span className="text-[11px] text-[#82796A] font-mono block">
            IELTS & TOEFL Diagnostic
          </span>
        </GlassCard>
      </div>

      {/* Main Grid: Track Progress on Left, Saved Bookmarks on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Track Breakdown */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-serif text-[#1A1714]">
              Progres per Jalur Kurikulum
            </h2>
            <Link href="/learn" className="text-xs font-mono text-[#C4502A] hover:underline">
              Buka Semua Track ➔
            </Link>
          </div>

          <div className="space-y-4">
            {TRACKS.map((track) => {
              const doneCount = track.lessons.filter((l) =>
                progress.completedLessons.includes(l.id)
              ).length;

              return (
                <GlassCard key={track.id} padded="md" className="space-y-3 bg-white/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-serif text-[#1A1714] font-medium">
                        {track.title}
                      </h3>
                      <span className="font-mono text-[11px] text-[#82796A]">
                        {track.badgeText}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#1A1714]">
                      {doneCount}/{track.totalLessons} Selesai
                    </span>
                  </div>

                  <ProgressBar
                    current={doneCount}
                    total={track.totalLessons}
                    showPercentage={false}
                    barColor={track.level === 'exam-prep' ? 'bg-blue-600' : 'bg-[#C4502A]'}
                  />
                </GlassCard>
              );
            })}
          </div>

          {/* Writing Submissions History */}
          {progress.writingSubmissions.length > 0 && (
            <div className="space-y-4 pt-6">
              <h3 className="text-xl font-serif text-[#1A1714]">
                Riwayat Esai & Evaluasi Mandiri
              </h3>
              <div className="space-y-3">
                {progress.writingSubmissions.map((sub) => (
                  <GlassCard key={sub.id} padded="md" className="space-y-2 bg-white/70">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm text-[#1A1714]">
                        {sub.promptTitle}
                      </span>
                      <Badge variant="accent">Skor: {sub.overallScore}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#82796A]">
                      <span>{sub.wordCount} Kata</span>
                      <span>·</span>
                      <span>{new Date(sub.submittedAt).toLocaleDateString('id-ID')}</span>
                    </div>
                    <p className="text-xs text-[#38332C] line-clamp-2 italic pt-1 border-t border-black/05">
                      "{sub.submittedText}"
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Bookmarks & Mock Exam Results */}
        <div className="lg:col-span-5 space-y-6">
          {/* Bookmarks */}
          <GlassCard padded="md" className="space-y-4 bg-white/85">
            <div className="flex items-center justify-between pb-3 border-b border-black/05">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A1714] font-semibold flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5 text-[#C4502A]" />
                <span>Pelajaran Tersimpan</span>
              </span>
              <span className="font-mono text-xs text-[#82796A]">
                {bookmarkedLessonsData.length} Disimpan
              </span>
            </div>

            {bookmarkedLessonsData.length === 0 ? (
              <p className="text-xs text-[#82796A] py-4 text-center">
                Belum ada materi yang ditandai. Klik ikon bookmark pada halaman pelajaran untuk menyimpan.
              </p>
            ) : (
              <div className="space-y-2.5">
                {bookmarkedLessonsData.map((l) => (
                  <Link
                    key={l.id}
                    href={`/learn/${l.trackId}/${l.slug}`}
                    className="p-3 rounded-xl bg-black/02 hover:bg-black/05 border border-black/05 block space-y-1 transition-colors"
                  >
                    <span className="text-xs font-serif font-medium text-[#1A1714] line-clamp-1">
                      {l.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#82796A]">
                      {l.difficulty} · {l.readTimeMin}m
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </GlassCard>

          {/* Mock Exam History */}
          <GlassCard padded="md" className="space-y-4 bg-white/85">
            <div className="flex items-center justify-between pb-3 border-b border-black/05">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1A1714] font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-700" />
                <span>Riwayat Simulasi Ujian</span>
              </span>
              <span className="font-mono text-xs text-[#82796A]">
                {progress.mockExamResults.length} Riwayat
              </span>
            </div>

            {progress.mockExamResults.length === 0 ? (
              <div className="text-center py-6 space-y-3">
                <p className="text-xs text-[#82796A]">
                  Kamu belum mengambil simulasi ujian IELTS/TOEFL.
                </p>
                <Link
                  href="/exam"
                  className="inline-block px-4 py-2 rounded-full bg-[#1A1714] text-white text-xs font-mono"
                >
                  Ambil Diagnostic Test
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {progress.mockExamResults.map((mock) => (
                  <div
                    key={mock.id}
                    className="p-3.5 rounded-xl bg-black/02 border border-black/05 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-sm font-medium text-[#1A1714]">
                        {mock.examTitle}
                      </span>
                      <Badge variant={mock.examType === 'ielts' ? 'blue' : 'emerald'}>
                        {mock.bandOrScore}
                      </Badge>
                    </div>
                    <span className="font-mono text-[10px] text-[#82796A] block">
                      {new Date(mock.completedAt).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
