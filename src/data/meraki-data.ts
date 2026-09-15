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
  // TAHAP 0: ORIENTASI & PENGENALAN AWAL BAHASA INGGRIS (LEVEL NOL MUTLAK)
  // =========================================================================
  {
    id: 'modul-00-pengenalan-awal',
    stageNumber: 0,
    stageName: 'Tahap 0: Orientasi & Pengenalan Awal Bahasa Inggris',
    categoryKey: 'Word Classes',
    moduleNumber: 0,
    title: 'Pengenalan Awal: Alfabet, Fonetik, Kosakata Harian & Salam Sapaan',
    subtitle: 'Mulai dari nol mutlak: bunyi vokal & konsonan, angka, warna, salam, kata tanya 5W1H, dan kalimat pertama',
    levelBadge: 'Nol Mutlak · Modul 00',
    estimatedMinutes: 25,
    prerequisite: 'None (Mulai dari Nol)',
    mentalModelIntro: "Banyak pemula merasa minder belajar bahasa Inggris karena mengira bahasa ini harus langsung dimulai dari menghafal rumus tenses yang rumit. Padahal, bahasa pada hakikatnya adalah alat komunikasi yang dimulai dari bunyi (fonem), simbol (alfabet), dan kata-kata konkret di sekitar kita.\n\nBahasa Inggris memiliki keunikan mendasar dibanding bahasa Indonesia: ejaannya tidak selalu sama dengan cara membacanya (non-phonetic language). Huruf 'A' misalnya, bisa berbunyi pendek seperti pada 'cat' /æ/ atau berbunyi panjang seperti pada 'cake' /eɪ/. Di modul ini, kamu akan membangun rasa percaya diri dari akar yang paling dasar: bagaimana melafalkan 26 alfabet dengan benar, mengenal angka dan warna, menyapa orang secara sopan, mengajukan pertanyaan sederhana, hingga menyusun kalimat pertamamu menggunakan kata kerja 'to be'. Kuasai modul ini sebagai pijakan kokoh sebelum memasuki tata bahasa formal di Modul 01.",
    coreConceptSummary: "Bahasa Inggris menggunakan 26 huruf alfabet Latin standar, namun memuat sekitar 44 bunyi fonetik (20 bunyi vokal dan 24 bunyi konsonan). Bunyi vokal terbagi menjadi Short Vowels (vokal pendek tertahan: cat, bed, sit, hot, but) dan Long Vowels (vokal panjang mengalir: cake, beet, bite, boat, cute). Digraf konsonan seperti ch, sh, th, ph, wh juga memiliki karakteristik bunyi unik yang wajib dilatih sejak awal.\n\nDalam kosakata sehari-hari, kuasai angka kardinal (1, 2, 3...) untuk jumlah, angka ordinal (1st, 2nd, 3rd...) untuk urutan dan tanggal, serta aturan posisi kata sifat (adjective) yang SELALU diletakkan sebelum kata benda (red car, bukan car red). Untuk berinteraksi, gunakan salam formal (Good morning/afternoon/evening) dan salam santai (Hello/Hi), serta kuasai 6 kata tanya inti (What, Who, Where, When, Why, How) yang digabungkan dengan kata kerja bantu 'to be' (Am, Is, Are) untuk membentuk kalimat tanya pertama.",
    decisionTree: [
      {
        step: 'Langkah 1: Menentukan Tipe Bunyi Vokal Kata Bahasa Inggris',
        question: 'Apakah kata berakhir dengan pola Konsonan-Vokal-Konsonan (CVC) atau memiliki huruf \'e\' bisu di akhir (Magic E)?',
        branches: [
          { condition: 'Pola CVC Tertutup (e.g. hat, pin, not, cut)', outcome: 'Lafalkan dengan Short Vowel (vokal pendek terpotong)', rule: 'Contoh: hat /hæt/, pin /pɪn/, cut /kʌt/.' },
          { condition: 'Pola Vokal + Konsonan + E Bisu (e.g. hate, pine, note, cute)', outcome: 'Lafalkan dengan Long Vowel (bunyi nama hurufnya)', rule: 'Contoh: hate /heɪt/, pine /paɪn/, note /noʊt/, cute /kjuːt/.' }
        ]
      },
      {
        step: 'Langkah 2: Menentukan Kata Kerja To Be (Present Simple)',
        question: 'Siapakah subjek pelaku yang dibicarakan?',
        branches: [
          { condition: 'Subjek orang pertama tunggal \'I\'', outcome: 'Gunakan \'am\' (I am / I\'m)', rule: 'Contoh: I am a student. I am happy.' },
          { condition: 'Subjek tunggal ketiga \'He\', \'She\', \'It\', atau nama orang tunggal', outcome: 'Gunakan \'is\' (He is / She is / It is)', rule: 'Contoh: She is a doctor. It is cold.' },
          { condition: 'Subjek jamak \'You\', \'We\', \'They\', atau benda jamak', outcome: 'Gunakan \'are\' (You are / We are / They are)', rule: 'Contoh: We are ready. They are friendly.' }
        ]
      }
    ],
    registerLadder: {
      informal: 'Hey, what\'s up? I\'m Alex.',
      standard: 'Hello, good morning. My name is Alex. Nice to meet you.',
      academicHigh: 'Good morning, esteemed colleagues. Allow me to introduce myself; my name is Alexander Vance.',
      analysis: 'Tingkatan sapaan bahasa Inggris bergerak dari kasual (Hey, what\'s up) untuk teman sebaya, standar formal sehari-hari (Hello/Good morning + My name is), hingga protokol resmi akademis (Allow me to introduce myself).'
    },
    canDoChecklist: [
      'Mampu melafalkan 26 huruf alfabet bahasa Inggris dan membedakan vokal pendek vs vokal panjang.',
      'Mampu menyebutkan angka 1-100, tanggal lahir, dan warna benda di sekitar dengan struktur yang tepat (Adjective + Noun).',
      'Mampu menyapa, memperkenalkan diri, dan mengucapkan terima kasih serta maaf dengan ekspresi yang lazim.',
      'Mampu mengajukan pertanyaan dasar menggunakan 5W1H dan kata kerja to be (am/is/are).'
    ],
    pocketAxioms: [
      'Aksioma Posisi Sifat: Dalam bahasa Inggris, kata sifat SELALU mendahului kata benda (a blue pen ✔, a pen blue ❌).',
      'Aksioma Vokal Non-Fonetik: Huruf tulisan tidak sama dengan bunyi ucapan; pelajari simbol fonetik dasar.',
      'Aksioma Pasangan To Be: I berpasangan dengan am, He/She/It dengan is, dan You/We/They dengan are.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: 'Sistem 26 Alfabet, Fonetik IPA & Vokal Pendek vs Panjang',
        explanation: 'Bahasa Inggris menggunakan 26 alfabet Latin, namun ejaannya terkenal tidak mencerminkan bunyi secara langsung. Perhatikan perbedaan bunyi Short Vowels (pendek tertahan) dan Long Vowels (panjang mengalir):\n- A pendek: cat /kæt/ vs A panjang: cake /keɪk/\n- E pendek: bed /bɛd/ vs E panjang: beet /biːt/\n- I pendek: sit /sɪt/ vs I panjang: site /saɪt/\n- O pendek: hop /hɒp/ vs O panjang: hope /hoʊp/\n- U pendek: cut /kʌt/ vs U panjang: cute /kjuːt/\n\nWaspadai juga konsonan gabungan (digraphs):\n- \'th\' bersuara (/ð/): this, that, they\n- \'th\' tanpa suara (/θ/): think, thank, three\n- \'sh\' (/ʃ/): ship, shoe, English\n- \'ch\' (/tʃ/): chair, check, teacher\n- Huruf bisu (Silent Letters): knee (/niː/), write (/raɪt/), comb (/koʊm/).',
        formula: 'Short Vowel (CVC: cat, sit, hop) vs Long Vowel (CVCe: cake, site, hope)',
        examples: [
          {
            sentence: 'The cat sat on the comfortable mat.',
            translation: 'Kucing itu duduk di atas keset yang nyaman.',
            note: 'cat, sat, mat semuanya menggunakan vokal pendek /æ/.'
          },
          {
            sentence: 'Please take your time to write the note.',
            translation: 'Silakan luangkan waktumu untuk menulis catatan itu.',
            note: 'take, time, note semuanya memiliki huruf \'e\' bisu di akhir yang membuat vokal sebelumnya berbunyi panjang.'
          }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'I want to by a car yesterday.',
          correctSentence: 'I want to buy a car yesterday.',
          linguisticReason: 'Bahasa Inggris memiliki homofon (kata dengan bunyi sama persis tetapi tulisan dan artinya berbeda: by, buy, bye; to, too, two).'
        },
        commonPitfall: 'Melafalkan huruf \'k\' pada kata seperti \'knife\', \'know\', atau \'knee\'. Huruf K di depan N selalu BISU (silent).'
      },
      {
        stepNumber: '02',
        title: 'Angka (Kardinal & Ordinal), Warna & Urutan Kata Sifat (Adjective + Noun)',
        explanation: 'Ada dua jenis angka yang wajib dikuasai sejak hari pertama:\n1. **Cardinal Numbers (Jumlah)**: one (1), two (2), three (3), ten (10), twenty (20), one hundred (100).\n   *Perhatian penekanan suku kata*: thirTEEN (13) vs THIRty (30), fifTEEN (15) vs FIFty (50).\n2. **Ordinal Numbers (Urutan/Tanggal)**: 1st (first), 2nd (second), 3rd (third), 4th (fourth), 21st (twenty-first).\n\n**Aturan Posisi Kata Sifat (Adjective Order):**\nDalam bahasa Indonesia kita menyebut "mobil merah" (benda + sifat). Namun dalam bahasa Inggris, urutannya TERBALIK: kata sifat selalu berada di depan kata benda:\n- Red car (bukan car red)\n- Tall building (bukan building tall)\n- Friendly teacher (bukan teacher friendly)',
        formula: 'Article (a / an / the) + Adjective (sifat/warna) + Noun (kata benda)',
        examples: [
          {
            sentence: 'She drives an elegant black car to the university.',
            translation: 'Dia mengendarai sebuah mobil hitam yang elegan ke universitas.',
            note: 'an + elegant (sifat) + black (warna) + car (benda).'
          },
          {
            sentence: 'Today is my twenty-first birthday.',
            translation: 'Hari ini adalah hari ulang tahun saya yang ke-21.',
            note: 'twenty-first (ordinal) untuk menyatakan urutan ulang tahun.'
          }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'I have a house big with a door white.',
          correctSentence: 'I have a big house with a white door.',
          linguisticReason: 'Dalam sintaksis bahasa Inggris, frasa nomina (noun phrase) mewajibkan modifier sifat mendahului inti kata bendanya (Pre-nominal Adjective Placement).'
        }
      },
      {
        stepNumber: '03',
        title: 'Salam Sapaan (Greetings), Perkenalan Diri & Ungkapan Sehari-hari',
        explanation: 'Kuasai register sapaan berdasarkan waktu dan tingkat keakraban:\n- **Pagi (hingga 12.00 siang)**: Good morning!\n- **Siang ke Sore (12.00 - 18.00)**: Good afternoon!\n- **Malam (Sapaan bertemu)**: Good evening! (Ingat: \'Good night\' hanya untuk berpamitan tidur, BUKAN untuk menyapa saat tiba!).\n\n**Formula Perkenalan Diri (Introducing Yourself):**\n- "Hello, my name is Sarah." / "Hi, I\'m Sarah."\n- "I am from Jakarta, Indonesia."\n- "I am a university student." / "I work as a software engineer."\n- "Nice to meet you!" ➔ Balasan: "Nice to meet you too!"\n\n**Ungkapan Kesopanan Esensial:**\n- Please (Tolong/Silakan)\n- Thank you very much / Thanks a lot (Terima kasih)\n- You\'re welcome / Don\'t mention it (Sama-sama)\n- Excuse me (Permisi - untuk menarik perhatian atau lewat)\n- I am sorry (Maaf - untuk penyesalan atas kekeliruan)',
        formula: 'Greeting + [My name is / I am...] + [I am from...] + [Nice to meet you!]',
        examples: [
          {
            sentence: 'Good morning, everyone. My name is David, and I am delighted to be here today.',
            translation: 'Selamat pagi, semuanya. Nama saya David, dan saya sangat senang berada di sini hari ini.',
            note: 'Format perkenalan standar yang sopan dan profesional.'
          },
          {
            sentence: 'Excuse me, could you please tell me where the library is? — You are welcome.',
            translation: 'Permisi, bisakah Anda memberitahu saya di mana perpustakaannya? — Sama-sama.',
            note: 'Penggunaan \'Excuse me\' untuk membuka pertanyaan kepada orang yang belum dikenal.'
          }
        ],
        commonPitfall: 'Mengucapkan "Good night" saat baru tiba di sebuah acara malam hari. Gunakan "Good evening" untuk menyapa, dan "Good night" hanya saat berpamitan pulang/tidur.'
      },
      {
        stepNumber: '04',
        title: 'Kata Tanya Inti (5W1H) & Struktur Pertanyaan Sederhana',
        explanation: 'Untuk menggali informasi dalam bahasa Inggris, gunakan 6 Question Words utama (5W1H):\n1. **What** (Apa): Menanyakan benda, tindakan, atau informasi (*What is your name? What do you do?*)\n2. **Who** (Siapa): Menanyakan orang atau pelaku (*Who is that man? Who is your teacher?*)\n3. **Where** (Di mana / Ke mana): Menanyakan tempat atau lokasi (*Where do you live? Where is the hospital?*)\n4. **When** (Kapan): Menanyakan waktu (*When is the meeting? When does the class start?*)\n5. **Why** (Mengapa): Menanyakan alasan atau penyebab (*Why are you learning English?*)\n6. **How** (Bagaimana / Berapa): Menanyakan cara, kondisi, atau kuantitas (*How are you? How much does it cost? How old are you?*)\n\n**Pola Pertanyaan dengan To Be:**\nQuestion Word + be (am/is/are) + Subject?\nContoh: *Where is your house? / Who are those people?*',
        formula: 'WH-Question Word + [am / is / are] + Subject + [Complement / Preposition]?',
        examples: [
          {
            sentence: 'Where are you from? — I am from Indonesia.',
            translation: 'Dari mana Anda berasal? — Saya berasal dari Indonesia.',
            note: 'Pola standar menanyakan asal dengan kata kerja to be.'
          },
          {
            sentence: 'Why is English important for your career? — Because it opens international opportunities.',
            translation: 'Mengapa bahasa Inggris penting bagi karier Anda? — Karena membuka peluang internasional.',
            note: 'Pertanyaan \'Why\' dijawab dengan klausa alasan berawalan \'Because\'.'
          }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'Where you come from?',
          correctSentence: 'Where are you from? / Where do you come from?',
          linguisticReason: 'Dalam bahasa Inggris, kalimat tanya tidak boleh hanya membalik intonasi; wajib menyertakan auxiliary verb (do/does) atau linking verb (am/is/are).'
        }
      },
      {
        stepNumber: '05',
        title: 'Pengenalan Kata Kerja \'To Be\' (Am, Is, Are) untuk Identitas, Asal & Sifat',
        explanation: 'Kata kerja \'To Be\' adalah tulang punggung kalimat deskriptif dalam bahasa Inggris. Berbeda dengan bahasa Indonesia yang bisa langsung menggabungkan subjek dan sifat ("Saya senang", "Dia dokter"), bahasa Inggris mewajibkan hadirnya To Be sebagai jembatan:\n\n| Subjek | Bentuk To Be | Bentuk Singkat (Contraction) | Bentuk Negatif |\n|---|---|---|---|\n| **I** | am | I\'m | I am not (I\'m not) |\n| **You** | are | You\'re | You are not (You aren\'t) |\n| **He** | is | He\'s | He is not (He isn\'t) |\n| **She** | is | She\'s | She is not (She isn\'t) |\n| **It** | is | It\'s | It is not (It isn\'t) |\n| **We** | are | We\'re | We are not (We aren\'t) |\n| **They** | are | They\'re | They are not (They aren\'t) |\n\n**3 Fungsi Utama To Be:**\n1. **Menyatakan Identitas / Profesi**: *I am a doctor. She is a teacher.*\n2. **Menyatakan Sifat / Emosi**: *They are very kind. He is tall.*\n3. **Menyatakan Lokasi / Keberadaan**: *The keys are on the desk. We are in Jakarta.*',
        formula: 'Subject + [am / is / are] + [Noun / Adjective / Prepositional Phrase]',
        examples: [
          {
            sentence: 'She is an experienced architect, and they are her colleagues.',
            translation: 'Dia adalah seorang arsitek berpengalaman, dan mereka adalah rekan-rekannya.',
            note: 'She berpasangan dengan is; they berpasangan dengan are.'
          },
          {
            sentence: 'The weather is not warm today; it is rather chilly.',
            translation: 'Cuacanya tidak hangat hari ini; hawanya agak dingin.',
            note: 'Bentuk negatif to be: is not.'
          }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'I agree with you because I am agree.',
          correctSentence: 'I agree with you because I agree.',
          linguisticReason: 'Kata "agree" dalam bahasa Inggris adalah VERBA (kata kerja aksi pemikiran), bukan kata sifat. Mengucapkan "I am agree" adalah kekeliruan fatal yang sangat sering dibuat pemula.'
        },
        commonPitfall: 'Menghilangkan to be seperti "She very smart" alih-alih "She is very smart". Setiap kalimat wajib memiliki kata kerja.'
      }
    ],
    examBridge: {
      ieltsApplication: 'Pada IELTS Listening Section 1, penguji selalu mengeja nama orang, kode pos, dan nomor telepon huruf per huruf (e.g. "B-A-N-K-S"). Menguasai fonetik alfabet adalah syarat mutlak menghindari kehilangan 5-10 poin gratis di awal tes.',
      toeflApplication: 'Pada TOEFL Speaking Task 1, kejelasan artikulasi pengucapan huruf vokal dan kata tanya dasar menentukan skor Delivery dan kelancaran alur bicara.',
      scoringImpact: 'Mencegah kesalahan ejaan nama dan angka di seksi awal ujian internasional, yang berpotensi mengangkat skor dasar Listening sebesar 0.5 - 1.0 band.'
    },
    goldenRules: [
      'Kata sifat SELALU berada di depan kata benda: \'a yellow jacket\', bukan \'a jacket yellow\'.',
      'Setiap kalimat bahasa Inggris wajib memiliki kata kerja; gunakan To Be (am/is/are) jika tidak ada kata kerja aksi.',
      'Perhatikan huruf bisu (silent letters): K di depan N pada knife/know/knee TIDAK dibaca.',
      'Gunakan \'Good evening\' untuk menyapa malam hari, dan simpan \'Good night\' hanya untuk pamitan tidur.'
    ],
    questions: [
      {
        id: 'q-m00-1',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Manakah pasangan kata berikut yang keduanya menggunakan bunyi vokal pendek (Short Vowel)?',
        options: ['cat dan sit', 'cake dan site', 'cute dan boat', 'note dan pine'],
        correctAnswer: 'cat dan sit',
        explanation: '\'cat\' menggunakan vokal pendek /æ/ dan \'sit\' menggunakan vokal pendek /ɪ/. Opsi lainnya menggunakan long vowels.',
        ruleReference: 'Modul 00: Fonetik Vokal Pendek vs Panjang'
      },
      {
        id: 'q-m00-2',
        category: 'Sentence Architecture',
        difficulty: 'Dasar',
        question: 'Pilihlah susunan frasa kata benda bahasa Inggris yang tepat sesuai kaidah tata bahasa:',
        options: ['a red expensive car', 'an expensive red car', 'a car expensive red', 'an expensive car red'],
        correctAnswer: 'an expensive red car',
        explanation: 'Kata sifat kualitas (expensive) diletakkan sebelum kata sifat warna (red), dan keduanya mendahului kata benda (car).',
        ruleReference: 'Modul 00: Urutan Kata Sifat (Adjective + Noun)'
      },
      {
        id: 'q-m00-3',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Lengkapi kalimat berikut: "Good afternoon. Mr. Robert _____ our new biology teacher, and we _____ his students."',
        options: ['is / are', 'are / is', 'am / are', 'is / am'],
        correctAnswer: 'is / are',
        explanation: 'Mr. Robert adalah subjek tunggal ketiga (He) sehingga menggunakan \'is\', sedangkan \'we\' adalah subjek jamak sehingga menggunakan \'are\'.',
        ruleReference: 'Modul 00: Pasangan To Be Subjek'
      },
      {
        id: 'q-m00-4',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Pertanyaan yang paling tepat untuk menanyakan alasan seseorang mempelajari bahasa Inggris adalah:',
        options: ['Why are you learning English?', 'What are you learning English?', 'Where you learn English?', 'Who is you learning English?'],
        correctAnswer: 'Why are you learning English?',
        explanation: '\'Why\' digunakan untuk menanyakan alasan atau tujuan, dengan struktur to be \'are\' mendahului subjek \'you\'.',
        ruleReference: 'Modul 00: Kata Tanya 5W1H'
      },
      {
        id: 'q-m00-5',
        category: 'Word Classes',
        difficulty: 'Dasar',
        question: 'Manakah kata berikut yang memiliki huruf bisu (Silent Letter) yang TIDAK boleh dilafalkan?',
        options: ['knife', 'kitchen', 'pencil', 'blanket'],
        correctAnswer: 'knife',
        explanation: 'Pada kata \'knife\', huruf \'k\' di awal kata sebelum huruf \'n\' adalah silent letter sehingga dilafalkan /naɪf/.',
        ruleReference: 'Modul 00: Silent Letters'
      },
      {
        id: 'q-m00-6',
        category: 'Sentence Architecture',
        difficulty: 'Menengah',
        question: 'Seseorang baru saja berkenalan dengan Anda di sebuah konferensi internasional dan berkata: "Nice to meet you." Respon paling tepat dan alami adalah:',
        options: ['Nice to meet you too!', 'You are very welcome.', 'Good night, sir.', 'Yes, I am agree.'],
        correctAnswer: 'Nice to meet you too!',
        explanation: 'Respon baku dan sopan terhadap sapaan "Nice to meet you" adalah "Nice to meet you too!".',
        ruleReference: 'Modul 00: Salam & Perkenalan Diri'
      },
      {
        id: 'q-m00-7',
        category: 'Word Classes',
        difficulty: 'Menengah',
        question: 'Pilihlah bentuk kalimat negatif yang paling tepat dari kalimat: "They are ready for the examination."',
        options: ['They are not ready for the examination.', 'They not are ready for the examination.', 'They do not ready for the examination.', 'They is not ready for the examination.'],
        correctAnswer: 'They are not ready for the examination.',
        explanation: 'Bentuk negatif kalimat dengan kata kerja to be dibentuk cukup dengan menambahkan \'not\' setelah to be (\'are not\' atau \'aren\'t\').',
        ruleReference: 'Modul 00: Bentuk Negatif To Be'
      },
      {
        id: 'q-m00-8',
        category: 'Exam Readiness',
        difficulty: 'Lanjutan',
        question: 'Pada IELTS Listening Section 1, jika resepsionis mengeja nama keluarga tamu sebagai "C-L-A-R-K-E", bagaimana penulisan yang benar di lembar jawaban?',
        options: ['Clarke', 'Clark', 'Clerk', 'Clairk'],
        correctAnswer: 'Clarke',
        explanation: 'Ejaan huruf per huruf harus dicatat persis: C-L-A-R-K-E = Clarke (dengan huruf e di akhir).',
        ruleReference: 'Modul 00: Ejaan Alfabet Ujian Internasional'
      }
    ],
    errorCorrectionTasks: [
      {
        id: 'ec-m00-1',
        flawedSentence: 'She bought a dress blue for the party yesterday.',
        flawLocation: 'dress blue',
        correctedSentence: 'She bought a blue dress for the party yesterday.',
        linguisticExplanation: 'Dalam bahasa Inggris, kata sifat (adjective) seperti \'blue\' wajib diletakkan SEBELUM kata benda (noun) \'dress\'.'
      },
      {
        id: 'ec-m00-2',
        flawedSentence: 'I am agree with your opinion regarding the new schedule.',
        flawLocation: 'am agree',
        correctedSentence: 'I agree with your opinion regarding the new schedule.',
        linguisticExplanation: '\'Agree\' adalah kata kerja (verb), bukan kata sifat. Kalimat present tense cukup menyatakan \'I agree\', bukan \'I am agree\'.'
      },
      {
        id: 'ec-m00-3',
        flawedSentence: 'Where you live now in this city?',
        flawLocation: 'Where you live',
        correctedSentence: 'Where do you live now in this city?',
        linguisticExplanation: 'Kalimat tanya bahasa Inggris wajib menyertakan kata kerja bantu (auxiliary verb) seperti \'do\' setelah kata tanya \'Where\'.'
      },
      {
        id: 'ec-m00-4',
        flawedSentence: 'Good night, everyone! Welcome to our seminar this evening.',
        flawLocation: 'Good night',
        correctedSentence: 'Good evening, everyone! Welcome to our seminar this evening.',
        linguisticExplanation: '\'Good night\' hanya digunakan untuk berpamitan pergi atau tidur. Untuk menyapa audiens di malam hari, gunakan \'Good evening\'.'
      }
    ]
  },
  // =========================================================================
  // TAHAP 1: FONDASI MUTLAK & ARSITEKTUR SUBJEK-PREDIKAT INTI
  // =========================================================================
  {
    id: 'modul-01-subject-pronouns',
    stageNumber: 1,
    stageName: 'Tahap 1: Fondasi Mutlak & Subjek-Predikat Inti',
    categoryKey: 'Word Classes',
    moduleNumber: 1,
    title: 'Subjek Inti & Sistem Pronoun: I, You, They, We, He, She, It',
    subtitle: 'Mengenali aktor pembicaraan, pembagian orang ke-1/2/3, dan kasus Subject vs Object',
    levelBadge: 'Fondasi Mutlak · Modul 01',
    estimatedMinutes: 20,
    mentalModelIntro: "Dalam bahasa Indonesia, kita terbiasa berucap santai seperti \"Kemarin hujan lebat\" tanpa menyebutkan pelakunya. Namun, bahasa Inggris mewajibkan hadirnya subjek di setiap kalimat. Ketika tidak ada pelaku nyata di alam fisik, mereka menciptakan Dummy Subject (subjek semu) seperti \"It\" untuk cuaca (\"It is raining\") dan \"There\" untuk keberadaan (\"There are three reasons\") agar struktur kalimat tetap berdiri kokoh.\n\nDi modul ini, kamu akan memahami perpindahan peran kata ganti (pronoun) dari pelaku di depan kata kerja (Nominative Case: I, He, She) menjadi penerima aksi di belakang kata kerja atau preposisi (Accusative Case: me, him, her). Kita juga akan membedah etika subjek gabungan seperti \"Dr. Vance and I\" serta menjaga kejelasan kata benda yang dirujuk (anteseden) agar tulisanmu selalu jernih dan berwibawa.",
    coreConceptSummary: "Bahasa Inggris adalah Non-pro-drop language—artinya bahasa yang mewajibkan subjek hadir secara eksplisit di setiap kalimat. Jika tidak ada pelaku biologis nyata, posisi subjek diisi oleh Dummy Subject (subjek semu seperti \"It\" dan \"There\"). Bentuk kata ganti orang (pronoun) juga wajib menyesuaikan posisinya: gunakan Nominative Case (I, You, They, We, He, She, It) untuk pelaku aksi di depan kata kerja, dan Accusative Case (me, you, them, us, him, her, it) untuk penerima aksi setelah kata kerja atau kata depan (preposisi).\n\nSaat menyusun subjek majemuk (Compound Subject), tempatkan orang lain sebelum dirimu sendiri (\"Dr. Vance and I\", bukan \"Me and Dr. Vance\"). Pastikan pula setiap kata ganti memiliki Anteseden (kata benda asal rujukan) yang jelas dan selaras dalam jumlah maupun jenisnya agar pembaca tidak bingung.",
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
      'Tidak pernah lagi menggunakan Object Pronoun di posisi subjek (e.g. Her is a doctor ❌).',
      'Mampu menyusun frasa subjek majemuk secara sopan dan baku (e.g. My colleague and I).'
    ],
    pocketAxioms: [
      'Aksioma Subjek: Tidak ada kalimat tanpa subjek dalam bahasa Inggris (kecuali kalimat perintah/imperative).',
      'Aksioma Urutan Kesopanan: Tempatkan orang lain sebelum "I" pada subjek gabungan (Dr. Vance and I).'
    ],
    sections: [
        {
                "stepNumber": "01",
                "title": "Taksonomi Kasus Gramatikal: Nominative vs Accusative Case",
                "explanation": "Bayangkan sebuah drama panggung di mana aktor dan korban memiliki kostum yang berbeda. Dalam tata bahasa Inggris, kata ganti orang (Personal Pronouns) masih memakai 'kostum' yang berbeda tergantung peran mereka, sesuatu yang kita sebut Case System. Jika mereka menjadi aktor yang melakukan aksi (Nominative Case seperti I, You, He, She), posisinya kokoh di depan sebagai subjek. Tapi coba perhatikan saat mereka menjadi pihak yang menerima aksi atau objek (Accusative Case seperti me, you, him, her), bentuknya otomatis berubah. Perubahan wujud inilah yang menjadi pondasi awal menyusun kalimat bahasa Inggris yang tepat.",
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
                "explanation": "Dalam bahasa Indonesia, kita biasa santai bilang \"Lagi hujan nih\" tanpa perlu repot mencari siapa pelakunya. Nah, bahasa Inggris itu sangat kaku soal aturan ini; setiap kalimat wajib punya subjek yang mengisi kursi kosong, meski tidak ada pelaku aslinya. Untuk menyiasati hal ini, digunakanlah subjek 'palsu' atau Expletive Subject seperti 'It' untuk membicarakan cuaca, waktu, atau jarak. Ingat juga penggunaan 'There' ketika kamu hanya ingin menyatakan keberadaan sesuatu. Jadi, subjek palsu ini sebenarnya adalah pahlawan tanpa tanda jasa yang membuat kalimatmu sah secara tata bahasa.",
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
                "commonPitfall": "Menerjemahkan kalimat bahasa Indonesia secara literal tanpa menyertakan ekspletif, seperti \"Is important to analyze the data\" alih-alih \"It is important to analyze the data\"."
        },
        {
                "stepNumber": "03",
                "title": "Urutan Kesopanan & Kasus pada Subjek Majemuk (Compound Subjects)",
                "explanation": "Coba bayangkan kamu dan temanmu memenangkan sebuah lomba; rasanya lebih sopan jika kamu menyebut nama temanmu dulu, bukan? Konvensi kesopanan ini juga berlaku ketat dalam bahasa Inggris ketika kamu menggabungkan dua subjek dengan kata 'and'. Selain menyebut pihak lain sebelum diri sendiri, kamu juga wajib menjaga Integritas Kasus, artinya kata ganti (pronoun) harus tetap konsisten berbentuk subjek (nominatif). Cara paling jitu untuk memvalidasinya adalah dengan membuang sementara nama temanmu, dan dengarkan apakah kata ganti untuk dirimu terdengar janggal jika dibaca sendirian.",
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
                        "linguisticReason": "Jika \"My brother\" dihilangkan, kalimat menjadi \"Me went to London\" yang merupakan kesalahan fatal kasus objek di posisi subjek."
                }
        },
        {
                "stepNumber": "04",
                "title": "Kohesi Anafora & Pronoun Referencing dalam Retorika Akademik",
                "explanation": "Pernahkah kamu membaca cerita yang tiba-tiba muncul kata 'dia', tapi kamu bingung 'dia' yang mana yang dimaksud? Dalam penulisan esai akademik, pronoun berfungsi sebagai jembatan cerdas (Anaphoric Reference) yang merujuk kembali ke kata benda sebelumnya (Antecedent Noun). Masalah fatal yang sering membuat skor anjlok adalah ketika pronoun tersebut tidak selaras jumlahnya dengan kata benda aslinya (Pronoun-Antecedent Disagreement), atau malah merujuk pada hal yang terlalu samar (Vague Pronoun Reference). Makanya, selalu pastikan setiap kata ganti yang kamu tulis memiliki jangkar yang jelas dan tak terbantahkan di kalimat-kalimat sebelumnya.",
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
                "commonPitfall": "Menggunakan \"they\" secara ambigu tanpa anteseden jelas dalam esai formal, seperti \"They say that smoking is dangerous\" alih-alih menyebutkan sumbernya secara formal: \"Medical authorities assert that smoking is hazardous\"."
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
      'Jangan pernah meninggalkan kalimat tanpa subjek (hindari Is obvious that... ❌, gunakan It is obvious that... ✔).'
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
        linguisticExplanation: 'Bahasa Inggris adalah bahasa non-pro-drop. Kalimat wajib diawali dummy subject "It" (It is crucial...).'
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
    mentalModelIntro: "Bayangkan sakelar listrik yang menyambungkan arus agar lampu menyala. Dalam bahasa Inggris, To Be adalah sakelar tersebut. Bahasa Indonesia bisa langsung menyandingkan subjek dan kata sifat: \"Dia pintar\" atau \"Kopi ini panas\". Namun bahasa Inggris menganggap kalimat tanpa kata kerja sebagai kalimat buntung (Sentence Fragment). Di sinilah To Be hadir sebagai Copula (kata kerja penghubung) yang bertindak seperti tanda sama dengan (=) untuk merekatkan subjek dengan sifat atau identitasnya.\n\nDi modul ini, kita akan melepaskan Zero Copula Trap—yaitu kebiasaan keliru menghilangkan To Be karena terbiasa dengan pola bahasa Indonesia. Kamu akan memetakan perubahan bentuk To Be di masa kini (am, is, are) dan masa lampau (was, were), serta memahami perannya sebagai kata kerja bantu (auxiliary) untuk menyatakan aksi yang sedang berlangsung maupun membentuk kalimat pasif.",
    coreConceptSummary: "To Be berfungsi sebagai Copula (kata kerja penghubung) yang merekatkan subjek dengan Subject Complement (pelengkap subjek berupa kata sifat, kata benda profesi, atau lokasi) tanpa menyatakan tindakan fisik. To Be memiliki 8 bentuk infleksi morfologis (perubahan wujud kata): be, am, is, are (masa kini), was, were (masa lampau), serta being dan been.\n\nSelain menjadi penghubung kalimat nominal, To Be juga bertindak sebagai Auxiliary Verb (kata kerja bantu) bersama kata kerja -ing untuk aksi yang sedang berlangsung, dan bersama kata kerja bentuk ketiga (V3) untuk kalimat pasif. Ingat hukum pemisahannya: jika kalimat sudah memiliki kata kerja aksi murni, To Be dilarang hadir (katakan \"She agrees\", bukan \"She is agree\").",
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
      'Menghilangkan 100% kesalahan meletakkan To Be sebelum Base Verb (She is agree ❌ -> She agrees ✔).',
      'Mengenali peran To Be sebagai Auxiliary pada Continuous Tense dan Passive Voice.'
    ],
    pocketAxioms: [
      'Hukum Pemisahan Verbal-Nominal: Jika ada kata kerja aksi dasar, To Be dilarang hadir (He reads, BUKAN He is read).',
      'Hukum Subject Complement: Kata setelah To Be menerangkan kondisi atau identitas subjek.'
    ],
    sections: [
        {
                "stepNumber": "01",
                "title": "Peran Kopula (Copular Verb) & Predikatif Kalimat",
                "explanation": "Bayangkan sebuah jembatan kokoh yang sekadar menghubungkan dua daratan tanpa melakukan aksi apa pun. Itulah fungsi utama To Be sebagai 'Kopula', sebuah kata dari bahasa Latin yang memang berarti pengikat. Alih-alih menunjukkan aksi seperti memukul atau berlari, kopula hanya menghubungkan Subjek dengan penjelasnya (Subject Complement), entah itu kata sifat, kata benda, atau keterangan. Ingat, karena dia bukan kata kerja aksi, kopula tidak pernah memiliki objek penderita, melainkan hanya cermin yang memantulkan kembali identitas sang subjek.",
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
                        "linguisticReason": "Bahasa Indonesia memperbolehkan predikasi adjektiva secara langsung (Metode tersebut sangat inovatif), namun bahasa Inggris mewajibkan kopula \"is\" untuk membentuk predikat finitis yang sah."
                }
        },
        {
                "stepNumber": "02",
                "title": "Matriks Dimensi Waktu & Keselarasan Subjek (Subject-Verb Agreement pada To Be)",
                "explanation": "Coba perhatikan bagaimana bunglon bisa berubah warna menyesuaikan tempatnya berpijak. To Be adalah kata kerja paling ireguler dalam bahasa Inggris karena ia berubah wujud tergantung pada dua hal: waktu kejadian (Tense) dan jumlah subjeknya. Di masa sekarang, ia membelah diri menjadi 'am' untuk I, 'is' untuk si tunggal He/She/It, dan 'are' untuk kawanan jamak You/We/They. Saat ditarik ke masa lalu, wujudnya menyusut hanya menjadi 'was' dan 'were', memaksa kamu untuk selalu waspada menyelaraskan subjek dan waktunya.",
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
                "commonPitfall": "Menggunakan \"are\" setelah kata benda tak dapat dihitung (uncountable), seperti \"The information are accurate ❌\" alih-alih \"The information is accurate ✔\"."
        },
        {
                "stepNumber": "03",
                "title": "To Be sebagai Auxiliary Verb: Aspek Kontinu & Pasif",
                "explanation": "Di dunia kerja, seorang manajer utama terkadang harus turun tangan menjadi asisten untuk proyek khusus. To Be pun demikian; selain menjadi kata kerja utama (Kopula), ia sangat sering mengambil peran sebagai kata kerja bantu (Auxiliary Verb). Bayangkan saat kamu ingin menceritakan kejadian yang sedang berlangsung (Aspek Kontinu), To Be akan bergandengan tangan dengan kata kerja -ing. Lebih jauh lagi, ketika kamu ingin mengubah kalimat menjadi pasif, To Be akan berkolaborasi dengan kata kerja bentuk ketiga (V3) untuk mengangkat sang objek menjadi bintang utama.",
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
                "explanation": "Kita orang Indonesia sangat terbiasa mengatakan 'Dia cantik' atau 'Mereka mahasiswa' secara langsung tanpa kata penghubung apa pun. Jebakan perbedaan bahasa inilah yang sering membuat kita lupa memasukkan To Be, sebuah fenomena berbahaya yang disebut 'Zero Copula'. Karena bahasa Indonesia tidak mewajibkan kopula di depan kata sifat atau kata benda, otak kita sering menerjemahkannya mentah-mentah ke bahasa Inggris. Untuk lepas dari kebiasaan ini, kamu perlu membangun insting baru: selalu periksa apakah setiap klausamu sudah memiliki kata kerja (finite verb) yang berdetak di dalamnya.",
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
      ieltsApplication: 'Kesalahan kalimat nominal (They are agree, He is work) langsung mendegradasi skor Grammatical Range & Accuracy di bawah Band 6.0.',
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
    mentalModelIntro: "Dalam bahasa Indonesia, kata \"punya\" dan \"sudah\" berada di dua ruangan terpisah. Namun dalam bahasa Inggris, keluarga kata HAVE (have, has, had) menyatukan konsep kepemilikan benda dan penyelesaian waktu dalam satu tata bahasa yang elegan. Memahami HAVE berarti membuka kunci bagaimana penutur asli mengelola hak milik, urutan waktu peristiwa, dan pembagian tugas dalam kalimat.\n\nDi modul ini, kamu akan membedakan kapan HAVE bertindak sebagai kata kerja utama (Main Verb) bermakna kepemilikan yang dilarang memakai akhiran -ing, dan kapan ia bertransformasi menjadi kata kerja bantu (Auxiliary Verb) pembentuk aspek perfek (Perfect Aspect). Kita juga akan menjelajahi struktur kausatif (Causative)—yaitu seni mendelegasikan pekerjaan kepada pihak lain secara formal.",
    coreConceptSummary: "HAVE memiliki peran ganda: saat berdiri sendiri bersama kata benda, ia adalah Main Verb (kata kerja utama) bermakna kepemilikan statif yang tidak boleh memakai bentuk -ing dan wajib memakai bantuan Do-support saat dinegasikan (\"I do not have a car\", bukan \"I haven't a car\"). Saat disandingkan dengan kata kerja bentuk ketiga (V3), HAVE beralih menjadi Auxiliary Verb (kata kerja bantu) pembentuk Perfect Aspect untuk menjembatani masa lalu dengan masa kini (have/has + V3) atau masa lampau yang lebih awal (had + V3).\n\nDalam laras formal, HAVE juga digunakan dalam Causative Construction (struktur kausatif) untuk menyatakan pendelegasian tindakan kepada pihak lain (\"had the students summarize the paper\" atau bentuk pasif \"had the dataset verified\").",
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
      'Tidak pernah salah membentuk negasi untuk kepemilikan (He hasn\'t a car ❌ -> He does not have a car ✔).'
    ],
    pocketAxioms: [
      'Aksioma Perfect: HAVE/HAS/HAD sebagai auxiliary WAJIB diikuti Verb 3 (Past Participle).',
      'Aksioma Negasi Kepemilikan: Pada Simple Present, buat negasi dengan DO/DOES NOT HAVE, bukan have not.'
    ],
    sections: [
        {
                "stepNumber": "01",
                "title": "Dualitas Peran: Main Verb (Kepemilikan) vs Auxiliary Verb (Aspek Perfek)",
                "explanation": "Bayangkan seorang aktor serbabisa yang bisa menjadi pemeran utama atau sekadar asisten sutradara yang hebat. Kata 'HAVE' memiliki dualitas peran yang sangat unik; jika ia berdiri sendiri ditemani kata benda, ia adalah Main Verb yang dengan bangga menyatakan kepemilikan. Tapi coba perhatikan saat HAVE berpasangan dengan kata kerja bentuk ketiga (V3), ia rela mundur menjadi Auxiliary Verb. Dalam peran pembantu inilah ia membantu menciptakan nuansa waktu yang kompleks seperti Present Perfect, Past Perfect, atau Future Perfect.",
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
                        "linguisticReason": "Ketika HAVE berfungsi sebagai Main Verb kepemilikan, bentuk negasi dan kalimat tanyanya membutuhkan Do-Support (do not have / does not have), bukan penambahan langsung not pada have."
                }
        },
        {
                "stepNumber": "02",
                "title": "Morfologi Infleksi & Keselarasan Subjek Waktu (Concord)",
                "explanation": "Pernah merasa aturan bahasa Inggris itu kadang pilih kasih? Nah, perhatikan tingkah HAVE di masa sekarang (Present Tense), di mana ia harus berubah bentuk menjadi HAS khusus untuk melayani subjek Orang Ketiga Tunggal yang eksklusif (He, She, It, atau benda tunggal). Namun, cerita ini menjadi jauh lebih sederhana dan merata saat kita masuk ke masa lampau (Past Tense). Semua pembedaan subjek itu dilebur habis, di mana HAVE dan HAS bersatu menjadi wujud tunggal yang kokoh: HAD.",
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
                "explanation": "Tidak selamanya kamu harus mengotori tanganmu sendiri untuk menyelesaikan suatu pekerjaan, bukan? Dalam ragam formal, HAVE sering dimanfaatkan dalam struktur Kausatif (Causative Construction) yang sangat elegan. Alih-alih melakukan aksi itu sendiri, kamu menggunakan struktur ini untuk menunjukkan bahwa kamu mengatur atau menginstruksikan pihak profesional lain untuk melakukannya. Ini adalah cara tata bahasa untuk bilang: 'Aku punya kuasa agar hal ini diselesaikan oleh orang lain.'",
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
                "explanation": "Bayangkan bedanya memegang status sebagai pemilik rumah, dengan sedang asyik menikmati makan malam di dalamnya. Saat HAVE bermakna kepemilikan mutlak (Stative Verb), ia adalah status diam yang haram hukumnya ditambahkan akhiran -ing (Continuous). Tapi coba perhatikan saat HAVE berubah wujud menjadi aktivitas dinamis, seperti sedang makan (having lunch) atau mengadakan rapat (having a meeting). Di momen-momen penuh aksi inilah, bentuk -ing sepenuhnya legal dan terdengar sangat natural.",
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
                        "linguisticReason": "Memiliki laptop adalah kondisi kepemilikan statif murni, sehingga tidak boleh menggunakan bentuk progresif \"am having\"."
                }
        }
],
    examBridge: {
      ieltsApplication: 'Penggunaan Present Perfect (Governments have implemented...) dan Past Perfect (By 2010, emissions had doubled...) krusial pada IELTS Writing Task 1 & 2.',
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
    mentalModelIntro: "Bayangkan seorang aktor laga utama yang membutuhkan peran pengganti (stunt double) untuk melakukan adegan berbahaya. Dalam bahasa Inggris, kata kerja aksi biasa seperti write atau analyze tidak bisa membuat kalimat tanya atau menempelkan kata \"not\" seorang diri. Di sinilah trio DO, DOES, dan DID hadir sebagai operator penyelamat melalui mekanisme Do-Support untuk memikul beban teknis tersebut.\n\nBegitu sang operator mengambil alih beban tenses, kata kerja utama kembali beristirahat dalam bentuk Bare Infinitive (kata kerja dasar murni tanpa imbuhan). Di modul ini, kamu akan melatih intuisi bebas dari kesalahan penandaan ganda (Double Marking) serta memanfaatkan Emphatic DO untuk memberikan penekanan retoris yang bertenaga saat mempertegas data risetmu.",
    coreConceptSummary: "Do-Support adalah mekanisme penyisipan kata bantu DO, DOES, atau DID ketika sebuah kalimat tidak memiliki kata kerja bantu lain untuk menampung partikel negasi \"not\" atau melakukan pembalikan posisi kalimat tanya. Saat operator ini hadir, kata kerja utama wajib berbentuk Bare Infinitive (kata kerja dasar polos tanpa akhiran -s, -es, atau -ed).\n\nHindari kesalahan Double Marking (memberi tanda tenses dua kali seperti \"does not requires ❌\"). Selain itu, DO/DOES/DID dapat disisipkan secara sengaja ke dalam kalimat positif sebagai Emphatic DO untuk memberi penekanan argumentatif yang kuat (\"The tests did corroborate the findings\").",
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
      'Tidak pernah lagi menambahkan akhiran -s/-es setelah kata "does not" (He does not works ❌ -> He does not work ✔).',
      'Mampu menggunakan Do/Does/Did untuk memberikan penekanan emfatik akademis (The data does show a correlation).'
    ],
    pocketAxioms: [
      'Hukum Bare Infinitive: DO/DOES/DID menyedot semua imbuhan tenses; kata kerja setelahnya kembali telanjang (V1 murni).',
      'Hukum Formal Akademik: Tulis utuh "do not", "does not", "did not" tanpa disingkat.'
    ],
    sections: [
      {
        stepNumber: '01',
        title: 'Mekanisme Do-Support & Penyelamat Beban Sintaksis',
        explanation: "Ketika mobilmu mogok, kamu pasti membutuhkan truk derek dari luar untuk menariknya. Nah, prinsip 'Do-Support' dalam bahasa Inggris bekerja persis seperti truk derek penyelamat tersebut. Ketika sebuah kalimat ingin mengatakan \"tidak\" (negasi) atau ingin ditukar menjadi pertanyaan, tapi tidak punya kata kerja bantu bawaan, disisipkanlah verba dummy DO. Ia tidak membawa makna apa-apa secara leksikal, tapi kehadirannya mutlak diperlukan untuk menampung partikel 'not' agar struktur kalimatmu tidak runtuh.",
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
      },
      {
        stepNumber: '02',
        title: 'Hukum Bare Infinitive & Bahaya Double Marking',
        explanation: "Dalam dunia efisiensi, tidak ada gunanya mempekerjakan dua orang untuk melakukan satu tanda yang sama (Double Marking). Ketika DID sudah sukses menandai bahwa kejadian itu di masa lampau, atau DOES sudah menanggung beban penanda orang ketiga tunggal, tugas mereka sudah selesai. Akibatnya, kata kerja utama yang mengikuti di belakangnya HARUS tampil apa adanya dalam bentuk murni (Bare Infinitive). Ingat, jangan pernah tambahkan sisipan -ed, akhiran -s, atau awalan 'to' lagi pada kata kerja utamanya.",
        formula: 'DO / DOES / DID + Subject + [BARE INFINITIVE (V1 Polos tanpa -s/-ed/to)]',
        examples: [
          { sentence: 'Does the professor explain the quantum mechanics theorem clearly?', translation: 'Apakah profesor tersebut menjelaskan teorema mekanika kuantum dengan jelas?', note: 'Does + professor + explain (V1 murni tanpa -s).' },
          { sentence: 'The software update did not resolve the network latency issues.', translation: 'Pembaruan perangkat lunak tidak menyelesaikan masalah latensi jaringan.', note: 'did not + resolve (V1 murni tanpa -d/-ed).' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'She does not understands the statistical modeling methodology.',
          correctSentence: 'She does not understand the statistical modeling methodology.',
          linguisticReason: 'Setelah operator "does not", akhiran -s pada "understands" wajib dicopot menjadi bentuk dasar "understand".'
        }
      },
      {
        stepNumber: '03',
        title: 'Emphatic DO: Menegaskan Kebenaran & Membantah Keraguan',
        explanation: "Sesekali, kamu pasti ingin menggebrak meja untuk meyakinkan seseorang yang meragukan ucapanmu. Dalam tata bahasa Inggris, menyisipkan kata DO, DOES, atau DID langsung ke dalam kalimat positif deklaratif adalah cara elegan untuk melakukan \"gebrakan\" tersebut (Emphatic Mood). Kehadirannya seketika memberikan penekanan retoris yang sangat kuat. Jadi, saat dosenmu ragu, kamu bisa menggunakan struktur ini untuk membantah keraguan itu dan mempertegas temuanmu dengan telak.",
        formula: 'Subject + [DO / DOES / DID (Emphatic)] + Bare Infinitive + Complement',
        examples: [
          { sentence: 'Although the initial hypothesis was contested, subsequent tests did corroborate the findings.', translation: 'Meskipun hipotesis awal sempat diperdebatkan, pengujian lanjutan memang benar-benar menguatkan temuan tersebut.', note: 'did corroborate = penegasan fakta masa lalu yang kuat.' },
          { sentence: 'The clinical data does show a statistically significant improvement.', translation: 'Data klinis tersebut memang benar-benar menunjukkan perbaikan yang signifikan secara statistik.', note: 'does show = penegasan di masa kini.' }
        ],
        commonPitfall: 'Jangan gunakan Emphatic DO secara berlebihan di setiap kalimat esai; gunakan hanya saat ingin membantah sanggahan atau menegaskan kontras.'
      },
      {
        stepNumber: '04',
        title: 'Main Verb DO vs Auxiliary DO: Konstruksi Kembar',
        explanation: "Jangan terkecoh, DO ini punya kehidupan ganda yang tak kalah sibuk; selain menjadi asisten, ia juga bisa tampil sebagai kata kerja utama yang maknanya \"melakukan\" atau \"mengerjakan\". Nah, keunikannya muncul ketika si Main Verb DO ini ingin dinegasikan atau dijadikan kalimat tanya. Ia tetap tidak bisa mandiri dan mewajibkan kembarannya, si Auxiliary DO, untuk hadir membantunya. Itulah mengapa kamu akan sering menemukan konstruksi yang seolah berulang seperti 'do not do' atau 'did not do' dalam satu kalimat.",
        formula: 'Negasi Main Verb DO: Subject + [do/does/did not (Aux)] + [do (Main Verb)]',
        examples: [
          { sentence: 'The research team did not do any preliminary field trials.', translation: 'Tim peneliti tidak melakukan uji lapangan pendahuluan apa pun.', note: 'did not (auxiliary) + do (main verb).' },
          { sentence: 'Why do they not do the mandatory background checks?', translation: 'Mengapa mereka tidak melakukan pemeriksaan latar belakang yang wajib?', note: 'do (auxiliary) + do (main verb).' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The candidate did not the required assignments on time.',
          correctSentence: 'The candidate did not do the required assignments on time.',
          linguisticReason: 'Kata "did not" hanyalah kata bantu negasi; kalimat tetap membutuhkan kata kerja utama "do" untuk menyatakan tindakan mengerjakan.'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Menjaga akurasi kalimat negatif tanpa "double marking" (did not showed ❌) menjamin nilai akurasi gramatikal tinggi.',
      toeflApplication: 'TOEFL Structure sering menguji kalimat inversi negatif (Rarely did the committee approve...).',
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
    mentalModelIntro: "Bayangkan sebuah orkestra simfoni di mana setiap alat musik harus memainkan tangga nada kunci yang sama agar terdengar selaras. Bahasa Indonesia memperlakukan kata kerja dengan santai: \"Dia membaca\" dan \"Mereka membaca\". Namun, bahasa Inggris menuntut harmoni nada mutlak antara pelaku dan aksinya melalui Subject-Verb Agreement. Menambahkan akhiran -s/-es pada kata kerja tunggal di masa kini adalah cara mengunci keharmonisan tersebut.\n\nDi modul ini, kita akan melatih kejelian intuisimu menembus The Proximity Trap (Jebakan Proksimitas)—yaitu kecenderungan keliru menyelaraskan kata kerja dengan kata benda terdekat di dalam frasa sisipan penjelas, alih-alih berfokus pada Head Noun (kata benda inti) di awal kalimat. Kamu juga akan menguasai perilaku kata ganti tak tentu (Indefinite Pronouns) seperti everyone yang selalu berstatus tunggal.",
    coreConceptSummary: "Subject-Verb Agreement adalah aturan keselarasan mutlak antara jumlah subjek dan bentuk kata kerjanya: subjek tunggal orang ketiga di masa kini (He, She, It, atau satu benda) wajib menggunakan kata kerja berakhiran -s/-es (\"The student analyzes\"), sedangkan subjek jamak (They, We) dan subjek I/You menggunakan kata kerja dasar tanpa -s (\"The students analyze\").\n\nWaspadalah terhadap The Proximity Trap (Jebakan Proksimitas)—yaitu kesalahan menyelaraskan kata kerja dengan kata benda terdekat di dalam frasa sisipan (seperti along with, as well as, atau frasa preposisi), padahal subjek sejatinya adalah Head Noun (kata benda inti di awal kalimat). Kata ganti tak tentu seperti everyone, each, dan nobody selalu dianggap tunggal dan wajib mengambil kata kerja berakhiran -s.",
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
      analysis: 'Kata ganti tak tentu "Everyone / Everybody" secara gramatikal berstatus TUNGGAL dan wajib menggunakan verb berakhiran -s (knows).'
    },
    canDoChecklist: [
      'Mampu menerapkan akhiran -s/-es pada Simple Present tanpa pernah terlupa.',
      'Memahami aturan ejaan konsonan + y -> -ies vs vokal + y -> -ys (e.g. studies vs plays).',
      'Mengenali subjek tunggal dengan kata ganti tak tentu (Everyone, Each, Nobody) yang menuntut verb berakhiran -s.'
    ],
    pocketAxioms: [
      'Aksioma S: Jika subjeknya tunggal, kata kerjanya yang memakai akhiran -S (He workS, They work).',
      'Aksioma Indefinite: Everyone, Somebody, Each, Neither secara gramatikal selalu TUNGGAL.'
    ],
    sections: [
        {
                "stepNumber": "01",
                "title": "Kaidah Inti Concord Singular/Plural & Infleksi Akhiran -s/-es",
                "explanation": "Coba perhatikan sebuah paradoks unik yang sering menjebak pemula: dalam bahasa Inggris, tanda -s itu punya dua fungsi yang berkebalikan. Jika ia menempel pada kata benda, itu artinya mereka jamak, tapi anehnya, jika tanda -s menempel pada kata kerja (seperti analyzes atau is), itu justru penanda subjek tunggal! Keselarasan harmoni inilah yang disebut Concord, di mana kata kerja harus selalu taat pada jumlah Subjek Inti (Head Noun). Ingat, verba dilarang keras sekadar menyamakan bentuk dengan kata benda mana pun yang kebetulan numpang lewat di dekatnya.",
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
                "explanation": "Bayangkan kamu sedang menatap seorang tokoh penting, tapi pandanganmu terhalang oleh pengawal yang berdiri di depannya. Inilah 'Jebakan Proksimitas' (The Proximity Trap), kesalahan fatal di mana penulis malah menyelaraskan kata kerja dengan kata benda di dalam frasa penyela (seperti along with, as well as). Padahal, frasa-frasa pengecoh ini sama sekali tidak mengubah jumlah subjek utama yang sesungguhnya. Mata tata bahasamu harus tajam menembus pengawal ini untuk menemukan subjek sejati yang bersandar di awal kalimat.",
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
                "explanation": "Pernah merasa kalau memikirkan kata 'semua orang' (Everyone) itu terbayang seperti kerumunan besar yang pastinya jamak? Buang jauh-jauh bayangan itu saat menulis esai akademik. Pronoun tak tentu (Indefinite Pronouns) yang berakhiran -one, -body, atau -thing secara hukum preskriptif dikunci mati sebagai entitas TUNGGAL. Artinya, sekumpulan besar 'Everybody' atau 'Somebody' tetap dihitung sebagai satu kesatuan utuh, sehingga selalu mewajibkan kata kerja tunggal yang berakhiran -s.",
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
                "explanation": "Aturan bahasa kadang menuntut kita untuk sedikit fleksibel, terutama saat berhadapan dengan ukuran pecahan atau porsi (Fractional Quantifiers) seperti 'all of' atau 'majority of'. Di sini, nasib kata kerja ditentukan sepenuhnya oleh kata benda yang mengikutinya di belakang: apakah ia bisa dihitung atau tidak. Lebih menantang lagi pada konstruksi 'There is / There are' — coba perhatikan, posisinya terbalik; alih-alih di depan, subjek gramatikal aslinya justru bersembunyi persis SETELAH kata kerja kopula.",
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
      'Kata ganti Each, Every, Everyone, Someone, Nobody selalu menuntut kata kerja tunggal berakhiran -s.'
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
    stageNumber: 2,
    stageName: 'Tahap 2: Sistem Morfologi Kata Benda & Penentu',
    categoryKey: 'Word Classes',
    moduleNumber: 6,
    title: 'Arsitektur Noun: Proper, Common, Concrete, Abstract, dan Collective Nouns',
    subtitle: 'Mengenali entitas pembicaraan dan klasifikasi substantif dari konsep paling dasar',
    levelBadge: 'Morfologi Noun · Modul 06',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan kamu sedang memasuki perpustakaan raksasa tempat seluruh pengetahuan diklasifikasikan ke dalam ruang-ruang khusus: arsip nama tokoh unik, aula benda generik, ruang organisasi kelompok, dan galeri konsep abstrak nirwujud. Dalam bahasa Inggris, sistem kata benda (Noun) bekerja persis seperti perpustakaan tersebut untuk melabeli realitas dengan tertib.\n\nDi modul ini, kita akan membedah empat kategori nomina: Proper Nouns (nama diri berhuruf kapital), Common Nouns (benda umum), Collective Nouns (kelompok satu kesatuan), dan Abstract Nouns (konsep abstrak). Kamu juga akan menguasai kaidah Modifying Noun—yaitu aturan baku bahwa kata benda penjelas di depan istilah majemuk wajib selalu berbentuk tunggal (\"student dormitories\", bukan \"students dormitories\").",
    coreConceptSummary: "Kata benda terbagi atas 4 kategori: Proper Nouns (nama entitas spesifik berhuruf kapital), Common Nouns (objek generik yang membutuhkan penentu jika tunggal), Collective Nouns (kelompok individu yang dalam American English diperlakukan tunggal: \"The committee has decided\"), dan Abstract Nouns (konsep nirwujud pembentuk wacana ilmiah).\n\nNomina abstrak dibentuk melalui sufiks derivasional seperti -tion, -ment, -ity, dan -ence dalam proses Nominalization (nominalisasi). Pada istilah majemuk (Noun Compound), kata benda pertama berfungsi sebagai Modifying Noun dan WAJIB berbentuk tunggal (\"toothbrush\", bukan \"teethbrush\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Taksonomi 4 Kategori Nomina & Karakteristik Sintaksis",
                "explanation": "Bayangkan kamu masuk ke perpustakaan raksasa yang koleksinya dipisah rapi ke dalam empat ruang. Ruang VIP adalah 'Proper Nouns' untuk nama-nama spesifik yang selalu diagungkan dengan huruf kapital, seperti Oxford University atau Dr. Vance. Di ruang sebelahnya ada 'Common Nouns', benda-benda generik yang butuh pengawal pengikat (determiner) jika berdiri tunggal. Lalu ada 'Collective Nouns' tempat rombongan kelompok berkumpul, dan terakhir 'Abstract Nouns', tempat bersemayamnya ide-ide tanpa wujud fisik namun esensial seperti integritas dan validitas.",
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
                "explanation": "Coba amati bagaimana orang Amerika dan Inggris memandang sebuah tim sepak bola secara berbeda. Bagi American English, sebuah komite atau tim dilihat murni sebagai satu kesatuan solid, sehingga verbanya tunggal (The committee has decided). Namun dalam British English, jika mereka ingin menyoroti anggota individunya yang bergerak masing-masing, kata kerja jamak pun diperbolehkan. Nah, sebagai penulis akademik formal, mengambil rute Amerika dengan menganggapnya tunggal adalah jalur yang paling aman dan tak terbantahkan.",
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
                "commonPitfall": "Mengganti pronoun rujukan secara tidak konsisten dalam satu kalimat, misalnya \"The team has submitted their report ❌\" (inkonsisten antara has tunggal dan their jamak). Gunakan \"The team has submitted its report ✔\"."
        },
        {
                "stepNumber": "03",
                "title": "Nomina Abstrak & Pembentukan Suffix Akademik",
                "explanation": "Kalau kamu ingin tulisanmu memancarkan aura ilmiah, kamu harus berteman baik dengan Nomina Abstrak. Menariknya, kata-kata sakti ini tidak muncul begitu saja, melainkan diciptakan di 'pabrik morfologi' dari kata kerja atau kata sifat yang diberi imbuhan. Bayangkan sebuah kata kerja biasa tiba-tiba disulap menjadi konsep gagah hanya dengan menempelkan akhiran derivasional seperti -tion (distribution), -ment (development), -ity (feasibility), atau -ence (significance). Inilah pondasi utama yang akan memperkaya kosakata akademikmu.",
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
                "explanation": "Apa yang terjadi jika dua kata benda bertabrakan dan melebur menjadi satu istilah baru? Terciptalah Noun Compound, di mana kata benda terdepan mendadak beralih profesi menjadi modifikator (Modifying Noun). Ada aturan emas yang tak boleh ditawar di sini: sang modifikator WAJIB menanggalkan identitas jamaknya dan selalu tampil dalam wujud tunggal. Itulah mengapa kita menyebutnya 'shoe store', bukan 'shoes store', tak peduli ada berapa ribu pasang sepatu yang dijual di dalam toko tersebut.",
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
    mentalModelIntro: "Bayangkan memegang beberapa butir kelereng di tangan kiri dan menuangkan air ke mangkuk dengan tangan kanan. Matamu langsung mengenali kelereng sebagai benda-benda terpisah yang bisa dihitung satu per satu (Countable Nouns), sedangkan air adalah massa yang menyatu tanpa sekat (Uncountable Nouns). Perbedaan persepsi visual inilah yang mendasari pembagian kata benda dalam bahasa Inggris.\n\nDi modul ini, kita akan menaklukkan daftar sepuluh nomina tak terhitung mutlak yang paling sering menjebak penutur Indonesia (seperti information, equipment, research, advice). Kamu akan menguasai Partitive Structure (struktur partitif)—yaitu teknik meminjam wadah hitung seperti \"piece of\" atau \"item of\" untuk menakar kata benda massa secara presisi.",
    coreConceptSummary: "Countable Nouns merujuk pada unit diskrit yang sah diawali angka langsung dan memiliki bentuk jamak -s (\"two samples\"). Sebaliknya, Uncountable Nouns merujuk pada substansi massa atau konsep abstrak yang haram diawali angka langsung, dilarang dipasangi artikel a/an, tidak pernah berakhiran -s, dan selalu mengikat kata kerja tunggal (\"Research requires diligence\").\n\nUntuk menghitung nomina massa, gunakan Partitive Structure (wadah hitung + of + kata benda massa, misal \"two pieces of equipment\", bukan \"two equipments ❌\"). Waspadai pula Dual-Class Nouns (seperti experience) yang bisa berstatus tak terhitung saat bermakna umum dan menjadi terhitung saat merujuk pada peristiwa spesifik.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Logika Entitas Diskrit vs Entitas Kontinu/Massa",
                "explanation": "Bayangkan perbedaan antara memegang segenggam kelereng dan segenggam air. Kelereng (Countable Nouns) memiliki wujud fisik yang terpisah jelas, sehingga sangat mudah untuk dihitung satu per satu. Sebaliknya, air (Uncountable Nouns) dipandang sebagai satu kesatuan kontinu atau konsep yang tak bertepi. Karena wujudnya yang menyatu inilah, Uncountable Nouns selalu dikunci dengan kata kerja tunggal dan haram hukumnya langsung disandingkan dengan angka.",
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
                "explanation": "Lalu bagaimana caranya kalau kita benar-benar butuh mengukur 'air' atau hal-hal abstrak tadi? Bahasa Inggris menyiapkan wadah khusus yang disebut Struktur Partitif. Idenya sangat brilian: kamu ambil sebuah wadah takaran yang BISA dihitung, lalu sambungkan dengan kata penghubung 'of', baru tuangkan kata benda tak bisa dihitungmu ke dalamnya. Dengan formula ini, kamu bisa membuat hal yang tak berbatas menjadi terukur rapi.",
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
                "explanation": "Pernah melihat alat yang bisa berubah fungsi tergantung tombol mana yang kamu tekan? Banyak kosakata akademik kelas atas juga bersifat bunglon atau 'Dual-Class Nouns'. Saat kata 'experience' membicarakan pengalaman hidup secara meluas, ia adalah benda Uncountable. Tapi perhatikan betapa ajaibnya saat kamu membicarakan satu kejadian spesifik; ia tiba-tiba merubah wujud menjadi Countable ('an experience'), yang menuntut artikel dan bisa dijamakkan layaknya kejadian diskrit.",
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
                "explanation": "Waspadalah, karena ada 10 kata sakral yang paling sering menipu insting penutur Indonesia. Kita sering terjebak membayangkan Information, Equipment, Furniture, Evidence, Advice, Accommodation, Baggage, Traffic, Feedback, dan Knowledge sebagai sesuatu yang berwujud banyak atau jamak. Padahal, dalam kacamata bahasa Inggris, kesepuluh kata ini adalah Uncountable Absolut. Ingat baik-baik: mereka SELALU bersubjek tunggal dan tidak akan pernah mentolerir kehadiran akhiran jamak -s.",
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
      ieltsApplication: 'Menghindari researches, equipments, evidences adalah pembeda utama antara esai Band 6.0 dan Band 8.0.',
      toeflApplication: 'TOEFL Structure secara rutin menjebak peserta dengan Countable vs Uncountable quantifiers (much vs many, few vs little).',
      scoringImpact: 'Mencegah kesalahan leksikal fatal yang berulang.'
    },
    goldenRules: [
      'Jangan pernah menambahkan -s pada kata research, equipment, information, evidence, advice.',
      'Gunakan partitive expression (a body of evidence, a piece of advice) bila perlu menghitung unit.',
      'Gunakan much/little/amount of untuk uncountable, dan many/few/number of untuk countable.'
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
      linguisticExplanation: "\"Equipment\" adalah Uncountable Noun murni dan tidak pernah memiliki bentuk jamak equipments. Gunakan partitif \"pieces of equipment\" atau \"items of equipment\".",
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
    mentalModelIntro: "Bayangkan memandu seorang rekan di ruangan berkabut menggunakan lampu senter berfokus tajam. Saat ingin menunjuk sembarang benda baru, kamu menyalakan pendar luas (A/An). Saat ingin mengunci target spesifik yang sudah kalian ketahui bersama, kamu menyempitkan sorotnya menjadi sinar laser (The). Dan saat membicarakan kebenaran umum di alam semesta, kamu mematikan lampu senter tersebut (Zero Article).\n\nDi modul ini, kita akan meluruskan aturan fonetik di balik pemilihan A vs An berdasarkan bunyi ucapan nyata (bukan huruf ejaan), memetakan prinsip Shared Knowledge (pengetahuan bersama) pada artikel The, serta menguasai konvensi geografis baku kapan harus menyematkan artikel dan kapan membiarkannya polos.",
    coreConceptSummary: "Pemilihan artikel tak tentu A vs An ditentukan murni oleh bunyi fonetik pertama kata: gunakan A untuk bunyi konsonan termasuk /j/ (\"a university\", \"a unique perspective\"), dan gunakan An untuk bunyi vokal murni (\"an hour\", \"an honest opinion\").\n\nArtikel definit The digunakan saat identitas benda sudah dipahami bersama oleh penulis dan pembaca (Shared Knowledge) lewat penyebutan sebelumnya atau keunikan mutlak (\"the sun\"). Hindari The saat membuat pernyataan umum tentang konsep abstrak atau kata benda jamak (Zero Article: \"Education is vital\", bukan \"The education ❌\"). Gunakan The untuk kepulauan jamak, samudra, dan negara serikat (\"The United States\"), namun biarkan gunung tunggal dan benua berdiri tanpa artikel (\"Mount Everest\", \"Asia\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Fonetik Artikel Indefinit (A vs An Berdasarkan Bunyi Vokal)",
                "explanation": "Banyak dari kita diajarkan bahwa 'A' untuk huruf konsonan dan 'An' untuk huruf vokal — sekarang, lupakan aturan di atas kertas itu! Pemilihan ini sejatinya diatur murni oleh BUNYI fonetik pertama yang keluar dari mulutmu. Bayangkan kata 'university'; meski diawali huruf U, bunyinya adalah konsonan (/j/), sehingga ia wajib dipasangkan dengan 'A'. Sebaliknya, saat huruf H diam membisu di kata 'hour', telinga kita menangkap bunyi vokal murni, sehingga sang 'AN' lah yang berhak menemaninya.",
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
                "explanation": "Artikel 'The' bukanlah sekadar kata pelengkap biasa; ia adalah sebuah kedipan rahasia antara penulis dan pembaca. Saat kamu menyematkan 'The', kamu seolah berkata, 'Kita berdua tahu persis benda spesifik mana yang sedang aku bicarakan.' Pengetahuan bersama (Shared Knowledge) ini biasanya dipicu oleh tiga hal: bendanya sudah disebut sebelumnya (Anaphoric Reference), bendanya hanya ada satu di dunia (Uniqueness), atau identitasnya langsung dipersempit oleh klausa penjelas di belakangnya.",
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
                "explanation": "Kadang-kadang, ketiadaan justru adalah aturan itu sendiri. Saat kamu ingin membuat generalisasi atau pernyataan universal tentang kelompok plural dan konsep abstrak, kamu DILARANG menggunakan artikel 'the' sama sekali (Zero Article). Penambahan kata sakti ini justru akan berakibat fatal pada makna kalimatmu. Begitu 'the' disematkan, pernyataan universalmu seketika menyusut menjadi pembicaraan tentang satu kelompok sempit yang sangat spesifik.",
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
                "explanation": "Coba perhatikan bagaimana peta dunia memiliki tata krama bahasa Inggrisnya sendiri yang cukup ketat. Aturan geografisnya begini: kucurkan artikel 'The' untuk sesuatu yang berupa kumpulan, seperti pegunungan jamak (The Alps), kepulauan, negara serikat (The United States), atau aliran panjang lautan dan sungai (The Nile). Tapi awas, jangan pernah berikan artikel apa pun untuk entitas yang berdiri tunggal dan soliter. Benua, gunung tunggal (Mount Everest), danau tunggal, atau pulau tunggal lebih suka dibiarkan telanjang tanpa hiasan 'The'.",
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
      ieltsApplication: 'Ketepatan penggunaan artikel the pada nama geografis dan entitas unik sangat diperhatikan dalam Academic Writing Task 1 & 2.',
      toeflApplication: 'TOEFL Structure secara intensif menguji jebakan fonetik artikel (a unique vs an unique ❌).',
      scoringImpact: 'Mengeliminasi kesalahan gramatikal minor yang menurunkan skor akurasi.'
    },
    goldenRules: [
      'Gunakan A sebelum kata yang berbunyi konsonan (/j/, /w/), e.g. a university, a European, a one-way street.',
      'Gunakan AN sebelum kata yang berbunyi vokal meskipun berawalan huruf H bisu, e.g. an hour, an honest man.',
      'Gunakan Zero Article untuk kata benda jamak yang merujuk generalisasi umum (Scientists seek truth, bukan The scientists).'
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
      linguisticExplanation: "Nama bidang ilmu dan disiplin akademis (seperti physics, chemistry, economics, linguistics) menggunakan Zero Article (tanpa \"the\").",
      acceptedVariations: [
            "He graduated with a master degree in physics from Oxford."
      ]
},
      {
        id: 'ec-m08-1',
        flawedSentence: 'The researchers submitted an unique hypothesis to the journal.',
        flawLocation: 'an unique',
        correctedSentence: 'The researchers submitted a unique hypothesis to the journal.',
        linguisticExplanation: '"Unique" diawali bunyi konsonan semi-vokal /juːˈniːk/, sehingga wajib menggunakan artikel "a" (a unique).'
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
    mentalModelIntro: "Bayangkan perlombaan lari estafet beregu di mana para pelari memindahkan tongkat estafet dari satu tangan ke tangan berikutnya secara mulus. Dalam tulisan yang baik, sistem kata ganti (Pronouns) bekerja persis seperti tongkat estafet tersebut: menggantikan nama benda atau subjek secara lincah tanpa kehilangan kejelasan makna.\n\nDi modul ini, kamu akan menguasai batas tegas antara penentu kepemilikan yang wajib menempel pada kata benda (Possessive Determiners: my, your, their) dan kata ganti kepemilikan mandiri (Independent Pronouns: mine, yours, theirs). Kita juga akan meluruskan pemakaian Reflexive Pronouns (-self/-selves) serta memusnahkan kerancuan abadi antara ITS dan IT'S.",
    coreConceptSummary: "Possessive Determiners (my, your, his, her, its, our, their) bertindak sebagai modifikator kata benda dan wajib didampingi nomina (\"my research\"). Sebaliknya, Independent Possessive Pronouns (mine, yours, his, hers, ours, theirs) berdiri mandiri menggantikan seluruh frasa kata benda untuk mencegah repetisi (\"The project is ours\").\n\nReflexive Pronouns (myself, itself, themselves) bertindak sebagai cermin saat subjek dan objek adalah entitas yang sama (\"The system recalibrates itself\") atau sebagai penegas intensif (\"The director herself approved it\"). Ingat perbedaan mutlaknya: ITS (tanpa apostrof) adalah penanda kepemilikan benda/hewan tunggal (\"its features\"), sedangkan IT'S (berapostrof) adalah singkatan dari \"it is\" atau \"it has\".",
    sections: [
      {
        stepNumber: '01',
        title: 'Possessive Determiners vs Independent Possessive Pronouns',
        explanation: "Bayangkan perbedaan antara seorang asisten yang selalu mengekor, dan seorang bos yang bisa berdiri sendiri. Possessive Determiners (seperti my, your, her, their, its) adalah sang asisten; mereka bertindak murni sebagai modifikator dan TIDAK PERNAH bisa hidup tanpa kata benda di sampingnya. Sebaliknya, Independent Possessive Pronouns (seperti mine, yours, hers, ours, theirs) adalah sang bos. Mereka diciptakan khusus untuk menggantikan kombinasi frasa panjang tersebut agar tulisanmu terbebas dari repetisi yang membosankan.",
        formula: 'Possessive Determiner + Noun (my report) | Possessive Pronoun (This report is mine)',
        examples: [
          { sentence: 'The pharmaceutical corporation increased its research budget.', translation: 'Perusahaan farmasi tersebut meningkatkan anggaran risetnya.', note: 'its + research budget (Possessive Determiner).' },
          { sentence: 'Our methodology was rigorous, but theirs lacked empirical controls.', translation: 'Metodologi kami ketat, namun metodologi milik mereka tidak memiliki kontrol empiris.', note: 'theirs = their methodology (Possessive Pronoun).' }
        ]
      },
      {
        stepNumber: '02',
        title: 'Reflexive Pronouns: Fungsi Cermin & Senjata Penekanan (Intensif)',
        explanation: "Pernahkah kamu bercermin dan menyadari bahwa orang yang menatapmu adalah dirimu sendiri? Itulah esensi dari Reflexive Pronouns (seperti myself, yourself, itself, themselves). Kata ganti ini melayani dua tujuan elegan: pertama, sebagai cermin (Refleksif Murni) ketika subjek dan objek kalimat adalah entitas yang persis sama. Kedua, ia bisa disisipkan sebagai senjata penekanan (Intensif) untuk meyakinkan pembaca bahwa sang subjek benar-benar melakukan tindakan tersebut sendirian tanpa campur tangan orang lain.",
        formula: 'Refleksif: Subject = Direct/Indirect Object (S + V + Reflexive) | Intensif: Subject + Reflexive + V',
        examples: [
          { sentence: 'The machine automatically recalibrates itself every twenty-four hours.', translation: 'Mesin tersebut secara otomatis mengkalibrasi ulang dirinya sendiri setiap dua puluh empat jam.', note: 'itself = objek aksi recalibrate (Refleksif Murni).' },
          { sentence: 'The lead author herself verified all statistical computations.', translation: 'Penulis utama itu sendiri yang memverifikasi semua komputasi statistik.', note: 'herself = penekanan emfatik/intensif.' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The manager sent the document to my colleague and myself.',
          correctSentence: 'The manager sent the document to my colleague and me.',
          linguisticReason: 'Reflexive pronoun "myself" hanya sah jika subjeknya "I". Pada posisi objek setelah preposisi "to", gunakan object pronoun "me".'
        }
      },
      {
        stepNumber: '03',
        title: 'Reciprocal Pronouns: Dinamika Dua Arah (Each Other vs One Another)',
        explanation: "Dalam dinamika sosial, ada interaksi intim yang hanya berdua, dan ada aksi beramai-ramai yang melibatkan banyak pihak. Tata bahasa Inggris sangat peka terhadap jumlah partisipan ini melalui Reciprocal Pronouns. Jika hubungan timbal balik itu eksklusif hanya terjadi di antara DUA entitas, maka 'Each other' adalah jembatan yang paling tepat. Namun, begitu interaksi saling membalas itu melebar melibatkan TIGA entitas atau lebih, saatnya kamu beralih menggunakan 'One another'.",
        formula: 'Dua Pihak -> Each Other | Tiga Pihak atau Lebih -> One Another',
        examples: [
          { sentence: 'The two competing laboratories shared their data with each other.', translation: 'Kedua laboratorium yang bersaing itu saling berbagi data satu sama lain.', note: 'two laboratories -> each other.' },
          { sentence: 'All five research consortia collaborated with one another seamlessly.', translation: 'Kelima konsorsium riset tersebut saling berkolaborasi satu sama lain dengan lancar.', note: 'five consortia -> one another.' }
        ]
      },
      {
        stepNumber: '04',
        title: 'ITS vs IT\'S: Jebakan Apostrof yang Sering Menipu',
        explanation: "Coba perhatikan baik-baik, karena setitik tanda kutip kecil (apostrof) bisa menghancurkan wibawa esai akademikmu. 'ITS' tanpa apostrof adalah penanda kepemilikan mutlak untuk benda atau hewan, layaknya seragam resmi mereka. Sebaliknya, 'IT'S' dengan apostrof hanyalah sebuah kontraksi atau singkatan malas dari 'It is' atau 'It has'. Ingat aturan emas ini: dalam arena penulisan akademik yang formal, kontraksi semacam 'it's' sebaiknya kamu lenyapkan sepenuhnya dari kosakatamu.",
        formula: 'ITS = Milik dia (benda/hewan) | IT\'S = Singkatan dari \'It is\' atau \'It has\'',
        examples: [
          { sentence: 'The research institute celebrated its fiftieth anniversary.', translation: 'Institut riset tersebut merayakan ulang tahunnya yang ke-50.', note: 'its = kepemilikan institute.' },
          { sentence: 'It is widely acknowledged that solar energy reduces carbon emissions.', translation: 'Diakui secara luas bahwa energi surya mengurangi emisi karbon.', note: 'Tulis utuh \'It is\', bukan kontraksi \'It\'s\'.' }
        ],
        contrastiveAnalysis: {
          incorrectSentence: 'The committee published it\'s annual assessment report yesterday.',
          correctSentence: 'The committee published its annual assessment report yesterday.',
          linguisticReason: '\'It\'s\' berarti \'it is\' atau \'it has\'. Untuk menyatakan kepemilikan dari The committee, gunakan \'its\' tanpa tanda petik.'
        }
      }
    ],
    examBridge: {
      ieltsApplication: 'Penggunaan variasi pronoun dan relative clauses kompleks membuktikan penguasaan sintaksis tingkat lanjut.',
      toeflApplication: 'Pembedaan who vs whom dan its vs it\'s merupakan materi uji wajib pada section grammar TOEFL.',
      scoringImpact: 'Menghindari kesalahan fatal ejaan ortografi dan kasus gramatikal.'
    },
    goldenRules: [
      'Gunakan its untuk kepemilikan benda/hewan tunggal (tanpa apostrof).',
      'Gunakan whom bila kata ganti tersebut berkedudukan sebagai objek dari kata kerja atau preposisi.',
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
      linguisticExplanation: "Reflexive pronoun (myself) hanya boleh digunakan jika subjek dan objek adalah orang yang sama (e.g. I hurt myself). Pada posisi objek setelah preposisi \"to\", gunakan Object Pronoun \"me\".",
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
    mentalModelIntro: "Bagaimana cara bahasa mendefinisikan batas hak milik dan membagi porsi jumlah benda? Bahasa Inggris mempertemukan kehangatan intim dari Saxon Genitive (lencana apostrof 's) untuk makhluk hidup dan waktu, dengan keanggunan formal dari Norman Genitive (frasa preposisi of) untuk benda mati dan struktur hierarki.\n\nDi modul ini, kamu akan membedah aturan apostrof kepemilikan tunggal dan jamak, membedakan kepemilikan bersama (Joint Possession) dari kepemilikan terpisah (Separate Possession), serta menavigasi kuantifier distributif (Each, Every, Either, Neither) yang mengunci keselarasan kalimat dalam bentuk tunggal.",
    coreConceptSummary: "Saxon Genitive (akhiran 's atau s') digunakan untuk makhluk hidup, organisasi manusia, dan ukuran waktu (\"the researcher's finding\", \"two weeks' delay\"). Norman Genitive (frasa of) digunakan untuk benda mati, konsep abstrak, atau frasa pemilik yang panjang (\"the degradation of the marine ecosystem\").\n\nPada kepemilikan bersama (Joint Possession), tanda 's cukup disematkan pada nama terakhir (\"Watson and Crick's discovery\"). Pada kepemilikan terpisah (Separate Possession), sematkan 's pada setiap nama (\"Harvard's and Oxford's criteria\"). Kuantifier distributif seperti Each, Every, Either, dan Neither selalu mengunci kata kerja dalam keselarasan tunggal (\"Neither of the methods is reliable\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Saxon Genitive ('s / s'): Makhluk Bernyawa & Ukuran Waktu",
                "explanation": "Coba bayangkan sebuah lencana kecil berbentuk apostrof-s ('s) yang disematkan untuk memproklamirkan hak milik. Struktur klasik bernama Saxon Genitive ini sangat wajar ditempelkan pada kata benda tunggal manusia, hewan, atau jamak tak beraturan (the scientist's lab, the children's ward). Jika kata benda jamaknya sudah mendesis dengan akhiran -s, cukup beri koma atas saja (the scientists' lab). Menariknya, konvensi ini juga sah secara baku untuk mengikat konsep ukuran waktu abstrak, seperti 'a week's delay' atau 'today's economy'.",
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
                "explanation": "Tapi tunggu dulu, apakah benda mati bisa 'memiliki' sesuatu secara harfiah layaknya manusia? Tata bahasa preskriptif berpendapat tidak, sehingga kamu harus mencabut hak pemakaian lencana 's dari mereka. Sebagai gantinya, gunakanlah struktur Norman Genitive yang lebih elegan dengan menyisipkan preposisi 'of' di antaranya (the door of the car). Strategi ini bukan cuma untuk benda mati, tapi wajib kamu pakai ketika sang pemilik memiliki nama (frasa nominal) yang terlalu panjang untuk sekadar ditempeli apostrof.",
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
                "explanation": "Pernah merasa satu cara saja tidak cukup untuk menegaskan kepemilikan suatu benda? Di sinilah bahasa Inggris memamerkan konstruksi rakus bernama 'Double Genitive'. Sesuai namanya, pola ini menggabungkan sekaligus preposisi 'of' dengan bentuk apostrof 's atau possessive pronoun di akhir frasa. Alih-alih membingungkan, pola ganda ini justru melahirkan nuansa yang sangat tajam, yakni untuk menyatakan 'salah satu dari beberapa barang spesifik yang dimiliki oleh pihak tersebut'.",
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
                "explanation": "Bayangkan kamu dan temanmu patungan membeli satu benda yang sama; siapa yang berhak memegang lencana apostrof ('s)? Dalam Joint Possession atau kepemilikan bersama, hukumnya sangat efisien: apostrof 's cukup disematkan pada nama orang yang disebut TERAKHIR saja (Alice and Bob's laboratory = 1 lab milik bersama). Namun, beda ceritanya jika kamu dan temanmu masing-masing memiliki benda tersebut secara terpisah (Separate Possession). Demi keadilan, apostrof 's wajib disematkan satu per satu pada SETIAP nama pemiliknya (Alice's and Bob's laboratories = 2 lab berbeda).",
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
      toeflApplication: 'TOEFL Structure secara berkala menguji kesalahan pasangan much people ❌ atau many information ❌.',
      scoringImpact: 'Meningkatkan akurasi leksikogramatikal.'
    },
    goldenRules: [
      'Gunakan many / few untuk benda terhitung (plural).',
      'Gunakan much / little untuk benda tidak terhitung (uncountable massa).',
      'Each dan Every selalu diikuti kata benda tunggal dan kata kerja tunggal.'
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
      explanation: "Dalam tata bahasa formal dan tes internasional (IELTS/TOEFL), frasa \"Neither of [plural noun]\" dan \"Either of [plural noun]\" bermakna distributif (\"tidak satu pun dari keduanya\") sehingga menuntut kata kerja tunggal (is, has, was).",
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
      linguisticExplanation: "Untuk Countable Nouns (\"students\"), perbandingan kuantitas yang lebih sedikit wajib menggunakan fewer (BUKAN less atau lesser). Less hanya digunakan untuk Uncountable Nouns.",
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
    stageNumber: 3,
    stageName: 'Tahap 3: Tipologi Verba & Modalitas',
    categoryKey: 'Word Classes',
    moduleNumber: 11,
    title: 'Core Verb Types: Transitive, Intransitive, dan Ergative Verbs',
    subtitle: 'Memahami predikat berobjek, predikat tanpa objek, dan kata kerja dua arah',
    levelBadge: 'Morfologi Verb · Modul 11',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan sebuah pertandingan tenis. Pukulan smes membutuhkan bola sebagai sasaran langsung agar permainan berlanjut. Namun, senyuman atau lompatan kegirangan si pemain energinya selesai pada tubuhnya sendiri tanpa menyentuh apa pun. Dalam bahasa Inggris, energi kata kerja bekerja persis seperti hukum ini.\n\nDi modul ini, kamu akan menelusuri Valensi Verba (daya tampung objek kata kerja). Kamu akan memahami mengapa verba transitif menuntut sasaran langsung (Direct Object), verba ditransitif sanggup merangkul dua objek lewat operasi Dative Shift, verba ergatif bisa membalik sudut pandang secara mandiri, dan mengapa kata kerja tanpa objek penderita haram hukumnya dipasifkan.",
    coreConceptSummary: "Transitive Verbs (verba transitif) membutuhkan Direct Object (objek langsung) agar maknanya tuntas (\"published the paper\"). Sebaliknya, Intransitive Verbs (verba intransitif) aksinya selesai pada subjek tanpa memerlukan objek penderita (\"the reaction occurred\").\n\nDitransitive Verbs mengambil dua objek (Indirect Object penerima dan Direct Object benda) yang posisinya bisa diputar lewat Dative Shift menggunakan preposisi to/for (\"granted a fund to the lab\"). Ergative Verbs bisa bertindak aktif transitif (\"increased the heat\") maupun intransitif saat objek otomatis naik menjadi subjek (\"the heat increased\"). Larangan mutlak: verba intransitif murni pantang dipasifkan (hindari \"was occurred ❌\" atau \"was happened ❌\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Valensi Verba & Kebutuhan Objek Penderita (Transitive vs Intransitive)",
                "explanation": "Pernahkah kamu merasa ada kalimat yang seperti menggantung dan belum selesai? Nah, di sinilah kita mengenal yang namanya Transitive Verbs, yaitu kata kerja yang butuh 'korban' atau objek langsung supaya maknanya utuh. Sebaliknya, coba perhatikan Intransitive Verbs yang aksinya sudah tuntas pada si subjek itu sendiri, tanpa perlu melibatkan objek lain. Kata kerja jenis ini sangat mandiri, sehingga kalaupun kamu ingin menambahkan keterangan, kamu harus memakai kata depan atau preposisi sebagai perantaranya.",
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
                "explanation": "Bayangkan kamu sedang memberi kado; pasti ada barang yang diberikan dan ada orang yang menerimanya, bukan? Inilah inti dari Ditransitive Verbs seperti give, send, atau offer, yang memang dirancang untuk memegang dua objek sekaligus: benda dan penerimanya. Serunya, dalam bahasa Inggris kamu bisa melakukan sedikit sulap posisi yang disebut Dative Shift. Kamu tinggal memindahkan objek bendanya ke depan, lalu menyisipkan preposisi 'to' atau 'for' sebelum menyebutkan siapa penerimanya, sehingga kalimatmu jadi lebih dinamis.",
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
                "explanation": "Ada kalanya kata kerja bisa bersikap sangat fleksibel, dan inilah yang kita sebut dengan Ergative Verbs seperti open, close, atau melt. Coba perhatikan, kata-kata ini bisa bertindak layaknya bos yang butuh objek, misalnya saat kamu bilang 'The scientist increased the temperature'. Tapi ajaibnya, mereka juga bisa berdiri sendiri sebagai intransitive di mana objek penderita tadi tiba-tiba naik pangkat menjadi subjek utama, seperti dalam kalimat 'The temperature increased'. Memahami sifat ganda ini akan membuat kalimat-kalimatmu terasa jauh lebih natural dan variatif.",
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
                "explanation": "Satu hal yang wajib banget kamu hindari adalah memaksakan bentuk pasif pada kata kerja yang secara alami memang intransitif murni, seperti occur, happen, atau exist. Ingat ya, bentuk pasif itu ibarat memutar balik fokus kalimat dari pelaku ke objek penderita. Nah, karena kata kerja intransitif ini sedari awal memang tidak punya objek, memaksakan bentuk seperti 'was happened' atau 'was occurred' adalah sebuah pelanggaran fatal. Jadi, biarkan saja mereka tampil apa adanya dalam bentuk aktif tanpa perlu dipasifkan.",
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
      ieltsApplication: 'Menghindari pasifisasi ilegal pada kata kerja intransitif seperti occurred, happened, died, emerged di IELTS Writing.',
      toeflApplication: 'TOEFL Written Expression secara berkala menguji pembedaan raise (transitive) vs rise (intransitive) dan lay vs lie.',
      scoringImpact: 'Mencegah distorsi gramatikal fatal.'
    },
    goldenRules: [
      'Jangan pernah mempasifkan kata kerja intransitif (happen, occur, exist, appear, rise).',
      'Raise/Lay/Set membutuhkan objek langsung (transitive); Rise/Lie/Sit tidak memiliki objek (intransitive).'
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
      linguisticExplanation: "\"Lay\" (transitive: meletakkan sesuatu) bentuk lampaunya adalah laid (laid down the charts). \"Lie\" (intransitive: berbaring) bentuk lampaunya adalah lay (he lay on the bed).",
      acceptedVariations: [
            "The patient put down the heavy medical charts on the desk."
      ]
},
      {
        id: 'ec-m11-1',
        flawedSentence: 'A major breakthrough was occurred during the third trial.',
        flawLocation: 'was occurred',
        correctedSentence: 'A major breakthrough occurred during the third trial.',
        linguisticExplanation: '"Occur" adalah intransitive verb yang tidak dapat dipasifkan (occurred).'
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
    mentalModelIntro: "Bayangkan pohon purba yang mencatat pergantian musim dari dalam serat kayunya sendiri. Kata kerja tidak beraturan (Irregular Verbs) bekerja dengan prinsip alami yang sama. Alih-alih menempelkan akhiran standar -ed, kata kerja kuat ini menandai masa lampau lewat pergeseran vokal internal yang berirama (Ablaut Pattern seperti sing-sang-sung).\n\nDi modul ini, kita akan memetakan ratusan kata kerja tak beraturan ke dalam 4 keluarga pola morfologis yang simetris (AAA, ABB, ABA, ABC). Kamu juga akan menguasai pembeda sejati pada pasangan kata rancu yang sering mengecoh: lie vs lay serta rise vs raise berdasarkan ada tidaknya objek sasaran.",
    coreConceptSummary: "Irregular Verbs (Strong Verbs) menandai perubahan tenses melalui pergeseran bunyi vokal internal (Ablaut Pattern). Morfologinya terbagi ke dalam 4 pola: AAA tanpa perubahan (cost-cost-cost), ABB dengan bentuk lampau dan partisipel kembar (buy-bought-bought), ABA yang kembali ke bentuk awal (run-ran-run), dan ABC dengan tiga wujud berbeda (write-wrote-written).\n\nBeberapa bentuk lampau kuno berakhiran -en bertindak sebagai Partisipel Adjektiva murni (\"a sunken ship\"), kontras dengan verba aktif ber-tenses (\"the ship has sunk\"). Untuk pasangan kata rancu: gunakan lie (berbaring) dan rise (naik sendiri) untuk aksi intransitif tanpa objek, serta gunakan lay (meletakkan) dan raise (menaikkan) untuk aksi transitif berobjek langsung.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Prinsip Fonologis Ablaut Pattern (Gradasi Vokal)",
                "explanation": "Pernah bertanya-tanya kenapa sing berubah jadi sang dan bukan singed? Ini karena adanya fenomena Ablaut, yaitu sebuah trik kuno bahasa Inggris di mana vokal di dalam kata itu sendiri berubah untuk menandakan waktu yang berbeda. Daripada menghafal ratusan kata tanpa arah, coba perhatikan pola vokal /i/ yang bergeser ke /æ/ lalu ke /ʌ/, seperti pada drink-drank-drunk atau begin-began-begun. Dengan mengenali irama perubahan suara ini, kamu bisa menaklukkan puluhan kata kerja ireguler sekaligus dengan jauh lebih mudah.",
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
                "explanation": "Menghafal irregular verbs atau kata kerja tak beraturan tidak harus terasa seperti mimpi buruk kalau kamu tahu rahasia pengelompokannya. Sebenarnya, mereka cuma terbagi ke dalam empat pola morfologis yang sangat sederhana. Ada kelompok AAA yang super malas karena tidak berubah sama sekali (seperti cost-cost-cost), kelompok ABB di mana bentuk kedua dan ketiganya kembar (buy-bought-bought), lalu kelompok ABA yang bentuk pertama dan ketiganya sama (run-ran-run), dan terakhir kelompok ABC di mana ketiganya tampil beda penuh (write-wrote-written). Begitu kamu mengenali pola-pola ini, otakmu akan otomatis mengelompokkannya tanpa perlu dipaksa.",
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
                "explanation": "Tahukah kamu bahwa beberapa irregular verbs punya dua bentuk masa lampau yang fungsinya bertolak belakang? Bentuk kuno yang berakhiran -en sekarang sudah beralih profesi dan bertindak murni sebagai kata sifat atau Adjectiva, seperti saat kita menyebut 'drunken behavior' atau 'sunken treasure'. Di sisi lain, bentuk yang lebih modern tetap setia pada tugas aslinya sebagai kata kerja (Verba) untuk menyatakan aktivitas yang sudah selesai, seperti 'he has drunk' atau 'the ship has sunk'. Jadi, perhatikan baik-baik apakah kamu sedang mendeskripsikan suatu benda atau menceritakan sebuah tindakan.",
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
                "explanation": "Ini dia dua pasang kata kerja yang paling sering menjebak bahkan penutur asli sekalipun: LIE melawan LAY, dan RISE melawan RAISE. Kunci rahasianya ada pada kebutuhan akan objek; Lie (berbaring) dan Rise (naik sendiri) adalah intransitif yang aksinya dilakukan oleh subjek tanpa melibatkan benda lain. Sebaliknya, Lay (meletakkan sesuatu) dan Raise (menaikkan sesuatu) adalah transitif yang selalu butuh objek yang dikenai pekerjaan tersebut. Ingat saja, kamu bisa 'raise your hand' karena ada tangan yang diangkat, tapi matahari akan 'rise' dengan sendirinya di pagi hari.",
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
      ieltsApplication: 'Penggunaan akurat verba statif (consists of, comprises, indicates) sangat krusial pada IELTS Writing Task 1.',
      toeflApplication: 'TOEFL Structure menguji verba statif ganda seperti have (kepemilikan = statif vs aksi = dinamis).',
      scoringImpact: 'Meningkatkan akurasi tenses dan aspek.'
    },
    goldenRules: [
      'Jangan gunakan bentuk -ing pada kata kerja kognisi, kepemilikan, dan relasi (consist, belong, contain).',
      'Consist of tidak pernah pasif dan tidak pernah continuous (is consisting ❌).'
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
      explanation: "Verba persepsi sensorik (smell, taste, sound, look) saat menerangkan karakteristik intrinsik objek berstatus Stative Linking Verb dan wajib menggunakan Simple Tense + Adjective/Prepositional phrase.",
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
      explanation: "\"Have\" saat berarti kepemilikan fisik statis (possession) tidak boleh continuous (is having degrees ❌). Namun saat berarti \"mengalami\" (experiencing) keraguan/masalah, \"have\" beralih fungsi menjadi dynamic action sehingga continuous diperbolehkan (is having doubts ✔).",
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
    mentalModelIntro: "Bayangkan memutar kenop volume atau memasang filter warna pada lensa kamera. Fakta peristiwanya tetap sama, namun filter yang kamu pasang sanggup mengubah kalimat menjadi izin santai, kemungkinan tipis, atau keharusan mutlak. Inilah fungsi Modal Auxiliaries (can, must, should, might) sebagai instrumen pengatur sikap dan derajat kepastian kalimat.\n\nDi modul ini, kamu akan membedakan Modalitas Deontik (aturan sosial dan kewajiban) dari Modalitas Epistemik (penalaran logis berbasis bukti). Kamu juga akan menguasai formula Past Modals (Modal + HAVE + V3) untuk deduksi masa lalu serta memanfaatkan Semi-Modals untuk teknik Academic Hedging yang elegan.",
    coreConceptSummary: "Modal Auxiliaries bersifat invarian (tidak pernah berakhiran -s, menolak to-infinitive, dan selalu diikuti Bare Infinitive). Modals menjalankan dua fungsi: Modalitas Deontik untuk aturan dan kewajiban (\"You must wear goggles\"), serta Modalitas Epistemik untuk mengukur kepastian bukti dari spekulatif hingga mutlak (\"might be\" < \"should be\" < \"must be\").\n\nUntuk deduksi masa lalu, gunakan Past Modals (Modal + HAVE + V3: \"They must have known\"). Semi-Modals (have to, be able to) digunakan sebagai pengisi celah bentuk tenses yang tidak dimiliki modal murni (\"will be able to\"). Penguasaan modalitas adalah fondasi teknik Academic Hedging untuk melunakkan klaim ilmiah secara objektif.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Karakteristik Sintaksis Modals Murni",
                "explanation": "Coba bayangkan Modal Auxiliaries seperti can, will, atau must ini sebagai kata kerja dengan prinsip yang sangat kaku dan pantang diubah. Pertama, mereka ini invarian, artinya tidak akan pernah mau ditambahi akhiran '-s' meskipun subjeknya orang ketiga tunggal. Kedua, mereka selalu menuntut pasangannya berupa Bare Infinitive Complement, alias kata kerja dasar yang tampil polos tanpa embel-embel 'to' di depannya. Terakhir, mereka adalah operator mandiri yang sangat tangguh, sehingga kamu bisa langsung menempelkan kata 'not' tanpa perlu repot-repot memanggil kata bantu seperti 'do' atau 'does'.",
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
                "explanation": "Ketika kamu memakai modals, kamu sebenarnya sedang menyiarkan dua jenis pesan yang berbeda: Deontik atau Epistemik. Modalitas Deontik itu ibarat kamu sedang menjadi polisi aturan; fokusnya pada izin, kewajiban, atau keharusan seperti saat kamu menegaskan 'You must wear a mask'. Namun, saat kamu memakai Modalitas Epistemik, kamu sedang menjadi detektif yang menarik kesimpulan logis dari bukti-bukti yang ada. Di sinilah kamu bermain dengan spektrum keyakinan, mulai dari Must kalau kamu sangat yakin, turun ke Should untuk kemungkinan besar, sampai ke Might atau Could kalau kamu sekadar menebak secara spekulatif.",
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
                "explanation": "Bagaimana caranya bercerita tentang keharusan atau kemungkinan di masa lalu kalau modals sendiri seringkali tidak punya bentuk lampau yang pas? Trik rahasianya adalah dengan menggabungkan modals tersebut dengan wujud Present Perfect, yaitu HAVE diikuti kata kerja bentuk ketiga (V3). Perpaduan ini menciptakan nuansa makna yang sangat spesifik, misalnya Must have untuk kesimpulan pasti di masa lalu, atau Could have untuk membicarakan peluang yang sayangnya tidak pernah terwujud. Kamu bahkan bisa memakai Should have untuk mengekspresikan evaluasi bernada penyesalan tentang hal yang semestinya dilakukan tapi terabaikan.",
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
                "explanation": "Kadang-kadang, modals murni punya keterbatasan karena mereka tidak bisa digabungkan satu sama lain atau diubah bentuknya. Di sinilah Semi-modals seperti have to, ought to, atau be able to datang sebagai pahlawan penyelamat. Mereka sangat unik karena menggabungkan kekuatan makna modal dengan keluwesan kata kerja reguler yang bisa diinfleksikan sesuka hati. Alhasil, kamu bisa menutupi celah tata bahasa, misalnya memakai 'will be able to' untuk bentuk masa depan, karena formasi 'will can' jelas tidak mungkin diucapkan dalam bahasa Inggris.",
                "formula": "Future Ability: will be able to + V1 | Obligasi Objektif: has/have to + V1",
                "examples": [
                        {
                                "sentence": "With advanced quantum computing, researchers will be able to simulate complex molecular bonds.",
                                "translation": "Dengan komputasi kuantum canggih, para peneliti akan mampu mensimulasikan ikatan molekul yang kompleks.",
                                "note": "will be able to (menggantikan will can yang ilegal)."
                        }
                ]
        }
],
    examBridge: {
      ieltsApplication: 'Penggunaan linking verbs formal (remain stable, appear plausible) memberi nuansa akademik tinggi.',
      toeflApplication: 'TOEFL Structure menguji jebakan pemilihan Adverb (-ly) vs Adjective setelah seem/remain.',
      scoringImpact: 'Menghindari kesalahan modifikasi kata sifat.'
    },
    goldenRules: [
      'Gunakan ADJECTIVE (bukan adverb -ly) setelah linking verbs (The food smells delicious, bukan deliciously).',
      'Remain, seem, appear, become adalah linking verbs formal esensial.'
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
      explanation: "Dalam \"The hypothesis proved false\", proved bertindak sebagai Copular Linking Verb (bersinonim dengan turned out to be), menghubungkan subjek dengan adjective complement \"false\".",
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
      explanation: "\"Remain\" di sini adalah Linking Verb yang menghubungkan subjek (\"The participant\") dengan keadaan dirinya, sehingga membutuhkan Adjective (silent), bukan Adverb (silently).",
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
    mentalModelIntro: "Bayangkan perbedaan antara rekaman video yang menangkap orang berlari dan lukisan potret yang menangkap ekspresi tenang seorang tokoh. Dalam bahasa Inggris, ada garis batas tegas antara Dynamic Verbs (aksi fisik yang berproses) dan Stative Verbs (status kondisi batin atau kepemilikan yang menetap).\n\nDi modul ini, kamu akan memahami mengapa kata kerja statif dilarang menggunakan bentuk continuous (-ing). Kita juga akan membedah kata kerja berkepribadian ganda (Dual-Meaning Verbs) seperti think dan have yang bisa berganti makna saat berubah wujud dinamis, serta menguasai verba sensoris saat bertindak sebagai cermin sifat versus aksi fisik.",
    coreConceptSummary: "Stative Verbs (verba keadaan) merekam status pikiran (know, believe), emosi (love, prefer), kepemilikan (belong, possess), dan persepsi sensoris (smell, seem). Karena mewakili kondisi utuh, verba statif murni dilarang menggunakan bentuk Continuous (-ing: katakan \"I understand\", bukan \"I am understanding ❌\").\n\nDual-Meaning Verbs bisa berstatus statif saat menyatakan opini/kepemilikan (\"I think you are right\"; \"She has a car\"), namun menjadi dinamis dan sah memakai -ing saat merujuk pada proses mental aktif atau aktivitas nyata (\"I am thinking about the plan\"; \"She is having lunch\"). Verba sensoris (sound, taste) bertindak sebagai Linking Verb berpasangan dengan kata sifat (\"sounds plausible\"), namun menjadi aksi dinamis berpasangan dengan kata keterangan saat subjek melakukan tindakan fisik (\"tasted the soup carefully\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Ciri Semantis Verba Keadaan (Stativity) & 4 Kategori Utamanya",
                "explanation": "Pernahkah kamu menyadari bahwa tidak semua kata kerja itu melibatkan gerakan fisik atau keringat? Coba berkenalan dengan Stative Verbs, kata kerja tenang yang tugasnya sekadar mendeskripsikan kondisi yang terus berlangsung tanpa ada usaha yang dinamis. Kamu bisa mengelompokkan mereka ke dalam empat kubu sederhana: kognisi atau pikiran (know, believe), emosi dan perasaan (love, hate), status kepemilikan (possess, own), dan kemampuan indera sensoris kita (see, taste). Intinya, kata-kata ini merekam sebuah 'keadaan', bukan menceritakan sebuah 'tindakan'.",
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
                "explanation": "Hati-hati, ada beberapa kata kerja bunglon yang suka bermain peran ganda alias Dual-Meaning Verbs. Terkadang mereka bersikap statif dan menolak bentuk '-ing', tapi di lain waktu mereka bisa tiba-tiba menjadi sangat dinamis tergantung konteks ceritanya. Ambil contoh kata think; jika maknanya adalah memiliki pendapat, ia bersifat statif, namun jika kamu benar-benar sedang memeras otak memikirkan sesuatu, ia berubah menjadi aksi dinamis. Begitu pula dengan have yang statif saat berarti kepemilikan, tapi seketika menjadi dinamis saat bermakna melakukan aktivitas seperti 'having breakfast'.",
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
                "explanation": "Kelompok verba sensoris seperti taste, smell, atau feel punya aturan main yang sangat menarik. Saat kata-kata ini berfungsi menceritakan kualitas atau sifat benda, mereka bertindak sebagai Copular Verb dan harus dipasangkan dengan kata sifat (Adjectiva), seperti 'The soup tastes delicious'. Tapi tunggu dulu, jika subjek kalimatnya benar-benar melakukan aksi fisik mencicipi atau mengendus, verba ini seketika berubah wujud menjadi Dynamic Action Verb. Saat itulah kamu diwajibkan memakai kata keterangan (Adverbia) untuk menjelaskan cara kerjanya, misalnya 'The chef tasted the soup carefully'.",
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
                "explanation": "Ini dia jebakan terbesar bagi kita yang berbahasa ibu Indonesia: kata 'sedang' rasanya bisa bebas ditempelkan ke kata apa saja, seperti 'saya sedang paham' atau 'saya sedang suka'. Sayangnya, kalau kebiasaan ini diterjemahkan mentah-mentah ke bahasa Inggris, kalimatmu akan berakhir canggung seperti 'I am understanding'. Cara terbaik untuk menghindari jebakan ini adalah dengan selalu bertanya pada diri sendiri sebelum memakai bentuk '-ing'. Jika kata tersebut murni hanya menggambarkan status atau keberadaan (Stative), bukan aksi fisik nyata (Dynamic), maka lupakan sejenak bentuk continuous tersebut.",
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
      ieltsApplication: 'Modalitas adalah pilar utama Academic Hedging di IELTS Task 2 (This may indicate...).',
      toeflApplication: 'TOEFL Structure menguji larangan "to" setelah modal murni (must to go ❌).',
      scoringImpact: 'Meningkatkan objektivitas retorika akademis.'
    },
    goldenRules: [
      'Jangan pernah menambahkan "to" setelah modal murni (can, could, may, might, must, should, will, would).',
      'Jangan pernah menambahkan akhiran -s pada modal verb (he musts ❌).'
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
      explanation: "\"Needn't have V3\" berarti aksi tersebut sudah terlanjur dilakukan padahal sebenarnya tidak diperlukan. Sebaliknya, \"didn't need to do\" berarti tidak perlu dilakukan dan biasanya tidak jadi dilakukan.",
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
      explanation: "Untuk menyatakan kesimpulan logis yang sangat diyakini di masa lampau (high certainty deduction), formulanya adalah Must + have + Past Participle (V3).",
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
      linguisticExplanation: "Frasa semi-modal \"had better\" wajib diikuti langsung oleh Bare Infinitive tanpa partikel \"to\" (had better consult ✔️, BUKAN had better to consult ❌).",
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
    stageNumber: 4,
    stageName: 'Tahap 4: Modifiers, Kolokasi & Konektor Kalimat',
    categoryKey: 'Word Classes',
    moduleNumber: 15,
    title: 'Semi-Modals & Phrasal Modals: Ought to, Had better, Be able to, Used to vs Be used to',
    subtitle: 'Konstruksi modal berfrasa, peringatan urgensi, dan pembedaan Used to vs Be used to',
    levelBadge: 'Semi-Modals · Modul 15',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan kamu sedang menata interior sebuah galeri mewah di mana setiap perabot memiliki tempat alami yang harmonis. Begitu pula saat merangkai kata penjelas dalam bahasa Inggris: susunan kata sifat diatur oleh hierarki persepsi yang rapi, dan kata keterangan memiliki tata letak khusus agar tidak merusak keutuhan kalimat.\n\nDi modul ini, kamu akan menguasai formula OSASCOMP untuk mengurutkan kata sifat secara alami, membedakan adjektiva bertingkat dari adjektiva ekstrem mutlak, serta menempatkan kata keterangan tanpa memutus hubungan intim antara predikat dan objek langsungnya.",
    coreConceptSummary: "Urutan kata sifat di depan kata benda mengikuti hierarki OSASCOMP: Opinion (opini), Size (ukuran), Age (usia), Shape (bentuk), Color (warna), Origin (asal), Material (bahan), dan Purpose (tujuan), misalnya \"an innovative large modern spherical metallic sampling apparatus\".\n\nGradable Adjectives (kata sifat bertingkat seperti hot, important) bisa dipasangkan dengan very/extremely. Sebaliknya, Non-Gradable / Extreme Adjectives (kata sifat ekstrem mutlak seperti essential, freezing, unique) haram dipasangkan dengan very dan wajib menggunakan penguat mutlak seperti absolutely/completely. Adverbs of Manner dilarang memotong kata kerja transitif dan objeknya (\"analyzed the data carefully\", bukan \"analyzed carefully the data ❌\"). Waspadai Flat Adverbs (fast, hard, late) yang bentuknya identik dengan kata sifat tanpa akhiran -ly.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Hierarki Urutan Adjektiva Baku (OSASCOMP)",
                "explanation": "Pernahkah kamu bingung saat harus menjajarkan banyak kata sifat sekaligus di depan sebuah kata benda? Tenang saja, bahasa Inggris punya aturan emas yang disebut hierarki OSASCOMP untuk membuat deretan tersebut terdengar rapi dan tidak berantakan. Bayangkan kamu sedang menyaring informasi: mulailah dari pendapat subjektifmu (Opinion), lalu ukuran (Size), umur (Age), dan bentuknya (Shape). Setelah itu, barulah kamu tambahkan detail fisik seperti warna (Color), asal usul (Origin), bahan pembuat (Material), hingga tujuan penggunaannya (Purpose).",
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
                "explanation": "Sama seperti cabai yang level pedasnya bisa diukur, kebanyakan kata sifat itu Gradable atau bisa diatur tingkat intensitasnya dengan tambahan kata 'very' atau 'slightly'. Tapi hati-hati dengan yang namanya Non-Gradable atau Extreme Adjectives, karena mereka ini sudah membawa makna yang sangat mutlak di dalam dirinya. Memasangkan kata 'very' dengan kata sifat ekstrem ini ibarat menuangkan air ke gelas yang sudah penuh luber—sangat terlarang secara gramatikal! Sebagai gantinya, pakailah penguat yang sepadan seperti 'absolutely', 'completely', atau 'utterly' untuk memberikan kesan maksimal tanpa terdengar aneh.",
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
                "explanation": "Menempatkan kata keterangan atau Adverbs di dalam kalimat itu ibarat menata furnitur; salah letak bisa merusak kenyamanan. Untuk keterangan seberapa sering sesuatu terjadi (Adverbs of Frequency), tempat favorit mereka adalah tepat sebelum kata kerja utama atau bersembunyi persis setelah To Be. Kalau kamu mendeskripsikan cara sebuah tindakan dilakukan (Adverbs of Manner), letakkanlah ia dengan manis setelah objek selesai disebut. Nah, untuk keterangan yang menyampaikan sikap penulis (Stance Adverbs) seperti consequently atau inevitably, mereka suka tampil elegan di awal kalimat dengan pengawalan tanda koma.",
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
                "explanation": "Jangan terkecoh dengan anggapan bahwa semua kata keterangan pasti berakhiran '-ly'. Kenyataannya, ada kelompok keras kepala bernama Flat Adverbs yang bentuknya dibiarkan sama persis dengan kata sifatnya, seperti fast, hard, late, dan high. Berhati-hatilah, karena memaksakan akhiran '-ly' pada mereka justru akan mengubah maknanya secara drastis! Bayangkan betapa berbedanya menceritakan seseorang yang bekerja sangat keras (hard) dibandingkan seseorang yang hampir tidak pernah bekerja (hardly), atau mengatakan kamu tiba terlambat (late) dengan bercerita tentang kejadian akhir-akhir ini (lately).",
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
      ieltsApplication: 'Pembedaan used to dan be used to sering muncul pada Speaking Part 1 & Writing Task 2.',
      toeflApplication: 'TOEFL Written Expression menguji bentuk gerund setelah be used to.',
      scoringImpact: 'Mencegah distorsi makna kebiasaan masa lalu vs masa kini.'
    },
    goldenRules: [
      'Used to diikuti Verb 1 murni; Be used to diikuti Verb-ing / Noun.',
      'Had better selalu berbentuk lampau "had" meskipun bermakna saran mendesak masa kini.'
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
      explanation: "Pada Transitive Separable Phrasal Verbs, jika objek berupa Pronoun (it, them, him, her), objek WAJIB diletakkan di tengah antara verba dan partikel (turned it down ✔️, BUKAN turned down it ❌).",
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
      linguisticExplanation: "Pada transitive separable phrasal verbs, pronoun object (it) wajib disisipkan di antara verba dan partikel preposisi (called it off).",
      acceptedVariations: []
},
      {
        id: 'ec-m15-1',
        flawedSentence: 'You had better to back up the raw data immediately.',
        flawLocation: 'had better to back up',
        correctedSentence: 'You had better back up the raw data immediately.',
        linguisticExplanation: '"Had better" diikuti Bare Infinitive tanpa "to" (had better back up).'
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
    mentalModelIntro: "Bayangkan peta satelit digital di ponselmu: saat menampilkan benua, pandanganmu berada pada wilayah luas bervolume (IN); saat memperbesar ke jalan raya, kamu melihat bidang permukaan (ON); dan saat mengetuk pin penanda gedung, kamu mengunci titik koordinat presisi (AT). Tiga lapis perspektif inilah yang menjadi nyawa trio preposisi utama.\n\nDi modul ini, kita akan membedah logika spasial (ruang) dan temporal (waktu) dari IN, ON, dan AT, mengenali perubahan bentuk ke preposisi gerak dinamis seperti into dan onto, serta membuang kebiasaan salah menyelipkan preposisi berlebih pada kata kerja transitif.",
    coreConceptSummary: "Gunakan IN untuk ruang bervolume dan rentang waktu luas (in the lab, in 2026); gunakan ON untuk bidang permukaan dan hari/tanggal (on the table, on Monday); dan gunakan AT untuk titik koordinat spesifik serta jam (at the entrance, at 9:00 AM).\n\nSaat melintasi batas ruang secara dinamis, gunakan into (masuk ke dalam) atau onto (mendarat ke atas). Kuasai Dependent Prepositions (kolokasi baku seperti rely on, consist of, superior to). Hindari Redundant Prepositions (preposisi berlebih pada verba transitif: katakan \"discuss the topic\", bukan \"discuss about ❌\"; \"emphasize the point\", bukan \"emphasize on ❌\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Matriks Geometri Spasial & Temporal: Logika AT, ON, IN",
                "explanation": "Membedakan AT, ON, dan IN tidak akan memusingkan kalau kamu tahu filosofi ruang dan waktu di baliknya. Secara ruang, bayangkan sebuah zoom in: gunakan IN untuk area yang luas bervolume, ON untuk permukaan datar yang menempel, dan AT untuk titik spesifik yang akurat. Konsep yang sama berlaku persis untuk waktu, dari yang paling umum ke yang paling presisi. Pakailah IN untuk bulan, tahun, atau dekade yang panjang, sempitkan dengan ON untuk hari dan tanggal, lalu tunjuk dengan AT untuk jam yang sangat spesifik.",
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
                "explanation": "Bahasa Inggris sangat cerewet dalam membedakan benda yang sedang diam dengan benda yang sedang bergerak pindah tempat. Kalau sesuatu sudah berada di suatu lokasi yang stabil, kamu cukup menggunakan IN (di dalam), ON (di atas), atau AT (pada titik). Namun, begitu kamu menambahkan unsur pergerakan dinamis, posisinya harus berubah menjadi bentuk transit. Gunakan INTO untuk menembus masuk ke dalam, ONTO untuk mendarat ke atas sebuah permukaan, dan TOWARD saat pergerakannya mengarah ke sebuah tujuan tertentu.",
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
                "explanation": "Banyak kata dalam bahasa akademik bahasa Inggris yang bersikap eksklusif; mereka hanya mau berpasangan dengan preposisi tertentu yang disebut Dependent Prepositions. Hubungan romantis ini sifatnya mutlak dan dikenal sebagai kolokasi baku, jadi kamu tidak bisa menebak atau menerjemahkannya secara harfiah. Mau tidak mau, kamu harus membiasakan diri bahwa rely akan selalu menggandeng on, consist tak pernah lepas dari of, dan interested setia dengan in. Menghafalnya sebagai satu kesatuan frasa utuh adalah rahasia utama untuk terdengar natural layaknya penutur asli.",
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
                "explanation": "Karena terbiasa dengan bahasa Indonesia, kita sering kali tanpa sadar menyisipkan preposisi redundan setelah kata kerja transitif dalam bahasa Inggris. Kata kerja transitif itu sangat mandiri dan maunya langsung menyentuh objek penderitanya tanpa dihalangi kata depan apa pun. Jadi, kebiasaan mengatakan 'discuss about' atau 'emphasize on' harus segera ditinggalkan dan ubah menjadi 'discuss' atau 'emphasize' saja. Sebaliknya, saat subjek memberi penjelasan kepada seseorang, ingatlah untuk memakai 'explain to me', bukan sekadar 'explain me' yang justru terdengar keliru.",
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
      explanation: "Opinion (sleek) ➔ Origin (Italian) ➔ Material (leather) ➔ Purpose/Qualifier (running) + Noun (shoe). Purpose selalu menempel persis sebelum Head Noun.",
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
      explanation: "Urutan OSASCOMP: Opinion (valuable) ➔ Age (antique) ➔ Origin (Japanese) ➔ Material (ceramic) + Noun (vase).",
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
      linguisticExplanation: "Berdasarkan urutan OSASCOMP: Age (antique) ➔ Shape (round) ➔ Material (wooden) + Noun (table).",
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
    mentalModelIntro: "Bayangkan merancang jembatan antarpulau: ada jembatan kabel baja kokoh yang menghubungkan dua daratan mandiri setara, ada jembatan anakan yang menggantung pada pilar induk, dan ada rambu suar penunjuk arah. Dalam kalimat, peranti penghubung bekerja persis seperti infrastruktur tersebut.\n\nDi modul ini, kamu akan memetakan tiga kasta konektor: konjungsi koordinatif FANBOYS, konjungsi subordinatif, dan kata keterangan transisi (Conjunctive Adverbs). Kamu juga akan membentengi tulisanmu dari Comma Splice dan Double Conjunction Trap.",
    coreConceptSummary: "Konjungsi Koordinatif FANBOYS (For, And, Nor, But, Or, Yet, So) menghubungkan dua klausa independen mandiri dengan didahului tanda koma. Konjungsi Subordinatif (although, because, unless) menurunkan klausa menjadi anak kalimat (Dependent Clause) yang wajib dipisah koma hanya jika berada di awal kalimat.\n\nConjunctive Adverbs (however, therefore, consequently) adalah transisi logika yang menuntut tanda titik koma (;) sebelum transisi dan koma (,) setelahnya demi mencegah Comma Splice (kesalahan menggabungkan dua kalimat mandiri hanya dengan koma). Hindari Double Conjunction Trap (penumpukan dua kata sambung sekaligus: pilih salah satu antara \"Although [A], [B]\" atau \"[A], but [B]\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Konjungsi Koordinatif (FANBOYS) & Aturan Koma",
                "explanation": "Bayangkan kamu punya dua kalimat independen kuat yang ingin disambungkan; di sinilah tujuh pahlawan FANBOYS (For, And, Nor, But, Or, Yet, So) turun tangan sebagai konjungsi koordinatif. Mereka bertugas menjaga keseimbangan kalimat agar kedua sisi tetap sejajar dan setara kedudukannya. Namun, ada satu aturan ketat yang tidak boleh dilanggar saat mereka menghubungkan dua klausa mandiri. Kamu wajib meletakkan tanda koma tepat sebelum kata hubung ini, sebagai tanda jeda napas yang merangkai ide tanpa membuatnya bertabrakan.",
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
                "explanation": "Kalau konjungsi koordinatif menjaga kesetaraan, Konjungsi Subordinatif seperti Although, Because, atau Unless justru bermain pangkat. Begitu kata-kata ini diletakkan di depan sebuah kalimat independen, status kalimat tersebut langsung turun menjadi klausa bawahan (Dependent Clause) yang maknanya akan menggantung. Jika kamu memutuskan untuk membuka ceritamu dengan klausa subordinatif ini di awal, jangan lupa untuk memisahkan ide utamanya dengan sebuah tanda koma. Tanda koma ini adalah sinyal penting bahwa inti kalimat yang sebenarnya baru akan segera menyusul.",
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
                "explanation": "Seringkali kita terkecoh dengan kata transisi anggun seperti However, Furthermore, atau Consequently, mengiranya sebagai kata hubung sungguhan. Padahal, secara gramatikal mereka ini hanyalah Conjunctive Adverbs alias keterangan transisi biasa yang tidak punya kekuatan merekatkan klausa. Memaksakan penggabungan dua klausa penuh hanya dengan koma dan transisi ini akan menghasilkan kesalahan fatal yang disebut Comma Splice. Solusi paling elegannya? Pasanglah titik koma (;) sebelum transisi untuk menautkan ide, dan berikan koma (,) manis setelahnya.",
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
                "explanation": "Dalam kebiasaan bahasa Indonesia, sah-sah saja kita bilang 'Meskipun hujan, tetapi saya tetap pergi.' Namun, dalam logika bahasa Inggris, menumpuk dua kata hubung semacam ini adalah sebuah jebakan tata bahasa yang disebut Double Conjunction Trap. Bahasa Inggris menuntut efisiensi tinggi, sehingga kamu harus memilih salah satu saja untuk menghubungkan ide tersebut. Putuskan dengan tegas: mau pakai 'Although' di awal tanpa embel-embel 'but', atau 'Because' di depan tanpa ditutup dengan 'so' di tengah jalan.",
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
      ieltsApplication: 'Kesalahan I am very interesting in this topic ❌ langsung menurunkan skor Speaking dan Writing.',
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
      explanation: "\"Spread\" adalah irregular verb dengan bentuk V3 yang tetap \"spread\" (bukan spreaded ❌). Bentuk compound adjective yang benar adalah \"widespread\" atau \"wide-spread\".",
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
      explanation: "-ing participle (exhausting) mendeskripsikan sifat simposium yang menguras energi (penyebab). -ed participle (exhausted) mendeskripsikan kondisi emosi/fisik delegasi yang terkuras energinya (penerima efek). Participating adalah active present participle.",
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
      linguisticExplanation: "Subjek \"The students\" adalah pihak yang merasakan kebingungan (penerima efek), sehingga membutuhkan Past Participle adjective confused.",
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
    stageNumber: 5,
    stageName: 'Tahap 5: Bentuk Non-Finite & Verba Frasa',
    categoryKey: 'Word Classes',
    moduleNumber: 18,
    title: 'Comparative & Superlative Degrees & Proportional Structures',
    subtitle: 'Komparasi presisi, larangan double comparative, dan pola "The more... the more..."',
    levelBadge: 'Komparasi · Modul 18',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan sebuah album foto kenangan dan sebuah brosur rencana perjalanan masa depan. Album foto merekam peristiwa nyata dan pengalaman yang telah terjadi secara faktual. Sebaliknya, brosur perjalanan memuat niat, komitmen, dan potensi yang menunggu diwujudkan. Pertentangan inilah yang membedakan Gerund (-ing) dari To-Infinitive.\n\nDi modul ini, kamu akan memahami mengapa kata kerja berorientasi pengalaman mengambil Gerund sedangkan kata kerja berorientasi tujuan mengambil To-Infinitive. Kita juga akan menyingkap verba bermakna ganda seperti stop dan remember, serta melucuti partikel to menjadi Bare Infinitive setelah verba persepsi dan kausatif.",
    coreConceptSummary: "Gerund (-ing) berakar pada fakta nyata, pengalaman, atau proses yang sedang berlangsung (wajib setelah verba seperti enjoy, avoid, suggest, admit). To-Infinitive (to + V1) memproyeksikan niat, rencana, atau tujuan masa depan (wajib setelah verba seperti decide, hope, plan, refuse).\n\nDual-Meaning Verbs mengubah makna secara drastis berdasarkan bentuk komplemennya: \"stop smoking\" (menghentikan kebiasaan) vs \"stop to smoke\" (berhenti sejenak demi merokok); \"remember doing\" (mengingat memori) vs \"remember to do\" (ingat menjalankan tugas). Verba kausatif (make, let) dan persepsi sensoris (see, hear) melucuti partikel to menjadi Bare Infinitive polos (\"The regulation made the firm disclose data\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Hakikat Gerund (Verbal Noun) vs To-Infinitive (Potensi Masa Depan)",
                "explanation": "Pernah bingung kapan harus pakai -ing dan kapan harus pakai to? Secara filosofis, Gerund atau kata kerja berakhiran -ing itu mewakili hal-hal yang nyata, sudah terjadi, atau sudah kamu rasakan pengalamannya secara faktual. Di seberang sana, To-Infinitive membawa nuansa kehendak yang lebih hipotetis dan futuristik. Jadi, setiap kali kamu membicarakan sebuah potensi di masa depan, niat, atau sesuatu yang belum tuntas, bentuk to ditambah kata kerja dasar adalah pilihan utamanya.",
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
                "explanation": "Terkadang, tata bahasa itu ibarat klub eksklusif di mana setiap kata kerja utama punya preferensi tamu bawaan masing-masing. Ada verba yang murni mewajibkan Gerund, seperti saat kamu mengakui (admit), menikmati (enjoy), atau menunda (postpone) sesuatu. Namun, kelompok verba lain yang berorientasi pada masa depan seperti setuju (agree), memutuskan (decide), atau berharap (hope), hanya mau ditemani oleh To-Infinitive. Mengingat kelompok kata ini memang butuh pembiasaan, tapi pola niat vs. realitas tadi bisa sangat membantu instingmu.",
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
                "explanation": "Hati-hati dengan segelintir kata kerja bunglon yang maknanya bisa berubah 180 derajat tergantung pasangannya! Coba perhatikan kata stop; jika kamu bilang 'stop doing', kamu menghentikan kebiasaan itu selamanya, tapi 'stop to do' berarti kamu malah berhenti dari kegiatan lain demi melakukan hal tersebut. Hal yang sama berlaku untuk remember dan regret. Menggunakan Gerund setelah kata-kata ini akan membawamu kembali ke memori atau penyesalan di masa lalu, sedangkan memakai Infinitive menunjuk pada tugas yang harus dijalankan ke depannya.",
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
                "explanation": "Dalam dunia kalimat bahasa Inggris, ada pengecualian unik saat membicarakan kata kerja persepsi (see, watch) dan kausatif (make, let). Ketika kamu melihat sebuah tindakan secara utuh dari awal sampai selesai, atau ketika ada paksaan dan izin yang diberikan, kata 'to' mendadak dilucuti kekuasaannya. Akibatnya, kamu wajib menggunakan yang namanya Bare Infinitive, alias kata kerja dasar yang tampil polos tanpa pelindung 'to'. Bayangkan kalimat 'She made me cry'; rasanya langsung menusuk ke intinya tanpa ada perantara, bukan?",
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
      toeflApplication: 'TOEFL Structure menguji struktur paralel The more... the more... yang sering kehilangan artikel "the".',
      scoringImpact: 'Meningkatkan kompleksitas sintaksis dan variasi kalimat.'
    },
    goldenRules: [
      'Jangan pernah menggabungkan "more" dengan akhiran "-er" (more faster ❌).',
      'Struktur proporsional paralel WAJIB diawali "The" pada kedua klausa (The higher..., the faster...).'
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
      explanation: "Membandingkan tuition fee (biaya) dengan institutions (lembaga) adalah kesalahan Illogical Comparison. Wajib menggunakan kata ganti penunjuk \"that of\" untuk merujuk kembali ke \"the tuition fee\".",
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
      explanation: "Pola perbandingan korelatif (Proportional Comparative) wajib menggunakan struktur paralel: The + Comparative ..., the + Comparative ....",
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
      linguisticExplanation: "Adjektiva asal Latin (superior, inferior, senior, junior, prior) sudah bermakna komparatif inheren (tidak boleh didahului \"more\") dan berkolokasi dengan preposisi to (BUKAN than).",
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
    mentalModelIntro: "Bayangkan reaksi kimia ketika dua unsur sederhana menyatu menghasilkan senyawa baru dengan sifat unik. Inilah Phrasal Verbs: pertemuan kata kerja dasar dengan partikel adverbial yang melahirkan satu arti kiasan baru yang utuh (seperti give up yang berarti menyerah).\n\nDi modul ini, kamu akan menguasai hukum posisi objek pada verba yang bisa dipisah (Separable), aturan mengurung kata ganti di tengah, serta verba tiga bagian yang tidak bisa dipisahkan. Kita juga akan melatih teknik menaikkan register bahasa ke padanan kata tunggal Latin dalam penulisan akademik.",
    coreConceptSummary: "Phrasal Verbs menggabungkan kata kerja dengan partikel untuk membentuk makna idiomatis baru. Pada Separable Transitive Verbs (turn on, back up), objek benda bebas diletakkan di tengah atau belakang partikel, namun jika objeknya berupa Pronoun (it, them), ia WAJIB dikurung di tengah (\"turn it off ✔️\", bukan \"turn off it ❌\").\n\nInseparable Verbs (look into) dan Three-Part Verbs (come up with, look forward to) diikat paten dan tidak boleh dipisahkan oleh objek apa pun. Dalam register akademik formal, transformasikan phrasal verbs kasual menjadi kata kerja tunggal Latin yang anggun: ubah look into menjadi investigate, bring about menjadi generate, dan carry out menjadi conduct.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Anatomi Partikel Adverbial vs Preposisi",
                "explanation": "Bayangkan mencampurkan warna biru dan kuning; hasilnya pasti warna hijau yang sama sekali baru, bukan? Nah, itulah anatomi dari sebuah Phrasal Verb, di mana kata kerja bertemu dengan sebuah partikel kecil (seperti up, in, atau out). Partikel ini bukan sekadar preposisi penunjuk tempat biasa, melainkan menyatu secara semantis untuk menciptakan arti kiasan yang baru. Makanya, jangan heran kalau give up (menyerah) punya makna yang sangat jauh berbeda dari sekadar give (memberi).",
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
                "explanation": "Untuk jenis Phrasal Verbs yang bisa dipisah (Separable), posisinya lumayan fleksibel selama objek penderitanya berupa nama benda atau frasa utuh. Kamu boleh meletakkan objeknya sebelum atau sesudah partikel sesuka hatimu. Namun, ada satu aturan emas yang tak boleh dilanggar: begitu objekmu menyusut menjadi kata ganti atau Pronoun kecil seperti it, them, atau him, ia wajib dikurung di tengah-tengah! Itulah kenapa kita selalu berkata 'turn it on' dan tidak pernah mengucapkan 'turn on it'.",
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
                "explanation": "Kalau kelompok separable suka fleksibilitas, berhati-hatilah dengan yang namanya Inseparable Phrasal Verbs dan kawanan Three-Part Phrasal Verbs. Kata-kata seperti look into, come across, atau look forward to adalah satu kesatuan utuh yang diikat dengan lem super kuat. Apapun yang terjadi dan sepanjang apa pun objekmu, kamu tidak bisa menyelipkannya di tengah-tengah untuk memisahkan mereka. Mereka menuntut kesetiaan penuh, jadi biarkan objek penderitanya menunggu dengan sabar di belakang rangkaian frasa tersebut.",
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
                "explanation": "Meskipun phrasal verbs membuat percakapanmu terdengar sangat natural dan kekinian, di dunia akademik kamu harus sedikit mengubah gaya penampilanmu. Kata-kata kiasan kasual ini seringkali kurang pantas masuk ke dalam esai resmi atau jurnal ilmiah. Karena itu, latihlah dirimu untuk menaikkan level tulisan dengan mentransformasi phrasal verbs menjadi satu kata kerja formal yang anggun. Daripada menulis 'look into', gunakanlah 'investigate', dan ubah 'put off' menjadi 'postpone' agar argumenmu memancarkan wibawa ilmiah.",
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
      'Jangan pernah letakkan adverb di antara Kata Kerja dan Objek (analyze carefully the data ❌ -> carefully analyze the data ✔).',
      'Sentence adverbs (However, Consequently) wajib diikuti tanda koma di awal kalimat.'
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
      explanation: "Meskipun split infinitive (to thoroughly examine) umum dalam percakapan modern, dalam gaya penulisan akademik yang sangat presisi, adverb of manner ditempatkan setelah objek (to examine the allegations thoroughly).",
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
      explanation: "Posisi baku adverbs of frequency (seldom, always, never, often) adalah di antara Auxiliary Verb (has) dan Main Verb (recorded): Subject + Aux + Adverb + Main Verb.",
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
    mentalModelIntro: "Bayangkan seorang penyunting film ulung yang memotong adegan panjang dan merangkainya menjadi montase visual yang padat, dinamis, dan memukau. Dalam tata bahasa Inggris tingkat lanjut, Participles adalah instrumen terbaikmu untuk memangkas kalimat majemuk yang gemuk menjadi frasa penjelas yang ramping dan bertenaga.\n\nDi modul ini, kamu akan mereduksi klausa aktif menggunakan Present Participle (-ing), mereduksi klausa pasif menggunakan Past Participle (V3), merangkai urutan waktu tuntas lewat Perfect Participle (Having + V3), serta mengeliminasi total kesalahan Dangling Modifier.",
    coreConceptSummary: "Participles merampingkan anak kalimat menjadi frasa modifikator: gunakan Present Participle (-ing) untuk mereduksi klausa aktif (\"the satellite orbiting Earth\"), dan gunakan Past Participle (V3) untuk mereduksi klausa pasif (\"the data collected by sensors\").\n\nPerfect Participle (Having + V3 / Having been + V3) digunakan di awal kalimat untuk menegaskan bahwa aksi pertama tuntas sebelum aksi kedua dimulai (\"Having finalized the data, the team published the report\"). Hindari Dangling Modifier (modifikator menggantung tanpa tuan): subjek setelah tanda koma wajib menjadi pelaku sejati dari frasa partisipel pembuka (\"Having analyzed the samples, the pathologists identified the disease ✔️\", bukan \"...the disease was identified ❌\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Present Participle (Aktif) vs Past Participle (Pasif)",
                "explanation": "Pernahkah kamu ingin menyingkat kalimat panjang yang dipenuhi kata 'who' atau 'which' agar lebih lincah? Di sinilah Participles datang memangkas klausa menjadi frasa yang ringkas. Jika kamu ingin menyusutkan klausa aktif, panggil saja Present Participle berakhiran -ing, sehingga 'the student who conducts research' berubah elegan menjadi 'the student conducting research'. Sebaliknya, jika yang kamu ringkas adalah kalimat pasif, gunakanlah Past Participle (-ed/V3) agar 'the paper that was published' cukup ditulis menjadi 'the paper published'.",
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
                "explanation": "Bukan cuma kata sifat pembatas yang bisa dipangkas; klausa awal yang berisi alasan atau waktu kejadian juga bisa disulap menjadi Participial Modifier. Daripada memulai kalimat dengan bertele-tele seperti 'Because the team analyzed the data', kamu bisa langsung memukul intinya. Tarik saja aksi utamanya ke bentuk partisipel pembuka sehingga kalimatmu menjadi 'Analyzing the data, the team discovered...'. Hasilnya, tulisanmu akan terasa jauh lebih profesional, bertenaga, dan mengalir dengan cepat.",
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
                "explanation": "Kadang-kadang, menceritakan dua kejadian yang beruntun butuh kejelasan ekstra, terutama saat kamu ingin menegaskan bahwa kejadian pertama sudah tuntas 100% sebelum yang kedua dimulai. Untuk menciptakan efek 'sesudah selesai' ini, persenjataan terbaikmu adalah Perfect Participle dengan formula Having + V3. Bentuk ini menegaskan jarak waktu yang tegas antara kedua tindakan tersebut. Jika situasinya pasif, kamu cukup menyisipkan kata been menjadi 'Having been + V3', dan urutan kronologismu akan tergambar sempurna.",
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
                "explanation": "Jebakan paling mematikan dalam menggunakan frasa partisipel pembuka adalah melahirkan sebuah Dangling Modifier. Kesalahan ini terjadi ketika pelaku aksi di frasa pembuka sama sekali tidak nyambung dengan subjek utama setelah tanda koma. Coba perhatikan kalimat keliru ini: 'Walking into the lab, the microscope was broken'. Tentu saja mikroskop tidak punya kaki untuk berjalan, bukan? Ingat selalu, siapa pun tokoh yang berada persis setelah tanda koma, ia WAJIB menjadi pelaku sejati dari aksi di awal kalimatmu.",
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
      ieltsApplication: 'Akurasi penggunaan preposisi waktu (in 2015, between 2010 and 2020) adalah kunci skor Task 1.',
      toeflApplication: 'TOEFL Structure menguji preposisi penunjuk tanggal lengkap (on May 5th) vs bulan saja (in May).',
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
      explanation: "Media cetak 2D berhalaman (newspaper, book, journal) menggunakan preposisi in. Transportasi umum berkapasitas besar di mana penumpang dapat berdiri/berjalan (train, bus, plane, ship) menggunakan preposisi on.",
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
      linguisticExplanation: "Meskipun bagian hari menggunakan \"in the morning\", jika hari spesifik disebutkan (\"Monday morning\"), preposisi yang menguasai adalah on (on Monday morning).",
      acceptedVariations: []
},
      {
        id: 'ec-m20-1',
        flawedSentence: 'The conference will take place in Monday morning at July.',
        flawLocation: 'in Monday morning at July',
        correctedSentence: 'The conference will take place on Monday morning in July.',
        linguisticExplanation: 'Hari menggunakan "on" (on Monday morning) dan bulan menggunakan "in" (in July).'
      }
    ]
  },

  // =========================================================================
  // TAHAP 4: SINTAKSIS, POLA KALIMAT & DIMENSI WAKTU
  // =========================================================================
  {
    id: 'modul-21-dependent-prepositions',
    stageNumber: 6,
    stageName: 'Tahap 6: Sintaksis, Dimensi Waktu & Pasif',
    categoryKey: 'Word Classes',
    moduleNumber: 21,
    title: 'Dependent Prepositions & Fixed Prepositional Collocations',
    subtitle: 'Pasangan preposisi tetap pada Verbs & Adjectives penentu skor internasional',
    levelBadge: 'Kolokasi Preposisi · Modul 21',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan mahakarya arsitektur megah: sekompleks apa pun ornamen ruangannya, seluruh bangunan selalu bertumpu pada rangka beton utama yang teratur dan simetris. Dalam sintaksis bahasa Inggris, jutaan kalimat sejatinya hanyalah variasi dari 5 Pola Dasar Rangka Kalimat (SV, SVO, SVC, SVOO, SVOC).\n\nDi modul ini, kita akan membedah anatomi kalimat dari subjek hingga pelengkap. Kamu akan memahami fungsi Subject Complement setelah Linking Verbs, menguasai pola elit penobatan status pada Object Complement (SVOC), serta membentengi tulisanmu dari Sentence Fragments dan Comma Splices.",
    coreConceptSummary: "Seluruh kalimat bahasa Inggris bertumpu pada 5 Pola Utama: SV (intransitif mandiri), SVO (transitif berobjek tunggal), SVC (kopulatif berpelengkap subjek), SVOO (ditransitif dua objek), dan SVOC (kompleks transitif berpelengkap objek).\n\nPada pola SVC, Linking Verb menghubungkan subjek dengan Subject Complement yang berupa kata sifat atau kata benda (\"seems effective\", bukan \"effectively ❌\"). Pada pola SVOC, verba penilai/penunjuk (appoint, deem, consider) menyematkan Object Complement untuk meresmikan status objek penderita (\"deemed the methodology groundbreaking\"). Hindari Sentence Fragments (kalimat buntung tanpa verba finitis) dan Comma Splices.",
    sections: [
        {
                "stepNumber": "01",
                "title": "5 Pola Dasar Konstituen Kalimat Bahasa Inggris",
                "explanation": "Kerumitan sebuah kalimat dalam bahasa Inggris sebenarnya hanyalah ilusi semata. Sebanyak apa pun kata yang ada, setiap kalimat secara fundamental bisa dibedah dan dikembalikan ke salah satu dari lima cetakan dasar. Ada kalimat S-V yang selesai begitu saja tanpa objek, S-V-O yang standar menembak satu target, hingga pola S-V-C yang sifatnya menjelaskan kondisi subjek. Lalu ada S-V-O-O yang melibatkan penerima dan barang yang diberi, serta S-V-O-C yang memberikan embel-embel status baru bagi sang objek penderita.",
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
                "explanation": "Ketika kamu menggunakan Linking Verbs (seperti be, seem, atau become), kata kerja tersebut tidak menghasilkan tindakan melainkan sekadar jembatan ke Subject Complement. Pelengkap ini bertugas untuk mendefinisikan ulang identitas subjek, atau mendeskripsikan sifat dan karakteristiknya. Karena ia melekat kuat untuk menyifati sang subjek (yang berupa benda), maka pelengkap ini SELALU hadir dalam wujud kata sifat (Adjectiva) atau frasa benda, dan sama sekali BUKAN kata keterangan cara (Adverbia).",
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
                "explanation": "Pada pola yang agak elit yaitu S-V-O-C, sang kata kerja tidak puas hanya dengan mengenai objek penderita secara langsung. Kata kerja seperti elect, make, atau consider juga menyeret Object Complement untuk meresmikan status baru atau memvalidasi keadaan si objek tersebut. Bayangkan kalimat 'The committee appointed Dr. Aris chair'; kata chair di sana adalah gelar baru yang melekat pada Dr. Aris berkat aksi penunjukan itu. Pola ini sangat ampuh dipakai untuk menyatakan keputusan resmi atau pemberian penilaian.",
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
                "explanation": "Pernahkah kamu menemui sekumpulan kata yang panjangnya menyerupai kalimat namun maknanya malah buntu? Itulah yang disebut Sentence Fragment, sebuah potongan cacat yang kehilangan roh utamanya berupa Subjek utuh atau Finite Verb yang mandiri. Sebaliknya, ketika kamu merekatkan ide-ide mandiri itu hanya dengan setitik koma, kamu telah terjerumus ke dalam kesalahan Comma Splice. Pastikan setiap gagasanmu berdiri tegak sebagai satu Independent Clause dengan kerangka Subjek dan Verba finitis yang utuh.",
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
      toeflApplication: 'TOEFL Structure menguji dependent prepositions pada kata kerja akademik seperti insist on, prevent from.',
      scoringImpact: 'Meningkatkan akurasi idiomatis dan leksikal.'
    },
    goldenRules: [
      'Ingat pasangan baku: capable of, adhere to, depend on, immune to, prone to.',
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
      explanation: "Verba \"discuss\" adalah transitive verb murni dan langsung mengambil direct object tanpa preposisi (discuss the issue ✔️, BUKAN discuss about the issue ❌). Kesalahan ini sangat sering dilakukan penutur Indonesia karena pengaruh \"berdiskusi tentang\".",
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
      explanation: "Kolokasi preposisi terikat untuk kata sifat \"skeptical\" adalah skeptical of (atau terkadang skeptical about), bukan skeptical with atau skeptical at.",
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
      linguisticExplanation: "\"Emphasize\" saat berfungsi sebagai kata kerja adalah Transitive murni dan langsung mengambil direct object tanpa preposisi on. Preposisi on hanya digunakan pada bentuk nomina (place an emphasis on).",
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
    mentalModelIntro: "Bayangkan sebuah papan catur dengan sumbu horizontal dan vertikal yang rapi. Sistem waktu bahasa Inggris bukanlah tumpukan rumus hafalan yang rumit, melainkan matriks dua dimensi yang logis: perpotongan antara tiga titik Garis Waktu (Time: Past, Present, Future) dengan empat Lensa Aspek (Aspect: Simple, Continuous, Perfect, Perfect Continuous).\n\nDi modul ini, kita akan memprogram ulang pemahaman spasio-temporalmu. Kamu akan menguasai hukum harmonisasi Sequence of Tenses dalam kalimat majemuk bertingkat, serta membedakan tiga cara penutur asli memandang masa depan secara presisi.",
    coreConceptSummary: "Garis Waktu (Time: Past, Present, Future) menjawab kapan peristiwa berada, sedangkan Lensa Aspek (Aspect) menyajikan wujud internal tindakan: Simple untuk fakta permanen/tuntas, Continuous untuk proses sementara, Perfect untuk jembatan hasil antartitik waktu, dan Perfect Continuous untuk durasi akumulatif yang terus mengalir.\n\nBerdasarkan aturan Sequence of Tenses, jika induk kalimat berada dalam bentuk lampau, klausa bawahan wajib ikut mundur ke masa lalu (\"discovered that the polymer broke down\"), kecuali saat menyatakan fakta ilmiah universal. Tiga modalitas masa depan: will (keputusan spontan/prediksi), be going to (rencana berdasar bukti fisik), dan Present Continuous (agenda resmi yang terkunci jadwalnya).",
    sections: [
        {
                "stepNumber": "01",
                "title": "Matriks 2 Dimensi: 3 Waktu x 4 Aspek",
                "explanation": "Banyak orang gentar melihat 12 nama Tenses, padahal semuanya hanya hasil kali silang dari dua dimensi sederhana: Waktu dan Aspek. Waktu (Time) bertugas menjawab pertanyaan dasar 'Kapan?' yang hanya terbagi tiga, yaitu Past, Present, atau Future. Sementara itu, Aspek menjawab 'Bagaimana wujud internal aksinya?'—apakah itu sekadar fakta, sebuah proses yang berlangsung, hasil yang berkaitan, atau durasi yang bergulir. Bertemunya 3 titik Waktu dengan 4 dimensi Aspek inilah yang menciptakan matriks lengkap 12 wujud kalimatmu.",
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
                "explanation": "Memilih antara Simple dan Continuous itu ibarat memilih lensa kamera saat memotret waktu. Jika kamu membidik fakta mutlak, kebiasaan rutin, hukum alam, atau hal yang permanen, gunakanlah lensa Simple Aspect yang jernih tak berbatas. Sebaliknya, saat subjekmu merupakan keadaan sementara, perubahan tren sesaat, atau aktivitas yang sedang intens berlangsung tepat ketika dibicarakan, bidiklah dengan Continuous Aspect. Dengan ini, kamu bisa menyampaikan nuansa sebuah peristiwa yang dinamis di tengah perjalanan waktunya.",
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
                "explanation": "Dalam sebuah kalimat yang punya klausa utama dan bawahan, aturan harmonisasi sangat dijunjung tinggi lewat prinsip Sequence of Tenses. Jika kalimat utamamu sudah berjangkar di perairan masa lalu (Past Tense), klausa anakannya tidak boleh seenaknya berlayar di perairan Present; ia wajib menundukkan bentuk ke masa lampau juga demi keselarasan alur mundur. Namun, fleksibilitas tetap berlaku—kalau sang anakan menyampaikan fakta saintifik abadi yang tidak berubah dari dulu hingga sekarang, kamu boleh membiarkannya tetap utuh di bentuk awalnya.",
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
                "explanation": "Meskipun kita hanya melangkah ke satu dimensi masa depan, bahasa Inggris memberimu tiga perangkat Future Modalities untuk menceritakan nuansanya secara berbeda. Pakailah WILL kalau niatmu baru muncul spontan detik ini, membuat janji buta, atau memprediksi sesuatu yang masih samar. Beralihlah ke BE GOING TO kalau di tanganmu sudah ada bukti konkret yang akan terjadi atau rencana yang matang diputuskan. Namun, untuk jadwal resmi dan agenda kepastian tingkat dewa, pinjamlah PRESENT CONTINUOUS untuk mengunci komitmen tersebut.",
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
      explanation: "\"Even though the sample size was limited\" adalah Adverbial Clause of Concession (konsesi/pertentangan) yang diawali oleh subordinating conjunction Even though.",
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
      explanation: "Independent Clause wajib memiliki Subject (\"The experimental results\") + Finite Verb (\"contradicted\") dan mampu berdiri sendiri sebagai kalimat lengkap tanpa subordinator pemotong makna seperti Although, Because, atau Which.",
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
    mentalModelIntro: "Dalam bahasa Indonesia, kita cukup menempelkan kata \"sudah\" untuk semua hal yang telah lewat. Namun dalam bahasa Inggris, Aspek Perfek bukan sekadar penanda masa lalu, melainkan jembatan waktu yang menghubungkan peristiwa lampau dengan dampaknya yang masih bergema detik ini.\n\nDi modul ini, kamu akan membedah jembatan Present Perfect, menguasai ketukan penanda waktu seperti since (titik awal) dan for (total durasi), menavigasi lorong Past Perfect (had + V3) sebagai mesin waktu masa lalu, serta menangkap tetesan proses dalam Present Perfect Continuous.",
    coreConceptSummary: "Present Perfect (have/has + V3) menghubungkan aksi masa lalu dengan realitas saat ini saat hasil atau pengalamannya menjadi fokus utama. Gunakan since untuk titik mula waktu (\"since 2018\") dan for untuk rentang durasi (\"for five years\"). Sisipkan already untuk aksi yang rampung lebih awal dan yet untuk kalimat negatif/tanya yang dinantikan.\n\nPast Perfect (had + V3) bertindak sebagai \"past-of-the-past\" untuk memperjelas aksi mana yang terjadi lebih dulu di antara dua peristiwa masa lalu. Present Perfect Continuous (have/has been + V-ing) menekankan proses panjang yang dimulai di masa lalu dan masih berlangsung saat ini atau baru saja berhenti dengan bukti fisik yang nyata.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Present Perfect: Jembatan Waktu Masa Lalu ke Masa Kini",
                "explanation": "Bayangkan kamu sedang menceritakan sebuah pencapaian, tapi kamu tidak ingat atau tidak peduli kapan tepatnya hal itu terjadi. Nah, di sinilah Present Perfect bertindak sebagai jembatan yang menghubungkan masa lalumu dengan efeknya di masa sekarang. Yang penting adalah relevansi hasilnya saat ini, bukan kapan kejadiannya. Ingat ya, karena fokusnya pada masa sekarang, kamu dilarang keras menambahkan penanda waktu masa lalu spesifik seperti yesterday atau in 2020—untuk itu, kembalilah gunakan Simple Past.",
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
                "explanation": "Pernah bingung kapan harus memakai since dan for? Coba perhatikan ini: gunakan since ketika kamu ingin menunjuk satu titik awal waktu yang spesifik, ibarat menancapkan bendera di tahun 2015 atau hari Senin. Sebaliknya, gunakan for kalau kamu ingin menghitung total durasinya, seperti merangkum perjalananmu selama lima tahun terakhir. Selain itu, kamu bisa menyisipkan already untuk menegaskan bahwa sebuah aksi sudah beres, atau gunakan yet dalam kalimat negatif dan tanya ketika kamu masih menantikan sesuatu yang belum terjadi.",
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
                "explanation": "Coba bayangkan kamu sedang menceritakan dua kejadian dramatis yang sama-sama sudah lewat di masa lalu. Kalau kamu butuh menegaskan kejadian mana yang curi start alias terjadi lebih dulu, Past Perfect (had + V3) adalah andalanmu. Ia bertugas sebagai 'masa lalu dari masa lalu' untuk aksi yang mendahului, sementara aksi yang menyusul cukup menggunakan Simple Past (V2). Dengan begitu, alur ceritamu jadi sangat rapi dan tidak membingungkan pendengar.",
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
                "explanation": "Pernah melihat temanmu ngos-ngosan dan berkeringat setelah lari maraton? Untuk situasi seperti ini, Present Perfect Continuous (have/has been + V-ing) sangat cocok digunakan. Tenses ini sempurna untuk menggambarkan aksi yang dimulai di masa lalu, terus berlangsung tanpa henti, dan entah masih berlanjut hingga detik ini, atau baru saja berhenti tapi masih meninggalkan jejak atau bukti fisik yang jelas. Ini adalah cara alami untuk mengatakan bahwa usahamu benar-benar menguras energi dan waktu yang panjang.",
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
      'Pada pola S-V-IO-DO (give me the book), jika DO diletakkan lebih dulu, gunakan preposisi to/for (give the book to me).',
      'Object Complement menerangkan sifat atau jabatan dari Direct Object (call him a genius).'
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
      linguisticExplanation: "Verba \"explain\" (serta describe, suggest, introduce) tidak mengikuti pola SVOO (explain someone something ❌). Pola yang wajib digunakan adalah explain something to someone.",
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
    mentalModelIntro: "Bayangkan mengarahkan kamera film di laboratorium sains: alih-alih menyorot wajah penelitinya, sorotan utama harus jatuh pada senyawa kimia yang bereaksi atau data empiris yang ditemukan. Inilah esensi Kalimat Pasif (Passive Voice): mempromosikan objek penderita menjadi bintang utama kalimat.\n\nDi modul ini, kamu akan menguasai adaptasi rumus To Be + V3 di segala dimensi tenses dan modal, membedah struktur Impersonal Passive khas jurnal ilmiah internasional, serta mengetahui kapan waktu paling tepat memilih pasif dibanding aktif.",
    coreConceptSummary: "Kalimat Pasif (Passive Voice) mempromosikan objek penderita menjadi subjek gramatikal utama kalimat dengan rumus To Be (sesuai tenses aktif aslinya) + Past Participle / V3 (\"is analyzed\", \"is being evaluated\", \"has been verified\", \"must be submitted\").\n\nImpersonal Passive digunakan dalam wacana akademik untuk menyajikan konsensus ilmiah secara objektif tanpa terkesan subjektif, baik lewat pola dummy it (\"It is widely believed that...\") maupun dengan menaikkan subjeknya (\"The economy is projected to grow...\"). Gunakan pasif saat pelaku tidak diketahui, tidak relevan, atau saat memaparkan metodologi penelitian.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Mekanisme Transformasi Aktif ke Pasif & Rumus BE + V3",
                "explanation": "Bayangkan objek penderita dari kalimatmu tiba-tiba mendapat promosi jabatan menjadi bintang utama; itulah inti dari kalimat pasif! Dalam transformasi ini, Direct Object diangkat menjadi Subjek Gramatikal. Agar strukturnya sah, kata kerja utama harus kamu ubah menjadi Past Participle (V3), dan jangan lupa selipkan To Be yang tenses-nya sengaja di-copy paste persis dari kalimat aktif aslinya. Hasilnya, fokus kalimat langsung bergeser secara mulus tanpa kehilangan makna.",
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
                "explanation": "Kabar baiknya, rumus pasif ini sangat fleksibel dan bisa kamu terapkan di hampir semua tenses layaknya bunglon. Baik itu Modal seperti must be analyzed, atau nuansa Continuous yang sedang berlangsung seperti is being evaluated dan was being constructed. Bahkan, kamu bisa menggabungkannya ke dalam Present Perfect menjadi has been verified. Intinya, selama kamu tahu cara menyesuaikan To Be, menggeser kalimat apa pun menjadi pasif bukan lagi hal yang menakutkan!",
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
                "explanation": "Terkadang, menulis opini pribadi bisa terdengar kurang meyakinkan, bukan? Nah, untuk menyulap tulisanmu menjadi setara jurnal ilmiah, gunakan Impersonal Passive agar kamu bisa melaporkan pendapat umum tanpa terkesan subjektif. Kamu bisa memakai trik Dummy It seperti 'It is believed that...' yang terdengar sangat elegan. Alternatif lainnya, kamu bisa langsung menaikkan subjeknya menjadi bintang utama, contohnya 'The economy is predicted to expand...', sehingga argumenmu tampak sangat berwibawa dan objektif.",
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
                "explanation": "Meski terdengar keren, kamu harus tahu kapan waktu yang tepat untuk mengeluarkan kartu pasif ini. Gunakanlah ketika si pelaku memang misterius atau tidak penting, saat kamu ingin pamer proses metodologi, atau sekadar menjaga alur paragraf tetap nyambung dari satu ide ke ide lainnya. Tapi awas, jangan sampai terjebak! Kalau pemakaian pasif malah bikin kalimatmu berbelit-belit dan bikin pusing, lebih baik putar balik ke kalimat aktif yang lebih segar dan langsung to the point.",
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
      toeflApplication: 'TOEFL Structure paling sering menguji frasa sisipan together with, along with yang menjebak.',
      scoringImpact: 'Mencegah pemotongan skor akurasi pada kalimat kompleks.'
    },
    goldenRules: [
      'As well as, along with, together with, in addition to BUKAN kata hubung "and"; kata kerja tetap mengikuti subjek pertama di depan.',
      'Pada Neither... nor... dan Either... or..., kata kerja mengikuti subjek yang paling dekat dengannya.'
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
      explanation: "Frasa sisipan seperti \"along with\", \"as well as\", dan \"together with\" adalah preposisi parentetikal dan BUKAN konjungsi penambah subjek. Subjek sejati tetaplah \"The principal investigator\" (tunggal), sehingga verba yang tepat adalah has published.",
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
      linguisticExplanation: "Ukuran jarak, waktu, uang, dan berat (e.g. ten kilometers, five years, one million dollars) dipandang sebagai satu unit kesatuan tunggal dan membutuhkan verba singular \"is\".",
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
    stageNumber: 7,
    stageName: 'Tahap 7: Modus Kondisional & Hipotesis',
    categoryKey: 'Sentence Architecture',
    moduleNumber: 25,
    title: 'Sentence Errors Elimination: Fragments, Run-ons, dan Comma Splices',
    subtitle: 'Mendeteksi dan memperbaiki 3 kesalahan fatal penyambungan kalimat',
    levelBadge: 'Eliminasi Error · Modul 25',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan pikiranmu sedang memutar simulasi berbagai skenario sebab-akibat. Bahasa Inggris memetakan kemungkinan tersebut ke dalam spektrum probabilitas yang rapi: dari kepastian hukum alam, peluang masa depan, khayalan kontrafaktual hari ini, hingga penyesalan masa lalu yang mustahil diulang.\n\nDi modul ini, kamu akan menjelajahi 4 tipe Conditionals, merajut sebab-akibat silang waktu dalam Mixed Conditionals, serta membuang kata IF melalui teknik Conditional Inversion formal tingkat tinggi untuk mendongkrak wibawa argumen ilmiahmu.",
    coreConceptSummary: "Conditionals memetakan probabilitas: Zero Conditional (If + Present, Present) untuk hukum alam abadi; First Conditional (If + Present, will + V1) untuk peluang nyata masa depan; Second Conditional (If + Past/were, would + V1) untuk hipotesis kontrafaktual saat ini; dan Third Conditional (If + had V3, would have V3) untuk penyesalan masa lalu.\n\nMixed Conditionals menggabungkan sebab masa lalu dengan akibat masa kini (\"If they had acted earlier, the system would be stable today\"). Terapkan Conditional Inversion dengan membuang kata IF dan memajukan kata bantu ke depan untuk register formal tingkat tinggi: Should untuk tipe 1, Were untuk tipe 2, dan Had untuk tipe 3 (\"Had the data been verified...\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Zero & First Conditionals: Realitas & Prediksi Nyata",
                "explanation": "Coba bayangkan saat kamu memanaskan air hingga 100 derajat Celcius—pasti mendidih, kan? Fakta ilmiah yang tak terbantahkan ini adalah habitat asli dari Zero Conditional. Tapi, kalau kamu sedang membicarakan rencanamu nanti sore yang sangat mungkin terjadi, bergeserlah ke First Conditional. Keduanya memang membicarakan syarat, tapi yang satu mengikat seperti hukum alam, sementara yang lain menatap masa depan dengan peluang yang cerah.",
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
                "explanation": "Pernah berkhayal jadi miliarder mendadak hari ini? Nah, untuk mengutarakan angan-angan kosong di masa sekarang ini, kita gunakan Second Conditional atau Unreal Present. Uniknya, pada klausa pengandaian 'IF', kamu wajib memakai Past Subjunctive di mana To Be yang digunakan SELALU were untuk semua subjek—iya, bahkan untuk I dan He/She/It. Setelah berandai-andai dengan 'IF', sempurnakan mimpimu di klausa utama menggunakan would, could, atau might ditambah V1.",
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
                "explanation": "Terkadang kita suka menyesali kejadian di masa lalu yang mustahil untuk diulang kembali. Untuk momen seperti ini, Third Conditional hadir dengan rumusnya yang kuat: If ditambah had V3, lalu diakhiri dengan would have V3. Tapi tunggu dulu, bagaimana jika kesalahan masa lalumu malah berimbas pada nasibmu hari ini? Di situlah Mixed Conditionals bersinar, memadukan sebab di masa lalu yang tak tertolong dengan akibat nyata yang sedang kamu rasakan detik ini.",
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
                "explanation": "Ingin tulisan esaimu terlihat seketika seperti karya profesor? Trik rahasianya adalah Conditional Inversion, di mana kita membuang kata IF yang membosankan dan menarik auxiliary ke depan kalimat. Untuk tipe pertama, gunakan 'Should you require...'; untuk tipe kedua yang lebih hipotetis, pakai 'Were the government to...'; dan untuk penyesalan masa lalu di tipe ketiga, ubah menjadi 'Had the committee approved...'. Langkah kecil ini akan memberikan sentuhan elegan dan otoritatif pada setiap argumen akademismu.",
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
      explanation: "Ketika menghubungkan dua independent clause menggunakan conjunctive adverb seperti \"consequently\" atau \"however\", struktur wajibnya adalah Semicolon + Conjunctive Adverb + Comma (; consequently, ).",
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
    mentalModelIntro: "Bayangkan berada dalam ruang sidang etik atau meja diplomasi di mana seorang pemimpin melontarkan instruksi tegas atau ketetapan krusial. Inilah wilayah Subjunctive Mood: situasi ketika kita membicarakan dunia bukan sebagaimana adanya, melainkan sebagaimana dunia itu didesak atau diharapkan terjadi.\n\nDi modul ini, kamu akan menguasai Mandative Subjunctive yang menanggalkan imbuhan menjadi Bare Infinitive setelah kata desakan, menyelami Were-Subjunctive dalam perumpamaan pengandaian, mengoperasikan mesin mundur waktu pada ungkapan WISH, hingga memahami urgensi idiomatis It is high time that.",
    coreConceptSummary: "Mandative Subjunctive menonaktifkan fakta realitas setelah verba desakan (demand, suggest, insist) atau adjektiva esensial (crucial, essential that), mewajibkan kata kerja dalam that-clause berbentuk Bare Infinitive polos tanpa akhiran -s, -ed, atau modal (\"insists that the researcher publish data\").\n\nWere-Subjunctive mewajibkan bentuk were untuk semua subjek dalam perumpamaan pengandaian (as if, as though). Konstruksi WISH menerapkan Tense Backshift (mundur waktu): mundur ke Past Simple untuk harapan masa kini (\"wish I knew\"), mundur ke Past Perfect untuk penyesalan masa lalu (\"wish I had studied\"), dan gunakan would untuk mengubah perilaku orang lain. Idiom \"It is high time that...\" mewajibkan verba bentuk lampau (V2) untuk menandai urgensi tindakan yang tertunda.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Mandative Subjunctive: Kaidah Bare Infinitive Tanpa -s",
                "explanation": "Pernahkah kamu memperhatikan bahasa formal yang digunakan bos saat memberi instruksi tegas? Di sinilah Mandative Subjunctive beraksi. Setelah kata kerja desakan seperti demand dan suggest, atau kata sifat penting seperti crucial dan imperative, aturan mainnya berubah total. Di dalam that-clause, kata kerja wajib 'telanjang' alias berbentuk Bare Infinitive—hilangkan semua embel-embel akhiran -s, -ed, maupun to, tak peduli seberapa tunggal atau jamaknya subjek yang kamu pakai.",
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
                "explanation": "Coba perhatikan temanmu yang kadang bertingkah layaknya seorang raja padahal bukan. Untuk menggambarkan perumpamaan yang berlawanan dengan kenyataan ini, gunakan Past Subjunctive. Kuncinya, saat memakai frasa seperti as if, as though, atau if only, kamu WAJIB menggunakan to be were untuk semua subjek tanpa terkecuali. Aturan unik ini sengaja dibuat agar pendengar langsung sadar bahwa apa yang kamu katakan hanyalah sebuah pengandaian semata.",
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
                "explanation": "Kata wish adalah alat ajaib untuk mengekspresikan keinginan yang bertolak belakang dengan realita. Rahasianya ada pada trik backshift: kalau kamu berharap kenyataan hari ini berbeda, mundurkan tenses-nya ke Simple Past (seperti 'I wish I knew'). Kalau kamu menyesali masa lalu, mundurkan lagi ke Past Perfect ('I wish I had studied'). Dan kalau kamu sekadar gemas ingin mengubah kelakuan menjengkelkan orang lain, cukup gunakan would + V1 untuk menyindirnya dengan halus.",
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
                "explanation": "Bayangkan tenggat waktu sudah di depan mata dan kamu belum mulai mengerjakan tugas sama sekali. Untuk momen mendesak ini, bahasa Inggris punya ungkapan formal 'It is high time that...' yang sangat elegan sekaligus tegas. Meski terdengar membahas masa sekarang, idiom ini mewajibkan kata kerja setelahnya memakai bentuk Simple Past (V2). Bentuk masa lalu ini sengaja dipakai untuk memberi efek kejut, menyiratkan bahwa tindakan tersebut seharusnya sudah kamu selesaikan dari tadi.",
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
      toeflApplication: 'TOEFL Structure menguji penggunaan since + titik waktu dan for + rentang durasi.',
      scoringImpact: 'Meningkatkan akurasi pemilihan tenses.'
    },
    goldenRules: [
      'Gunakan since untuk titik awal waktu lampau (since 2010); gunakan for untuk durasi kuantitas waktu (for ten years).',
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
      explanation: "Dalam penulisan esai akademik dan sitasi ilmiah (IELTS Task 2 & TOEFL Writing), teori atau klaim literatur yang masih berlaku hingga kini disitasi menggunakan Simple Present Tense (posits, argues, demonstrates).",
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
      explanation: "Present Perfect Continuous (has/have been + V-ing) digunakan untuk menekankan kontinuitas durasi aksi yang dimulai di masa lampau dan masih terus berlangsung hingga saat ini.",
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
      linguisticExplanation: "Untuk durasi rentang waktu (\"tiga tahun\"), gunakan preposisi for (bukan since) dan tenses Present Perfect Continuous (bukan am living). Since hanya untuk titik awal waktu (since 2021).",
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
    stageNumber: 8,
    stageName: 'Tahap 8: Transformasi Klausa & Inversi',
    categoryKey: 'Tenses Logic',
    moduleNumber: 27,
    title: 'Past Dimensions: Simple Past, Past Continuous, Past Perfect, dan Past Perfect Continuous',
    subtitle: 'Kronologi peristiwa lampau, interupsi latar belakang, dan aksi terdahulu',
    levelBadge: 'Dimensi Past · Modul 27',
    estimatedMinutes: 30,
    mentalModelIntro: "Dalam bahasa Indonesia, kita cukup menaikkan intonasi di akhir kalimat berita untuk bertanya. Namun dalam bahasa Inggris, melontarkan pertanyaan adalah operasi sintaksis yang presisi: kata kerja bantu wajib melompat mendahului subjek agar pendengar seketika tahu kamu sedang membuka penyelidikan.\n\nDi modul ini, kamu akan menguasai inversi kalimat tanya langsung dengan Do-Support, merapikan struktur pertanyaan terselubung (Embedded Questions) dalam rumusan masalah akademik, memainkan Question Tags berpolaritas magnetik, serta menyingkap rahasia Subject Questions tanpa Do-Support.",
    coreConceptSummary: "Direct Questions (pertanyaan langsung) mewajibkan inversi dengan memajukan Auxiliary Verb mendahului subjek (\"Has the sample arrived?\"), atau memanggil Do-Support jika tidak ada kata bantu bawaan (\"Did the team discover an anomaly?\"). Namun, Subject Questions (Who/What sebagai subjek penanya) pantang diinversi dan tidak memakai do-support (\"Who discovered the anomaly?\").\n\nEmbedded Questions (pertanyaan terselubung dalam klausa lain) wajib mengembalikan urutan kata menjadi format deklaratif normal Subjek + Kata Kerja tanpa do-support (\"The study investigates how the pathogen enters cells\"). Question Tags bekerja seperti magnet berpolaritas terbalik: kalimat positif menuntut ekor tag negatif (\"The data is conclusive, isn't it?\"), dan sebaliknya.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Inversi Auxiliary-Subjek pada Kalimat Tanya Langsung (Direct Questions)",
                "explanation": "Saat kamu ingin melontarkan pertanyaan secara langsung, bayangkan ada aturan lalu lintas yang harus dipatuhi. Aturan utamanya: sang kata kerja bantu atau Auxiliary Verb (seperti Do, Be, Have, atau Modal) harus melompat ke depan, tepat sebelum subjek kalimat. Namun, kalau kalimat aslimu ternyata tidak punya asisten ini, jangan panik! Kamu wajib memanggil tenaga bala bantuan bernama Do-Support agar posisi tanyanya tetap valid dan strukturnya enak didengar.",
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
                "explanation": "Coba perhatikan saat sebuah pertanyaan 'disembunyikan' ke dalam kalimat lain, misalnya 'I wonder where he went'. Begitu pertanyaan ini menyusup menjadi embedded question, ia langsung kehilangan wujud tanyanya dan berubah total menjadi kalimat pernyataan deklaratif normal (Subject + Verb). Ingat baik-baik, di posisi ini kamu dilarang keras melakukan lompatan inversi auxiliary seperti pada pertanyaan langsung. Kesalahan fatal ini sering terjadi, jadi jaga agar susunan katamu tetap kalem dan teratur.",
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
                "explanation": "Pernahkah kamu ngobrol dan mencari persetujuan dari lawan bicaramu dengan tambahan '...kan?' di akhir kalimat? Itulah fungsi Question Tags! Aturannya mirip magnet yang saling tarik-menarik dengan polaritas berlawanan. Jika kalimatmu positif, tag di belakang harus negatif ('The data is conclusive, isn't it?'), dan sebaliknya, kalimat negatif selalu menuntut akhir yang positif. Ini adalah trik jitu untuk membuat percakapanmu terasa jauh lebih hidup dan memancing respons.",
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
                "explanation": "Ada satu jebakan batman dalam membuat pertanyaan yang sering bikin orang bingung. Ketika kata tanya andalanmu (Who atau What) ternyata berperan langsung sebagai pelaku utama atau Subjek, aturan main berubah drastis. Kamu DILARANG keras menyisipkan Do-Support di dalamnya. Susun saja kata-katanya persis seperti kalimat pernyataan biasa, seperti 'Who discovered the Higgs boson?', dan kalimat tanyamu akan mengalir mulus tanpa terkesan kaku.",
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
      ieltsApplication: 'IELTS Writing Task 1 grafik historis menuntut penguasaan Past Simple dan Past Perfect (By 2000, production had overtaken consumption).',
      toeflApplication: 'TOEFL Structure menguji keabsahan urutan Past Perfect dengan kata hubung by the time, before, after.',
      scoringImpact: 'Meningkatkan koherensi kronologis laporan data.'
    },
    goldenRules: [
      'Gunakan Past Perfect (had + V3) hanya bila ada peristiwa masa lalu lain sebagai titik acuan pembanding.',
      'Waktu lampau spesifik (yesterday, in 2010, two days ago) WAJIB menggunakan Simple Past (V2), bukan Present Perfect.'
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
      explanation: "Untuk menyatakan stative conditions (kondisi/keadaan statis di masa lampau seperti kepemilikan/eksistensi), kita HANYA boleh menggunakan used to (BUKAN would). Would hanya digunakan untuk repeated dynamic actions (kebiasaan berulang).",
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
      explanation: "Peristiwa yang terjadi lebih dulu di masa lampau (kebakaran melalap arsip) wajib menggunakan Past Perfect (had consumed), sedangkan peristiwa masa lampau yang menyusul (tim damkar tiba) menggunakan Simple Past (arrived).",
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
      linguisticExplanation: "Ketika keterangan waktu lampau spesifik disebutkan (\"yesterday\"), gunakan Simple Past, bukan Past Perfect. Past Perfect hanya digunakan jika ada keterkaitan sebelum peristiwa lampau lainnya.",
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
    mentalModelIntro: "Bayangkan menyalin kutipan wawancara seorang pakar dan menyampaikannya kembali ke laporanmu hari ini. Dalam bahasa Inggris, menceritakan kembali ucapan masa lalu menuntut penyesuaian perspektif ruang dan waktu secara menyeluruh melalui prinsip Reported Speech.\n\nDi modul ini, kamu akan melatih intuisi memundurkan tenses (Tense Backshift), mengenali pengecualian hukum alam abadi yang tidak boleh dimundurkan waktunya, menggeser penanda ruang dan waktu (deiksis), serta mengganti kata said yang monoton dengan Academic Reporting Verbs bernuansa tajam.",
    coreConceptSummary: "Reported Speech menerapkan Tense Backshift (mundur tenses satu tingkat) ketika kata kerja pengantar berada dalam bentuk lampau seperti said atau reported: Present Simple bergeser ke Past Simple, Present Perfect ke Past Perfect, dan will menjadi would. Penanda deiksis waktu dan tempat ikut bergeser (now menjadi then, here menjadi there, today menjadi that day).\n\nPengecualian mutlak: jika proposisi yang dilaporkan merupakan kebenaran ilmiah abadi atau hukum alam universal, tenses tetap dipertahankan dalam Present Tense (\"Newton proved that gravity attracts mass\"). Tingkatkan register tulisan dengan mengganti said memakai Academic Reporting Verbs kritis seperti contend, hypothesize, assert, dan demonstrate.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Prinsip Backshift of Tenses pada Reporting Verbs Lampau",
                "explanation": "Bayangkan kamu menjadi seorang pembawa berita yang menceritakan kembali gosip kemarin. Kalau kata pengantarmu menggunakan bentuk masa lalu seperti said atau reported, bersiaplah melakukan backshift atau memundurkan waktu! Seluruh tenses di dalam cerita yang kamu laporkan harus ikut mundur satu langkah: Present Simple menjadi Past Simple, Will menjadi Would, dan Can menjadi Could. Penyesuaian waktu ini wajib agar ceritamu akurat dan tidak melampaui kenyataan saat ini.",
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
                "explanation": "Tapi tunggu dulu, aturan backshift ternyata punya pengecualian keren! Kalau kamu melaporkan fakta ilmiah abadi, hukum alam, atau sesuatu yang kebenarannya masih sangat valid sampai detik ini, kamu bebas dari kewajiban memundurkan tenses. Kata kerjanya tetap dipertahankan dalam Present Tense. Jadi, saat menceritakan bahwa bumi itu bulat, kamu tak perlu mengubahnya ke masa lalu—karena kebenarannya tidak pernah kedaluwarsa.",
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
                "explanation": "Selain memundurkan tenses, jangan lupa bahwa perspektif waktu dan tempat juga ikut bergeser saat melaporkan ucapan orang lain. Kamu harus menyesuaikan 'kapan' dan 'di mana' kejadian itu berlangsung dari sudut pandang ceritamu sekarang. Otomatis, deiksis seperti now berubah menjadi then, today disulap jadi that day, dan here harus bergeser menjadi there. Trik ini penting agar pendengarmu tidak kebingungan dan merasa sedang berada di ruang waktu yang salah.",
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
                "explanation": "Jujur saja, menulis kata said berulang kali dalam esai akademik itu rasanya sangat membosankan dan kurang meyakinkan. Mulai sekarang, tingkatkan wibawa tulisanmu dengan Reporting Verbs yang lebih kritis dan bertenaga! Gunakan argue, assert, atau demonstrate untuk memperkuat argumen, dan coba urge atau advise untuk menyarankan sesuatu. Dengan variasi kata kerja yang tepat, esaimu seketika akan terdengar sekelas publikasi peneliti profesional.",
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
      ieltsApplication: 'Proyeksi masa depan pada grafik IELTS Task 1 (It is projected that by 2050 emissions will have doubled...) menghasilkan skor grammar tertinggi.',
      toeflApplication: 'TOEFL Structure menguji struktur by the time + Present Simple, S + will have + V3.',
      scoringImpact: 'Meningkatkan variasi tenses futuristik berstandar akademik.'
    },
    goldenRules: [
      'Gunakan Future Perfect (will have + V3) setiap kali ada penanda batas waktu By [Future Year/Deadline].',
      'Dalam anak kalimat waktu (time clause: when, before, as soon as), jangan gunakan "will", gunakan Simple Present (When he arrives, BUKAN When he will arrive).'
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
      explanation: "Dalam anak kalimat keterangan waktu masa depan (Future Time Clause setelah when, as soon as, before, until), verba TIDAK boleh menggunakan will, melainkan wajib menggunakan Simple Present (grants).",
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
      explanation: "Frasa penanda batas waktu masa depan \"By + [future time]\" menuntut penggunaan Future Perfect (will have + V3) untuk menunjukkan bahwa aksi tersebut akan telah tuntas sebelum batas waktu tersebut tercapai.",
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
      linguisticExplanation: "Dalam anak kalimat keterangan waktu (Time Clause setelah when, as soon as, before), gunakan Simple Present (arrive), bukan modal will.",
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
    mentalModelIntro: "Bayangkan menatap ratusan buku di rak: jika kamu berkata \"tolong ambilkan buku yang bersampul biru\", keterangan itu mengunci identitas buku secara spesifik. Dalam bahasa Inggris, Relative Clauses dirancang cerdas untuk memperkaya detail kata benda tanpa memecahnya menjadi kalimat pendek yang melelahkan.\n\nDi modul ini, kamu akan membedakan informasi pembatas esensial (Defining) dari keterangan tambahan berapit koma (Non-Defining), memilih whom untuk objek dan whose untuk kepemilikan, menaikkan wibawa lewat Pied-Piping, serta memanfaatkan Contact Clauses dengan menanggalkan kata ganti objek.",
    coreConceptSummary: "Defining Relative Clauses memberikan informasi esensial penentu identitas subjek dan pantang dipisahkan oleh tanda koma (\"The participants who followed the diet improved\"). Non-Defining Relative Clauses memberikan keterangan ekstra pada entitas yang sudah jelas, wajib diapit sepasang koma, dan DILARANG menggunakan kata ganti that (\"Oxford University, which was founded centuries ago, remains prestigious\").\n\nGunakan whom untuk objek sasaran manusia dan whose untuk kepemilikan. Terapkan Pied-Piping dengan menarik preposisi ke depan kata ganti relatif untuk register formal tingkat tinggi (\"the framework in which we operate\"). Manfaatkan Contact Clauses dengan menanggalkan kata ganti relatif yang bertindak sebagai objek demi kelancaran membaca (\"the methodology [that] the team utilized\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Defining Relative Clauses: Pembatas Identitas Esensial",
                "explanation": "Pernahkah kamu menunjuk seseorang di keramaian dan harus mendeskripsikannya agar temanmu tidak salah orang? Itulah peran Defining Relative Clause, yang memberikan informasi sangat esensial dan tak terpisahkan dari benda atau orang yang dibicarakan. Kalau kamu nekat menghapus klausa ini, makna kalimatmu akan langsung buyar dan menjadi rancu. Karena informasinya sangat vital, kamu dilarang keras memisahkannya dengan tanda koma!",
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
                "explanation": "Berbeda cerita jika benda atau orang yang kamu bicarakan identitasnya sudah sangat jelas sejak awal, misalnya nama kota terkenal. Di sini, kamu menggunakan Non-Defining Relative Clause untuk sekadar menempelkan bumbu informasi tambahan yang sebenarnya tidak wajib ada. Karena sifatnya hanya sisipan ekstra, klausa ini WAJIB dikarantina menggunakan sepasang tanda koma. Dan ingat pantangan terbesarnya: haram hukumnya menggunakan kata ganti THAT di dalam struktur ini.",
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
                "explanation": "Coba perhatikan cara orang berpendidikan menyusun kalimatnya; mereka selalu jeli membedakan peran kata ganti. Kalau kata gantinya menjadi sasaran objek, gunakan si elegan WHOM, sementara untuk urusan kepemilikan, pakailah WHOSE. Agar tulisan akademikmu makin menyala, cobalah trik Pied-Piping, yaitu menarik preposisi dari akhir kalimat langsung ke depan kata ganti relatif, sehingga menghasilkan frasa anggun seperti 'in which' atau 'to whom'.",
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
                "explanation": "Kadang, kesederhanaan adalah kunci agar kalimatmu mengalir selembut sutra saat dibaca. Saat Relative Pronoun kebetulan hanya bertugas sebagai OBJEK di dalam sebuah Defining Relative Clause, kamu punya hak istimewa untuk menghapusnya sama sekali! Fenomena hilangnya kata ganti ini dikenal sebagai Contact Clause. Dengan membuang kata yang tak perlu, ritme membacamu akan terasa jauh lebih natural dan gesit.",
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
      explanation: "Verba intransitif seperti occur, happen, exist, vanish, arrive tidak memiliki objek langsung dan TIDAK PERNAH BISA DIJADIKAN PASIF (was occurred ❌ ➔ occurred ✔️). Ini adalah salah satu kesalahan paling fatal dalam esai IELTS/TOEFL.",
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
      explanation: "Impersonal passive menggunakan struktur It + is + V3 (believed/thought/hypothesized) + that clause untuk menjaga nada objektif tanpa menyebutkan pelaku secara eksplisit.",
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
      linguisticExplanation: "\"Occur\" adalah Intransitive Verb murni dan tidak pernah memiliki bentuk pasif (was occurred ❌).",
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
    mentalModelIntro: "Bayangkan lampu panggung mendadak padam, lalu satu berkas cahaya tajam langsung menembak ke tokoh utama demi memicu efek dramatis. Dalam sintaksis bahasa Inggris tingkat tinggi, Inversion adalah teknik lampu sorot tersebut: dengan membalik urutan subjek dan predikat, kamu memberi sinyal bahwa informasimu memiliki urgensi retoris yang luar biasa.\n\nDi modul ini, kamu akan menguasai inversi adverbial negatif di awal kalimat, merangkai konstruksi megah Not only dan No sooner, membuang kata IF dalam pengandaian formal, hingga mengoperasikan Locative Fronting (Inversi Penuh) dalam esai deskriptif berbobot tinggi.",
    coreConceptSummary: "Negative Adverbial Inversion terjadi ketika kata keterangan bernuansa pembatas/negatif (Rarely, Seldom, Never before, Under no circumstances) ditarik ke awal kalimat untuk penekanan, mewajibkan format pertanyaan Auxiliary + Subject + Verb (\"Rarely have researchers observed such volatility\").\n\nGaya inversi ini juga menguasai pasangan Not only (\"Not only did the policy cut costs, but it also raised efficiency\") dan No sooner (\"No sooner had they started than it rained\"). Inversi kondisional membuang kata IF (Had / Were / Should). Pada Locative Fronting (Inversi Penuh), frasa penunjuk tempat ditarik ke depan dan seluruh kata kerja utama mendahului subjek tanpa do-support (\"At the center of the debate lies the issue of ethics\").",
    sections: [
        {
                "stepNumber": "01",
                "title": "Inversi Bersyarat setelah Negative & Limiting Adverbials",
                "explanation": "Bayangkan kamu ingin membuka pidatomu dengan pukulan dramatis yang tak terlupakan. Caranya gampang: tarik kata keterangan bernuansa negatif seperti Rarely, Never before, atau Hardly ke posisi paling depan! Tapi awas, teknik penekanan ini punya efek domino. Begitu kata negatif ini mendarat di depan, pola kalimatmu WAJIB diinversikan layaknya format pertanyaan: letakkan Auxiliary dulu, baru disusul Subject, dan terakhir Main Verb. Ledakan maknanya akan terasa sangat elegan dan bertenaga.",
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
                "explanation": "Ada dua tamu VIP di awal kalimat yang suka bikin aturan sendiri: Not only dan No sooner. Begitu Not only tampil di depan panggung, ia langsung memicu inversi pada klausa pertamanya secara heroik. Hal yang sama berlaku untuk No sooner, namun ia secara khusus mewajibkan inversi pada tenses Past Perfect di klausa pertama, dan selalu minta dipasangkan dengan kata than di klausa keduanya.",
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
                "explanation": "Ingin membuat esaimu tidak berbau klise dengan rentetan kata IF yang membosankan? Buang saja kata IF itu, dan mulailah sulap Conditional Inversion! Caranya sangat magis: dorong auxiliary maju ke baris depan sebagai ganti si 'IF'. Kamu bisa pakai pola Had + Subjek untuk penyesalan dramatis, Were + Subjek + to V1 untuk pengandaian elegan, atau Should + Subjek untuk saran formal. Trik ini langsung mendongkrak gaya bahasamu ke level akademisi murni.",
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
                "explanation": "Terkadang, menceritakan latar lokasi terlebih dahulu bisa menciptakan suasana visual yang sangat dramatis dalam sebuah narasi. Saat kamu menarik frasa preposisional tempat ke garis depan kalimat, terjadilah keajaiban Full Inversion alias inversi penuh. Di kondisi ini, seluruh Main Verb langsung melompat berani mendahului subjek, tanpa perlu repot memanggil bantuan do-support. Susunan seperti ini akan menyajikan deskripsimu layaknya adegan pembuka film yang megah.",
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
      toeflApplication: 'TOEFL Structure menguji penggunaan "were" untuk semua subjek pada Second Conditional (If I were you).',
      scoringImpact: 'Meningkatkan kompleksitas hipotesis dan argumen.'
    },
    goldenRules: [
      'Pada Second Conditional formal, gunakan "were" untuk SEMUA subjek (termasuk I, He, She, It).',
      'Jangan pernah letakkan "would" di dalam anak kalimat "If" (If I would have known ❌ -> If I had known ✔).'
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
      explanation: "Inversi pada Conditional Type 2 dengan bentuk \"were to\" diubah menjadi: Were + Subject + to + Verb (Were the government to implement...).",
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
      explanation: "Mixed Conditional (Type 3 + Type 2): If clause menggunakan Past Perfect (had detected) untuk kondisi masa lampau, sedangkan Main clause menggunakan would + bare infinitive (would not be) untuk akibat di masa kini.",
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
      linguisticExplanation: "Dalam Conditional Type 1, klausa syarat (if-clause) menggunakan Simple Present (subsidizes), bukan modal will. Modal will diletakkan pada klausa akibat (main clause).",
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
    stageNumber: 9,
    stageName: 'Tahap 9: Retorika Akademik & Sintaksis Mahir',
    categoryKey: 'Complex Structures',
    moduleNumber: 31,
    title: 'Coordinating Conjunctions (FANBOYS), Subordinasi, dan Transisi Antar-Kalimat',
    subtitle: 'Membangun jembatan logika antar gagasan tanpa kompromi tanda baca',
    levelBadge: 'Konjungsi & Transisi · Modul 31',
    estimatedMinutes: 25,
    mentalModelIntro: "Bayangkan menyeberangi sungai berbatu yang deras: jika batu pijakan berikutnya diletakkan terlalu jauh atau melompat tanpa arah, kamu pasti akan terpeleset. Paragraf akademik yang kohesif bekerja persis seperti susunan batu pijakan tersebut: setiap kalimat baru harus berpijak kokoh pada informasi yang sudah dikenal sebelum memperkenalkan gagasan baru.\n\nDi modul ini, kamu akan mempelajari aliran Theme-Rheme (prinsip Given-to-New), merajut jaring sinonim dan parafrasa lewat Lexical Chains, merotasi menu pembuka kalimat (Sentence Openers), serta memahat jembatan transisi tematik antarseksi secara organik.",
    coreConceptSummary: "Prinsip Theme-Rheme (Given-to-New) mengatur agar kalimat selalu dibuka dengan Theme (informasi yang sudah dikenal pembaca) dan ditutup dengan Rheme (informasi baru yang segar), yang kemudian diangkat menjadi Theme pembuka pada kalimat berikutnya.\n\nKohesi leksikal diperkuat melalui Lexical Chains (variasi sinonim akademik, hipernim konseptual, dan parafrasa pronominal). Pecah kemonotonan teks dengan merotasi Sentence Openers (membuka kalimat dengan frasa preposisi, partisipel, atau klausa subordinatif). Bangun jembatan antar-paragraf dengan menyematkan rangkuman konseptual dari paragraf sebelumnya alih-alih sekadar menempelkan kata transisi mekanis.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Teori Theme and Rheme: Prinsip Given-to-New Information",
                "explanation": "Bayangkan setiap kalimatmu adalah sebuah kereta api yang sedang melaju. Gerbong depan adalah Theme—titik tolak berisi informasi lama yang sudah akrab dengan pembaca. Sebaliknya, muatan kejutan di gerbong belakang adalah Rheme, yakni informasi baru yang segar! Rahasia paragraf yang mengalir semulus sutra adalah keahlianmu merangkaikan keduanya: tangkap Rheme dari kalimat pertama, dan jadikan ia sebagai Theme yang akrab untuk membuka kalimat berikutnya.",
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
                "explanation": "Membaca esai yang mengulang-ulang kata yang sama itu ibarat mendengar kaset rusak—sangat membosankan! Penulis yang cerdas menciptakan ikatan kohesi yang kuat lewat apa yang disebut Lexical Chains. Alih-alih sekadar mengulang kata, mereka cerdik menggunakan sinonim yang pas, hipernim yang cakupannya lebih luas, atau melakukan parafrasa secara luwes. Hasilnya, paragrafmu bukan sekadar kumpulan kalimat, melainkan jaring laba-laba ide yang terjalin estetik.",
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
                "explanation": "Coba periksa esaimu; apakah semua kalimatnya terus-menerus dibuka dengan Subjek lalu Kata Kerja? Kalau ya, tulisanmu sedang terkena sindrom monoton! Penulis mahir tahu betul cara memecah kebosanan ini dengan merotasi menu pembuka kalimat. Mulailah sesekali dengan Frasa Preposisional yang cantik, ayunkan dengan Frasa Partisipel yang dinamis, atau pancing rasa penasaran lewat Klausa Subordinatif agar pembaca tak pernah bisa menebak ritmemu.",
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
                "explanation": "Merangkai paragraf itu butuh seni tinggi, bukan sekadar menempelkan kata-kata transisi mekanis yang kaku seperti Secondly atau Moreover. Jembatan penghubung yang sejati justru tercipta saat kamu berhasil menyelipkan gema ide dari paragraf lama ke dalam kalimat topik paragraf baru. Dengan merangkum esensi masa lalu untuk memperkenalkan gagasan baru, transisi tulisanmu akan terasa sangat organik dan membimbing logika pembaca tanpa paksaan.",
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
      toeflApplication: 'TOEFL Reading & Writing menguji transisi kontras (whereas, despite, nonetheless).',
      scoringImpact: 'Meningkatkan kohesi dan kepadatan wacana argumentatif.'
    },
    goldenRules: [
      'Despite dan In spite of diikuti Noun / Gerund (-ing), BUKAN klausa lengkap (Despite it rained ❌ -> Despite the rain ✔).',
      'Although dan Whereas diikuti klausa lengkap (Subjek + Kata Kerja).'
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
      explanation: "Correlative conjunction menuntut kesejajaran gramatikal (parallelism): \"not only [Past Verb: improved] ... but also [Past Verb: fostered]\".",
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
      linguisticExplanation: "Jangan menggunakan konjungsi subordinatif (Although) dan koordinatif (but) secara bersamaan dalam satu kalimat (Double Conjunction error). Pilih salah satu.",
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
    mentalModelIntro: "Bandingkan dua kalimat ini: \"Karena populasi kota bertambah sangat cepat, pemerintah harus membangun jalan\" versus \"Pertumbuhan pesat populasi perkotaan menuntut ekspansi infrastruktur transportasi.\" Kalimat kedua terasa jauh lebih padat, berbobot, dan berwibawa. Seni memadatkan aksi menjadi konsep benda inilah yang disebut Academic Nominalization.\n\nDi modul ini, kamu akan menguasai teknik morfologis mengubah verba ke nomina bernilai akademis tinggi, merampingkan klausa menjadi frasa padat berbobot Academic Word List (AWL), serta menjaga keseimbangan agar tulisan tidak terserang wabah Zombie Nouns yang mematikan kejelasan.",
    coreConceptSummary: "Academic Nominalization mentransformasikan klausa berbasis aksi kata kerja menjadi frasa nomina konseptual menggunakan sufiks -tion, -ment, -ity, dan -ance, melipatgandakan Lexical Density (Kepadatan Leksikal) untuk mengemas proposisi rumit ke dalam wadah sintaksis yang padat dan efisien.\n\nPola transformasi baku berakar dari Academic Word List (AWL), seperti proliferation, degradation, dan fluctuation. Jaga keseimbangan agar terhindar dari Zombie Nouns—yakni tumpukan kata benda abstrak berlebihan yang mematikan kejelasan kalimat dan menyembunyikan siapa pelaku tindakan sesungguhnya. Pertahankan kata kerja aktif yang kuat saat menegaskan relasi dampak sebab-akibat.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Mekanisme Morfologis & Sintaksis Nominalisasi",
                "explanation": "Pernahkah kamu merasa kalimatmu terlalu panjang dan bertele-tele? Di sinilah mekanisme Nominalisasi datang menyelamatkanmu layaknya alat pengepres! Ia mampu menyulap satu klausa lengkap yang berhamburan menjadi sebuah Frasa Nomina tunggal yang luar biasa padat. Caranya mudah: ubah saja kata kerjamu menjadi kata benda dengan menambahkan akhiran seperti -tion atau -ment, lalu sulap kata keterangan menjadi kata sifat yang siap menempel mendampingi benda barumu.",
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
                "explanation": "Dalam dunia akademik, semakin sedikit kata 'receh' yang kamu pakai, semakin tinggi nilai tulisanmu. Konsep ini disebut Kepadatan Leksikal (Lexical Density), di mana kita memperbanyak proporsi kata-kata berbobot seperti nomina dan adjektiva. Melalui sihir nominalisasi, kamu berhasil menyusupkan banyak ide ke dalam satu wadah kalimat yang padat. Hasil akhirnya? Tulisanmu terbebas dari pemborosan kata dan argumenmu tersampaikan dengan utuh.",
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
                "explanation": "Namun hati-hati, jangan sampai kamu mabuk nominalisasi! Jika terlalu sering mengubah kata kerja menjadi benda, tulisanmu akan dipenuhi oleh Zombie Nouns—kata-kata mati yang membuat paragraf kaku dan mengaburkan siapa sebenarnya yang menjadi pelaku tindakan. Jika kamu merasa kalimatmu mulai tersesat di alam abstrak yang membingungkan, segeralah putar haluan. Bangkitkan kembali aksi utamanya dengan memanggil kata kerja dinamis yang jauh lebih jernih dan bertenaga.",
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
                "explanation": "Untuk mulai mengubah tulisanmu menjadi kelas wahid, kamu hanya perlu mengenali pola transformasi gaya akademik ini. Bayangkan betapa elegan perubahannya saat verba analyze menyusut menjadi analysis, atau saat tindakan evaluate mengkristal menjadi evaluation. Deretan pergeseran ini terus berlanjut seperti fluctuate ke fluctuation atau disclose ke disclosure. Dengan menguasai perubahan wujud ini, kamu memegang kunci emas menuju penulisan akademik yang mumpuni.",
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
      toeflApplication: 'TOEFL Structure menguji larangan "that" setelah koma (, that ❌).',
      scoringImpact: 'Meningkatkan presisi modifikasi nomina kompleks.'
    },
    goldenRules: [
      'Jangan pernah gunakan "that" tepat setelah tanda koma pada relative clause.',
      'Gunakan "whose" untuk kepemilikan orang maupun benda (a theory whose implications...).'
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
      explanation: "Klausa \"which were synthesized in the laboratory\" dapat direduksi dengan menghapus relative pronoun which dan be-verb were, menyisakan past participle phrase: The chemicals synthesized in the laboratory....",
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
      explanation: "Non-defining relative clause (memberikan informasi tambahan tentang benda yang sudah spesifik) wajib diapit oleh dua tanda koma dan menggunakan which (TIDAK BOLEH menggunakan that).",
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
      linguisticExplanation: "Untuk merujuk pada manusia (The professor), gunakan relative pronoun who (atau whom/whose), BUKAN which yang khusus untuk benda/hewan.",
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
    mentalModelIntro: "Bayangkan seorang orator ulung yang saat menyampaikan poin paling penting tiba-tiba memberi jeda lalu menegaskan: \"Bukan kekurangan teknologi yang menghambat kita, melainkan ketiadaan kemauan politik.\" Efek retoris memukau ini diciptakan melalui Cleft Sentences (Kalimat Belah) untuk memfokuskan sorotan panggung pada satu elemen kunci.\n\nDi modul ini, kamu akan melatih perancangan konstruksi It-Clefts yang menembakkan fokus ke depan, menyusun dinamika resolusi akhir lewat Wh-Clefts, menegaskan hubungan kausalitas dengan Reverse Wh-Clefts, serta menempatkan kalimat belah ini secara strategis di titik-titik krusial esaimu.",
    coreConceptSummary: "Cleft Sentences membelah satu klausa tunggal menjadi dua bilik untuk memfokuskan sorotan (Focalization) pada elemen kunci. Konstruksi It-Cleft (It was [elemen fokus] that [sisa informasi]) langsung menyorot elemen penting di awal kalimat (\"It was human emissions that accelerated global warming\").\n\nWh-Clefts / Pseudo-Clefts (What we need is [elemen kunci]) mengemas informasi pengantar di awal dan menyajikan resolusi kejutan di akhir kalimat. Reverse Wh-Clefts meletakkan unsur fokus di paling depan untuk menegaskan kausalitas (\"Subprime lending was what triggered the crisis\"). Gunakan struktur belah secara strategis pada kalimat tesis, sanggahan argumen, atau kalimat kesimpulan esai.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Arsitektur It-Clefts & Mekanisme Pergeseran Fokus",
                "explanation": "Bayangkan kamu punya sebuah lampu sorot di atas panggung kalimatmu. Saat kamu memakai It-Cleft, kamu sengaja membelah sebuah kalimat normal untuk memberikan sorotan pada satu elemen spesifik. Caranya, awali saja dengan ekspletif 'It is' atau 'It was', lalu letakkan bintang utamamu persis di belakangnya! Setelah bintangmu tampil bersinar, tutup dengan manis menggunakan klausa that atau who agar konteks ceritanya tetap utuh dan mendebarkan.",
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
                "explanation": "Kalau kamu lebih suka menyimpan kejutan di akhir cerita, maka Wh-Cleft (atau Pseudo-Cleft) adalah trik favorit yang wajib kamu coba! Alih-alih langsung blak-blakan, gaya ini mengemas informasi latar belakang ke dalam sebuah bungkusan klausa yang diawali dengan What. Begitu pembaca mulai penasaran menyusuri kalimatmu, berikanlah elemen kunci di posisi akhir, tepat setelah kata is atau was, untuk menciptakan efek retoris yang menawan.",
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
                "explanation": "Suka tampil beda dan langsung menusuk ke inti argumen? Coba mainkan Reverse Wh-Cleft yang membalik semua aturannya! Di sini, kamu langsung menaruh elemen fokusmu di posisi paling depan bagaikan jagoan utama. Baru setelah itu, ikuti dengan rangkaian pendorong 'is/was what...'. Pola tegas ini sangat jitu dan meyakinkan, terutama saat kamu ingin menutup paragraf evaluatif dan menunjuk langsung apa sebenarnya akar penyebab masalahnya.",
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
                "explanation": "Menulis esai yang berkesan bukan sekadar masalah tata bahasa yang benar, melainkan seni strategi penempatan. Senjata rahasia bernama Cleft Sentences ini jangan dibuang sembarangan! Simpan dan gunakan secara strategis pada Kalimat Tesis, saat membanting argumen lawan, atau saat memahat Kalimat Kesimpulan. Dengan penempatan yang cerdas, tulisanmu akan memancarkan resonansi intelektual yang kuat dan sukses meninggalkan kesan mendalam di benak pembaca.",
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
      ieltsApplication: 'Penggunaan noun clauses (It is evident that... / The study explores how...) memperkaya variasi klausa kompleks.',
      toeflApplication: 'TOEFL Structure paling sering menjebak peserta dengan embedded questions yang masih mempertahankan inversi tanya (why is the... ❌).',
      scoringImpact: 'Mencegah kesalahan susunan kata dasar dalam kalimat majemuk bertingkat.'
    },
    goldenRules: [
      'Dalam embedded question, urutan kata SELALU Subjek sebelum Kata Kerja (S + V).',
      'Jangan gunakan auxiliary operator do, does, did di dalam embedded question (I wonder where he goes, bukan where does he go).'
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
      explanation: "Klausa \"that the preliminary sample may have been contaminated\" terletak setelah linking verb is dan berfungsi menjelaskan identitas dari subjek \"The primary concern\", sehingga berkedudukan sebagai Subject Complement Noun Clause.",
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
      explanation: "Dalam Embedded Question (pertanyaan terselubung setelah frasa pembuka), susunan kata kembali ke format kalimat deklaratif: Question Word + Subject + Verb (what the expenditure will be ✔️, BUKAN format tanya what will the expenditure be ❌).",
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
      linguisticExplanation: "Dalam Noun Clause / Embedded Question, hapus auxiliary do-support (do) dan susun kalimat dengan urutan afirmatif: Question Word + Subject + Verb (how respondents evaluate).",
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
    mentalModelIntro: "Bayangkan jembatan gantung mahakarya arsitektur: jika kabel penopang di sisi kanan terbuat dari baja kokoh sementara di sisi kiri hanya berupa seutas tali rapuh, jembatan itu pasti akan runtuh. Otak manusia secara alami mendambakan simetri, ritme, dan keteraturan logika yang sama dalam struktur kalimat melalui prinsip Parallelism (Paralelisme Sintaksis).\n\nDi modul ini, kamu akan melatih kepekaan simetri pada pasangan konjungsi korelatif (not only... but also), menyelaraskan bentuk kata dalam serial daftar, memperbaiki kesalahan perbandingan timpang (Faulty Comparison), hingga merangkai pola Trikolon retoris yang megah.",
    coreConceptSummary: "Parallelism (Paralelisme Sintaksis) menuntut struktur gramatikal yang simetris sempurna: elemen yang digabungkan oleh konjungsi korelatif (not only... but also, either... or, both... and) wajib mengenakan seragam kelas kata yang identik (frasa nomina dengan frasa nomina, gerund dengan gerund, klausa dengan klausa).\n\nAturan keseragaman berlaku mutlak pada daftar serial: jika butir pertama dibuka dengan gerund, seluruh butir berikutnya wajib berwujud gerund. Hindari Faulty Comparison (perbandingan timpang): dua entitas yang diperbandingkan dengan than atau as... as harus setara (\"Implementing healthcare is more effective than treating illnesses\", bukan \"than to treat ❌\"). Puncak keanggunan paralelisme diwujudkan lewat Trikolon Retoris tiga ketukan harmonis.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Kaidah Paralelisme pada Konjungsi Korelatif",
                "explanation": "Coba perhatikan timbangan emas yang seimbang sempurna; begitulah seharusnya kamu memperlakukan Konjungsi Korelatif! Saat kamu memasangkan kata seperti Not only dengan but also, atau Either dengan or, keduanya punya tuntutan yang sangat kaku. Mereka mewajibkan agar struktur gramatikal yang menyusul di belakang masing-masing pasangannya memiliki bentuk yang SIMETRIS SEMPURNA. Kalau yang satu diikuti frasa nomina, pasangannya pantang diisi oleh klausa yang berbeda bentuk!",
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
                "explanation": "Pernah merasa ada yang janggal saat membaca sebuah daftar aktivitas, seolah iramanya tersandung? Itulah bahayanya melupakan paralelisme saat membuat serial! Kunci utamanya adalah kekompakan wujud: kalau butir pertama kamu mulai dengan Gerund (-ing), maka butir-butir selanjutnya harus setia memakai -ing juga. Entah kamu memilih Frasa Nomina, Bare Infinitive, atau Klausa, pastikan seluruh daftarmu memakai seragam sintaksis yang sama persis agar enak dibaca.",
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
                "explanation": "Bayangkan kamu membandingkan rasa sebuah apel dengan bentuk sebuah mobil—sangat tidak nyambung, bukan? Logika yang sama berlaku saat kamu menimbang dua hal menggunakan than atau as...as. Dua entitas yang saling kamu adu ini wajib memiliki kedudukan gramatikal yang setara. Membandingkan sebuah tindakan (kata kerja) secara langsung dengan sebuah benda mati adalah kesalahan paralelisme fatal yang akan merusak kredibilitas perbandinganmu.",
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
                "explanation": "Ingin paragraf kesimpulanmu bergaung megah layaknya pidato memukau? Keluarkanlah jurus paralelisme tingkat tinggi, seperti Trikolon yang menyajikan deretan tiga elemen beruntun dengan seimbang. Saat struktur kalimatmu berjajar dengan irama ketukan (cadence) yang sempurna, kalimat tersebut seketika memancarkan resonansi retoris yang magis dan sangat persuasif. Ini adalah pamungkas brilian untuk memastikan pembaca terhipnotis dengan argumen terakhirmu!",
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
      toeflApplication: 'TOEFL Structure menguji Subjunctive Bare Infinitive setelah insist that / demand that.',
      scoringImpact: 'Membuktikan penguasaan retorika tingkat ahli (Mastery Level).'
    },
    goldenRules: [
      'Setelah verba mandat (demand, recommend, suggest, insist that), kata kerja WAJIB Bare Infinitive tanpa -s atau to be (he be, she submit).',
      'Awali inversi negatif dengan Auxiliary Verb sebelum Subjek (Under no circumstances should you...).'
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
      explanation: "Pada struktur \"Not until [time clause], [main clause]\", inversi (Auxiliary + Subject + Main Verb) terjadi pada Main Clause (did the editorial board approve), bukan pada anak kalimat not until.",
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
      linguisticExplanation: "Present Mandative Subjunctive setelah verba tuntutan (demand, require, insist that) mewajibkan penggunaan Bare Infinitive (be) untuk semua subjek tanpa memedulikan subjek tunggal/jamak.",
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
    mentalModelIntro: "Bayangkan konduktor orkestra simfoni kelas dunia yang memimpin puluhan instrumen berbeda—gesekan biola, tiupan flute, dan dentum simbal—berpadu harmonis tanpa ada satu nada pun yang sumbang. Modul penutup ini adalah panggung simfoni sintaksis tempat seluruh instrumen tata bahasa tingkat lanjut disatukan menjadi mahakarya prosa ilmiah yang utuh.\n\nDi modul puncak ini, kamu akan menguasai Absolute Structures yang memiliki subjek partisipel mandiri bebas dari Dangling Modifier, memadatkan klausa latar belakang lewat Participle Reduction, serta mengoperasikan Matriks Epistemic Stance & Hedging untuk menyajikan klaim riset berstandar IELTS Band 8.5–9.0 dan TOEFL 110+.",
    coreConceptSummary: "Absolute Structures (Nominative Absolute) mengusung subjek partisipel mandiri tanpa konjungsi (\"The telemetry having been verified, the team published the findings\"), secara otomatis melenyapkan risiko Dangling Modifier. Dipadukan dengan reduksi partisipel pasif dan perfek, struktur ini memadatkan latar belakang panjang menjadi kalimat pembuka yang efisien.\n\nPada level tertinggi penulisan akademik, terapkan Matriks Epistemic Stance & Hedging menggunakan modalitas epistemik dan verba tentatif (suggests, indicates, plausibly implies) agar klaim ilmiah terdengar terukur, objektif, dan tidak arogan. Mensintesiskan nominalisasi, kalimat belah, inversi retoris, dan kehati-hatian hedging mengubah tulisanmu menjadi mahakarya ilmiah berdaulat di kancah global.",
    sections: [
        {
                "stepNumber": "01",
                "title": "Absolute Structures: Frasa Partisipel Mandiri",
                "explanation": "Pernah trauma dengan kesalahan Dangling Modifier yang bikin subjek kalimatmu terlihat konyol? Tenang saja, Absolute Structure hadir sebagai pahlawan penyelamat! Konstruksi partisipel luar biasa ini punya keistimewaan membawa SUBJEK GRAMATIKALNYA SENDIRI, terpisah dan merdeka dari subjek utama di klausa induk. Karena ia mandiri mengatur urusannya sendiri, struktur elegan ini dijamin anti-nyasar dan tidak akan pernah terkena jebakan modifier yang menggantung.",
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
                "explanation": "Terkadang esaimu terasa sesak dengan penjelasan panjang yang memakan banyak tempat. Solusi elegannya adalah dengan memadatkan informasi itu layaknya ahli bedah bahasa! Dengan cerdik menggabungkan Past Participle atau Perfect Participle ke dalam sebuah frasa, kamu bisa menekan paragraf yang gemuk menjadi kalimat pembuka yang luar biasa tajam. Teknik ini memastikan tulisanmu kaya akan informasi namun tetap efisien dan cepat dicerna pembaca.",
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
                "explanation": "Coba perhatikan tulisan para sarjana kelas dunia: mereka pantang membuat klaim mutlak yang terkesan naif. Mereka jago bersiasat menggunakan Matriks Hedging untuk meredam nada kalimat tanpa menghilangkan ketajamannya. Melalui sentuhan halus Tentative Verbs seperti suggest dan imply, atau bantuan Probability Adverbs semacam arguably, klaim mereka berubah menjadi pandangan akademis (epistemic stance) yang canggih, objektif, dan sangat sulit untuk dipatahkan!",
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
                "explanation": "Akhirnya, sampailah kita pada puncak gunung penulisan akademik! Untuk merebut skor tertinggi dari sang penguji, kamu tak bisa hanya mengandalkan satu trik dasar. Kesempurnaan dicapai saat kamu berhasil mensintesis berbagai variasi sintaksis: padukan sihir Nominalisasi, letupan dramatis Inversi, fokus tajam dari Clefting, dan efisiensi Participle Clauses. Jika semuanya berpadu dalam satu esai yang mengalir deras, kohesif, dan bertenaga, tulisanmu niscaya menuai nilai maksimal.",
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
      'Gunakan Perfect Participle (Having + V3) untuk menegaskan bahwa aksi pertama selesai sepenuhnya sebelum aksi kedua dimulai.'
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
      explanation: "Nominalisasi (proliferation dari proliferate, degradation dari degrade) memadatkan klausa verba menjadi frasa nomina yang berbobot (high lexical density), yang merupakan ciri khas penulisan ilmiah Band 8.5+ IELTS dan jurnal internasional.",
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

