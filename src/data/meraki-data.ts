export interface TopicSection {
  stepNumber: string;
  title?: string;
  explanation: string;
  formula?: string;
  examples?: Array<{
    sentence: string;
    translation: string;
    note?: string;
    isCorrect?: boolean;
  }>;
  contrastiveAnalysis?: {
    incorrectSentence: string;
    correctSentence: string;
    linguisticReason: string;
  };
  commonPitfall?: string;
}

export interface PracticeQuestion {
  id: string;
  category: 'Word Classes' | 'Sentence Architecture' | 'Tenses Logic' | 'Complex Structures' | 'Exam Readiness';
  difficulty: 'Dasar' | 'Menengah' | 'Lanjutan';
  question: string;
  context?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  ruleReference: string;
}

export interface ErrorCorrectionTask {
  id: string;
  flawedSentence: string;
  flawLocation: string;
  correctedSentence: string;
  linguisticExplanation: string;
  acceptedVariations?: string[];
}

export interface ExamBridge {
  ieltsApplication: string;
  toeflApplication: string;
  scoringImpact: string;
}

export interface DecisionTreeNode {
  step: string;
  question: string;
  branches: Array<{
    condition: string;
    outcome: string;
    rule: string;
  }>;
}

export interface RegisterLadder {
  informal: string;
  standard: string;
  academicHigh: string;
  analysis: string;
}

export interface LearningTopic {
  id: string;
  stageNumber: number;
  stageName: string;
  categoryKey: 'Word Classes' | 'Sentence Architecture' | 'Tenses Logic' | 'Complex Structures' | 'Exam Readiness';
  moduleNumber: number;
  title: string;
  subtitle: string;
  levelBadge: string;
  estimatedMinutes: number;
  prerequisite?: string;
  mentalModelIntro: string;
  coreConceptSummary: string;
  decisionTree?: DecisionTreeNode[];
  registerLadder?: RegisterLadder;
  canDoChecklist?: string[];
  pocketAxioms?: string[];
  sections: TopicSection[];
  examBridge: ExamBridge;
  goldenRules: string[];
  questions: PracticeQuestion[];
  errorCorrectionTasks: ErrorCorrectionTask[];
}

export const MERAKI_CURRICULUM: LearningTopic[] = [
  // =========================================================================
  // TAHAP 1: FONDASI MUTLAK & ARSITEKTUR SUBJEK-PREDIKAT INTI
  // =========================================================================
  {
    id: 'modul-01-subject-pronouns',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Arsitektur Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 1,
    title: 'Subjek Inti & Sistem Pronoun: I, You, They, We, He, She, It',
    subtitle: 'Mengenali aktor pembicaraan, pembagian orang ke-1/2/3, dan kasus Subject vs Object',
    levelBadge: 'Fondasi Mutlak · Modul 01',
    estimatedMinutes: 20,
    mentalModelIntro: 'Setiap kalimat bahasa Inggris wajib memiliki Subjek yang jelas. Bahasa Inggris tidak mengenal penanggalan subjek (pro-drop) seperti bahasa Indonesia. Anda tidak bisa mengatakan "Is raining", melainkan harus "It is raining". Pronoun adalah kata ganti ringkas yang menggantikan nomina agar tidak terjadi repetisi yang melelahkan.',
    coreConceptSummary: 'Subjek terbagi atas 3 sudut pandang (1st Person: I/We; 2nd Person: You; 3rd Person: He/She/It/They). Bentuk kasus subjek (Subject Pronoun) hanya boleh menduduki posisi pelaku sebelum kata kerja, sedangkan Object Pronoun (me, him, her, us, them) menduduki posisi setelah kata kerja atau preposisi.',
    decisionTree: [
      {
        step: 'Langkah 1: Identifikasi Posisi Pronoun',
        question: 'Apakah kata ganti berada sebelum Main Verb (sebagai pelaku) atau setelah Verb/Preposisi (sebagai penerima)?',
        branches: [
          { condition: 'Sebelum Verb (Pelaku)', outcome: 'Gunakan Subject Pronoun (I, You, They, We, He, She, It)', rule: 'Contoh: She analyzes the data.' },
          { condition: 'Setelah Verb / Preposisi (Penerima)', outcome: 'Gunakan Object Pronoun (me, you, them, us, him, her, it)', rule: 'Contoh: The professor called her; send it to us.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'Me and John went to the laboratory.',
      standard: 'John and I went to the laboratory.',
      academicHigh: 'The primary investigator and I conducted the laboratory analysis.',
      analysis: 'Dalam ragam formal/akademik, saat menggabungkan diri sendiri dengan orang lain pada posisi subjek, selalu sebutkan pihak lain terlebih dahulu dan gunakan pronoun "I" (bukan "Me").'
    },
    canDoChecklist: [
      'Mampu membedakan orang ke-1, 2, dan 3 tunggal maupun jamak secara instan.',
      'Tidak pernah lagi menggunakan Object Pronoun di posisi subjek (e.g. *Her is a doctor ❌*).',
      'Mampu menyusun frasa subjek majemuk secara sopan dan baku (e.g. *My colleague and I*).'
    ],
    pocketAxioms: [
      'Aksioma Subjek: Tidak ada kalimat tanpa subjek dalam bahasa Inggris (kecuali kalimat perintah/imperative).',
      'Aksioma Urutan Kesopanan: Tempatkan orang lain sebelum "I" pada subjek gabungan (*Dr. Vance and I*).'
    ],
    sections: [
      {
        stepNumber: '01',
        title: 'Tabel Taksonomi Kasus Pronoun',
        explanation: 'Bahasa Inggris menuntut penyesuaian bentuk kata ganti berdasarkan fungsinya dalam struktur sintaksis kalimat.',
        formula: 'Subject Pronoun + Verb + Object Pronoun / Preposition + Object Pronoun',
        examples: [
          { sentence: 'They evaluated the methodology carefully.', translation: 'Mereka mengevaluasi metodologi tersebut dengan teliti.', note: 'They = Subject Pronoun' },
          { sentence: 'The director assigned the research grant to them.', translation: 'Direktur memberikan dana penelitian tersebut kepada mereka.', note: 'them = Object Pronoun setelah preposisi "to"' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'Me and him investigated the chemical sample.',
          correctSentence: 'He and I investigated the chemical sample.',
          linguisticReason: '"Me" dan "him" adalah Object Pronouns. Posisi subjek wajib diisi Subject Pronouns "He and I".'
        }
      },
      {
        stepNumber: '02',
        title: 'Dummy Subject "It" dan "There"',
        explanation: 'Ketika kalimat membahas cuaca, waktu, atau eksistensi yang tidak memiliki pelaku biologis, bahasa Inggris menggunakan Dummy Subject "It" atau "There".',
        formula: 'It + is/was + Adjective/Noun | There + is/are + Noun Phrase',
        examples: [
          { sentence: 'It is essential to verify the empirical measurements.', translation: 'Sangat penting untuk memverifikasi pengukuran empiris.', note: 'It bertindak sebagai subjek formal gramatikal.' },
          { sentence: 'There are three anomalies in the survey telemetry.', translation: 'Ada tiga kejanggalan dalam telemetri survei.', note: 'There mengenalkan keberadaan 3 anomali.' }
        ],
        commonPitfall: 'Menerjemahkan "Sangat dingin di luar" menjadi "*Is very cold outside*" tanpa menyematkan dummy subject "It".'
      }
    ],
    examBridge: {
      ieltsApplication: 'Penataan referensi pronoun yang presisi (pronoun referencing) adalah syarat mutlak untuk meraih skor 8.0+ pada kriteria Coherence & Cohesion di Writing Task 2.',
      toeflApplication: 'Section Reading TOEFL iBT secara berkala menguji pertanyaan "The word \'they\' in paragraph 2 refers to...".',
      scoringImpact: 'Mencegah ambiguitas rujukan pronoun menghindari pemotongan skor koherensi hingga 1.0 band.'
    },
    goldenRules: [
      'Gunakan Subject Pronoun (I, He, She, We, They) murni hanya sebelum kata kerja.',
      'Gunakan Object Pronoun (Me, Him, Her, Us, Them) setelah kata kerja atau setelah preposisi (between you and me).',
      'Jangan pernah meninggalkan kalimat tanpa subjek (hindari *Is obvious that... ❌, gunakan It is obvious that... ✔*).'
    ],
    questions: [
      {
        id: 'q-m01-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: '_____ and Dr. Aris analyzed the epidemiological data before submitting the report.',
        options: ['She', 'Her', 'Hers', 'Herself'],
        correctAnswer: 'She',
        explanation: 'Posisi sebelum kata kerja "analyzed" adalah posisi Subjek majemuk, sehingga membutuhkan Subject Pronoun "She".',
        ruleReference: 'Modul 01: Subject Pronouns'
      },
      {
        id: 'q-m01-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The committee distributed the finalized research guidelines to Dr. Vance and _____.',
        options: ['I', 'me', 'myself', 'mine'],
        correctAnswer: 'me',
        explanation: 'Setelah preposisi "to", seluruh kata ganti yang menyusul harus berstatus Object Pronoun ("to Dr. Vance and me").',
        ruleReference: 'Modul 01: Object Pronouns after Prepositions'
      },
      {
        id: 'q-m01-3',
        category: 'Word Classes',
        difficulty: 'Lanjutan',
        question: 'Between you and _____, the proposed environmental policy requires substantial restructuring.',
        options: ['I', 'me', 'he', 'we'],
        correctAnswer: 'me',
        explanation: '"Between" adalah preposisi. Preposisi mewajibkan Object Pronoun ("Between you and me", bukan "Between you and I").',
        ruleReference: 'Modul 01: Prepositional Objects'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m01-1',
        flawedSentence: 'Me and my supervisor discussed the laboratory findings yesterday.',
        flawLocation: 'Me',
        correctedSentence: 'My supervisor and I discussed the laboratory findings yesterday.',
        linguisticExplanation: '"Me" adalah Object Pronoun yang tidak sah menduduki posisi subjek. Bentuk baku adalah menempatkan orang lain terlebih dahulu diikuti "I".'
      },
      {
        id: 'ec-m01-2',
        flawedSentence: 'Is crucial to conduct clinical trials before approving the vaccine.',
        flawLocation: 'Is crucial',
        correctedSentence: 'It is crucial to conduct clinical trials before approving the vaccine.',
        linguisticExplanation: 'Bahasa Inggris adalah bahasa non-pro-drop. Kalimat wajib diawali dummy subject "It" (*It is crucial...*).'
      }
    ]
  },

  {
    id: 'modul-02-to-be-foundations',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Arsitektur Subjek-Predikat Inti',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 2,
    title: 'Fondasi To Be (Am, Is, Are, Was, Were, Been, Being) & Kalimat Nominal vs Verbal',
    subtitle: 'Mengenali esensi predikat To Be, Subject Complement, dan pemisahan mutlak kalimat verbal vs nominal',
    levelBadge: 'Fondasi Mutlak · Modul 02',
    estimatedMinutes: 25,
    mentalModelIntro: 'To Be adalah kata kerja paling fleksibel sekaligus paling sering disalahgunakan dalam bahasa Inggris. To Be bertindak sebagai "tanda sama dengan" (=) yang menghubungkan subjek dengan identitasnya (Noun) atau kondisinya (Adjective/Preposition). Kesalahan terbesar pembelajar Indonesia adalah menempelkan To Be secara serampangan pada kata kerja aksi (*He is work ❌*).',
    coreConceptSummary: 'Kalimat bahasa Inggris terbagi dua secara mutlak: (1) Kalimat Nominal (tanpa kata kerja aksi, wajib berpredikat To Be: S + To Be + Complement), dan (2) Kalimat Verbal (menggunakan kata kerja aksi murni: S + Verb). Jangan pernah mencampuradukkan keduanya dalam Simple Present/Past dasar.',
    decisionTree: [
      {
        step: 'Langkah 1: Tentukan Keberadaan Kata Kerja Aksi',
        question: 'Apakah predikat kalimat menyatakan tindakan/aksi fisik/mental (e.g. study, write, analyze) atau sekadar status/kondisi/posisi (e.g. ready, researcher, in lab)?',
        branches: [
          { condition: 'Aksi / Tindakan (Verbal)', outcome: 'Gunakan Kata Kerja Murni langsung (S + Verb). JANGAN pakai To Be!', rule: 'Contoh: He works at Oxford (BUKAN: He is work).' },
          { condition: 'Status / Sifat / Posisi (Nominal)', outcome: 'Wajib gunakan bentuk To Be yang sesuai subjek dan tenses (S + To Be + Complement).', rule: 'Contoh: He is ready; They were in the laboratory.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'The project is in progress now.',
      standard: 'The project is currently underway.',
      academicHigh: 'The experimental protocol is currently operative and under rigorous observation.',
      analysis: 'Dalam ragam akademik tinggi, To Be menghubungkan subjek dengan Subject Complement berbobot formal tinggi.'
    },
    canDoChecklist: [
      'Mampu memilih bentuk To Be yang tepat untuk 7 subjek dasar di masa kini (Am, Is, Are) dan lampau (Was, Were).',
      'Menghilangkan 100% kesalahan meletakkan To Be sebelum Base Verb (*She is agree ❌ -> She agrees ✔*).',
      'Mengenali peran To Be sebagai Auxiliary pada Continuous Tense dan Passive Voice.'
    ],
    pocketAxioms: [
      'Hukum Pemisahan Verbal-Nominal: Jika ada kata kerja aksi dasar, To Be dilarang hadir (*He reads, BUKAN He is read*).',
      'Hukum Subject Complement: Kata setelah To Be menerangkan kondisi atau identitas subjek.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: '7 Bentuk To Be & Pemetaan Subjek',
        explanation: 'Setiap bentuk To Be terikat secara kaku dengan dimensi waktu dan jumlah subjek.',
        formula: 'Present: I am | He/She/It is | You/We/They are || Past: I/He/She/It was | You/We/They were',
        examples: [
          { sentence: 'The methodology is robust.', translation: 'Metodologi tersebut kokoh/andal.', note: 'is + Adjective (Nominal)' },
          { sentence: 'The researchers were in Geneva last week.', translation: 'Para peneliti berada di Jenewa minggu lalu.', note: 'were + Prepositional phrase (Nominal Past)' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The scientist is agree with the hypothesis.',
          correctSentence: 'The scientist agrees with the hypothesis.',
          linguisticReason: '"Agree" adalah kata kerja aksi (Verb). Maka tidak boleh disandingkan dengan "is".'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Kesalahan kalimat nominal (*They are agree*, *He is work*) langsung mendegradasi skor Grammatical Range & Accuracy di bawah Band 6.0.',
      toeflApplication: 'Structure & Written Expression TOEFL secara rutin menjebak peserta dengan kalimat yang kehilangan To Be atau kelebihan To Be liar.',
      scoringImpact: 'Menjamin kebersihan struktur predikat fondasi mutlak.'
    },
    goldenRules: [
      'Gunakan To Be hanya bila kalimat diikuti Adjective, Noun, atau Prepositional Phrase pada kalimat sederhana.',
      'Bila ada kata kerja tindakan (agree, believe, study, work), gunakan verb tersebut langsung tanpa To Be.',
      'Gunakan To Be + Verb-ing hanya bila aksi sedang berlangsung (Continuous Aspect).'
    ],
    questions: [
      {
        id: 'q-m02-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'The statistical conclusions _____ consistent with previous empirical findings.',
        options: ['is', 'are', 'be', 'being'],
        correctAnswer: 'are',
        explanation: 'Subjek "The statistical conclusions" adalah jamak (plural), sehingga membutuhkan To Be jamak "are".',
        ruleReference: 'Modul 02: Plural Subject with To Be'
      },
      {
        id: 'q-m02-2',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Many scholars in the department _____ with the proposed ethical framework.',
        options: ['are agree', 'agree', 'is agreeing', 'are agreed'],
        correctAnswer: 'agree',
        explanation: '"Agree" adalah kata kerja statif/verbal. Kalimat verbal murni tidak memerlukan To Be "are". Jawaban benar adalah "agree".',
        ruleReference: 'Modul 02: Verbal vs Nominal Distinction'
      },
      {
        id: 'q-m02-3',
        category: 'Sentence Architecture',
        difficulty: 'Lanjutan',
        question: 'Neither the lead investigator nor his assistants _____ present during the initial equipment calibration.',
        options: ['was', 'were', 'is', 'are'],
        correctAnswer: 'were',
        explanation: 'Pada korelasi "Neither... nor...", To Be lampau menyesuaikan subjek terdekat yaitu "his assistants" (jamak) -> "were".',
        ruleReference: 'Modul 02: Subject-Verb Proximity Rule'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m02-1',
        flawedSentence: 'The senior engineer is understand the complexities of the quantum algorithm.',
        flawLocation: 'is understand',
        correctedSentence: 'The senior engineer understands the complexities of the quantum algorithm.',
        linguisticExplanation: '"Understand" adalah kata kerja mental. Dilarang menyematkan To Be "is" di depan kata kerja dasar.'
      }
    ]
  },

  {
    id: 'modul-03-have-has-had-mastery',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Arsitektur Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 3,
    title: 'Fondasi Auxiliary Utama: HAVE, HAS, HAD (Kepemilikan, Aspek Selesai, dan Keharusan)',
    subtitle: 'Membedakan HAVE sebagai Kata Kerja Utama (Possession), Auxiliary (Perfect Aspect), dan Modalitas (Obligation)',
    levelBadge: 'Fondasi Mutlak · Modul 03',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata kerja HAVE memiliki 3 fungsi yang sama sekali berbeda dalam bahasa Inggris. Pemahaman yang keliru akan membuat Anda bingung saat menyusun kalimat lampau atau kalimat tanya. Pelajari kapan HAVE bertindak sebagai kata kerja kepemilikan biasa, kapan bertindak sebagai kata kerja bantu aspek selesai (Perfect), dan kapan menyatakan kewajiban (Have to).',
    coreConceptSummary: '1. Kepemilikan (Possession): S + have/has/had + Noun. 2. Auxiliary Perfect Aspect: S + have/has/had + Verb 3 (Past Participle). 3. Keharusan (Obligation): S + have/has/had to + Bare Infinitive. Pembedaan subjek: I/You/They/We menggunakan HAVE; He/She/It menggunakan HAS; Bentuk lampau semua subjek menggunakan HAD.',
    decisionTree: [
      {
        step: 'Langkah 1: Analisis Kata Setelah Have/Has/Had',
        question: 'Apakah kata setelah Have/Has/Had berupa Noun, Verb 3 (Past Participle), atau "to + Verb"?',
        branches: [
          { condition: 'Noun / Benda', outcome: 'Fungsi Kepemilikan (Possession)', rule: 'Contoh: The university has extensive digital archives.' },
          { condition: 'Verb 3 (Past Participle)', outcome: 'Fungsi Auxiliary (Perfect Aspect)', rule: 'Contoh: The researchers have published their results.' },
          { condition: 'to + Verb 1', outcome: 'Fungsi Modalitas / Keharusan (Obligation)', rule: 'Contoh: All applicants have to submit official transcripts.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'We have got a lot of data to check.',
      standard: 'We have substantial data to examine.',
      academicHigh: 'The laboratory has accumulated an extensive repository of empirical data.',
      analysis: 'Dalam penulisan formal akademik, hindari bentuk kolokial "have got", gunakan "have" atau padanan leksikal padat seperti "accumulated" / "possesses".'
    },
    canDoChecklist: [
      'Mampu menentukan secara akurat penggunaan Have vs Has berdasarkan subjek kalimat.',
      'Mampu membedakan secara instan kapan Have berstatus kata kerja utama vs kata kerja bantu.',
      'Tidak pernah salah membentuk negasi untuk kepemilikan (*He hasn\'t a car ❌ -> He does not have a car ✔*).'
    ],
    pocketAxioms: [
      'Aksioma Perfect: HAVE/HAS/HAD sebagai auxiliary WAJIB diikuti Verb 3 (Past Participle).',
      'Aksioma Negasi Kepemilikan: Pada Simple Present, buat negasi dengan DO/DOES NOT HAVE, bukan have not.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: '3 Pilar Peran HAVE, HAS, dan HAD',
        explanation: 'Pembedaan peran menentukan struktur kalimat tanya dan kalimat negatifnya.',
        formula: 'Possession: S + have/has + Noun | Perfect: S + have/has/had + V3 | Obligation: S + have/has/had to + V1',
        examples: [
          { sentence: 'The team has a breakthrough hypothesis.', translation: 'Tim tersebut memiliki hipotesis terobosan.', note: 'Possession' },
          { sentence: 'The team has verified the breakthrough hypothesis.', translation: 'Tim tersebut telah memverifikasi hipotesis terobosan.', note: 'Perfect Aspect (Auxiliary + V3)' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'She has already submit her doctoral dissertation.',
          correctSentence: 'She has already submitted her doctoral dissertation.',
          linguisticReason: 'Auxiliary "has" pada aspek perfect wajib diikuti Verb 3 (Past Participle: "submitted"), bukan kata kerja dasar "submit".'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Present Perfect (*Governments have implemented...*) dan Past Perfect (*By 2010, emissions had doubled...*) krusial pada IELTS Writing Task 1 & 2.',
      toeflApplication: 'TOEFL Structure menguji konsistensi urutan waktu lampau Past Perfect (aksi yang terjadi sebelum peristiwa lampau lainnya).',
      scoringImpact: 'Meningkatkan skor tenses complexity dan chronological precision.'
    },
    goldenRules: [
      'Subjek Tunggal (He, She, It, The report) selalu menggunakan HAS (Present) atau HAD (Past).',
      'Subjek Jamak & I/You (I, You, We, They, The scholars) menggunakan HAVE (Present) atau HAD (Past).',
      'Setelah have/has/had sebagai kata kerja bantu, kata kerja berikutnya WAJIB berbentuk Verb 3.'
    ],
    questions: [
      {
        id: 'q-m03-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The research committee _____ already approved the new biological safety protocols.',
        options: ['have', 'has', 'having', 'is'],
        correctAnswer: 'has',
        explanation: 'Subjek "The research committee" bertindak sebagai entitas kolektif tunggal dalam konteks formal ini -> "has approved".',
        ruleReference: 'Modul 03: Singular Subject with Has'
      },
      {
        id: 'q-m03-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'By the time the audit commenced, the accountants _____ all discrepancies in the ledger.',
        options: ['have resolved', 'had resolved', 'has resolved', 'resolving'],
        correctAnswer: 'had resolved',
        explanation: 'Peristiwa penyelesaian terjadi SEBELUM audit dimulai di masa lampau (Past Perfect) -> "had resolved".',
        ruleReference: 'Modul 03: Past Perfect Had + V3'
      },
      {
        id: 'q-m03-3',
        category: 'Word Classes',
        difficulty: 'Lanjutan',
        question: 'Neither the laboratory director nor the field technicians _____ access to the encrypted database.',
        options: ['has', 'have', 'having', 'is having'],
        correctAnswer: 'have',
        explanation: 'Pada subjek korelasi "Neither... nor...", kata kerja mengikuti subjek terdekat yaitu "the field technicians" (jamak) -> "have".',
        ruleReference: 'Modul 03: Correlative Subject Agreement with Have'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m03-1',
        flawedSentence: 'The clinical team have discovered an unexpected correlation in the data.',
        flawLocation: 'have discovered',
        correctedSentence: 'The clinical team has discovered an unexpected correlation in the data.',
        linguisticExplanation: '"The clinical team" adalah subjek kolektif tunggal, sehingga harus dipasangkan dengan "has discovered".'
      }
    ]
  },

  {
    id: 'modul-04-do-does-did-operator',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Arsitektur Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 4,
    title: 'Fondasi Auxiliary Operator: DO, DOES, DID (Negasi, Tanya, dan Emfasis)',
    subtitle: 'Mekanisme kata kerja bantu pembentuk kalimat negatif, interogatif, penekanan, dan hukum mutlak Bare Infinitive',
    levelBadge: 'Fondasi Mutlak · Modul 04',
    estimatedMinutes: 20,
    mentalModelIntro: 'Dalam bahasa Inggris, kata kerja aksi biasa (seperti work, study, write) tidak bisa langsung ditempeli kata "not" atau dibalik posisinya untuk membuat pertanyaan (*He works not ❌, Works he? ❌*). Mereka membutuhkan "mesin operator pembantu" yaitu DO, DOES (Present), atau DID (Past). Begitu operator ini muncul, kata kerja utama kembali ke bentuk aslinya (Bare Infinitive).',
    coreConceptSummary: 'DO (I, You, They, We), DOES (He, She, It), DID (Semua subjek di masa lampau). Hukum Mutlak: Setelah DO / DOES / DID / DON\'T / DOESN\'T / DIDN\'T, kata kerja yang menyusul WAJIB berbentuk kata kerja dasar murni (Verb 1 / Bare Infinitive) tanpa akhiran -s, -es, atau -ed.',
    decisionTree: [
      {
        step: 'Langkah 1: Identifikasi Kehadiran Operator Do/Does/Did',
        question: 'Apakah kalimat menggunakan Do, Does, Did, Don\'t, Doesn\'t, atau Didn\'t?',
        branches: [
          { condition: 'Ya, operator hadir', outcome: 'Ubah Main Verb kembali ke BARE INFINITIVE murni!', rule: 'Contoh: He doesn\'t work (BUKAN: He doesn\'t works).' },
          { condition: 'Tidak, kalimat positif biasa', outcome: 'Sesuaikan verb dengan subjek dan tenses.', rule: 'Contoh: He works (Present); He worked (Past).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'He doesn\'t know anything about it.',
      standard: 'He does not possess relevant knowledge on the subject.',
      academicHigh: 'The preliminary survey does not yield statistically meaningful correlations.',
      analysis: 'Dalam ragam formal/akademis, hindari singkatan (contractions) seperti "doesn\'t", tulis secara utuh "does not".'
    },
    canDoChecklist: [
      'Mampu membentuk kalimat negatif dan tanya pada Simple Present dan Simple Past dengan sempurna.',
      'Tidak pernah lagi menambahkan akhiran -s/-es setelah kata "does not" (*He does not works ❌ -> He does not work ✔*).',
      'Mampu menggunakan Do/Does/Did untuk memberikan penekanan emfatik akademis (*The data does show a correlation*).'
    ],
    pocketAxioms: [
      'Hukum Bare Infinitive: DO/DOES/DID menyedot semua imbuhan tenses; kata kerja setelahnya kembali telanjang (V1 murni).',
      'Hukum Formal Akademik: Tulis utuh "do not", "does not", "did not" tanpa disingkat.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: 'Mekanisme Operator & Bare Infinitive',
        explanation: 'Operator memikul beban gramatikal tenses dan kesesuaian orang ketiga tunggal.',
        formula: 'Negasi: S + do/does/did + NOT + Verb 1 (Bare Infinitive) | Tanya: Do/Does/Did + S + Verb 1?',
        examples: [
          { sentence: 'The experiment does not require radioactive reagents.', translation: 'Eksperimen tersebut tidak memerlukan reagen radioaktif.', note: 'does not + require (V1 murni)' },
          { sentence: 'Did the audit team uncover any financial anomalies?', translation: 'Apakah tim audit menemukan kejanggalan finansial?', note: 'Did + team + uncover (V1 murni)' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The patient did not responded to the initial treatment.',
          correctSentence: 'The patient did not respond to the initial treatment.',
          linguisticReason: 'Karena "did not" sudah menunjukkan masa lampau, kata kerja berikutnya wajib kembali ke bentuk dasar "respond" (bukan "responded").'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Menjaga akurasi kalimat negatif tanpa "double marking" (*did not showed ❌*) menjamin nilai akurasi gramatikal tinggi.',
      toeflApplication: 'TOEFL Structure sering menguji kalimat inversi negatif (*Rarely did the committee approve...*).',
      scoringImpact: 'Mengeliminasi kesalahan elementer yang merusak impresi penguji.'
    },
    goldenRules: [
      'Setelah do, does, did (atau bentuk negatifnya), kata kerja SELALU kembali ke bentuk pertama (Bare Infinitive).',
      'Gunakan "does" hanya untuk subjek tunggal orang ketiga (He, She, It, The system) pada masa kini.',
      'Gunakan "did" untuk semua subjek tanpa terkecuali pada masa lampau.'
    ],
    questions: [
      {
        id: 'q-m04-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The preliminary simulation did not _____ the catastrophic structural failure.',
        options: ['predicted', 'predicts', 'predict', 'predicting'],
        correctAnswer: 'predict',
        explanation: 'Setelah operator lampau "did not", kata kerja wajib berbentuk dasar murni (Bare Infinitive) -> "predict".',
        ruleReference: 'Modul 04: Bare Infinitive after Did Not'
      },
      {
        id: 'q-m04-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'Why _____ the statistical model fail to account for seasonal economic volatility?',
        options: ['do', 'does', 'is', 'has'],
        correctAnswer: 'does',
        explanation: 'Subjek "the statistical model" adalah tunggal orang ketiga, dan kalimat memiliki kata kerja aksi "fail", sehingga membutuhkan operator "does".',
        ruleReference: 'Modul 04: Interrogative Operator with Singular Subject'
      },
      {
        id: 'q-m04-3',
        category: 'Word Classes',
        difficulty: 'Lanjutan',
        question: 'Although the initial hypothesis was contested, subsequent laboratory tests _____ corroborate the findings.',
        options: ['did', 'do', 'are', 'were'],
        correctAnswer: 'did',
        explanation: 'Konteks kalimat adalah masa lampau ("was contested"), sehingga penekanan emfatik menggunakan operator lampau "did corroborate".',
        ruleReference: 'Modul 04: Emphatic Past Operator'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m04-1',
        flawedSentence: 'The software update does not resolves the network latency issues.',
        flawLocation: 'does not resolves',
        correctedSentence: 'The software update does not resolve the network latency issues.',
        linguisticExplanation: 'Setelah operator "does not", kata kerja wajib kembali ke bentuk Bare Infinitive "resolve" tanpa akhiran -s.'
      }
    ]
  },

  {
    id: 'modul-05-subject-verb-agreement-fundamental',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Arsitektur Subjek-Predikat Inti',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 5,
    title: 'Subject-Verb Agreement Fundamental & Kaidah Akhiran -s/-es',
    subtitle: 'Menyelaraskan subjek tunggal vs jamak, aturan ortografi akhiran -s/-es, dan logika Simple Present',
    levelBadge: 'Fondasi Mutlak · Modul 05',
    estimatedMinutes: 25,
    mentalModelIntro: 'Subject-Verb Agreement adalah hukum paling fundamental dalam tata bahasa Inggris: Subjek tunggal membutuhkan kata kerja tunggal, dan subjek jamak membutuhkan kata kerja jamak. Pada Simple Present, kata kerja untuk subjek tunggal orang ketiga (He, She, It, a scholar) WAJIB mendapatkan akhiran -s atau -es. Kebalikannya, subjek jamak (They, We, scholars) menggunakan kata kerja polos tanpa akhiran -s.',
    coreConceptSummary: 'Subjek Tunggal (He/She/It/The student) -> Verb + -s/-es (works, studies, goes). Subjek Jamak (I/You/We/They/The students) -> Verb polos (work, study, go). Perhatikan aturan ortografi: verb berakhiran desis (-ch, -sh, -ss, -x, -zz, -o) ditambah -es (teaches, washes, fixes, goes); verb berakhiran konsonan + y berubah menjadi -ies (studies, carries).',
    decisionTree: [
      {
        step: 'Langkah 1: Cek Jumlah dan Orang Subjek',
        question: 'Apakah subjek berupa orang ketiga tunggal (He, She, It, Tunggal) dalam Simple Present Tense?',
        branches: [
          { condition: 'Ya (Tunggal: He/She/It/The author)', outcome: 'Wajib tambahkan akhiran -s/-es pada kata kerja!', rule: 'Contoh: The author emphasizes the importance of data.' },
          { condition: 'Tidak (Jamak atau I/You)', outcome: 'Gunakan kata kerja dasar polos tanpa -s/-es.', rule: 'Contoh: The authors emphasize the importance of data.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'Everyone know that air pollution is bad.',
      standard: 'Everyone knows that air pollution is hazardous.',
      academicHigh: 'Scholarly consensus affirms that atmospheric particulates present substantial public health hazards.',
      analysis: 'Kata ganti tak tentu "Everyone / Everybody" secara gramatikal berstatus TUNGGAL dan wajib menggunakan verb berakhiran -s (*knows*).'
    },
    canDoChecklist: [
      'Mampu menerapkan akhiran -s/-es pada Simple Present tanpa pernah terlupa.',
      'Memahami aturan ejaan konsonan + y -> -ies vs vokal + y -> -ys (e.g. *studies* vs *plays*).',
      'Mengenali subjek tunggal dengan kata ganti tak tentu (*Everyone, Each, Nobody*) yang menuntut verb berakhiran -s.'
    ],
    pocketAxioms: [
      'Aksioma S: Jika subjeknya tunggal, kata kerjanya yang memakai akhiran -S (He workS, They work).',
      'Aksioma Indefinite: Everyone, Somebody, Each, Neither secara gramatikal selalu TUNGGAL.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Keselarasan Tunggal vs Jamak',
        explanation: 'Kesesuaian antara subjek dan predikat adalah fondasi integritas kalimat.',
        formula: 'Singular: He/She/It + Verb-s/es | Plural: They/We/I/You + Verb (Base)',
        examples: [
          { sentence: 'The researcher conducts longitudinal field surveys.', translation: 'Peneliti tersebut melaksanakan survei lapangan longitudinal.', note: 'Single researcher -> conducts' },
          { sentence: 'The researchers conduct longitudinal field surveys.', translation: 'Para peneliti tersebut melaksanakan survei lapangan longitudinal.', note: 'Plural researchers -> conduct' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'Everyone in the research department agree with the new policy.',
          correctSentence: 'Everyone in the research department agrees with the new policy.',
          linguisticReason: '"Everyone" adalah pronoun tak tentu tunggal (singular indefinite pronoun), sehingga kata kerjanya wajib berakhiran -s ("agrees").'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Kesalahan Subject-Verb Agreement adalah kesalahan grammar paling sering yang langsung terdeteksi oleh penguji IELTS pada 30 detik pertama membaca esai.',
      toeflApplication: 'Section Written Expression TOEFL menguji S-V agreement yang dipisahkan oleh frasa sisipan preposisi yang panjang.',
      scoringImpact: 'Mencegah penurunan drastis pada kriteria akurasi gramatikal.'
    },
    goldenRules: [
      'Subjek tunggal orang ketiga (He/She/It/The machine) mewajibkan kata kerja berakhiran -s/-es pada Simple Present.',
      'Abaikan frasa preposisi sisipan di antara subjek dan kata kerja saat menentukan tunggal/jamak.',
      'Kata ganti *Each, Every, Everyone, Someone, Nobody* selalu menuntut kata kerja tunggal berakhiran -s.'
    ],
    questions: [
      {
        id: 'q-m05-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'The principal investigator meticulously _____ all raw telemetry before publication.',
        options: ['verify', 'verifies', 'verifying', 'verification'],
        correctAnswer: 'verifies',
        explanation: 'Subjek "The principal investigator" adalah tunggal orang ketiga, sehingga kata kerjanya membutuhkan akhiran -ies -> "verifies".',
        ruleReference: 'Modul 05: Third-Person Singular -ies Orthography'
      },
      {
        id: 'q-m05-2',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Each of the participating laboratories _____ a standardized calibration protocol.',
        options: ['utilize', 'utilizes', 'utilizing', 'have utilized'],
        correctAnswer: 'utilizes',
        explanation: 'Subjek intinya adalah "Each" (tunggal), bukan "laboratories" (objek preposisi "of"). Maka kata kerja wajib tunggal -> "utilizes".',
        ruleReference: 'Modul 05: Indefinite Pronoun Agreement (Each)'
      },
      {
        id: 'q-m05-3',
        category: 'Sentence Architecture',
        difficulty: 'Lanjutan',
        question: 'The implementation of stringent environmental regulations _____ carbon emissions significantly.',
        options: ['reduce', 'reduces', 'reducing', 'have reduced'],
        correctAnswer: 'reduces',
        explanation: 'Subjek sejati adalah "The implementation" (tunggal), bukan "regulations". Maka verb wajib berakhiran -s -> "reduces".',
        ruleReference: 'Modul 05: Intervening Prepositional Phrase Agreement'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m05-1',
        flawedSentence: 'The quality of the chemical reagents determine the accuracy of the experiment.',
        flawLocation: 'determine',
        correctedSentence: 'The quality of the chemical reagents determines the accuracy of the experiment.',
        linguisticExplanation: 'Subjek sejati adalah "The quality" (tunggal), bukan "reagents". Kata kerja harus diselaraskan menjadi "determines".'
      }
    ]
  },

  // =========================================================================
  // TAHAP 2: MORFOLOGI KATA BENDA & DETERMINERS
  // =========================================================================
  {
    id: 'modul-06-noun-types',
    stageNumber: 2,
    stageName: 'Tahap 2: Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 6,
    title: 'Arsitektur Noun: Proper, Common, Concrete, Abstract, dan Collective Nouns',
    subtitle: 'Mengenali entitas pembicaraan dan klasifikasi substantif dari konsep paling dasar',
    levelBadge: 'Morfologi Noun · Modul 06',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata Benda (Noun) adalah batu bata utama dalam arsitektur bahasa. Segala sesuatu yang dapat dinamai—baik benda fisik yang bisa disentuh (Concrete Noun), gagasan konseptual yang hanya ada dalam pikiran (Abstract Noun), nama diri yang spesifik (Proper Noun), hingga kelompok entitas (Collective Noun)—memiliki aturan tata bahasa masing-masing.',
    coreConceptSummary: 'Proper Noun wajib diawali huruf kapital. Abstract Noun umumnya bersifat uncountable dan tidak menerima artikel jamak (-s). Collective Noun dianggap sebagai satu unit tunggal dalam American/Oxford standard (e.g. *The committee has decided*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Klasifikasi 5 Jenis Noun Utama',
        explanation: 'Membedakan klasifikasi benda memandu pemilihan artikel (a/an/the) dan keselarasan predikat.',
        formula: 'Proper (Capitalized) | Common | Concrete (Physical) | Abstract (Non-physical) | Collective (Group as Unit)',
        examples: [
          { sentence: 'Oxford University announced a breakthrough in artificial intelligence.', translation: 'Universitas Oxford mengumumkan terobosan dalam kecerdasan buatan.', note: 'Oxford University = Proper; breakthrough = Common/Abstract.' },
          { sentence: 'Integrity and perseverance define successful researchers.', translation: 'Integritas dan kegigihan mendefinisikan peneliti yang sukses.', note: 'Integrity, perseverance = Abstract Nouns (Uncountable).' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penulisan esai akademis IELTS membutuhkan penggunaan Abstract Nouns padat (Nominalization) untuk meningkatkan skor Lexical Resource.',
      toeflApplication: 'Section Reading TOEFL menguji pemahaman makna kata benda abstrak dalam wacana sains dan humaniora.',
      scoringImpact: 'Meningkatkan bobot kepadatan leksikal esai.'
    },
    goldenRules: [
      'Awali semua Proper Noun dengan huruf kapital.',
      'Perlakukan Abstract Noun sebagai uncountable kecuali dalam konteks partitif khusus.',
      'Perlakukan Collective Noun sebagai unit tunggal (singular).'
    ],
    questions: [
      {
        id: 'q-m06-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Which of the following words is an Abstract Noun?',
        options: ['Microscope', 'Laboratory', 'Resilience', 'Professor'],
        correctAnswer: 'Resilience',
        explanation: '"Resilience" (ketangguhan) adalah konsep abstrak mental yang tidak berwujud fisik.',
        ruleReference: 'Modul 06: Abstract Nouns'
      },
      {
        id: 'q-m06-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The research committee _____ reached a unanimous decision regarding the grant.',
        options: ['has', 'have', 'are', 'having'],
        correctAnswer: 'has',
        explanation: '"The research committee" adalah Collective Noun yang bertindak sebagai satu kesatuan unit tunggal -> "has".',
        ruleReference: 'Modul 06: Collective Noun Agreement'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m06-1',
        flawedSentence: 'The informations provided by the ministry were insufficient.',
        flawLocation: 'informations',
        correctedSentence: 'The information provided by the ministry was insufficient.',
        linguisticExplanation: '"Information" adalah abstract/uncountable noun murni yang tidak pernah memiliki bentuk jamak "informations".'
      }
    ]
  },

  {
    id: 'modul-07-countable-uncountable',
    stageNumber: 2,
    stageName: 'Tahap 2: Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 7,
    title: 'Countable vs Uncountable Nouns & Partitive Expressions',
    subtitle: 'Penanganan substansi massa, konsep abstrak, dan takaran hitung partitif',
    levelBadge: 'Morfologi Noun · Modul 07',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata benda terhitung (Countable) memiliki wujud diskrit individual yang dapat dihitung (one book, two books). Sebaliknya, kata benda tak terhitung (Uncountable) berupa massa cair, gas, materi padat tak terbagi, atau konsep abstrak (water, information, research, equipment).',
    coreConceptSummary: 'Uncountable Nouns tidak boleh diawali artikel "a/an" dan tidak boleh ditambah akhiran "-s/-es". Untuk menghitungnya, gunakan ungkapan partitif (a piece of equipment, an item of research, a body of evidence).',
    sections: [
      {
        stepNumber: '01',
        title: 'Aturan Absolut Uncountable Nouns Akademik',
        explanation: 'Kata benda seperti *research, equipment, advice, evidence, machinery, furniture, information* bersifat UNCOUNTABLE mutlak dalam bahasa Inggris standar.',
        formula: 'Uncountable Noun + Singular Verb | Partitive: a [piece/item/body] of + Uncountable Noun',
        examples: [
          { sentence: 'The laboratory acquired new equipment for spectrometer analysis.', translation: 'Laboratorium memperoleh peralatan baru untuk analisis spektrometer.', note: 'equipment (tanpa -s dan tanpa artikel "an")' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The scientist conducted several researches.',
          correctSentence: 'The scientist conducted several research studies / extensive research.',
          linguisticReason: '"Research" adalah uncountable noun. Gunakan "research studies" atau "extensive research".'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Menghindari *researches*, *equipments*, *evidences* adalah pembeda utama antara esai Band 6.0 dan Band 8.0.',
      toeflApplication: 'TOEFL Structure secara rutin menjebak peserta dengan Countable vs Uncountable quantifiers (much vs many, few vs little).',
      scoringImpact: 'Mencegah kesalahan leksikal fatal yang berulang.'
    },
    goldenRules: [
      'Jangan pernah menambahkan -s pada kata *research, equipment, information, evidence, advice*.',
      'Gunakan partitive expression (*a body of evidence*, *a piece of advice*) bila perlu menghitung unit.',
      'Gunakan *much/little/amount of* untuk uncountable, dan *many/few/number of* untuk countable.'
    ],
    questions: [
      {
        id: 'q-m07-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The environmental agency collected a vast _____ of empirical evidence.',
        options: ['number', 'amount', 'few', 'many'],
        correctAnswer: 'amount',
        explanation: '"Evidence" adalah uncountable noun, sehingga penentu kuantitas yang tepat adalah "amount" (bukan "number").',
        ruleReference: 'Modul 07: Uncountable Quantifiers'
      },
      {
        id: 'q-m07-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The laboratory purchased three new pieces of _____ for the biochemical department.',
        options: ['equipments', 'equipment', 'an equipment', 'machineries'],
        correctAnswer: 'equipment',
        explanation: 'Setelah frasa partitif "pieces of", kata benda uncountable tetap berbentuk dasar tunggal "equipment".',
        ruleReference: 'Modul 07: Partitive Expressions'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m07-1',
        flawedSentence: 'The forensic team discovered several new evidences at the scene.',
        flawLocation: 'several new evidences',
        correctedSentence: 'The forensic team discovered several new pieces of evidence at the scene.',
        linguisticExplanation: '"Evidence" tidak pernah memiliki bentuk jamak "evidences". Gunakan "pieces of evidence".'
      }
    ]
  },

  {
    id: 'modul-08-articles-system',
    stageNumber: 2,
    stageName: 'Tahap 2: Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 8,
    title: 'The Article System: A, An, The vs Zero Article',
    subtitle: 'Presisi definit vs indefinit, aturan fonetik pengucapan, dan konsep universal',
    levelBadge: 'Penentu & Artikel · Modul 08',
    estimatedMinutes: 25,
    mentalModelIntro: 'Artikel adalah penentu identitas rujukan: Apakah pendengar/pembaca sudah tahu persis benda yang dimaksud (Definite: THE) atau benda tersebut baru diperkenalkan secara umum/acak (Indefinite: A/AN)? Untuk konsep umum jamak atau konsep abstrak universal, gunakan Zero Article (Ø).',
    coreConceptSummary: 'A digunakan sebelum bunyi konsonan (a university, a European nation). AN digunakan sebelum bunyi vokal (an hour, an honest mistake). THE digunakan saat rujukan spesifik, unik, atau sudah disebut sebelumnya. ZERO ARTICLE digunakan untuk generalisasi jamak (*Computers are essential*) dan konsep abstrak umum (*Knowledge is power*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Fonetik A vs AN & Kaidah THE',
        explanation: 'Pemilihan A vs AN ditentukan oleh BUNYI pengucapan awal (phonetic sound), bukan huruf tulisan!',
        formula: 'A + Consonant Sound (/juː/, /w/) | AN + Vowel Sound (/aʊ/, /ɒ/) | THE + Specific/Unique Entity',
        examples: [
          { sentence: 'A university campus (/juːnɪˈvɜːsɪti/) requires substantial maintenance.', translation: 'Kampus universitas membutuhkan pemeliharaan besar.', note: 'A university (bunyi /j/ konsonan)' },
          { sentence: 'An honest assessment (/ˈɒnɪst/) was presented to the board.', translation: 'Penilaian yang jujur dipresentasikan kepada dewan.', note: 'An honest (bunyi /ɒ/ vokal)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Ketepatan penggunaan artikel *the* pada nama geografis dan entitas unik sangat diperhatikan dalam Academic Writing Task 1 & 2.',
      toeflApplication: 'TOEFL Structure secara intensif menguji jebakan fonetik artikel (*a unique* vs *an unique ❌*).',
      scoringImpact: 'Mengeliminasi kesalahan gramatikal minor yang menurunkan skor akurasi.'
    },
    goldenRules: [
      'Gunakan A sebelum kata yang berbunyi konsonan (/j/, /w/), e.g. *a university, a European, a one-way street*.',
      'Gunakan AN sebelum kata yang berbunyi vokal meskipun berawalan huruf H bisu, e.g. *an hour, an honest man*.',
      'Gunakan Zero Article untuk kata benda jamak yang merujuk generalisasi umum (*Scientists seek truth, bukan The scientists*).'
    ],
    questions: [
      {
        id: 'q-m08-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The consortium presented _____ unified proposal to the international regulatory commission.',
        options: ['a', 'an', 'the', 'Ø'],
        correctAnswer: 'a',
        explanation: 'Kata "unified" diawali bunyi konsonan glide /juːˈnaɪfɪd/, sehingga memerlukan artikel "a" (bukan "an").',
        ruleReference: 'Modul 08: Phonetic Article Selection'
      },
      {
        id: 'q-m08-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: '_____ knowledge obtained from clinical trials must be disseminated transparently.',
        options: ['A', 'An', 'The', 'Ø (Zero article)'],
        correctAnswer: 'The',
        explanation: 'Kata "knowledge" di sini dispesifikasikan oleh frasa penjelas "obtained from clinical trials", sehingga berstatus definit -> "The knowledge".',
        ruleReference: 'Modul 08: Definite Article Specification'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m08-1',
        flawedSentence: 'The researchers submitted an unique hypothesis to the journal.',
        flawLocation: 'an unique',
        correctedSentence: 'The researchers submitted a unique hypothesis to the journal.',
        linguisticExplanation: '"Unique" diawali bunyi konsonan semi-vokal /juːˈniːk/, sehingga wajib menggunakan artikel "a" (*a unique*).'
      }
    ]
  },

  {
    id: 'modul-09-pronoun-declension-advanced',
    stageNumber: 2,
    stageName: 'Tahap 2: Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 9,
    title: 'Pronoun Declension Lanjutan (Possessive, Reflexive, Reciprocal, Relative)',
    subtitle: 'Pembedaan its vs it\'s, possessive adjectives vs pronouns, dan rujukan relatif who vs whom',
    levelBadge: 'Kasus Pronoun · Modul 09',
    estimatedMinutes: 25,
    mentalModelIntro: 'Pronoun memiliki sistem kasus (case system) yang kaya: kepemilikan terikat (Possessive Adjective: my, your, its), kepemilikan mandiri (Possessive Pronoun: mine, yours, its), aksi memantul ke diri sendiri (Reflexive: myself, itself), dan kata hubung rujukan (Relative: who, whom, whose, which).',
    coreConceptSummary: 'ITS (tanpa apostrof) = kepemilikan (*The bird flapped its wings*). IT\'S (dengan apostrof) = singkatan dari "it is" atau "it has". WHO bertindak sebagai subjek relative clause; WHOM bertindak sebagai objek relative clause.',
    sections: [
      {
        stepNumber: '01',
        title: 'Matriks Possessive vs Reflexive vs Relative',
        explanation: 'Membedakan fungsi atributif (menempel pada noun) dan substantif (berdiri sendiri).',
        formula: 'Possessive Adj + Noun | Possessive Pronoun (Stand-alone) | Reflexive (Subject = Object)',
        examples: [
          { sentence: 'The organization updated its privacy policy.', translation: 'Organisasi tersebut memperbarui kebijakan privasinya.', note: 'its = Possessive (tanpa apostrof)' },
          { sentence: 'The scholar whom the university recruited is a Nobel laureate.', translation: 'Cendekiawan yang direkrut universitas tersebut adalah peraih Nobel.', note: 'whom = Relative Pronoun (Object posisi)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan variasi pronoun dan relative clauses kompleks membuktikan penguasaan sintaksis tingkat lanjut.',
      toeflApplication: 'Pembedaan who vs whom dan its vs it\'s merupakan materi uji wajib pada section grammar TOEFL.',
      scoringImpact: 'Menghindari kesalahan fatal ejaan ortografi dan kasus gramatikal.'
    },
    goldenRules: [
      'Gunakan *its* untuk kepemilikan benda/hewan tunggal (tanpa apostrof).',
      'Gunakan *whom* bila kata ganti tersebut berkedudukan sebagai objek dari kata kerja atau preposisi.',
      'Gunakan Reflexive Pronoun (-self/-selves) hanya bila subjek dan objek adalah orang yang sama persis.'
    ],
    questions: [
      {
        id: 'q-m09-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The pharmaceutical corporation increased _____ research and development budget by fifteen percent.',
        options: ['it\'s', 'its', 'their', 'theirs'],
        correctAnswer: 'its',
        explanation: '"The pharmaceutical corporation" adalah entitas tunggal, sehingga kata ganti kepemilikannya adalah "its" (tanpa apostrof).',
        ruleReference: 'Modul 09: Possessive Determiner Its'
      },
      {
        id: 'q-m09-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The delegates, several of _____ had traveled from Asia, endorsed the international resolution.',
        options: ['who', 'whom', 'which', 'whose'],
        correctAnswer: 'whom',
        explanation: 'Setelah preposisi "of", pronoun rujukan manusia wajib menggunakan bentuk objek "whom" -> "several of whom".',
        ruleReference: 'Modul 09: Relative Pronoun Whom after Preposition'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m09-1',
        flawedSentence: 'The research lab celebrated it\'s twentieth anniversary yesterday.',
        flawLocation: 'it\'s',
        correctedSentence: 'The research lab celebrated its twentieth anniversary yesterday.',
        linguisticExplanation: '"It\'s" adalah singkatan dari "it is/has". Untuk kepemilikan, gunakan "its" tanpa tanda apostrof.'
      }
    ]
  },

  {
    id: 'modul-10-quantifiers-distributives',
    stageNumber: 2,
    stageName: 'Tahap 2: Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 10,
    title: 'Demonstratives, Quantifiers & Distributives',
    subtitle: 'Kesesuaian kuantitas: Much vs Many, Few vs Little, Each vs Every vs All',
    levelBadge: 'Penentu Kuantitas · Modul 10',
    estimatedMinutes: 25,
    mentalModelIntro: 'Quantifiers menentukan takaran atau sebaran kuantitas nomina. Kesalahan dalam memilih penentu kuantitas dapat merusak keselarasan gramatikal seluruh kalimat (Subject-Verb Agreement) dan mengubah makna semantik secara drastis.',
    coreConceptSummary: 'MANY / FEW / A FEW untuk Countable Plural. MUCH / LITTLE / A LITTLE untuk Uncountable. FEW / LITTLE (tanpa "a") bermakna negatif (hampir tidak ada / sangat langka). A FEW / A LITTLE bermakna positif (ada sedikit, cukup). EACH / EVERY selalu diikuti Singular Noun + Singular Verb.',
    sections: [
      {
        stepNumber: '01',
        title: 'Pembeda Kuantitas Diskrit vs Massa',
        explanation: 'Memetakan pasangan kuantifier berdasarkan sifat keterhitungan nomina.',
        formula: 'Countable: Many / (A) Few / Number of | Uncountable: Much / (A) Little / Amount of',
        examples: [
          { sentence: 'Few researchers attended the seminar.', translation: 'Hampir tidak ada peneliti yang menghadiri seminar (makna negatif).', note: 'Few = sangat sedikit / nyaris nol' },
          { sentence: 'A few researchers attended the seminar.', translation: 'Beberapa peneliti menghadiri seminar (makna positif).', note: 'A few = ada beberapa' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Kerapian dalam mendeskripsikan data kuantitas di IELTS Writing Task 1 bergantung mutlak pada presisi quantifiers.',
      toeflApplication: 'TOEFL Structure secara berkala menguji kesalahan pasangan *much people ❌* atau *many information ❌*.',
      scoringImpact: 'Meningkatkan akurasi leksikogramatikal.'
    },
    goldenRules: [
      'Gunakan *many / few* untuk benda terhitung (plural).',
      'Gunakan *much / little* untuk benda tidak terhitung (uncountable massa).',
      '*Each* dan *Every* selalu diikuti kata benda tunggal dan kata kerja tunggal.'
    ],
    questions: [
      {
        id: 'q-m10-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Despite the harsh winter, _____ students attended the voluntary tutorial session.',
        options: ['a little', 'a few', 'much', 'every'],
        correctAnswer: 'a few',
        explanation: '"Students" adalah countable plural, dan kalimat menyatakan ada beberapa yang hadir -> "a few".',
        ruleReference: 'Modul 10: Countable Quantifiers'
      },
      {
        id: 'q-m10-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'Every member of the faculty committee _____ required to submit an annual disclosure.',
        options: ['are', 'is', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: '"Every member" bersifat distributif tunggal, sehingga membutuhkan kata kerja tunggal "is".',
        ruleReference: 'Modul 10: Distributive Every Agreement'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m10-1',
        flawedSentence: 'The government allocated much funds to renewable energy infrastructure.',
        flawLocation: 'much funds',
        correctedSentence: 'The government allocated substantial funds / many funds to renewable energy infrastructure.',
        linguisticExplanation: '"Funds" adalah kata benda terhitung jamak (countable plural), sehingga tidak boleh menggunakan "much".'
      }
    ]
  },

  // =========================================================================
  // TAHAP 3: MORFOLOGI KATA KERJA, MODALS & MODIFIER
  // =========================================================================
  {
    id: 'modul-11-core-verb-types',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 11,
    title: 'Core Verb Types: Transitive, Intransitive, dan Ergative Verbs',
    subtitle: 'Memahami predikat berobjek, predikat tanpa objek, dan kata kerja dua arah',
    levelBadge: 'Morfologi Verb · Modul 11',
    estimatedMinutes: 25,
    mentalModelIntro: 'Setiap kata kerja memiliki valensi: apakah ia menuntut objek langsung (Transitive), menolak objek langsung (Intransitive), atau dapat berubah arah secara fleksibel (Ergative/Labile).',
    coreConceptSummary: 'Transitive (S + V + O: *analyze the data*). Intransitive (S + V: *the temperature decreased*). Ergative (*The pilot landed the plane* vs *The plane landed*). Kata kerja intransitif TIDAK PERNAH bisa diubah ke bentuk pasif.',
    sections: [
      {
        stepNumber: '01',
        title: 'Valensi Predikat & Hukum Pasif',
        explanation: 'Hanya kata kerja transitif yang memiliki objek penderita yang dapat dipasifkan.',
        formula: 'Transitive: S + V + Direct Object | Intransitive: S + V (No Object)',
        examples: [
          { sentence: 'The committee approved the budget.', translation: 'Komite menyetujui anggaran tersebut.', note: 'Transitive (Direct Object: the budget)' },
          { sentence: 'Global sea levels rose by three centimeters.', translation: 'Permukaan laut global naik sebesar tiga sentimeter.', note: 'Intransitive (rose = no direct object)' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The accident was happened at night.',
          correctSentence: 'The accident happened at night.',
          linguisticReason: '"Happen" adalah intransitive verb murni yang mustahil dipasifkan.'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Menghindari pasifisasi ilegal pada kata kerja intransitif seperti *occurred, happened, died, emerged* di IELTS Writing.',
      toeflApplication: 'TOEFL Written Expression secara berkala menguji pembedaan *raise (transitive)* vs *rise (intransitive)* dan *lay* vs *lie*.',
      scoringImpact: 'Mencegah distorsi gramatikal fatal.'
    },
    goldenRules: [
      'Jangan pernah mempasifkan kata kerja intransitif (*happen, occur, exist, appear, rise*).',
      '*Raise/Lay/Set* membutuhkan objek langsung (transitive); *Rise/Lie/Sit* tidak memiliki objek (intransitive).'
    ],
    questions: [
      {
        id: 'q-m11-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Solar energy costs have _____ significantly over the past decade.',
        options: ['fallen', 'dropped down', 'been fallen', 'been dropped down'],
        correctAnswer: 'fallen',
        explanation: '"Fall" adalah intransitive verb aktif, sehingga tidak boleh dipasifkan -> "have fallen".',
        ruleReference: 'Modul 11: Intransitive Verbs'
      },
      {
        id: 'q-m11-2',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The central bank decided to _____ interest rates to curb inflation.',
        options: ['rise', 'raise', 'arise', 'rose'],
        correctAnswer: 'raise',
        explanation: 'Memerlukan kata kerja transitif yang mengambil objek langsung "interest rates" -> "raise".',
        ruleReference: 'Modul 11: Raise vs Rise Transitivity'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m11-1',
        flawedSentence: 'A major breakthrough was occurred during the third trial.',
        flawLocation: 'was occurred',
        correctedSentence: 'A major breakthrough occurred during the third trial.',
        linguisticExplanation: '"Occur" adalah intransitive verb yang tidak dapat dipasifkan (*occurred*).'
      }
    ]
  },

  {
    id: 'modul-12-stative-vs-dynamic-verbs',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 12,
    title: 'Stative Verbs vs Dynamic Verbs: Kognisi, Emosi, Persepsi & Kepemilikan',
    subtitle: 'Memahami mengapa kata kerja kondisi permanen menolak bentuk continuous (-ing)',
    levelBadge: 'Morfologi Verb · Modul 12',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata kerja dinamis (Dynamic) menggambarkan aksi fisik dengan awal dan akhir. Kata kerja statif (Stative) menggambarkan keadaan pikiran, kepemilikan, perasaan, atau hubungan logis yang tidak berwujud aksi fisik.',
    coreConceptSummary: 'Stative Verbs (know, believe, understand, possess, belong, contain, consist of) secara baku MENOLAK bentuk continuous (-ing) dalam makna statifnya.',
    sections: [
      {
        stepNumber: '01',
        title: 'Taksonomi 4 Kategori Stative Verbs',
        explanation: 'Kognisi (*know, believe*), Emosi (*love, prefer*), Persepsi (*hear, smell*), dan Relasi/Kepemilikan (*contain, belong, own*).',
        formula: 'Stative: S + Verb (Simple Aspect) | Larangan: S + is/are + Verb-ing ❌',
        examples: [
          { sentence: 'The report contains thirty statistical graphs.', translation: 'Laporan tersebut berisi tiga puluh grafik statistik.', note: 'contains (stative)' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'I am knowing the answer to this question.',
          correctSentence: 'I know the answer to this question.',
          linguisticReason: '"Know" adalah stative verb murni yang tidak menerima continuous -ing.'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan akurat verba statif (*consists of, comprises, indicates*) sangat krusial pada IELTS Writing Task 1.',
      toeflApplication: 'TOEFL Structure menguji verba statif ganda seperti *have* (kepemilikan = statif vs aksi = dinamis).',
      scoringImpact: 'Meningkatkan akurasi tenses dan aspek.'
    },
    goldenRules: [
      'Jangan gunakan bentuk -ing pada kata kerja kognisi, kepemilikan, dan relasi (*consist, belong, contain*).',
      '*Consist of* tidak pernah pasif dan tidak pernah continuous (*is consisting ❌*).'
    ],
    questions: [
      {
        id: 'q-m12-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The pharmaceutical dossier _____ all relevant clinical trial documentation.',
        options: ['is containing', 'contains', 'containing', 'is contain'],
        correctAnswer: 'contains',
        explanation: '"Contain" adalah stative verb kepemilikan/relasi yang wajib berbentuk simple -> "contains".',
        ruleReference: 'Modul 12: Stative Verbs'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m12-1',
        flawedSentence: 'The experimental cohort is consisting of forty adult volunteers.',
        flawLocation: 'is consisting of',
        correctedSentence: 'The experimental cohort consists of forty adult volunteers.',
        linguisticExplanation: '"Consist of" adalah kata kerja relasi statif yang tidak menerima bentuk continuous.'
      }
    ]
  },

  {
    id: 'modul-13-linking-verbs',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 13,
    title: 'Linking Verbs & Subject Complements (Be, Seem, Appear, Remain, Become)',
    subtitle: 'Menghubungkan atribut sifat ke subjek dan pantangan penggunaan adverb',
    levelBadge: 'Morfologi Verb · Modul 13',
    estimatedMinutes: 20,
    mentalModelIntro: 'Linking Verbs bertindak sebagai jembatan antara Subjek dan Kata Sifat yang menerangkannya (Subject Complement). Berbeda dari Action Verbs yang diterangkan oleh Adverb (-ly), Linking Verbs WAJIB diikuti oleh ADJECTIVE.',
    coreConceptSummary: 'S + Linking Verb + Adjective (*The hypothesis seems valid, BUKAN validly*). Linking verbs utama: *be, seem, appear, look, sound, smell, taste, feel, remain, become*.',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Adjective setelah Linking Verbs',
        explanation: 'Karena menerangkan subjek (noun), kata setelah linking verb harus berupa Adjective.',
        formula: 'Subject + Linking Verb (seem/remain/appear) + ADJECTIVE',
        examples: [
          { sentence: 'The telemetry remains consistent across all sensors.', translation: 'Telemetri tetap konsisten di seluruh sensor.', note: 'remains + consistent (Adjective)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan linking verbs formal (*remain stable, appear plausible*) memberi nuansa akademik tinggi.',
      toeflApplication: 'TOEFL Structure menguji jebakan pemilihan Adverb (-ly) vs Adjective setelah *seem/remain*.',
      scoringImpact: 'Menghindari kesalahan modifikasi kata sifat.'
    },
    goldenRules: [
      'Gunakan ADJECTIVE (bukan adverb -ly) setelah linking verbs (*The food smells delicious, bukan deliciously*).',
      '*Remain, seem, appear, become* adalah linking verbs formal esensial.'
    ],
    questions: [
      {
        id: 'q-m13-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Despite the economic volatility, market indicators remain _____.',
        options: ['stable', 'stably', 'stability', 'stabilize'],
        correctAnswer: 'stable',
        explanation: 'Setelah linking verb "remain", kata yang menyusul harus berupa Adjective "stable".',
        ruleReference: 'Modul 13: Linking Verbs with Adjectives'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m13-1',
        flawedSentence: 'The proposed solution sounds realistically to the board.',
        flawLocation: 'realistically',
        correctedSentence: 'The proposed solution sounds realistic to the board.',
        linguisticExplanation: '"Sounds" adalah linking verb persepsi yang mewajibkan Adjective "realistic".'
      }
    ]
  },

  {
    id: 'modul-14-modals-auxiliaries',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 14,
    title: 'Modal Auxiliaries: Primary vs Modals (Can, Could, Must, Should, May, Might)',
    subtitle: 'Mekanisme kata kerja bantu modalitas, derajat kepastian, dan hukum mutlak Bare Infinitive',
    levelBadge: 'Modal Auxiliaries · Modul 14',
    estimatedMinutes: 25,
    mentalModelIntro: 'Modal Auxiliaries mengekspresikan sikap pembicara terhadap aksi: kemampuan (Ability), kemungkinan (Possibility), keharusan (Necessity), atau saran (Recommendation). Modals tidak pernah menerima akhiran -s, -ed, atau -ing, dan WAJIB diikuti Bare Infinitive.',
    coreConceptSummary: 'Modal + Bare Infinitive (V1 murni tanpa "to"). Derajat kepastian: Must (95% pasti) > Should (70% ekspektasi) > May/Might/Could (30-50% spekulasi).',
    sections: [
      {
        stepNumber: '01',
        title: 'Spektrum Modalitas & Bare Infinitive',
        explanation: 'Modals memodifikasi makna kalimat tanpa mengubah bentuk konjugasi dasarnya.',
        formula: 'Subject + Modal (Must/Should/Can/May) + Verb 1 (Bare Infinitive)',
        examples: [
          { sentence: 'Researchers must adhere to international bioethics guidelines.', translation: 'Para peneliti wajib mematuhi pedoman bioetika internasional.', note: 'must + adhere (V1)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Modalitas adalah pilar utama Academic Hedging di IELTS Task 2 (*This may indicate...*).',
      toeflApplication: 'TOEFL Structure menguji larangan "to" setelah modal murni (*must to go ❌*).',
      scoringImpact: 'Meningkatkan objektivitas retorika akademis.'
    },
    goldenRules: [
      'Jangan pernah menambahkan "to" setelah modal murni (*can, could, may, might, must, should, will, would*).',
      'Jangan pernah menambahkan akhiran -s pada modal verb (*he musts ❌*).'
    ],
    questions: [
      {
        id: 'q-m14-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'All lab personnel must _____ protective eyewear in the cleanroom.',
        options: ['wear', 'wears', 'wearing', 'to wear'],
        correctAnswer: 'wear',
        explanation: 'Setelah modal verb "must", kata kerja wajib berbentuk Bare Infinitive "wear".',
        ruleReference: 'Modul 14: Modal Bare Infinitive'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m14-1',
        flawedSentence: 'The administration should to reconsider its funding allocation.',
        flawLocation: 'should to reconsider',
        correctedSentence: 'The administration should reconsider its funding allocation.',
        linguisticExplanation: 'Modal "should" diikuti langsung oleh Bare Infinitive tanpa partikel "to".'
      }
    ]
  },

  {
    id: 'modul-15-semi-modals-phrasals',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 15,
    title: 'Semi-Modals & Phrasal Modals: Ought to, Had better, Be able to, Used to vs Be used to',
    subtitle: 'Konstruksi modal berfrasa, peringatan urgensi, dan pembedaan Used to vs Be used to',
    levelBadge: 'Semi-Modals · Modul 15',
    estimatedMinutes: 25,
    mentalModelIntro: 'Semi-modals adalah frasa yang berfungsi mirip modal murni namun memiliki partikel "to" atau konjugasi khusus. Pembedaan krusial: *Used to + V1* (kebiasaan masa lampau yang sudah berhenti) vs *Be used to + V-ing* (terbiasa dengan suatu kondisi saat ini).',
    coreConceptSummary: 'HAD BETTER + V1 (peringatan berkonsekuensi buruk jika tidak dilakukan). OUGHT TO + V1 (kewajiban moral). USED TO + V1 (kebiasaan lampau). BE/GET USED TO + V-ing/Noun (terbiasa dengan).',
    sections: [
      {
        stepNumber: '01',
        title: 'Used to vs Be used to Matrix',
        explanation: 'Membedakan kebiasaan lampau yang telah usai dengan kebiasaan adaptasi kontemporer.',
        formula: 'Past Habit: S + used to + V1 | Familiarity: S + be/get used to + V-ing',
        examples: [
          { sentence: 'The scholar used to lecture at Harvard.', translation: 'Cendekiawan tersebut dulu biasa mengajar di Harvard (sekarang tidak lagi).', note: 'used to + V1' },
          { sentence: 'Researchers are used to working under high pressure.', translation: 'Para peneliti terbiasa bekerja di bawah tekanan tinggi.', note: 'are used to + V-ing' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Pembedaan *used to* dan *be used to* sering muncul pada Speaking Part 1 & Writing Task 2.',
      toeflApplication: 'TOEFL Written Expression menguji bentuk gerund setelah *be used to*.',
      scoringImpact: 'Mencegah distorsi makna kebiasaan masa lalu vs masa kini.'
    },
    goldenRules: [
      '*Used to* diikuti Verb 1 murni; *Be used to* diikuti Verb-ing / Noun.',
      '*Had better* selalu berbentuk lampau "had" meskipun bermakna saran mendesak masa kini.'
    ],
    questions: [
      {
        id: 'q-m15-1',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The engineering team is used to _____ telemetry data under extreme weather conditions.',
        options: ['analyze', 'analyzing', 'analyzed', 'analysis'],
        correctAnswer: 'analyzing',
        explanation: 'Setelah "is used to" (terbiasa), kata kerja wajib berbentuk Gerund (-ing) -> "analyzing".',
        ruleReference: 'Modul 15: Be Used To + Gerund'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m15-1',
        flawedSentence: 'You had better to back up the raw data immediately.',
        flawLocation: 'had better to back up',
        correctedSentence: 'You had better back up the raw data immediately.',
        linguisticExplanation: '"Had better" diikuti Bare Infinitive tanpa "to" (*had better back up*).'
      }
    ]
  },

  {
    id: 'modul-16-royal-order-adjectives',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 16,
    title: 'Adjectives & The Royal Order of Adjectives (OSASCOMP)',
    subtitle: 'Urutan baku susunan kata sifat majemuk penutur asli',
    levelBadge: 'Kata Sifat · Modul 16',
    estimatedMinutes: 20,
    mentalModelIntro: 'Ketika lebih dari satu kata sifat menerangkan satu kata benda, penutur asli bahasa Inggris secara intuitif mengikuti hierarki ketat: OSASCOMP (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose).',
    coreConceptSummary: 'Urutan: (1) Opinion (brilliant) -> (2) Size (large) -> (3) Age (new) -> (4) Shape (circular) -> (5) Color (blue) -> (6) Origin (German) -> (7) Material (steel) -> (8) Purpose (measuring) + NOUN.',
    sections: [
      {
        stepNumber: '01',
        title: 'Mnemonic OSASCOMP',
        explanation: 'Menempatkan kata sifat evaluatif/opini di depan, dan kata sifat material/tujuan tepat sebelum benda.',
        formula: 'Opinion + Size + Age + Shape + Color + Origin + Material + Purpose + Noun',
        examples: [
          { sentence: 'They installed an innovative large new German measuring apparatus.', translation: 'Mereka memasang aparatus pengukur buatan Jerman baru berukuran besar yang inovatif.', note: 'Opinion -> Size -> Age -> Origin -> Purpose -> Noun' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Menyusun deskripsi objek atau instrumen secara alami dan memukau penguji IELTS Writing Task 1.',
      toeflApplication: 'TOEFL Structure menguji urutan kata sifat yang tidak lazim.',
      scoringImpact: 'Meningkatkan kelancaran dan kealamian frasa nomina (Natural Collocations).'
    },
    goldenRules: [
      'Tempatkan kata sifat opini (subjective) sebelum kata sifat fakta fisik (objective).',
      'Kata sifat bahan (material) dan tujuan (purpose) selalu berada paling dekat dengan kata benda utama.'
    ],
    questions: [
      {
        id: 'q-m16-1',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'The laboratory purchased a _____ scanning electron microscope.',
        options: ['new sophisticated Japanese', 'sophisticated new Japanese', 'Japanese new sophisticated', 'sophisticated Japanese new'],
        correctAnswer: 'sophisticated new Japanese',
        explanation: 'Sesuai OSASCOMP: Opinion (sophisticated) -> Age (new) -> Origin (Japanese).',
        ruleReference: 'Modul 16: OSASCOMP Order'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m16-1',
        flawedSentence: 'The institute tested a metallic innovative rectangular device.',
        flawLocation: 'metallic innovative rectangular',
        correctedSentence: 'The institute tested an innovative rectangular metallic device.',
        linguisticExplanation: 'Urutan OSASCOMP: Opinion (innovative) -> Shape (rectangular) -> Material (metallic).'
      }
    ]
  },

  {
    id: 'modul-17-participle-adjectives',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 17,
    title: 'Participle Adjectives: -ed vs -ing (Perasaan vs Karakteristik)',
    subtitle: 'Membedakan kondisi internal yang dialami subjek dengan sifat penyebab dari luar',
    levelBadge: 'Kata Sifat · Modul 17',
    estimatedMinutes: 20,
    mentalModelIntro: 'Participle Adjectives berakhiran -ed menggambarkan PERASAAN atau KONDISI yang dialami oleh seseorang (*I am interested*). Participle Adjectives berakhiran -ing menggambarkan KARAKTERISTIK atau SIFAT PENYEBAB dari suatu benda/situasi (*The lecture is interesting*).',
    coreConceptSummary: '-ed = Receiver of feeling (Bored, Fascinated, Exhausted). -ing = Producer of feeling (Boring, Fascinating, Exhausting).',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Internal vs Eksternal Modifier',
        explanation: 'Menghindari salah tafsir antara orang yang merasakan dengan objek yang menimbulkan rasa.',
        formula: 'Subject (Perasa) + To Be + -ed Adjective | Object/Cause (Penyebab) + To Be + -ing Adjective',
        examples: [
          { sentence: 'The researchers were astonished by the anomalous telemetry.', translation: 'Para peneliti terkejut oleh telemetri anomali tersebut.', note: '-ed = orang yang merasakan keheranan' },
          { sentence: 'The telemetry yielded an astonishing discovery.', translation: 'Telemetri tersebut membuahkan penemuan yang mencengangkan.', note: '-ing = sifat penemuan yang menimbulkan rasa heran' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Kesalahan *I am very interesting in this topic ❌* langsung menurunkan skor Speaking dan Writing.',
      toeflApplication: 'TOEFL Structure secara teratur menguji pembedaan -ed vs -ing participle modifiers.',
      scoringImpact: 'Menghindari kesalahan makna semantik yang fatal.'
    },
    goldenRules: [
      'Gunakan -ed bila subjek MENERIMA/MERASAKAN emosi atau kondisi internal.',
      'Gunakan -ing bila subjek MENJADI PENYEBAB atau memiliki karakteristik tersebut.'
    ],
    questions: [
      {
        id: 'q-m17-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The committee members were deeply _____ by the unprecedented trial outcomes.',
        options: ['impressing', 'impressed', 'impression', 'impressive'],
        correctAnswer: 'impressed',
        explanation: 'Para anggota komite adalah pihak yang merasakan kekaguman (receiver of emotion) -> "impressed".',
        ruleReference: 'Modul 17: Participle Adjectives -ed'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m17-1',
        flawedSentence: 'The conference attendees were very boring during the lengthy speech.',
        flawLocation: 'boring',
        correctedSentence: 'The conference attendees were very bored during the lengthy speech.',
        linguisticExplanation: 'Peserta konferensi merasakan kebosanan, sehingga harus menggunakan -ed Adjective "bored" (bukan "boring" yang berarti mereka yang membosankan).'
      }
    ]
  },

  {
    id: 'modul-18-comparative-superlative',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 18,
    title: 'Comparative & Superlative Degrees & Proportional Structures',
    subtitle: 'Komparasi presisi, larangan double comparative, dan pola "The more... the more..."',
    levelBadge: 'Komparasi · Modul 18',
    estimatedMinutes: 25,
    mentalModelIntro: 'Tingkat perbandingan (Degrees of Comparison) membandingkan 2 entitas (Comparative: -er / more ... than) atau membandingkan 1 entitas dengan seluruh kelompoknya (Superlative: the -est / the most). Struktur proporsional paralel (*The more... the more...*) adalah struktur bernilai tinggi dalam esai akademis.',
    coreConceptSummary: '1 suku kata: -er / the -est (faster, the fastest). 2+ suku kata: more / the most (more complex, the most complex). Proportional: *The + comparative ..., the + comparative ...* (*The higher the temperature, the faster the reaction*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Struktur Komparasi Proporsional Paralel',
        explanation: 'Menghubungkan hubungan sebab-akibat korelasional dua variabel data secara simultan.',
        formula: 'The + [Comparative Adj/Adv + Clause], the + [Comparative Adj/Adv + Clause]',
        examples: [
          { sentence: 'The more rigorous the methodology, the more reliable the empirical conclusions.', translation: 'Semakin ketat metodologinya, semakin andal kesimpulan empirisnya.', note: 'Proportional Double Comparative' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Keahlian membuat perbandingan data mutlak diperlukan untuk meraih Band 8.0+ pada IELTS Writing Task 1.',
      toeflApplication: 'TOEFL Structure menguji struktur paralel *The more... the more...* yang sering kehilangan artikel "the".',
      scoringImpact: 'Meningkatkan kompleksitas sintaksis dan variasi kalimat.'
    },
    goldenRules: [
      'Jangan pernah menggabungkan "more" dengan akhiran "-er" (*more faster ❌*).',
      'Struktur proporsional paralel WAJIB diawali "The" pada kedua klausa (*The higher..., the faster...*).'
    ],
    questions: [
      {
        id: 'q-m18-1',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: '_____ the dataset, the more accurate the neural network predictions become.',
        options: ['Larger', 'The larger', 'The most large', 'As large as'],
        correctAnswer: 'The larger',
        explanation: 'Struktur perbandingan proporsional paralel menuntut pola "The + comparative" di kedua sisi -> "The larger".',
        ruleReference: 'Modul 18: Proportional Comparative Structure'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m18-1',
        flawedSentence: 'The new algorithm is more faster than the legacy model.',
        flawLocation: 'more faster',
        correctedSentence: 'The new algorithm is faster / much faster than the legacy model.',
        linguisticExplanation: '"Fast" adalah kata sifat 1 suku kata. Dilarang menggabungkan "more" dengan akhiran "-er" (double comparative).'
      }
    ]
  },

  {
    id: 'modul-19-adverbs-placement',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 19,
    title: 'Adverbs & Adverbial Placement (Manner, Frequency, Degree & Sentence Adverbs)',
    subtitle: 'Posisi penempatan kata keterangan dan larangan memisahkan Verb dari Direct Object',
    levelBadge: 'Kata Keterangan · Modul 19',
    estimatedMinutes: 25,
    mentalModelIntro: 'Adverbs memodifikasi Kata Kerja (Verb), Kata Sifat (Adjective), atau sesama Adverb. Aturan emas sintaksis bahasa Inggris: JANGAN PERNAH menyisipkan Adverb di antara Kata Kerja dan Objek Langsungnya (*He speaks fluently English ❌ -> He speaks English fluently ✔*).',
    coreConceptSummary: 'Adverbs of Frequency (always, rarely, often) berada sebelum Main Verb tetapi setelah To Be/Auxiliary. Sentence Adverbs (Consequently, Furthermore, Surprisingly) berada di awal kalimat diikuti tanda koma.',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Kesatuan Verb-Object & Posisi Mid-Position',
        explanation: 'Verb dan Direct Object membentuk satu kesatuan frase verba inti yang tidak boleh dibelah oleh Adverb.',
        formula: 'Subject + [Adverb of Frequency] + Auxiliary + [Mid-Adverb] + Main Verb + DIRECT OBJECT + [Manner/Time Adverb]',
        examples: [
          { sentence: 'The scientists carefully analyzed the chemical compounds.', translation: 'Para ilmuwan menganalisis senyawa kimia tersebut secara hati-hati.', note: 'Adverb sebelum verb atau setelah objek' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penempatan adverb yang luwes dan alami membedakan penulis tingkat lanjut dari pemula.',
      toeflApplication: 'TOEFL Structure menguji letak Adverbs of Frequency dan larangan pemisahan V-O.',
      scoringImpact: 'Meningkatkan kelancaran aliran sintaksis kalimat.'
    },
    goldenRules: [
      'Jangan pernah letakkan adverb di antara Kata Kerja dan Objek (*analyze carefully the data ❌ -> carefully analyze the data ✔*).',
      'Sentence adverbs (*However, Consequently*) wajib diikuti tanda koma di awal kalimat.'
    ],
    questions: [
      {
        id: 'q-m19-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The research team _____ the anomalous data before releasing the press statement.',
        options: ['thoroughly examined', 'examined thoroughly the', 'examined the thoroughly', 'thoroughly examine'],
        correctAnswer: 'thoroughly examined',
        explanation: 'Adverb "thoroughly" ditempatkan sebelum kata kerja "examined" agar tidak memisahkan kata kerja dari objeknya.',
        ruleReference: 'Modul 19: Adverb Placement before Verb'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m19-1',
        flawedSentence: 'The professor explained clearly the mathematical formula to the students.',
        flawLocation: 'explained clearly the mathematical formula',
        correctedSentence: 'The professor clearly explained the mathematical formula to the students.',
        linguisticExplanation: 'Dilarang meletakkan adverb "clearly" di antara kata kerja "explained" dan objek langsung "the mathematical formula".'
      }
    ]
  },

  {
    id: 'modul-20-prepositions-hierarchy',
    stageNumber: 3,
    stageName: 'Tahap 3: Morfologi Kata Kerja, Modals & Modifier',
    categoryKey: 'Word Classes',
    moduleNumber: 20,
    title: 'Prepositions: Hierarki Waktu, Ruang, dan Gerak (In, On, At & Movement)',
    subtitle: 'Piramida koordinat waktu-tempat dari spesifik ke luas, serta preposisi arah',
    levelBadge: 'Preposisi · Modul 20',
    estimatedMinutes: 25,
    mentalModelIntro: 'Preposisi In, On, dan At mengikuti piramida hierarki dimensional: AT = titik paling spesifik (jam, alamat presisi); ON = permukaan atau dimensi hari/tanggal; IN = wadah tertutup, area luas, kota, negara, bulan, atau abad.',
    coreConceptSummary: 'WAKTU: At 5 PM (presisi) -> On Monday, On July 4th (hari/tanggal) -> In 2026, In December, In the 21st century (periode luas). RUANG: At the bus stop, At Oxford (titik koordinat) -> On the table, On Main Street (permukaan/jalan) -> In London, In the building (wadah/wilayah).',
    sections: [
      {
        stepNumber: '01',
        title: 'Piramida Hierarki Dimensi IN - ON - AT',
        explanation: 'Memandu pemetaan dari koordinat sempit presisi hingga cakupan luas.',
        formula: 'AT (Specific Point) -> ON (Line/Surface/Day) -> IN (Area/Volume/Period)',
        examples: [
          { sentence: 'The symposium convenes at 9:00 AM on Monday in the auditorium.', translation: 'Simposium dimulai pukul 09.00 pada hari Senin di dalam auditorium.', note: 'at (jam) -> on (hari) -> in (ruangan)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Akurasi penggunaan preposisi waktu (*in 2015, between 2010 and 2020*) adalah kunci skor Task 1.',
      toeflApplication: 'TOEFL Structure menguji preposisi penunjuk tanggal lengkap (*on May 5th*) vs bulan saja (*in May*).',
      scoringImpact: 'Mencegah kesalahan preposisi yang sering terjadi pada pembelajar Indonesia.'
    },
    goldenRules: [
      'Gunakan AT untuk jam dan titik lokasi presisi.',
      'Gunakan ON untuk hari, tanggal lengkap, nama jalan, dan permukaan.',
      'Gunakan IN untuk bulan, tahun, abad, musim, kota, dan negara.'
    ],
    questions: [
      {
        id: 'q-m20-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'The global climate accord was ratified _____ Paris _____ 2015.',
        options: ['in / in', 'at / in', 'in / at', 'on / in'],
        correctAnswer: 'in / in',
        explanation: 'Kota (Paris) menggunakan "in" dan tahun (2015) menggunakan "in" -> "in Paris in 2015".',
        ruleReference: 'Modul 20: Prepositions of Place and Time'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m20-1',
        flawedSentence: 'The conference will take place in Monday morning at July.',
        flawLocation: 'in Monday morning at July',
        correctedSentence: 'The conference will take place on Monday morning in July.',
        linguisticExplanation: 'Hari menggunakan "on" (*on Monday morning*) dan bulan menggunakan "in" (*in July*).'
      }
    ]
  },

  // =========================================================================
  // TAHAP 4: SINTAKSIS, POLA KALIMAT & DIMENSI WAKTU
  // =========================================================================
  {
    id: 'modul-21-dependent-prepositions',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Word Classes',
    moduleNumber: 21,
    title: 'Dependent Prepositions & Fixed Prepositional Collocations',
    subtitle: 'Pasangan preposisi tetap pada Verbs & Adjectives penentu skor internasional',
    levelBadge: 'Kolokasi Preposisi · Modul 21',
    estimatedMinutes: 25,
    mentalModelIntro: 'Dalam bahasa Inggris tingkat tinggi, kata sifat dan kata kerja tertentu berpasangan secara mutlak dengan preposisi terikat (Dependent Prepositions). Menggantinya dengan preposisi lain yang tampak logis dalam bahasa Indonesia akan menghasilkan kalimat cacat (*depend to ❌ -> depend on ✔*).',
    coreConceptSummary: 'Adjective + Prep: *capable of, prone to, deficient in, susceptible to, aware of*. Verb + Prep: *adhere to, abstain from, coincide with, compensate for, contribute to, depend on*.',
    sections: [
      {
        stepNumber: '01',
        title: 'Katalog Pasangan Preposisi Terikat Mutlak',
        explanation: 'Pasangan ini harus dihafal sebagai satu unit leksikal utuh.',
        formula: 'Verb/Adjective + Fixed Dependent Preposition + Noun / Gerund (-ing)',
        examples: [
          { sentence: 'The artificial intelligence model is capable of diagnosing rare ocular diseases.', translation: 'Model kecerdasan buatan tersebut mampu mendiagnosis penyakit mata langka.', note: 'capable + of + V-ing' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan kolokasi preposisi yang presisi adalah syarat mutlak untuk meraih Band 8.5 pada kriteria Lexical Resource.',
      toeflApplication: 'TOEFL Structure menguji dependent prepositions pada kata kerja akademik seperti *insist on*, *prevent from*.',
      scoringImpact: 'Meningkatkan akurasi idiomatis dan leksikal.'
    },
    goldenRules: [
      'Ingat pasangan baku: *capable of, adhere to, depend on, immune to, prone to*.',
      'Setelah dependent preposition, kata kerja berikutnya selalu berbentuk Gerund (Verb-ing).'
    ],
    questions: [
      {
        id: 'q-m21-1',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'All participating laboratories must strictly adhere _____ established bioethics protocols.',
        options: ['with', 'to', 'for', 'in'],
        correctAnswer: 'to',
        explanation: 'Kata kerja "adhere" berpasangan secara mutlak dengan preposisi "to" -> "adhere to".',
        ruleReference: 'Modul 21: Dependent Prepositions (Adhere to)'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m21-1',
        flawedSentence: 'The patient is susceptible for seasonal viral infections.',
        flawLocation: 'susceptible for',
        correctedSentence: 'The patient is susceptible to seasonal viral infections.',
        linguisticExplanation: 'Kata sifat "susceptible" berpasangan tetap dengan preposisi "to" (bukan "for").'
      }
    ]
  },

  {
    id: 'modul-22-clause-anatomy',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 22,
    title: 'Anatomy of a Clause: Subject, Finite Verb, Complements, and Adjuncts',
    subtitle: 'Membedah rangka konstituen kalimat dan membedakan Finite vs Non-finite Verb',
    levelBadge: 'Sintaksis Klausa · Modul 22',
    estimatedMinutes: 30,
    mentalModelIntro: 'Klausa adalah unit gramatikal terkecil yang mampu mengekspresikan proposisi lengkap. Setiap klausa independen wajib memiliki: (1) Subjek dan (2) Finite Verb (kata kerja berkonjugasi tenses). Non-finite verb (gerund, infinitive, participle) tidak bisa menjadi predikat tunggal suatu klausa.',
    coreConceptSummary: 'Konstituen Klausa: [Subject] + [Finite Verb] + [Direct/Indirect Object] + [Complement] + [Adjunct/Keterangan opsional]. Finite verb memiliki tense dan keselarasan dengan subjek; non-finite verb tidak memiliki tense.',
    sections: [
      {
        stepNumber: '01',
        title: 'Finite vs Non-Finite Verb',
        explanation: 'Memastikan setiap kalimat memiliki predikat utama yang sah secara tenses.',
        formula: 'Independent Clause = Subject + FINITE VERB (+ Object/Complement)',
        examples: [
          { sentence: 'The team analyzed the telemetry.', translation: 'Tim tersebut menganalisis telemetri.', note: 'analyzed = Finite Verb' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The scientist analyzing the data in the laboratory.',
          correctSentence: 'The scientist analyzed the data in the laboratory. / The scientist is analyzing...',
          linguisticReason: '"Analyzing" sendiri adalah non-finite participle yang tidak memiliki to be, sehingga kalimat ini cacat (Sentence Fragment).'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Menghindari Sentence Fragments (klausa tanpa finite verb) adalah syarat dasar kelolosan Band 6.0+.',
      toeflApplication: 'TOEFL Structure secara intensif menguji kalimat yang kehilangan finite verb utama.',
      scoringImpact: 'Menjamin keutuhan struktural kalimat.'
    },
    goldenRules: [
      'Setiap kalimat bahasa Inggris wajib memiliki minimal 1 Finite Verb berkonjugasi tenses.',
      'Verb-ing atau To-Infinitive yang berdiri sendiri tanpa auxiliary TIDAK BISA menjadi Finite Verb.'
    ],
    questions: [
      {
        id: 'q-m22-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Which of the following contains a valid Finite Verb?',
        options: [
          'The research team conducting the survey.',
          'The research team conducted the survey.',
          'The research team to conduct the survey.',
          'The research team for conducting the survey.'
        ],
        correctAnswer: 'The research team conducted the survey.',
        explanation: '"Conducted" adalah Finite Verb bentuk Simple Past yang sah sebagai predikat klausa.',
        ruleReference: 'Modul 22: Finite Verb Identification'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m22-1',
        flawedSentence: 'The new renewable policy promising significant reductions in emissions.',
        flawLocation: 'promising',
        correctedSentence: 'The new renewable policy promises significant reductions in emissions.',
        linguisticExplanation: '"Promising" adalah non-finite participle yang tidak sah sebagai predikat utama. Ubah menjadi finite verb "promises".'
      }
    ]
  },

  {
    id: 'modul-23-five-sentence-patterns',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 23,
    title: 'The 5 Fundamental Sentence Patterns (S-V, S-V-O, S-V-C, S-V-IO-DO, S-V-O-OC)',
    subtitle: 'Arsitektur rangka dasar kalimat bahasa Inggris dari sederhana ke kompleks',
    levelBadge: 'Pola Kalimat · Modul 23',
    estimatedMinutes: 25,
    mentalModelIntro: 'Semua kalimat bahasa Inggris di dunia, betapapun panjang dan rumitnya, dibangun di atas salah satu dari 5 pola dasar rangka sintaksis.',
    coreConceptSummary: 'Pola 1 (S-V: *The ice melted*); Pola 2 (S-V-O: *She wrote a thesis*); Pola 3 (S-V-C: *The theory is sound*); Pola 4 (S-V-IO-DO: *The agency awarded the scientist a grant*); Pola 5 (S-V-O-OC: *The committee elected Dr. Vance chair*).',
    sections: [
      {
        stepNumber: '01',
        title: '5 Arsitektur Rangka Sintaksis Baku',
        explanation: 'Mengenali posisi Direct Object, Indirect Object, dan Object Complement.',
        formula: 'P1: S-V | P2: S-V-O | P3: S-V-C | P4: S-V-IO-DO | P5: S-V-O-OC',
        examples: [
          { sentence: 'The board considered the proposal innovative.', translation: 'Dewan menganggap proposal tersebut inovatif.', note: 'Pola 5: S-V-O-OC' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Variasi 5 pola kalimat menghasilkan skor variasi struktur gramatikal yang tinggi (Band 8.0+).',
      toeflApplication: 'TOEFL Structure menguji susunan kata pada pola ditransitif (IO-DO vs DO + to/for + IO).',
      scoringImpact: 'Meningkatkan keluwesan penulisan akademik.'
    },
    goldenRules: [
      'Pada pola S-V-IO-DO (*give me the book*), jika DO diletakkan lebih dulu, gunakan preposisi to/for (*give the book to me*).',
      'Object Complement menerangkan sifat atau jabatan dari Direct Object (*call him a genius*).'
    ],
    questions: [
      {
        id: 'q-m23-1',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Identify the sentence pattern: "The committee appointed Dr. Elena Vance principal investigator."',
        options: ['S-V-O', 'S-V-C', 'S-V-IO-DO', 'S-V-O-OC'],
        correctAnswer: 'S-V-O-OC',
        explanation: 'Subjek = The committee; Verb = appointed; Object = Dr. Elena Vance; Object Complement = principal investigator.',
        ruleReference: 'Modul 23: S-V-O-OC Sentence Pattern'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m23-1',
        flawedSentence: 'The foundation gave to the laboratory a million-dollar endowment.',
        flawLocation: 'gave to the laboratory a million-dollar endowment',
        correctedSentence: 'The foundation gave the laboratory a million-dollar endowment. / gave a million-dollar endowment to the laboratory.',
        linguisticExplanation: 'Pada pola S-V-IO-DO murni, tidak boleh ada preposisi "to" di depan Indirect Object.'
      }
    ]
  },

  {
    id: 'modul-24-subject-verb-agreement-advanced',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 24,
    title: 'Subject-Verb Agreement Lanjutan (Intervening Phrases & Proximity)',
    subtitle: 'Menyelaraskan jumlah subjek dan menembus frasa sisipan panjang',
    levelBadge: 'S-V Agreement Lanjutan · Modul 24',
    estimatedMinutes: 25,
    mentalModelIntro: 'Dalam penulisan akademik, subjek sejati sering kali terpisah puluhan kata dari kata kerjanya oleh frasa sisipan preposisi (*together with, as well as, including*) atau klausa penjelas. Jangan tertipu oleh kata benda jamak yang berada tepat sebelum kata kerja jika subjek sejatinya tunggal!',
    coreConceptSummary: 'Hukum Frasa Sisipan: *Subject (+ with / as well as / along with / including + Noun) + Verb*. Verb tetap mengikuti Subjek Pertama di depan! Hukum Proksimitas: *Either A or B / Neither A nor B* -> Verb mengikuti subjek terdekat (B).',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Subjek Pertama vs Hukum Kedekatan (Proximity)',
        explanation: 'Membedakan frasa aditif (as well as) dengan kata hubung koordinatif (and).',
        formula: 'Subj 1 + as well as / along with + Subj 2 -> Verb follows SUBJ 1 | Neither S1 nor S2 -> Verb follows S2',
        examples: [
          { sentence: 'The professor, as well as his doctoral candidates, is attending the symposium.', translation: 'Profesor tersebut, bersama para mahasiswa doktoralnya, menghadiri simposium.', note: 'Verb "is" mengikuti subjek tunggal "The professor"' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Menjaga keselarasan S-V pada kalimat akademik panjang adalah pengujian utama kriteria Grammatical Accuracy.',
      toeflApplication: 'TOEFL Structure paling sering menguji frasa sisipan *together with, along with* yang menjebak.',
      scoringImpact: 'Mencegah pemotongan skor akurasi pada kalimat kompleks.'
    },
    goldenRules: [
      '*As well as, along with, together with, in addition to* BUKAN kata hubung "and"; kata kerja tetap mengikuti subjek pertama di depan.',
      'Pada *Neither... nor...* dan *Either... or...*, kata kerja mengikuti subjek yang paling dekat dengannya.'
    ],
    questions: [
      {
        id: 'q-m24-1',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'The lead epidemiologist, along with three laboratory technicians, _____ publishing the groundbreaking report.',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: 'Frasa "along with..." adalah frasa sisipan. Subjek intinya tunggal ("The lead epidemiologist"), sehingga kata kerja yang benar adalah "is".',
        ruleReference: 'Modul 24: Intervening Additive Phrases Agreement'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m24-1',
        flawedSentence: 'The discovery of ancient hominid fossils in the remote caves reveal new migration routes.',
        flawLocation: 'reveal',
        correctedSentence: 'The discovery of ancient hominid fossils in the remote caves reveals new migration routes.',
        linguisticExplanation: 'Subjek sejati kalimat ini adalah "The discovery" (tunggal), bukan "fossils" atau "caves". Kata kerja harus "reveals".'
      }
    ]
  },

  {
    id: 'modul-25-sentence-errors-elimination',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 25,
    title: 'Sentence Errors Elimination: Fragments, Run-ons, dan Comma Splices',
    subtitle: 'Mendeteksi dan memperbaiki 3 kesalahan fatal penyambungan kalimat',
    levelBadge: 'Eliminasi Error · Modul 25',
    estimatedMinutes: 25,
    mentalModelIntro: 'Tiga kesalahan paling mematikan dalam penulisan esai formal: (1) Sentence Fragment (klausa buntung tanpa finite verb/subjek), (2) Run-on Sentence (dua klausa independen digabung tanpa kata hubung/tanda baca), dan (3) Comma Splice (dua klausa independen hanya dihubungkan dengan koma saja tanpa konjungsi).',
    coreConceptSummary: 'Memperbaiki Comma Splice: (a) Gunakan titik (.), (b) Gunakan titik koma (;), (c) Gunakan koma + FANBOYS (, and / , but / , so), atau (d) Jadikan salah satu klausa sebagai anak kalimat subordinasi (*Although...*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Bedah Comma Splice & Solusi Standar',
        explanation: 'Koma tunggal tidak cukup kuat untuk menyatukan dua klausa independen utuh.',
        formula: 'Salah: Indep Clause, Indep Clause ❌ | Benar: Indep Clause; Indep Clause ✔ | Indep Clause, and Indep Clause ✔',
        examples: [
          { sentence: 'The empirical data was conclusive; consequently, the team proceeded to clinical trials.', translation: 'Data empiris tersebut konklusif; oleh karena itu, tim melanjutkan ke uji klinis.', note: 'Semicolon + Conjunctive Adverb' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Comma Splice dan Fragments langsung membatasi skor Grammatical Range & Accuracy maksimal pada Band 5.0.',
      toeflApplication: 'TOEFL Structure menguji kemampuan mengidentifikasi kalimat yang disambung secara ilegal.',
      scoringImpact: 'Menghilangkan penalti berat pada kriteria tata bahasa.'
    },
    goldenRules: [
      'Jangan pernah menyambung dua klausa lengkap hanya dengan tanda koma (Comma Splice).',
      'Gunakan titik koma (;) atau koma + konjungsi FANBOYS untuk menyatukan dua klausa independen.'
    ],
    questions: [
      {
        id: 'q-m25-1',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Which of the following sentences correctly resolves the comma splice?',
        options: [
          'The hypothesis was contested, the researchers repeated the trial.',
          'The hypothesis was contested; therefore, the researchers repeated the trial.',
          'The hypothesis was contested the researchers repeated the trial.',
          'The hypothesis was contested, however, the researchers repeated the trial.'
        ],
        correctAnswer: 'The hypothesis was contested; therefore, the researchers repeated the trial.',
        explanation: 'Menggunakan titik koma (;) sebelum transitional adverb "therefore" dan koma setelahnya adalah solusi baku untuk comma splice.',
        ruleReference: 'Modul 25: Comma Splice Correction with Semicolon'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m25-1',
        flawedSentence: 'The battery capacity degraded rapidly, the engineers redesigned the cooling module.',
        flawLocation: 'rapidly, the',
        correctedSentence: 'The battery capacity degraded rapidly; therefore, the engineers redesigned the cooling module.',
        linguisticExplanation: 'Dua klausa independen tidak boleh disambung hanya dengan tanda koma (Comma Splice). Gunakan titik koma dan kata transisi.'
      }
    ]
  },

  {
    id: 'modul-26-present-dimensions',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Tenses Logic',
    moduleNumber: 26,
    title: 'Present Dimensions: Simple, Continuous, Perfect, dan Perfect Continuous',
    subtitle: 'Fakta abadi, tren kontemporer, akumulasi pengalaman, dan durasi berkelanjutan',
    levelBadge: 'Dimensi Present · Modul 26',
    estimatedMinutes: 30,
    mentalModelIntro: 'Present Tense bukan sekadar "waktu sekarang". Simple Present menyatakan kebenaran ilmiah dan hukum alam abadi; Present Continuous menyatakan tren sementara yang sedang berlangsung; Present Perfect menghubungkan masa lalu dengan bukti nyata saat ini; Present Perfect Continuous menekankan durasi aksi yang masih terus berjalan hingga detik ini.',
    coreConceptSummary: 'Simple Present (S + V1/s: *Water boils at 100°C*). Continuous (S + is/am/are + V-ing: *Emissions are rising*). Perfect (S + have/has + V3: *Scientists have proven*). Perfect Continuous (S + have/has + been + V-ing + for/since: *They have been studying climate change for decades*).',
    sections: [
      {
        stepNumber: '01',
        title: '4 Dimensi Sudut Pandang Present',
        explanation: 'Membedakan fakta permanen, proses kontemporer, hasil selesai, dan durasi berkelanjutan.',
        formula: 'Fact: S + V1 | Temporary: S + be + V-ing | Result: S + have/has + V3 | Duration: S + have/has + been + V-ing',
        examples: [
          { sentence: 'Astronomers have been observing the exoplanet since 2018.', translation: 'Para astronom telah mengamati eksoplanet tersebut sejak 2018 (dan masih terus mengamati).', note: 'Present Perfect Continuous' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Kerapian membedakan Present Simple (fakta data) dan Present Perfect (tren perubahan) adalah kunci IELTS Task 1 & 2.',
      toeflApplication: 'TOEFL Structure menguji penggunaan *since + titik waktu* dan *for + rentang durasi*.',
      scoringImpact: 'Meningkatkan akurasi pemilihan tenses.'
    },
    goldenRules: [
      'Gunakan *since* untuk titik awal waktu lampau (*since 2010*); gunakan *for* untuk durasi kuantitas waktu (*for ten years*).',
      'Gunakan Present Simple untuk teori ilmiah dan fakta umum yang selalu benar.'
    ],
    questions: [
      {
        id: 'q-m26-1',
        category: 'Tenses Logic',
        difficulty: 'Dasar',
        question: 'Epidemiologists _____ the efficacy of the new therapeutic agent for over six months.',
        options: ['are evaluating', 'have been evaluating', 'evaluated', 'evaluate'],
        correctAnswer: 'have been evaluating',
        explanation: 'Frasa durasi "for over six months" yang masih berlangsung hingga kini menuntut Present Perfect Continuous -> "have been evaluating".',
        ruleReference: 'Modul 26: Present Perfect Continuous for Duration'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m26-1',
        flawedSentence: 'The research laboratory is operating in Geneva since 1995.',
        flawLocation: 'is operating ... since 1995',
        correctedSentence: 'The research laboratory has been operating in Geneva since 1995.',
        linguisticExplanation: 'Keterangan waktu "since 1995" menuntut Present Perfect / Present Perfect Continuous, bukan Present Continuous "is operating".'
      }
    ]
  },

  {
    id: 'modul-27-past-dimensions',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Tenses Logic',
    moduleNumber: 27,
    title: 'Past Dimensions: Simple Past, Past Continuous, Past Perfect, dan Past Perfect Continuous',
    subtitle: 'Kronologi peristiwa lampau, interupsi latar belakang, dan aksi terdahulu',
    levelBadge: 'Dimensi Past · Modul 27',
    estimatedMinutes: 30,
    mentalModelIntro: 'Masa lampau memiliki kronologi berlapis: Simple Past menyatakan peristiwa yang tuntas pada waktu spesifik di masa lalu; Past Continuous menyatakan aksi latar belakang yang sedang berlangsung saat diinterupsi; Past Perfect (Had + V3) menyatakan aksi "paling lampau" yang terjadi SEBELUM peristiwa lampau lainnya.',
    coreConceptSummary: 'Past Simple (S + V2: *The treaty was signed in 1945*). Past Continuous (S + was/were + V-ing: *While the sensors were recording...*). Past Perfect (S + had + V3: *When the audit began, they had already deleted the files*). Past Perfect Continuous (S + had been + V-ing: *He had been lecturing for an hour before the power failed*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Kronologi Past Perfect (The Earlier Past)',
        explanation: 'Past Perfect mutlak digunakan untuk membedakan urutan dua aksi yang sama-sama terjadi di masa lalu.',
        formula: 'Past Perfect (Aksi 1 / Lebih Lampau: had + V3) -> Simple Past (Aksi 2 / Lebih Baru: V2)',
        examples: [
          { sentence: 'The satellite had transmitted the telemetry before communication was lost.', translation: 'Satelit tersebut telah mengirimkan telemetri sebelum komunikasi terputus.', note: 'had transmitted (Aksi 1) -> was lost (Aksi 2)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'IELTS Writing Task 1 grafik historis menuntut penguasaan Past Simple dan Past Perfect (*By 2000, production had overtaken consumption*).',
      toeflApplication: 'TOEFL Structure menguji keabsahan urutan Past Perfect dengan kata hubung *by the time, before, after*.',
      scoringImpact: 'Meningkatkan koherensi kronologis laporan data.'
    },
    goldenRules: [
      'Gunakan Past Perfect (had + V3) hanya bila ada peristiwa masa lalu lain sebagai titik acuan pembanding.',
      'Waktu lampau spesifik (*yesterday, in 2010, two days ago*) WAJIB menggunakan Simple Past (V2), bukan Present Perfect.'
    ],
    questions: [
      {
        id: 'q-m27-1',
        category: 'Tenses Logic',
        difficulty: 'Menengah',
        question: 'By the time the peer review committee convened, the lead researcher _____ a revised manuscript.',
        options: ['already submitted', 'had already submitted', 'has already submitted', 'was submitting'],
        correctAnswer: 'had already submitted',
        explanation: 'Peristiwa pengiriman naskah selesai SEBELUM komite berkumpul di masa lalu (Past Perfect) -> "had already submitted".',
        ruleReference: 'Modul 27: Past Perfect Chronology'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m27-1',
        flawedSentence: 'The economist has published a landmark paper in 1998.',
        flawLocation: 'has published ... in 1998',
        correctedSentence: 'The economist published a landmark paper in 1998.',
        linguisticExplanation: 'Keterangan waktu lampau definit spesifik "in 1998" mewajibkan Simple Past (V2 "published"), bukan Present Perfect.'
      }
    ]
  },

  {
    id: 'modul-28-future-dimensions',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Tenses Logic',
    moduleNumber: 28,
    title: 'Future Dimensions: Will, Be Going To, Future Continuous, dan Future Perfect',
    subtitle: 'Prediksi teoretis, rencana konkret, proyeksi proses, dan target tuntas batas waktu',
    levelBadge: 'Dimensi Future · Modul 28',
    estimatedMinutes: 25,
    mentalModelIntro: 'Masa depan dapat diproyeksikan dengan derajat kepastian berbeda: WILL untuk prediksi teoretis dan keputusan spontan; BE GOING TO untuk rencana berdasar bukti nyata saat ini; FUTURE CONTINUOUS (will be + V-ing) untuk aksi yang sedang berlangsung pada titik waktu masa depan; FUTURE PERFECT (will have + V3) untuk target yang diproyeksikan SUDAH SELESAI sebelum batas waktu masa depan.',
    coreConceptSummary: 'Future Simple (*will + V1*). Future Intent (*be going to + V1*). Future Continuous (*will be + V-ing*). Future Perfect (*will have + V3 + by [future deadline]*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Future Perfect & Proyeksi Batas Waktu (By + Time)',
        explanation: 'Menyatakan akumulasi pencapaian sebelum suatu target waktu di masa mendatang.',
        formula: 'By + [Future Time] + Subject + will have + Verb 3 (Past Participle)',
        examples: [
          { sentence: 'By 2030, the consortium will have completed the oceanic carbon sequestration grid.', translation: 'Menjelang tahun 2030, konsorsium tersebut akan telah menyelesaikan jaringan penyerapan karbon laut.', note: 'Future Perfect' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Proyeksi masa depan pada grafik IELTS Task 1 (*It is projected that by 2050 emissions will have doubled...*) menghasilkan skor grammar tertinggi.',
      toeflApplication: 'TOEFL Structure menguji struktur *by the time + Present Simple, S + will have + V3*.',
      scoringImpact: 'Meningkatkan variasi tenses futuristik berstandar akademik.'
    },
    goldenRules: [
      'Gunakan Future Perfect (*will have + V3*) setiap kali ada penanda batas waktu *By [Future Year/Deadline]*.',
      'Dalam anak kalimat waktu (time clause: *when, before, as soon as*), jangan gunakan "will", gunakan Simple Present (*When he arrives, BUKAN When he will arrive*).'
    ],
    questions: [
      {
        id: 'q-m28-1',
        category: 'Tenses Logic',
        difficulty: 'Menengah',
        question: 'By the end of the fiscal decade, renewable energy sources _____ fossil fuels in total output.',
        options: ['will surpass', 'will have surpassed', 'surpassed', 'have surpassed'],
        correctAnswer: 'will have surpassed',
        explanation: 'Penanda waktu "By the end of the fiscal decade" menuntut Future Perfect -> "will have surpassed".',
        ruleReference: 'Modul 28: Future Perfect with By-Time Marker'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m28-1',
        flawedSentence: 'When the international delegation will arrive tomorrow, the rector will deliver the keynote address.',
        flawLocation: 'will arrive',
        correctedSentence: 'When the international delegation arrives tomorrow, the rector will deliver the keynote address.',
        linguisticExplanation: 'Dalam anak kalimat waktu yang diawali "When", masa depan diungkapkan dengan Simple Present "arrives", bukan "will arrive".'
      }
    ]
  },

  {
    id: 'modul-29-passive-voice',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 29,
    title: 'Passive Voice Transformation & Stative Passive Structures',
    subtitle: 'Objektivitas penulisan ilmiah, agen tersembunyi, dan impersonal passive',
    levelBadge: 'Kalimat Pasif · Modul 29',
    estimatedMinutes: 30,
    mentalModelIntro: 'Dalam penulisan sains dan akademik, pelaku eksperimen tidak sepenting proses atau hasil penelitian itu sendiri. Kalimat Pasif (Passive Voice) memindahkan fokus dari subjek pelaku ke objek penerima aksi untuk menciptakan nada objektif dan impersonal.',
    coreConceptSummary: 'Rangka Pasif Mutlak: Subject + To Be (sesuai tenses) + Verb 3 (Past Participle) (+ by Agent). Impersonal Passive: *It is widely believed that... / The data is considered to be...*.',
    sections: [
      {
        stepNumber: '01',
        title: 'Formula Transformasi Pasif Lintas Tenses',
        explanation: 'Mempertahankan dimensi tenses asli dengan mengubah bentuk To Be yang sesuai.',
        formula: 'Active: Subj + Verb + Obj -> Passive: Obj + [To Be in Tense] + Verb 3 (+ by Subj)',
        examples: [
          { sentence: 'The samples were analyzed using mass spectrometry.', translation: 'Sampel-sampel tersebut dianalisis menggunakan spektrometri massa.', note: 'Passive Voice Simple Past' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penulisan IELTS Academic Task 1 diagram proses dan metodologi Task 2 mutlak menggunakan Passive Voice.',
      toeflApplication: 'TOEFL Structure menguji keabsahan bentuk Past Participle setelah To Be pada kalimat pasif.',
      scoringImpact: 'Meningkatkan register formal dan objektivitas ilmiah.'
    },
    goldenRules: [
      'Kalimat pasif WAJIB mengandung To Be + Verb 3.',
      'Hanya kata kerja transitif (yang memiliki objek langsung) yang dapat dipasifkan.'
    ],
    questions: [
      {
        id: 'q-m29-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'The clinical specimens _____ in a temperature-controlled cryogenic chamber.',
        options: ['were stored', 'stored', 'were storing', 'have stored'],
        correctAnswer: 'were stored',
        explanation: 'Spesimen tidak menyimpan diri sendiri melainkan disimpan (pasif lampau) -> "were stored".',
        ruleReference: 'Modul 29: Passive Voice Construction'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m29-1',
        flawedSentence: 'The controversial report was publish by the ministry last week.',
        flawLocation: 'was publish',
        correctedSentence: 'The controversial report was published by the ministry last week.',
        linguisticExplanation: 'Setelah To Be "was", kata kerja pasif wajib berakhiran Past Participle "published" (Verb 3).'
      }
    ]
  },

  {
    id: 'modul-30-conditionals-logic',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis, Pola Kalimat & Dimensi Waktu',
    categoryKey: 'Complex Structures',
    moduleNumber: 30,
    title: 'Conditionals Logic: Zero, First, Second, Third, dan Mixed Conditionals',
    subtitle: 'Pengandaian ilmiah, kemungkinan masa depan, hipotesis imajinatif, dan penyesalan lampau',
    levelBadge: 'Kalimat Pengandaian · Modul 30',
    estimatedMinutes: 30,
    mentalModelIntro: 'Conditionals adalah instrumen logika untuk menghubungkan syarat (Condition) dengan konsekuensi (Result). Ada 5 jenis: Zero (Hukum alam), First (Kemungkinan nyata masa depan), Second (Hipotesis imajinatif masa kini), Third (Pengandaian masa lampau yang tidak terjadi), dan Mixed (Pengandaian masa lalu yang berdampak pada masa kini).',
    coreConceptSummary: 'Zero (*If + Present, Present*). First (*If + Present, Will + V1*). Second (*If + Past Simple, Would + V1*). Third (*If + Past Perfect, Would have + V3*). Mixed (*If + had + V3, Would + V1 now*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Matriks 5 Tipe Kalimat Pengandaian',
        explanation: 'Memetakan tingkat probabilitas dan dimensi waktu secara presisi.',
        formula: 'Type 1: If + V1, Will + V1 | Type 2: If + V2/were, Would + V1 | Type 3: If + had V3, Would have V3',
        examples: [
          { sentence: 'If the catalyst were added earlier, the chemical reaction would stabilize.', translation: 'Jika katalis tersebut ditambahkan lebih awal, reaksi kimia itu akan stabil (Second Conditional: bentuk were).', note: 'Second Conditional subjunctive were' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Second & Third Conditionals dalam esai argumentatif membuktikan penguasaan grammar Band 8.0+.',
      toeflApplication: 'TOEFL Structure menguji penggunaan "were" untuk semua subjek pada Second Conditional (*If I were you*).',
      scoringImpact: 'Meningkatkan kompleksitas hipotesis dan argumen.'
    },
    goldenRules: [
      'Pada Second Conditional formal, gunakan "were" untuk SEMUA subjek (termasuk I, He, She, It).',
      'Jangan pernah letakkan "would" di dalam anak kalimat "If" (*If I would have known ❌ -> If I had known ✔*).'
    ],
    questions: [
      {
        id: 'q-m30-1',
        category: 'Complex Structures',
        difficulty: 'Menengah',
        question: 'If the epidemiological team _____ the anomaly earlier, the contagion would have been contained.',
        options: ['detected', 'had detected', 'has detected', 'would detect'],
        correctAnswer: 'had detected',
        explanation: 'Induk kalimat menggunakan "would have been contained" (Third Conditional), sehingga klausa if membutuhkan Past Perfect "had detected".',
        ruleReference: 'Modul 30: Third Conditional'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m30-1',
        flawedSentence: 'If the administration would have allocated more funds, the research would be completed.',
        flawLocation: 'would have allocated',
        correctedSentence: 'If the administration had allocated more funds, the research would be completed.',
        linguisticExplanation: 'Klausa "If" tidak boleh mengandung modal "would have". Gunakan Past Perfect "had allocated".'
      }
    ]
  },

  // =========================================================================
  // TAHAP 5: RETORIKA AKADEMIK, KLAUSA KOMPLEKS & KESIAPAN UJIAN
  // =========================================================================
  {
    id: 'modul-31-conjunctions-transitions',
    stageNumber: 5,
    stageName: 'Tahap 5: Retorika Akademik, Klausa Kompleks & Kesiapan Ujian',
    categoryKey: 'Complex Structures',
    moduleNumber: 31,
    title: 'Coordinating Conjunctions (FANBOYS), Subordinasi, dan Transisi Antar-Kalimat',
    subtitle: 'Membangun jembatan logika antar gagasan tanpa kompromi tanda baca',
    levelBadge: 'Konjungsi & Transisi · Modul 31',
    estimatedMinutes: 25,
    mentalModelIntro: 'Penulisan esai formal membutuhkan penghubung logika yang kokoh. Ada 3 jenis konjungsi: Coordinating (FANBOYS: For, And, Nor, But, Or, Yet, So), Subordinating (Although, Because, Since, Whereas), dan Conjunctive Adverbs (However, Furthermore, Consequently, Nevertheless).',
    coreConceptSummary: 'FANBOYS menghubungkan 2 klausa independen dengan tanda koma sebelumnya (, and / , but). Subordinasi mengubah klausa menjadi anak kalimat (*Although emissions fell, ...*). Conjunctive Adverbs memisahkan 2 kalimat mandiri (*; however, ...*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Aturan Tanda Baca Konjungsi vs Adverbia Transisi',
        explanation: 'Membedakan konjungsi gramatikal dengan kata keterangan transisi wacana.',
        formula: 'Clause 1, [FANBOYS] Clause 2 | [Although Clause 1], Clause 2 | Clause 1; [However], Clause 2',
        examples: [
          { sentence: 'Solar costs plummeted; however, grid storage remains an engineering hurdle.', translation: 'Biaya tenaga surya anjlok; namun, penyimpanan jaringan listrik tetap menjadi hambatan teknis.', note: 'Semicolon + However + Comma' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan cohesive devices yang bervariasi dan tidak mekanis adalah penentu skor Band 9.0 Coherence & Cohesion.',
      toeflApplication: 'TOEFL Reading & Writing menguji transisi kontras (*whereas, despite, nonetheless*).',
      scoringImpact: 'Meningkatkan kohesi dan kepadatan wacana argumentatif.'
    },
    goldenRules: [
      '*Despite* dan *In spite of* diikuti Noun / Gerund (-ing), BUKAN klausa lengkap (*Despite it rained ❌ -> Despite the rain ✔*).',
      '*Although* dan *Whereas* diikuti klausa lengkap (Subjek + Kata Kerja).'
    ],
    questions: [
      {
        id: 'q-m31-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: '_____ the severe budget reductions, the laboratory succeeded in meeting all research milestones.',
        options: ['Although', 'Despite', 'Even though', 'Whereas'],
        correctAnswer: 'Despite',
        explanation: 'Frasa "the severe budget reductions" adalah Noun Phrase, sehingga memerlukan preposisi "Despite" (bukan konjungsi klausa "Although").',
        ruleReference: 'Modul 31: Despite vs Although'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m31-1',
        flawedSentence: 'Despite the empirical data was inconclusive, the team published their preliminary findings.',
        flawLocation: 'Despite the empirical data was inconclusive',
        correctedSentence: 'Although the empirical data was inconclusive, the team published their preliminary findings.',
        linguisticExplanation: '"The empirical data was inconclusive" adalah klausa lengkap (S + V). Gunakan konjungsi "Although", bukan preposisi "Despite".'
      }
    ]
  },

  {
    id: 'modul-32-relative-clauses',
    stageNumber: 5,
    stageName: 'Tahap 5: Retorika Akademik, Klausa Kompleks & Kesiapan Ujian',
    categoryKey: 'Complex Structures',
    moduleNumber: 32,
    title: 'Relative Clauses: Defining vs Non-Defining, Punctuation, dan Relative Pronoun Omission',
    subtitle: 'Klausa penjelas esensial vs tambahan, aturan koma, dan reduksi pronoun kontak',
    levelBadge: 'Klausa Relatif · Modul 32',
    estimatedMinutes: 30,
    mentalModelIntro: 'Relative Clause menyematkan informasi deskriptif langsung ke dalam frasa nomina. Defining Relative Clause memberikan informasi vital tanpa koma (*The students who studied passed*); Non-Defining Relative Clause memberikan informasi pelengkap ekstra di antara dua tanda koma (*Dr. Vance, who studied at Oxford, presented the paper*).',
    coreConceptSummary: 'Defining (Tanpa koma, boleh pakai "that"). Non-Defining (Wajib koma, DILARANG pakai "that", wajib who/which). Omission: Relative pronoun dapat dihilangkan jika berposisi sebagai OBJEK klausa (*The method [that] we used*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Koma & Pantangan "That" pada Non-Defining',
        explanation: 'Tanda koma mengubah makna dari penentu identitas menjadi sekadar keterangan tambahan.',
        formula: 'Non-Defining: Noun, which/who + clause, ... (Dilarang menggunakan THAT setelah koma)',
        examples: [
          { sentence: 'The Large Hadron Collider, which is located in Geneva, resumed operations.', translation: 'Large Hadron Collider, yang berlokasi di Jenewa, kembali beroperasi.', note: 'Non-defining (koma + which)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Ketepatan tanda koma pada Non-defining relative clauses sangat diperhatikan pada kriteria Grammatical Accuracy.',
      toeflApplication: 'TOEFL Structure menguji larangan "that" setelah koma (*, that ❌*).',
      scoringImpact: 'Meningkatkan presisi modifikasi nomina kompleks.'
    },
    goldenRules: [
      'Jangan pernah gunakan "that" tepat setelah tanda koma pada relative clause.',
      'Gunakan "whose" untuk kepemilikan orang maupun benda (*a theory whose implications...*).'
    ],
    questions: [
      {
        id: 'q-m32-1',
        category: 'Complex Structures',
        difficulty: 'Menengah',
        question: 'The James Webb Space Telescope, _____ was launched in 2021, has revolutionized deep-space astrophysics.',
        options: ['that', 'which', 'who', 'whose'],
        correctAnswer: 'which',
        explanation: 'Klausa ini adalah Non-Defining Relative Clause yang diapit koma, sehingga wajib menggunakan "which" (bukan "that").',
        ruleReference: 'Modul 32: Non-Defining Relative Clauses'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m32-1',
        flawedSentence: 'The clinical trial, that began last March, yielded remarkable therapeutic results.',
        flawLocation: 'that began',
        correctedSentence: 'The clinical trial, which began last March, yielded remarkable therapeutic results.',
        linguisticExplanation: 'Dilarang menggunakan relative pronoun "that" dalam klausa non-defining yang diapit tanda koma. Gunakan "which".'
      }
    ]
  },

  {
    id: 'modul-33-noun-clauses-embedded-questions',
    stageNumber: 5,
    stageName: 'Tahap 5: Retorika Akademik, Klausa Kompleks & Kesiapan Ujian',
    categoryKey: 'Complex Structures',
    moduleNumber: 33,
    title: 'Noun Clauses & Embedded Questions',
    subtitle: 'Klausa yang bertindak sebagai nomina dan susunan kata pernyataan dalam pertanyaan terselip',
    levelBadge: 'Klausa Nomina · Modul 33',
    estimatedMinutes: 25,
    mentalModelIntro: 'Noun Clause adalah seluruh klausa (mengandung subjek dan kata kerja) yang berfungsi persis seperti satu kata benda (Noun) sebagai Subjek atau Objek kalimat. Embedded Question adalah pertanyaan yang terselip di dalam kalimat lain; susunan katanya WAJIB kembali ke urutan kalimat pernyataan normal (Subject + Verb), BUKAN susunan kalimat tanya (*where is it ❌ -> where it is ✔*).',
    coreConceptSummary: 'That-clauses: *That the Earth warms is undeniable*. Wh-clauses / Embedded questions: *The researchers investigated why the reaction failed (BUKAN: why did the reaction fail)*. If/Whether clauses: *The board examined whether the data was authentic*.',
    sections: [
      {
        stepNumber: '01',
        title: 'Hukum Urutan Normal Embedded Questions',
        explanation: 'Pertanyaan terselip membuang struktur inversi tanya dan operator do/does/did.',
        formula: 'Main Clause + Question Word (Why/How/Where) + SUBJECT + FINITE VERB',
        examples: [
          { sentence: 'Economists are debating how the new tariffs will affect inflation.', translation: 'Para ekonom sedang memperdebatkan bagaimana tarif baru tersebut akan mempengaruhi inflasi.', note: 'how + Subject (tariffs) + Verb (will affect)' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan noun clauses (*It is evident that... / The study explores how...*) memperkaya variasi klausa kompleks.',
      toeflApplication: 'TOEFL Structure paling sering menjebak peserta dengan embedded questions yang masih mempertahankan inversi tanya (*why is the... ❌*).',
      scoringImpact: 'Mencegah kesalahan susunan kata dasar dalam kalimat majemuk bertingkat.'
    },
    goldenRules: [
      'Dalam embedded question, urutan kata SELALU Subjek sebelum Kata Kerja (S + V).',
      'Jangan gunakan auxiliary operator *do, does, did* di dalam embedded question (*I wonder where he goes, bukan where does he go*).'
    ],
    questions: [
      {
        id: 'q-m33-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'The committee inquired _____ the clinical trial had been completed ahead of schedule.',
        options: ['why did', 'why', 'how did', 'that why'],
        correctAnswer: 'why',
        explanation: 'Setelah kata tanya "why", kalimat terselip mempertahankan urutan normal (Subjek: "the clinical trial" + Verb: "had been completed") tanpa operator "did".',
        ruleReference: 'Modul 33: Embedded Question Word Order'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m33-1',
        flawedSentence: 'The investigators could not determine what caused the sudden power failure in the lab.',
        flawLocation: 'what did cause',
        correctedSentence: 'The investigators could not determine what caused the sudden power failure in the lab.',
        linguisticExplanation: 'Dalam embedded question subjek, tidak boleh menyisipkan operator "did cause". Gunakan "what caused".'
      }
    ]
  },

  {
    id: 'modul-34-subjunctive-and-inversion',
    stageNumber: 5,
    stageName: 'Tahap 5: Retorika Akademik, Klausa Kompleks & Kesiapan Ujian',
    categoryKey: 'Complex Structures',
    moduleNumber: 34,
    title: 'Subjunctive Mood & Inversion for Emphasis',
    subtitle: 'Modus mandat formal dan pembalikan subjek-predikat untuk penekanan retorika tingkat tinggi',
    levelBadge: 'Subjunctive & Inversi · Modul 34',
    estimatedMinutes: 30,
    mentalModelIntro: 'Dua konstruksi paling prestisius dalam tata bahasa Inggris: (1) Subjunctive Mood (kata kerja dasar Bare Infinitive setelah verba mandat seperti *recommend that S + be/V1*), dan (2) Inversion (pembalikan kata kerja bantu sebelum subjek setelah kata keterangan negatif/pembatas seperti *Rarely, Seldom, Under no circumstances*).',
    coreConceptSummary: 'Subjunctive: *It is essential that he BE informed (BUKAN is)*. Negative Inversion: *Negative Adverb + Auxiliary + Subject + Main Verb* (*Rarely have scientists observed such phenomena*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Formula Negative Inversion & Mandative Subjunctive',
        explanation: 'Menghadirkan gaya retorika canggih yang memikat penguji ujian internasional.',
        formula: 'Subjunctive: recommend/insist that + S + BARE INFINITIVE | Inversion: Seldom/Rarely + Aux + S + Verb',
        examples: [
          { sentence: 'Seldom has an archaeological discovery provoked such intense academic debate.', translation: 'Jarang sekali sebuah penemuan arkeologi memicu perdebatan akademis yang begitu sengit.', note: 'Negative Inversion: Seldom + has + discovery + provoked' }
        ]
      }
    ],
    examBridge: {
      ieltsApplication: 'Satu kalimat inversi negatif yang tepat di paragraf pendahuluan atau konklusi IELTS Writing Task 2 langsung menandai status Band 8.5–9.0.',
      toeflApplication: 'TOEFL Structure menguji Subjunctive Bare Infinitive setelah *insist that / demand that*.',
      scoringImpact: 'Membuktikan penguasaan retorika tingkat ahli (Mastery Level).'
    },
    goldenRules: [
      'Setelah verba mandat (*demand, recommend, suggest, insist that*), kata kerja WAJIB Bare Infinitive tanpa -s atau to be (*he be, she submit*).',
      'Awali inversi negatif dengan Auxiliary Verb sebelum Subjek (*Under no circumstances should you...*).'
    ],
    questions: [
      {
        id: 'q-m34-1',
        category: 'Complex Structures',
        difficulty: 'Lanjutan',
        question: 'The ethics oversight board recommended that the laboratory director _____ the experiment immediately.',
        options: ['suspends', 'suspend', 'suspended', 'must suspend'],
        correctAnswer: 'suspend',
        explanation: 'Mandative Subjunctive setelah "recommended that" mewajibkan kata kerja dasar Bare Infinitive "suspend" (tanpa akhiran -s).',
        ruleReference: 'Modul 34: Mandative Subjunctive'
      },
      {
        id: 'q-m34-2',
        category: 'Complex Structures',
        difficulty: 'Lanjutan',
        question: 'Rarely _____ such extreme meteorological anomalies recorded in the temperate zone.',
        options: ['have', 'have been', 'are', 'has been'],
        correctAnswer: 'have',
        explanation: 'Inversi negatif: "Rarely" + Auxiliary "have" + Subjek jamak ("such extreme meteorological anomalies") + V3 "been recorded" -> "Rarely have such anomalies been recorded".',
        ruleReference: 'Modul 34: Negative Inversion'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m34-1',
        flawedSentence: 'The dean insisted that the professor publishes the complete dataset.',
        flawLocation: 'publishes',
        correctedSentence: 'The dean insisted that the professor publish the complete dataset.',
        linguisticExplanation: 'Setelah "insisted that", kata kerja harus berbentuk Subjunctive Bare Infinitive "publish" tanpa akhiran -s.'
      }
    ]
  },

  {
    id: 'modul-35-participle-clauses-register-mastery',
    stageNumber: 5,
    stageName: 'Tahap 5: Retorika Akademik, Klausa Kompleks & Kesiapan Ujian',
    categoryKey: 'Exam Readiness',
    moduleNumber: 35,
    title: 'Participle Clauses, Absolute Structures & Academic Register Mastery (IELTS 8.5+ & TOEFL 110+)',
    subtitle: 'Reduksi klausa tingkat tinggi, eliminasi dangling modifiers, dan pemadatan sintaksis puncak',
    levelBadge: 'Mahakarya Retorika · Modul 35',
    estimatedMinutes: 30,
    mentalModelIntro: 'Puncak dari penguasaan tata bahasa dan sintaksis bahasa Inggris adalah kemampuan memadatkan ide-ide kompleks secara elegan tanpa pemborosan kata (Wordiness). Participle Clauses memungkinkan Anda menggabungkan dua kalimat menjadi satu struktur padat berbobot tinggi. Hati-hati dengan Dangling Modifiers (subjek participle yang tidak cocok dengan subjek utama).',
    coreConceptSummary: 'Present Participle (*Analyzing the telemetry, the team discovered...*). Past Participle (*Published in 2020, the monograph revolutionized...*). Perfect Participle (*Having completed the trial, they presented...*). Absolute Structure (*The budget having been approved, construction commenced*).',
    sections: [
      {
        stepNumber: '01',
        title: 'Pemadatan Sintaksis & Pencegahan Dangling Modifiers',
        explanation: 'Subjek pelaku dari participle phrase pembuka WAJIB menjadi Subjek gramatikal dari induk kalimat.',
        formula: '[Present/Past/Perfect Participle Phrase], + SUBJECT (Pelaku Sejati) + FINITE VERB',
        examples: [
          { sentence: 'Having analyzed the longitudinal dataset, the epidemiologists isolated the viral vector.', translation: 'Setelah menganalisis kumpulan data longitudinal, para ahli epidemiologi mengisolasi vektor virus tersebut.', note: 'Perfect Participle Reduction' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'Walking into the laboratory, the microscope was broken.',
          correctSentence: 'Walking into the laboratory, the scientist noticed that the microscope was broken.',
          linguisticReason: 'Pada kalimat salah, subjek induk adalah "the microscope" (mikroskop tidak bisa berjalan!). Subjek pembuka harus diselaraskan dengan orang yang berjalan yaitu "the scientist" (Dangling Modifier fix).'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Participle Clauses dan Absolute Structures yang presisi adalah mahkota dari pencapaian IELTS Band 9.0 Grammatical Range & Accuracy.',
      toeflApplication: 'Section Writing TOEFL iBT Integrated & Academic Discussion memberikan skor 5/5 penuh pada esai yang menunjukkan kepadatan sintaksis participle tingkat lanjut.',
      scoringImpact: 'Mencapai batas tertinggi skor kelulusan bahasa Inggris internasional.'
    },
    goldenRules: [
      'Pastikan subjek di awal kalimat participle adalah pihak yang benar-benar melakukan aksi tersebut (hindari Dangling Modifier).',
      'Gunakan Perfect Participle (*Having + V3*) untuk menegaskan bahwa aksi pertama selesai sepenuhnya sebelum aksi kedua dimulai.'
    ],
    questions: [
      {
        id: 'q-m35-1',
        category: 'Exam Readiness',
        difficulty: 'Lanjutan',
        question: '_____ all empirical verification protocols, the consortium published their findings in Nature.',
        options: ['Having completed', 'Completed', 'Completing having', 'On completing of'],
        correctAnswer: 'Having completed',
        explanation: 'Perfect Participle "Having completed" menyatakan aksi penyelesaian seluruh protokol mendahului tindakan publikasi hasil.',
        ruleReference: 'Modul 35: Perfect Participle Clauses'
      },
      {
        id: 'q-m35-2',
        category: 'Exam Readiness',
        difficulty: 'Lanjutan',
        question: 'Which of the following sentences is free from a dangling modifier error?',
        options: [
          'Examining the telescope data, a new nebula was discovered by the astronomer.',
          'Examining the telescope data, the astronomer discovered a new nebula.',
          'Examining the telescope data, a discovery was made of a new nebula.',
          'Having examined the telescope data, the nebula appeared clearly.'
        ],
        correctAnswer: 'Examining the telescope data, the astronomer discovered a new nebula.',
        explanation: 'Subjek induk kalimat "the astronomer" adalah pihak yang secara logis melakukan aksi "Examining the telescope data".',
        ruleReference: 'Modul 35: Dangling Modifier Resolution'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m35-1',
        flawedSentence: 'Upon entering the cryogenic facility, the alarm was triggered by the technician.',
        flawLocation: 'the alarm was triggered by the technician',
        correctedSentence: 'Upon entering the cryogenic facility, the technician triggered the alarm.',
        linguisticExplanation: 'Frasa pembuka "Upon entering..." menuntut subjek yang melakukan aksi masuk ("the technician"), bukan "the alarm" (Dangling modifier).'
      }
    ]
  }
];

