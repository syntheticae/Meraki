'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Flame,
  BookOpen,
  Award,
  Bookmark as BookmarkIcon,
  PenTool,
  ArrowRight,
  Archive,
  GraduationCap,
  Layers,
  ChevronRight,
  Target,
  Download,
  Upload,
  Home,
  LayoutDashboard,
  Library,
  Zap,
  Star,
  Menu,
  X,
  Search,
} from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { getAllLessons, TRACKS } from '@/data/tracks';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SpotlightSearch } from '@/components/search/SpotlightSearch';
import { clsx } from 'clsx';

// ─── Sidebar nav config ───────────────────────────────────────────────────────
const sidebarSections = [
  {
    title: 'Belajar',
    items: [
      { href: '/', label: 'Dashboard', icon: LayoutDashboard, accent: '#00638E' },
      { href: '/workspace', label: 'Workspace', icon: Home, accent: '#00638E' },
      { href: '/learn', label: 'Kurikulum Tracks', icon: BookOpen, accent: '#8CB9CC' },
    ],
  },
  {
    title: 'Ujian & Latihan',
    items: [
      { href: '/exam', label: 'IELTS & TOEFL', icon: Award, accent: '#00638E' },
      { href: '/vocabulary', label: 'AWL Lexicon', icon: Library, accent: '#00638E' },
      { href: '/writing-pad', label: 'Writing Studio', icon: PenTool, accent: '#8CB9CC' },
    ],
  },
];

// ─── Sidebar Component ───────────────────────────────────────────────────────
function CSSidebar({
  pathname,
  isMobileOpen,
  onClose,
}: {
  pathname: string;
  isMobileOpen: boolean;
  onClose: () => void;
}) {
  const sidebarInner = (
    <>
      {/* Brand */}
      <div className="space-y-5">
        <div className="flex items-center justify-between px-1 pt-1">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg, #000000 0%, #004A6B 40%, #00638E 75%, #8CB9CC 100%)' }}
            >
              <span className="text-[13px] font-black text-white">M</span>
            </div>
            <div>
              <h1 className="text-[13px] font-bold tracking-tight leading-tight text-[#141414] dark:text-[#FFFFFF]">
                Meraki
              </h1>
              <p className="text-[9px] font-medium tracking-wider uppercase text-[#50585C] dark:text-[#7A8992]">
                English Studio
              </p>
            </div>
          </Link>
          {isMobileOpen && (
            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-lg text-[#50585C] hover:text-[#141414] dark:text-[#7A8992] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              aria-label="Tutup Navigasi"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Nav Sections */}
        <nav className="space-y-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="space-y-0.5">
              <div className="px-2.5 pb-1 text-[9px] font-bold uppercase tracking-wider text-[#50585C] dark:text-[#7A8992]">
                {section.title}
              </div>
              {section.items.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname === item.href || pathname.startsWith(item.href + '/');
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={clsx(
                      'flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium transition-all group tactile-btn',
                      isActive
                        ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                        : 'text-[#50585C] dark:text-[#BFD8E3] hover:text-[#141414] dark:hover:text-[#FFFFFF] hover:bg-[#EDF3F7] dark:hover:bg-[#1C1C1C]'
                    )}
                  >
                    <Icon
                      className={clsx(
                        'w-4 h-4 shrink-0 transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-[#50585C] dark:text-[#7A8992] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC]'
                      )}
                    />
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span
                        className="ml-auto w-1.5 h-1.5 rounded-full shrink-0 bg-white"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom status */}
      <div className="pt-3 border-t border-[#BFD8E3]/40 dark:border-white/5">
        <div className="p-2.5 rounded-xl bg-[#EDF3F7] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 bg-[#00638E]/20"
          >
            <Zap className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold truncate text-[#141414] dark:text-[#FFFFFF]">
              Mode Belajar Aktif
            </p>
            <p className="text-[9px] text-[#50585C] dark:text-[#7A8992]">Data tersimpan lokal</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:flex w-56 xl:w-60 h-full flex-col justify-between p-4 shrink-0 z-20 select-none bg-[#FFFFFF] dark:bg-[#141414] border-r border-[#BFD8E3]/40 dark:border-white/5">
        {sidebarInner}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden flex"
          onClick={onClose}
        >
          <aside
            className="w-64 h-full flex flex-col justify-between p-4 select-none relative shadow-2xl bg-[#FFFFFF] dark:bg-[#141414] border-r border-[#BFD8E3]/40 dark:border-white/5"
            onClick={(e) => e.stopPropagation()}
          >
            {sidebarInner}
          </aside>
        </div>
      )}
    </>
  );
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
interface KpiCardProps {
  label: string;
  value: string | number;
  sub: string;
  accent: string;
  children?: React.ReactNode;
}

function KpiCard({ label, value, sub, accent, children }: KpiCardProps) {
  return (
    <div className="p-5 space-y-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs">
      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#50585C] dark:text-[#7A8992]">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: accent }}>
          {value}
        </span>
        <span className="text-xs font-medium text-[#50585C] dark:text-[#BFD8E3]">{sub}</span>
      </div>
      {children}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function UserDashboardPage() {
  const pathname = usePathname();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [coreCompletedIds, setCoreCompletedIds] = useState<string[]>([]);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  // Global Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!progress) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F7F9] dark:bg-[#000000]">
        <div className="p-8 text-center space-y-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin mx-auto"
            style={{ borderColor: '#8CB9CC', borderTopColor: 'transparent' }}
          />
          <p className="text-xs font-mono text-[#50585C] dark:text-[#7A8992]">
            Memuat data progres...
          </p>
        </div>
      </div>
    );
  }

  const allLessons = getAllLessons();
  const bookmarkedLessonsData = allLessons.filter((l) =>
    progress.bookmarkedLessons.includes(l.id)
  );

  const stageNames = Array.from(new Set(MERAKI_CURRICULUM.map((m) => m.stageName)));
  const coreTotal = MERAKI_CURRICULUM.length;
  const coreCompletedCount = coreCompletedIds.length;
  const corePercentage = Math.round((coreCompletedCount / coreTotal) * 100);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden select-none bg-[#F4F7F9] dark:bg-[#000000] text-[#141414] dark:text-[#FFFFFF] font-sans">
      {/* 3-panel spatial layout */}
      <div className="flex-1 flex gap-3 p-3 md:p-4 lg:p-5 min-h-0 overflow-hidden max-w-[1800px] w-full mx-auto">

        {/* Panel 1: Left Sidebar (Desktop & Mobile Drawer) */}
        <CSSidebar
          pathname={pathname}
          isMobileOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel 2: Main Workstation */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden gap-3">

          {/* Top Dock Bar */}
          <div className="shrink-0 flex items-center justify-between px-3.5 sm:px-5 py-3 gap-2 rounded-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 shrink-0 cursor-pointer"
                aria-label="Buka Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
              <div className="min-w-0">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest truncate text-[#00638E] dark:text-[#8CB9CC]">
                  Scholar Analytics
                </p>
                <h2 className="text-sm sm:text-base font-bold leading-tight truncate text-[#141414] dark:text-[#FFFFFF]">
                  Dashboard Progres
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Quick Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5 text-xs text-[#50585C] dark:text-[#7A8992] transition-colors tactile-btn cursor-pointer"
                title="Cari Materi (Cmd+K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden lg:inline text-xs">Cari...</span>
                <kbd className="px-1.5 py-0.5 rounded bg-[#BFD8E3]/30 dark:bg-[#2B2B2B] text-[10px] font-mono text-[#004A6B] dark:text-[#BFD8E3]">⌘K</kbd>
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Streak badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#00638E]/15 border border-[#00638E]/30 text-[#00638E] dark:text-[#8CB9CC]"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>{progress.streak.currentStreak} Hari</span>
              </div>

              {/* Level badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#004A6B]/15 border border-[#004A6B]/30 text-[#004A6B] dark:text-[#BFD8E3]"
              >
                <Star className="w-3.5 h-3.5" />
                <span>{progress.level}</span>
              </div>

              {/* Open workspace */}
              <Link
                href="/workspace"
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:opacity-90 active:scale-95 shrink-0 bg-[#00638E] text-white shadow-xs"
              >
                <span className="hidden xs:inline">Workspace</span>
                <span className="xs:hidden">Belajar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 min-h-0 overflow-y-auto rounded-3xl p-4 sm:p-6 space-y-4 bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs">
            <div className="space-y-4">

              {/* KPI Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <KpiCard label="Kurikulum Inti" value={coreCompletedCount} sub={`/ ${coreTotal} Modul`} accent="#00638E">
                  <div>
                    <div className="w-full rounded-full h-1.5 overflow-hidden mb-1 bg-black/5 dark:bg-white/10">
                      <div style={{ width: `${corePercentage}%` }} className="h-full rounded-full transition-all duration-700 bg-[#00638E]" />
                    </div>
                    <span className="text-[10px] font-mono text-[#50585C] dark:text-[#7A8992]">{corePercentage}% Fondasi Tuntas</span>
                  </div>
                </KpiCard>

                <KpiCard label="Streak Belajar" value={progress.streak.currentStreak} sub="Hari Aktif" accent="#4DA3CC">
                  <p className="text-[11px] font-mono text-[#50585C] dark:text-[#7A8992]">Rekor: {progress.streak.longestStreak} hari</p>
                </KpiCard>

                <KpiCard label="Bank Khilaf (SRS)" value={mistakeCount} sub="Item Tersimpan" accent="#8CB9CC">
                  <Link href="/workspace" className="text-[11px] font-mono hover:underline block text-[#00638E] dark:text-[#8CB9CC]">
                    Uji Ulang di Vault
                  </Link>
                </KpiCard>

                <KpiCard label="Writing Studio" value={progress.writingSubmissions.length} sub="Esai Tersimpan" accent="#004A6B">
                  <Link href="/writing-pad" className="text-[11px] font-mono hover:underline block text-[#00638E] dark:text-[#8CB9CC]">
                    Tulis Esai Baru
                  </Link>
                </KpiCard>
              </div>

              {/* Stage Matrix + Quick Hub */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

                {/* Stage Progress Matrix */}
                <div className="lg:col-span-2 p-5 space-y-4 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#50585C] dark:text-[#7A8992]">
                        Matriks 10 Tahap
                      </p>
                      <h3 className="text-base font-bold text-[#141414] dark:text-[#FFFFFF]">
                        Progres Kurikulum (40 Modul)
                      </h3>
                    </div>
                    <Link href="/workspace" className="flex items-center gap-1 text-xs font-mono transition-opacity hover:opacity-80 text-[#00638E] dark:text-[#8CB9CC]">
                      <span>Buka Modul</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2">
                    {stageNames.map((stageName, sIdx) => {
                      const stageModules = MERAKI_CURRICULUM.filter((m) => m.stageName === stageName);
                      const stageCompleted = stageModules.filter((m) => coreCompletedIds.includes(m.id)).length;
                      const stagePct = Math.round((stageCompleted / stageModules.length) * 100);
                      const isDone = stagePct === 100;
                      return (
                        <div key={stageName} className="p-3 space-y-2 flex flex-col justify-between rounded-xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/5">
                          <div className="space-y-0.5">
                            <span className={clsx('text-[9px] font-mono font-bold uppercase', isDone ? 'text-[#00638E] dark:text-[#8CB9CC]' : 'text-[#50585C] dark:text-[#7A8992]')}>
                              Tahap {sIdx}
                            </span>
                            <p className={clsx('text-[11px] font-semibold leading-snug line-clamp-2', isDone ? 'text-[#00638E] dark:text-[#FFFFFF]' : 'text-[#141414] dark:text-[#BFD8E3]')}>
                              {stageName}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-mono text-[#50585C] dark:text-[#7A8992]">
                              <span>{stageCompleted}/{stageModules.length}</span>
                              <span className={isDone ? 'text-[#00638E] dark:text-[#8CB9CC] font-bold' : 'text-[#141414] dark:text-[#FFFFFF]'}>{stagePct}%</span>
                            </div>
                            <div className="w-full rounded-full h-1 overflow-hidden bg-black/5 dark:bg-white/10">
                              <div
                                style={{ width: `${stagePct}%` }}
                                className={clsx('h-full rounded-full transition-all duration-500', isDone ? 'bg-[#00638E]' : 'bg-[#8CB9CC]')}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Hub */}
                <div className="p-5 space-y-3 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#50585C] dark:text-[#7A8992]">
                    Pusat Studi Cepat
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { href: '/writing-pad', icon: PenTool, label: 'Writing Pad', sub: 'Simulasi Esai', accent: '#8CB9CC' },
                      { href: '/exam', icon: GraduationCap, label: 'IELTS & TOEFL', sub: 'Diagnostic', accent: '#00638E' },
                      { href: '/vocabulary', icon: BookmarkIcon, label: 'AWL Lexicon', sub: 'Academic Words', accent: '#00638E' },
                      { href: '/workspace', icon: Layers, label: '40 Modul', sub: 'Workspace Inti', accent: '#8CB9CC' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href} className="p-3 flex flex-col gap-1.5 transition-all active:scale-95 rounded-xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/5 hover:border-[#00638E]/40">
                          <Icon className="w-4 h-4" style={{ color: item.accent }} />
                          <span className="text-xs font-bold leading-tight text-[#141414] dark:text-[#FFFFFF]">{item.label}</span>
                          <span className="text-[10px] text-[#50585C] dark:text-[#7A8992]">{item.sub}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tracks + Right column */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

                {/* Track List */}
                <div className="lg:col-span-7 p-5 space-y-3 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#50585C] dark:text-[#7A8992]">
                        Jalur Studi Mandiri
                      </p>
                      <h3 className="text-base font-bold text-[#141414] dark:text-[#FFFFFF]">
                        Track Spesialisasi
                      </h3>
                    </div>
                    <Link href="/learn" className="text-xs font-mono flex items-center gap-1 hover:opacity-80 transition-opacity text-[#00638E] dark:text-[#8CB9CC]">
                      <span>Semua Track</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-2">
                    {TRACKS.map((track) => {
                      const doneCount = track.lessons.filter((l) => progress.completedLessons.includes(l.id)).length;
                      const trackPct = Math.round((doneCount / track.totalLessons) * 100);
                      return (
                        <Link
                          key={track.id}
                          href={`/learn/${track.slug}/${track.lessons[0]?.slug || ''}`}
                          className="flex items-center gap-3 p-3 pr-4 transition-all active:scale-[0.99] group rounded-xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/30 dark:border-white/5 hover:border-[#00638E]/40"
                        >
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[12px] font-bold truncate text-[#141414] dark:text-[#FFFFFF]">
                                {track.title}
                              </span>
                              <span
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded-md shrink-0 bg-black/5 dark:bg-white/10 text-[#50585C] dark:text-[#BFD8E3]"
                              >
                                {track.badgeText}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 rounded-full h-1 overflow-hidden bg-black/5 dark:bg-white/10">
                                <div
                                  style={{
                                    width: `${trackPct}%`,
                                    background: track.level === 'exam-prep' ? '#00638E' : '#8CB9CC',
                                  }}
                                  className="h-full rounded-full transition-all"
                                />
                              </div>
                              <span className="text-[10px] font-mono shrink-0 text-[#50585C] dark:text-[#7A8992]">
                                {doneCount}/{track.totalLessons}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity text-[#50585C] dark:text-[#BFD8E3]" />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-5 space-y-3">

                  {/* Daily Goal */}
                  <div className="p-4 space-y-2 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 bg-[#00638E]/20">
                        <Target className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#141414] dark:text-[#FFFFFF]">
                          Target Belajar Harian
                        </p>
                        <span className="text-[10px] font-mono text-[#00638E] dark:text-[#8CB9CC]">20 Menit / Hari</span>
                      </div>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#50585C] dark:text-[#7A8992]">
                      Minimal 1 modul + 10 kartu Oxford 3000 setiap hari untuk retensi 90%+.
                    </p>
                  </div>

                  {/* Backup */}
                  <div className="p-4 space-y-3 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 bg-[#004A6B]/20">
                        <Archive className="w-4 h-4 text-[#004A6B] dark:text-[#8CB9CC]" />
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#141414] dark:text-[#FFFFFF]">
                        Cadangan & Portabilitas
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={async () => {
                          const json = await progressRepository.exportProgressJSON();
                          const blob = new Blob([json], { type: 'application/json' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = `meraki-progress-${new Date().toISOString().split('T')[0]}.json`;
                          a.click();
                          URL.revokeObjectURL(url);
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono transition-all bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 hover:border-[#00638E] text-[#141414] dark:text-[#FFFFFF] cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Ekspor JSON</span>
                      </button>
                      <label className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono transition-all bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 hover:border-[#00638E] text-[#141414] dark:text-[#FFFFFF] cursor-pointer">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Impor</span>
                        <input
                          type="file"
                          accept=".json"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const text = await file.text();
                            const success = await progressRepository.importProgressJSON(text);
                            if (success) {
                              const updated = await progressRepository.getProgress();
                              setProgress(updated);
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Bookmarks */}
                  {bookmarkedLessonsData.length > 0 && (
                    <div className="p-4 space-y-2 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/5">
                      <div className="flex items-center gap-2">
                        <BookmarkIcon className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#141414] dark:text-[#FFFFFF]">
                          Materi Tersimpan ({bookmarkedLessonsData.length})
                        </p>
                      </div>
                      <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                        {bookmarkedLessonsData.map((l) => (
                          <Link
                            key={l.id}
                            href={`/learn/${l.trackId}/${l.slug}`}
                            className="text-xs py-1 px-2 rounded-lg flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 text-[#50585C] dark:text-[#BFD8E3] hover:text-[#141414] dark:hover:text-[#FFFFFF] transition-colors block"
                          >
                            <span className="truncate">{l.title}</span>
                            <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Global Spotlight Search Modal */}
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
