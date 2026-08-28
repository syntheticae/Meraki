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
  // TAHAP 1: FONDASI MUTLAK & MORFOLOGI KATA BENDA (NOUN MORPHOLOGY)
  // =========================================================================
  {
    id: 'modul-01-noun-types',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Morfologi Kata Benda',
    categoryKey: 'Word Classes',
    moduleNumber: 1,
    title: 'Arsitektur Noun: Proper, Common, Concrete, Abstract, dan Collective Nouns',
    subtitle: 'Mengenali entitas pembicaraan dan klasifikasi substantif dari konsep paling dasar',
    levelBadge: 'Fondasi Mutlak · Modul 01',
    estimatedMinutes: 8,
    mentalModelIntro: 'Sebelum merangkai kalimat, penutur asli memetakan dunia menjadi entitas spesifik (Proper Noun dengan huruf kapital), kategori umum (Common Noun), benda fisik yang bisa diindra (Concrete Noun), atau konsep tak kasat mata (Abstract Noun). Ketepatan mengenali jenis kata benda adalah syarat mutlak penentuan artikel dan kesesuaian predikat.',
    coreConceptSummary: 'Noun adalah fondasi utama subjek dan objek kalimat. Proper Noun wajib berhuruf kapital awal tanpa artikel umum. Abstract Noun merujuk pada gagasan, sifat, atau proses yang umumnya bersifat uncountable.',
    decisionTree: [
      {
            "step": "Langkah 1: Identifikasi Wujud & Sifat Benda",
            "question": "Apakah kata benda merujuk pada nama diri spesifik atau konsep umum?",
            "branches": [
                  {
                        "condition": "Nama diri unik (orang, kota, institusi)",
                        "outcome": "Proper Noun",
                        "rule": "Wajib huruf kapital, dilarang article umum (Einstein, Indonesia, Harvard)."
                  },
                  {
                        "condition": "Gagasan abstrak, kualitas, atau proses",
                        "outcome": "Abstract Noun",
                        "rule": "Mayoritas uncountable, dilarang akhiran -s (honesty, knowledge, freedom)."
                  },
                  {
                        "condition": "Sekelompok individu yang bersatu",
                        "outcome": "Collective Noun",
                        "rule": "Dianggap tunggal jika bertindak satu suara (The committee has decided)."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "People in the group talked about the stuff for a long time.",
      "standard": "The committee discussed the proposed regulations in detail.",
      "academicHigh": "The consultative committee deliberated extensively upon the statutory regulatory framework.",
      "analysis": "Menggantikan kata benda samar \"people / stuff\" dengan Collective Noun presisi \"The consultative committee\" dan Abstract Noun \"statutory regulatory framework\"."
},
    canDoChecklist: [
      "Saya dapat membedakan Proper Noun dari Common Noun dan selalu mengkapitalisasinya.",
      "Saya memahami bahwa Abstract Noun (seperti honesty, integrity) bersifat uncountable.",
      "Saya paham kapan Collective Noun mengambil kata kerja tunggal vs jamak."
],
    pocketAxioms: [
      "Proper Noun wajib huruf kapital awal tanpa artikel \"a/an\".",
      "Abstract Noun tidak berwujud fisik dan tidak boleh dijamakkan dengan \"-s\".",
      "Collective Noun berstatus tunggal (singular verb) jika kelompok bertindak sebagai satu kesatuan utuh."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Klasifikasi 5 Jenis Kata Benda Primer',
        explanation: 'Bahasa Inggris membagi kata benda menjadi 5 kategori fungsional: Proper, Common, Concrete, Abstract, dan Collective Nouns.',
        formula: 'Proper Noun (Kapital Wajib: Einstein, Oxford) vs Common Noun (the city, the scientist)',
        examples: [
          {
            sentence: 'Integrity and empirical precision are fundamental values of the scientific committee.',
            translation: 'Integritas dan presisi empiris (Abstract Nouns) adalah nilai-nilai fundamental dari komite ilmiah (Collective Noun).',
          },
        ],
      },
      {
        stepNumber: 'Langkah 2: Perlakuan Collective Nouns (Tunggal vs Jamak)',
        explanation: 'Dalam American English standar, Collective Noun (committee, team, government) diperlakukan sebagai satu kesatuan unit tunggal.',
        formula: 'Collective Noun + SINGULAR VERB (has decided / is preparing)',
        examples: [
          {
            sentence: 'The interdisciplinary research committee has released its unanimous decision.',
            translation: 'Komite riset lintas disiplin (satu kesatuan) telah merilis keputusan bulatnya.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The government have announced their new economic policies.',
          correctSentence: 'The government has announced its new economic policy.',
          linguisticReason: 'Dalam ragam formal American English, "government" adalah entitas kolektif tunggal yang mewajibkan kata kerja tunggal ("has") dan kata ganti kepemilikan tunggal ("its").',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Writing Task 2, penggunaan Abstract Nouns berkualitas tinggi (*sustainability*, *disparity*, *efficacy*) secara instan menaikkan skor Lexical Resource.',
      toeflApplication: 'TOEFL Structure sering menguji kesesuaian antara Collective Noun tunggal dengan kata kerja tunggal.',
      scoringImpact: 'Mencegah inkonsistensi jumlah kata ganti dan subjek-predikat.',
    },
    goldenRules: [
      'Proper Noun selalu ditulis dengan huruf kapital di awal kata.',
      'Collective Noun dalam American English diperlakukan sebagai entitas tunggal (is/has/its).',
      'Abstract Nouns (integritas, pengetahuan, keberlanjutan) umumnya bersifat Uncountable.',
    ],
    questions: [
      {
        id: 'q01-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih kata kerja dan kata ganti yang tepat: "The university advisory panel ________ submitted ________ annual report."',
        options: ['has / its', 'have / their', 'has / their', 'have / its'],
        correctAnswer: 'has / its',
        explanation: '"The university advisory panel" adalah collective noun tunggal, sehingga membutuhkan kata kerja tunggal ("has") dan kata ganti kepemilikan netral tunggal ("its").',
        ruleReference: 'Kaidah Emas: Collective nouns dalam bahasa Inggris formal mengambil singular verb dan pronoun "its".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec01-1',
        flawedSentence: 'The faculty board have approved their revised academic curriculum.',
        flawLocation: 'have approved their',
        correctedSentence: 'The faculty board has approved its revised academic curriculum.',
        linguisticExplanation: '"The faculty board" bertindak sebagai satu kesatuan unit tunggal, sehingga harus dipasangkan dengan "has approved" dan rujukan "its".',
      }
    ]
  },

  {
    id: 'modul-02-countable-uncountable',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Morfologi Kata Benda',
    categoryKey: 'Word Classes',
    moduleNumber: 2,
    title: 'Countable vs Uncountable Nouns & Partitive Expressions',
    subtitle: 'Penanganan substansi massa, konsep abstrak, dan takaran hitung partitif',
    levelBadge: 'Fondasi Mutlak · Modul 02',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01: Noun Types',
    mentalModelIntro: 'Dalam bahasa Indonesia, kita bisa mengatakan "dua penelitian" atau "banyak bukti". Namun dalam bahasa Inggris, research dan evidence dianggap sebagai materi massa. Untuk menghitungnya, penutur asli wajib menggunakan wadah takaran (Partitive Expressions seperti a piece of evidence, two items of equipment).',
    coreConceptSummary: 'Uncountable Noun mewakili materi atau konsep abstrak yang tidak pernah menerima "a/an" dan tidak pernah memiliki akhiran "-s". Gunakan Partitive Measure Words untuk menyatakan kuantitas.',
    decisionTree: [
      {
            "step": "Langkah 1: Uji Hitung Fisik (Countability Test)",
            "question": "Dapatkah benda dihitung utuh per satuan tanpa alat ukur/wadah tambahan?",
            "branches": [
                  {
                        "condition": "Bisa dihitung fisik (1, 2, 3...)",
                        "outcome": "Countable Noun",
                        "rule": "Wajib \"a/an\" jika tunggal, boleh \"-s/-es\" jika jamak (a report, two books)."
                  },
                  {
                        "condition": "Massa cair/gas, bahan, atau kategori abstrak",
                        "outcome": "Uncountable Noun",
                        "rule": "Dilarang \"a/an\", dilarang \"-s\", gunakan partitive (pieces of advice, items of equipment)."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "We got many new softwares and equipments for our lab.",
      "standard": "We acquired several new software applications and pieces of equipment.",
      "academicHigh": "The laboratory procured advanced specialized software licenses alongside state-of-the-art analytical equipment.",
      "analysis": "Menghilangkan kesalahan fatal \"softwares\" dan \"equipments\" dengan partitive formal \"software licenses\" dan \"analytical equipment\"."
},
    canDoChecklist: [
      "Saya tidak akan pernah menulis \"researches\", \"equipments\", atau \"advices\".",
      "Saya mampu menggunakan partitive expressions seperti \"pieces of evidence\" dan \"items of equipment\".",
      "Saya paham bahwa kata benda uncountable selalu mengambil kata kerja tunggal (is/was/has)."
],
    pocketAxioms: [
      "Uncountable Nouns (research, evidence, equipment, advice, information) DILARANG BERAKHIRAN -S.",
      "Dilarang memasang \"a/an\" tepat sebelum kata benda uncountable murni.",
      "Gunakan partitive phrase (\"a piece of...\", \"items of...\") untuk menghitung kuantitas uncountable noun."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Daftar Uncountable Nouns Akademik Wajib',
        explanation: 'Uncountable Nouns tidak memiliki bentuk jamak dan selalu berstatus tunggal secara gramatikal.',
        formula: 'Daftar Mutlak Uncountable: Evidence, Research, Information, Equipment, Advice, Knowledge, Furniture, Luggage, Behavior, Traffic, Progress',
        examples: [
          {
            sentence: 'The empirical research provides substantial evidence for neural plasticity.',
            translation: 'Penelitian empiris tersebut memberikan bukti yang substansial untuk plastisitas saraf.',
            note: 'Dilarang menulis "researches" atau "evidences".',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The scientist conducted several new researches and gathered many evidences.',
          correctSentence: 'The scientist conducted several new studies and gathered substantial evidence.',
          linguisticReason: 'Dalam bahasa Inggris baku, "research" dan "evidence" adalah uncountable. Untuk menyatakan hitungan jamak, gunakan alternatif "studies" atau satuan "pieces of evidence".',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Kesalahan artikel pada uncountable noun (seperti menulis "a modern equipment") langsung menurunkan skor GRA di bawah Band 7.0.',
      toeflApplication: 'TOEFL Structure secara reguler menyertakan jebakan uncountable nouns yang sengaja diberi akhiran "-s".',
      scoringImpact: 'Mencegah kesalahan gramatikal elementer pada esai formal.',
    },
    goldenRules: [
      'Uncountable Nouns tidak pernah diawali "a/an" dan tidak pernah berakhiran "-s".',
      'Gunakan Partitive Expressions (a piece of / an item of) untuk menghitung uncountable nouns.',
    ],
    questions: [
      {
        id: 'q02-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kalimat yang benar secara gramatikal:',
        options: [
          'The laboratory purchased modern equipments for the chemical analysis.',
          'The laboratory purchased a modern equipment for the chemical analysis.',
          'The laboratory purchased modern equipment for the chemical analysis.',
          'The laboratory purchased many modern equipments for the chemical analysis.',
        ],
        correctAnswer: 'The laboratory purchased modern equipment for the chemical analysis.',
        explanation: '"Equipment" adalah uncountable noun: tidak boleh menerima "a" dan tidak boleh berakhiran "-s".',
        ruleReference: 'Kaidah Emas: Uncountable nouns berdiri sendiri tanpa a/an dan tanpa -s.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec02-1',
        flawedSentence: 'The consultant offered valuable advices regarding international market expansions.',
        flawLocation: 'valuable advices',
        correctedSentence: 'The consultant offered valuable advice regarding international market expansions.',
        linguisticExplanation: '"Advice" adalah uncountable noun, sehingga dilarang diberi akhiran jamak "-s".',
      }
    ]
  },

  {
    id: 'modul-03-articles-determiners',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Morfologi Kata Benda',
    categoryKey: 'Word Classes',
    moduleNumber: 3,
    title: 'The Article System: A, An, The vs Zero Article',
    subtitle: 'Presisi definit vs indefinit, aturan fonetik, dan konsep universal',
    levelBadge: 'Fondasi Mutlak · Modul 03',
    estimatedMinutes: 9,
    prerequisite: 'Modul 02: Countable vs Uncountable',
    mentalModelIntro: 'Artikel adalah penanda kejelasan rujukan. Apakah pembaca sudah mengetahui objek spesifik tersebut (The), atau objek tersebut baru pertama kali diperkenalkan sebagai satu sampel umum (A/An), ataukah objek tersebut mewakili konsep universal (Zero Article)?',
    coreConceptSummary: 'Gunakan A/An untuk kata benda tunggal yang dapat dihitung (berdasarkan bunyi fonetik awal). Gunakan The untuk rujukan spesifik, entitas unik, atau nama federasi. Gunakan Zero Article untuk konsep jamak umum.',
    sections: [
      {
        stepNumber: 'Langkah 1: Aturan Fonetik A vs An',
        explanation: 'Pemilihan A vs An ditentukan oleh BUNYI PENGUCAPAN awal. Bunyi vokal (/ʌ/, /æ/, /aʊ/, /ɪ/) memerlukan "An". Bunyi konsonan atau semi-vokal (/j/, /w/) memerlukan "A".',
        formula: 'A + Bunyi Konsonan (a university /juː/, a European) | An + Bunyi Vokal (an hour /aʊər/, an honest mistake)',
        examples: [
          {
            sentence: 'She earned an honors degree from a prestigious European university.',
            translation: 'Dia meraih gelar kehormatan (an honors) dari universitas Eropa bergengsi (a European).',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Di IELTS Writing Task 1, penulisan nama kelompok data (seperti the percentage of...) wajib memakai definite article "the".',
      toeflApplication: 'TOEFL Structure sering menguji penggunaan artikel sebelum nama institusi resmi.',
      scoringImpact: 'Mencapai presisi rujukan objek untuk skor Band 8.0+.',
    },
    goldenRules: [
      'Gunakan an sebelum bunyi vokal pengucapan; gunakan a sebelum bunyi konsonan/semi-vokal.',
      'Konsep abstrak umum dan disiplin ilmu murni menggunakan Zero Article.',
    ],
    questions: [
      {
        id: 'q03-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih pasangan artikel yang tepat: "He attended ________ unique seminar at ________ Oxford Institute of Technology."',
        options: ['a / the', 'an / the', 'a / a', 'the / a'],
        correctAnswer: 'a / the',
        explanation: '"Unique" diawali bunyi semi-vokal /j/ sehingga memakai "a". Lembaga formal spesifik "the Oxford Institute of Technology" wajib menggunakan "the".',
        ruleReference: 'Kaidah Emas: Bunyi /j/ memakai "a", institusi resmi spesifik memakai "the".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec03-1',
        flawedSentence: 'The technological innovation plays an important role in the modern education.',
        flawLocation: 'the modern education',
        correctedSentence: 'The technological innovation plays an important role in modern education.',
        linguisticExplanation: '"Modern education" merujuk pada konsep pendidikan secara umum di seluruh dunia, sehingga harus menggunakan Zero Article.',
      }
    ]
  },

  {
    id: 'modul-04-pronoun-cases',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Morfologi Kata Benda',
    categoryKey: 'Word Classes',
    moduleNumber: 4,
    title: 'Pronoun Declension & Case System (Subject, Object, Possessive, Reflexive)',
    subtitle: 'Sistem kasus kata ganti, pembedaan its vs it\'s, dan rujukan relatif who vs whom',
    levelBadge: 'Fondasi Mutlak · Modul 04',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01: Noun Types',
    mentalModelIntro: 'Kata ganti dalam bahasa Inggris memiliki "kasus" yang berubah tergantung posisinya: sebelum kata kerja (Subjective), setelah kata kerja/preposisi (Objective), atau penunjuk kepemilikan (Possessive Determiner).',
    coreConceptSummary: 'Kuasai 5 bentuk kata ganti: Subject (I/he/she/they), Object (me/him/her/them), Possessive Determiner (my/his/her/its/their + Noun), Independent Possessive (mine/his/hers/theirs), dan Reflexive (myself/himself/themselves).',
    sections: [
      {
        stepNumber: 'Langkah 1: Deklinasi Kasus Kata Ganti Baku',
        explanation: 'Gunakan Subject Pronoun di posisi subjek, Object Pronoun setelah kata kerja transitif dan preposisi, Possessive Determiner langsung di depan kata benda.',
        formula: 'Subject ➔ Verb ➔ Object Pronoun | Preposition + Object Pronoun (between you and me)',
        examples: [
          {
            sentence: 'The research director entrusted the statistical analysis to her and her team.',
            translation: 'Direktur riset memercayakan analisis statistik kepada dia (her) dan timnya.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Rujukan kata ganti yang salah atau ambigu merusak nilai Coherence & Cohesion (CC).',
      toeflApplication: 'Soal "Pronoun Agreement" selalu hadir di TOEFL iBT Reading & Structure.',
      scoringImpact: 'Menjaga alur kohesi kalimat tetap jernih dan bebas ambigu.',
    },
    goldenRules: [
      'Gunakan Object Pronoun setelah kata kerja dan setelah preposisi.',
      'Possessive Determiner menempel langsung di depan kata benda tanpa apostrof.',
    ],
    questions: [
      {
        id: 'q04-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kata ganti yang tepat: "The research grant was divided equally between Dr. Davis and ________."',
        options: ['her', 'she', 'hers', 'herself'],
        correctAnswer: 'her',
        explanation: 'Setelah preposisi "between", kata ganti wajib berbentuk Object Pronoun ("her").',
        ruleReference: 'Kaidah Emas: Pronoun setelah preposisi wajib memakai Object Pronoun.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec04-1',
        flawedSentence: 'The international corporation revised it\'s policy to protect their assets.',
        flawLocation: "it's policy to protect their",
        correctedSentence: 'The international corporation revised its policy to protect its assets.',
        linguisticExplanation: '"Corporation" adalah subjek tunggal. Bentuk kepemilikannya adalah "its" dan kata ganti rujukannya harus konsisten tunggal ("its assets").',
      }
    ]
  },

  {
    id: 'modul-05-quantifiers',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Morfologi Kata Benda',
    categoryKey: 'Word Classes',
    moduleNumber: 5,
    title: 'Demonstratives, Quantifiers & Distributives',
    subtitle: 'Kesesuaian kuantitas: Much vs Many, Few vs Little, Each vs Every vs All',
    levelBadge: 'Fondasi Mutlak · Modul 05',
    estimatedMinutes: 9,
    prerequisite: 'Modul 02: Countable vs Uncountable',
    mentalModelIntro: 'Kata penentu jumlah memiliki aturan ketat berdasarkan apakah kata benda yang dihitung bisa dihitung satuan (Countable) atau tidak (Uncountable).',
    coreConceptSummary: 'Many/Few/Fewer untuk Countable Nouns. Much/Little/Less untuk Uncountable Nouns. Each/Every berpasangan dengan Singular Noun dan Singular Verb.',
    sections: [
      {
        stepNumber: 'Langkah 1: Matriks Quantifiers Baku',
        explanation: 'Countable Plural: Many, A few, Few, Fewer. Uncountable: Much, A little, Little, Less. Netral: A lot of, Some, All.',
        formula: 'Countable: Many studies / Few errors | Uncountable: Much research / Little evidence / Less time',
        examples: [
          {
            sentence: 'There is little evidence to support this claim, so fewer scholars endorse the theory.',
            translation: 'Hanya ada sedikit bukti (little) untuk mendukung klaim ini, sehingga lebih sedikit cendekiawan (fewer) yang mendukung teori tersebut.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Writing Task 1, penggunaan deskripsi kuantitas (*a significant amount of*, *a substantial number of*) wajib akurat terhadap jenis datanya.',
      toeflApplication: 'TOEFL Structure sering menguji kesalahan penempatan "much" di depan plural noun.',
      scoringImpact: 'Mencegah ketidaksesuaian kuantitas leksikal dalam laporan formal.',
    },
    goldenRules: [
      'Gunakan Many / Fewer untuk countable; gunakan Much / Less untuk uncountable.',
      'Each dan Every selalu menuntut kata benda tunggal dan kata kerja tunggal.',
    ],
    questions: [
      {
        id: 'q05-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih quantifier yang tepat: "Despite extensive searches, the committee found ________ empirical evidence of procedural misconduct."',
        options: ['little', 'few', 'fewer', 'many'],
        correctAnswer: 'little',
        explanation: '"Evidence" adalah uncountable noun, sehingga menggunakan "little".',
        ruleReference: 'Kaidah Emas: Uncountable noun dengan kuantitas minimal memakai "little".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec05-1',
        flawedSentence: 'The factory produced less vehicles this quarter due to supply chain shortages.',
        flawLocation: 'less vehicles',
        correctedSentence: 'The factory produced fewer vehicles this quarter due to supply chain shortages.',
        linguisticExplanation: '"Vehicles" adalah kata benda yang dapat dihitung (countable plural), sehingga bentuk yang benar adalah "fewer".',
      }
    ]
  },

  // =========================================================================
  // TAHAP 2: PREDIKAT, AKSI & SISTEM KATA KERJA BANTU (VERBS & AUXILIARIES)
  // =========================================================================
  {
    id: 'modul-06-core-verb-types',
    stageNumber: 2,
    stageName: 'Tahap 2: Predikat, Aksi & Sistem Kata Kerja Bantu',
    categoryKey: 'Word Classes',
    moduleNumber: 6,
    title: 'Core Verb Types: Transitive, Intransitive, dan Ergative Verbs',
    subtitle: 'Memahami predikat berobjek, predikat tanpa objek, dan kata kerja dua arah',
    levelBadge: 'Sistem Kata Kerja · Modul 06',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01: Noun Types',
    mentalModelIntro: 'Setiap kalimat bahasa Inggris berputar pada energi kata kerja: apakah energi tindakan tersebut berpindah ke objek langsung (Transitive), atau berhenti pada subjek itu sendiri (Intransitive).',
    coreConceptSummary: 'Transitive Verb membutuhkan Direct Object. Intransitive Verb dilarang memiliki Direct Object dan tidak pernah bisa dipasifkan.',
    sections: [
      {
        stepNumber: 'Langkah 1: Transitive vs Intransitive Verbs',
        explanation: 'Transitive Verbs wajib memiliki direct object. Intransitive Verbs (occur, happen, exist, rise) tidak memiliki objek.',
        formula: 'Transitive: S + V + DO | Intransitive: S + V + [Adverbial / Prep Phrase]',
        examples: [
          {
            sentence: 'The research committee published (Transitive) the report, but the anomaly occurred (Intransitive) overnight.',
            translation: 'Komite riset menerbitkan laporan tersebut, namun anomali itu terjadi semalam.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The incident was occurred during the final laboratory inspection.',
          correctSentence: 'The incident occurred during the final laboratory inspection.',
          linguisticReason: '"Occur" adalah Intransitive Verb dan TIDAK PERNAH memiliki bentuk pasif.',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Di IELTS Writing Task 1, penggunaan Ergative Verbs untuk mendeskripsikan tren (*prices dropped*) membuat tulisan terasa alami.',
      toeflApplication: 'TOEFL Structure sering menguji kesalahan pemaksaan pasif pada kata kerja intransitif.',
      scoringImpact: 'Mengeliminasi kesalahan pasif fatal pada kalimat intransitif.',
    },
    goldenRules: [
      'Transitive Verb selalu membutuhkan Direct Object.',
      'Intransitive Verb (occur, happen, exist, arrive, rise) TIDAK PERNAH memiliki bentuk pasif.',
    ],
    questions: [
      {
        id: 'q06-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Kalimat manakah yang menggunakan kata kerja secara tepat tanpa kesalahan bentuk pasif intransitif?',
        options: [
          'A major economic recession was happened in the late 1920s.',
          'A major economic recession happened in the late 1920s.',
          'A major economic recession has been happened in the late 1920s.',
          'A major economic recession was been happened in the late 1920s.',
        ],
        correctAnswer: 'A major economic recession happened in the late 1920s.',
        explanation: '"Happen" adalah intransitive verb dan tidak pernah memiliki bentuk pasif.',
        ruleReference: 'Kaidah Emas: Intransitive verbs tidak memiliki bentuk pasif.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec06-1',
        flawedSentence: 'The unexpected power blackout was occurred at midnight across the district.',
        flawLocation: 'was occurred',
        correctedSentence: 'The unexpected power blackout occurred at midnight across the district.',
        linguisticExplanation: '"Occur" adalah kata kerja intransitif yang dilarang dipasifkan. Bentuk yang benar adalah "occurred".',
      }
    ]
  },

  {
    id: 'modul-07-stative-verbs',
    stageNumber: 2,
    stageName: 'Tahap 2: Predikat, Aksi & Sistem Kata Kerja Bantu',
    categoryKey: 'Word Classes',
    moduleNumber: 7,
    title: 'Stative Verbs vs Dynamic Verbs: Kognisi, Emosi, Persepsi & Kepemilikan',
    subtitle: 'Memahami mengapa kata kerja kondisi permanen menolak bentuk continuous (-ing)',
    levelBadge: 'Sistem Kata Kerja · Modul 07',
    estimatedMinutes: 9,
    prerequisite: 'Modul 06: Core Verb Types',
    mentalModelIntro: 'Kata kerja statif menggambarkan kondisi keberadaan menyeluruh yang tidak memiliki awal/akhir fisik, sehingga secara logika menolak bentuk progressive (-ing).',
    coreConceptSummary: 'Stative Verbs mencakup: Kognisi (know, understand, believe), Kepemilikan (own, possess, belong), dan Relasi (contain, consist of). Mereka SELALU menggunakan bentuk Simple.',
    decisionTree: [
      {
            "step": "Langkah 1: Klasifikasi Kategori Keadaan vs Aksi Fisik",
            "question": "Apakah kata kerja menyatakan keadaan batin permanen atau aksi fisik dinamis?",
            "branches": [
                  {
                        "condition": "Kognisi, emosi, kepemilikan, atau persepsi statis",
                        "outcome": "Stative Verb",
                        "rule": "DILARANG menggunakan bentuk Continuous -ing (*is knowing, *is belonging SALAH)."
                  },
                  {
                        "condition": "Aksi fisik yang memiliki awal dan akhir durasi",
                        "outcome": "Dynamic Action Verb",
                        "rule": "Boleh menggunakan tenses Continuous (is running, are investigating)."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "I am understanding this rule now and I am having two cars.",
      "standard": "I understand this rule now and I have two cars.",
      "academicHigh": "The research committee fully comprehends the regulatory parameters and possesses the requisite authorization.",
      "analysis": "Mengubah bentuk -ing statif (*am understanding, *am having) menjadi present simple baku \"comprehends\" dan \"possesses\"."
},
    canDoChecklist: [
      "Saya tidak akan pernah menggunakan tenses Continuous (-ing) pada kata kerja kognisi (know, believe, understand).",
      "Saya memahami kata kerja berkepribadian ganda seperti \"have\" (kepemilikan = statif; aktivitas makan/minum = dinamis).",
      "Saya dapat membedakan \"taste\" sebagai statif (rasanya) vs dinamis (mencicipi)."
],
    pocketAxioms: [
      "Stative verbs (know, believe, belong, seem, prefer) DILARANG berakhiran -ing untuk continuous.",
      "Kata kerja berkepribadian ganda: \"I think you are right\" (opini) vs \"I am thinking about it\" (proses berpikir).",
      "Dalam tulisan akademik, gunakan kognisi formal: comprehend, possess, constitute, resemble."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Stative Verbs yang Dilarang Berakhiran -ing',
        explanation: 'Stative verbs mendeskripsikan keadaan mental atau relasi logis yang konstan.',
        formula: 'Stative Verbs (Dilarang Berbentuk -ing): know, understand, believe, belong, own, contain, consist of, resemble',
        examples: [
          {
            sentence: 'The experimental compound contains microscopic traces of synthesized proteins.',
            translation: 'Senyawa eksperimen tersebut mengandung jejak mikroskopis protein sintetis.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Menggunakan stative verbs dalam bentuk continuous adalah kesalahan gramatikal fatal yang langsung menurunkan skor.',
      toeflApplication: 'TOEFL Structure sering memuat pilihan salah yang memaksakan kata kerja *consist of* ke dalam bentuk progressive.',
      scoringImpact: 'Menjaga kemurnian sintaksis predikat dalam penulisan ilmiah.',
    },
    goldenRules: [
      'Stative Verbs dilarang memakai bentuk -ing.',
      'Gunakan Simple Present bahkan jika ada kata penanda waktu "now" atau "currently" bila kata kerjanya adalah statif.',
    ],
    questions: [
      {
        id: 'q07-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kata kerja yang benar: "The archival collection ________ original manuscripts from the sixteenth century."',
        options: ['is containing', 'contains', 'contain', 'are containing'],
        correctAnswer: 'contains',
        explanation: '"Contain" adalah stative verb relasi yang tidak boleh berbentuk progressive (-ing).',
        ruleReference: 'Kaidah Emas: Stative verbs tidak pernah menggunakan bentuk Continuous (-ing).',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec07-1',
        flawedSentence: 'The senior scientists are now understanding the underlying molecular mechanisms.',
        flawLocation: 'are now understanding',
        correctedSentence: 'The senior scientists now understand the underlying molecular mechanisms.',
        linguisticExplanation: '"Understand" adalah kata kerja kognisi statif yang menolak bentuk progressive (-ing).',
      }
    ]
  },

  {
    id: 'modul-08-linking-verbs',
    stageNumber: 2,
    stageName: 'Tahap 2: Predikat, Aksi & Sistem Kata Kerja Bantu',
    categoryKey: 'Word Classes',
    moduleNumber: 8,
    title: 'Linking Verbs & Subject Complements (Be, Seem, Appear, Remain, Become)',
    subtitle: 'Menghubungkan atribut sifat ke subjek dan pantangan penggunaan adverb',
    levelBadge: 'Sistem Kata Kerja · Modul 08',
    estimatedMinutes: 8,
    prerequisite: 'Modul 07: Stative Verbs',
    mentalModelIntro: 'Linking Verbs bertindak seperti tanda sama dengan (=). Karena yang diterangkan adalah kata benda subjek, kata yang mengikutinya WAJIB berupa kata sifat (Adjective), bukan kata keterangan (Adverb).',
    coreConceptSummary: 'Linking Verbs mencakup: be, seem, appear, remain, become, look, sound, smell, taste, feel. Mereka SELALU diikuti oleh Adjective, bukan Adverb.',
    sections: [
      {
        stepNumber: 'Langkah 1: Hubungan Subjek dan Subject Complement',
        explanation: 'Setelah linking verb, informasi yang diberikan adalah kondisi atau sifat dari subjek.',
        formula: 'Subject + Linking Verb (seem / appear / remain / become / look) + ADJECTIVE',
        examples: [
          {
            sentence: 'The experimental projections remain consistent across all demographic cohorts.',
            translation: 'Proyeksi eksperimental tetap konsisten (consistent) di seluruh kelompok demografi.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Variasi Linking Verbs formal (*remain stable*, *appear robust*) sangat diapresiasi dalam IELTS Academic Writing Task 1.',
      toeflApplication: 'TOEFL Structure sering menguji jebakan penggunaan Adverb berakhiran -ly setelah linking verbs.',
      scoringImpact: 'Meningkatkan ketepatan sintaksis formal dalam penulisan laporan akademik.',
    },
    goldenRules: [
      'Linking Verbs selalu diikuti oleh Adjective sebagai Subject Complement, bukan Adverb.',
    ],
    questions: [
      {
        id: 'q08-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih kata pelengkap yang tepat: "After extensive peer review, the theoretical framework appears ________."',
        options: ['sound', 'soundly', 'soundness', 'sounding'],
        correctAnswer: 'sound',
        explanation: '"Appears" adalah Linking Verb, sehingga wajib diikuti oleh kata sifat ("sound" = kokoh/valid).',
        ruleReference: 'Kaidah Emas: Linking verbs selalu diikuti oleh Adjective.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec08-1',
        flawedSentence: 'The proposed solution sounds extraordinarily effectively to the advisory council.',
        flawLocation: 'extraordinarily effectively',
        correctedSentence: 'The proposed solution sounds extraordinarily effective to the advisory council.',
        linguisticExplanation: '"Sounds" adalah Linking Verb, sehingga kata yang melengkapi subjek harus berupa Adjective ("effective").',
      }
    ]
  },

  {
    id: 'modul-09-modals',
    stageNumber: 2,
    stageName: 'Tahap 2: Predikat, Aksi & Sistem Kata Kerja Bantu',
    categoryKey: 'Word Classes',
    moduleNumber: 9,
    title: 'Auxiliary Verbs: Primary (Be, Do, Have) vs Modals (Can, Could, Must, Should)',
    subtitle: 'Mekanisme kata kerja bantu, derajat kepastian, dan aturan mutlak Bare Infinitive',
    levelBadge: 'Sistem Kata Kerja · Modul 09',
    estimatedMinutes: 9,
    prerequisite: 'Modul 06 - 08',
    mentalModelIntro: 'Modal Auxiliaries bersifat unik: mereka tidak memiliki akhiran -s, tidak memiliki bentuk -ed, dan SELALU diikuti Verb 1 murni tanpa "to".',
    coreConceptSummary: 'Modal Auxiliaries (Can, Could, May, Might, Must, Shall, Should, Will, Would) selalu langsung diikuti oleh Bare Infinitive.',
    sections: [
      {
        stepNumber: 'Langkah 1: Aturan Mutlak Modal + Bare Infinitive',
        explanation: 'Setelah Modal Verb, kata kerja yang mengikuti SELALU berbentuk Verb 1 murni tanpa imbuhan apapun.',
        formula: 'Subject + Modal (must / should / can / could / may / might) + BARE INFINITIVE (V1 murni)',
        examples: [
          {
            sentence: 'All prospective candidates must submit their certified credentials prior to final admission.',
            translation: 'Semua calon kandidat wajib menyerahkan (must submit) kredensial tersertifikasi.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Modal Verbs untuk Academic Hedging (*may suggest*, *could indicate*) adalah kriteria esensial untuk Band 8.0+ pada Task Response.',
      toeflApplication: 'TOEFL Structure sering menguji kesalahan penambahan "to" setelah modal.',
      scoringImpact: 'Menciptakan gaya penulisan ilmiah yang berhati-hati dan akurat.',
    },
    goldenRules: [
      'Modal verbs murni SELALU diikuti oleh Bare Infinitive (Verb 1 murni tanpa to).',
    ],
    questions: [
      {
        id: 'q09-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih kalimat dengan konstruksi modal yang benar:',
        options: [
          'The research team should to verify the experimental results.',
          'The research team should verifies the experimental results.',
          'The research team should verifying the experimental results.',
          'The research team should verify the experimental results.',
        ],
        correctAnswer: 'The research team should verify the experimental results.',
        explanation: 'Modal "should" wajib langsung diikuti oleh Bare Infinitive ("verify").',
        ruleReference: 'Kaidah Emas: Modal selalu diikuti Bare Infinitive tanpa to.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec09-1',
        flawedSentence: 'The advisory board must to review all submitted financial audits immediately.',
        flawLocation: 'must to review',
        correctedSentence: 'The advisory board must review all submitted financial audits immediately.',
        linguisticExplanation: 'Modal "must" tidak boleh diikuti oleh "to-infinitive". Bentuk yang baku adalah "must review".',
      }
    ]
  },

  {
    id: 'modul-10-semi-modals',
    stageNumber: 2,
    stageName: 'Tahap 2: Predikat, Aksi & Sistem Kata Kerja Bantu',
    categoryKey: 'Word Classes',
    moduleNumber: 10,
    title: 'Semi-Modals & Phrasal Modals: Ought to, Had better, Be able to, Used to',
    subtitle: 'Konstruksi modal berfrasa, peringatan urgensi, dan pembedaan Used to vs Be used to',
    levelBadge: 'Sistem Kata Kerja · Modul 10',
    estimatedMinutes: 9,
    prerequisite: 'Modul 09: Primary vs Modal Auxiliaries',
    mentalModelIntro: 'Perbedaan paling krusial adalah antara "Used to + V1" (kebiasaan masa lalu yang sudah berhenti) dengan "Be used to + V-ing" (sudah terbiasa dengan suatu hal).',
    coreConceptSummary: 'Had better selalu diikuti Bare Infinitive. "Used to + V1" menyatakan rutinitas masa lampau, sedangkan "Be used to + Gerund (V-ing)" menyatakan kebiasaan yang sudah familier saat ini.',
    sections: [
      {
        stepNumber: 'Langkah 1: Had Better vs Ought To',
        explanation: '"Had better" menyatakan saran darurat dan SELALU diikuti Bare Infinitive tanpa to.',
        formula: 'Subject + had better + Bare Infinitive (V1) | Subject + had better not + V1',
        examples: [
          {
            sentence: 'The laboratory technicians had better calibrate the sensors before the trial begins.',
            translation: 'Teknisi laboratorium sebaiknya segera mengalibrasi sensor sebelum pengujian dimulai.',
          },
        ],
      },
      {
        stepNumber: 'Langkah 2: Pembedaan Krusial: Used to + V1 vs Be used to + V-ing',
        explanation: '"Used to + V1" = Dulu biasa melakukan X. "Be used to + V-ing" = Sudah terbiasa melakukan X saat ini.',
        formula: 'Used to + Verb 1 (Masa Lalu) vs be / get used to + Verb-ing (Kebiasaan Adaptif)',
        examples: [
          {
            sentence: 'The professor used to lecture at Oxford, but now she is used to conducting remote research.',
            translation: 'Profesor tersebut dulu biasa mengajar di Oxford, tetapi sekarang dia sudah terbiasa melakukan riset jarak jauh.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Speaking Part 1 & 2, pembedaan yang luwes antara *used to* dan *be used to* menunjukkan rentang tata bahasa fleksibel (Band 7.5+).',
      toeflApplication: 'TOEFL Structure sangat sering menguji kata kerja setelah *be used to* (wajib Gerund -ing).',
      scoringImpact: 'Mencegah kerancuan antara kebiasaan masa lalu dan adaptasi masa kini.',
    },
    goldenRules: [
      'Had better selalu diikuti Bare Infinitive tanpa to.',
      'Used to + Verb 1 murni (kebiasaan masa lalu).',
      'Be used to / Get used to SELALU diikuti oleh Gerund (Verb-ing).',
    ],
    questions: [
      {
        id: 'q10-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kata kerja yang tepat: "The clinical research team is accustomed to ________ late into the evening during trials."',
        options: ['working', 'work', 'worked', 'to work'],
        correctAnswer: 'working',
        explanation: '"Accustomed to" dan "be used to" adalah frasa preposisi yang wajib diikuti oleh Gerund (Verb-ing: "working").',
        ruleReference: 'Kaidah Emas: Be used to / accustomed to selalu diikuti oleh Gerund (V-ing).',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec10-1',
        flawedSentence: 'The new research assistants are not used to work under strict laboratory guidelines.',
        flawLocation: 'used to work',
        correctedSentence: 'The new research assistants are not used to working under strict laboratory guidelines.',
        linguisticExplanation: 'Frasa "be used to" menuntut Gerund (Verb-ing: "working"), bukan Verb 1 murni.',
      }
    ]
  },

  // =========================================================================
  // TAHAP 3: MODIFIKASI, DESKRIPSI & RELASI (MODIFIERS & PREPOSITIONS)
  // =========================================================================
  {
    id: 'modul-11-adjectives-order',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 11,
    title: 'Adjectives & The Royal Order of Adjectives (OSASCOMP)',
    subtitle: 'Urutan baku susunan kata sifat majemuk penutur asli',
    levelBadge: 'Modifikasi & Relasi · Modul 11',
    estimatedMinutes: 8,
    prerequisite: 'Modul 01: Noun Types',
    mentalModelIntro: 'Ketika beberapa kata sifat diletakkan di depan kata benda, penutur asli tidak menaruhnya secara acak, melainkan mengikuti urutan hirarki kognitif: dari penilaian subjektif (Opinion) ke fakta fisik yang paling permanen dan menyatu dengan materi benda (Purpose/Material).',
    coreConceptSummary: 'Urutan kata sifat: Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose (OSASCOMP) + NOUN.',
    sections: [
      {
        stepNumber: 'Langkah 1: Rumus Hirarki OSASCOMP',
        explanation: 'Opinion (innovative), Size (compact), Age (modern), Shape (rectangular), Color (metallic), Origin (German), Material (titanium), Purpose (diagnostic) + device.',
        formula: 'Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose + Noun',
        examples: [
          {
            sentence: 'The laboratory acquired an innovative (Opinion) compact (Size) German (Origin) diagnostic (Purpose) device.',
            translation: 'Laboratorium memperoleh perangkat diagnostik buatan Jerman yang ringkas dan inovatif.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Menyusun frasa benda deskriptif yang padat dan alami (*a comprehensive modern European framework*) menaikkan skor Lexical Resource.',
      toeflApplication: 'TOEFL Structure sering menguji urutan terbalik antara kata sifat asal (Origin) dan kata sifat opini (Opinion).',
      scoringImpact: 'Mencegah susunan frasa benda yang canggung bagi penutur asli.',
    },
    goldenRules: [
      'Opini selalu diletakkan paling depan; Material dan Purpose selalu menempel paling dekat dengan Noun.',
    ],
    questions: [
      {
        id: 'q11-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih urutan kata sifat yang paling tepat:',
        options: [
          'a German innovative research project',
          'an innovative German research project',
          'a research innovative German project',
          'an innovative research German project',
        ],
        correctAnswer: 'an innovative German research project',
        explanation: 'Urutan OSASCOMP: Opinion ("innovative") ➔ Origin ("German") ➔ Purpose ("research") + Noun ("project").',
        ruleReference: 'Kaidah Emas: Urutan Adjectives mengikuti OSASCOMP.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec11-1',
        flawedSentence: 'The engineering team designed a titanium circular sophisticated component.',
        flawLocation: 'a titanium circular sophisticated',
        correctedSentence: 'The engineering team designed a sophisticated circular titanium component.',
        linguisticExplanation: 'Urutan OSASCOMP yang benar: Opinion ("sophisticated") ➔ Shape ("circular") ➔ Material ("titanium") + Noun ("component").',
      }
    ]
  },

  {
    id: 'modul-12-participle-adjectives',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 12,
    title: 'Participle Adjectives: -ed vs -ing (Perasaan vs Karakteristik)',
    subtitle: 'Membedakan kondisi internal yang dialami subjek dengan sifat penyebab dari luar',
    levelBadge: 'Modifikasi & Relasi · Modul 12',
    estimatedMinutes: 8,
    prerequisite: 'Modul 11: Adjectives',
    mentalModelIntro: 'Participle Adjective -ed menggambarkan perasaan yang dialami oleh subjek (internal feeling), sedangkan -ing menggambarkan sifat atau karakteristik dari objek yang menyebabkan perasaan tersebut timbul (external characteristic).',
    coreConceptSummary: 'Subjek yang merasa = -ed (interested, exhausted, concerned, surprised). Benda/hal yang menimbulkan perasaan = -ing (interesting, exhausting, concerning, surprising).',
    sections: [
      {
        stepNumber: 'Langkah 1: Perbedaan Logika -ed vs -ing',
        explanation: 'Gunakan -ed untuk reaksi perasaan subjek; gunakan -ing untuk sifat pemicu perasaan.',
        formula: 'Subject (Feeling) = -ed | Cause (Characteristic) = -ing',
        examples: [
          {
            sentence: 'The data revealed concerning trends (-ing: karakteristik mengkhawatirkan), which left the advisory board deeply concerned (-ed: merasa khawatir).',
            translation: 'Data tersebut mengungkap tren yang mengkhawatirkan (-ing), yang membuat dewan penasihat merasa sangat khawatir (-ed).',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Tertukar antara *interested* dan *interesting* atau *bored* dan *boring* di IELTS Speaking/Writing adalah kesalahan fatal yang menahan skor di Band 5.5.',
      toeflApplication: 'TOEFL Structure sering memasukkan pilihan jebakan participle adjectives.',
      scoringImpact: 'Mencegah kesalahan makna psikologis pada deskripsi subjek.',
    },
    goldenRules: [
      '-ed untuk kondisi/perasaan yang dirasakan subjek.',
      '-ing untuk sifat/karakteristik pemicu dari luar.',
    ],
    questions: [
      {
        id: 'q12-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih kata sifat yang tepat: "The empirical findings were so ________ that the committee requested immediate replication."',
        options: ['astonishing', 'astonished', 'astonish', 'astonishment'],
        correctAnswer: 'astonishing',
        explanation: 'Temuan empiris ("The empirical findings") adalah penyebab yang menimbulkan rasa takjub (karakteristik dari luar), sehingga menggunakan bentuk -ing ("astonishing").',
        ruleReference: 'Kaidah Emas: Sifat pemicu dari luar menggunakan bentuk -ing.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec12-1',
        flawedSentence: 'The advisory council was very interesting in reviewing the latest clinical trial data.',
        flawLocation: 'interesting',
        correctedSentence: 'The advisory council was very interested in reviewing the latest clinical trial data.',
        linguisticExplanation: 'Dewan penasihat mengalami kondisi perasaan tertarik secara internal, sehingga kata sifat yang benar adalah "interested in", bukan "interesting".',
      }
    ]
  },

  {
    id: 'modul-13-comparatives-superlatives',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 13,
    title: 'Comparative & Superlative Degrees & Proportional Structures',
    subtitle: 'Komparasi presisi, larangan double comparative, dan pola "The more... the more..."',
    levelBadge: 'Modifikasi & Relasi · Modul 13',
    estimatedMinutes: 9,
    prerequisite: 'Modul 11: Adjectives',
    mentalModelIntro: 'Komparasi akademis menuntut kejelasan penanda derajat perbandingan dan penekanan (intensifiers seperti much, far, significantly). Struktur proporsional ("The more... the more...") adalah salah satu penanda sintaksis tingkat tinggi.',
    coreConceptSummary: 'Comparative: more + Adj / Adj-er + than. Superlative: the most + Adj / the Adj-est. Struktur Proporsional: The + Comparative, the + Comparative.',
    sections: [
      {
        stepNumber: 'Langkah 1: Aturan Baku Komparasi dan Penekanan',
        explanation: 'Gunakan "much / far / significantly" untuk memperkuat komparasi. Dilarang menggabungkan "more" dengan akhiran "-er" (more easier SALAH).',
        formula: 'much / far / significantly + Comparative (faster / more efficient) + than',
        examples: [
          {
            sentence: 'The new cryptographic algorithm is significantly more efficient than legacy protocols.',
            translation: 'Algoritma kriptografi baru tersebut secara signifikan lebih efisien daripada protokol lama.',
          },
        ],
      },
      {
        stepNumber: 'Langkah 2: Struktur Proporsional (The more... the more...)',
        explanation: 'Menyatakan hubungan sebab-akibat timbal balik di mana perubahan pada klausa pertama sebanding dengan klausa kedua.',
        formula: 'The + Comparative + Subject + Verb, the + Comparative + Subject + Verb',
        examples: [
          {
            sentence: 'The more comprehensive the initial dataset is, the more accurate the predictions become.',
            translation: 'Semakin komprehensif dataset awalnya, semakin akurat prediksi yang dihasilkan.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Writing Task 1, variasi komparasi adalah 50% dari bahasa analisis data.',
      toeflApplication: 'Pola "The + comparative, the + comparative" adalah salah satu soal favorit di TOEFL Structure.',
      scoringImpact: 'Mendemonstrasikan variasi sintaksis kompleks untuk Band 8.0+.',
    },
    goldenRules: [
      'Dilarang menggunakan double comparatives (more easier ➔ salah; much easier ➔ benar).',
      'Pola proporsional selalu berpasangan: "The [comp]..., the [comp]...".',
    ],
    questions: [
      {
        id: 'q13-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Lengkapi struktur proporsional: "The more rigorously a methodology is tested, ________ its real-world reliability."',
        options: ['the higher', 'higher is', 'the highest', 'more high'],
        correctAnswer: 'the higher',
        explanation: 'Pola kalimat proporsional: "The + Comparative..., the + Comparative..." ➔ "the higher".',
        ruleReference: 'Kaidah Emas: Pola The + Comparative selalu berpasangan dengan The + Comparative.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec13-1',
        flawedSentence: 'The newly introduced software is more faster and more reliable than the previous version.',
        flawLocation: 'more faster',
        correctedSentence: 'The newly introduced software is much faster and more reliable than the previous version.',
        linguisticExplanation: 'Dilarang menggabungkan "more" dengan kata sifat berakhiran "-er". Gunakan "much faster" atau "faster".',
      }
    ]
  },

  {
    id: 'modul-14-adverbs-placement',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 14,
    title: 'Adverbs & Adverbial Placement (Manner, Frequency, Degree & Sentence Adverbs)',
    subtitle: 'Posisi penempatan kata keterangan dan larangan memisahkan Verb dari Direct Object',
    levelBadge: 'Modifikasi & Relasi · Modul 14',
    estimatedMinutes: 8,
    prerequisite: 'Modul 11 - 13',
    mentalModelIntro: 'Adverb menambahkan dimensi cara, frekuensi, derajat, atau sikap penulis terhadap keseluruhan kalimat. Aturan penempatan adverb sangat ketat: adverb of manner DILARANG memotong kata kerja transitif dari objek langsungnya.',
    coreConceptSummary: 'Adverb memodifikasi Verb, Adjective, atau Adverb lain. Letakkan Adverb of Frequency sebelum Main Verb tetapi setelah Auxiliary BE. Letakkan Sentence Adverb (Clearly, Interestingly) di awal kalimat dengan tanda koma.',
    sections: [
      {
        stepNumber: 'Langkah 1: Posisi Adverb of Manner dan Objek Langsung',
        explanation: 'Adverb of Manner diletakkan setelah Direct Object atau sebelum Transitive Verb, BUKAN di antara Verb dan Object.',
        formula: 'Subject + Verb + Direct Object + ADVERB (bukan S + V + Adverb + Object)',
        examples: [
          {
            sentence: 'The scholar explained the complex statistical methodology clearly.',
            translation: 'Cendekiawan tersebut menjelaskan metodologi statistik (Objek) dengan jelas (Adverb).',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The professor explained clearly the theoretical framework.',
          correctSentence: 'The professor explained the theoretical framework clearly.',
          linguisticReason: 'Dalam sintaksis bahasa Inggris, Direct Object ("the theoretical framework") tidak boleh dipisahkan dari kata kerjanya ("explained") oleh adverb of manner.',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Penempatan Sentence Adverbs (*Significantly*, *Arguably*, *Consequently*) memperkuat nada akademik esai IELTS Task 2.',
      toeflApplication: 'TOEFL Structure sering menguji posisi Adverbs of Frequency di antara Auxiliary dan Main Verb.',
      scoringImpact: 'Mencapai kelancaran sintaksis natural.',
    },
    goldenRules: [
      'Jangan pernah meletakkan Adverb di antara kata kerja transitif dan Direct Object-nya.',
      'Adverbs of Frequency (always, often, seldom) diletakkan SEBELUM Main Verb, tetapi SETELAH kata kerja "be".',
    ],
    questions: [
      {
        id: 'q14-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih kalimat dengan posisi Adverb yang benar secara gramatikal:',
        options: [
          'The candidate prepared carefully her research presentation.',
          'The candidate prepared her research presentation carefully.',
          'The candidate carefully her research presentation prepared.',
          'The candidate her research presentation carefully prepared.',
        ],
        correctAnswer: 'The candidate prepared her research presentation carefully.',
        explanation: 'Direct Object ("her research presentation") wajib langsung menempel pada kata kerja ("prepared"), lalu Adverb ("carefully") diletakkan di akhir.',
        ruleReference: 'Kaidah Emas: Adverb of manner tidak boleh memisahkan Verb dari Direct Object.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec14-1',
        flawedSentence: 'The researchers analyzed exhaustively the historical documents in the archives.',
        flawLocation: 'analyzed exhaustively the historical documents',
        correctedSentence: 'The researchers analyzed the historical documents in the archives exhaustively.',
        linguisticExplanation: 'Direct Object ("the historical documents") tidak boleh dipisahkan dari kata kerja ("analyzed") oleh adverb ("exhaustively").',
      }
    ]
  },

  {
    id: 'modul-15-prepositions-spatial-temporal',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 15,
    title: 'Prepositions: Hierarki Waktu, Ruang, dan Gerak (In, On, At & Movement)',
    subtitle: 'Piramida koordinat waktu-tempat dari spesifik ke luas, serta preposisi arah',
    levelBadge: 'Modifikasi & Relasi · Modul 15',
    estimatedMinutes: 8,
    prerequisite: 'Modul 01: Noun Types',
    mentalModelIntro: 'Preposisi memetakan koordinat ruang dan waktu dalam bentuk piramida: AT untuk titik presisi terkecil, ON untuk permukaan datar dan hari/tanggal kalender, IN untuk ruang berbatas luas dan periode waktu panjang.',
    coreConceptSummary: 'Waktu: AT (jam spesifik), ON (hari/tanggal), IN (bulan/tahun/abad). Tempat: AT (titik/alamat nomor), ON (jalan/permukaan), IN (kota/negara/ruangan).',
    sections: [
      {
        stepNumber: 'Langkah 1: Piramida Waktu & Tempat Baku',
        explanation: 'Gunakan AT untuk titik jam dan alamat nomor. Gunakan ON untuk hari dan tanggal lengkap kalender. Gunakan IN untuk bulan, tahun, dan area luas.',
        formula: 'Waktu: AT (Jam) ➔ ON (Hari/Tanggal) ➔ IN (Bulan/Tahun/Abad)',
        examples: [
          {
            sentence: 'The symposium commences at 9:00 AM on Monday, October 15th, in Geneva.',
            translation: 'Simposium dimulai pukul 09.00 (at), pada hari Senin 15 Oktober (on), di Jenewa (in).',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Task 1, ketepatan preposisi waktu (*in 2020*, *between 2010 and 2015*, *at the beginning of the period*) menentukan kejelasan deskripsi data.',
      toeflApplication: 'TOEFL Structure secara reguler menguji pertukaran preposisi in/on/at pada tanggal dan tahun.',
      scoringImpact: 'Mencegah ketidakakuratan koordinat data.',
    },
    goldenRules: [
      'Gunakan At untuk jam spesifik dan alamat bernomor.',
      'Gunakan On untuk hari dan tanggal lengkap kalender.',
      'Gunakan In untuk bulan, tahun, dekade, abad, kota, dan negara.',
    ],
    questions: [
      {
        id: 'q15-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih preposisi waktu yang tepat: "The bilateral treaty was officially signed ________ July 24th, 2019."',
        options: ['on', 'in', 'at', 'by'],
        correctAnswer: 'on',
        explanation: 'Untuk tanggal spesifik kalender lengkap (July 24th), preposisi waktu yang wajib digunakan adalah "on".',
        ruleReference: 'Kaidah Emas: Hari dan tanggal kalender menggunakan preposisi "on".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec15-1',
        flawedSentence: 'The international climate agreement was signed at November in the year 2021.',
        flawLocation: 'at November',
        correctedSentence: 'The international climate agreement was signed in November in the year 2021.',
        linguisticExplanation: 'Untuk nama bulan tanpa tanggal spesifik, preposisi waktu yang wajib digunakan adalah "in", bukan "at".',
      }
    ]
  },

  {
    id: 'modul-16-dependent-prepositions',
    stageNumber: 3,
    stageName: 'Tahap 3: Modifikasi, Deskripsi & Relasi',
    categoryKey: 'Word Classes',
    moduleNumber: 16,
    title: 'Dependent Prepositions & Fixed Prepositional Collocations',
    subtitle: 'Pasangan preposisi tetap pada Verbs & Adjectives penentu skor internasional',
    levelBadge: 'Modifikasi & Relasi · Modul 16',
    estimatedMinutes: 9,
    prerequisite: 'Modul 15: Prepositions',
    mentalModelIntro: 'Banyak kata kerja dan kata sifat dalam bahasa Inggris yang terikat secara kaku dengan preposisi tertentu (Dependent Prepositions). Mengubah preposisi pasangannya akan menghasilkan kalimat yang salah dan tidak alami.',
    coreConceptSummary: 'Hafalkan pasangan baku: rely on, depend on, succeed in, refrain from, consistent with, capable of, accustomed to, prone to, prohibited from.',
    sections: [
      {
        stepNumber: 'Langkah 1: Daftar Dependent Prepositions Wajib Ujian',
        explanation: 'Kata kerja dan kata sifat tertentu selalu berpasangan dengan preposisi khusus.',
        formula: 'Consistent with | Capable of | Rely on | Prohibit from | Succeed in | Accustomed to | Prone to',
        examples: [
          {
            sentence: 'The empirical methodology is entirely consistent with the theoretical framework.',
            translation: 'Metodologi empiris tersebut sepenuhnya konsisten dengan (consistent with) kerangka teoretis.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The experimental methodology is consistent to the theoretical framework.',
          correctSentence: 'The experimental methodology is consistent with the theoretical framework.',
          linguisticReason: 'Kata sifat "consistent" secara baku berpasangan dengan preposisi "with", bukan "to".',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Dependent Prepositions yang akurat adalah tolok ukur utama penilaian Lexical Resource dan Grammatical Accuracy di level Band 8.0+.',
      toeflApplication: 'Soal Dependent Prepositions selalu muncul di TOEFL Structure sebagai jebakan pilihan kata.',
      scoringImpact: 'Menghilangkan kesalahan idiomatis terjemahan harfiah.',
    },
    goldenRules: [
      'Preposisi SELALU diikuti oleh Noun, Pronoun, atau Gerund (Verb-ing).',
      'Hafalkan pasangan Dependent Prepositions baku (capable of, consistent with, rely on).',
    ],
    questions: [
      {
        id: 'q16-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Pilih dependent preposition yang tepat: "The findings of this laboratory trial are entirely consistent ________ the hypothesis."',
        options: ['with', 'to', 'for', 'about'],
        correctAnswer: 'with',
        explanation: '"Consistent" secara baku berpasangan dengan preposisi "with".',
        ruleReference: 'Kaidah Emas: Pasangan baku kata sifat consistent adalah "with".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec16-1',
        flawedSentence: 'The newly appointed director is highly capable to manage multi-million dollar projects.',
        flawLocation: 'capable to manage',
        correctedSentence: 'The newly appointed director is highly capable of managing multi-million dollar projects.',
        linguisticExplanation: 'Kata sifat "capable" secara baku berpasangan dengan preposisi "of" yang diikuti oleh Gerund ("capable of managing").',
      }
    ]
  },

  // =========================================================================
  // TAHAP 4: SINTAKSIS & RANGKA KALIMAT TUNGGAL (SENTENCE ARCHITECTURE)
  // =========================================================================
  {
    id: 'modul-17-clause-anatomy',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis & Rangka Kalimat Tunggal',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 17,
    title: 'Anatomy of a Clause: Subject, Finite Verb, Complements, and Adjuncts',
    subtitle: 'Membedah rangka konstituen kalimat dan membedakan Finite vs Non-finite Verb',
    levelBadge: 'Struktur Kalimat · Modul 17',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01 - 16',
    mentalModelIntro: 'Setiap kalimat independen bahasa Inggris wajib memiliki minimal satu Subjek dan satu Finite Verb (kata kerja ber-tenses yang terkonjugasi). Frasa partisipel (-ing) atau to-infinitive BUKAN Finite Verb.',
    coreConceptSummary: 'Clause = Subject + Finite Verb + [Objects/Complements/Adjuncts]. Finite Verb berubah bentuk mengikuti subjek dan tenses (is, was, writes, wrote), sedangkan Non-finite Verb tidak ber-tenses (writing, to write).',
    sections: [
      {
        stepNumber: 'Langkah 1: Pembedaan Finite vs Non-Finite Verb',
        explanation: 'Kalimat tidak bisa berdiri sendiri tanpa Finite Verb. "The scientist writing the report" bukanlah kalimat lengkap (Sentence Fragment) karena "writing" adalah non-finite verb.',
        formula: 'Sentence = Subject + FINITE VERB (bukan sekadar V-ing atau to-V1)',
        examples: [
          {
            sentence: 'The scientist (Subjek) wrote (Finite Verb) a comprehensive report (Direct Object).',
            translation: 'Ilmuwan tersebut menulis laporan komprehensif.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Menghindari Sentence Fragments (kalimat menggantung tanpa finite verb) adalah syarat dasar mencapai Band 6.5 ke atas.',
      toeflApplication: 'TOEFL Structure sering menguji kalimat rumpang yang kehilangan Finite Verb.',
      scoringImpact: 'Menjamin keutuhan gramatikal setiap kalimat.',
    },
    goldenRules: [
      'Setiap kalimat bahasa Inggris wajib memiliki minimal satu Subject dan satu Finite Verb.',
      'Kata kerja berakhiran -ing dan to-infinitive adalah Non-Finite Verb dan tidak bisa menjadi predikat utama tanpa auxiliary.',
    ],
    questions: [
      {
        id: 'q17-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Manakah dari pilihan berikut yang merupakan kalimat utuh (Complete Sentence) dan bukan Sentence Fragment?',
        options: [
          'The research team conducting several trials in the laboratory.',
          'The research team conducted several trials in the laboratory.',
          'The research team to conduct several trials in the laboratory.',
          'The research team while conducting several trials in the laboratory.',
        ],
        correctAnswer: 'The research team conducted several trials in the laboratory.',
        explanation: '"Conducted" adalah Finite Verb (Past Simple). Opsi lain hanya memiliki non-finite verbs (conducting, to conduct) atau anak kalimat menggantung.',
        ruleReference: 'Kaidah Emas: Kalimat utuh wajib memiliki Finite Verb.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec17-1',
        flawedSentence: 'The senior economist analyzing global inflation trends during the conference.',
        flawLocation: 'analyzing',
        correctedSentence: 'The senior economist analyzed global inflation trends during the conference.',
        linguisticExplanation: '"Analyzing" adalah non-finite verb. Untuk membentuk kalimat utuh, ganti menjadi Finite Verb ("analyzed") atau tambahkan auxiliary ("was analyzing").',
      }
    ]
  },

  {
    id: 'modul-18-5-sentence-patterns',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis & Rangka Kalimat Tunggal',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 18,
    title: 'The 5 Fundamental Sentence Patterns (S-V, S-V-O, S-V-C, S-V-IO-DO, S-V-O-OC)',
    subtitle: 'Arsitektur rangka dasar kalimat bahasa Inggris dari sederhana ke kompleks',
    levelBadge: 'Struktur Kalimat · Modul 18',
    estimatedMinutes: 9,
    prerequisite: 'Modul 17: Clause Anatomy',
    mentalModelIntro: 'Setiap kalimat bahasa Inggris adalah variasi dari 5 pola rangka dasar. Memahami posisi Subjek, Predikat, Objek, dan Komplemen memastikan tulisanmu memiliki struktur yang kokoh.',
    coreConceptSummary: 'Pola 1 (S-V), Pola 2 (S-V-O), Pola 3 (S-V-C), Pola 4 (S-V-IO-DO), dan Pola 5 (S-V-O-OC).',
    sections: [
      {
        stepNumber: 'Langkah 1: Pola 1, 2, dan 3 (Intransitif, Transitif, Linking)',
        explanation: 'Pola 1: S-V (The symposium concluded). Pola 2: S-V-O (Researchers published reports). Pola 3: S-V-C (The methodology appears robust).',
        formula: 'Pola 1: S + V | Pola 2: S + V + DO | Pola 3: S + Linking Verb + SC',
        examples: [
          {
            sentence: 'The proposed methodology appears robust.',
            translation: 'Metodologi yang diajukan tersebut tampak kokoh (Pola 3 S-V-C).',
          },
        ],
      },
      {
        stepNumber: 'Langkah 2: Pola 4 dan 5 (Objek Ganda & Object Complement)',
        explanation: 'Pola 4: S-V-IO-DO (The board awarded the scholar a grant). Pola 5: S-V-O-OC (The committee appointed Dr. Evans chair).',
        formula: 'Pola 4: S + V + IO + DO | Pola 5: S + V + DO + Object Complement',
        examples: [
          {
            sentence: 'The committee declared the proposal acceptable.',
            translation: 'Komite menyatakan proposal tersebut dapat diterima (Pola 5 S-V-O-OC).',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Memvariasikan pola kalimat dari Pola 2 (S-V-O) ke Pola 5 (S-V-O-OC) memperkaya rentang struktur gramatikal di IELTS Writing.',
      toeflApplication: 'TOEFL Structure sering menguji urutan kata antara Indirect Object dan Direct Object.',
      scoringImpact: 'Meningkatkan variasi arsitektur sintaksis.',
    },
    goldenRules: [
      'Pola 3 S-V-C menggunakan Linking Verb dan diakhiri Subject Complement.',
      'Pola 5 S-V-O-OC melengkapi status atribut Direct Object.',
    ],
    questions: [
      {
        id: 'q18-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Tentukan pola kalimat dari: "The committee declared the proposal acceptable."',
        options: ['S + V + O', 'S + V + C', 'S + V + IO + DO', 'S + V + O + OC'],
        correctAnswer: 'S + V + O + OC',
        explanation: '"Acceptable" adalah kata sifat yang melengkapi status objek langsung ("the proposal").',
        ruleReference: 'Kaidah Emas: Pola 5 S-V-O-OC melengkapi status direct object.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec18-1',
        flawedSentence: 'The university awarded to the young researcher a prestigious grant.',
        flawLocation: 'awarded to the young researcher a',
        correctedSentence: 'The university awarded the young researcher a prestigious grant.',
        linguisticExplanation: 'Pada Pola 4 (S-V-IO-DO), Indirect Object ("the young researcher") langsung diletakkan setelah kata kerja tanpa preposisi "to".',
      }
    ]
  },

  {
    id: 'modul-19-subject-verb-agreement',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis & Rangka Kalimat Tunggal',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 19,
    title: 'Subject-Verb Agreement: Master Rules (Intervening Phrases & Proximity)',
    subtitle: 'Menyelaraskan jumlah subjek dan menembus frasa sisipan panjang',
    levelBadge: 'Struktur Kalimat · Modul 19',
    estimatedMinutes: 9,
    prerequisite: 'Modul 18: Sentence Patterns',
    mentalModelIntro: 'Kesalahan paling fatal dalam penulisan formal terjadi ketika pembelajar terkecoh oleh kata benda jamak yang berada di dalam frasa sisipan pengapit. Aturan kuncinya adalah menemukan Noun inti sebelum preposisi pertama.',
    coreConceptSummary: 'Subjek tunggal = Kata kerja tunggal (is/was/has/Vs). Frasa "of...", "along with...", "as well as..." diabaikan dalam penentuan subjek-predikat.',
    sections: [
      {
        stepNumber: 'Langkah 1: Menembus Frasa Sisipan Pengapit (Intervening Phrases)',
        explanation: 'Frasa yang diawali "of", "along with", "together with" adalah pelengkap dan BUKAN subjek utama.',
        formula: 'Core Noun (Singular) + [of + Plural Nouns...] + SINGULAR VERB (is / was / has / Vs)',
        examples: [
          {
            sentence: 'The quality of these experimental samples is rigorously monitored.',
            translation: 'Kualitas dari sampel-sampel eksperimen ini (is) dipantau secara ketat.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'A comprehensive analysis of recent financial trends have revealed major vulnerabilities.',
          correctSentence: 'A comprehensive analysis of recent financial trends has revealed major vulnerabilities.',
          linguisticReason: 'Subjek inti kalimat adalah "A comprehensive analysis" (tunggal). Frasa preposisi "of recent financial trends" tidak mengubah subjek menjadi jamak.',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Subject-Verb Agreement adalah salah satu kriteria utama "error-free sentences" pada deskriptor IELTS Band 7 ke atas.',
      toeflApplication: 'Soal Subject-Verb Agreement dengan frasa pengapit panjang merupakan 25% dari variasi soal TOEFL iBT Structure.',
      scoringImpact: 'Mengeliminasi kesalahan elementer subjek-predikat.',
    },
    goldenRules: [
      'Abaikan kata benda di dalam frasa "of..." saat menentukan jumlah subjek utama.',
      'Indefinite pronouns (Each, Every, Everyone, Neither) selalu menuntut kata kerja tunggal.',
    ],
    questions: [
      {
        id: 'q19-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Pilih kata kerja yang tepat: "The collection of rare historical manuscripts ________ preserved in the national archive."',
        options: ['is', 'are', 'were', 'have been'],
        correctAnswer: 'is',
        explanation: 'Subjek utama kalimat adalah "The collection" (tunggal). Frasa preposisi "of rare historical manuscripts" diabaikan.',
        ruleReference: 'Kaidah Emas: Frasa sisipan pengapit tidak mempengaruhi jumlah subjek inti.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec19-1',
        flawedSentence: 'A detailed evaluation of the clinical trial results indicate significant improvements.',
        flawLocation: 'indicate',
        correctedSentence: 'A detailed evaluation of the clinical trial results indicates significant improvements.',
        linguisticExplanation: 'Subjek intinya adalah "A detailed evaluation" (tunggal), sehingga kata kerja pada Simple Present wajib berakhiran -s ("indicates").',
      }
    ]
  },

  {
    id: 'modul-20-sentence-errors-elimination',
    stageNumber: 4,
    stageName: 'Tahap 4: Sintaksis & Rangka Kalimat Tunggal',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 20,
    title: 'Sentence Errors Elimination: Fragments, Run-ons, dan Comma Splices',
    subtitle: 'Mendeteksi dan memperbaiki 3 kesalahan fatal penyambungan kalimat',
    levelBadge: 'Struktur Kalimat · Modul 20',
    estimatedMinutes: 9,
    prerequisite: 'Modul 17 - 19',
    mentalModelIntro: 'Dua kalimat independen tidak boleh digabungkan hanya dengan tanda koma (Comma Splice) atau tanpa tanda baca sama sekali (Run-on Sentence). Penutur asli menggunakan titik, titik koma (;), atau konjungsi koordinasi (FANBOYS) dengan koma.',
    coreConceptSummary: 'Comma Splice terjadi saat 2 klausa independen disambung koma tanpa konjungsi. Perbaiki dengan: 1) Titik (.), 2) Titik Koma (;), atau 3) Koma + FANBOYS (, but / , and / , so).',
    sections: [
      {
        stepNumber: 'Langkah 1: Menghilangkan Comma Splice',
        explanation: 'Comma Splice adalah kesalahan fatal saat menggabungkan dua klausa independen hanya dengan tanda koma.',
        formula: 'Salah: Clause 1, Clause 2. | Benar: Clause 1; Clause 2. ATAU Clause 1, and Clause 2.',
        examples: [
          {
            sentence: 'The hypothesis was controversial; however, the empirical evidence was undeniable.',
            translation: 'Hipotesis tersebut kontroversial; namun demikian, bukti empirisnya tak terbantahkan.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The laboratory ordered modern sensors, the shipment was delayed by customs.',
          correctSentence: 'The laboratory ordered modern sensors; however, the shipment was delayed by customs.',
          linguisticReason: 'Dua klausa independen tidak boleh disambung hanya dengan tanda koma.',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Comma Splice adalah alasan nomor satu yang menjatuhkan nilai Grammatical Range & Accuracy di bawah Band 6.0.',
      toeflApplication: 'TOEFL Structure selalu menguji eliminasi Run-on Sentences dan Comma Splices.',
      scoringImpact: 'Menghasilkan kalimat majemuk yang bebas dari cacat tanda baca.',
    },
    goldenRules: [
      'Jangan pernah menyambung dua klausa independen hanya dengan tanda koma.',
      'Gunakan titik koma (;) sebelum conjunctive adverb seperti however, therefore, furthermore.',
    ],
    questions: [
      {
        id: 'q20-1',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Manakah kalimat yang bebas dari kesalahan tanda baca (Comma Splice)?',
        options: [
          'The laboratory ordered modern sensors, the shipment was delayed by customs.',
          'The laboratory ordered modern sensors, however, the shipment was delayed by customs.',
          'The laboratory ordered modern sensors; however, the shipment was delayed by customs.',
          'The laboratory ordered modern sensors but, the shipment was delayed by customs.',
        ],
        correctAnswer: 'The laboratory ordered modern sensors; however, the shipment was delayed by customs.',
        explanation: 'Conjunctive adverb "however" yang menghubungkan dua klausa independen wajib didahului oleh titik koma dan diikuti oleh koma ("; however,").',
        ruleReference: 'Kaidah Emas: Tanda baca untuk conjunctive adverb adalah semicolon dan comma.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec20-1',
        flawedSentence: 'The initial trial failed, the research committee decided to modify the protocol.',
        flawLocation: 'failed, the',
        correctedSentence: 'The initial trial failed; therefore, the research committee decided to modify the protocol.',
        linguisticExplanation: 'Pisahkan dua klausa independen dengan titik koma dan kata transisi ("; therefore,") atau gunakan konjungsi koordinasi (", so").',
      }
    ]
  },

  // =========================================================================
  // TAHAP 5: DIMENSI WAKTU & LOGIKA TENSES LENGKAP (THE 12 TENSES MASTERCLASS)
  // =========================================================================
  {
    id: 'modul-21-present-tenses',
    stageNumber: 5,
    stageName: 'Tahap 5: Dimensi Waktu & Logika Tenses Lengkap',
    categoryKey: 'Tenses Logic',
    moduleNumber: 21,
    title: 'Present Dimensions: Simple, Continuous, Perfect, dan Perfect Continuous',
    subtitle: 'Fakta abadi, tren kontemporer, akumulasi pengalaman, dan durasi berkelanjutan',
    levelBadge: 'Logika Tenses · Modul 21',
    estimatedMinutes: 9,
    prerequisite: 'Modul 09: Primary Auxiliaries',
    mentalModelIntro: 'Dimensi waktu kini terbagi 4 aspek: Simple Present (fakta permanen), Present Continuous (proses sementara), Present Perfect (hasil masa lalu relevan kini), dan Present Perfect Continuous (durasi tanpa jeda dari masa lalu hingga kini).',
    coreConceptSummary: 'Simple Present (V1/Vs) = Fakta. Present Continuous (is/am/are V-ing) = Tren berjalan. Present Perfect (have/has V3) = Pengalaman tuntas relevan kini. Present Perfect Continuous (have/has been V-ing) = Durasi aktif.',
    sections: [
      {
        stepNumber: 'Langkah 1: Present Perfect vs Present Perfect Continuous',
        explanation: 'Present Perfect berfokus pada HASIL TUNTAS (I have written the paper). Present Perfect Continuous berfokus pada PROSES DURASI yang masih berlangsung (I have been writing for five hours).',
        formula: 'Present Perfect: have/has + V3 | Present Perfect Continuous: have/has + been + V-ing',
        examples: [
          {
            sentence: 'The team has been developing this vaccine for three years and has finally completed the phase III trial.',
            translation: 'Tim telah mengembangkan vaksin ini selama 3 tahun (durasi: has been developing) dan akhirnya telah menyelesaikan uji fase III (hasil tuntas: has completed).',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Writing Task 2, Present Perfect Continuous (*researchers have been debating...*) adalah pembuka paragraf isu kontemporer yang sangat elegan.',
      toeflApplication: 'TOEFL Structure sering menguji penggunaan "since" dan "for" pada Present Perfect Continuous.',
      scoringImpact: 'Meningkatkan variasi aspek tenses masa kini.',
    },
    goldenRules: [
      'Gunakan Present Perfect untuk hasil tuntas yang relevan dengan masa kini.',
      'Gunakan Present Perfect Continuous untuk menekankan durasi aksi yang masih berlangsung.',
    ],
    questions: [
      {
        id: 'q21-1',
        category: 'Tenses Logic',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kata kerja yang tepat: "Scholars ________ the socio-economic impacts of automation since the early 2000s."',
        options: ['have been investigating', 'are investigating', 'investigated', 'investigate'],
        correctAnswer: 'have been investigating',
        explanation: 'Frasa "since the early 2000s" menunjukkan durasi yang bermula di masa lampau dan terus berlanjut hingga kini ➔ Present Perfect Continuous ("have been investigating").',
        ruleReference: 'Kaidah Emas: Durasi berkelanjutan dari masa lalu hingga kini memakai Present Perfect Continuous.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec21-1',
        flawedSentence: 'The engineering team is testing this prototype for six months without success.',
        flawLocation: 'is testing',
        correctedSentence: 'The engineering team has been testing this prototype for six months without success.',
        linguisticExplanation: 'Ada penanda durasi "for six months" yang berlanjut hingga sekarang, sehingga wajib menggunakan Present Perfect Continuous ("has been testing"), bukan Present Continuous.',
      }
    ]
  },

  {
    id: 'modul-22-past-tenses',
    stageNumber: 5,
    stageName: 'Tahap 5: Dimensi Waktu & Logika Tenses Lengkap',
    categoryKey: 'Tenses Logic',
    moduleNumber: 22,
    title: 'Past Dimensions: Simple Past, Past Continuous, Past Perfect, dan Past Perfect Continuous',
    subtitle: 'Kronologi peristiwa lampau, interupsi latar belakang, dan aksi terdahulu',
    levelBadge: 'Logika Tenses · Modul 22',
    estimatedMinutes: 9,
    prerequisite: 'Modul 21: Present Tenses',
    mentalModelIntro: 'Saat menceritakan masa lampau, penutur asli membedakan titik waktu definitif (Simple Past V2), latar belakang yang sedang berjalan (Past Continuous was/were V-ing), dan peristiwa yang terjadi LEBIH DAHULU sebelum peristiwa lampau lainnya (Past Perfect had V3).',
    coreConceptSummary: 'Simple Past (V2) = Waktu lampau definitif. Past Continuous = Latar belakang terinterupsi. Past Perfect (had V3) = Peristiwa lampau pertama sebelum peristiwa lampau kedua.',
    sections: [
      {
        stepNumber: 'Langkah 1: Kronologi Past Perfect (had + V3)',
        explanation: 'Bila ada 2 peristiwa lampau, peristiwa yang terjadi lebih dahulu wajib memakai Past Perfect (had + V3), dan peristiwa kedua memakai Simple Past (V2).',
        formula: 'Peristiwa 1 (Lebih Dulu): HAD + V3 | Peristiwa 2 (Berikutnya): V2 (Past Simple)',
        examples: [
          {
            sentence: 'By the time the auditors arrived (V2), the accounting staff had already reconciled (had + V3) the balance sheet.',
            translation: 'Saat para auditor tiba, staf akuntansi telah merekonsiliasi neraca keuangan terlebih dahulu.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Speaking Part 2 dan Writing Task 1, penggunaan Past Perfect untuk mendeskripsikan tren sebelum titik tahun tertentu adalah kunci Band 7.5+.',
      toeflApplication: 'TOEFL Reading & Structure sering menguji urutan kronologis "By the time [Past], Subject had [V3]".',
      scoringImpact: 'Menjaga konsistensi kronologi narasi ilmiah.',
    },
    goldenRules: [
      'Simple Past (V2) wajib digunakan bila ada titik waktu lampau spesifik (yesterday, in 2018).',
      'Past Perfect (had + V3) hanya digunakan bila membandingkan urutan kronologis 2 peristiwa masa lalu.',
    ],
    questions: [
      {
        id: 'q22-1',
        category: 'Tenses Logic',
        difficulty: 'Dasar',
        question: 'Pilih kata kerja yang tepat: "The archaeological expedition ________ the site before the monsoon season began."',
        options: ['had excavated', 'excavated', 'has excavated', 'was excavating'],
        correctAnswer: 'had excavated',
        explanation: 'Ekskavasi selesai terlebih dahulu (Past Perfect: "had excavated") sebelum musim hujan dimulai di masa lalu ("began").',
        ruleReference: 'Kaidah Emas: Peristiwa lampau yang mendahului peristiwa lampau lainnya memakai Past Perfect.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec22-1',
        flawedSentence: 'By the time the fire department arrived, the security guards already extinguished the fire.',
        flawLocation: 'already extinguished',
        correctedSentence: 'By the time the fire department arrived, the security guards had already extinguished the fire.',
        linguisticExplanation: 'Pemadaman api terjadi lebih dahulu sebelum pemadam kebakaran tiba, sehingga wajib menggunakan Past Perfect ("had already extinguished").',
      }
    ]
  },

  {
    id: 'modul-23-future-tenses',
    stageNumber: 5,
    stageName: 'Tahap 5: Dimensi Waktu & Logika Tenses Lengkap',
    categoryKey: 'Tenses Logic',
    moduleNumber: 23,
    title: 'Future Dimensions: Will, Be Going To, Future Continuous, dan Future Perfect',
    subtitle: 'Prediksi teoretis, rencana konkret, proyeksi proses, dan target tuntas batas waktu',
    levelBadge: 'Logika Tenses · Modul 23',
    estimatedMinutes: 9,
    prerequisite: 'Modul 21 & 22',
    mentalModelIntro: 'Masa depan diungkapkan berbeda berdasarkan derajat kepastiannya: Will untuk keputusan spontan atau prediksi teoretis, Be Going To untuk rencana yang sudah terancang atau ada bukti fisik, dan Future Perfect untuk target yang akan tuntas sebelum batas waktu.',
    coreConceptSummary: 'Will + V1 (prediksi/keputusan). Be going to + V1 (rencana/bukti fisik). Future Continuous (will be V-ing = sedang berlangsung di masa depan). Future Perfect (will have V3 = tuntas sebelum waktu tertentu).',
    sections: [
      {
        stepNumber: 'Langkah 1: Future Perfect (will have + V3) dan Penanda "By"',
        explanation: 'Future Perfect digunakan bersama penanda "By [waktu masa depan]" untuk menyatakan target tuntas sebelum batas waktu tersebut.',
        formula: 'By + [Future Time], Subject + will have + Verb 3 (Past Participle)',
        examples: [
          {
            sentence: 'By the year 2030, the consortium will have completed the renewable energy grid.',
            translation: 'Menjelang tahun 2030, konsorsium akan telah menyelesaikan jaringan energi terbarukan.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Task 1 tipe proyeksi masa depan (*By 2050, solar capacity will have increased by 40%*), Future Perfect wajib digunakan.',
      toeflApplication: 'TOEFL Structure sering menguji pasangan antara frasa "By [future year]" dan Future Perfect.',
      scoringImpact: 'Mendemonstrasikan akurasi proyeksi data masa depan.',
    },
    goldenRules: [
      'Frasa "By + future time" selalu berpasangan dengan Future Perfect (will have + V3).',
    ],
    questions: [
      {
        id: 'q23-1',
        category: 'Tenses Logic',
        difficulty: 'Dasar',
        question: 'Pilih bentuk kata kerja yang tepat: "By the end of this decade, researchers ________ a sustainable alternative to lithium batteries."',
        options: ['will have developed', 'develop', 'will develop', 'had developed'],
        correctAnswer: 'will have developed',
        explanation: 'Frasa penanda "By the end of this decade" menuntut Future Perfect ("will have developed").',
        ruleReference: 'Kaidah Emas: Frasa "By + future time" berpasangan dengan Future Perfect (will have + V3).',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec23-1',
        flawedSentence: 'By the end of this semester, the postgraduate students will finish all laboratory dissertations.',
        flawLocation: 'will finish',
        correctedSentence: 'By the end of this semester, the postgraduate students will have finished all laboratory dissertations.',
        linguisticExplanation: 'Frasa batas waktu masa depan "By the end of this semester" mewajibkan Future Perfect ("will have finished").',
      }
    ]
  },

  // =========================================================================
  // TAHAP 6: HUBUNGAN ANTAR-KLAUSA & KALIMAT MAJEMUK (CLAUSAL RELATIONS)
  // =========================================================================
  {
    id: 'modul-25-conjunctions-transitions',
    stageNumber: 6,
    stageName: 'Tahap 6: Hubungan Antar-Klausa & Kalimat Majemuk',
    categoryKey: 'Complex Structures',
    moduleNumber: 25,
    title: 'Coordinating Conjunctions (FANBOYS), Subordinasi, dan Transisi Antar-Kalimat',
    subtitle: 'Membangun jembatan logika antar gagasan tanpa kompromi tanda baca',
    levelBadge: 'Hubungan Klausa · Modul 25',
    estimatedMinutes: 8,
    prerequisite: 'Modul 20: Sentence Errors',
    mentalModelIntro: 'Konjungsi adalah jembatan logika antar gagasan. Penutur asli membedakan koordinasi setara (FANBOYS), subordinasi anak kalimat (Although, Because), dan kata keterangan transisi antar kalimat utuh (However, Therefore).',
    coreConceptSummary: 'FANBOYS menghubungkan 2 klausa independen dengan didahului koma. Subordinating conjunctions melekat di awal dependent clause tanpa titik koma. Conjunctive adverbs membutuhkan titik koma (;) atau titik (.).',
    sections: [
      {
        stepNumber: 'Langkah 1: Subordinating Conjunctions vs Conjunctive Adverbs',
        explanation: 'Although/Because melekat pada anak kalimat. However/Therefore adalah transisi antar kalimat utuh yang membutuhkan titik koma (;).',
        formula: 'Although Clause 1, Clause 2. | Sentence 1; however, Sentence 2.',
        examples: [
          {
            sentence: 'Although the initial trial failed, the team persisted.',
            translation: 'Meskipun uji coba awal gagal, tim tersebut tetap bertahan.',
          },
          {
            sentence: 'The initial trial failed; however, the team persisted.',
            translation: 'Uji coba awal gagal; namun demikian, tim tersebut tetap bertahan.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Variasi kata penghubung kohesif yang akurat adalah kunci skor 8.0 pada Coherence & Cohesion.',
      toeflApplication: 'TOEFL Structure menguji tanda baca di sekitar conjunctive adverbs.',
      scoringImpact: 'Menciptakan alur wacana yang mulus dan koheren.',
    },
    goldenRules: [
      'Gunakan tanda koma sebelum konjungsi FANBOYS yang menggabungkan dua klausa independen.',
      'Gunakan titik koma (;) sebelum however, therefore, furthermore di tengah kalimat majemuk.',
    ],
    questions: [
      {
        id: 'q25-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih konjungsi subordinasi yang tepat: "________ the initial funding was delayed, the construction project finished on time."',
        options: ['Although', 'However', 'Therefore', 'Despite of'],
        correctAnswer: 'Although',
        explanation: '"Although" adalah subordinating conjunction yang tepat untuk mengawali dependent clause lengkap.',
        ruleReference: 'Kaidah Emas: Subordinating conjunction mengawali dependent clause.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec25-1',
        flawedSentence: 'The budget was severely reduced, however the research was completed on time.',
        flawLocation: 'reduced, however the',
        correctedSentence: 'The budget was severely reduced; however, the research was completed on time.',
        linguisticExplanation: 'Conjunctive adverb "however" yang menghubungkan 2 klausa independen wajib didahului titik koma dan diikuti koma ("; however,").',
      }
    ]
  },

  {
    id: 'modul-27-relative-clauses',
    stageNumber: 6,
    stageName: 'Tahap 6: Hubungan Antar-Klausa & Kalimat Majemuk',
    categoryKey: 'Complex Structures',
    moduleNumber: 27,
    title: 'Relative Clauses: Defining vs Non-Defining & Relative Pronouns',
    subtitle: 'Klausa penjelas esensial tanpa koma vs klausa penjelas tambahan berkoma',
    levelBadge: 'Hubungan Klausa · Modul 27',
    estimatedMinutes: 9,
    prerequisite: 'Modul 04: Pronoun Cases',
    mentalModelIntro: 'Relative Clause melekat pada kata benda untuk memberikan penjelasan identitas. Defining clause memberikan informasi esensial tanpa koma (bisa memakai "that"), sedangkan Non-defining clause memberikan informasi ekstra yang diapit koma (dilarang memakai "that", wajib memakai "which/who").',
    coreConceptSummary: 'Defining (Tanpa Koma) = Identitas esensial. Non-defining (Dengan Koma) = Fakta tambahan (DILARANG MEMAKAI "THAT"). Gunakan Who (Subjek), Whom (Objek), Whose (Kepemilikan), Which/That (Benda).',
    sections: [
      {
        stepNumber: 'Langkah 1: Defining vs Non-Defining Clauses',
        explanation: 'Non-defining relative clause diapit tanda koma dan DILARANG menggunakan kata "that". Wajib menggunakan "which" untuk benda atau "who" untuk orang.',
        formula: 'Non-defining: Proper Noun, [which / who + clause], Main Verb',
        examples: [
          {
            sentence: 'Oxford University, which was founded in the eleventh century, remains a leading institution.',
            translation: 'Universitas Oxford, yang didirikan pada abad kesebelas (Non-defining: info ekstra dengan koma), tetap menjadi institusi terkemuka.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The solar project, that was launched in 2020, has exceeded energy targets.',
          correctSentence: 'The solar project, which was launched in 2020, has exceeded energy targets.',
          linguisticReason: 'Kata "that" DILARANG MUTLAK digunakan dalam Non-defining Relative Clause (klausa berkoma). Wajib menggunakan "which".',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan Relative Clauses yang bervariasi adalah syarat mutlak meraih skor Band 7.0+ pada Grammatical Range & Accuracy.',
      toeflApplication: 'TOEFL Structure sering menguji jebakan penggunaan "that" setelah tanda koma.',
      scoringImpact: 'Memperkaya kompleksitas kalimat secara elegan.',
    },
    goldenRules: [
      'Kata "that" tidak pernah digunakan setelah tanda koma pada relative clause.',
      'Gunakan "whose" untuk kepemilikan orang maupun benda.',
    ],
    questions: [
      {
        id: 'q27-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih relative pronoun yang tepat: "The European Union, ________ headquarters are located in Brussels, introduced new climate regulations."',
        options: ['whose', 'which', 'that', 'where'],
        correctAnswer: 'whose',
        explanation: '"Whose" menunjukkan kepemilikan markas besar milik Uni Eropa ("whose headquarters").',
        ruleReference: 'Kaidah Emas: Relative pronoun kepemilikan adalah "whose".',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec27-1',
        flawedSentence: 'The new laboratory protocol, that was published last month, has received worldwide recognition.',
        flawLocation: 'that was published',
        correctedSentence: 'The new laboratory protocol, which was published last month, has received worldwide recognition.',
        linguisticExplanation: 'Pada non-defining relative clause (diapit tanda koma), dilarang menggunakan "that". Bentuk yang benar adalah "which".',
      }
    ]
  },

  // =========================================================================
  // TAHAP 7: TRANSFORMASI & POLA KALIMAT KOMPLEKS (ADVANCED TRANSFORMATIONS)
  // =========================================================================
  {
    id: 'modul-29-passive-voice-mastery',
    stageNumber: 7,
    stageName: 'Tahap 7: Transformasi & Pola Kalimat Kompleks',
    categoryKey: 'Complex Structures',
    moduleNumber: 29,
    title: 'Passive Voice Masterclass: Personal, Impersonal Passive, dan Causative Structures',
    subtitle: 'Menggeser fokus ke data riset dan konstruksi impersonal "It is believed that..."',
    levelBadge: 'Transformasi Lanjutan · Modul 29',
    estimatedMinutes: 9,
    prerequisite: 'Modul 06 & 21-23',
    mentalModelIntro: 'Dalam penulisan ilmiah, siapa yang melakukan eksperimen seringkali tidak sepenting prosedur atau temuan data itu sendiri. Passive Voice menggeser fokus dari pelaku ke objek riset. Impersonal Passive ("It is argued that...") membangun nada akademik objektif.',
    coreConceptSummary: 'Passive = Be + Past Participle (V3). Impersonal Passive = It is thought/argued/reported that + Clause. Causative = Have/Get + Object + V3.',
    sections: [
      {
        stepNumber: 'Langkah 1: Impersonal Passive untuk Wacana Akademis',
        explanation: 'Gunakan Impersonal Passive untuk melaporkan konsensus ilmiah tanpa menyebut subjek opini personal secara subjektif.',
        formula: 'It is + [widely believed / argued / observed / reported] + that + Clause',
        examples: [
          {
            sentence: 'It is widely believed that renewable infrastructure accelerates economic resilience.',
            translation: 'Diyakini secara luas bahwa infrastruktur terbarukan mempercepat ketahanan ekonomi.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Impersonal Passive adalah struktur wajib pada pengantar esai argumentatif IELTS Task 2 untuk menyatakan pandangan umum.',
      toeflApplication: 'TOEFL Integrated Writing menilai kemampuan menyajikan data audio secara pasif objektif.',
      scoringImpact: 'Menciptakan gaya penulisan ilmiah yang matang dan objektif.',
    },
    goldenRules: [
      'Rumus pasif: Be (sesuai tenses) + Verb 3 (Past Participle).',
      'Kata kerja intransitif (occur, happen, exist, arrive) tidak pernah memiliki bentuk pasif.',
    ],
    questions: [
      {
        id: 'q29-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Konversikan kalimat aktif ke pasif: "Scholars have established a robust theoretical model."',
        options: [
          'A robust theoretical model has been established by scholars.',
          'A robust theoretical model was established by scholars.',
          'A robust theoretical model had been established by scholars.',
          'A robust theoretical model is established by scholars.',
        ],
        correctAnswer: 'A robust theoretical model has been established by scholars.',
        explanation: 'Present Perfect pasif dibentuk dengan "has/have + been + V3" ➔ "has been established".',
        ruleReference: 'Kaidah Emas: Passive Present Perfect menggunakan have/has been + V3.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec29-1',
        flawedSentence: 'An unprecedented anomaly was occurred during the final calibration phase.',
        flawLocation: 'was occurred',
        correctedSentence: 'An unprecedented anomaly occurred during the final calibration phase.',
        linguisticExplanation: '"Occur" adalah kata kerja intransitif dan dilarang diubah ke bentuk pasif.',
      }
    ]
  },

  {
    id: 'modul-30-conditionals-inversion',
    stageNumber: 7,
    stageName: 'Tahap 7: Transformasi & Pola Kalimat Kompleks',
    categoryKey: 'Complex Structures',
    moduleNumber: 30,
    title: 'Conditionals Masterclass & Inversion (Zero, 1, 2, 3, Mixed & Inverted)',
    subtitle: 'Struktur pengandaian formal dan pembalikan auxiliary tanpa kata "If"',
    levelBadge: 'Transformasi Lanjutan · Modul 30',
    estimatedMinutes: 9,
    prerequisite: 'Modul 21 - 23 (Tenses)',
    mentalModelIntro: 'Kalimat pengandaian (Conditionals) dan struktur Inversi adalah penanda variasi gramatikal tinggi yang sangat diperhitungkan dalam evaluasi IELTS Band 7.5+ dan TOEFL iBT 100+. Struktur inversi menghilangkan kata "if" dan membalik auxiliary ke depan subjek.',
    coreConceptSummary: 'Type 1 (If V1, will V1). Type 2 (If V2, would V1). Type 3 (If had V3, would have V3). Inversi: Should you require... / Were the state to... / Had the team known...',
    decisionTree: [
      {
            "step": "Langkah 1: Skrining Probabilitas & Realitas Pengandaian",
            "question": "Apakah kondisi pengandaian nyata (realistis) atau berlawanan dengan fakta (hipotetis)?",
            "branches": [
                  {
                        "condition": "Kemungkinan nyata di masa depan",
                        "outcome": "First Conditional",
                        "rule": "If + Present Simple, Will + V1. Inversi: Should you require assistance..."
                  },
                  {
                        "condition": "Hipotetis masa sekarang (berlawanan dengan fakta)",
                        "outcome": "Second Conditional",
                        "rule": "If + Past Simple (Were), Would + V1. Inversi: Were the government to intervene..."
                  },
                  {
                        "condition": "Penyesalan / hipotetis masa lalu",
                        "outcome": "Third Conditional",
                        "rule": "If + Past Perfect, Would have + V3. Inversi: Had the regulatory body acted..."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "If the government helped earlier, the company would not fail.",
      "standard": "If the government had intervened earlier, the company would not have collapsed.",
      "academicHigh": "Had the regulatory authorities intervened in a timely manner, the financial institution would not have suffered catastrophic insolvency.",
      "analysis": "Menerapkan Inverted Third Conditional tingkat tinggi (\"Had the authorities intervened...\") tanpa kata \"if\", menghasilkan nada formal jurnal ilmiah."
},
    canDoChecklist: [
      "Saya menguasai struktur Inversi Pengandaian: Should (Type 1), Were (Type 2), dan Had (Type 3).",
      "Saya paham bahwa dalam Second Conditional formal, subjek \"I/He/She/It\" selalu menggunakan \"were\", bukan \"was\".",
      "Saya mampu mendeteksi Mixed Conditionals (kondisi masa lalu yang berakibat pada masa sekarang)."
],
    pocketAxioms: [
      "Inversi Tipe 1: \"Should + S + V1\" menggantikan \"If + S + Present\".",
      "Inversi Tipe 2: \"Were + S + to V1 / Adjective\" menggantikan \"If + S + Past\".",
      "Inversi Tipe 3: \"Had + S + V3\" menggantikan \"If + S + had V3\"."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Inverted Conditionals (Tanpa Kata "If")',
        explanation: 'Dalam penulisan formal tingkat tinggi, kata "if" dihilangkan dan auxiliary verb dibalik ke depan subjek.',
        formula: 'Type 1: Should you require... | Type 2: Were the government to... | Type 3: Had the team known...',
        examples: [
          {
            sentence: 'Had the team verified the calibration earlier, the error would have been prevented.',
            translation: 'Seandainya tim memverifikasi kalibrasi lebih awal, kesalahan itu akan dapat dicegah.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Menyertakan 1-2 kalimat inversi pada paragraf solusi di IELTS Task 2 secara langsung mendemonstrasikan penguasaan Complex Structures untuk Band 8.0+.',
      toeflApplication: 'TOEFL Reading passages tingkat lanjut sering menggunakan struktur inversi formal.',
      scoringImpact: 'Menaikkan skor Grammatical Range & Accuracy ke tingkat superior.',
    },
    goldenRules: [
      'Inversi Type 1 diawali "Should"; Type 2 diawali "Were"; Type 3 diawali "Had".',
    ],
    questions: [
      {
        id: 'q30-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Lengkapi kalimat inversion formal: "________ the policy been introduced sooner, the economic fallout would have been mitigated."',
        options: ['Had', 'Were', 'Should', 'If had'],
        correctAnswer: 'Had',
        explanation: 'Inversi dari Third Conditional lampau diawali dengan "Had" + Subject + V3.',
        ruleReference: 'Kaidah Emas: Inverted Third Conditional diawali kata Had.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec30-1',
        flawedSentence: 'If had the committee known about the budget cuts, they would have postponed the project.',
        flawLocation: 'If had the committee known',
        correctedSentence: 'Had the committee known about the budget cuts, they would have postponed the project.',
        linguisticExplanation: 'Pada struktur inversi formal, kata "if" wajib dihilangkan sepenuhnya saat "Had" dipindahkan ke depan subjek.',
      }
    ]
  },

  {
    id: 'modul-31-negative-inversion',
    stageNumber: 7,
    stageName: 'Tahap 7: Transformasi & Pola Kalimat Kompleks',
    categoryKey: 'Complex Structures',
    moduleNumber: 31,
    title: 'Negative Adverb Inversion (Seldom, Rarely, Never, Not only... but also)',
    subtitle: 'Pembalikan auxiliary setelah adverbia bernada negatif untuk penekanan retoris',
    levelBadge: 'Transformasi Lanjutan · Modul 31',
    estimatedMinutes: 9,
    prerequisite: 'Modul 30: Conditionals & Inversion',
    mentalModelIntro: 'Ketika kalimat diawali oleh kata keterangan bernada negatif atau restriktif (Seldom, Rarely, Hardly, Scarcely, Under no circumstances, Not only), susunan subjek dan auxiliary verb WAJIB DIBALIK seperti susunan kalimat tanya.',
    coreConceptSummary: 'Negative Adverb + Auxiliary Verb + Subject + Main Verb. Contoh: "Seldom do researchers observe such anomalies."',
    sections: [
      {
        stepNumber: 'Langkah 1: Rumus Inversi Negatif',
        explanation: 'Letakkan auxiliary verb (do, does, did, has, had, will) sebelum subjek.',
        formula: '[Seldom / Rarely / Never / Under no circumstances / Not only] + AUXILIARY + Subject + Main Verb',
        examples: [
          {
            sentence: 'Not only did the researchers isolate the compound, but they also synthesized a stable derivative.',
            translation: 'Tidak hanya para peneliti berhasil mengisolasi senyawa tersebut, tetapi mereka juga mensintesis turunan yang stabil.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan *Not only did... but also...* pada paragraf kesimpulan esai IELTS Task 2 memberikan dampak retoris yang sangat kuat.',
      toeflApplication: 'TOEFL Structure sering menguji inversi negatif dengan mengosongkan auxiliary verb.',
      scoringImpact: 'Mencapai puncak penguasaan variasi kalimat tingkat mahir.',
    },
    goldenRules: [
      'Inversi negatif mewajibkan susunan Auxiliary + Subject (seperti kalimat tanya) tanpa tanda tanya.',
    ],
    questions: [
      {
        id: 'q31-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih susunan inversi negatif yang benar secara gramatikal:',
        options: [
          'Seldom researchers have observed such unprecedented environmental anomalies.',
          'Seldom have researchers observed such unprecedented environmental anomalies.',
          'Seldom researchers observed such unprecedented environmental anomalies.',
          'Seldom do researchers observed such unprecedented environmental anomalies.',
        ],
        correctAnswer: 'Seldom have researchers observed such unprecedented environmental anomalies.',
        explanation: 'Setelah kata negatif "Seldom", auxiliary verb ("have") wajib diletakkan sebelum subjek ("researchers").',
        ruleReference: 'Kaidah Emas: Negative adverb di awal kalimat menuntut inversi Auxiliary + Subject.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec31-1',
        flawedSentence: 'Rarely the international advisory panel intervenes in local administrative disputes.',
        flawLocation: 'Rarely the international advisory panel intervenes',
        correctedSentence: 'Rarely does the international advisory panel intervene in local administrative disputes.',
        linguisticExplanation: 'Setelah kata negatif "Rarely", wajib dilakukan inversi dengan menambahkan auxiliary ("does") sebelum subjek.',
      }
    ]
  },

  // =========================================================================
  // TAHAP 8: PEMADATAN SINTAKSIS & FRASA PARTISIPEL (SYNTACTIC REDUCTION)
  // =========================================================================
  {
    id: 'modul-33-gerunds-infinitives',
    stageNumber: 8,
    stageName: 'Tahap 8: Pemadatan Sintaksis & Frasa Partisipel',
    categoryKey: 'Complex Structures',
    moduleNumber: 33,
    title: 'Gerunds vs Infinitives Masterclass (V-ing vs To + V1)',
    subtitle: 'Daftar kata kerja khusus pembawa Gerund, Infinitive, dan perubahan makna',
    levelBadge: 'Pemadatan Sintaksis · Modul 33',
    estimatedMinutes: 8,
    prerequisite: 'Modul 06: Verbs',
    mentalModelIntro: 'Apakah kata kerja kedua harus berbentuk Gerund (V-ing) atau To-Infinitive (to + V1) bergantung sepenuhnya pada kata kerja utama yang mendahuluinya.',
    coreConceptSummary: 'Verbs + Gerund (avoid, suggest, recommend, postpone). Verbs + Infinitive (decide, plan, hope, refuse). Verbs with Meaning Shift (stop, remember, forget).',
    sections: [
      {
        stepNumber: 'Langkah 1: Verbs Diikuti Gerund vs To-Infinitive',
        explanation: 'Avoid, recommend, suggest, postpone WAJIB diikuti Gerund. Decide, plan, hope WAJIB diikuti To-Infinitive.',
        formula: 'Avoid / Suggest / Recommend + Verb-ing | Decide / Plan / Hope + To + V1',
        examples: [
          {
            sentence: 'The advisory panel recommended postponing the clinical trial.',
            translation: 'Panel penasihat merekomendasikan penundaan (postponing) uji klinis tersebut.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Menggunakan *suggest to do* (salah) adalah kesalahan umum pembelajar yang menurunkan akurasi gramatikal.',
      toeflApplication: 'TOEFL Structure sering menguji pola kata kerja yang terikat dengan Gerund vs Infinitive.',
      scoringImpact: 'Menjaga kepatuhan pola komplementasi kata kerja.',
    },
    goldenRules: [
      'Preposisi SELALU diikuti oleh Gerund (V-ing).',
      'Suggest dan Recommend selalu diikuti Gerund (V-ing), tidak pernah "suggest to verb".',
    ],
    questions: [
      {
        id: 'q33-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih kalimat yang benar:',
        options: [
          'The professor suggested to read the latest academic journals.',
          'The professor suggested reading the latest academic journals.',
          'The professor suggested us to read the latest academic journals.',
          'The professor suggested read the latest academic journals.',
        ],
        correctAnswer: 'The professor suggested reading the latest academic journals.',
        explanation: '"Suggest" wajib diikuti oleh Gerund ("reading").',
        ruleReference: 'Kaidah Emas: Verb "suggest" diikuti oleh Gerund.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec33-1',
        flawedSentence: 'The committee avoided to make a definitive statement before the audit was complete.',
        flawLocation: 'avoided to make',
        correctedSentence: 'The committee avoided making a definitive statement before the audit was complete.',
        linguisticExplanation: 'Kata kerja "avoid" secara baku wajib diikuti oleh Gerund ("making"), bukan to-infinitive.',
      }
    ]
  },

  {
    id: 'modul-34-participle-clauses',
    stageNumber: 8,
    stageName: 'Tahap 8: Pemadatan Sintaksis & Frasa Partisipel',
    categoryKey: 'Complex Structures',
    moduleNumber: 34,
    title: 'Participle Clauses & Reduced Relative Clauses',
    subtitle: 'Meringkas kalimat panjang menjadi frasa partisipel padat dan elegan',
    levelBadge: 'Pemadatan Sintaksis · Modul 34',
    estimatedMinutes: 9,
    prerequisite: 'Modul 27: Relative Clauses',
    mentalModelIntro: 'Penulisan jurnal ilmiah penutur asli sangat padat (*syntactically dense*). Mereka meringkas anak kalimat aktif menjadi Present Participle (-ing) dan anak kalimat pasif menjadi Past Participle (-ed) untuk menghemat kata dan meningkatkan densitas informasi.',
    coreConceptSummary: 'Aktif: "The scientist who discovered the gene..." ➔ "The scientist discovering the gene...". Pasif: "The report which was published yesterday..." ➔ "The report published yesterday...".',
    sections: [
      {
        stepNumber: 'Langkah 1: Reduksi Klausa Relatif Aktif vs Pasif',
        explanation: 'Hilangkan relative pronoun dan be-verb. Pertahankan V-ing untuk makna aktif, dan V3 untuk makna pasif.',
        formula: 'Active Reduction: Noun + Verb-ing | Passive Reduction: Noun + Verb 3 (Past Participle)',
        examples: [
          {
            sentence: 'The methodology developed by the consortium yielded remarkable precision.',
            translation: 'Metodologi yang dikembangkan oleh konsorsium (reduksi pasif dari "which was developed") menghasilkan presisi luar biasa.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Participle Clauses adalah ciri pembeda utama esai IELTS Band 8.0+ yang memadatkan informasi secara ringkas.',
      toeflApplication: 'TOEFL Reading passages sangat sarat dengan reduced relative clauses.',
      scoringImpact: 'Meningkatkan densitas leksikal dan efisiensi kata dalam esai formal.',
    },
    goldenRules: [
      'Gunakan Present Participle (-ing) untuk reduksi klausa aktif.',
      'Gunakan Past Participle (-ed / V3) untuk reduksi klausa pasif.',
    ],
    questions: [
      {
        id: 'q34-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih bentuk reduksi partisipel pasif yang benar: "The historical artifacts ________ during the recent excavation are now displayed in the museum."',
        options: ['discovered', 'discovering', 'which discovered', 'were discovered'],
        correctAnswer: 'discovered',
        explanation: 'Reduksi klausa pasif dari "which were discovered" menyisakan Past Participle ("discovered").',
        ruleReference: 'Kaidah Emas: Reduksi klausa pasif menggunakan Past Participle (V3).',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec34-1',
        flawedSentence: 'The candidate was giving the keynote lecture graduated from Harvard University.',
        flawLocation: 'was giving',
        correctedSentence: 'The candidate giving the keynote lecture graduated from Harvard University.',
        linguisticExplanation: 'Hapus auxiliary "was" agar klausa tereduksi menjadi frasa partisipel aktif ("giving"), sehingga "graduated" menjadi Finite Verb utama kalimat.',
      }
    ]
  },

  {
    id: 'modul-35-dangling-modifiers',
    stageNumber: 8,
    stageName: 'Tahap 8: Pemadatan Sintaksis & Frasa Partisipel',
    categoryKey: 'Complex Structures',
    moduleNumber: 35,
    title: 'Dangling & Misplaced Modifiers Identification',
    subtitle: 'Menyelaraskan subjek logis frasa pembuka dengan subjek utama klausa independen',
    levelBadge: 'Pemadatan Sintaksis · Modul 35',
    estimatedMinutes: 9,
    prerequisite: 'Modul 34: Participle Clauses',
    mentalModelIntro: 'Dangling Modifier adalah kesalahan logika sintaksis paling berbahaya: ketika frasa pembuka partisipel (-ing/-ed) tidak memiliki subjek logis yang tepat pada kata benda pertama setelah tanda koma.',
    coreConceptSummary: 'Subjek yang melakukan tindakan pada frasa pembuka WAJIB menjadi Subjek yang langsung berdiri setelah tanda koma.',
    sections: [
      {
        stepNumber: 'Langkah 1: Menyelaraskan Subjek Frasa Pembuka',
        explanation: 'Jika frasa pembuka diawali "Having analyzed the data,", subjek setelah koma WAJIB orang yang menganalisis (the scientist), BUKAN kesimpulannya (the conclusion).',
        formula: 'Opening Modifier (-ing / -ed), LOGICAL AGENT (Subject) + Finite Verb...',
        examples: [
          {
            sentence: 'Having analyzed the data meticulously, the research team identified a major breakthrough.',
            translation: 'Setelah menganalisis data secara teliti, tim riset (pelaku analisis) mengidentifikasi terobosan besar.',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'Having analyzed the data meticulously, a major breakthrough was identified by the team.',
          correctSentence: 'Having analyzed the data meticulously, the team identified a major breakthrough.',
          linguisticReason: 'Pada kalimat salah, subjek setelah koma adalah "a major breakthrough" (yang berarti terobosan itulah yang menganalisis data - kesalahan logika Dangling Modifier). Subjek setelah koma harus pelaku logisnya ("the team").',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Menghindari Dangling Modifiers menjaga kejernihan logika kalimat pada kriteria Task Response dan GRA.',
      toeflApplication: 'Soal identifikasi Dangling Modifier adalah tipe soal pembeda skor tertinggi di tes penulisan standar internasional.',
      scoringImpact: 'Menjaga keselarasan logika sintaksis tingkat mahir.',
    },
    goldenRules: [
      'Subjek setelah tanda koma wajib merupakan pelaku logis dari frasa pembuka.',
    ],
    questions: [
      {
        id: 'q35-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Kalimat manakah yang bebas dari kesalahan Dangling Modifier?',
        options: [
          'Walking into the laboratory, the microscope was seen on the table.',
          'Walking into the laboratory, the researcher saw the microscope on the table.',
          'Walking into the laboratory, the table held the microscope.',
          'Walking into the laboratory, an anomaly was observed.',
        ],
        correctAnswer: 'Walking into the laboratory, the researcher saw the microscope on the table.',
        explanation: 'Pelaku yang berjalan ke laboratorium adalah "the researcher", sehingga dia wajib menjadi subjek langsung setelah tanda koma.',
        ruleReference: 'Kaidah Emas: Subjek setelah koma wajib pelaku logis dari frasa pembuka.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec35-1',
        flawedSentence: 'Upon reviewing the financial statements, several accounting discrepancies were discovered by the auditors.',
        flawLocation: 'several accounting discrepancies were discovered by the auditors',
        correctedSentence: 'Upon reviewing the financial statements, the auditors discovered several accounting discrepancies.',
        linguisticExplanation: 'Pelaku yang meninjau laporan keuangan adalah para auditor ("the auditors"), sehingga subjek aktif setelah koma harus "the auditors".',
      }
    ]
  },

  {
    id: 'modul-36-parallelism',
    stageNumber: 8,
    stageName: 'Tahap 8: Pemadatan Sintaksis & Frasa Partisipel',
    categoryKey: 'Complex Structures',
    moduleNumber: 36,
    title: 'Parallelism & Balanced Sentence Structures',
    subtitle: 'Keseimbangan bentuk gramatikal dalam daftar, perbandingan, dan pasangan konjungsi',
    levelBadge: 'Pemadatan Sintaksis · Modul 36',
    estimatedMinutes: 8,
    prerequisite: 'Modul 25: Conjunctions',
    mentalModelIntro: 'Paralelisme menuntut agar elemen-elemen kalimat yang setara secara fungsi (dalam daftar koordinasi, perbandingan, atau pasangan Not only... but also) memiliki bentuk gramatikal yang simetris dan seimbang (Noun dengan Noun, Gerund dengan Gerund, Clause dengan Clause).',
    coreConceptSummary: 'Struktur paralel menjaga keseimbangan ritme tulisan: Noun, Noun, and Noun | Verb-ing, Verb-ing, and Verb-ing. Pasangan korelatif: Not only A but also B (A dan B wajib paralel).',
    sections: [
      {
        stepNumber: 'Langkah 1: Keseimbangan Elemen Majemuk',
        explanation: 'Semua item dalam daftar harus memiliki bentuk gramatikal yang sama persis.',
        formula: 'A, B, and C (Semua Noun / Semua Gerund / Semua Infinitive)',
        examples: [
          {
            sentence: 'The candidate demonstrated exceptional analytical skills, effective leadership, and clear communication.',
            translation: 'Kandidat tersebut mendemonstrasikan keahlian analitis, kepemimpinan efektif, dan komunikasi yang jelas (Semua Noun Phrase paralel).',
          },
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The job requires analyzing data, managing teams, and to communicate with clients.',
          correctSentence: 'The job requires analyzing data, managing teams, and communicating with clients.',
          linguisticReason: 'Elemen pertama dan kedua berbentuk Gerund ("analyzing", "managing"), sehingga elemen ketiga wajib berbentuk Gerund ("communicating"), bukan to-infinitive.',
        },
      },
    ],
    examBridge: {
      ieltsApplication: 'Struktur paralel yang konsisten menciptakan keindahan ritme (*flow*) esai formal yang sangat diapresiasi penguji IELTS.',
      toeflApplication: 'Soal Parallelism dengan pasangan *either/or*, *neither/nor*, dan *not only/but also* adalah materi standar TOEFL Structure.',
      scoringImpact: 'Mencapai kesimetrisan gramatikal tingkat tinggi.',
    },
    goldenRules: [
      'Samakan bentuk seluruh elemen dalam daftar koordinasi (Gerund dengan Gerund, Noun dengan Noun).',
      'Elemen setelah "Not only" harus paralel dengan elemen setelah "but also".',
    ],
    questions: [
      {
        id: 'q36-1',
        category: 'Complex Structures',
        difficulty: 'Dasar',
        question: 'Pilih kalimat dengan struktur paralel yang sempurna:',
        options: [
          'The internship provides practical experience, professional networking, and developing technical skills.',
          'The internship provides practical experience, professional networking, and development of technical skills.',
          'The internship provides to gain experience, networking, and technical skills.',
          'The internship provides practical experience, professional networking, and to develop technical skills.',
        ],
        correctAnswer: 'The internship provides practical experience, professional networking, and development of technical skills.',
        explanation: 'Semua elemen adalah Noun Phrase yang simetris ("practical experience", "professional networking", "development of technical skills").',
        ruleReference: 'Kaidah Emas: Seluruh elemen dalam daftar koordinasi wajib paralel.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec36-1',
        flawedSentence: 'The professor is known for his inspiring lectures, deep research, and to mentor young scholars.',
        flawLocation: 'and to mentor young scholars',
        correctedSentence: 'The professor is known for his inspiring lectures, deep research, and dedicated mentorship of young scholars.',
        linguisticExplanation: 'Ganti to-infinitive "to mentor" dengan frasa kata benda ("dedicated mentorship of young scholars") agar paralel dengan "inspiring lectures" dan "deep research".',
      }
    ]
  },

  // =========================================================================
  // TAHAP 9: RETORIKA AKADEMIK & STANDAR UJIAN INTERNASIONAL (ACADEMIC POLISH)
  // =========================================================================
  {
    id: 'modul-37-academic-word-list',
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Standar Ujian Internasional',
    categoryKey: 'Exam Readiness',
    moduleNumber: 37,
    title: 'Academic Word List (AWL) & High-Yield Collocations',
    subtitle: 'Pasangan kata alami baku penutur asli untuk skor maksimal IELTS & TOEFL',
    levelBadge: 'Kesiapan Ujian · Modul 37',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01 - 36',
    mentalModelIntro: 'Penguji internasional dan pembaca jurnal ilmiah menilai kewajaran pasangan kata (Collocations) dan ketepatan variasi kata akademis daripada penggunaan kata-kata sulit yang dipaksakan secara canggung.',
    coreConceptSummary: 'Kolokasi adalah pasangan kata alami baku yang selalu digunakan bersama oleh penutur asli. Hindari terjemahan harfiah.',
    sections: [
      {
        stepNumber: 'Langkah 1: Pasangan Kolokasi Baku Akademis',
        explanation: 'Gunakan kolokasi baku: conduct research, reach a consensus, substantiate a claim, draw a conclusion.',
        formula: 'Conduct research (bukan make research) | Reach a consensus | Substantiate a claim | Draw a conclusion',
        examples: [
          {
            sentence: 'The scientists conducted a meticulous investigation to substantiate their hypothesis.',
            translation: 'Para ilmuwan melakukan investigasi yang teliti untuk membuktikan hipotesis mereka.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada kriteria Lexical Resource (LR) IELTS, penggunaan kolokasi presisi bernilai jauh lebih tinggi daripada menggunakan kosakata arkais/kuno.',
      toeflApplication: 'TOEFL Academic Discussion memberikan skor tertinggi bagi respon yang menggunakan kolokasi akademik baku.',
      scoringImpact: 'Mencegah frasa terjemahan kaku dan mendongkrak skor Lexical Resource ke Band 8.0+.',
    },
    goldenRules: [
      'Gunakan "conduct research" atau "carry out research", bukan "make research".',
      'Gunakan "reach a consensus" atau "arrive at a consensus".',
      'Gunakan "substantiate a claim" untuk menyatakan pembuktian dengan data empiris.',
    ],
    questions: [
      {
        id: 'q37-1',
        category: 'Exam Readiness',
        difficulty: 'Dasar',
        question: 'Pilih pasangan kolokasi yang paling tepat untuk konteks akademis: "The committee was unable to ________ a definitive consensus."',
        options: ['reach', 'catch', 'grab', 'gain'],
        correctAnswer: 'reach',
        explanation: '"Reach a consensus" adalah kolokasi baku dalam bahasa Inggris akademis.',
        ruleReference: 'Kaidah Emas: Kolokasi baku untuk consensus adalah reach/arrive at.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec37-1',
        flawedSentence: 'The graduate students made a comprehensive research on renewable energy.',
        flawLocation: 'made a comprehensive research',
        correctedSentence: 'The graduate students conducted comprehensive research on renewable energy.',
        linguisticExplanation: 'Kolokasi baku untuk riset ilmiah adalah "conduct research" (dan "research" adalah uncountable sehingga tidak memakai "a").',
      }
    ]
  },

  {
    id: 'modul-38-academic-hedging',
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Standar Ujian Internasional',
    categoryKey: 'Exam Readiness',
    moduleNumber: 38,
    title: 'Academic Hedging & Cautious Language',
    subtitle: 'Menggunakan bahasa berhati-hati untuk menyatakan klaim ilmiah tanpa generalisasi berlebih',
    levelBadge: 'Kesiapan Ujian · Modul 38',
    estimatedMinutes: 8,
    prerequisite: 'Modul 09 & 37',
    mentalModelIntro: 'Dalam tradisi akademik Anglo-Saxon, ilmuwan tidak pernah mengklaim kepastian 100% mutlak tanpa ruang untuk studi lanjutan (*Overgeneralization*). Mereka menggunakan *Hedging* (bahasa berhati-hati: *tends to indicate*, *appears to suggest*, *is likely to result in*) untuk menunjukkan integritas epistemologis.',
    coreConceptSummary: 'Hedging Verbs (appear, seem, tend, suggest). Hedging Adverbs (arguably, potentially, largely). Hedging Modals (may, could, might).',
    decisionTree: [
      {
            "step": "Langkah 1: Skrining Derajat Kepastian Klaim Ilmiah",
            "question": "Apakah klaim merupakan fakta mutlak 100% atau interpretasi empiris yang berhati-hati?",
            "branches": [
                  {
                        "condition": "Klaim interpretasi data penelitian / hipotesis",
                        "outcome": "Gunakan Hedging Verbs / Adverbs",
                        "rule": "Gunakan: suggests, indicates, appears to, tends to, potentially."
                  },
                  {
                        "condition": "Hukum alam abadi / bukti matematis definitif",
                        "outcome": "Factual Statement",
                        "rule": "Gunakan present factual (The formula calculates equilibrium)."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "This study proves that playing games is definitely bad for all children.",
      "standard": "This study indicates that excessive video gaming is harmful to children.",
      "academicHigh": "The empirical findings suggest that excessive exposure to interactive digital media may potentially impair cognitive attentiveness in pediatric cohorts.",
      "analysis": "Menggantikan generalisasi mutlak (*proves that... definitely bad for all) dengan academic hedging elegan: \"suggests\", \"may potentially impair\", dan \"pediatric cohorts\"."
},
    canDoChecklist: [
      "Saya menghindari kata over-klaim absolut seperti \"proves\", \"always\", \"never\", \"definitely\" dalam esai ilmiah.",
      "Saya mampu menerapkan hedging verbs (suggests, appears, indicates) dan modal hedging (may, might, could).",
      "Saya paham bahwa hedging adalah indikator utama kematangan berpikir akademis di IELTS & TOEFL."
],
    pocketAxioms: [
      "Hindari over-generalization: jangan gunakan \"proves 100%\", gunakan \"strongly suggests\".",
      "Gunakan modal hedging: \"may potentially lead to\" alih-alih \"will cause\".",
      "Gunakan adverb of frequency yang terukur: \"frequently\", \"predominantly\", bukan \"always\"."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Menghindari Generalisasi Mutlak (Overgeneralization)',
        explanation: 'Ganti klaim mutlak ("X causes Y") dengan klaim ilmiah berhati-hati ("X appears to contribute significantly to Y").',
        formula: 'Subject + [appears to / tends to / is likely to] + Verb | Data + [suggests / indicates] + that...',
        examples: [
          {
            sentence: 'The preliminary data suggests that the new therapy may reduce recovery duration.',
            translation: 'Data awal tersebut mengindikasikan bahwa terapi baru tersebut berpotensi mengurangi durasi pemulihan.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Pada kriteria Task Response IELTS Band 8.0+, deskriptor resmi menuntut kesimpulan yang "nuanced and appropriately qualified" melalui Hedging.',
      toeflApplication: 'TOEFL Integrated Writing menilai kemampuan membedakan antara fakta mutlak dan hipotesis tentatif.',
      scoringImpact: 'Menciptakan gaya bahasa akademis yang matang dan terpercaya.',
    },
    goldenRules: [
      'Gunakan modal verbs (may, could) dan verbs of perception (suggest, appear, tend) untuk membatasi klaim ilmiah.',
      'Hindari kata mutlak (always, completely, 100% proved) dalam penulisan esai argumentatif.',
    ],
    questions: [
      {
        id: 'q38-1',
        category: 'Exam Readiness',
        difficulty: 'Dasar',
        question: 'Pilih kalimat yang menerapkan Academic Hedging secara elegan tanpa overgeneralization:',
        options: [
          'Social media completely destroys the communication skills of all teenagers.',
          'Social media tends to adversely impact the face-to-face interpersonal communication of many adolescents.',
          'Social media always causes psychological damage to every teenager.',
          'Social media 100% ruins human relationships.',
        ],
        correctAnswer: 'Social media tends to adversely impact the face-to-face interpersonal communication of many adolescents.',
        explanation: 'Kalimat ini menggunakan hedging ("tends to adversely impact", "many adolescents") yang objektif dan terukur secara akademis.',
        ruleReference: 'Kaidah Emas: Academic Hedging menghindari klaim mutlak berlebihan.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec38-1',
        flawedSentence: 'The study completely proves that artificial intelligence will destroy all white-collar jobs.',
        flawLocation: 'completely proves that artificial intelligence will destroy all',
        correctedSentence: 'The study suggests that artificial intelligence may significantly disrupt many white-collar jobs.',
        linguisticExplanation: 'Terapkan Academic Hedging: ganti "completely proves" dengan "suggests", "will destroy" dengan "may significantly disrupt", dan "all" dengan "many".',
      }
    ]
  },

  {
    id: 'modul-39-nominalization',
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Standar Ujian Internasional',
    categoryKey: 'Exam Readiness',
    moduleNumber: 39,
    title: 'Nominalization & Lexical Density in Formal Writing',
    subtitle: 'Mengubah kata kerja/sifat menjadi kata benda abstrak untuk gaya penulisan formal berdensitas tinggi',
    levelBadge: 'Kesiapan Ujian · Modul 39',
    estimatedMinutes: 9,
    prerequisite: 'Modul 01 & 37',
    mentalModelIntro: 'Nominalisasi (*Nominalization*) adalah proses mengubah kata kerja (*verb*) atau kata sifat (*adjective*) menjadi kata benda abstrak (*noun*). Penutur asli menggunakan nominalisasi untuk memadatkan ide menjadi subjek yang elegan (contoh: *Because technology expanded rapidly...* ➔ *The rapid expansion of technology...*).',
    coreConceptSummary: 'Nominalisasi meningkatkan densitas leksikal esai akademik: Verb ➔ Noun (expand ➔ expansion, reduce ➔ reduction, evaluate ➔ evaluation). Adjective ➔ Noun (stable ➔ stability, diverse ➔ diversity).',
    decisionTree: [
      {
            "step": "Langkah 1: Transformasi Klausa Menjadi Frasa Benda",
            "question": "Bagaimana memadatkan kalimat verbal sebab-akibat menjadi Noun Phrase berbobot?",
            "branches": [
                  {
                        "condition": "Klausa verbal konjungtif (\"Because X happened, Y did...\")",
                        "outcome": "Terapkan Nominalisasi",
                        "rule": "The [Noun of Action] of X precipitated [Noun of Result] in Y."
                  },
                  {
                        "condition": "Frasa kata sifat (\"The system is reliable...\")",
                        "outcome": "Abstrak Noun",
                        "rule": "The reliability of the system enhances operational efficacy."
                  }
            ]
      }
],
    registerLadder: {
      "informal": "Because the city grew very fast, water became very scarce.",
      "standard": "Because the population expanded rapidly, water scarcity increased.",
      "academicHigh": "Unprecedented urban expansion precipitated severe regional water scarcity.",
      "analysis": "Mengubah klausa sebab-akibat panjang menjadi kalimat berdensitas leksikal tinggi dengan nominalisasi: \"Unprecedented urban expansion\" (S) + \"precipitated\" (V) + \"severe regional water scarcity\" (O)."
},
    canDoChecklist: [
      "Saya mampu mengubah kata kerja (expand ➔ expansion, destroy ➔ destruction) menjadi kata benda formal.",
      "Saya bisa memadatkan kalimat majemuk panjang menjadi klausa tunggal berdensitas leksikal tinggi.",
      "Saya memahami peran nominalisasi dalam mendongkrak skor Lexical Resource IELTS Band 8.5+."
],
    pocketAxioms: [
      "Nominalisasi memindahkan muatan makna dari kata kerja/kata hubung ke dalam Frasa Benda Padat.",
      "Gunakan kata kerja relasional akademik: precipitate, induce, engender, correlate with, yield.",
      "Jaga keseimbangan agar tulisan tetap jernih dan tidak terbebani tumpukan frasa benda yang berlebihan."
],
    sections: [
      {
        stepNumber: 'Langkah 1: Transformasi Klausa Bertele-tele Menjadi Noun Phrase Padat',
        explanation: 'Ubah klausa verbal panjang menjadi frasa nominal yang berbobot.',
        formula: 'Clause Verbal: "When the population increased rapidly..." ➔ Nominal: "The rapid increase in population..."',
        examples: [
          {
            sentence: 'The rapid implementation of automated systems led to a significant reduction in operational costs.',
            translation: 'Penerapan cepat sistem otomatis (Nominal) menyebabkan penurunan signifikan pada biaya operasional.',
          },
        ],
      },
    ],
    examBridge: {
      ieltsApplication: 'Nominalisasi adalah kunci utama menaikkan skor Grammatical Range & Accuracy dan Lexical Resource ke Band 8.5+.',
      toeflApplication: 'TOEFL Academic Reading passages didominasi oleh struktur kalimat berbasis nominalisasi.',
      scoringImpact: 'Menciptakan tulisan dengan densitas leksikal dan kematangan gaya bahasa penutur asli.',
    },
    goldenRules: [
      'Gunakan nominalisasi untuk merangkum ide paragraf sebelumnya menjadi subjek kalimat berikutnya (The rapid expansion of..., The successful integration of...).',
    ],
    questions: [
      {
        id: 'q39-1',
        category: 'Exam Readiness',
        difficulty: 'Dasar',
        question: 'Pilih versi kalimat yang menerapkan nominalisasi akademik secara paling efektif:',
        options: [
          'Because the committee evaluated the proposals rigorously, they selected the best candidate.',
          'The committee\'s rigorous evaluation of the proposals ensured the selection of the optimal candidate.',
          'When the committee was evaluating rigorously the proposals, they chose.',
          'The committee evaluated and then selected.',
        ],
        correctAnswer: 'The committee\'s rigorous evaluation of the proposals ensured the selection of the optimal candidate.',
        explanation: 'Kalimat ini menggunakan nominalisasi yang padat dan elegan ("rigorous evaluation", "selection of the optimal candidate").',
        ruleReference: 'Kaidah Emas: Nominalisasi meningkatkan densitas leksikal formal.',
      },
    ],
    errorCorrectionTasks: [
      {
        id: 'ec39-1',
        flawedSentence: 'Because the government failed to regulate carbon emissions promptly, global temperatures rose quickly.',
        flawLocation: 'Because the government failed to regulate carbon emissions promptly',
        correctedSentence: 'The government\'s failure to promptly regulate carbon emissions contributed to the rapid rise in global temperatures.',
        linguisticExplanation: 'Ubah klausa sebab-akibat menjadi frasa nominal yang berbobot: "The government\'s failure to promptly regulate carbon emissions...".',
      }
    ]
  }
];
