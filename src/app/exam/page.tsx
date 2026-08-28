'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Award, GraduationCap, CheckCircle2, Clock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { calculateIELTSBand, calculateTOEFLScore } from '@/data/mock-exams';

export default function ExamHubPage() {
  const [ieltsRawInput, setIeltsRawInput] = useState<number>(32);
  const [toeflRawInput, setToeflRawInput] = useState<number>(24);

  const ieltsBandResult = calculateIELTSBand(ieltsRawInput);
  const toeflResult = calculateTOEFLScore(toeflRawInput, 30);

  return (
    <div className="min-h-screen bg-[#EFE9DF] text-[#1E1B17] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-28 sm:pb-36 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A84A28]" />
            <span className="font-mono text-xs text-[#7A7265] uppercase tracking-widest font-semibold">
              International Examination Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1E1B17] font-bold">
            Pusat Persiapan IELTS Academic & TOEFL iBT
          </h1>
          <p className="text-[#7A7265] text-sm sm:text-base leading-relaxed font-sans">
            Pahami perbedaan format kedua ujian bahasa Inggris terpopuler di dunia, konversikan target skormu, dan ikuti simulasi diagnostik waktu nyata.
          </p>
        </div>

        {/* IELTS vs TOEFL Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* IELTS Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] flex items-center justify-center font-serif font-bold text-lg">
                    I
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#1E1B17]">IELTS Academic</h2>
                    <span className="font-mono text-xs text-[#7A7265]">Cambridge / British Council / IDP</span>
                  </div>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#535841]/20 text-[#535841] font-bold">
                  Band 0 - 9.0
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#7A7265] leading-relaxed">
                Format standar internasional paling luas untuk studi di Inggris Raya, Australia, Selandia Baru, Eropa, dan Kanada.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1E1B17]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#535841] shrink-0" />
                  <span><strong>Listening:</strong> 30 menit (4 sesi aksen British/Aus/US).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#535841] shrink-0" />
                  <span><strong>Reading:</strong> 60 menit (3 teks panjang, TFNG & Headings).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#535841] shrink-0" />
                  <span><strong>Writing:</strong> 60 menit (Task 1 Chart & Task 2 Argumentative).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#535841] shrink-0" />
                  <span><strong>Speaking:</strong> 11-14 menit (Face-to-face interview).</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#C8C0B0]">
              <Link
                href="/exam/mock/ielts"
                className="w-full py-3 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all tactile-btn"
              >
                <span>Mulai Simulasi IELTS Mock Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/learn/ielts-prep/ielts-anatomy-and-band-descriptors"
                className="w-full py-2.5 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] text-center text-xs font-mono text-[#1E1B17] block transition-all"
              >
                Pelajari Materi & Silabus IELTS
              </Link>
            </div>
          </div>

          {/* TOEFL Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#A84A28] text-[#EFE9DF] flex items-center justify-center font-serif font-bold text-lg">
                    T
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-[#1E1B17]">TOEFL iBT</h2>
                    <span className="font-mono text-xs text-[#7A7265]">Educational Testing Service (ETS)</span>
                  </div>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#A84A28]/20 text-[#A84A28] font-bold">
                  Skor 0 - 120
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#7A7265] leading-relaxed">
                Format standar akademis Amerika Utara (USA & Canada) berbasis komputer ringkas ~2 jam.
              </p>

              <ul className="space-y-2.5 text-xs text-[#1E1B17]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A84A28] shrink-0" />
                  <span><strong>Reading:</strong> 35 menit (2 teks bacaan universitas, 20 soal).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A84A28] shrink-0" />
                  <span><strong>Listening:</strong> 36 menit (Percakapan kampus & kuliah ilmiah).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A84A28] shrink-0" />
                  <span><strong>Speaking:</strong> 16 menit (1 independent + 3 integrated tasks).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A84A28] shrink-0" />
                  <span><strong>Writing:</strong> 29 menit (Integrated + Academic Discussion).</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-[#C8C0B0]">
              <Link
                href="/exam/mock/toefl"
                className="w-full py-3 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all tactile-btn"
              >
                <span>Mulai Simulasi TOEFL Mock Test</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/learn/toefl-prep/toefl-ibt-structure-and-scoring"
                className="w-full py-2.5 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] border border-[#C8C0B0] text-center text-xs font-mono text-[#1E1B17] block transition-all"
              >
                Pelajari Materi & Silabus TOEFL
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Band & Score Estimator Calculator */}
        <section className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#A84A28] uppercase tracking-wider font-semibold">
              Live Score Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B17]">
              Kalkulator Konversi Skor Resmi (Raw to Scaled)
            </h2>
            <p className="text-xs sm:text-sm text-[#7A7265]">
              Geser slider jumlah jawaban benar untuk melihat estimasi Band Score IELTS dan CEFR Level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IELTS Converter */}
            <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-serif font-bold text-sm text-[#1E1B17]">IELTS Reading (40 Soal)</span>
                <span className="font-bold text-[#A84A28]">{ieltsRawInput} / 40 Benar</span>
              </div>

              <input
                type="range"
                min={0}
                max={40}
                value={ieltsRawInput}
                onChange={(e) => setIeltsRawInput(Number(e.target.value))}
                className="w-full accent-[#A84A28] cursor-pointer"
                aria-label="Skor mentah IELTS Reading"
              />

              <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#7A7265] uppercase block font-semibold">
                    Estimasi Band Score:
                  </span>
                  <span className="text-3xl font-serif font-bold text-[#1E1B17]">
                    Band {ieltsBandResult.bandScore.toFixed(1)}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-[#535841]/20 text-[#535841] font-mono text-xs font-bold">
                  CEFR {ieltsBandResult.cefrLevel}
                </span>
              </div>

              <p className="text-xs text-[#7A7265] leading-relaxed">
                {ieltsBandResult.description}
              </p>
            </div>

            {/* TOEFL Converter */}
            <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="font-serif font-bold text-sm text-[#1E1B17]">TOEFL Section Accuracy (30 Soal)</span>
                <span className="font-bold text-[#535841]">{toeflRawInput} / 30 Benar</span>
              </div>

              <input
                type="range"
                min={0}
                max={30}
                value={toeflRawInput}
                onChange={(e) => setToeflRawInput(Number(e.target.value))}
                className="w-full accent-[#535841] cursor-pointer"
                aria-label="Akurasi bagian TOEFL iBT"
              />

              <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#7A7265] uppercase block font-semibold">
                    Proyeksi Total Skor iBT:
                  </span>
                  <span className="text-3xl font-serif font-bold text-[#1E1B17]">
                    {toeflResult.scoreOutOf120} / 120
                  </span>
                </div>
                <span className="px-3 py-1 rounded-xl bg-[#535841]/20 text-[#535841] font-mono text-xs font-bold">
                  CEFR {toeflResult.cefr}
                </span>
              </div>

              <p className="text-xs text-[#7A7265] leading-relaxed">
                {toeflResult.evaluation}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
