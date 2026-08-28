# ✺ Meraki English — Self-Paced Learning Studio

Platform pembelajaran Bahasa Inggris mandiri modern, elegan, dan berkonsep glassmorphism, mengantarkan pembelajar dari fondasi dasar (*basic grammar*, 16 *tenses*, *parts of speech*) hingga persiapan ujian berstandar internasional (**IELTS & TOEFL iBT**).

---

## 🏛️ Design System & Philosophy

Mengadopsi dan memperluas estetika editorial dari **Causerie** dan **Trouvaille**:
- **Tipografi Editorial**:
  - **Display / Headings**: `Instrument Serif` (Google Fonts via `next/font`) dengan aksen italic anggun.
  - **Body Text**: `Geist` untuk kenyamanan membaca teks panjang dan bacaan akademis.
  - **Metadata & Badges**: `Geist Mono` untuk skor, timer, dan statistik.
- **Palet Warna & Glassmorphism**:
  - **Background**: Warm Paper (`#F7F3EB`, `#EFE8DC`) dengan ambient soft radial glow.
  - **Glass Containers**: Frosted glass panels (`backdrop-blur-md`, subtle white border, soft drop shadows).
  - **Aksen**: Terracotta Rust (`#C4502A`), Deep Clay (`#944E2C`), Sage Moss (`#5F6244`), IELTS Navy (`#1E3A8A`), TOEFL Emerald (`#065F46`).
- **Fully Responsive**: Nyaman untuk desktop/laptop (split pane reading-exercise & distraction-free writing studio) maupun tablet dan smartphone.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) + React 19 + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio & Voice**: Web Speech API (Native TTS) + Browser MediaRecorder API (Self-Shadowing)
- **Deployment Target**: [Vercel](https://vercel.com/) (Zero-config native Next.js deployment)
- **Data & Storage**: LocalStorage dengan async repository abstraction (`src/services/storage.ts`) yang siap di-swap ke **Supabase** (Postgres + Auth) tanpa perlu refactor komponen UI.

---

## 📚 Struktur Kurikulum & Level Progression

1. **Track 1: Basic Fundamentals (A1 - A2)**
   - 8 Parts of Speech Mastery (Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection).
   - 5 Core Sentence Patterns (S-V, S-V-O, S-V-C, S-V-IO-DO, S-V-O-OC).
   - The Essential 16 Tenses Simplified (Simple, Continuous, Perfect, Perfect Continuous).
   - Subject-Verb Agreement & Intervening Phrases.

2. **Track 2: Intermediate Structures (B1 - B2)**
   - Passive Voice in Academic & Report Writing.
   - Conditionals & Inversion (*Had I known...*, *Should you require...*).
   - Defining vs Non-defining Relative Clauses & Reduced Participle Clauses.

3. **Track 3: Vocabulary & Collocations (B2 - C1)**
   - Oxford 3000 High-Yield Academic Collocations (*make* vs *do*, *reach consensus*).
   - Academic Word List (AWL) & Word Families.
   - Interactive 3D/Flip Flashcards dengan audio pelafalan asli.

4. **Track 4: Reading & Writing Workshop**
   - Skimming (300-400 wpm) vs Scanning (500+ wpm) vs Intensive Reading.
   - Paragraph Architecture dengan Metode P-E-E-L (Point, Evidence, Explanation, Link).

5. **Track 5: IELTS Exam Prep (Target Band 7.0+)**
   - IELTS Anatomy & 4 Official Cambridge Descriptors (TR, CC, LR, GRA).
   - Academic Task 1: 4-Paragraph Formula Data & Chart Reporting.
   - Writing Task 2: Band 7.5+ Argumentative Essay Blueprints.
   - Timed Diagnostic Reading Simulation dengan perhitungan Band 0-9 instan.

6. **Track 6: TOEFL iBT Exam Prep (Target Score 100+)**
   - TOEFL iBT 2-Hour Structure & 0-120 Composite Score Breakdown.
   - Academic Discussion Task (10-Minute Sprint & 3-Step Formula).
   - Timed Diagnostic Reading Simulation dengan perhitungan skor 0-120.

---

## ⚡ Interactive Exercises Engine

- **Multiple Choice**: Dilengkapi pembahasan (*rationale*) mendalam mengapa opsi tersebut benar/salah.
- **Fill-in-the-Blank**: Dilengkapi *word bank*, petunjuk (*hints*), dan validasi jawaban otomatis.
- **Matching Pairs**: Menghubungkan istilah di Kolom A dengan pasangannya di Kolom B.
- **Shadowing & Speaking Lab**: Dengarkan pelafalan penutur asli (Web Speech API) dengan kontrol kecepatan (0.75x, 0.9x, 1.0x), lalu rekam suaramu sendiri untuk *self-comparison*.
- **Writing Studio & Self-Check Rubric**: Timer hitung mundur, *live word counter*, checklist kriteria resmi Cambridge & ETS, serta bedah *model answer*.
- **Timed Mock Test Simulator**: Split pane bacaan di sisi kiri dan soal di sisi kanan dengan konversi skor otomatis.

---

## 💻 Menjalankan di Localhost

```bash
# 1. Masuk ke direktori project
cd d:/Project/Meraki/meraki-english

# 2. Jalankan development server
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

---

## 🌐 Deploy ke Vercel

Project ini sudah siap 100% untuk di-deploy ke Vercel:
1. Hubungkan repository GitHub ke Vercel.
2. Vercel akan otomatis mendeteksi framework **Next.js**.
3. Klik **Deploy** — selesai tanpa konfigurasi tambahan!

---

## 🔄 Rencana Integrasi Supabase (Tahap Lanjut)

Arsitektur data `src/services/storage.ts` telah dirancang secara asinkron dengan pola repository. Saat siap mengaktifkan cloud storage:
1. Pasang `@supabase/supabase-js` & `@supabase/ssr`.
2. Buat tabel `user_progress`, `quiz_attempts`, dan `writing_submissions` di Supabase Postgres.
3. Ganti pemanggilan `localStorage` di dalam `src/services/storage.ts` dengan query Supabase client. Komponen UI tidak perlu diubah sama sekali.
