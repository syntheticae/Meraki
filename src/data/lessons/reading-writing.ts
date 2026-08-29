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
    nextLessonId: 'rw-03',
  },
  {
    id: 'rw-03',
    trackId: 'reading-writing-workshop',
    slug: 'peel-paragraph-argument-synthesis',
    title: 'PEEL Framework: Point, Evidence, Explanation, Link',
    order: 3,
    summary: 'Struktur paragraf argumen standar Oxford & Cambridge untuk esai akademis IELTS Band 8.0+ dan jurnal ilmiah.',
    readTimeMin: 9,
    difficulty: 'Advanced',
    objectives: [
      'Menyusun Topic Sentence yang tegas dan dapat didebat (Point).',
      'Menyematkan bukti empiris atau fakta logis (Evidence).',
      'Menganalisis mekanisme sebab-akibat secara mendalam (Explanation).',
      'Mengaitkan kembali argumen ke pertanyaan esai (Link).',
    ],
    sections: [
      {
        id: 'sec-rw-3',
        title: 'Anatomi Paragraf PEEL 4 Tahap',
        badge: 'PEEL Structure',
        content: `1. **P - Point (1 kalimat)**: Nyatakan gagasan sentral paragraf. (Contoh: *Primary state funding for public transit significantly mitigates urban economic disparity.*)
2. **E - Evidence (1-2 kalimat)**: Sajikan data, preseden historis, atau skenario logis. (Contoh: *Municipal data from Bogota reveals that subsidized transit lines increased employment access for low-income households by 34%.*)
3. **E - Explanation (2-3 kalimat)**: Bedah *mengapa* dan *bagaimana* bukti tersebut mendukung poinmu. Jelaskan rantai kausalitasnya.
4. **L - Link (1 kalimat)**: Simpulkan dan kaitkan langsung ke tesis utama esai.`,
      },
    ],
    keyTakeaways: [
      'Paragraf tanpa "Explanation" hanyalah daftar fakta; nilaimu ditentukan oleh kedalaman analisis logika.',
      'Satu paragraf hanya boleh membahas satu poin sentral.',
    ],
    prevLessonId: 'rw-02',
    nextLessonId: 'rw-04',
  },
  {
    id: 'rw-04',
    trackId: 'reading-writing-workshop',
    slug: 'lexical-density-nominalization',
    title: 'Lexical Density & Advanced Nominalization Studio',
    order: 4,
    summary: 'Tingkatkan kualitas gaya penulisanmu dari bahasa lisan sederhana menjadi prosa akademik padat bernilai tinggi.',
    readTimeMin: 8,
    difficulty: 'Advanced',
    objectives: [
      'Mengubah verba dan adjektiva menjadi frasa nomina akademis (Nominalization).',
      'Meningkatkan rasio leksikal (Grammar-to-Content Word Ratio).',
      'Menghilangkan kata pengisi lemah (very, really, a lot of, good, bad).',
    ],
    sections: [
      {
        id: 'sec-rw-4',
        title: 'Tabel Transformasi Verba ➔ Nomina Akademik',
        badge: 'Nominalization Matrix',
        content: `- *proliferate* (berkembang biak cepat) ➔ **proliferation**
- *deteriorate* (memburuk) ➔ **deterioration**
- *implement* (menerapkan) ➔ **implementation**
- *disparate* (berbeda tajam) ➔ **disparity**
- *fluctuate* (naik-turun) ➔ **fluctuation**

*Contoh Transformasi:*
- Lisan: *Because the temperature fluctuated unpredictably, the crops failed.* (9 kata)
- Akademik: *Unpredictable temperature fluctuations precipitated widespread crop failure.* (7 kata, densitas leksikal 85%).`,
      },
    ],
    keyTakeaways: [
      'Nominalisasi memadatkan argumen dan memberikan kesan objektif pada tulisan ilmiah.',
    ],
    prevLessonId: 'rw-03',
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
  'rw-02': [
    {
      id: 'ex-rw02-1',
      lessonId: 'rw-02',
      type: 'fill-blank',
      title: 'Latihan Transisi Kohesi Formal',
      instruction: 'Lengkapi kalimat dengan kata transisi yang paling tepat.',
      sentence: 'The experimental drug exhibited severe adverse side effects during initial trials. [___], the regulatory agency halted clinical distribution immediately.',
      targets: [
        {
          index: 0,
          correctAnswers: ['Consequently', 'Therefore', 'Hence', 'Thus', 'As a result'],
          hint: 'Kata transisi sebab-akibat formal berawalan C (bermakna "sebagai akibatnya").',
        },
      ],
      explanation: 'Transisi "Consequently" atau "Therefore" menghubungkan sebab dan akibat secara formal.',
      points: 15,
    },
  ],
  'rw-03': [
    {
      id: 'ex-rw03-1',
      lessonId: 'rw-03',
      type: 'multiple-choice',
      title: 'Identifikasi Komponen PEEL',
      instruction: 'Tentukan komponen PEEL dari kutipan kalimat esai berikut.',
      question: '"A comprehensive municipal census conducted in 2022 revealed that over 42% of inner-city residents relied exclusively on regional bus lines for daily employment commutes." Kalimat ini berfungsi sebagai apa dalam struktur PEEL?',
      options: [
        { id: 'a', text: 'P - Point (Pernyataan klaim utama)', explanation: 'Bukan, ini bukan klaim teoretis umum.' },
        { id: 'b', text: 'E - Evidence (Bukti data empiris/fakta pendukung)', explanation: 'Tepat! Kalimat menyajikan data survei sensus konkret (42%) sebagai bukti pendukung klaim.' },
        { id: 'c', text: 'E - Explanation (Penjelasan mekanisme kausalitas)', explanation: 'Bukan analisis mengapa hal itu terjadi.' },
        { id: 'd', text: 'L - Link (Kalimat penyimpul penghubung)', explanation: 'Bukan kesimpulan penutup paragraf.' },
      ],
      correctAnswerId: 'b',
      points: 15,
    },
  ],
  'rw-04': [
    {
      id: 'ex-rw04-1',
      lessonId: 'rw-04',
      type: 'fill-blank',
      title: 'Latihan Nominalisasi Akademik',
      instruction: 'Ubah kata dalam kurung menjadi bentuk nomina akademik yang tepat.',
      sentence: 'The rapid [___] of artificial intelligence has sparked intense debate among ethicists.',
      targets: [
        {
          index: 0,
          correctAnswers: ['proliferation', 'expansion', 'advancement', 'development', 'growth'],
          hint: 'Bentuk nomina dari kata kerja "proliferate" (perkembangan pesat).',
        },
      ],
      explanation: 'Bentuk nomina yang tepat untuk verba "proliferate" adalah "proliferation".',
      points: 15,
    },
  ],
};
