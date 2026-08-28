'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, Filter, RotateCw, CheckCircle2, Search, ArrowRight } from 'lucide-react';
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
    setMasteredWords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C4502A]" />
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-widest">
            Lexical Resource & AWL
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          Vocabulary Vault & Interactive Flashcards
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed">
          Kuasai kosakata akademis berbobot tinggi (Oxford 3000 & Academic Word List) lengkap dengan pelafalan asli, terjemahan, dan kolokasi esensial.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#82796A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata atau arti..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white border border-black/10 text-[#1A1714] outline-hidden focus:border-[#C4502A]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.slice(0, 5).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={clsx(
                'px-3.5 py-1.5 rounded-full text-xs font-mono transition-all',
                selectedCategory === cat
                  ? 'bg-[#1A1714] text-white shadow-xs'
                  : 'bg-black/03 text-[#82796A] hover:text-[#1A1714] hover:bg-black/06'
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
              <GlassCard
                padded="md"
                hoverEffect
                className={clsx(
                  'h-full flex flex-col justify-between transition-all duration-300',
                  isMastered ? 'border-emerald-500/40 bg-emerald-500/03' : 'bg-white/80'
                )}
              >
                {!isFlipped ? (
                  // Front Face
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{card.level}</Badge>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playTextToSpeech(card.word);
                        }}
                        className="p-2 rounded-full hover:bg-black/05 text-[#82796A] hover:text-[#1A1714] transition-colors"
                        title="Dengarkan pengucapan"
                      >
                        <Volume2 className="w-4 h-4 text-[#C4502A]" />
                      </button>
                    </div>

                    <div className="space-y-1 text-center py-6">
                      <h3 className="text-3xl font-serif text-[#1A1714] group-hover:text-[#C4502A] transition-colors">
                        {card.word}
                      </h3>
                      <div className="font-mono text-xs text-[#82796A] flex items-center justify-center gap-2">
                        <span>{card.partOfSpeech}</span>
                        <span>·</span>
                        <span className="text-[#C4502A]">{card.ipa}</span>
                      </div>
                    </div>

                    <p className="text-xs text-center text-[#82796A] font-mono flex items-center justify-center gap-1">
                      <RotateCw className="w-3 h-3" />
                      <span>Klik kartu untuk melihat arti & contoh</span>
                    </p>
                  </div>
                ) : (
                  // Back Face
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#C4502A] font-semibold">
                        {card.word} ({card.partOfSpeech})
                      </span>
                      <button
                        onClick={(e) => toggleMastered(card.id, e)}
                        className={clsx(
                          'px-2.5 py-1 rounded-full text-[10px] font-mono flex items-center gap-1 transition-colors',
                          isMastered
                            ? 'bg-emerald-600 text-white'
                            : 'bg-black/05 text-[#82796A] hover:bg-black/10'
                        )}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{isMastered ? 'Dikuasai' : 'Tandai Dikuasai'}</span>
                      </button>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <strong className="text-[#1A1714] block">Definisi (ID):</strong>
                        <p className="text-[#38332C] leading-relaxed">{card.definitionId}</p>
                      </div>
                      <div>
                        <strong className="text-[#1A1714] block">Definisi (EN):</strong>
                        <p className="text-[#82796A] italic leading-relaxed">{card.definitionEn}</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-black/03 border border-black/05 text-xs text-[#1A1714] italic">
                      "{card.exampleSentence}"
                    </div>

                    <div className="pt-2 border-t border-black/05">
                      <span className="font-mono text-[10px] text-[#82796A] uppercase tracking-wider block mb-1">
                        High-Yield Collocations:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {card.collocations.map((c, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-md border border-black/05 text-[#38332C]"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </GlassCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
