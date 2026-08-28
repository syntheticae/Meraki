export interface AcademicCollocation {
  id: string;
  type: 'Verb + Noun' | 'Adjective + Noun' | 'Adverb + Adjective';
  collocation: string;
  literalIndonesianWarning: string; // Peringatan kesalahan terjemahan kata-per-kata
  meaningId: string;
  exampleSentence: string;
  clozePrompt: string;
  correctTarget: string;
  distractors: string[];
}

export interface OnPointVerb {
  id: string;
  indonesianClunkyPhrase: string; // Terjemahan kaku kata-per-kata Indonesia (e.g. "membuat semakin buruk")
  clunkyEnglishWordy: string; // Ungkapan panjang tidak elegan (e.g. "make something much worse")
  onPointVerb: string; // Diksi tunggal formal (e.g. "Exacerbate")
  ipa: string;
  partOfSpeech: string;
  formalDefinition: string;
  exampleSentence: string;
  antonymOrPair?: string;
}

export interface DependentPreposition {
  id: string;
  word: string;
  partOfSpeech: 'Adjective' | 'Verb' | 'Noun';
  requiredPreposition: string;
  meaningId: string;
  exampleSentence: string;
  clozeSentence: string; // e.g. "The research team is capable _____ analyzing complex genomic sequences."
}

export interface ConfusableWordPair {
  id: string;
  wordA: string;
  posA: string;
  definitionA: string;
  exampleA: string;
  wordB: string;
  posB: string;
  definitionB: string;
  exampleB: string;
  diagnosticTrick: string;
  quizQuestion: string;
  quizOptions: string[];
  correctWord: string;
}

export interface MinimalPair {
  id: string;
  phonemeContrast: string; // e.g. "/ɪ/ vs /iː/"
  description: string;
  wordA: string;
  ipaA: string;
  meaningA: string;
  wordB: string;
  ipaB: string;
  meaningB: string;
  contrastContext: string;
}

export interface SentenceCombineTask {
  id: string;
  technique: 'Participle Reduction' | 'Appositive Phrase' | 'Nominalization' | 'Relative Clause Embedding';
  sourceSentences: string[];
  sampleCombined: string;
  acceptedVariations: string[];
  linguisticExplanation: string;
}

export interface IeltsChartTrend {
  id: string;
  trendType: 'Kenaikan Tajam (Surge)' | 'Penurunan Tajam (Plummet)' | 'Stabilitas (Plateau)' | 'Fluktuasi (Fluctuate)' | 'Titik Puncak (Peak)';
  trendDirection: 'up' | 'down' | 'flat' | 'fluctuate';
  highYieldVerbs: string[];
  highYieldNouns: string[];
  highYieldAdverbs: string[];
  formulaStructure: string;
  sampleSentence: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. ACADEMIC COLLOCATIONS LIST (ACL) DATASET
// ─────────────────────────────────────────────────────────────────────────────
export const ACADEMIC_COLLOCATIONS_DATA: AcademicCollocation[] = [
  // VERB + NOUN
  {
    id: 'col-01',
    type: 'Verb + Noun',
    collocation: 'conduct research / undertake research',
    literalIndonesianWarning: 'Hindari menerjemahkan "melakukan penelitian" menjadi "do a research" (SALAH MUTLAK).',
    meaningId: 'Melaksanakan penelitian ilmiah secara sistematis',
    exampleSentence: 'The epidemiological institute conducted extensive research on viral transmission vectors.',
    clozePrompt: 'The scientists decided to _____ research on alternative renewable polymers.',
    correctTarget: 'conduct',
    distractors: ['do', 'make', 'create']
  },
  {
    id: 'col-02',
    type: 'Verb + Noun',
    collocation: 'draw a conclusion',
    literalIndonesianWarning: 'Hindari menerjemahkan "mengambil kesimpulan" menjadi "take a conclusion" (SALAH).',
    meaningId: 'Menyimpulkan hasil analisis dari data empiris',
    exampleSentence: 'Scholars cannot draw a definitive conclusion without longitudinal verification.',
    clozePrompt: 'Based on the experimental telemetry, we can safely _____ a compelling conclusion.',
    correctTarget: 'draw',
    distractors: ['take', 'pull', 'grab']
  },
  {
    id: 'col-03',
    type: 'Verb + Noun',
    collocation: 'pose a threat / pose a risk',
    literalIndonesianWarning: 'Hindari "give a threat" atau "make a risk".',
    meaningId: 'Menimbulkan ancaman atau risiko nyata',
    exampleSentence: 'Rising coastal sea levels pose a severe threat to regional infrastructure.',
    clozePrompt: 'Uncontrolled industrial effluents _____ a grave threat to local river ecosystems.',
    correctTarget: 'pose',
    distractors: ['give', 'bring', 'make']
  },
  {
    id: 'col-04',
    type: 'Verb + Noun',
    collocation: 'exert influence',
    literalIndonesianWarning: 'Hindari "give big influence" atau "throw influence".',
    meaningId: 'Memberikan pengaruh kuat terhadap keputusan atau perkembangan',
    exampleSentence: 'Central regulatory bodies exert immense influence over monetary policy.',
    clozePrompt: 'Multinational tech conglomerates _____ significant influence on international digital laws.',
    correctTarget: 'exert',
    distractors: ['give', 'launch', 'impose']
  },
  {
    id: 'col-05',
    type: 'Verb + Noun',
    collocation: 'bridge the gap',
    literalIndonesianWarning: 'Hindari "connect the gap" atau "close the hole".',
    meaningId: 'Menjembatani / memperkecil kesenjangan antara teori dan praktik',
    exampleSentence: 'Interdisciplinary workshops help bridge the gap between academia and industry.',
    clozePrompt: 'New government subsidies aim to _____ the gap between rural and urban education.',
    correctTarget: 'bridge',
    distractors: ['cross', 'tie', 'glue']
  },
  {
    id: 'col-06',
    type: 'Verb + Noun',
    collocation: 'challenge assumptions',
    literalIndonesianWarning: 'Hindari "fight the opinions" saat bermaksud menguji kembali anggapan lama.',
    meaningId: 'Mempertanyakan atau menguji ulang kebenaran asumsi dasar',
    exampleSentence: 'Groundbreaking astronomical observations challenged traditional assumptions regarding dark matter.',
    clozePrompt: 'Recent quantum experiments directly _____ core assumptions held in classical mechanics.',
    correctTarget: 'challenge',
    distractors: ['combat', 'attack', 'refuse']
  },
  {
    id: 'col-07',
    type: 'Verb + Noun',
    collocation: 'yield results',
    literalIndonesianWarning: 'Hindari "produce the fruits" atau "give out answers".',
    meaningId: 'Membuahkan / menghasilkan data atau capaian positif',
    exampleSentence: 'The continuous clinical calibration yielded remarkable therapeutic results.',
    clozePrompt: 'The agricultural field trials _____ promising results despite erratic rainfall.',
    correctTarget: 'yielded',
    distractors: ['spawned', 'harvested', 'gave']
  },

  // ADJECTIVE + NOUN
  {
    id: 'col-08',
    type: 'Adjective + Noun',
    collocation: 'profound impact',
    literalIndonesianWarning: 'Hindari "very big impact" atau "deep effect" dalam esai akademik.',
    meaningId: 'Dampak yang sangat mendalam dan berjangka panjang',
    exampleSentence: 'Artificial intelligence automation will have a profound impact on future labor economics.',
    clozePrompt: 'The industrial revolution had a _____ impact on global demographics.',
    correctTarget: 'profound',
    distractors: ['deep', 'heavy', 'giant']
  },
  {
    id: 'col-09',
    type: 'Adjective + Noun',
    collocation: 'empirical evidence',
    literalIndonesianWarning: 'Hindari "real proof" atau "fact evidence".',
    meaningId: 'Bukti nyata yang diperoleh dari observasi langsung atau eksperimen laboratorium',
    exampleSentence: 'The hypothesis lacks sufficient empirical evidence to warrant immediate clinical rollout.',
    clozePrompt: 'Researchers must provide robust _____ evidence before publishing revolutionary claims.',
    correctTarget: 'empirical',
    distractors: ['practical', 'physical', 'tangible']
  },
  {
    id: 'col-10',
    type: 'Adjective + Noun',
    collocation: 'acute shortage',
    literalIndonesianWarning: 'Hindari "critical lack" atau "severe minus".',
    meaningId: 'Kelangkaan atau kekurangan yang sangat genting/parah',
    exampleSentence: 'The hospital experienced an acute shortage of specialized ventilators.',
    clozePrompt: 'Developing nations frequently face an _____ shortage of clean drinking water.',
    correctTarget: 'acute',
    distractors: ['sharp', 'dense', 'narrow']
  },
  {
    id: 'col-11',
    type: 'Adjective + Noun',
    collocation: 'salient feature',
    literalIndonesianWarning: 'Hindari "the standing-out point".',
    meaningId: 'Ciri khas atau fitur paling menonjol dan signifikan',
    exampleSentence: 'A salient feature of the modern global economy is the rapid circulation of capital.',
    clozePrompt: 'The most _____ feature of the architectural design is its passive solar heating system.',
    correctTarget: 'salient',
    distractors: ['popping', 'emergent', 'blatant']
  },
  {
    id: 'col-12',
    type: 'Adjective + Noun',
    collocation: 'unprecedented growth',
    literalIndonesianWarning: 'Hindari "growth that never happened before".',
    meaningId: 'Pertumbuhan luar biasa yang belum pernah terjadi sebelumnya dalam sejarah',
    exampleSentence: 'The renewable solar energy sector experienced unprecedented growth over the last decade.',
    clozePrompt: 'The technological startup witnessed _____ growth following the international product launch.',
    correctTarget: 'unprecedented',
    distractors: ['unheard', 'unreached', 'unmatched']
  },

  // ADVERB + ADJECTIVE
  {
    id: 'col-13',
    type: 'Adverb + Adjective',
    collocation: 'fundamentally flawed',
    literalIndonesianWarning: 'Hindari "totally wrong from bottom".',
    meaningId: 'Mengandung cacat atau kesalahan mendasar pada fondasi logikanya',
    exampleSentence: 'The peer review panel concluded that the initial statistical model was fundamentally flawed.',
    clozePrompt: 'Due to improper sample randomization, the experimental methodology was _____ flawed.',
    correctTarget: 'fundamentally',
    distractors: ['deeply', 'basically', 'radically']
  },
  {
    id: 'col-14',
    type: 'Adverb + Adjective',
    collocation: 'inextricably linked',
    literalIndonesianWarning: 'Hindari "connected so strong that cannot be separated".',
    meaningId: 'Terkait erat dan tidak dapat dipisahkan satu sama lain',
    exampleSentence: 'Economic prosperity and ecological sustainability are inextricably linked in contemporary policy.',
    clozePrompt: 'Public health outcomes are _____ linked to socioeconomic living conditions.',
    correctTarget: 'inextricably',
    distractors: ['inseparably', 'immovably', 'rigidly']
  },
  {
    id: 'col-15',
    type: 'Adverb + Adjective',
    collocation: 'mutually exclusive',
    literalIndonesianWarning: 'Hindari "cannot happen together".',
    meaningId: 'Dua opsi yang saling meniadakan; jika satu terjadi maka yang lain mustahil terjadi',
    exampleSentence: 'Economic growth and environmental preservation are not necessarily mutually exclusive.',
    clozePrompt: 'The two proposed scientific hypotheses are _____ exclusive; both cannot be simultaneously true.',
    correctTarget: 'mutually',
    distractors: ['equally', 'reciprocally', 'bilaterally']
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. ON-POINT ACADEMIC VERBS (DIKSI AKADEMIK LANGSUNG PENGGANTI TERJEMAHAN KAKU)
// ─────────────────────────────────────────────────────────────────────────────
export const ON_POINT_VERBS_DATA: OnPointVerb[] = [
  {
    id: 'opv-01',
    indonesianClunkyPhrase: 'Membuat semakin parah / memperburuk situasi',
    clunkyEnglishWordy: 'make the problem much worse / add fuel to the fire',
    onPointVerb: 'Exacerbate',
    ipa: '/ɪɡˈzæs.ər.beɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To make a problem, bad situation, or negative condition worse and more acute.',
    exampleSentence: 'Uncontrolled deforestation will exacerbate regional flooding during monsoon seasons.',
    antonymOrPair: 'Alleviate / Mitigate'
  },
  {
    id: 'opv-02',
    indonesianClunkyPhrase: 'Meringankan beban / mengurangi dampak buruk',
    clunkyEnglishWordy: 'make the bad effect smaller / make people feel less pain',
    onPointVerb: 'Mitigate / Alleviate',
    ipa: '/ˈmɪt.ɪ.ɡeɪt/ · /əˈliː.vi.eɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To make something less severe, harmful, intense, or difficult to bear.',
    exampleSentence: 'Strategic reforestation projects help mitigate carbon emissions and soil erosion.',
    antonymOrPair: 'Exacerbate / Aggravate'
  },
  {
    id: 'opv-03',
    indonesianClunkyPhrase: 'Mempercepat terjadinya sesuatu / memicu perubahan tiba-tiba',
    clunkyEnglishWordy: 'make something happen much faster suddenly',
    onPointVerb: 'Precipitate',
    ipa: '/prɪˈsɪp.ɪ.teɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To cause an event or situation (typically a bad or sudden one) to happen prematurely or unexpectedly.',
    exampleSentence: 'The sudden bankruptcy of the major lender precipitated a systemic liquidity crisis.',
    antonymOrPair: 'Delay / Forestall'
  },
  {
    id: 'opv-04',
    indonesianClunkyPhrase: 'Memberikan bukti penguat / memvalidasi kebenaran',
    clunkyEnglishWordy: 'give good evidence to show that something is true',
    onPointVerb: 'Corroborate / Substantiate',
    ipa: '/kəˈrɒb.ə.reɪt/ · /səbˈstæn.ʃi.eɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To confirm or give additional evidence supporting a statement, theory, or scientific finding.',
    exampleSentence: 'Subsequent astronomical observations corroborated Einstein\'s theory of general relativity.',
    antonymOrPair: 'Refute / Disprove'
  },
  {
    id: 'opv-05',
    indonesianClunkyPhrase: 'Membantah secara ilmiah / menyangkal dalil',
    clunkyEnglishWordy: 'say and prove that someone is wrong',
    onPointVerb: 'Refute',
    ipa: '/rɪˈfjuːt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To prove a statement, claim, or theory to be false or incorrect by presenting superior evidence.',
    exampleSentence: 'The laboratory results decisively refuted the competitor\'s published claims.',
    antonymOrPair: 'Corroborate / Validate'
  },
  {
    id: 'opv-06',
    indonesianClunkyPhrase: 'Menghalangi / mempersulit perkembangan kelancaran',
    clunkyEnglishWordy: 'make it very hard for something to move forward',
    onPointVerb: 'Impede / Hinder',
    ipa: '/ɪmˈpiːd/ · /ˈhɪn.dər/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To delay, obstruct, or interfere with the progress or movement of someone or something.',
    exampleSentence: 'Bureaucratic gridlock must not impede the delivery of critical humanitarian aid.',
    antonymOrPair: 'Facilitate / Expedite'
  },
  {
    id: 'opv-07',
    indonesianClunkyPhrase: 'Mempermudah proses / memfasilitasi kelancaran',
    clunkyEnglishWordy: 'make something very easy to do without trouble',
    onPointVerb: 'Facilitate',
    ipa: '/fəˈsɪl.ɪ.teɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To make an action, process, or task easier, smoother, or more efficient.',
    exampleSentence: 'Digital documentation platforms facilitate seamless international research collaboration.',
    antonymOrPair: 'Impede / Obstruct'
  },
  {
    id: 'opv-08',
    indonesianClunkyPhrase: 'Menghilangkan sama sekali / memberantas tuntas',
    clunkyEnglishWordy: 'kill or delete completely from the root',
    onPointVerb: 'Eradicate',
    ipa: '/ɪˈræd.ɪ.keɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To completely destroy, eliminate, or put an end to something undesirable (disease, poverty, error).',
    exampleSentence: 'Global vaccination campaigns eradicated smallpox from the human population.',
    antonymOrPair: 'Propagate / Foster'
  },
  {
    id: 'opv-09',
    indonesianClunkyPhrase: 'Memeriksa secara super teliti dan mendalam',
    clunkyEnglishWordy: 'look at something very carefully to find small mistakes',
    onPointVerb: 'Scrutinize / Probe',
    ipa: '/ˈskruː.tɪ.naɪz/ · /proʊb/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To examine, inspect, or analyze someone or something closely, thoroughly, and critically.',
    exampleSentence: 'Independent auditors scrutinized the financial ledgers for procedural discrepancies.',
    antonymOrPair: 'Overlook / Ignore'
  },
  {
    id: 'opv-10',
    indonesianClunkyPhrase: 'Menggabungkan / menyerap ke dalam satu sistem utuh',
    clunkyEnglishWordy: 'put things together to make them one single part',
    onPointVerb: 'Incorporate / Assimilate',
    ipa: '/ɪnˈkɔːr.pə.reɪt/ · /əˈsɪm.ɪ.leɪt/',
    partOfSpeech: 'Transitive Verb',
    formalDefinition: 'To combine, absorb, or include something as an integral constituent part of a whole.',
    exampleSentence: 'The curriculum incorporates cutting-edge laboratory simulations into traditional coursework.',
    antonymOrPair: 'Segregate / Isolate'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. DEPENDENT PREPOSITIONS MASTER MATRIX
// ─────────────────────────────────────────────────────────────────────────────
export const DEPENDENT_PREPOSITIONS_DATA: DependentPreposition[] = [
  {
    id: 'dp-01',
    word: 'Capable',
    partOfSpeech: 'Adjective',
    requiredPreposition: 'of',
    meaningId: 'Mampu melakukan sesuatu (+ Verb-ing / Noun)',
    exampleSentence: 'Modern quantum processors are capable of solving cryptographic equations in seconds.',
    clozeSentence: 'The neural network is capable _____ detecting subtle radiological anomalies.'
  },
  {
    id: 'dp-02',
    word: 'Adhere',
    partOfSpeech: 'Verb',
    requiredPreposition: 'to',
    meaningId: 'Mematuhi aturan / melekat erat pada standar',
    exampleSentence: 'All trial participants must strictly adhere to laboratory safety protocols.',
    clozeSentence: 'Investigators must adhere _____ established international bioethics guidelines.'
  },
  {
    id: 'dp-03',
    word: 'Prone',
    partOfSpeech: 'Adjective',
    requiredPreposition: 'to',
    meaningId: 'Rentan terhadap / cenderung mengalami hal buruk',
    exampleSentence: 'Coastal infrastructure is increasingly prone to severe tidal erosion.',
    clozeSentence: 'Uncalibrated measurement tools are prone _____ systematic calibration drift.'
  },
  {
    id: 'dp-04',
    word: 'Abstain',
    partOfSpeech: 'Verb',
    requiredPreposition: 'from',
    meaningId: 'Menahan diri dari / tidak ikut melakukan',
    exampleSentence: 'Patients were instructed to abstain from caffeine during the monitoring period.',
    clozeSentence: 'The delegate chose to abstain _____ voting on the controversial amendment.'
  },
  {
    id: 'dp-05',
    word: 'Coincide',
    partOfSpeech: 'Verb',
    requiredPreposition: 'with',
    meaningId: 'Terjadi bersamaan waktu dengan / sejalan dengan',
    exampleSentence: 'The economic downturn coincided with a sudden surge in global energy prices.',
    clozeSentence: 'The publication of the report coincided _____ the annual international summit.'
  },
  {
    id: 'dp-06',
    word: 'Deficient',
    partOfSpeech: 'Adjective',
    requiredPreposition: 'in',
    meaningId: 'Kekurangan zat / tidak memiliki cukup kadar tertentu',
    exampleSentence: 'The surveyed soil specimens were deficient in organic nitrogen compounds.',
    clozeSentence: 'A diet that is deficient _____ essential micronutrients can impair pediatric development.'
  },
  {
    id: 'dp-07',
    word: 'Insight',
    partOfSpeech: 'Noun',
    requiredPreposition: 'into',
    meaningId: 'Wawasan mendalam tentang suatu mekanisme/fenomena',
    exampleSentence: 'Longitudinal telemetry provides valuable insight into migratory animal behavior.',
    clozeSentence: 'The genetic sequencing provided fresh insight _____ the pathogenesis of the disease.'
  },
  {
    id: 'dp-08',
    word: 'Susceptible',
    partOfSpeech: 'Adjective',
    requiredPreposition: 'to',
    meaningId: 'Mudah terpengaruh / rentan terkena infeksi atau kerusakan',
    exampleSentence: 'Elderly demographics are particularly susceptible to severe respiratory pathogens.',
    clozeSentence: 'Unencrypted wireless networks are susceptible _____ external telemetry interception.'
  },
  {
    id: 'dp-09',
    word: 'Conducive',
    partOfSpeech: 'Adjective',
    requiredPreposition: 'to',
    meaningId: 'Mendukung terciptanya kondisi baik / kondusif bagi',
    exampleSentence: 'Quiet laboratory environments are conducive to deep analytical focus.',
    clozeSentence: 'Stable regulatory frameworks are conducive _____ sustainable long-term foreign investment.'
  },
  {
    id: 'dp-10',
    word: 'Compensate',
    partOfSpeech: 'Verb',
    requiredPreposition: 'for',
    meaningId: 'Mengganti rugi / mengimbangi kekurangan',
    exampleSentence: 'Aerodynamic improvements compensate for the heavier battery payload.',
    clozeSentence: 'The university offered financial stipends to compensate _____ the participants\' travel expenses.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. CONFUSABLE WORDS DISSECTOR
// ─────────────────────────────────────────────────────────────────────────────
export const CONFUSABLE_WORDS_DATA: ConfusableWordPair[] = [
  {
    id: 'cw-01',
    wordA: 'Affect',
    posA: 'Verb (Kata Kerja)',
    definitionA: 'Mempengaruhi, memberikan dampak pada sesuatu (Action)',
    exampleA: 'Rising ocean temperatures directly affect coral reef ecosystems.',
    wordB: 'Effect',
    posB: 'Noun (Kata Benda)',
    definitionB: 'Hasil, akibat, atau dampak dari suatu peristiwa (Result)',
    exampleB: 'The primary effect of the monetary policy was immediate inflation reduction.',
    diagnosticTrick: 'A = Action (Affect = Verb); E = End result (Effect = Noun). *Trik: "The [Effect] will [Affect] the outcome."*',
    quizQuestion: 'The unexpected regulatory changes will profoundly _____ the pharmaceutical sector.',
    quizOptions: ['affect', 'effect'],
    correctWord: 'affect'
  },
  {
    id: 'cw-02',
    wordA: 'Complement',
    posA: 'Verb / Noun (dengan huruf E)',
    definitionA: 'Melengkapi, menyempurnakan hingga menjadi utuh',
    exampleA: 'Qualitative interviews complement quantitative statistical metrics.',
    wordB: 'Compliment',
    posB: 'Verb / Noun (dengan huruf I)',
    definitionB: 'Memuji, memberikan sanjungan pujian',
    exampleB: 'The committee chair complimented the researcher on an immaculate presentation.',
    diagnosticTrick: 'ComplEment dengan "E" = Complete (melengkapi); ComplIment dengan "I" = "I like you" (pujian).',
    quizQuestion: 'The second dataset serves to _____ the preliminary findings of the study.',
    quizOptions: ['complement', 'compliment'],
    correctWord: 'complement'
  },
  {
    id: 'cw-03',
    wordA: 'Principle',
    posA: 'Noun (dengan -PLE)',
    definitionA: 'Prinsip moral, kaidah dasar, atau hukum alam fundamental',
    exampleA: 'The scientific hypothesis is grounded in the principle of conservation of energy.',
    wordB: 'Principal',
    posB: 'Noun / Adjective (dengan -PAL)',
    definitionB: 'Utama/terpenting (Adj), kepala sekolah (Noun), atau dana pokok pinjaman',
    exampleB: 'The principal investigator presented the primary epidemiological conclusions.',
    diagnosticTrick: 'PrinciPAL = "PAL" (orang utama/kepala sekolah); PrinciPLE = "ruLE" (aturan/kaidah).',
    quizQuestion: 'Adhering to strict ethical _____ is mandatory for all clinical trials.',
    quizOptions: ['principles', 'principals'],
    correctWord: 'principles'
  },
  {
    id: 'cw-04',
    wordA: 'Economic',
    posA: 'Adjective',
    definitionA: 'Berkaitan dengan sistem perekonomian, industri, atau keuangan makro',
    exampleA: 'The nation experienced rapid economic expansion following the treaty.',
    wordB: 'Economical',
    posB: 'Adjective',
    definitionB: 'Hemat, efisien dalam pengeluaran biaya dan sumber daya',
    exampleB: 'Hybrid solar generators offer an economical alternative for rural electrification.',
    diagnosticTrick: 'Economic = Ilmu Ekonomi; Economical = Hemat biaya (Frugal).',
    quizQuestion: 'The engineering team designed a highly _____ engine that minimizes fuel consumption.',
    quizOptions: ['economical', 'economic'],
    correctWord: 'economical'
  },
  {
    id: 'cw-05',
    wordA: 'Historic',
    posA: 'Adjective',
    definitionA: 'Bersejarah dan memiliki dampak monumental penting dalam sejarah',
    exampleA: 'The signing of the global climate treaty was a historic milestone.',
    wordB: 'Historical',
    posB: 'Adjective',
    definitionB: 'Berkaitan dengan masa lalu atau peristiwa yang terjadi di masa silam',
    exampleB: 'Scholars reviewed historical records dating back to the fourteenth century.',
    diagnosticTrick: 'Historic = Momen besar bersejarah (Famous); Historical = Segala hal tentang masa lalu (Past events).',
    quizQuestion: 'The discovery of penicillin was a _____ achievement that transformed global medicine.',
    quizOptions: ['historic', 'historical'],
    correctWord: 'historic'
  },
  {
    id: 'cw-06',
    wordA: 'Disinterested',
    posA: 'Adjective',
    definitionA: 'Objektif, netral, tidak memiliki kepentingan pribadi yang memihak',
    exampleA: 'A scientific peer reviewer must remain completely disinterested in the outcome.',
    wordB: 'Uninterested',
    posB: 'Adjective',
    definitionB: 'Tidak tertarik, bosan, atau acuh tak acuh',
    exampleB: 'The audience appeared uninterested during the overly technical lecture.',
    diagnosticTrick: 'Disinterested = Adil & Netral (Impartial); Uninterested = Bosan/Tidak peduli (Not interested).',
    quizQuestion: 'Arbitrators in international trade disputes must be entirely _____ parties.',
    quizOptions: ['disinterested', 'uninterested'],
    correctWord: 'disinterested'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. INTERACTIVE MINIMAL PAIRS PHONETICS LAB
// ─────────────────────────────────────────────────────────────────────────────
export const MINIMAL_PAIRS_DATA: MinimalPair[] = [
  {
    id: 'mp-01',
    phonemeContrast: '/ɪ/ (Short) vs /iː/ (Long)',
    description: 'Vokal pendek rileks /ɪ/ vs Vokal panjang tegang /iː/. Kesalahan umum pembelajar Indonesia yang memendekkan semua vokal.',
    wordA: 'Ship',
    ipaA: '/ʃɪp/',
    meaningA: 'Kapal laut besar',
    wordB: 'Sheep',
    ipaB: '/ʃiːp/',
    meaningB: 'Domba berbulu',
    contrastContext: 'The cargo ship (/ʃɪp/) transported five hundred sheep (/ʃiːp/).'
  },
  {
    id: 'mp-02',
    phonemeContrast: '/ɪ/ (Short) vs /iː/ (Long)',
    description: 'Pembeda vital antara aksi menetap hidup vs pergi meninggalkan.',
    wordA: 'Live',
    ipaA: '/lɪv/',
    meaningA: 'Tinggal, hidup di suatu tempat',
    wordB: 'Leave',
    ipaB: '/liːv/',
    meaningB: 'Pergi meninggalkan, berangkat',
    contrastContext: 'They live (/lɪv/) in London, but they will leave (/liːv/) tomorrow.'
  },
  {
    id: 'mp-03',
    phonemeContrast: '/æ/ (Open) vs /e/ (Mid)',
    description: 'Mulut terbuka lebar /æ/ vs mulut rileks setengah terbuka /e/.',
    wordA: 'Bad',
    ipaA: '/bæd/',
    meaningA: 'Buruk, tidak baik',
    wordB: 'Bed',
    ipaB: '/bɛd/',
    meaningB: 'Tempat tidur',
    contrastContext: 'A bad (/bæd/) mattress ruined his rest in bed (/bɛd/).'
  },
  {
    id: 'mp-04',
    phonemeContrast: '/θ/ (Dental Fricative) vs /s/ (Alveolar)',
    description: 'Ujung lidah di antara gigi atas-bawah /θ/ vs lidah di belakang gigi /s/.',
    wordA: 'Think',
    ipaA: '/θɪŋk/',
    meaningA: 'Berpikir, berpendapat',
    wordB: 'Sink',
    ipaB: '/sɪŋk/',
    meaningB: 'Tenggelam / wastafel',
    contrastContext: 'I think (/θɪŋk/) heavy iron objects will sink (/sɪŋk/) rapidly.'
  },
  {
    id: 'mp-05',
    phonemeContrast: '/v/ (Voiced) vs /f/ (Voiceless)',
    description: 'Gigi atas menempel bibir bawah bergetar /v/ vs hembusan tanpa getaran /f/.',
    wordA: 'Very',
    ipaA: '/ˈvɛr.i/',
    meaningA: 'Sangat',
    wordB: 'Ferry',
    ipaB: '/ˈfɛr.i/',
    meaningB: 'Kapal feri penyeberangan',
    contrastContext: 'The ferry (/ˈfɛr.i/) crossing was very (/ˈvɛr.i/) calm today.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. IELTS TASK 1 DATA-TREND & CHART STUDIO
// ─────────────────────────────────────────────────────────────────────────────
export const IELTS_TASK1_TRENDS_DATA: IeltsChartTrend[] = [
  {
    id: 'trend-01',
    trendType: 'Kenaikan Tajam (Surge)',
    trendDirection: 'up',
    highYieldVerbs: ['surge', 'rocket', 'skyrocket', 'escalate', 'climb sharply'],
    highYieldNouns: ['a dramatic surge', 'a steep upward trend', 'a substantial jump'],
    highYieldAdverbs: ['dramatically', 'sharply', 'substantially', 'precipitously'],
    formulaStructure: 'Subject + surged / witnessed a sharp increase + of [X]% / from [Y] to [Z] + between [Year] and [Year].',
    sampleSentence: 'The proportion of households utilizing solar power surged dramatically from 12% in 2010 to 48% in 2020.'
  },
  {
    id: 'trend-02',
    trendType: 'Penurunan Tajam (Plummet)',
    trendDirection: 'down',
    highYieldVerbs: ['plummet', 'plunge', 'slump', 'tumble', 'deteriorate'],
    highYieldNouns: ['a marked decline', 'a precipitous drop', 'a substantial contraction'],
    highYieldAdverbs: ['sharply', 'precipitously', 'substantially', 'significantly'],
    formulaStructure: 'Subject + plummeted to [X]% / registered a steep decline of [Y]% + over the subsequent decade.',
    sampleSentence: 'Industrial coal consumption plummeted precipitously to a record low of 15% by the end of the observation period.'
  },
  {
    id: 'trend-03',
    trendType: 'Stabilitas (Plateau)',
    trendDirection: 'flat',
    highYieldVerbs: ['plateau', 'level off', 'remain stable', 'stabilize', 'stagnate'],
    highYieldNouns: ['a period of stability', 'a stable plateau', 'minimal variance'],
    highYieldAdverbs: ['consistently', 'steadily', 'relatively'],
    formulaStructure: 'Subject + leveled off at [X]% / remained relatively constant + throughout the entire timeframe.',
    sampleSentence: 'Renewable energy exports leveled off at approximately 30 billion dollars throughout the latter half of the decade.'
  },
  {
    id: 'trend-04',
    trendType: 'Fluktuasi (Fluctuate)',
    trendDirection: 'fluctuate',
    highYieldVerbs: ['fluctuate', 'oscillate', 'vary erratically'],
    highYieldNouns: ['erratic fluctuations', 'continuous oscillation', 'pronounced volatility'],
    highYieldAdverbs: ['wildly', 'erratically', 'continually'],
    formulaStructure: 'Subject + fluctuated wildly between [X]% and [Y]% + before settling at [Z]%.',
    sampleSentence: 'Crude oil telemetry fluctuated erratically between $45 and $95 per barrel before stabilizing in the final quarter.'
  },
  {
    id: 'trend-05',
    trendType: 'Titik Puncak (Peak)',
    trendDirection: 'up',
    highYieldVerbs: ['peak', 'reach an all-time high', 'culminate in', 'reach the zenith'],
    highYieldNouns: ['the peak', 'the highest zenith', 'an all-time high'],
    highYieldAdverbs: ['decisively', 'eventually'],
    formulaStructure: 'Subject + peaked at [X]% in [Year], surpassing [Other Category].',
    sampleSentence: 'Global expenditure on automated manufacturing peaked at an unprecedented 85 billion dollars in 2022.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. SENTENCE COMBINING & COMPRESSION STUDIO
// ─────────────────────────────────────────────────────────────────────────────
export const SENTENCE_COMBINING_DATA: SentenceCombineTask[] = [
  {
    id: 'sc-01',
    technique: 'Participle Reduction',
    sourceSentences: [
      'The epidemiologists analyzed the telemetry from thirty regional hospitals.',
      'The epidemiologists discovered an unforeseen viral mutation.'
    ],
    sampleCombined: 'Analyzing the telemetry from thirty regional hospitals, the epidemiologists discovered an unforeseen viral mutation.',
    acceptedVariations: [
      'Having analyzed the telemetry from thirty regional hospitals, the epidemiologists discovered an unforeseen viral mutation.',
      'By analyzing telemetry from thirty regional hospitals, epidemiologists discovered an unforeseen viral mutation.'
    ],
    linguisticExplanation: 'Menghilangkan pengulangan subjek dan klausa independen kedua dengan mengubah predikat pertama menjadi Present Participle Phrase pembuka ("Analyzing the telemetry...").'
  },
  {
    id: 'sc-02',
    technique: 'Nominalization',
    sourceSentences: [
      'The population of the metropolitan region expanded rapidly.',
      'Water resources were consumed at an unsustainable rate.'
    ],
    sampleCombined: 'The rapid expansion of the metropolitan population precipitated unsustainable water resource consumption.',
    acceptedVariations: [
      'Rapid metropolitan population growth caused unsustainable water consumption.',
      'The rapid growth of the metropolitan population led to unsustainable water resource consumption.'
    ],
    linguisticExplanation: 'Mengubah kata kerja "expanded rapidly" menjadi Frasa Benda Padat "The rapid expansion..." dan memasangkannya dengan kata kerja relasional akademik "precipitated".'
  },
  {
    id: 'sc-03',
    technique: 'Appositive Phrase',
    sourceSentences: [
      'Dr. Elena Vance is a leading authority in quantum computing.',
      'Dr. Elena Vance delivered the keynote address at the international symposium.'
    ],
    sampleCombined: 'Dr. Elena Vance, a leading authority in quantum computing, delivered the keynote address at the international symposium.',
    acceptedVariations: [
      'A leading authority in quantum computing, Dr. Elena Vance delivered the keynote address at the international symposium.'
    ],
    linguisticExplanation: 'Menyisipkan Frasa Aposisi di antara koma tepat setelah nama tokoh tanpa memerlukan kata hubung relatif yang berulang ("who is...").'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. DIRECT TRANSLATION TRAPS & L1 INTERFERENCE DISSECTOR (ANTI-LITERAL LAB)
// ─────────────────────────────────────────────────────────────────────────────
export interface DirectTranslationTrap {
  id: string;
  indonesianPhrase: string; // Ungkapan/metafora bahasa Indonesia
  literalClunkyEnglish: string; // Terjemahan kaku/cacat kata-per-kata
  onPointNativeEnglish: string; // Diksi/kolokasi penutur asli yang on point
  registerCategory: 'Idiom Sehari-hari' | 'Retorika Formal & Akademik' | 'Ekspresi Sosial & Percakapan';
  linguisticExplanation: string; // Mengapa terjemahan kaku terdengar aneh bagi native speaker
  exampleSentence: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const DIRECT_TRANSLATION_TRAPS_DATA: DirectTranslationTrap[] = [
  {
    id: 'l1-01',
    indonesianPhrase: 'Cuci mata / Jalan-jalan santai melihat pertokoan',
    literalClunkyEnglish: 'Washing my eyes / Walking without purpose',
    onPointNativeEnglish: 'Window shopping / Unwinding / Going for a stroll',
    registerCategory: 'Idiom Sehari-hari',
    linguisticExplanation: 'Dalam bahasa Inggris, "washing eyes" adalah tindakan medis membilas bola mata dengan cairan. Penutur asli menggunakan istilah "window shopping" untuk melihat etalase tanpa berniat membeli, atau "unwinding" untuk melepas penat.',
    exampleSentence: 'After a stressful week of clinical exams, she spent Saturday afternoon window shopping downtown to unwind.',
    drillQuestion: 'Instead of staying inside all weekend, let\'s go downtown and do some _____ to clear our minds.',
    drillOptions: ['eye washing', 'window shopping', 'view looking', 'street walking'],
    correctAnswer: 'window shopping',
    drillExplanation: '"Window shopping" adalah padanan alami penutur asli untuk berjalan santai melihat-lihat toko/cuci mata.'
  },
  {
    id: 'l1-02',
    indonesianPhrase: 'Tidak enak hati / Segan / Merasa canggung untuk menolak',
    literalClunkyEnglish: 'My heart doesn\'t feel good to refuse / Not delicious heart',
    onPointNativeEnglish: 'Reluctant to decline / Felt awkward / Hesitant to refuse',
    registerCategory: 'Ekspresi Sosial & Percakapan',
    linguisticExplanation: 'Metafora "hati" dalam bahasa Indonesia sering diterjemahkan salah menjadi "heart" atau "liver". Penutur asli menggunakan kata sifat psikologis seperti "reluctant" (enggan/segan) atau "awkward" (canggung).',
    exampleSentence: 'Although she already had prior commitments, she was reluctant to decline the professor\'s invitation.',
    drillQuestion: 'The junior researcher felt _____ to question the senior investigator\'s methodology during the symposium.',
    drillOptions: ['not delicious in heart', 'reluctant', 'bad hearted', 'heavy in liver'],
    correctAnswer: 'reluctant',
    drillExplanation: '"Reluctant" (enggan/segan) adalah diksi on-point untuk mengekspresikan perasaan tidak enak hati atau ragu untuk bertindak.'
  },
  {
    id: 'l1-03',
    indonesianPhrase: 'Masuk akal / Beralasan kuat',
    literalClunkyEnglish: 'Enter to the brain / Can go into logic',
    onPointNativeEnglish: 'Makes sense / Holds water / Stands to reason',
    registerCategory: 'Retorika Formal & Akademik',
    linguisticExplanation: 'Bahasa Inggris tidak menggunakan kata kerja "masuk" (enter) untuk logika. Gunakan verba kolokasi "makes sense" (informal/standar) atau idiom akademik "holds water" (tahan uji argumen) dan "stands to reason" (sangat logis).',
    exampleSentence: 'Upon closer empirical scrutiny, the author\'s economic hypothesis simply does not hold water.',
    drillQuestion: 'Given the overwhelming telemetry data, it _____ that anthropogenic emissions have accelerated global warming.',
    drillOptions: ['enters into logic', 'stands to reason', 'goes to the brain', 'fits the mind'],
    correctAnswer: 'stands to reason',
    drillExplanation: '"It stands to reason that..." adalah frasa formal akademik penutur asli untuk menyatakan sesuatu yang sangat masuk akal dan tak terbantahkan.'
  },
  {
    id: 'l1-04',
    indonesianPhrase: 'Ketinggalan zaman / Jadul / Usang',
    literalClunkyEnglish: 'Late with time / Behind the era / Old model',
    onPointNativeEnglish: 'Outdated / Obsolete / Antiquated / Passé',
    registerCategory: 'Retorika Formal & Akademik',
    linguisticExplanation: 'Menerjemahkan "ketinggalan zaman" menjadi "behind the era" terdengar sangat canggung. Diksi formal on-point dalam IELTS/TOEFL adalah "outdated" (tidak mutakhir) atau "obsolete" (sudah tidak terpakai karena ada pengganti yang lebih modern).',
    exampleSentence: 'The legacy mainframe architecture became obsolete after the institution migrated to decentralized cloud servers.',
    drillQuestion: 'The engineering committee recommended replacing the _____ safety protocols with digitized real-time sensors.',
    drillOptions: ['behind time', 'obsolete', 'late era', 'old modeled'],
    correctAnswer: 'obsolete',
    drillExplanation: '"Obsolete" adalah diksi akademik bernilai tinggi (Band 8.5+) untuk teknologi atau sistem yang sudah usang dan tertinggal zaman.'
  },
  {
    id: 'l1-05',
    indonesianPhrase: 'Makan korban / Merenggut nyawa',
    literalClunkyEnglish: 'Eat victims / Take victim',
    onPointNativeEnglish: 'Claim lives / Result in casualties / Take a heavy toll',
    registerCategory: 'Retorika Formal & Akademik',
    linguisticExplanation: 'Bencana atau wabah dalam bahasa Inggris tidak "memakan" (eat) korban. Kolokasi baku jurnalistik dan akademik penutur asli adalah "claim lives" atau "result in casualties".',
    exampleSentence: 'The category-5 hurricane claimed twenty lives and caused billions of dollars in infrastructural damage.',
    drillQuestion: 'The catastrophic earthquake _____ more than five hundred lives in the coastal province.',
    drillOptions: ['ate', 'claimed', 'consumed victims of', 'swallowed'],
    correctAnswer: 'claimed',
    drillExplanation: 'Kolokasi baku penutur asli untuk bencana alam yang merenggut nyawa adalah "claim lives".'
  },
  {
    id: 'l1-06',
    indonesianPhrase: 'Buka puasa (mengakhiri ibadah puasa saat matahari terbenam)',
    literalClunkyEnglish: 'Open fast / Open fasting',
    onPointNativeEnglish: 'Break the fast / Iftar meal',
    registerCategory: 'Ekspresi Sosial & Percakapan',
    linguisticExplanation: 'Kata "buka" di sini bukan membuka pintu (open). Istilah baku penutur bahasa Inggris sedunia untuk mengakhiri puasa adalah "break the fast" (yang juga merupakan asal kata "breakfast").',
    exampleSentence: 'Families gathered at sunset to break their fast with dates and traditional tea.',
    drillQuestion: 'Muslims around the world _____ their fast immediately after the evening call to prayer.',
    drillOptions: ['open', 'break', 'unlock', 'unfasten'],
    correctAnswer: 'break',
    drillExplanation: 'Frasa baku yang tepat adalah "break one\'s fast".'
  },
  {
    id: 'l1-07',
    indonesianPhrase: 'Cari gara-gara / Mencari masalah yang tidak perlu',
    literalClunkyEnglish: 'Looking for reasons / Search for problem',
    onPointNativeEnglish: 'Asking for trouble / Picking a fight / Courting disaster',
    registerCategory: 'Idiom Sehari-hari',
    linguisticExplanation: 'Penutur asli menggunakan ungkapan idiomatik "asking for trouble" (mengundang masalah) atau "courting disaster" (memancing malapetaka formal), bukan menerjemahkan kata "cari" menjadi "search/look".',
    exampleSentence: 'Operating heavy laboratory machinery without protective eyewear is simply asking for trouble.',
    drillQuestion: 'Ignoring the mandatory safety alarms during a chemical leak is definitely _____ for trouble.',
    drillOptions: ['looking', 'searching', 'asking', 'demanding'],
    correctAnswer: 'asking',
    drillExplanation: 'Idiom penutur asli adalah "asking for trouble".'
  },
  {
    id: 'l1-08',
    indonesianPhrase: 'Tutup mata terhadap penyimpangan / Pura-pura tidak tahu',
    literalClunkyEnglish: 'Close eyes to the problem / Shut my eye',
    onPointNativeEnglish: 'Turn a blind eye / Overlook / Gloss over',
    registerCategory: 'Retorika Formal & Akademik',
    linguisticExplanation: 'Idiom baku bahasa Inggris untuk pura-pura tidak melihat kejahatan/pelanggaran adalah "turn a blind eye (to something)" atau verba formal "overlook".',
    exampleSentence: 'The regulatory agency was heavily criticized for turning a blind eye to corporate tax evasion.',
    drillQuestion: 'The audit revealed that previous managers had chosen to _____ a blind eye to fraudulent accounting.',
    drillOptions: ['make', 'turn', 'close', 'give'],
    correctAnswer: 'turn',
    drillExplanation: 'Idiom formal baku adalah "turn a blind eye to something".'
  },
  {
    id: 'l1-09',
    indonesianPhrase: 'Main tangan / Menggunakan kekerasan fisik',
    literalClunkyEnglish: 'Play hands / Use hand',
    onPointNativeEnglish: 'Resort to physical violence / Get physical',
    registerCategory: 'Ekspresi Sosial & Percakapan',
    linguisticExplanation: '"Main tangan" bukan "play hands". Gunakan frasa formal "resort to violence" (beralih ke tindak kekerasan) atau frasa kolokial "get physical".',
    exampleSentence: 'Security guards intervened swiftly before the heated argument could turn into physical violence.',
    drillQuestion: 'Professional diplomats must resolve territorial disputes through dialogue rather than _____ to military conflict.',
    drillOptions: ['playing hands', 'resorting', 'using hands', 'handing over'],
    correctAnswer: 'resorting',
    drillExplanation: '"Resort to [something]" adalah ungkapan baku penutur asli untuk tindakan beralih ke jalan kekerasan.'
  },
  {
    id: 'l1-10',
    indonesianPhrase: 'Ambil kesimpulan / Menarik kesimpulan logis',
    literalClunkyEnglish: 'Take a conclusion / Pick conclusion',
    onPointNativeEnglish: 'Draw a conclusion / Reach a conclusion / Deduce',
    registerCategory: 'Retorika Formal & Akademik',
    linguisticExplanation: 'Kesalahan terjemahan paling sering dalam esai IELTS! Bahasa Inggris tidak pernah memakai "take a conclusion". Verba kolokasi wajib adalah "DRAW a conclusion" atau "REACH a conclusion".',
    exampleSentence: 'Based on the longitudinal clinical trial data, researchers were able to draw a definitive conclusion.',
    drillQuestion: 'It is premature to _____ any definitive conclusions before all peer reviews are finalized.',
    drillOptions: ['take', 'pick', 'draw', 'catch'],
    correctAnswer: 'draw',
    drillExplanation: '"Draw a conclusion" adalah kolokasi akademik mutlak.'
  },
  {
    id: 'l1-11',
    indonesianPhrase: 'Banting tulang / Bekerja mati-matian tanpa henti',
    literalClunkyEnglish: 'Slamming bones / Throw bones',
    onPointNativeEnglish: 'Work one\'s fingers to the bone / Toil / Sweat blood',
    registerCategory: 'Idiom Sehari-hari',
    linguisticExplanation: 'Metafora "tulang" tidak diterjemahkan literal. Penutur asli mengatakan "work one\'s fingers to the bone" (bekerja hingga jari lecet ke tulang) atau verba "toil".',
    exampleSentence: 'Immigrant parents often worked their fingers to the bone to fund their children\'s university tuition.',
    drillQuestion: 'She worked her fingers to the _____ to establish her biotech startup from the ground up.',
    drillOptions: ['bone', 'muscle', 'hand', 'skin'],
    correctAnswer: 'bone',
    drillExplanation: 'Idiom asli bahasa Inggris adalah "work one\'s fingers to the bone".'
  },
  {
    id: 'l1-12',
    indonesianPhrase: 'Kena batunya / Menuai akibat buruk dari ulah sendiri',
    literalClunkyEnglish: 'Hit the stone / Get the rock',
    onPointNativeEnglish: 'Get one\'s comeuppance / Face the music / Suffer the consequences',
    registerCategory: 'Idiom Sehari-hari',
    linguisticExplanation: '"Kena batunya" adalah idiom Indonesia yang memiliki padanan bahasa Inggris "get one\'s comeuppance" (menerima ganjaran setimpal) atau "face the music" (menghadapi kenyataan pahit atas kesalahan sendiri).',
    exampleSentence: 'After years of unethical insider trading, the corrupt financier finally got his comeuppance in federal court.',
    drillQuestion: 'The fraudulent executive had to face the _____ when the forensic financial audit was released.',
    drillOptions: ['stone', 'music', 'rock', 'mirror'],
    correctAnswer: 'music',
    drillExplanation: 'Idiom penutur asli untuk menghadapi hukuman/kena batunya adalah "face the music".'
  }
];

