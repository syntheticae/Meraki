'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BookOpen, 
  Sparkles, 
  Award, 
  PenTool, 
  LayoutDashboard, 
  Menu, 
  X, 
  Library, 
  ArrowLeft, 
  Home,
  Flame,
  Search
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SpotlightSearch } from '@/components/search/SpotlightSearch';
import { clsx } from 'clsx';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navLinks = [
    { href: '/', label: 'Workspace Utama', count: '36 Modul', icon: Home },
    { href: '/learn', label: 'Kurikulum Tracks', count: '7 Jalur', icon: BookOpen },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/exam', label: 'IELTS & TOEFL', count: 'Band 7+', icon: Award },
    { href: '/vocabulary', label: 'AWL Lexicon', count: 'Oxford', icon: Library },
    { href: '/writing-pad', label: 'Writing Studio', count: '7 Prompt', icon: PenTool },
  ];

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 z-40 w-full pt-safe transition-all duration-200',
          scrolled
            ? 'bg-[#EFE9DF]/90 dark:bg-[#141210]/90 backdrop-blur-md border-b border-[#C8C0B0] dark:border-[#3A352D] shadow-xs'
            : 'bg-[#EFE9DF] dark:bg-[#141210] border-b border-[#C8C0B0] dark:border-[#3A352D]'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand & Back to Home */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-xl bg-[#1E1B17] dark:bg-[#D45B34] text-[#EFE9DF] dark:text-white flex items-center justify-center text-sm font-serif group-hover:bg-[#A84A28] transition-colors shadow-xs">
                ✺
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-[#1E1B17] dark:text-[#EFEAE1] font-semibold leading-none">
                  Meraki <span className="italic text-[#A84A28] dark:text-[#D45B34]">English</span>
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#7A7265] dark:text-[#948B7C] mt-0.5">
                  Academic & Precision
                </span>
              </div>
            </Link>

            {/* Quick Back to Main Workspace pill if not on home */}
            {pathname !== '/' && (
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#DDD7CA] dark:bg-[#28241F] hover:bg-[#C8C0B0] dark:hover:bg-[#3A352D] text-xs font-mono text-[#1E1B17] dark:text-[#EFEAE1] transition-all tactile-btn"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Workspace 35 Modul</span>
              </Link>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#DDD7CA] dark:bg-[#1E1B17] px-2 py-1 rounded-2xl border border-[#C8C0B0] dark:border-[#3A352D]">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-1.5 tactile-btn',
                    isActive
                      ? 'bg-[#1E1B17] text-[#EFE9DF] dark:bg-[#D45B34] dark:text-white font-bold shadow-xs'
                      : 'text-[#524C42] dark:text-[#C4BCAD] hover:text-[#1E1B17] dark:hover:text-[#EFEAE1] hover:bg-[#C8C0B0]/60 dark:hover:bg-[#28241F]'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Spotlight Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-xl bg-[#DDD7CA] dark:bg-[#28241F] hover:bg-[#C8C0B0] dark:hover:bg-[#3A352D] text-[#1E1B17] dark:text-[#EFEAE1] transition-colors tactile-btn flex items-center gap-2 text-xs font-mono"
              title="Cari Materi & Kosakata (Cmd+K)"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-[#7A7265] dark:text-[#948B7C]" />
              <span className="hidden xl:inline text-[#7A7265] dark:text-[#948B7C]">Cari...</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 rounded bg-[#C8C0B0] dark:bg-[#3A352D] text-[10px] text-[#524C42] dark:text-[#C4BCAD]">⌘K</kbd>
            </button>

            {/* Obsidian Dark Mode Toggle */}
            <ThemeToggle />

            <Link
              href="/"
              className="sm:hidden p-2 rounded-xl bg-[#DDD7CA] dark:bg-[#28241F] text-[#1E1B17] dark:text-[#EFEAE1] text-xs font-mono flex items-center gap-1"
              title="Kembali ke Workspace"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#DDD7CA] dark:bg-[#28241F] hover:bg-[#C8C0B0] dark:hover:bg-[#3A352D] text-[#1E1B17] dark:text-[#EFEAE1] transition-colors tactile-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#E8E2D6] dark:bg-[#1A1714] border-b border-[#C8C0B0] dark:border-[#3A352D] px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
            <div className="text-[10px] font-mono uppercase text-[#7A7265] dark:text-[#948B7C] px-2 font-semibold">
              Navigasi Halaman
            </div>
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'w-full p-3 rounded-2xl text-xs font-mono transition-all flex items-center justify-between tactile-btn',
                    isActive
                      ? 'bg-[#1E1B17] text-[#EFE9DF] dark:bg-[#D45B34] dark:text-white font-bold shadow-xs'
                      : 'bg-[#DDD7CA] dark:bg-[#28241F] text-[#1E1B17] dark:text-[#EFEAE1] hover:bg-[#C8C0B0]'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </div>
                  {link.count && (
                    <span className={clsx(
                      'text-[10px] px-2 py-0.5 rounded-md font-mono',
                      isActive ? 'bg-white/20 text-white' : 'bg-[#C8C0B0] dark:bg-[#3A352D] text-[#524C42] dark:text-[#C4BCAD]'
                    )}>
                      {link.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Spotlight Search Modal */}
      <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
