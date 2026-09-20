'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { AppShell } from '@/components/layout/AppShell';
import { toeflLessons } from '@/data/lessons/toefl-lessons';

export default function TOEFLDedicatedPage() {
  return (
    <AppShell
      category="TOEFL iBT"
      title="Panduan & Kurikulum Spesialisasi TOEFL"
    >
      <div className="space-y-8">
        {/* Breadcrumb */}
        <Link
          href="/exam"
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
              Score 100+ Mastery Blueprint
            </span>
            <span className="font-mono text-xs text-[#475569] dark:text-[#7A8992]">· ETS Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] dark:text-[#FFFFFF] font-bold leading-tight">
            TOEFL iBT Modern Architecture &amp; Scoring Guide
          </h1>
          <p className="text-[#334155] dark:text-[#7A8992] text-sm sm:text-base leading-relaxed font-sans">
            Kuasai format terbaru TOEFL iBT versi ringkas 2 jam: Academic Discussion Task, sintesis reading-listening, dan penalaran inferensi berstandar universitas Amerika Utara.
          </p>
        </div>

        {/* 4 Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Reading', dur: '35 Menit', desc: '2 Teks akademis (masing-masing 10 soal): Vocabulary in context, inference, rhetorical purpose.' },
            { name: 'Listening', dur: '36 Menit', desc: '3 Percakapan kampus & 3 kuliah akademis lengkap dengan catatan kata kunci.' },
            { name: 'Speaking', dur: '16 Menit', desc: '1 Independent task + 3 Integrated tasks (baca/dengar + rangkum lisan).' },
            { name: 'Writing', dur: '29 Menit', desc: 'Integrated Writing (20m) & Writing for an Academic Discussion (10m).' },
          ].map((mod, i) => (
            <div key={mod.name} className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] font-bold">Seksi 0{i + 1}</span>
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
              Materi Khusus &amp; Panduan TOEFL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {toeflLessons.map((l) => (
              <Link key={l.id} href={`/learn/toefl-prep/${l.slug}`}>
                <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] hover:bg-[#F8FAFC] dark:hover:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 transition-all tactile-btn space-y-3 shadow-xs group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20 px-2.5 py-0.5 rounded-md font-bold">
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
            TOEFL Diagnostic Mock
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Siap Mengukur Estimasi Skor TOEFL iBT?
          </h3>
          <p className="text-[#DFE5EA] text-xs sm:text-sm max-w-xl leading-relaxed">
            Ikuti simulasi TOEFL iBT Academic Reading 18 menit dan dapatkan estimasi perolehan skor dari skala 0-120 dengan evaluasi langsung.
          </p>
          <div className="pt-2">
            <Link
              href="/exam/mock/toefl"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-[#00638E] hover:bg-[#F1F5F9] text-xs font-mono font-bold transition-all shadow-sm tactile-btn"
            >
              <span>Mulai TOEFL Mock Test Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
