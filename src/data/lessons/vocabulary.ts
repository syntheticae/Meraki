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
    id: 'vc-1',
    word: 'analyze',
    partOfSpeech: 'verb',
    ipa: '/ˈænəlaɪz/',
    definitionId: 'Memeriksa sesuatu secara metodis dan terperinci.',
    definitionEn: 'To examine something systematically and in detail.',
    exampleSentence: 'The researchers analyzed the data using statistical software.',
    collocations: ['analyze data', 'analyze results', 'critically analyze', 'statistically analyze'],
    level: 'Academic/IELTS',
    category: 'Research',
  },
  {
    id: 'vc-2',
    word: 'significant',
    partOfSpeech: 'adjective',
    ipa: '/sɪɡˈnɪfɪkənt/',
    definitionId: 'Cukup besar atau penting untuk diperhatikan.',
    definitionEn: 'Large or important enough to be noticed or have an effect.',
    exampleSentence: 'The study found a significant correlation between diet and cognitive function.',
    collocations: ['statistically significant', 'significant difference', 'significant impact', 'significant improvement'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-3',
    word: 'establish',
    partOfSpeech: 'verb',
    ipa: '/ɪˈstæblɪʃ/',
    definitionId: 'Mendirikan atau membangun sesuatu secara permanen.',
    definitionEn: 'To set up or create something on a firm or permanent basis.',
    exampleSentence: 'The findings help establish a causal relationship between the variables.',
    collocations: ['establish a connection', 'establish rapport', 'establish guidelines', 'firmly establish'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-4',
    word: 'subsequently',
    partOfSpeech: 'adverb',
    ipa: '/ˈsʌbsɪkwəntli/',
    definitionId: 'Setelah peristiwa atau waktu tertentu; kemudian.',
    definitionEn: 'After a particular thing happened; afterwards.',
    exampleSentence: 'The hypothesis was proposed in 2015; it was subsequently validated by three independent studies.',
    collocations: ['subsequently found', 'subsequently published', 'subsequently confirmed'],
    level: 'Academic/IELTS',
    category: 'Time/Sequence',
  },
  {
    id: 'vc-5',
    word: 'comprehensive',
    partOfSpeech: 'adjective',
    ipa: '/ˌkɒmprɪˈhensɪv/',
    definitionId: 'Mencakup atau menangani semua aspek secara menyeluruh.',
    definitionEn: 'Including or dealing with all aspects of something.',
    exampleSentence: 'A comprehensive review of the literature revealed several research gaps.',
    collocations: ['comprehensive study', 'comprehensive review', 'comprehensive analysis', 'comprehensive approach'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-6',
    word: 'mitigate',
    partOfSpeech: 'verb',
    ipa: '/ˈmɪtɪɡeɪt/',
    definitionId: 'Membuat sesuatu menjadi kurang parah, serius, atau menyakitkan.',
    definitionEn: 'To make something less severe, serious, or painful.',
    exampleSentence: 'Policy interventions can help mitigate the effects of economic inequality.',
    collocations: ['mitigate risks', 'mitigate effects', 'mitigate damage', 'help mitigate'],
    level: 'Academic/IELTS',
    category: 'Problem-Solution',
  },
  {
    id: 'vc-7',
    word: 'detrimental',
    partOfSpeech: 'adjective',
    ipa: '/ˌdetrɪˈmentl/',
    definitionId: 'Tending to cause harm; berbahaya.',
    definitionEn: 'Tending to cause harm or damage.',
    exampleSentence: 'Prolonged exposure to air pollution is detrimental to respiratory health.',
    collocations: ['detrimental effect', 'detrimental impact', 'prove detrimental', 'potentially detrimental'],
    level: 'Academic/IELTS',
    category: 'Impact',
  },
  {
    id: 'vc-8',
    word: 'elucidate',
    partOfSpeech: 'verb',
    ipa: '/ɪˈluːsɪdeɪt/',
    definitionId: 'Menjelaskan sesuatu yang kompleks dengan cara yang mudah dipahami.',
    definitionEn: 'To make something clear or explain it fully.',
    exampleSentence: 'The author elucidates the mechanism by which the treatment reduces inflammation.',
    collocations: ['elucidate the mechanism', 'elucidate the relationship', 'further elucidate', 'help elucidate'],
    level: 'Academic/IELTS',
    category: 'Research',
  },
  {
    id: 'vc-9',
    word: 'pragmatic',
    partOfSpeech: 'adjective',
    ipa: '/præɡˈmætɪk/',
    definitionId: 'Berkaitan dengan pendekatan praktis dalam menghadapi masalah.',
    definitionEn: 'Dealing with things sensibly and realistically.',
    exampleSentence: 'A pragmatic approach to policymaking considers both ideal outcomes and practical constraints.',
    collocations: ['pragmatic approach', 'pragmatic solution', 'highly pragmatic', 'be pragmatic about'],
    level: 'Academic/IELTS',
    category: 'Approach',
  },
  {
    id: 'vc-10',
    word: 'inherent',
    partOfSpeech: 'adjective',
    ipa: '/ɪnˈhɪərənt/',
    definitionId: 'Merupakan bagian alami atau permanen dari sesuatu.',
    definitionEn: 'Existing as a natural or permanent part of something.',
    exampleSentence: 'There are inherent limitations in any self-reported data collection method.',
    collocations: ['inherent limitations', 'inherent risk', 'inherent weakness', 'inherent in the nature'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-11',
    word: 'exacerbate',
    partOfSpeech: 'verb',
    ipa: '/ɪɡˈzæsəbeɪt/',
    definitionId: 'Memperburuk kondisi atau perasaan yang sudah buruk.',
    definitionEn: 'To make a problem, bad situation, or negative feeling worse.',
    exampleSentence: 'Climate change may exacerbate existing social inequalities.',
    collocations: ['exacerbate the problem', 'exacerbate tensions', 'further exacerbate', 'likely to exacerbate'],
    level: 'Academic/IELTS',
    category: 'Impact',
  },
  {
    id: 'vc-12',
    word: 'paradigm',
    partOfSpeech: 'noun',
    ipa: '/ˈpærədaɪm/',
    definitionId: 'Model, pola, atau kerangka berpikir yang menjadi dasar pemahaman.',
    definitionEn: 'A typical example, pattern, or model of something.',
    exampleSentence: 'The discovery represented a paradigm shift in how scientists understand the human genome.',
    collocations: ['paradigm shift', 'dominant paradigm', 'challenge the paradigm', 'within this paradigm'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-13',
    word: 'nuanced',
    partOfSpeech: 'adjective',
    ipa: '/ˈnjuːɑːnst/',
    definitionId: 'Memperhatikan perbedaan-perbedaan halus yang kompleks.',
    definitionEn: 'Characterized by subtle shades of meaning or expression.',
    exampleSentence: 'A nuanced understanding of the data reveals patterns that surface-level analysis would miss.',
    collocations: ['nuanced understanding', 'nuanced analysis', 'more nuanced', 'highly nuanced'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
  {
    id: 'vc-14',
    word: 'corroborate',
    partOfSpeech: 'verb',
    ipa: '/kəˈrɒbəreɪt/',
    definitionId: 'Memperkuat atau mengkonfirmasi pernyataan dengan bukti baru.',
    definitionEn: 'To confirm or give support to a statement or theory.',
    exampleSentence: 'Multiple independent datasets corroborate the hypothesis.',
    collocations: ['corroborate evidence', 'corroborate findings', 'corroborate the claim', 'help corroborate'],
    level: 'Academic/IELTS',
    category: 'Research',
  },
  {
    id: 'vc-15',
    word: 'pervasive',
    partOfSpeech: 'adjective',
    ipa: '/pəˈveɪsɪv/',
    definitionId: 'Tersebar luas, hadir di berbagai tempat atau situasi.',
    definitionEn: 'Spreading widely throughout an area or group of people.',
    exampleSentence: 'The pervasive influence of social media on political discourse cannot be overstated.',
    collocations: ['pervasive influence', 'pervasive problem', 'increasingly pervasive', 'become pervasive'],
    level: 'Academic/IELTS',
    category: 'Scope',
  },
  {
    id: 'vc-16',
    word: 'polarize',
    partOfSpeech: 'verb',
    ipa: '/ˈpoʊləraɪz/',
    definitionId: 'Membagi menjadi dua kelompok dengan pandangan yang berlawanan.',
    definitionEn: 'To divide into two sharply contrasting groups.',
    exampleSentence: 'The debate over climate policy has polarized public opinion.',
    collocations: ['polarize opinion', 'sharply polarized', 'polarize society', 'increasingly polarized'],
    level: 'Academic/IELTS',
    category: 'Society',
  },
  {
    id: 'vc-17',
    word: 'leverage',
    partOfSpeech: 'verb/noun',
    ipa: '/ˈlevərɪdʒ/',
    definitionId: 'Menggunakan sesuatu untuk keuntungan maksimal.',
    definitionEn: 'To use something to maximum advantage.',
    exampleSentence: 'Researchers can leverage big data analytics to identify hidden trends.',
    collocations: ['leverage technology', 'leverage expertise', 'leverage data', 'leverage existing resources'],
    level: 'Academic/IELTS',
    category: 'Strategy',
  },
  {
    id: 'vc-18',
    word: 'synthesize',
    partOfSpeech: 'verb',
    ipa: '/ˈsɪnθəsaɪz/',
    definitionId: 'Menggabungkan elemen-elemen berbeda untuk membentuk kesatuan yang koheren.',
    definitionEn: 'To combine different ideas or information to form a coherent whole.',
    exampleSentence: 'The literature review synthesizes findings from over 50 peer-reviewed studies.',
    collocations: ['synthesize information', 'synthesize findings', 'synthesize literature', 'synthesize ideas'],
    level: 'Academic/IELTS',
    category: 'Academic',
  },
];

export const vocabularyLessons: Lesson[] = [
  {
    id: 'vocab-01',
    trackId: 'vocabulary-mastery',
    slug: 'collocations-academic',
    title: 'Collocations: Pasangan Kata Alami dalam Bahasa Inggris',
    order: 1,
    summary: 'Kuasai kolokasi (pasangan kata yang sering berjalan bersama) dalam Bahasa Inggris: verb+noun, adj+noun, dan adverb+adj yang paling umum dalam konteks akademis.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Memahami apa itu kolokasi dan mengapa penting untuk kefasihan.',
      'Menguasai 50+ kolokasi Verb+Noun yang paling umum dalam bahasa akademis.',
      'Menghindari kesalahan kolokasi yang paling sering dibuat penutur Asia.',
    ],
    sections: [
      {
        id: 'sec-v01-1',
        title: '1. Apa itu Kolokasi & Mengapa Penting?',
        badge: 'Foundation',
        content: `**Kolokasi** = kata-kata yang secara alami "berjalan bersama" dalam bahasa Inggris. Penutur asli menggunakan kolokasi secara intuitif, sementara pelajar bahasa cenderung menerjemahkan kata per kata dan menghasilkan kombinasi yang terdengar tidak alami.

**Contoh Kolokasi yang Sering Salah:**
- ❌ *make homework* → ✅ ***do** homework*
- ❌ *do a mistake* → ✅ ***make** a mistake*
- ❌ *strong rain* → ✅ ***heavy** rain*
- ❌ *tall building* ✅ (benar) vs ❌ *tall person* → ✅ ***tall** person* ✅ (keduanya benar)

**Jenis Kolokasi:**
1. Verb + Noun: *make a decision, conduct research, draw a conclusion*
2. Adjective + Noun: *heavy traffic, strong argument, extensive damage*
3. Adverb + Adjective: *deeply concerned, highly relevant, widely accepted*
4. Noun + Verb: *evidence suggests, data shows, research indicates*`,
        ruleBox: {
          formula: 'Kolokasi = kata yang "terasa benar" secara alami untuk penutur asli',
          explanation: 'Belajar kolokasi jauh lebih efektif daripada belajar kata satu per satu.',
          pitfall: 'Terjemahan langsung dari Bahasa Indonesia sering menghasilkan kolokasi yang salah.',
        },
      },
      {
        id: 'sec-v01-2',
        title: '2. Verb+Noun Collocations yang Paling Penting',
        badge: 'High-Frequency',
        content: `| Verb | Noun Collocates |
|------|----------------|
| **make** | a decision, a mistake, progress, an argument, a contribution, a claim, an effort |
| **do** | research, homework, damage, harm, justice, business |
| **take** | action, measures, responsibility, advantage of, into account, a toll on |
| **conduct** | research, a study, an investigation, an interview, an experiment |
| **draw** | a conclusion, attention, a distinction, a comparison, an inference |
| **reach** | a conclusion, a consensus, an agreement, a milestone |
| **provide** | evidence, support, a framework, insights, a solution |
| **raise** | awareness, concerns, questions, an issue, standards |`,
        examples: [
          {
            sentence: 'The research team conducted a comprehensive study and drew several important conclusions that raised significant concerns in the academic community.',
            translation: 'Tim peneliti melakukan studi komprehensif dan menarik beberapa kesimpulan penting yang menimbulkan kekhawatiran signifikan di komunitas akademis.',
            explanation: 'conducted a study | drew conclusions | raised concerns — semua adalah kolokasi alami.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-v01-3',
        title: '3. Adjective+Noun & Adverb+Adjective Collocations',
        badge: 'Modifier Pairs',
        content: `**Adjective + Noun (Academic Context):**
- *extensive research | rigorous methodology | compelling evidence*
- *substantial progress | significant findings | profound impact*
- *preliminary results | comprehensive analysis | inherent limitations*

**Common Mistakes:**
- ❌ *strong rain* → ✅ *heavy rain*
- ❌ *strong wind* → ✅ *strong wind* ✅ (ini benar!)
- ❌ *big difference* → ✅ *significant/substantial difference* (formal)

**Adverb + Adjective:**
- *deeply concerned | highly relevant | widely accepted*
- *strongly recommended | closely related | fundamentally different*
- *critically important | increasingly prevalent | remarkably consistent*`,
      },
    ],
    keyTakeaways: [
      'Kolokasi adalah pasangan kata yang terdengar alami bagi penutur asli.',
      'Make (keputusan/kesalahan) vs Do (penelitian/PR) — jangan tertukar!',
      'Dalam konteks akademis: "conduct research", "draw conclusions", "raise concerns".',
      'Pelajari kolokasi sebagai satu unit, bukan kata per kata.',
    ],
    prevLessonId: 'inter-06',
    nextLessonId: 'vocab-02',
  },
  {
    id: 'vocab-02',
    trackId: 'vocabulary-mastery',
    slug: 'academic-word-list',
    title: 'Academic Word List (AWL) — 570 Kata Akademis Esensial',
    order: 2,
    summary: 'Pahami sistem AWL (Coxhead 2000), kuasai 60 kata AWL Sub-lists 1-3 yang paling sering muncul di IELTS/TOEFL, dan pelajari strategi memperluas AWL secara efisien.',
    readTimeMin: 10,
    difficulty: 'Intermediate',
    objectives: [
      'Memahami apa itu AWL dan mengapa penting untuk IELTS/TOEFL.',
      'Menguasai bentuk derivasi kata AWL (analytic → analysis → analyze → analytical).',
      'Menerapkan strategi belajar AWL yang efisien melalui konteks.',
    ],
    sections: [
      {
        id: 'sec-v02-1',
        title: '1. Apa itu AWL & Cara Menggunakannya',
        badge: 'Foundation',
        content: `**Academic Word List (AWL)** adalah daftar 570 kata yang dikembangkan Averil Coxhead (2000) — kata-kata paling umum yang muncul dalam teks akademis di berbagai disiplin ilmu.

**Kenapa AWL Penting?**
- Menutupi sekitar **10% kata** dalam teks akademis
- Sering muncul di soal **IELTS Reading & Writing**
- Membuat tulisanmu terdengar lebih akademis dan profesional

**Strategi Belajar AWL — Word Family Approach:**
Satu kata AWL = 4-5 bentuk turunan (derivasi):

| Base | Noun | Verb | Adjective | Adverb |
|------|------|------|-----------|--------|
| analys- | analysis / analyst | analyze | analytical | analytically |
| concept- | concept / conception | conceptualize | conceptual | conceptually |
| signific- | significance | signify | significant | significantly |
| establish- | establishment | establish | established | — |
| research- | research / researcher | research | — | — |`,
        ruleBox: {
          formula: 'Pelajari 1 kata AWL = pelajari 4-5 kata sekaligus (word family)!',
          explanation: 'Word family approach adalah cara paling efisien memperluas vocabulary akademis.',
        },
      },
      {
        id: 'sec-v02-2',
        title: '2. AWL Sub-list 1 — 60 Kata Paling Sering Muncul',
        badge: 'High Priority',
        content: `**AWL Sub-list 1** (kata paling sering dalam teks akademis):

| Kata | Contoh Akademis |
|------|----------------|
| **analyze** | The team analyzed the data using regression. |
| **approach** | A multidisciplinary approach was adopted. |
| **area** | This remains an area requiring further research. |
| **assess** | We assessed the participants using standardized tools. |
| **assume** | The model assumes a linear relationship. |
| **authority** | The authority of the source was verified. |
| **available** | Data was available for 80% of participants. |
| **benefit** | The benefits outweigh the potential risks. |
| **concept** | The concept of sustainability is central to this paper. |
| **consistent** | The results are consistent with previous findings. |
| **constitute** | These factors constitute significant barriers. |
| **context** | In the context of globalization, this is critical. |
| **create** | The policy creates new incentives for innovation. |
| **data** | The data suggests a strong positive correlation. |
| **define** | Clearly defining terms reduces ambiguity. |
| **derive** | The framework was derived from empirical observation. |
| **distribute** | Resources are distributed unequally across regions. |
| **economy** | A strong economy depends on diverse industries. |
| **environment** | The built environment influences cognitive function. |
| **establish** | The study establishes a clear causal link. |`,
      },
      {
        id: 'sec-v02-3',
        title: '3. AWL dalam Konteks: Cara Menggunakannya di IELTS Writing',
        badge: 'Application',
        content: `**AWL untuk Introduction:** *analyze, assess, establish, examine, investigate, identify*
**AWL untuk Body Paragraphs:** *demonstrate, indicate, reveal, suggest, constitute, contribute*
**AWL untuk Conclusion:** *conclude, imply, demonstrate, highlight, underscore, emphasize*

**Contoh Kalimat AWL-Rich (Band 7+ Level):**
*The data clearly indicates that urbanization has significantly contributed to environmental degradation. Analyzing the available evidence, it becomes evident that policymakers must adopt a comprehensive approach to mitigate these adverse effects.*`,
        examples: [
          {
            sentence: 'Available data consistently indicates that economic factors significantly contribute to educational inequalities across different socioeconomic contexts.',
            translation: 'Data yang tersedia secara konsisten menunjukkan bahwa faktor ekonomi berkontribusi secara signifikan terhadap ketimpangan pendidikan di berbagai konteks sosioekonomi.',
            explanation: 'AWL words: available, consistently, indicates, contribute, significantly, contexts.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'AWL = 570 kata paling sering di teks akademis, menutupi ~10% kata dalam teks IELTS.',
      'Pelajari word families: analysis/analyze/analytical/analytically = 1 kata, 4 bentuk.',
      'Sub-list 1 paling prioritas — fokus di sini dulu sebelum sub-list lainnya.',
      'AWL muncul sangat sering di IELTS Reading dan Writing.',
    ],
    prevLessonId: 'vocab-01',
    nextLessonId: 'vocab-03',
  },
  {
    id: 'vocab-03',
    trackId: 'vocabulary-mastery',
    slug: 'confusing-word-pairs',
    title: 'Confusing Word Pairs — Kata yang Sering Tertukar',
    order: 3,
    summary: 'Kuasai perbedaan pasangan kata yang paling sering membingungkan: affect/effect, principal/principle, complement/compliment, dan 20 pasangan lainnya.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan affect vs effect, principal vs principle, complement vs compliment.',
      'Memahami kata-kata yang mirip bunyi (homophones & near-homophones).',
      'Menghindari kesalahan vocabulary yang paling sering muncul di IELTS.',
    ],
    sections: [
      {
        id: 'sec-v03-1',
        title: '1. Affect vs Effect & Common Confusables',
        badge: 'Common Mistakes',
        content: `| Pasangan | Perbedaan | Contoh |
|---------|-----------|--------|
| **affect** (v) / **effect** (n) | Affect = kata kerja (mempengaruhi); Effect = kata benda (dampak) | *Stress affects health. / Stress has a negative effect on health.* |
| **principal** (adj/n) / **principle** (n) | Principal = utama/kepala sekolah; Principle = prinsip/aturan | *The principal reason. / Scientific principles.* |
| **complement** (v/n) / **compliment** (v/n) | Complement = melengkapi; Compliment = memuji | *The data complements the theory. / She complimented his work.* |
| **discrete** / **discreet** | Discrete = terpisah/berbeda; Discreet = bijaksana/hati-hati | *Discrete variables. / Be discreet about the findings.* |
| **imply** / **infer** | Imply = menyiratkan (penulis); Infer = menyimpulkan (pembaca) | *The data implies a trend. / We can infer from this that...* |
| **further** / **farther** | Further = lebih jauh (abstract); Farther = lebih jauh (physical distance) | *Further research is needed. / The lab is farther away.* |
| **fewer** / **less** | Fewer = countable nouns; Less = uncountable nouns | *Fewer students. / Less time.* |
| **lay** / **lie** | Lay = meletakkan (transitive); Lie = berbaring (intransitive) | *Lay the book down. / Lie down and rest.* |`,
        ruleBox: {
          formula: 'AFFECT (Verb) → causes an → EFFECT (Noun)',
          explanation: 'Memory trick: A comes before E alphabetically, just like Affect (V) causes Effect (N).',
          pitfall: '"Effect" bisa menjadi verb (formal): "to effect change" = to bring about change. "Affect" tidak pernah menjadi noun dalam konteks standar.',
        },
      },
      {
        id: 'sec-v03-2',
        title: '2. Economic/Financial Confusables yang Sering Muncul di IELTS',
        badge: 'IELTS Context',
        content: `| Kata | Definisi & Penggunaan |
|------|----------------------|
| **economic** | Berkaitan dengan ekonomi (sistem): *economic growth, economic policy* |
| **economical** | Hemat, efisien: *an economical solution, economical use of resources* |
| **historic** | Penting dalam sejarah: *a historic decision* |
| **historical** | Berkaitan dengan sejarah/masa lalu: *historical data, historical context* |
| **sensible** | Masuk akal, rasional: *a sensible approach* |
| **sensitive** | Peka, sensitif: *sensitive to criticism, sensitive data* |
| **industrial** | Berkaitan dengan industri: *industrial production* |
| **industrious** | Rajin, giat bekerja: *an industrious researcher* |`,
        examples: [
          {
            sentence: 'The economic implications of the policy are significant, but a more economical approach to implementation should be considered.',
            translation: 'Implikasi ekonomi dari kebijakan ini sangat signifikan, tetapi pendekatan yang lebih hemat biaya dalam implementasi perlu dipertimbangkan.',
            explanation: 'economic (berkaitan dengan sistem ekonomi) vs economical (hemat/efisien).',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-v03-3',
        title: '3. Fewer vs Less & Quantity Errors',
        badge: 'Grammar-Vocabulary Overlap',
        content: `**Fewer** (lebih sedikit) = digunakan dengan **Countable Nouns** (dapat dihitung):
- *Fewer students, fewer problems, fewer opportunities*

**Less** (lebih sedikit) = digunakan dengan **Uncountable Nouns** (tidak dapat dihitung):
- *Less time, less information, less pollution, less progress*

⚠️ **Pengecualian:** "Less" digunakan dengan angka, jarak, periode waktu, dan uang (walaupun bisa dihitung dalam konteks tersebut):
- *Less than 5 kilometers | Less than $100 | Less than three months*

**"Much" vs "Many":**
- Much = uncountable: *much progress, much time, much evidence*
- Many = countable: *many students, many studies, many factors*`,
        callout: {
          type: 'exam-tip',
          title: '"Less vs Fewer" — Sering Diuji di IELTS Writing Task 2',
          text: '"There are less students in rural schools." ❌ → "There are fewer students in rural schools." ✅ "Students" adalah countable → fewer.',
        },
      },
    ],
    keyTakeaways: [
      'Affect (V) = mempengaruhi | Effect (N) = dampak/hasil.',
      'Imply (penulis menyiratkan) vs Infer (pembaca menyimpulkan).',
      'Fewer + countable nouns (fewer students) | Less + uncountable (less time).',
      'Economic (berkaitan ekonomi) vs Economical (hemat/efisien).',
    ],
    prevLessonId: 'vocab-02',
    nextLessonId: 'vocab-04',
  },
  {
    id: 'vocab-04',
    trackId: 'vocabulary-mastery',
    slug: 'academic-phrasal-verbs',
    title: 'Academic Phrasal Verbs — Phrasal Verbs untuk Tulisan Akademis',
    order: 4,
    summary: 'Kuasai 30+ phrasal verbs yang umum digunakan dalam konteks akademis dan formal — menggantikan kata-kata sederhana dengan ekspresi yang lebih akademis.',
    readTimeMin: 7,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan phrasal verbs akademis dalam tulisan formal.',
      'Membedakan phrasal verbs separable dan inseparable.',
      'Menggunakan phrasal verbs untuk mendeskripsikan penelitian dan data.',
    ],
    sections: [
      {
        id: 'sec-v04-1',
        title: '1. Phrasal Verbs dalam Konteks Penelitian',
        badge: 'Research Context',
        content: `| Phrasal Verb | Makna | Contoh Akademis |
|-------------|-------|-----------------|
| **account for** | menjelaskan/memperhitungkan | *How do we account for this discrepancy?* |
| **build on** | mengembangkan dari | *This study builds on previous research by Smith (2019).* |
| **carry out** | melaksanakan | *The experiment was carried out over six months.* |
| **come up with** | mengusulkan/menemukan | *Researchers came up with a novel approach.* |
| **draw on** | memanfaatkan | *The analysis draws on qualitative and quantitative data.* |
| **look into** | menyelidiki | *Future studies should look into the long-term effects.* |
| **point out** | menunjukkan | *Several scholars have pointed out this methodological limitation.* |
| **rule out** | menyingkirkan kemungkinan | *Alternative explanations cannot be ruled out.* |
| **set out** | mengemukakan/merencanakan | *This paper sets out to examine three hypotheses.* |
| **take into account** | mempertimbangkan | *The analysis takes into account external variables.* |`,
      },
      {
        id: 'sec-v04-2',
        title: '2. Separable vs Inseparable Phrasal Verbs',
        badge: 'Grammar Note',
        content: `**Separable Phrasal Verbs** — objek bisa disisipkan di antara verb dan particle:
- *Carry out the experiment* ✅ = *Carry the experiment out* ✅
- *Point out the limitation* ✅ = *Point the limitation out* ✅
- ⚠️ Jika objek adalah pronoun, WAJIB disisipkan: *Carry it out* ✅ (bukan "carry out it")

**Inseparable Phrasal Verbs** — objek TIDAK bisa disisipkan:
- *Look into the issue* ✅ ≠ ~~*Look the issue into*~~ ❌
- *Build on the research* ✅ ≠ ~~*Build the research on*~~ ❌
- *Draw on the data* ✅ ≠ ~~*Draw the data on*~~ ❌`,
        examples: [
          {
            sentence: 'The team set out to investigate three key factors, drawing on existing data while also carrying out new field experiments to rule out confounding variables.',
            translation: 'Tim memulai untuk menginvestigasi tiga faktor kunci, memanfaatkan data yang ada sambil juga melakukan eksperimen lapangan baru untuk menyingkirkan variabel pengganggu.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      '"Account for" = menjelaskan. "Build on" = mengembangkan. "Rule out" = menyingkirkan kemungkinan.',
      'Separable: objek bisa disisipkan. Inseparable: objek harus setelah particle.',
      'Pronoun SELALU disisipkan: "carry it out" (bukan "carry out it").',
    ],
    prevLessonId: 'vocab-03',
    nextLessonId: 'vocab-05',
  },
  {
    id: 'vocab-05',
    trackId: 'vocabulary-mastery',
    slug: 'word-formation-prefixes-suffixes',
    title: 'Word Formation: Prefixes, Suffixes & Roots',
    order: 5,
    summary: 'Kuasai strategi pembentukan kata: 20 prefiks utama, 20 sufiks utama, dan akar kata Latin/Yunani paling umum untuk menebak arti kata baru.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Mengenali 20 prefiks paling umum dan artinya.',
      'Menggunakan sufiks untuk mengidentifikasi part of speech.',
      'Menebak arti kata baru dari akar kata Latin/Yunani.',
    ],
    sections: [
      {
        id: 'sec-v05-1',
        title: '1. Common Prefixes — Pengubah Makna',
        badge: 'Prefixes',
        content: `| Prefix | Makna | Contoh |
|--------|-------|--------|
| **un-** | tidak/kebalikan | unable, unconventional, unprecedented |
| **dis-** | tidak/kebalikan | disadvantage, discriminate, disproportionate |
| **re-** | kembali/lagi | reassess, reconsider, redefine, replicate |
| **pre-** | sebelum | preliminary, prerequisite, predetermine |
| **post-** | setelah | post-colonial, post-war, posthumous |
| **over-** | berlebihan | overestimate, oversimplify, overrepresented |
| **under-** | kurang/di bawah | underrepresented, underestimate, underfunded |
| **inter-** | antar | interdisciplinary, interpret, interconnected |
| **intra-** | di dalam | intracultural, intravenous, intramural |
| **sub-** | di bawah/bagian dari | subdivision, subset, suboptimal |
| **trans-** | lintas/melampaui | transnational, transform, transcend |
| **counter-** | berlawanan | counterargument, counterintuitive, counterproductive |`,
      },
      {
        id: 'sec-v05-2',
        title: '2. Common Suffixes — Penanda Part of Speech',
        badge: 'Suffixes',
        content: `**Noun Suffixes:**
- *-tion/-sion*: investigation, conclusion, dimension, variation
- *-ity/-ty*: diversity, complexity, validity, reliability
- *-ment*: assessment, improvement, development, argument
- *-ance/-ence*: significance, prevalence, performance, evidence
- *-ism*: capitalism, empiricism, relativism, reductionism
- *-ist*: theorist, analyst, specialist, protagonist

**Adjective Suffixes:**
- *-al/-ial*: analytical, empirical, conceptual, substantial
- *-ive*: comprehensive,ulative, tentative, definitive
- *-ous/-ious*: rigorous, ambiguous, advantageous
- *-able/-ible*: measurable, reliable, defensible

**Verb Suffixes:**
- *-ize/-ise*: analyze, conceptualize, categorize, prioritize
- *-ify*: identify, clarify, quantify, justify`,
        callout: {
          type: 'tip',
          title: 'Sufiks → Part of Speech',
          text: 'Kenali sufiks, kenali part of speech! -tion/-ity/-ment = Noun. -al/-ive/-ous = Adjective. -ize/-ify = Verb. -ly (setelah adj) = Adverb.',
        },
      },
      {
        id: 'sec-v05-3',
        title: '3. Greek & Latin Roots — Kunci Memahami Ribuan Kata',
        badge: 'Word Roots',
        content: `| Root | Asal | Makna | Contoh Kata |
|------|------|-------|-------------|
| **graph** | Yunani | menulis/gambar | biography, demography, photograph |
| **bio** | Yunani | kehidupan | biology, biography, biochemistry |
| **chrono** | Yunani | waktu | chronological, synchronize, anachronism |
| **cred** | Latin | percaya | credible, incredible, credential |
| **gen** | Latin/Yunani | asal/lahir | generate, genetic, indigenous |
| **port** | Latin | membawa | import, export, transport, portable |
| **scrib/script** | Latin | menulis | describe, manuscript, prescription |
| **vid/vis** | Latin | melihat | visible, evident, supervise, visual |
| **spec** | Latin | melihat | perspective, inspect, prospect, spectrum |
| **dict** | Latin | mengatakan | predict, contradict, diction |`,
        examples: [
          {
            sentence: 'Understanding the Latin root "scrib/script" (to write) helps decode: inscription, prescription, manuscript, describe, subscribe, transcribe.',
            translation: 'Memahami akar Latin "scrib/script" (menulis) membantu mengartikan: inscriptions, prescription, manuscript, describe, subscribe, transcribe.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Prefiks mengubah makna: un-/dis- (negatif), re- (ulang), over-/under- (derajat).',
      'Sufiks menentukan part of speech: -tion/-ment (N), -ive/-al (Adj), -ize (V), -ly (Adv).',
      'Akar kata Latin/Yunani membantu mengartikan ribuan kata baru.',
    ],
    prevLessonId: 'vocab-04',
    nextLessonId: 'rw-01',
  },
];

export const vocabularyExercises: Record<string, Exercise[]> = {
  'vocab-01': [
    {
      id: 'ex-v01-1',
      lessonId: 'vocab-01',
      type: 'multiple-choice',
      title: 'Make vs Do — Verb Collocations',
      instruction: 'Pilih verb collocate yang tepat.',
      question: 'The research team decided to ________ a thorough investigation into the causes of the phenomenon.',
      options: [
        { id: 'a', text: 'make', explanation: '"Make an investigation" bukan kolokasi alami.' },
        { id: 'b', text: 'conduct', explanation: 'Benar! "Conduct an investigation" adalah kolokasi akademis yang tepat.' },
        { id: 'c', text: 'do', explanation: '"Do an investigation" lebih informal. "Conduct" lebih tepat dalam konteks akademis.' },
        { id: 'd', text: 'perform', explanation: '"Perform an investigation" kurang umum dalam konteks ini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Kolokasi akademis: conduct research/a study/an investigation/an experiment.',
      points: 10,
    },
    {
      id: 'ex-v01-2',
      lessonId: 'vocab-01',
      type: 'matching',
      title: 'Pasangkan Verb + Noun Collocations',
      instruction: 'Pasangkan kata kerja dengan kata benda yang membentuk kolokasi yang tepat.',
      pairs: [
        { id: 'co1', left: 'draw', right: 'a conclusion' },
        { id: 'co2', left: 'raise', right: 'awareness' },
        { id: 'co3', left: 'reach', right: 'a consensus' },
        { id: 'co4', left: 'take', right: 'into account' },
      ],
      explanation: 'Draw a conclusion | raise awareness | reach a consensus | take into account — kolokasi akademis standar.',
      points: 15,
    },
    {
      id: 'ex-v01-3',
      lessonId: 'vocab-01',
      type: 'fill-blank',
      title: 'Adjective Collocations',
      instruction: 'Pilih adjective yang tepat untuk kolokasi alami.',
      sentence: 'The study found [___] evidence supporting the link between air quality and cognitive performance.',
      targets: [{ index: 0, correctAnswers: ['compelling', 'substantial', 'strong', 'significant', 'considerable'], hint: 'Adjective yang tepat untuk "evidence"' }],
      wordBank: ['compelling', 'big', 'tall', 'great'],
      explanation: '"Compelling evidence" atau "substantial evidence" = kolokasi alami. "Big/tall evidence" tidak digunakan.',
      points: 10,
    },
    {
      id: 'ex-v01-4',
      lessonId: 'vocab-01',
      type: 'multiple-choice',
      title: 'Heavy/Strong/Hard — Common Adjective Collocations',
      instruction: 'Pilih adjective yang paling tepat.',
      question: 'Despite the ________ rain, the outdoor field survey was completed on schedule.',
      options: [
        { id: 'a', text: 'strong', explanation: '"Strong rain" bukan kolokasi standar dalam bahasa Inggris.' },
        { id: 'b', text: 'heavy', explanation: 'Benar! "Heavy rain" adalah kolokasi standar.' },
        { id: 'c', text: 'big', explanation: '"Big rain" bukan kolokasi yang digunakan dalam bahasa Inggris.' },
        { id: 'd', text: 'hard', explanation: '"Hard rain" informal — "heavy rain" lebih standar.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Heavy collocates: heavy rain, heavy traffic, heavy workload, heavy burden, heavy emphasis.',
      points: 10,
    },
  ],
  'vocab-02': [
    {
      id: 'ex-v02-1',
      lessonId: 'vocab-02',
      type: 'multiple-choice',
      title: 'AWL Word Family',
      instruction: 'Pilih bentuk kata AWL yang tepat untuk konteks kalimat.',
      question: 'The ________ of the data was conducted using multivariate statistical methods.',
      options: [
        { id: 'a', text: 'analyze', explanation: 'Verb — tapi kalimat memerlukan Noun setelah "The".' },
        { id: 'b', text: 'analysis', explanation: 'Benar! Noun "analysis" adalah bentuk yang tepat setelah "The".' },
        { id: 'c', text: 'analytical', explanation: 'Adjective — tidak tepat sebagai subjek kalimat.' },
        { id: 'd', text: 'analytically', explanation: 'Adverb — tidak tepat sebagai subjek kalimat.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Word family: analyze (V) | analysis (N) | analytical (Adj) | analytically (Adv).',
      points: 10,
    },
    {
      id: 'ex-v02-2',
      lessonId: 'vocab-02',
      type: 'fill-blank',
      title: 'AWL dalam Konteks Kalimat',
      instruction: 'Isi bagian kosong dengan kata AWL yang tepat.',
      sentence: 'The researchers [___] three key hypotheses at the outset of the investigation, each requiring different experimental approaches.',
      targets: [{ index: 0, correctAnswers: ['established', 'identified', 'formulated', 'outlined'], hint: 'AWL verb yang berarti "menetapkan/mengidentifikasi"' }],
      wordBank: ['established', 'made', 'did', 'created'],
      explanation: '"Established hypotheses" adalah kolokasi AWL yang tepat. "Made/did hypotheses" bukan kolokasi alami.',
      points: 10,
    },
    {
      id: 'ex-v02-3',
      lessonId: 'vocab-02',
      type: 'matching',
      title: 'AWL Word Family Matching',
      instruction: 'Pasangkan setiap kata AWL dengan part of speech yang tepat.',
      pairs: [
        { id: 'wf1', left: 'conceptual', right: 'Adjective' },
        { id: 'wf2', left: 'conceptualize', right: 'Verb' },
        { id: 'wf3', left: 'concept', right: 'Noun' },
        { id: 'wf4', left: 'conceptually', right: 'Adverb' },
      ],
      explanation: 'Word family: concept (N) → conceptual (Adj) → conceptualize (V) → conceptually (Adv).',
      points: 15,
    },
  ],
  'vocab-03': [
    {
      id: 'ex-v03-1',
      lessonId: 'vocab-03',
      type: 'multiple-choice',
      title: 'Affect vs Effect',
      instruction: 'Pilih kata yang tepat.',
      question: 'The new policy has had a significant ________ on the economic development of the region.',
      options: [
        { id: 'a', text: 'affect', explanation: '"Affect" adalah Verb, tidak bisa mengikuti artikel "a".' },
        { id: 'b', text: 'effect', explanation: 'Benar! "Effect" = Noun. "a significant effect on" = kolokasi yang tepat.' },
        { id: 'c', text: 'affection', explanation: '"Affection" = kasih sayang, bukan dampak.' },
        { id: 'd', text: 'effecting', explanation: '"Effecting" = bringing about change, tidak tepat dalam konteks ini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'AFFECT (V) — mempengaruhi | EFFECT (N) — dampak/hasil. "An effect ON something" = kolokasi standar.',
      points: 10,
    },
    {
      id: 'ex-v03-2',
      lessonId: 'vocab-03',
      type: 'multiple-choice',
      title: 'Fewer vs Less',
      instruction: 'Pilih kata yang tepat.',
      question: 'In recent decades, ________ research has been conducted on the psychological effects of social isolation.',
      options: [
        { id: 'a', text: 'fewer', explanation: '"Fewer" digunakan dengan countable nouns. "Research" adalah uncountable.' },
        { id: 'b', text: 'less', explanation: 'Benar! "Research" adalah uncountable noun → less research.' },
        { id: 'c', text: 'lesser', explanation: '"Lesser" berarti "lebih rendah nilainya" — tidak tepat untuk kuantitas.' },
        { id: 'd', text: 'small', explanation: '"Small" adalah adjective yang mendeskripsikan ukuran, bukan kuantitas penelitian.' },
      ],
      correctAnswerId: 'b',
      grammarTip: '"Research" adalah uncountable noun → "less research" ✅. "Fewer studies" ✅ karena "studies" adalah countable.',
      points: 10,
    },
    {
      id: 'ex-v03-3',
      lessonId: 'vocab-03',
      type: 'matching',
      title: 'Confusing Word Pairs',
      instruction: 'Pasangkan kata dengan definisi yang tepat.',
      pairs: [
        { id: 'cwp1', left: 'imply', right: 'Penulis menyiratkan sesuatu secara tersirat' },
        { id: 'cwp2', left: 'infer', right: 'Pembaca/pendengar menyimpulkan dari bukti' },
        { id: 'cwp3', left: 'complement', right: 'Melengkapi atau menyempurnakan sesuatu' },
        { id: 'cwp4', left: 'compliment', right: 'Memuji atau mengungkapkan penghargaan' },
      ],
      explanation: 'Imply = menyiratkan (dari penulis). Infer = menyimpulkan (dari pembaca). Complement = melengkapi. Compliment = memuji.',
      points: 15,
    },
    {
      id: 'ex-v03-4',
      lessonId: 'vocab-03',
      type: 'multiple-choice',
      title: 'Economic vs Economical',
      instruction: 'Pilih kata yang tepat.',
      question: 'The government implemented ________ reforms to stimulate growth, while also seeking ________ solutions to reduce unnecessary expenditure.',
      options: [
        { id: 'a', text: 'economic / economical', explanation: 'Benar! economic reforms (kebijakan ekonomi) | economical solutions (hemat biaya).' },
        { id: 'b', text: 'economical / economic', explanation: 'Terbalik: "economical reforms" tidak alami; "economic solutions" tidak berarti hemat.' },
        { id: 'c', text: 'economic / economic', explanation: '"Economic solutions" berarti berkaitan dengan ekonomi, bukan hemat.' },
        { id: 'd', text: 'economical / economical', explanation: '"Economical reforms" tidak alami.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Economic = relating to economy/economics | Economical = cost-effective, not wasteful.',
      points: 10,
    },
  ],
  'vocab-04': [
    {
      id: 'ex-v04-1',
      lessonId: 'vocab-04',
      type: 'matching',
      title: 'Phrasal Verbs dalam Konteks Akademis',
      instruction: 'Pasangkan phrasal verb dengan maknanya.',
      pairs: [
        { id: 'pv1', left: 'account for', right: 'menjelaskan atau memperhitungkan sesuatu' },
        { id: 'pv2', left: 'rule out', right: 'menyingkirkan atau menghilangkan kemungkinan' },
        { id: 'pv3', left: 'build on', right: 'mengembangkan atau memperluas sesuatu yang sudah ada' },
        { id: 'pv4', left: 'set out', right: 'memulai dengan tujuan atau rencana tertentu' },
      ],
      explanation: 'Phrasal verbs akademis ini sangat umum dalam penulisan ilmiah dan IELTS/TOEFL.',
      points: 15,
    },
    {
      id: 'ex-v04-2',
      lessonId: 'vocab-04',
      type: 'fill-blank',
      title: 'Phrasal Verb dalam Kalimat',
      instruction: 'Pilih phrasal verb yang tepat.',
      sentence: 'This study [___] the foundational work of previous researchers while also introducing a new analytical framework.',
      targets: [{ index: 0, correctAnswers: ['builds on', 'draws on', 'expands on'], hint: 'Phrasal verb yang berarti "mengembangkan dari karya sebelumnya"' }],
      wordBank: ['builds on', 'makes on', 'works on', 'puts on'],
      explanation: '"Builds on" = mengembangkan dari karya sebelumnya. "Draws on" = memanfaatkan. Keduanya tepat dalam konteks ini.',
      points: 10,
    },
  ],
  'vocab-05': [
    {
      id: 'ex-v05-1',
      lessonId: 'vocab-05',
      type: 'multiple-choice',
      title: 'Prefix Meaning',
      instruction: 'Tentukan makna kata berdasarkan pemahamanmu tentang prefiks.',
      question: 'Apa arti "counterintuitive" berdasarkan prefiks "counter-"?',
      options: [
        { id: 'a', text: 'Sangat intuitif / sangat jelas', explanation: '"Counter-" berarti berlawanan, bukan "sangat".' },
        { id: 'b', text: 'Berlawanan dengan apa yang terasa intuitif/logis', explanation: 'Benar! Counter = berlawanan/melawan. Counterintuitive = berlawanan dengan intuisi.' },
        { id: 'c', text: 'Setengah intuitif', explanation: '"Counter-" tidak berarti setengah.' },
        { id: 'd', text: 'Di bawah tingkat intuitif yang diharapkan', explanation: '"Under-" yang berarti di bawah, bukan "counter-".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Prefix counter- = berlawanan, menentang. Counter + argument = counterargument. Counter + productive = counterproductive.',
      points: 10,
    },
    {
      id: 'ex-v05-2',
      lessonId: 'vocab-05',
      type: 'matching',
      title: 'Suffix → Part of Speech',
      instruction: 'Identifikasi part of speech berdasarkan suffix kata.',
      pairs: [
        { id: 'sf1', left: 'validity', right: 'Noun (-ity suffix)' },
        { id: 'sf2', left: 'rigorous', right: 'Adjective (-ous suffix)' },
        { id: 'sf3', left: 'categorize', right: 'Verb (-ize suffix)' },
        { id: 'sf4', left: 'systematically', right: 'Adverb (-ly suffix after adjective)' },
      ],
      explanation: 'Sufiks adalah penanda part of speech yang paling andal.',
      points: 15,
    },
    {
      id: 'ex-v05-3',
      lessonId: 'vocab-05',
      type: 'multiple-choice',
      title: 'Greek/Latin Root — Decode Vocabulary',
      instruction: 'Gunakan pengetahuan tentang akar kata untuk menjawab.',
      question: 'Berdasarkan akar kata Latin "dict" (mengatakan), apa arti "contradict"?',
      options: [
        { id: 'a', text: 'Mengatakan sesuatu dengan sangat kuat', explanation: '"Contra-" bukan berarti "sangat".' },
        { id: 'b', text: 'Mengatakan sesuatu yang berlawanan; membantah', explanation: 'Benar! Contra (berlawanan) + dict (mengatakan) = mengatakan hal yang berlawanan.' },
        { id: 'c', text: 'Mengatakan kembali apa yang sudah dikatakan', explanation: '"Re-" yang berarti "kembali", bukan "contra-".' },
        { id: 'd', text: 'Mengatakan sebelum waktunya', explanation: '"Pre-" yang berarti "sebelum".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Akar "dict" = to say/tell. Contradict (berlawanan), predict (sebelumnya), dictate (mendiktekan), diction (cara berbicara).',
      points: 10,
    },
  ],
};
