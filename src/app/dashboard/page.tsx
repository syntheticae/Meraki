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
  UserCheck,
  Archive,
  ArrowLeft,
  GraduationCap,
  Layers,
  ChevronRight,
  TrendingUp,
  BarChart2
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { getAllLessons, TRACKS } from '@/data/tracks';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';
import { clsx } from 'clsx';

export default function UserDashboardPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [coreCompletedIds, setCoreCompletedIds] = useState<string[]>([]);
  const [mistakeCount, setMistakeCount] = useState<number>(0);

  useEffect(() => {
    progressRepository.getProgress().then(setProgress);

    try {
      const storedCompleted = localStorage.getItem('meraki_completed_topics');
      if (storedCompleted) setCoreCompletedIds(JSON.parse(storedCompleted));

      const storedVault = localStorage.getItem('meraki_mistake_vault');
      if (storedVault) {
        const parsed = JSON.parse(storedVault);
        setMistakeCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch (e) {}
  }, []);

  if (!progress) {
    return (
      <div className="min-h-screen bg-[#EFE9DF] flex flex-col">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center font-mono text-xs text-[#7A7265]">
          Memuat data progres belajar...
        </div>
      </div>
    );
  }

  const allLessons = getAllLessons();
  const bookmarkedLessonsData = allLessons.filter((l) =>
    progress.bookmarkedLessons.includes(l.id)
  );

  // Group 35 core curriculum modules by stage
  const stageNames = Array.from(new Set(MERAKI_CURRICULUM.map(m => m.stageName)));
  const coreTotal = MERAKI_CURRICULUM.length;
  const coreCompletedCount = coreCompletedIds.length;
  const corePercentage = Math.round((coreCompletedCount / coreTotal) * 100);

  return (
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 sm:pb-36 space-y-10">
        {/* Top Header Breadcrumb & Profile */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#C8C0B0]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#535841]" />
              <span className="font-mono text-xs text-[#7A7265] uppercase tracking-widest font-semibold">
                Scholar Learning Analytics & Progression
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1E1B17] font-bold">
              Dashboard Progres & Pencapaian
            </h1>
            <p className="text-xs sm:text-sm text-[#7A7265] font-sans">
              Statistik kemajuan belajarmu tersimpan secara lokal dan tersinkronisasi otomatis dengan seluruh modul.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A84A28]" />
              <span>{progress.level}</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17]">
              <Flame className="w-4 h-4 text-[#A84A28]" />
              <span className="font-bold">{progress.streak.currentStreak} Hari Streak</span>
            </div>
            <Link
              href="/"
              className="px-4 py-1.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn flex items-center gap-1.5"
            >
              <span>Buka Workspace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Core 35 Modules */}
          <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-2">
            <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block font-semibold">
              Kurikulum Inti
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1B17]">
                {coreCompletedCount}
              </span>
              <span className="font-mono text-xs text-[#7A7265]">/ {coreTotal} Modul</span>
            </div>
            <div className="w-full bg-[#DDD7CA] rounded-full h-2 overflow-hidden border border-[#C8C0B0]/60">
              <div
                style={{ width: `${corePercentage}%` }}
                className="bg-[#A84A28] h-full transition-all duration-500 rounded-full"
              />
            </div>
            <span className="text-[10px] font-mono text-[#7A7265] block">
              {corePercentage}% Fondasi & Retorika Tuntas
            </span>
          </div>

          {/* Card 2: Streak */}
          <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-2">
            <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block font-semibold">
              Streak Belajar
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#A84A28]">
                {progress.streak.currentStreak}
              </span>
              <span className="font-mono text-xs text-[#7A7265]">Hari Aktif</span>
            </div>
            <div className="text-[11px] text-[#7A7265] font-mono block pt-1">
              Rekor terpanjang: {progress.streak.longestStreak} hari
            </div>
          </div>

          {/* Card 3: Exercises & Mistake Vault */}
          <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-2">
            <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block font-semibold">
              Bank Khilaf (SRS)
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#535841]">
                {mistakeCount}
              </span>
              <span className="font-mono text-xs text-[#7A7265]">Item Tersimpan</span>
            </div>
            <Link href="/" className="text-[11px] font-mono text-[#A84A28] hover:underline block pt-1">
              Uji Ulang di Vault ➔
            </Link>
          </div>

          {/* Card 4: Writing Submissions */}
          <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-2">
            <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block font-semibold">
              Writing Studio
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1B17]">
                {progress.writingSubmissions.length}
              </span>
              <span className="font-mono text-xs text-[#7A7265]">Esai Tersimpan</span>
            </div>
            <Link href="/writing-pad" className="text-[11px] font-mono text-[#535841] hover:underline block pt-1">
              Tulis Esai Baru ➔
            </Link>
          </div>
        </div>

        {/* 35 Core Modules Stage Mastery Matrix */}
        <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#C8C0B0]">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#7A7265] tracking-wider block font-semibold">
                Matriks Penguasaan 5 Tahap
              </span>
              <h2 className="text-2xl font-serif font-bold text-[#1E1B17]">
                Progres Kurikulum Fondasi Inti (35 Modul)
              </h2>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn"
            >
              <span>Buka Modul Pembelajaran</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {stageNames.map((stageName, sIdx) => {
              const stageModules = MERAKI_CURRICULUM.filter(m => m.stageName === stageName);
              const stageCompleted = stageModules.filter(m => coreCompletedIds.includes(m.id)).length;
              const stagePct = Math.round((stageCompleted / stageModules.length) * 100);

              return (
                <div
                  key={stageName}
                  className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[#A84A28] font-bold block">
                      Tahap {sIdx + 1}
                    </span>
                    <h3 className="font-serif text-sm font-bold text-[#1E1B17] leading-snug">
                      {stageName}
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#7A7265]">
                      <span>{stageCompleted}/{stageModules.length} Modul</span>
                      <span className="font-bold text-[#1E1B17]">{stagePct}%</span>
                    </div>
                    <div className="w-full bg-[#EFE9DF] rounded-full h-1.5 overflow-hidden">
                      <div
                        style={{ width: `${stagePct}%` }}
                        className={clsx(
                          'h-full rounded-full transition-all duration-500',
                          stagePct === 100 ? 'bg-[#535841]' : 'bg-[#A84A28]'
                        )}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main 2-Column Grid: Secondary Tracks on Left, Bookmarks on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 7 Curriculum Tracks Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#7A7265] tracking-wider block font-semibold">
                  Jalur Studi Mandiri
                </span>
                <h2 className="text-2xl font-serif text-[#1E1B17] font-bold">
                  Track Spesialisasi Lanjutan
                </h2>
              </div>
              <Link href="/learn" className="text-xs font-mono text-[#A84A28] hover:underline flex items-center gap-1">
                <span>Buka Semua Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3.5">
              {TRACKS.map((track) => {
                const doneCount = track.lessons.filter((l) =>
                  progress.completedLessons.includes(l.id)
                ).length;
                const trackPct = Math.round((doneCount / track.totalLessons) * 100);

                return (
                  <Link
                    key={track.id}
                    href={`/learn/${track.slug}/${track.lessons[0]?.slug || ''}`}
                    className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] hover:border-[#A84A28] transition-all block space-y-3 group tactile-btn"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-serif text-[#1E1B17] font-bold group-hover:text-[#A84A28] transition-colors">
                            {track.title}
                          </h3>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#DDD7CA] text-[#7A7265]">
                            {track.badgeText}
                          </span>
                        </div>
                        <p className="text-xs text-[#7A7265] font-sans">
                          {track.description}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#7A7265] group-hover:text-[#A84A28] shrink-0" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#7A7265]">
                        <span>Progres: {doneCount}/{track.totalLessons} Pelajaran Selesai</span>
                        <span className="font-bold text-[#1E1B17]">{trackPct}%</span>
                      </div>
                      <div className="w-full bg-[#DDD7CA] rounded-full h-1.5 overflow-hidden">
                        <div
                          style={{ width: `${trackPct}%` }}
                          className={clsx(
                            'h-full rounded-full transition-all',
                            track.level === 'exam-prep' ? 'bg-[#535841]' : 'bg-[#A84A28]'
                          )}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: Saved Bookmarks & Quick Hub Shortcuts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Hub Hub Jumps */}
            <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#1E1B17] font-semibold block">
                Pusat Studi Cepat
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                <Link
                  href="/writing-pad"
                  className="p-3 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] flex flex-col gap-1 tactile-btn text-[#1E1B17]"
                >
                  <PenTool className="w-4 h-4 text-[#A84A28]" />
                  <span className="font-bold">Writing Pad</span>
                  <span className="text-[10px] text-[#7A7265]">Simulasi Esai</span>
                </Link>

                <Link
                  href="/exam"
                  className="p-3 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] flex flex-col gap-1 tactile-btn text-[#1E1B17]"
                >
                  <GraduationCap className="w-4 h-4 text-[#535841]" />
                  <span className="font-bold">IELTS & TOEFL</span>
                  <span className="text-[10px] text-[#7A7265]">Skor Diagnostic</span>
                </Link>

                <Link
                  href="/vocabulary"
                  className="p-3 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] flex flex-col gap-1 tactile-btn text-[#1E1B17]"
                >
                  <BookOpen className="w-4 h-4 text-[#A84A28]" />
                  <span className="font-bold">AWL Lexicon</span>
                  <span className="text-[10px] text-[#7A7265]">Academic Words</span>
                </Link>

                <Link
                  href="/"
                  className="p-3 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] flex flex-col gap-1 tactile-btn text-[#1E1B17]"
                >
                  <Layers className="w-4 h-4 text-[#535841]" />
                  <span className="font-bold">35 Modul</span>
                  <span className="text-[10px] text-[#7A7265]">Workspace Inti</span>
                </Link>
              </div>
            </div>

            {/* Bookmarks */}
            <div className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#1E1B17] font-semibold flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-[#A84A28]" />
                  <span>Pelajaran Tersimpan</span>
                </span>
                <span className="font-mono text-xs text-[#7A7265]">
                  {bookmarkedLessonsData.length} Disimpan
                </span>
              </div>

              {bookmarkedLessonsData.length === 0 ? (
                <p className="text-xs text-[#7A7265] py-4 text-center">
                  Belum ada materi yang ditandai. Klik ikon bookmark pada halaman pelajaran untuk menyimpan.
                </p>
              ) : (
                <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {bookmarkedLessonsData.map((l) => (
                    <Link
                      key={l.id}
                      href={`/learn/${l.trackId}/${l.slug}`}
                      className="p-3 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] block space-y-1 transition-colors"
                    >
                      <span className="text-xs font-serif font-bold text-[#1E1B17] line-clamp-1">
                        {l.title}
                      </span>
                      <span className="font-mono text-[10px] text-[#7A7265]">
                        {l.difficulty} · {l.readTimeMin}m
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
