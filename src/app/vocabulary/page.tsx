'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, Filter, RotateCw, CheckCircle2, Search, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { vocabularyCards, VocabularyCard } from '@/data/lessons/vocabulary';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

export default function VocabularyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [masteredWords, setMasteredWords] = useState<Record<string, boolean>>({});

  const categories = ['all', 'Research & Academics', 'Argumentation', 'Decision Making', 'Society & Technology', 'Cause & Effect', 'Logic & Reasoning', 'Health & Society'];

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('meraki_mastered_vocab');
      if (stored) setMasteredWords(JSON.parse(stored));
    } catch (e) {
      console.warn('Could not load mastered vocab', e);
    }
  }, []);

  const filteredCards = vocabularyCards.filter((card) => {
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch =
      card.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.definitionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.definitionId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredWords((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem('meraki_mastered_vocab', JSON.stringify(next));
      } catch (err) {}
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F9] dark:bg-[#000000] text-[#141414] dark:text-[#FFFFFF] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 sm:pb-36 space-y-10">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E] text-white" />
            <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] uppercase tracking-widest font-semibold">
              Lexical Resource & Academic Word List
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141414] dark:text-[#FFFFFF] font-bold">
            Vocabulary Vault & Interactive Flashcards
          </h1>
          <p className="text-[#50585C] dark:text-[#7A8992] text-sm sm:text-base leading-relaxed font-sans">
            Kuasai kosakata akademis berbobot tinggi (Oxford 3000 & Academic Word List) lengkap dengan pelafalan asli, terjemahan, dan kolokasi esensial.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-[#FFFFFF] dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 shadow-xs">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#50585C] dark:text-[#7A8992] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata atau arti..."
              className="w-full pl-10 pr-4 py-2 text-base sm:text-xs rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF] placeholder:text-[#50585C] dark:text-[#7A8992] outline-hidden focus:border-[#00638E]"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={clsx(
                  'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn',
                  selectedCategory === cat
                    ? 'bg-[#00638E] text-white shadow-xs font-semibold font-bold shadow-xs'
                    : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B]'
                )}
              >
                {cat === 'all' ? 'Semua Kategori' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flashcards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => {
            const isFlipped = flippedCards[card.id] || false;
            const isMastered = masteredWords[card.id] || false;

            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className="cursor-pointer group select-none min-h-[280px]"
              >
                <div
                  className={clsx(
                    'h-full p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-xs hover:border-[#00638E]',
                    isMastered
                      ? 'bg-[#EDF3F7] dark:bg-[#1C1C1C] border-[#004A6B] dark:border-[#00638E]'
                      : 'bg-[#FFFFFF] dark:bg-[#141414] border-[#BFD8E3]/40 dark:border-white/10'
                  )}
                >
                  {!isFlipped ? (
                    // Front Face
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-[#50585C] dark:text-[#7A8992] font-semibold">
                          {card.level}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playTextToSpeech(card.word);
                          }}
                          className="p-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:text-[#FFFFFF] transition-colors tactile-btn"
                          title="Dengarkan pengucapan"
                          aria-label={`Dengarkan pengucapan kata ${card.word}`}
                        >
                          <Volume2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                        </button>
                      </div>

                      <div className="space-y-1 text-center py-6">
                        <h3 className="text-3xl font-serif font-bold text-[#141414] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:text-[#8CB9CC] transition-colors">
                          {card.word}
                        </h3>
                        <div className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] flex items-center justify-center gap-2">
                          <span>{card.partOfSpeech}</span>
                          <span>·</span>
                          <span className="text-[#00638E] dark:text-[#8CB9CC]">{card.ipa}</span>
                        </div>
                      </div>

                      <p className="text-xs text-center text-[#50585C] dark:text-[#7A8992] font-mono flex items-center justify-center gap-1">
                        <RotateCw className="w-3 h-3" />
                        <span>Klik kartu untuk melihat arti & contoh</span>
                      </p>
                    </div>
                  ) : (
                    // Back Face
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] font-bold">
                          {card.word} ({card.partOfSpeech})
                        </span>
                        <button
                          onClick={(e) => toggleMastered(card.id, e)}
                          className={clsx(
                            'px-2.5 py-1 rounded-xl text-[10px] font-mono flex items-center gap-1 transition-colors',
                            isMastered
                              ? 'bg-[#004A6B] dark:bg-[#00638E] text-white text-white'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B]'
                          )}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isMastered ? 'Dikuasai' : 'Tandai Dikuasai'}</span>
                        </button>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div>
                          <strong className="text-[#141414] dark:text-[#FFFFFF] block">Definisi (ID):</strong>
                          <p className="text-[#2B2B2B] dark:text-[#BFD8E3] leading-relaxed">{card.definitionId}</p>
                        </div>
                        <div>
                          <strong className="text-[#141414] dark:text-[#FFFFFF] block">Definisi (EN):</strong>
                          <p className="text-[#50585C] dark:text-[#7A8992] italic leading-relaxed">{card.definitionEn}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs text-[#141414] dark:text-[#FFFFFF] italic">
                        "{card.exampleSentence}"
                      </div>

                      <div className="pt-2 border-t border-[#BFD8E3]/40 dark:border-white/10">
                        <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase tracking-wider block mb-1 font-semibold">
                          High-Yield Collocations:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {card.collocations.map((c, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono bg-[#EDF3F7] dark:bg-[#1C1C1C] px-2 py-0.5 rounded-md border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-[#FFFFFF]"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
