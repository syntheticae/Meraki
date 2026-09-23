'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Award,
  PenTool,
  Home,
  LayoutDashboard,
  Library,
  Zap,
  Menu,
  X,
  Search,
  ListCheck,
  Layers,
  Table,
  Compass,
  Sparkles,
  Headphones,
  Shuffle,
  Archive,
  ShieldCheck,
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SpotlightSearch } from '@/components/search/SpotlightSearch';
import { clsx } from 'clsx';

export interface SidebarItem {
  id: string;
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    title: 'Analytics & Overview',
    items: [
      { id: 'dashboard', href: '/', label: 'Dashboard Utama', icon: LayoutDashboard, accent: '#00638E' },
    ],
  },
  {
    title: 'Kurikulum & Materi',
    items: [
      { id: 'modules', href: '/modules', label: 'Modul Materi (40 Bab)', icon: BookOpen, accent: '#00638E' },
      { id: 'practice', href: '/practice', label: 'Latihan & Bedah Soal', icon: ListCheck, accent: '#00638E' },
      { id: 'tracks', href: '/learn', label: '7 Jalur Kurikulum Tracks', icon: Layers, accent: '#8CB9CC' },
    ],
  },
  {
    title: 'Laboratorium Bahasa',
    items: [
      { id: 'matrices', href: '/matrices', label: 'Master Matriks Fondasi', icon: Table, accent: '#00638E' },
      { id: 'syntax', href: '/syntax', label: 'Studio Sintaksis & Parafrase', icon: Compass, accent: '#8CB9CC' },
      { id: 'collocations', href: '/collocations', label: 'Diksi ACL & Kolokasi', icon: Sparkles, accent: '#8CB9CC' },
      { id: 'phonetics', href: '/phonetics', label: 'Fonetik IPA & Minimal Pairs', icon: Headphones, accent: '#00638E' },
      { id: 'flashcards', href: '/flashcards', label: 'Oxford 3000 SRS Flashcard', icon: Shuffle, accent: '#8CB9CC' },
      { id: 'vocabulary', href: '/vocabulary', label: 'AWL Lexicon Oxford', icon: Library, accent: '#00638E' },
      { id: 'writing-pad', href: '/writing-pad', label: 'Writing Studio & Linter', icon: PenTool, accent: '#8CB9CC' },
    ],
  },
  {
    title: 'Ujian & Evaluasi',
    items: [
      { id: 'exam', href: '/exam', label: 'IELTS & TOEFL Hub', icon: Award, accent: '#00638E' },
      { id: 'vault', href: '/vault', label: 'Bank Khilaf (Mistake SRS)', icon: Archive, accent: '#00638E' },
      { id: 'diagnostic', href: '/diagnostic', label: 'Matriks Diagnostik CEFR', icon: ShieldCheck, accent: '#8CB9CC' },
    ],
  },
];

interface AppShellProps {
  children: React.ReactNode;
  category?: string;
  title?: string;
  headerAction?: React.ReactNode;
  activeTab?: string;
  onTabChange?: (tabId: string, opts?: { topicId?: string; stageIdx?: number }) => void;
}

export function AppShell({
  children,
  category = 'Scholar Analytics',
  title = 'Dashboard Progres',
  headerAction,
  activeTab,
  onTabChange,
}: AppShellProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && /Mac/.test(navigator.userAgent) && !('ontouchend' in document));
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Global Cmd+K keyboard shortcut
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

  const renderSidebarContent = () => (
    <div className="flex flex-col h-full justify-between p-4 overflow-hidden">
      <div className="flex flex-col flex-1 min-h-0 space-y-4">
        {/* Brand */}
        <div className="flex items-center justify-between px-1 pt-1 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform"
              style={{
                background:
                  'linear-gradient(135deg, #000000 0%, #004A6B 40%, #00638E 75%, #8CB9CC 100%)',
              }}
            >
              <span className="text-[13px] font-black text-white">M</span>
            </div>
            <div>
              <h1 className="text-[13px] font-bold tracking-tight leading-tight text-[#0F172A] dark:text-[#FFFFFF]">
                Meraki
              </h1>
              <p className="text-[11px] font-bold tracking-wider uppercase text-[#475569] dark:text-[#8CB9CC]">
                Oxford Studio
              </p>
            </div>
          </Link>
          {mobileMenuOpen && (
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-2 rounded-xl text-[#475569] hover:text-[#0F172A] dark:text-[#7A8992] dark:hover:text-[#FFFFFF] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Tutup Navigasi"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable Nav Sections */}
        <nav className="flex-1 overflow-y-auto pr-1 space-y-4 no-scrollbar">
          {sidebarSections.map((section) => (
            <div key={section.title} className="space-y-0.5">
              <div className="px-2.5 pb-1 text-[11px] font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
                {section.title}
              </div>
              {section.items.map((item) => {
                const isActive = activeTab
                  ? activeTab === item.id
                  : item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href + '/');
                const Icon = item.icon;

                if (onTabChange) {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      title={item.label}
                      onClick={() => onTabChange(item.id)}
                      className={clsx(
                        'w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all group tactile-btn cursor-pointer min-h-[38px]',
                        isActive
                          ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                          : 'text-[#1E293B] dark:text-[#BFD8E3] hover:text-[#004A6B] dark:hover:text-[#FFFFFF] hover:bg-[#E2ECF2]/70 dark:hover:bg-[#1C1C1C]'
                      )}
                    >
                      <Icon
                        className={clsx(
                          'w-4 h-4 shrink-0 transition-colors',
                          isActive
                            ? 'text-white'
                            : 'text-[#475569] dark:text-[#7A8992] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC]'
                        )}
                      />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    title={item.label}
                    className={clsx(
                      'flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all group tactile-btn min-h-[38px]',
                      isActive
                        ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                        : 'text-[#1E293B] dark:text-[#BFD8E3] hover:text-[#004A6B] dark:hover:text-[#FFFFFF] hover:bg-[#E2ECF2]/70 dark:hover:bg-[#1C1C1C]'
                    )}
                  >
                    <Icon
                      className={clsx(
                        'w-4 h-4 shrink-0 transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-[#475569] dark:text-[#7A8992] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC]'
                      )}
                    />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Footer Status Card */}
      <div className="pt-3 border-t border-[#CBD5E1] dark:border-white/10 shrink-0 mb-3">
        <div className="p-2.5 rounded-xl bg-white dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00638E] animate-pulse shrink-0" />
            <span className="text-[11px] font-bold text-[#0F172A] dark:text-[#FFFFFF]">
              Mode Belajar Aktif
            </span>
          </div>
          <p className="text-[10px] text-[#475569] dark:text-[#7A8992] mt-0.5 font-medium">
            Data tersimpan lokal
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-dvh w-full bg-[#DFE5EA] dark:bg-[#000000] text-[#0F172A] dark:text-[#FFFFFF] font-sans antialiased overflow-x-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 xl:w-64 shrink-0 flex-col bg-[#F1F5F9] dark:bg-[#141414] border-r border-[#CBD5E1] dark:border-white/10 sticky top-0 h-screen z-30">
        {renderSidebarContent()}
      </aside>

      {/* Mobile Drawer Backdrop & Sidebar */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden animate-in fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-64 max-w-[85vw] h-full bg-[#F1F5F9] dark:bg-[#141414] border-r border-[#CBD5E1] dark:border-white/10 shadow-2xl animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {renderSidebarContent()}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-dvh overflow-x-hidden">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-20 h-16 bg-[#FFFFFF]/95 dark:bg-[#000000]/85 backdrop-blur-md border-b border-[#CBD5E1] dark:border-white/10 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-xs">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl bg-[#F1F5F9] dark:bg-[#141414] hover:bg-[#E2E8F0] dark:hover:bg-[#1C1C1C] text-[#0F172A] dark:text-[#FFFFFF] border border-[#CBD5E1] dark:border-white/10 transition-colors cursor-pointer shadow-2xs min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Buka Navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Breadcrumb Title */}
            <div className="min-w-0">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#00638E] dark:text-[#8CB9CC] font-bold block">
                {category}
              </span>
              <h2 className="text-base sm:text-lg font-bold tracking-tight truncate text-[#0F172A] dark:text-[#FFFFFF]">
                {title}
              </h2>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Spotlight Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] text-xs text-[#0F172A] dark:text-[#8FA4AD] transition-colors tactile-btn cursor-pointer shadow-2xs"
              title={isMac ? "Cari Materi & Kosakata (Cmd+K)" : "Cari Materi & Kosakata (Ctrl+K)"}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Cari materi...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[#E2ECF2] dark:bg-[#2B2B2B] text-[10px] text-[#004A6B] dark:text-[#BFD8E3] font-mono font-semibold">
                {isMac ? '⌘K' : 'Ctrl+K'}
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Optional Header Action (e.g. Belajar ->) */}
            {headerAction}
          </div>
        </header>

        {/* Page Main Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl w-full mx-auto pb-24 md:pb-8">
          {children}
        </main>
      </div>

      {/* Global Spotlight Search Modal - conditionally mounted for performance */}
      {searchOpen && (
        <SpotlightSearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectTopic={(topicId) => onTabChange?.('modules', { topicId })}
        />
      )}
    </div>
  );
}
