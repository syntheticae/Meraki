'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  Volume2,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import {
  ACADEMIC_COLLOCATIONS_DATA,
  ON_POINT_VERBS_DATA,
  DEPENDENT_PREPOSITIONS_DATA,
  CONFUSABLE_WORDS_DATA,
  DIRECT_TRANSLATION_TRAPS_DATA,
} from '@/data/meraki-collocations';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

export default function CollocationsPage() {
  const [collocationSubTab, setCollocationSubTab] = useState<'acl' | 'on-point' | 'prep' | 'confusables' | 'traps'>('acl');
  const [collocationSearch, setCollocationSearch] = useState<string>('');
  const [activeCollocationIndex, setActiveCollocationIndex] = useState<number>(0);
  const [collocationQuizSelected, setCollocationQuizSelected] = useState<string | null>(null);

  // Dependent Prepositions state
  const [activePrepIndex, setActivePrepIndex] = useState<number>(0);
  const [prepCategoryFilter, setPrepCategoryFilter] = useState<'all' | 'Adjective' | 'Verb' | 'Noun'>('all');
  const [prepSearchQuery, setPrepSearchQuery] = useState<string>('');
  const [prepUserInput, setPrepUserInput] = useState<string>('');
  const [prepFeedback, setPrepFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  // Confusables state
  const [activeConfusableIndex, setActiveConfusableIndex] = useState<number>(0);
  const [confusableSelected, setConfusableSelected] = useState<string | null>(null);

  // Traps state
  const [activeTrapIndex, setActiveTrapIndex] = useState<number>(0);
  const [trapSelected, setTrapSelected] = useState<string | null>(null);

  const recordMistake = (item: {
    id: string;
    type: 'quiz' | 'doctor' | 'collocation' | 'prep';
    title: string;
    question: string;
    prompt: string;
    correctAnswer: string;
    explanation: string;
    timestamp: number;
    category?: string;
  }) => {
    try {
      const prevStr = localStorage.getItem('meraki_mistake_vault');
      const prev: any[] = prevStr ? JSON.parse(prevStr) : [];
      const existingIndex = prev.findIndex((m) => m.id === item.id);
      let updated: any[];
      const defaultSrs = {
        srsStage: 1,
        nextReviewDate: Date.now() + 24 * 60 * 60 * 1000,
        lastReviewedDate: Date.now(),
      };
      if (existingIndex >= 0) {
        const existing = prev[existingIndex];
        const updatedItem = {
          ...existing,
          ...item,
          timesMissed: (existing.timesMissed || 1) + 1,
          timestamp: Date.now(),
          srsStage: 1,
          nextReviewDate: Date.now() + 24 * 60 * 60 * 1000,
          lastReviewedDate: Date.now(),
        };
        updated = [
          updatedItem,
          ...prev.slice(0, existingIndex),
          ...prev.slice(existingIndex + 1),
        ];
      } else {
        updated = [{ ...item, timesMissed: 1, ...defaultSrs }, ...prev];
      }
      localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckPrep = (e: React.FormEvent) => {
    e.preventDefault();
    const item = DEPENDENT_PREPOSITIONS_DATA[activePrepIndex];
    if (!item) return;

    const cleanInput = prepUserInput.trim().toLowerCase();
    const cleanTarget = item.requiredPreposition.trim().toLowerCase();
    const isCorrect = cleanInput === cleanTarget;

    setPrepFeedback({ checked: true, isCorrect });

    if (!isCorrect) {
      recordMistake({
        id: `prep-${item.id}`,
        type: 'prep',
        title: `Preposition: ${item.word}`,
        question: item.clozeSentence,
        prompt: `Input: "${prepUserInput}" (Salah)`,
        correctAnswer: item.requiredPreposition,
        explanation: `Pasangan preposisi baku untuk "${item.word}" adalah "${item.requiredPreposition}". Contoh: "${item.exampleSentence}"`,
        timestamp: Date.now(),
      });
    }
  };

  const filteredPreps = DEPENDENT_PREPOSITIONS_DATA.filter((item) => {
    const matchesCat = prepCategoryFilter === 'all' || item.partOfSpeech === prepCategoryFilter;
    const matchesSearch =
      !prepSearchQuery.trim() ||
      item.word.toLowerCase().includes(prepSearchQuery.toLowerCase()) ||
      item.meaningId.toLowerCase().includes(prepSearchQuery.toLowerCase()) ||
      item.requiredPreposition.toLowerCase().includes(prepSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const activePrep = DEPENDENT_PREPOSITIONS_DATA[activePrepIndex] || DEPENDENT_PREPOSITIONS_DATA[0];
  const commonPreps = ['to', 'for', 'of', 'in', 'on', 'with', 'from', 'against', 'between', 'into', 'towards', 'at', 'about', 'by'];

  return (
    <AppShell category="Laboratorium Bahasa" title="Diksi ACL & Kolokasi Natural">
      <div className="space-y-6 max-w-7xl mx-auto pb-12">
        {/* Header Hero Liquid Glass */}
        <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Academic Collocations List & Anti-Literal Studio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif text-[#141414] dark:text-white">
                Studio Kolokasi Baku & Diksi On-Point
              </h1>
              <p className="text-xs sm:text-sm text-[#50585C] dark:text-[#7A8992]">
                Pelajari 200+ frasa akademis alami, singkirkan kebiasaan terjemahan kata-per-kata Indonesia, dan kuasai preposisi terikat.
              </p>
            </div>

            {/* Sub-tab Pill Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#EDF3F7] dark:bg-[#1C1C1C] rounded-2xl border border-[#BFD8E3]/40 dark:border-white/10 overflow-x-auto no-scrollbar shrink-0">
              <button
                onClick={() => setCollocationSubTab('acl')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap',
                  collocationSubTab === 'acl'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                )}
              >
                ACL Collocations
              </button>
              <button
                onClick={() => setCollocationSubTab('on-point')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap',
                  collocationSubTab === 'on-point'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                )}
              >
                On-Point Verbs
              </button>
              <button
                onClick={() => setCollocationSubTab('prep')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap',
                  collocationSubTab === 'prep'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                )}
              >
                Dependent Prepositions
              </button>
              <button
                onClick={() => setCollocationSubTab('confusables')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap',
                  collocationSubTab === 'confusables'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                )}
              >
                Confusables
              </button>
              <button
                onClick={() => setCollocationSubTab('traps')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap',
                  collocationSubTab === 'traps'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                )}
              >
                Anti-Literal (L1 Traps)
              </button>
            </div>
          </div>
        </div>

        {/* 1. ACL Collocations Tab */}
        {collocationSubTab === 'acl' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Filter & List */}
            <div className="col-span-1 lg:col-span-6 space-y-3">
              <div className="relative shrink-0">
                <Search className="w-4 h-4 text-[#50585C] dark:text-[#7A8992] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={collocationSearch}
                  onChange={(e) => setCollocationSearch(e.target.value)}
                  placeholder="Cari kolokasi atau arti bahasa Indonesia..."
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md border border-[#BFD8E3]/40 dark:border-white/10 rounded-2xl outline-none focus:border-[#00638E] text-[#141414] dark:text-white transition-colors"
                />
              </div>

              <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                {ACADEMIC_COLLOCATIONS_DATA.filter(
                  (c) =>
                    c.collocation.toLowerCase().includes(collocationSearch.toLowerCase()) ||
                    c.meaningId.toLowerCase().includes(collocationSearch.toLowerCase())
                ).map((col, idx) => {
                  const isSelected = activeCollocationIndex === idx;

                  return (
                    <button
                      key={col.id}
                      onClick={() => {
                        setActiveCollocationIndex(idx);
                        setCollocationQuizSelected(null);
                      }}
                      className={clsx(
                        'w-full text-left p-5 rounded-2xl border transition-all space-y-2.5',
                        isSelected
                          ? 'bg-[#00638E] text-white border-[#00638E] shadow-sm'
                          : 'bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md border-[#BFD8E3]/40 dark:border-white/5 text-[#2B2B2B] dark:text-[#BFD8E3] hover:border-[#00638E]/50'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={clsx(
                            'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#00638E] dark:text-[#8CB9CC]'
                          )}
                        >
                          {col.type}
                        </span>
                        <Volume2
                          onClick={(e) => {
                            e.stopPropagation();
                            playTextToSpeech(col.collocation);
                          }}
                          className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100"
                        />
                      </div>

                      <h4 className="font-serif text-lg font-bold">{col.collocation}</h4>
                      <p className={clsx('text-xs line-clamp-1', isSelected ? 'text-white/80' : 'text-[#50585C] dark:text-[#7A8992]')}>
                        {col.meaningId}
                      </p>

                      <div
                        className={clsx(
                          'p-3 rounded-xl text-[11px] font-mono leading-relaxed',
                          isSelected
                            ? 'bg-white/10 text-[#BFD8E3]'
                            : 'bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC]'
                        )}
                      >
                        {col.literalIndonesianWarning}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Interactive Cloze Test Card */}
            <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-6 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              {(() => {
                const col = ACADEMIC_COLLOCATIONS_DATA[activeCollocationIndex] || ACADEMIC_COLLOCATIONS_DATA[0];
                const options = [col.correctTarget, ...col.distractors].sort();

                return (
                  <div className="space-y-5">
                    <div className="pb-4 border-b border-[#BFD8E3]/40 dark:border-white/10">
                      <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase font-semibold block">
                        Uji Pasangan Kolokasi Baku (Cloze Test)
                      </span>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <h3 className="font-serif text-2xl text-[#141414] dark:text-white font-bold">{col.collocation}</h3>
                        <button
                          onClick={() => playTextToSpeech(col.collocation)}
                          className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] p-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-2">
                      <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase block font-semibold">
                        Lengkapi Kalimat dengan Kolokasi Baku:
                      </span>
                      <p className="font-serif text-base sm:text-lg text-[#141414] dark:text-white leading-relaxed">
                        "{col.clozePrompt}"
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {options.map((opt, oIdx) => {
                        const isSelected = collocationQuizSelected === opt;
                        const isCorrect = opt === col.correctTarget;

                        let optStyle =
                          'bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#EDF3F7]/80 dark:hover:bg-[#1C1C1C]/80 border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-white';
                        if (collocationQuizSelected) {
                          if (isCorrect) {
                            optStyle =
                              'bg-[#004A6B]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#00638E] dark:text-white font-bold';
                          } else if (isSelected && !isCorrect) {
                            optStyle = 'bg-rose-500/15 border-rose-400 text-rose-600 dark:text-rose-400';
                          } else {
                            optStyle = 'opacity-40 bg-[#EDF3F7] dark:bg-[#1C1C1C] border-transparent text-[#50585C]';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              setCollocationQuizSelected(opt);
                              if (opt !== col.correctTarget) {
                                recordMistake({
                                  id: `acl-${col.id}`,
                                  type: 'collocation',
                                  title: `ACL: ${col.collocation}`,
                                  question: col.clozePrompt,
                                  prompt: `Pilihan Anda: "${opt}" (Kurang tepat)`,
                                  correctAnswer: col.correctTarget,
                                  explanation: col.literalIndonesianWarning,
                                  timestamp: Date.now(),
                                });
                              }
                            }}
                            disabled={collocationQuizSelected !== null}
                            className={clsx(
                              'p-3.5 rounded-xl border text-xs font-mono transition-all text-center min-h-[44px]',
                              optStyle
                            )}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {collocationQuizSelected && (
                      <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-2.5 animate-in fade-in duration-200">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase text-[#50585C] dark:text-[#7A8992] font-semibold">
                            Contoh Kalimat Akademik Baku:
                          </span>
                          <button
                            onClick={() => playTextToSpeech(col.exampleSentence)}
                            className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E]"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-serif text-sm text-[#141414] dark:text-white italic">
                          "{col.exampleSentence}"
                        </p>
                        <p className="text-[#2B2B2B] dark:text-[#BFD8E3] leading-relaxed pt-2 border-t border-[#BFD8E3]/30 dark:border-white/10">
                          <strong>Kaidah Leksikal:</strong> {col.literalIndonesianWarning}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* 2. On-Point Verbs Tab */}
        {collocationSubTab === 'on-point' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ON_POINT_VERBS_DATA.map((opv) => (
                <div
                  key={opv.id}
                  className="p-6 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 space-y-4 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] px-2.5 py-0.5 rounded-full font-semibold">
                      {opv.partOfSpeech}
                    </span>
                    <button
                      onClick={() => playTextToSpeech(opv.onPointVerb)}
                      className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] p-1.5 rounded-lg transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-[#141414] dark:text-white">{opv.onPointVerb}</h4>
                    <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992] block">{opv.ipa}</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/25 dark:border-[#8CB9CC]/30 text-xs space-y-1">
                    <span className="font-mono text-[10px] text-[#00638E] dark:text-[#8CB9CC] uppercase block font-semibold">
                      Gantikan Frasa Panjang/Kaku:
                    </span>
                    <p className="text-[#141414] dark:text-white font-medium">❌ "{opv.indonesianClunkyPhrase}"</p>
                    <p className="text-[11px] text-[#50585C] dark:text-[#7A8992] italic">({opv.clunkyEnglishWordy})</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-1">
                    <span className="font-mono text-[10px] text-[#004A6B] dark:text-[#BFD8E3] uppercase block font-semibold">
                      Definisi & Contoh Baku:
                    </span>
                    <p className="text-[11px] text-[#2B2B2B] dark:text-white leading-relaxed">{opv.formalDefinition}</p>
                    <p className="font-serif text-[12px] text-[#141414] dark:text-white italic pt-1 border-t border-[#BFD8E3]/30 dark:border-white/10">
                      "{opv.exampleSentence}"
                    </p>
                  </div>

                  {opv.antonymOrPair && (
                    <div className="text-[11px] font-mono text-[#50585C] dark:text-[#7A8992]">
                      <strong>Pasangan / Antonim:</strong> {opv.antonymOrPair}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Dependent Prepositions Tab */}
        {collocationSubTab === 'prep' && (
          <div className="space-y-6 w-full">
            {/* Header Filters & Search */}
            <div className="p-4 sm:p-5 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(['all', 'Adjective', 'Verb', 'Noun'] as const).map((cat) => {
                  const count =
                    cat === 'all'
                      ? DEPENDENT_PREPOSITIONS_DATA.length
                      : DEPENDENT_PREPOSITIONS_DATA.filter((p) => p.partOfSpeech === cat).length;
                  const isSel = prepCategoryFilter === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setPrepCategoryFilter(cat)}
                      className={clsx(
                        'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 min-h-[38px]',
                        isSel
                          ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                          : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#141414] dark:hover:text-white'
                      )}
                    >
                      <span>{cat === 'all' ? 'Semua Kategori' : cat}</span>
                      <span
                        className={clsx(
                          'px-1.5 py-0.2 text-[10px] rounded-md font-mono',
                          isSel ? 'bg-white/20 text-white' : 'bg-[#BFD8E3]/20 text-[#50585C] dark:text-[#7A8992]'
                        )}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#50585C] dark:text-[#7A8992]" />
                <input
                  type="text"
                  value={prepSearchQuery}
                  onChange={(e) => setPrepSearchQuery(e.target.value)}
                  placeholder="Cari kata atau arti..."
                  className="w-full pl-9 pr-4 py-2 bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 rounded-xl text-xs text-[#141414] dark:text-white placeholder:text-[#50585C] dark:placeholder:text-[#7A8992] outline-none focus:border-[#00638E] min-h-[38px]"
                />
              </div>
            </div>

            {/* 2-Column Main Studio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: List */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono text-[11px] text-[#50585C] dark:text-[#7A8992] uppercase font-semibold">
                    Direktori Preposisi ({filteredPreps.length} item)
                  </span>
                  <span className="text-[11px] font-mono text-[#00638E] dark:text-[#8CB9CC]">Pilih untuk latihan</span>
                </div>

                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
                  {filteredPreps.map((item) => {
                    const realIndex = DEPENDENT_PREPOSITIONS_DATA.findIndex((p) => p.id === item.id);
                    const isSelected = realIndex === activePrepIndex;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setActivePrepIndex(realIndex);
                          setPrepUserInput('');
                          setPrepFeedback(null);
                        }}
                        className={clsx(
                          'p-4 rounded-2xl border transition-all cursor-pointer text-left flex items-center justify-between gap-3',
                          isSelected
                            ? 'bg-white dark:bg-[#141414] border-[#00638E] shadow-sm ring-1 ring-[#00638E]/30'
                            : 'bg-white/80 dark:bg-[#141414]/80 hover:bg-white dark:hover:bg-[#141414] border-[#BFD8E3]/40 dark:border-white/5'
                        )}
                      >
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-sm text-[#141414] dark:text-white">
                              {item.word}
                            </span>
                            <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992]">
                              {item.partOfSpeech}
                            </span>
                          </div>
                          <p className="text-xs text-[#50585C] dark:text-[#7A8992] truncate font-sans">
                            {item.meaningId}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#004A6B]/15 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#BFD8E3]">
                            + {item.requiredPreposition}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              playTextToSpeech(`${item.word} ${item.requiredPreposition}`);
                            }}
                            className="p-1.5 rounded-lg hover:bg-[#EDF3F7] dark:hover:bg-[#1C1C1C] text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] transition-colors"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Cloze Card */}
              <div className="lg:col-span-7 lg:sticky lg:top-6 space-y-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#BFD8E3]/40 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-xl font-bold text-[#141414] dark:text-white">
                        {activePrep.word}
                      </span>
                      <span className="font-mono text-xs bg-[#004A6B]/10 dark:bg-[#00638E]/15 text-[#004A6B] dark:text-[#BFD8E3] px-2.5 py-0.5 rounded-md uppercase font-semibold">
                        {activePrep.partOfSpeech}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                      Item {activePrepIndex + 1} / {DEPENDENT_PREPOSITIONS_DATA.length}
                    </span>
                  </div>

                  <div className="px-4 py-2.5 rounded-xl bg-[#EDF3F7]/60 dark:bg-[#1C1C1C]/60 border border-[#BFD8E3]/30 dark:border-white/10 text-xs text-[#141414] dark:text-white">
                    <span className="font-mono font-semibold text-[#50585C] dark:text-[#7A8992] text-[10px] uppercase block">
                      Makna Kontekstual:
                    </span>
                    {activePrep.meaningId}
                  </div>

                  <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase font-semibold">
                        Lengkapi Preposisi Terikat yang Tepat:
                      </span>
                      <button
                        onClick={() =>
                          playTextToSpeech(activePrep.clozeSentence.replace('_____', activePrep.requiredPreposition))
                        }
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#00638E] dark:text-[#8CB9CC] hover:underline"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Dengar Kalimat Lengkap</span>
                      </button>
                    </div>
                    <p className="font-serif text-lg text-[#141414] dark:text-white leading-relaxed">
                      "{activePrep.clozeSentence}"
                    </p>
                  </div>

                  {/* Quick Preposition Chips */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase block font-semibold">
                      Pilih Cepat Preposisi:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {commonPreps.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setPrepUserInput(p);
                            setPrepFeedback(null);
                          }}
                          className={clsx(
                            'px-2.5 py-1 rounded-lg text-xs font-mono transition-all',
                            prepUserInput.trim().toLowerCase() === p
                              ? 'bg-[#00638E] text-white font-bold shadow-xs'
                              : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#141414] dark:text-white hover:bg-[#BFD8E3]/40 dark:hover:bg-[#2B2B2B]'
                          )}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleCheckPrep} className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={prepUserInput}
                        onChange={(e) => {
                          setPrepUserInput(e.target.value);
                          setPrepFeedback(null);
                        }}
                        placeholder="Ketik atau pilih preposisi di atas..."
                        className="flex-1 px-4 py-2.5 text-xs bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 rounded-xl outline-none focus:border-[#00638E] text-[#141414] dark:text-white font-mono"
                      />
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-medium hover:bg-[#004A6B] transition-colors shrink-0"
                      >
                        Periksa Preposisi
                      </button>
                    </div>
                  </form>

                  {/* Feedback */}
                  {prepFeedback && (
                    <div
                      className={clsx(
                        'p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200',
                        prepFeedback.isCorrect
                          ? 'bg-[#004A6B]/10 dark:bg-[#00638E]/20 border-[#00638E] text-[#141414] dark:text-white'
                          : 'bg-rose-500/10 border-rose-300 text-rose-700 dark:text-rose-300'
                      )}
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        {prepFeedback.isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />
                            <span>
                              Preposisi Tepat! <strong>"{activePrep.word} {activePrep.requiredPreposition}"</strong>
                            </span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-4 h-4 text-rose-500" />
                            <span>
                              Preposisi kurang tepat. Preposisi baku: <strong>"{activePrep.requiredPreposition}"</strong>
                            </span>
                          </>
                        )}
                      </div>
                      <p className="font-serif italic pt-1 border-t border-[#BFD8E3]/30 dark:border-white/10">
                        "{activePrep.exampleSentence}"
                      </p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between gap-3 pt-2 border-t border-[#BFD8E3]/40 dark:border-white/10">
                    <button
                      onClick={() => {
                        setActivePrepIndex((prev) => Math.max(0, prev - 1));
                        setPrepUserInput('');
                        setPrepFeedback(null);
                      }}
                      disabled={activePrepIndex === 0}
                      className="px-4 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] hover:bg-[#BFD8E3]/40 text-xs font-mono disabled:opacity-30 transition-all"
                    >
                      ← Sebelumnya
                    </button>

                    <button
                      onClick={() => {
                        const rand = Math.floor(Math.random() * DEPENDENT_PREPOSITIONS_DATA.length);
                        setActivePrepIndex(rand);
                        setPrepUserInput('');
                        setPrepFeedback(null);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-[#EDF3F7] dark:bg-[#1C1C1C] text-xs font-mono text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E] transition-colors"
                    >
                      Acak Kata
                    </button>

                    <button
                      onClick={() => {
                        setActivePrepIndex((prev) => Math.min(DEPENDENT_PREPOSITIONS_DATA.length - 1, prev + 1));
                        setPrepUserInput('');
                        setPrepFeedback(null);
                      }}
                      disabled={activePrepIndex === DEPENDENT_PREPOSITIONS_DATA.length - 1}
                      className="px-4 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono disabled:opacity-30 hover:bg-[#004A6B] transition-colors"
                    >
                      Selanjutnya →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Confusable Words Tab */}
        {collocationSubTab === 'confusables' && (
          <div className="max-w-3xl mx-auto w-full space-y-6">
            {(() => {
              const cw = CONFUSABLE_WORDS_DATA[activeConfusableIndex] || CONFUSABLE_WORDS_DATA[0];

              return (
                <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 space-y-6 shadow-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#BFD8E3]/40 dark:border-white/10">
                    <h3 className="font-serif text-2xl font-bold text-[#141414] dark:text-white">
                      {cw.wordA} <span className="text-[#00638E] dark:text-[#8CB9CC]">vs</span> {cw.wordB}
                    </h3>
                    <span className="font-mono text-xs text-[#50585C] dark:text-[#7A8992]">
                      Pasangan {activeConfusableIndex + 1} dari {CONFUSABLE_WORDS_DATA.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-2">
                      <span className="font-mono text-xs font-bold text-[#00638E] dark:text-[#8CB9CC] block">
                        {cw.wordA} ({cw.posA})
                      </span>
                      <p className="text-[#2B2B2B] dark:text-white">{cw.definitionA}</p>
                      <p className="font-serif text-[12px] text-[#141414] dark:text-white italic pt-2 border-t border-[#BFD8E3]/30 dark:border-white/10">
                        "{cw.exampleA}"
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-2">
                      <span className="font-mono text-xs font-bold text-[#004A6B] dark:text-[#BFD8E3] block">
                        {cw.wordB} ({cw.posB})
                      </span>
                      <p className="text-[#2B2B2B] dark:text-white">{cw.definitionB}</p>
                      <p className="font-serif text-[12px] text-[#141414] dark:text-white italic pt-2 border-t border-[#BFD8E3]/30 dark:border-white/10">
                        "{cw.exampleB}"
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#004A6B]/10 dark:bg-[#00638E]/15 border border-[#004A6B]/30 dark:border-[#BFD8E3]/35 text-xs font-mono text-[#004A6B] dark:text-[#BFD8E3]">
                    <strong>Trik Memori Diagnostik:</strong> {cw.diagnosticTrick}
                  </div>

                  <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-3">
                    <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase block font-semibold">
                      Uji Ketepatan Penggunaan dalam Kalimat:
                    </span>
                    <p className="font-serif text-base text-[#141414] dark:text-white">"{cw.quizQuestion}"</p>

                    <div className="grid grid-cols-2 gap-3">
                      {cw.quizOptions.map((opt) => {
                        const isSelected = confusableSelected === opt;
                        const isCorrect = opt === cw.correctWord;

                        let btnStyle =
                          'bg-white dark:bg-[#141414] hover:bg-white/80 border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-white';
                        if (confusableSelected) {
                          if (isCorrect) {
                            btnStyle = 'bg-[#004A6B]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#00638E] dark:text-white font-bold';
                          } else if (isSelected && !isCorrect) {
                            btnStyle = 'bg-rose-500/15 border-rose-400 text-rose-600';
                          } else {
                            btnStyle = 'opacity-40 bg-white dark:bg-[#141414] border-transparent text-[#50585C]';
                          }
                        }

                        return (
                          <button
                            key={opt}
                            onClick={() => {
                              setConfusableSelected(opt);
                              if (opt !== cw.correctWord) {
                                recordMistake({
                                  id: `confusable-${cw.id}`,
                                  type: 'collocation',
                                  title: `Confusables: ${cw.wordA} vs ${cw.wordB}`,
                                  question: cw.quizQuestion,
                                  prompt: `Pilihan Anda: "${opt}" (Kurang tepat)`,
                                  correctAnswer: cw.correctWord,
                                  explanation: `Kata yang tepat adalah "${cw.correctWord}". Perbedaan: ${cw.diagnosticTrick}`,
                                  timestamp: Date.now(),
                                });
                              }
                            }}
                            disabled={confusableSelected !== null}
                            className={clsx('p-3.5 rounded-xl border text-xs font-mono transition-all text-center', btnStyle)}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-between gap-3 pt-2">
                    <button
                      onClick={() => {
                        setActiveConfusableIndex((prev) => Math.max(0, prev - 1));
                        setConfusableSelected(null);
                      }}
                      disabled={activeConfusableIndex === 0}
                      className="px-5 py-2.5 rounded-xl bg-white dark:bg-[#141414] border border-[#BFD8E3]/40 dark:border-white/10 text-xs font-mono disabled:opacity-30 transition-all"
                    >
                      ← Pasangan Sebelumnya
                    </button>

                    <button
                      onClick={() => {
                        setActiveConfusableIndex((prev) => Math.min(CONFUSABLE_WORDS_DATA.length - 1, prev + 1));
                        setConfusableSelected(null);
                      }}
                      disabled={activeConfusableIndex === CONFUSABLE_WORDS_DATA.length - 1}
                      className="px-5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-medium hover:bg-[#004A6B] disabled:opacity-30 transition-all"
                    >
                      Pasangan Selanjutnya →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 5. Anti-Literal L1 Traps Tab */}
        {collocationSubTab === 'traps' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Traps List */}
            <div className="col-span-1 lg:col-span-6 space-y-3">
              <div className="p-5 rounded-2xl bg-[#00638E]/10 dark:bg-[#00638E]/20 border border-[#00638E]/30 dark:border-[#8CB9CC]/40 text-xs space-y-1">
                <div className="flex items-center gap-2 text-[#00638E] dark:text-[#8CB9CC] font-mono text-[11px] uppercase font-semibold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Bahaya L1 Interference (Terjemahan Mentah Indonesia)</span>
                </div>
                <p className="text-[#2B2B2B] dark:text-white leading-relaxed">
                  Pola berpikir bahasa Indonesia seringkali meminjam metafora fisik ("cuci mata", "tidak enak hati", "makan korban") yang jika diterjemahkan kata-per-kata akan terdengar cacat bagi penutur asli.
                </p>
              </div>

              <div className="space-y-2.5 max-h-[700px] overflow-y-auto pr-1">
                {DIRECT_TRANSLATION_TRAPS_DATA.map((trap, idx) => (
                  <button
                    key={trap.id}
                    onClick={() => {
                      setActiveTrapIndex(idx);
                      setTrapSelected(null);
                    }}
                    className={clsx(
                      'w-full text-left p-5 rounded-2xl border transition-all space-y-3',
                      activeTrapIndex === idx
                        ? 'bg-[#00638E] text-white border-[#00638E] shadow-sm'
                        : 'bg-white/80 dark:bg-[#141414]/80 backdrop-blur-md border-[#BFD8E3]/40 dark:border-white/5 text-[#2B2B2B] dark:text-[#BFD8E3] hover:border-[#00638E]/50'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={clsx(
                          'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                          activeTrapIndex === idx ? 'bg-white/20 text-white' : 'bg-[#EDF3F7] dark:bg-[#1C1C1C] text-[#00638E] dark:text-[#8CB9CC]'
                        )}
                      >
                        {trap.registerCategory}
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold">{trap.indonesianPhrase}</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div
                        className={clsx(
                          'p-2.5 rounded-xl border',
                          activeTrapIndex === idx
                            ? 'bg-white/10 border-white/20 text-white'
                            : 'bg-[#00638E]/10 dark:bg-[#00638E]/20 border-[#00638E]/30 text-[#141414] dark:text-white'
                        )}
                      >
                        <span className="font-mono text-[9px] uppercase block font-semibold opacity-75">Kaku / Cacat:</span>
                        <span className="line-through">{trap.literalClunkyEnglish}</span>
                      </div>

                      <div
                        className={clsx(
                          'p-2.5 rounded-xl border',
                          activeTrapIndex === idx
                            ? 'bg-white/20 border-white/30 text-white'
                            : 'bg-[#004A6B]/15 dark:bg-[#00638E]/25 border-[#004A6B]/30 text-[#004A6B] dark:text-[#BFD8E3]'
                        )}
                      >
                        <span className="font-mono text-[9px] uppercase block font-semibold opacity-75">Native On-Point:</span>
                        <span className="font-semibold">{trap.onPointNativeEnglish}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Deep Dive & Drill */}
            <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-6 bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl border border-[#BFD8E3]/40 dark:border-white/5 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              {(() => {
                const trap = DIRECT_TRANSLATION_TRAPS_DATA[activeTrapIndex] || DIRECT_TRANSLATION_TRAPS_DATA[0];

                return (
                  <div className="space-y-5">
                    <div className="pb-3 border-b border-[#BFD8E3]/40 dark:border-white/10">
                      <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase font-semibold block">
                        Pembedahan L1: {trap.registerCategory}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#141414] dark:text-white mt-1">
                        {trap.indonesianPhrase}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-200 dark:border-rose-900/30 space-y-1">
                        <span className="font-mono text-[10px] text-rose-600 dark:text-rose-400 uppercase block font-semibold">
                          Terjemahan Kaku (SALAH):
                        </span>
                        <p className="font-serif text-sm font-semibold text-[#141414] dark:text-white line-through">
                          "{trap.literalClunkyEnglish}"
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#004A6B]/15 dark:bg-[#00638E]/20 border border-[#004A6B]/30 dark:border-[#BFD8E3]/35 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-[#004A6B] dark:text-[#BFD8E3] uppercase font-semibold">
                            Diksi Native On-Point (BENAR):
                          </span>
                          <button
                            onClick={() => playTextToSpeech(trap.onPointNativeEnglish)}
                            className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E]"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-serif text-sm font-bold text-[#141414] dark:text-white">
                          "{trap.onPointNativeEnglish}"
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-1.5">
                      <strong className="text-[#004A6B] dark:text-[#BFD8E3] font-mono text-[10px] uppercase block">
                        Mengapa Terdengar Aneh Bagi Native Speaker?
                      </strong>
                      <p className="text-[#2B2B2B] dark:text-white leading-relaxed">{trap.linguisticExplanation}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#EDF3F7]/70 dark:bg-[#1C1C1C]/70 border border-[#BFD8E3]/30 dark:border-white/10 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase font-semibold">
                          Contoh Kalimat Baku:
                        </span>
                        <button
                          onClick={() => playTextToSpeech(trap.exampleSentence)}
                          className="text-[#50585C] dark:text-[#7A8992] hover:text-[#00638E]"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif text-[#141414] dark:text-white italic">"{trap.exampleSentence}"</p>
                    </div>

                    {/* Live Drill */}
                    <div className="p-5 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 space-y-3">
                      <span className="font-mono text-[10px] text-[#50585C] dark:text-[#7A8992] uppercase block font-semibold">
                        Uji Pilihan Diksi Baku (Anti-Literal):
                      </span>
                      <p className="font-serif text-sm text-[#141414] dark:text-white">"{trap.drillQuestion}"</p>

                      <div className="grid grid-cols-2 gap-2">
                        {trap.drillOptions.map((opt) => {
                          const isSelected = trapSelected === opt;
                          const isCorrect = opt === trap.correctAnswer;

                          let btnStyle =
                            'bg-white dark:bg-[#141414] hover:bg-white/80 border-[#BFD8E3]/40 dark:border-white/10 text-[#141414] dark:text-white';
                          if (trapSelected) {
                            if (isCorrect) {
                              btnStyle =
                                'bg-[#004A6B]/20 dark:bg-[#00638E]/30 border-[#00638E] text-[#00638E] dark:text-white font-bold';
                            } else if (isSelected && !isCorrect) {
                              btnStyle = 'bg-rose-500/15 border-rose-400 text-rose-600';
                            } else {
                              btnStyle = 'opacity-40 bg-white dark:bg-[#141414] border-transparent text-[#50585C]';
                            }
                          }

                          return (
                            <button
                              key={opt}
                              onClick={() => {
                                setTrapSelected(opt);
                                if (opt !== trap.correctAnswer) {
                                  recordMistake({
                                    id: `trap-${trap.id}`,
                                    type: 'collocation',
                                    title: `L1 Trap: ${trap.indonesianPhrase}`,
                                    question: `Konsep: "${trap.indonesianPhrase}" (Bukan harfiah: "${trap.literalClunkyEnglish}")`,
                                    prompt: `Pilihan Anda: "${opt}" (Salah/Harfiah)`,
                                    correctAnswer: trap.correctAnswer,
                                    explanation: trap.drillExplanation,
                                    timestamp: Date.now(),
                                  });
                                }
                              }}
                              disabled={trapSelected !== null}
                              className={clsx(
                                'p-3 rounded-xl border text-xs font-mono transition-all text-center min-h-[44px]',
                                btnStyle
                              )}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {trapSelected && (
                      <div className="p-4 rounded-2xl bg-[#EDF3F7] dark:bg-[#1C1C1C] border border-[#BFD8E3]/40 dark:border-white/10 text-xs space-y-1 animate-in fade-in duration-200">
                        <span className="font-mono text-[10px] uppercase font-semibold text-[#004A6B] dark:text-[#BFD8E3] block">
                          Penjelasan Nalar Diksi:
                        </span>
                        <p className="text-[#2B2B2B] dark:text-white leading-relaxed">{trap.drillExplanation}</p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
