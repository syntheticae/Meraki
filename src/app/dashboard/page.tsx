'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Flame,
  BookOpen,
  Award,
  Bookmark,
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
} from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { getAllLessons, TRACKS } from '@/data/tracks';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';
import { clsx } from 'clsx';

// ─── Sidebar nav config ───────────────────────────────────────────────────────
const sidebarSections = [
  {
    title: 'Belajar',
    items: [
      { href: '/', label: 'Workspace', icon: Home, accent: '#CEFA50' },
      { href: '/learn', label: 'Kurikulum Tracks', icon: BookOpen, accent: '#B69DFA' },
      { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, accent: '#6BCFFF' },
    ],
  },
  {
    title: 'Ujian & Latihan',
    items: [
      { href: '/exam', label: 'IELTS & TOEFL', icon: Award, accent: '#FF7A5C' },
      { href: '/vocabulary', label: 'AWL Lexicon', icon: Library, accent: '#CEFA50' },
      { href: '/writing-pad', label: 'Writing Studio', icon: PenTool, accent: '#B69DFA' },
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
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #CEFA50 0%, #B69DFA 100%)' }}
            >
              <span className="text-[13px] font-black" style={{ color: '#0D0D14' }}>M</span>
            </div>
            <div>
              <h1 className="text-[13px] font-bold tracking-tight leading-tight" style={{ color: '#F0ECE6' }}>
                Meraki
              </h1>
              <p className="text-[9px] font-medium tracking-wider uppercase" style={{ color: '#5E5A58' }}>
                English Studio
              </p>
            </div>
          </div>
          {isMobileOpen && (
            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-lg text-[#A8A4A0] hover:text-[#F0ECE6] hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Nav Sections */}
        <nav className="space-y-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="space-y-0.5">
              <div className="px-2.5 pb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#5E5A58' }}>
                {section.title}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={clsx(
                      'w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-left transition-all duration-150 text-[12px]',
                      isActive ? 'cs-nav-active' : 'hover:bg-white/[0.05]'
                    )}
                    style={{ color: isActive ? '#F0ECE6' : '#A8A4A0' }}
                  >
                    <Icon
                      className="w-4 h-4 stroke-[1.75] shrink-0"
                      style={{ color: isActive ? item.accent : undefined, opacity: isActive ? 1 : 0.55 }}
                    />
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span
                        className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.accent }}
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
      <div className="pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="cs-inner p-2.5 flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(206, 250, 80, 0.15)' }}
          >
            <Zap className="w-3.5 h-3.5" style={{ color: '#CEFA50' }} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold truncate" style={{ color: '#F0ECE6' }}>
              Mode Belajar Aktif
            </p>
            <p className="text-[9px]" style={{ color: '#5E5A58' }}>Data tersimpan lokal</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="cs-slab canvas-studio hidden md:flex w-56 xl:w-60 h-full flex-col justify-between p-4 shrink-0 z-20 select-none">
        {sidebarInner}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden flex"
          onClick={onClose}
        >
          <aside
            className="cs-slab canvas-studio w-64 h-full flex flex-col justify-between p-4 select-none relative shadow-2xl"
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
    <div className="cs-card p-5 space-y-2">
      <span className="text-[10px] font-bold uppercase tracking-wider block" style={{ color: '#5E5A58' }}>
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: accent }}>
          {value}
        </span>
        <span className="text-xs font-medium" style={{ color: '#A8A4A0' }}>{sub}</span>
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
      <div className="canvas-studio cs-spatial-canvas min-h-screen flex items-center justify-center">
        <div className="cs-card px-8 py-6 text-center space-y-2">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin mx-auto"
            style={{ borderColor: '#B69DFA', borderTopColor: 'transparent' }}
          />
          <p className="text-xs font-mono" style={{ color: '#5E5A58' }}>
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
    <div className="canvas-studio cs-spatial-canvas flex flex-col h-screen w-screen overflow-hidden select-none">
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
          <div className="cs-dock shrink-0 flex items-center justify-between px-3.5 sm:px-5 py-3 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl border border-white/10 text-[#F0ECE6] hover:bg-white/5 active:scale-95 shrink-0"
                aria-label="Buka Menu"
              >
                <Menu className="w-4 h-4" />
              </button>
              <div className="min-w-0">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest truncate" style={{ color: '#5E5A58' }}>
                  Scholar Analytics
                </p>
                <h2 className="text-sm sm:text-base font-bold leading-tight truncate" style={{ color: '#F0ECE6' }}>
                  Dashboard Progres
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* Streak badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(255, 122, 92, 0.12)', border: '1px solid rgba(255, 122, 92, 0.25)', color: '#FF7A5C' }}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>{progress.streak.currentStreak} Hari</span>
              </div>
              {/* Level badge */}
              <div
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(182, 157, 250, 0.12)', border: '1px solid rgba(182, 157, 250, 0.25)', color: '#B69DFA' }}
              >
                <Star className="w-3.5 h-3.5" />
                <span>{progress.level}</span>
              </div>
              {/* Open workspace */}
              <Link
                href="/"
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:opacity-90 active:scale-95 shrink-0"
                style={{ background: 'linear-gradient(135deg, #CEFA50 0%, #a8d840 100%)', color: '#0D0D14' }}
              >
                <span className="hidden xs:inline">Workspace</span>
                <span className="xs:hidden">Belajar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="cs-slab flex-1 min-h-0 overflow-y-auto cs-scroll">
            <div className="p-5 md:p-6 space-y-4 cs-animate-in">

              {/* KPI Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <KpiCard label="Kurikulum Inti" value={coreCompletedCount} sub={`/ ${coreTotal} Modul`} accent="#CEFA50">
                  <div>
                    <div className="w-full rounded-full h-1.5 overflow-hidden mb-1" style={{ background: 'rgba(255,255,255,0.07)' }}>
                      <div style={{ width: `${corePercentage}%`, background: '#CEFA50' }} className="h-full rounded-full transition-all duration-700" />
                    </div>
                    <span className="text-[10px] font-mono" style={{ color: '#5E5A58' }}>{corePercentage}% Fondasi Tuntas</span>
                  </div>
                </KpiCard>

                <KpiCard label="Streak Belajar" value={progress.streak.currentStreak} sub="Hari Aktif" accent="#FF7A5C">
                  <p className="text-[11px] font-mono" style={{ color: '#5E5A58' }}>Rekor: {progress.streak.longestStreak} hari</p>
                </KpiCard>

                <KpiCard label="Bank Khilaf (SRS)" value={mistakeCount} sub="Item Tersimpan" accent="#B69DFA">
                  <Link href="/" className="text-[11px] font-mono hover:underline block" style={{ color: '#B69DFA' }}>
                    Uji Ulang di Vault
                  </Link>
                </KpiCard>

                <KpiCard label="Writing Studio" value={progress.writingSubmissions.length} sub="Esai Tersimpan" accent="#6BCFFF">
                  <Link href="/writing-pad" className="text-[11px] font-mono hover:underline block" style={{ color: '#6BCFFF' }}>
                    Tulis Esai Baru
                  </Link>
                </KpiCard>
              </div>

              {/* Stage Matrix + Quick Hub */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

                {/* Stage Progress Matrix */}
                <div className="lg:col-span-2 cs-card p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: '#5E5A58' }}>
                        Matriks 10 Tahap
                      </p>
                      <h3 className="text-base font-bold" style={{ color: '#F0ECE6' }}>
                        Progres Kurikulum (40 Modul)
                      </h3>
                    </div>
                    <Link href="/" className="flex items-center gap-1 text-xs font-mono transition-opacity hover:opacity-80" style={{ color: '#CEFA50' }}>
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
                        <div key={stageName} className="cs-inner p-3 space-y-2 flex flex-col justify-between">
                          <div className="space-y-0.5">
                            <span className="text-[9px] font-mono font-bold uppercase" style={{ color: isDone ? '#CEFA50' : '#5E5A58' }}>
                              Tahap {sIdx}
                            </span>
                            <p className="text-[11px] font-semibold leading-snug line-clamp-2" style={{ color: isDone ? '#F0ECE6' : '#A8A4A0' }}>
                              {stageName}
                            </p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] font-mono" style={{ color: '#5E5A58' }}>
                              <span>{stageCompleted}/{stageModules.length}</span>
                              <span style={{ color: isDone ? '#CEFA50' : '#F0ECE6' }}>{stagePct}%</span>
                            </div>
                            <div className="w-full rounded-full h-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                              <div
                                style={{ width: `${stagePct}%`, background: isDone ? '#CEFA50' : '#B69DFA' }}
                                className="h-full rounded-full transition-all duration-500"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Hub */}
                <div className="cs-card p-5 space-y-3">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: '#5E5A58' }}>
                    Pusat Studi Cepat
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { href: '/writing-pad', icon: PenTool, label: 'Writing Pad', sub: 'Simulasi Esai', accent: '#B69DFA' },
                      { href: '/exam', icon: GraduationCap, label: 'IELTS & TOEFL', sub: 'Diagnostic', accent: '#FF7A5C' },
                      { href: '/vocabulary', icon: BookmarkIcon, label: 'AWL Lexicon', sub: 'Academic Words', accent: '#CEFA50' },
                      { href: '/', icon: Layers, label: '40 Modul', sub: 'Workspace Inti', accent: '#6BCFFF' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href} className="cs-inner p-3 flex flex-col gap-1.5 transition-all active:scale-95">
                          <Icon className="w-4 h-4" style={{ color: item.accent }} />
                          <span className="text-xs font-bold leading-tight" style={{ color: '#F0ECE6' }}>{item.label}</span>
                          <span className="text-[10px]" style={{ color: '#5E5A58' }}>{item.sub}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Tracks + Right column */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

                {/* Track List */}
                <div className="lg:col-span-7 cs-card p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: '#5E5A58' }}>
                        Jalur Studi Mandiri
                      </p>
                      <h3 className="text-base font-bold" style={{ color: '#F0ECE6' }}>
                        Track Spesialisasi
                      </h3>
                    </div>
                    <Link href="/learn" className="text-xs font-mono flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: '#B69DFA' }}>
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
                          className="cs-inner flex items-center gap-3 p-3 pr-4 transition-all active:scale-[0.99] group block"
                        >
                          <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[12px] font-bold truncate" style={{ color: '#F0ECE6' }}>
                                {track.title}
                              </span>
                              <span
                                className="text-[9px] font-mono px-1.5 py-0.5 rounded-md shrink-0"
                                style={{ background: 'rgba(255,255,255,0.07)', color: '#A8A4A0' }}
                              >
                                {track.badgeText}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 rounded-full h-1 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                <div
                                  style={{
                                    width: `${trackPct}%`,
                                    background: track.level === 'exam-prep' ? '#CEFA50' : '#B69DFA',
                                  }}
                                  className="h-full rounded-full transition-all"
                                />
                              </div>
                              <span className="text-[10px] font-mono shrink-0" style={{ color: '#5E5A58' }}>
                                {doneCount}/{track.totalLessons}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: '#A8A4A0' }} />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Right column */}
                <div className="lg:col-span-5 space-y-3">

                  {/* Daily Goal */}
                  <div className="cs-card p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(206, 250, 80, 0.12)' }}>
                        <Target className="w-4 h-4" style={{ color: '#CEFA50' }} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#F0ECE6' }}>
                          Target Belajar Harian
                        </p>
                        <span className="text-[10px] font-mono" style={{ color: '#CEFA50' }}>20 Menit / Hari</span>
                      </div>
                    </div>
                    <p className="text-[11px] leading-relaxed" style={{ color: '#5E5A58' }}>
                      Minimal 1 modul + 10 kartu Oxford 3000 setiap hari untuk retensi 90%+.
                    </p>
                  </div>

                  {/* Backup */}
                  <div className="cs-card p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(107, 207, 255, 0.12)' }}>
                        <Archive className="w-4 h-4" style={{ color: '#6BCFFF' }} />
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#F0ECE6' }}>
                        Cadangan & Portabilitas
                      </p>
                    </div>
                    <p className="text-[11px] leading-relaxed" style={{ color: '#5E5A58' }}>
                      Amankan histori belajar, bank khilaf, dan esai ke file JSON.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => {
                          try {
                            const backupData: Record<string, string | null> = {};
                            for (let i = 0; i < localStorage.length; i++) {
                              const key = localStorage.key(i);
                              if (key && key.startsWith('meraki_')) {
                                backupData[key] = localStorage.getItem(key);
                              }
                            }
                            const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `meraki-backup-${new Date().toISOString().split('T')[0]}.json`;
                            a.click();
                            URL.revokeObjectURL(url);
                          } catch (e) { alert('Gagal mengekspor data.'); }
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95"
                        style={{ background: 'rgba(107, 207, 255, 0.12)', border: '1px solid rgba(107, 207, 255, 0.2)', color: '#6BCFFF' }}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Ekspor (.json)</span>
                      </button>
                      <label
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#A8A4A0' }}
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Impor</span>
                        <input
                          type="file"
                          accept=".json"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = (event) => {
                              try {
                                const parsed = JSON.parse(event.target?.result as string);
                                Object.entries(parsed).forEach(([key, val]) => {
                                  if (typeof val === 'string') localStorage.setItem(key, val);
                                });
                                alert('Data berhasil dipulihkan! Halaman akan dimuat ulang.');
                                window.location.reload();
                              } catch (err) { alert('File cadangan tidak valid.'); }
                            };
                            reader.readAsText(file);
                          }}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Bookmarks */}
                  <div className="cs-card p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(182, 157, 250, 0.12)' }}>
                          <Bookmark className="w-4 h-4" style={{ color: '#B69DFA' }} />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#F0ECE6' }}>
                          Tersimpan
                        </p>
                      </div>
                      <span className="text-[10px] font-mono" style={{ color: '#5E5A58' }}>
                        {bookmarkedLessonsData.length} item
                      </span>
                    </div>
                    {bookmarkedLessonsData.length === 0 ? (
                      <p className="text-[11px] py-3 text-center" style={{ color: '#5E5A58' }}>
                        Belum ada materi tersimpan. Klik ikon bookmark pada pelajaran.
                      </p>
                    ) : (
                      <div className="space-y-1.5 max-h-[200px] overflow-y-auto cs-scroll pr-1">
                        {bookmarkedLessonsData.map((l) => (
                          <Link key={l.id} href={`/learn/${l.trackId}/${l.slug}`} className="cs-inner p-2.5 block transition-all">
                            <span className="text-xs font-bold line-clamp-1 block" style={{ color: '#F0ECE6' }}>{l.title}</span>
                            <span className="text-[10px] font-mono" style={{ color: '#5E5A58' }}>{l.difficulty} · {l.readTimeMin}m</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BookmarkIcon alias untuk menghindari konflik nama
const BookmarkIcon = Library;
