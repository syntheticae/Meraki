import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const basicGrammarLessons: Lesson[] = [
  {
    id: 'basic-01',
    trackId: 'basic-fundamentals',
    slug: 'parts-of-speech-mastery',
    title: 'Parts of Speech Mastery (8 Unsur Utama Kalimat)',
    order: 1,
    summary: 'Pahami 8 bagian kalimat dalam bahasa Inggris secara mendalam dan jelas: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, dan Interjection.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Memahami fungsi dan posisi 8 Parts of Speech dalam kalimat bahasa Inggris.',
      'Membedakan Verb (Kata Kerja), Noun (Kata Benda), dan Adjective (Kata Sifat) tanpa tertukar.',
      'Menghindari kesalahan umum penempatan kata keterangan (Adverb) dan preposisi.',
    ],
    sections: [
      {
        id: 'sec-1',
        title: '1. Noun & Pronoun (Fondasi Subjek & Objek)',
        badge: 'Fundamental',
        content: `**Noun (Kata Benda)** adalah nama orang, tempat, benda, ide, atau konsep (contoh: *scholar, university, curiosity, freedom*).

**Pronoun (Kata Ganti)** menggantikan Noun agar kita tidak mengulang kata yang sama terus-menerus (*he, she, it, they, we, someone, which*).`,
        examples: [
          {
            sentence: 'The dedicated student submitted her thesis on time.',
            translation: 'Mahasiswa yang berdedikasi itu mengumpulkan tesisnya tepat waktu.',
            explanation: '"Student" dan "thesis" adalah Noun, sedangkan "her" adalah Possessive Pronoun.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: '[Determiner / Adjective] + NOUN (Subject) + VERB + [NOUN / Pronoun (Object)]',
          explanation: 'Sebuah kalimat bahasa Inggris minimal harus memiliki Subject (Noun/Pronoun) dan Verb.',
          pitfall: 'Jangan menaruh kata sifat (Adjective) setelah Noun seperti dalam bahasa Indonesia (e.g. *house big* ❌ ➔ *big house* ✔️).',
        },
      },
      {
        id: 'sec-2',
        title: '2. Verb & Adverb (Aksi dan Cara Melakukannya)',
        badge: 'Core Engine',
        content: `**Verb (Kata Kerja)** adalah jantung kalimat. Menunjukkan aksi (*write, study*), keadaan (*be, exist*), atau kepemilikan (*have*).

**Adverb (Kata Keterangan)** memodifikasi Verb, Adjective, atau Adverb lainnya (sering berakhiran *-ly*, contoh: *meticulously, quickly, very, often*).`,
        examples: [
          {
            sentence: 'She explained the complex theory clearly.',
            translation: 'Dia menjelaskan teori yang rumit itu dengan sangat jelas.',
            explanation: '"explained" adalah Action Verb (Past), "clearly" adalah Adverb of Manner.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Tips Cepat Membedakan Adjective vs Adverb',
          text: 'Adjective menerangkan Benda (Noun): "a quick learner". Adverb menerangkan Kerja/Sifat (Verb/Adj): "learns quickly" atau "extremely smart".',
        },
      },
      {
        id: 'sec-3',
        title: '3. Preposition, Conjunction & Interjection',
        badge: 'Connectors',
        content: `**Preposition (Kata Depan)** menghubungkan kata benda dengan bagian lain (*in, on, at, by, under, across*).

**Conjunction (Kata Hubung)** menyambungkan kata, frasa, atau klausa (*and, but, although, because, however*).

**Interjection** adalah ungkapan emosi spontan (*Wow!, Alas!, Oh!*).`,
        examples: [
          {
            sentence: 'Although it rained heavily, they arrived at the examination hall.',
            translation: 'Meskipun hujan deras, mereka tiba di gedung ujian.',
            explanation: '"Although" adalah Conjunction, "at" adalah Preposition of Place.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Setiap kalimat bahasa Inggris wajib memiliki Subject dan Verb yang selaras (Subject-Verb Agreement).',
      'Adjective selalu diletakkan sebelum Noun (contoh: "academic excellence", bukan "excellence academic").',
      'Adverb of manner biasanya berakhiran -ly dan menjelaskan bagaimana suatu aksi dilakukan.',
    ],
    nextLessonId: 'basic-02',
  },
  {
    id: 'basic-02',
    trackId: 'basic-fundamentals',
    slug: 'sentence-patterns-svo',
    title: '5 Core Sentence Patterns (Pola Kalimat Dasar)',
    order: 2,
    summary: 'Kuasai 5 pola kalimat esensial dalam bahasa Inggris (SV, SVO, SVC, SVOO, SVOC) agar tulisan dan percakapanmu selalu gramatikal dan jelas.',
    readTimeMin: 6,
    difficulty: 'Beginner',
    objectives: [
      'Mengenali 5 pola dasar kalimat bahasa Inggris.',
      'Membedakan Complement (Pelengkap) dan Object (Objek).',
      'Membangun kalimat majemuk tanpa run-on sentences.',
    ],
    sections: [
      {
        id: 'sec-2-1',
        title: '5 Pola Inti Kalimat Bahasa Inggris',
        content: `1. **S + V (Subject + Intransitive Verb)**: *The birds sing.* / *The conference began.*
2. **S + V + O (Subject + Transitive Verb + Direct Object)**: *Researchers conducted an experiment.*
3. **S + V + C (Subject + Linking Verb + Subject Complement)**: *The analysis looks accurate.*
4. **S + V + IO + DO (Subject + Verb + Indirect Object + Direct Object)**: *The professor gave us feedback.*
5. **S + V + O + OC (Subject + Verb + Direct Object + Object Complement)**: *They elected him president.*`,
        examples: [
          {
            sentence: 'The committee found the proposed solution feasible.',
            translation: 'Komite tersebut menganggap solusi yang diusulkan layak dijalankan.',
            explanation: 'Pola S-V-O-OC: Subject (The committee) + Verb (found) + Object (the proposed solution) + Object Complement (feasible).',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'S + V + (O) + (Modifiers: Manner + Place + Time)',
          explanation: 'Keterangan waktu dan tempat biasanya diletakkan di paling akhir kalimat atau di awal kalimat dengan tanda koma.',
          pitfall: 'Jangan meletakkan adverb di antara Verb dan Objek langsung (e.g. *She speaks fluently English* ❌ ➔ *She speaks English fluently* ✔️).',
        },
      },
    ],
    keyTakeaways: [
      'Linking verbs (be, seem, appear, look, sound, become) selalu diikuti oleh Complement (bisa berupa Adjective atau Noun), bukan Direct Object.',
      'Objek langsung (Direct Object) selalu menjawab pertanyaan "What?" atau "Whom?".',
    ],
    prevLessonId: 'basic-01',
    nextLessonId: 'basic-03',
  },
  {
    id: 'basic-03',
    trackId: 'basic-fundamentals',
    slug: 'essential-tenses-simplified',
    title: 'The Essential 16 Tenses Simplified (Peta Waktu Lengkap)',
    order: 3,
    summary: 'Pahami konsep 3 dimensi waktu (Present, Past, Future) x 4 aspek (Simple, Continuous, Perfect, Perfect Continuous) tanpa perlu menghafal rumus buta.',
    readTimeMin: 9,
    difficulty: 'Beginner',
    objectives: [
      'Memahami logika perbedaan Simple vs Continuous vs Perfect.',
      'Menguasai Simple Present, Present Continuous, Simple Past, dan Simple Future.',
      'Mengetahui kapan menggunakan signal words seperti "since", "for", "already", "yet".',
    ],
    sections: [
      {
        id: 'sec-3-1',
        title: '1. Logika 4 Aspek Waktu',
        content: `Semua tenses bahasa Inggris hanyalah perpaduan dari:
- **Simple**: Fakta umum, kebiasaan rutin, atau peristiwa titik waktu selesai.
- **Continuous (Progressive)**: Aktivitas yang sedang berlangsung (*in progress*) pada momen tertentu.
- **Perfect**: Aksi yang sudah tuntas namun relevan dengan titik waktu acuan (*connected to now / then*).
- **Perfect Continuous**: Durasi aksi yang telah berlangsung dan masih berlanjut.`,
        ruleBox: {
          formula: 'Present: V1 / is,am,are | Past: V2 / was,were | Future: will + V1 | Perfect: have/has/had + V3',
          explanation: 'Bentuk kata kerja bantu (auxiliary verb) selalu menandakan tenses-nya.',
        },
      },
      {
        id: 'sec-3-2',
        title: '2. Perbedaan Krusial: Present Perfect vs Simple Past',
        content: `Ini adalah topik yang paling sering diuji dalam IELTS & TOEFL:
- **Simple Past (V2)**: Waktunya spesifik dan sudah selesai di masa lalu (*yesterday, in 2020, two days ago*).
- **Present Perfect (have/has + V3)**: Waktunya tidak spesifik, atau dampaknya masih terasa hingga sekarang (*already, so far, recently, since 2015*).`,
        examples: [
          {
            sentence: 'Dr. Johnson published his seminal paper in 2018.',
            translation: 'Dr. Johnson menerbitkan makalah pentingnya pada tahun 2018. (Past Simple - waktu spesifik).',
            isCorrect: true,
          },
          {
            sentence: 'Dr. Johnson has published numerous impactful papers throughout his career.',
            translation: 'Dr. Johnson telah menerbitkan banyak makalah berdampak sepanjang karirnya. (Present Perfect - waktu terbuka).',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'warning',
          title: 'IELTS / TOEFL Trap',
          text: 'Jika ada keterangan waktu lampau spesifik seperti "in 1999" atau "last month", HARUS menggunakan Simple Past (V2), BUKAN Present Perfect.',
        },
      },
    ],
    keyTakeaways: [
      'Simple Present digunakan untuk kebenaran ilmiah dan rutinitas (e.g. "Water boils at 100°C").',
      'Stative verbs (know, believe, belong, seem, understand) tidak lazim digunakan dalam bentuk continuous (-ing).',
      'Present Perfect menghubungkan masa lalu dengan masa kini.',
    ],
    prevLessonId: 'basic-02',
    nextLessonId: 'basic-04',
  },
  {
    id: 'basic-04',
    trackId: 'basic-fundamentals',
    slug: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement (Kesesuaian Subjek & Predikat)',
    order: 4,
    summary: 'Kuasai aturan kesesuaian subjek tunggal/jamak, frasa pengapit, kata benda tak dapat dihitung, dan jebakan umum dalam tes internasional.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Memahami aturan singular subject ➔ singular verb (+s/es) dan plural subject ➔ plural verb.',
      'Mengabaikan kata penjelas pengapit (intervening prepositional phrases) saat menentukan subjek inti.',
      'Menguasai indefinite pronouns (everyone, each, neither, either).',
    ],
    sections: [
      {
        id: 'sec-4-1',
        title: 'Aturan Inti: Abaikan Kata Sisipan',
        content: `Subjek sering dipisahkan dari Verb oleh frasa preposisi seperti *together with, along with, as well as, in addition to, of*. Jangan biarkan kata benda di dalam frasa sisipan mengecohmu!`,
        examples: [
          {
            sentence: 'The quality of these experimental samples **is** exceptional.',
            translation: 'Kualitas dari sampel eksperimen ini luar biasa.',
            explanation: 'Subjek intinya adalah "The quality" (tunggal), bukan "samples". Maka kata kerjanya adalah "is".',
            isCorrect: true,
          },
          {
            sentence: 'The professor, along with her research assistants, **is** attending the symposium.',
            translation: 'Sang profesor, bersama para asisten risetnya, menghadiri simposium tersebut.',
            explanation: 'Subjek intinya adalah "The professor" (tunggal). Frasa "along with..." tidak mengubah subjek menjadi jamak.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Neither/Either A or B ➔ Verb mengikuti B (subjek yang paling dekat dengan Verb)',
          explanation: 'Example: "Neither the manager nor the employees **were** aware of the update."',
        },
      },
    ],
    keyTakeaways: [
      'Kata seperti "Everyone", "Everybody", "Each", "Neither", "Either" selalu dihitung TUNGGAL (Singular).',
      'Uncountable nouns (Information, Evidence, Research, Furniture, Water) selalu memakai Singular Verb.',
    ],
    prevLessonId: 'basic-03',
  },
];

export const basicGrammarExercises: Record<string, Exercise[]> = {
  'basic-01': [
    {
      id: 'ex-b01-1',
      lessonId: 'basic-01',
      type: 'multiple-choice',
      title: 'Identifikasi Part of Speech',
      instruction: 'Pilih part of speech yang tepat untuk kata yang dicetak tebal.',
      question: 'The scientist conducted an **extraordinarily** thorough investigation.',
      options: [
        { id: 'a', text: 'Adjective (Kata Sifat)', explanation: 'Kurang tepat. Adjective menerangkan kata benda.' },
        { id: 'b', text: 'Adverb (Kata Keterangan)', explanation: 'Tepat! "Extraordinarily" berakhiran -ly dan menerangkan adjective "thorough".' },
        { id: 'c', text: 'Verb (Kata Kerja)', explanation: 'Kata kerja dalam kalimat ini adalah "conducted".' },
        { id: 'd', text: 'Noun (Kata Benda)', explanation: 'Kata bendanya adalah "investigation" dan "scientist".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Kata yang berakhiran "-ly" dan menerangkan derajat atau sifat suatu Adjective/Verb adalah Adverb.',
      points: 10,
    },
    {
      id: 'ex-b01-2',
      lessonId: 'basic-01',
      type: 'fill-blank',
      title: 'Lengkapi dengan Bentuk Kata yang Benar',
      instruction: 'Ketik kata yang tepat untuk melengkapi kalimat berikut.',
      sentence: 'She explained the mathematical equation [___] so everyone could understand.',
      targets: [
        { index: 0, correctAnswers: ['clearly', 'patiently', 'lucidly', 'simply'], hint: 'Bentuk Adverb dari kata "clear"' },
      ],
      wordBank: ['clear', 'clearly', 'clarity', 'clearness'],
      explanation: 'Kita membutuhkan Adverb ("clearly") untuk menerangkan bagaimana dia menjelaskan ("explained").',
      points: 10,
    },
    {
      id: 'ex-b01-3',
      lessonId: 'basic-01',
      type: 'matching',
      title: 'Pasangkan Part of Speech dengan Contohnya',
      instruction: 'Hubungkan istilah part of speech di sebelah kiri dengan contoh kata di sebelah kanan.',
      pairs: [
        { id: 'm1', left: 'Preposition', right: 'across, beneath, during' },
        { id: 'm2', left: 'Conjunction', right: 'although, whereas, furthermore' },
        { id: 'm3', left: 'Abstract Noun', right: 'integrity, perseverance, logic' },
        { id: 'm4', left: 'Adjective', right: 'rigorous, innovative, profound' },
      ],
      explanation: 'Memahami kategori kata mempermudah pembentukan kalimat formal.',
      points: 15,
    },
    {
      id: 'ex-b01-4',
      lessonId: 'basic-01',
      type: 'shadowing',
      title: 'Latihan Pelafalan & Shadowing (Intonasi & Kejelasan)',
      instruction: 'Dengarkan audio penutur asli di bawah ini, lalu rekam suaramu sendiri untuk membandingkan intonasi dan ritme pengucapan.',
      textToShadow: 'Careful observation and rigorous analysis are the hallmarks of sound academic research.',
      ipaPhonetic: '/ˈkeəfʊl ˌɒbzəˈveɪʃən ænd ˈrɪɡərəs əˈnæləsɪs ɑː ðə ˈhɔːlmɑːks ɒv saʊnd ˌækəˈdɛmɪk rɪˈsɜːtʃ/',
      translation: 'Pengamatan yang cermat dan analisis yang teliti adalah ciri khas dari penelitian akademis yang kredibel.',
      keyIntonationPoints: [
        'Beri penekanan pada kata kunci: "Careful observation", "rigorous analysis", "sound research".',
        'Jeda sejenak setelah kata "analysis" sebelum melangkah ke kata kerja "are".',
      ],
      tips: 'Perhatikan pengucapan kata "analysis" (/əˈnæləsɪs/), penekanan ada pada suku kata kedua!',
      points: 15,
    },
  ],
  'basic-02': [
    {
      id: 'ex-b02-1',
      lessonId: 'basic-02',
      type: 'multiple-choice',
      title: 'Menentukan Pola Kalimat',
      instruction: 'Pola kalimat manakah yang digunakan pada kalimat di bawah?',
      question: '"The newly appointed director appointed Dr. Evans head of the department."',
      options: [
        { id: 'a', text: 'S + V + O + OC', explanation: 'Tepat! Subject (The director) + Verb (appointed) + Object (Dr. Evans) + Object Complement (head of the department).' },
        { id: 'b', text: 'S + V + O', explanation: 'Kalimat ini memiliki pelengkap objek ("head of the department").' },
        { id: 'c', text: 'S + V + C', explanation: '"appointed" adalah transitive verb dengan direct object Dr. Evans.' },
        { id: 'd', text: 'S + V + IO + DO', explanation: 'Head of department bukan benda yang diberikan kepada Evans, melainkan status/posisi Evans.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Ketika kata benda kedua mendeskripsikan status/peran dari objek langsung, itu adalah Object Complement (OC).',
      points: 10,
    },
    {
      id: 'ex-b02-2',
      lessonId: 'basic-02',
      type: 'fill-blank',
      title: 'Urutan Posisi Keterangan (Word Order)',
      instruction: 'Lengkapi kalimat dengan susunan kata yang tepat.',
      sentence: 'She delivered her presentation [___] at the conference hall yesterday.',
      targets: [
        { index: 0, correctAnswers: ['confidently', 'brilliantly', 'fluently'], hint: 'Ketik Adverb of Manner (contoh: confidently)' },
      ],
      wordBank: ['confidently', 'confident', 'confidence'],
      explanation: 'Urutan standar adverb bahasa Inggris adalah Manner ➔ Place ➔ Time.',
      points: 10,
    },
  ],
  'basic-03': [
    {
      id: 'ex-b03-1',
      lessonId: 'basic-03',
      type: 'multiple-choice',
      title: 'Simple Past vs Present Perfect',
      instruction: 'Pilih bentuk kata kerja yang paling tepat sesuai konteks waktu.',
      question: 'The research team ________ the field surveys last November.',
      options: [
        { id: 'a', text: 'has completed', explanation: 'Salah karena ada penanda waktu lampau spesifik ("last November").' },
        { id: 'b', text: 'completed', explanation: 'Tepat! "last November" adalah waktu lampau definitif, wajib memakai Simple Past (V2).' },
        { id: 'c', text: 'had completed', explanation: 'Past Perfect hanya dipakai jika ada peristiwa lampau lain yang mendahuluinya.' },
        { id: 'd', text: 'is completing', explanation: 'Bukan aktivitas sekarang.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Kata keterangan waktu spesifik masa lalu (yesterday, last month, in 2021) selalu menuntut Simple Past.',
      points: 10,
    },
    {
      id: 'ex-b03-2',
      lessonId: 'basic-03',
      type: 'fill-blank',
      title: 'Present Perfect Signal Words',
      instruction: 'Isi bagian yang kosong dengan kata kerja dalam bentuk Present Perfect.',
      sentence: 'Since the beginning of this semester, the students [___] remarkable progress in English.',
      targets: [
        { index: 0, correctAnswers: ['have made', 'have demonstrated', 'have shown'], hint: 'Gunakan have/has + V3 dari kata "make"' },
      ],
      wordBank: ['have made', 'made', 'has made', 'are making'],
      explanation: 'Frasa "Since..." menandakan durasi waktu dari masa lalu hingga sekarang ➔ Plural Subject "the students" + have made.',
      points: 10,
    },
  ],
  'basic-04': [
    {
      id: 'ex-b04-1',
      lessonId: 'basic-04',
      type: 'multiple-choice',
      title: 'Subject-Verb Agreement dengan Frasa Sisipan',
      instruction: 'Pilih kata kerja bantu yang tepat untuk melengkapi kalimat.',
      question: 'A comprehensive collection of historical manuscripts and original letters ________ preserved in the national archives.',
      options: [
        { id: 'a', text: 'is', explanation: 'Benar! Subjek intinya adalah "A comprehensive collection" (tunggal), bukan kata jamak "manuscripts/letters".' },
        { id: 'b', text: 'are', explanation: 'Salah! Jangan tertipu oleh kata benda jamak di dalam frasa preposisi "of historical manuscripts...".' },
        { id: 'c', text: 'were', explanation: 'Konteks menyatakan kondisi masa kini.' },
        { id: 'd', text: 'have been', explanation: 'Subjek tunggal memerlukan "has been" jika perfect.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Identifikasi selalu Noun Utama sebelum preposisi "of". Subjek inti itulah penentu tunggal/jamak.',
      points: 10,
    },
  ],
};
