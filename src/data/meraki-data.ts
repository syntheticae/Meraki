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
    mentalModelIntro: 'Setiap kalimat bahasa Inggris wajib memiliki Subjek yang jelas. Bahasa Inggris adalah bahasa non-pro-drop (tidak mengenal penanggalan subjek seperti bahasa Indonesia). Anda tidak bisa mengatakan "Is raining" melainkan harus "It is raining". Pronoun adalah kata ganti ringkas berkelas tertutup (closed word class) yang menggantikan nomina agar tidak terjadi repetisi yang melelahkan dalam diskursus ilmiah.',
    coreConceptSummary: 'Subjek terbagi atas 3 sudut pandang gramatikal: 1st Person (I/We), 2nd Person (You), dan 3rd Person (He/She/It/They). Bentuk kasus nominatif (Subject Pronoun) hanya boleh menduduki posisi pelaku sebelum kata kerja utama, sedangkan kasus akusatif (Object Pronoun: me, him, her, us, them) wajib menduduki posisi penderita setelah verba transitif atau komplementasi preposisi.',
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
                "stepNumber": "01",
                "title": "Taksonomi Kasus Gramatikal: Nominative vs Accusative Case",
                "explanation": "Dalam tata bahasa deskriptif bahasa Inggris, Personal Pronouns adalah salah satu dari sedikit elemen yang masih mempertahankan sistem kasus infleksional (Case System). Nominative Case (I, You, He, She, It, We, They) bertindak sebagai agen atau argumen eksternal verba. Sebaliknya, Accusative/Objective Case (me, you, him, her, it, us, them) bertindak sebagai argumen internal yang menerima tindakan kata kerja atau menjadi objek dari frasa preposisional (Prepositional Complement).",
                "formula": "Nominative Pronoun (Subject) + Finite Verb + Accusative Pronoun (Direct/Indirect Object) / Preposition + Accusative Pronoun",
                "examples": [
                        {
                                "sentence": "They evaluated the methodology carefully before submitting the manuscript.",
                                "translation": "Mereka mengevaluasi metodologi tersebut dengan teliti sebelum mengirimkan manuskrip.",
                                "note": "They = Kasus Nominatif (Subjek Pelaku verba evaluated)."
                        },
                        {
                                "sentence": "The senior director assigned the international research grant to them.",
                                "translation": "Direktur senior memberikan dana penelitian internasional tersebut kepada mereka.",
                                "note": "them = Kasus Akusatif setelah preposisi to."
                        },
                        {
                                "sentence": "Between you and me, the current economic projection is overly optimistic.",
                                "translation": "Di antara kita berdua, proyeksi ekonomi saat ini terlalu optimis.",
                                "note": "you and me = Kasus Akusatif wajib karena diatur oleh preposisi Between."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Me and him investigated the chemical sample yesterday.",
                        "correctSentence": "He and I investigated the chemical sample yesterday.",
                        "linguisticReason": "Kata \"Me\" dan \"him\" adalah kata ganti kasus akusatif/objek. Menggunakannya di posisi subjek sebelum verba \"investigated\" melanggar kaidah penataan kasus sintaksis bahasa Inggris baku."
                }
        },
        {
                "stepNumber": "02",
                "title": "Ekspletif & Dummy Subject (\"It\" dan \"There\")",
                "explanation": "Bahasa Indonesia adalah bahasa pro-drop yang memungkinkan penanggalan subjek ketika konteks cuaca atau eksistensi dibahas (contoh: \"Sedang hujan lebat\" atau \"Penting untuk dicatat bahwa...\"). Namun, bahasa Inggris mewajibkan posisi subjek (Spec,TP) terisi secara fonologis. Untuk proposisi tanpa agen semantis konkret, digunakanlah Dummy/Expletive Subject \"It\" (untuk cuaca, waktu, jarak, dan evaluasi klausa ekstraposisi) serta \"There\" (untuk proposisi eksistensial).",
                "formula": "It + is/was + [Adjective/Noun Complement] + [that-clause / to-infinitive] | There + is/are/was/were + [Noun Phrase]",
                "examples": [
                        {
                                "sentence": "It is imperative to maintain rigorous experimental controls throughout the trial.",
                                "translation": "Sangat penting untuk menjaga kontrol eksperimental yang ketat sepanjang uji coba.",
                                "note": "It = Dummy subject formal yang mengantisipasi klausa infinitif to maintain..."
                        },
                        {
                                "sentence": "It rained continuously across the northern hemisphere during the monsoon season.",
                                "translation": "Hujan turun terus-menerus di belahan bumi utara selama musim hujan.",
                                "note": "It = Meteorologikal dummy subject (tidak ada agen biologis)."
                        },
                        {
                                "sentence": "There are significant discrepancies between the theoretical model and empirical telemetry.",
                                "translation": "Terdapat perbedaan signifikan antara model teoritis dan telemetri empiris.",
                                "note": "There = Ekspletif eksistensial yang mengenalkan subjek sejati (significant discrepancies)."
                        }
                ],
                "commonPitfall": "Menerjemahkan kalimat bahasa Indonesia secara literal tanpa menyertakan ekspletif, seperti \"*Is important to analyze the data*\" alih-alih \"*It is important to analyze the data*\"."
        },
        {
                "stepNumber": "03",
                "title": "Urutan Kesopanan & Kasus pada Subjek Majemuk (Compound Subjects)",
                "explanation": "Ketika dua atau lebih subjek digabungkan menggunakan konjungsi koordinatif \"and\", konvensi preskriptif baku menuntut dua aturan: (1) Urutan Kesopanan (Politeness Hierarchy), di mana pihak lain disebut sebelum diri sendiri (Second/Third person sebelum First person), dan (2) Integritas Kasus (Case Integrity), di mana pronoun tetap harus berbentuk nominatif. Cara termudah memvalidasinya adalah dengan menguji kalimat tersebut jika pihak lain dihilangkan.",
                "formula": "[Noun/Name/Third Person Pronoun] + and + I + [Finite Verb]",
                "examples": [
                        {
                                "sentence": "Professor Vance and I collaborated on the peer-reviewed meta-analysis.",
                                "translation": "Profesor Vance dan saya berkolaborasi dalam meta-analisis yang ditelaah sejawat.",
                                "note": "Uji eliminasi: \"I collaborated\" (Benar), bukan \"Me collaborated\" (Salah)."
                        },
                        {
                                "sentence": "The scholarship committee notified my colleague and me regarding the symposium.",
                                "translation": "Komite beasiswa memberitahu kolega saya dan saya mengenai simposium tersebut.",
                                "note": "Di posisi objek verba notified: \"notified me\" (Kasus Akusatif baku)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "My brother and me went to London last summer.",
                        "correctSentence": "My brother and I went to London last summer.",
                        "linguisticReason": "Jika \"My brother\" dihilangkan, kalimat menjadi \"*Me went to London*\" yang merupakan kesalahan fatal kasus objek di posisi subjek."
                }
        },
        {
                "stepNumber": "04",
                "title": "Kohesi Anafora & Pronoun Referencing dalam Retorika Akademik",
                "explanation": "Dalam penulisan esai akademik (IELTS Task 2 & TOEFL Writing), pronoun berfungsi sebagai peranti kohesi leksikal (Anaphoric Reference) yang merujuk kembali ke Nomina Anteseden (Antecedent Noun). Masalah fatal yang sering mengurangi skor Coherence & Cohesion adalah Pronoun-Antecedent Disagreement (ketidakcocokan jumlah/gender) dan Vague Pronoun Reference (ambiguitas ketika ada dua nomina yang berpotensi menjadi rujukan).",
                "formula": "Antecedent Noun (Tunggal/Jamak) ----[Kesesuaian Fitur Gramatikal]----> Anaphoric Pronoun",
                "examples": [
                        {
                                "sentence": "When an applicant submits an incomplete dossier, the admissions office will return it immediately.",
                                "translation": "Ketika seorang pelamar mengirimkan berkas yang tidak lengkap, kantor penerimaan akan mengembalikannya segera.",
                                "note": "it merujuk secara tunggal dan presisi ke dossier."
                        },
                        {
                                "sentence": "The researchers calibrated the optical sensors before they initiated the particle collision sequence.",
                                "translation": "Para peneliti mengalibrasi sensor optik sebelum mereka memulai urutan tabrakan partikel.",
                                "note": "they merujuk jelas ke The researchers, bukan the sensors."
                        }
                ],
                "commonPitfall": "Menggunakan \"they\" secara ambigu tanpa anteseden jelas dalam esai formal, seperti \"*They say that smoking is dangerous*\" alih-alih menyebutkan sumbernya secara formal: \"*Medical authorities assert that smoking is hazardous*\"."
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
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 2,
    title: 'Fondasi To Be (Am, Is, Are, Was, Were, Been, Being) & Kalimat Nominal vs Verbal',
    subtitle: 'Mengenali esensi predikat To Be, Subject Complement, dan pemisahan mutlak kalimat verbal vs nominal',
    levelBadge: 'Fondasi Mutlak · Modul 02',
    estimatedMinutes: 25,
    mentalModelIntro: 'Dalam bahasa Indonesia, kata sifat atau kata benda bisa langsung berfungsi sebagai predikat tanpa kata kerja bantu (misal: "Dia pintar", "Mereka dokter"). Namun, dalam bahasa Inggris, KALIMAT WAJIB MEMILIKI VERBA. To Be bertindak sebagai jembatan kopula (Copular Verb) yang menghubungkan subjek dengan pelengkap predikatifnya (Subject Complement).',
    coreConceptSummary: 'To Be memiliki 8 bentuk infleksi morfologis (be, am, is, are, was, were, being, been). Sebagai kata kerja kopulatif (Copula), To Be tidak menyatakan aksi fisik melainkan status keberadaan, identitas nomina, atau keadaan adjektiva.',
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
                "stepNumber": "01",
                "title": "Peran Kopula (Copular Verb) & Predikatif Kalimat",
                "explanation": "Istilah \"Kopula\" (Copula) berasal dari bahasa Latin yang berarti \"pengikat\" atau \"rantai\". Dalam sintaksis, Copular Verb adalah kata kerja yang menghubungkan Subjek dengan Predikatifnya (Subject Complement), baik berupa Frasa Adjektiva (Adjective Phrase), Frasa Nomina (Noun Phrase), atau Frasa Preposisional (Prepositional Phrase). Berbeda dengan kata kerja aksi transitif, kopula tidak pernah mengambil direct object penderita.",
                "formula": "Subject + To Be (Kopula) + Subject Complement [Adjective / Noun / Prepositional Phrase]",
                "examples": [
                        {
                                "sentence": "The theoretical hypothesis is valid under specific laboratory conditions.",
                                "translation": "Hipotesis teoretis tersebut valid di bawah kondisi laboratorium tertentu.",
                                "note": "is menghubungkan subjek The theoretical hypothesis dengan adjektiva valid."
                        },
                        {
                                "sentence": "Dr. Aris was a distinguished professor of bioethics at Oxford.",
                                "translation": "Dr. Aris adalah seorang profesor bioetika terkemuka di Oxford.",
                                "note": "was menghubungkan subjek dengan frasa nomina a distinguished professor."
                        },
                        {
                                "sentence": "The research artifacts are in the primary archive.",
                                "translation": "Artefak penelitian tersebut berada di arsip utama.",
                                "note": "are menghubungkan subjek dengan lokasi preposisional in the primary archive."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The experimental method very innovative.",
                        "correctSentence": "The experimental method is very innovative.",
                        "linguisticReason": "Bahasa Indonesia memperbolehkan predikasi adjektiva secara langsung (*Metode tersebut sangat inovatif*), namun bahasa Inggris mewajibkan kopula \"is\" untuk membentuk predikat finitis yang sah."
                }
        },
        {
                "stepNumber": "02",
                "title": "Matriks Dimensi Waktu & Keselarasan Subjek (Subject-Verb Agreement pada To Be)",
                "explanation": "To Be adalah kata kerja paling ireguler dalam bahasa Inggris dengan pembedaan bentuk berdasarkan waktu (Tense) dan jumlah subjek (Number/Person). Waktu sekarang (Present) membedakan: \"am\" (1st Person Singular), \"is\" (3rd Person Singular: He, She, It, Nomina Tunggal/Uncountable), dan \"are\" (Plural & 2nd Person: You, We, They). Waktu lampau (Past) membedakan: \"was\" (I, He, She, It, Singular) dan \"were\" (You, We, They, Plural).",
                "formula": "Present: I am | He/She/It is | You/We/They are || Past: I/He/She/It was | You/We/They were",
                "examples": [
                        {
                                "sentence": "The empirical evidence is conclusive.",
                                "translation": "Bukti empiris tersebut bersifat konklusif.",
                                "note": "Evidence adalah uncountable noun tunggal, sehingga mewajibkan \"is\" (bukan \"are\")."
                        },
                        {
                                "sentence": "The preliminary survey results were released yesterday.",
                                "translation": "Hasil survei pendahuluan dirilis kemarin.",
                                "note": "results adalah plural noun lampau, sehingga mewajibkan \"were\"."
                        }
                ],
                "commonPitfall": "Menggunakan \"are\" setelah kata benda tak dapat dihitung (uncountable), seperti \"*The information are accurate ❌*\" alih-alih \"*The information is accurate ✔*\"."
        },
        {
                "stepNumber": "03",
                "title": "To Be sebagai Auxiliary Verb: Aspek Kontinu & Pasif",
                "explanation": "Selain sebagai Main Verb (Kopula), To Be juga memegang peran vital sebagai Auxiliary Verb (Kata Kerja Bantu). Dalam Aspek Kontinu (Continuous/Progressive), To Be digabungkan dengan Present Participle (V-ing) untuk menyatakan aksi yang sedang berlangsung. Dalam Kalimat Pasif (Passive Voice), To Be digabungkan dengan Past Participle (V3) untuk mempromosikan objek menjadi fokus kalimat.",
                "formula": "Continuous Aspect: To Be + [Verb-ing] | Passive Voice: To Be + [Past Participle / V3]",
                "examples": [
                        {
                                "sentence": "The epidemiology team is investigating the novel pathogen.",
                                "translation": "Tim epidemiologi sedang menyelidiki patogen baru tersebut.",
                                "note": "is = Auxiliary Verb pengusung aspek Continuous."
                        },
                        {
                                "sentence": "The comprehensive report was published by the World Health Organization.",
                                "translation": "Laporan komprehensif tersebut diterbitkan oleh Organisasi Kesehatan Dunia.",
                                "note": "was = Auxiliary Verb pengusung Passive Voice bersama past participle published."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Zero Copula Transfer Trap & Analisis Interferensi L1",
                "explanation": "Fenomena \"Zero Copula\" adalah kecenderungan pembelajar bahasa ibu Indonesia untuk menghilangkan kata kerja To Be ketika menyusun kalimat deklaratif bahasa Inggris. Hal ini terjadi karena tata bahasa Austronesia (seperti bahasa Indonesia) tidak memiliki ekuivalen kopula wajib di depan kata sifat, kata keterangan tempat, atau frasa nominal. Mengatasi jebakan ini membutuhkan pembiasaan mental memeriksa keberadaan finite verb pada setiap klausa.",
                "formula": "Pemeriksaan Sintaksis: Apakah kalimat memiliki Main Verb? Jika tidak ada verba aksi, WAJIB ada To Be!",
                "examples": [
                        {
                                "sentence": "The participants are enthusiastic about the new curriculum.",
                                "translation": "Para peserta antusias mengenai kurikulum baru tersebut.",
                                "note": "Wajib menyertakan \"are\" sebelum kata sifat enthusiastic."
                        },
                        {
                                "sentence": "She is currently in Geneva for the international conference.",
                                "translation": "Dia saat ini berada di Jenewa untuk konferensi internasional.",
                                "note": "Wajib menyertakan \"is\" sebelum frasa keterangan tempat in Geneva."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The results ready for publication.",
                        "correctSentence": "The results are ready for publication.",
                        "linguisticReason": "Penghilangan \"are\" menghasilkan kalimat tanpa predikat finitis (Sentence Fragment), salah satu kesalahan paling dihindari dalam penilaian tata bahasa akademik."
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
      id: "err-m02-2",
      flawedSentence: "The result of the comprehensive blood tests are normal.",
      flawLocation: "are normal",
      correctedSentence: "The result of the comprehensive blood tests is normal.",
      linguisticExplanation: "Head Noun dari subjek kalimat adalah \"The result\" (tunggal), bukan \"blood tests\" yang berada di dalam prepositional phrase. To Be yang tepat adalah \"is\".",
      acceptedVariations: [
            "The results of the comprehensive blood tests are normal."
      ]
},
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
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 3,
    title: 'Fondasi Auxiliary Utama: HAVE, HAS, HAD (Kepemilikan, Aspek Selesai, dan Keharusan)',
    subtitle: 'Membedakan HAVE sebagai Kata Kerja Utama (Possession), Auxiliary (Perfect Aspect), dan Modalitas (Obligation)',
    levelBadge: 'Fondasi Mutlak · Modul 03',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata kerja "HAVE" adalah pilar ganda dalam tata bahasa Inggris. Ketika bertindak sebagai Kata Kerja Utama (Main Verb), HAVE menyatakan kepemilikan material, hubungan keluarga, atau pengalaman. Namun, ketika bertindak sebagai Kata Kerja Bantu (Auxiliary Verb), HAVE bertindak sebagai mesin waktu yang menggerakkan Aspek Perfek (Perfect Aspect), menghubungkan tindakan masa lalu dengan titik acuan saat ini.',
    coreConceptSummary: 'HAVE memiliki tiga bentuk infleksi utama: Have (Present: I/You/We/They), Has (Present: He/She/It), dan Had (Past: Semua Subjek). Membedakan kapan HAVE memerlukan do-support dan kapan HAVE berfungsi mandiri sebagai auxiliary adalah kompetensi fundamental untuk menguasai tenses lanjutan.',
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
                "stepNumber": "01",
                "title": "Dualitas Peran: Main Verb (Kepemilikan) vs Auxiliary Verb (Aspek Perfek)",
                "explanation": "Perbedaan mendasar terletak pada keberadaan kata kerja lain setelahnya. Jika HAVE berdiri sendiri diikuti Frasa Nomina, ia adalah Main Verb berstatus statif yang menyatakan kepemilikan (*possession*). Namun, jika HAVE diikuti oleh Past Participle (V3), ia berfungsi sebagai Auxiliary Verb yang membentuk Present Perfect, Past Perfect, atau Future Perfect.",
                "formula": "Main Verb: Subject + HAVE/HAS/HAD + Noun Phrase | Auxiliary Verb: Subject + HAVE/HAS/HAD + Past Participle (V3)",
                "examples": [
                        {
                                "sentence": "The laboratory has state-of-the-art spectrometry equipment.",
                                "translation": "Laboratorium tersebut memiliki peralatan spektrometri canggih.",
                                "note": "has = Main Verb (Kepemilikan / Possession)."
                        },
                        {
                                "sentence": "The researchers have conducted three consecutive clinical trials.",
                                "translation": "Para peneliti telah melaksanakan tiga uji klinis berturut-turut.",
                                "note": "have = Auxiliary Verb pengusung aspek Present Perfect bersama V3 conducted."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "I have a car -> Negative: I haven't a car (American / Modern standard).",
                        "correctSentence": "I do not have a car (Standard Modern English).",
                        "linguisticReason": "Ketika HAVE berfungsi sebagai Main Verb kepemilikan, bentuk negasi dan kalimat tanyanya membutuhkan Do-Support (*do not have / does not have*), bukan penambahan langsung not pada have."
                }
        },
        {
                "stepNumber": "02",
                "title": "Morfologi Infleksi & Keselarasan Subjek Waktu (Concord)",
                "explanation": "Pada waktu sekarang (Present Tense), HAVE berubah menjadi HAS khusus untuk subjek Orang Ketiga Tunggal (3rd Person Singular: He, She, It, Singular Noun, Uncountable Noun). Pada waktu lampau (Past Tense), bentuk HAVE dan HAS lebur menjadi HAD untuk semua subjek tanpa terkecuali.",
                "formula": "Present: [I/You/We/They/Plural] HAVE | [He/She/It/Singular/Uncountable] HAS || Past: [All Subjects] HAD",
                "examples": [
                        {
                                "sentence": "The academic institution has established a new sustainability endowment.",
                                "translation": "Institusi akademik tersebut telah mendirikan dana abadi keberlanjutan baru.",
                                "note": "The academic institution = Subjek tunggal orang ke-3 -> HAS."
                        },
                        {
                                "sentence": "Prior to the 2020 reforms, the department had published fewer annual papers.",
                                "translation": "Sebelum reformasi tahun 2020, departemen tersebut telah menerbitkan lebih sedikit makalah tahunan.",
                                "note": "had published = Past Perfect untuk peristiwa yang tuntas sebelum titik lampau 2020."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Konstruksi Kausatif: \"Have something done\" vs \"Have someone do\"",
                "explanation": "Dalam ragam formal dan akademik, HAVE sering digunakan dalam struktur Kausatif (Causative Construction) untuk menyatakan bahwa subjek mengatur atau menginstruksikan pihak lain untuk melakukan suatu tindakan, alih-alih melakukannya sendiri.",
                "formula": "Kausatif Pasif: Subject + HAVE/HAS/HAD + Object + Past Participle (V3) | Kausatif Aktif: Subject + HAVE + Agent + Bare Infinitive (V1)",
                "examples": [
                        {
                                "sentence": "The research director had the statistical dataset verified by an independent statistician.",
                                "translation": "Direktur penelitian meminta kumpulan data statistik tersebut diverifikasi oleh ahli statistik independen.",
                                "note": "had [the dataset] verified = Kausatif Pasif."
                        },
                        {
                                "sentence": "The professor had her graduate students summarize the journal articles.",
                                "translation": "Profesor tersebut meminta mahasiswa pascasarjananya meringkas artikel-artikel jurnal itu.",
                                "note": "had [her students] summarize = Kausatif Aktif dengan Bare Infinitive summarize."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Jebakan Statif vs Dinamis pada Kata Kerja \"Have\"",
                "explanation": "Ketika HAVE bermakna kepemilikan (*possession*) atau status hubungan, HAVE adalah Stative Verb dan DILARANG digunakan dalam bentuk Continuous/Progressive (-ing). Namun, ketika HAVE bermakna aktivitas dinamis seperti makan (*having lunch*), mengalami (*having difficulty*), atau mengadakan (*having a meeting*), bentuk -ing sepenuhnya legal.",
                "formula": "Statif (Kepemilikan): DILARANG -ing! | Dinamis (Aktivitas): BOLEH -ing!",
                "examples": [
                        {
                                "sentence": "The university currently has three overseas research campuses.",
                                "translation": "Universitas tersebut saat ini memiliki tiga kampus penelitian di luar negeri.",
                                "note": "Statif: Menyatakan kepemilikan fisik."
                        },
                        {
                                "sentence": "The delegation is currently having a high-level discussion in Tokyo.",
                                "translation": "Delegasi tersebut saat ini sedang mengadakan diskusi tingkat tinggi di Tokyo.",
                                "note": "Dinamis: having a discussion bermakna sedang berdiskusi."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "I am having a laptop for my academic research.",
                        "correctSentence": "I have a laptop for my academic research.",
                        "linguisticReason": "Memiliki laptop adalah kondisi kepemilikan statif murni, sehingga tidak boleh menggunakan bentuk progresif \"*am having*\"."
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
      id: "err-m03-2",
      flawedSentence: "She has not any sufficient financial resources for tuition.",
      flawLocation: "has not any",
      correctedSentence: "She does not have any sufficient financial resources for tuition.",
      linguisticExplanation: "Dalam Simple Present saat \"have\" berfungsi sebagai Main Verb kepemilikan (bukan auxiliary), bentuk negatifnya wajib menggunakan operator \"does not have\" (American/International standard).",
      acceptedVariations: [
            "She has no sufficient financial resources for tuition."
      ]
},
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
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
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
      id: "err-m04-2",
      flawedSentence: "Does the professor explains the quantum mechanics theorem clearly?",
      flawLocation: "explains",
      correctedSentence: "Does the professor explain the quantum mechanics theorem clearly?",
      linguisticExplanation: "Setelah auxiliary operator \"Does\", kata kerja utama (Main Verb) wajib kembali ke bentuk dasar / Bare Infinitive (\"explain\", bukan \"explains\"). Fenomena ini disebut Do-Support Inflection Stripping.",
      acceptedVariations: []
},
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
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 5,
    title: 'Subject-Verb Agreement Fundamental & Kaidah Akhiran -s/-es',
    subtitle: 'Menyelaraskan subjek tunggal vs jamak, aturan ortografi akhiran -s/-es, dan logika Simple Present',
    levelBadge: 'Fondasi Mutlak · Modul 05',
    estimatedMinutes: 25,
    mentalModelIntro: 'Subject-Verb Agreement (Keselarasan Subjek-Verba) adalah aturan sintaksis paling mendasar: Subjek Tunggal membutuhkan Verba Tunggal, dan Subjek Jamak membutuhkan Verba Jamak. Tantangan terbesar dalam esai akademik muncul ketika subjek dipisahkan dari verba oleh frasa penyela yang panjang (Intervening Phrases) atau ketika kuantifier ambigu digunakan.',
    coreConceptSummary: 'Pada Present Tense, verba tunggal orang ketiga diakhiri dengan akhiran morfologis -s/-es (*The student analyzes*), sedangkan verba jamak tidak memiliki akhiran -s (*The students analyze*). Identifikasi Subjek Utama (Head Noun) secara tepat adalah kunci mencegah error.',
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
                "stepNumber": "01",
                "title": "Kaidah Inti Concord Singular/Plural & Infleksi Akhiran -s/-es",
                "explanation": "Dalam bahasa Inggris, terdapat fenomena asimetris: Nomina Jamak biasanya berakhiran -s (students, hypotheses, factors), sedangkan Verba Tunggal yang berakhiran -s (analyzes, runs, is, has). Keselarasan gramatikal (Concord) menuntut verba menyesuaikan jumlah gramatikal dari Head Noun (inti kata benda subjek), bukan kata benda yang kebetulan berada paling dekat dengan kata kerja.",
                "formula": "Singular Subject + Verb[-s/-es] | Plural Subject + Verb[Base Form]",
                "examples": [
                        {
                                "sentence": "The primary hypothesis requires further empirical validation.",
                                "translation": "Hipotesis utama tersebut membutuhkan validasi empiris lebih lanjut.",
                                "note": "hypothesis (tunggal) -> requires (-s)."
                        },
                        {
                                "sentence": "These statistical methodologies require comprehensive peer review.",
                                "translation": "Metodologi statistik ini membutuhkan penelaahan sejawat yang komprehensif.",
                                "note": "methodologies (jamak) -> require (tanpa -s)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Frasa Penyela (Intervening Phrases) & The Proximity Trap",
                "explanation": "Jebakan Proksimitas (The Proximity Trap) terjadi ketika penulis menyelaraskan kata kerja dengan kata benda di dalam frasa preposisional penyela (seperti *along with, as well as, together with, in addition to, accompanied by*), alih-alih dengan subjek sejati di awal kalimat.",
                "formula": "[HEAD NOUN (Subjek Sejati)] + [Frasa Penyela: as well as / together with / along with ...] + [VERB SESUAI HEAD NOUN]",
                "examples": [
                        {
                                "sentence": "The lead investigator, along with three graduate assistants, has published the seminal paper.",
                                "translation": "Peneliti utama, bersama dengan tiga asisten pascasarjana, telah menerbitkan makalah penting itu.",
                                "note": "Subjek sejati adalah The lead investigator (tunggal), sehingga verba wajib HAS (bukan have)."
                        },
                        {
                                "sentence": "The causes of this widespread economic instability are multifaceted.",
                                "translation": "Penyebab-penyebab dari ketidakstabilan ekonomi yang meluas ini bersifat multifaset.",
                                "note": "Subjek sejati adalah The causes (jamak), sehingga verba wajib ARE."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The professor, together with her students, were present at the summit.",
                        "correctSentence": "The professor, together with her students, was present at the summit.",
                        "linguisticReason": "Frasa \"together with her students\" hanyalah frasa preposisional penjelas, bukan subjek gramatikal majemuk. Subjek gramatikal tetap tunggal \"The professor\" -> was."
                }
        },
        {
                "stepNumber": "03",
                "title": "Indefinite Pronouns: Singular Absolut vs Distributive Concord",
                "explanation": "Pronoun tak tentu (Indefinite Pronouns) yang berakhiran -one, -body, -thing (*Everyone, Everybody, Everything, Someone, Anyone, No one, Each, Either, Neither*) secara preskriptif dihitung sebagai TUNGGAL (Singular) dan selalu mewajibkan verba berakhiran -s.",
                "formula": "Everyone / Each / Neither / Either of [Plural Noun] + [SINGULAR VERB (-s)]",
                "examples": [
                        {
                                "sentence": "Each of the experimental parameters was calibrated according to ISO standards.",
                                "translation": "Masing-masing dari parameter eksperimental tersebut dikalibrasi sesuai standar ISO.",
                                "note": "Each of the parameters -> was (tunggal)."
                        },
                        {
                                "sentence": "Neither of the proposed solutions addresses the root cause of urban congestion.",
                                "translation": "Tak satu pun dari solusi yang diusulkan itu mengatasi akar penyebab kemacetan perkotaan.",
                                "note": "Neither of the solutions -> addresses (tunggal)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Kuantifier Fraksional & Subjek Inversi Ekspletif (There is/are)",
                "explanation": "Pada kuantifier fraksional atau persentase (*none of, all of, majority of, percentage of*), jumlah verba ditentukan oleh nomina yang mengikutinya (Countable Plural -> Jamak; Uncountable -> Tunggal). Pada konstruksi \"There is / There are\", subjek gramatikal berada SETELAH kata kerja kopula.",
                "formula": "There + is/was + [Singular/Uncountable Noun] | There + are/were + [Plural Noun Phrase]",
                "examples": [
                        {
                                "sentence": "Two-thirds of the Amazon rainforest is vulnerable to climate degradation.",
                                "translation": "Dua pertiga dari hutan hujan Amazon rentan terhadap degradasi iklim.",
                                "note": "rainforest (uncountable/tunggal) -> is."
                        },
                        {
                                "sentence": "Two-thirds of the survey respondents support renewable energy subsidies.",
                                "translation": "Dua pertiga dari responden survei mendukung subsidi energi terbarukan.",
                                "note": "respondents (jamak) -> support."
                        },
                        {
                                "sentence": "There are several fundamental reasons why the policy failed.",
                                "translation": "Terdapat beberapa alasan mendasar mengapa kebijakan tersebut gagal.",
                                "note": "There are + several fundamental reasons (jamak)."
                        }
                ]
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
      id: "err-m05-2",
      flawedSentence: "Every student and teacher were present at the annual convocation.",
      flawLocation: "were present",
      correctedSentence: "Every student and teacher was present at the annual convocation.",
      linguisticExplanation: "Subjek yang diawali oleh determiner \"Every\" atau \"Each\", meskipun menggabungkan beberapa nomina dengan \"and\", selalu berstatus tunggal (singular concord) dan menuntut verba \"was\".",
      acceptedVariations: []
},
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
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 6,
    title: 'Arsitektur Noun: Proper, Common, Concrete, Abstract, dan Collective Nouns',
    subtitle: 'Mengenali entitas pembicaraan dan klasifikasi substantif dari konsep paling dasar',
    levelBadge: 'Morfologi Noun · Modul 06',
    estimatedMinutes: 25,
    mentalModelIntro: 'Nomina (Kata Benda) adalah blok bangunan utama dalam setiap kalimat. Dalam penulisan akademik, Anda harus mampu membedakan 4 kategori nomina (Proper, Common, Collective, dan Abstract) karena masing-masing memiliki implikasi kapitalisasi, penggunaan artikel, dan keselarasan subjek-verba (Subject-Verb Agreement) yang berbeda.',
    coreConceptSummary: 'Proper Nouns menamai entitas unik berhuruf kapital. Common Nouns menamai objek generik. Collective Nouns menamai kelompok individu. Abstract Nouns menamai konsep kualitatif nirwujud yang menjadi tulang punggung wacana ilmiah dan analitis.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Taksonomi 4 Kategori Nomina & Karakteristik Sintaksis",
                "explanation": "Proper Nouns merujuk pada entitas tunggal spesifik (seperti *Oxford University, Dr. Vance, Indonesia*) dan selalu diawali huruf kapital tanpa memerlukan artikel penentu umum. Common Nouns adalah kata benda generik yang dapat dihitung (Countable) dan wajib memiliki determiner jika berbentuk tunggal (*a hypothesis, the laboratory*). Collective Nouns merujuk pada kesatuan kelompok (*team, committee, faculty*), sedangkan Abstract Nouns merujuk pada ide, keadaan, atau kualitas (*integrity, sustainability, validity*).",
                "formula": "Proper Noun [Kapital] | Common Noun [Determiner + Noun] | Collective Noun [Grup] | Abstract Noun [Konsep Nirwujud]",
                "examples": [
                        {
                                "sentence": "Dr. Aris presented his theoretical framework at Cambridge University.",
                                "translation": "Dr. Aris mempresentasikan kerangka teoretisnya di Universitas Cambridge.",
                                "note": "Dr. Aris & Cambridge University = Proper Nouns (Kapital)."
                        },
                        {
                                "sentence": "The empirical validity of the methodology was questioned by the committee.",
                                "translation": "Validitas empiris dari metodologi tersebut dipertanyakan oleh komite.",
                                "note": "validity = Abstract Noun, committee = Collective Noun."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Collective Nouns: Keselarasan Tunggal vs Jamak (American vs British Concord)",
                "explanation": "Collective Nouns (seperti *family, government, jury, audience, committee*) dapat mengambil verba tunggal atau jamak tergantung fokus semantisnya. Dalam American English, fokusnya adalah pada kesatuan tunggal (Single Unit) -> Verba Tunggal (*The committee has decided*). Dalam British English, jika fokusnya adalah anggota individual di dalam kelompok, verba jamak diperbolehkan (*The committee have decided*). Dalam penulisan akademik formal internasional (IELTS/TOEFL), penggunaan verba tunggal adalah standar yang paling aman dan konsisten.",
                "formula": "Collective Noun (Sebagai 1 Entitas Utuh) + SINGULAR VERB (has / is / analyzes)",
                "examples": [
                        {
                                "sentence": "The editorial board has reached a unanimous consensus.",
                                "translation": "Dewan editorial telah mencapai konsensus bulat.",
                                "note": "The editorial board dihitung sebagai 1 unit institusi -> has."
                        },
                        {
                                "sentence": "The research faculty is developing a multidisciplinary curriculum.",
                                "translation": "Fakultas riset sedang mengembangkan kurikulum multidisiplin.",
                                "note": "faculty dihitung sebagai 1 badan akademik -> is."
                        }
                ],
                "commonPitfall": "Mengganti pronoun rujukan secara tidak konsisten dalam satu kalimat, misalnya \"*The team has submitted their report ❌*\" (inkonsisten antara has tunggal dan their jamak). Gunakan \"*The team has submitted its report ✔*\"."
        },
        {
                "stepNumber": "03",
                "title": "Nomina Abstrak & Pembentukan Suffix Akademik",
                "explanation": "Nomina Abstrak adalah pondasi kosakata akademik (Academic Word List / AWL). Nomina ini dibentuk melalui proses morfologis derivasional dengan menambahkan imbuhan akhiran (suffixes) pada verba atau adjektiva, seperti -tion (*distribution*), -ment (*development*), -ity (*feasibility*), -ance/-ence (*significance, coherence*), dan -ness (*awareness*).",
                "formula": "Verb/Adj + Suffix (-tion / -ment / -ity / -ence) -> Abstract Noun",
                "examples": [
                        {
                                "sentence": "The implementation of the environmental directive faced significant resistance.",
                                "translation": "Penerapan arahan lingkungan tersebut menghadapi resistensi yang signifikan.",
                                "note": "implementation (dari implement), resistance (dari resist) = Abstract Nouns."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Noun Compounds & Kaidah Modifikasi Jamak Asimetris",
                "explanation": "Ketika dua kata benda digabungkan menjadi Noun Compound (misal: *research methodology, student dormitory*), kata benda pertama berfungsi sebagai Modifying Noun (Adjektiva Semantis). Modifying Noun ini WAJIB selalu berbentuk tunggal, meskipun konsepnya jamak.",
                "formula": "Modifying Noun (SELALU TUNGGAL) + Head Noun (Bisa Tunggal/Jamak)",
                "examples": [
                        {
                                "sentence": "The laboratory purchased new toothbrushes for dental research.",
                                "translation": "Laboratorium membeli sikat gigi baru untuk penelitian gigi.",
                                "note": "tooth (tunggal) + brushes (jamak), BUKAN teethbrushes."
                        },
                        {
                                "sentence": "The policy established multiple eye clinics across rural provinces.",
                                "translation": "Kebijakan tersebut mendirikan beberapa klinik mata di berbagai provinsi pedesaan.",
                                "note": "eye (tunggal) + clinics (jamak), BUKAN eyes clinics."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The university built three new students dormitories.",
                        "correctSentence": "The university built three new student dormitories.",
                        "linguisticReason": "Kata benda penjelas \"student\" tidak boleh dijamakkan menjadi \"students\", meskipun menampung banyak mahasiswa."
                }
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
      id: "q-m06-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Which of the following sentences correctly utilizes a collective noun with plural concord to emphasize individual actions of its members?",
      options: [
            "The jury are divided in their individual opinions regarding the forensic evidence.",
            "The jury is divided in their individual opinions regarding the forensic evidence.",
            "The jury were agreed to its final singular verdict.",
            "The jury was arguing with themselves all afternoon."
      ],
      correctAnswer: "The jury are divided in their individual opinions regarding the forensic evidence.",
      explanation: "Dalam British English (dan diakui dalam standar akademik internasional), collective noun seperti \"jury\", \"team\", atau \"committee\" dapat menggunakan verba dan pronoun jamak (\"are divided in their opinions\") ketika menyoroti tindakan terpisah dari masing-masing anggota kelompok.",
      ruleReference: "Modul 06: Collective Noun Concord Nuances"
},
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
      id: "err-m06-2",
      flawedSentence: "The criterion for selecting candidates are extremely demanding.",
      flawLocation: "criterion ... are",
      correctedSentence: "The criteria for selecting candidates are extremely demanding.",
      linguisticExplanation: "\"Criterion\" adalah bentuk tunggal (Greek singular). Untuk verba jamak \"are\", bentuk jamaknya adalah \"criteria\". Jika ingin tetap tunggal, gunakan \"The criterion is...\".",
      acceptedVariations: [
            "The criterion for selecting candidates is extremely demanding."
      ]
},
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
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 7,
    title: 'Countable vs Uncountable Nouns & Partitive Expressions',
    subtitle: 'Penanganan substansi massa, konsep abstrak, dan takaran hitung partitif',
    levelBadge: 'Morfologi Noun · Modul 07',
    estimatedMinutes: 25,
    mentalModelIntro: 'Pembedaan antara Countable Nouns (Kata Benda Dapat Dihitung) dan Uncountable Nouns (Kata Benda Massa/Tak Dapat Dihitung) adalah salah satu sumber kesalahan paling kronis bagi pembelajar bahasa Inggris. Bahasa Indonesia dapat menambahkan kata "banyak" ke kata apa saja ("banyak informasi", "banyak peralatan"), namun bahasa Inggris mewajibkan aturan kuantifikasi dan partisi yang sangat presisi.',
    coreConceptSummary: 'Countable Nouns merujuk pada unit diskrit yang dapat diberi angka langsung (one sample, two samples) dan memiliki bentuk jamak -s. Uncountable Nouns merujuk pada zat cair, gas, massa tak terbagi, atau konsep abstrak murni yang TIDAK BOLEH diawali angka, tidak boleh diawali artikel a/an, dan tidak pernah memiliki akhiran jamak -s.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Logika Entitas Diskrit vs Entitas Kontinu/Massa",
                "explanation": "Countable Nouns memiliki batas fisik yang jelas (Discontinuous/Discrete Entities). Sebaliknya, Uncountable Nouns dipandang sebagai satu kesatuan kontinu (Continuous Mass) atau konsep payung kategorikal (Hypernyms). Oleh karena itu, Uncountable Nouns selalu mengambil verba tunggal dan tidak boleh dimodifikasi langsung dengan angka (*three informations ❌*).",
                "formula": "Countable: [Number / a/an] + Singular Noun | [Many / Few] + Plural Noun[-s] || Uncountable: [Much / Little / Amount of] + Uncountable Noun (Singular Verb)",
                "examples": [
                        {
                                "sentence": "The researchers gathered substantial empirical evidence.",
                                "translation": "Para peneliti mengumpulkan bukti empiris yang substansial.",
                                "note": "evidence = Uncountable Noun (tidak boleh evidences)."
                        },
                        {
                                "sentence": "Many participants reported adverse side effects during the trial.",
                                "translation": "Banyak peserta melaporkan efek samping yang merugikan selama uji coba.",
                                "note": "participants = Countable Plural (menggunakan Many)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Struktur Partitif (Partitive Structures): Mengukur Uncountable Nouns",
                "explanation": "Untuk mengukur atau membilang kata benda tak dapat dihitung, bahasa Inggris menggunakan Struktur Partitif (Partitive Measure Nouns). Rumusnya adalah menggunakan partitif yang dapat dihitung + \"of\" + kata benda tak dapat dihitung.",
                "formula": "[Countable Partitive: piece / item / article / sheet / slice] + of + [Uncountable Noun]",
                "examples": [
                        {
                                "sentence": "She provided two valuable pieces of advice regarding data encryption.",
                                "translation": "Dia memberikan dua nasihat berharga mengenai enkripsi data.",
                                "note": "two pieces of advice (BUKAN two advices)."
                        },
                        {
                                "sentence": "The laboratory requisitioned five new items of equipment.",
                                "translation": "Laboratorium mengajukan permintaan untuk lima peralatan baru.",
                                "note": "items of equipment (BUKAN equipments)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Dual-Class Nouns: Kata Benda Berperan Ganda",
                "explanation": "Banyak kata benda akademik yang dapat berstatus Uncountable ketika merujuk pada konsep umum, tetapi menjadi Countable ketika merujuk pada jenis tertentu (*a specific type*) atau peristiwa diskrit (*a specific instance*). Contoh: *research* (uncountable umum) vs *a study / studies* (countable), *experience* (pengalaman hidup - uncountable) vs *an experience* (kejadian spesifik - countable).",
                "formula": "General Concept -> Uncountable | Specific Instance / Variety -> Countable",
                "examples": [
                        {
                                "sentence": "Extensive research has been conducted on renewable energy.",
                                "translation": "Penelitian ekstensif telah dilakukan mengenai energi terbarukan.",
                                "note": "research = Uncountable umum."
                        },
                        {
                                "sentence": "Working abroad was a transformative experience for the young doctor.",
                                "translation": "Bekerja di luar negeri adalah sebuah pengalaman yang mengubah hidup bagi dokter muda tersebut.",
                                "note": "a transformative experience = Countable (kejadian spesifik)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Daftar 10 Uncountable Absolut Paling Sering Diuji di IELTS/TOEFL",
                "explanation": "Berikut adalah kata-kata benda yang PALING SERING disalahartikan sebagai kata benda jamak oleh penutur Indonesia: Information (*bukan informations*), Equipment (*bukan equipments*), Furniture (*bukan furnitures*), Evidence (*bukan evidences*), Advice (*bukan advices*), Accommodation, Baggage, Traffic, Feedback, Knowledge. Seluruh kata ini SELALU bersubjek tunggal (*is / was / requires*).",
                "formula": "[Uncountable Absolut] + SINGULAR VERB (is / has / shows)",
                "examples": [
                        {
                                "sentence": "The feedback provided by the reviewers was overwhelmingly positive.",
                                "translation": "Umpan balik yang diberikan oleh para penelaah sangat positif.",
                                "note": "feedback -> was (tunggal)."
                        },
                        {
                                "sentence": "All the relevant information is available in the appendix.",
                                "translation": "Semua informasi yang relevan tersedia di dalam lampiran.",
                                "note": "information -> is (tunggal)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The scientist shared several interesting informations.",
                        "correctSentence": "The scientist shared several interesting pieces of information.",
                        "linguisticReason": "Information adalah kata benda massa absolut; tidak boleh menerima akhiran jamak -s maupun penentu \"several\" secara langsung tanpa partitif."
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
      id: "q-m07-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Identify the sentence that correctly avoids the common uncountability error in academic writing:",
      options: [
            "The researcher gathered numerous qualitative and quantitative evidences.",
            "The researcher gathered numerous pieces of qualitative and quantitative evidence.",
            "An important research was published in the medical journal yesterday.",
            "Every informations provided by the respondents were discarded."
      ],
      correctAnswer: "The researcher gathered numerous pieces of qualitative and quantitative evidence.",
      explanation: "\"Evidence\", \"research\", dan \"information\" adalah Uncountable Nouns mutlak dalam bahasa Inggris. Kata-kata tersebut tidak boleh ditambah akhiran -s atau didahului artikel \"a/an\" maupun quantifier \"every/numerous\" secara langsung. Untuk membilang, gunakan partitif seperti \"pieces of evidence\".",
      ruleReference: "Modul 07: Uncountable Noun Partitives"
},
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
      id: "err-m07-2",
      flawedSentence: "The university purchased several modern equipments for the laboratory.",
      flawLocation: "several modern equipments",
      correctedSentence: "The university purchased several pieces of modern equipment for the laboratory.",
      linguisticExplanation: "\"Equipment\" adalah Uncountable Noun murni dan tidak pernah memiliki bentuk jamak *equipments*. Gunakan partitif \"pieces of equipment\" atau \"items of equipment\".",
      acceptedVariations: [
            "The university purchased new modern equipment for the laboratory."
      ]
},
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
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 8,
    title: 'The Article System: A, An, The vs Zero Article',
    subtitle: 'Presisi definit vs indefinit, aturan fonetik pengucapan, dan konsep universal',
    levelBadge: 'Penentu & Artikel · Modul 08',
    estimatedMinutes: 25,
    mentalModelIntro: 'Artikel (A, An, The, dan Zero Article) adalah penentu status definiteness (kekhususan identitas). Memilih artikel yang tepat adalah indikator kecakapan bahasa Inggris tingkat tinggi. Bahasa Inggris membedakan antara entitas yang baru pertama kali diperkenalkan (Indefinite: A/An) dan entitas yang sudah diketahui bersama oleh pembaca/pendengar (Definite: The).',
    coreConceptSummary: 'Artikel terbagi 3: Indefinite (A/An - untuk countable singular umum), Definite (The - untuk identitas spesifik/unik), dan Zero Article (Ø - untuk generalisasi plural atau uncountable).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Fonetik Artikel Indefinit (A vs An Berdasarkan Bunyi Vokal)",
                "explanation": "Pemilihan antara \"a\" dan \"an\" ditentukan murni oleh BUNYI FONETIK PERTAMA (Initial Phonetic Sound), BUKAN huruf alfabet ortografis. Jika kata diawali bunyi konsonan (termasuk bunyi semivokal /j/ seperti \"university\" atau /w/ seperti \"one-way\"), gunakan \"A\". Jika kata diawali bunyi vokal murni (meskipun huruf awalnya H mati seperti \"hour\" atau akronim \"an FBI agent\"), gunakan \"AN\".",
                "formula": "A + [Bunyi Konsonan: /b/, /k/, /j/ (university), /w/ (one)] | AN + [Bunyi Vokal: /æ/, /e/, /ɪ/, /ɒ/, /ʌ/, /aʊ/ (hour)]",
                "examples": [
                        {
                                "sentence": "The committee established a university-wide sustainability initiative.",
                                "translation": "Komite mendirikan inisiatif keberlanjutan di seluruh universitas.",
                                "note": "a university (diawali fonem semivokal /j/ seperti \"you\")."
                        },
                        {
                                "sentence": "The team spent an hour analyzing the cryptographic key.",
                                "translation": "Tim menghabiskan satu jam menganalisis kunci kriptografi tersebut.",
                                "note": "an hour (huruf H tidak dibaca, diawali bunyi vokal /aʊ/)."
                        },
                        {
                                "sentence": "She interviewed an honest official during the field investigation.",
                                "translation": "Dia mewawancarai seorang pejabat jujur selama penyelidikan lapangan.",
                                "note": "an honest (H bisu)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Artikel Definit \"The\": Prinsip Shared Knowledge, Uniqueness & Anaphora",
                "explanation": "Artikel \"The\" digunakan ketika pembaca dan penulis memiliki pengetahuan bersama (Shared Knowledge) mengenai identitas benda tersebut. Terdapat 3 pemicu utama \"The\": (1) Anaphoric Reference (sudah disebutkan sebelumnya), (2) Situational Uniqueness (hanya ada satu di alam semesta atau konteks tersebut, misal *the sun, the president, the environment*), dan (3) Cataphoric Definition (dipersempit oleh klausa penjelas di belakangnya, misal *the report that was published yesterday*).",
                "formula": "The + [Entitas Spesifik / Rujukan Anafonis / Unik di Konteks]",
                "examples": [
                        {
                                "sentence": "A clinical trial was conducted in 2021. The trial demonstrated unprecedented efficacy.",
                                "translation": "Sebuah uji klinis dilakukan pada 2021. Uji klinis tersebut menunjukkan kemanjuran yang belum pernah terjadi sebelumnya.",
                                "note": "A trial (pertama kali) -> The trial (rujukan anafonis kedua)."
                        },
                        {
                                "sentence": "The ozone layer protects the Earth from harmful ultraviolet radiation.",
                                "translation": "Lapisan ozon melindungi Bumi dari radiasi ultraviolet yang berbahaya.",
                                "note": "the ozone layer & the Earth = entitas unik."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Kaidah Zero Article (Ø) pada Generalisasi Plural & Nomina Abstrak",
                "explanation": "Ketika membuat pernyataan umum (Generalization) mengenai kelompok plural atau konsep abstrak secara universal, DILARANG menggunakan artikel \"the\". Penambahan \"the\" akan mengubah maknanya menjadi kelompok spesifik tertentu.",
                "formula": "Ø + [Plural Noun / Uncountable Noun] = Pernyataan Universal / Konsep Umum",
                "examples": [
                        {
                                "sentence": "Ø Antibiotics have revolutionized modern medical treatment.",
                                "translation": "Antibiotik (secara umum di seluruh dunia) telah merevolusi pengobatan medis modern.",
                                "note": "Zero article: pernyataan umum."
                        },
                        {
                                "sentence": "The antibiotics prescribed by the physician were highly potent.",
                                "translation": "Antibiotik yang diresepkan oleh dokter tersebut sangat manjur.",
                                "note": "The: merujuk pada antibiotik spesifik tertentu."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The education is essential for the economic development.",
                        "correctSentence": "Education is essential for economic development.",
                        "linguisticReason": "Education dan economic development adalah konsep abstrak umum, sehingga tidak boleh menggunakan \"the\" saat membuat klaim universal."
                }
        },
        {
                "stepNumber": "04",
                "title": "Konvensi Artikel Geografis & Institusional Baku",
                "explanation": "Aturan artikel geografis memiliki pola baku: Gunakan \"The\" untuk pegunungan jamak (*The Alps, The Himalayas*), kepulauan jamak (*The Philippines*), samudra/laut/sungai (*The Atlantic, The Nile*), dan negara berbentuk serikat/republik (*The United States, The Netherlands*). JANGAN gunakan artikel untuk nama gunung tunggal (*Mount Everest*), pulau tunggal (*Java*), benua (*Asia*), atau danau tunggal (*Lake Michigan*).",
                "formula": "Gugusan Jamak / Sungai / Samudra / Negara Serikat -> THE | Gunung Tunggal / Danau / Pulau / Benua -> ZERO ARTICLE",
                "examples": [
                        {
                                "sentence": "The expedition climbed Mount Everest after training in the Himalayas.",
                                "translation": "Ekspedisi tersebut mendaki Gunung Everest setelah berlatih di Pegunungan Himalaya.",
                                "note": "Mount Everest (tanpa the) vs The Himalayas (pegunungan jamak)."
                        }
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
      id: "q-m08-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Choose the sentence with flawless academic article usage:",
      options: [
            "The technology has transformed modern education dramatically.",
            "Technology has transformed modern education dramatically.",
            "A technology has transformed the modern educations dramatically.",
            "The technologies in general has transformed modern education."
      ],
      correctAnswer: "Technology has transformed modern education dramatically.",
      explanation: "Ketika membicarakan konsep abstrak atau bidang secara umum (generalisasi), kita menggunakan Zero Article (tanpa \"the\"). Penggunaan \"The technology\" hanya tepat jika merujuk pada teknologi spesifik yang telah didefinisikan sebelumnya (misal: \"The technology developed by NASA\").",
      ruleReference: "Modul 08: Zero Article in Generalizations"
},
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
      id: "err-m08-2",
      flawedSentence: "He graduated with a master degree in the physics from Oxford.",
      flawLocation: "the physics",
      correctedSentence: "He graduated with a master's degree in physics from Oxford.",
      linguisticExplanation: "Nama bidang ilmu dan disiplin akademis (seperti *physics, chemistry, economics, linguistics*) menggunakan Zero Article (tanpa \"the\").",
      acceptedVariations: [
            "He graduated with a master degree in physics from Oxford."
      ]
},
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
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
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
      id: "q-m09-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Select the sentence where the reciprocal pronoun is used with grammatical precision:",
      options: [
            "The two competing laboratories shared their data with each other.",
            "The two competing laboratories shared their data with one another.",
            "All five research teams cooperated with each other seamlessly.",
            "Both participants blamed one another for the experiment failure."
      ],
      correctAnswer: "The two competing laboratories shared their data with each other.",
      explanation: "Dalam aturan preskriptif tradisional yang dihargai dalam tes formal, \"each other\" digunakan tepat untuk dua entitas (\"two laboratories\"), sedangkan \"one another\" digunakan untuk tiga entitas atau lebih.",
      ruleReference: "Modul 09: Reciprocal Pronouns (Each Other vs One Another)"
},
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
      id: "err-m09-2",
      flawedSentence: "The manager sent the document to my colleague and myself.",
      flawLocation: "myself",
      correctedSentence: "The manager sent the document to my colleague and me.",
      linguisticExplanation: "Reflexive pronoun (*myself*) hanya boleh digunakan jika subjek dan objek adalah orang yang sama (e.g. *I hurt myself*). Pada posisi objek setelah preposisi \"to\", gunakan Object Pronoun \"me\".",
      acceptedVariations: []
},
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
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 10,
    title: 'Demonstratives, Quantifiers & Distributives',
    subtitle: 'Kesesuaian kuantitas: Much vs Many, Few vs Little, Each vs Every vs All',
    levelBadge: 'Penentu Kuantitas · Modul 10',
    estimatedMinutes: 25,
    mentalModelIntro: 'Menyatakan relasi kepemilikan dan keterkaitan dalam bahasa Inggris dilakukan melalui dua jalur gramatikal: Saxon Genitive (akhiran apostrof -s) dan Norman Genitive (frasa preposisional "of"). Memilih struktur yang tepat menjaga register formal dan kelancaran membaca.',
    coreConceptSummary: 'Saxon Genitive (\'s / s\') digunakan untuk makhluk bernyawa (manusia, hewan), organisasi kolektif, dan ekspresi waktu. Norman Genitive (of-phrase) digunakan untuk benda mati, konsep abstrak, atau frasa nominal panjang.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Saxon Genitive ('s / s'): Makhluk Bernyawa & Ukuran Waktu",
                "explanation": "Saxon Genitive menggunakan apostrof-s ('s) untuk kata benda tunggal atau jamak tak beraturan (*the scientist's lab, the children's ward*), dan apostrof saja (s') untuk kata benda jamak reguler yang sudah berakhiran -s (*the scientists' lab*). Struktur ini juga baku untuk ukuran waktu (*a week's delay, today's economy*).",
                "formula": "Singular: Noun + 's + Noun | Regular Plural: Noun-s + ' + Noun | Time: Time Expression + 's + Noun",
                "examples": [
                        {
                                "sentence": "The lead investigator's hypothesis proved groundbreaking.",
                                "translation": "Hipotesis peneliti utama tersebut terbukti revolusioner.",
                                "note": "investigator's = tunggal."
                        },
                        {
                                "sentence": "The participants' biometric telemetry was encrypted securely.",
                                "translation": "Telemetri biometrik para peserta dienkripsi dengan aman.",
                                "note": "participants' = jamak berakhiran s."
                        },
                        {
                                "sentence": "After three months' deliberation, the commission released its findings.",
                                "translation": "Setelah pertimbangan selama tiga bulan, komisi merilis temuannya.",
                                "note": "three months' = ukuran waktu jamak."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Norman Genitive (Of-Phrase): Benda Mati & Nomina Kompleks",
                "explanation": "Benda mati (Inanimate Objects) secara preskriptif tidak dapat \"memiliki\" sesuatu, sehingga menghindari penggunaan 's (hindari *the car's door ❌*). Gunakan Norman Genitive dengan preposisi \"of\" (*the door of the car* atau compound noun *the car door*). Struktur ini juga wajib digunakan ketika pemiliknya adalah frasa nominal yang panjang.",
                "formula": "The + [Possessed Noun] + of + [Inanimate Entity / Long Noun Phrase]",
                "examples": [
                        {
                                "sentence": "The degradation of the marine ecosystem threatens coastal biodiversity.",
                                "translation": "Degradasi ekosistem laut mengancam keanekaragaman hayati pesisir.",
                                "note": "The degradation of the marine ecosystem (Norman Genitive untuk konsep abstrak/benda mati)."
                        },
                        {
                                "sentence": "The economic trajectory of developing nations in Southeast Asia is accelerating.",
                                "translation": "Lintasan ekonomi negara-negara berkembang di Asia Tenggara semakin cepat.",
                                "note": "Frasa pemilik panjang wajib menggunakan of-phrase."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Double Genitive Construction",
                "explanation": "Konstruksi \"Double Genitive\" (atau Double Possessive) menggabungkan preposisi \"of\" dengan bentuk possessive pronoun atau Saxon genitive 's. Pola ini digunakan untuk menyatakan \"salah satu dari beberapa yang dimiliki\", berbeda maknanya dengan rujukan definit tunggal.",
                "formula": "A / An / Some / This + [Noun] + of + [Possessor's / Possessive Pronoun]",
                "examples": [
                        {
                                "sentence": "Dr. Aris met a distinguished colleague of his at the Oxford symposium.",
                                "translation": "Dr. Aris bertemu dengan salah seorang kolega terkemukanya di simposium Oxford.",
                                "note": "a colleague of his = salah satu dari beberapa koleganya."
                        },
                        {
                                "sentence": "That seminal paper of Professor Vance's challenged orthodox physics.",
                                "translation": "Makalah penting Profesor Vance itu menantang fisika ortodoks.",
                                "note": "paper of Professor Vance's = Double Genitive."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Kepemilikan Bersama (Joint) vs Terpisah (Separate Possession)",
                "explanation": "Ketika dua orang memiliki satu benda yang sama (Joint Possession), apostrof 's hanya disematkan pada nama ORANG TERAKHIR (*Alice and Bob's laboratory* = 1 lab milik bersama). Namun, jika masing-masing memiliki benda terpisah (Separate Possession), apostrof 's disematkan pada SETIAP NAMA dan kata bendanya dijamakkan (*Alice's and Bob's laboratories* = 2 lab berbeda).",
                "formula": "Joint (1 Benda Bersama): [A and B]'s + Singular/Plural Noun | Separate (Benda Masing-masing): A's and B's + Plural Noun",
                "examples": [
                        {
                                "sentence": "Watson and Crick's discovery revolutionized molecular biology.",
                                "translation": "Penemuan Watson dan Crick (bersama) merevolusi biologi molekuler.",
                                "note": "1 penemuan bersama -> Watson and Crick's."
                        },
                        {
                                "sentence": "Harvard's and Oxford's admission criteria differ substantially.",
                                "translation": "Kriteria penerimaan Harvard dan kriteria penerimaan Oxford (masing-masing) berbeda secara substansial.",
                                "note": "2 institusi dengan kriteria terpisah -> Harvard's and Oxford's."
                        }
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
      id: "q-m10-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Which sentence correctly demonstrates the formal agreement rule for \"Either of\" and \"Neither of\"?",
      options: [
            "Neither of the proposed hypotheses is supported by the empirical data.",
            "Neither of the proposed hypotheses are supported by the empirical data.",
            "Either of the candidates are qualified to lead the department.",
            "Neither of the two solutions have been tested in real-world scenarios."
      ],
      correctAnswer: "Neither of the proposed hypotheses is supported by the empirical data.",
      explanation: "Dalam tata bahasa formal dan tes internasional (IELTS/TOEFL), frasa \"Neither of [plural noun]\" dan \"Either of [plural noun]\" bermakna distributif (\"tidak satu pun dari keduanya\") sehingga menuntut kata kerja tunggal (*is*, *has*, *was*).",
      ruleReference: "Modul 10: Distributive Quantifier Subject-Verb Concord"
},
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
      id: "err-m10-2",
      flawedSentence: "There are lesser students enrolling in humanities courses this semester.",
      flawLocation: "lesser students",
      correctedSentence: "There are fewer students enrolling in humanities courses this semester.",
      linguisticExplanation: "Untuk Countable Nouns (\"students\"), perbandingan kuantitas yang lebih sedikit wajib menggunakan **fewer** (BUKAN *less* atau *lesser*). *Less* hanya digunakan untuk Uncountable Nouns.",
      acceptedVariations: []
},
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
    stageNumber: 2,
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 11,
    title: 'Core Verb Types: Transitive, Intransitive, dan Ergative Verbs',
    subtitle: 'Memahami predikat berobjek, predikat tanpa objek, dan kata kerja dua arah',
    levelBadge: 'Morfologi Verb · Modul 11',
    estimatedMinutes: 25,
    mentalModelIntro: 'Valensi Verba (Verb Valency) menentukan berapa banyak argumen nomina yang diwajibkan oleh suatu kata kerja. Kata kerja Transitif membutuhkan objek langsung (Direct Object) untuk melengkapi aksinya. Sebaliknya, kata kerja Intransitif sudah memiliki makna utuh tanpa objek. Memahami pembedaan ini adalah syarat mutlak untuk menghindari kesalahan fatal memasifkan verba intransitif.',
    coreConceptSummary: 'Transitive Verbs (SVO) menyalurkan aksi ke objek (e.g. *analyze the data*). Intransitive Verbs (SV) tidak memiliki objek penderita (e.g. *the reaction occurred*). Ditransitive Verbs (SVOO) mengambil dua objek sekaligus dan memungkinkan operasi Dative Shift.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Valensi Verba & Kebutuhan Objek Penderita (Transitive vs Intransitive)",
                "explanation": "Transitive Verbs adalah kata kerja yang memerlukan argumen internal berupa Direct Object (Objek Langsung). Tanpa objek, makna kalimat menggantung secara sintaksis. Intransitive Verbs adalah kata kerja yang aksinya berhenti pada subjek itu sendiri dan tidak pernah dapat diikuti objek langsung tanpa perantara preposisi.",
                "formula": "Transitive: Subject + Transitive Verb + Direct Object | Intransitive: Subject + Intransitive Verb + (Prepositional Modifier)",
                "examples": [
                        {
                                "sentence": "The epidemiologist published the groundbreaking research.",
                                "translation": "Ahli epidemiologi tersebut menerbitkan penelitian yang revolusioner itu.",
                                "note": "published = Transitive (membutuhkan objek research)."
                        },
                        {
                                "sentence": "The chemical reaction occurred at room temperature.",
                                "translation": "Reaksi kimia tersebut terjadi pada suhu ruangan.",
                                "note": "occurred = Intransitive (tidak mengambil objek langsung)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Ditransitive Verbs (SVOO) & Operasi Dative Shift",
                "explanation": "Ditransitive Verbs (seperti *give, send, offer, provide, assign, grant*) mengambil DUA objek: Indirect Object (Penerima/Beneficiary) dan Direct Object (Benda/Penderita). Bahasa Inggris memungkinkan transformasi sintaksis yang disebut \"Dative Shift\", yaitu memindahkan Direct Object ke depan diikuti preposisi *to* atau *for*.",
                "formula": "Pola 1 (SVOO): Subject + Verb + Indirect Object + Direct Object | Pola 2 (Dative Shift): Subject + Verb + Direct Object + TO/FOR + Indirect Object",
                "examples": [
                        {
                                "sentence": "The foundation granted the university a two-million-dollar research fund.",
                                "translation": "Yayasan memberikan universitas dana penelitian dua juta dolar.",
                                "note": "Pola SVOO: the university (IO) + fund (DO)."
                        },
                        {
                                "sentence": "The foundation granted a two-million-dollar research fund to the university.",
                                "translation": "Yayasan memberikan dana penelitian dua juta dolar kepada universitas.",
                                "note": "Dative Shift: fund (DO) + to the university (IO)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Ergative & Ambitransitive Verbs",
                "explanation": "Ergative Verbs (seperti *open, close, melt, boil, increase, decrease, accelerate*) adalah kata kerja fleksibel yang dapat bertindak secara transitif (agensi aktif: *The scientist increased the temperature*) maupun intransitif di mana objek penderita naik menjadi subjek alami (*The temperature increased*).",
                "formula": "Transitif: Agent + Verb + Patient | Ergatif Intransitif: Patient + Verb (Aksi terjadi secara otomatis)",
                "examples": [
                        {
                                "sentence": "Global carbon emissions increased significantly between 2010 and 2020.",
                                "translation": "Emisi karbon global meningkat secara signifikan antara 2010 dan 2020.",
                                "note": "increased = Ergatif Intransitif (emisi meningkat)."
                        },
                        {
                                "sentence": "Policymakers increased carbon taxation to curb emissions.",
                                "translation": "Pembuat kebijakan meningkatkan pajak karbon untuk mengekang emisi.",
                                "note": "increased = Transitif (meningkatkan pajak)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Larangan Mutlak Memasifkan Verba Intransitif",
                "explanation": "Kesalahan paling fatal yang kerap menggugurkan skor gramatikal di IELTS/TOEFL adalah memaksakan bentuk pasif pada verba intransitif murni seperti *occur, happen, exist, remain, disappear, arrive, consist*. Karena verba intransitif tidak memiliki objek penderita, bentuk pasif seperti \"*was happened ❌*\" atau \"*was occurred ❌*\" adalah pelanggaran gramatikal mutlak.",
                "formula": "DILARANG: [To Be + V3] untuk verba intransitif! (occurred ✔, was occurred ❌)",
                "examples": [
                        {
                                "sentence": "An unforeseen power outage occurred during the simulation.",
                                "translation": "Pemadaman listrik tak terduga terjadi selama simulasi.",
                                "note": "occurred (Aktif Intransitif murni)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The accident was happened near the university campus.",
                        "correctSentence": "The accident happened near the university campus.",
                        "linguisticReason": "Happen adalah kata kerja intransitif murni; tidak memiliki objek penderita sehingga mustahil diubah ke bentuk pasif."
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
      id: "q-m11-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Identify the sentence containing an Ergative Verb (a verb that can be both transitive and intransitive with the object becoming the subject):",
      options: [
            "The global temperature increased by 1.5 degrees Celsius over the decade.",
            "The scientist devoured the technical documentation eagerly.",
            "The laboratory technician slept soundly after the night shift.",
            "The supervisor handed the confidential memorandum directly to the dean."
      ],
      correctAnswer: "The global temperature increased by 1.5 degrees Celsius over the decade.",
      explanation: "\"Increase\" adalah verba ergatif: kita bisa mengatakan \"The emissions increased the temperature\" (transitive/causative) atau \"The temperature increased\" (intransitive/ergative tanpa perlu bentuk pasif).",
      ruleReference: "Modul 11: Ergative and Labile Verbs in Academic Prose"
},
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
      id: "err-m11-2",
      flawedSentence: "The patient lay down the heavy medical charts on the desk.",
      flawLocation: "lay down",
      correctedSentence: "The patient laid down the heavy medical charts on the desk.",
      linguisticExplanation: "\"Lay\" (transitive: meletakkan sesuatu) bentuk lampaunya adalah **laid** (*laid down the charts*). \"Lie\" (intransitive: berbaring) bentuk lampaunya adalah **lay** (*he lay on the bed*).",
      acceptedVariations: [
            "The patient put down the heavy medical charts on the desk."
      ]
},
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
    stageName: 'Tahap 3: Tipologi Verba & Modalitas',
    categoryKey: 'Word Classes',
    moduleNumber: 12,
    title: 'Stative Verbs vs Dynamic Verbs: Kognisi, Emosi, Persepsi & Kepemilikan',
    subtitle: 'Memahami mengapa kata kerja kondisi permanen menolak bentuk continuous (-ing)',
    levelBadge: 'Morfologi Verb · Modul 12',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata kerja tidak beraturan (Irregular Verbs) dalam bahasa Inggris bukanlah kebetulan acak, melainkan warisan sistem *Strong Verbs* bahasa Jermanik Kuno yang mengubah vokal internal (Ablaut Pattern). Menguasai pola-pola vokal ini mengubah hafalan mekanis menjadi pemahaman morfologis yang logis.',
    coreConceptSummary: 'Irregular Verbs tidak menggunakan akhiran reguler -ed melainkan perubahan vokal batang (Apophony/Ablaut). Terdapat 5 kelompok pola utama: AAA (hit-hit-hit), ABB (bring-brought-brought), ABA (come-came-come), ABC (sing-sang-sung / break-broke-broken), dan Verba Rancu (*lie vs lay*).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Prinsip Fonologis Ablaut Pattern (Gradasi Vokal)",
                "explanation": "Fenomena \"Ablaut\" (Apophony) adalah perubahan vokal internal pada akar kata kerja untuk menandai perubahan bentuk waktu (Past Tense / V2) dan aspek perfektif (Past Participle / V3). Memahami perubahan /i/ -> /æ/ -> /ʌ/ (*sing-sang-sung, drink-drank-drunk, begin-began-begun*) mempermudah retensi puluhan kata kerja sekaligus.",
                "formula": "V1 (Base /i/) -> V2 (Past /æ/) -> V3 (Participle /ʌ/)",
                "examples": [
                        {
                                "sentence": "The algorithm began the deep learning training sequence yesterday.",
                                "translation": "Algoritma tersebut memulai urutan pelatihan deep learning kemarin.",
                                "note": "began = V2 (Past)."
                        },
                        {
                                "sentence": "The team has begun analyzing the telemetry logs.",
                                "translation": "Tim telah mulai menganalisis log telemetri.",
                                "note": "has begun = V3 (Participle)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Klasifikasi 4 Pola Morfologis Utama",
                "explanation": "Irregular verbs terbagi ke dalam 4 pola struktural: (1) Pola Invarian AAA (tanpa perubahan: *cost-cost-cost, cut-cut-cut, spread-spread-spread*), (2) Pola V2=V3 ABB (*buy-bought-bought, teach-taught-taught, find-found-found*), (3) Pola V1=V3 ABA (*run-ran-run, become-became-become*), dan (4) Pola Diferensial Penuh ABC (*write-wrote-written, drive-drove-driven, speak-spoke-spoken*).",
                "formula": "AAA: V1=V2=V3 | ABB: V2=V3 | ABA: V1=V3 | ABC: V1≠V2≠V3",
                "examples": [
                        {
                                "sentence": "The novel virus spread rapidly across urban centers.",
                                "translation": "Virus baru tersebut menyebar dengan cepat ke seluruh pusat kota.",
                                "note": "spread = V2 (Pola AAA)."
                        },
                        {
                                "sentence": "The author has written an authoritative treatise on macroeconomic stability.",
                                "translation": "Penulis telah menulis risalah otoritatif tentang stabilitas makroekonomi.",
                                "note": "has written = V3 (Pola ABC)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Partisipel Past Berfungsi Adjektiva vs Verba",
                "explanation": "Beberapa verba ireguler memiliki dua bentuk partisipel lampau yang berbeda fungsinya: bentuk arkais berakhiran -en digunakan murni sebagai Adjektiva Prediktif/Atributif, sedangkan bentuk modern digunakan sebagai Verba. Contoh: *drunken behavior* (Adjektiva) vs *he has drunk* (Verba), *sunken treasure* (Adjektiva) vs *the ship has sunk* (Verba).",
                "formula": "Adjektiva Atributif: [Archaic -en Participle] + Noun | Verba Perfek: HAVE + [Standard V3 Participle]",
                "examples": [
                        {
                                "sentence": "Marine archaeologists discovered a sunken vessel off the coast of Crete.",
                                "translation": "Arkeolog maritim menemukan sebuah kapal karam di lepas pantai Kreta.",
                                "note": "sunken = Adjektiva atributif."
                        },
                        {
                                "sentence": "The submarine has sunk to a depth of three thousand meters.",
                                "translation": "Kapal selam tersebut telah tenggelam ke kedalaman tiga ribu meter.",
                                "note": "has sunk = Verba perfektif."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Verba Rancu Kerap Tertukar: Lie/Lay & Rise/Raise",
                "explanation": "Dua pasang kata kerja yang paling sering salah digunakan dalam ujian internasional adalah: (1) *LIE* (Intransitif: berbaring/terletak - *lie/lay/lain*) vs *LAY* (Transitif: meletakkan - *lay/laid/laid*), dan (2) *RISE* (Intransitif: naik sendiri - *rise/rose/risen*) vs *RAISE* (Transitif: menaikkan/mengangkat - *raise/raised/raised*).",
                "formula": "LIE (Intransitif, No Object): lie / lay / lain || LAY (Transitif, + Object): lay / laid / laid",
                "examples": [
                        {
                                "sentence": "The solution lies in structural economic reform.",
                                "translation": "Solusinya terletak pada reformasi ekonomi struktural.",
                                "note": "lies = Intransitif (tanpa objek penderita)."
                        },
                        {
                                "sentence": "The researcher laid the sterile petri dish on the workbench.",
                                "translation": "Peneliti tersebut meletakkan cawan petri steril di atas meja kerja.",
                                "note": "laid = Transitif (diikuti objek petri dish)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Global temperatures have raised by 1.2 degrees Celsius.",
                        "correctSentence": "Global temperatures have risen by 1.2 degrees Celsius.",
                        "linguisticReason": "Temperatur naik dengan sendirinya (Intransitif), sehingga kata kerja yang tepat adalah \"risen\" dari \"rise\", bukan \"raised\" dari kata kerja transitif \"raise\"."
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
      id: "q-m12-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Choose the sentence that correctly adheres to stative perception verb rules:",
      options: [
            "The newly formulated disinfectant smells distinctly of eucalyptus.",
            "The newly formulated disinfectant is smelling distinctly of eucalyptus.",
            "The chemist is smelling like eucalyptus after the spill.",
            "The disinfectant was smelling badly during synthesis."
      ],
      correctAnswer: "The newly formulated disinfectant smells distinctly of eucalyptus.",
      explanation: "Verba persepsi sensorik (*smell, taste, sound, look*) saat menerangkan karakteristik intrinsik objek berstatus Stative Linking Verb dan wajib menggunakan Simple Tense + Adjective/Prepositional phrase.",
      ruleReference: "Modul 12: Sensory Stative Verbs"
},
      {
      id: "q-m12-2",
      category: "Word Classes",
      difficulty: "Menengah",
      question: "Which of the following stative verbs is used correctly in continuous form due to a shift to dynamic meaning?",
      options: [
            "The lead investigator is having severe doubts about the statistical validity.",
            "The lead investigator is having three post-doctoral degrees.",
            "The laboratory sample is containing excessive amounts of lead.",
            "This compound is seeming completely inert under room temperature."
      ],
      correctAnswer: "The lead investigator is having severe doubts about the statistical validity.",
      explanation: "\"Have\" saat berarti kepemilikan fisik statis (*possession*) tidak boleh continuous (*is having degrees ❌*). Namun saat berarti \"mengalami\" (*experiencing*) keraguan/masalah, \"have\" beralih fungsi menjadi dynamic action sehingga continuous diperbolehkan (*is having doubts ✔*).",
      ruleReference: "Modul 12: Polysemous Stative-Dynamic Shifts"
},
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
      id: "err-m12-2",
      flawedSentence: "I am not understanding what the author is implying in this paragraph.",
      flawLocation: "am not understanding",
      correctedSentence: "I do not understand what the author is implying in this paragraph.",
      linguisticExplanation: "\"Understand\" adalah stative verb of cognition (proses kognitif mental) yang tidak boleh digunakan dalam bentuk continuous / progressive.",
      acceptedVariations: []
},
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
    stageName: 'Tahap 3: Tipologi Verba & Modalitas',
    categoryKey: 'Word Classes',
    moduleNumber: 13,
    title: 'Linking Verbs & Subject Complements (Be, Seem, Appear, Remain, Become)',
    subtitle: 'Menghubungkan atribut sifat ke subjek dan pantangan penggunaan adverb',
    levelBadge: 'Morfologi Verb · Modul 13',
    estimatedMinutes: 20,
    mentalModelIntro: 'Modal Auxiliaries (Kata Kerja Bantu Modal) adalah instrumen linguistik yang digunakan penutur untuk mengekspresikan sikap (Stance), derajat kemungkinan (Certainty), kewajiban moral (Obligation), atau izin (Permission). Dalam penulisan akademik, modals adalah senjata utama teknik "Hedging" (memperhalus klaim ilmiah agar tidak terdengar arogan atau mutlak).',
    coreConceptSummary: 'Modals murni (can, could, may, might, must, shall, should, will, would) tidak pernah menerima infleksi -s, tidak memiliki bentuk infinitif/gerund, dan selalu diikuti Bare Infinitive. Modals mengekspresikan modalitas Deontik (tindakan/aturan) dan Epistemik (penalaran berbasis bukti).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Karakteristik Sintaksis Modals Murni",
                "explanation": "Modal Auxiliaries murni memiliki 3 sifat sintaksis yang kaku: (1) Invarian (tidak pernah menambahkan -s pada orang ketiga tunggal: *he can, bukan he cans*), (2) Bare Infinitive Complement (selalu langsung diikuti verba dasar tanpa \"to\": *must study, bukan must to study*), dan (3) Operator Mandiri (dapat langsung dinegasikan dengan not dan diinversikan dalam kalimat tanya tanpa Do-Support).",
                "formula": "Subject + Modal + not + Bare Infinitive (V1)",
                "examples": [
                        {
                                "sentence": "The experimental findings may indicate a novel biological mechanism.",
                                "translation": "Temuan eksperimental tersebut mungkin mengindikasikan mekanisme biologis baru.",
                                "note": "may + indicate (Bare Infinitive)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Modalitas Deontik vs Modalitas Epistemik",
                "explanation": "Modalitas Deontik berkaitan dengan izin, kewajiban, atau keharusan (*You must wear a protective mask*). Modalitas Epistemik berkaitan dengan kesimpulan logis penutur berdasarkan bukti empiris (*The sample must be contaminated because readings are abnormal* = 95%+ yakin berdasarkan bukti). Memahami spektrum epistemik (*Must > Should > May > Might > Could*) sangat krusial untuk penulisan esai.",
                "formula": "Epistemik Hierarchy: MUST (Sangat Yakin/Pasti) > SHOULD (Kemungkinan Besar) > MAY/MIGHT/COULD (Mungkin/Spekulatif)",
                "examples": [
                        {
                                "sentence": "Given the statistical correlation, the hypothesis must be accurate.",
                                "translation": "Mengingat korelasi statistik tersebut, hipotesis itu pasti akurat.",
                                "note": "must = Epistemik (kesimpulan logis kuat)."
                        },
                        {
                                "sentence": "The projected climate impacts could exacerbate regional geopolitical tensions.",
                                "translation": "Dampak iklim yang diproyeksikan dapat memperburuk ketegangan geopolitik regional.",
                                "note": "could = Epistemik spekulatif (Hedging)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Past Modal Modulations: Deduksi & Penyesalan Masa Lalu",
                "explanation": "Untuk mengekspresikan modalitas pada masa lampau, modals digabungkan dengan Present Perfect (HAVE + V3). *Must have + V3* = Kesimpulan logis masa lalu (\"Pasti telah...\"). *Could have + V3* = Peluang masa lalu yang tidak terwujud (\"Sebenarnya bisa...\"). *Should have + V3* = Evaluasi penyesalan (\"Seharusnya telah...\"). *Can't have + V3* = Ketidakmungkinan masa lalu (\"Mustahil telah...\").",
                "formula": "Subject + Modal + HAVE + Past Participle (V3)",
                "examples": [
                        {
                                "sentence": "The control group must have received the placebo during the double-blind trial.",
                                "translation": "Kelompok kontrol pasti telah menerima plasebo selama uji coba buta ganda.",
                                "note": "must have received = deduksi masa lampau yang sangat meyakinkan."
                        },
                        {
                                "sentence": "The ministry should have enacted stricter carbon regulations earlier.",
                                "translation": "Kementerian seharusnya telah memberlakukan regulasi karbon yang lebih ketat lebih awal.",
                                "note": "should have enacted = evaluasi normatif terhadap keputusan masa lalu."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Semi-Modals & Peran Register Akademik",
                "explanation": "Semi-modals (seperti *have to, ought to, be able to, be supposed to, need to*) menggabungkan fungsi modal dengan infleksi verba reguler. Dalam penulisan akademik, semi-modals seperti *be able to* digunakan untuk mengisi kekosongan bentuk infinitif atau future yang tidak dimiliki modal murni (*will be able to, bukan will can*).",
                "formula": "Future Ability: will be able to + V1 | Obligasi Objektif: has/have to + V1",
                "examples": [
                        {
                                "sentence": "With advanced quantum computing, researchers will be able to simulate complex molecular bonds.",
                                "translation": "Dengan komputasi kuantum canggih, para peneliti akan mampu mensimulasikan ikatan molekul yang kompleks.",
                                "note": "will be able to (menggantikan *will can* yang ilegal)."
                        }
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
      id: "q-m13-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Which of the following sentences uses \"prove\" as a Linking Copula rather than a Transitive Verb?",
      options: [
            "The preliminary hypothesis proved completely false upon closer inspection.",
            "The defense attorney proved the innocence of his client beyond reasonable doubt.",
            "The mathematician proved the theorem using mathematical induction.",
            "The team must prove their competency before receiving the grant."
      ],
      correctAnswer: "The preliminary hypothesis proved completely false upon closer inspection.",
      explanation: "Dalam \"The hypothesis proved false\", *proved* bertindak sebagai Copular Linking Verb (bersinonim dengan *turned out to be*), menghubungkan subjek dengan adjective complement \"false\".",
      ruleReference: "Modul 13: Copular Verbs with Dual Functions"
},
      {
      id: "q-m13-2",
      category: "Word Classes",
      difficulty: "Menengah",
      question: "Identify the sentence where a linking verb is correctly followed by a Subject Complement (Adjective):",
      options: [
            "The participant remained silent throughout the interview session.",
            "The participant remained silently throughout the interview session.",
            "The chemical reaction appeared quickly and violently.",
            "The newly installed filter works efficiently under high pressure."
      ],
      correctAnswer: "The participant remained silent throughout the interview session.",
      explanation: "\"Remain\" di sini adalah Linking Verb yang menghubungkan subjek (\"The participant\") dengan keadaan dirinya, sehingga membutuhkan Adjective (*silent*), bukan Adverb (*silently*).",
      ruleReference: "Modul 13: Linking Verbs and Predicate Adjectives"
},
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
      id: "err-m13-2",
      flawedSentence: "The experimental synthetic fabric feels very smoothly.",
      flawLocation: "feels very smoothly",
      correctedSentence: "The experimental synthetic fabric feels very smooth.",
      linguisticExplanation: "\"Feel\" dalam konteks tekstur material adalah Linking Verb yang menghubungkan subjek dengan Subject Complement (Adjective \"smooth\", bukan Adverb \"smoothly\").",
      acceptedVariations: []
},
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
    stageName: 'Tahap 3: Tipologi Verba & Modalitas',
    categoryKey: 'Word Classes',
    moduleNumber: 14,
    title: 'Modal Auxiliaries: Primary vs Modals (Can, Could, Must, Should, May, Might)',
    subtitle: 'Mekanisme kata kerja bantu modalitas, derajat kepastian, dan hukum mutlak Bare Infinitive',
    levelBadge: 'Modal Auxiliaries · Modul 14',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kata kerja bahasa Inggris terbagi atas dua watak semantis: Dynamic Verbs (menyatakan aksi fisik berproses yang memiliki awal dan akhir) dan Stative Verbs (menyatakan kondisi mental, perasaan, kepemilikan, atau relasi yang statis tanpa aksi fisik). Menggunakan Stative Verbs dalam bentuk Continuous (-ing) adalah salah satu kesalahan transfer bahasa ibu paling umum.',
    coreConceptSummary: 'Stative Verbs (know, believe, understand, belong, contain, prefer) secara alami menolak bentuk Continuous (-ing). Dual-Meaning Verbs (think, have, see, taste) dapat berbentuk -ing hanya jika maknanya bergeser menjadi aksi dinamis yang disengaja.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Ciri Semantis Verba Keadaan (Stativity) & 4 Kategori Utamanya",
                "explanation": "Stative Verbs mendeskripsikan keadaan berkelanjutan tanpa usaha dinamis. Terdapat 4 kelompok besar: (1) Kognisi & Opini (*know, understand, believe, doubt, recognize*), (2) Emosi & Sikap (*love, hate, prefer, appreciate, desire*), (3) Kepemilikan & Relasi (*possess, own, belong, contain, consist, depend*), dan (4) Persepsi Sensoris (*see, hear, smell, taste, seem, appear*).",
                "formula": "Stative Verbs -> Gunakan Simple Tenses (DILARANG bentuk Continuous -ing)",
                "examples": [
                        {
                                "sentence": "The research monograph contains comprehensive statistical appendices.",
                                "translation": "Monograf penelitian tersebut memuat lampiran statistik yang komprehensif.",
                                "note": "contains = Stative Relasi (bukan is containing)."
                        },
                        {
                                "sentence": "Economists understand the underlying mechanisms of monetary inflation.",
                                "translation": "Para ekonom memahami mekanisme mendasar dari inflasi moneter.",
                                "note": "understand = Stative Kognisi (bukan are understanding)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "I am understanding the complex mathematical formula now.",
                        "correctSentence": "I understand the complex mathematical formula now.",
                        "linguisticReason": "Understand adalah verba kognisi statif; pemahaman adalah status mental yang dicapai, bukan aksi fisik yang sedang berproses."
                }
        },
        {
                "stepNumber": "02",
                "title": "Dual-Meaning Verbs: Pergeseran Makna pada Bentuk Progresif",
                "explanation": "Beberapa verba dapat bertindak statif atau dinamis tergantung maknanya: (1) *THINK*: Statif = berpendapat (*I think it is valid*), Dinamis = proses menimbang/memikirkan (*I am thinking about the problem*); (2) *HAVE*: Statif = memiliki (*She has a degree*), Dinamis = melakukan aktivitas (*She is having lunch*); (3) *SEE*: Statif = melihat/memahami (*I see what you mean*), Dinamis = bertemu/berkonsultasi (*The patient is seeing a specialist*).",
                "formula": "Makna Opini/Kepemilikan -> Simple | Makna Proses Mental/Aktivitas -> Continuous",
                "examples": [
                        {
                                "sentence": "The committee thinks that the proposed timeline is unrealistic.",
                                "translation": "Komite berpendapat bahwa batas waktu yang diusulkan tidak realistis.",
                                "note": "thinks = opini statif."
                        },
                        {
                                "sentence": "The engineering team is currently thinking of innovative alternatives.",
                                "translation": "Tim teknik saat ini sedang memikirkan alternatif-alternatif inovatif.",
                                "note": "is thinking of = proses mental dinamis."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Verba Persepsi Sensoris: Copula vs Dynamic Actions",
                "explanation": "Verba sensoris (*taste, smell, look, sound, feel*) bertindak sebagai Copular Verb ketika mendeskripsikan kualitas subjek (wajib diikuti Adjektiva: *The soup tastes delicious*), namun bertindak sebagai Dynamic Action Verb ketika subjek sengaja melakukan aksi penginderaan (wajib diikuti Adverbia: *The chef tasted the soup carefully*).",
                "formula": "Kualitas Subjek: Subject + Sensory Verb + ADJECTIVE | Aksi Subjek: Subject + Sensory Verb + Object + ADVERB",
                "examples": [
                        {
                                "sentence": "The empirical hypothesis sounds plausible.",
                                "translation": "Hipotesis empiris tersebut terdengar masuk akal.",
                                "note": "sounds + plausible (Adjektiva pelengkap subjek)."
                        },
                        {
                                "sentence": "The acoustic sensors sounded loudly during the seismic tremor.",
                                "translation": "Sensor akustik berbunyi dengan keras selama getaran seismik.",
                                "note": "sounded + loudly (Adverbia penjelas verba aksi)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Analisis Interferensi L1 Bahasa Indonesia pada Aspek Progresif",
                "explanation": "Dalam bahasa Indonesia, kata \"sedang\" atau \"lagi\" bisa dilekatkan ke kata apa pun (\"Saya sedang paham\", \"Dia sedang punya uang\"). Akibatnya, pembelajar kerap menerjemahkan secara harfiah menjadi \"*I am understanding*\" atau \"*He is having money*\". Kunci mengatasinya adalah mengidentifikasi apakah verba tersebut menyatakan aksi fisik nyata yang bisa direkam kamera video (Dynamic) atau sekadar status keberadaan (Stative).",
                "formula": "Uji Video Mental: Apakah aksi bisa diperagakan secara fisik? Jika TIDAK -> Stative (Gunakan Simple Tense).",
                "examples": [
                        {
                                "sentence": "This comprehensive manual belongs to the central laboratory archive.",
                                "translation": "Buku panduan komprehensif ini milik arsip laboratorium pusat.",
                                "note": "belongs to (bukan is belonging to)."
                        }
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
      id: "q-m14-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Choose the sentence that correctly distinguishes between \"needn't have done\" and \didn't need to do\:",
      options: [
            "We needn't have printed the 100-page dossier because digital copies were already distributed beforehand.",
            "We didn't need to print the dossier, so we printed all 100 pages anyway.",
            "We needn't print the dossier yesterday as it was optional.",
            "We must not have printed the dossier since the client requested it."
      ],
      correctAnswer: "We needn't have printed the 100-page dossier because digital copies were already distributed beforehand.",
      explanation: "\"Needn't have V3\" berarti aksi tersebut **sudah terlanjur dilakukan padahal sebenarnya tidak diperlukan**. Sebaliknya, \"didn't need to do\" berarti tidak perlu dilakukan dan biasanya tidak jadi dilakukan.",
      ruleReference: "Modul 14: Nuanced Past Necessity Modals"
},
      {
      id: "q-m14-2",
      category: "Word Classes",
      difficulty: "Menengah",
      question: "Which sentence correctly expresses logical deduction / high certainty in the past?",
      options: [
            "The security cameras must have recorded the unauthorized entry last night.",
            "The security cameras should record the unauthorized entry last night.",
            "The security cameras can have recorded the unauthorized entry last night.",
            "The security cameras had to have record the unauthorized entry last night."
      ],
      correctAnswer: "The security cameras must have recorded the unauthorized entry last night.",
      explanation: "Untuk menyatakan kesimpulan logis yang sangat diyakini di masa lampau (*high certainty deduction*), formulanya adalah **Must + have + Past Participle (V3)**.",
      ruleReference: "Modul 14: Past Modals of Epistemic Deduction"
},
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
      id: "err-m14-2",
      flawedSentence: "You had better to consult your academic advisor before submitting.",
      flawLocation: "had better to consult",
      correctedSentence: "You had better consult your academic advisor before submitting.",
      linguisticExplanation: "Frasa semi-modal \"had better\" wajib diikuti langsung oleh **Bare Infinitive** tanpa partikel \"to\" (*had better consult* ✔️, BUKAN *had better to consult* ❌).",
      acceptedVariations: []
},
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
    stageName: 'Tahap 3: Tipologi Verba & Modalitas',
    categoryKey: 'Word Classes',
    moduleNumber: 15,
    title: 'Semi-Modals & Phrasal Modals: Ought to, Had better, Be able to, Used to vs Be used to',
    subtitle: 'Konstruksi modal berfrasa, peringatan urgensi, dan pembedaan Used to vs Be used to',
    levelBadge: 'Semi-Modals · Modul 15',
    estimatedMinutes: 25,
    mentalModelIntro: 'Modifier (Penjelas) memperkaya kalimat dengan detail kualitatif dan kuantitatif. Adjektiva memodifikasi kata benda, sedangkan Adverbia memodifikasi kata kerja, kata sifat lain, atau seluruh klausa. Urutan kata sifat memiliki tata letak kaku (OSASCOMP) yang mencerminkan psikologi persepsi penutur asli.',
    coreConceptSummary: 'Urutan kata sifat: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose (OSASCOMP). Adjektiva terbagi menjadi Gradable (bisa diberi very) dan Non-Gradable/Extreme (wajib diberi absolutely/completely). Flat Adverbs (fast, hard, late) tidak menggunakan akhiran -ly.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Hierarki Urutan Adjektiva Baku (OSASCOMP)",
                "explanation": "Ketika lebih dari satu kata sifat mendahului kata benda (Attributive Position), urutannya mengikuti hierarki OSASCOMP: (1) Opinion (*innovative, beautiful*), (2) Size (*large, microscopic*), (3) Age (*ancient, modern*), (4) Shape (*cylindrical, spherical*), (5) Color (*crimson, translucent*), (6) Origin (*British, Indonesian*), (7) Material (*metallic, synthetic*), dan (8) Purpose (*sampling, testing*).",
                "formula": "Determiner + Opinion + Size + Age + Shape + Color + Origin + Material + Purpose + NOUN",
                "examples": [
                        {
                                "sentence": "The team developed an innovative large modern spherical metallic sampling apparatus.",
                                "translation": "Tim mengembangkan peralatan pengambilan sampel logam bulat modern berukuran besar yang inovatif.",
                                "note": "Urutan sempurna: Opinion (innovative) -> Size (large) -> Age (modern) -> Shape (spherical) -> Material (metallic) -> Purpose (sampling) -> Noun."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Gradable vs Non-Gradable (Extreme) Adjectives & Intensifiers",
                "explanation": "Gradable Adjectives mendeskripsikan kualitas bertingkat dan berkolokasi dengan \"very, extremely, slightly\" (*very cold, extremely important*). Non-Gradable / Absolute / Extreme Adjectives sudah mengandung makna mutlak di dalamnya (misal: *freezing = extremely cold, vital = extremely important*) dan DILARANG digabungkan dengan \"very\". Gunakan intensifier absolut seperti *absolutely, completely, utterly, entirely*.",
                "formula": "Gradable + VERY / EXTREMELY | Extreme/Non-Gradable + ABSOLUTELY / COMPLETELY / UTTERLY",
                "examples": [
                        {
                                "sentence": "Maintaining experimental reproducibility is absolutely essential for scientific credibility.",
                                "translation": "Menjaga keterulangan eksperimen mutlak sangat penting bagi kredibilitas ilmiah.",
                                "note": "essential (extreme) -> absolutely essential (BUKAN very essential)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The research findings were very unique and very fascinating.",
                        "correctSentence": "The research findings were completely unique and utterly fascinating.",
                        "linguisticReason": "Unique dan fascinating adalah absolute/extreme adjectives; tidak boleh dimodifikasi dengan \"very\"."
                }
        },
        {
                "stepNumber": "03",
                "title": "Penempatan Posisi Adverbia: Manner, Frequency & Stance",
                "explanation": "Adverbia memiliki aturan penempatan spesifik: (1) Adverbs of Frequency (*always, often, seldom*) diletakkan sebelum Main Verb atau setelah To Be; (2) Adverbs of Manner (*carefully, rigorously*) diletakkan setelah objek atau sebelum verba; (3) Stance / Sentence Adverbs (*consequently, inevitably, surprisingly*) diletakkan di awal kalimat berapit tanda koma untuk mengomentari seluruh proposisi.",
                "formula": "Frequency: Subject + Adverb + Verb | Stance: Adverb, + Subject + Verb + Object + Manner Adverb",
                "examples": [
                        {
                                "sentence": "Inevitably, global industrialization accelerates atmospheric carbon concentration.",
                                "translation": "Tak terhindarkan, industrialisasi global mempercepat konsentrasi karbon atmosfer.",
                                "note": "Inevitably = Stance Adverb penentu sikap ilmiah di awal kalimat."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Flat Adverbs vs Turunan -ly yang Berubah Makna Total",
                "explanation": "Flat Adverbs adalah kata keterangan yang bentuknya identik dengan kata sifatnya tanpa akhiran -ly (*fast, hard, late, high*). Menambahkan -ly pada kata-kata ini akan MENGUBAH MAKNANYA SECARA TOTAL: *hard* (keras/sungguh-sungguh) vs *hardly* (hampir tidak pernah/jarang sekali), *late* (terlambat) vs *lately* (akhir-akhir ini).",
                "formula": "HARD = Giat/Keras | HARDLY = Hampir Tidak Pernah || LATE = Terlambat | LATELY = Akhir-akhir ini",
                "examples": [
                        {
                                "sentence": "The epidemiology team worked hard to isolate the viral vector.",
                                "translation": "Tim epidemiologi bekerja keras untuk mengisolasi vektor virus.",
                                "note": "worked hard (bekerja keras)."
                        },
                        {
                                "sentence": "The telemetry sensors hardly detected any background interference.",
                                "translation": "Sensor telemetri hampir tidak mendeteksi gangguan latar belakang apa pun.",
                                "note": "hardly detected (hampir tidak mendeteksi)."
                        }
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
      id: "q-m15-3",
      category: "Word Classes",
      difficulty: "Lanjutan",
      question: "Select the sentence containing an intransitive inseparable three-part phrasal verb:",
      options: [
            "The team finally came up against formidable institutional bureaucracy.",
            "The technician looked up the technical error in the manual.",
            "The manager gave the company secret away inadvertently.",
            "The researchers put the critical safety goggles on."
      ],
      correctAnswer: "The team finally came up against formidable institutional bureaucracy.",
      explanation: "\"Come up against\" adalah three-part phrasal verb (Verb + Adverb + Preposition) yang bersifat inseparable (tidak bisa disisipkan di tengah).",
      ruleReference: "Modul 15: Three-part Multi-word Verbs"
},
      {
      id: "q-m15-2",
      category: "Word Classes",
      difficulty: "Menengah",
      question: "Which separable phrasal verb sentence violates English pronoun placement rules?",
      options: [
            "The committee turned down it without further review.",
            "The committee turned it down without further review.",
            "The committee turned down the proposal without further review.",
            "The committee turned the proposal down without further review."
      ],
      correctAnswer: "The committee turned down it without further review.",
      explanation: "Pada Transitive Separable Phrasal Verbs, jika objek berupa **Pronoun** (*it, them, him, her*), objek **WAJIB** diletakkan di tengah antara verba dan partikel (*turned it down* ✔️, BUKAN *turned down it* ❌).",
      ruleReference: "Modul 15: Phrasal Verb Object Infix Rule"
},
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
      id: "err-m15-2",
      flawedSentence: "The government called off it due to nationwide public health concerns.",
      flawLocation: "called off it",
      correctedSentence: "The government called it off due to nationwide public health concerns.",
      linguisticExplanation: "Pada transitive separable phrasal verbs, pronoun object (*it*) wajib disisipkan di antara verba dan partikel preposisi (*called it off*).",
      acceptedVariations: []
},
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
    stageNumber: 4,
    stageName: 'Tahap 4: Modifiers, Kolokasi & Konektor Kalimat',
    categoryKey: 'Word Classes',
    moduleNumber: 16,
    title: 'Adjectives & The Royal Order of Adjectives (OSASCOMP)',
    subtitle: 'Urutan baku susunan kata sifat majemuk penutur asli',
    levelBadge: 'Kata Sifat · Modul 16',
    estimatedMinutes: 20,
    mentalModelIntro: 'Preposisi (Kata Depan) adalah pengatur relasi ruang, waktu, dan keterikatan logika antarelemen kalimat. Memahami preposisi dalam bahasa Inggris memerlukan pemetaan model spasial mental: AT (titik koordinat nol dimensi), ON (permukaan atau garis satu dimensi), dan IN (volume ruang tertutup atau periode waktu luas tiga dimensi).',
    coreConceptSummary: 'Preposisi terbagi atas: Spasial (At/On/In), Temporal (At/On/In), Gerak/Arah (Into, Onto, Toward), dan Preposisi Terikat (Dependent Prepositions pada verba, adjektiva, dan nomina).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Matriks Geometri Spasial & Temporal: Logika AT, ON, IN",
                "explanation": "Secara ruang: AT merujuk pada titik spesifik (*at the airport, at the intersection*); ON merujuk pada permukaan atau media komunikasi (*on the table, on the internet*); IN merujuk pada ruang bervolume atau wilayah geografis (*in the laboratory, in Indonesia*). Secara waktu: AT untuk jam presisi (*at 9:00 AM*); ON untuk hari dan tanggal spesifik (*on Monday, on July 4th*); IN untuk bulan, tahun, dekade, dan abad (*in 2025, in the 21st century*).",
                "formula": "Waktu: AT (Jam) -> ON (Hari/Tanggal) -> IN (Bulan/Tahun/Abad) || Ruang: AT (Titik) -> ON (Permukaan) -> IN (Wilayah/Wadah)",
                "examples": [
                        {
                                "sentence": "The clinical trial commenced at 8:00 AM on Monday in the university hospital.",
                                "translation": "Uji klinis dimulai pukul 08.00 pada hari Senin di rumah sakit universitas.",
                                "note": "at 8:00 AM (jam) -> on Monday (hari) -> in the hospital (ruang bangunan)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Preposisi Gerak Dinamis vs Posisi Statis",
                "explanation": "Bahasa Inggris membedakan secara ketat antara posisi diam dan pergerakan menembus batas: IN (posisi di dalam) vs INTO (pergerakan masuk ke dalam); ON (posisi di atas permukaan) vs ONTO (pergerakan mendarat ke atas permukaan); AT (posisi pada titik) vs TOWARD (pergerakan mengarah ke titik).",
                "formula": "Statis: in / on / at | Dinamis (Arah Gerak): into / onto / toward",
                "examples": [
                        {
                                "sentence": "The technician poured the saline reagent into the centrifuge vial.",
                                "translation": "Teknisi menuangkan reagen garam ke dalam botol sentrifugasi.",
                                "note": "poured ... into (pergerakan masuk ke dalam wadah)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Preposisi Terikat (Dependent Prepositions) Akademik",
                "explanation": "Banyak kata kerja, kata sifat, dan kata benda akademik yang menuntut preposisi terikat khusus (Kolokasi Baku): *rely on / depend on* (BUKAN depend of), *consist of* (terdiri dari), *interested in* (BUKAN interested for), *prevent from* (mencegah dari), *superior to / inferior to* (BUKAN superior than), *insight into* (wawasan tentang).",
                "formula": "Adjective + Dependent Preposition | Verb + Dependent Preposition",
                "examples": [
                        {
                                "sentence": "Economic resilience depends on continuous diversification of exports.",
                                "translation": "Ketahanan ekonomi bergantung pada diversifikasi ekspor yang berkelanjutan.",
                                "note": "depends ON (kolokasi baku)."
                        },
                        {
                                "sentence": "The new composite material is superior to traditional titanium alloys.",
                                "translation": "Bahan komposit baru tersebut lebih unggul daripada paduan titanium tradisional.",
                                "note": "superior TO (adjektiva Latin berpasangan dengan to)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Verba Transitif yang Sering Salah Diberi Preposisi",
                "explanation": "Akibat interferensi bahasa Indonesia, pembelajar kerap menyisipkan preposisi redundan setelah verba transitif murni: *Discuss about ❌ -> Discuss ✔* (\"berdiskusi tentang\"), *Emphasize on ❌ -> Emphasize ✔* (\"menekankan pada\"), *Explain me ❌ -> Explain to me ✔* (\"menjelaskan kepada saya\"), *Reach at ❌ -> Reach ✔* (\"mencapai\").",
                "formula": "Transitive Verb + DIRECT OBJECT (Tanpa Preposisi)",
                "examples": [
                        {
                                "sentence": "The committee will discuss the environmental policy tomorrow.",
                                "translation": "Komite akan mendiskusikan kebijakan lingkungan tersebut besok.",
                                "note": "discuss the policy (tanpa about)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The professor emphasized on the importance of data integrity.",
                        "correctSentence": "The professor emphasized the importance of data integrity.",
                        "linguisticReason": "Emphasize adalah kata kerja transitif langsung; tidak boleh diikuti preposisi \"on\" saat berfungsi sebagai verba."
                }
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
      id: "q-m16-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Which phrase demonstrates the correct placement of a purpose/qualifier adjective relative to material and origin?",
      options: [
            "A sleek Italian leather running shoe",
            "A running sleek Italian leather shoe",
            "An Italian sleek leather running shoe",
            "A leather sleek Italian running shoe"
      ],
      correctAnswer: "A sleek Italian leather running shoe",
      explanation: "Opinion (*sleek*) ➔ Origin (*Italian*) ➔ Material (*leather*) ➔ Purpose/Qualifier (*running*) + Noun (*shoe*). Purpose selalu menempel persis sebelum Head Noun.",
      ruleReference: "Modul 16: Purpose Adjective Position"
},
      {
      id: "q-m16-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Apply the Royal Order of Adjectives (OSASCOMP) to arrange the descriptors correctly:",
      options: [
            "The museum acquired a valuable antique Japanese ceramic vase.",
            "The museum acquired an antique valuable ceramic Japanese vase.",
            "The museum acquired a Japanese valuable antique ceramic vase.",
            "The museum acquired a ceramic antique valuable Japanese vase."
      ],
      correctAnswer: "The museum acquired a valuable antique Japanese ceramic vase.",
      explanation: "Urutan OSASCOMP: Opinion (*valuable*) ➔ Age (*antique*) ➔ Origin (*Japanese*) ➔ Material (*ceramic*) + Noun (*vase*).",
      ruleReference: "Modul 16: OSASCOMP Canonical Hierarchy"
},
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
      id: "err-m16-2",
      flawedSentence: "They bought a wooden round antique table for the faculty lounge.",
      flawLocation: "wooden round antique",
      correctedSentence: "They bought an antique round wooden table for the faculty lounge.",
      linguisticExplanation: "Berdasarkan urutan OSASCOMP: Age (*antique*) ➔ Shape (*round*) ➔ Material (*wooden*) + Noun (*table*).",
      acceptedVariations: []
},
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
    stageNumber: 4,
    stageName: 'Tahap 4: Modifiers, Kolokasi & Konektor Kalimat',
    categoryKey: 'Word Classes',
    moduleNumber: 17,
    title: 'Participle Adjectives: -ed vs -ing (Perasaan vs Karakteristik)',
    subtitle: 'Membedakan kondisi internal yang dialami subjek dengan sifat penyebab dari luar',
    levelBadge: 'Kata Sifat · Modul 17',
    estimatedMinutes: 20,
    mentalModelIntro: 'Konjungsi (Kata Hubung) adalah lem perekat sintaksis yang merangkai klausa independen dan dependen menjadi argumen utuh. Dalam penulisan esai formal, Anda harus mampu membedakan 3 kelas peranti penghubung: Konjungsi Koordinatif (FANBOYS), Konjungsi Subordinatif, dan Conjunctive Adverbs (Transisi Diskursus).',
    coreConceptSummary: 'Konjungsi Koordinatif (For, And, Nor, But, Or, Yet, So) menghubungkan 2 klausa setara dengan tanda koma. Konjungsi Subordinatif (Although, Because, Whereas) membentuk klausa bawahan. Conjunctive Adverbs (However, Furthermore, Consequently) membutuhkan titik-koma (;) atau titik (.) dan tanda koma.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Konjungsi Koordinatif (FANBOYS) & Aturan Koma",
                "explanation": "Tujuh konjungsi koordinatif dirangkum dalam akronim FANBOYS: For (kausalitas), And (penambahan), Nor (negasi ganda), But (pertentangan), Or (pilihan), Yet (konsesi kontras), So (konsekuensi). Ketika menghubungkan dua Independent Clauses (klausa yang masing-masing memiliki Subjek dan Verba lengkap), tanda KOMA WAJIB diletakkan TEPAT SEBELUM konjungsi.",
                "formula": "[Independent Clause 1], + [FANBOYS] + [Independent Clause 2].",
                "examples": [
                        {
                                "sentence": "The initial experiment failed, but the subsequent trial yielded significant results.",
                                "translation": "Eksperimen awal gagal, tetapi uji coba berikutnya menghasilkan hasil yang signifikan.",
                                "note": "Koma sebelum \"but\" memisahkan dua klausa independen."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Konjungsi Subordinatif & Kalimat Kompleks",
                "explanation": "Konjungsi Subordinatif (*Although, Even though, Because, Since, Whereas, While, Unless, Provided that*) mengubah klausa independen menjadi Dependent Clause (Klausa Bawahan). Jika klausa subordinatif berada di depan kalimat, ia WAJIB diikuti tanda koma sebelum klausa utama.",
                "formula": "[Subordinator + Dependent Clause], + [Independent Clause]. | [Independent Clause] + [Subordinator + Dependent Clause] (Tanpa Koma)",
                "examples": [
                        {
                                "sentence": "Although the initial empirical telemetry was incomplete, the researchers isolated the core anomaly.",
                                "translation": "Meskipun telemetri empiris awal tidak lengkap, para peneliti berhasil mengisolasi anomali inti.",
                                "note": "Klausa subordinatif di depan -> koma setelah incomplete."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Conjunctive Adverbs (Transisi Diskursus) & Aturan Titik Koma (;)",
                "explanation": "Conjunctive Adverbs (seperti *However, Furthermore, Consequently, Nevertheless, In contrast, Therefore*) BUKAN konjungsi gramatikal, melainkan Adverbia Transisi. Kata-kata ini TIDAK BISA menggabungkan dua klausa hanya dengan koma. Menggabungkannya dengan koma saja menghasilkan kesalahan fatal Comma Splice. Gunakan titik-koma (;) sebelum transisi dan koma (,) setelahnya, atau pisahkan menjadi dua kalimat mandiri.",
                "formula": "[Independent Clause 1]; however, + [Independent Clause 2]. OR [Clause 1]. However, + [Clause 2].",
                "examples": [
                        {
                                "sentence": "The fiscal deficit expanded rapidly; consequently, the central bank raised interest rates.",
                                "translation": "Defisit fiskal meluas dengan cepat; akibatnya, bank sentral menaikkan suku bunga.",
                                "note": "; consequently, = struktur transisi formal sempurna."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Eliminasi Total Kesalahan Double Conjunction & Comma Splice",
                "explanation": "Bahasa Indonesia mengizinkan pola \"Meskipun ... tetapi\" atau \"Karena ... maka\". Dalam bahasa Inggris, ini adalah kesalahan tata bahasa fatal (Double Conjunction Trap). Anda HANYA BOLEH memilih SATU: gunakan *Although* saja TANPA *but*, atau gunakan *Because* saja TANPA *so*.",
                "formula": "PILIH SALAH SATU: Although [A], [B] ATAU [A], but [B] (DILARANG: Although [A], but [B] ❌)",
                "examples": [
                        {
                                "sentence": "Although renewable energy costs have declined, fossil fuel subsidies remain prevalent.",
                                "translation": "Meskipun biaya energi terbarukan telah menurun, subsidi bahan bakar fosil tetap lazim.",
                                "note": "Hanya ada \"Although\" di awal, tanpa \"but\" di tengah."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Although the drug is highly effective, but it produces minor side effects.",
                        "correctSentence": "Although the drug is highly effective, it produces minor side effects.",
                        "linguisticReason": "Menggabungkan konjungsi subordinatif \"although\" dan konjungsi koordinatif \"but\" secara bersamaan merusak struktur sintaksis kalimat majemuk."
                }
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
      id: "q-m17-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Identify the sentence with an incorrectly formed participle compound adjective:",
      options: [
            "The policy resulted in a wide-spreaded economic consequence across the region.",
            "The policy resulted in a widespread economic consequence across the region.",
            "The university constructed a state-of-the-art, purpose-built laboratory.",
            "The report highlighted several forward-thinking strategies."
      ],
      correctAnswer: "The policy resulted in a wide-spreaded economic consequence across the region.",
      explanation: "\"Spread\" adalah irregular verb dengan bentuk V3 yang tetap \"spread\" (bukan *spreaded* ❌). Bentuk compound adjective yang benar adalah \"widespread\" atau \"wide-spread\".",
      ruleReference: "Modul 17: Irregular Participle Compounds"
},
      {
      id: "q-m17-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Choose the sentence that correctly uses -ing and -ed participle adjectives:",
      options: [
            "The exhausting symposium left all participating delegates completely exhausted.",
            "The exhausted symposium left all participating delegates completely exhausting.",
            "The exhausting symposium left all participated delegates completely exhausted.",
            "The exhausted symposium left all exhausting delegates completely participated."
      ],
      correctAnswer: "The exhausting symposium left all participating delegates completely exhausted.",
      explanation: "-ing participle (*exhausting*) mendeskripsikan sifat simposium yang menguras energi (penyebab). -ed participle (*exhausted*) mendeskripsikan kondisi emosi/fisik delegasi yang terkuras energinya (penerima efek). *Participating* adalah active present participle.",
      ruleReference: "Modul 17: Active vs Passive Participle Adjectives"
},
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
      id: "err-m17-2",
      flawedSentence: "The students were very confusing by the ambiguous lecture notes.",
      flawLocation: "were very confusing",
      correctedSentence: "The students were very confused by the ambiguous lecture notes.",
      linguisticExplanation: "Subjek \"The students\" adalah pihak yang merasakan kebingungan (penerima efek), sehingga membutuhkan Past Participle adjective **confused**.",
      acceptedVariations: []
},
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
    stageNumber: 4,
    stageName: 'Tahap 4: Modifiers, Kolokasi & Konektor Kalimat',
    categoryKey: 'Word Classes',
    moduleNumber: 18,
    title: 'Comparative & Superlative Degrees & Proportional Structures',
    subtitle: 'Komparasi presisi, larangan double comparative, dan pola "The more... the more..."',
    levelBadge: 'Komparasi · Modul 18',
    estimatedMinutes: 25,
    mentalModelIntro: 'Verba Non-Finite (Gerund dan Infinitif) adalah bentuk kata kerja yang tidak terikat waktu dan jumlah subjek, melainkan berfungsi sebagai nomina atau komplemen predikat. Gerund (-ing) berorientasi pada realitas/pengalaman nyata, sedangkan To-Infinitive berorientasi pada potensi/tujuan di masa depan.',
    coreConceptSummary: 'Gerund (-ing) berfungsi sebagai verbal noun. To-Infinitive (to + V1) berfungsi sebagai pelengkap tujuan. Verba tertentu mewajibkan gerund (admit, avoid, consider), verba lain mewajibkan infinitif (decide, hope, plan), dan verba dual-meaning (stop, remember, regret) mengubah makna secara drastis.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Hakikat Gerund (Verbal Noun) vs To-Infinitive (Potensi Masa Depan)",
                "explanation": "Secara filosofi linguistik, Gerund (V-ing) mengekspresikan tindakan nyata yang sudah terjadi, sedang berlangsung, atau dialami secara faktual. To-Infinitive (to + V1) mengekspresikan aksi hipotetis, potensi masa depan, atau tujuan kehendak yang belum tentu terealisasi.",
                "formula": "Gerund = Pengalaman / Realitas Faktual | To-Infinitive = Kehendak / Rencana / Potensi Masa Depan",
                "examples": [
                        {
                                "sentence": "The ministry proposed expanding regional solar infrastructure.",
                                "translation": "Kementerian mengusulkan perluasan infrastruktur tenaga surya regional.",
                                "note": "proposed + expanding (Gerund)."
                        },
                        {
                                "sentence": "The consortium decided to invest in nuclear fusion research.",
                                "translation": "Konsorsium memutuskan untuk berinvestasi dalam penelitian fusi nuklir.",
                                "note": "decided + to invest (To-Infinitive)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Daftar Verba Pengambil Gerund vs Infinitif Wajib",
                "explanation": "Verba pengambil Gerund murni: *admit, appreciate, avoid, consider, defer, deny, enjoy, finish, involve, postpone, recommend, risk, suggest*. Verba pengambil To-Infinitive murni: *afford, agree, arrange, decide, demand, expect, hesitate, hope, manage, offer, plan, refuse, tend, volunteer*.",
                "formula": "SUGGEST / RECOMMEND / AVOID + [VERB-ING] | DECIDE / REFUSE / PLAN + [TO + V1]",
                "examples": [
                        {
                                "sentence": "The review panel recommended conducting additional epidemiological trials.",
                                "translation": "Panel peninjau menyarankan pelaksanaan uji epidemiologi tambahan.",
                                "note": "recommended + conducting (BUKAN recommended to conduct)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The professor suggested to analyze the telemetry logs again.",
                        "correctSentence": "The professor suggested analyzing the telemetry logs again.",
                        "linguisticReason": "Suggest adalah kata kerja yang secara kaku mewajibkan komplemen gerund (-ing) atau that-clause, bukan to-infinitive langsung."
                }
        },
        {
                "stepNumber": "03",
                "title": "Verba Dual-Meaning: Pergeseran Makna Signifikan",
                "explanation": "Tiga verba utama mengubah makna secara radikal berdasarkan pilihan komplemennya: (1) *STOP*: *Stop doing* = Menghentikan kebiasaan/aktivitas; *Stop to do* = Berhenti sejenak demi melakukan hal lain; (2) *REMEMBER*: *Remember doing* = Mengingat memori masa lalu; *Remember to do* = Ingat untuk menjalankan tugas; (3) *REGRET*: *Regret doing* = Menyesali tindakan masa lalu; *Regret to inform* = Menyesal harus menyampaikan kabar buruk.",
                "formula": "Stop doing (Berhenti total) vs Stop to do (Berhenti untuk tujuan lain)",
                "examples": [
                        {
                                "sentence": "The pharmaceutical manufacturer stopped producing the obsolete antibiotic.",
                                "translation": "Produsen farmasi tersebut berhenti memproduksi antibiotik usang itu.",
                                "note": "stopped producing = menghentikan proses produksi total."
                        },
                        {
                                "sentence": "During the field survey, the team stopped to collect water samples.",
                                "translation": "Selama survei lapangan, tim berhenti sejenak untuk mengambil sampel air.",
                                "note": "stopped to collect = berhenti demi mengambil sampel."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Bare Infinitives setelah Verba Persepsi & Kausatif",
                "explanation": "Verba Persepsi (*see, hear, notice, watch*) dan Verba Kausatif (*make, let, have*) mewajibkan Bare Infinitive (tanpa \"to\") ketika subjek mengamati seluruh tindakan dari awal hingga akhir atau memaksa/mengizinkan suatu aksi.",
                "formula": "Subject + MAKE / LET / HEAR / SEE + Object + BARE INFINITIVE (V1)",
                "examples": [
                        {
                                "sentence": "The strict regulatory framework made the corporation disclose its emissions data.",
                                "translation": "Kerangka regulasi yang ketat membuat korporasi tersebut mengungkap data emisinya.",
                                "note": "made + corporation + disclose (Bare Infinitive, BUKAN to disclose)."
                        }
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
      id: "q-m18-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Identify the sentence that avoids an illogical comparison / faulty parallelism:",
      options: [
            "The tuition fee at private universities is significantly higher than that of public institutions.",
            "The tuition fee at private universities is significantly higher than public institutions.",
            "The climate in tropical regions is more humid than temperate regions.",
            "Her research methodology is much more comprehensive than her advisor."
      ],
      correctAnswer: "The tuition fee at private universities is significantly higher than that of public institutions.",
      explanation: "Membandingkan *tuition fee* (biaya) dengan *institutions* (lembaga) adalah kesalahan Illogical Comparison. Wajib menggunakan kata ganti penunjuk \"that of\" untuk merujuk kembali ke \"the tuition fee\".",
      ruleReference: "Modul 18: Illogical Comparison and Pronoun Substitution"
},
      {
      id: "q-m18-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Which sentence correctly demonstrates the double comparative / proportional correlation pattern?",
      options: [
            "The more rigorous the experimental design is, the more reliable the resulting data becomes.",
            "The more rigorous the experimental design, more reliable the resulting data becomes.",
            "More rigorous the experimental design, the more reliable the data.",
            "The most rigorous the experimental design is, the most reliable the data becomes."
      ],
      correctAnswer: "The more rigorous the experimental design is, the more reliable the resulting data becomes.",
      explanation: "Pola perbandingan korelatif (*Proportional Comparative*) wajib menggunakan struktur paralel: **The + Comparative ..., the + Comparative ...**.",
      ruleReference: "Modul 18: Parallel Proportional Comparatives"
},
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
      id: "err-m18-2",
      flawedSentence: "This statistical software is more superior than the legacy version.",
      flawLocation: "more superior than",
      correctedSentence: "This statistical software is superior to the legacy version.",
      linguisticExplanation: "Adjektiva asal Latin (*superior, inferior, senior, junior, prior*) sudah bermakna komparatif inheren (tidak boleh didahului \"more\") dan berkolokasi dengan preposisi **to** (BUKAN *than*).",
      acceptedVariations: []
},
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
    stageNumber: 5,
    stageName: 'Tahap 5: Bentuk Non-Finite & Verba Frasa',
    categoryKey: 'Word Classes',
    moduleNumber: 19,
    title: 'Adverbs & Adverbial Placement (Manner, Frequency, Degree & Sentence Adverbs)',
    subtitle: 'Posisi penempatan kata keterangan dan larangan memisahkan Verb dari Direct Object',
    levelBadge: 'Kata Keterangan · Modul 19',
    estimatedMinutes: 25,
    mentalModelIntro: 'Phrasal Verbs menggabungkan kata kerja dasar dengan satu atau dua partikel adverbial/preposisional (seperti *out, up, into, off*) untuk menciptakan idiom semantis baru yang maknanya tidak bisa ditebak dari unsur kata kerjanya saja. Dalam penulisan akademik, Anda harus memahami aturan pemisahan objek pronominal dan kemampuan mentransformasikannya ke register formal Latin.',
    coreConceptSummary: 'Phrasal Verbs terbagi atas: Separable Transitive (turn on / turn off), Inseparable Transitive (look into / cope with), Intransitive (break down / show up), dan Three-Part Verbs (look forward to / come up with).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Anatomi Partikel Adverbial vs Preposisi",
                "explanation": "Perbedaan mendasar antara Verba Berpreposisi (*Prepositional Verbs*) dan Verba Berpartikel (*Phrasal Verbs*) terletak pada sifat partikelnya. Partikel pada phrasal verb terikat erat secara semantis dengan verba untuk membentuk arti kiasan baru (misal: *give up* = berhenti/menyerah, sangat berbeda dari *give*).",
                "formula": "Base Verb + Adverbial Particle (On/Off/Up/Down/Out/Away)",
                "examples": [
                        {
                                "sentence": "The engineering team carried out extensive stress tests on the airframe.",
                                "translation": "Tim teknik melaksanakan uji ketahanan ekstensif pada badan pesawat.",
                                "note": "carry out = melaksanakan (conduct)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Transitive Separable Phrasal Verbs & Aturan Pronoun",
                "explanation": "Pada Transitive Separable Phrasal Verbs, jika objeknya adalah Frasa Nomina biasa, objek boleh diletakkan setelah partikel ATAU di antara verba dan partikel (*turn on the light* atau *turn the light on*). Namun, JIKA OBJEKNYA ADALAH PRONOUN (it, them, him, her), OBJEK WAJIB DILETAKKAN DI TENGAH (*turn it on ✔, turn on it ❌*).",
                "formula": "Pronoun Object: Verb + [PRONOUN] + Particle (WAJIB DI TENGAH)",
                "examples": [
                        {
                                "sentence": "When the anomaly appeared, the technician turned the system off immediately.",
                                "translation": "Ketika anomali muncul, teknisi mematikan sistem itu segera.",
                                "note": "turned [the system] off."
                        },
                        {
                                "sentence": "We reviewed the telemetry data and backed it up securely.",
                                "translation": "Kami meninjau data telemetri dan mencadangkannya dengan aman.",
                                "note": "backed [it] up (it wajib di tengah)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The sensor is malfunctioning; please shut down it.",
                        "correctSentence": "The sensor is malfunctioning; please shut down the sensor / shut it down.",
                        "linguisticReason": "Kata ganti \"it\" adalah pronoun objek yang wajib berada di antara kata kerja \"shut\" dan partikel \"down\"."
                }
        },
        {
                "stepNumber": "03",
                "title": "Inseparable & Three-Part Phrasal Verbs",
                "explanation": "Inseparable Phrasal Verbs (*look into, come across, run into*) dan Three-Part Phrasal Verbs (*look forward to, put up with, come up with, catch up with*) TIDAK BISA dipisahkan oleh objek apa pun. Objek harus selalu berada di akhir setelah seluruh partikel selesai.",
                "formula": "Verb + Particle 1 + Preposition 2 + OBJECT (Tidak Boleh Dipisah)",
                "examples": [
                        {
                                "sentence": "The commission will look into the causes of the supply chain disruption.",
                                "translation": "Komisi akan menyelidiki penyebab gangguan rantai pasok tersebut.",
                                "note": "look into (inseparable)."
                        },
                        {
                                "sentence": "Researchers came up with an innovative solution to water purification.",
                                "translation": "Para peneliti menemukan solusi inovatif untuk pemurnian air.",
                                "note": "came up with + solution."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Transformasi Phrasal Verbs ke Register Formal Akademik",
                "explanation": "Dalam penulisan esai akademik resmi (IELTS Task 2 / TOEFL / Jurnal Ilmiah), phrasal verbs bernuansa informal sehari-hari sebaiknya ditransformasikan ke padanan verba formal turunan Latin/Prancis (Single-Word Academic Verbs): *carry out -> conduct*, *look into -> investigate*, *put off -> postpone*, *give up -> relinquish*, *bring about -> cause/generate*, *point out -> indicate*.",
                "formula": "Informal Phrasal Verb ----[Academic Register Elevation]----> Single-Word Latinate Verb",
                "examples": [
                        {
                                "sentence": "The researchers investigated the underlying epidemiological factors.",
                                "translation": "Para peneliti menyelidiki faktor-faktor epidemiologi yang mendasarinya.",
                                "note": "investigated (formal) alih-alih looked into (informal)."
                        },
                        {
                                "sentence": "Fiscal stimulus generated unprecedented economic growth.",
                                "translation": "Stimulus fiskal menghasilkan pertumbuhan ekonomi yang belum pernah terjadi sebelumnya.",
                                "note": "generated (formal) alih-alih brought about."
                        }
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
      id: "q-m19-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Which sentence correctly avoids the split infinitive error in ultra-formal academic style?",
      options: [
            "The university decided to examine the allegations thoroughly.",
            "The university decided to thoroughly examine the allegations.",
            "The university decided thoroughly to examine the allegations quickly.",
            "The university decided to examine thoroughly not the allegations."
      ],
      correctAnswer: "The university decided to examine the allegations thoroughly.",
      explanation: "Meskipun *split infinitive* (*to thoroughly examine*) umum dalam percakapan modern, dalam gaya penulisan akademik yang sangat presisi, adverb of manner ditempatkan setelah objek (*to examine the allegations thoroughly*).",
      ruleReference: "Modul 19: Split Infinitive Nuances in Academic Registers"
},
      {
      id: "q-m19-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Where should the frequency adverb \"seldom\" be positioned in a sentence with an auxiliary verb?",
      options: [
            "The meteorological department has seldom recorded such elevated rainfall figures.",
            "The meteorological department seldom has recorded such elevated rainfall figures.",
            "The meteorological department has recorded seldom such elevated rainfall figures.",
            "Seldom the meteorological department has recorded such elevated rainfall figures."
      ],
      correctAnswer: "The meteorological department has seldom recorded such elevated rainfall figures.",
      explanation: "Posisi baku adverbs of frequency (*seldom, always, never, often*) adalah di antara Auxiliary Verb (*has*) dan Main Verb (*recorded*): **Subject + Aux + Adverb + Main Verb**.",
      ruleReference: "Modul 19: Mid-Position Adverbs in Complex Verb Phrases"
},
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
      id: "err-m19-2",
      flawedSentence: "The researcher described clearly the complex biological process.",
      flawLocation: "described clearly the complex biological process",
      correctedSentence: "The researcher described the complex biological process clearly.",
      linguisticExplanation: "Dalam kaidah sintaksis bahasa Inggris, jangan menyisipkan Adverb di antara Transitive Verb (\"described\") dan Direct Object (\"the complex biological process\"). Tempatkan Adverb di akhir kalimat atau sebelum kata kerja.",
      acceptedVariations: [
            "The researcher clearly described the complex biological process."
      ]
},
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
    stageNumber: 5,
    stageName: 'Tahap 5: Bentuk Non-Finite & Verba Frasa',
    categoryKey: 'Word Classes',
    moduleNumber: 20,
    title: 'Prepositions: Hierarki Waktu, Ruang, dan Gerak (In, On, At & Movement)',
    subtitle: 'Piramida koordinat waktu-tempat dari spesifik ke luas, serta preposisi arah',
    levelBadge: 'Preposisi · Modul 20',
    estimatedMinutes: 25,
    mentalModelIntro: 'Partisipel (Present Participle -ing dan Past Participle -ed/V3) adalah instrumen sintaksis paling elegan untuk mereduksi kalimat majemuk yang panjang menjadi frasa penjelas yang padat dan berbobot tinggi. Kesalahan paling fatal dalam pemakaiannya adalah "Dangling Participle", yaitu ketika subjek pembuka tidak cocok dengan pelaku kalimat.',
    coreConceptSummary: 'Present Participle (-ing) menyatakan makna aktif atau simultan. Past Participle (V3) menyatakan makna pasif atau kondisi terselesaikan. Perfect Participle (Having + V3) menegaskan bahwa aksi pertama tuntas sebelum aksi kedua dimulai.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Present Participle (Aktif) vs Past Participle (Pasif)",
                "explanation": "Present Participle (-ing) mereduksi klausa aktif (*The student who conducts research -> The student conducting research*). Sebaliknya, Past Participle (-ed/V3) mereduksi klausa pasif (*The paper that was published in Nature -> The paper published in Nature*).",
                "formula": "Aktif: Noun + [Verb-ing Phrase] | Pasif: Noun + [Past Participle Phrase / V3]",
                "examples": [
                        {
                                "sentence": "The satellite orbiting Earth collected high-resolution atmospheric data.",
                                "translation": "Satelit yang mengorbit Bumi tersebut mengumpulkan data atmosfer beresolusi tinggi.",
                                "note": "orbiting = reduksi klausa aktif (which orbits Earth)."
                        },
                        {
                                "sentence": "The data collected by the telemetry sensors was verified independently.",
                                "translation": "Data yang dikumpulkan oleh sensor telemetri diverifikasi secara independen.",
                                "note": "collected = reduksi klausa pasif (which was collected)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Reduksi Klausa Menjadi Participial Modifier di Awal Kalimat",
                "explanation": "Klausa keterangan waktu atau sebab-akibat (*When/Because the team analyzed the data, they discovered...*) dapat diringkas menjadi frasa partisipel pembuka (*Analyzing the data, the team discovered...*).",
                "formula": "[Present/Past Participle Phrase], + [SUBJECT SEJATI] + [FINITE VERB]",
                "examples": [
                        {
                                "sentence": "Recognizing the limitations of the initial trial, the researchers revised their protocol.",
                                "translation": "Menyadari keterbatasan uji coba awal, para peneliti merevisi protokol mereka.",
                                "note": "Recognizing... = Reduksi dari Because they recognized..."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Perfect Participle (Having + V3): Penegasan Kronologis",
                "explanation": "Ketika Anda ingin menegaskan bahwa tindakan pertama SELESAI SEPENUHNYA sebelum tindakan kedua dimulai, gunakan Perfect Participle (*Having + V3* untuk aktif, *Having been + V3* untuk pasif).",
                "formula": "Aktif: Having + [Past Participle (V3)], + Subject + Verb | Pasif: Having been + [Past Participle (V3)], + Subject + Verb",
                "examples": [
                        {
                                "sentence": "Having finalized the empirical calculations, the consortium submitted the grant proposal.",
                                "translation": "Setelah menyelesaikan perhitungan empiris, konsorsium mengajukan proposal hibah.",
                                "note": "Having finalized = aksi selesai sepenuhnya terlebih dahulu."
                        },
                        {
                                "sentence": "Having been peer-reviewed by international experts, the paper was accepted for publication.",
                                "translation": "Setelah ditelaah sejawat oleh para ahli internasional, makalah tersebut diterima untuk diterbitkan.",
                                "note": "Having been peer-reviewed = Perfect Participle Pasif."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Eliminasi Total Kesalahan Dangling Modifier",
                "explanation": "Dangling Modifier terjadi ketika subjek dari klausa utama TIDAK COCOK dengan pelaku aksi pada participle phrase pembuka. Contoh salah: \"*Walking into the lab, the microscope was broken ❌*\" (mikroskop tidak bisa berjalan!). Subjek kalimat utama WAJIB adalah orang yang berjalan (*Walking into the lab, the scientist noticed that the microscope was broken ✔*).",
                "formula": "Uji Penyelarasan Subjek: Apakah Subjek setelah koma adalah pelaku sejati dari verba partisipel pembuka?",
                "examples": [
                        {
                                "sentence": "Examining the spectral telemetry, the astrophysicist discovered an exoplanet.",
                                "translation": "Memeriksa telemetri spektral, ahli astrofisika tersebut menemukan sebuah eksoplanet.",
                                "note": "Subjek setelah koma adalah the astrophysicist (pelaku pemeriksaan)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Having analyzed the blood samples, the disease was identified.",
                        "correctSentence": "Having analyzed the blood samples, the pathologists identified the disease.",
                        "linguisticReason": "Penyakit tidak menganalisis sampel darah. Subjek utama setelah koma harus diselaraskan dengan pelaku analisis, yaitu \"the pathologists\"."
                }
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
      id: "q-m20-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Identify the sentence that correctly uses \"between\" versus \among\:",
      options: [
            "A bilateral free-trade pact was negotiated between the three independent sovereign states.",
            "A multilateral pact was negotiated among the three independent sovereign states.",
            "The inheritance was equally divided between the ten family members.",
            "There is strong consensus between the entire student body."
      ],
      correctAnswer: "A multilateral pact was negotiated among the three independent sovereign states.",
      explanation: "\"Among\" digunakan ketika merujuk pada tiga pihak atau lebih sebagai kelompok kolektif tanpa hubungan bilateral terpisah satu per satu.",
      ruleReference: "Modul 20: Between vs Among Relational Dynamics"
},
      {
      id: "q-m20-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Choose the sentence with correct spatial preposition usage for media and transportation:",
      options: [
            "The scholar read the editorial in the newspaper while traveling on the train.",
            "The scholar read the editorial on the newspaper while traveling in the train.",
            "The scholar read the editorial at the newspaper while traveling on the taxi.",
            "The scholar read the editorial in the website while traveling by the foot."
      ],
      correctAnswer: "The scholar read the editorial in the newspaper while traveling on the train.",
      explanation: "Media cetak 2D berhalaman (*newspaper, book, journal*) menggunakan preposisi **in**. Transportasi umum berkapasitas besar di mana penumpang dapat berdiri/berjalan (*train, bus, plane, ship*) menggunakan preposisi **on**.",
      ruleReference: "Modul 20: Prepositions of Medium and Transit"
},
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
      id: "err-m20-2",
      flawedSentence: "The symposium will commence in Monday morning at 9:00 AM.",
      flawLocation: "in Monday morning",
      correctedSentence: "The symposium will commence on Monday morning at 9:00 AM.",
      linguisticExplanation: "Meskipun bagian hari menggunakan \"in the morning\", jika hari spesifik disebutkan (\"Monday morning\"), preposisi yang menguasai adalah **on** (*on Monday morning*).",
      acceptedVariations: []
},
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
    stageNumber: 5,
    stageName: 'Tahap 5: Bentuk Non-Finite & Verba Frasa',
    categoryKey: 'Word Classes',
    moduleNumber: 21,
    title: 'Dependent Prepositions & Fixed Prepositional Collocations',
    subtitle: 'Pasangan preposisi tetap pada Verbs & Adjectives penentu skor internasional',
    levelBadge: 'Kolokasi Preposisi · Modul 21',
    estimatedMinutes: 25,
    mentalModelIntro: 'Sintaksis kalimat bahasa Inggris dibangun di atas 5 pola konstituen dasar. Memahami relasi antara Subjek, Verba, Objek Langsung/Tak Langsung, dan Pelengkap (Subject/Object Complement) adalah fondasi untuk menganalisis kalimat rumit dan menghindari fragmen kalimat (Sentence Fragments).',
    coreConceptSummary: '5 Pola Utama: (1) SV (Intransitif), (2) SVO (Monotransitif), (3) SVC (Kopulatif), (4) SVOO (Ditransitif), dan (5) SVOC (Kompleks Transitif). Pelengkap Subjek melengkapi kondisi subjek; Pelengkap Objek mendefinisikan status objek penderita.',
    sections: [
        {
                "stepNumber": "01",
                "title": "5 Pola Dasar Konstituen Kalimat Bahasa Inggris",
                "explanation": "Seluruh kalimat bahasa Inggris, serumit apa pun klausa tambahannya, dapat didekonstruksi menjadi salah satu dari 5 pola dasar: (1) SV: *The reaction ceased*; (2) SVO: *The team analyzed the data*; (3) SVC: *The hypothesis remains valid*; (4) SVOO: *The agency awarded the team a grant*; (5) SVOC: *The committee appointed Dr. Aris chair*.",
                "formula": "SV | SVO | SVC | SVOO | SVOC",
                "examples": [
                        {
                                "sentence": "The empirical evidence remains conclusive across diverse demographic cohorts.",
                                "translation": "Bukti empiris tersebut tetap konklusif di berbagai kelompok demografis.",
                                "note": "Pola SVC: The empirical evidence (S) + remains (V Kopula) + conclusive (Subject Complement)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Subject Complement (Pelengkap Subjek) setelah Linking Verbs",
                "explanation": "Subject Complement adalah Frasa Adjektiva atau Frasa Nomina yang mengikuti Linking Verbs (seperti *be, seem, become, appear, remain, look, sound*). Fungsinya adalah mendefinisikan identitas atau sifat subjek. Karena itu, ia SELALU berbentuk Adjektiva, BUKAN Adverbia.",
                "formula": "Subject + Linking Verb + SUBJECT COMPLEMENT [Adjective / Noun]",
                "examples": [
                        {
                                "sentence": "The proposed environmental policy seems effective.",
                                "translation": "Kebijakan lingkungan yang diusulkan tersebut tampak efektif.",
                                "note": "seems + effective (Adjektiva, BUKAN effectively)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Object Complement pada Pola SVOC",
                "explanation": "Dalam pola SVOC (Complex Transitive), kata kerja diikuti Direct Object dan dilanjutkan oleh Object Complement yang menjelaskan status, gelar, atau perubahan keadaan objek tersebut (*elect, make, consider, deem, declare, appoint, name*).",
                "formula": "Subject + Verb + Direct Object + OBJECT COMPLEMENT [Noun / Adjective]",
                "examples": [
                        {
                                "sentence": "The editorial board deemed the research methodology groundbreaking.",
                                "translation": "Dewan editorial menganggap metodologi penelitian tersebut revolusioner.",
                                "note": "deemed + the methodology (DO) + groundbreaking (Object Complement)."
                        },
                        {
                                "sentence": "The international consortium elected Dr. Vance president.",
                                "translation": "Konsorsium internasional memilih Dr. Vance sebagai presiden.",
                                "note": "elected + Dr. Vance (DO) + president (Object Complement)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Pencegahan Sentence Fragments & Comma Splices",
                "explanation": "Sentence Fragment adalah kelompok kata yang tidak memiliki Subjek atau Finite Verb mandiri (misal: klausa dependen yang berdiri sendiri diawali *Because* tanpa induk kalimat). Pastikan setiap kalimat memiliki minimal satu Independent Clause utuh.",
                "formula": "Klausa Independen Wajib: [SUBJECT] + [FINITE VERB] (+ Objek/Komplemen jika diperlukan)",
                "examples": [
                        {
                                "sentence": "Because the telemetry data was corrupt, the team aborted the launch.",
                                "translation": "Karena data telemetri rusak, tim membatalkan peluncuran.",
                                "note": "Klausa subordinatif digabung dengan induk kalimat utuh."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Because the preliminary survey was inconclusive. The team conducted further trials.",
                        "correctSentence": "Because the preliminary survey was inconclusive, the team conducted further trials.",
                        "linguisticReason": "Klausa diawali \"Because\" adalah klausa dependen (Sentence Fragment) yang tidak boleh berdiri sendiri dengan tanda titik."
                }
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
      id: "q-m21-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Identify the verb that is incorrectly paired with a preposition in academic English:",
      options: [
            "The committee discussed about the proposed curriculum reform at great length.",
            "The committee discussed the proposed curriculum reform at great length.",
            "The findings contributed to the existing body of scholarly literature.",
            "The professor elaborated on the underlying thermodynamic principles."
      ],
      correctAnswer: "The committee discussed about the proposed curriculum reform at great length.",
      explanation: "Verba \"discuss\" adalah **transitive verb** murni dan langsung mengambil direct object tanpa preposisi (*discuss the issue* ✔️, BUKAN *discuss about the issue* ❌). Kesalahan ini sangat sering dilakukan penutur Indonesia karena pengaruh \"berdiskusi tentang\".",
      ruleReference: "Modul 21: Pseudo-Preposition Intrusion on Transitive Verbs"
},
      {
      id: "q-m21-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Which sentence correctly matches the adjective with its fixed dependent preposition?",
      options: [
            "The research director was skeptical of the unverified data assertions.",
            "The research director was skeptical with the unverified data assertions.",
            "The research director was skeptical about to the unverified data assertions.",
            "The research director was skeptical at the unverified data assertions."
      ],
      correctAnswer: "The research director was skeptical of the unverified data assertions.",
      explanation: "Kolokasi preposisi terikat untuk kata sifat \"skeptical\" adalah **skeptical of** (atau terkadang *skeptical about*), bukan *skeptical with* atau *skeptical at*.",
      ruleReference: "Modul 21: Adjective-Preposition Collocation Pairs"
},
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
      id: "err-m21-2",
      flawedSentence: "The committee emphasizes on the critical necessity of ethical integrity.",
      flawLocation: "emphasizes on",
      correctedSentence: "The committee emphasizes the critical necessity of ethical integrity.",
      linguisticExplanation: "\"Emphasize\" saat berfungsi sebagai kata kerja adalah Transitive murni dan langsung mengambil direct object tanpa preposisi *on*. Preposisi *on* hanya digunakan pada bentuk nomina (*place an emphasis on*).",
      acceptedVariations: [
            "The committee places an emphasis on the critical necessity of ethical integrity."
      ]
},
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
    stageNumber: 6,
    stageName: 'Tahap 6: Sintaksis, Dimensi Waktu & Pasif',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 22,
    title: 'Anatomy of a Clause: Subject, Finite Verb, Complements, and Adjuncts',
    subtitle: 'Membedah rangka konstituen kalimat dan membedakan Finite vs Non-finite Verb',
    levelBadge: 'Sintaksis Klausa · Modul 22',
    estimatedMinutes: 30,
    mentalModelIntro: 'Sistem 12 Tenses bahasa Inggris adalah matriks 2 dimensi: Sumbu Waktu (Time: Past, Present, Future) x Sumbu Aspek (Aspect: Simple, Continuous, Perfect, Perfect Continuous). Memahami logika aspek membebaskan Anda dari menghafal 12 rumus secara mekanis.',
    coreConceptSummary: 'Simple Aspect menyatakan fakta permanen/tuntas. Continuous Aspect menyatakan proses temporer/sedang berjalan. Perfect Aspect menghubungkan aksi masa lalu dengan titik acuan. Perfect Continuous menyatakan durasi proses yang berlanjut.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Matriks 2 Dimensi: 3 Waktu x 4 Aspek",
                "explanation": "Waktu (Time) menjawab \"KAPAN\" (Past, Present, Future). Aspek (Aspect) menjawab \"BAGAIMANA STRUKTUR INTERNAL AKSI TERSEBUT\" (apakah fakta rutin, proses sedang berlangsung, keterkaitan hasil, atau durasi akumulatif). Kombinasi 3x4 menghasilkan 12 konfigurasi tenses yang sistematis.",
                "formula": "TENSE = [Time: Past / Present / Future] x [Aspect: Simple / Continuous / Perfect / Perfect Continuous]",
                "examples": [
                        {
                                "sentence": "Present Simple: The earth revolves around the sun.",
                                "translation": "Bumi berputar mengelilingi matahari.",
                                "note": "Fakta abadi (Universal Truth)."
                        },
                        {
                                "sentence": "Present Continuous: Global emissions are increasing.",
                                "translation": "Emisi global sedang meningkat.",
                                "note": "Tren temporer saat ini."
                        },
                        {
                                "sentence": "Present Perfect: Scientists have mapped the human genome.",
                                "translation": "Para ilmuwan telah memetakan genom manusia.",
                                "note": "Hasil relevan hingga kini."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Prinsip Simple Aspect vs Continuous Aspect",
                "explanation": "Simple Aspect digunakan untuk kebenaran umum, hukum alam, jadwal tetap, dan fakta stabil. Continuous Aspect digunakan untuk situasi sementara (*temporary situations*), tren yang sedang berubah, atau aksi yang sedang terjadi tepat pada saat pembicaraan.",
                "formula": "Simple: Subject + V1(-s) / V2 | Continuous: Subject + BE + Verb-ing",
                "examples": [
                        {
                                "sentence": "The professor lectures in European history every semester.",
                                "translation": "Profesor tersebut memberi kuliah sejarah Eropa setiap semester.",
                                "note": "Simple: Rutinitas tetap."
                        },
                        {
                                "sentence": "The professor is currently lecturing in Hall A.",
                                "translation": "Profesor tersebut saat ini sedang memberi kuliah di Aula A.",
                                "note": "Continuous: Aktivitas tepat saat ini."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Sequence of Tenses dalam Kalimat Majemuk",
                "explanation": "Dalam kalimat majemuk bertingkat (Complex Sentences), jika induk kalimat berada dalam Past Tense, klausa bawahan secara umum harus diselaraskan ke dalam bentuk lampau (*Sequence of Tenses Rule*), kecuali jika membahas fakta abadi atau hukum alam yang tidak berubah.",
                "formula": "Past Main Clause + Past Subordinate Clause (Kecuali Universal Truth)",
                "examples": [
                        {
                                "sentence": "The researchers discovered that the polymer broke down under extreme heat.",
                                "translation": "Para peneliti menemukan bahwa polimer tersebut terurai di bawah panas ekstrem.",
                                "note": "discovered (Past) -> broke down (Past)."
                        },
                        {
                                "sentence": "Galileo demonstrated that the earth revolves around the sun.",
                                "translation": "Galileo mendemonstrasikan bahwa bumi berputar mengelilingi matahari.",
                                "note": "revolves tetap Present karena fakta universal."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Pembedaan Waktu Masa Depan (Future Modalities)",
                "explanation": "Bahasa Inggris membedakan 3 cara menyatakan masa depan: (1) *WILL* = Keputusan spontan, prediksi logis, atau janji formal; (2) *BE GOING TO* = Rencana/niat yang sudah diputuskan sebelumnya atau prediksi berdasarkan bukti fisik saat ini; (3) *PRESENT CONTINUOUS* = Jadwal perjanjian sosial yang sudah terorganisasi (*fixed arrangement*).",
                "formula": "Will (Prediksi/Spontan) | Be going to (Niat/Bukti Fisik) | Present Continuous (Jadwal Teratur)",
                "examples": [
                        {
                                "sentence": "Look at the barometric telemetry; a hurricane is going to hit the coastline.",
                                "translation": "Lihatlah telemetri barometrik; badai akan menghantam garis pantai.",
                                "note": "is going to hit = prediksi berbasis bukti visual/fisik nyata."
                        }
                ]
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
      id: "q-m22-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Identify the sentence containing an Adverbial Clause of Concession:",
      options: [
            "Even though the sample size was limited, the statistical findings achieved significance.",
            "The researcher who designed the questionnaire received an academic award.",
            "The committee discovered that the laboratory logs had been falsified.",
            "Where the tectonic plates converge, severe volcanic activity occurs regularly."
      ],
      correctAnswer: "Even though the sample size was limited, the statistical findings achieved significance.",
      explanation: "\"Even though the sample size was limited\" adalah Adverbial Clause of Concession (konsesi/pertentangan) yang diawali oleh subordinating conjunction *Even though*.",
      ruleReference: "Modul 22: Subordinate Clause Taxonomy"
},
      {
      id: "q-m22-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Which of the following examples is a grammatically complete Independent Clause?",
      options: [
            "Although the experimental results contradicted standard statistical models.",
            "The experimental results contradicted standard statistical models.",
            "Because the statistical models had not been calibrated properly.",
            "Which contradicted standard statistical models across all parameters."
      ],
      correctAnswer: "The experimental results contradicted standard statistical models.",
      explanation: "Independent Clause wajib memiliki Subject (\"The experimental results\") + Finite Verb (\"contradicted\") dan mampu berdiri sendiri sebagai kalimat lengkap tanpa subordinator pemotong makna seperti *Although*, *Because*, atau *Which*.",
      ruleReference: "Modul 22: Independent vs Dependent Clause Criteria"
},
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
      id: "err-m22-2",
      flawedSentence: "Although the data was robust. The committee rejected the manuscript.",
      flawLocation: "Although the data was robust.",
      correctedSentence: "Although the data was robust, the committee rejected the manuscript.",
      linguisticExplanation: "\"Although the data was robust\" adalah Dependent Clause (Sentence Fragment) yang tidak boleh diakhiri titik sendirian. Harus digabungkan dengan Independent Clause menggunakan tanda koma.",
      acceptedVariations: []
},
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
    stageNumber: 6,
    stageName: 'Tahap 6: Sintaksis, Dimensi Waktu & Pasif',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 23,
    title: 'The 5 Fundamental Sentence Patterns (S-V, S-V-O, S-V-C, S-V-IO-DO, S-V-O-OC)',
    subtitle: 'Arsitektur rangka dasar kalimat bahasa Inggris dari sederhana ke kompleks',
    levelBadge: 'Pola Kalimat · Modul 23',
    estimatedMinutes: 25,
    mentalModelIntro: 'Aspek Perfek (Perfect Aspect) adalah konsep "Jembatan Waktu". Present Perfect menghubungkan peristiwa masa lalu dengan relevansi masa kini. Past Perfect menghubungkan peristiwa lampau yang lebih dulu selesai sebelum peristiwa lampau lainnya terjadi.',
    coreConceptSummary: 'Present Perfect (have/has + V3) menekankan hasil atau pengalaman hidup. Past Perfect (had + V3) berfungsi sebagai "Past of the Past". Present Perfect Continuous (have/has been + V-ing) menekankan durasi proses yang masih berlangsung.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Present Perfect: Jembatan Waktu Masa Lalu ke Masa Kini",
                "explanation": "Present Perfect digunakan ketika waktu pasti masa lalu TIDAK DISEBUTKAN atau TIDAK PENTING; yang penting adalah dampak/relevansi hasilnya saat ini. DILARANG menggunakan Present Perfect dengan penanda waktu lampau spesifik seperti *yesterday, in 2020, two days ago* (wajib gunakan Simple Past).",
                "formula": "Subject + HAVE / HAS + Past Participle (V3)",
                "examples": [
                        {
                                "sentence": "The European Union has ratified the new biodiversity treaty.",
                                "translation": "Uni Eropa telah meratifikasi perjanjian keanekaragaman hayati baru tersebut.",
                                "note": "Hasil ratifikasi berlaku dan relevan sekarang."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The researchers have published the paper in 2021.",
                        "correctSentence": "The researchers published the paper in 2021.",
                        "linguisticReason": "Penanda waktu spesifik \"in 2021\" menutup jendela waktu sekarang, sehingga mewajibkan Simple Past \"published\", bukan Present Perfect."
                }
        },
        {
                "stepNumber": "02",
                "title": "Time Markers Presisi: SINCE vs FOR vs ALREADY/YET",
                "explanation": "*SINCE* digunakan untuk titik awal waktu spesifik (*since 2015, since Monday*). *FOR* digunakan untuk total durasi rentang waktu (*for five years, for two decades*). *ALREADY* untuk penegasan bahwa aksi sudah selesai lebih cepat dari dugaan; *YET* untuk kalimat negatif/tanya mengenai hal yang diharapkan terjadi.",
                "formula": "SINCE + [Titik Awal Waktu] | FOR + [Durasi Waktu]",
                "examples": [
                        {
                                "sentence": "The climate observatory has monitored carbon flux since 1998.",
                                "translation": "Observatorium iklim telah memantau fluks karbon sejak 1998.",
                                "note": "since 1998 (titik awal)."
                        },
                        {
                                "sentence": "The team has conducted field simulations for twelve consecutive weeks.",
                                "translation": "Tim telah melakukan simulasi lapangan selama dua belas minggu berturut-turut.",
                                "note": "for twelve weeks (durasi)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Past Perfect (HAD + V3): \"Past of the Past\"",
                "explanation": "Past Perfect digunakan ketika ada DUA peristiwa masa lalu, dan Anda perlu memperjelas peristiwa mana yang terjadi LEBIH DULU secara kronologis. Aksi yang terjadi lebih dulu menggunakan Past Perfect (*Had + V3*); aksi yang terjadi setelahnya menggunakan Simple Past (*V2*).",
                "formula": "[Aksi 1 Lebih Dulu: HAD + V3] ... before ... [Aksi 2 Menyusul: Simple Past / V2]",
                "examples": [
                        {
                                "sentence": "The virus had mutated significantly before scientists developed the vaccine.",
                                "translation": "Virus tersebut telah bermutasi secara signifikan sebelum para ilmuwan mengembangkan vaksin.",
                                "note": "had mutated (terjadi lebih dulu) -> developed (terjadi kemudian)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Present Perfect Continuous: Fokus Durasi & Akumulasi Proses",
                "explanation": "Present Perfect Continuous (*have/has been + V-ing*) digunakan untuk aksi yang dimulai di masa lalu, berlangsung terus-menerus tanpa henti, dan MASIH SEDANG BERLANGSUNG saat ini, atau baru saja berhenti dengan bukti fisik nyata yang tampak.",
                "formula": "Subject + HAVE / HAS + been + [Verb-ing] + since/for",
                "examples": [
                        {
                                "sentence": "Atmospheric scientists have been studying the melting of polar ice caps for decades.",
                                "translation": "Para ilmuwan atmosfer telah mempelajari pencairan tudung es kutub selama beberapa dekade.",
                                "note": "have been studying = proses berlanjut hingga saat ini."
                        }
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
      id: "q-m23-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Which of the following sentences exhibits the SVOO (Ditransitive) pattern?",
      options: [
            "The faculty awarded the outstanding graduate a prestigious research fellowship.",
            "The faculty considered the outstanding graduate extremely talented.",
            "The faculty elected the outstanding graduate department representative.",
            "The faculty grew increasingly concerned about graduate employment rates."
      ],
      correctAnswer: "The faculty awarded the outstanding graduate a prestigious research fellowship.",
      explanation: "Subject: \"The faculty\", Verb: \"awarded\", Indirect Object (Receiver): \"the outstanding graduate\", Direct Object (Entity): \"a prestigious research fellowship\".",
      ruleReference: "Modul 23: SVOO Ditransitive Ergonomics"
},
      {
      id: "q-m23-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Classify the structural pattern of the following sentence: \"The board appointed Dr. Sarah chief scientific officer.\"",
      options: [
            "SVOC (Subject + Verb + Object + Object Complement)",
            "SVOO (Subject + Verb + Indirect Object + Direct Object)",
            "SVO (Subject + Verb + Object)",
            "SVC (Subject + Verb + Subject Complement)"
      ],
      correctAnswer: "SVOC (Subject + Verb + Object + Object Complement)",
      explanation: "Subject: \"The board\", Verb: \"appointed\", Direct Object: \"Dr. Sarah\", Object Complement: \"chief scientific officer\" (menerangkan jabatan/identitas baru dari direct object).",
      ruleReference: "Modul 23: SVOC Structural Pattern"
},
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
      id: "err-m23-2",
      flawedSentence: "The board explained him the newly established safety protocol.",
      flawLocation: "explained him the",
      correctedSentence: "The board explained the newly established safety protocol to him.",
      linguisticExplanation: "Verba \"explain\" (serta *describe, suggest, introduce*) tidak mengikuti pola SVOO (*explain someone something* ❌). Pola yang wajib digunakan adalah **explain something to someone**.",
      acceptedVariations: []
},
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
    stageNumber: 6,
    stageName: 'Tahap 6: Sintaksis, Dimensi Waktu & Pasif',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 24,
    title: 'Subject-Verb Agreement Lanjutan (Intervening Phrases & Proximity)',
    subtitle: 'Menyelaraskan jumlah subjek dan menembus frasa sisipan panjang',
    levelBadge: 'S-V Agreement Lanjutan · Modul 24',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kalimat Pasif (Passive Voice) adalah instrumen utama gaya penulisan ilmiah objektif. Dalam laporan riset dan jurnal akademik, fokus diletakkan pada FENOMENA, DATA, atau PROSES, bukan pada siapa individu yang melakukannya. Menguasai pasif impersonal adalah ciri khas penulisan IELTS Band 8.0+.',
    coreConceptSummary: 'Rumus Pasif: Objek dinaikkan menjadi Subjek + [To Be sesuai Tense] + Past Participle (V3) + (by Agent). Impersonal Passive menggunakan konstruksi "It is argued/believed that..." atau "The trend is expected to...".',
    sections: [
        {
                "stepNumber": "01",
                "title": "Mekanisme Transformasi Aktif ke Pasif & Rumus BE + V3",
                "explanation": "Transformasi pasif mempromosikan Direct Object menjadi Subjek Gramatikal. Kata kerja utama diubah menjadi Past Participle (V3), dan To Be disisipkan dengan bentuk waktu (Tense) yang persis sama dengan verba aktif aslinya.",
                "formula": "Aktif: Subject + Verb + Object ----> Pasif: Object + [BE sesuai Tense] + Past Participle (V3) (+ by Agent)",
                "examples": [
                        {
                                "sentence": "Aktif: The epidemiologists isolated the viral strain in 2022.",
                                "translation": "Para ahli epidemiologi mengisolasi strain virus tersebut pada tahun 2022.",
                                "note": "Simple Past Aktif."
                        },
                        {
                                "sentence": "Pasif: The viral strain was isolated by the epidemiologists in 2022.",
                                "translation": "Strain virus tersebut diisolasi oleh para ahli epidemiologi pada tahun 2022.",
                                "note": "was isolated (was = To Be Simple Past + isolated V3)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Pasif pada Modals & Aspek Kontinu/Perfek",
                "explanation": "Rumus pasif berlaku di seluruh tenses: (1) Modal: *must be analyzed*; (2) Present Continuous: *is being evaluated*; (3) Past Continuous: *was being constructed*; (4) Present Perfect: *has been verified*; (5) Past Perfect: *had been documented*.",
                "formula": "Continuous Passive: BE + being + V3 | Perfect Passive: HAVE/HAS/HAD + been + V3 | Modal Passive: Modal + be + V3",
                "examples": [
                        {
                                "sentence": "The novel pharmaceutical compound is currently being evaluated in clinical trials.",
                                "translation": "Senyawa farmasi baru tersebut saat ini sedang dievaluasi dalam uji klinis.",
                                "note": "is being evaluated = Present Continuous Passive."
                        },
                        {
                                "sentence": "All statistical anomalies have been documented in the supplementary data.",
                                "translation": "Semua anomali statistik telah didokumentasikan dalam data tambahan.",
                                "note": "have been documented = Present Perfect Passive."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Impersonal Passive untuk Objektivitas Akademik",
                "explanation": "Impersonal Passive digunakan untuk melaporkan pendapat umum, teori ilmiah, atau konsensus pakar tanpa menyebutkan individu secara subjektif. Terdapat dua pola: Pola Dummy It (*It is believed that...*) dan Pola Subjek Dinaikkan (*The economy is predicted to expand...*).",
                "formula": "Pola 1: It is [thought / claimed / estimated / reported] that + [Clause] | Pola 2: Subject + is [thought / expected] + to [Infinitive]",
                "examples": [
                        {
                                "sentence": "It is widely acknowledged that climate change exacerbates extreme weather events.",
                                "translation": "Diakui secara luas bahwa perubahan iklim memperburuk peristiwa cuaca ekstrem.",
                                "note": "It is widely acknowledged that... (Impersonal Passive)."
                        },
                        {
                                "sentence": "Global urban populations are projected to increase by two billion by 2050.",
                                "translation": "Populasi perkotaan global diproyeksikan meningkat sebesar dua miliar pada tahun 2050.",
                                "note": "are projected to increase."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Kapan Menggunakan Pasif vs Aktif dalam Esai Akademik",
                "explanation": "Gunakan Pasif ketika: (1) Pelaku tidak diketahui atau tidak penting (*The artifact was discovered in 1920*); (2) Fokus riset adalah metodologi/proses (*The solution was heated to 100°C*); (3) Menjaga alur kohesi tema-rema. Hindari pasif jika membuat kalimat berbelit-belit tanpa alasan jelas.",
                "formula": "Fokus Metodologi & Objektivitas -> Pasif | Fokus Aksi & Kejelasan Argumen -> Aktif",
                "examples": [
                        {
                                "sentence": "The water samples were sterilized prior to microbiological culture.",
                                "translation": "Sampel air disterilkan sebelum pembiakan mikrobiologis.",
                                "note": "Metodologi laboratorium ideal menggunakan pasif."
                        }
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
      id: "q-m24-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Which sentence correctly adheres to the \"One of the [plural noun] who [verb]\" relative clause agreement rule?",
      options: [
            "She is one of the scholars who have pioneered quantum computing research.",
            "She is one of the scholars who has pioneered quantum computing research.",
            "She is the only one of the scholars who have received the Nobel prize.",
            "He is one of those employees that always arrives late."
      ],
      correctAnswer: "She is one of the scholars who have pioneered quantum computing research.",
      explanation: "Dalam pola \"one of the [plural noun] who...\", antecedent dari relative pronoun \"who\" adalah plural noun (\"scholars\"), sehingga verbanya wajib jamak (\"have pioneered\"). Sebaliknya, jika ada kata \"the only one of...\", antecedent-nya adalah singular \"one\" sehingga verbanya tunggal.",
      ruleReference: "Modul 24: Relative Clause Antecedent Concord Nuances"
},
      {
      id: "q-m24-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Select the sentence with correct Subject-Verb Agreement involving intervening parenthetical phrases:",
      options: [
            "The principal investigator, along with five post-doctoral researchers, has published the monograph.",
            "The principal investigator, along with five post-doctoral researchers, have published the monograph.",
            "The principal investigator, together with his team, are conducting the field trials.",
            "The principal investigator, as well as the lab assistants, were present at the conference."
      ],
      correctAnswer: "The principal investigator, along with five post-doctoral researchers, has published the monograph.",
      explanation: "Frasa sisipan seperti \"along with\", \"as well as\", dan \"together with\" adalah preposisi parentetikal dan BUKAN konjungsi penambah subjek. Subjek sejati tetaplah \"The principal investigator\" (tunggal), sehingga verba yang tepat adalah **has published**.",
      ruleReference: "Modul 24: Intervening Parenthetical Phrases and Concord"
},
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
      id: "err-m24-2",
      flawedSentence: "Ten kilometers are a formidable distance for novice marathon runners.",
      flawLocation: "are a formidable distance",
      correctedSentence: "Ten kilometers is a formidable distance for novice marathon runners.",
      linguisticExplanation: "Ukuran jarak, waktu, uang, dan berat (e.g. *ten kilometers, five years, one million dollars*) dipandang sebagai satu unit kesatuan tunggal dan membutuhkan verba singular \"is\".",
      acceptedVariations: []
},
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
    stageNumber: 6,
    stageName: 'Tahap 6: Sintaksis, Dimensi Waktu & Pasif',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 25,
    title: 'Sentence Errors Elimination: Fragments, Run-ons, dan Comma Splices',
    subtitle: 'Mendeteksi dan memperbaiki 3 kesalahan fatal penyambungan kalimat',
    levelBadge: 'Eliminasi Error · Modul 25',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kalimat Pengandaian (Conditionals) mengekspresikan spektrum probabilitas: dari hukum alam mutlak (Zero Conditional), kemungkinan nyata masa depan (First Conditional), hipotesis imajinatif saat ini (Second Conditional), penyesalan masa lalu (Third Conditional), hingga kondisi silang (Mixed Conditionals).',
    coreConceptSummary: 'Zero (If + Present, Present) = Fakta Alam. 1st (If + Present, Will + V1) = Peluang Nyata. 2nd (If + Past / were, Would + V1) = Hipotesis Sekarang. 3rd (If + Had V3, Would Have V3) = Pengandaian Masa Lalu. Inversi kondisional menghilangkan "If" untuk register tinggi.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Zero & First Conditionals: Realitas & Prediksi Nyata",
                "explanation": "Zero Conditional menyatakan hukum alam atau fakta sains universal di mana hasil pasti terjadi jika syarat terpenuhi (*If water reaches 100°C, it boils*). First Conditional menyatakan situasi nyata di masa depan yang memiliki probabilitas tinggi untuk terjadi jika kondisi terpenuhi (*If policy remains unchanged, emissions will rise*).",
                "formula": "Zero: If + Simple Present, + Simple Present | First: If + Simple Present, + WILL / CAN / MAY + V1",
                "examples": [
                        {
                                "sentence": "If atmospheric carbon concentration doubles, global temperatures increase inevitably.",
                                "translation": "Jika konsentrasi karbon atmosfer berlipat ganda, suhu global meningkat secara tak terhindarkan.",
                                "note": "Zero Conditional (Hukum Fisika/Iklim)."
                        },
                        {
                                "sentence": "If the government subsidizes renewable energy, clean technology adoption will accelerate.",
                                "translation": "Jika pemerintah mensubsidi energi terbarukan, adopsi teknologi bersih akan terakselerasi.",
                                "note": "First Conditional (Peluang nyata masa depan)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Second Conditional: Hipotesis Kontrafaktual Masa Kini",
                "explanation": "Second Conditional menyatakan situasi imajinatif atau tidak nyata pada masa sekarang (Unreal Present). Klausa IF menggunakan Past Subjunctive (di mana kata kerja To Be SELALU menggunakan \"were\" untuk semua subjek: *If I were, If she were*), dan klausa utama menggunakan *would / could / might + V1*.",
                "formula": "If + Past Subjunctive (V2 / were), + WOULD / COULD / MIGHT + Bare Infinitive (V1)",
                "examples": [
                        {
                                "sentence": "If the global community were more unified, international climate treaties would be enforceable.",
                                "translation": "Jika komunitas global lebih bersatu (faktanya saat ini tidak), perjanjian iklim internasional akan dapat ditegakkan.",
                                "note": "If community were... (Past Subjunctive)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Third Conditional & Mixed Conditionals: Evaluasi Masa Lalu & Silang Waktu",
                "explanation": "Third Conditional mengevaluasi pengandaian masa lalu yang sudah tidak bisa diubah (*If + had V3, would have V3*). Mixed Conditionals menggabungkan sebab masa lalu dengan akibat masa sekarang (*If we had invested in solar in 2010, we would be energy-independent today*).",
                "formula": "Third: If + HAD + V3, + WOULD HAVE + V3 | Mixed: If + HAD + V3, + WOULD + V1 (Today)",
                "examples": [
                        {
                                "sentence": "If the central bank had intervened earlier, the currency collapse would have been mitigated.",
                                "translation": "Jika bank sentral telah melakukan intervensi lebih awal, kejatuhan mata uang akan dapat diredam.",
                                "note": "Third Conditional murni (sebab masa lalu -> akibat masa lalu)."
                        },
                        {
                                "sentence": "If the ministry had preserved the mangroves, coastal villages would be safe from flooding today.",
                                "translation": "Jika kementerian telah melestarikan hutan bakau, desa-desa pesisir akan aman dari banjir hari ini.",
                                "note": "Mixed Conditional (sebab lampau -> akibat saat ini)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Inversi Kondisional Formal (Tanpa \"IF\")",
                "explanation": "Dalam penulisan akademik tingkat tinggi (IELTS Band 8.5+), kata \"IF\" dapat dihilangkan dengan melakukan Inversi Auxiliary-Subjek: (1) First: *Should you require further data...*; (2) Second: *Were the government to enact reforms...*; (3) Third: *Had the committee approved the grant...*.",
                "formula": "First: Should + Subj + V1 | Second: Were + Subj + to V1 / were + Subj | Third: Had + Subj + V3",
                "examples": [
                        {
                                "sentence": "Had the clinical trials been conducted over a longer duration, the side effects would have been identified.",
                                "translation": "Seandainya uji klinis telah dilakukan dalam durasi yang lebih lama, efek samping tersebut pasti sudah teridentifikasi.",
                                "note": "Had the trials been... = Inversi Third Conditional tanpa IF."
                        }
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
      id: "q-m25-3",
      category: "Sentence Architecture",
      difficulty: "Lanjutan",
      question: "Which of the following sentences correctly repairs a Comma Splice using appropriate punctuation?",
      options: [
            "The survey sample was representative; consequently, the statistical validity remained unquestioned.",
            "The survey sample was representative, consequently the statistical validity remained unquestioned.",
            "The survey sample was representative, the statistical validity remained unquestioned.",
            "The survey sample was representative; but the statistical validity remained unquestioned."
      ],
      correctAnswer: "The survey sample was representative; consequently, the statistical validity remained unquestioned.",
      explanation: "Ketika menghubungkan dua independent clause menggunakan conjunctive adverb seperti \"consequently\" atau \"however\", struktur wajibnya adalah **Semicolon + Conjunctive Adverb + Comma (; consequently, )**.",
      ruleReference: "Modul 25: Comma Splice and Conjunctive Adverb Mechanics"
},
      {
      id: "q-m25-2",
      category: "Sentence Architecture",
      difficulty: "Menengah",
      question: "Identify the sentence that is free from the Dangling Modifier error:",
      options: [
            "Having reviewed the experimental data thoroughly, the researchers drafted the manuscript.",
            "Having reviewed the experimental data thoroughly, the manuscript was drafted quickly.",
            "Walking into the laboratory, the anomalous smell was noticed immediately.",
            "To improve test accuracy, several recalibrations were conducted by the instrument."
      ],
      correctAnswer: "Having reviewed the experimental data thoroughly, the researchers drafted the manuscript.",
      explanation: "Pelaku dari frasa partisipial \"Having reviewed...\" adalah \"the researchers\". Subjek utama kalimat wajib diletakkan tepat setelah tanda koma agar modifier tidak \"menggantung\" (dangling).",
      ruleReference: "Modul 25: Dangling Modifier Correction"
},
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
      id: "err-m25-2",
      flawedSentence: "The thesis is well-researched, it provides groundbreaking empirical evidence.",
      flawLocation: "well-researched, it provides",
      correctedSentence: "The thesis is well-researched; it provides groundbreaking empirical evidence.",
      linguisticExplanation: "Menggabungkan dua independent clause hanya dengan tanda koma tanpa coordinating conjunction (FANBOYS) menghasilkan kesalahan Comma Splice. Gunakan Semicolon (;) atau tambahkan konjungsi \"and\".",
      acceptedVariations: [
            "The thesis is well-researched, and it provides groundbreaking empirical evidence."
      ]
},
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
    stageNumber: 7,
    stageName: 'Tahap 7: Modus Kondisional & Hipotesis',
    categoryKey: 'Tenses Logic',
    moduleNumber: 26,
    title: 'Present Dimensions: Simple, Continuous, Perfect, dan Perfect Continuous',
    subtitle: 'Fakta abadi, tren kontemporer, akumulasi pengalaman, dan durasi berkelanjutan',
    levelBadge: 'Dimensi Present · Modul 26',
    estimatedMinutes: 30,
    mentalModelIntro: 'Modus Subjungtif (Subjunctive Mood) digunakan untuk mengekspresikan urgensi, keharusan normatif, rekomendasi resmi, atau keinginan kontrafaktual. Penguasaan Mandative Subjunctive (menggunakan Bare Infinitive tanpa -s) adalah salah satu penanda akurasi tata bahasa tingkat lanjut.',
    coreConceptSummary: 'Mandative Subjunctive menggunakan Bare Infinitive setelah verba/adjektiva desakan (suggest, demand, insist, essential that). Were-Subjunctive digunakan untuk hipotesis kontrafaktual. Pola Wish memundurkan tenses satu tingkat ke masa lampau (Backshift).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Mandative Subjunctive: Kaidah Bare Infinitive Tanpa -s",
                "explanation": "Setelah verba desakan/anjuran (*demand, insist, propose, recommend, request, suggest, urge*) atau adjektiva esensial (*essential, crucial, imperative, vital, mandatory that*), kata kerja dalam that-clause WAJIB berbentuk Bare Infinitive (bentuk murni tanpa -s, tanpa -ed, tanpa to), terlepas dari apakah subjeknya tunggal atau jamak.",
                "formula": "Subject + DEMAND / SUGGEST / INSIST + that + Subject + [BARE INFINITIVE (V1)]",
                "examples": [
                        {
                                "sentence": "The ethics committee insisted that the lead investigator publish the raw telemetry data.",
                                "translation": "Komite etik bersikeras bahwa ketua peneliti harus mempublikasikan data telemetri mentah.",
                                "note": "that the investigator publish (BUKAN publishes)."
                        },
                        {
                                "sentence": "It is imperative that every participant remain in the sterile chamber.",
                                "translation": "Sangat penting bahwa setiap peserta tetap berada di ruang steril.",
                                "note": "that every participant remain (BUKAN remains)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The dean recommended that the student submits the thesis on time.",
                        "correctSentence": "The dean recommended that the student submit the thesis on time.",
                        "linguisticReason": "Struktur Mandative Subjunctive mewajibkan Bare Infinitive \"submit\" tanpa akhiran -s pada klausa setelah recommended that."
                }
        },
        {
                "stepNumber": "02",
                "title": "Past Subjunctive (Were-Subjunctive)",
                "explanation": "Past Subjunctive menggunakan bentuk \"WERE\" untuk semua subjek (I, He, She, It) dalam klausa pengandaian atau perumpamaan kontrafaktual (*as if, as though, if only*).",
                "formula": "Subject + WISH / AS IF + Subject + WERE [Adjective/Noun]",
                "examples": [
                        {
                                "sentence": "The econometric model behaves as if market conditions were perfectly competitive.",
                                "translation": "Model ekonometrik tersebut berperilaku seolah-olah kondisi pasar bersaing sempurna.",
                                "note": "as if market conditions were... (kontrafaktual)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Konstruksi WISH & IF ONLY: Mekanisme Mundur Waktu (Backshift)",
                "explanation": "Struktur *Wish* mengekspresikan keinginan yang berlawanan dengan kenyataan. Waktu saat ini dimundurkan menjadi Simple Past (*I wish I knew*). Waktu masa lalu dimundurkan menjadi Past Perfect (*I wish I had studied*). Keinginan mengubah perilaku orang lain menggunakan *would + V1*.",
                "formula": "Present Unreal: Wish + Simple Past | Past Unreal: Wish + Past Perfect (Had + V3)",
                "examples": [
                        {
                                "sentence": "Policymakers wish that renewable transition costs were lower.",
                                "translation": "Pembuat kebijakan berharap biaya transisi terbarukan lebih rendah (faktanya saat ini tinggi).",
                                "note": "wish ... were lower (Present Unreal)."
                        },
                        {
                                "sentence": "Environmentalists wish that governments had implemented carbon taxes decades ago.",
                                "translation": "Pemerhati lingkungan berharap pemerintah telah menerapkan pajak karbon beberapa dekade lalu.",
                                "note": "wish ... had implemented (Past Unreal)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Konstruksi \"It is high time that...\"",
                "explanation": "Idiom formal \"It is high time that...\" (Sudah saatnya/sudah terlambat bagi...) secara gramatikal mewajibkan verba dalam bentuk Simple Past (V2) untuk menandai urgensi tindakan yang sudah tertunda.",
                "formula": "It is high time (that) + Subject + [SIMPLE PAST VERB (V2)]",
                "examples": [
                        {
                                "sentence": "It is high time that international agencies reformed the global financial architecture.",
                                "translation": "Sudah saatnya badan-badan internasional mereformasi arsitektur keuangan global.",
                                "note": "It is high time ... reformed (V2)."
                        }
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
      id: "q-m26-3",
      category: "Tenses Logic",
      difficulty: "Lanjutan",
      question: "Which sentence correctly demonstrates the \"Timeless Academic Present\" (Literary/Scientific Present)?",
      options: [
            "In his groundbreaking 1905 paper, Einstein posits that the speed of light is constant in all inertial frames.",
            "In his groundbreaking 1905 paper, Einstein was positing that the speed of light was constant.",
            "In his groundbreaking 1905 paper, Einstein has posited that the speed of light had been constant.",
            "In his groundbreaking 1905 paper, Einstein is posited that the speed of light is constant."
      ],
      correctAnswer: "In his groundbreaking 1905 paper, Einstein posits that the speed of light is constant in all inertial frames.",
      explanation: "Dalam penulisan esai akademik dan sitasi ilmiah (IELTS Task 2 & TOEFL Writing), teori atau klaim literatur yang masih berlaku hingga kini disitasi menggunakan **Simple Present Tense** (*posits, argues, demonstrates*).",
      ruleReference: "Modul 26: The Academic / Literary Present"
},
      {
      id: "q-m26-2",
      category: "Tenses Logic",
      difficulty: "Menengah",
      question: "Choose the sentence that correctly uses the Present Perfect Continuous to emphasize duration and visible current evidence:",
      options: [
            "The engineering department has been developing this aerospace turbine for five consecutive years.",
            "The engineering department is developing this aerospace turbine since five years.",
            "The engineering department has developed this aerospace turbine since five years ago continuously.",
            "The engineering department had been developing this aerospace turbine for five years now."
      ],
      correctAnswer: "The engineering department has been developing this aerospace turbine for five consecutive years.",
      explanation: "Present Perfect Continuous (**has/have been + V-ing**) digunakan untuk menekankan kontinuitas durasi aksi yang dimulai di masa lampau dan masih terus berlangsung hingga saat ini.",
      ruleReference: "Modul 26: Present Perfect Continuous Aspect"
},
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
      id: "err-m26-2",
      flawedSentence: "I am living in Oxford since three years.",
      flawLocation: "am living ... since three years",
      correctedSentence: "I have been living in Oxford for three years.",
      linguisticExplanation: "Untuk durasi rentang waktu (\"tiga tahun\"), gunakan preposisi **for** (bukan *since*) dan tenses **Present Perfect Continuous** (bukan *am living*). *Since* hanya untuk titik awal waktu (*since 2021*).",
      acceptedVariations: [
            "I have lived in Oxford for three years."
      ]
},
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
    stageNumber: 7,
    stageName: 'Tahap 7: Modus Kondisional & Hipotesis',
    categoryKey: 'Tenses Logic',
    moduleNumber: 27,
    title: 'Past Dimensions: Simple Past, Past Continuous, Past Perfect, dan Past Perfect Continuous',
    subtitle: 'Kronologi peristiwa lampau, interupsi latar belakang, dan aksi terdahulu',
    levelBadge: 'Dimensi Past · Modul 27',
    estimatedMinutes: 30,
    mentalModelIntro: 'Pembentukan kalimat tanya dalam bahasa Inggris diatur oleh aturan inversi subjek-kata kerja bantu. Dalam penulisan akademik, Anda akan sering menggunakan Indirect/Embedded Questions untuk menjaga kesantunan dan formalitas ilmiah saat merumuskan pertanyaan penelitian (Research Questions).',
    coreConceptSummary: 'Direct Questions melakukan inversi (Auxiliary + Subject + Verb). Indirect/Embedded Questions MENGEMBALIKAN urutan kata menjadi kalimat deklaratif normal (Subject + Verb). Subject Questions tidak memerlukan do-support.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Inversi Auxiliary-Subjek pada Kalimat Tanya Langsung (Direct Questions)",
                "explanation": "Kalimat tanya langsung mewajibkan Auxiliary Verb (Do/Be/Have/Modal) melompat ke posisi sebelum Subjek. Jika kalimat tidak memiliki auxiliary, operator Do-Support (Do/Does/Did) wajib disisipkan.",
                "formula": "[Question Word / WH] + [AUXILIARY VERB] + [SUBJECT] + [MAIN VERB]?",
                "examples": [
                        {
                                "sentence": "Why did the telemetry sensors record abnormal radiation spikes?",
                                "translation": "Mengapa sensor telemetri merekam lonjakan radiasi abnormal?",
                                "note": "Why + did (Aux) + sensors (Subj) + record (V1)?"
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Indirect / Embedded Questions: Aturan Pengembalian Urutan S+V",
                "explanation": "Ketika sebuah pertanyaan disematkan di dalam kalimat lain (*Could you explain..., The study investigated...*), struktur kalimatnya BERUBAH MENJADI PERNYATAAN DEKLARATIF NORMAL (Subject + Verb). DILARANG melakukan inversi auxiliary atau menggunakan do/does/did dalam embedded question!",
                "formula": "Introductory Phrase + WH-word / if / whether + [SUBJECT] + [FINITE VERB] (Tanpa Inversi)",
                "examples": [
                        {
                                "sentence": "The researchers investigated how the viral pathogen enters human cells.",
                                "translation": "Para peneliti menyelidiki bagaimana patogen virus tersebut memasuki sel manusia.",
                                "note": "how + pathogen (S) + enters (V) - BUKAN how does the pathogen enter."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The study analyzed why did the economic policy fail.",
                        "correctSentence": "The study analyzed why the economic policy failed.",
                        "linguisticReason": "Dalam klausa tertanam (Embedded Question), urutan kata harus kembali ke susunan deklaratif normal Subjek + Verba tanpa do-support \"did\"."
                }
        },
        {
                "stepNumber": "03",
                "title": "Tag Questions: Polaritas Berlawanan & Intonasi",
                "explanation": "Question Tags menggunakan Auxiliary yang sesuai dengan verba utama dengan polaritas berlawanan: Kalimat Positif menuntut Tag Negatif (*The data is conclusive, isn't it?*); Kalimat Negatif menuntut Tag Positif (*The vaccine hasn't failed, has it?*).",
                "formula": "Positive Statement, + Negative Tag? | Negative Statement, + Positive Tag?",
                "examples": [
                        {
                                "sentence": "The empirical methodology adheres to international standards, doesn't it?",
                                "translation": "Metodologi empiris tersebut mematuhi standar internasional, bukan?",
                                "note": "adheres (Present) -> doesn't it?"
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Pertanyaan Subjek vs Pertanyaan Objek",
                "explanation": "Ketika kata tanya WH (Who/What/Which) bertindak sebagai SUBJEK dari kalimat, DILARANG menggunakan operator Do-Support (Do/Does/Did). Urutan kata persis seperti kalimat deklaratif positif.",
                "formula": "Subject Question: WHO / WHAT + [VERB] + [OBJECT]? (Tanpa Do/Does/Did)",
                "examples": [
                        {
                                "sentence": "Who discovered the Higgs boson particle at CERN?",
                                "translation": "Siapa yang menemukan partikel Higgs boson di CERN?",
                                "note": "Who discovered (bukan Who did discover)."
                        },
                        {
                                "sentence": "What caused the unexpected market volatility?",
                                "translation": "Apa yang menyebabkan volatilitas pasar yang tak terduga itu?",
                                "note": "What caused (bukan What did cause)."
                        }
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
      id: "q-m27-3",
      category: "Tenses Logic",
      difficulty: "Lanjutan",
      question: "Which sentence correctly employs \"used to\" versus \"would\" for past states versus repeated past actions?",
      options: [
            "The historic university town used to have a flourishing textile trade in the nineteenth century.",
            "The historic university town would have a flourishing textile trade in the nineteenth century.",
            "The historic university town was used to have a flourishing textile trade.",
            "The historic university town used to having a flourishing textile trade."
      ],
      correctAnswer: "The historic university town used to have a flourishing textile trade in the nineteenth century.",
      explanation: "Untuk menyatakan **stative conditions** (kondisi/keadaan statis di masa lampau seperti kepemilikan/eksistensi), kita HANYA boleh menggunakan **used to** (BUKAN *would*). *Would* hanya digunakan untuk *repeated dynamic actions* (kebiasaan berulang).",
      ruleReference: "Modul 27: Used to vs Would in Historical Registers"
},
      {
      id: "q-m27-2",
      category: "Tenses Logic",
      difficulty: "Menengah",
      question: "Identify the sentence that correctly uses the Past Perfect to establish chronological priority between two past events:",
      options: [
            "By the time the emergency response team arrived, the fire had consumed the warehouse archives.",
            "By the time the emergency response team had arrived, the fire consumed the warehouse archives.",
            "By the time the emergency response team arrived, the fire has consumed the warehouse archives.",
            "When the emergency response team was arriving, the fire already consumed the warehouse archives."
      ],
      correctAnswer: "By the time the emergency response team arrived, the fire had consumed the warehouse archives.",
      explanation: "Peristiwa yang terjadi lebih dulu di masa lampau (kebakaran melalap arsip) wajib menggunakan **Past Perfect (had consumed)**, sedangkan peristiwa masa lampau yang menyusul (tim damkar tiba) menggunakan **Simple Past (arrived)**.",
      ruleReference: "Modul 27: Past Perfect Temporal Sequencing"
},
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
      id: "err-m27-2",
      flawedSentence: "The laboratory technician had completed the titration yesterday.",
      flawLocation: "had completed ... yesterday",
      correctedSentence: "The laboratory technician completed the titration yesterday.",
      linguisticExplanation: "Ketika keterangan waktu lampau spesifik disebutkan (\"yesterday\"), gunakan **Simple Past**, bukan Past Perfect. Past Perfect hanya digunakan jika ada keterkaitan sebelum peristiwa lampau lainnya.",
      acceptedVariations: []
},
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
    stageNumber: 8,
    stageName: 'Tahap 8: Transformasi Klausa & Inversi',
    categoryKey: 'Tenses Logic',
    moduleNumber: 28,
    title: 'Future Dimensions: Will, Be Going To, Future Continuous, dan Future Perfect',
    subtitle: 'Prediksi teoretis, rencana konkret, proyeksi proses, dan target tuntas batas waktu',
    levelBadge: 'Dimensi Future · Modul 28',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kalimat Tidak Langsung (Reported Speech) digunakan dalam sintesis literatur akademik untuk mengutip dan mengintegrasikan temuan peneliti lain. Pemilihan Reporting Verbs yang bernuansa presisi (*assert, dispute, concede, demonstrate*) meningkatkan kualitas analisis literatur.',
    coreConceptSummary: 'Prinsip Backshift memundurkan tenses satu tingkat ke masa lampau ketika reporting verb berbentuk lampau (*said, found*). Deiksis waktu dan tempat disesuaikan. Pengecualian backshift berlaku untuk fakta ilmiah abadi.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Prinsip Backshift of Tenses pada Reporting Verbs Lampau",
                "explanation": "Ketika Reporting Verb berada dalam Past Tense (*said, stated, observed, reported*), seluruh tenses dalam klausa yang dilaporkan secara otomatis dimundurkan satu tingkat ke masa lampau: Present Simple -> Past Simple; Present Continuous -> Past Continuous; Present Perfect / Past Simple -> Past Perfect; Will -> Would; Can -> Could.",
                "formula": "Direct: \"The model is accurate\" -> Reported: He stated that the model was accurate.",
                "examples": [
                        {
                                "sentence": "Direct: \"We have completed the sequencing,\" the lead geneticist announced.",
                                "translation": "\"Kami telah menyelesaikan pengurutan,\" umumkan ketua ahli genetika itu.",
                                "note": "Direct speech."
                        },
                        {
                                "sentence": "Reported: The lead geneticist announced that they had completed the sequencing.",
                                "translation": "Ketua ahli genetika tersebut mengumumkan bahwa mereka telah menyelesaikan pengurutan itu.",
                                "note": "have completed -> had completed (Backshift)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Pengecualian Backshift: Kebenaran Abadi & Fakta Universal",
                "explanation": "Jika informasi yang dilaporkan adalah hukum alam, fakta ilmiah abadi, atau situasi yang masih 100% berlaku saat ini, Backshift TIDAK DILAKUKAN. Kata kerja tetap dipertahankan dalam Present Tense.",
                "formula": "Past Reporting Verb + that + [UNIVERSAL TRUTH DALAM PRESENT TENSE]",
                "examples": [
                        {
                                "sentence": "Newton demonstrated that gravitational force decreases with the square of the distance.",
                                "translation": "Newton mendemonstrasikan bahwa gaya gravitasi berkurang seiring kuadrat jarak.",
                                "note": "decreases tetap Present Tense karena hukum fisika universal."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Penyesuaian Deiksis Waktu, Tempat, dan Pronomina (Deictic Shifts)",
                "explanation": "Deiksis (rujukan spasial dan temporal) wajib disesuaikan dari sudut pandang pembicara saat ini: *now -> then/at that time*, *today -> that day*, *yesterday -> the previous day / the day before*, *tomorrow -> the following day*, *here -> there*, *this -> that*.",
                "formula": "now -> then | today -> that day | tomorrow -> the following day | here -> there",
                "examples": [
                        {
                                "sentence": "The director confirmed that the symposium would take place the following month.",
                                "translation": "Direktur mengonfirmasi bahwa simposium tersebut akan berlangsung pada bulan berikutnya.",
                                "note": "would take place the following month (bukan next month)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Reporting Verbs Akademik Tingkat Tinggi & Pola Sintaksisnya",
                "explanation": "Hindari repetisi kata \"said\" atau \"told\" dalam esai akademik. Gunakan Reporting Verbs yang merefleksikan sikap kritis: (1) Verb + that-clause (*argue, assert, demonstrate, hypothesize*); (2) Verb + Object + to-infinitive (*urge, advise, encourage*); (3) Verb + Gerund (*admit, deny, recommend*).",
                "formula": "Academic Verbs: hypothesize / contend / demonstrate / emphasize that...",
                "examples": [
                        {
                                "sentence": "Vance (2022) contended that macroeconomic inflation stems primarily from supply chain bottlenecks.",
                                "translation": "Vance (2022) menegaskan bahwa inflasi makroekonomi terutama berasal dari kemacetan rantai pasok.",
                                "note": "contended that = klaim akademik formal."
                        }
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
      id: "q-m28-3",
      category: "Tenses Logic",
      difficulty: "Lanjutan",
      question: "Which sentence correctly follows the future time clause rule (subordinate clause after \"as soon as\", \"when\", \"until\")?",
      options: [
            "The clinical trial will proceed as soon as the regulatory authority grants ethical clearance.",
            "The clinical trial will proceed as soon as the regulatory authority will grant ethical clearance.",
            "The clinical trial proceeds as soon as the regulatory authority will have granted ethical clearance.",
            "The clinical trial will have proceeded as soon as the regulatory authority shall grant clearance."
      ],
      correctAnswer: "The clinical trial will proceed as soon as the regulatory authority grants ethical clearance.",
      explanation: "Dalam anak kalimat keterangan waktu masa depan (*Future Time Clause* setelah *when, as soon as, before, until*), verba TIDAK boleh menggunakan *will*, melainkan wajib menggunakan **Simple Present (grants)**.",
      ruleReference: "Modul 28: Future Time Clauses and Present Indicative Rule"
},
      {
      id: "q-m28-2",
      category: "Tenses Logic",
      difficulty: "Menengah",
      question: "Choose the sentence that correctly applies the Future Perfect tense for a future milestone:",
      options: [
            "By the end of this decade, artificial intelligence will have transformed medical diagnostic procedures.",
            "By the end of this decade, artificial intelligence will transform medical diagnostic procedures.",
            "By the end of this decade, artificial intelligence is going to have transform medical diagnostic procedures.",
            "By the end of this decade, artificial intelligence will be transformed medical diagnostic procedures."
      ],
      correctAnswer: "By the end of this decade, artificial intelligence will have transformed medical diagnostic procedures.",
      explanation: "Frasa penanda batas waktu masa depan \"By + [future time]\" menuntut penggunaan **Future Perfect (will have + V3)** untuk menunjukkan bahwa aksi tersebut akan telah tuntas sebelum batas waktu tersebut tercapai.",
      ruleReference: "Modul 28: Future Perfect Milestone Constructions"
},
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
      id: "err-m28-2",
      flawedSentence: "When the international delegates will arrive tomorrow, we will start the summit.",
      flawLocation: "will arrive",
      correctedSentence: "When the international delegates arrive tomorrow, we will start the summit.",
      linguisticExplanation: "Dalam anak kalimat keterangan waktu (Time Clause setelah *when, as soon as, before*), gunakan Simple Present (*arrive*), bukan modal *will*.",
      acceptedVariations: []
},
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
    stageNumber: 8,
    stageName: 'Tahap 8: Transformasi Klausa & Inversi',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 29,
    title: 'Passive Voice Transformation & Stative Passive Structures',
    subtitle: 'Objektivitas penulisan ilmiah, agen tersembunyi, dan impersonal passive',
    levelBadge: 'Kalimat Pasif · Modul 29',
    estimatedMinutes: 30,
    mentalModelIntro: 'Klausa Relatif (Adjective Clauses) adalah alat sintaksis untuk memberikan informasi detail tentang kata benda tanpa harus membuat kalimat baru. Anda harus mampu membedakan secara tegas antara Defining Relative Clauses (informasi pembatas esensial tanpa koma) dan Non-Defining Relative Clauses (informasi tambahan berapit koma).',
    coreConceptSummary: 'Defining Clauses menentukan identitas subjek (who, which, that) tanpa tanda koma. Non-Defining Clauses memberikan keterangan ekstra berapit koma (DILARANG menggunakan "that"). Contact Clauses menghilangkan pronoun objek.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Defining Relative Clauses: Pembatas Identitas Esensial",
                "explanation": "Defining (Restrictive) Relative Clause memberikan informasi esensial yang menentukan identitas kata benda yang diterangkan. Jika klausa ini dihilangkan, makna kalimat menjadi rancu atau tidak lengkap. DILARANG menggunakan tanda koma pada Defining Clauses. Kata ganti yang sah: *who* (orang), *which/that* (benda).",
                "formula": "Head Noun + [who / which / that + Clause] (TANPA TANDA KOMA)",
                "examples": [
                        {
                                "sentence": "The participants who adhered strictly to the dietary protocol exhibited significant biometric improvement.",
                                "translation": "Para peserta yang mematuhi protokol diet secara ketat menunjukkan perbaikan biometrik yang signifikan.",
                                "note": "Defining: Hanya peserta yang mematuhi diet yang mengalami perbaikan (tanpa koma)."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Non-Defining Relative Clauses: Keterangan Ekstra Berapit Koma",
                "explanation": "Non-Defining (Non-Restrictive) Relative Clause memberikan informasi tambahan non-esensial tentang kata benda yang identitasnya sudah jelas spesifik (seperti Proper Nouns). Klausa ini WAJIB diapit tanda koma, dan DILARANG KERAS menggunakan kata ganti \"THAT\" (wajib gunakan *who* atau *which*).",
                "formula": "Head Noun, + [who / which + Clause], + Main Predicate (DILARANG MENGGUNAKAN THAT ❌)",
                "examples": [
                        {
                                "sentence": "Oxford University, which was founded in the eleventh century, is renowned for academic rigor.",
                                "translation": "Universitas Oxford, yang didirikan pada abad ke-sebelas, terkenal akan keunggulan akademisnya.",
                                "note": "which was founded... diapit koma (BUKAN that was founded)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Professor Aris, that teaches bioethics, published a new paper.",
                        "correctSentence": "Professor Aris, who teaches bioethics, published a new paper.",
                        "linguisticReason": "Pada klausa non-defining berapit koma, kata ganti \"that\" tidak pernah boleh digunakan; gunakan \"who\" untuk manusia."
                }
        },
        {
                "stepNumber": "03",
                "title": "Kasus Pronominal Relatif: WHOM, WHOSE, dan Preposisi di Depan (Pied-Piping)",
                "explanation": "*WHOM* digunakan ketika kata ganti bertindak sebagai objek verba atau objek preposisi. *WHOSE* digunakan untuk kepemilikan. Dalam register akademik formal, preposisi ditarik ke depan kata ganti relatif (Pola *Pied-Piping*: *in which, to whom, with which*), alih-alih dibiarkan menggantung di akhir kalimat (*Preposition Stranding*).",
                "formula": "Formal Pied-Piping: Preposition + WHOM / WHICH + Subject + Verb",
                "examples": [
                        {
                                "sentence": "The theoretical framework in which the researchers operated required substantial revision.",
                                "translation": "Kerangka teoretis di mana para peneliti beroperasi membutuhkan revisi substansial.",
                                "note": "in which (sangat formal) alih-alih which the researchers operated in."
                        },
                        {
                                "sentence": "The patient whose clinical telemetry was abnormal was admitted immediately.",
                                "translation": "Pasien yang telemetri klinisnya abnormal segera dirawat.",
                                "note": "whose = kepemilikan telemetri."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Contact Clauses (Penanggalan Pronoun Relatif Objek)",
                "explanation": "Ketika Relative Pronoun (*who, which, that, whom*) bertindak sebagai OBJEK di dalam Defining Relative Clause, kata ganti tersebut dapat dihilangkan sepenuhnya (Zero Relative / Contact Clause) untuk meningkatkan kelancaran membaca.",
                "formula": "Noun + [Subject + Verb] (Relative pronoun dihilangkan)",
                "examples": [
                        {
                                "sentence": "The methodology [that] the scientists utilized proved remarkably cost-effective.",
                                "translation": "Metodologi yang dimanfaatkan para ilmuwan tersebut terbukti sangat hemat biaya.",
                                "note": "that dapat dihilangkan secara elegan: The methodology the scientists utilized..."
                        }
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
      id: "q-m29-3",
      category: "Complex Structures",
      difficulty: "Lanjutan",
      question: "Identify the sentence where an intransitive verb is incorrectly passivized:",
      options: [
            "The catastrophic volcanic eruption was occurred in the late afternoon.",
            "The catastrophic volcanic eruption occurred in the late afternoon.",
            "The experimental hypothesis was thoroughly tested by the team.",
            "The preliminary findings were confirmed during peer review."
      ],
      correctAnswer: "The catastrophic volcanic eruption was occurred in the late afternoon.",
      explanation: "Verba intransitif seperti *occur, happen, exist, vanish, arrive* tidak memiliki objek langsung dan **TIDAK PERNAH BISA DIJADIKAN PASIF** (*was occurred ❌ ➔ occurred ✔️*). Ini adalah salah satu kesalahan paling fatal dalam esai IELTS/TOEFL.",
      ruleReference: "Modul 29: Non-Passivizable Intransitive Verbs"
},
      {
      id: "q-m29-2",
      category: "Complex Structures",
      difficulty: "Menengah",
      question: "Convert the active sentence into impersonal academic passive: \"Scholars believe that climate change exacerbates extreme weather events.\"",
      options: [
            "It is believed that climate change exacerbates extreme weather events.",
            "Climate change was believed to exacerbate extreme weather events.",
            "Extreme weather events are believed to be exacerbated by climate change by scholars.",
            "It was believed that extreme weather events exacerbated climate change."
      ],
      correctAnswer: "It is believed that climate change exacerbates extreme weather events.",
      explanation: "Impersonal passive menggunakan struktur **It + is + V3 (believed/thought/hypothesized) + that clause** untuk menjaga nada objektif tanpa menyebutkan pelaku secara eksplisit.",
      ruleReference: "Modul 29: Impersonal Reporting Passive in Academic Writing"
},
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
      id: "err-m29-2",
      flawedSentence: "The solar eclipse was occurred without significant cloud obstruction.",
      flawLocation: "was occurred",
      correctedSentence: "The solar eclipse occurred without significant cloud obstruction.",
      linguisticExplanation: "\"Occur\" adalah Intransitive Verb murni dan tidak pernah memiliki bentuk pasif (*was occurred* ❌).",
      acceptedVariations: [
            "The solar eclipse took place without significant cloud obstruction."
      ]
},
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
    stageNumber: 8,
    stageName: 'Tahap 8: Transformasi Klausa & Inversi',
    categoryKey: 'Complex Structures',
    moduleNumber: 30,
    title: 'Conditionals Logic: Zero, First, Second, Third, dan Mixed Conditionals',
    subtitle: 'Pengandaian ilmiah, kemungkinan masa depan, hipotesis imajinatif, dan penyesalan lampau',
    levelBadge: 'Kalimat Pengandaian · Modul 30',
    estimatedMinutes: 30,
    mentalModelIntro: 'Inversi (Inversion) adalah pembalikan posisi normal subjek dan kata kerja bantu (Auxiliary Verb mendahului Subjek) untuk memberikan penekanan retoris yang dramatis, formal, dan berbobot tinggi. Ini adalah salah satu struktur gramatikal puncak (Band 8.5–9.0 IELTS) yang membedakan penutur mahir.',
    coreConceptSummary: 'Negative Inversion dipicu ketika frasa adverbial negatif diletakkan di awal kalimat (Hardly, Seldom, Rarely, Never before, Under no circumstances). Inversi juga berlaku pada konstruksi Not only... but also dan inversi kondisional.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Inversi Bersyarat setelah Negative & Limiting Adverbials",
                "explanation": "Ketika kata keterangan bernuansa negatif atau pembatas (*Hardly, Scarcely, Seldom, Rarely, Barely, Never before, Little, Under no circumstances, In no way*) ditarik ke awal kalimat untuk penekanan (Fronting), pola kalimat WAJIB diinversikan menjadi format pertanyaan: [Negative Adverb] + [Auxiliary Verb] + [Subject] + [Main Verb].",
                "formula": "[Negative Adverbial] + [AUXILIARY VERB] + [SUBJECT] + [MAIN VERB]",
                "examples": [
                        {
                                "sentence": "Seldom have economic researchers observed such rapid market volatility.",
                                "translation": "Jarang sekali para peneliti ekonomi mengamati volatilitas pasar yang secepat itu.",
                                "note": "Seldom + have (Aux) + researchers (Subj) + observed (V3)."
                        },
                        {
                                "sentence": "Under no circumstances should the sterile seal be broken.",
                                "translation": "Dalam keadaan apa pun segel steril tersebut tidak boleh dirusak.",
                                "note": "Under no circumstances + should (Aux) + seal (Subj) + be broken."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "Rarely the committee approves proposals without extensive revisions.",
                        "correctSentence": "Rarely does the committee approve proposals without extensive revisions.",
                        "linguisticReason": "Penempatan \"Rarely\" di awal kalimat mewajibkan inversi auxiliary \"does\" mendahului subjek \"the committee\"."
                }
        },
        {
                "stepNumber": "02",
                "title": "Inversi Konstruksi \"Not only ... but also\" & \"No sooner ... than\"",
                "explanation": "Konstruksi *Not only* di awal kalimat memicu inversi pada klausa pertama. Konstruksi *No sooner* mewajibkan Past Perfect berinversi pada klausa pertama dan dipasangkan dengan *than* pada klausa kedua.",
                "formula": "Not only + [Aux + Subj + Verb], but + [Subj + also + Verb] | No sooner + HAD + [Subj + V3] + than + [Simple Past Clause]",
                "examples": [
                        {
                                "sentence": "Not only did the renewable initiative reduce emissions, but it also lowered energy costs.",
                                "translation": "Inisiatif terbarukan itu tidak hanya mengurangi emisi, tetapi juga menurunkan biaya energi.",
                                "note": "Not only did the initiative reduce... (Inversi)."
                        },
                        {
                                "sentence": "No sooner had the consortium published the study than international media covered the breakthrough.",
                                "translation": "Tidak lama setelah konsorsium menerbitkan studi tersebut, media internasional langsung meliput terobosan itu.",
                                "note": "No sooner had [consortium] published ... than..."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Inversi Kondisional Tanpa \"IF\" (Had / Were / Should)",
                "explanation": "Dalam ragam formal tingkat tinggi, kalimat pengandaian dapat diinversikan dengan membuang kata \"IF\" dan memajukan auxiliary ke awal: (1) *Had we known...* (Third Conditional); (2) *Were the policy to fail...* (Second Conditional); (3) *Should you require assistance...* (First Conditional).",
                "formula": "Had + Subj + V3 | Were + Subj + to V1 | Should + Subj + V1",
                "examples": [
                        {
                                "sentence": "Had the epidemiological data been analyzed earlier, thousands of lives would have been spared.",
                                "translation": "Seandainya data epidemiologi telah dianalisis lebih awal, ribuan nyawa akan dapat diselamatkan.",
                                "note": "Inversi Third Conditional elegan."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Fronting Lokatif & Adverbial Arah (Full Inversion)",
                "explanation": "Ketika frasa preposisional tempat atau arah ditarik ke depan kalimat untuk menciptakan variasi deskriptif yang dramatis, terjadi Inversi Penuh (Full Inversion), di mana seluruh Main Verb mendahului subjek tanpa do-support.",
                "formula": "[Prepositional Phrase of Place/Direction] + [MAIN VERB] + [SUBJECT NOUN]",
                "examples": [
                        {
                                "sentence": "At the center of the debate lies the issue of genetic modification ethics.",
                                "translation": "Di pusat perdebatan tersebut terletak masalah etika modifikasi genetika.",
                                "note": "At the center... lies (V) + the issue (S)."
                        }
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
      id: "q-m30-3",
      category: "Complex Structures",
      difficulty: "Lanjutan",
      question: "Which of the following inverted conditional structures correctly replaces \"If the government were to implement this policy\"?",
      options: [
            "Were the government to implement this policy, economic expansion would accelerate.",
            "Had the government to implement this policy, economic expansion would accelerate.",
            "Should the government implemented this policy, economic expansion would accelerate.",
            "Was the government to implement this policy, economic expansion would accelerate."
      ],
      correctAnswer: "Were the government to implement this policy, economic expansion would accelerate.",
      explanation: "Inversi pada Conditional Type 2 dengan bentuk \"were to\" diubah menjadi: **Were + Subject + to + Verb (Were the government to implement...)**.",
      ruleReference: "Modul 30: Conditional Inversion with \"Were to\""
},
      {
      id: "q-m30-2",
      category: "Complex Structures",
      difficulty: "Menengah",
      question: "Select the Mixed Conditional sentence (Past cause leading to a Present result):",
      options: [
            "If the aviation engineer had detected the micro-fracture yesterday, the aircraft would not be grounded today.",
            "If the aviation engineer had detected the micro-fracture yesterday, the aircraft would not have crashed.",
            "If the aviation engineer detected the micro-fracture today, the aircraft would be grounded tomorrow.",
            "If the aviation engineer will detect the micro-fracture, the aircraft will be repaired."
      ],
      correctAnswer: "If the aviation engineer had detected the micro-fracture yesterday, the aircraft would not be grounded today.",
      explanation: "Mixed Conditional (Type 3 + Type 2): If clause menggunakan **Past Perfect (had detected)** untuk kondisi masa lampau, sedangkan Main clause menggunakan **would + bare infinitive (would not be)** untuk akibat di masa kini.",
      ruleReference: "Modul 30: Mixed Conditionals (Past Cause -> Present Effect)"
},
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
      id: "err-m30-2",
      flawedSentence: "If the government will subsidize renewable energy, adoption rates will skyrocket.",
      flawLocation: "will subsidize",
      correctedSentence: "If the government subsidizes renewable energy, adoption rates will skyrocket.",
      linguisticExplanation: "Dalam Conditional Type 1, klausa syarat (if-clause) menggunakan **Simple Present (subsidizes)**, bukan modal *will*. Modal *will* diletakkan pada klausa akibat (main clause).",
      acceptedVariations: []
},
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
    stageNumber: 8,
    stageName: 'Tahap 8: Transformasi Klausa & Inversi',
    categoryKey: 'Complex Structures',
    moduleNumber: 31,
    title: 'Coordinating Conjunctions (FANBOYS), Subordinasi, dan Transisi Antar-Kalimat',
    subtitle: 'Membangun jembatan logika antar gagasan tanpa kompromi tanda baca',
    levelBadge: 'Konjungsi & Transisi · Modul 31',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kohesi (keterikatan gramatikal antarkalimat) dan Koherensi (kelogisan alur gagasan) adalah kriteria penentu skor tertinggi dalam IELTS Task 2 dan TOEFL Writing. Teori Theme-Rheme (Prinsip Given-to-New) memastikan bahwa setiap kalimat baru berpijak pada informasi yang sudah diketahui pembaca sebelum memperkenalkan ide baru.',
    coreConceptSummary: 'Prinsip Theme-Rheme: Awali kalimat dengan informasi yang sudah dikenal (Theme), dan akhiri dengan informasi baru (Rheme). Rantai Leksikal dan peranti transisi mengunci aliran logika paragraf secara mulus.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Teori Theme and Rheme: Prinsip Given-to-New Information",
                "explanation": "Dalam linguistik sistemik fungsional, \"Theme\" adalah titik tolak kalimat (biasanya informasi yang sudah dibahas pada kalimat sebelumnya / *Given Information*), sedangkan \"Rheme\" adalah pesan inti baru yang ingin disampaikan (*New Information*). Paragraf yang mengalir sempurna menghubungkan Rheme dari kalimat A menjadi Theme pada kalimat B.",
                "formula": "Kalimat 1: [Theme A] -> [Rheme B] ====> Kalimat 2: [Theme B / Rujukan] -> [Rheme C]",
                "examples": [
                        {
                                "sentence": "Urban expansion generates substantial air pollution (Rheme B). This environmental degradation (Theme B) severely undermines public health (Rheme C).",
                                "translation": "Ekspansi perkotaan menghasilkan polusi udara substansial. Degradasi lingkungan ini sangat merusak kesehatan masyarakat.",
                                "note": "Alur Given-to-New sempurna."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Rantai Leksikal (Lexical Chains) & Variasi Sinonim",
                "explanation": "Kohesi leksikal dicapai bukan dengan mengulang kata yang sama berkali-kali, melainkan melalui Rantai Leksikal (Lexical Chains) yang mencakup sinonim kontekstual, hipernim (kata yang lebih umum), dan parafrasa pronominal.",
                "formula": "Term Spesifik -> Hypernym / Sinonim Akademik -> Pronominal Reference",
                "examples": [
                        {
                                "sentence": "The novel vaccine underwent trials. This pharmacological intervention demonstrated efficacy. It was subsequently approved.",
                                "translation": "Vaksin baru tersebut menjalani uji coba. Intervensi farmakologis ini menunjukkan kemanjuran. Hal itu kemudian disetujui.",
                                "note": "Rantai: vaccine -> pharmacological intervention -> It."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Variasi Struktur Awal Kalimat (Sentence Openers)",
                "explanation": "Paragraf yang monoton selalu diawali dengan formula \"Subjek + Verba\". Penulis mahir memvariasikan pembuka kalimat menggunakan: (1) Frasa Preposisional, (2) Frasa Partisipel, (3) Klausa Subordinatif, atau (4) Adverbia Transisi.",
                "formula": "Variasi Pembuka: Prepositional Phrase, / Participial Phrase, / Dependent Clause, / Stance Adverb,",
                "examples": [
                        {
                                "sentence": "Despite initial budgetary constraints, the engineering team completed the prototype.",
                                "translation": "Meskipun ada kendala anggaran awal, tim teknik menyelesaikan prototipe tersebut.",
                                "note": "Diawali frasa preposisional konsesif."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Transisi Antar-Paragraf yang Halus & Tematik",
                "explanation": "Jembatan antar-paragraf yang kuat tidak hanya mengandalkan kata mekanis seperti \"Secondly\" atau \"Moreover\", melainkan merangkum ide paragraf sebelumnya pada kalimat topik (Topic Sentence) paragraf berikutnya.",
                "formula": "Topic Sentence: [Rangkuman Singkat Paragraf Lalu] + [Fokus Utama Paragraf Baru]",
                "examples": [
                        {
                                "sentence": "Beyond these economic considerations, the social ramifications of automation must also be evaluated.",
                                "translation": "Di luar pertimbangan ekonomi ini (merangkum P1), dampak sosial dari otomatisasi juga harus dievaluasi (fokus P2).",
                                "note": "Transisi konseptual tingkat tinggi."
                        }
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
      id: "q-m31-3",
      category: "Complex Structures",
      difficulty: "Lanjutan",
      question: "Identify the sentence that correctly pairs the correlative conjunction \Not only ... but also\:",
      options: [
            "The educational reform not only improved literacy rates but also fostered critical analytical thinking.",
            "The educational reform not only improved literacy rates, but it also fostered critical analytical thinking as well.",
            "Not only the educational reform improved literacy rates, but also fostered critical thinking.",
            "The educational reform improved not only literacy rates, but also fostering critical thinking."
      ],
      correctAnswer: "The educational reform not only improved literacy rates but also fostered critical analytical thinking.",
      explanation: "Correlative conjunction menuntut **kesejajaran gramatikal (parallelism)**: \"not only [Past Verb: improved] ... but also [Past Verb: fostered]\".",
      ruleReference: "Modul 31: Correlative Conjunction Parallelism"
},
      {
      id: "q-m31-2",
      category: "Complex Structures",
      difficulty: "Menengah",
      question: "Choose the sentence that correctly employs a transitional conjunctive adverb with proper punctuation:",
      options: [
            "The methodology lacked rigorous sampling; nevertheless, the observational data provided valuable qualitative insights.",
            "The methodology lacked rigorous sampling, nevertheless, the observational data provided valuable qualitative insights.",
            "The methodology lacked rigorous sampling; although the observational data provided valuable qualitative insights.",
            "The methodology lacked rigorous sampling nevertheless the observational data provided valuable qualitative insights."
      ],
      correctAnswer: "The methodology lacked rigorous sampling; nevertheless, the observational data provided valuable qualitative insights.",
      explanation: "Conjunctive adverb \"nevertheless\" yang menghubungkan dua kalimat mandiri wajib diawali tanda titik koma (;) dan diakhiri tanda koma (,).",
      ruleReference: "Modul 31: Conjunctive Adverb Punctuation and Flow"
},
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
      id: "err-m31-2",
      flawedSentence: "Although he prepared exhaustively, but he failed to secure the scholarship.",
      flawLocation: "Although ... but",
      correctedSentence: "Although he prepared exhaustively, he failed to secure the scholarship.",
      linguisticExplanation: "Jangan menggunakan konjungsi subordinatif (*Although*) dan koordinatif (*but*) secara bersamaan dalam satu kalimat (Double Conjunction error). Pilih salah satu.",
      acceptedVariations: [
            "He prepared exhaustively, but he failed to secure the scholarship."
      ]
},
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
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Sintaksis Mahir',
    categoryKey: 'Complex Structures',
    moduleNumber: 32,
    title: 'Relative Clauses: Defining vs Non-Defining, Punctuation, dan Relative Pronoun Omission',
    subtitle: 'Klausa penjelas esensial vs tambahan, aturan koma, dan reduksi pronoun kontak',
    levelBadge: 'Klausa Relatif · Modul 32',
    estimatedMinutes: 30,
    mentalModelIntro: 'Nominalisasi (Academic Nominalization) adalah proses mengubah kata kerja (Verbs) atau kata sifat (Adjectives) menjadi kata benda (Nouns). Ini adalah ciri gramatikal paling dominan dari prosa ilmiah, laporan kebijakan, dan jurnal internasional karena mampu memadatkan informasi dan meningkatkan kepadatan leksikal (Lexical Density).',
    coreConceptSummary: 'Nominalisasi mentransformasikan klausa berbasis aksi (*Because the climate changed rapidly...*) menjadi frasa nominal padat (*Rapid climate change caused...*). Kuncinya adalah menjaga keseimbangan agar tidak menghasilkan "Zombie Nouns" yang mengaburkan kejelasan.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Mekanisme Morfologis & Sintaksis Nominalisasi",
                "explanation": "Nominalisasi memadatkan sebuah klausa lengkap yang terdiri dari Subjek + Verba + Keterangan menjadi sebuah Frasa Nomina Tunggal yang padat. Verba diubah menjadi nomina menggunakan suffix (-tion, -ment, -ance, -ity), dan kata keterangan (Adverb) diubah menjadi kata sifat (Adjective) yang memodifikasi nomina baru tersebut.",
                "formula": "Klausa: [Subject + Verb + Adverb] ----> Frasa Nomina: [Adjective + Nominalized Noun + of-Phrase]",
                "examples": [
                        {
                                "sentence": "Klausa Informal: The population grew rapidly in urban areas.",
                                "translation": "Populasi tumbuh dengan cepat di wilayah perkotaan.",
                                "note": "Gaya naratif klausa."
                        },
                        {
                                "sentence": "Nominalisasi: The rapid growth of urban populations strained municipal infrastructure.",
                                "translation": "Pertumbuhan pesat populasi perkotaan membebani infrastruktur kota.",
                                "note": "rapid growth of urban populations = Frasa Nomina Padat."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Peningkatan Kepadatan Leksikal (Lexical Density)",
                "explanation": "Kepadatan leksikal adalah proporsi kata bermakna (Content Words: nomina, adjektiva, verba utama) dibandingkan kata fungsi gramatikal (preposisi, artikel, pronoun). Nominalisasi menggabungkan beberapa ide ke dalam satu kalimat padat berbobot tinggi tanpa pemborosan kata (*Wordiness*).",
                "formula": "Kepadatan Leksikal Tinggi = [Banyak Kata Benda Konseptual per Kalimat]",
                "examples": [
                        {
                                "sentence": "The proliferation of algorithmic surveillance raises profound constitutional concerns regarding privacy infringement.",
                                "translation": "Proliferasi pengawasan algoritmik menimbulkan kekhawatiran konstitusional yang mendalam mengenai pelanggaran privasi.",
                                "note": "Kepadatan leksikal sangat tinggi (Band 8.5+ IELTS)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Mencegah \"Zombie Nouns\" & Menjaga Kejelasan Kalimat",
                "explanation": "Meskipun nominalisasi sangat penting, penyalahgunaan berlebihan dapat menghasilkan \"Zombie Nouns\" (tulisan yang kaku, berbelit-belit, dan mengaburkan siapa pelaku tindakan sebenarnya). Jika kalimat menjadi terlalu abstrak dan tidak dapat dipahami, kembalikan aksi utama ke verba dinamis yang kuat.",
                "formula": "Aturan Kejelasan: Pastikan Agen/Subjek Kunci dan Tindakan Inti tetap jelas!",
                "examples": [
                        {
                                "sentence": "Terlalu Kaku: The accomplishment of the implementation of the strategy was achieved.",
                                "translation": "Pencapaian pelaksanaan strategi telah diraih.",
                                "note": "Zombie nouns berlebihan."
                        },
                        {
                                "sentence": "Baku & Jelas: The ministry successfully implemented the sustainability strategy.",
                                "translation": "Kementerian berhasil menerapkan strategi keberlanjutan tersebut.",
                                "note": "Keseimbangan sempurna antara formalitas dan kejelasan."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Transformasi Latihan: Dari Gaya Percakapan ke Gaya Akademik",
                "explanation": "Pelajari pola transformasi standar: *analyze -> analysis*, *evaluate -> evaluation*, *degrade -> degradation*, *fluctuate -> fluctuation*, *intervene -> intervention*, *disclose -> disclosure*.",
                "formula": "Verb + Suffix -> Academic Noun Concept",
                "examples": [
                        {
                                "sentence": "Naratif: The currency fluctuated erratically.",
                                "translation": "Mata uang berfluktuasi secara tidak menentu.",
                                "note": "Verba + Adverbia."
                        },
                        {
                                "sentence": "Akademik: Erratic currency fluctuations destabilized foreign direct investment.",
                                "translation": "Fluktuasi mata uang yang tidak menentu mendestabilisasi investasi asing langsung.",
                                "note": "Nominalisasi padat."
                        }
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
      id: "q-m32-3",
      category: "Complex Structures",
      difficulty: "Lanjutan",
      question: "Select the sentence featuring a reduced relative clause (participial reduction):",
      options: [
            "The chemicals synthesized in the laboratory exhibited remarkable thermal stability.",
            "The chemicals which were synthesized in the laboratory exhibited remarkable thermal stability.",
            "The chemicals that being synthesized in the laboratory exhibited remarkable thermal stability.",
            "The chemicals having synthesized in the laboratory exhibited remarkable thermal stability."
      ],
      correctAnswer: "The chemicals synthesized in the laboratory exhibited remarkable thermal stability.",
      explanation: "Klausa \"which were synthesized in the laboratory\" dapat direduksi dengan menghapus relative pronoun *which* dan be-verb *were*, menyisakan past participle phrase: **The chemicals synthesized in the laboratory...**.",
      ruleReference: "Modul 32: Reduced Relative Clauses (Participle Reduction)"
},
      {
      id: "q-m32-2",
      category: "Complex Structures",
      difficulty: "Menengah",
      question: "Identify the Non-Defining (Non-Restrictive) Relative Clause with flawless comma placement:",
      options: [
            "The James Webb Space Telescope, which was launched in December 2021, has captured unprecedented cosmological imagery.",
            "The James Webb Space Telescope that was launched in December 2021 has captured unprecedented cosmological imagery.",
            "The James Webb Space Telescope, that was launched in December 2021, has captured unprecedented cosmological imagery.",
            "The James Webb Space Telescope which was launched in December 2021 has captured unprecedented cosmological imagery."
      ],
      correctAnswer: "The James Webb Space Telescope, which was launched in December 2021, has captured unprecedented cosmological imagery.",
      explanation: "Non-defining relative clause (memberikan informasi tambahan tentang benda yang sudah spesifik) wajib diapit oleh **dua tanda koma** dan menggunakan **which** (TIDAK BOLEH menggunakan *that*).",
      ruleReference: "Modul 32: Non-Defining Relative Clauses and Punctuation"
},
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
      id: "err-m32-2",
      flawedSentence: "The professor which delivered the keynote speech is a prominent economist.",
      flawLocation: "which delivered",
      correctedSentence: "The professor who delivered the keynote speech is a prominent economist.",
      linguisticExplanation: "Untuk merujuk pada manusia (*The professor*), gunakan relative pronoun **who** (atau *whom/whose*), BUKAN **which** yang khusus untuk benda/hewan.",
      acceptedVariations: [
            "The professor that delivered the keynote speech is a prominent economist."
      ]
},
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
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Sintaksis Mahir',
    categoryKey: 'Complex Structures',
    moduleNumber: 33,
    title: 'Noun Clauses & Embedded Questions',
    subtitle: 'Klausa yang bertindak sebagai nomina dan susunan kata pernyataan dalam pertanyaan terselip',
    levelBadge: 'Klausa Nomina · Modul 33',
    estimatedMinutes: 25,
    mentalModelIntro: 'Kalimat Belah (Cleft Sentences) adalah struktur sintaksis yang "membelah" satu klausa normal menjadi dua bagian untuk memberikan sorotan fokus (Focalization) yang sangat tajam pada elemen tertentu (apakah Pelaku, Waktu, Alasan, atau Objek). Ini adalah peranti retorika tingkat mahir untuk menegaskan argumen puncak.',
    coreConceptSummary: 'It-Clefts (It is/was [Elemen Fokus] that [Sisa Informasi]). Wh-Clefts / Pseudo-Clefts (What we need is...). Reverse Wh-Clefts (This is what caused...).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Arsitektur It-Clefts & Mekanisme Pergeseran Fokus",
                "explanation": "It-Cleft membelah kalimat normal *[Subject + Verb + Object]* menjadi konstruksi berawalan ekspletif *It is/was*. Elemen yang ingin Anda sorot diletakkan tepat setelah *is/was*, diikuti oleh klausa *that/who*.",
                "formula": "It + is/was + [UNSUR YANG DISOROT / FOCUS] + that / who + [Sisa Kalimat]",
                "examples": [
                        {
                                "sentence": "Kalimat Netral: Human greenhouse emissions caused rapid Arctic warming.",
                                "translation": "Emisi gas rumah kaca manusia menyebabkan pemanasan Arktik yang cepat.",
                                "note": "Netral."
                        },
                        {
                                "sentence": "It-Cleft: It was human greenhouse emissions that caused rapid Arctic warming.",
                                "translation": "Emisi gas rumah kaca manusialah yang menyebabkan pemanasan Arktik yang cepat.",
                                "note": "Fokus tajam pada faktor penyebab."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Arsitektur Wh-Clefts (Pseudo-Clefts)",
                "explanation": "Wh-Clefts (atau Pseudo-Clefts) mengemas informasi latar belakang ke dalam klausa nominal berawalan *What*, dan meletakkan elemen kunci yang menjadi jawaban/solusi di posisi akhir setelah kata kerja *is/was*.",
                "formula": "What + [Subject + Verb] + is/was + [UNSUR FOKUS / SOLUSI]",
                "examples": [
                        {
                                "sentence": "What the developing nations require is comprehensive technological transfer, not mere financial aid.",
                                "translation": "Apa yang dibutuhkan negara-negara berkembang adalah transfer teknologi yang komprehensif, bukan sekadar bantuan keuangan.",
                                "note": "Wh-Cleft memberikan dampak retoris yang sangat meyakinkan."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Reverse Wh-Clefts & Penegasan Kausalitas",
                "explanation": "Reverse Wh-Cleft membalik urutan: Unsur fokus diletakkan di paling depan kalimat, diikuti *is/was what...*. Pola ini sangat efektif untuk menyimpulkan penyebab dalam paragraf evaluatif.",
                "formula": "[UNSUR FOKUS] + is/was + what + [Subject + Verb]",
                "examples": [
                        {
                                "sentence": "Unregulated subprime lending was what triggered the global financial crisis of 2008.",
                                "translation": "Pemberian pinjaman subprime yang tidak teregulasi adalah apa yang memicu krisis keuangan global tahun 2008.",
                                "note": "Reverse Wh-Cleft."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Aplikasi Retorika Cleft Sentences dalam Esai Argumentatif",
                "explanation": "Gunakan Cleft Sentences secara strategis pada Kalimat Tesis (Thesis Statement), Bantahan Argumen (Counter-Argument Refutation), atau Kalimat Kesimpulan Utama untuk menciptakan resonansi intelektual yang kuat.",
                "formula": "Gunakan Cleft untuk membantah miskonsepsi umum: It is not [A], but rather [B] that...",
                "examples": [
                        {
                                "sentence": "It is not lack of technological capability, but rather political inertia, that impedes the green energy transition.",
                                "translation": "Bukanlah kurangnya kemampuan teknologi, melainkan kelembaman politik, yang menghambat transisi energi hijau.",
                                "note": "Retorika argumentasi puncak (Band 9.0)."
                        }
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
      id: "q-m33-3",
      category: "Complex Structures",
      difficulty: "Lanjutan",
      question: "Identify the sentence containing a Noun Clause acting as a Subject Complement:",
      options: [
            "The primary concern is that the preliminary sample may have been contaminated.",
            "That the preliminary sample was contaminated concerned the lead investigator.",
            "The investigator wondered whether the preliminary sample was contaminated.",
            "The investigator analyzed the sample that was contaminated."
      ],
      correctAnswer: "The primary concern is that the preliminary sample may have been contaminated.",
      explanation: "Klausa \"that the preliminary sample may have been contaminated\" terletak setelah linking verb *is* dan berfungsi menjelaskan identitas dari subjek \"The primary concern\", sehingga berkedudukan sebagai **Subject Complement Noun Clause**.",
      ruleReference: "Modul 33: Noun Clause Syntactic Functions"
},
      {
      id: "q-m33-2",
      category: "Complex Structures",
      difficulty: "Menengah",
      question: "Choose the sentence with a grammatically correct embedded question in formal inquiry:",
      options: [
            "Could you please clarify what the total projected expenditure will be?",
            "Could you please clarify what will the total projected expenditure be?",
            "Could you please clarify what is the total projected expenditure?",
            "Could you please clarify how much will be the total projected expenditure?"
      ],
      correctAnswer: "Could you please clarify what the total projected expenditure will be?",
      explanation: "Dalam Embedded Question (pertanyaan terselubung setelah frasa pembuka), susunan kata kembali ke format kalimat deklaratif: **Question Word + Subject + Verb** (*what the expenditure will be* ✔️, BUKAN format tanya *what will the expenditure be* ❌).",
      ruleReference: "Modul 33: Embedded Question Word Order"
},
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
      id: "err-m33-2",
      flawedSentence: "The survey asks how do respondents evaluate public transportation efficiency.",
      flawLocation: "how do respondents evaluate",
      correctedSentence: "The survey asks how respondents evaluate public transportation efficiency.",
      linguisticExplanation: "Dalam Noun Clause / Embedded Question, hapus auxiliary do-support (*do*) dan susun kalimat dengan urutan afirmatif: **Question Word + Subject + Verb** (*how respondents evaluate*).",
      acceptedVariations: []
},
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
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Sintaksis Mahir',
    categoryKey: 'Complex Structures',
    moduleNumber: 34,
    title: 'Subjunctive Mood & Inversion for Emphasis',
    subtitle: 'Modus mandat formal dan pembalikan subjek-predikat untuk penekanan retorika tingkat tinggi',
    levelBadge: 'Subjunctive & Inversi · Modul 34',
    estimatedMinutes: 30,
    mentalModelIntro: 'Paralelisme Sintaksis (Parallelism) adalah prinsip keseimbangan bentuk gramatikal ketika dua atau lebih elemen digabungkan dalam serial, daftar, atau konjungsi berpasangan. Struktur yang paralel menghasilkan irama membaca yang anggun, logis, dan mudah dipahami.',
    coreConceptSummary: 'Elemen yang digabungkan oleh and/or, konjungsi korelatif (not only... but also, either... or), atau komparasi (more than) WAJIB memiliki kelas kata dan struktur sintaksis yang identik (Gerund dengan Gerund, Klausa dengan Klausa).',
    sections: [
        {
                "stepNumber": "01",
                "title": "Kaidah Paralelisme pada Konjungsi Korelatif",
                "explanation": "Konjungsi Korelatif (*Not only ... but also, Either ... or, Neither ... nor, Both ... and, Whether ... or*) menuntut struktur gramatikal yang SIMETRIS SEMPURNA tepat setelah masing-masing pasangannya. Jika setelah *Not only* ada Frasa Preposisi, maka setelah *but also* WAJIB ada Frasa Preposisi.",
                "formula": "Not only + [BENTUK X], + but also + [BENTUK X YANG IDENTIK]",
                "examples": [
                        {
                                "sentence": "The policy aims not only to reduce carbon emissions, but also to stimulate economic growth.",
                                "translation": "Kebijakan tersebut bertujuan tidak hanya untuk mengurangi emisi karbon, tetapi juga untuk merangsang pertumbuhan ekonomi.",
                                "note": "to reduce... but also to stimulate... (Paralel infinitif)."
                        }
                ],
                "contrastiveAnalysis": {
                        "incorrectSentence": "The study was not only innovative, but it was also providing practical solutions.",
                        "correctSentence": "The study was not only innovative, but also practical.",
                        "linguisticReason": "Bentuk setelah \"not only\" adalah adjektiva (innovative), sehingga setelah \"but also\" harus seimbang berupa adjektiva (practical)."
                }
        },
        {
                "stepNumber": "02",
                "title": "Paralelisme Bentuk Kata dalam Daftar dan Serial",
                "explanation": "Ketika membuat daftar tindakan atau karakteristik dalam satu kalimat, seluruh butir serial harus berbentuk sama: semua Gerund (-ing), semua Bare Infinitive, semua Frasa Nomina, atau semua Klausa.",
                "formula": "[Verb-ing A], [Verb-ing B], and [Verb-ing C] | [Noun A], [Noun B], and [Noun C]",
                "examples": [
                        {
                                "sentence": "Effective academic research requires formulating clear hypotheses, collecting empirical telemetry, and analyzing statistical variance.",
                                "translation": "Penelitian akademik yang efektif membutuhkan perumusan hipotesis yang jelas, pengumpulan telemetri empiris, dan analisis varians statistik.",
                                "note": "formulating..., collecting..., and analyzing... (Paralel Gerund)."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Paralelisme dalam Struktur Komparatif (More than, As ... as)",
                "explanation": "Dalam perbandingan menggunakan *than* atau *as... as*, dua entitas yang diperbandingkan harus berkedudukan gramatikal setara. Membandingkan tindakan dengan kata benda adalah kesalahan paralelisme fatal (*Faulty Comparison*).",
                "formula": "[Gerund Phrase A] + is more effective than + [Gerund Phrase B]",
                "examples": [
                        {
                                "sentence": "Implementing preventative healthcare is far more cost-effective than treating chronic illnesses.",
                                "translation": "Menerapkan perawatan kesehatan preventif jauh lebih hemat biaya daripada mengobati penyakit kronis.",
                                "note": "Implementing... than treating... (Paralel sempurna)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Dampak Retorika Paralelisme pada Irama Kalimat (Cadence)",
                "explanation": "Paralelisme tingkat tinggi (seperti trikolon atau kalimat seimbang) memberikan resonansi retoris yang kuat dan persuasif pada paragraf kesimpulan esai.",
                "formula": "Trikolon Seimbang: [Struktur A], [Struktur A], and [Struktur A]",
                "examples": [
                        {
                                "sentence": "To understand the past, to analyze the present, and to anticipate the future are the fundamental obligations of historical scholarship.",
                                "translation": "Memahami masa lalu, menganalisis masa kini, dan mengantisipasi masa depan adalah kewajiban mendasar dari keilmuan sejarah.",
                                "note": "Trikolon infinitif yang megah."
                        }
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
      id: "q-m34-3",
      category: "Exam Readiness",
      difficulty: "Lanjutan",
      question: "Select the sentence that correctly applies negative inversion with \Not until\:",
      options: [
            "Not until the peer review was finalized did the editorial board approve the publication.",
            "Not until the peer review was finalized the editorial board approved the publication.",
            "Not until did the peer review finalize the editorial board approved the publication.",
            "Not until the peer review was finalized had the editorial board approve publication."
      ],
      correctAnswer: "Not until the peer review was finalized did the editorial board approve the publication.",
      explanation: "Pada struktur \"Not until [time clause], [main clause]\", inversi (Auxiliary + Subject + Main Verb) terjadi pada **Main Clause** (*did the editorial board approve*), bukan pada anak kalimat *not until*.",
      ruleReference: "Modul 34: Negative Inversion with \"Not Until\""
},
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
      id: "err-m34-2",
      flawedSentence: "The dean demanded that the dishonest student is expelled immediately.",
      flawLocation: "is expelled",
      correctedSentence: "The dean demanded that the dishonest student be expelled immediately.",
      linguisticExplanation: "Present Mandative Subjunctive setelah verba tuntutan (*demand, require, insist that*) mewajibkan penggunaan **Bare Infinitive (be)** untuk semua subjek tanpa memedulikan subjek tunggal/jamak.",
      acceptedVariations: []
},
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
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Sintaksis Mahir',
    categoryKey: 'Exam Readiness',
    moduleNumber: 35,
    title: 'Participle Clauses, Absolute Structures & Academic Register Mastery (IELTS 8.5+ & TOEFL 110+)',
    subtitle: 'Reduksi klausa tingkat tinggi, eliminasi dangling modifiers, dan pemadatan sintaksis puncak',
    levelBadge: 'Mahakarya Retorika · Modul 35',
    estimatedMinutes: 30,
    mentalModelIntro: 'Puncak dari penguasaan sintaksis bahasa Inggris adalah kemampuan memadatkan proposisi kompleks secara elegan menggunakan Participle Clauses, Absolute Structures, dan Matriks Epistemic Stance. Pada level ini, tulisan Anda mencapai standar jurnal internasional dan kriteria IELTS Band 8.5–9.0 serta TOEFL 110+.',
    coreConceptSummary: 'Absolute Structures memiliki subjek partisipel mandiri tanpa konjungsi. Dangling Modifiers dieliminasi total. Matriks Stance & Hedging mengatur tingkat kepastian ilmiah secara objektif dan elegan.',
    sections: [
        {
                "stepNumber": "01",
                "title": "Absolute Structures: Frasa Partisipel Mandiri",
                "explanation": "Absolute Structure (atau Nominative Absolute) adalah konstruksi partisipel yang memiliki SUBJEK GRAMATIKALNYA SENDIRI yang terpisah dari subjek klausa utama. Karena memiliki subjek sendiri, struktur ini TIDAK PERNAH terancam kesalahan Dangling Modifier.",
                "formula": "[Noun / Pronoun] + [Participle Phrase (V-ing / V3)], + [Independent Clause]",
                "examples": [
                        {
                                "sentence": "The empirical telemetry having been verified, the international consortium published their findings in Nature.",
                                "translation": "Setelah telemetri empiris diverifikasi, konsorsium internasional menerbitkan temuan mereka di jurnal Nature.",
                                "note": "The telemetry (Subjek Partisipel) having been verified, the consortium (Subjek Utama) published..."
                        },
                        {
                                "sentence": "All experimental parameters being equal, the synthetic compound demonstrates superior stability.",
                                "translation": "Dengan semua parameter eksperimental bernilai setara, senyawa sintetis tersebut menunjukkan stabilitas yang lebih unggul.",
                                "note": "All parameters being equal = Absolute Structure pembuka."
                        }
                ]
        },
        {
                "stepNumber": "02",
                "title": "Pemadatan Participle Pasif & Sempurna pada Esai Tingkat Tinggi",
                "explanation": "Menggabungkan Past Participle dan Perfect Participle dengan frasa preposisional memadatkan paragraf panjang menjadi kalimat pembuka yang sangat tajam dan kaya informasi.",
                "formula": "Published in [Tahun], + [Subject] + [Verb] | Having analyzed [Objek], + [Subject] + [Verb]",
                "examples": [
                        {
                                "sentence": "First synthesized in 2018, the biodegradable polymer has revolutionized sustainable packaging.",
                                "translation": "Pertama kali disintesis pada tahun 2018, polimer yang dapat terurai secara hayati tersebut telah merevolusi kemasan berkelanjutan.",
                                "note": "First synthesized in 2018 = Past Participle Reduction yang padat."
                        }
                ]
        },
        {
                "stepNumber": "03",
                "title": "Matriks Epistemic Stance & Hedging Ilmiah",
                "explanation": "Penulis berkaliber tinggi tidak pernah membuat klaim mutlak yang naif (*This proves that X is bad*). Mereka menggunakan Matriks Hedging terukur: (1) Tentative Verbs (*suggest, indicate, imply*); (2) Probability Adverbs (*plausibly, arguably, predominantly*); (3) Modal Modulations (*may contribute to, appears to stem from*).",
                "formula": "Klaim Naif: [X causes Y] ----[Academic Hedging]----> [The evidence suggests that X may substantially contribute to Y]",
                "examples": [
                        {
                                "sentence": "The empirical correlation suggests that socioeconomic inequality may arguably exacerbate political polarization.",
                                "translation": "Korelasi empiris tersebut menunjukkan bahwa ketimpangan sosial ekonomi dapat diperdebatkan berkontribusi memperburuk polarisasi politik.",
                                "note": "Hedging tingkat tinggi (suggests ... may arguably)."
                        }
                ]
        },
        {
                "stepNumber": "04",
                "title": "Kriteria Mahakarya: Sintesis Sintaksis untuk IELTS 9.0 & TOEFL 120",
                "explanation": "Pencapaian skor tertinggi menuntut variasi sintaksis terpadu: menggabungkan Nominalisasi, Inversi, Clefting, dan Participle Clauses dalam satu esai yang mengalir secara alami, kohesif, dan bertenaga.",
                "formula": "Integrasi Sintaksis: [Participle Reduction] + [Nominalized Concept] + [Balanced Parallelism] + [Hedging Stance]",
                "examples": [
                        {
                                "sentence": "Having evaluated the longitudinal telemetry, researchers concluded that the rapid proliferation of algorithmic automation not only enhances industrial productivity, but also necessitates comprehensive regulatory restructuring.",
                                "translation": "Setelah mengevaluasi telemetri longitudinal, para peneliti menyimpulkan bahwa proliferasi pesat otomatisasi algoritmik tidak hanya meningkatkan produktivitas industri, tetapi juga mengharuskan restrukturisasi regulasi yang komprehensif.",
                                "note": "Mahakarya sintaksis lengkap: Perfect Participle + Nominalization + Parallel Inversion."
                        }
                ]
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
      id: "q-m35-3",
      category: "Exam Readiness",
      difficulty: "Lanjutan",
      question: "Which of the following sentences exhibits high-level academic nominalization to enhance lexical density?",
      options: [
            "The rapid proliferation of urban development caused significant degradation of local wetland ecosystems.",
            "Because cities proliferated rapidly, local wetland ecosystems degraded significantly.",
            "Cities grew very fast, so wetlands in the local area were damaged a lot.",
            "The way cities were developing fast was the reason why wetlands got degraded."
      ],
      correctAnswer: "The rapid proliferation of urban development caused significant degradation of local wetland ecosystems.",
      explanation: "Nominalisasi (*proliferation* dari *proliferate*, *degradation* dari *degrade*) memadatkan klausa verba menjadi frasa nomina yang berbobot (*high lexical density*), yang merupakan ciri khas penulisan ilmiah Band 8.5+ IELTS dan jurnal internasional.",
      ruleReference: "Modul 35: Academic Nominalization and Lexical Density"
},
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
      id: "err-m35-2",
      flawedSentence: "Having finished the quantitative analysis, the computer was turned off.",
      flawLocation: "Having finished the quantitative analysis, the computer",
      correctedSentence: "Having finished the quantitative analysis, the researcher turned off the computer.",
      linguisticExplanation: "Komputer tidak bisa melakukan analisis kuantitatif secara mandiri (Dangling Participle). Subjek sejati (\"the researcher\") harus diletakkan tepat setelah frasa partisipial.",
      acceptedVariations: []
},
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

