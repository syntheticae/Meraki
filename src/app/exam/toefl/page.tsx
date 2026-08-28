'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { toeflLessons } from '@/data/lessons/toefl-lessons';

export default function TOEFLDedicatedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb */}
      <Link
        href="/exam"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#82796A] hover:text-[#1A1714]"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Kembali ke Exam Hub</span>
      </Link>

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <Badge variant="emerald">Score 100+ Mastery</Badge>
          <span className="font-mono text-xs text-[#82796A]">ETS Standard</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          TOEFL iBT Modern Architecture & Scoring Guide
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed">
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
          <GlassCard key={mod.name} padded="md" className="space-y-3 bg-white/80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-emerald-700 font-semibold">Seksi 0{i + 1}</span>
              <span className="font-mono text-[11px] text-[#82796A]">{mod.dur}</span>
            </div>
            <h3 className="text-xl font-serif text-[#1A1714]">{mod.name}</h3>
            <p className="text-xs text-[#82796A] leading-relaxed">{mod.desc}</p>
          </GlassCard>
        ))}
      </div>

      {/* Lessons List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-serif text-[#1A1714]">
          Materi Khusus & Panduan TOEFL
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {toeflLessons.map((l) => (
            <Link key={l.id} href={`/learn/toefl-prep/${l.slug}`}>
              <GlassCard padded="md" hoverEffect className="h-full space-y-3 bg-white/85">
                <div className="flex items-center justify-between">
                  <Badge variant="emerald">Pelajaran {l.order}</Badge>
                  <span className="font-mono text-xs text-[#82796A]">{l.readTimeMin}m</span>
                </div>
                <h3 className="text-lg font-serif text-[#1A1714] leading-snug">{l.title}</h3>
                <p className="text-xs text-[#82796A] line-clamp-2">{l.summary}</p>
                <div className="pt-2 border-t border-black/05 flex items-center justify-between text-xs font-mono text-[#82796A]">
                  <span>Buka Pelajaran</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Mock CTA */}
      <GlassCard padded="lg" className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white space-y-4">
        <Badge variant="outline" className="text-emerald-200 border-emerald-400">
          TOEFL Diagnostic
        </Badge>
        <h3 className="text-3xl font-serif">
          Siap Mengukur Estimasi Skor TOEFL iBT?
        </h3>
        <p className="text-emerald-200 text-sm max-w-xl">
          Ikuti simulasi TOEFL iBT Academic Reading 18 menit dan dapatkan estimasi perolehan skor dari skala 0-120.
        </p>
        <Link
          href="/exam/mock/toefl"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-emerald-950 text-xs font-mono font-semibold hover:bg-emerald-50 transition-colors shadow-sm"
        >
          <span>Mulai TOEFL Mock Test Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </GlassCard>
    </div>
  );
}
