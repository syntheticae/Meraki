'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Library,
  Star,
  Sparkles,
  ListCheck,
  Table,
  Database,
} from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { UserProgress } from '@/types/user';
import { getAllLessons, TRACKS } from '@/data/tracks';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';
import { clsx } from 'clsx';

// ─── KPI Card ─────────────────────────────────────────────────────────────────
interface KpiCardProps {
  label: string;
  value: string | number;
  sub: string;
  accent?: string;
  children?: React.ReactNode;
}

function KpiCard({ label, value, sub, children }: KpiCardProps) {
  return (
    <div className="p-5 space-y-2 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs transition-all hover:border-[#00638E] hover:shadow-sm">
      <span className="text-[10px] font-bold uppercase tracking-wider block text-[#334155] dark:text-[#8FA4AD]">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-[#00638E] dark:text-[#8CB9CC]">
          {value}
        </span>
        <span className="text-xs font-semibold text-[#334155] dark:text-[#BFD8E3]">{sub}</span>
      </div>
      {children}
    </div>
  );
}

interface DashboardOverviewViewProps {
  onTabChange: (tabId: string, options?: { topicId?: string; stageIdx?: number }) => void;
}

export function DashboardOverviewView({ onTabChange }: DashboardOverviewViewProps) {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    progressRepository.getProgress().then((p) => {
      setProgress(p);
      setMistakeCount(p.vaultItems?.length ?? 0);
    });
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  if (!progress) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="p-8 text-center space-y-2 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBDDE6] dark:border-white/10 shadow-xs">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin mx-auto"
            style={{ borderColor: '#00638E', borderTopColor: 'transparent' }}
          />
          <p className="text-xs font-mono text-[#334155] dark:text-[#8FA4AD]">
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
  const coreCompletedIds = progress.completedTopics ?? [];
  const coreCompletedCount = coreCompletedIds.length;
  const corePercentage = Math.round((coreCompletedCount / coreTotal) * 100);

  // Resume: last viewed topic
  const lastTopicId = progress.lastViewedTopicId;
  const lastTopic = lastTopicId ? MERAKI_CURRICULUM.find((m) => m.id === lastTopicId) : null;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">

      {/* Resume Card — shown when user has a last-viewed topic */}
      {lastTopic && (
        <div className="p-4 rounded-2xl bg-[#00638E]/10 border border-[#00638E]/25 dark:border-[#00638E]/30 flex items-center gap-4">
          <div className="w-9 h-9 rounded-xl bg-[#00638E] flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC]">
              Lanjutkan Belajar
            </p>
            <p className="text-sm font-bold text-[#0F172A] dark:text-white truncate">
              Modul {String(lastTopic.moduleNumber).padStart(2,'0')} — {lastTopic.title}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onTabChange('modules', { topicId: lastTopic.id })}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer"
          >
            <span>Lanjut</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <KpiCard label="Kurikulum Inti" value={coreCompletedCount} sub={'/ ' + coreTotal + ' Modul'}>
          <div>
            <div className="w-full rounded-full h-1.5 overflow-hidden mb-1 bg-black/5 dark:bg-white/10">
              <div
                style={{ width: animated ? `${corePercentage}%` : '0%' }}
                className="h-full rounded-full transition-all duration-700 bg-[#00638E]"
              />
            </div>
            <button
              type="button"
              onClick={() => onTabChange('modules')}
              className="text-[10px] font-mono text-[#00638E] dark:text-[#8CB9CC] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>{corePercentage}% Fondasi Tuntas →</span>
            </button>
          </div>
        </KpiCard>

        <KpiCard label="Streak Belajar" value={progress.streak.currentStreak} sub="Hari Aktif">
          <p className="text-[11px] font-mono font-medium text-[#475569] dark:text-[#8FA4AD]">
            {progress.streak.currentStreak === 0 ? 'Mulai sesi hari ini!' : `Rekor: ${progress.streak.longestStreak} hari`}
          </p>
        </KpiCard>

        <KpiCard label="Bank Khilaf (SRS)" value={mistakeCount} sub="Item Tersimpan">
          {mistakeCount > 0 ? (
            <button
              type="button"
              onClick={() => onTabChange('vault')}
              className="text-[11px] font-mono font-semibold hover:underline block text-[#00638E] dark:text-[#8CB9CC] cursor-pointer text-left"
            >
              Uji Ulang di Vault →
            </button>
          ) : (
            <p className="text-[11px] font-mono text-[#475569] dark:text-[#8FA4AD]">
              Vault bersih · Kerjakan soal untuk uji
            </p>
          )}
        </KpiCard>

        <KpiCard label="Writing Studio" value={progress.writingSubmissions.length} sub="Esai Tersimpan">
          <button
            type="button"
            onClick={() => onTabChange('writing-pad')}
            className="text-[11px] font-mono font-semibold hover:underline block text-[#00638E] dark:text-[#8CB9CC] cursor-pointer text-left"
          >
            Tulis Esai Baru →
          </button>
        </KpiCard>
      </div>


      {/* Stage Progress Matrix & Quick Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stage Progress Matrix */}
        <div className="lg:col-span-2 p-5 sm:p-6 space-y-4 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
                Matriks 10 Tahap
              </p>
              <h3 className="text-base sm:text-lg font-bold font-serif text-[#0F172A] dark:text-white">
                Progres Kurikulum (40 Modul)
              </h3>
            </div>
            <button
              type="button"
              onClick={() => onTabChange('modules')}
              className="flex items-center gap-1 text-xs font-mono font-bold transition-opacity hover:opacity-80 text-[#00638E] dark:text-[#8CB9CC] cursor-pointer"
            >
              <span>Buka Modul</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2.5">
            {stageNames.map((stageName, sIdx) => {
              const stageModules = MERAKI_CURRICULUM.filter((m) => m.stageName === stageName);
              const stageCompleted = stageModules.filter((m) => coreCompletedIds.includes(m.id)).length;
              const stagePct = Math.round((stageCompleted / stageModules.length) * 100);
              const isDone = stagePct === 100;
              const firstTopicOfStage = stageModules[0]?.id;
              return (
                <button
                  key={stageName}
                  type="button"
                  onClick={() => onTabChange('modules', { topicId: firstTopicOfStage, stageIdx: sIdx })}
                  className="p-3 space-y-2 flex flex-col justify-between rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] hover:bg-white dark:hover:bg-[#222222] transition-all text-left cursor-pointer group shadow-2xs"
                >
                  <div className="space-y-1">
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-[#00638E]/10 text-[#004A6B] dark:bg-[#00638E]/20 dark:text-[#8CB9CC]">
                      Tahap {sIdx + 1}
                    </span>
                    <p className="text-[11px] font-bold leading-snug line-clamp-2 text-[#0F172A] dark:text-[#E2E8F0]">
                      {stageName}
                    </p>
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex justify-between text-[10px] font-mono text-[#334155] dark:text-[#94A3B8] font-semibold">
                      <span>{stageCompleted}/{stageModules.length}</span>
                      <span className={isDone ? 'text-[#00638E] dark:text-[#8CB9CC] font-bold' : 'text-[#0F172A] dark:text-white'}>{stagePct}%</span>
                    </div>
                    <div className="w-full rounded-full h-1.5 overflow-hidden bg-[#CBD5E1] dark:bg-white/10">
                      <div
                        style={{ width: `${stagePct}%` }}
                        className="h-full rounded-full transition-all duration-500 bg-[#00638E]"
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Hub */}
        <div className="p-5 sm:p-6 space-y-3 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
            Pusat Studi Cepat
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { tabId: 'modules', icon: BookOpen, label: '40 Modul', sub: 'Kurikulum Lengkap', accent: '#00638E' },
              { tabId: 'practice', icon: ListCheck, label: 'Latihan Soal', sub: 'Sentence Doctor', accent: '#00638E' },
              { tabId: 'vault', icon: Archive, label: 'Bank Khilaf', sub: 'Mistake SRS', accent: '#00638E' },
              { tabId: 'matrices', icon: Table, label: 'Matriks Fondasi', sub: '16 Tenses & Verbs', accent: '#00638E' },
              { tabId: 'writing-pad', icon: PenTool, label: 'Writing Pad', sub: 'Simulasi Esai', accent: '#00638E' },
              { tabId: 'exam', icon: Award, label: 'IELTS & TOEFL', sub: 'Diagnostic & Mock', accent: '#00638E' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.tabId}
                  type="button"
                  onClick={() => onTabChange(item.tabId)}
                  className="p-3 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] hover:bg-white dark:hover:bg-[#222222] text-left transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/20 flex items-center justify-center text-[#00638E] dark:text-[#8CB9CC] group-hover:bg-[#00638E] group-hover:text-white transition-all">
                    <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                  </div>
                  <p className="font-bold text-xs mt-1 text-[#0F172A] dark:text-[#FFFFFF]">{item.label}</p>
                  <p className="text-[10px] font-medium text-[#475569] dark:text-[#94A3B8] truncate">{item.sub}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tracks + Right column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Track List */}
        <div className="lg:col-span-7 p-5 sm:p-6 space-y-4 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
                Jalur Studi Mandiri
              </p>
              <h3 className="text-base sm:text-lg font-bold font-serif text-[#0F172A] dark:text-white">
                Track Spesialisasi
              </h3>
            </div>
            <Link href="/learn" className="text-xs font-mono font-bold flex items-center gap-1 hover:opacity-80 transition-opacity text-[#00638E] dark:text-[#8CB9CC]">
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
                  className="flex items-center gap-3 p-3 pr-4 transition-all active:scale-[0.99] group rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] hover:bg-white dark:hover:bg-[#222222] shadow-2xs"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-bold truncate text-[#0F172A] dark:text-white">
                        {track.title}
                      </span>
                      <span
                        className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0 bg-[#E2ECF2] dark:bg-white/10 text-[#004A6B] dark:text-[#BFD8E3]"
                      >
                        {track.badgeText}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 rounded-full h-1.5 overflow-hidden bg-[#CBD5E1] dark:bg-white/10">
                        <div
                          style={{
                            width: animated ? `${trackPct}%` : '0%',
                          }}
                          className={clsx(
                            'h-full rounded-full transition-all duration-700',
                            track.level === 'exam-prep' ? 'bg-[#004A6B]' : 'bg-[#00638E]'
                          )}
                        />
                      </div>
                      <span className="text-[10px] font-mono font-semibold shrink-0 text-[#334155] dark:text-[#94A3B8]">
                        {doneCount}/{track.totalLessons}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 text-[#334155] group-hover:text-[#00638E] dark:text-[#BFD8E3] transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right column: Target & Data portability */}
        <div className="lg:col-span-5 space-y-4">
          {/* Daily Goal */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 bg-[#00638E]/15">
                <Target className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                  Target Belajar Harian
                </p>
                <span className="text-[10px] font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">20 Menit / Hari</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-[#334155] dark:text-[#94A3B8]">
              Minimal 1 modul + 10 kartu Oxford 3000 setiap hari untuk retensi memori 90%+.
            </p>
          </div>

          {/* Data Portability */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center shrink-0 bg-[#004A6B]/15">
                <Database className="w-4 h-4 text-[#004A6B] dark:text-[#BFD8E3]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                Cadangan & Portabilitas
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
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
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono transition-all bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:bg-[#00638E] hover:text-white text-[#0F172A] dark:text-white cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ekspor JSON</span>
              </button>
              <label className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-mono transition-all bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 hover:bg-[#00638E] hover:text-white text-[#0F172A] dark:text-white cursor-pointer">
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

          {/* Bookmarks Card with Empty State (Fix P7) */}
          <div className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <BookmarkIcon className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] dark:text-white">
                Materi Tersimpan ({bookmarkedLessonsData.length})
              </p>
            </div>
            {bookmarkedLessonsData.length > 0 ? (
              <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                {bookmarkedLessonsData.map((l) => (
                  <Link
                    key={l.id}
                    href={`/learn/${l.trackId}/${l.slug}`}
                    className="text-xs py-1.5 px-2.5 rounded-lg flex items-center justify-between hover:bg-[#F1F5F9] dark:hover:bg-white/5 text-[#334155] dark:text-[#BFD8E3] hover:text-[#00638E] dark:hover:text-white transition-colors"
                  >
                    <span className="truncate">{l.title}</span>
                    <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Tandai materi dengan ikon simpan di halaman modul agar tersimpan rapi untuk dipelajari kembali di sini.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
