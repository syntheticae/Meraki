'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Sparkles, Award, PenTool, LayoutDashboard, Menu, X, Library } from 'lucide-react';
import { StreakWidget } from '@/components/ui/StreakWidget';
import { clsx } from 'clsx';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/learn', label: 'Curriculum', count: '7 Tracks', icon: BookOpen },
    { href: '/vocabulary', label: 'Vocabulary', count: 'AWL', icon: Library },
    { href: '/writing-pad', label: 'Writing Studio', count: 'Rubrics', icon: PenTool },
    { href: '/exam', label: 'IELTS & TOEFL', count: 'Band 7+', icon: Award },
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-[#F7F3EB]/85 backdrop-blur-md border-b border-[#1A1714]/10 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-full bg-[#1A1714] text-[#F7F3EB] flex items-center justify-center text-sm font-serif group-hover:scale-105 transition-transform">
            ✺
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-tight text-[#1A1714] font-normal leading-none">
              Meraki <span className="italic text-[#C4502A]">English</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-[#82796A] mt-0.5">
              From Basic to IELTS & TOEFL
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2',
                  isActive
                    ? 'bg-[#1A1714] text-white shadow-xs'
                    : 'text-[#38332C] hover:text-[#1A1714] hover:bg-black/05'
                )}
              >
                <span>{link.label}</span>
                {link.count && !isActive && (
                  <span className="font-mono text-[10px] text-[#82796A] tracking-wider">
                    ·{link.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-4">
          <StreakWidget />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/70 border border-white/80 text-[#1A1714] hover:bg-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EB]/95 backdrop-blur-xl border-b border-[#1A1714]/10 px-6 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'flex items-center justify-between p-3.5 rounded-xl text-sm font-medium transition-all',
                  isActive
                    ? 'bg-[#1A1714] text-white'
                    : 'bg-white/60 text-[#1A1714] hover:bg-white'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 opacity-70" />
                  <span>{link.label}</span>
                </div>
                {link.count && (
                  <span className="font-mono text-xs opacity-60">{link.count}</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
