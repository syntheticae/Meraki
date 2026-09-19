'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Shuffle,
  Volume2,
  Search,
  Check,
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { OXFORD_3000_VOCABULARY, OxfordWord, checkMeaningAccuracy } from '@/data/oxford-3000';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

interface WordSrsData {
  box: number; // 1 to 5
  nextReviewDate: number;
  lastReviewedDate?: number;
}

export default function FlashcardsPage() {
  const [oxfordSearch, setOxfordSearch] = useState<string>('');
  const [oxfordCefrFilter, setOxfordCefrFilter] = useState<string>('all');
  const [oxfordSrsFilter, setOxfordSrsFilter] = useState<'all' | 'due' | 'box4'>('all');
  const [oxfordIndex, setOxfordIndex] = useState<number>(0);
  const [userMeaningInput, setUserMeaningInput] = useState<string>('');
  const [meaningFeedback, setMeaningFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // SRS Deck state
  const [srsDeck, setSrsDeck] = useState<Record<string, WordSrsData>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem('meraki_srs_deck');
      if (saved) setSrsDeck(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleRateSrs = (wordId: string, boxLevel: number) => {
    const intervals = [0, 1, 3, 7, 14, 30]; // days
    const intervalDays = intervals[boxLevel] || 1;
    const nextReview = Date.now() + intervalDays * 24 * 60 * 60 * 1000;

    const updatedDeck = {
      ...srsDeck,
      [wordId]: {
        box: boxLevel,
        nextReviewDate: nextReview,
        lastReviewedDate: Date.now(),
      },
    };
    setSrsDeck(updatedDeck);
    try {
      localStorage.setItem('meraki_srs_deck', JSON.stringify(updatedDeck));
    } catch (e) {
      console.error(e);
    }
  };

  const filteredOxfordList = useMemo(() => {
    return OXFORD_3000_VOCABULARY.filter((item) => {
      const matchesSearch =
        !oxfordSearch.trim() ||
        item.word.toLowerCase().includes(oxfordSearch.toLowerCase()) ||
        item.meaningId.toLowerCase().includes(oxfordSearch.toLowerCase());
      const matchesCefr = oxfordCefrFilter === 'all' || item.cefr === oxfordCefrFilter;

      let matchesSrs = true;
      const wordSrs = srsDeck[item.id];
      if (oxfordSrsFilter === 'due') {
        matchesSrs = !wordSrs || wordSrs.nextReviewDate <= Date.now();
      } else if (oxfordSrsFilter === 'box4') {
        matchesSrs = wordSrs && wordSrs.box >= 4;
      }

      return matchesSearch && matchesCefr && matchesSrs;
    });
  }, [oxfordSearch, oxfordCefrFilter, oxfordSrsFilter, srsDeck]);

  const currentOxfordWord: OxfordWord | undefined = filteredOxfordList[oxfordIndex] || filteredOxfordList[0];
  const currentWordSrs: WordSrsData = (currentOxfordWord && srsDeck[currentOxfordWord.id]) || {
    box: 1,
    nextReviewDate: Date.now(),
  };

  const handleCheckOxfordMeaning = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkMeaningAccuracy(userMeaningInput, currentOxfordWord);
    const isAccurate = result.isCorrect;
    setMeaningFeedback({ checked: true, isCorrect: isAccurate });
    setIsFlipped(true);

    if (isAccurate) {
      handleRateSrs(currentOxfordWord.id, Math.min(5, (currentWordSrs.box || 1) + 1));
    } else {
      handleRateSrs(currentOxfordWord.id, 1);
    }
  };

  const handleNextOxfordWord = () => {
    setOxfordIndex((prev) => (prev + 1 < filteredOxfordList.length ? prev + 1 : 0));
    setUserMeaningInput('');
    setMeaningFeedback(null);
    setIsFlipped(false);
  };

  const handlePrevOxfordWord = () => {
    setOxfordIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredOxfordList.length - 1));
    setUserMeaningInput('');
    setMeaningFeedback(null);
    setIsFlipped(false);
  };

  const handleRandomOxfordWord = () => {
    if (filteredOxfordList.length === 0) return;
    const rand = Math.floor(Math.random() * filteredOxfordList.length);
    setOxfordIndex(rand);
    setUserMeaningInput('');
    setMeaningFeedback(null);
    setIsFlipped(false);
  };

  return (
    <AppShell category="Laboratorium Bahasa" title="Oxford 3000 SRS Flashcard">
      <div className="space-y-6 max-w-7xl mx-auto pb-12">
        {/* Header Hero Liquid Glass */}
        <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Leitner Spaced Repetition System (SRS)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#141414] dark:text-white">
                Oxford 3000 SRS Flashcard Trainer
              </h1>
              <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992]">
                3000 kosakata inti bahasa Inggris terstandarisasi CEFR A1 hingga C1 dengan algoritma pengulangan berjarak.
              </p>
            </div>

            {/* Quick Stats Banner */}
            <div className="flex items-center gap-3 p-3 bg-[#EDF3F7] dark:bg-[#1C1C1C] rounded-2xl border border-[#BFD8E3]/40 dark:border-white/10 shrink-0">
              <div className="text-center px-2">
                <span className="text-[10px] font-mono text-[#50585C] dark:text-[#7A8992] uppercase block">Total Kosakata</span>
                <span className="font-serif font-bold text-sm text-[#141414] dark:text-white">
                  {OXFORD_3000_VOCABULARY.length}
                </span>
              </div>
              <div className="h-6 w-[1px] bg-[#BFD8E3]/40 dark:bg-white/10" />
              <div className="text-center px-2">
                <span className="text-[10px] font-mono text-[#00638E] dark:text-[#8CB9CC] uppercase block">Box 4/5 (Mastered)</span>
                <span className="font-serif font-bold text-sm text-[#00638E] dark:text-[#8CB9CC]">
                  {Object.values(srsDeck).filter((w) => w.box >= 4).length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Word Drawer & Filters */}
          <div className="col-span-1 lg:col-span-4 space-y-4">
            <div className="p-5 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#50585C] dark:text-[#7A8992] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={oxfordSearch}
                  onChange={(e) => {
                    setOxfordSearch(e.target.value);
                    setOxfordIndex(0);
                  }}
                  placeholder="Cari kata atau arti..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 rounded-xl outline-none focus:border-[#00638E] text-[#141414] dark:text-white"
                />
              </div>

              {/* CEFR Pills */}
              <div className="flex flex-wrap gap-1">
                {['all', 'A1', 'A2', 'B1', 'B2', 'C1'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      setOxfordCefrFilter(lvl);
                      setOxfordIndex(0);
                    }}
                    className={clsx(
                      'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all',
                      oxfordCefrFilter === lvl
                        ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                        : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                    )}
                  >
                    {lvl === 'all' ? 'Semua' : lvl}
                  </button>
                ))}
              </div>

              {/* SRS Mode Filters */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#BFD8E3]/30 dark:border-white/10">
                <button
                  onClick={() => {
                    setOxfordSrsFilter('all');
                    setOxfordIndex(0);
                  }}
                  className={clsx(
                    'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all',
                    oxfordSrsFilter === 'all'
                      ? 'bg-[#00638E] text-white font-semibold'
                      : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992]'
                  )}
                >
                  Semua ({OXFORD_3000_VOCABULARY.length})
                </button>
                <button
                  onClick={() => {
                    setOxfordSrsFilter('due');
                    setOxfordIndex(0);
                  }}
                  className={clsx(
                    'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all flex items-center gap-1',
                    oxfordSrsFilter === 'due'
                      ? 'bg-[#00638E] text-white font-semibold'
                      : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#00638E] dark:text-[#8CB9CC]'
                  )}
                >
                  <Clock className="w-3 h-3" />
                  <span>Review Hari Ini</span>
                </button>
                <button
                  onClick={() => {
                    setOxfordSrsFilter('box4');
                    setOxfordIndex(0);
                  }}
                  className={clsx(
                    'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all flex items-center gap-1',
                    oxfordSrsFilter === 'box4'
                      ? 'bg-[#004A6B] text-white font-semibold'
                      : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#004A6B] dark:text-[#BFD8E3]'
                  )}
                >
                  <Check className="w-3 h-3" />
                  <span>Mastered (Box 4+)</span>
                </button>
              </div>

              {/* Word List Items */}
              <div className="max-h-[500px] overflow-y-auto space-y-1.5 pr-1">
                {filteredOxfordList.slice(0, 100).map((item) => {
                  const isSelected = item.id === currentOxfordWord?.id;
                  const wordSrs = srsDeck[item.id] || { box: 1 };

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        const actualIdx = filteredOxfordList.findIndex((w) => w.id === item.id);
                        setOxfordIndex(actualIdx >= 0 ? actualIdx : 0);
                        setUserMeaningInput('');
                        setMeaningFeedback(null);
                        setIsFlipped(false);
                      }}
                      className={clsx(
                        'w-full text-left p-3 rounded-2xl text-xs transition-all flex items-center justify-between gap-2',
                        isSelected
                          ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                          : 'bg-[#EDF3F7]/60 dark:bg-[#1C1C1C]/60 hover:bg-[#EDF3F7] dark:hover:bg-[#1C1C1C] text-[#2B2B2B] dark:text-white'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-medium text-sm">{item.word}</span>
                        <span
                          className={clsx(
                            'font-mono text-[9px] px-1.5 py-0.5 rounded-sm',
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992]'
                          )}
                        >
                          {item.cefr}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 font-mono text-[9px]">
                        <span
                          className={clsx(
                            'px-1.5 py-0.5 rounded',
                            wordSrs.box >= 4
                              ? 'bg-[#004A6B]/20 text-[#004A6B] dark:text-[#BFD8E3]'
                              : 'bg-black/5 dark:bg-white/5 text-[#50585C] dark:text-[#7A8992]'
                          )}
                        >
                          Box {wordSrs.box}
                        </span>
                      </div>
                    </button>
                  );
                })}

                {filteredOxfordList.length > 100 && (
                  <div className="p-2 text-center text-[10px] font-mono text-[#50585C] dark:text-[#7A8992]">
                    Menampilkan 100 dari {filteredOxfordList.length} kata
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Flashcard & Interactive Test */}
          <div className="col-span-1 lg:col-span-8 lg:sticky lg:top-6 space-y-6">
            {currentOxfordWord ? (
              <div className="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-6 text-center">
                <div className="flex items-center justify-between pb-3 border-b border-[#BFD8E3]/40 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] px-3 py-1 rounded-md uppercase font-semibold">
                      CEFR {currentOxfordWord.cefr}
                    </span>
                    <span className="font-mono text-xs bg-[#004A6B]/10 dark:bg-[#00638E]/15 text-[#004A6B] dark:text-[#BFD8E3] px-2.5 py-1 rounded-md font-semibold">
                      Leitner Box {currentWordSrs.box}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                    Kata {oxfordIndex + 1} dari {filteredOxfordList.length}
                  </span>
                </div>

                {/* Big Target Word */}
                <div className="space-y-2 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#141414] dark:text-white">
                      {currentOxfordWord.word}
                    </h2>
                    <button
                      onClick={() => playTextToSpeech(currentOxfordWord.word)}
                      className="p-3 rounded-full bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#00638E] text-[#141414] dark:text-white hover:text-white transition-all shadow-xs"
                      title="Dengarkan pengucapan asli Amerika"
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] flex items-center justify-center gap-2">
                    <span>{currentOxfordWord.partOfSpeech}</span>
                    <span>·</span>
                    <span className="text-[#00638E] dark:text-[#8CB9CC]">{currentOxfordWord.ipa}</span>
                  </div>
                </div>

                {/* Context Sentence */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs sm:text-sm text-[#2B2B2B] dark:text-white italic flex items-center justify-between gap-3 text-left">
                  <span>"{currentOxfordWord.exampleSentence}"</span>
                  <button
                    onClick={() => playTextToSpeech(currentOxfordWord.exampleSentence)}
                    className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] shrink-0"
                    title="Dengarkan kalimat contoh"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Meaning Test Form */}
                <form onSubmit={handleCheckOxfordMeaning} className="space-y-3 pt-2 text-left">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#50585C] dark:text-[#7A8992] font-semibold block">
                    Ketik Arti / Makna Kata dalam Bahasa Indonesia:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={userMeaningInput}
                      onChange={(e) => {
                        setUserMeaningInput(e.target.value);
                        setMeaningFeedback(null);
                      }}
                      placeholder="contoh: menghasilkan, membuat, membuktikan..."
                      className="flex-1 px-4 py-2.5 text-xs bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 rounded-2xl outline-none focus:border-[#00638E] text-[#141414] dark:text-white shadow-xs"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-2xl bg-[#00638E] text-white hover:bg-[#004A6B] text-xs font-mono font-medium transition-colors shadow-xs shrink-0 flex items-center gap-1.5"
                    >
                      <span>Periksa</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="px-4 py-2.5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] text-xs font-mono transition-colors"
                    >
                      {isFlipped ? 'Tutup Jawaban' : 'Buka Kunci'}
                    </button>
                  </div>
                </form>

                {/* Feedback and SRS Intervals */}
                {(meaningFeedback || isFlipped) && (
                  <div
                    className={clsx(
                      'p-5 sm:p-6 rounded-2xl border text-left space-y-4 animate-in fade-in duration-200',
                      meaningFeedback?.isCorrect
                        ? 'bg-[#004A6B]/10 dark:bg-[#00638E]/20 border-[#00638E] text-[#141414] dark:text-white'
                        : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] border-[#BFD8E3]/40 dark:border-white/10'
                    )}
                  >
                    {meaningFeedback && (
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        {meaningFeedback.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                            <span>Jawaban Tepat! Kata ini dipromosikan di antrean memori.</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                            <span>Kurang tepat. Tinjau arti baku di bawah ini:</span>
                          </>
                        )}
                      </div>
                    )}

                    <div className="space-y-1.5 text-xs pt-2 border-t border-[#BFD8E3]/30 dark:border-white/10">
                      <div>
                        <strong className="text-[#141414] dark:text-white">Arti Indonesia Baku:</strong>{' '}
                        <span className="text-[#2B2B2B] dark:text-white font-medium">{currentOxfordWord.meaningId}</span>
                      </div>
                      <div>
                        <strong className="text-[#141414] dark:text-white">Definisi Inggris:</strong>{' '}
                        <span className="text-[#50585C] dark:text-[#7A8992] italic">{currentOxfordWord.meaningEn}</span>
                      </div>
                    </div>

                    {currentOxfordWord.collocations && currentOxfordWord.collocations.length > 0 && (
                      <div className="pt-2 border-t border-[#BFD8E3]/30 dark:border-white/10">
                        <span className="font-mono text-[10px] uppercase text-[#50585C] dark:text-[#7A8992] block mb-1">
                          Kolokasi Baku:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentOxfordWord.collocations.map((col, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[10px] font-mono bg-[#EDF3F7] dark:bg-[#1C1C1C] px-2 py-0.5 rounded-md border border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-white"
                            >
                              {col}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-[#BFD8E3]/30 dark:border-white/10 space-y-2">
                      <span className="font-mono text-[10px] uppercase text-[#50585C] dark:text-[#7A8992] block font-semibold">
                        Tentukan Interval Pengulangan Memori (SRS):
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => {
                            handleRateSrs(currentOxfordWord.id, 1);
                            handleNextOxfordWord();
                          }}
                          className="p-3 rounded-xl bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-600 font-mono text-[10px] transition-colors"
                        >
                          Lupa (Besok)
                        </button>
                        <button
                          onClick={() => {
                            handleRateSrs(currentOxfordWord.id, 2);
                            handleNextOxfordWord();
                          }}
                          className="p-3 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#00638E] hover:text-white text-[#141414] dark:text-white font-mono text-[10px] transition-colors"
                        >
                          Ragu (3 Hari)
                        </button>
                        <button
                          onClick={() => {
                            handleRateSrs(currentOxfordWord.id, 4);
                            handleNextOxfordWord();
                          }}
                          className="p-3 rounded-xl bg-[#004A6B]/20 hover:bg-[#004A6B] hover:text-white text-[#004A6B] dark:text-[#BFD8E3] font-mono text-[10px] transition-colors"
                        >
                          Mantap (Box 4)
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Navigation */}
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-[#BFD8E3]/40 dark:border-white/10">
                  <button
                    onClick={handlePrevOxfordWord}
                    className="px-5 py-2.5 rounded-2xl bg-white dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 text-xs font-mono text-[#141414] dark:text-white hover:bg-[#EDF3F7] flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Sebelumnya</span>
                  </button>

                  <button
                    onClick={handleRandomOxfordWord}
                    className="p-2.5 rounded-2xl bg-white dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] transition-colors"
                    title="Acak kata"
                  >
                    <Shuffle className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextOxfordWord}
                    className="px-5 py-2.5 rounded-2xl bg-[#00638E] text-white hover:bg-[#004A6B] text-xs font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>Selanjutnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white/80 dark:bg-[#141414]/80 border border-[#BFD8E3]/40 dark:border-white/5 text-xs text-[#50585C]">
                Tidak ada kata yang sesuai dengan kriteria filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
