'use client';

import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, Clock, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { ieltsLessons } from '@/data/lessons/ielts-lessons';

export default function IELTSDedicatedPage() {
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
          <Badge variant="blue">Band 7.0+ Mastery</Badge>
          <span className="font-mono text-xs text-[#82796A]">Cambridge / IDP Standard</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          IELTS Academic & General Training Blueprint
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed">
          Kuasai 4 pilar penilaian resmi IELTS (Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) dengan kurikulum terarah.
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
          <GlassCard key={mod.name} padded="md" className="space-y-3 bg-white/80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-blue-700 font-semibold">Modul 0{i + 1}</span>
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
          Materi Khusus & Panduan IELTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ieltsLessons.map((l) => (
            <Link key={l.id} href={`/learn/ielts-prep/${l.slug}`}>
              <GlassCard padded="md" hoverEffect className="h-full space-y-3 bg-white/85">
                <div className="flex items-center justify-between">
                  <Badge variant="blue">Pelajaran {l.order}</Badge>
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
      <GlassCard padded="lg" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white space-y-4">
        <Badge variant="outline" className="text-blue-200 border-blue-400">
          Diagnostic Exam
        </Badge>
        <h3 className="text-3xl font-serif">
          Siap Mengukur Estimasi Band Score Kamu?
        </h3>
        <p className="text-blue-200 text-sm max-w-xl">
          Ikuti simulasi IELTS Academic Reading 20 menit dengan teks ilmiah dan dapatkan estimasi band score instan.
        </p>
        <Link
          href="/exam/mock/ielts"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-950 text-xs font-mono font-semibold hover:bg-blue-50 transition-colors shadow-sm"
        >
          <span>Mulai IELTS Mock Test Sekarang</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </GlassCard>
    </div>
  );
}
