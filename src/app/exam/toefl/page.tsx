'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { toeflLessons } from '@/data/lessons/toefl-lessons';

export default function TOEFLDedicatedPage() {
  return (
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* Breadcrumb */}
        <Link
          href="/exam"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#7A7265] hover:text-[#1E1B17] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Exam Hub</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#535841]" />
            <span className="font-mono text-xs text-[#535841] uppercase font-bold tracking-wider">
              Score 100+ Mastery Blueprint
            </span>
            <span className="font-mono text-xs text-[#7A7265]">· ETS Standard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1B17] font-bold leading-tight">
            TOEFL iBT Modern Architecture & Scoring Guide
          </h1>
          <p className="text-[#7A7265] text-sm sm:text-base leading-relaxed font-sans">
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
            <div key={mod.name} className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#535841] font-bold">Seksi 0{i + 1}</span>
                <span className="font-mono text-[11px] text-[#7A7265] bg-[#DDD7CA] px-2 py-0.5 rounded-md">{mod.dur}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1E1B17]">{mod.name}</h3>
              <p className="text-xs text-[#7A7265] leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Lessons List */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#535841] uppercase font-bold">Kurikulum Terarah</span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B17]">
              Materi Khusus & Panduan TOEFL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {toeflLessons.map((l) => (
              <Link key={l.id} href={`/learn/toefl-prep/${l.slug}`}>
                <div className="p-6 rounded-3xl bg-[#E6E0D4] hover:bg-[#DDD7CA] border border-[#C8C0B0] transition-all tactile-btn space-y-3 shadow-xs group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] bg-[#535841]/15 text-[#535841] px-2.5 py-0.5 rounded-md font-bold">
                        Pelajaran {l.order}
                      </span>
                      <span className="font-mono text-xs text-[#7A7265] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {l.readTimeMin}m
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1E1B17] group-hover:text-[#A84A28] transition-colors leading-snug">
                      {l.title}
                    </h3>
                    <p className="text-xs text-[#7A7265] line-clamp-2 leading-relaxed">
                      {l.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#C8C0B0] flex items-center justify-between text-xs font-mono text-[#7A7265] group-hover:text-[#1E1B17]">
                    <span>Buka Pelajaran</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mock CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1B17] text-[#EFE9DF] border border-[#C8C0B0] space-y-4 shadow-lg">
          <span className="font-mono text-xs uppercase tracking-widest text-[#535841] font-bold block">
            TOEFL Diagnostic Mock
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Siap Mengukur Estimasi Skor TOEFL iBT?
          </h3>
          <p className="text-[#DDD7CA] text-xs sm:text-sm max-w-xl leading-relaxed">
            Ikuti simulasi TOEFL iBT Academic Reading 18 menit dan dapatkan estimasi perolehan skor dari skala 0-120 dengan evaluasi langsung.
          </p>
          <div className="pt-2">
            <Link
              href="/exam/mock/toefl"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#535841] hover:bg-[#3f4331] text-[#EFE9DF] text-xs font-mono font-semibold transition-all shadow-sm tactile-btn"
            >
              <span>Mulai TOEFL Mock Test Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
