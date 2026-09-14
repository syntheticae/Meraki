import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const basicGrammarLessons: Lesson[] = [
  // ─────────────────────────────────────────
  //  basic-01 : Parts of Speech
  // ─────────────────────────────────────────
  {
    id: 'basic-01',
    trackId: 'basic-fundamentals',
    slug: 'parts-of-speech-mastery',
    title: 'Parts of Speech Mastery (8 Unsur Utama Kalimat)',
    order: 1,
    summary: 'Pahami 8 bagian kalimat dalam bahasa Inggris secara mendalam: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, dan Interjection — termasuk jenis-jenis lanjutan masing-masing.',
    readTimeMin: 9,
    difficulty: 'Beginner',
    objectives: [
      'Memahami fungsi 8 Parts of Speech dalam kalimat bahasa Inggris.',
      'Membedakan Countable, Uncountable, dan Collective Nouns.',
      'Mengenali jenis-jenis Pronoun: Personal, Reflexive, Relative, dan Indefinite.',
      'Membedakan Adjective dan Adverb serta penempatannya yang benar.',
    ],
    sections: [
      {
        id: 'sec-1',
        title: '1. Noun & Pronoun (Fondasi Subjek & Objek)',
        badge: 'Fundamental',
        content: `**Noun (Kata Benda)** adalah nama orang, tempat, benda, ide, atau konsep.

**Jenis-jenis Noun:**
- **Countable Nouns** (dapat dihitung): *a book / two books, a student / many students*
- **Uncountable Nouns** (tidak dapat dihitung): *water, music, advice, information, equipment* — TIDAK ada bentuk jamak & selalu pakai singular verb
- **Collective Nouns** (kelompok): *a team, a family, a committee, a staff, a flock* — diperlakukan singular dalam American English, bisa plural dalam British English

**Pronoun (Kata Ganti)** menggantikan Noun:
| Jenis | Contoh | Fungsi |
|------|--------|--------|
| Personal | I/me/my/mine, he/him/his | Subjek & objek |
| Reflexive | myself, yourself, themselves | Merujuk kembali ke subjek |
| Relative | who, which, that, whose | Menghubungkan klausa |
| Indefinite | someone, anything, everyone, nothing | Merujuk tidak spesifik |`,
        examples: [
          {
            sentence: 'The dedicated student submitted her thesis on time.',
            translation: 'Mahasiswa yang berdedikasi mengumpulkan tesisnya tepat waktu.',
            explanation: '"student" = Countable Noun | "thesis" = Countable Noun | "her" = Possessive Pronoun',
            isCorrect: true,
          },
          {
            sentence: 'The team has decided to extend its deadline, and everyone is relieved.',
            translation: 'Tim telah memutuskan untuk memperpanjang tenggat waktu mereka, dan semua orang lega.',
            explanation: '"team" = Collective Noun (singular "has") | "everyone" = Indefinite Pronoun (singular)',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: '[Determiner/Adjective] + NOUN (Subject) + VERB + [NOUN/Pronoun (Object)]',
          explanation: 'Setiap kalimat Bahasa Inggris minimal memiliki Subject (Noun/Pronoun) dan Verb.',
          pitfall: 'Uncountable nouns (information, news, furniture, equipment) TIDAK PERNAH memakai artikel "a/an" atau bentuk jamak: "informations" ❌ → "information" ✅.',
        },
      },
      {
        id: 'sec-2',
        title: '2. Verb & Adverb (Aksi dan Cara Melakukannya)',
        badge: 'Core Engine',
        content: `**Verb (Kata Kerja)** adalah jantung kalimat — menunjukkan aksi, keadaan, atau kepemilikan.
- **Action Verbs**: *write, run, study, conduct*
- **Linking Verbs**: *be, seem, appear, look, sound, become, taste, feel* → diikuti Adjective/Noun (bukan Adverb!)
- **Auxiliary/Modal Verbs**: *can, must, will, have, do* → membantu verba utama

**Adverb (Kata Keterangan)** memodifikasi Verb, Adjective, atau Adverb lain:
- Manner (cara): *carefully, fluently, meticulously*
- Frequency (frekuensi): *always, often, usually, rarely, never*
- Degree (derajat): *very, extremely, quite, rather, fairly*
- Time: *yesterday, today, recently, soon*

**⚠️ Linking Verb + Adjective (bukan Adverb):**
- *She feels **bad**.* ✅ (bukan "badly" — "bad" menerangkan perasaannya, bukan cara merasakan)
- *The soup smells **wonderful**.* ✅`,
        examples: [
          {
            sentence: 'She explained the complex theory clearly and patiently.',
            translation: 'Dia menjelaskan teori yang rumit dengan jelas dan sabar.',
            explanation: '"explained" = Action Verb (Past) | "clearly/patiently" = Adverbs of Manner',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Adjective vs Adverb — Cara Cepat Membedakan',
          text: 'Adjective menerangkan Noun: "a quick learner". Adverb menerangkan Verb/Adjective/Adverb: "learns quickly", "extremely smart", "speaks very clearly".',
        },
      },
      {
        id: 'sec-3',
        title: '3. Adjective, Preposition, Conjunction & Interjection',
        badge: 'Connectors',
        content: `**Adjective (Kata Sifat)** selalu sebelum Noun atau setelah Linking Verb:
- *a **meticulous** researcher | the results are **significant***

**Preposition (Kata Depan)**: in, on, at, by, under, across, between, among, with, without, despite, throughout

**Conjunction (Kata Hubung):**
- Coordinating (FANBOYS): *for, and, nor, but, or, yet, so*
- Subordinating: *because, although, if, when, since, whereas, unless*
- Correlative: *both...and, either...or, neither...nor, not only...but also*

**Interjection**: ungkapan emosi spontan — *Wow! Alas! Oh no! Indeed!*`,
        examples: [
          {
            sentence: 'Although it rained heavily, they arrived at the examination hall on time.',
            translation: 'Meskipun hujan deras, mereka tiba di gedung ujian tepat waktu.',
            explanation: '"Although" = Subordinating Conjunction | "at" = Preposition of place',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Uncountable nouns tidak bisa dijamakkan: information/news/evidence/furniture/equipment.',
      'Collective nouns (team, family) = singular verb dalam American English.',
      'Linking verbs (be, seem, look, feel) diikuti Adjective, BUKAN Adverb.',
      'Adverb of manner (-ly) menerangkan verba, bukan kata benda.',
    ],
    prevLessonId: 'intro-05',
    nextLessonId: 'basic-02',
  },

  // ─────────────────────────────────────────
  //  basic-02 : Sentence Patterns
  // ─────────────────────────────────────────
  {
    id: 'basic-02',
    trackId: 'basic-fundamentals',
    slug: 'sentence-patterns-svo',
    title: '5 Core Sentence Patterns + Compound & Complex Sentences',
    order: 2,
    summary: 'Kuasai 5 pola kalimat dasar (SV, SVO, SVC, SVOO, SVOC), kalimat majemuk (compound) dengan FANBOYS, dan kalimat kompleks (complex) dengan subordinating conjunctions.',
    readTimeMin: 8,
    difficulty: 'Beginner',
    objectives: [
      'Mengenali dan menggunakan 5 pola kalimat dasar bahasa Inggris.',
      'Membedakan Complement dan Object.',
      'Membangun kalimat majemuk (compound) menggunakan FANBOYS.',
      'Membangun kalimat kompleks (complex) menggunakan subordinating conjunctions.',
    ],
    sections: [
      {
        id: 'sec-2-1',
        title: '1. 5 Pola Kalimat Inti',
        content: `1. **S + V** *(Subject + Intransitive Verb)*: *The birds sing. / The conference began.*
2. **S + V + O** *(Subject + Transitive Verb + Direct Object)*: *Researchers conducted an experiment.*
3. **S + V + C** *(Subject + Linking Verb + Subject Complement)*: *The analysis looks accurate.*
4. **S + V + IO + DO** *(+ Indirect Object + Direct Object)*: *The professor gave us feedback.*
5. **S + V + O + OC** *(+ Object + Object Complement)*: *They elected him president.*

**Linking Verbs** (khusus pola S+V+C): be, seem, appear, look, sound, become, feel, taste, smell, remain, stay, grow`,
        examples: [
          {
            sentence: 'The committee found the proposed solution feasible.',
            translation: 'Komite menganggap solusi yang diusulkan layak.',
            explanation: 'S-V-O-OC: The committee (S) + found (V) + the solution (O) + feasible (OC).',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'S + V + (O) + (Modifiers: Manner → Place → Time)',
          explanation: 'Urutan keterangan standar: She spoke clearly (Manner) at the conference (Place) yesterday (Time).',
          pitfall: 'Jangan sisipkan Adverb antara Verb dan Object: "She speaks fluently English" ❌ → "She speaks English fluently" ✅',
        },
      },
      {
        id: 'sec-2-2',
        title: '2. Compound Sentences (Kalimat Majemuk) — FANBOYS',
        badge: 'Compound',
        content: `**Compound sentences** = dua kalimat mandiri dihubungkan dengan **coordinating conjunction (FANBOYS)**.

| Conjunction | Makna | Contoh |
|------------|-------|--------|
| **F**or | sebab (formal) | She rested, *for* she was exhausted. |
| **A**nd | penambahan | He studied hard, *and* he passed the exam. |
| **N**or | negatif ganda | She didn't call, *nor* did she text. |
| **B**ut | kontras | The plan was simple, *but* execution was difficult. |
| **O**r | alternatif | You can study now, *or* you will regret it later. |
| **Y**et | kontras (formal) | It was challenging, *yet* he persevered. |
| **S**o | akibat | The data was inconclusive, *so* the team repeated the test. |

**Aturan Tanda Baca:** Sebelum FANBOYS antara dua kalimat mandiri, WAJIB ada koma!
- *She studied hard, **and** she succeeded.* ✅
- *She studied hard **and** she succeeded.* ❌ (koma wajib ada)`,
        examples: [
          {
            sentence: 'The experiment yielded promising results, yet the researchers remained cautious about drawing premature conclusions.',
            translation: 'Eksperimen menghasilkan hasil yang menjanjikan, namun para peneliti tetap berhati-hati dalam menarik kesimpulan prematur.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-2-3',
        title: '3. Complex Sentences (Kalimat Kompleks) — Subordinating Conjunctions',
        badge: 'Complex',
        content: `**Complex sentences** = kalimat utama (independent clause) + klausa bawahan (dependent clause) dihubungkan dengan **subordinating conjunction**.

**Kategori Subordinating Conjunctions:**
- **Waktu**: when, while, before, after, since, until, as soon as, whenever
- **Sebab**: because, since, as, now that
- **Kontras**: although, even though, whereas, while, despite the fact that
- **Syarat**: if, unless, provided that, as long as
- **Tujuan**: so that, in order that

**Posisi Klausa Bawahan:**
- Di awal → pakai koma: ***Because** it rained, the match was postponed.*
- Di akhir → TIDAK perlu koma: *The match was postponed **because** it rained.*`,
        examples: [
          {
            sentence: 'Although the initial data appeared contradictory, the research team continued their investigation until they identified a consistent pattern.',
            translation: 'Meskipun data awal tampak kontradiktif, tim peneliti melanjutkan penyelidikan mereka hingga menemukan pola yang konsisten.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Compound vs Complex — Perbedaan Kunci',
          text: 'Compound: kedua klausa bisa berdiri sendiri (+ FANBOYS). Complex: salah satu klausa TIDAK bisa berdiri sendiri tanpa klausa lainnya (+ subordinating conjunction).',
        },
      },
    ],
    keyTakeaways: [
      'Linking verbs diikuti Complement (Noun/Adjective), BUKAN Direct Object.',
      'FANBOYS menghubungkan dua kalimat mandiri — selalu pakai koma sebelumnya.',
      'Subordinating conjunctions membuat klausa bawahan yang tidak mandiri.',
      'Klausa bawahan di awal kalimat: pakai koma. Di akhir: tidak perlu koma.',
    ],
    prevLessonId: 'basic-01',
    nextLessonId: 'basic-03',
  },

  // ─────────────────────────────────────────
  //  basic-03 : 16 Tenses
  // ─────────────────────────────────────────
  {
    id: 'basic-03',
    trackId: 'basic-fundamentals',
    slug: 'essential-tenses-simplified',
    title: 'The Essential 16 Tenses (Peta Waktu Lengkap)',
    order: 3,
    summary: 'Pahami semua 16 tenses bahasa Inggris melalui logika 3 dimensi waktu × 4 aspek, tabel lengkap rumus & signal words, serta perbedaan krusial Present Perfect vs Simple Past.',
    readTimeMin: 12,
    difficulty: 'Beginner',
    objectives: [
      'Memahami logika 4 aspek: Simple, Continuous, Perfect, Perfect Continuous.',
      'Menguasai tabel 16 tenses lengkap dengan rumus dan signal words.',
      'Membedakan Present Perfect vs Simple Past dengan benar.',
      'Memahami kapan menggunakan Future tenses yang berbeda.',
    ],
    sections: [
      {
        id: 'sec-3-1',
        title: '1. Logika 4 Aspek Waktu',
        content: `Semua 16 tenses hanyalah kombinasi dari **3 waktu** (Present/Past/Future) × **4 aspek**:

- **Simple**: Fakta umum, kebiasaan, atau peristiwa yang selesai di titik waktu tertentu.
- **Continuous/Progressive**: Aktivitas yang sedang berlangsung pada momen tertentu.
- **Perfect**: Aksi selesai yang masih relevan dengan titik waktu acuan.
- **Perfect Continuous**: Durasi aksi yang berlangsung lama dan berakhir di/sebelum titik acuan.`,
        ruleBox: {
          formula: 'Present: V1/is,am,are | Past: V2/was,were | Future: will+V1 | Perfect: have/has/had+V3',
          explanation: 'Auxiliary verb adalah "tanda pengenal" tenses — identifikasi auxiliary-nya dahulu!',
        },
      },
      {
        id: 'sec-3-2',
        title: '2. Tabel 16 Tenses Lengkap',
        badge: 'Complete Reference',
        content: `| Tenses | Rumus (Positive) | Signal Words | Contoh |
|--------|-----------------|--------------|--------|
| **Simple Present** | V1 / V-s (he/she/it) | always, usually, every day | She **writes** every morning. |
| **Present Continuous** | am/is/are + V-ing | now, at the moment, currently | She **is writing** now. |
| **Present Perfect** | have/has + V3 | already, yet, just, recently, since, for | She **has written** three chapters. |
| **Present Perfect Continuous** | have/has + been + V-ing | for, since, all day, how long | She **has been writing** for two hours. |
| **Simple Past** | V2 (irregular) / V-ed | yesterday, last week, in 2020, ago | She **wrote** a novel last year. |
| **Past Continuous** | was/were + V-ing | while, when (interrupted) | She **was writing** when he called. |
| **Past Perfect** | had + V3 | before, after, already, by the time | She **had written** 10 pages before lunch. |
| **Past Perfect Continuous** | had + been + V-ing | for, since (past reference) | She **had been writing** for hours before she stopped. |
| **Simple Future** | will + V1 | tomorrow, next week, soon | She **will write** the report tomorrow. |
| **Future Continuous** | will + be + V-ing | at this time tomorrow, while | She **will be writing** at 8 PM. |
| **Future Perfect** | will + have + V3 | by (time), before | She **will have written** 200 pages by December. |
| **Future Perfect Continuous** | will + have + been + V-ing | for (by future time) | She **will have been writing** for 10 years by 2030. |`,
      },
      {
        id: 'sec-3-3',
        title: '3. Present Perfect vs Simple Past — Topik Paling Diuji',
        badge: 'Critical Distinction',
        content: `| Aspek | Simple Past | Present Perfect |
|-------|-----------|----------------|
| **Waktu** | Spesifik, sudah selesai | Tidak spesifik ATAU relevan sekarang |
| **Signal words** | yesterday, last year, in 2020, two days ago | already, yet, just, recently, ever, never, since, for, so far |
| **Rumus** | V2 (irregular) / V-ed | have/has + V3 |

**Aturan WAJIB**: Jika ada penanda waktu lampau spesifik → HARUS Simple Past!`,
        examples: [
          {
            sentence: 'Dr. Johnson published his seminal paper in 2018. (Simple Past — waktu spesifik)',
            translation: 'Dr. Johnson menerbitkan makalah pentingnya pada tahun 2018.',
            isCorrect: true,
          },
          {
            sentence: 'Dr. Johnson has published numerous papers throughout his career. (Present Perfect — waktu tidak spesifik)',
            translation: 'Dr. Johnson telah menerbitkan banyak makalah sepanjang kariernya.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'warning',
          title: 'IELTS/TOEFL Trap — Jangan Tertukar!',
          text: '"I have visited Paris **last year**." ❌ → "I **visited** Paris last year." ✅ Penanda waktu spesifik lampau = Simple Past WAJIB.',
        },
      },
      {
        id: 'sec-3-4',
        title: '4. Future Tenses — Kapan Menggunakan yang Mana?',
        badge: 'Future Forms',
        content: `| Bentuk | Digunakan Untuk | Contoh |
|--------|----------------|--------|
| **will + V1** | Keputusan spontan, prediksi umum, janji | I **will help** you. / It **will rain** tomorrow. |
| **be going to + V1** | Rencana yang sudah diputuskan, prediksi berdasarkan bukti | She **is going to** study medicine. / Look at those clouds — it **is going to** rain! |
| **Present Continuous** | Rencana yang sudah diatur pasti | I **am meeting** the client at 3 PM. |
| **Simple Present** | Jadwal resmi/transportasi tetap | The train **leaves** at 9. / The conference **starts** Monday. |`,
        examples: [
          {
            sentence: '"The phone is ringing!" — "I\'ll get it!" (Keputusan spontan → will)',
            translation: '"Teleponnya berdering!" — "Biar aku yang ambil!" (Keputusan spontan)',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Simple Present: fakta umum (Water boils at 100°C) dan rutinitas.',
      'Stative verbs (know, believe, understand, prefer) TIDAK dipakai dalam Continuous.',
      'Penanda waktu lampau spesifik (yesterday/last week/in 2020) → selalu Simple Past.',
      'Present Perfect: aksi di masa lampau yang masih relevan sekarang (already/since/for).',
      '"Will" untuk keputusan spontan; "be going to" untuk rencana yang sudah diputuskan.',
    ],
    prevLessonId: 'basic-02',
    nextLessonId: 'basic-04',
  },

  // ─────────────────────────────────────────
  //  basic-04 : Subject-Verb Agreement
  // ─────────────────────────────────────────
  {
    id: 'basic-04',
    trackId: 'basic-fundamentals',
    slug: 'subject-verb-agreement',
    title: 'Subject-Verb Agreement (Kesesuaian Subjek & Predikat)',
    order: 4,
    summary: 'Kuasai aturan kesesuaian subjek-predikat: frasa pengapit, indefinite pronouns, correlative conjunctions, collective nouns, dan uncountable nouns yang tampak jamak.',
    readTimeMin: 8,
    difficulty: 'Beginner',
    objectives: [
      'Mengabaikan frasa pengapit untuk menemukan subjek inti.',
      'Menerapkan aturan Either...or / Neither...nor dengan benar.',
      'Mengetahui Uncountable Nouns yang tampak jamak tapi selalu singular.',
      'Memahami perbedaan British vs American English untuk Collective Nouns.',
    ],
    sections: [
      {
        id: 'sec-4-1',
        title: '1. Abaikan Frasa Pengapit (Intervening Phrases)',
        content: `Subjek sering dipisahkan dari Verb oleh frasa preposisi atau frasa tambahan. Jangan biarkan kata benda di dalam frasa pengapit mengecohmu!

**Frasa pengapit umum yang tidak mempengaruhi subjek:**
*together with, along with, as well as, in addition to, accompanied by, of*`,
        examples: [
          {
            sentence: 'The quality of these experimental samples **is** exceptional.',
            translation: 'Kualitas sampel eksperimen ini luar biasa.',
            explanation: 'Subjek inti: "The quality" (singular) → is. "samples" ada dalam frasa "of these..." — diabaikan!',
            isCorrect: true,
          },
          {
            sentence: 'The professor, along with her research assistants, **is** attending the symposium.',
            translation: 'Sang profesor, bersama para asisten risetnya, menghadiri simposium.',
            explanation: '"along with her assistants" = frasa pengapit. Subjek inti: "The professor" = singular.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Neither A **nor** B / Either A **or** B → Verb mengikuti B (subjek terdekat)',
          explanation: '"Neither the manager **nor** the employees **were** aware." (employees = plural → were)',
          pitfall: '"Neither A nor B" paling membingungkan. Kunci: cari subjek TERDEKAT dengan verb.',
        },
      },
      {
        id: 'sec-4-2',
        title: '2. Indefinite Pronouns & Correlative Conjunctions',
        badge: 'Tricky Rules',
        content: `**Indefinite Pronouns yang SELALU SINGULAR:**
everyone, everybody, everything, someone, somebody, something, anyone, anybody, anything, no one, nobody, nothing, each, either, neither, one

**Indefinite Pronouns yang SELALU PLURAL:**
both, few, many, others, several

**Indefinite Pronouns SINGULAR atau PLURAL** (tergantung noun setelahnya):
all, any, most, none, some

**Correlative Conjunctions — Aturan "Proximity" (kedekatan):**
- Both...and → SELALU plural: *Both the CEO and the board **are** present.*
- Either...or / Neither...nor → ikuti subjek terdekat: *Either the students or the teacher **is** responsible.*
- Not only...but also → ikuti subjek terdekat: *Not only the team but also the manager **was** informed.*`,
        examples: [
          {
            sentence: 'Everyone in both departments **is** required to attend the compliance training.',
            translation: 'Setiap orang di kedua departemen diwajibkan menghadiri pelatihan kepatuhan.',
            explanation: '"Everyone" = Indefinite Pronoun → selalu singular. "both departments" = frasa keterangan, bukan subjek.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-4-3',
        title: '3. Collective Nouns & "Fake Plural" Nouns',
        badge: 'Special Cases',
        content: `**Collective Nouns** (kata benda kolektif):
- American English: selalu singular → *The team **is** confident.*
- British English: bisa singular atau plural → *The team **are** confident.*

**Nouns yang tampak jamak tapi SELALU SINGULAR** (mata pelajaran, penyakit, konsep):
*mathematics, physics, economics, statistics, news, athletics, the United States, the Philippines*
→ *Mathematics **is** my favorite subject. / The news **is** alarming.*

**Nouns yang tampak singular tapi SELALU PLURAL:**
*scissors, trousers, glasses, pliers, tongs, headphones*
→ *The scissors **are** on the table.*`,
        examples: [
          {
            sentence: 'The United States **has** the world\'s largest economy, and economics **is** my major.',
            translation: 'Amerika Serikat memiliki ekonomi terbesar di dunia, dan ekonomi adalah jurusan saya.',
            explanation: '"The United States" = singular (nama negara) | "economics" = mata pelajaran = singular.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'exam-tip',
          title: 'IELTS/TOEFL Favorite — "News" adalah Singular!',
          text: '"The news are shocking." ❌ → "The news **is** shocking." ✅ "News" selalu digunakan sebagai Uncountable Noun (singular).',
        },
      },
    ],
    keyTakeaways: [
      'Everyone/each/neither/either = SELALU singular.',
      'Both A and B = SELALU plural.',
      'Either A or B / Neither A nor B → ikuti subjek yang paling dekat dengan verb.',
      '"News, mathematics, physics, economics" = selalu singular.',
      '"Scissors, trousers, glasses" = selalu plural.',
    ],
    prevLessonId: 'basic-03',
    nextLessonId: 'basic-05',
  },

  // ─────────────────────────────────────────
  //  basic-05 : Articles
  // ─────────────────────────────────────────
  {
    id: 'basic-05',
    trackId: 'basic-fundamentals',
    slug: 'articles-a-an-the-zero',
    title: 'Articles: A, An, The & Zero Article',
    order: 5,
    summary: 'Kuasai penggunaan artikel A/An (indefinite), The (definite), dan Zero Article — termasuk jebakan "a vs an" berdasarkan bunyi vokal bukan ejaan, dan kesalahan umum penutur Indonesia.',
    readTimeMin: 8,
    difficulty: 'Beginner',
    objectives: [
      'Menggunakan A vs An berdasarkan bunyi pertama, bukan huruf pertama.',
      'Memahami kapan menggunakan artikel The (definite).',
      'Mengenali situasi Zero Article (tanpa artikel).',
      'Menghindari kesalahan artikel yang paling sering dibuat penutur Indonesia.',
    ],
    sections: [
      {
        id: 'sec-5-1',
        title: '1. A vs An — Berdasarkan BUNYI, Bukan Ejaan!',
        badge: 'Common Mistake',
        content: `**Aturan:** Gunakan **"a"** sebelum bunyi konsonan, **"an"** sebelum bunyi vokal.

⚠️ Yang penting adalah **BUNYI PERTAMA**, bukan huruf pertama!

| Kata | Artikel | Alasan |
|------|---------|--------|
| university | **a** university | Bunyi /j/ (konsonan) — "yoo-ni-ver-si-ty" |
| hour | **an** hour | Bunyi /aʊ/ (vokal) — H-nya diam! |
| European | **a** European | Bunyi /j/ (konsonan) — "yoo-ro-pi-an" |
| honest | **an** honest | Bunyi /ɒ/ (vokal) — H-nya diam! |
| MBA | **an** MBA | Bunyi /em/ (vokal) — M dibaca "em" |
| useful | **a** useful | Bunyi /j/ (konsonan) — "yoos-ful" |
| 80-year-old | **an** 80-year-old | Bunyi /eɪ/ (vokal) — "eighty" |`,
        examples: [
          {
            sentence: 'She is an honest and humble person who earned an MBA from a well-known European university.',
            translation: 'Dia adalah orang yang jujur dan rendah hati yang mendapatkan gelar MBA dari universitas Eropa terkemuka.',
            explanation: 'an honest (H diam) | an MBA (M berbunyi "em") | a European (bunyi "yoo-") | a...university (bunyi "yoo-")',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'warning',
          title: '"A University" — BUKAN "An University"!',
          text: '"University" dimulai dengan bunyi /j/ seperti "you" — meskipun dimulai huruf vokal "U". Selalu gunakan "a university", "a unique idea", "a useful tool".',
        },
      },
      {
        id: 'sec-5-2',
        title: '2. The (Definite Article) — Kapan Menggunakannya?',
        badge: 'Definite',
        content: `Gunakan **"the"** ketika pembicara dan pendengar sama-sama tahu benda yang dimaksud:

1. **Sudah disebutkan sebelumnya**: *I saw a dog. **The dog** was barking loudly.*
2. **Unik di dunia**: ***the** sun, **the** moon, **the** earth, **the** president (of a specific country)*
3. **Superlative**: ***the** most important, **the** largest, **the** best*
4. **Ordinal (first, second)**: ***the** first chapter, **the** second attempt*
5. **Nama geografis tertentu**: ***the** Pacific Ocean, **the** Nile, **the** Amazon, **the** Alps*
6. **Sesuatu yang spesifik dalam konteks**: *Could you open **the** window?*

**Jangan** gunakan "the" dengan:
- Proper nouns (nama orang/kota): ~~the~~ Indonesia, ~~the~~ Dr. Smith
- Bahasa: ~~the~~ English, ~~the~~ Japanese
- Mata pelajaran: ~~the~~ mathematics, ~~the~~ history`,
        examples: [
          {
            sentence: 'The moon orbits the Earth, and the Pacific Ocean is the largest ocean in the world.',
            translation: 'Bulan mengelilingi Bumi, dan Samudra Pasifik adalah samudra terbesar di dunia.',
            explanation: 'the moon/Earth = benda unik | the Pacific Ocean = nama geografis | the largest = superlative.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-5-3',
        title: '3. Zero Article (Tanpa Artikel)',
        badge: 'Zero Article',
        content: `Gunakan **tanpa artikel** (Zero Article Ø) dalam situasi berikut:

1. **Noun plural untuk generalisasi**: *Ø Dogs are loyal. / Ø Scientists work meticulously.*
2. **Noun uncountable untuk generalisasi**: *Ø Love is powerful. / Ø Water is essential.*
3. **Nama orang**: *Ø Dr. Chen, Ø President Obama*
4. **Nama kota/negara/benua**: *Ø Jakarta, Ø Indonesia, Ø Asia*
5. **Bahasa**: *I speak Ø English and Ø French.*
6. **Mata pelajaran**: *She studies Ø physics and Ø economics.*
7. **Meals**: *We had Ø breakfast at 7. / Ø Lunch is ready.*
8. **Transportasi & waktu**: *by Ø car, at Ø noon, on Ø Friday*`,
        examples: [
          {
            sentence: 'Ø Honesty is the best policy — something that Ø children should learn early.',
            translation: 'Kejujuran adalah kebijakan terbaik — sesuatu yang anak-anak harus pelajari sejak dini.',
            explanation: 'Ø Honesty = abstract noun generalisasi | the best policy = superlative | Ø children = plural noun generalisasi.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Kesalahan Paling Umum Penutur Indonesia',
          text: 'Karena bahasa Indonesia tidak memiliki artikel, penutur Indonesia sering menghilangkan artikel atau memakai yang salah. Ingat: dalam konteks spesifik/sudah diketahui → the. Konteks baru → a/an. Generalisasi → Zero Article.',
        },
      },
    ],
    keyTakeaways: [
      'A vs An: berdasarkan BUNYI pertama, bukan huruf pertama (a university, an hour).',
      '"The" untuk hal yang spesifik, sudah diketahui, unik, atau superlative.',
      'Zero Article untuk generalisasi (Dogs are loyal), nama tempat, dan mata pelajaran.',
      'Bahasa Indonesia tidak punya artikel → penutur Indonesia harus extra hati-hati!',
    ],
    prevLessonId: 'basic-04',
    nextLessonId: 'basic-06',
  },

  // ─────────────────────────────────────────
  //  basic-06 : Modal Verbs
  // ─────────────────────────────────────────
  {
    id: 'basic-06',
    trackId: 'basic-fundamentals',
    slug: 'modal-verbs-complete-guide',
    title: 'Modal Verbs: Can, Could, May, Might, Must, Should, Would',
    order: 6,
    summary: 'Kuasai semua modal verb beserta nuansa maknanya: kemampuan, izin, kewajiban, kemungkinan, dan past modals (should have / could have / must have).',
    readTimeMin: 10,
    difficulty: 'Beginner',
    objectives: [
      'Menggunakan can/could/be able to untuk kemampuan.',
      'Membedakan may/might/must untuk izin, kemungkinan, dan kewajiban.',
      'Menggunakan should/ought to untuk saran.',
      'Menguasai past modals: should have, could have, must have, might have.',
    ],
    sections: [
      {
        id: 'sec-6-1',
        title: '1. Ability — Can / Could / Be Able To',
        badge: 'Ability',
        content: `| Modal | Waktu | Contoh |
|-------|-------|--------|
| **can** | Present ability | She **can** speak three languages. |
| **could** | Past ability | He **could** run 10km when he was younger. |
| **could** | Polite request | **Could** you help me with this? |
| **be able to** | Semua tenses | She **will be able to** attend next week. / He **was able to** solve it. |

**Perbedaan "could" vs "was/were able to" (past):**
- "Could" = kemampuan umum di masa lalu: *I could swim when I was five.*
- "Was/were able to" = berhasil melakukan sesuatu yang spesifik: *He was able to finish the project before the deadline.* (= succeeded)`,
        examples: [
          {
            sentence: 'Although she couldn\'t speak English fluently at first, she was able to deliver a confident presentation by the end of the program.',
            translation: 'Meskipun awalnya tidak bisa berbicara bahasa Inggris dengan lancar, dia berhasil menyampaikan presentasi yang percaya diri pada akhir program.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-6-2',
        title: '2. Permission & Request — May / Can / Could',
        badge: 'Permission',
        content: `| Modal | Register | Contoh |
|-------|----------|--------|
| **may** | Formal | **May** I leave early? / You **may** use the lab. |
| **can** | Informal | **Can** I borrow your pen? |
| **could** | Polite | **Could** I ask you something? |

**Gradasi Formalitas (dari paling formal):**
*May I...? > Could I...? > Can I...?*

**Giving & Refusing Permission:**
- Grant: *Yes, you **may/can**. / Of course, please do.*
- Refuse: *No, you **may not/cannot**. / I'm afraid not.*`,
        examples: [
          {
            sentence: '"May I submit the assignment a day late?" — "Yes, you may, but it must be submitted before midnight."',
            translation: '"Bolehkah saya mengumpulkan tugas sehari terlambat?" — "Boleh, tapi harus dikumpulkan sebelum tengah malam."',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-6-3',
        title: '3. Obligation, Necessity & Advice',
        badge: 'Obligation',
        content: `| Modal | Kekuatan | Makna | Contoh |
|-------|---------|-------|--------|
| **must** | Sangat kuat | Kewajiban mutlak (dari pembicara) | You **must** wear a seatbelt. |
| **have to** | Kuat | Kewajiban eksternal (aturan/kondisi) | I **have to** submit the form today. |
| **should** | Sedang | Saran/rekomendasi | You **should** see a doctor. |
| **ought to** | Sedang (formal) | Kewajiban moral | We **ought to** help those in need. |
| **don't have to** | — | Tidak wajib (bukan larangan!) | You **don't have to** come if you're busy. |
| **must not** | Sangat kuat | LARANGAN | You **must not** smoke in here. |

**Perbedaan krusial:** "Don't have to" ≠ "Must not"
- *You **don't have to** go.* = Kamu tidak wajib pergi, itu pilihanmu.
- *You **must not** go.* = Kamu DILARANG pergi.`,
        examples: [
          {
            sentence: 'You must submit the application by Friday; you should also include your portfolio, but you don\'t have to provide references yet.',
            translation: 'Kamu harus mengumpulkan lamaran sebelum Jumat; kamu juga sebaiknya menyertakan portofoliomu, tapi kamu tidak wajib menyertakan referensi dulu.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-6-4',
        title: '4. Possibility & Deduction — May / Might / Must / Can\'t',
        badge: 'Deduction',
        content: `| Modal | Certainty | Contoh |
|-------|----------|--------|
| **must** | Hampir pasti (logis) | She **must be** tired — she worked 12 hours. |
| **can't / cannot** | Pasti tidak mungkin | That **can't be** true! |
| **may** | Mungkin (~50%) | He **may be** in the library. |
| **might** | Mungkin (~30%) | It **might** rain this afternoon. |
| **could** | Kemungkinan kecil | It **could** be a technical error. |`,
        examples: [
          { sentence: 'The door is locked. She must have already left.', translation: 'Pintu terkunci. Dia pasti sudah pergi.', isCorrect: true },
        ],
      },
      {
        id: 'sec-6-5',
        title: '5. Past Modals — Modal + Have + V3',
        badge: 'Past Modals',
        content: `Past modals menyatakan kemungkinan, penyesalan, atau kritik tentang situasi di masa lalu.

| Past Modal | Makna | Contoh |
|-----------|-------|--------|
| **should have + V3** | Penyesalan/kritik (harusnya dilakukan tapi tidak) | You **should have studied** harder. |
| **shouldn't have + V3** | Penyesalan (seharusnya tidak dilakukan) | I **shouldn't have eaten** so much. |
| **could have + V3** | Kemungkinan yang tidak terwujud | She **could have won** if she had tried harder. |
| **must have + V3** | Deduction kuat tentang masa lalu | He **must have forgotten** the meeting. |
| **might have + V3** | Kemungkinan lemah di masa lalu | They **might have misunderstood** the instructions. |
| **can't have + V3** | Deduction negatif kuat | She **can't have known** about the plan. |`,
        examples: [
          {
            sentence: 'You should have told me earlier. If you had, I could have helped. He must have known something was wrong.',
            translation: 'Kamu harusnya memberitahu saya lebih awal. Kalau saja kamu melakukannya, saya bisa saja membantu. Dia pasti sudah tahu ada yang salah.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'exam-tip',
          title: 'Past Modals — Sering Diuji di IELTS/TOEFL',
          text: '"Should have" (penyesalan), "must have" (deduction pasti), "might have" (deduction tidak pasti), "could have" (kemungkinan yang tidak terwujud) — pahami nuansa ini untuk menjawab pertanyaan inferensi.',
        },
      },
    ],
    keyTakeaways: [
      'Can = kemampuan present | Could = past ability atau permintaan sopan.',
      '"Don\'t have to" (tidak wajib) ≠ "Must not" (dilarang).',
      'Deduction: must be (pasti) → may/might be (~50/30%) → can\'t be (mustahil).',
      'Past modals (should have/must have/could have) + V3 untuk situasi masa lalu.',
    ],
    prevLessonId: 'basic-05',
    nextLessonId: 'inter-01',
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
        { id: 'a', text: 'Adjective (Kata Sifat)', explanation: 'Kurang tepat. Adjective menerangkan kata benda, bukan kata sifat.' },
        { id: 'b', text: 'Adverb (Kata Keterangan)', explanation: 'Tepat! "Extraordinarily" berakhiran -ly dan menerangkan adjective "thorough".' },
        { id: 'c', text: 'Verb (Kata Kerja)', explanation: 'Kata kerja dalam kalimat ini adalah "conducted".' },
        { id: 'd', text: 'Noun (Kata Benda)', explanation: 'Kata bendanya adalah "investigation" dan "scientist".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Kata berakhiran "-ly" yang menerangkan adjective atau verba adalah Adverb.',
      points: 10,
    },
    {
      id: 'ex-b01-2',
      lessonId: 'basic-01',
      type: 'fill-blank',
      title: 'Countable vs Uncountable Noun',
      instruction: 'Pilih kata yang tepat untuk melengkapi kalimat berikut.',
      sentence: 'The team received some useful [___] from the senior consultant.',
      targets: [
        { index: 0, correctAnswers: ['advice', 'feedback', 'guidance'], hint: 'Pilih Uncountable Noun yang tepat (tidak bisa dijamakkan)' },
      ],
      wordBank: ['advice', 'advices', 'feedbacks', 'feedback'],
      explanation: '"Advice" adalah Uncountable Noun — tidak pernah dijamakkan menjadi "advices". "Feedback" juga Uncountable.',
      points: 10,
    },
    {
      id: 'ex-b01-3',
      lessonId: 'basic-01',
      type: 'matching',
      title: 'Pasangkan Jenis Pronoun',
      instruction: 'Hubungkan jenis pronoun di kiri dengan contoh kata di kanan.',
      pairs: [
        { id: 'm1', left: 'Personal Pronoun (Subjek)', right: 'I, he, she, they, we' },
        { id: 'm2', left: 'Reflexive Pronoun', right: 'myself, herself, themselves' },
        { id: 'm3', left: 'Relative Pronoun', right: 'who, which, that, whose' },
        { id: 'm4', left: 'Indefinite Pronoun', right: 'someone, anyone, nothing' },
      ],
      explanation: 'Memahami jenis pronoun penting untuk membaca teks akademis dan memilih referensi yang tepat.',
      points: 15,
    },
    {
      id: 'ex-b01-4',
      lessonId: 'basic-01',
      type: 'multiple-choice',
      title: 'Linking Verb + Adjective atau Adverb?',
      instruction: 'Pilih kata yang tepat untuk melengkapi kalimat dengan linking verb.',
      question: 'After the long journey, the travelers felt ________.',
      options: [
        { id: 'a', text: 'exhaustedly', explanation: 'Salah! Setelah linking verb "felt", pakai Adjective, bukan Adverb.' },
        { id: 'b', text: 'exhausted', explanation: 'Tepat! "Felt" adalah linking verb → diikuti Adjective "exhausted".' },
        { id: 'c', text: 'exhaustion', explanation: 'Noun tidak tepat di sini sebagai subject complement.' },
        { id: 'd', text: 'to exhaust', explanation: 'Infinitive tidak digunakan setelah linking verb dalam konteks ini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Linking verbs (feel, look, seem, sound, taste, smell, become) diikuti Adjective, BUKAN Adverb.',
      points: 10,
    },
    {
      id: 'ex-b01-5',
      lessonId: 'basic-01',
      type: 'shadowing',
      title: 'Shadowing: Kalimat Akademis',
      instruction: 'Dengarkan dan tirukan kalimat berikut dengan intonasi dan ritme yang tepat.',
      textToShadow: 'Careful observation and rigorous analysis are the hallmarks of sound academic research.',
      ipaPhonetic: '/ˈkeəfʊl ˌɒbzəˈveɪʃən ænd ˈrɪɡərəs əˈnæləsɪs ɑː ðə ˈhɔːlmɑːks ɒv saʊnd ˌækəˈdɛmɪk rɪˈsɜːtʃ/',
      translation: 'Pengamatan yang cermat dan analisis yang teliti adalah ciri khas penelitian akademis yang kredibel.',
      keyIntonationPoints: [
        'Tekanan pada kata kunci: "careful", "rigorous", "hallmarks", "sound".',
        'Jeda setelah "analysis" sebelum "are".',
        'Intonasi turun di akhir kalimat pernyataan.',
      ],
      tips: 'Perhatikan "analysis" /əˈnæləsɪs/ — tekanan pada suku kata kedua, bukan pertama!',
      points: 15,
    },
  ],
  'basic-02': [
    {
      id: 'ex-b02-1',
      lessonId: 'basic-02',
      type: 'multiple-choice',
      title: 'Identifikasi Pola Kalimat',
      instruction: 'Pola kalimat manakah yang digunakan?',
      question: '"The newly appointed director appointed Dr. Evans head of the department."',
      options: [
        { id: 'a', text: 'S + V + O + OC', explanation: 'Tepat! S(director) + V(appointed) + O(Dr. Evans) + OC(head of the department).' },
        { id: 'b', text: 'S + V + O', explanation: 'Ada pelengkap objek — kalimat tidak berakhir setelah "Dr. Evans".' },
        { id: 'c', text: 'S + V + C', explanation: '"appointed" adalah transitive verb dengan direct object.' },
        { id: 'd', text: 'S + V + IO + DO', explanation: '"Head of department" bukan benda yang diberikan kepada Evans.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Object Complement (OC) mendeskripsikan status/peran objek langsung.',
      points: 10,
    },
    {
      id: 'ex-b02-2',
      lessonId: 'basic-02',
      type: 'fill-blank',
      title: 'FANBOYS — Pilih Conjunction yang Tepat',
      instruction: 'Pilih coordinating conjunction yang paling tepat untuk melengkapi kalimat.',
      sentence: 'The initial results were promising, [___] the team decided to expand the scope of the research.',
      targets: [
        { index: 0, correctAnswers: ['so', 'and'], hint: 'Kata hubung yang menunjukkan akibat (consequence)' },
      ],
      wordBank: ['but', 'so', 'yet', 'for'],
      explanation: '"So" menghubungkan sebab (hasil menjanjikan) dengan akibat (memutuskan memperluas penelitian). "And" juga bisa, tapi "so" lebih tepat karena ada hubungan kausal.',
      points: 10,
    },
    {
      id: 'ex-b02-3',
      lessonId: 'basic-02',
      type: 'multiple-choice',
      title: 'Complex Sentence — Subordinating Conjunction',
      instruction: 'Pilih subordinating conjunction yang paling tepat.',
      question: '________ the funding was limited, the researchers managed to produce groundbreaking results.',
      options: [
        { id: 'a', text: 'Although', explanation: 'Tepat! "Although" menunjukkan kontras — keterbatasan dana vs hasil luar biasa.' },
        { id: 'b', text: 'Because', explanation: '"Because" menunjukkan sebab-akibat, bukan kontras.' },
        { id: 'c', text: 'Since', explanation: '"Since" bisa kausal atau waktu, tapi tidak ideal untuk kontras di sini.' },
        { id: 'd', text: 'So that', explanation: '"So that" untuk tujuan, bukan kontras.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Although/Even though/Despite the fact that = kontras. Because/Since/As = sebab. So that/In order that = tujuan.',
      points: 10,
    },
    {
      id: 'ex-b02-4',
      lessonId: 'basic-02',
      type: 'fill-blank',
      title: 'Urutan Posisi Adverb',
      instruction: 'Susun frasa keterangan dalam urutan yang benar.',
      sentence: 'She delivered her presentation [___] at the conference hall yesterday.',
      targets: [
        { index: 0, correctAnswers: ['confidently', 'brilliantly', 'fluently', 'effectively'], hint: 'Adverb of Manner (cara) datang sebelum Place dan Time' },
      ],
      wordBank: ['confidently', 'confident', 'confidence'],
      explanation: 'Urutan standar keterangan: Manner (confidently) → Place (at the conference hall) → Time (yesterday).',
      points: 10,
    },
  ],
  'basic-03': [
    {
      id: 'ex-b03-1',
      lessonId: 'basic-03',
      type: 'multiple-choice',
      title: 'Simple Past vs Present Perfect',
      instruction: 'Pilih bentuk kata kerja yang paling tepat.',
      question: 'The research team ________ the field surveys last November.',
      options: [
        { id: 'a', text: 'has completed', explanation: 'Salah — ada penanda waktu lampau spesifik "last November".' },
        { id: 'b', text: 'completed', explanation: 'Tepat! "last November" = waktu lampau definitif → Simple Past.' },
        { id: 'c', text: 'had completed', explanation: 'Past Perfect hanya untuk peristiwa lampau yang mendahului peristiwa lampau lainnya.' },
        { id: 'd', text: 'is completing', explanation: 'Bukan aktivitas yang sedang berlangsung.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Penanda waktu lampau spesifik (yesterday, last month, in 2021, two years ago) → SELALU Simple Past.',
      points: 10,
    },
    {
      id: 'ex-b03-2',
      lessonId: 'basic-03',
      type: 'fill-blank',
      title: 'Present Perfect Signal Words',
      instruction: 'Isi bagian kosong dengan kata kerja dalam Present Perfect yang tepat.',
      sentence: 'Since the beginning of this semester, the students [___] remarkable progress in their English proficiency.',
      targets: [
        { index: 0, correctAnswers: ['have made', 'have demonstrated', 'have shown', 'have achieved'], hint: 'have/has + V3 | "Since" → Present Perfect' },
      ],
      wordBank: ['have made', 'made', 'has made', 'are making'],
      explanation: '"Since the beginning" = signal word Present Perfect | "the students" = plural → have made.',
      points: 10,
    },
    {
      id: 'ex-b03-3',
      lessonId: 'basic-03',
      type: 'matching',
      title: 'Pasangkan Tenses dengan Signal Words-nya',
      instruction: 'Hubungkan tenses di kiri dengan signal words yang paling tepat di kanan.',
      pairs: [
        { id: 'ts1', left: 'Simple Past', right: 'yesterday, last week, in 2015, two years ago' },
        { id: 'ts2', left: 'Present Perfect', right: 'already, yet, just, recently, so far, since' },
        { id: 'ts3', left: 'Past Continuous', right: 'while, when (+ Simple Past)' },
        { id: 'ts4', left: 'Simple Future', right: 'tomorrow, next year, soon, in the future' },
      ],
      explanation: 'Signal words adalah petunjuk tercepat untuk mengidentifikasi tenses yang diperlukan.',
      points: 15,
    },
    {
      id: 'ex-b03-4',
      lessonId: 'basic-03',
      type: 'multiple-choice',
      title: 'Future Tense — Will vs Be Going To',
      instruction: 'Pilih bentuk future yang paling tepat.',
      question: 'Look at those dark clouds! It ________ rain very soon.',
      options: [
        { id: 'a', text: 'will', explanation: '"Will" untuk prediksi umum atau keputusan spontan — bukan berdasarkan bukti nyata.' },
        { id: 'b', text: 'is going to', explanation: 'Tepat! "Is going to" untuk prediksi yang didasarkan pada bukti nyata (awan gelap = bukti visual).' },
        { id: 'c', text: 'is raining', explanation: 'Present continuous tidak digunakan untuk prediksi cuaca berdasarkan bukti.' },
        { id: 'd', text: 'shall', explanation: '"Shall" sangat formal dan jarang digunakan dalam konteks modern ini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: '"Be going to" = prediksi berdasarkan bukti langsung. "Will" = prediksi umum/keputusan spontan.',
      points: 10,
    },
    {
      id: 'ex-b03-5',
      lessonId: 'basic-03',
      type: 'fill-blank',
      title: 'Past Perfect vs Simple Past',
      instruction: 'Lengkapi kalimat dengan tenses yang tepat.',
      sentence: 'By the time the professor arrived, all the students [___] already submitted their assignments.',
      targets: [
        { index: 0, correctAnswers: ['had', 'had already'], hint: '"By the time..." + Simple Past → sebelumnya = Past Perfect' },
      ],
      wordBank: ['had', 'have', 'has', 'were'],
      explanation: '"By the time" menandai bahwa satu tindakan (submit) selesai SEBELUM tindakan lain (professor arrived). Urutan: had submitted (lebih dulu) → arrived (setelahnya).',
      points: 10,
    },
  ],
  'basic-04': [
    {
      id: 'ex-b04-1',
      lessonId: 'basic-04',
      type: 'multiple-choice',
      title: 'Subject-Verb Agreement — Frasa Sisipan',
      instruction: 'Pilih kata kerja yang tepat.',
      question: 'A comprehensive collection of historical manuscripts and original letters ________ preserved in the national archives.',
      options: [
        { id: 'a', text: 'is', explanation: 'Benar! Subjek inti: "A comprehensive collection" (singular) → is.' },
        { id: 'b', text: 'are', explanation: 'Salah — "manuscripts" dan "letters" ada dalam frasa "of..." yang mengikuti subjek inti.' },
        { id: 'c', text: 'were', explanation: 'Konteks menyatakan kondisi masa kini.' },
        { id: 'd', text: 'have been', explanation: 'Subjek singular memerlukan "has been".' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Identifikasi Noun utama SEBELUM preposisi "of". Itulah penentu singular/plural verb.',
      points: 10,
    },
    {
      id: 'ex-b04-2',
      lessonId: 'basic-04',
      type: 'multiple-choice',
      title: 'Either...Or / Neither...Nor',
      instruction: 'Pilih kata kerja yang tepat.',
      question: 'Neither the team leader nor the individual members ________ satisfied with the outcome.',
      options: [
        { id: 'a', text: 'was', explanation: 'Salah — dalam "neither...nor", verb mengikuti subjek terdekat: "individual members" (plural).' },
        { id: 'b', text: 'were', explanation: 'Benar! "members" = plural, dan merupakan subjek terdekat dengan verb. → were.' },
        { id: 'c', text: 'is', explanation: 'Singular — tidak sesuai dengan "members" (plural).' },
        { id: 'd', text: 'are', explanation: 'Present tense — konteks membahas satu peristiwa spesifik di masa lampau.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Neither A nor B / Either A or B → verb mengikuti B (subjek terdekat dengan verb).',
      points: 10,
    },
    {
      id: 'ex-b04-3',
      lessonId: 'basic-04',
      type: 'matching',
      title: 'Nouns — Singular atau Plural Verb?',
      instruction: 'Pasangkan noun dengan kata kerja yang tepat (is/are).',
      pairs: [
        { id: 'sv1', left: 'The news about the elections', right: 'is (uncountable → singular)' },
        { id: 'sv2', left: 'The scissors on the table', right: 'are (always plural)' },
        { id: 'sv3', left: 'Mathematics in this curriculum', right: 'is (subject → singular)' },
        { id: 'sv4', left: 'Both the proposal and the report', right: 'are (both...and → plural)' },
      ],
      explanation: 'News, mathematics, physics = singular. Scissors, trousers, glasses = plural. Both A and B = plural.',
      points: 15,
    },
    {
      id: 'ex-b04-4',
      lessonId: 'basic-04',
      type: 'fill-blank',
      title: 'Indefinite Pronoun Agreement',
      instruction: 'Isi bagian kosong dengan kata kerja yang tepat.',
      sentence: 'Everyone in the research group [___] expected to contribute at least one original idea to the discussion.',
      targets: [
        { index: 0, correctAnswers: ['is'], hint: '"Everyone" = Indefinite Pronoun → selalu singular → is' },
      ],
      wordBank: ['is', 'are', 'were', 'have'],
      explanation: '"Everyone" selalu dihitung sebagai singular, meskipun merujuk pada banyak orang.',
      points: 10,
    },
  ],
  'basic-05': [
    {
      id: 'ex-b05-1',
      lessonId: 'basic-05',
      type: 'multiple-choice',
      title: 'A vs An — Berdasarkan Bunyi',
      instruction: 'Pilih artikel yang benar.',
      question: 'She received ________ unexpected offer to join ________ European research institute.',
      options: [
        { id: 'a', text: 'an / a', explanation: 'Benar! "an unexpected" (bunyi vokal /ʌ/) | "a European" (bunyi konsonan /j/).' },
        { id: 'b', text: 'a / a', explanation: '"unexpected" dimulai bunyi vokal /ʌ/ → perlu "an".' },
        { id: 'c', text: 'an / an', explanation: '"European" dimulai bunyi konsonan /j/ seperti "you" → perlu "a".' },
        { id: 'd', text: 'a / an', explanation: 'Keduanya terbalik.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'A vs An berdasarkan BUNYI: unexpected /ʌ/ = vokal → an | European /j/ = konsonan → a.',
      points: 10,
    },
    {
      id: 'ex-b05-2',
      lessonId: 'basic-05',
      type: 'fill-blank',
      title: 'A, An, The, atau Zero Article?',
      instruction: 'Isi dengan artikel yang tepat (tulis "0" jika tidak perlu artikel).',
      sentence: '[___] honesty is [___] best policy — it is [___] fundamental principle of [___] ethics.',
      targets: [
        { index: 0, correctAnswers: ['0', 'Ø', '-', ''], hint: 'Abstract noun dalam generalisasi = Zero Article' },
        { index: 1, correctAnswers: ['the'], hint: 'Superlative "best" → the' },
        { index: 2, correctAnswers: ['a'], hint: 'Baru disebutkan, satu dari banyak → a' },
        { index: 3, correctAnswers: ['0', 'Ø', '-', ''], hint: 'Mata pelajaran/bidang studi = Zero Article' },
      ],
      wordBank: ['a', 'an', 'the', '0'],
      explanation: 'Honesty (abstract, generalisasi) → 0 | the best (superlative) → the | a fundamental (first mention) → a | 0 ethics (bidang studi) → 0.',
      points: 15,
    },
    {
      id: 'ex-b05-3',
      lessonId: 'basic-05',
      type: 'matching',
      title: 'Aturan Penggunaan "The"',
      instruction: 'Pasangkan kalimat dengan aturan "the" yang berlaku.',
      pairs: [
        { id: 'art1', left: 'The sun rises in the east.', right: 'Benda unik di alam semesta' },
        { id: 'art2', left: 'She is the best student in class.', right: 'Superlative' },
        { id: 'art3', left: 'The Nile is the longest river in Africa.', right: 'Nama sungai/samudra' },
        { id: 'art4', left: 'I saw a dog. The dog was barking.', right: 'Sudah disebutkan sebelumnya' },
      ],
      explanation: 'The digunakan untuk: benda unik, superlative, nama geografis tertentu, dan referensi yang sudah diketahui.',
      points: 15,
    },
    {
      id: 'ex-b05-4',
      lessonId: 'basic-05',
      type: 'multiple-choice',
      title: 'Zero Article — Generalisasi',
      instruction: 'Pilih kalimat yang menggunakan artikel dengan benar.',
      question: 'Mana kalimat yang benar secara gramatikal?',
      options: [
        { id: 'a', text: 'The dogs are loyal animals.', explanation: 'Penggunaan "The" menunjukkan anjing spesifik tertentu, bukan anjing pada umumnya.' },
        { id: 'b', text: 'Dogs are loyal animals.', explanation: 'Benar! Zero Article untuk generalisasi (semua anjing pada umumnya = loyal).' },
        { id: 'c', text: 'A dogs are loyal animals.', explanation: '"A" tidak digunakan dengan noun plural.' },
        { id: 'd', text: 'Some dogs are loyal animals.', explanation: '"Some dogs" = hanya sebagian anjing, bukan generalisasi penuh.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Untuk generalisasi tentang seluruh kelompok: Zero Article + plural noun (Dogs are...) atau Zero Article + uncountable (Water is...).',
      points: 10,
    },
    {
      id: 'ex-b05-5',
      lessonId: 'basic-05',
      type: 'fill-blank',
      title: 'Error Correction — Article',
      instruction: 'Temukan dan perbaiki kesalahan penggunaan artikel.',
      sentence: 'She is studying a economics at an university in the Jakarta.',
      targets: [
        { index: 0, correctAnswers: ['economics at a university in Jakarta', 'the economics at a university in Jakarta'] },
      ],
      wordBank: [],
      explanation: '"a economics" → "Ø economics" (mata pelajaran) | "an university" → "a university" (bunyi /j/) | "in the Jakarta" → "in Jakarta" (nama kota = zero article).',
      points: 15,
    },
  ],
  'basic-06': [
    {
      id: 'ex-b06-1',
      lessonId: 'basic-06',
      type: 'multiple-choice',
      title: 'Must Not vs Don\'t Have To',
      instruction: 'Pilih modal yang paling tepat.',
      question: 'The exam is optional for senior students. They ________ attend if they don\'t want to.',
      options: [
        { id: 'a', text: 'must not', explanation: '"Must not" = dilarang. Ujian opsional berarti tidak wajib, bukan dilarang.' },
        { id: 'b', text: 'don\'t have to', explanation: 'Tepat! "Don\'t have to" = tidak wajib (ada pilihan). Ujian opsional = tidak diwajibkan.' },
        { id: 'c', text: 'cannot', explanation: '"Cannot" = tidak bisa/dilarang, bukan tidak wajib.' },
        { id: 'd', text: 'should not', explanation: '"Should not" = sebaiknya tidak, memberi saran negatif.' },
      ],
      correctAnswerId: 'b',
      grammarTip: '"Must not" = DILARANG (prohibition) | "Don\'t have to" = TIDAK WAJIB (no obligation). Perbedaan ini sangat krusial!',
      points: 10,
    },
    {
      id: 'ex-b06-2',
      lessonId: 'basic-06',
      type: 'matching',
      title: 'Pasangkan Modal dengan Fungsinya',
      instruction: 'Hubungkan modal verb di kiri dengan fungsi utamanya di kanan.',
      pairs: [
        { id: 'mv1', left: 'must (deduction)', right: 'She must be exhausted — she worked 16 hours.' },
        { id: 'mv2', left: 'should have + V3', right: 'You should have told me earlier. (penyesalan)' },
        { id: 'mv3', left: 'might', right: 'It might rain this afternoon. (kemungkinan ~30%)' },
        { id: 'mv4', left: 'can\'t have + V3', right: 'She can\'t have seen him — he was abroad. (mustahil)' },
      ],
      explanation: 'Modal verbs mengekspresikan nuansa yang sangat berbeda — konteks dan logika kalimat menentukan pilihannya.',
      points: 15,
    },
    {
      id: 'ex-b06-3',
      lessonId: 'basic-06',
      type: 'fill-blank',
      title: 'Past Modal — Should Have',
      instruction: 'Lengkapi kalimat dengan past modal yang tepat.',
      sentence: 'The results were disappointing. We [___] prepared more thoroughly for the presentation.',
      targets: [
        { index: 0, correctAnswers: ['should have', 'could have'], hint: 'Penyesalan tentang tindakan di masa lalu yang tidak dilakukan' },
      ],
      wordBank: ['should have', 'must have', 'could have', 'might have'],
      explanation: '"Should have prepared" = penyesalan (seharusnya lebih mempersiapkan, tapi tidak). "Could have" juga bisa (kemampuan yang tidak dimanfaatkan).',
      points: 10,
    },
    {
      id: 'ex-b06-4',
      lessonId: 'basic-06',
      type: 'multiple-choice',
      title: 'Modal untuk Deduction',
      instruction: 'Pilih modal yang paling tepat berdasarkan konteks.',
      question: 'She studied for 12 hours straight and barely slept. She ________ be very tired right now.',
      options: [
        { id: 'a', text: 'might', explanation: '"Might" = kemungkinan kecil (~30%). Tapi 12 jam belajar hampir memastikan kelelahan.' },
        { id: 'b', text: 'could', explanation: '"Could" = kemungkinan yang lebih kecil dari "might".' },
        { id: 'c', text: 'must', explanation: 'Tepat! "Must be" = deduction logis yang kuat berdasarkan bukti yang jelas.' },
        { id: 'd', text: 'should', explanation: '"Should be" = ekspektasi atau saran, bukan deduction.' },
      ],
      correctAnswerId: 'c',
      grammarTip: 'Deduction certainty: must be (pasti) > may be (~50%) > might/could be (~30%). Semakin kuat buktinya, semakin kuat modal yang digunakan.',
      points: 10,
    },
    {
      id: 'ex-b06-5',
      lessonId: 'basic-06',
      type: 'fill-blank',
      title: 'May vs Can untuk Permission (Formal Context)',
      instruction: 'Lengkapi kalimat formal permission.',
      sentence: '[___] I be excused from tomorrow\'s meeting, Dr. Anderson? I have a prior medical appointment.',
      targets: [
        { index: 0, correctAnswers: ['May', 'Could'], hint: 'Konteks formal — pilih modal yang paling sopan' },
      ],
      wordBank: ['May', 'Can', 'Could', 'Shall'],
      explanation: '"May I..." = paling formal dan sopan untuk meminta izin. "Could I..." = sopan. "Can I..." = informal. Dalam konteks formal dengan atasan/profesor, "May" adalah pilihan terbaik.',
      points: 10,
    },
  ],
};
