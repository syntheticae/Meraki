'use client';

import React, { useState, useMemo } from 'react';
import {
  Table,
  Search,
  Volume2,
} from 'lucide-react';
import {
  TENSES_MASTER_DATA,
  IRREGULAR_VERBS_DATA,
  NOUN_TAXONOMY_DATA,
  PUNCTUATION_GUIDE_DATA,
  HAVE_HAS_HAD_MASTER_DATA,
  XRAY_SENTENCES_DATA,
} from '@/data/meraki-matrices';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

type MatrixTab = 'tenses' | 'irregular' | 'nouns' | 'punctuation' | 'have-has-had' | 'xray';

export function MatricesView() {
  const [activeTab, setActiveTab] = useState<MatrixTab>('tenses');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTenseDimension, setSelectedTenseDimension] = useState<'all' | 'Present' | 'Past' | 'Future'>('all');
  const [selectedVerbPattern, setSelectedVerbPattern] = useState<'all' | 'A-B-C' | 'A-B-B' | 'A-B-A' | 'A-A-A'>('all');

  // Filtered Tenses
  const filteredTenses = useMemo(() => {
    return TENSES_MASTER_DATA.filter((t) => {
      const matchDim = selectedTenseDimension === 'all' || t.timeDimension === selectedTenseDimension;
      const matchSearch =
        t.tenseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.positiveFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.academicExample.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDim && matchSearch;
    });
  }, [selectedTenseDimension, searchQuery]);

  // Filtered Verbs
  const filteredVerbs = useMemo(() => {
    return IRREGULAR_VERBS_DATA.filter((v) => {
      const matchPat = selectedVerbPattern === 'all' || v.pattern === selectedVerbPattern;
      const matchSearch =
        v.v1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.v2.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.v3.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.meaningId.toLowerCase().includes(searchQuery.toLowerCase());
      return matchPat && matchSearch;
    });
  }, [selectedVerbPattern, searchQuery]);

  // Filtered Nouns
  const filteredNouns = useMemo(() => {
    return NOUN_TAXONOMY_DATA.filter((n) => {
      return (
        n.singularForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.meaningId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      {/* Navigation Tabs Header */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#004A6B] dark:text-[#8CB9CC]">
            Rujukan Komprehensif
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
          Matriks & Taksonomi Kaidah Bahasa Inggris
        </h2>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          {[
            { id: 'tenses', label: '16 Tenses Matrix' },
            { id: 'irregular', label: 'Irregular Verbs Catalog' },
            { id: 'nouns', label: 'Taksonomi Nomina' },
            { id: 'punctuation', label: 'Panduan Tanda Baca' },
            { id: 'have-has-had', label: 'Have vs Has vs Had' },
            { id: 'xray', label: 'Bedah Kalimat X-Ray' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as MatrixTab);
                setSearchQuery('');
              }}
              className={clsx(
                'px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all tactile-btn cursor-pointer',
                activeTab === tab.id
                  ? 'bg-[#00638E] text-white shadow-xs'
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992] hover:text-[#00638E] dark:hover:text-[#FFFFFF]'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: 16 Tenses Master Matrix */}
      {activeTab === 'tenses' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#475569] dark:text-[#7A8992] font-semibold">Dimensi Waktu:</span>
              {(['all', 'Present', 'Past', 'Future'] as const).map((dim) => (
                <button
                  key={dim}
                  onClick={() => setSelectedTenseDimension(dim)}
                  className={clsx(
                    'px-3 py-1 rounded-lg transition-all cursor-pointer',
                    selectedTenseDimension === dim
                      ? 'bg-[#00638E] text-white font-bold shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992]'
                  )}
                >
                  {dim === 'all' ? 'Semua Dimensi' : dim}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#475569] dark:text-[#7A8992]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari rumus atau tenses..."
                className="pl-8 pr-3 py-1.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs text-[#0F172A] dark:text-[#FFFFFF] outline-hidden focus:border-[#00638E]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredTenses.map((t) => (
              <div
                key={t.id}
                className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1] dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC]">
                        {t.timeDimension} • {t.aspect}
                      </span>
                    </div>
                    <button
                      onClick={() => playTextToSpeech(t.academicExample)}
                      className="p-1.5 rounded-lg text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
                      title="Dengarkan contoh kalimat"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                    {t.tenseName}
                  </h3>

                  {/* Formulas */}
                  <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 font-mono text-xs space-y-1 shadow-2xs">
                    <div><span className="text-[#00638E] dark:text-[#8CB9CC] font-bold">(+)</span> <span className="text-[#0F172A] dark:text-white">{t.positiveFormula}</span></div>
                    <div><span className="text-rose-600 font-bold">(-)</span> <span className="text-[#0F172A] dark:text-white">{t.negativeFormula}</span></div>
                    <div><span className="text-amber-600 font-bold">(?)</span> <span className="text-[#0F172A] dark:text-white">{t.questionFormula}</span></div>
                  </div>

                  {/* Time Markers */}
                  <div className="flex flex-wrap gap-1">
                    {t.timeMarkers.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-white/5 border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#BFD8E3]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Mental Model */}
                  <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">
                    {t.mentalModelLogic}
                  </p>

                  {/* Academic Example */}
                  <div className="p-3.5 rounded-xl bg-[#00638E]/10 border border-[#00638E]/25 text-xs space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#004A6B] dark:text-[#8CB9CC] block">
                      Contoh Kalimat Akademik:
                    </span>
                    <p className="font-medium text-[#0F172A] dark:text-[#FFFFFF]">
                      "{t.academicExample}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Irregular Verbs */}
      {activeTab === 'irregular' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#475569] dark:text-[#7A8992] font-semibold">Pola Perubahan:</span>
              {(['all', 'A-B-C', 'A-B-B', 'A-B-A', 'A-A-A'] as const).map((pat) => (
                <button
                  key={pat}
                  onClick={() => setSelectedVerbPattern(pat)}
                  className={clsx(
                    'px-3 py-1 rounded-lg transition-all cursor-pointer',
                    selectedVerbPattern === pat
                      ? 'bg-[#00638E] text-white font-bold shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-transparent text-[#334155] dark:text-[#7A8992]'
                  )}
                >
                  {pat === 'all' ? 'Semua Pola' : pat}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#475569] dark:text-[#7A8992]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata kerja atau arti..."
                className="pl-8 pr-3 py-1.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs text-[#0F172A] dark:text-[#FFFFFF] outline-hidden focus:border-[#00638E]"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#CBD5E1] dark:border-white/10 bg-[#F1F5F9] dark:bg-[#1C1C1C] text-[#0F172A] dark:text-[#7A8992]">
                  <th className="p-3.5 sm:p-4 font-bold">V1 (Base)</th>
                  <th className="p-3.5 sm:p-4 font-bold">V2 (Past Simple)</th>
                  <th className="p-3.5 sm:p-4 font-bold">V3 (Past Participle)</th>
                  <th className="p-3.5 sm:p-4 font-bold">Pola</th>
                  <th className="p-3.5 sm:p-4 font-bold">Makna Bahasa Indonesia</th>
                  <th className="p-3.5 sm:p-4 text-right font-bold">Audio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1] dark:divide-white/5">
                {filteredVerbs.map((v) => (
                  <tr key={v.id} className="hover:bg-[#F1F5F9]/70 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      {v.v1} <span className="text-[10px] text-[#475569] dark:text-[#7A8992] font-normal">{v.ipaV1}</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#0F172A] dark:text-[#FFFFFF] font-medium">
                      {v.v2} <span className="text-[10px] text-[#475569] dark:text-[#7A8992] font-normal">{v.ipaV2}</span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#0F172A] dark:text-[#FFFFFF] font-medium">
                      {v.v3} <span className="text-[10px] text-[#475569] dark:text-[#7A8992] font-normal">{v.ipaV3}</span>
                    </td>
                    <td className="p-3.5 sm:p-4">
                      <span className="px-2 py-0.5 rounded bg-[#E2ECF2] dark:bg-white/5 text-[10px] font-bold text-[#004A6B] dark:text-[#BFD8E3]">
                        {v.pattern}
                      </span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-[#334155] dark:text-[#7A8992]">{v.meaningId}</td>
                    <td className="p-3.5 sm:p-4 text-right">
                      <button
                        onClick={() => playTextToSpeech(`${v.v1}, ${v.v2}, ${v.v3}`)}
                        className="p-1 rounded-md text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Nouns Taxonomy */}
      {activeTab === 'nouns' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNouns.map((n) => (
            <div
              key={n.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1] dark:border-white/10">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC]">
                  {n.category}
                </span>
                <span className="text-xs font-mono text-[#475569] dark:text-[#7A8992] font-medium">{n.meaningId}</span>
              </div>
              <h4 className="text-lg font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                {n.singularForm} {n.pluralForm ? `→ ${n.pluralForm}` : ''}
              </h4>
              <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">
                {n.ruleExplanation}
              </p>
              <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs">
                Contoh: "{n.exampleSentence}"
              </div>
              {n.commonPitfall && (
                <p className="text-[11px] text-rose-700 dark:text-rose-400 font-mono font-medium">
                  ⚠️ Jebakan Umum: {n.commonPitfall}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Punctuation Guide */}
      {activeTab === 'punctuation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PUNCTUATION_GUIDE_DATA.map((p) => (
            <div
              key={p.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#CBD5E1] dark:border-white/10">
                <span className="text-xl font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">{p.symbol}</span>
                <span className="text-xs font-mono font-semibold text-[#334155] dark:text-[#7A8992]">{p.markName}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0F172A] dark:text-[#FFFFFF] leading-relaxed font-medium">
                {p.primaryRule}
              </p>
              <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs">
                Contoh Baku: "{p.correctExample}"
              </div>
              <p className="text-[11px] text-[#475569] dark:text-[#7A8992]">
                Kaidah: {p.linguisticReason}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Have vs Has vs Had */}
      {activeTab === 'have-has-had' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HAVE_HAS_HAD_MASTER_DATA.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-3"
              >
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC]">
                  {item.role}
                </span>
                <h4 className="text-base font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">
                  {item.explanation}
                </p>
                <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-[#FFFFFF] shadow-2xs">
                  "{item.correctExample}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 6: Syntactic X-Ray */}
      {activeTab === 'xray' && (
        <div className="space-y-6">
          {XRAY_SENTENCES_DATA.map((xray) => (
            <div
              key={xray.id}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#00638E]/15 text-[#004A6B] dark:text-[#8CB9CC]">
                  Bedah Struktur Sintaksis Kompleks
                </span>
                <h3 className="text-xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
                  {xray.title}
                </h3>
                <p className="text-sm font-mono text-[#0F172A] dark:text-[#FFFFFF] p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 leading-relaxed shadow-2xs">
                  "{xray.fullSentence}"
                </p>
                <p className="text-xs text-[#475569] dark:text-[#7A8992] italic">
                  Terjemahan: {xray.translation}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#004A6B] dark:text-[#7A8992] block">
                  Pembedahan Klausul & Frasa:
                </span>
                <div className="space-y-2">
                  {xray.breakdown.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className={clsx('p-3.5 rounded-xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2', b.colorKey)}
                    >
                      <div>
                        <span className="font-mono font-bold block sm:inline mr-2">[{b.role}]</span>
                        <span className="font-semibold">"{b.text}"</span>
                      </div>
                      <span className="text-[11px] opacity-90 shrink-0 font-medium">{b.explanation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
