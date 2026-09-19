import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#1A1714]/10 bg-[#EFE8DC]/60 backdrop-blur-md pt-16 pb-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#1A1714]/10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#1A1714] text-[#F7F3EB] flex items-center justify-center text-xs font-serif">
                ✺
              </span>
              <span className="font-serif text-2xl tracking-tight text-[#1A1714]">
                Meraki <span className="italic text-[#00638E] dark:text-[#8CB9CC]">English</span>
              </span>
            </div>
            <p className="text-[#82796A] text-sm leading-relaxed max-w-md font-normal">
              Platform belajar Bahasa Inggris mandiri yang elegan dan terstruktur. Mengantarkanmu dari fondasi grammar dasar, pemahaman mendalam, hingga kesiapan penuh menghadapi IELTS dan TOEFL iBT.
            </p>
            <div className="flex items-center gap-3 font-mono text-xs text-[#82796A]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>100% Offline-First · Local Device Storage</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#1A1714] font-semibold">
              Curriculum Tracks
            </h4>
            <ul className="space-y-2 text-sm text-[#82796A]">
              <li>
                <Link href="/learn/basic-fundamentals/parts-of-speech-mastery" className="hover:text-[#1A1714] transition-colors">
                  Basic Grammar & 16 Tenses
                </Link>
              </li>
              <li>
                <Link href="/learn/intermediate-grammar/academic-passive-voice" className="hover:text-[#1A1714] transition-colors">
                  Intermediate Structures & Clauses
                </Link>
              </li>
              <li>
                <Link href="/vocabulary" className="hover:text-[#1A1714] transition-colors">
                  Oxford 3000 & AWL Flashcards
                </Link>
              </li>
              <li>
                <Link href="/writing-pad" className="hover:text-[#1A1714] transition-colors">
                  Essay Writing Studio & Rubrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Exam Prep */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#1A1714] font-semibold">
              International Exams
            </h4>
            <ul className="space-y-2 text-sm text-[#82796A]">
              <li>
                <Link href="/exam/ielts" className="hover:text-[#1A1714] transition-colors">
                  IELTS Academic (Band 7.0+)
                </Link>
              </li>
              <li>
                <Link href="/exam/toefl" className="hover:text-[#1A1714] transition-colors">
                  TOEFL iBT (Score 100+)
                </Link>
              </li>
              <li>
                <Link href="/exam/mock/ielts" className="hover:text-[#1A1714] transition-colors">
                  IELTS Diagnostic Mock Test
                </Link>
              </li>
              <li>
                <Link href="/exam/mock/toefl" className="hover:text-[#1A1714] transition-colors">
                  TOEFL Diagnostic Mock Test
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#82796A] font-mono gap-4">
          <p>© 2026 Meraki English Studio. Designed with quiet editorial grace.</p>
          <div className="flex items-center gap-6">
            <span>Geist + Instrument Serif</span>
            <span>·</span>
            <span>Vercel Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
