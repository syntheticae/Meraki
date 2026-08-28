import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const intermediateGrammarLessons: Lesson[] = [
  {
    id: 'inter-01',
    trackId: 'intermediate-grammar',
    slug: 'academic-passive-voice',
    title: 'Passive Voice in Academic & Report Writing',
    order: 1,
    summary: 'Kuasai kapan dan bagaimana menggunakan Passive Voice untuk menciptakan nada tulisan yang objektif, formal, dan berbobot dalam IELTS/TOEFL Writing.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Memahami fungsi passive voice dalam memfokuskan hasil/objek ketimbang pelaku.',
      'Menguasai konversi rumus tenses ke bentuk pasif (Be + V3).',
      'Menghindari over-use kalimat pasif yang membuat tulisan kaku.',
    ],
    sections: [
      {
        id: 'sec-int-1',
        title: 'Mengapa Tulisan Akademis Memerlukan Passive Voice?',
        badge: 'Style & Tone',
        content: `Dalam penulisan ilmiah atau laporan formal (seperti IELTS Academic Writing Task 1), fokus utama berada pada **proses, temuan, atau data**, bukan siapa yang melakukannya.

Kalimat Aktif: *The researchers collected the water samples.*
Kalimat Pasif: *The water samples were collected at 10-minute intervals.* (Lebih formal & objektif).`,
        ruleBox: {
          formula: 'Subject (Penerima Aksi) + Form of BE + Past Participle (V3) + [by Agent]',
          explanation: 'Bentuk kata kerja "be" disesuaikan dengan tenses kalimat asal (is/are, was/were, has been, being).',
          pitfall: 'Intransitive verbs (happen, occur, exist, die, arrive) TIDAK PERNAH bisa dibuat pasif (e.g. *An accident was happened* ❌ ➔ *An accident happened* ✔️).',
        },
      },
    ],
    keyTakeaways: [
      'Gunakan passive voice untuk menonjolkan objek atau proses penelitian.',
      'Kata kerja tanpa objek langsung (intransitive) tidak memiliki bentuk pasif.',
    ],
    nextLessonId: 'inter-02',
  },
  {
    id: 'inter-02',
    trackId: 'intermediate-grammar',
    slug: 'advanced-conditionals-inversion',
    title: 'Conditionals & Inversion (Kondisional & Pembalikan Struktur)',
    order: 2,
    summary: 'Tingkatkan skor grammatical range dengan menguasai Conditional Type 1, 2, 3, Mixed Conditionals, dan pola Inversion (Had I known, Should you need).',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan situasi nyata (First conditional) dan hipotesis imajiner (Second & Third conditional).',
      'Menggunakan Inverted Conditionals untuk gaya bahasa tingkat tinggi (Band 7.5+).',
      'Memahami Mixed Conditionals (sebab di masa lalu, akibat di masa kini).',
    ],
    sections: [
      {
        id: 'sec-int-2',
        title: 'Inverted Conditionals (Sangat Disukai Penguji IELTS/TOEFL)',
        badge: 'High Band Structure',
        content: `Daripada menulis *If governments had invested earlier...*, gunakan struktur Inversion tanpa "if":
- Type 1: *Should you require further clarification, please do not hesitate to contact us.* (Menggantikan *If you require...*)
- Type 2: *Were the government to introduce stricter regulations, pollution would decline.* (Menggantikan *If the government introduced...*)
- Type 3: *Had the authorities taken swift measures, the crisis could have been averted.* (Menggantikan *If the authorities had taken...*)`,
        examples: [
          {
            sentence: 'Had international leaders cooperated effectively, the economic fallout would have been significantly reduced.',
            translation: 'Seandainya para pemimpin internasional bekerja sama secara efektif, dampak ekonomi tersebut akan berkurang secara signifikan.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Inversion menghilangkan kata "if" dan membalik posisi Auxiliary Verb ke depan subjek.',
      'Penggunaan satu atau dua kalimat inversion yang natural dalam esai langsung menunjukkan variasi gramatikal tingkat lanjut.',
    ],
    prevLessonId: 'inter-01',
    nextLessonId: 'inter-03',
  },
  {
    id: 'inter-03',
    trackId: 'intermediate-grammar',
    slug: 'relative-clauses-mastery',
    title: 'Relative Clauses (Defining vs Non-Defining & Reduced Clauses)',
    order: 3,
    summary: 'Pelajari cara menggabungkan beberapa ide menjadi satu kalimat kompleks yang padat dan elegan menggunakan relative pronouns dan participles.',
    readTimeMin: 7,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan Defining (tanpa koma, esensial) dan Non-defining (pakai koma, informasi tambahan).',
      'Menguasai Reduced Relative Clauses dengan Present Participle (-ing) dan Past Participle (-ed).',
    ],
    sections: [
      {
        id: 'sec-int-3',
        title: 'Reduced Relative Clauses (Kalimat Padat & Bernas)',
        content: `Dalam penulisan profesional, kita sering mereduksi relative clause untuk menghemat kata dan mempercepat alur baca:
- *The strategy **which is used** by the corporation...* ➔ *The strategy **used** by the corporation...*
- *Scholars **who examine** ancient languages...* ➔ *Scholars **examining** ancient languages...*`,
        examples: [
          {
            sentence: 'Participants completing the full curriculum demonstrated an average score increase of 25%.',
            translation: 'Peserta yang menyelesaikan kurikulum lengkap menunjukkan peningkatan skor rata-rata sebesar 25%.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Kata "that" tidak pernah digunakan dalam Non-defining relative clauses (yang memakai koma).',
      'Reduced clauses membuat kalimat lebih ringkas dan terasa seperti tulisan akademik profesional.',
    ],
    prevLessonId: 'inter-02',
  },
];

export const intermediateGrammarExercises: Record<string, Exercise[]> = {
  'inter-01': [
    {
      id: 'ex-i01-1',
      lessonId: 'inter-01',
      type: 'multiple-choice',
      title: 'Pilihan Bentuk Pasif yang Tepat',
      instruction: 'Pilih kalimat pasif yang benar secara gramatikal dan bernada akademis.',
      question: 'Pilih kalimat yang benar:',
      options: [
        { id: 'a', text: 'The unprecedented phenomenon was occurred in late 2023.', explanation: 'Salah! "Occur" adalah intransitive verb dan tidak bisa dibuat pasif.' },
        { id: 'b', text: 'The unprecedented phenomenon occurred in late 2023.', explanation: 'Tepat! Kata kerja "occurred" digunakan dalam bentuk aktif.' },
        { id: 'c', text: 'The unprecedented phenomenon has been occurred.', explanation: 'Salah karena "occur" tidak memiliki bentuk pasif.' },
        { id: 'd', text: 'The phenomenon was happening by itself.', explanation: 'Kurang formal.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Intransitive verbs (occur, happen, exist, arise) tidak pernah menerima auxiliary "be + V3".',
      points: 10,
    },
  ],
  'inter-02': [
    {
      id: 'ex-i02-1',
      lessonId: 'inter-02',
      type: 'fill-blank',
      title: 'Menyusun Inverted Conditional Type 3',
      instruction: 'Lengkapi kalimat inversion berikut.',
      sentence: '[___] the scientists verified the initial hypothesis, they would have published the results sooner.',
      targets: [
        { index: 0, correctAnswers: ['Had', 'had'], hint: 'Auxiliary verb untuk conditional type 3 lampau' },
      ],
      wordBank: ['Had', 'If', 'Should', 'Were'],
      explanation: 'Inverted third conditional diawali dengan "Had" + Subject + V3 (menggantikan "If the scientists had verified...").',
      points: 15,
    },
  ],
  'inter-03': [
    {
      id: 'ex-i03-1',
      lessonId: 'inter-03',
      type: 'multiple-choice',
      title: 'Reduced Relative Clause Analysis',
      instruction: 'Kalimat manakah yang merupakan reduksi yang benar dari "The documents that were signed yesterday"?',
      question: 'Pilih bentuk reduksi yang paling tepat:',
      options: [
        { id: 'a', text: 'The documents signing yesterday', explanation: 'Salah karena dokumen ditandatangani (pasif), bukan menandatangani.' },
        { id: 'b', text: 'The documents signed yesterday', explanation: 'Benar! Past participle "signed" mereduksi bentuk pasif "that were signed".' },
        { id: 'c', text: 'The documents were signed yesterday', explanation: 'Ini menjadi kalimat utama terpisah, bukan klausa penjelas subjek.' },
        { id: 'd', text: 'The signed by yesterday documents', explanation: 'Susunan kata tidak wajar.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Untuk bentuk pasif, relative clause direduksi menjadi Past Participle (-ed / V3).',
      points: 10,
    },
  ],
};
