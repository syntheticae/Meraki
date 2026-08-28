import { MockExam, ScoreBandConversion } from '@/types/exam';

export const IELTS_SCORE_TABLE: ScoreBandConversion[] = [
  { rawScoreRange: [39, 40], bandScore: 9.0, cefrLevel: 'C2', description: 'Expert User — Full operational command of the language.' },
  { rawScoreRange: [37, 38], bandScore: 8.5, cefrLevel: 'C2', description: 'Very Good User (High) — Fully operational command with rare unsystematic inaccuracies.' },
  { rawScoreRange: [35, 36], bandScore: 8.0, cefrLevel: 'C1', description: 'Very Good User — Handles complex detailed argumentation well.' },
  { rawScoreRange: [33, 34], bandScore: 7.5, cefrLevel: 'C1', description: 'Good User (High) — Generally handles complex language well.' },
  { rawScoreRange: [30, 32], bandScore: 7.0, cefrLevel: 'C1', description: 'Good User — Operational command with occasional inaccuracies and misunderstandings in some situations.' },
  { rawScoreRange: [27, 29], bandScore: 6.5, cefrLevel: 'B2', description: 'Competent User (High) — Effective command despite some inaccuracies.' },
  { rawScoreRange: [23, 26], bandScore: 6.0, cefrLevel: 'B2', description: 'Competent User — Generally effective command in familiar situations.' },
  { rawScoreRange: [19, 22], bandScore: 5.5, cefrLevel: 'B2', description: 'Modest User (High) — Partial command, copes with overall meaning in most situations.' },
  { rawScoreRange: [15, 18], bandScore: 5.0, cefrLevel: 'B1', description: 'Modest User — Partial command, likely to make frequent mistakes.' },
  { rawScoreRange: [0, 14], bandScore: 4.5, cefrLevel: 'B1', description: 'Limited User — Basic competence is limited to familiar situations.' },
];

export function calculateIELTSBand(rawScore: number): ScoreBandConversion {
  const match = IELTS_SCORE_TABLE.find(
    (b) => rawScore >= b.rawScoreRange[0] && rawScore <= b.rawScoreRange[1]
  );
  return match || IELTS_SCORE_TABLE[IELTS_SCORE_TABLE.length - 1];
}

export function calculateTOEFLScore(rawScore: number, totalQuestions: number): { scoreOutOf120: number; cefr: string; evaluation: string } {
  const percentage = Math.min(100, Math.max(0, (rawScore / totalQuestions) * 100));
  const scoreOutOf120 = Math.round((percentage / 100) * 120);

  let cefr = 'B1';
  let evaluation = 'Developing Proficiency';

  if (scoreOutOf120 >= 110) {
    cefr = 'C2';
    evaluation = 'Advanced / Native-like Operational Competence';
  } else if (scoreOutOf120 >= 95) {
    cefr = 'C1';
    evaluation = 'High Academic Proficiency (Target for Ivy League / Top Masters)';
  } else if (scoreOutOf120 >= 72) {
    cefr = 'B2';
    evaluation = 'Good Operational Competence (Standard University Admission)';
  }

  return { scoreOutOf120, cefr, evaluation };
}

export const SAMPLE_MOCK_EXAMS: MockExam[] = [
  {
    id: 'ielts-academic-diagnostic',
    type: 'ielts',
    title: 'IELTS Academic Reading & Language Diagnostic Test',
    subtitle: 'Official-style Cambridge simulation with True/False/Not Given and Heading Matching',
    difficulty: 'Band 6.5 - 8.0 Target',
    totalTimeMinutes: 20,
    totalQuestions: 6,
    description: 'Simulasi modul membaca akademis IELTS dengan teks ilmiah dan analisis band score instan.',
    sections: [
      {
        id: 'ielts-sec-1',
        sectionName: 'Academic Reading Passage: The Evolution of Urban Architecture',
        timeLimitMinutes: 20,
        instructions: 'Read the text below and answer Questions 1–6.',
        passage: {
          title: 'The Evolution of Sustainable Urban Architecture',
          wordCount: 380,
          text: `In the early twenty-first century, rapid urbanization spurred unprecedented environmental challenges, compelling civil engineers and architects to re-evaluate conventional construction methodologies. Traditional concrete and steel manufacturing account for approximately fifteen percent of global greenhouse gas emissions. In response to this ecological strain, a resurgence in mass timber construction—principally utilizing Cross-Laminated Timber (CLT)—has gained widespread momentum across European and North American metropolitan centers.

Unlike concrete, timber sequesters carbon dioxide throughout its lifecycle, effectively transforming modern high-rises into carbon sinks rather than carbon producers. Proponents emphasize that modern engineered timber achieves fire-resistance ratings comparable to structural steel, as the outer charred layer insulates the internal wooden core during extreme heat exposure.

However, critics remain cautious regarding long-term supply chain viability and forestry governance. They argue that unless timber harvesting is strictly audited against deforestation benchmarks, the widespread adoption of mass timber could inadvertently accelerate biodiversity loss in vulnerable boreal ecosystems. Nonetheless, municipal governments in cities such as Zurich and Vancouver have already reformed building codes to permit timber high-rises exceeding twenty storeys, signaling a profound architectural paradigm shift.`,
        },
        questions: [
          {
            id: 'iq-1',
            section: 'reading',
            type: 'true-false-not-given',
            questionNumber: 1,
            prompt: 'Concrete and steel manufacturing contribute roughly 15% of worldwide greenhouse gas emissions.',
            options: [
              { id: 'TRUE', text: 'TRUE (Sesuai dengan informasi dalam teks)' },
              { id: 'FALSE', text: 'FALSE (Bertentangan dengan informasi dalam teks)' },
              { id: 'NOT GIVEN', text: 'NOT GIVEN (Tidak disebutkan dalam teks)' },
            ],
            correctAnswer: 'TRUE',
            explanation: 'Paragraf 1 menyatakan: "Traditional concrete and steel manufacturing account for approximately fifteen percent of global greenhouse gas emissions."',
            skillTested: 'Factual Scanning',
          },
          {
            id: 'iq-2',
            section: 'reading',
            type: 'true-false-not-given',
            questionNumber: 2,
            prompt: 'Engineered timber is significantly more susceptible to fire damage than traditional structural steel.',
            options: [
              { id: 'TRUE', text: 'TRUE' },
              { id: 'FALSE', text: 'FALSE' },
              { id: 'NOT GIVEN', text: 'NOT GIVEN' },
            ],
            correctAnswer: 'FALSE',
            explanation: 'Paragraf 2 menyatakan bahwa engineered timber "achieves fire-resistance ratings comparable to structural steel", sehingga pernyataan bahwa kayu jauh lebih rentan terbakar adalah FALSE.',
            skillTested: 'Contrast & Comparison Inference',
          },
          {
            id: 'iq-3',
            section: 'reading',
            type: 'true-false-not-given',
            questionNumber: 3,
            prompt: 'The government of Tokyo has mandated that all new residential skyscrapers be built with mass timber by 2030.',
            options: [
              { id: 'TRUE', text: 'TRUE' },
              { id: 'FALSE', text: 'FALSE' },
              { id: 'NOT GIVEN', text: 'NOT GIVEN' },
            ],
            correctAnswer: 'NOT GIVEN',
            explanation: 'Teks hanya menyebutkan kota Zurich dan Vancouver. Kota Tokyo tidak disebutkan sama sekali.',
            skillTested: 'Identifying Unstated Information',
          },
          {
            id: 'iq-4',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 4,
            prompt: 'According to the passage, what is the primary ecological benefit of timber compared to concrete?',
            options: [
              { id: 'a', text: 'It requires zero maintenance once installed.' },
              { id: 'b', text: 'It sequesters carbon dioxide throughout its operational lifecycle.' },
              { id: 'c', text: 'It is impervious to water and humidity.' },
              { id: 'd', text: 'It eliminates the need for foundational support.' },
            ],
            correctAnswer: 'b',
            explanation: 'Paragraf 2 menyebutkan: "Unlike concrete, timber sequesters carbon dioxide throughout its lifecycle..."',
            skillTested: 'Main Detail Extraction',
          },
          {
            id: 'iq-5',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 5,
            prompt: 'The word "resurgence" in paragraph 1 is closest in meaning to:',
            options: [
              { id: 'a', text: 'temporary hesitation' },
              { id: 'b', text: 'complete abandonment' },
              { id: 'c', text: 'revival or renewed popularity' },
              { id: 'd', text: 'gradual deterioration' },
            ],
            correctAnswer: 'c',
            explanation: '"Resurgence" berarti kebangkitan kembali atau kepopuleran yang muncul lagi.',
            skillTested: 'Vocabulary in Context',
          },
          {
            id: 'iq-6',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 6,
            prompt: 'What concern do critics raise regarding the widespread adoption of mass timber?',
            options: [
              { id: 'a', text: 'The excessive weight of wooden beams.' },
              { id: 'b', text: 'Potential acceleration of biodiversity loss without strict harvesting benchmarks.' },
              { id: 'c', text: 'Lack of interest from modern municipal architects.' },
              { id: 'd', text: 'Inability of wooden structures to exceed three storeys.' },
            ],
            correctAnswer: 'b',
            explanation: 'Paragraf 3 menyatakan bahwa kritik khawatir adopsi mass timber dapat mempercepat hilangnya keanekaragaman hayati jika tidak diaudit ketat.',
            skillTested: 'Argument Synthesis',
          },
        ],
      },
    ],
  },
  {
    id: 'toefl-ibt-diagnostic',
    type: 'toefl',
    title: 'TOEFL iBT Academic Reading & Inference Diagnostic',
    subtitle: 'ETS-style test evaluating vocabulary in context, inference, and rhetorical purpose',
    difficulty: 'Score 90 - 115 Target',
    totalTimeMinutes: 18,
    totalQuestions: 5,
    description: 'Simulasi membaca teks ilmiah standar universitas Amerika Utara dengan perhitungan estimasi skor TOEFL 0-120.',
    sections: [
      {
        id: 'toefl-sec-1',
        sectionName: 'Academic Reading: Deep Ocean Hydrothermal Vents',
        timeLimitMinutes: 18,
        instructions: 'Read the academic text below and answer Questions 1–5.',
        passage: {
          title: 'Chemosynthesis in Deep Ocean Hydrothermal Vents',
          wordCount: 320,
          text: `Prior to the late 1970s, marine biologists presumed that all biological life on Earth was fundamentally dependent on solar radiation via photosynthesis. This paradigm was radically upended in 1977 with the discovery of vibrant ecosystems thriving along the Galápagos Rift, several kilometers beneath the ocean surface where sunlight is entirely absent.

Surrounding hydrothermal vents—fissures on the seabed where geothermally heated water rich in hydrogen sulfide billows into the freezing ocean—scientists documented dense colonies of giant tube worms, blind shrimp, and unique crustaceans. These organisms do not rely on photosynthetic primary producers. Instead, specialized autotrophic bacteria utilize **chemosynthesis**, oxidizing hydrogen sulfide to synthesize organic molecules from dissolved carbon dioxide.

The existence of chemosynthetic communities not only revolutionized terrestrial biology but also transformed astrobiology. Scientists hypothesize that analogous sub-surface hydrothermal environments could potentially sustain extraterrestrial microbial life beneath the icy crusts of Jovian and Saturnian moons such as Europa and Enceladus.`,
        },
        questions: [
          {
            id: 'tq-1',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 1,
            prompt: 'What was the primary scientific belief prior to the 1977 discovery?',
            options: [
              { id: 'a', text: 'Hydrothermal vents were the original source of all marine life.' },
              { id: 'b', text: 'All life on Earth fundamentally depended on sunlight through photosynthesis.' },
              { id: 'c', text: 'Chemosynthetic bacteria lived exclusively in freshwater lakes.' },
              { id: 'd', text: 'Deep sea oceans lacked minerals such as sulfur.' },
            ],
            correctAnswer: 'b',
            explanation: 'Paragraf 1 menyatakan: "marine biologists presumed that all biological life on Earth was fundamentally dependent on solar radiation via photosynthesis."',
            skillTested: 'Factual Understanding',
          },
          {
            id: 'tq-2',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 2,
            prompt: 'The word "upended" in paragraph 1 is closest in meaning to:',
            options: [
              { id: 'a', text: 'overturned or dismantled' },
              { id: 'b', text: 'temporarily paused' },
              { id: 'c', text: 'reinforced with further proof' },
              { id: 'd', text: 'partially modified' },
            ],
            correctAnswer: 'a',
            explanation: '"Upended" berarti dijungkirbalikkan atau diubah secara fundamental.',
            skillTested: 'Vocabulary in Context',
          },
          {
            id: 'tq-3',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 3,
            prompt: 'Which chemical compound is oxidized by autotrophic bacteria to produce energy?',
            options: [
              { id: 'a', text: 'Solar radiation' },
              { id: 'b', text: 'Hydrogen sulfide' },
              { id: 'c', text: 'Liquid nitrogen' },
              { id: 'd', text: 'Pure oxygen' },
            ],
            correctAnswer: 'b',
            explanation: 'Paragraf 2 menyatakan bakteri mengoksidasi "hydrogen sulfide to synthesize organic molecules".',
            skillTested: 'Detail Retrieval',
          },
          {
            id: 'tq-4',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 4,
            prompt: 'Why does the author mention Europa and Enceladus in the final paragraph?',
            options: [
              { id: 'a', text: 'To prove that sunlight reaches other planets easily.' },
              { id: 'b', text: 'To provide examples of celestial bodies that might harbor similar sub-surface chemosynthetic environments.' },
              { id: 'c', text: 'To argue that space exploration is more urgent than oceanography.' },
              { id: 'd', text: 'To explain where giant tube worms originated.' },
            ],
            correctAnswer: 'b',
            explanation: 'Penulis menyebut Europa dan Enceladus sebagai contoh lingkungan luar angkasa dengan kerak es yang mungkin memiliki ventilasi hidrotermal.',
            skillTested: 'Rhetorical Purpose',
          },
          {
            id: 'tq-5',
            section: 'reading',
            type: 'multiple-choice',
            questionNumber: 5,
            prompt: 'What can be inferred about the organisms living near hydrothermal vents?',
            options: [
              { id: 'a', text: 'They frequently swim to the ocean surface to absorb sunlight.' },
              { id: 'b', text: 'They are capable of thriving in conditions with high geothermal temperatures and zero sunlight.' },
              { id: 'c', text: 'They only survive for a few weeks.' },
              { id: 'd', text: 'They are identical to species found in shallow coral reefs.' },
            ],
            correctAnswer: 'b',
            explanation: 'Organisme tersebut berkembang biak di laut dalam tanpa cahaya matahari dengan air panas bergeotermal.',
            skillTested: 'Inference',
          },
        ],
      },
    ],
  },
];
