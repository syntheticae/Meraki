'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { calculateIELTSBand, calculateTOEFLScore } from '@/data/mock-exams';

export function ExamView() {
  const [ieltsRawInput, setIeltsRawInput] = useState<number>(32);
  const [toeflRawInput, setToeflRawInput] = useState<number>(24);

  const ieltsBandResult = calculateIELTSBand(ieltsRawInput);
  const toeflResult = calculateTOEFLScore(toeflRawInput, 30);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00638E]" />
          <span className="font-mono text-xs text-[#334155] dark:text-[#7A8992] uppercase tracking-widest font-semibold">
            International Examination Hub
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0F172A] dark:text-[#FFFFFF] font-bold">
          Pusat Persiapan IELTS Academic &amp; TOEFL iBT
        </h1>
        <p className="text-[#334155] dark:text-[#7A8992] text-sm sm:text-base leading-relaxed font-sans">
          Pahami perbedaan format kedua ujian bahasa Inggris terpopuler di dunia, konversikan target skormu, dan ikuti simulasi diagnostik waktu nyata.
        </p>
      </div>

      {/* IELTS vs TOEFL Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* IELTS Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00638E] text-white shadow-xs flex items-center justify-center font-serif font-bold text-lg">
                  I
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">IELTS Academic</h2>
                  <span className="font-mono text-xs text-[#334155] dark:text-[#7A8992]">Cambridge / British Council / IDP</span>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#BFD8E3] border border-[#00638E]/20 font-bold">
                Band 0 - 9.0
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] dark:text-[#7A8992] leading-relaxed">
              Format standar internasional paling luas untuk studi di Inggris Raya, Australia, Selandia Baru, Eropa, dan Kanada.
            </p>

            <ul className="space-y-2.5 text-xs text-[#0F172A] dark:text-[#FFFFFF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3] shrink-0" />
                <span><strong>Listening:</strong> 30 menit (4 sesi aksen British/Aus/US).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3] shrink-0" />
                <span><strong>Reading:</strong> 60 menit (3 teks panjang, TFNG &amp; Headings).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3] shrink-0" />
                <span><strong>Writing:</strong> 60 menit (Task 1 Chart &amp; Task 2 Argumentative).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#BFD8E3] shrink-0" />
                <span><strong>Speaking:</strong> 11-14 menit (Face-to-face interview).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-[#CBD5E1] dark:border-white/10">
            <Link
              href="/exam/mock/ielts"
              className="w-full py-3 rounded-2xl bg-[#00638E] text-white hover:bg-[#004A6B] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-xs tactile-btn"
            >
              <span>Mulai Simulasi IELTS Mock Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/learn/ielts-prep/ielts-anatomy-and-band-descriptors"
              className="w-full py-2.5 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] hover:bg-[#E2E8F0] dark:hover:bg-[#2B2B2B] border border-[#CBD5E1] dark:border-white/10 text-center text-xs font-mono text-[#0F172A] dark:text-[#FFFFFF] block transition-all"
            >
              Pelajari Materi &amp; Silabus IELTS
            </Link>
          </div>
        </div>

        {/* TOEFL Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1] dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00638E] text-white flex items-center justify-center font-serif font-bold text-lg">
                  T
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">TOEFL iBT</h2>
                  <span className="font-mono text-xs text-[#334155] dark:text-[#7A8992]">Educational Testing Service (ETS)</span>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/30 text-[#00638E] dark:text-[#8CB9CC] border border-[#00638E]/20 font-bold">
                Skor 0 - 120
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] dark:text-[#7A8992] leading-relaxed">
              Format standar akademis Amerika Utara (USA &amp; Canada) berbasis komputer ringkas ~2 jam.
            </p>

            <ul className="space-y-2.5 text-xs text-[#0F172A] dark:text-[#FFFFFF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
                <span><strong>Reading:</strong> 35 menit (2 teks bacaan universitas, 20 soal).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
                <span><strong>Listening:</strong> 36 menit (Percakapan kampus &amp; kuliah ilmiah).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
                <span><strong>Speaking:</strong> 16 menit (1 independent + 3 integrated tasks).</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC] shrink-0" />
                <span><strong>Writing:</strong> 29 menit (Integrated + Academic Discussion).</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-[#CBD5E1] dark:border-white/10">
            <Link
              href="/exam/mock/toefl"
              className="w-full py-3 rounded-2xl bg-[#00638E] text-white hover:bg-[#004A6B] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-xs tactile-btn"
            >
              <span>Mulai Simulasi TOEFL Mock Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/learn/toefl-prep/toefl-ibt-structure-and-scoring"
              className="w-full py-2.5 rounded-2xl bg-[#F1F5F9] dark:bg-[#1C1C1C] hover:bg-[#E2E8F0] dark:hover:bg-[#2B2B2B] border border-[#CBD5E1] dark:border-white/10 text-center text-xs font-mono text-[#0F172A] dark:text-[#FFFFFF] block transition-all"
            >
              Pelajari Materi &amp; Silabus TOEFL
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Band & Score Estimator Calculator */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase tracking-wider font-semibold">
            Live Score Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">
            Kalkulator Konversi Skor Resmi (Raw to Scaled)
          </h2>
          <p className="text-xs sm:text-sm text-[#334155] dark:text-[#7A8992]">
            Geser slider jumlah jawaban benar untuk melihat estimasi Band Score IELTS dan CEFR Level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IELTS Converter */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-serif font-bold text-sm text-[#0F172A] dark:text-[#FFFFFF]">IELTS Reading (40 Soal)</span>
              <span className="font-bold text-[#00638E] dark:text-[#8CB9CC]">{ieltsRawInput} / 40 Benar</span>
            </div>
            <input
              type="range"
              min={0}
              max={40}
              value={ieltsRawInput}
              onChange={(e) => setIeltsRawInput(Number(e.target.value))}
              className="w-full accent-[#00638E] cursor-pointer"
              aria-label="Skor mentah IELTS Reading"
            />
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#475569] dark:text-[#7A8992] uppercase block font-semibold">Estimasi Band Score:</span>
                <span className="text-3xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">Band {ieltsBandResult.bandScore.toFixed(1)}</span>
              </div>
              <span className="px-3 py-1 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#BFD8E3] border border-[#00638E]/20 font-mono text-xs font-bold">
                CEFR {ieltsBandResult.cefrLevel}
              </span>
            </div>
            <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">{ieltsBandResult.description}</p>
          </div>

          {/* TOEFL Converter */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-serif font-bold text-sm text-[#0F172A] dark:text-[#FFFFFF]">TOEFL Section Accuracy (30 Soal)</span>
              <span className="font-bold text-[#004A6B] dark:text-[#BFD8E3]">{toeflRawInput} / 30 Benar</span>
            </div>
            <input
              type="range"
              min={0}
              max={30}
              value={toeflRawInput}
              onChange={(e) => setToeflRawInput(Number(e.target.value))}
              className="w-full accent-[#004A6B] cursor-pointer"
              aria-label="Akurasi bagian TOEFL iBT"
            />
            <div className="p-4 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#475569] dark:text-[#7A8992] uppercase block font-semibold">Proyeksi Total Skor iBT:</span>
                <span className="text-3xl font-serif font-bold text-[#0F172A] dark:text-[#FFFFFF]">{toeflResult.scoreOutOf120} / 120</span>
              </div>
              <span className="px-3 py-1 rounded-xl bg-[#00638E]/10 dark:bg-[#00638E]/25 text-[#004A6B] dark:text-[#BFD8E3] border border-[#00638E]/20 font-mono text-xs font-bold">
                CEFR {toeflResult.cefr}
              </span>
            </div>
            <p className="text-xs text-[#334155] dark:text-[#7A8992] leading-relaxed">{toeflResult.evaluation}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
