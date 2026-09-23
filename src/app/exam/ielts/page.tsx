'use client';

import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ieltsLessons } from '@/data/lessons/ielts-lessons';

export default function IELTSDedicatedPage() {
  return (
    <AppShell
      category="IELTS Academic"
      title="Panduan & Kurikulum Spesialisasi IELTS"
    >
      <div className="space-y-8">
        {/* Breadcrumb */}
        <Link
          href="/?tab=exam"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#334155] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-[#FFFFFF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Exam Hub</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E] text-white" />
            <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase font-bold tracking-wider">
              Band 7.0+ Mastery Blueprint
            </span>
            <span className="font-mono text-xs text-[#475569] dark:text-[#7A8992]">· Cambridge & IDP Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] dark:text-[#FFFFFF] font-bold leading-tight">
            IELTS Academic &amp; General Training Architecture
          </h1>
          <p className="text-[#334155] dark:text-[#7A8992] text-sm sm:text-base leading-relaxed font-sans">
            Kuasai 4 pilar penilaian resmi IELTS (Task Achievement, Coherence &amp; Cohesion, Lexical Resource, Grammatical Range &amp; Accuracy) dengan kurikulum terarah dan simulasi terstandar.
          </p>
        </div>

        {/* 4 Modules Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Listening', dur: '30 + 10 Menit', desc: '4 Sections: Form completion, multiple choice, flow charts, maps, & academic monologue.' },
            { name: 'Reading', dur: '60 Menit', desc: '3 Passages (2150-2750 kata total): True/False/Not Given, Headings, Summary completion.' },
            { name: 'Writing', dur: '60 Menit', desc: 'Task 1 (150 kata data visual) & Task 2 (250 kata esai argumentatif berbobot ganda).' },
            { name: 'Speaking', dur: '11 - 14 Menit', desc: 'Part 1 Interview, Part 2 Individual Long Turn (Cue Card), & Part 3 Analytical Discussion.' },
          ].map((mod, i) => (
            <div key={mod.name} className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] font-bold">Modul 0{i + 1}</span>
                <span className="font-mono text-[11px] text-[#334155] dark:text-[#7A8992] bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 px-2 py-0.5 rounded-md font-medium">{mod.dur}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">{mod.name}</h3>
              <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Lessons List */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase font-bold">Kurikulum Terarah</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
              Materi Khusus &amp; Panduan IELTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {ieltsLessons.map((l) => (
              <Link key={l.id} href={`/learn/ielts-prep/${l.slug}`}>
                <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] hover:bg-[#F8FAFC] dark:hover:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 transition-all tactile-btn space-y-3 shadow-xs group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] bg-[#00638E]/10 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20 px-2.5 py-0.5 rounded-md font-bold">
                        Pelajaran {l.order}
                      </span>
                      <span className="font-mono text-xs text-[#475569] dark:text-[#7A8992] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {l.readTimeMin}m
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF] group-hover:text-[#00638E] dark:group-hover:text-[#8CB9CC] transition-colors leading-snug">
                      {l.title}
                    </h3>
                    <p className="text-xs text-[#334155] dark:text-[#7A8992] line-clamp-2 leading-relaxed">
                      {l.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#CBD5E1] dark:border-white/10 flex items-center justify-between text-xs font-mono text-[#475569] dark:text-[#7A8992] group-hover:text-[#0F172A] dark:group-hover:text-[#FFFFFF]">
                    <span className="font-medium">Buka Pelajaran</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#00638E]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mock CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#00638E] text-white shadow-md border border-[#004A6B] space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#BFD8E3] font-bold block">
            Diagnostic Mock Exam
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Siap Mengukur Estimasi Band Score Kamu?
          </h3>
          <p className="text-[#DFE5EA] text-xs sm:text-sm max-w-xl leading-relaxed">
            Ikuti simulasi IELTS Academic Reading 20 menit dengan teks ilmiah dan dapatkan estimasi band score instan dengan split-pane view profesional.
          </p>
          <div className="pt-2">
            <Link
              href="/exam/mock/ielts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-[#00638E] hover:bg-[#F1F5F9] text-xs font-mono font-bold transition-all shadow-sm tactile-btn"
            >
              <span>Mulai IELTS Mock Test Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
