import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const toeflLessons: Lesson[] = [
  {
    id: 'toefl-01',
    trackId: 'toefl-prep',
    slug: 'toefl-ibt-structure-and-scoring',
    title: 'TOEFL iBT Structure & 0-120 Composite Scoring',
    order: 1,
    summary: 'Bedah tuntas 4 bagian tes TOEFL iBT (Reading, Listening, Speaking, Writing) dan strategi meraih skor 100+ untuk penerimaan universitas Ivy League & beasiswa top.',
    readTimeMin: 9,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Memahami format TOEFL iBT terbaru (versi 2 jam yang dipersingkat).',
      'Menguasai sistem penilaian 0-30 per seksi menuju skor total 120.',
      'Membedakan pertanyaan faktual, inferensi, dan rhetorical purpose pada seksi Reading.',
    ],
    sections: [
      {
        id: 'sec-toefl-1',
        title: 'Format TOEFL iBT Ringkas Modern',
        badge: 'Exam Structure',
        content: `- **Reading (35 menit)**: 2 bacaan akademis (masing-masing 10 pertanyaan).
- **Listening (36 menit)**: 3 percakapan kampus & 3 kuliah akademis (28 pertanyaan).
- **Speaking (16 menit)**: 1 tugas mandiri + 3 tugas terintegrasi (membaca/mendengar + berbicara).
- **Writing (29 menit)**: 1 Integrated Writing Task (20 menit) + 1 Writing for an Academic Discussion Task (10 menit).`,
      },
    ],
    keyTakeaways: [
      'TOEFL menguji bahasa Inggris dalam konteks akademis universitas Amerika Utara.',
      'Pada tugas terintegrasi (Integrated Tasks), kemampuan mensintesis bacaan dan rekaman kuliah adalah kunci skor tertinggi.',
    ],
    nextLessonId: 'toefl-02',
  },
  {
    id: 'toefl-02',
    trackId: 'toefl-prep',
    slug: 'academic-discussion-writing-task',
    title: 'TOEFL Writing: Academic Discussion Mastery (10-Minute Sprint)',
    order: 2,
    summary: 'Format penulisan esai terbaru TOEFL iBT: Berkontribusi dalam forum diskusi akademis online bersama profesor dan dua rekan mahasiswa dalam 10 menit (minimal 100 kata).',
    readTimeMin: 8,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Membaca cepat pertanyaan profesor dan respon dua mahasiswa dalam <1.5 menit.',
      'Menulis kontribusi ide orisinal yang mengembangkan diskusi dengan argumen spesifik.',
      'Mempertahankan akurasi gramatikal tinggi dalam batas waktu 10 menit.',
    ],
    sections: [
      {
        id: 'sec-toefl-2',
        title: 'Formula 3 Langkah Respon Diskusi Akademis',
        badge: '10-Minute Formula',
        content: `1. **Acknowledge & Position (1-2 kalimat)**: Sebutkan rekan yang kamu setujui/korelasikan dan nyatakan posisi intimu (e.g. *While Sarah brings up a valid concern regarding costs, I firmly align with John's perspective that...*).
2. **Elaborate with Unique Angle & Example (3-4 kalimat)**: Berikan satu alasan baru dan contoh konkret pendukung.
3. **Synthesis / Conclusion (1 kalimat)**: Simpulkan signifikansi kebijakan/topik tersebut.`,
      },
    ],
    keyTakeaways: [
      'Jangan hanya mengulang kata-kata rekan diskusi; bawalah perspektif atau contoh baru.',
      'Panjang ideal adalah 120-150 kata dengan tata bahasa yang bersih.',
    ],
    prevLessonId: 'toefl-01',
  },
];

export const toeflExercises: Record<string, Exercise[]> = {
  'toefl-01': [
    {
      id: 'ex-toefl01-1',
      lessonId: 'toefl-01',
      type: 'multiple-choice',
      title: 'Tipe Pertanyaan TOEFL Reading',
      instruction: 'Identifikasi tipe pertanyaan berdasarkan petunjuk soal.',
      question: 'Pertanyaan: "Why does the author mention the migration of wildebeests in paragraph 3?" Tipe pertanyaan apakah ini?',
      options: [
        { id: 'a', text: 'Vocabulary in Context', explanation: 'Salah, tidak menanyakan arti kata.' },
        { id: 'b', text: 'Rhetorical Purpose Question', explanation: 'Tepat! Soal menanyakan mengapa penulis memasukkan fakta/contoh tertentu.' },
        { id: 'c', text: 'Negative Factual Question', explanation: 'Soal tidak memakai kata "EXCEPT" atau "NOT".' },
        { id: 'd', text: 'Sentence Insertion Question', explanation: 'Bukan menempatkan kalimat ke dalam kotak.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'toefl-02': [
    {
      id: 'ex-toefl02-1',
      lessonId: 'toefl-02',
      type: 'writing-rubric',
      title: 'Simulasi TOEFL Academic Discussion Task (10 Menit)',
      instruction: 'Tulis respon diskusi kelas akademis online minimal 100 kata dalam 10 menit berdasarkan situasi di bawah.',
      taskType: 'TOEFL-Academic',
      prompt: `**Professor Diaz**: Next week, our city council will vote on whether to fund free public transportation for all residents or invest that capital into expanding bicycle lanes and pedestrian greenways. Which policy would produce a greater long-term benefit for urban sustainability?

**Claire**: Free public transit will immediately reduce traffic congestion and carbon emissions by incentivizing commuters to leave their private vehicles at home.

**Paul**: Expanding cycling infrastructure is cheaper to maintain and encourages an active, healthy lifestyle while directly addressing short-distance urban mobility.`,
      suggestedTimeMin: 10,
      minWordCount: 100,
      maxWordCount: 160,
      criteria: [
        {
          id: 'dev',
          name: 'Topic Development & Relevance',
          weightPercent: 50,
          descriptors: [
            { score: 5, label: 'Score 5', description: 'Relevant and clearly expressed contribution that adds fresh insights and well-chosen examples.' },
            { score: 3, label: 'Score 3', description: 'Adequate contribution, but ideas may be generic or partially repetitive of other classmates.' },
            { score: 1, label: 'Score 1', description: 'Limited contribution with poor development or tangential remarks.' },
          ],
        },
        {
          id: 'lang',
          name: 'Language Use & Syntactic Variety',
          weightPercent: 50,
          descriptors: [
            { score: 5, label: 'Score 5', description: 'High syntactic variety, sophisticated academic vocabulary, and minimal errors.' },
            { score: 3, label: 'Score 3', description: 'Noticeable errors in grammar and word choice that do not completely obscure meaning.' },
            { score: 1, label: 'Score 1', description: 'Frequent severe language errors that impede comprehensibility.' },
          ],
        },
      ],
      modelAnswer: {
        bandOrScore: 'Score 5.0 (Top Tier Model)',
        text: `While Claire makes a compelling point regarding immediate traffic alleviation, I strongly believe that prioritizing free public transportation delivers far superior equitable benefits. Public transit infrastructure serves a much broader demographic, including elderly citizens, low-income families, and disabled individuals who cannot realistically rely on bicycles in extreme weather conditions. For instance, in cities where transit fares were eliminated, ridership surged across suburban workforce corridors, significantly lowering daily living expenses for underserved communities. Therefore, subsidizing mass transit directly promotes both environmental sustainability and socioeconomic equity simultaneously.`,
        analysis: [
          'Directly acknowledges classmate (Claire) while establishing a distinct argument.',
          'Introduces a fresh angle: socioeconomic equity and inclusivity for non-cyclists.',
          'Provides a clear contextual example with precise academic vocabulary ("socioeconomic equity", "underserved communities", "traffic alleviation").',
          'Word count: ~110 words — perfectly concise for a 10-minute exercise.',
        ],
      },
      recommendedVocabulary: [
        { term: 'Socioeconomic equity', definition: 'Pemerataan keadilan sosial dan ekonomi', example: 'Mass transit subsidization fosters socioeconomic equity.' },
        { term: 'Alleviate congestion', definition: 'Meringankan kemacetan lalu lintas', example: 'Public transit helps alleviate heavy highway congestion.' },
      ],
      points: 20,
    },
  ],
};
