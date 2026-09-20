'use client';

import React, { useState } from 'react';
import { BookOpen, Target, Clock, Globe, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { useAppStore } from '@/stores/useAppStore';
import { clsx } from 'clsx';

interface OnboardingViewProps {
  onComplete: () => void;
}

const LEVEL_OPTIONS = [
  { value: 'Absolute Beginner', label: 'Pemula Absolut', desc: 'Belum tahu grammar sama sekali' },
  { value: 'Basic to Intermediate', label: 'Dasar – Menengah', desc: 'Paham sedikit, tapi sering ragu' },
  { value: 'Intermediate', label: 'Menengah', desc: 'Bisa komunikasi, mau tingkatkan presisi' },
  { value: 'Advanced', label: 'Mahir', desc: 'Persiapan IELTS/TOEFL skor tinggi' },
];

const GOAL_OPTIONS = [
  { minutes: 10, label: '10 Menit', desc: 'Santai — satu modul singkat per hari' },
  { minutes: 20, label: '20 Menit', desc: 'Konsisten — target realistis & teruji' },
  { minutes: 30, label: '30 Menit', desc: 'Serius — progres 2× lebih cepat' },
];

const ASSESSMENT_QUESTIONS = [
  {
    q: 'Manakah bentuk past tense yang benar dari kata "go"?',
    options: ['goed', 'went', 'gone', 'going'],
    correct: 'went',
  },
  {
    q: 'Pilih kalimat yang gramatikal:',
    options: [
      'She don\'t like coffee.',
      'She doesn\'t likes coffee.',
      'She doesn\'t like coffee.',
      'She not like coffee.',
    ],
    correct: 'She doesn\'t like coffee.',
  },
  {
    q: 'Apa kata jamak dari "information"?',
    options: ['informations', 'an information', 'information', 'informases'],
    correct: 'information',
  },
  {
    q: '"Although it was raining, ___ we went out." — Mana yang benar?',
    options: ['but we went out', 'we went out', 'yet we went out', 'however we went out'],
    correct: 'we went out',
  },
  {
    q: 'Apa arti "paramount"?',
    options: ['sangat penting', 'biasa saja', 'tidak relevan', 'sangat besar'],
    correct: 'sangat penting',
  },
];

function scoreToLevel(correct: number): string {
  if (correct <= 1) return 'Absolute Beginner';
  if (correct <= 2) return 'Basic to Intermediate';
  if (correct <= 3) return 'Intermediate';
  return 'Advanced';
}

export function OnboardingView({ onComplete }: OnboardingViewProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState('');
  const [dialect, setDialect] = useState<'en-US' | 'en-GB'>('en-US');

  // Assessment state
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<number, string>>({});
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);
  const [detectedLevel, setDetectedLevel] = useState('Basic to Intermediate');

  // Goal state
  const [goalMinutes, setGoalMinutes] = useState(20);
  const [saving, setSaving] = useState(false);

  const setHasCompletedOnboarding = useAppStore((s) => s.setHasCompletedOnboarding);

  const handleAssessmentAnswer = (qIdx: number, answer: string) => {
    if (assessmentSubmitted) return;
    setAssessmentAnswers((prev) => ({ ...prev, [qIdx]: answer }));
  };

  const submitAssessment = () => {
    const correct = ASSESSMENT_QUESTIONS.filter((q, i) => assessmentAnswers[i] === q.correct).length;
    setDetectedLevel(scoreToLevel(correct));
    setAssessmentSubmitted(true);
  };

  const allAnswered = ASSESSMENT_QUESTIONS.every((_, i) => assessmentAnswers[i]);

  const handleFinish = async () => {
    setSaving(true);
    await progressRepository.completeOnboarding({
      displayName: name.trim() || 'Meraki Scholar',
      level: detectedLevel,
      dailyGoalMinutes: goalMinutes,
      preferredDialect: dialect,
    });
    setHasCompletedOnboarding(true);
    onComplete();
  };

  return (
    <div className="min-h-screen bg-[#DFE5EA] dark:bg-[#000000] flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#00638E] flex items-center justify-center mx-auto shadow-sm">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] dark:text-white">
            Selamat Datang di <span className="italic text-[#00638E] dark:text-[#8CB9CC]">Meraki</span>
          </h1>
          <p className="text-sm text-[#334155] dark:text-[#8CB9CC]">
            Platform belajar Bahasa Inggris yang elegan dan terstruktur.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2">
          {([1, 2, 3] as const).map((s) => (
            <div key={s} className={clsx(
              'h-1.5 rounded-full transition-all duration-300',
              s === step ? 'w-8 bg-[#00638E]' : s < step ? 'w-4 bg-[#004A6B]' : 'w-4 bg-[#CBD5E1] dark:bg-white/20'
            )} />
          ))}
        </div>

        {/* Step 1: Name + Dialect */}
        {step === 1 && (
          <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#8CB9CC] mb-1">
                Langkah 1 dari 3
              </p>
              <h2 className="font-serif text-xl font-bold text-[#0F172A] dark:text-white">Siapa namamu?</h2>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-mono text-[#475569] dark:text-[#8CB9CC] block mb-1 font-semibold">
                  Nama panggilan (opsional)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="mis. Andi, Scholar, dll."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-sm text-[#0F172A] dark:text-white placeholder-[#475569] dark:placeholder-[#7A8992] outline-none focus:border-[#00638E] transition-colors font-medium shadow-2xs"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#475569] dark:text-[#8CB9CC] block mb-2 font-semibold">
                  Dialek preferensi
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['en-US', 'en-GB'] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDialect(d)}
                      className={clsx(
                        'p-3 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-2xs',
                        dialect === d
                          ? 'bg-[#00638E] text-white border-[#00638E]'
                          : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-white hover:border-[#00638E]/50'
                      )}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {d === 'en-US' ? '🇺🇸 American' : '🇬🇧 British'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl bg-[#00638E] text-white text-sm font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Level Assessment */}
        {step === 2 && (
          <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#8CB9CC] mb-1">
                  Langkah 2 dari 3 — Uji Cepat Level
                </p>
                <h2 className="font-serif text-xl font-bold text-[#0F172A] dark:text-white">Seberapa jauh kemampuanmu?</h2>
                <p className="text-xs text-[#334155] dark:text-[#7A8992] mt-1">5 soal singkat — tidak ada nilai buruk, ini hanya untuk personalisasi.</p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-xs font-mono font-semibold text-[#475569] dark:text-[#8CB9CC] hover:text-[#00638E] dark:hover:text-white cursor-pointer px-2.5 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>
            </div>

            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1 no-scrollbar">
              {ASSESSMENT_QUESTIONS.map((q, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-3 shadow-2xs">
                  <p className="text-sm font-bold text-[#0F172A] dark:text-white">{i + 1}. {q.q}</p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {q.options.map((opt) => {
                      const selected = assessmentAnswers[i] === opt;
                      const isCorrect = opt === q.correct;
                      let style = 'bg-white dark:bg-[#141414] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-white hover:border-[#00638E]/50 shadow-2xs';
                      if (assessmentSubmitted) {
                        if (isCorrect) style = 'bg-[#00638E]/15 border-2 border-[#00638E] text-[#004A6B] dark:text-[#8CB9CC] font-bold';
                        else if (selected) style = 'bg-rose-500/15 border-2 border-rose-400 text-rose-700 opacity-80 font-medium';
                        else style = 'bg-white dark:bg-[#141414] border-[#CBD5E1]/40 dark:border-white/5 opacity-40';
                      } else if (selected) {
                        style = 'bg-[#00638E] text-white border-[#00638E] font-bold shadow-xs';
                      }
                      return (
                        <button
                          key={opt}
                          type="button"
                          disabled={assessmentSubmitted}
                          onClick={() => handleAssessmentAnswer(i, opt)}
                          className={clsx('p-2.5 rounded-lg border text-xs font-mono text-left transition-all cursor-pointer font-medium', style)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {!assessmentSubmitted ? (
              <button
                type="button"
                disabled={!allAnswered}
                onClick={submitAssessment}
                className="w-full py-3 rounded-xl bg-[#00638E] text-white text-sm font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
              >
                Lihat Hasil
              </button>
            ) : (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#00638E]/10 border border-[#00638E]/30 space-y-1">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#00638E] dark:text-[#8CB9CC] font-bold">Level Terdeteksi</p>
                  <p className="font-serif font-bold text-lg text-[#0F172A] dark:text-white">{detectedLevel}</p>
                  <p className="text-xs text-[#334155] dark:text-[#7A8992]">Meraki akan menyesuaikan rekomendasi modul untukmu.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full py-3 rounded-xl bg-[#00638E] text-white text-sm font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Daily Goal */}
        {step === 3 && (
          <div className="p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569] dark:text-[#8CB9CC] mb-1">
                  Langkah 3 dari 3 — Target Harian
                </p>
                <h2 className="font-serif text-xl font-bold text-[#0F172A] dark:text-white">Berapa menit per hari?</h2>
                <p className="text-xs text-[#334155] dark:text-[#7A8992] mt-1">Konsistensi lebih penting dari durasi. Mulai realistis.</p>
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-xs font-mono font-semibold text-[#475569] dark:text-[#8CB9CC] hover:text-[#00638E] dark:hover:text-white cursor-pointer px-2.5 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>
            </div>

            <div className="space-y-2">
              {GOAL_OPTIONS.map((opt) => (
                <button
                  key={opt.minutes}
                  type="button"
                  onClick={() => setGoalMinutes(opt.minutes)}
                  className={clsx(
                    'w-full p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer shadow-2xs',
                    goalMinutes === opt.minutes
                      ? 'bg-[#00638E] text-white border-[#00638E] font-bold'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-white hover:border-[#00638E]/50 font-medium'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Clock className={clsx('w-4 h-4', goalMinutes === opt.minutes ? 'text-white' : 'text-[#00638E] dark:text-[#8CB9CC]')} />
                    <div className="text-left">
                      <p className="text-sm font-bold font-mono">{opt.label}</p>
                      <p className={clsx('text-xs', goalMinutes === opt.minutes ? 'text-white/90' : 'text-[#475569] dark:text-[#7A8992]')}>{opt.desc}</p>
                    </div>
                  </div>
                  {goalMinutes === opt.minutes && <Check className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={saving}
              onClick={handleFinish}
              className="w-full py-3 rounded-xl bg-[#00638E] text-white text-sm font-mono font-bold hover:bg-[#004A6B] transition-all cursor-pointer disabled:opacity-60 shadow-xs flex items-center justify-center gap-2"
            >
              {saving ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  <span>Mulai Belajar!</span>
                  <Target className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
