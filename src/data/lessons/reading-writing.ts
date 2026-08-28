import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const readingWritingLessons: Lesson[] = [
  {
    id: 'rw-01',
    trackId: 'reading-writing-workshop',
    slug: 'skimming-scanning-critical-reading',
    title: 'Skimming, Scanning & Critical Reading Speed',
    order: 1,
    summary: 'Kuasai teknik membaca cepat teks panjang 900+ kata di bawah tekanan waktu ujian tanpa kehilangan pemahaman poin inti.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan teknik Skimming (menangkap ide pokok) dan Scanning (mencari fakta/angka spesifik).',
      'Mengenali Topic Sentences di awal/akhir paragraf bacaan akademis.',
      'Menghindari kebiasaan membaca kata-per-kata yang membuang waktu.',
    ],
    sections: [
      {
        id: 'sec-rw-1',
        title: '3 Mode Kecepatan Membaca',
        badge: 'Reading Strategies',
        content: `1. **Skimming (300-400 wpm)**: Baca judul, subjudul, kalimat pertama, dan kalimat terakhir tiap paragraf untuk memetakan arsitektur artikel.
2. **Scanning (500+ wpm)**: Cari kata kunci spesifik (nama orang, tahun, angka, istilah ilmiah) dengan meluncurkan pandangan secara vertikal/zig-zag.
3. **Intensive Reading**: Hanya membaca detail kalimat yang relevan dengan pertanyaan soal.`,
      },
    ],
    keyTakeaways: [
      'Baca pertanyaan soal TERLEBIH DAHULU sebelum membaca teks secara menyeluruh.',
      'Garis bawahi atau tandai kata kunci pertanyaan untuk memudahkan scanning.',
    ],
    nextLessonId: 'rw-02',
  },
  {
    id: 'rw-02',
    trackId: 'reading-writing-workshop',
    slug: 'paragraph-architecture-cohesion',
    title: 'Paragraph Architecture & Cohesion Mastery',
    order: 2,
    summary: 'Bangun paragraf esai yang mengalir logis menggunakan linking devices, transisi kontras, dan elaborasi bukti.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan transisi kohesif tingkat lanjut (Notwithstanding, In stark contrast, Consequently).',
      'Mempertahankan alur satu paragraf satu ide pokok.',
    ],
    sections: [
      {
        id: 'sec-rw-2',
        title: 'Peta Kata Transisi Formal (Discourse Markers)',
        content: `- **Kontras / Sanggahan**: *In contrast, Conversely, Nevertheless, Nonetheless, On the contrary.*
- **Sebab & Akibat**: *Consequently, As a direct consequence, Therefore, Hence, Thus.*
- **Penambahan**: *Furthermore, Moreover, Additionally, In addition to this.*
- **Penegasan**: *Indeed, Significantly, It is paramount to note that.*`,
      },
    ],
    keyTakeaways: [
      'Hindari menumpuk kata transisi mekanis di setiap kalimat; variasikan dengan pronoun referensi.',
    ],
    prevLessonId: 'rw-01',
  },
];

export const readingWritingExercises: Record<string, Exercise[]> = {
  'rw-01': [
    {
      id: 'ex-rw01-1',
      lessonId: 'rw-01',
      type: 'multiple-choice',
      title: 'Strategi Skimming vs Scanning',
      instruction: 'Tentukan teknik yang paling efisien untuk skenario berikut.',
      question: 'Kamu perlu menemukan tahun di mana Alexander Fleming menemukan penisilin dalam artikel biografi 4 halaman. Teknik manakah yang paling tepat?',
      options: [
        { id: 'a', text: 'Intensive Reading (Membaca perlahan dari awal sampai akhir)', explanation: 'Terlalu lambat untuk menemukan fakta spesifik.' },
        { id: 'b', text: 'Scanning (Mencari pola angka 4 digit atau nama Fleming)', explanation: 'Tepat! Scanning dirancang untuk mencari kata kunci atau angka tertentu secara instan.' },
        { id: 'c', text: 'Skimming (Membaca ide pokok tiap paragraf)', explanation: 'Skimming untuk mencari tema umum, bukan angka spesifik.' },
        { id: 'd', text: 'Subvocalization', explanation: 'Subvocalization justru memperlambat kecepatan baca.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
};
