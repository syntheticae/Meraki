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
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A84A28]" />
            <span className="font-mono text-xs text-[#7A7265] uppercase tracking-widest font-semibold">
              Lexical Resource & Academic Word List
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1B17] font-bold">
            Vocabulary Vault & Interactive Flashcards
          </h1>
          <p className="text-[#7A7265] text-sm sm:text-base leading-relaxed font-sans">
            Kuasai kosakata akademis berbobot tinggi (Oxford 3000 & Academic Word List) lengkap dengan pelafalan asli, terjemahan, dan kolokasi esensial.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#7A7265] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata atau arti..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#DDD7CA] border border-[#C8C0B0] text-[#1E1B17] placeholder:text-[#7A7265] outline-hidden focus:border-[#A84A28]"
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
                    ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                    : 'bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17] hover:bg-[#C8C0B0]'
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
                    'h-full p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-xs hover:border-[#A84A28]',
                    isMastered
                      ? 'bg-[#DDD7CA] border-[#535841]'
                      : 'bg-[#E6E0D4] border-[#C8C0B0]'
                  )}
                >
                  {!isFlipped ? (
                    // Front Face
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#DDD7CA] border border-[#C8C0B0] text-[#7A7265] font-semibold">
                          {card.level}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playTextToSpeech(card.word);
                          }}
                          className="p-2 rounded-xl bg-[#DDD7CA] hover:bg-[#C8C0B0] text-[#7A7265] hover:text-[#1E1B17] transition-colors tactile-btn"
                          title="Dengarkan pengucapan"
                          aria-label={`Dengarkan pengucapan kata ${card.word}`}
                        >
                          <Volume2 className="w-4 h-4 text-[#A84A28]" />
                        </button>
                      </div>

                      <div className="space-y-1 text-center py-6">
                        <h3 className="text-3xl font-serif font-bold text-[#1E1B17] group-hover:text-[#A84A28] transition-colors">
                          {card.word}
                        </h3>
                        <div className="font-mono text-xs text-[#7A7265] flex items-center justify-center gap-2">
                          <span>{card.partOfSpeech}</span>
                          <span>·</span>
                          <span className="text-[#A84A28]">{card.ipa}</span>
                        </div>
                      </div>

                      <p className="text-xs text-center text-[#7A7265] font-mono flex items-center justify-center gap-1">
                        <RotateCw className="w-3 h-3" />
                        <span>Klik kartu untuk melihat arti & contoh</span>
                      </p>
                    </div>
                  ) : (
                    // Back Face
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#A84A28] font-bold">
                          {card.word} ({card.partOfSpeech})
                        </span>
                        <button
                          onClick={(e) => toggleMastered(card.id, e)}
                          className={clsx(
                            'px-2.5 py-1 rounded-xl text-[10px] font-mono flex items-center gap-1 transition-colors',
                            isMastered
                              ? 'bg-[#535841] text-white'
                              : 'bg-[#DDD7CA] text-[#7A7265] hover:bg-[#C8C0B0]'
                          )}
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{isMastered ? 'Dikuasai' : 'Tandai Dikuasai'}</span>
                        </button>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div>
                          <strong className="text-[#1E1B17] block">Definisi (ID):</strong>
                          <p className="text-[#524C42] leading-relaxed">{card.definitionId}</p>
                        </div>
                        <div>
                          <strong className="text-[#1E1B17] block">Definisi (EN):</strong>
                          <p className="text-[#7A7265] italic leading-relaxed">{card.definitionEn}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs text-[#1E1B17] italic">
                        "{card.exampleSentence}"
                      </div>

                      <div className="pt-2 border-t border-[#C8C0B0]">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase tracking-wider block mb-1 font-semibold">
                          High-Yield Collocations:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {card.collocations.map((c, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-mono bg-[#DDD7CA] px-2 py-0.5 rounded-md border border-[#C8C0B0] text-[#1E1B17]"
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
