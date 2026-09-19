'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  Lightbulb,
  Home,
  LayoutDashboard,
  Library,
  PenTool,
  Menu,
  X,
  Zap,
  Star,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MultipleChoice } from '@/components/exercises/MultipleChoice';
import { FillInBlank } from '@/components/exercises/FillInBlank';
import { MatchingPairs } from '@/components/exercises/MatchingPairs';
import { ShadowingPlayer } from '@/components/exercises/ShadowingPlayer';
import { WritingRubric } from '@/components/exercises/WritingRubric';
import { getLessonBySlug } from '@/data/tracks';
import { progressRepository } from '@/services/storage';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

// ─── Sidebar nav config ────────────────────────────────────────────────────────
const sidebarSections = [
  {
    title: 'Belajar',
    items: [
      { href: '/', label: 'Workspace', icon: Home },
      { href: '/learn', label: 'Kurikulum Tracks', icon: BookOpen },
      { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Alat',
    items: [
      { href: '/exam', label: 'IELTS & TOEFL', icon: Award },
      { href: '/vocabulary', label: 'AWL Lexicon', icon: Library },
      { href: '/writing-pad', label: 'Writing Studio', icon: PenTool },
    ],
  },
];

// ─── Sidebar Component ─────────────────────────────────────────────────────────
function MISidebar({
  pathname,
  isMobileOpen,
  onClose,
}: {
  pathname: string;
  isMobileOpen: boolean;
  onClose: () => void;
}) {
  const accent = '#7C6EEA';
  const inner = (
    <>
      <div className="space-y-5">
        <div className="flex items-center justify-between px-1 pt-1">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #7C6EEA 0%, #9B90F2 100%)' }}
            >
              <span className="text-[13px] font-black" style={{ color: '#0F0F16' }}>M</span>
            </div>
            <div>
              <h1 className="text-[13px] font-bold tracking-tight leading-tight" style={{ color: '#E8E8F0' }}>
                Meraki
              </h1>
              <p className="text-[9px] font-medium tracking-wider uppercase" style={{ color: '#46465A' }}>
                English Studio
              </p>
            </div>
          </div>
          {isMobileOpen && (
            <button
              onClick={onClose}
              className="md:hidden p-1.5 rounded-lg hover:bg-white/5"
              style={{ color: '#8A8AA8' }}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <nav className="space-y-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="space-y-0.5">
              <div className="px-2.5 pb-1 text-[9px] font-bold uppercase tracking-wider" style={{ color: '#46465A' }}>
                {section.title}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = item.href === '/learn'
                  ? pathname.startsWith('/learn')
                  : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={clsx(
                      'w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl text-left transition-all duration-150 text-[12px]',
                      isActive ? 'mi-nav-active' : 'hover:bg-white/[0.05]'
                    )}
                    style={{ color: isActive ? '#E8E8F0' : '#8A8AA8' }}
                  >
                    <Icon
                      className="w-4 h-4 stroke-[1.75] shrink-0"
                      style={{ color: isActive ? accent : undefined, opacity: isActive ? 1 : 0.55 }}
                    />
                    <span className="truncate">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      <div className="pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="mi-inner p-2.5 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(124, 110, 234, 0.15)' }}>
            <Zap className="w-3.5 h-3.5" style={{ color: '#7C6EEA' }} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold truncate" style={{ color: '#E8E8F0' }}>Mode Belajar Aktif</p>
            <p className="text-[9px]" style={{ color: '#46465A' }}>Data tersimpan lokal</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="mi-slab meraki-ink hidden md:flex w-56 xl:w-60 h-full flex-col justify-between p-4 shrink-0 z-20 select-none">
        {inner}
      </aside>
      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden flex" onClick={onClose}>
          <aside
            className="mi-slab meraki-ink w-64 h-full flex flex-col justify-between p-4 select-none shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {inner}
          </aside>
        </div>
      )}
    </>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function LessonViewClient({
  trackSlug,
  lessonSlug,
}: {
  trackSlug: string;
  lessonSlug: string;
}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<'content' | 'practice' | 'summary'>('content');
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="meraki-ink mi-canvas min-h-screen flex items-center justify-center">
        <div className="mi-card p-8 text-center space-y-4 max-w-sm mx-4">
          <p className="text-sm font-mono" style={{ color: '#8A8AA8' }}>Pelajaran tidak ditemukan.</p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all"
            style={{ background: '#7C6EEA', color: '#fff' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Kurikulum</span>
          </Link>
        </div>
      </div>
    );
  }

  const { track, lesson, exercises } = lessonData;

  const handleMarkComplete = async () => {
    await progressRepository.markLessonComplete(lesson.id);
    setIsCompleted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleToggleBookmark = async () => {
    const res = await progressRepository.toggleBookmark(lesson.id);
    setIsBookmarked(res);
  };

  const accent = '#7C6EEA';
  const accentDim = 'rgba(124, 110, 234, 0.12)';
  const accentBorder = 'rgba(124, 110, 234, 0.25)';

  return (
    <div className="meraki-ink mi-canvas flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex-1 flex gap-3 p-3 md:p-4 lg:p-5 min-h-0 overflow-hidden max-w-[1800px] w-full mx-auto">

        {/* Sidebar */}
        <MISidebar
          pathname={pathname}
          isMobileOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Main Column */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden gap-3">

          {/* Top Dock */}
          <div className="mi-dock shrink-0 flex items-center justify-between px-3.5 sm:px-5 py-3 gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl border border-white/10 hover:bg-white/5 active:scale-95 shrink-0"
                style={{ color: '#E8E8F0' }}
              >
                <Menu className="w-4 h-4" />
              </button>
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 min-w-0 text-[11px] font-mono">
                <Link href="/learn" className="transition-colors truncate shrink-0" style={{ color: '#46465A' }}>
                  Tracks
                </Link>
                <span style={{ color: '#46465A' }}>/</span>
                <span className="truncate" style={{ color: '#8A8AA8' }}>{track.title}</span>
                <span style={{ color: '#46465A' }}>/</span>
                <span className="truncate font-semibold" style={{ color: '#E8E8F0' }}>{lesson.title}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {/* Bookmark */}
              <button
                onClick={handleToggleBookmark}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all"
                style={isBookmarked
                  ? { background: accentDim, border: `1px solid ${accentBorder}`, color: '#9B90F2' }
                  : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: '#8A8AA8' }
                }
              >
                <Bookmark className="w-3.5 h-3.5" fill={isBookmarked ? 'currentColor' : 'none'} />
                <span>{isBookmarked ? 'Tersimpan' : 'Simpan'}</span>
              </button>
              {/* Mark complete */}
              <button
                onClick={handleMarkComplete}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:opacity-90 active:scale-95"
                style={isCompleted
                  ? { background: 'rgba(124,110,234,0.18)', border: `1px solid ${accentBorder}`, color: '#9B90F2' }
                  : { background: accent, color: '#fff' }
                }
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">{isCompleted ? 'Selesai' : 'Tandai Selesai'}</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="mi-slab flex-1 min-h-0 overflow-y-auto mi-scroll">
            <div className="p-5 md:p-6 space-y-5 mi-fade-in">

              {/* Lesson header */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold"
                    style={{ background: accentDim, border: `1px solid ${accentBorder}`, color: '#9B90F2' }}
                  >
                    Pelajaran {lesson.order}
                  </span>
                  <span
                    className="font-mono text-[10px] px-2.5 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)', color: '#8A8AA8' }}
                  >
                    {lesson.difficulty}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono" style={{ color: '#46465A' }}>
                    <Clock className="w-3 h-3" />
                    {lesson.readTimeMin} menit
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold leading-tight" style={{ color: '#E8E8F0' }}>
                  {lesson.title}
                </h1>
                <p className="text-sm leading-relaxed" style={{ color: '#8A8AA8' }}>
                  {lesson.summary}
                </p>
              </div>

              {/* Tab Bar */}
              <div
                className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl w-fit"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {([
                  { key: 'content', label: `Materi (${lesson.sections.length})`, icon: BookOpen },
                  { key: 'practice', label: `Latihan (${exercises.length})`, icon: ListCheck },
                  { key: 'summary', label: 'Rangkuman', icon: Lightbulb },
                ] as const).map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className="px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2"
                    style={activeTab === key
                      ? { background: accent, color: '#fff', fontWeight: 700 }
                      : { color: '#8A8AA8' }
                    }
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

                {/* Main content col */}
                <div className="lg:col-span-8 space-y-5">

                  {/* TAB 1: CONTENT */}
                  {activeTab === 'content' && (
                    <div className="space-y-5 mi-fade-in">

                      {/* Objectives */}
                      <div
                        className="p-5 rounded-2xl space-y-3"
                        style={{ background: accentDim, border: `1px solid ${accentBorder}` }}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold flex items-center gap-2" style={{ color: '#9B90F2' }}>
                          <Sparkles className="w-3.5 h-3.5" />
                          Target Pembelajaran
                        </span>
                        <ul className="space-y-2">
                          {lesson.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: '#E8E8F0' }}>
                              <span className="font-bold mt-0.5 shrink-0" style={{ color: accent }}>✓</span>
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Sections */}
                      {lesson.sections.map((section) => (
                        <div key={section.id} className="mi-card p-5 sm:p-6 space-y-5">
                          <div className="space-y-1.5">
                            {section.badge && (
                              <span
                                className="font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold inline-block"
                                style={{ background: accentDim, color: '#9B90F2', border: `1px solid ${accentBorder}` }}
                              >
                                {section.badge}
                              </span>
                            )}
                            <h3 className="text-xl font-serif font-bold" style={{ color: '#E8E8F0' }}>{section.title}</h3>
                          </div>

                          <div className="text-sm leading-relaxed whitespace-pre-line space-y-4" style={{ color: '#C8C8D8' }}>
                            {section.content}
                          </div>

                          {/* Rule Box */}
                          {section.ruleBox && (
                            <div
                              className="p-4 rounded-xl space-y-2 font-mono text-xs"
                              style={{ background: 'rgba(124,110,234,0.08)', border: '1px solid rgba(124,110,234,0.2)' }}
                            >
                              <div className="font-bold uppercase tracking-wider" style={{ color: '#9B90F2' }}>
                                Rumus / Formula:
                              </div>
                              <div
                                className="p-3 rounded-lg font-medium"
                                style={{ background: 'rgba(255,255,255,0.06)', color: '#E8E8F0', border: '1px solid rgba(255,255,255,0.08)' }}
                              >
                                {section.ruleBox.formula}
                              </div>
                              <p className="font-sans" style={{ color: '#8A8AA8' }}>
                                {section.ruleBox.explanation}
                              </p>
                              {section.ruleBox.pitfall && (
                                <p className="font-sans font-semibold" style={{ color: '#9B90F2' }}>
                                  ⚠️ Jebakan Umum: {section.ruleBox.pitfall}
                                </p>
                              )}
                            </div>
                          )}

                          {/* Examples */}
                          {section.examples && section.examples.length > 0 && (
                            <div className="space-y-2.5">
                              <span className="font-mono text-[10px] uppercase tracking-wider block font-semibold" style={{ color: '#46465A' }}>
                                Contoh Kalimat:
                              </span>
                              {section.examples.map((ex, i) => (
                                <div key={i} className="mi-inner p-4 space-y-1.5">
                                  <div className="flex items-center justify-between gap-2">
                                    <p className="font-serif text-sm italic" style={{ color: '#E8E8F0' }}>
                                      "{ex.sentence}"
                                    </p>
                                    <button
                                      onClick={() => playTextToSpeech(ex.sentence)}
                                      className="p-1.5 rounded-lg transition-colors shrink-0"
                                      style={{ color: accent }}
                                    >
                                      <Volume2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                  {ex.translation && (
                                    <p className="text-xs" style={{ color: '#8A8AA8' }}>{ex.translation}</p>
                                  )}
                                  {ex.explanation && (
                                    <p className="text-xs font-mono" style={{ color: '#6A6A84' }}>{ex.explanation}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Callout */}
                          {section.callout && (
                            <div
                              className="p-4 rounded-xl text-xs sm:text-sm space-y-1"
                              style={
                                section.callout.type === 'tip'
                                  ? { background: 'rgba(124,110,234,0.08)', border: '1px solid rgba(124,110,234,0.2)', color: '#E8E8F0' }
                                  : section.callout.type === 'warning'
                                  ? { background: 'rgba(124,110,234,0.12)', border: '1px solid rgba(124,110,234,0.3)', color: '#E8E8F0' }
                                  : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#E8E8F0' }
                              }
                            >
                              <h4 className="font-bold">{section.callout.title}</h4>
                              <p className="leading-relaxed opacity-90">{section.callout.text}</p>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* CTA to practice */}
                      <div
                        className="p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
                        style={{ background: accentDim, border: `1px solid ${accentBorder}` }}
                      >
                        <div>
                          <h4 className="font-serif text-base font-bold" style={{ color: '#E8E8F0' }}>Sudah Memahami Kaidah?</h4>
                          <p className="text-xs" style={{ color: '#8A8AA8' }}>Uji pemahamanmu dengan latihan interaktif.</p>
                        </div>
                        <button
                          onClick={() => setActiveTab('practice')}
                          className="px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 hover:opacity-90 active:scale-95 shrink-0"
                          style={{ background: accent, color: '#fff' }}
                        >
                          <span>Mulai Latihan</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: PRACTICE */}
                  {activeTab === 'practice' && (
                    <div className="space-y-5 mi-fade-in">
                      {exercises.length === 0 ? (
                        <div className="mi-card p-12 text-center">
                          <p className="text-sm" style={{ color: '#46465A' }}>Latihan untuk modul ini sedang disiapkan.</p>
                        </div>
                      ) : (
                        exercises.map((exercise, idx) => (
                          <div key={exercise.id} className="mi-card p-5 sm:p-6 space-y-5">
                            <div
                              className="flex items-center pb-4 border-b"
                              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                            >
                              <span className="font-mono text-[10px] font-bold uppercase tracking-wider" style={{ color: '#9B90F2' }}>
                                Soal {idx + 1} dari {exercises.length}
                              </span>
                            </div>
                            {exercise.type === 'multiple-choice' && <MultipleChoice exercise={exercise} />}
                            {exercise.type === 'fill-blank' && <FillInBlank exercise={exercise} />}
                            {exercise.type === 'matching' && <MatchingPairs exercise={exercise} />}
                            {exercise.type === 'shadowing' && <ShadowingPlayer exercise={exercise} />}
                            {exercise.type === 'writing-rubric' && <WritingRubric exercise={exercise} />}
                          </div>
                        ))
                      )}
                    </div>
                  )}

                  {/* TAB 3: SUMMARY */}
                  {activeTab === 'summary' && (
                    <div className="space-y-5 mi-fade-in">
                      <div className="mi-card p-5 sm:p-6 space-y-5">
                        <div className="space-y-1.5">
                          <span
                            className="font-mono text-[10px] px-2.5 py-0.5 rounded-full font-bold inline-block"
                            style={{ background: accentDim, color: '#9B90F2', border: `1px solid ${accentBorder}` }}
                          >
                            Executive Summary
                          </span>
                          <h3 className="text-xl font-serif font-bold" style={{ color: '#E8E8F0' }}>
                            Poin Kunci yang Harus Diingat
                          </h3>
                        </div>
                        <ul className="space-y-2.5">
                          {lesson.keyTakeaways.map((point, idx) => (
                            <li
                              key={idx}
                              className="mi-inner p-4 flex items-start gap-3 text-sm"
                              style={{ color: '#E8E8F0' }}
                            >
                              <span
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 font-bold"
                                style={{ background: accent, color: '#fff' }}
                              >
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Prev / Next nav */}
                  <div
                    className="pt-5 flex items-center justify-between border-t"
                    style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                  >
                    {lesson.prevLessonId ? (
                      <Link
                        href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.prevLessonId)?.slug || ''}`}
                        className="mi-inner px-4 py-2.5 text-xs font-mono flex items-center gap-2 transition-all"
                        style={{ color: '#8A8AA8' }}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Sebelumnya</span>
                      </Link>
                    ) : <div />}

                    {lesson.nextLessonId ? (
                      <Link
                        href={`/learn/${track.slug}/${track.lessons.find((l) => l.id === lesson.nextLessonId)?.slug || ''}`}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:opacity-90 active:scale-95"
                        style={{ background: accent, color: '#fff' }}
                      >
                        <span>Selanjutnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        href="/learn"
                        className="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all hover:opacity-90"
                        style={{ background: accentDim, border: `1px solid ${accentBorder}`, color: '#9B90F2' }}
                      >
                        <span>Selesai Track</span>
                        <CheckCircle className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right: Track Index Sidebar */}
                <div className="lg:col-span-4 sticky top-0 space-y-4">
                  <div className="mi-card p-4 space-y-3">
                    <div
                      className="flex items-center justify-between pb-3 border-b"
                      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                    >
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold" style={{ color: '#46465A' }}>
                        Daftar Isi Track
                      </span>
                      <span className="font-mono text-[10px] font-bold" style={{ color: '#9B90F2' }}>
                        {track.lessons.length} Pelajaran
                      </span>
                    </div>
                    <div className="space-y-1 max-h-[60vh] overflow-y-auto mi-scroll pr-1">
                      {track.lessons.map((item) => {
                        const isCurrent = item.id === lesson.id;
                        return (
                          <Link
                            key={item.id}
                            href={`/learn/${track.slug}/${item.slug}`}
                            className={clsx(
                              'block p-2.5 rounded-xl text-xs transition-all',
                              isCurrent ? 'mi-nav-active' : 'hover:bg-white/[0.04]'
                            )}
                            style={{ color: isCurrent ? '#E8E8F0' : '#8A8AA8' }}
                          >
                            <div className="flex items-center justify-between mb-0.5">
                              <span className="font-mono text-[9px] opacity-60">{String(item.order).padStart(2, '0')}</span>
                              <span className="font-mono text-[9px] opacity-60">{item.readTimeMin}m</span>
                            </div>
                            <span className="line-clamp-1 font-serif text-[12px]">{item.title}</span>
                          </Link>
                        );
                      })}
                    </div>
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
