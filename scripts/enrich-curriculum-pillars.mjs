import fs from 'fs';
import path from 'path';

const filePath = path.resolve('d:/Project/Meraki/meraki-english/src/data/meraki-data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Update Interface
if (!content.includes('export interface DecisionTreeNode')) {
  const interfaceInsert = `export interface DecisionTreeNode {
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

`;
  content = content.replace('export interface LearningTopic {', `${interfaceInsert}export interface LearningTopic {`);
  content = content.replace(
    '  coreConceptSummary: string;\n  sections: TopicSection[];',
    `  coreConceptSummary: string;
  decisionTree?: DecisionTreeNode[];
  registerLadder?: RegisterLadder;
  canDoChecklist?: string[];
  pocketAxioms?: string[];
  sections: TopicSection[];`
  );
}

// Module enhancements map
const moduleEnhancements = {
  'modul-01-noun-types': {
    decisionTree: [
      {
        step: 'Langkah 1: Identifikasi Wujud & Sifat Benda',
        question: 'Apakah kata benda merujuk pada nama diri spesifik atau konsep umum?',
        branches: [
          { condition: 'Nama diri unik (orang, kota, institusi)', outcome: 'Proper Noun', rule: 'Wajib huruf kapital, dilarang article umum (Einstein, Indonesia, Harvard).' },
          { condition: 'Gagasan abstrak, kualitas, atau proses', outcome: 'Abstract Noun', rule: 'Mayoritas uncountable, dilarang akhiran -s (honesty, knowledge, freedom).' },
          { condition: 'Sekelompok individu yang bersatu', outcome: 'Collective Noun', rule: 'Dianggap tunggal jika bertindak satu suara (The committee has decided).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'People in the group talked about the stuff for a long time.',
      standard: 'The committee discussed the proposed regulations in detail.',
      academicHigh: 'The consultative committee deliberated extensively upon the statutory regulatory framework.',
      analysis: 'Menggantikan kata benda samar "people / stuff" dengan Collective Noun presisi "The consultative committee" dan Abstract Noun "statutory regulatory framework".'
    },
    canDoChecklist: [
      'Saya dapat membedakan Proper Noun dari Common Noun dan selalu mengkapitalisasinya.',
      'Saya memahami bahwa Abstract Noun (seperti honesty, integrity) bersifat uncountable.',
      'Saya paham kapan Collective Noun mengambil kata kerja tunggal vs jamak.'
    ],
    pocketAxioms: [
      'Proper Noun wajib huruf kapital awal tanpa artikel "a/an".',
      'Abstract Noun tidak berwujud fisik dan tidak boleh dijamakkan dengan "-s".',
      'Collective Noun berstatus tunggal (singular verb) jika kelompok bertindak sebagai satu kesatuan utuh.'
    ]
  },
  'modul-02-countable-uncountable': {
    decisionTree: [
      {
        step: 'Langkah 1: Uji Hitung Fisik (Countability Test)',
        question: 'Dapatkah benda dihitung utuh per satuan tanpa alat ukur/wadah tambahan?',
        branches: [
          { condition: 'Bisa dihitung fisik (1, 2, 3...)', outcome: 'Countable Noun', rule: 'Wajib "a/an" jika tunggal, boleh "-s/-es" jika jamak (a report, two books).' },
          { condition: 'Massa cair/gas, bahan, atau kategori abstrak', outcome: 'Uncountable Noun', rule: 'Dilarang "a/an", dilarang "-s", gunakan partitive (pieces of advice, items of equipment).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'We got many new softwares and equipments for our lab.',
      standard: 'We acquired several new software applications and pieces of equipment.',
      academicHigh: 'The laboratory procured advanced specialized software licenses alongside state-of-the-art analytical equipment.',
      analysis: 'Menghilangkan kesalahan fatal "softwares" dan "equipments" dengan partitive formal "software licenses" dan "analytical equipment".'
    },
    canDoChecklist: [
      'Saya tidak akan pernah menulis "researches", "equipments", atau "advices".',
      'Saya mampu menggunakan partitive expressions seperti "pieces of evidence" dan "items of equipment".',
      'Saya paham bahwa kata benda uncountable selalu mengambil kata kerja tunggal (is/was/has).'
    ],
    pocketAxioms: [
      'Uncountable Nouns (research, evidence, equipment, advice, information) DILARANG BERAKHIRAN -S.',
      'Dilarang memasang "a/an" tepat sebelum kata benda uncountable murni.',
      'Gunakan partitive phrase ("a piece of...", "items of...") untuk menghitung kuantitas uncountable noun.'
    ]
  },
  'modul-03-articles': {
    decisionTree: [
      {
        step: 'Langkah 1: Skrining Keberadaan Rujukan Spesifik',
        question: 'Apakah pendengar/pembaca sudah tahu pasti objek spesifik yang dimaksud?',
        branches: [
          { condition: 'Sudah spesifik / unik / sudah disebut sebelumnya', outcome: 'Gunakan Artikel "THE"', rule: 'Wajib "The" (The sun, the study mentioned earlier).' },
          { condition: 'Belum spesifik, tunggal, dan dapat dihitung', outcome: 'Gunakan "A / AN"', rule: 'A + bunyi konsonan (/j/, /w/), An + bunyi vokal (/ə/, /aɪ/, /ɒ/).' },
          { condition: 'Konsep universal / jamak generalisasi', outcome: 'Zero Article (Tanpa Artikel)', rule: 'Tanpa the (Water is essential, Education empowers societies).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'A scientist did the experiment on a university.',
      standard: 'A researcher conducted an experiment at a university.',
      academicHigh: 'An independent researcher conducted an exhaustive experiment at an accredited university.',
      analysis: 'Penggunaan presisi "an experiment" (bunyi vokal /ɪ/) dan "a university" (bunyi konsonan /j/).'
    },
    canDoChecklist: [
      'Saya memahami bahwa "a vs an" ditentukan oleh BUNYI fonetik pengucapan, bukan huruf ejaan.',
      'Saya bisa membedakan kapan memakai "The" (rujukan spesifik) vs Zero Article (generalisasi universal).',
      'Saya tidak menambahkan "the" di depan konsep umum seperti "The life is short (SALAH)".'
    ],
    pocketAxioms: [
      'A digunakan sebelum bunyi konsonan (/juː/ pada university, /wʌn/ pada one-way).',
      'An digunakan sebelum bunyi vokal (/aʊər/ pada hour, /ɒ/ pada honest).',
      'Jangan gunakan "the" untuk membicarakan konsep umum dalam bentuk jamak atau uncountable.'
    ]
  },
  'modul-06-transitive-intransitive': {
    decisionTree: [
      {
        step: 'Langkah 1: Uji Pertanyaan Objek "Apa / Siapa"',
        question: 'Apakah aksi kata kerja mentransfer tindakan langsung ke benda/orang?',
        branches: [
          { condition: 'Membutuhkan Direct Object (S + V + APA?)', outcome: 'Transitive Verb', rule: 'Wajib memiliki objek langsung; DAPAT DIPASIFKAN (analyze data, conduct tests).' },
          { condition: 'Aksi berhenti pada subjek tanpa penerima aksi langsung', outcome: 'Intransitive Verb', rule: 'Dilarang objek langsung; DILARANG KERAS DIPASIFKAN (happen, occur, die, arrive).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'The accident was happened very fast yesterday.',
      standard: 'The accident occurred very suddenly yesterday.',
      academicHigh: 'The unforeseen industrial catastrophe occurred abruptly during scheduled operations.',
      analysis: 'Memperbaiki kesalahan gramatikal fatal passive intransitive (*was happened) menjadi past simple murni "occurred".'
    },
    canDoChecklist: [
      'Saya paham bahwa kata kerja intransitif (happen, occur, exist, arrive) TIDAK BISA DIPASIFKAN.',
      'Saya bisa mendeteksi apakah suatu kata kerja adalah transitif dengan bertanya "V + What/Whom?".',
      'Saya tidak akan pernah menulis "The crisis was occurred".'
    ],
    pocketAxioms: [
      'Transitive Verb mewajibkan Direct Object dan dapat ditransformasikan ke Passive Voice.',
      'Intransitive Verb (occur, arrive, vanish, remain) DILARANG memiliki bentuk pasif.',
      'Perhatikan kata kerja kembar: Lie (intransitif, berbaring) vs Lay (transitif, meletakkan sesuatu).'
    ]
  },
  'modul-07-stative-verbs': {
    decisionTree: [
      {
        step: 'Langkah 1: Klasifikasi Kategori Keadaan vs Aksi Fisik',
        question: 'Apakah kata kerja menyatakan keadaan batin permanen atau aksi fisik dinamis?',
        branches: [
          { condition: 'Kognisi, emosi, kepemilikan, atau persepsi statis', outcome: 'Stative Verb', rule: 'DILARANG menggunakan bentuk Continuous -ing (*is knowing, *is belonging SALAH).' },
          { condition: 'Aksi fisik yang memiliki awal dan akhir durasi', outcome: 'Dynamic Action Verb', rule: 'Boleh menggunakan tenses Continuous (is running, are investigating).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'I am understanding this rule now and I am having two cars.',
      standard: 'I understand this rule now and I have two cars.',
      academicHigh: 'The research committee fully comprehends the regulatory parameters and possesses the requisite authorization.',
      analysis: 'Mengubah bentuk -ing statif (*am understanding, *am having) menjadi present simple baku "comprehends" dan "possesses".'
    },
    canDoChecklist: [
      'Saya tidak akan pernah menggunakan tenses Continuous (-ing) pada kata kerja kognisi (know, believe, understand).',
      'Saya memahami kata kerja berkepribadian ganda seperti "have" (kepemilikan = statif; aktivitas makan/minum = dinamis).',
      'Saya dapat membedakan "taste" sebagai statif (rasanya) vs dinamis (mencicipi).'
    ],
    pocketAxioms: [
      'Stative verbs (know, believe, belong, seem, prefer) DILARANG berakhiran -ing untuk continuous.',
      'Kata kerja berkepribadian ganda: "I think you are right" (opini) vs "I am thinking about it" (proses berpikir).',
      'Dalam tulisan akademik, gunakan kognisi formal: comprehend, possess, constitute, resemble.'
    ]
  },
  'modul-11-order-of-adjectives': {
    decisionTree: [
      {
        step: 'Langkah 1: Terapkan Rumus OSASCOMP',
        question: 'Urutkan kata sifat berdasarkan kedekatan sifat bawaan ke kata benda utama:',
        branches: [
          { condition: 'Opini / Penilaian Subjektif', outcome: 'Posisi 1: Opinion', rule: 'beautiful, groundbreaking, valuable.' },
          { condition: 'Ukuran & Bentuk Fisik', outcome: 'Posisi 2-4: Size, Age, Shape', rule: 'large, ancient, rectangular.' },
          { condition: 'Warna, Asal Negara, Bahan, Tujuan', outcome: 'Posisi 5-8: Color, Origin, Material, Purpose', rule: 'blue, British, titanium, medical (instrument).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'He bought a metallic new useful device.',
      standard: 'He purchased a useful new metallic device.',
      academicHigh: 'The laboratory procured an invaluable cutting-edge German optical device.',
      analysis: 'Menerapkan hierarki OSASCOMP: Invaluable (Opinion) ➔ Cutting-edge (Age) ➔ German (Origin) ➔ Optical (Purpose) ➔ Device (Noun).'
    },
    canDoChecklist: [
      'Saya hafal akronim OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.',
      'Saya meletakkan kata sifat opini (subjektif) di urutan paling awal sebelum ukuran dan bahan fisik.',
      'Saya tidak memisahkan kata sifat purpose dari kata benda inti (misal: "medical instrument").'
    ],
    pocketAxioms: [
      'OSASCOMP: Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose.',
      'Opini subjektif selalu mendahului fakta objektif fisik.',
      'Kata sifat tujuan (purpose) selalu menempel persis di depan kata benda.'
    ]
  },
  'modul-18-sentence-patterns': {
    decisionTree: [
      {
        step: 'Langkah 1: Identifikasi 5 Pola Kerangka Sintaksis',
        question: 'Apa jenis predikat dan kelengkapan elemen yang mengiringi subjek?',
        branches: [
          { condition: 'Subjek + Kata Kerja Intransitif', outcome: 'Pola 1: S - V', rule: 'The satellite vanished.' },
          { condition: 'Subjek + Kata Kerja Transitif + Objek Langsung', outcome: 'Pola 2: S - V - O', rule: 'Researchers published the paper.' },
          { condition: 'Subjek + Linking Verb + Subject Complement', outcome: 'Pola 3: S - V - C', rule: 'The findings remain valid.' },
          { condition: 'Subjek + Transitive + Indirect + Direct Object', outcome: 'Pola 4: S - V - IO - DO', rule: 'The agency awarded the team a grant.' },
          { condition: 'Subjek + Transitive + Object + Object Complement', outcome: 'Pola 5: S - V - O - OC', rule: 'The committee appointed him chair.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'The boss made him the project leader because of his good work.',
      standard: 'The committee appointed him project director due to his exemplary performance.',
      academicHigh: 'The governing council unanimously designated him principal investigator in recognition of his groundbreaking scholarship.',
      analysis: 'Menggunakan pola S-V-O-OC berdensitas tinggi: The governing council (S) + designated (V) + him (O) + principal investigator (OC).'
    },
    canDoChecklist: [
      'Saya mampu membedakan Object (menerima aksi) dari Subject Complement (menerangkan sifat subjek).',
      'Saya menguasai 5 pola dasar kalimat bahasa Inggris tanpa mencampuradukkan pola.',
      'Saya paham pola S-V-O-OC dengan kata kerja seperti call, appoint, declare, elect.'
    ],
    pocketAxioms: [
      'S-V-C menggunakan Linking Verb; Complement berupa Adjective atau Noun pembukti keadaan.',
      'S-V-IO-DO: Objek tidak langsung (penerima) selalu mendahului objek langsung kecuali memakai preposisi (to/for).',
      'S-V-O-OC: Object Complement menjelaskan status atau keadaan yang dialami oleh Direct Object.'
    ]
  },
  'modul-21-tenses-present': {
    decisionTree: [
      {
        step: 'Langkah 1: Tentukan Dimensi Waktu & Relevansi Sekarang',
        question: 'Apakah peristiwa merupakan fakta umum, sedang berlangsung, atau memiliki koneksi durasi masa lalu?',
        branches: [
          { condition: 'Fakta abadi, hukum alam, atau definisi sains', outcome: 'Present Simple', rule: 'Water boils at 100°C; The formula predicts equilibrium.' },
          { condition: 'Proses tren kontemporer saat ini', outcome: 'Present Continuous', rule: 'Global temperatures are rising steadily.' },
          { condition: 'Peristiwa lampau dengan dampak relevan saat ini', outcome: 'Present Perfect', rule: 'Scientists have confirmed the hypothesis (dilarang ada tahun lampau spesifik!).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'Scientists have found the new cure in 2020.',
      standard: 'Scientists discovered the new cure in 2020.',
      academicHigh: 'Epidemiologists successfully synthesized the therapeutic vaccine in 2020, which has since transformed global public health.',
      analysis: 'Menghilangkan kesalahan fatal present perfect dengan tahun lampau spesifik (*have found in 2020) menjadi Past Simple "synthesized", lalu memadukannya dengan Present Perfect untuk dampak saat ini.'
    },
    canDoChecklist: [
      'Saya tidak akan pernah menggabungkan Present Perfect (have + V3) dengan penanda waktu lampau spesifik (in 2019, yesterday).',
      'Saya menggunakan Present Simple untuk kebenaran ilmiah dan simpulan penelitian permanen.',
      'Saya paham bahwa Present Perfect Continuous menekankan akumulasi durasi waktu tanpa jeda.'
    ],
    pocketAxioms: [
      'Present Simple = Fakta permanen / hukum alam / definisi universal.',
      'Present Perfect = Aksi masa lalu dengan jendela waktu yang masih terbuka atau hasil berdampak sekarang.',
      'Dilarang keras memakai Present Perfect jika ada penanda waktu lampau definitif (in 2021, last year).'
    ]
  },
  'modul-29-passive-voice': {
    decisionTree: [
      {
        step: 'Langkah 1: Identifikasi Kelayakan Pasif',
        question: 'Apakah fokus penulisan terletak pada prosedur/objek daripada pelaku aksi?',
        branches: [
          { condition: 'Kata kerja transitif & pelaku tidak relevan/bersifat formal', outcome: 'Gunakan Passive Voice', rule: 'Object + Be (sesuai tenses) + V3 (The samples were sterilized).' },
          { condition: 'Pernyataan klaim umum / temuan opini ilmiah', outcome: 'Impersonal Passive', rule: 'It is widely believed that... / The compound is thought to inhibit...' }
        ]
      }
    ],
    registerLadder: {
      informal: 'People think that global warming makes storms worse.',
      standard: 'It is believed that global warming exacerbates storms.',
      academicHigh: 'Anthropogenic climate change is widely acknowledged to exacerbate extreme meteorological phenomena.',
      analysis: 'Transformasi dari klausa informal aktif menjadi Impersonal Subject-Raised Passive "is widely acknowledged to exacerbate".'
    },
    canDoChecklist: [
      'Saya mampu menyusun bentuk pasif untuk seluruh 12 tenses dengan rumus "Be + V3".',
      'Saya menguasai Impersonal Passive (It is estimated that... / The drug is reported to reduce...).',
      'Saya tidak pernah mempasifkan kata kerja intransitif (arrive, occur, exist).'
    ],
    pocketAxioms: [
      'Rumus mutlak Passive Voice: Auxiliary BE (sesuai tenses) + VERB 3 (Past Participle).',
      'Impersonal Passive ("It is recognized that...", "X is considered to be...") adalah standar emas IELTS Band 8.5+.',
      'Hanya Transitive Verbs yang dapat diubah ke bentuk pasif.'
    ]
  },
  'modul-30-conditionals-inversion': {
    decisionTree: [
      {
        step: 'Langkah 1: Skrining Probabilitas & Realitas Pengandaian',
        question: 'Apakah kondisi pengandaian nyata (realistis) atau berlawanan dengan fakta (hipotetis)?',
        branches: [
          { condition: 'Kemungkinan nyata di masa depan', outcome: 'First Conditional', rule: 'If + Present Simple, Will + V1. Inversi: Should you require assistance...' },
          { condition: 'Hipotetis masa sekarang (berlawanan dengan fakta)', outcome: 'Second Conditional', rule: 'If + Past Simple (Were), Would + V1. Inversi: Were the government to intervene...' },
          { condition: 'Penyesalan / hipotetis masa lalu', outcome: 'Third Conditional', rule: 'If + Past Perfect, Would have + V3. Inversi: Had the regulatory body acted...' }
        ]
      }
    ],
    registerLadder: {
      informal: 'If the government helped earlier, the company would not fail.',
      standard: 'If the government had intervened earlier, the company would not have collapsed.',
      academicHigh: 'Had the regulatory authorities intervened in a timely manner, the financial institution would not have suffered catastrophic insolvency.',
      analysis: 'Menerapkan Inverted Third Conditional tingkat tinggi ("Had the authorities intervened...") tanpa kata "if", menghasilkan nada formal jurnal ilmiah.'
    },
    canDoChecklist: [
      'Saya menguasai struktur Inversi Pengandaian: Should (Type 1), Were (Type 2), dan Had (Type 3).',
      'Saya paham bahwa dalam Second Conditional formal, subjek "I/He/She/It" selalu menggunakan "were", bukan "was".',
      'Saya mampu mendeteksi Mixed Conditionals (kondisi masa lalu yang berakibat pada masa sekarang).'
    ],
    pocketAxioms: [
      'Inversi Tipe 1: "Should + S + V1" menggantikan "If + S + Present".',
      'Inversi Tipe 2: "Were + S + to V1 / Adjective" menggantikan "If + S + Past".',
      'Inversi Tipe 3: "Had + S + V3" menggantikan "If + S + had V3".'
    ]
  },
  'modul-38-academic-hedging': {
    decisionTree: [
      {
        step: 'Langkah 1: Skrining Derajat Kepastian Klaim Ilmiah',
        question: 'Apakah klaim merupakan fakta mutlak 100% atau interpretasi empiris yang berhati-hati?',
        branches: [
          { condition: 'Klaim interpretasi data penelitian / hipotesis', outcome: 'Gunakan Hedging Verbs / Adverbs', rule: 'Gunakan: suggests, indicates, appears to, tends to, potentially.' },
          { condition: 'Hukum alam abadi / bukti matematis definitif', outcome: 'Factual Statement', rule: 'Gunakan present factual (The formula calculates equilibrium).' }
        ]
      }
    ],
    registerLadder: {
      informal: 'This study proves that playing games is definitely bad for all children.',
      standard: 'This study indicates that excessive video gaming is harmful to children.',
      academicHigh: 'The empirical findings suggest that excessive exposure to interactive digital media may potentially impair cognitive attentiveness in pediatric cohorts.',
      analysis: 'Menggantikan generalisasi mutlak (*proves that... definitely bad for all) dengan academic hedging elegan: "suggests", "may potentially impair", dan "pediatric cohorts".'
    },
    canDoChecklist: [
      'Saya menghindari kata over-klaim absolut seperti "proves", "always", "never", "definitely" dalam esai ilmiah.',
      'Saya mampu menerapkan hedging verbs (suggests, appears, indicates) dan modal hedging (may, might, could).',
      'Saya paham bahwa hedging adalah indikator utama kematangan berpikir akademis di IELTS & TOEFL.'
    ],
    pocketAxioms: [
      'Hindari over-generalization: jangan gunakan "proves 100%", gunakan "strongly suggests".',
      'Gunakan modal hedging: "may potentially lead to" alih-alih "will cause".',
      'Gunakan adverb of frequency yang terukur: "frequently", "predominantly", bukan "always".'
    ]
  },
  'modul-39-nominalization': {
    decisionTree: [
      {
        step: 'Langkah 1: Transformasi Klausa Menjadi Frasa Benda',
        question: 'Bagaimana memadatkan kalimat verbal sebab-akibat menjadi Noun Phrase berbobot?',
        branches: [
          { condition: 'Klausa verbal konjungtif ("Because X happened, Y did...")', outcome: 'Terapkan Nominalisasi', rule: 'The [Noun of Action] of X precipitated [Noun of Result] in Y.' },
          { condition: 'Frasa kata sifat ("The system is reliable...")', outcome: 'Abstrak Noun', rule: 'The reliability of the system enhances operational efficacy.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'Because the city grew very fast, water became very scarce.',
      standard: 'Because the population expanded rapidly, water scarcity increased.',
      academicHigh: 'Unprecedented urban expansion precipitated severe regional water scarcity.',
      analysis: 'Mengubah klausa sebab-akibat panjang menjadi kalimat berdensitas leksikal tinggi dengan nominalisasi: "Unprecedented urban expansion" (S) + "precipitated" (V) + "severe regional water scarcity" (O).'
    },
    canDoChecklist: [
      'Saya mampu mengubah kata kerja (expand ➔ expansion, destroy ➔ destruction) menjadi kata benda formal.',
      'Saya bisa memadatkan kalimat majemuk panjang menjadi klausa tunggal berdensitas leksikal tinggi.',
      'Saya memahami peran nominalisasi dalam mendongkrak skor Lexical Resource IELTS Band 8.5+.'
    ],
    pocketAxioms: [
      'Nominalisasi memindahkan muatan makna dari kata kerja/kata hubung ke dalam Frasa Benda Padat.',
      'Gunakan kata kerja relasional akademik: precipitate, induce, engender, correlate with, yield.',
      'Jaga keseimbangan agar tulisan tetap jernih dan tidak terbebani tumpukan frasa benda yang berlebihan.'
    ]
  }
};

// Now apply enhancements to MERAKI_CURRICULUM entries
for (const [modId, enh] of Object.entries(moduleEnhancements)) {
  const targetTopicRegex = new RegExp(`(id:\\s*'${modId}'[\\s\\S]*?coreConceptSummary:[\\s\\S]*?)(sections:\\s*\\[)`, 'm');
  if (targetTopicRegex.test(content)) {
    const formattedEnh = `decisionTree: ${JSON.stringify(enh.decisionTree, null, 6)},
    registerLadder: ${JSON.stringify(enh.registerLadder, null, 6)},
    canDoChecklist: ${JSON.stringify(enh.canDoChecklist, null, 6)},
    pocketAxioms: ${JSON.stringify(enh.pocketAxioms, null, 6)},
    `;
    content = content.replace(targetTopicRegex, `$1${formattedEnh}$2`);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully enriched meraki-data.ts with all 4 pedagogical pillars!');
