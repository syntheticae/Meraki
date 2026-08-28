'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, GraduationCap, CheckCircle2, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { calculateIELTSBand, calculateTOEFLScore } from '@/data/mock-exams';

export default function ExamHubPage() {
  const [ieltsRawInput, setIeltsRawInput] = useState<number>(32);
  const [toeflRawInput, setToeflRawInput] = useState<number>(24);

  const ieltsBandResult = calculateIELTSBand(ieltsRawInput);
  const toeflResult = calculateTOEFLScore(toeflRawInput, 30);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C4502A]" />
          <span className="font-mono text-xs text-[#82796A] uppercase tracking-widest">
            International Examination Hub
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#1A1714]">
          Pusat Persiapan IELTS & TOEFL iBT
        </h1>
        <p className="text-[#82796A] text-base sm:text-lg leading-relaxed">
          Pahami perbedaan format kedua ujian bahasa Inggris terpopuler di dunia, konversikan target skormu, dan ikuti simulasi diagnostik waktu nyata.
        </p>
      </div>

      {/* IELTS vs TOEFL Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* IELTS Card */}
        <GlassCard padded="lg" className="border-t-4 border-t-blue-600 bg-white/80 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-serif font-bold text-lg">
                  I
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[#1A1714]">IELTS Academic</h2>
                  <span className="font-mono text-xs text-[#82796A]">Cambridge / British Council / IDP</span>
                </div>
              </div>
              <Badge variant="blue">Band 0 - 9.0</Badge>
            </div>

            <p className="text-xs sm:text-sm text-[#82796A] leading-relaxed">
              Format standar internasional paling luas untuk studi di Inggris Raya, Australia, Selandia Baru, Eropa, dan Kanada.
            </p>

            <ul className="space-y-2 text-xs text-[#38332C]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Listening:</strong> 30 menit (4 sesi aksen British/Aus/US).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Reading:</strong> 60 menit (3 teks panjang, TFNG & Headings).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Writing:</strong> 60 menit (Task 1 Chart & Task 2 Argumentative).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span><strong>Speaking:</strong> 11-14 menit (Face-to-face interview).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-black/05">
            <Link
              href="/exam/mock/ielts"
              className="w-full py-3.5 rounded-xl bg-[#1A1714] hover:bg-blue-900 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Mulai Simulasi IELTS Mock Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/learn/ielts-prep/ielts-anatomy-and-band-descriptors"
              className="w-full py-2.5 rounded-xl bg-white border border-black/10 text-center text-xs font-mono text-[#38332C] hover:text-[#1A1714] block"
            >
              Pelajari Materi & Silabus IELTS
            </Link>
          </div>
        </GlassCard>

        {/* TOEFL Card */}
        <GlassCard padded="lg" className="border-t-4 border-t-emerald-600 bg-white/80 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-serif font-bold text-lg">
                  T
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[#1A1714]">TOEFL iBT</h2>
                  <span className="font-mono text-xs text-[#82796A]">Educational Testing Service (ETS)</span>
                </div>
              </div>
              <Badge variant="emerald">Skor 0 - 120</Badge>
            </div>

            <p className="text-xs sm:text-sm text-[#82796A] leading-relaxed">
              Format standar akademis Amerika Utara (USA & Canada) berbasis komputer ringkas ~2 jam.
            </p>

            <ul className="space-y-2 text-xs text-[#38332C]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Reading:</strong> 35 menit (2 teks bacaan universitas, 20 soal).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Listening:</strong> 36 menit (Percakapan kampus & kuliah ilmiah).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Speaking:</strong> 16 menit (1 independent + 3 integrated tasks).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><strong>Writing:</strong> 29 menit (Integrated + Academic Discussion).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-black/05">
            <Link
              href="/exam/mock/toefl"
              className="w-full py-3.5 rounded-xl bg-[#1A1714] hover:bg-emerald-900 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <span>Mulai Simulasi TOEFL Mock Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/learn/toefl-prep/toefl-ibt-structure-and-scoring"
              className="w-full py-2.5 rounded-xl bg-white border border-black/10 text-center text-xs font-mono text-[#38332C] hover:text-[#1A1714] block"
            >
              Pelajari Materi & Silabus TOEFL
            </Link>
          </div>
        </GlassCard>
      </div>

      {/* Interactive Band & Score Estimator Calculator */}
      <section className="space-y-6">
        <div className="space-y-2">
          <Badge variant="accent">Score Calculator</Badge>
          <h2 className="text-3xl font-serif text-[#1A1714]">
            Kalkulator Konversi Skor Resmi (Raw to Scaled)
          </h2>
          <p className="text-xs sm:text-sm text-[#82796A]">
            Geser slider jumlah jawaban benar untuk melihat estimasi Band Score IELTS dan CEFR Level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IELTS Converter */}
          <GlassCard padded="md" className="space-y-4 bg-white/75">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm text-[#1A1714]">IELTS Reading (40 Soal)</span>
              <span className="font-mono text-xs text-[#C4502A]">{ieltsRawInput} / 40 Benar</span>
            </div>

            <input
              type="range"
              min={0}
              max={40}
              value={ieltsRawInput}
              onChange={(e) => setIeltsRawInput(Number(e.target.value))}
              className="w-full accent-[#C4502A] cursor-pointer"
              aria-label="Skor mentah IELTS Reading"
            />

            <div className="p-4 rounded-xl bg-[#EFE8DC]/80 border border-[#1A1714]/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#82796A] uppercase block">
                  Estimasi Band Score:
                </span>
                <span className="text-3xl font-serif font-bold text-[#1A1714]">
                  Band {ieltsBandResult.bandScore.toFixed(1)}
                </span>
              </div>
              <Badge variant="accent">CEFR {ieltsBandResult.cefrLevel}</Badge>
            </div>

            <p className="text-xs text-[#82796A]">
              {ieltsBandResult.description}
            </p>
          </GlassCard>

          {/* TOEFL Converter */}
          <GlassCard padded="md" className="space-y-4 bg-white/75">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm text-[#1A1714]">TOEFL Section Accuracy (Reading / Listening)</span>
              <span className="font-mono text-xs text-emerald-700">{toeflRawInput} / 30 Benar</span>
            </div>

            <input
              type="range"
              min={0}
              max={30}
              value={toeflRawInput}
              onChange={(e) => setToeflRawInput(Number(e.target.value))}
              className="w-full accent-emerald-700 cursor-pointer"
              aria-label="Akurasi bagian TOEFL iBT"
            />

            <div className="p-4 rounded-xl bg-[#EFE8DC]/80 border border-[#1A1714]/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#82796A] uppercase block">
                  Proyeksi Total Skor iBT:
                </span>
                <span className="text-3xl font-serif font-bold text-[#1A1714]">
                  {toeflResult.scoreOutOf120} / 120
                </span>
              </div>
              <Badge variant="emerald">CEFR {toeflResult.cefr}</Badge>
            </div>

            <p className="text-xs text-[#82796A]">
              {toeflResult.evaluation}
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
