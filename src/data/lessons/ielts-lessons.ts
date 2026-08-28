import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const ieltsLessons: Lesson[] = [
  {
    id: 'ielts-01',
    trackId: 'ielts-prep',
    slug: 'ielts-anatomy-and-band-descriptors',
    title: 'IELTS Anatomy & The 4 Band Descriptors',
    order: 1,
    summary: 'Pahami struktur 4 modul IELTS (Listening, Reading, Writing, Speaking) dan kriteria penilaian resmi penguji Cambridge untuk menembus Band 7.0 ke atas.',
    readTimeMin: 10,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Memahami pembobotan 4 modul IELTS dan konversi raw score ke Band 0-9.',
      'Menguasai 4 kriteria resmi Writing: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy.',
      'Mengetahui strategi manajemen waktu di masing-masing modul.',
    ],
    sections: [
      {
        id: 'sec-ielts-1',
        title: '4 Kriteria Resmi Penilaian IELTS Writing',
        badge: 'Crucial Knowledge',
        content: `Setiap esai dinilai secara independen berdasarkan 4 pilar berikut (masing-masing berbobot 25%):

1. **Task Achievement / Response (TR)**: Apakah kamu menjawab semua bagian pertanyaan? Apakah posisimu jelas dari awal hingga akhir?
2. **Coherence & Cohesion (CC)**: Apakah ide disusun dalam paragraf logis? Apakah kata penghubung (linking words) digunakan secara natural dan tidak berlebihan?
3. **Lexical Resource (LR)**: Rentang kosakata, penggunaan kolokasi alami, keakuratan ejaan, dan menghindari repetisi kata sederhana.
4. **Grammatical Range & Accuracy (GRA)**: Kombinasi kalimat sederhana dan kompleks, penggunaan punctuation yang tepat, serta minimnya error yang mengganggu pemahaman.`,
      },
    ],
    keyTakeaways: [
      'Untuk mendapatkan Band 7.0+, kamu membutuhkan setidaknya 50% kalimat kompleks bebas error.',
      'Overview paragraph pada Task 1 adalah syarat wajib untuk mendapatkan skor di atas Band 5.0.',
    ],
    nextLessonId: 'ielts-02',
  },
  {
    id: 'ielts-02',
    trackId: 'ielts-prep',
    slug: 'academic-task-1-data-reporting',
    title: 'IELTS Writing Task 1: Academic Data & Chart Reporting',
    order: 2,
    summary: 'Kuasai template 4 paragraf untuk mendeskripsikan diagram batang, grafik garis, tabel, pie chart, peta, dan diagram proses dalam waktu 20 menit.',
    readTimeMin: 12,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Menulis Paragraf Overview yang kuat (menonjolkan tren utama tanpa angka spesifik).',
      'Menggunakan kosakata variasi tren (e.g. surged, plummeted, leveled off, fluctuated wildly).',
      'Menghindari opini pribadi — Task 1 murni laporan data faktual.',
    ],
    sections: [
      {
        id: 'sec-ielts-2',
        title: 'Struktur Emas 4 Paragraf Task 1',
        badge: 'Step-by-Step Blueprint',
        content: `1. **Introduction**: Parafrase judul grafik (1 kalimat).
2. **Overview**: Sorot 2-3 tren terbesar/fitur paling mencolok tanpa menyebut angka detail (1-2 kalimat).
3. **Body Paragraph 1**: Detail data kelompok pertama dengan perbandingan angka spesifik.
4. **Body Paragraph 2**: Detail data kelompok kedua dengan komparasi dan kontras.`,
        ruleBox: {
          formula: 'The provided [graph/chart] illustrates changes in [topic] across [time period/categories]. Overall, it is evident that...',
          explanation: 'Paragraf Overview adalah kunci utama nilai Task Achievement.',
        },
      },
    ],
    keyTakeaways: [
      'Minimal 150 kata, diselesaikan dalam waktu 20 menit.',
      'Jangan pernah menulis kesimpulan opini seperti "In my opinion" di Task 1.',
    ],
    prevLessonId: 'ielts-01',
    nextLessonId: 'ielts-03',
  },
  {
    id: 'ielts-03',
    trackId: 'ielts-prep',
    slug: 'writing-task-2-argumentative-mastery',
    title: 'IELTS Writing Task 2: Band 7.5+ Essay Blueprints',
    order: 3,
    summary: 'Kuasai formula esai 250 kata untuk 5 tipe pertanyaan: Agree/Disagree, Discuss Both Views, Problem & Solution, Advantages/Disadvantages, dan Double Question.',
    readTimeMin: 15,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Menyusun Thesis Statement yang jelas dan tajam di pengantar.',
      'Mengembangkan paragraf utama menggunakan metode P-E-E-L (Point, Evidence, Explanation, Link).',
      'Menulis kesimpulan yang merangkum poin inti tanpa memperkenalkan ide baru.',
    ],
    sections: [
      {
        id: 'sec-ielts-3',
        title: 'Pengembangan Paragraf dengan Metode PEEL',
        content: `- **P (Point)**: Kalimat topik utama (e.g. *First and foremost, investing in renewable infrastructure stimulates economic vitality.*)
- **E (Explanation)**: Penjelasan mendalam mengapa hal itu terjadi (e.g. *By transitioning toward green energy sources, governments foster emerging technology sectors...*)
- **E (Evidence / Example)**: Contoh nyata pendukung (e.g. *For instance, recent initiatives in Nordic countries have generated thousands of specialized employment opportunities.*)
- **L (Link)**: Kalimat penutup yang mengikat kembali ke tesis (e.g. *Hence, sustainable energy investments yield dual environmental and economic dividends.*)`,
      },
    ],
    keyTakeaways: [
      'Minimal 250 kata, diselesaikan dalam waktu 40 menit.',
      'Setiap body paragraph sebaiknya fokus pada 1 ide utama yang diuraikan secara mendalam.',
    ],
    prevLessonId: 'ielts-02',
  },
];

export const ieltsExercises: Record<string, Exercise[]> = {
  'ielts-01': [
    {
      id: 'ex-ielts01-1',
      lessonId: 'ielts-01',
      type: 'multiple-choice',
      title: 'Kriteria Penilaian IELTS Writing',
      instruction: 'Pilih pernyataan yang paling benar mengenai kriteria Coherence and Cohesion (CC).',
      question: 'Apa faktor utama yang dinilai dalam kriteria Coherence & Cohesion?',
      options: [
        { id: 'a', text: 'Jumlah kosakata tingkat tinggi yang dimasukkan ke setiap kalimat.', explanation: 'Itu dinilai dalam Lexical Resource.' },
        { id: 'b', text: 'Alur logika antar kalimat, pembagian paragraf yang rapi, dan penggunaan linking words yang luwes.', explanation: 'Tepat! CC mengukur kejelasan struktur dan transisi ide.' },
        { id: 'c', text: 'Ketepatan rumus grammar past tense dan modal verbs.', explanation: 'Itu dinilai dalam Grammatical Range and Accuracy.' },
        { id: 'd', text: 'Banyaknya halaman yang berhasil ditulis oleh peserta.', explanation: 'Panjang berlebih tanpa struktur tidak menaikkan nilai CC.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'ielts-02': [
    {
      id: 'ex-ielts02-1',
      lessonId: 'ielts-02',
      type: 'multiple-choice',
      title: 'Mengidentifikasi Kalimat Overview yang Tepat',
      instruction: 'Manakah kalimat berikut yang paling cocok sebagai Overview Paragraf Task 1?',
      question: 'Pilih kalimat overview terbaik untuk grafik konsumsi energi terbarukan selama 20 tahun:',
      options: [
        { id: 'a', text: 'In 2005, solar energy was exactly 14.2 gigawatts and wind energy was 28.5 gigawatts.', explanation: 'Terlalu detail dengan angka spesifik, bukan gambaran umum tren.' },
        { id: 'b', text: 'Overall, it is evident that total renewable energy output experienced a substantial upward trajectory throughout the period, with solar power recording the most dramatic increase.', explanation: 'Sempurna! Menyorot tren keseluruhan dan komponen paling mencolok tanpa menjejali angka mentah.' },
        { id: 'c', text: 'I think solar power is very good for our planet and the government should invest more.', explanation: 'Opini pribadi dilarang dalam Task 1.' },
        { id: 'd', text: 'In conclusion, energy is very important for all countries in the modern era.', explanation: 'Ini terlalu klise dan tidak merangkum data grafik.' },
      ],
      correctAnswerId: 'b',
      points: 15,
    },
  ],
  'ielts-03': [
    {
      id: 'ex-ielts03-1',
      lessonId: 'ielts-03',
      type: 'writing-rubric',
      title: 'Simulasi Penulisan IELTS Writing Task 2 (Band 7.0+ Assessment)',
      instruction: 'Tulis esai lengkap sesuai instruksi prompt di bawah (minimal 250 kata). Evaluasi tulisanmu menggunakan 4 kriteria Cambridge di panel evaluasi.',
      taskType: 'IELTS-Task-2',
      prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?',
      suggestedTimeMin: 40,
      minWordCount: 250,
      maxWordCount: 350,
      criteria: [
        {
          id: 'tr',
          name: 'Task Achievement / Response',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Fully addresses all parts of the prompt with a well-developed, insightful thesis and clear position throughout.' },
            { score: 7, label: 'Band 7', description: 'Addresses all parts of the task with a clear position throughout, presenting relevant main ideas supported with explanations.' },
            { score: 5, label: 'Band 5', description: 'Addresses the task only partially; the format may be inappropriate or position unclear.' },
          ],
        },
        {
          id: 'cc',
          name: 'Coherence and Cohesion',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Seamless cohesion where paragraphing and discourse markers are effortless and natural.' },
            { score: 7, label: 'Band 7', description: 'Logically organizes information and ideas with clear progression throughout; uses a range of cohesive devices appropriately.' },
            { score: 5, label: 'Band 5', description: 'Presents information with some organization but may lack overall progression or overuse mechanical linking words.' },
          ],
        },
        {
          id: 'lr',
          name: 'Lexical Resource',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Uses a wide range of vocabulary with very natural and sophisticated control of lexical features; rare minor slips only.' },
            { score: 7, label: 'Band 7', description: 'Uses a sufficient range of vocabulary with some flexibility and precision; uses less common lexical items with awareness of style and collocation.' },
            { score: 5, label: 'Band 5', description: 'Uses a limited range of vocabulary; makes noticeable errors in spelling and word formation.' },
          ],
        },
        {
          id: 'gra',
          name: 'Grammatical Range and Accuracy',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Uses a wide range of structures with full flexibility and accuracy; rare minor errors characteristic of native-speaker slips.' },
            { score: 7, label: 'Band 7', description: 'Uses a variety of complex structures with good control; produces frequent error-free sentences.' },
            { score: 5, label: 'Band 5', description: 'Uses only a limited range of structures; attempts complex sentences but these tend to be less accurate.' },
          ],
        },
      ],
      modelAnswer: {
        bandOrScore: 'Band 8.0 Model Answer',
        text: `It is frequently argued that mandatory voluntary service ought to be integrated into secondary school curricula. I largely agree with this viewpoint because community participation fosters civic responsibility and equips adolescents with invaluable interpersonal skills, although adequate flexibility must be maintained so as not to overburden students academically.

First and foremost, engaging in civic initiatives nurtures a heightened sense of empathy and social responsibility. When young individuals volunteer at local shelters, public libraries, or environmental conservation projects, they gain firsthand exposure to societal challenges beyond their immediate academic circle. This experiential learning dismantles self-centered tendencies and encourages teenagers to view themselves as proactive contributors to the public good. For instance, studies indicate that students involved in community service are significantly more likely to participate in civic duties and demonstrate higher levels of altruism in adulthood.

Furthermore, community service provides a practical platform for teenagers to develop essential transferable skills that classroom instruction alone cannot offer. Working in team-oriented public settings refines communication, problem-solving, and conflict-resolution abilities. Moreover, managing community commitments alongside academic deadlines teaches vital time-management skills, which are crucial for prospective university studies and professional careers.

Nonetheless, while the advantages are compelling, policymakers must ensure that these programmes do not place excessive demands on students preparing for rigorous national examinations. The requirement should be structured with reasonable hourly expectations, such as two hours per week, allowing students to balance scholarly commitments with civic engagement harmoniously.

In conclusion, incorporating compulsory community service into high school education is a constructive policy that cultivates mature, empathetic, and capable citizens. Provided that schools manage the workload prudently, this initiative yields substantial benefits for both students and society at large.`,
        analysis: [
          'Strong thesis statement in the introduction acknowledging nuance.',
          'Paragraph 2 focuses on empathy and social responsibility with an evidence citation.',
          'Paragraph 3 focuses on transferable soft skills and practical time management.',
          'Paragraph 4 addresses potential counter-arguments (academic workload) and proposes a balanced solution.',
          'Rich academic vocabulary: "nurtures a heightened sense of empathy", "experiential learning", "transferable skills", "civic engagement".',
        ],
      },
      recommendedVocabulary: [
        { term: 'Civic engagement', definition: 'Partisipasi aktif dalam kegiatan sosial bermasyarakat', example: 'Civic engagement among youth strengthens democratic resilience.' },
        { term: 'Experiential learning', definition: 'Pembelajaran melalui pengalaman langsung di lapangan', example: 'Volunteering offers experiential learning that textbooks cannot replicate.' },
        { term: 'Altruism', definition: 'Sikap kepedulian tanpa pamrih demi kesejahteraan orang lain', example: 'Community projects cultivate altruism in adolescents.' },
      ],
      points: 25,
    },
  ],
};
