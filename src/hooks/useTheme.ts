'use client';

import { useState, useEffect, useCallback } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((mode: ThemeMode) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const isDark =
      mode === 'dark' ||
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#000000');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', '#F4F7F9');
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('meraki_theme') as ThemeMode | null;
      if (stored && (stored === 'light' || stored === 'dark' || stored === 'system')) {
        setTheme(stored);
        applyTheme(stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialMode: ThemeMode = prefersDark ? 'dark' : 'light';
        setTheme(initialMode);
        applyTheme(initialMode);
      }
    } catch (e) {
      applyTheme('light');
    }

    // Handle system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const current = localStorage.getItem('meraki_theme');
      if (!current || current === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [applyTheme]);

  const updateTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('meraki_theme', newTheme);
    } catch (e) {}
    applyTheme(newTheme);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('meraki-theme-change'));
    }
  };

  const toggleTheme = () => {
    if (typeof document === 'undefined') return;
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    const nextTheme: ThemeMode = isCurrentlyDark ? 'light' : 'dark';
    updateTheme(nextTheme);
  };

  const isDark = mounted
    ? (typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false)
    : false;

  return { 
    theme, 
    updateTheme, 
    toggleTheme, 
    isDark 
  };
}
