import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const introEnglishLessons: Lesson[] = [
  {
    id: 'intro-01',
    trackId: 'intro-english',
    slug: 'alphabet-and-phonetics',
    title: 'The English Alphabet & Phonetics',
    order: 1,
    summary: 'Kenali 26 huruf alfabet Inggris, bedakan vokal dan konsonan, pelajari bunyi dasar vokal pendek & panjang, serta huruf diam (silent letters) yang sering membingungkan.',
    readTimeMin: 6,
    difficulty: 'Beginner',
    objectives: [
      'Menyebutkan 26 huruf alfabet Inggris dengan pelafalan yang benar.',
      'Membedakan huruf vokal (A E I O U) dan 21 huruf konsonan.',
      'Memahami perbedaan bunyi vokal pendek (short vowel) dan vokal panjang (long vowel).',
      'Mengenali silent letters dan digraph yang sering ditemui.',
    ],
    sections: [
      {
        id: 'sec-i01-1',
        title: '1. 26 Huruf Alfabet: Vokal vs Konsonan',
        badge: 'Foundation',
        content: `Alfabet Inggris terdiri dari **26 huruf**: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.

**5 Huruf Vokal**: **A  E  I  O  U**
Vokal adalah inti dari setiap kata — setiap suku kata pasti mengandung minimal satu vokal.

**21 Huruf Konsonan**: B C D F G H J K L M N P Q R S T V W X Y Z
*(Catatan: Y kadang bertindak sebagai vokal, contoh: gym /dʒɪm/, sky /skaɪ/)*

Pengucapan nama huruf khusus: G = "jee" /dʒiː/, W = "double-u" /ˈdʌbljuː/, Z = "zee" (US) / "zed" (UK).`,
        examples: [
          {
            sentence: 'The word "education" contains 5 vowels: e, u, a, i, o.',
            translation: 'Kata "education" mengandung 5 huruf vokal: e, u, a, i, o.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Vokal: A – E – I – O – U  |  Konsonan: semua huruf lainnya',
          explanation: 'Setiap kata bahasa Inggris pasti memiliki setidaknya satu huruf vokal.',
          pitfall: 'Huruf "Y" bisa menjadi vokal di akhir atau tengah kata (gym, baby, sky), tapi konsonan di awal kata (yes, you).',
        },
      },
      {
        id: 'sec-i01-2',
        title: '2. Short Vowels vs Long Vowels (Vokal Pendek & Panjang)',
        badge: 'Pronunciation',
        content: `Vokal Inggris memiliki dua versi bunyi: **pendek (short)** dan **panjang (long)**. Perbedaan ini mengubah makna kata!

**Short Vowels**: A /æ/ cat | E /e/ bed | I /ɪ/ sit | O /ɒ/ hot | U /ʌ/ but

**Long Vowels** (umumnya mengikuti pola Magic-E atau dua vokal berturutan):
A /eɪ/ cake | E /iː/ beet | I /aɪ/ bite | O /oʊ/ note | U /juː/ cute

**Magic-E Rule**: Pola Consonant-Vowel-Consonant-e membuat vokal di tengah PANJANG dan huruf "e" di akhir TIDAK BERBUNYI.
- mad → made | pin → pine | hop → hope | cut → cute`,
        examples: [
          {
            sentence: 'Bit /bɪt/ (short) vs Bite /baɪt/ (long) — satu huruf "e" mengubah bunyi dan makna!',
            translation: 'Bit = sedikit; Bite = menggigit.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Magic-E Rule',
          text: 'Setiap kali ada -e diam di akhir kata dengan pola C-V-C-e, vokal tengah menjadi PANJANG: hate/not→note/ride/cube.',
        },
      },
      {
        id: 'sec-i01-3',
        title: '3. Silent Letters (Huruf yang Tidak Diucapkan)',
        badge: 'Common Traps',
        content: `Silent letters ditulis tapi **tidak diucapkan** — penyebab utama salah pelafalan!

| Huruf Diam | Pola | Contoh | Pengucapan |
|-----------|------|--------|-----------|
| K | sebelum N | knife, know, knee | /naɪf/, /noʊ/, /niː/ |
| W | sebelum R | write, wrong, wrist | /raɪt/, /rɒŋ/, /rɪst/ |
| G | sebelum N | sign, foreign, gnaw | /saɪn/, /ˈfɒrɪn/, /nɔː/ |
| B | setelah M | climb, lamb, bomb | /klaɪm/, /læm/, /bɒm/ |
| H | di awal | hour, honest, heir | /aʊər/, /ˈɒnɪst/, /eər/ |
| T | dalam pola -sten/-stle | listen, castle | /ˈlɪsn/, /ˈkɑːsl/ |
| L | sebelum K/M/F | talk, calm, half | /tɔːk/, /kɑːm/, /hɑːf/ |`,
        examples: [
          {
            sentence: 'I know she wrote the wrong answer, and I could not say a word.',
            translation: 'Saya tahu dia menulis jawaban yang salah, dan saya tidak bisa berkata apa-apa.',
            explanation: 'know/k/ = /noʊ/ | wrote/w/ = /roʊt/ | wrong/w/ = /rɒŋ/ | could/l/ = /kʊd/',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'warning',
          title: '"Hour" dan "Honest" — Pakai "an", Bukan "a"!',
          text: '"Hour" /aʊər/ dan "honest" /ˈɒnɪst/ dimulai dengan bunyi vokal karena H-nya diam. Gunakan: an hour, an honest person — BUKAN "a hour"!',
        },
      },
      {
        id: 'sec-i01-4',
        title: '4. Common Digraphs (Dua Huruf, Satu Bunyi)',
        badge: 'Letter Combinations',
        content: `**Digraph** = dua huruf menghasilkan satu bunyi baru.

| Digraph | Bunyi | Contoh |
|---------|-------|--------|
| CH | /tʃ/ | chair, child, beach |
| SH | /ʃ/ | ship, shoe, fish |
| TH (bergetar) | /ð/ | this, that, mother |
| TH (tidak bergetar) | /θ/ | think, three, bath |
| PH | /f/ | phone, photo, graph |
| NG | /ŋ/ | song, ring, strong |
| WH | /w/ atau /h/ | what /wɒt/, who /huː/ |

**TH bergetar vs tidak**: Letakkan jari di tenggorokan — /ð/ ada getaran (this/they), /θ/ tidak ada (think/three).`,
        examples: [
          {
            sentence: 'The three cheerful children shared their photograph.',
            translation: 'Tiga anak yang ceria berbagi foto mereka.',
            explanation: 'three /θ/| cheerful /tʃ/ | children /tʃ/ | their /ð/ | photograph /f/',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      '26 huruf alfabet: 5 vokal (A E I O U) dan 21 konsonan.',
      'Magic-E Rule: C-V-C-e → vokal tengah panjang (pine, cute, note).',
      'Silent letters umum: K sebelum N (know), W sebelum R (write), B setelah M (lamb).',
      'Digraph CH/SH/TH/PH menghasilkan bunyi tunggal yang unik.',
    ],
    nextLessonId: 'intro-02',
  },
  {
    id: 'intro-02',
    trackId: 'intro-english',
    slug: 'numbers-colors-and-everyday-nouns',
    title: 'Numbers, Colors & Everyday Nouns',
    order: 2,
    summary: 'Pelajari angka kardinal 1–100, angka ordinal 1st–20th, warna dengan penempatan adjective yang benar, dan 30 kata benda sehari-hari berdasarkan kategori.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Menyebut dan mengeja angka 1–100 dalam bahasa Inggris.',
      'Membedakan angka kardinal (three) dan ordinal (third).',
      'Menyebut warna dasar dan menggunakannya sebagai adjective sebelum kata benda.',
      'Mengenal kata benda umum dalam kategori rumah, sekolah, makanan, dan transportasi.',
    ],
    sections: [
      {
        id: 'sec-i02-1',
        title: '1. Cardinal Numbers 1–100',
        badge: 'Numbers',
        content: `**1–20 (wajib dihafal):**
one, two, three, four, five, six, seven, eight, nine, ten
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty

**Puluhan:** twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), one hundred (100)

**Gabungan (21–99):** puluhan + tanda hubung + satuan
- 21 = twenty-one | 35 = thirty-five | 47 = forty-seven | 99 = ninety-nine

**⚠️ Ejaan khusus:** four → four**teen** / for**ty** *(BUKAN "fourty"!)* | eight → eigh**teen** / eigh**ty** | five → fif**teen** / fif**ty**`,
        examples: [
          { sentence: 'There are twenty-six letters in the English alphabet.', translation: 'Ada dua puluh enam huruf dalam alfabet Inggris.', isCorrect: true },
        ],
        callout: {
          type: 'warning',
          title: 'FORTY — Bukan "Fourty"!',
          text: '"Forty" (40) adalah salah satu kata paling sering salah eja. TIDAK ada huruf U: f-o-r-t-y, bukan f-o-u-r-t-y.',
        },
      },
      {
        id: 'sec-i02-2',
        title: '2. Ordinal Numbers 1st–20th',
        badge: 'Ordering',
        content: `Ordinal numbers menunjukkan urutan/posisi — digunakan untuk tanggal, peringkat, lantai gedung.

**Irregular (wajib dihafal):** 1st(first), 2nd(second), 3rd(third), 5th(fifth), 8th(eighth), 9th(ninth), 12th(twelfth)

**Pola reguler:** untuk 4 dst, tambahkan **-th**: 4th(fourth), 6th(sixth), 7th(seventh), 10th(tenth)...

**Puluhan berakhiran -y:** ubah -y → -ieth: 20th(twentieth), 30th(thirtieth)

**Gabungan:** 21st(twenty-first), 22nd(twenty-second), 33rd(thirty-third), 45th(forty-fifth)

**Penggunaan:**
- *Today is the **fifteenth** of September.* (tanggal)
- *She finished **third** in the race.* (posisi)
- *His office is on the **seventh** floor.* (lantai)`,
        examples: [
          { sentence: 'The twenty-first century began on January first, 2001.', translation: 'Abad ke-21 dimulai pada 1 Januari 2001.', isCorrect: true },
        ],
      },
      {
        id: 'sec-i02-3',
        title: '3. Colors & Adjective Placement',
        badge: 'Colors',
        content: `**12 warna dasar:** red, orange, yellow, green, blue, purple, pink, brown, black, white, grey, beige

**Adjective warna SELALU sebelum noun:**
- ✅ **a red car** | ❌ ~~a car red~~
- ✅ **the dark blue ocean** | ✅ **three bright yellow flowers**

**Modifikasi warna:**
- light + warna: light blue (biru muda), light green (hijau muda)
- dark + warna: dark red (merah tua), dark brown (coklat tua)
- pale + warna: pale yellow (kuning pucat)
- bright + warna: bright white (putih bersih)`,
        examples: [
          {
            sentence: 'She wore a dark blue dress with bright white shoes.',
            translation: 'Dia mengenakan gaun biru tua dengan sepatu putih cerah.',
            explanation: 'dark blue dan bright white masing-masing adalah adjective compound sebelum noun.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: '[Article] + [Adjective/Color] + NOUN',
          explanation: 'Kata sifat selalu mendahului kata benda dalam bahasa Inggris.',
          pitfall: '"A dress dark blue" ❌ → "A dark blue dress" ✅',
        },
      },
      {
        id: 'sec-i02-4',
        title: '4. Everyday Nouns by Category',
        badge: 'Vocabulary',
        content: `**🏠 At Home:** table, chair, bed, door, window, lamp, sofa, refrigerator, mirror, curtain

**🏫 At School:** book, pen, pencil, notebook, bag, desk, board, classroom, ruler, eraser

**🍎 Food & Drinks:** rice, bread, water, milk, coffee, tea, egg, chicken, fruit, vegetable

**🚌 Transport:** car, bus, train, bicycle, motorcycle, taxi, airplane, boat, truck, ship

**Pola Plural dasar:**
- Tambah **-s**: book→books, car→cars, pen→pens
- Tambah **-es** (akhiran -s/-x/-ch/-sh): bus→buses, box→boxes
- Ubah **-y** → **-ies** (setelah konsonan): baby→babies, city→cities
- Irregular: man→men, child→children, tooth→teeth, mouse→mice`,
        examples: [
          {
            sentence: 'There are three red chairs and two brown tables in the classroom.',
            translation: 'Ada tiga kursi merah dan dua meja coklat di kelas.',
            explanation: 'Menggabungkan angka + warna + noun plural.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      '"Forty" (40) tanpa huruf U — kesalahan ejaan paling sering.',
      'Ordinal irregular: 1st/2nd/3rd/5th/8th/9th/12th.',
      'Adjective warna SELALU sebelum noun (a red apple, not an apple red).',
      'Plural: tambah -s, atau -es setelah -s/-x/-ch/-sh.',
    ],
    prevLessonId: 'intro-01',
    nextLessonId: 'intro-03',
  },
  {
    id: 'intro-03',
    trackId: 'intro-english',
    slug: 'greetings-and-daily-expressions',
    title: 'Greetings, Farewells & Daily Expressions',
    order: 3,
    summary: 'Kuasai salam formal dan informal, cara memperkenalkan diri, ekspresi kesopanan sehari-hari, dan ungkapan waktu (today, tomorrow, now, later).',
    readTimeMin: 6,
    difficulty: 'Beginner',
    objectives: [
      'Menggunakan salam yang tepat sesuai konteks (formal vs informal).',
      'Memperkenalkan diri dengan lengkap: nama, asal, pekerjaan/status.',
      'Menggunakan ekspresi sopan: Please, Thank you, Sorry, Excuse me.',
      'Menggunakan time expressions: today, yesterday, tomorrow, now, later, soon.',
    ],
    sections: [
      {
        id: 'sec-i03-1',
        title: '1. Greetings: Formal vs Informal',
        badge: 'Communication',
        content: `**Formal Greetings** (atasan, orang lebih tua, situasi profesional):
- Good morning. *(sebelum pkl 12.00)*
- Good afternoon. *(pkl 12.00–18.00)*
- Good evening. *(setelah pkl 18.00)*
- How are you? / How are you doing?

**Informal Greetings** (teman, sebaya):
- Hi! / Hey!
- What's up? / What's new? / How's it going?
- Long time no see! *(lama tidak bertemu)*

**Farewells / Pamitan:**
- Goodbye! (formal) | Bye! / See you! / Take care! (informal)
- See you tomorrow! / See you around! / Catch you later!

**Responses to "How are you?":**
- Formal: I'm very well, thank you. And you?
- Informal: I'm good, thanks! / Not bad! / Pretty good!`,
        examples: [
          { sentence: 'Good morning, Dr. Chen. How are you today?', translation: 'Selamat pagi, Dr. Chen. Apa kabar Anda hari ini?', isCorrect: true },
          { sentence: 'Hey! Long time no see! What\'s up?', translation: 'Hei! Lama tidak jumpa! Apa kabar?', isCorrect: true },
        ],
      },
      {
        id: 'sec-i03-2',
        title: '2. Introducing Yourself',
        badge: 'Self-Introduction',
        content: `**Struktur Perkenalan Diri:**
1. **Greeting**: Hello / Hi / Good morning
2. **Name**: My name is ___ / I'm ___
3. **Origin**: I'm from ___ / I come from ___
4. **Role**: I'm a student / I work as a ___
5. **Closing**: Nice to meet you! / It's a pleasure to meet you.

**Variasi kalimat:**
- *My name is Rina.* (formal) | *I'm Rina.* (umum) | *You can call me Rina.* (casual)
- *I'm originally from Surabaya, but I now live in Jakarta.*
- *I'm a final-year engineering student.*
- *I work at a technology startup as a software developer.*`,
        examples: [
          {
            sentence: 'Hello! My name is Rina. I\'m from Bandung and I\'m a second-year biology student. It\'s a pleasure to meet you!',
            translation: 'Halo! Nama saya Rina. Saya dari Bandung dan saya mahasiswa biologi tahun kedua. Senang bertemu Anda!',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Greeting + My name is [Name]. + I am from [Place]. + I am a [Role]. + Nice to meet you!',
          explanation: 'Struktur universal untuk perkenalan diri dalam konteks apapun.',
        },
      },
      {
        id: 'sec-i03-3',
        title: '3. Polite Expressions & Social Phrases',
        badge: 'Politeness',
        content: `| Ekspresi | Fungsi | Contoh |
|---------|--------|--------|
| **Please** | Permintaan sopan | Could I have some water, please? |
| **Thank you / Thanks** | Terima kasih | Thanks for your help! |
| **Thank you very much** | Lebih formal | Thank you very much for your time. |
| **You're welcome** | Balas "thank you" | "Thanks!" → "You're welcome!" |
| **No problem / Not at all** | Balas informal | "Thanks!" → "No problem!" |
| **Sorry / I'm sorry** | Permintaan maaf | Sorry, I didn't mean that. |
| **Excuse me** | Meminta perhatian/izin | Excuse me, can I ask a question? |
| **Pardon me? / Sorry?** | Minta diulang | Pardon me? I didn't hear that. |

**Sorry vs Excuse me:**
- *"Sorry"* → SETELAH kesalahan: Saya tidak sengaja menabrak Anda → "Oh, sorry!"
- *"Excuse me"* → SEBELUM mengganggu: ingin bertanya, ingin lewat → "Excuse me, where is the exit?"`,
        callout: {
          type: 'tip',
          title: 'Excuse me vs Sorry',
          text: 'Bayangkan: Excuse me = minta izin DULU. Sorry = meminta maaf SETELAH terjadi sesuatu.',
        },
      },
      {
        id: 'sec-i03-4',
        title: '4. Time Expressions',
        badge: 'Time',
        content: `| Indonesia | English | Contoh Kalimat |
|-----------|---------|---------------|
| Sekarang | now / at the moment | I'm busy right now. |
| Hari ini | today | Today is Monday. |
| Kemarin | yesterday | I was sick yesterday. |
| Besok | tomorrow | I'll call you tomorrow. |
| Nanti | later / soon | I'll do it later. |
| Tadi | earlier / just now | She called just now. |
| Minggu lalu | last week | We met last week. |
| Minggu depan | next week | The exam is next week. |
| Segera | soon / shortly | He'll arrive soon. |

Waktu sering diletakkan di **akhir kalimat** atau **awal kalimat + koma**:
- *I will call you **tomorrow**.*
- ***Yesterday**, I missed the bus.*`,
        examples: [
          {
            sentence: 'I studied English yesterday, I am practicing today, and I will review tomorrow.',
            translation: 'Saya belajar kemarin, berlatih hari ini, dan akan mengulas besok.',
            explanation: 'studied (past) → am practicing (present) → will review (future).',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Formal: Good morning/afternoon/evening. Informal: Hi/Hey/What\'s up.',
      'Excuse me = sebelum mengganggu. Sorry = setelah membuat kesalahan.',
      'Perkenalan: Greeting → Name → Origin → Role → Nice to meet you.',
      'Time expressions: now/today/yesterday/tomorrow/later/soon/last week/next week.',
    ],
    prevLessonId: 'intro-02',
    nextLessonId: 'intro-04',
  },
  {
    id: 'intro-04',
    trackId: 'intro-english',
    slug: 'basic-question-words',
    title: 'Basic Question Words & Simple Questions',
    order: 4,
    summary: 'Kuasai 7 kata tanya WH-words, cara membuat pertanyaan Yes/No dengan Do/Does/Is/Are, dan pola short answers yang natural.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Menggunakan 7 kata tanya: What, Who, Where, When, Why, How, Which.',
      'Membuat pertanyaan Yes/No dengan Do/Does dan Is/Are.',
      'Menjawab pertanyaan dengan short answers yang gramatikal.',
      'Membuat pertanyaan sederhana menggunakan kata tanya + to be.',
    ],
    sections: [
      {
        id: 'sec-i04-1',
        title: '1. WH-Question Words — 7 Kata Tanya',
        badge: 'Questions',
        content: `| Kata Tanya | Arti | Menanyakan | Contoh |
|-----------|------|-----------|--------|
| **What** | Apa | Benda/kegiatan | What is your name? |
| **Who** | Siapa | Orang (subjek) | Who is your teacher? |
| **Where** | Di mana | Tempat | Where do you live? |
| **When** | Kapan | Waktu | When is the exam? |
| **Why** | Mengapa | Alasan | Why are you late? |
| **How** | Bagaimana | Cara/kondisi | How are you? |
| **Which** | Yang mana | Pilihan | Which book do you prefer? |

**How + kata lain (kombinasi penting):**
- **How much** → jumlah (uncountable): *How much water do you drink?*
- **How many** → jumlah (countable): *How many students are there?*
- **How long** → durasi: *How long is the flight?*
- **How often** → frekuensi: *How often do you exercise?*
- **How old** → usia: *How old are you?*`,
        ruleBox: {
          formula: 'WH-word + Auxiliary (is/are/do/does) + Subject + Main Verb?',
          explanation: 'Kata tanya selalu di awal, diikuti auxiliary verb.',
          pitfall: '"Where you from?" ❌ → "Where are you from?" ✅ — Jangan lupa auxiliary!',
        },
        examples: [
          { sentence: 'Why are you studying English? — Because I want to work abroad.', translation: 'Mengapa kamu belajar bahasa Inggris? — Karena saya ingin bekerja di luar negeri.', isCorrect: true },
        ],
      },
      {
        id: 'sec-i04-2',
        title: '2. Yes/No Questions dengan Do / Does / Is / Are',
        badge: 'Yes-No Questions',
        content: `**Yes/No questions** dimulai dengan auxiliary verb, bukan WH-word — balikkan posisi subjek dan auxiliary!

**Do / Does (untuk action verbs):**
- DO: I / You / We / They
- DOES: He / She / It → kata kerja kembali ke V1

| Pernyataan | Pertanyaan |
|-----------|-----------|
| You like coffee. | **Do** you like coffee? |
| She speaks English. | **Does** she speak English? |
| They study every day. | **Do** they study every day? |

**Is / Are (untuk to be & deskripsi):**
| Pernyataan | Pertanyaan |
|-----------|-----------|
| She is a nurse. | **Is** she a nurse? |
| They are ready. | **Are** they ready? |
| It is cold. | **Is** it cold? |`,
        examples: [
          {
            sentence: 'Does your sister work at the hospital? — Yes, she does. She\'s a nurse.',
            translation: 'Apakah saudaramu bekerja di rumah sakit? — Ya. Dia seorang perawat.',
            explanation: '"Does" karena subjek "your sister" = she (orang ketiga tunggal).',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'warning',
          title: 'Does → V1 (BUKAN V-s)!',
          text: '"Does she speaks?" ❌ → "Does she speak?" ✅ — Tanda -s sudah "dibawa" oleh "Does".',
        },
      },
      {
        id: 'sec-i04-3',
        title: '3. Short Answers',
        badge: 'Natural English',
        content: `Short answers = cara menjawab Yes/No question secara alami tanpa mengulang seluruh kalimat.

**Pola: Yes/No + Pronoun + Auxiliary**

| Pertanyaan | Ya | Tidak |
|-----------|----|----|
| Do you like it? | Yes, **I do**. | No, **I don't**. |
| Does she work here? | Yes, **she does**. | No, **she doesn't**. |
| Are they ready? | Yes, **they are**. | No, **they aren't**. |
| Is he a doctor? | Yes, **he is**. | No, **he isn't**. |
| Can you swim? | Yes, **I can**. | No, **I can't**. |

**Menjawab hanya "Yes." atau "No." terdengar kasar atau robot-ik** — selalu gunakan short answer lengkap!`,
        examples: [
          { sentence: '"Is Jakarta the capital of Indonesia?" — "Yes, it is."', translation: '"Apakah Jakarta ibukota Indonesia?" — "Ya, betul."', isCorrect: true },
          { sentence: '"Do penguins live in the Arctic?" — "No, they don\'t. They live in Antarctica."', translation: '"Apakah penguin hidup di Arktik?" — "Tidak. Mereka hidup di Antartika."', isCorrect: true },
        ],
      },
      {
        id: 'sec-i04-4',
        title: '4. WH-word + To Be: Pertanyaan Dasar',
        badge: 'Beginner Questions',
        content: `Gabungan paling dasar yang digunakan sehari-hari:

**What + is/are:**
- *What is this?* → It's a phone.
- *What are those?* → They're oranges.
- *What is your job?* → I'm an engineer.
- *What time is it?* → It's 3 o'clock.

**Where + is/are:**
- *Where is the bathroom?* → It's down the hall.
- *Where are you from?* → I'm from Bali.

**Who + is:**
- *Who is she?* → She's my sister.
- *Who is the president?* → [name]

**How + is/are:**
- *How is the weather?* → It's sunny.
- *How are your parents?* → They're fine.`,
        examples: [
          { sentence: '"What is your name?" — "My name is Reza." / "I\'m Reza."', translation: '"Siapa namamu?" — "Namaku Reza."', isCorrect: true },
        ],
      },
    ],
    keyTakeaways: [
      '7 WH-words: What/Who/Where/When/Why/How/Which masing-masing untuk informasi berbeda.',
      'Yes/No questions: balikkan auxiliary ke depan (Is she... / Does he... / Are they...).',
      'DOES + V1 (bukan V-s): "Does she work?" bukan "Does she works?"',
      'Short answers: Yes/No + Pronoun + Auxiliary — selalu lebih alami dari sekedar "Yes/No".',
    ],
    prevLessonId: 'intro-03',
    nextLessonId: 'intro-05',
  },
  {
    id: 'intro-05',
    trackId: 'intro-english',
    slug: 'to-be-am-is-are',
    title: 'The Verb "To Be": Am / Is / Are',
    order: 5,
    summary: 'Pahami penggunaan kata kerja "to be" secara mendalam: bentuk positif, negatif, pertanyaan, kontraksi, dan cara mendeskripsikan orang, tempat, dan benda.',
    readTimeMin: 8,
    difficulty: 'Beginner',
    objectives: [
      'Menggunakan am/is/are sesuai subjek dengan benar.',
      'Membuat kontraksi alami: I\'m, You\'re, He\'s, She\'s, It\'s, We\'re, They\'re.',
      'Membuat kalimat negatif: am not / isn\'t / aren\'t.',
      'Membuat pertanyaan dengan to be dan menjawab dengan short answers.',
      'Mendeskripsikan orang, benda, dan situasi menggunakan to be.',
    ],
    sections: [
      {
        id: 'sec-i05-1',
        title: '1. Subject + To Be — Tabel Lengkap',
        badge: 'Core Grammar',
        content: `**To be** adalah kata kerja paling fundamental — fondasi seluruh grammar bahasa Inggris.

| Subjek | To Be | Contoh |
|--------|-------|--------|
| **I** | **am** | I **am** a student. |
| **You** | **are** | You **are** very kind. |
| **He** | **is** | He **is** my brother. |
| **She** | **is** | She **is** a doctor. |
| **It** | **is** | It **is** cold outside. |
| **We** | **are** | We **are** ready. |
| **They** | **are** | They **are** my friends. |

**Memory Trick (Cara Mudah Hafal):**
- **I → am** (hanya I, selalu am — tidak ada pengecualian)
- **He / She / It → is** (semua orang ketiga tunggal)
- **You / We / They → are** (semua lainnya)`,
        examples: [
          {
            sentence: 'I am 20 years old. My sister is 25. We are both from Jakarta.',
            translation: 'Saya 20 tahun. Kakak saya 25 tahun. Kami berdua dari Jakarta.',
            explanation: 'I → am | sister (she) → is | We → are',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'I + AM | He/She/It + IS | You/We/They + ARE',
          explanation: 'Tiga aturan ini berlaku konsisten di semua kalimat simple present dengan to be.',
          pitfall: '"She are a teacher." ❌ → "She IS a teacher." ✅ | "I is happy." ❌ → "I AM happy." ✅',
        },
      },
      {
        id: 'sec-i05-2',
        title: '2. Contractions (Bentuk Singkatan)',
        badge: 'Natural Speech',
        content: `Kontraksi adalah penggabungan subjek + to be — digunakan dalam percakapan dan tulisan informal.

| Full Form | Contraction | IPA |
|-----------|------------|-----|
| I am | **I'm** | /aɪm/ |
| You are | **You're** | /jʊər/ |
| He is | **He's** | /hiːz/ |
| She is | **She's** | /ʃiːz/ |
| It is | **It's** | /ɪts/ |
| We are | **We're** | /wɪər/ |
| They are | **They're** | /ðeər/ |

**⚠️ Tiga kata yang sering tertukar:**
- **They're** = They are → *They're coming.* (Mereka datang.)
- **Their** = milik mereka → *I like their car.* (Saya suka mobil mereka.)
- **There** = di sana → *She's over there.* (Dia di sana.)

**⚠️ It's vs Its:**
- **It's** = it is → *It's raining.* (Sedang hujan.)
- **Its** = miliknya → *The cat licked its paw.* (Kucing menjilat cakarnya.)`,
        examples: [
          { sentence: "I'm excited! He's coming today. We're going to celebrate!", translation: "Saya bersemangat! Dia datang hari ini. Kita akan merayakan!", isCorrect: true },
        ],
        callout: {
          type: 'warning',
          title: 'They\'re / Their / There — 3 Kata Berbeda!',
          text: '"They\'re going to their house over there." — kalimat ini menggunakan ketiganya dengan benar. Selalu periksa konteksnya!',
        },
      },
      {
        id: 'sec-i05-3',
        title: '3. Negative Forms (Kalimat Negatif)',
        badge: 'Negation',
        content: `Tambahkan **NOT** setelah am/is/are untuk membuat kalimat negatif.

| Full Negative | Contraction 1 | Contraction 2 |
|--------------|--------------|--------------|
| I am not | **I'm not** | *(tidak ada "amn't")* |
| You are not | **You aren't** | **You're not** |
| He is not | **He isn't** | **He's not** |
| She is not | **She isn't** | **She's not** |
| It is not | **It isn't** | **It's not** |
| We are not | **We aren't** | **We're not** |
| They are not | **They aren't** | **They're not** |

**⚠️ "I amn't" TIDAK EXIST dalam bahasa Inggris!**
Untuk negatif dengan I, satu-satunya pilihan: **I'm not**.`,
        examples: [
          { sentence: "I'm not tired at all. It isn't late yet, and we aren't ready to leave.", translation: "Saya sama sekali tidak lelah. Belum larut malam, dan kami belum siap pergi.", isCorrect: true },
        ],
      },
      {
        id: 'sec-i05-4',
        title: '4. Questions & Short Answers with To Be',
        badge: 'Questions',
        content: `**Membuat pertanyaan** dengan to be: balikkan posisi subjek dan to be!

| Pernyataan | Pertanyaan |
|-----------|-----------|
| She **is** a nurse. | **Is** she a nurse? |
| They **are** on time. | **Are** they on time? |
| It **is** cold. | **Is** it cold? |

**Short Answers:**
| Pertanyaan | Ya | Tidak |
|-----------|----|----|
| Is he a teacher? | Yes, **he is**. | No, **he isn't**. |
| Are they from Japan? | Yes, **they are**. | No, **they aren't**. |
| Is it raining? | Yes, **it is**. | No, **it isn't**. |`,
        examples: [
          { sentence: '"Are you a new student?" — "Yes, I am. I\'m from Medan."', translation: '"Apakah kamu siswa baru?" — "Ya. Saya dari Medan."', isCorrect: true },
        ],
      },
      {
        id: 'sec-i05-5',
        title: '5. Using To Be to Describe',
        badge: 'Descriptions',
        content: `To be digunakan untuk berbagai tipe deskripsi:

**1. Identitas/Profesi:** *She is a nurse. / He is an engineer.*
**2. Sifat/Karakteristik:** *The food is delicious. / The students are hardworking.*
**3. Asal/Kebangsaan:** *I am Indonesian. / She is British.*
**4. Kondisi/Perasaan:** *I am tired. / He is sick. / We are excited.*
**5. Lokasi (+ preposition):** *The book is on the table. / We are in the classroom. / She is at home.*
**6. Waktu/Cuaca:** *It is Monday. / It is 3 o'clock. / It is sunny today.*`,
        examples: [
          {
            sentence: 'My professor is brilliant and very patient. Her classes are always interesting and informative.',
            translation: 'Profesor saya brilian dan sangat sabar. Kelas-kelasnya selalu menarik dan informatif.',
            explanation: 'is = untuk deskripsi subjek tunggal (professor) | are = untuk subjek plural (classes).',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'I → am | He/She/It → is | You/We/They → are — hafal tabel ini!',
      'Kontraksi: I\'m, You\'re, He\'s, She\'s, It\'s, We\'re, They\'re.',
      'Negatif: am not / isn\'t / aren\'t. TIDAK ADA "amn\'t".',
      'Pertanyaan: balikkan to be ke depan (She is... → Is she...?).',
      'It\'s (it is) ≠ its (possessive). They\'re ≠ their ≠ there.',
    ],
    prevLessonId: 'intro-04',
    nextLessonId: 'basic-01',
  },
];

export const introEnglishExercises: Record<string, Exercise[]> = {
  'intro-01': [
    {
      id: 'ex-i01-1',
      lessonId: 'intro-01',
      type: 'multiple-choice',
      title: 'Huruf Vokal atau Konsonan?',
      instruction: 'Tentukan kelas huruf dalam kata berikut.',
      question: 'Kata "RHYTHM" — berapa jumlah huruf vokal standar (A/E/I/O/U) yang terdapat di dalamnya?',
      options: [
        { id: 'a', text: 'Nol — tidak ada huruf A/E/I/O/U', explanation: 'Tepat! R-H-Y-T-H-M tidak mengandung huruf vokal standar. Y bertindak sebagai vokal fonetik, tapi bukan vokal alfabet standar.' },
        { id: 'b', text: 'Satu — huruf Y', explanation: 'Y memang berbunyi seperti vokal /ɪ/ di sini, tapi secara alfabet Y adalah konsonan. Jawaban terbaik: nol vokal A/E/I/O/U.' },
        { id: 'c', text: 'Dua', explanation: 'Tidak ada dua vokal dalam RHYTHM.' },
        { id: 'd', text: 'Tiga', explanation: 'Tidak ada tiga vokal.' },
      ],
      correctAnswerId: 'a',
      grammarTip: '"Rhythm" adalah contoh terkenal kata bahasa Inggris tanpa vokal standar. Y fleksibel: konsonan di awal kata (yes, you), vokal di tengah/akhir (gym, baby, rhythm).',
      points: 10,
    },
    {
      id: 'ex-i01-2',
      lessonId: 'intro-01',
      type: 'multiple-choice',
      title: 'Silent Letters',
      instruction: 'Identifikasi huruf diam dalam kata berikut.',
      question: 'Huruf mana yang TIDAK DIUCAPKAN dalam kata "KNIGHT"?',
      options: [
        { id: 'a', text: 'K, G, dan H semuanya diam', explanation: 'Benar! "Knight" = /naɪt/. Hanya N, AI, T yang diucapkan. K (pola kn-), G dan H (pola -ght) semuanya diam.' },
        { id: 'b', text: 'Hanya K', explanation: 'K memang diam, tapi bukan satu-satunya silent letter di sini.' },
        { id: 'c', text: 'Hanya G dan H', explanation: 'K juga diam — pola kn- selalu membuat K tidak berbunyi.' },
        { id: 'd', text: 'Tidak ada huruf yang diam', explanation: 'Jika semua huruf diucapkan, kata ini akan berbunyi sangat aneh!' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Pola -ight selalu memiliki silent GH: light/naɪt/, night, right, fight, bright, sight, tight.',
      points: 10,
    },
    {
      id: 'ex-i01-3',
      lessonId: 'intro-01',
      type: 'matching',
      title: 'Pasangkan Digraph dengan Bunyinya',
      instruction: 'Hubungkan digraph di kiri dengan contoh kata di kanan.',
      pairs: [
        { id: 'dm1', left: 'CH (/tʃ/)', right: 'church, cheese, beach' },
        { id: 'dm2', left: 'SH (/ʃ/)', right: 'ship, fashion, wash' },
        { id: 'dm3', left: 'TH voiced (/ð/)', right: 'this, mother, breathe' },
        { id: 'dm4', left: 'PH (/f/)', right: 'phone, elephant, graph' },
      ],
      explanation: 'Mengenali digraph mempercepat pembacaan kata baru yang belum pernah dilihat sebelumnya.',
      points: 15,
    },
    {
      id: 'ex-i01-4',
      lessonId: 'intro-01',
      type: 'fill-blank',
      title: 'Magic-E Rule',
      instruction: 'Pilih kata yang mengikuti Magic-E Rule untuk melengkapi kalimat.',
      sentence: 'I would like to [___] some pizza — give me just a bit, not a huge piece.',
      targets: [{ index: 0, correctAnswers: ['bite'], hint: 'Versi long vowel dari "bit" dengan tambahan magic-e' }],
      wordBank: ['bit', 'bite', 'bat', 'beet'],
      explanation: '"Bit" /bɪt/ (short vowel I) + magic-e = "Bite" /baɪt/ (long vowel I). Konteks "pizza" mengkonfirmasi kata kerja "bite" = menggigit.',
      points: 10,
    },
    {
      id: 'ex-i01-5',
      lessonId: 'intro-01',
      type: 'shadowing',
      title: 'Shadowing: Short vs Long Vowels',
      instruction: 'Ucapkan pasangan kata ini dengan jelas, rasakan perbedaan panjang bunyi vokalnya.',
      textToShadow: 'Bit — bite. Not — note. Cut — cute. Hat — hate. Pin — pine.',
      ipaPhonetic: '/bɪt/ — /baɪt/ | /nɒt/ — /noʊt/ | /kʌt/ — /kjuːt/ | /hæt/ — /heɪt/ | /pɪn/ — /paɪn/',
      translation: 'Sedikit — menggigit | tidak — catatan | potong — imut | topi — membenci | jarum — pohon pinus',
      keyIntonationPoints: [
        'Short vowel: bunyi tertahan dan pendek di tenggorokan.',
        'Long vowel: bunyi terbuka dan mengalir lebih lama, mulut lebih terbuka.',
        'Rasakan perbedaan posisi lidah dan pembukaan mulut.',
      ],
      tips: 'Rekam diri Anda dan bandingkan dengan penutur asli. Perbedaan short/long vowel sangat krusial untuk dipahami.',
      points: 15,
    },
  ],
  'intro-02': [
    {
      id: 'ex-i02-1',
      lessonId: 'intro-02',
      type: 'multiple-choice',
      title: 'Ordinal Numbers',
      instruction: 'Pilih bentuk ordinal yang benar.',
      question: 'Apa bentuk ordinal yang benar dari angka 12?',
      options: [
        { id: 'a', text: 'twelveth', explanation: 'Salah — "twelveth" tidak ada dalam bahasa Inggris.' },
        { id: 'b', text: 'twelfth', explanation: 'Benar! 12th = twelfth. Pola tidak reguler: twelve → twelfth.' },
        { id: 'c', text: 'twelvth', explanation: 'Salah — ejaan yang benar mengubah -lve menjadi -lft.' },
        { id: 'd', text: 'twelveeth', explanation: 'Salah — tidak ada penambahan ganda seperti ini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Ordinal irregular yang wajib dihafal: 1st(first), 2nd(second), 3rd(third), 5th(fifth), 8th(eighth), 9th(ninth), 12th(twelfth).',
      points: 10,
    },
    {
      id: 'ex-i02-2',
      lessonId: 'intro-02',
      type: 'multiple-choice',
      title: 'Ejaan Angka 40',
      instruction: 'Pilih ejaan yang benar untuk angka 40.',
      question: 'Bagaimana cara menulis angka "40" dalam bahasa Inggris?',
      options: [
        { id: 'a', text: 'fourty', explanation: 'Salah! "Fourty" adalah kesalahan ejaan yang sangat umum.' },
        { id: 'b', text: 'forty', explanation: 'Benar! "Forty" — tanpa huruf U, meskipun "four" memiliki U.' },
        { id: 'c', text: 'fourtie', explanation: 'Salah — bentuk ini tidak ada.' },
        { id: 'd', text: 'fortie', explanation: 'Salah — "forty" tidak berubah menjadi "fortie".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'four → fourteen ✅ (ada U) | four → forty ✅ (tanpa U). Ini pengecualian unik yang harus dihafal.',
      points: 10,
    },
    {
      id: 'ex-i02-3',
      lessonId: 'intro-02',
      type: 'matching',
      title: 'Kategori Kata Benda',
      instruction: 'Pasangkan kelompok kata benda dengan kategorinya.',
      pairs: [
        { id: 'cn1', left: 'refrigerator, sofa, lamp', right: 'At Home (Di Rumah)' },
        { id: 'cn2', left: 'notebook, pencil, board', right: 'At School (Di Sekolah)' },
        { id: 'cn3', left: 'rice, egg, bread', right: 'Food (Makanan)' },
        { id: 'cn4', left: 'bicycle, airplane, taxi', right: 'Transport (Transportasi)' },
      ],
      explanation: 'Mengelompokkan kosakata berdasarkan kategori mempercepat hafalan dan recall.',
      points: 15,
    },
    {
      id: 'ex-i02-4',
      lessonId: 'intro-02',
      type: 'multiple-choice',
      title: 'Penempatan Adjective Warna',
      instruction: 'Pilih kalimat yang benar secara gramatikal.',
      question: 'Mana kalimat yang benar dalam bahasa Inggris?',
      options: [
        { id: 'a', text: 'She bought a dress red.', explanation: 'Salah — adjective harus SEBELUM noun, bukan sesudah.' },
        { id: 'b', text: 'She bought a red dress.', explanation: 'Benar! Article (a) + Adjective (red) + Noun (dress).' },
        { id: 'c', text: 'She bought a dress the red.', explanation: 'Salah — penggunaan "the" di sini tidak tepat.' },
        { id: 'd', text: 'She bought red a dress.', explanation: 'Salah — article "a" harus tepat sebelum adjective atau noun.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Urutan: Article + Adjective(s) + Noun. Bahasa Indonesia = kebalikannya (gaun merah = dress red).',
      points: 10,
    },
  ],
  'intro-03': [
    {
      id: 'ex-i03-1',
      lessonId: 'intro-03',
      type: 'matching',
      title: 'Formal vs Informal Greetings',
      instruction: 'Pasangkan salam dengan konteks yang tepat.',
      pairs: [
        { id: 'gr1', left: 'Good morning, Professor.', right: 'Masuk kelas pagi hari' },
        { id: 'gr2', left: 'Hey! What\'s up?', right: 'Bertemu teman di koridor' },
        { id: 'gr3', left: 'How do you do?', right: 'Pertemuan bisnis formal pertama' },
        { id: 'gr4', left: 'Long time no see!', right: 'Bertemu teman yang lama tidak dijumpai' },
      ],
      explanation: 'Memilih register yang tepat (formal/informal) penting untuk kesan pertama yang baik.',
      points: 15,
    },
    {
      id: 'ex-i03-2',
      lessonId: 'intro-03',
      type: 'fill-blank',
      title: 'Melengkapi Perkenalan Diri',
      instruction: 'Isi bagian kosong dengan kata yang paling tepat.',
      sentence: 'Hello! My name [___] Siti. I am [___] Yogyakarta, and I [___] a second-year student.',
      targets: [
        { index: 0, correctAnswers: ['is'], hint: '"My name" = singular → is' },
        { index: 1, correctAnswers: ['from'], hint: 'Preposisi untuk menyatakan asal' },
        { index: 2, correctAnswers: ['am'], hint: 'To be untuk "I"' },
      ],
      wordBank: ['is', 'am', 'are', 'from', 'in', 'at'],
      explanation: '"My name is..." — name adalah subjek tunggal, pakai is. "I am from..." — asal pakai preposisi "from". "I am a student" — deskripsi dengan am.',
      points: 15,
    },
    {
      id: 'ex-i03-3',
      lessonId: 'intro-03',
      type: 'multiple-choice',
      title: 'Sorry vs Excuse Me',
      instruction: 'Pilih ekspresi yang paling tepat.',
      question: 'Kamu tidak sengaja menumpahkan kopi seseorang. Apa yang sebaiknya kamu katakan?',
      options: [
        { id: 'a', text: 'Excuse me!', explanation: '"Excuse me" lebih tepat untuk SEBELUM mengganggu, bukan setelah kecelakaan.' },
        { id: 'b', text: 'I\'m so sorry! Let me help clean that up.', explanation: 'Tepat! "Sorry" digunakan setelah membuat kesalahan atau menyebabkan ketidaknyamanan.' },
        { id: 'c', text: 'You\'re welcome!', explanation: '"You\'re welcome" adalah respons atas terima kasih, bukan permintaan maaf.' },
        { id: 'd', text: 'Please!', explanation: '"Please" adalah untuk membuat permintaan, bukan meminta maaf.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Sorry = SETELAH kesalahan. Excuse me = SEBELUM mengganggu. Dua fungsi berbeda yang sering tertukar!',
      points: 10,
    },
    {
      id: 'ex-i03-4',
      lessonId: 'intro-03',
      type: 'shadowing',
      title: 'Shadowing: Perkenalan Diri yang Natural',
      instruction: 'Dengarkan dan tirukan percakapan perkenalan berikut dengan intonasi alami.',
      textToShadow: 'Good morning! My name is David. I\'m from Jakarta, but I currently live in Bandung. I\'m a second-year engineering student. It\'s a pleasure to meet you!',
      ipaPhonetic: '/ɡʊd ˈmɔːnɪŋ | maɪ neɪm ɪz ˈdeɪvɪd | aɪm frɒm dʒəˈkɑːtə bʌt aɪ ˈkʌrəntli lɪv ɪn ˈbændʊŋ | aɪm ə ˈsekənd jɪər endʒɪˈnɪərɪŋ ˈstjuːdənt | ɪts ə ˈpleʒər tə miːt juː/',
      translation: 'Selamat pagi! Nama saya David. Saya dari Jakarta, tapi sekarang tinggal di Bandung. Saya mahasiswa teknik tahun kedua. Senang bertemu Anda!',
      keyIntonationPoints: [
        'Naikkan intonasi saat menyebut nama diri sendiri (penekanan).',
        'Turunkan intonasi di akhir kalimat pernyataan.',
        'Gunakan nada hangat dan ramah — senyum mempengaruhi kualitas suara!',
      ],
      tips: 'Rekam diri Anda dan putar kembali. Perkenalan yang percaya diri mencerminkan kemahiran berbahasa.',
      points: 15,
    },
  ],
  'intro-04': [
    {
      id: 'ex-i04-1',
      lessonId: 'intro-04',
      type: 'multiple-choice',
      title: 'Memilih WH-word yang Tepat',
      instruction: 'Pilih kata tanya yang tepat.',
      question: '"________ did you go to the hospital?" — "Because I was feeling very sick."',
      options: [
        { id: 'a', text: 'Where', explanation: 'Where menanyakan tempat, bukan alasan.' },
        { id: 'b', text: 'When', explanation: 'When menanyakan waktu, bukan alasan.' },
        { id: 'c', text: 'Why', explanation: 'Tepat! "Because..." selalu menjawab pertanyaan "Why...".' },
        { id: 'd', text: 'What', explanation: 'What menanyakan benda/hal, bukan alasan.' },
      ],
      correctAnswerId: 'c',
      grammarTip: 'Petunjuk cepat: jawaban yang diawali "Because..." → pertanyaan menggunakan "Why".',
      points: 10,
    },
    {
      id: 'ex-i04-2',
      lessonId: 'intro-04',
      type: 'fill-blank',
      title: 'Do atau Does?',
      instruction: 'Pilih "Do" atau "Does" yang tepat.',
      sentence: '[___] your parents speak English at home?',
      targets: [{ index: 0, correctAnswers: ['Do'], hint: '"your parents" = mereka (plural) → Do' }],
      wordBank: ['Do', 'Does', 'Is', 'Are'],
      explanation: '"Your parents" = they (plural) → gunakan "Do". "Does" hanya untuk He/She/It (singular).',
      points: 10,
    },
    {
      id: 'ex-i04-3',
      lessonId: 'intro-04',
      type: 'matching',
      title: 'Pertanyaan dan Short Answer',
      instruction: 'Pasangkan pertanyaan dengan jawaban singkat yang benar.',
      pairs: [
        { id: 'qa1', left: 'Is she a doctor?', right: 'Yes, she is.' },
        { id: 'qa2', left: 'Do they like pizza?', right: "No, they don't." },
        { id: 'qa3', left: 'Does he work here?', right: 'Yes, he does.' },
        { id: 'qa4', left: 'Are you ready?', right: "No, I'm not." },
      ],
      explanation: 'Short answer selalu menggunakan pronoun + auxiliary yang sama dengan pertanyaan.',
      points: 15,
    },
    {
      id: 'ex-i04-4',
      lessonId: 'intro-04',
      type: 'multiple-choice',
      title: 'Does + V1 (Bukan V-s)',
      instruction: 'Pilih kalimat pertanyaan yang benar.',
      question: 'Mana kalimat pertanyaan yang gramatikal?',
      options: [
        { id: 'a', text: 'Does she speaks Japanese?', explanation: 'Salah — setelah Does, kata kerja harus V1 tanpa -s.' },
        { id: 'b', text: 'Does she speak Japanese?', explanation: 'Benar! Does + subject + V1 (base form tanpa -s).' },
        { id: 'c', text: 'Does she speaking Japanese?', explanation: 'Salah — tidak menggunakan -ing setelah Does.' },
        { id: 'd', text: 'Does she is speaking Japanese?', explanation: 'Salah — tidak boleh ada "is" setelah "Does".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Does/Did + subject + V1. Tanda -s "berpindah" dari verba ke auxiliary Does.',
      points: 10,
    },
  ],
  'intro-05': [
    {
      id: 'ex-i05-1',
      lessonId: 'intro-05',
      type: 'multiple-choice',
      title: 'Am, Is, atau Are?',
      instruction: 'Pilih bentuk to be yang tepat.',
      question: 'The coffee and the tea ________ both hot.',
      options: [
        { id: 'a', text: 'am', explanation: 'Am hanya untuk I (subjek pertama tunggal).' },
        { id: 'b', text: 'is', explanation: 'Salah — "coffee and tea" adalah dua benda (plural).' },
        { id: 'c', text: 'are', explanation: 'Benar! Dua noun dihubungkan "and" = plural subject → are.' },
        { id: 'd', text: 'be', explanation: '"Be" adalah bentuk dasar, tidak digunakan sendiri dalam present tense.' },
      ],
      correctAnswerId: 'c',
      grammarTip: '[Noun A] and [Noun B] = plural → selalu "are". Contoh: The dog and the cat ARE sleeping.',
      points: 10,
    },
    {
      id: 'ex-i05-2',
      lessonId: 'intro-05',
      type: 'fill-blank',
      title: 'Kontraksi To Be',
      instruction: 'Isi bagian kosong dengan bentuk to be (positif atau kontraksi) yang tepat.',
      sentence: 'She [___] not ready yet, and we [___] already running late.',
      targets: [
        { index: 0, correctAnswers: ['is', "isn't"], hint: 'She + to be → singular' },
        { index: 1, correctAnswers: ['are', "we're"], hint: 'We + to be → plural' },
      ],
      wordBank: ['is', 'are', 'am', "isn't", "aren't", "we're"],
      explanation: '"She is not" → "She isn\'t" atau "She\'s not". "We are" → "We\'re".',
      points: 10,
    },
    {
      id: 'ex-i05-3',
      lessonId: 'intro-05',
      type: 'matching',
      title: 'Positif → Negatif',
      instruction: 'Pasangkan kalimat positif dengan bentuk negatifnya.',
      pairs: [
        { id: 'neg1', left: 'I am a teacher.', right: "I'm not a teacher." },
        { id: 'neg2', left: 'He is at home.', right: "He isn't at home." },
        { id: 'neg3', left: 'They are busy.', right: "They aren't busy." },
        { id: 'neg4', left: 'It is expensive.', right: "It isn't expensive." },
      ],
      explanation: 'am not / isn\'t / aren\'t — "I amn\'t" TIDAK ADA dalam bahasa Inggris!',
      points: 15,
    },
    {
      id: 'ex-i05-4',
      lessonId: 'intro-05',
      type: 'multiple-choice',
      title: "It's vs Its",
      instruction: 'Pilih kalimat yang menggunakan keduanya dengan benar.',
      question: 'Mana kalimat yang menggunakan "it\'s" dan "its" dengan tepat?',
      options: [
        { id: 'a', text: "Its raining outside, and the dog lost it's bone.", explanation: 'Keduanya terbalik!' },
        { id: 'b', text: "It's raining outside, and the dog lost its bone.", explanation: "Benar! It's = it is | its = milik anjing (possessive)." },
        { id: 'c', text: "It's raining outside, and the dog lost it's bone.", explanation: '"It\'s bone" salah — possessive tidak pakai apostrof.' },
        { id: 'd', text: "Its raining outside, and the dog lost its bone.", explanation: '"Its raining" salah — untuk "it is raining" gunakan "it\'s".' },
      ],
      correctAnswerId: 'b',
      grammarTip: "It's = it is (kontraksi — apostrof menggantikan huruf yang dihapus). Its = miliknya (possessive — tanpa apostrof, seperti his/her).",
      points: 10,
    },
    {
      id: 'ex-i05-5',
      lessonId: 'intro-05',
      type: 'fill-blank',
      title: 'Deskripsi Lengkap dengan To Be',
      instruction: 'Lengkapi paragraf dengan am/is/are yang tepat.',
      sentence: 'My friend Budi [___] a medical student. He [___] 22 years old and [___] from Surabaya. His classes [___] very challenging, but he [___] always motivated.',
      targets: [
        { index: 0, correctAnswers: ['is'], hint: 'Budi = he (singular)' },
        { index: 1, correctAnswers: ['is'], hint: 'He = singular' },
        { index: 2, correctAnswers: ['is'], hint: 'He (implied) = singular' },
        { index: 3, correctAnswers: ['are'], hint: 'His classes = plural' },
        { index: 4, correctAnswers: ['is'], hint: 'He = singular' },
      ],
      wordBank: ['am', 'is', 'are'],
      explanation: 'He/She/It + is | Plural nouns (classes) + are. Aturan ini konsisten di semua konteks.',
      points: 15,
    },
  ],
};
