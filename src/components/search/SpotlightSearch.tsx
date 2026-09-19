'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  BookOpen, 
  Table, 
  Award, 
  Sparkles, 
  Library, 
  PenTool, 
  ArrowRight, 
  CornerDownLeft, 
  X, 
  Compass 
} from 'lucide-react';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';
import { TRACKS } from '@/data/tracks';
import { clsx } from 'clsx';

export interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Modul Kurikulum' | 'Matriks Fondasi' | 'Jalur Belajar' | 'Simulasi Ujian' | 'Studio Menulis' | 'Kosakata';
  icon: any;
  action: () => void;
  badge?: string;
  keywords: string[];
}

export function SpotlightSearch({
  isOpen,
  onClose,
  onSelectTopic
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectTopic?: (topicId: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Build searchable index
  const searchableItems: SearchResultItem[] = [
    // 1. 35 Curriculum Modules
    ...MERAKI_CURRICULUM.map((mod) => ({
      id: `mod-${mod.id}`,
      title: `${mod.moduleNumber}. ${mod.title}`,
      subtitle: `${mod.stageName} · ${mod.subtitle}`,
      category: 'Modul Kurikulum' as const,
      icon: BookOpen,
      badge: mod.levelBadge,
      keywords: [mod.title, mod.subtitle, mod.stageName, mod.categoryKey, ...mod.goldenRules],
      action: () => {
        if (onSelectTopic) {
          onSelectTopic(mod.id);
        } else {
          router.push(`/?topic=${mod.id}`);
        }
        onClose();
      }
    })),

    // 2. 16 Master Matrices
    {
      id: 'matrix-irregular',
      title: 'Matriks 200+ Irregular Verbs',
      subtitle: 'Pola konjugasi V1-V2-V3, IPA phonetics, dan contoh kalimat akademis',
      category: 'Matriks Fondasi',
      icon: Table,
      badge: '200+ Verbs',
      keywords: ['irregular verbs', 'kata kerja tidak beraturan', 'v1 v2 v3', 'past simple', 'past participle'],
      action: () => {
        router.push('/?hub=matrices');
        onClose();
      }
    },
    {
      id: 'matrix-tenses',
      title: 'Matriks Logika 12 Tenses',
      subtitle: 'Dimensi waktu & aspek (Simple, Continuous, Perfect, Perfect Continuous)',
      category: 'Matriks Fondasi',
      icon: Table,
      badge: '12 Tenses',
      keywords: ['tenses', 'present', 'past', 'future', 'perfect continuous', 'rumus tenses'],
      action: () => {
        router.push('/?hub=matrices');
        onClose();
      }
    },
    {
      id: 'matrix-subjunctive',
      title: 'Matriks Subjunctive Mood & Mandative Verbs',
      subtitle: 'Kaidah bare infinitive pada kata kerja desakan & kata sifat esensial',
      category: 'Matriks Fondasi',
      icon: Table,
      badge: 'Band 8.5+',
      keywords: ['subjunctive', 'mandative', 'bare infinitive', 'demand that', 'crucial that'],
      action: () => {
        router.push('/?hub=matrices');
        onClose();
      }
    },
    {
      id: 'matrix-cleft',
      title: 'Matriks Cleft Sentences & Focusing Structures',
      subtitle: 'It-Cleft dan Wh-Pseudo Cleft untuk penekanan retoris tajam',
      category: 'Matriks Fondasi',
      icon: Table,
      badge: 'Emphatic',
      keywords: ['cleft sentences', 'it was that', 'pseudo-cleft', 'focusing', 'retorika'],
      action: () => {
        router.push('/?hub=matrices');
        onClose();
      }
    },
    {
      id: 'matrix-articles',
      title: 'Matriks Geographical Articles (The vs Zero Article)',
      subtitle: 'Aturan pemakaian artikel THE pada nama negara, samudra, sungai, dan gunung',
      category: 'Matriks Fondasi',
      icon: Table,
      badge: 'Geography',
      keywords: ['articles', 'geographical the', 'zero article', 'nama negara', 'mountains'],
      action: () => {
        router.push('/?hub=matrices');
        onClose();
      }
    },

    // 3. Learning Tracks
    ...TRACKS.map((t) => ({
      id: `track-${t.id}`,
      title: t.title,
      subtitle: t.subtitle,
      category: 'Jalur Belajar' as const,
      icon: Compass,
      badge: t.badgeText,
      keywords: [t.title, t.subtitle, t.description, t.category],
      action: () => {
        router.push(`/learn#${t.slug}`);
        onClose();
      }
    })),

    // 4. Exam Hubs & Mock Simulators
    {
      id: 'exam-ielts-hub',
      title: 'IELTS Academic Hub & Band 7.0+ Blueprint',
      subtitle: 'Bedah 4 modul IELTS dan simulasi mock exam waktu nyata',
      category: 'Simulasi Ujian',
      icon: Award,
      badge: 'IELTS',
      keywords: ['ielts', 'band 7', 'cambridge', 'task 1', 'task 2', 'ielts mock test'],
      action: () => {
        router.push('/exam/ielts');
        onClose();
      }
    },
    {
      id: 'exam-toefl-hub',
      title: 'TOEFL iBT Hub & Score 100+ Blueprint',
      subtitle: 'Format 2 jam ringkas, Academic Discussion Task, dan simulasi soal',
      category: 'Simulasi Ujian',
      icon: Award,
      badge: 'TOEFL',
      keywords: ['toefl', 'score 100', 'ets', 'academic discussion', 'toefl mock test'],
      action: () => {
        router.push('/exam/toefl');
        onClose();
      }
    },

    // 5. Writing Studio
    {
      id: 'writing-studio-pad',
      title: 'Writing Pad & Academic Assessment Studio',
      subtitle: 'Simulasi penulisan esai 40 menit dengan live word counter dan linter',
      category: 'Studio Menulis',
      icon: PenTool,
      badge: 'Writing',
      keywords: ['writing', 'essay', 'menulis esai', 'ielts task 2', 'toefl writing', 'rubrik'],
      action: () => {
        router.push('/writing-pad');
        onClose();
      }
    },

    // 6. Vocabulary & Lexicon
    {
      id: 'vocab-oxford-hub',
      title: 'Vocabulary Vault & Oxford 3000 Flashcards',
      subtitle: 'Flashcards interaktif dengan algoritma Leitner Spaced Repetition',
      category: 'Kosakata',
      icon: Library,
      badge: 'Oxford 3000',
      keywords: ['vocabulary', 'kosakata', 'oxford 3000', 'academic word list', 'flashcard', 'srs'],
      action: () => {
        router.push('/vocabulary');
        onClose();
      }
    }
  ];

  const filteredItems = query.trim() === ''
    ? searchableItems.slice(0, 8)
    : searchableItems.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.some((k) => k.toLowerCase().includes(q))
        );
      });

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-4 border-b border-[#BFD8E3]/40 dark:border-white/10 flex items-center gap-3 bg-[#EDF3F7] dark:bg-[#1C1C1C]/50">
          <Search className="w-5 h-5 text-[#50585C] dark:text-[#7A8992] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari materi, rumus tenses, modul, kosakata, atau matriks... (Ketik apa saja)"
            className="w-full bg-transparent text-sm sm:text-base text-[#141414] dark:text-[#FFFFFF] placeholder:text-[#50585C] dark:placeholder:text-[#7A8992] outline-hidden"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-[#50585C] dark:text-[#7A8992] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 flex-1 no-scrollbar">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center space-y-2">
              <Compass className="w-8 h-8 text-[#50585C] dark:text-[#7A8992] mx-auto stroke-1" />
              <p className="text-sm font-medium text-[#141414] dark:text-[#FFFFFF]">Tidak ada hasil yang cocok</p>
              <p className="text-xs text-[#50585C] dark:text-[#7A8992]">Coba kata kunci lain seperti "tenses", "passive", "vocabulary", atau "ielts".</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={clsx(
                    'w-full p-3 rounded-2xl text-left transition-all flex items-center justify-between gap-3 tactile-btn cursor-pointer',
                    isSelected
                      ? 'bg-[#00638E] text-white shadow-xs font-medium'
                      : 'hover:bg-[#EDF3F7] dark:hover:bg-[#1C1C1C] text-[#141414] dark:text-[#FFFFFF]'
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={clsx(
                      'p-2 rounded-xl shrink-0',
                      isSelected ? 'bg-white/15 text-white' : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#00638E] dark:text-[#8CB9CC]'
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-semibold truncate">{item.title}</span>
                        {item.badge && (
                          <span className={clsx(
                            'text-[10px] font-mono px-2 py-0.5 rounded-md font-bold shrink-0',
                            isSelected ? 'bg-white/20 text-white' : 'bg-[#BFD8E3]/30 dark:bg-[#2B2B2B] text-[#004A6B] dark:text-[#BFD8E3]'
                          )}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className={clsx(
                        'text-[11px] truncate',
                        isSelected ? 'text-white/80' : 'text-[#50585C] dark:text-[#7A8992]'
                      )}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={clsx(
                      'text-[10px] font-mono hidden sm:inline-block px-2 py-0.5 rounded-md',
                      isSelected ? 'bg-white/10 text-white' : 'text-[#50585C] dark:text-[#7A8992]'
                    )}>
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Guide */}
        <div className="p-3 border-t border-[#BFD8E3]/40 dark:border-white/10 bg-[#EDF3F7] dark:bg-[#1C1C1C]/40 flex items-center justify-between text-[11px] font-mono text-[#50585C] dark:text-[#7A8992]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#BFD8E3]/30 dark:bg-[#2B2B2B] text-[#141414] dark:text-[#FFFFFF] text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-[#BFD8E3]/30 dark:bg-[#2B2B2B] text-[#141414] dark:text-[#FFFFFF] text-[10px]">↓</kbd>
              <span>Navigasi</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#BFD8E3]/30 dark:bg-[#2B2B2B] text-[#141414] dark:text-[#FFFFFF] text-[10px]">↵</kbd>
              <span>Pilih</span>
            </span>
          </div>
          <span className="hidden sm:inline">Tekan ESC untuk tutup</span>
        </div>
      </div>
    </div>
  );
}
