import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const ieltsLessons: Lesson[] = [
  {
    id: 'ielts-01',
    trackId: 'ielts-prep',
    slug: 'ielts-anatomy-and-band-descriptors',
    title: 'IELTS Anatomy & The 4 Band Descriptors',
    order: 1,
    summary: 'Pahami struktur 4 modul IELTS (Listening, Reading, Writing, Speaking), konversi raw score ke Band 0-9, dan 4 kriteria penilaian resmi penguji Cambridge.',
    readTimeMin: 11,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Memahami pembobotan 4 modul IELTS dan konversi raw score ke Band 0-9.',
      'Menguasai 4 kriteria resmi Writing: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy.',
      'Mengetahui strategi manajemen waktu di masing-masing modul untuk memaksimalkan efisiensi.',
    ],
    sections: [
      {
        id: 'sec-ielts-1-1',
        title: '1. 4 Kriteria Resmi Penilaian IELTS Writing',
        badge: 'Crucial Knowledge',
        content: `Setiap esai dinilai secara independen berdasarkan 4 pilar berikut (masing-masing berbobot 25%):

1. **Task Achievement / Response (TR)**: Apakah kamu menjawab semua bagian prompt secara tuntas? Apakah posisimu jelas dan konsisten dari awal hingga akhir?
2. **Coherence & Cohesion (CC)**: Apakah ide disusun dalam paragraf logis dengan alur yang mulus? Apakah cohesive devices (kata penghubung dan kata rujukan) digunakan secara luwes dan tidak dipaksakan?
3. **Lexical Resource (LR)**: Ragam kosakata akademis, penggunaan kolokasi alami, keakuratan ejaan (spelling), dan kemampuan parafrase yang tepat.
4. **Grammatical Range & Accuracy (GRA)**: Perpaduan kalimat sederhana dan kalimat kompleks, variasi struktur (kondisional, pasif, inversion), dan minimnya error yang mengganggu pemahaman pembaca.`,
        ruleBox: {
          formula: 'Skor Akhir Writing = (TR + CC + LR + GRA) / 4',
          explanation: 'Keempat pilar memiliki bobot setara 25%. Mengabaikan satu aspek akan langsung memotong potensi skor akhir.',
          pitfall: 'Menumpuk kata sulit tanpa struktur paragraf yang jelas akan menurunkan skor CC dan LR sekaligus.',
        },
      },
      {
        id: 'sec-ielts-1-2',
        title: '2. Konversi Raw Score ke Band Score (Reading & Listening)',
        badge: 'Score Conversion',
        content: `Ujian Reading dan Listening masing-masing terdiri dari **40 pertanyaan**. Berikut adalah patokan resmi konversi jumlah jawaban benar (*raw score*) ke Band Score:

| Raw Score (Benar dari 40) | Academic Reading | General Reading | Listening (Semua Jalur) |
|---|---|---|---|
| **39 - 40** | Band 9.0 | Band 9.0 | Band 9.0 |
| **37 - 38** | Band 8.5 | Band 8.5 | Band 8.5 |
| **35 - 36** | Band 8.0 | Band 8.0 | Band 8.0 |
| **32 - 34** | Band 7.5 | Band 7.5 | Band 7.5 |
| **30 - 31** | Band 7.0 | Band 6.5 | Band 7.0 |
| **26 - 29** | Band 6.5 | Band 6.0 | Band 6.5 |
| **23 - 25** | Band 6.0 | Band 5.5 | Band 6.0 |
| **19 - 22** | Band 5.5 | Band 5.0 | Band 5.5 |

*Catatan: Pada Academic Reading, target Band 7.0 membutuhkan minimal 30 jawaban benar dari 40 soal.*`,
      },
      {
        id: 'sec-ielts-1-3',
        title: '3. Manajemen Waktu 4 Modul Ujian',
        badge: 'Time Management',
        content: `Alokasi waktu resmi yang harus dikuasai:

- **Listening (sekitar 30 menit + 10 menit transfer untuk Paper-based / 2 menit review untuk Computer-based)**:
  4 seksi (40 soal). Audio hanya diputar SATU KALI tanpa jeda pengulangan.
- **Reading (60 menit)**:
  3 teks panjang (40 soal). Rata-rata 20 menit per teks termasuk transfer jawaban ke lembar jawaban.
- **Writing (60 menit)**:
  - Task 1 (minimal 150 kata): Alokasi ideal 20 menit (bobot 33%).
  - Task 2 (minimal 250 kata): Alokasi ideal 40 menit (bobot 67%).
- **Speaking (11-14 menit)**:
  Wawancara tatap muka langsung dalam 3 bagian:
  - Part 1: Tanya-jawab umum (4-5 menit)
  - Part 2: Monolog cue card (1 menit persiapan + 2 menit bicara)
  - Part 3: Diskusi analitis mendalam (4-5 menit)`,
        examples: [
          {
            sentence: 'In IELTS Writing, dedicating 5 minutes for planning Task 2 prevents incoherent argumentation and ensures that both TR and CC criteria reach Band 7.0+.',
            translation: 'Dalam IELTS Writing, meluangkan 5 menit untuk membuat kerangka Task 2 mencegah argumen yang tidak koheren dan memastikan kriteria TR serta CC mencapai Band 7.0+.',
            explanation: 'Perencanaan matang sebelum menulis adalah pembeda antara esai Band 6.0 dan 7.5.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Untuk mendapatkan Band 7.0+, minimal 50% kalimat dalam tulisan harus berupa kalimat kompleks yang bebas error.',
      'Di Academic Reading dan Listening, minimal 30 dari 40 jawaban benar dibutuhkan untuk mengamankan Band 7.0.',
      'Task 2 berbobot 2 kali lipat dibanding Task 1; alokasikan 40 menit penuh untuk esai argumentatif.',
    ],
    prevLessonId: 'rw-06',
    nextLessonId: 'ielts-02',
  },
  {
    id: 'ielts-02',
    trackId: 'ielts-prep',
    slug: 'academic-task-1-data-reporting',
    title: 'IELTS Writing Task 1: Academic Data & Chart Reporting',
    order: 2,
    summary: 'Kuasai template 4 paragraf untuk mendeskripsikan diagram batang, grafik garis, pie chart, tabel, peta komparasi, dan diagram proses manufaktur dalam 20 menit.',
    readTimeMin: 12,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Menulis Paragraf Overview yang kuat (menonjolkan tren utama tanpa menjejalkan angka spesifik).',
      'Menguasai kosakata pergerakan data dengan variasi verba, adverbia, nomina, dan adjektiva.',
      'Menyusun deskripsi komparasi proporsi dan urutan proses berantai secara presisi.',
    ],
    sections: [
      {
        id: 'sec-ielts-2-1',
        title: '1. Struktur Emas 4 Paragraf Task 1',
        badge: 'Step-by-Step Blueprint',
        content: `Format standar untuk meraih Band 7.0+ pada laporan visual:

1. **Introduction (1 kalimat)**: Parafrase judul grafik dengan mengganti struktur kalimat dan sinonim (e.g. *The provided line graph illustrates the consumption patterns of...*).
2. **Overview (1-2 kalimat)**: Sorot 2 atau 3 tren paling menonjol atau perubahan paling ekstrem TANPA menyebutkan angka spesifik (*Overall, it is readily apparent that...*).
3. **Body Paragraph 1 (3-4 kalimat)**: Bahas kelompok data pertama dengan menyertakan bukti angka akurat, perbandingan, dan tahun acuan.
4. **Body Paragraph 2 (3-4 kalimat)**: Bahas kelompok data kedua yang tersisa dengan komparasi langsung terhadap kelompok pertama.`,
        ruleBox: {
          formula: 'Paragraf Overview WAJIB ada dan bebas dari angka spesifik detail.',
          explanation: 'Berdasarkan deskriptor resmi Cambridge, jika esai Task 1 tidak memiliki Overview yang jelas, skor Task Achievement maksimal hanya Band 5.0.',
          pitfall: 'Jangan pernah menyertakan opini atau rekomendasi seperti "In my opinion, the government should..." di Task 1.',
        },
      },
      {
        id: 'sec-ielts-2-2',
        title: '2. Katalog Kosakata Perubahan Tren',
        badge: 'Lexical Variety',
        content: `Hindari pengulangan kata "increase" dan "decrease" menggunakan matriks kosakata berikut:

| Kategori Tren | Bentuk Verba (V) | Bentuk Nomina (N) | Adverbia Modifikasi |
|---|---|---|---|
| **Naik Tajam** | rocket, surge, soar, shoot up | a sharp surge, a dramatic leap | rapidly, exponentially, steeply |
| **Naik Bertahap** | climb, rise, grow, mount | a steady rise, an upward trend | gradually, steadily, incrementally |
| **Turun Tajam** | plummet, plunge, collapse | a steep dive, a sharp drop | drastically, precipitously, sharply |
| **Turun Landai** | dip, dwindle, slide, decline | a moderate downturn, a slight dip | marginally, minimally, slowly |
| **Stagnan** | level off, plateau, stabilize | a period of stability, a plateau | at around, remaining constant |
| **Berfluktuasi** | oscillate, fluctuate | wild fluctuations, erratic swings | erratically, periodically |`,
      },
      {
        id: 'sec-ielts-2-3',
        title: '3. Bahasa Komparasi & Diagram Proses (Flowchart)',
        badge: 'Comparison & Process',
        content: `**Bahasa Komparasi Proporsi:**
- *Accounted for / constituted / represented roughly one-third (33%) of the aggregate output.*
- *Nearly doubled from 15% to slightly below 30% over the subsequent five-year interval.*
- *Outnumbered private vehicles by a margin of three to one.*

**Bahasa Urutan Proses (Process Diagram):**
Diagram proses hampir seluruhnya menggunakan **Passive Voice** dan kata transisi kronologis:
- *Initially / At the commencement of the process, raw bauxite is extracted from the earth.*
- *Subsequently / Following this filtration phase, the molten mixture is channeled into cooling chambers.*
- *The final stage culminates in the automated packaging of the refined product.*`,
        examples: [
          {
            sentence: 'Overall, it is evident that while the consumption of renewable energy experienced a dramatic surge, fossil fuel reliance dwindled steadily across the two-decade span.',
            translation: 'Secara keseluruhan, terlihat jelas bahwa sementara konsumsi energi terbarukan mengalami lonjakan dramatis, ketergantungan pada bahan bakar fosil menurun secara stabil sepanjang rentang dua dekade.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Overview adalah jantung penilaian Task 1; pastikan posisinya jelas (setelah intro atau di akhir).',
      'Minimal 150 kata diselesaikan dalam 20 menit; lewat dari waktu ini akan mengorbankan Task 2.',
      'Diagram proses membutuhkan Passive Voice yang konsisten untuk menunjukkan objektivitas langkah produksi.',
    ],
    prevLessonId: 'ielts-01',
    nextLessonId: 'ielts-03',
  },
  {
    id: 'ielts-03',
    trackId: 'ielts-prep',
    slug: 'writing-task-2-argumentative-mastery',
    title: 'IELTS Writing Task 2: Band 7.5+ Essay Blueprints',
    order: 3,
    summary: 'Kuasai formula esai 250 kata untuk 5 tipe pertanyaan: Agree/Disagree, Discuss Both Views, Problem & Solution, Advantages/Disadvantages, dan Double Question.',
    readTimeMin: 14,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Menyusun Thesis Statement yang tajam dan menguraikan posisi sejak pengantar.',
      'Mengembangkan paragraf body menggunakan metode P-E-E-L (Point, Explanation, Evidence, Link).',
      'Membedakan strategi penulisan untuk kelima tipe prompt utama esai Cambridge.',
    ],
    sections: [
      {
        id: 'sec-ielts-3-1',
        title: '1. Pengembangan Paragraf dengan Metode PEEL',
        badge: 'PEEL Method',
        content: `Setiap paragraf body wajib mengelaborasi SATU ide sentral secara komprehensif menggunakan formula PEEL:

- **P (Point)**: Kalimat topik pembuka yang merangkum argumen utama paragraf.
  *E.g. First and foremost, state-subsidized public transport plays an instrumental role in mitigating metropolitan carbon emissions.*
- **E (Explanation)**: Penjelasan kausalitas ilmiah mengapa dan bagaimana fenomena tersebut terjadi.
  *E.g. When mass transit networks become financially accessible and reliable, commuters willingly forego personal automobiles, thereby drastically curtailing exhaust fumes.*
- **E (Evidence / Example)**: Contoh nyata yang realistis atau rujukan studi kasus.
  *E.g. For instance, following the introduction of zero-fare municipal transit in Luxembourg, urban congestion metrics dropped by nearly 20% within eighteen months.*
- **L (Link)**: Kalimat penutup yang menautkan kembali argumen spesifik ke tesis utama esai.
  *E.g. Consequently, prioritizing mass transit expenditure serves as an effective mechanism for long-term ecological preservation.*`,
      },
      {
        id: 'sec-ielts-3-2',
        title: '2. 5 Format Pertanyaan Task 2 & Pola Tesis Masing-Masing',
        badge: '5 Prompt Types',
        content: `| Tipe Prompt | Tugas Penulis | Formula Thesis Statement |
|---|---|---|
| **Opinion (Agree / Disagree)** | Mengambil posisi tegas (sepenuhnya setuju/tidak, atau seimbang) | *I wholeheartedly concur with this assertion, as [Argumen 1] and [Argumen 2].* |
| **Discuss Both Views + Give Opinion** | Membedah kedua perspektif secara berimbang, lalu menyatakan preferensi | *While proponents highlight [Sudut A], I maintain that [Sudut B] offers greater merits.* |
| **Advantages vs Disadvantages** | Menimbang apakah kelebihan melampaui kekurangan | *Although [Aspek Negatif] cannot be overlooked, the accompanying benefits ultimately outweigh...* |
| **Causes & Solutions / Problems & Solutions** | Menganalisis pemicu dan menyajikan langkah mitigasi nyata | *This issue primarily stems from [Penyebab], which can be alleviated through [Solusi].* |
| **Two-Part / Double Question** | Menjawab kedua pertanyaan secara berurutan di body 1 dan body 2 | *This development is driven by [Jawaban Q1], and its broader societal ramifications are [Jawaban Q2].* |`,
      },
      {
        id: 'sec-ielts-3-3',
        title: '3. Band 5 vs Band 7+ Lexical & Grammatical Uplift',
        badge: 'Score Upgrade',
        content: `Perhatikan perbandingan peningkatan kalimat berikut:

- **Band 5.0**: *Pollution is bad for people and many cars make the air dirty in cities.*
- **Band 7.5+**: *Airborne contaminants pose grave hazards to public health, with vehicular emissions constituting the foremost contributor to urban atmospheric degradation.*

- **Band 5.0**: *If the government does not fix this, things will get worse.*
- **Band 7.5+**: *Were policymakers to neglect decisive regulatory interventions, the socioeconomic repercussions would undoubtedly escalate.* (Conditional Inversion)`,
        examples: [
          {
            sentence: 'While critics argue that autonomous technology displaces manual workers, I maintain that it ultimately stimulates macroeconomic prosperity by generating novel technical sectors.',
            translation: 'Meskipun para kritikus berpendapat bahwa teknologi otonom menggeser pekerja manual, saya berpendapat bahwa teknologi ini pada akhirnya mendorong kemakmuran makroekonomi dengan memunculkan sektor teknis baru.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Selalu cantumkan posisi yang jelas di paragraf pendahuluan (Thesis Statement); jangan menyimpan opinimu sebagai kejutan di kesimpulan.',
      'Satu body paragraph = satu ide pokok yang dikembangkan sampai tuntas dengan PEEL.',
      'Gunakan variasi kalimat kompleks (kondisional, participle clauses, inversion) untuk mengamankan skor GRA Band 7.5+.',
    ],
    prevLessonId: 'ielts-02',
    nextLessonId: 'ielts-04',
  },
  {
    id: 'ielts-04',
    trackId: 'ielts-prep',
    slug: 'ielts-reading-question-types',
    title: 'IELTS Reading: Question Type Strategies',
    order: 4,
    summary: 'Kuasai trik menaklukkan soal True/False/Not Given, Matching Headings, Sentence Completion, dan Summary Completion di Academic Reading.',
    readTimeMin: 12,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Membedakan batas tipis antara False dan Not Given secara matematis dan logis.',
      'Menemukan judul paragraf (Matching Headings) dengan memindai kalimat topik dan menyingkirkan distractor.',
      'Mematuhi batasan jumlah kata (Word Limit) pada Summary dan Sentence Completion.',
    ],
    sections: [
      {
        id: 'sec-ielts-4-1',
        title: '1. True / False / Not Given vs Yes / No / Not Given',
        badge: 'TFNG Precision',
        content: `Kaidah mutlak Cambridge dalam menjawab soal verifikasi teks:

- **TRUE / YES**: Informasi dalam soal *100% cocok dan sejalan* dengan apa yang dinyatakan dalam teks (biasanya berupa parafrase parafrasis).
- **FALSE / NO**: Informasi dalam soal *secara eksplisit berlawanan atau bertentangan langsung* dengan fakta dalam teks. Jika teks menyatakan A, soal menyatakan bukan A.
- **NOT GIVEN**: Teks *tidak memiliki cukup informasi* untuk membuktikan kebenaran ataupun kesalahan pernyataan soal.

**Jebakan Klasik Penentu NOT GIVEN:**
Jika teks mengatakan: *"The treatment was tested on 500 adult patients."*
Soal menyatakan: *"The treatment was safe for teenage patients."*
➔ **Jawaban: NOT GIVEN**, bukan False! Teks tidak pernah membahas efek pada remaja. Kita tidak bisa berasumsi berbahaya (False) maupun aman (True).`,
        ruleBox: {
          formula: 'False = Teks membuktikan soal SALAH. Not Given = Teks TIDAK MEMBAHAS kebenaran/kesalahannya.',
          explanation: 'Jangan gunakan asumsi atau pengetahuan pribadimu dari dunia nyata; patuhi hanya teks yang ada.',
          pitfall: 'Memilih False padahal teks sama sekali tidak menyebutkan informasi pembanding.',
        },
      },
      {
        id: 'sec-ielts-4-2',
        title: '2. Matching Headings & Topic Sentence Scanning',
        badge: 'Matching Headings',
        content: `Strategi efisien menyelesaikan Matching Headings:

1. **Baca Daftar Heading Terlebih Dahulu**: Garis bawahi kata kunci unik pada opsi heading sebelum membaca teks.
2. **Cari Topic Sentence**: Pada sebagian besar paragraf akademis, gagasan utama berada di kalimat ke-1 atau ke-2, atau kalimat rangkuman terakhir.
3. **Waspadai Jebakan Kata Sama (Word-Match Trap)**: Pembuat soal sering menaruh satu kata yang persis sama di heading yang SALAH untuk memancing pembaca yang terburu-buru. Heading yang benar biasanya memparafrase keseluruhan ide paragraf.
4. **Coret Opsi yang Sudah Dipilih**: Opsi heading selalu lebih banyak dari jumlah paragraf untuk menyediakan *distractor*.`,
      },
      {
        id: 'sec-ielts-4-3',
        title: '3. Sentence Completion & Summary Completion',
        badge: 'Word Limit Rules',
        content: `Kaidah ketat pengisian celah kata:

- **Patuhi Batasan Kata**: *NO MORE THAN TWO WORDS AND/OR A NUMBER*. Jika kamu menulis 3 kata, jawaban langsung otomatis dinilai SALAH, meski artinya tepat.
- **Gunakan Kata Persis dari Teks**: Kecuali diperintahkan memilih dari word bank, ambil kata langsung dari kutipan tanpa mengubah bentuk gramatikalnya (misal mengubah verb menjadi gerund).
- **Pengecekan Gramatikal**: Baca kalimat lengkap setelah diisi. Jika secara tata bahasa terdengar janggal (misal subjek jamak bertemu verba tunggal), pilihan katamu hampir pasti salah.`,
        examples: [
          {
            sentence: 'When skimming for Matching Headings, focus on the overarching communicative purpose of the paragraph rather than isolated technical vocabulary.',
            translation: 'Saat melakukan skimming untuk Matching Headings, fokuslah pada tujuan komunikasi menyeluruh dari paragraf tersebut daripada istilah teknis yang terisolasi.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'TFNG: False berarti ada bukti langsung yang menyangkal; Not Given berarti informasinya hilang atau tidak lengkap.',
      'Jangan pernah melanggar batas jumlah kata pada instruksi soal completion.',
      'Selesaikan soal yang urut kronologis (Multiple Choice, Sentence Completion) bersamaan dengan pembacaan teks.',
    ],
    prevLessonId: 'ielts-03',
    nextLessonId: 'ielts-05',
  },
  {
    id: 'ielts-05',
    trackId: 'ielts-prep',
    slug: 'ielts-speaking-parts-1-2-3',
    title: 'IELTS Speaking: Part 1, 2, and 3 Mastery',
    order: 5,
    summary: 'Kuasai teknik menjawab spontan Part 1 dengan formula AREA, monolog 2 menit Part 2 menggunakan peta pikiran cue card, dan diskusi analitis Part 3 berbobot Band 8.0.',
    readTimeMin: 12,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Memperpanjang jawaban Part 1 secara natural tanpa bertele-tele menggunakan formula AREA.',
      'Memaksimalkan waktu persiapan 1 menit di Part 2 untuk menstrukturkan monolog 2 menit yang fasih.',
      'Menggunakan teknik spekulasi dan hedging pada perdebatan abstrak Part 3.',
    ],
    sections: [
      {
        id: 'sec-ielts-5-1',
        title: '1. Part 1: Menjawab Spontan dengan Formula AREA',
        badge: 'AREA Formula',
        content: `Jawaban Part 1 yang terlalu singkat (*"Yes, I like reading."*) membuat penguji tidak bisa menilai kefasihanmu. Gunakan formula **AREA**:

- **A (Answer)**: Jawab pertanyaan secara lugas (*To be honest, I am an avid reader...*)
- **R (Reason)**: Jelaskan alasan psikologis atau praktis di baliknya (*...primarily because books provide an escape from the hectic pace of daily life...*)
- **E (Example)**: Berikan contoh spesifik baru-baru ini (*...for instance, I recently finished a historical novel about the Renaissance...*)
- **A (Alternative / Additional Detail)**: Tambahkan detail pelengkap (*...which actually broadened my perspective on European architecture.*)`,
      },
      {
        id: 'sec-ielts-5-2',
        title: '2. Part 2 Cue Card: 1-Minute Prep & 2-Minute Monologue',
        badge: 'Cue Card Strategy',
        content: `Dalam waktu persiapan 1 menit:
1. **Jangan menulis kalimat lengkap**: Tulis 5-6 kata kunci utama dalam bentuk diagram alur kronologis (Past ➔ Present ➔ Personal Reflection).
2. **Penuhi 4 Pertanyaan Panduan**: Cue card selalu memiliki 4 prompt (Who, Where, What happened, Why it is memorable). Jadikan tiap prompt sebagai pilar 30 detik bicara.
3. **Berceritalah dengan Variasi Tenses**: Mulai dengan Simple Past untuk latar belakang cerita, gunakan Past Continuous untuk aksi yang sedang berlangsung, dan tutup dengan Present Perfect / Present Simple untuk refleksi nilai moralnya.`,
      },
      {
        id: 'sec-ielts-5-3',
        title: '3. Part 3: Diskusi Akademis, Nuansa & Hedging Language',
        badge: 'Academic Discussion',
        content: `Part 3 menguji kemampuan berpikir kritis mengenai fenomena masyarakat umum. Hindari jawaban berbasis opini pribadi sempit (*"My mom does this..."*); bicaralah dari sudut pandang sosiologis, ekonomi, dan global:

**Frasa Pembuka & Penunda (Buying Time):**
- *That is a remarkably multifaceted question...*
- *From a socioeconomic standpoint, I would argue that...*
- *Looking at this from the perspective of developing nations...*

**Bahasa Spekulasi & Hedging:**
- *It is widely believed that... however, empirical evidence tends to indicate otherwise.*
- *One could hypothesize that rapid digitization might inadvertently exacerbate social isolation.*`,
        examples: [
          {
            sentence: 'Examiner: "Do you think artificial intelligence will replace teachers?" Candidate: "While AI will undoubtedly streamline administrative duties, it is highly improbable that algorithmic systems could replicate the empathetic mentorship that human educators naturally provide."',
            translation: 'Penguji: "Apakah menurut Anda AI akan menggantikan guru?" Kandidat: "Meskipun AI pasti akan merampingkan tugas administratif, sangat kecil kemungkinannya sistem algoritmik dapat meniru bimbingan penuh empati yang disediakan secara alami oleh pendidik manusia."',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Part 1: Gunakan formula AREA untuk memperluas respon menjadi 3-4 kalimat natural.',
      'Part 2: Bicara terus sampai penguji menghentikanmu di menit kedua; gunakan catatan kata kunci sebagai panduan.',
      'Part 3: Bahas fenomena dari skala sosial kemasyarakatan, bukan sekadar pengalaman pribadi.',
    ],
    prevLessonId: 'ielts-04',
    nextLessonId: 'ielts-06',
  },
  {
    id: 'ielts-06',
    trackId: 'ielts-prep',
    slug: 'ielts-listening-traps-strategies',
    title: 'IELTS Listening: Strategies & Common Traps',
    order: 6,
    summary: 'Kuasai navigasi 4 seksi listening, teknik antisipasi kata kunci saat waktu jeda 30 detik, serta cara mendeteksi koreksi diri (self-correction) dan jebakan ejaan.',
    readTimeMin: 11,
    difficulty: 'IELTS 6.5+',
    objectives: [
      'Memanfaatkan waktu jeda 30 detik untuk memprediksi jenis kata (Noun, Verb, Number) yang hilang.',
      'Mengenali jebakan distractor dan self-correction pembicara dalam seksi dialog.',
      'Menghindari kesalahan format angka, tanggal, dan ejaan huruf abjad Inggris yang rentan tertukar.',
    ],
    sections: [
      {
        id: 'sec-ielts-6-1',
        title: '1. Anatomi 4 Seksi Listening',
        badge: 'Section Breakdown',
        content: `Setiap seksi memiliki tantangan register bahasa yang berbeda:

- **Section 1 (Everyday Social Dialogue)**: Percakapan dua orang dalam konteks sehari-hari (misal memesan akomodasi, pendaftaran keanggotaan). Fokus pada penulisan nama, angka, tanggal, dan alamat.
- **Section 2 (Everyday Social Monologue)**: Monolog satu pembicara mengenai fasilitas publik (misal panduan tur museum, pengumuman festival komunitas). Sering menyertakan soal pelabelan peta atau denah (*Map Labelling*).
- **Section 3 (Academic Discussion)**: Percakapan 2 hingga 4 mahasiswa dengan dosen pembimbing mengenai proyek penelitian atau presentasi ilmiah. Banyak jebakan pergantian kesepakatan dan kompromi.
- **Section 4 (University Lecture)**: Kuliah akademis monolog tanpa jeda di tengah-tengah. Sangat bergantung pada kemampuan mendengarkan kata sinyal (*signposting language*) seperti *Turning now to... / Another compelling hypothesis is...*`,
      },
      {
        id: 'sec-ielts-6-2',
        title: '2. Teknik Prediksi Jawaban & Waktu Jeda',
        badge: 'Prediction Strategy',
        content: `Sebelum rekaman dimulai, kamu selalu diberi waktu sekitar 30 detik (*"You have some time to look at questions 1 to 5"*). Lakukan 3 langkah ini:

1. **Identifikasi Part of Speech**: Apakah titik-titik membutuhkan Noun, Adjective, atau Verb? (*e.g. The library requires a deposit of £[____]* ➔ Jelas membutuhkan angka nominal uang).
2. **Perhatikan Kategori Semantik**: Apakah kata yang dicari berupa nama tempat, warna, atau bahan material?
3. **Cari Kata Sinyal (Signposts)**: Lingkari kata sebelum dan sesudah celah kata untuk bersiap mendengar parafrasenya di audio.`,
      },
      {
        id: 'sec-ielts-6-3',
        title: '3. Jebakan Self-Correction & Ejaan Abjad',
        badge: 'Classic Traps',
        content: `**Jebakan Koreksi Diri (Self-Correction Trap):**
Pembicara sengaja menyebutkan informasi pertama, lalu meralatnya:
- *Speaker: "We will meet on Tuesday morning... oh wait, sorry, our supervisor rescheduled it to Thursday afternoon."*
➔ Jawaban yang benar adalah **Thursday**, bukan Tuesday!

**Jebakan Ejaan Abjad & Angka:**
- Huruf vokal yang sering tertukar penutur Indonesia: **A** (/eɪ/), **E** (/iː/), **I** (/aɪ/).
- Huruf konsonan yang sering mengecoh: **J** (/dʒeɪ/) vs **G** (/dʒiː/).
- Angka belasan vs puluhan: **15** (fifTEEN) vs **50** (FIFty). Perhatikan penekanan suku kata (*stress*).
- Plural 's': Jika audio mengucapkan *"researchers"*, menulis *"researcher"* (singular) akan langsung dinilai SALAH secara sistem.`,
        examples: [
          {
            sentence: 'In Section 4 lectures, speakers employ discourse markers such as "Moving forward to our secondary finding" to signal the exact transition to the next exam prompt.',
            translation: 'Dalam kuliah Seksi 4, pembicara menggunakan penanda wacana seperti "Beralih ke temuan kedua kami" untuk menandakan transisi tepat ke butir soal ujian berikutnya.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Gunakan waktu jeda 30 detik hanya untuk membaca soal di depan, bukan menatap kembali soal yang sudah terlewat.',
      'Waspadai kata koreksi diri seperti "Actually...", "No, wait...", "Let me rephrase that...".',
      'Perhatikan akhiran jamak (-s/-es); kealpaan satu huruf \'s\' menggugurkan nilai jawaban.',
    ],
    prevLessonId: 'ielts-05',
    nextLessonId: 'toefl-01',
  },
];

export const ieltsExercises: Record<string, Exercise[]> = {
  'ielts-01': [
    {
      id: 'ex-ielts01-1',
      lessonId: 'ielts-01',
      type: 'multiple-choice',
      title: 'Kriteria Penilaian IELTS Writing',
      instruction: 'Pilih pernyataan yang paling benar mengenai kriteria Coherence and Cohesion (CC).',
      question: 'Apa faktor utama yang dinilai dalam kriteria Coherence & Cohesion?',
      options: [
        { id: 'a', text: 'Jumlah kosakata tingkat tinggi yang dimasukkan ke setiap kalimat.', explanation: 'Itu dinilai dalam Lexical Resource.' },
        { id: 'b', text: 'Alur logika antar kalimat, pembagian paragraf yang rapi, dan penggunaan linking words yang luwes.', explanation: 'Tepat! CC mengukur kejelasan struktur dan transisi ide.' },
        { id: 'c', text: 'Ketepatan rumus grammar past tense dan modal verbs.', explanation: 'Itu dinilai dalam Grammatical Range and Accuracy.' },
        { id: 'd', text: 'Banyaknya halaman yang berhasil ditulis oleh peserta.', explanation: 'Panjang berlebih tanpa struktur tidak menaikkan nilai CC.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-ielts01-2',
      lessonId: 'ielts-01',
      type: 'matching',
      title: 'Alokasi Waktu & Format Modul IELTS',
      instruction: 'Pasangkan modul ujian dengan rincian waktu dan format resminya.',
      pairs: [
        { id: 'm1', left: 'Listening', right: '40 soal dalam 30 menit (audio diputar 1 kali)' },
        { id: 'm2', left: 'Academic Reading', right: '40 soal dari 3 teks panjang dalam 60 menit' },
        { id: 'm3', left: 'Writing Task 1 & 2', right: 'Laporan 150 kata (20 mnt) & Esai 250 kata (40 mnt)' },
        { id: 'm4', left: 'Speaking', right: 'Wawancara interaktif 3 bagian dalam 11-14 menit' },
      ],
      explanation: 'Memahami batasan waktu setiap modul adalah kunci ketenangan saat hari ujian.',
      points: 15,
    },
    {
      id: 'ex-ielts01-3',
      lessonId: 'ielts-01',
      type: 'fill-blank',
      title: 'Target Raw Score Band 7.0',
      instruction: 'Lengkapi pernyataan target skor di bawah dengan angka yang tepat.',
      sentence: 'Untuk meraih predikat Band 7.0 pada Academic Reading, seorang kandidat wajib menjawab minimal [___] soal dengan benar dari total 40 pertanyaan yang diujikan.',
      targets: [{ index: 0, correctAnswers: ['30', '30 soal'], hint: 'Antara 30 hingga 31 jawaban benar' }],
      wordBank: ['30', '25', '35', '20'],
      explanation: 'Skor 30 dari 40 pada Academic Reading setara dengan Band 7.0.',
      points: 10,
    },
    {
      id: 'ex-ielts01-4',
      lessonId: 'ielts-01',
      type: 'multiple-choice',
      title: 'Grammatical Range Band 7.0 Requirement',
      instruction: 'Berapa rasio kalimat kompleks bebas error yang dibutuhkan untuk Band 7.0 dalam kriteria Grammatical Range & Accuracy?',
      question: 'Berdasarkan deskriptor resmi Cambridge, apa syarat kalimat untuk meraih Band 7.0 GRA?',
      options: [
        { id: 'a', text: 'Semua kalimat (100%) wajib sempurna tanpa typo sama sekali.', explanation: 'Itu adalah ekspektasi Band 9.0; Band 7.0 masih menoleransi occasional slips.' },
        { id: 'b', text: 'Memproduksi kalimat kompleks yang bervariasi dengan setidaknya 50% kalimat sepenuhnya bebas error.', explanation: 'Benar! Mayoritas kalimat harus bebas kesalahan dengan struktur kompleks yang terkontrol.' },
        { id: 'c', text: 'Hanya boleh memakai kalimat sederhana (Simple Sentences) agar tidak salah.', explanation: 'Hanya menggunakan kalimat sederhana akan membatasi skor maksimal di Band 4.0-5.0.' },
        { id: 'd', text: 'Setiap kalimat wajib memiliki panjang minimal 40 kata.', explanation: 'Panjang kata bukan tolok ukur ketepatan tata bahasa.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'ielts-02': [
    {
      id: 'ex-ielts02-1',
      lessonId: 'ielts-02',
      type: 'multiple-choice',
      title: 'Mengidentifikasi Kalimat Overview yang Tepat',
      instruction: 'Manakah kalimat berikut yang paling cocok sebagai Overview Paragraf Task 1?',
      question: 'Pilih kalimat overview terbaik untuk grafik konsumsi energi terbarukan selama 20 tahun:',
      options: [
        { id: 'a', text: 'In 2005, solar energy was exactly 14.2 gigawatts and wind energy was 28.5 gigawatts.', explanation: 'Terlalu detail dengan angka spesifik, bukan gambaran umum tren.' },
        { id: 'b', text: 'Overall, it is evident that total renewable energy output experienced a substantial upward trajectory throughout the period, with solar power recording the most dramatic increase.', explanation: 'Sempurna! Menyorot tren keseluruhan dan komponen paling mencolok tanpa menjejali angka mentah.' },
        { id: 'c', text: 'I think solar power is very good for our planet and the government should invest more.', explanation: 'Opini pribadi dilarang dalam Task 1.' },
        { id: 'd', text: 'In conclusion, energy is very important for all countries in the modern era.', explanation: 'Ini terlalu klise dan tidak merangkum data grafik.' },
      ],
      correctAnswerId: 'b',
      points: 15,
    },
    {
      id: 'ex-ielts02-2',
      lessonId: 'ielts-02',
      type: 'matching',
      title: 'Kosakata Pergerakan Tren Data',
      instruction: 'Pasangkan pergerakan data dengan verba bahasa Inggris yang paling akurat.',
      pairs: [
        { id: 'tr1', left: 'Kenaikan sangat tajam dan mendadak', right: 'soared / surged / rocketed' },
        { id: 'tr2', left: 'Penurunan drastis mendekati titik terendah', right: 'plummeted / plunged' },
        { id: 'tr3', left: 'Kondisi stabil tanpa perubahan berarti', right: 'plateaued / leveled off' },
        { id: 'tr4', left: 'Pergerakan naik-turun tidak beraturan', right: 'fluctuated wildly' },
      ],
      explanation: 'Variasi verba tren menunjukkan keunggulan Lexical Resource kandidat.',
      points: 15,
    },
    {
      id: 'ex-ielts02-3',
      lessonId: 'ielts-02',
      type: 'fill-blank',
      title: 'Frasa Proporsi & Komparasi Data',
      instruction: 'Lengkapi kalimat deskripsi data dengan frasa perbandingan yang tepat.',
      sentence: 'Between 2010 and 2020, electric vehicle ownership nearly [___], rising from 15% to almost 30% of total automotive registrations.',
      targets: [{ index: 0, correctAnswers: ['doubled', 'increased twofold'], hint: 'Berlipat ganda dua kali' }],
      wordBank: ['doubled', 'tripled', 'halved', 'stabilized'],
      explanation: 'Kenaikan dari 15% ke hampir 30% berarti nilainya naik dua kali lipat (nearly doubled).',
      points: 10,
    },
    {
      id: 'ex-ielts02-4',
      lessonId: 'ielts-02',
      type: 'multiple-choice',
      title: 'Grammar Task 1 Process Diagram',
      instruction: 'Pilih kalimat laporan proses daur ulang yang paling tepat secara gramatikal akademis.',
      question: 'Manakah kalimat proses yang menggunakan struktur pasif dan transisi urutan terbaik?',
      options: [
        { id: 'a', text: 'People crush the plastic bottles and then they melt them in the big furnace.', explanation: 'Penggunaan sudut pandang aktif "people/they" kurang akademis untuk diagram proses.' },
        { id: 'b', text: 'Subsequently, the sorted plastic containers are shredded into uniform pellets before being transferred to heating chambers.', explanation: 'Sempurna! Menggunakan passive voice, participle clause (before being transferred), dan vocabulary presisi.' },
        { id: 'c', text: 'Next the plastic bottles are melting and it becomes very hot liquid.', explanation: 'Struktur "are melting" kurang tepat secara pasif industrial.' },
        { id: 'd', text: 'In my view, plastic shredding is the most important step of the whole factory.', explanation: 'Opini pribadi dilarang dalam Task 1.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'ielts-03': [
    {
      id: 'ex-ielts03-1',
      lessonId: 'ielts-03',
      type: 'writing-rubric',
      title: 'Simulasi Penulisan IELTS Writing Task 2 (Band 7.0+ Assessment)',
      instruction: 'Tulis esai lengkap sesuai instruksi prompt di bawah (minimal 250 kata). Evaluasi tulisanmu menggunakan 4 kriteria Cambridge di panel evaluasi.',
      taskType: 'IELTS-Task-2',
      prompt: 'Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?',
      suggestedTimeMin: 40,
      minWordCount: 250,
      maxWordCount: 350,
      criteria: [
        {
          id: 'tr',
          name: 'Task Achievement / Response',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Fully addresses all parts of the prompt with a well-developed, insightful thesis and clear position throughout.' },
            { score: 7, label: 'Band 7', description: 'Addresses all parts of the task with a clear position throughout, presenting relevant main ideas supported with explanations.' },
            { score: 5, label: 'Band 5', description: 'Addresses the task only partially; the format may be inappropriate or position unclear.' },
          ],
        },
        {
          id: 'cc',
          name: 'Coherence and Cohesion',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Seamless cohesion where paragraphing and discourse markers are effortless and natural.' },
            { score: 7, label: 'Band 7', description: 'Logically organizes information and ideas with clear progression throughout; uses a range of cohesive devices appropriately.' },
            { score: 5, label: 'Band 5', description: 'Presents information with some organization but may lack overall progression or overuse mechanical linking words.' },
          ],
        },
        {
          id: 'lr',
          name: 'Lexical Resource',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Uses a wide range of vocabulary with very natural and sophisticated control of lexical features; rare minor slips only.' },
            { score: 7, label: 'Band 7', description: 'Uses a sufficient range of vocabulary with some flexibility and precision; uses less common lexical items with awareness of style and collocation.' },
            { score: 5, label: 'Band 5', description: 'Uses a limited range of vocabulary; makes noticeable errors in spelling and word formation.' },
          ],
        },
        {
          id: 'gra',
          name: 'Grammatical Range and Accuracy',
          weightPercent: 25,
          descriptors: [
            { score: 9, label: 'Band 9', description: 'Uses a wide range of structures with full flexibility and accuracy; rare minor errors characteristic of native-speaker slips.' },
            { score: 7, label: 'Band 7', description: 'Uses a variety of complex structures with good control; produces frequent error-free sentences.' },
            { score: 5, label: 'Band 5', description: 'Uses only a limited range of structures; attempts complex sentences but these tend to be less accurate.' },
          ],
        },
      ],
      modelAnswer: {
        bandOrScore: 'Band 8.0 Model Answer',
        text: `It is frequently argued that mandatory voluntary service ought to be integrated into secondary school curricula. I largely agree with this viewpoint because community participation fosters civic responsibility and equips adolescents with invaluable interpersonal skills, although adequate flexibility must be maintained so as not to overburden students academically.

First and foremost, engaging in civic initiatives nurtures a heightened sense of empathy and social responsibility. When young individuals volunteer at local shelters, public libraries, or environmental conservation projects, they gain firsthand exposure to societal challenges beyond their immediate academic circle. This experiential learning dismantles self-centered tendencies and encourages teenagers to view themselves as proactive contributors to the public good. For instance, studies indicate that students involved in community service are significantly more likely to participate in civic duties and demonstrate higher levels of altruism in adulthood.

Furthermore, community service provides a practical platform for teenagers to develop essential transferable skills that classroom instruction alone cannot offer. Working in team-oriented public settings refines communication, problem-solving, and conflict-resolution abilities. Moreover, managing community commitments alongside academic deadlines teaches vital time-management skills, which are crucial for prospective university studies and professional careers.

Nonetheless, while the advantages are compelling, policymakers must ensure that these programmes do not place excessive demands on students preparing for rigorous national examinations. The requirement should be structured with reasonable hourly expectations, such as two hours per week, allowing students to balance scholarly commitments with civic engagement harmoniously.

In conclusion, incorporating compulsory community service into high school education is a constructive policy that cultivates mature, empathetic, and capable citizens. Provided that schools manage the workload prudently, this initiative yields substantial benefits for both students and society at large.`,
        analysis: [
          'Strong thesis statement in the introduction acknowledging nuance.',
          'Paragraph 2 focuses on empathy and social responsibility with an evidence citation.',
          'Paragraph 3 focuses on transferable soft skills and practical time management.',
          'Paragraph 4 addresses potential counter-arguments (academic workload) and proposes a balanced solution.',
          'Rich academic vocabulary: "nurtures a heightened sense of empathy", "experiential learning", "transferable skills", "civic engagement".',
        ],
      },
      recommendedVocabulary: [
        { term: 'Civic engagement', definition: 'Partisipasi aktif dalam kegiatan sosial bermasyarakat', example: 'Civic engagement among youth strengthens democratic resilience.' },
        { term: 'Experiential learning', definition: 'Pembelajaran melalui pengalaman langsung di lapangan', example: 'Volunteering offers experiential learning that textbooks cannot replicate.' },
        { term: 'Altruism', definition: 'Sikap kepedulian tanpa pamrih demi kesejahteraan orang lain', example: 'Community projects cultivate altruism in adolescents.' },
      ],
      points: 25,
    },
    {
      id: 'ex-ielts03-2',
      lessonId: 'ielts-03',
      type: 'matching',
      title: 'Menyesuaikan Pola Tesis dengan Prompt Soal',
      instruction: 'Pasangkan jenis pertanyaan esai dengan pendekatan struktur paragraf body yang tepat.',
      pairs: [
        { id: 'p1', left: 'To what extent do you agree or disagree?', right: 'Nyatakan posisi tegas sejak awal dan dukung dengan 2 alasan terperinci' },
        { id: 'p2', left: 'Discuss both views and give your opinion', right: 'Ulas argumen pihak A di body 1, pihak B di body 2, dan jelaskan opinimu' },
        { id: 'p3', left: 'Do the advantages outweigh the disadvantages?', right: 'Bandingkan kedua sisi dan tunjukkan sisi mana yang bobotnya lebih dominan' },
        { id: 'p4', left: 'What are the causes and what solutions can be offered?', right: 'Body 1 membahas pemicu masalah, Body 2 menyajikan langkah solutif' },
      ],
      explanation: 'Menyesuaikan format penulisan dengan jenis prompt menjamin skor Task Response maksimal.',
      points: 15,
    },
    {
      id: 'ex-ielts03-3',
      lessonId: 'ielts-03',
      type: 'multiple-choice',
      title: 'Lexical Uplift untuk Band 7.5+',
      instruction: 'Pilih opsi yang mengubah kalimat bernilai Band 5.0 menjadi kalimat berstandar akademis Band 7.5+.',
      question: 'Kalimat dasar: "Pollution in big cities is very bad and makes people get sick."',
      options: [
        { id: 'a', text: 'Air pollution in big cities is extremely bad and makes a lot of citizens have sickness.', explanation: 'Hanya menambahkan "extremely" dan "a lot of", masih tergolong kosakata informal.' },
        { id: 'b', text: 'Severe atmospheric contamination in metropolitan areas poses grave hazards to public respiratory health.', explanation: 'Luar biasa! Mengganti kata umum dengan istilah akademis: "atmospheric contamination", "metropolitan areas", "grave hazards".' },
        { id: 'c', text: 'Bad dirty air in cities is harmful and it is not good for human health.', explanation: 'Masih sangat sederhana dan repetitive.' },
        { id: 'd', text: 'Cities have too much smog and this thing makes everyone go to the hospital.', explanation: 'Frasa "this thing" dan "everyone go to the hospital" sangat tidak formal.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'ielts-04': [
    {
      id: 'ex-ielts04-1',
      lessonId: 'ielts-04',
      type: 'multiple-choice',
      title: 'Logika True / False / Not Given',
      instruction: 'Analisis kutipan teks berikut dan tentukan status pernyataan di bawahnya.',
      question: 'Kutipan Teks: "The ancient irrigation network in Petra was engineered exclusively to store seasonal winter rainfall, ensuring municipal water stability throughout arid summer periods."\n\nPernyataan Soal: "The residents of Petra derived the majority of their drinking water from subterranean underground springs."',
      options: [
        { id: 'a', text: 'TRUE', explanation: 'Teks tidak menyebutkan adanya sumber mata air bawah tanah.' },
        { id: 'b', text: 'FALSE', explanation: 'Tepat! Teks menyatakan jaringan air dibangun "EXCLUSIVELY to store seasonal winter rainfall", yang bertentangan langsung dengan klaim bahwa mayoritas air berasal dari mata air bawah tanah.' },
        { id: 'c', text: 'NOT GIVEN', explanation: 'Kata "exclusively" dalam teks sudah secara definitif membantah sumber air lain.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-ielts04-2',
      lessonId: 'ielts-04',
      type: 'matching',
      title: 'Strategi Soal Reading IELTS',
      instruction: 'Pasangkan jenis soal Reading dengan strategi pengerjaan yang paling efektif.',
      pairs: [
        { id: 'rs1', left: 'Matching Headings', right: 'Pahami ide sentral paragraf dan hindari jebakan kata tunggal yang sama' },
        { id: 'rs2', left: 'Summary Completion', right: 'Perhatikan batasan jumlah kata dan pastikan kata yang dipilih pas secara grammar' },
        { id: 'rs3', left: 'True / False / Not Given', right: 'Bandingkan makna faktual; pilih Not Given jika informasi pembanding tidak ada' },
        { id: 'rs4', left: 'Matching Information to Paragraphs', right: 'Scan kata kunci spesifik dan pahami bahwa satu paragraf bisa dipakai dua kali' },
      ],
      explanation: 'Setiap tipe soal memiliki strategi pengerjaan unik agar waktu 60 menit mencukupi 40 pertanyaan.',
      points: 15,
    },
    {
      id: 'ex-ielts04-3',
      lessonId: 'ielts-04',
      type: 'fill-blank',
      title: 'Kepatuhan Word Limit',
      instruction: 'Instruksi soal berbunyi: "Write NO MORE THAN TWO WORDS from the passage". Teks berbunyi: "The team implemented an innovative biological filter." Lengkapi celah di bawah:',
      sentence: 'The experimental purification apparatus relied on an [___].',
      targets: [{ index: 0, correctAnswers: ['biological filter', 'innovative filter'], hint: 'Maksimal dua kata benda' }],
      wordBank: ['biological filter', 'innovative biological filter', 'water filter', 'filter apparatus'],
      explanation: '"Innovative biological filter" adalah 3 kata (melanggar aturan); "biological filter" adalah jawaban 2 kata yang sah.',
      points: 10,
    },
    {
      id: 'ex-ielts04-4',
      lessonId: 'ielts-04',
      type: 'multiple-choice',
      title: 'Menyingkirkan Distractor pada Multiple Choice',
      instruction: 'Dalam soal pilihan ganda IELTS Reading, apa ciri khas opsi jawaban pengecoh (distractor)?',
      question: 'Manakah opsi yang biasanya merupakan pengecoh yang harus diwaspadai?',
      options: [
        { id: 'a', text: 'Opsi yang menggunakan sinonim akurat dari kalimat di teks.', explanation: 'Itu justru ciri-ciri jawaban yang benar.' },
        { id: 'b', text: 'Opsi yang memakai kata-kata absolut ekstrem seperti "always", "never", "entirely", padahal di teks bernuansa moderat.', explanation: 'Tepat! Soal akademis jarang sekali bersifat mutlak; kata ekstrem sering menandakan distractor.' },
        { id: 'c', text: 'Opsi yang merangkum keseluruhan ide paragraf.', explanation: 'Itu adalah karakteristik opsi benar.' },
        { id: 'd', text: 'Opsi yang tidak mengandung kata-kata sulit.', explanation: 'Tingkat kesulitan kata tidak menentukan benar/salah opsi.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'ielts-05': [
    {
      id: 'ex-ielts05-1',
      lessonId: 'ielts-05',
      type: 'matching',
      title: 'Penerapan Formula AREA Part 1',
      instruction: 'Pasangkan cuplikan respon dengan elemen formula AREA yang sesuai untuk pertanyaan "Do you enjoy cooking?".',
      pairs: [
        { id: 'ar1', left: '"Yes, I am genuinely passionate about preparing meals at home."', right: 'Answer (Jawaban Lugas)' },
        { id: 'ar2', left: '"It allows me to unwind mentally and control nutritional ingredients."', right: 'Reason (Alasan Inti)' },
        { id: 'ar3', left: '"Last weekend, for instance, I made a traditional vegetable curry from scratch."', right: 'Example (Contoh Konkret)' },
        { id: 'ar4', left: '"Though during busy weekdays, I occasionally opt for healthy meal deliveries."', right: 'Additional Detail (Kontras Tambahan)' },
      ],
      explanation: 'Formula AREA menghasilkan respon Part 1 yang kaya, fasih, dan memiliki struktur natural.',
      points: 15,
    },
    {
      id: 'ex-ielts05-2',
      lessonId: 'ielts-05',
      type: 'fill-blank',
      title: 'Hedging Phrases untuk Part 3',
      instruction: 'Lengkapi pernyataan spekulatif Part 3 dengan frasa hedging yang elegan.',
      sentence: 'While urban density presents clear logistical hurdles, evidence [___] that well-designed public spaces can significantly improve resident happiness.',
      targets: [{ index: 0, correctAnswers: ['tends to suggest', 'strongly suggests', 'appears to show'], hint: 'Frasa bernuansa kehati-hatian ilmiah' }],
      wordBank: ['tends to suggest', 'proves 100%', 'definitely promises', 'forces everyone'],
      explanation: '"Tends to suggest" adalah gaya bahasa bernuansa (hedging) yang disukai penguji Cambridge di Part 3.',
      points: 10,
    },
    {
      id: 'ex-ielts05-3',
      lessonId: 'ielts-05',
      type: 'multiple-choice',
      title: 'Manajemen Monolog Part 2 Cue Card',
      instruction: 'Apa yang sebaiknya dilakukan kandidat jika merasa sudah menjawab semua 4 petunjuk di cue card namun penguji belum menghentikan monolognya?',
      question: 'Bagaimana menjaga kelancaran saat waktu 2 menit belum habis?',
      options: [
        { id: 'a', text: 'Langsung terdiam dan menunggu penguji mengajukan pertanyaan berikutnya.', explanation: 'Terdiam mendadak akan menurunkan skor Fluency and Coherence.' },
        { id: 'b', text: 'Memperluas cerita dengan refleksi pribadi: bagaimana pengalaman itu memengaruhi masa depanmu atau apa yang akan kamu ubah jika mengulanginya.', explanation: 'Sempurna! Menambahkan refleksi evaluatif menjaga kelancaran bicara hingga penguji memberi sinyal selesai.' },
        { id: 'c', text: 'Mengulang kembali kalimat pertama yang tadi sudah diucapkan.', explanation: 'Pengulangan kalimat tanpa ide baru dinilai negatif dalam Fluency.' },
        { id: 'd', text: 'Meminta maaf kepada penguji karena kehabisan ide.', explanation: 'Jangan pernah merusak kepercayaan diri di depan penguji.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-ielts05-4',
      lessonId: 'ielts-05',
      type: 'shadowing',
      title: 'Shadowing Intonasi Band 8.0 Part 2 Cue Card',
      instruction: 'Tirukan intonasi, jeda alami (*chunking*), dan penekanan kata bermakna pada monolog model di bawah ini.',
      textToShadow: 'If I were to recount a particularly memorable journey, the expedition to the volcanic highlands of East Java would immediately spring to mind. What struck me most profoundly was not merely the sheer scale of the landscape, but the quiet resilience of the local community living alongside such unpredictable natural forces.',
      ipaPhonetic: '/ɪf aɪ wɜːr tuː rɪˈkaʊnt ə pɑːˈtɪkjələli ˈmɛmərəbl ˈdʒɜːni.../',
      translation: 'Jika saya harus menceritakan kembali perjalanan yang sangat berkesan, ekspedisi ke dataran tinggi vulkanik Jawa Timur akan langsung terlintas di benak saya.',
      audioVoice: 'en-GB',
      keyIntonationPoints: [
        'Beri jeda sejenak setelah pembuka kondisional "If I were to recount...".',
        'Tekankan kata sifat bermakna tinggi: "profoundly", "sheer scale", "quiet resilience".',
        'Pertahankan alur kalimat kedua yang kompleks dengan intonasi naik-turun yang alami.',
      ],
      tips: 'Beri jeda sejenak setelah kata penghubung dan tekankan kata sifat bermakna tinggi.',
      points: 20,
    },
  ],
  'ielts-06': [
    {
      id: 'ex-ielts06-1',
      lessonId: 'ielts-06',
      type: 'multiple-choice',
      title: 'Karakteristik Seksi 4 Listening',
      instruction: 'Pilih karakteristik utama dari Seksi 4 ujian IELTS Listening.',
      question: 'Apa tantangan paling khas yang dihadapi peserta pada Listening Section 4?',
      options: [
        { id: 'a', text: 'Audio diputar dua kali sehingga peserta bisa memperbaiki kesalahan.', explanation: 'Semua audio IELTS hanya diputar SATU KALI.' },
        { id: 'b', text: 'Berupa kuliah akademis 10 soal berturut-turut tanpa adanya jeda istirahat di tengah-tengah rekaman.', explanation: 'Tepat! Seksi 4 adalah monolog kuliah berkelanjutan tanpa jeda di tengah 10 pertanyaan.' },
        { id: 'c', text: 'Percakapan informal antara dua anak muda yang menggunakan banyak bahasa gaul.', explanation: 'Itu adalah karakteristik Seksi 1, bukan Seksi 4.' },
        { id: 'd', text: 'Peserta hanya diminta mencocokkan gambar tanpa menulis kata apa pun.', explanation: 'Seksi 4 umumnya berupa lecture notes completion yang mengharuskan penulisan kata.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-ielts06-2',
      lessonId: 'ielts-06',
      type: 'fill-blank',
      title: 'Prediksi Celah Kata Listening',
      instruction: 'Baca potongan catatan kuliah ini: "Professor Clark argues that the primary cause of wetland degradation is agricultural [___]." Prediksikan jenis kata yang paling tepat:',
      sentence: 'Kata yang dibutuhkan untuk melengkapi celah di atas berkedudukan sebagai [___] (Part of Speech).',
      targets: [{ index: 0, correctAnswers: ['Noun', 'kata benda', 'noun'], hint: 'Setelah kata sifat "agricultural"' }],
      wordBank: ['Noun', 'Adjective', 'Preposition', 'Adverb'],
      explanation: 'Setelah adjective "agricultural", posisi tersebut pasti membutuhkan Noun (misal: "runoff", "expansion", "pollution").',
      points: 10,
    },
    {
      id: 'ex-ielts06-3',
      lessonId: 'ielts-06',
      type: 'matching',
      title: 'Mendeteksi Jebakan Audio Listening',
      instruction: 'Pasangkan jenis jebakan audio dengan contoh ucapan pembicara yang khas.',
      pairs: [
        { id: 'lt1', left: 'Self-Correction (Koreksi Diri)', right: '"Let\'s meet at 2:30... actually, make it 3:15, as I have a prior call."' },
        { id: 'lt2', left: 'Distractor (Opsi yang Dibatalkan)', right: '"We originally considered renting the minivan, but the compact sedan is much cheaper."' },
        { id: 'lt3', left: 'Alphabet Confusion', right: '"That is spelt J-A-N-E-S-E, not G-A-N-E-S-E."' },
        { id: 'lt4', left: 'Plural Ending Trap', right: '"All laboratory attendants must wear protective goggles at all times."' },
      ],
      explanation: 'Memahami pola distraksi mencegah kandidat buru-buru menulis jawaban pertama yang terdengar.',
      points: 15,
    },
    {
      id: 'ex-ielts06-4',
      lessonId: 'ielts-06',
      type: 'multiple-choice',
      title: 'Analisis Koreksi Diri Seketika',
      instruction: 'Dengarkan skenario dialog ini: "A: What is your preferred contact number? B: It is 0812-445-980... oh, forgive me, that is my old office line, my current mobile is 0812-445-992."',
      question: 'Nomor telepon manakah yang merupakan jawaban resmi yang sah?',
      options: [
        { id: 'a', text: '0812-445-980', explanation: 'Ini nomor lama yang langsung diralat oleh pembicara.' },
        { id: 'b', text: '0812-445-992', explanation: 'Tepat! Pembicara mengoreksi ucapannya ("forgive me, my current mobile is...").' },
        { id: 'c', text: '0812-445-900', explanation: 'Nomor ini tidak pernah disebutkan.' },
        { id: 'd', text: 'Kedua nomor boleh ditulis di lembar jawaban.', explanation: 'Hanya informasi terkoreksi terakhir yang bernilai benar.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
};
