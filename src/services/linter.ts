export interface LintIssue {
  id: string;
  type: 'l1-error' | 'weak-word' | 'grammar' | 'style';
  severity: 'error' | 'warning' | 'suggestion';
  phrase: string;
  startPos: number;
  endPos: number;
  message: string;
  replacementSuggestion?: string;
  linguisticRationale: string;
}

export interface WritingMetrics {
  wordCount: number;
  sentenceCount: number;
  avgSentenceLength: number;
  lexicalDiversityPercent: number; // Unique non-stop words / total words
  repetitiveWords: Array<{ word: string; count: number; academicAlternatives: string[] }>;
  issues: LintIssue[];
}

const COMMON_STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by',
  'of', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
  'do', 'does', 'did', 'that', 'this', 'these', 'those', 'it', 'its', 'they', 'them',
  'their', 'we', 'us', 'our', 'you', 'your', 'he', 'him', 'his', 'she', 'her',
  'as', 'if', 'when', 'than', 'so', 'can', 'will', 'would', 'could', 'should'
]);

const L1_RULES: Array<{
  pattern: RegExp;
  message: string;
  replacement?: string;
  rationale: string;
  type: 'l1-error' | 'grammar';
}> = [
  {
    pattern: /\bdiscuss\s+about\b/gi,
    message: 'Hindari preposisi "about" setelah verba "discuss".',
    replacement: 'discuss',
    rationale: '"Discuss" adalah Transitive Verb murni dan langsung mengambil direct object tanpa "about". (Interferensi L1: "berdiskusi tentang").',
    type: 'l1-error',
  },
  {
    pattern: /\bwas\s+happened\b/gi,
    message: '"Happen" adalah kata kerja intransitif dan tidak boleh dipasifkan.',
    replacement: 'happened',
    rationale: 'Verba intransitif tidak memiliki objek penderita sehingga tidak bisa berbentuk "was happened" ❌.',
    type: 'grammar',
  },
  {
    pattern: /\bwas\s+occurred\b/gi,
    message: '"Occur" adalah kata kerja intransitif dan tidak boleh dipasifkan.',
    replacement: 'occurred',
    rationale: 'Bentuk pasif "was occurred" adalah salah satu kesalahan paling fatal dalam esai IELTS/TOEFL.',
    type: 'grammar',
  },
  {
    pattern: /\balthough\b[\s\S]{1,60}\bbut\b/gi,
    message: 'Double Conjunction: Jangan gunakan "although" dan "but" dalam satu kalimat.',
    replacement: 'Although ... (hapus "but")',
    rationale: 'Menggabungkan konjungsi subordinatif (*Although*) dan koordinatif (*but*) secara bersamaan menghasilkan kalimat majemuk cacat.',
    type: 'l1-error',
  },
  {
    pattern: /\beven\s+though\b[\s\S]{1,60}\bbut\b/gi,
    message: 'Double Conjunction: Jangan gunakan "even though" dan "but" dalam satu kalimat.',
    replacement: 'Even though ... (hapus "but")',
    rationale: 'Pilih salah satu: gunakan "Even though [klausa], [klausa utama]" ATAU "[klausa], but [klausa]".',
    type: 'l1-error',
  },
  {
    pattern: /\bthe\s+reason\s+is\s+because\b/gi,
    message: 'Redundansi: Gunakan "the reason is that".',
    replacement: 'the reason is that',
    rationale: 'Kata "reason" dan "because" sama-sama menyatakan kausalitas. Pola preskriptif baku adalah "the reason is that...".',
    type: 'grammar',
  },
  {
    pattern: /\bsuperior\s+than\b/gi,
    message: 'Adjektiva Latin "superior" berkolokasi dengan "to", bukan "than".',
    replacement: 'superior to',
    rationale: 'Kata sifat berakhiran -ior asal Latin (*superior, inferior, senior, prior*) wajib berpasangan dengan "to".',
    type: 'grammar',
  },
  {
    pattern: /\binferior\s+than\b/gi,
    message: 'Adjektiva Latin "inferior" berkolokasi dengan "to", bukan "than".',
    replacement: 'inferior to',
    rationale: 'Gunakan preposisi "to": *inferior to*.',
    type: 'grammar',
  },
  {
    pattern: /\bexplain\s+(?:me|him|her|them|us)\s+/gi,
    message: 'Verba "explain" tidak mengikuti pola Ditransitive (SVOO).',
    replacement: 'explain to me / explain [something] to me',
    rationale: 'Struktur yang benar adalah "explain something to someone", bukan "explain me something".',
    type: 'l1-error',
  },
  {
    pattern: /\bless\s+(?:students|people|problems|factors|reasons|cases|countries)\b/gi,
    message: 'Countable noun menuntut quantifier "fewer", bukan "less".',
    replacement: 'fewer',
    rationale: 'Gunakan "fewer" untuk kata benda yang dapat dihitung (countable) dan "less" untuk uncountable.',
    type: 'grammar',
  },
  {
    pattern: /\b(informations|furnitures|equipments|evidences|advices)\b/gi,
    message: 'Uncountable Noun Absolut tidak boleh memiliki akhiran jamak -s.',
    replacement: 'information / furniture / equipment / evidence / advice',
    rationale: 'Kata-kata ini tidak pernah dijamakkan. Gunakan partitif seperti "pieces of evidence" atau "items of equipment".',
    type: 'l1-error',
  },
  {
    pattern: /\bin\s+the\s+other\s+hand\b/gi,
    message: 'Idiom baku bahasa Inggris adalah "on the other hand".',
    replacement: 'on the other hand',
    rationale: 'Preposisi baku untuk idiom pertentangan adalah **ON** the other hand (Interferensi L1: "di sisi lain" ➔ *in the other hand ❌*).',
    type: 'l1-error',
  },
  {
    pattern: /\bdepend\s+of\b/gi,
    message: 'Kolokasi preposisi terikat untuk "depend" adalah "on".',
    replacement: 'depend on',
    rationale: 'Verba depend selalu berkolokasi dengan ON (*depend on*, bukan *depend of*).',
    type: 'grammar',
  },
  {
    pattern: /\binterested\s+for\b/gi,
    message: 'Preposisi terikat untuk "interested" adalah "in".',
    replacement: 'interested in',
    rationale: 'Adjektiva interested berkolokasi dengan IN (*interested in*, bukan *interested for*).',
    type: 'grammar',
  },
  {
    pattern: /\bevery\s+(?:students|people|individuals|members|citizens)\b/gi,
    message: 'Determiner "every" wajib diikuti kata benda tunggal (singular).',
    replacement: 'every student / each individual',
    rationale: '"Every" dan "Each" selalu bersubjek singular concord.',
    type: 'grammar',
  }
];

const WEAK_WORDS_MAP: Record<string, { alternatives: string[]; note: string }> = {
  'very good': { alternatives: ['exemplary', 'exceptional', 'commendable', 'superb'], note: 'Gunakan kosakata bernuansa formal.' },
  'very bad': { alternatives: ['detrimental', 'catastrophic', 'adverse', 'deplorable'], note: 'Tingkatkan akurasi leksikal.' },
  'very big': { alternatives: ['substantial', 'immense', 'colossal', 'monumental'], note: 'Hindari modifikasi berlebih dengan "very".' },
  'very important': { alternatives: ['paramount', 'crucial', 'pivotal', 'imperative'], note: 'Kata akademis berbobot tinggi untuk esai Band 7.5+.' },
  'a lot of': { alternatives: ['numerous', 'a substantial proportion of', 'a multitude of', 'an abundance of'], note: '"A lot of" bernada informal untuk penulisan akademik.' },
  'thing': { alternatives: ['element', 'dimension', 'factor', 'phenomenon', 'aspect'], note: 'Kata "thing" terlalu ambigu dalam konteks akademis.' },
  'things': { alternatives: ['elements', 'dimensions', 'factors', 'phenomena', 'aspects'], note: 'Ganti dengan istilah spesifik.' },
  'bad': { alternatives: ['suboptimal', 'flawed', 'unfavorable', 'detrimental'], note: 'Pertimbangkan kata sifat presisi.' },
  'good': { alternatives: ['beneficial', 'advantageous', 'favorable', 'constructive'], note: 'Tingkatkan register penulisan.' },
  'get': { alternatives: ['acquire', 'obtain', 'secure', 'derive', 'procure'], note: '"Get" bernada lisan/percakapan sehari-hari.' },
};

export function analyzeAcademicText(text: string): WritingMetrics {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      wordCount: 0,
      sentenceCount: 0,
      avgSentenceLength: 0,
      lexicalDiversityPercent: 0,
      repetitiveWords: [],
      issues: [],
    };
  }

  // 1. Word tokens and sentences
  const words = trimmed.match(/[a-zA-Z0-9'-]+/g) || [];
  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const wordCount = words.length;
  const sentenceCount = Math.max(1, sentences.length);
  const avgSentenceLength = Math.round((wordCount / sentenceCount) * 10) / 10;

  // 2. Lexical diversity
  const lowerWords = words.map((w) => w.toLowerCase());
  const contentWords = lowerWords.filter((w) => !COMMON_STOP_WORDS.has(w) && w.length > 2);
  const uniqueContentWords = new Set(contentWords);
  const lexicalDiversityPercent = contentWords.length > 0
    ? Math.round((uniqueContentWords.size / contentWords.length) * 100)
    : 100;

  // 3. Repetitive words
  const frequencyMap: Record<string, number> = {};
  contentWords.forEach((w) => {
    frequencyMap[w] = (frequencyMap[w] || 0) + 1;
  });

  const repetitiveWords: Array<{ word: string; count: number; academicAlternatives: string[] }> = [];
  Object.entries(frequencyMap).forEach(([word, count]) => {
    if (count >= 4) {
      repetitiveWords.push({
        word,
        count,
        academicAlternatives: ['sinonim akademis kontekstual', 'variasi frasa pronominal'],
      });
    }
  });
  repetitiveWords.sort((a, b) => b.count - a.count);

  // 4. Lint issues scan
  const issues: LintIssue[] = [];

  // L1 & Grammar scans
  L1_RULES.forEach((rule, idx) => {
    let match;
    const regex = new RegExp(rule.pattern.source, 'gi');
    while ((match = regex.exec(trimmed)) !== null) {
      issues.push({
        id: `l1-${idx}-${match.index}`,
        type: rule.type,
        severity: rule.type === 'grammar' ? 'error' : 'warning',
        phrase: match[0],
        startPos: match.index,
        endPos: match.index + match[0].length,
        message: rule.message,
        replacementSuggestion: rule.replacement,
        linguisticRationale: rule.rationale,
      });
    }
  });

  // Weak words scan
  Object.entries(WEAK_WORDS_MAP).forEach(([phrase, data], idx) => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    let match;
    while ((match = regex.exec(trimmed)) !== null) {
      issues.push({
        id: `weak-${idx}-${match.index}`,
        type: 'weak-word',
        severity: 'suggestion',
        phrase: match[0],
        startPos: match.index,
        endPos: match.index + match[0].length,
        message: `Frasa "${match[0]}" bernada informal untuk standar IELTS/TOEFL.`,
        replacementSuggestion: data.alternatives.join(', '),
        linguisticRationale: data.note,
      });
    }
  });

  return {
    wordCount,
    sentenceCount,
    avgSentenceLength,
    lexicalDiversityPercent,
    repetitiveWords: repetitiveWords.slice(0, 5),
    issues,
  };
}
