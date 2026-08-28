import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export interface VocabularyCard {
  id: string;
  word: string;
  partOfSpeech: string;
  ipa: string;
  definitionId: string;
  definitionEn: string;
  exampleSentence: string;
  collocations: string[];
  level: 'Basic' | 'Intermediate' | 'Academic/IELTS';
  category: string;
}

export const vocabularyCards: VocabularyCard[] = [
  {
    id: 'v-01',
    word: 'Meticulous',
    partOfSpeech: 'adjective',
    ipa: '/məˈtɪkjələs/',
    definitionId: 'Sangat teliti, cermat, dan berhati-hati terhadap setiap detail kecil.',
    definitionEn: 'Showing great attention to detail; very careful and precise.',
    exampleSentence: 'The researcher kept meticulous records of every experiment conducted.',
    collocations: ['meticulous attention to detail', 'meticulous planning', 'meticulous research'],
    level: 'Academic/IELTS',
    category: 'Research & Academics',
  },
  {
    id: 'v-02',
    word: 'Substantiate',
    partOfSpeech: 'verb',
    ipa: '/səbˈstænʃieɪt/',
    definitionId: 'Membuktikan kebenaran suatu klaim atau teori dengan bukti nyata.',
    definitionEn: 'Provide evidence to support or prove the truth of something.',
    exampleSentence: 'The author failed to substantiate her hypothesis with empirical data.',
    collocations: ['substantiate a claim', 'substantiate an argument', 'substantiate allegations'],
    level: 'Academic/IELTS',
    category: 'Argumentation',
  },
  {
    id: 'v-03',
    word: 'Pragmatic',
    partOfSpeech: 'adjective',
    ipa: '/præɡˈmætɪk/',
    definitionId: 'Praktis dan berorientasi pada hasil nyata daripada teori abstrak semata.',
    definitionEn: 'Dealing with things sensibly and realistically in a way based on practical rather than theoretical considerations.',
    exampleSentence: 'In the face of economic uncertainty, policymakers adopted a pragmatic approach.',
    collocations: ['pragmatic approach', 'pragmatic solution', 'pragmatic mindset'],
    level: 'Intermediate',
    category: 'Decision Making',
  },
  {
    id: 'v-04',
    word: 'Ubiquitous',
    partOfSpeech: 'adjective',
    ipa: '/juːˈbɪkwɪtəs/',
    definitionId: 'Ada di mana-mana, sangat umum dan mudah ditemui di segala tempat.',
    definitionEn: 'Present, appearing, or found everywhere.',
    exampleSentence: 'Smartphones have become ubiquitous across all tiers of modern society.',
    collocations: ['ubiquitous presence', 'ubiquitous technology', 'become ubiquitous'],
    level: 'Academic/IELTS',
    category: 'Society & Technology',
  },
  {
    id: 'v-05',
    word: 'Exacerbate',
    partOfSpeech: 'verb',
    ipa: '/ɪɡˈzæsəbeɪt/',
    definitionId: 'Memperburuk masalah, keadaan sulit, atau penyakit.',
    definitionEn: 'Make a problem, bad situation, or negative feeling worse.',
    exampleSentence: 'Deforestation significantly exacerbates the risks of seasonal flooding.',
    collocations: ['exacerbate the problem', 'exacerbate tensions', 'exacerbate inequalities'],
    level: 'Academic/IELTS',
    category: 'Cause & Effect',
  },
  {
    id: 'v-06',
    word: 'Plausible',
    partOfSpeech: 'adjective',
    ipa: '/ˈplɔːzəbl/',
    definitionId: 'Masuk akal, masuk akal secara logis dan dapat dipercaya.',
    definitionEn: 'Seeming reasonable, probable, or worthy of belief.',
    exampleSentence: 'Scientists presented a plausible explanation for the sudden atmospheric changes.',
    collocations: ['plausible explanation', 'plausible hypothesis', 'perfectly plausible'],
    level: 'Intermediate',
    category: 'Logic & Reasoning',
  },
  {
    id: 'v-07',
    word: 'Prevalent',
    partOfSpeech: 'adjective',
    ipa: '/ˈprevələnt/',
    definitionId: 'Marak, lumrah, atau tersebar luas pada waktu/wilayah tertentu.',
    definitionEn: 'Widespread in a particular area or at a particular time.',
    exampleSentence: 'Sedentary lifestyles are increasingly prevalent among urban adolescents.',
    collocations: ['prevalent among', 'widely prevalent', 'prevalent condition'],
    level: 'Intermediate',
    category: 'Health & Society',
  },
  {
    id: 'v-08',
    word: 'Detrimental',
    partOfSpeech: 'adjective',
    ipa: '/ˌdetrɪˈmentl/',
    definitionId: 'Merugikan, berdampak buruk atau merusak.',
    definitionEn: 'Tending to cause harm or damage.',
    exampleSentence: 'Excessive consumption of processed foods has a detrimental effect on cardiovascular health.',
    collocations: ['detrimental effect', 'detrimental impact', 'prove detrimental'],
    level: 'Academic/IELTS',
    category: 'Cause & Effect',
  },
];

export const vocabularyLessons: Lesson[] = [
  {
    id: 'vocab-01',
    trackId: 'vocabulary-mastery',
    slug: 'oxford-3000-high-yield-collocations',
    title: 'High-Yield Academic Collocations & Phrasal Precision',
    order: 1,
    summary: 'Ketahui kombinasi kata alami yang digunakan penutur asli untuk menghindari terjemahan kaku kata-per-kata dari bahasa Indonesia.',
    readTimeMin: 7,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan kolokasi "make" vs "do", "take" vs "have".',
      'Menggunakan kolokasi akademis (e.g. "draw conclusions", "conduct research", "cast light on").',
      'Memperbaiki kesalahan umum terjemahan langsung (*big difference* vs *profound difference*).',
    ],
    sections: [
      {
        id: 'sec-v-1',
        title: 'Kekuatan Kolokasi dalam Ujian IELTS & TOEFL',
        badge: 'Lexical Precision',
        content: `Penguji internasional tidak hanya menghitung banyaknya kata sulit, melainkan **kewajaran pasangannya (collocation)**.

- ❌ *do a mistake* ➔ ✔️ **make a mistake**
- ❌ *strong rain* ➔ ✔️ **heavy rain / torrential downpour**
- ❌ *make an investigation* ➔ ✔️ **conduct / carry out an investigation**
- ❌ *gain a conclusion* ➔ ✔️ **draw / reach a conclusion**`,
      },
    ],
    keyTakeaways: [
      'Selalu pelajari kosakata baru bersama pasangan katanya (collocation), bukan sebagai kata tunggal terisolasi.',
    ],
    nextLessonId: 'vocab-02',
  },
  {
    id: 'vocab-02',
    trackId: 'vocabulary-mastery',
    slug: 'academic-word-list-awl',
    title: 'The Academic Word List (AWL) for IELTS 7+ & TOEFL 100+',
    order: 2,
    summary: 'Daftar kata kunci yang paling sering muncul di jurnal sains, bacaan akademis, dan artikel universitas dunia.',
    readTimeMin: 8,
    difficulty: 'Advanced',
    objectives: [
      'Menguasai kata kerja analitis (analyze, synthesize, substantiate, evaluate).',
      'Mengetahui perubahan bentuk kata (noun ➔ verb ➔ adjective).',
    ],
    sections: [
      {
        id: 'sec-v-2',
        title: 'Transformasi Bentuk Kata (Word Family)',
        content: `- **Analyze** (Verb) ➔ **Analysis** (Noun Sing.) ➔ **Analyses** (Noun Plur.) ➔ **Analytical** (Adj) ➔ **Analytically** (Adv)
- **Significant** (Adj) ➔ **Significance** (Noun) ➔ **Significantly** (Adv)
- **Hypothesize** (Verb) ➔ **Hypothesis** (Noun) ➔ **Hypothetical** (Adj)`,
      },
    ],
    keyTakeaways: [
      'Memahami word families mempermudah parafrase (salah satu keterampilan terpenting di IELTS Reading & Writing).',
    ],
    prevLessonId: 'vocab-01',
  },
];

export const vocabularyExercises: Record<string, Exercise[]> = {
  'vocab-01': [
    {
      id: 'ex-v01-1',
      lessonId: 'vocab-01',
      type: 'matching',
      title: 'Pasangkan Kata Kerja Akademis dengan Objek Kolokasinya',
      instruction: 'Hubungkan kata kerja di sisi kiri dengan frasa objek alami di sisi kanan.',
      pairs: [
        { id: 'vp1', left: 'Conduct', right: 'an empirical investigation' },
        { id: 'vp2', left: 'Formulate', right: 'a robust hypothesis' },
        { id: 'vp3', left: 'Substantiate', right: 'a disputed claim' },
        { id: 'vp4', left: 'Alleviate', right: 'urban traffic congestion' },
      ],
      explanation: 'Kolokasi formal ini secara instan meningkatkan skor Lexical Resource dalam esai.',
      points: 15,
    },
    {
      id: 'ex-v01-2',
      lessonId: 'vocab-01',
      type: 'multiple-choice',
      title: 'Pilihan Kolokasi yang Tepat',
      instruction: 'Pilih pasangan kata yang paling alami dan tepat untuk konteks akademis.',
      question: 'The committee was unable to ________ a definitive consensus on the proposal.',
      options: [
        { id: 'a', text: 'reach', explanation: 'Tepat! "Reach a consensus" adalah kolokasi standar.' },
        { id: 'b', text: 'catch', explanation: 'Salah ("catch a consensus" tidak lazim).' },
        { id: 'c', text: 'arrive at', explanation: '"Arrive at a consensus" benar, namun jika opsi "reach" tersedia, "reach a consensus" adalah bentuk transitif langsung.' },
        { id: 'd', text: 'grab', explanation: 'Terlalu kasual.' },
      ],
      correctAnswerId: 'a',
      points: 10,
    },
  ],
};
