import { Track, Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';
import { basicGrammarLessons, basicGrammarExercises } from './lessons/basic-grammar';
import { intermediateGrammarLessons, intermediateGrammarExercises } from './lessons/intermediate-grammar';
import { vocabularyLessons, vocabularyExercises } from './lessons/vocabulary';
import { readingWritingLessons, readingWritingExercises } from './lessons/reading-writing';
import { ieltsLessons, ieltsExercises } from './lessons/ielts-lessons';
import { toeflLessons, toeflExercises } from './lessons/toefl-lessons';

export const TRACKS: Track[] = [
  {
    id: 'basic-fundamentals',
    slug: 'basic-fundamentals',
    title: 'Basic English & Core Grammar',
    subtitle: 'From zero to solid foundations: parts of speech, 16 tenses, and sentence patterns',
    level: 'basic',
    category: 'grammar',
    description: 'Pelajari dasar-dasar bahasa Inggris esensial: apa itu verb, noun, tenses, cara menyusun kalimat bahasa Inggris yang benar tanpa ragu.',
    iconName: 'BookOpen',
    badgeText: 'Level 1 · Fundamentals',
    estimatedHours: 12,
    totalLessons: basicGrammarLessons.length,
    colorTheme: {
      primary: '#1A1714',
      secondary: '#82796A',
      accent: '#C4502A',
      border: 'rgba(196, 80, 42, 0.25)',
      bgGlow: 'rgba(196, 80, 42, 0.08)',
    },
    lessons: basicGrammarLessons,
  },
  {
    id: 'intermediate-grammar',
    slug: 'intermediate-grammar',
    title: 'Intermediate Structures & Fluency',
    subtitle: 'Passive voice, conditionals, inversion, and complex academic clauses',
    level: 'intermediate',
    category: 'grammar',
    description: 'Tingkatkan kualitas kalimatmu ke standar akademis dengan variasi klausa kompleks, kalimat pasif ilmiah, dan inversion.',
    iconName: 'Sparkles',
    badgeText: 'Level 2 · Structural Mastery',
    estimatedHours: 15,
    totalLessons: intermediateGrammarLessons.length,
    colorTheme: {
      primary: '#1A1714',
      secondary: '#5F6244',
      accent: '#5F6244',
      border: 'rgba(95, 98, 68, 0.25)',
      bgGlow: 'rgba(95, 98, 68, 0.08)',
    },
    lessons: intermediateGrammarLessons,
  },
  {
    id: 'vocabulary-mastery',
    slug: 'vocabulary-mastery',
    title: 'Vocabulary & Academic Collocations',
    subtitle: 'Oxford 3000, Academic Word List, idiomatic precision, and flashcards',
    level: 'intermediate',
    category: 'vocabulary',
    description: 'Kuasai kosakata aktif, frasa alami penutur asli, dan kolokasi akademis yang mendongkrak skor Lexical Resource.',
    iconName: 'Library',
    badgeText: 'Level 2 · Lexicon',
    estimatedHours: 10,
    totalLessons: vocabularyLessons.length,
    colorTheme: {
      primary: '#1A1714',
      secondary: '#B5663F',
      accent: '#B5663F',
      border: 'rgba(181, 102, 63, 0.25)',
      bgGlow: 'rgba(181, 102, 63, 0.08)',
    },
    lessons: vocabularyLessons,
  },
  {
    id: 'reading-writing-workshop',
    slug: 'reading-writing-workshop',
    title: 'Reading Comprehension & Writing Studio',
    subtitle: 'Skimming, scanning, paragraph cohesion, and argumentative essay crafting',
    level: 'advanced',
    category: 'writing',
    description: 'Latih kecepatan membaca teks panjang dan kemampuan menuangkan argumen berbobot dengan struktur PEEL.',
    iconName: 'PenTool',
    badgeText: 'Level 3 · Synthesis',
    estimatedHours: 14,
    totalLessons: readingWritingLessons.length,
    colorTheme: {
      primary: '#1A1714',
      secondary: '#7A6B5D',
      accent: '#944E2C',
      border: 'rgba(148, 78, 44, 0.25)',
      bgGlow: 'rgba(148, 78, 44, 0.08)',
    },
    lessons: readingWritingLessons,
  },
  {
    id: 'ielts-prep',
    slug: 'ielts-prep',
    title: 'IELTS Academic & General Prep',
    subtitle: 'Target Band 7.0+: Task 1 charts, Task 2 essays, TFNG reading, and speaking cue cards',
    level: 'exam-prep',
    category: 'ielts',
    description: 'Strategi komprehensif menghadapi ujian IELTS: bedah 4 kriteria penilaian resmi penguji Cambridge, template esai, dan simulasi soal.',
    iconName: 'Award',
    badgeText: 'Exam Prep · Band 7.0+',
    estimatedHours: 20,
    totalLessons: ieltsLessons.length,
    colorTheme: {
      primary: '#1E3A8A',
      secondary: '#3B82F6',
      accent: '#1D4ED8',
      border: 'rgba(29, 78, 216, 0.25)',
      bgGlow: 'rgba(29, 78, 216, 0.08)',
    },
    lessons: ieltsLessons,
  },
  {
    id: 'toefl-prep',
    slug: 'toefl-prep',
    title: 'TOEFL iBT Mastery & Score 100+',
    subtitle: 'Integrated Writing, Academic Discussion, Lecture Listening, and Inference',
    level: 'exam-prep',
    category: 'toefl',
    description: 'Kuasai format terbaru TOEFL iBT versi 2 jam: Academic Discussion Task, sintesis bacaan-kuliah, dan strategi menjawab cepat.',
    iconName: 'GraduationCap',
    badgeText: 'Exam Prep · Score 100+',
    estimatedHours: 18,
    totalLessons: toeflLessons.length,
    colorTheme: {
      primary: '#065F46',
      secondary: '#10B981',
      accent: '#047857',
      border: 'rgba(4, 120, 87, 0.25)',
      bgGlow: 'rgba(4, 120, 87, 0.08)',
    },
    lessons: toeflLessons,
  },
];

// Unified Exercise Lookup Map
export const ALL_EXERCISES: Record<string, Exercise[]> = {
  ...basicGrammarExercises,
  ...intermediateGrammarExercises,
  ...vocabularyExercises,
  ...readingWritingExercises,
  ...ieltsExercises,
  ...toeflExercises,
};

// Helper Functions
export function getTrackBySlug(slug: string): Track | undefined {
  return TRACKS.find((t) => t.slug === slug || t.id === slug);
}

export function getLessonBySlug(trackSlug: string, lessonSlug: string): { track: Track; lesson: Lesson; exercises: Exercise[] } | null {
  const track = getTrackBySlug(trackSlug);
  if (!track) return null;

  const lesson = track.lessons.find((l) => l.slug === lessonSlug || l.id === lessonSlug);
  if (!lesson) return null;

  const exercises = ALL_EXERCISES[lesson.id] || [];
  return { track, lesson, exercises };
}

export function getAllLessons(): Lesson[] {
  return TRACKS.flatMap((t) => t.lessons);
}
