import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const toeflLessons: Lesson[] = [
  {
    id: 'toefl-01',
    trackId: 'toefl-prep',
    slug: 'toefl-ibt-structure-and-scoring',
    title: 'TOEFL iBT Structure & 0-120 Composite Scoring',
    order: 1,
    summary: 'Bedah tuntas format TOEFL iBT versi modern 2 jam, sistem penilaian 0-30 per seksi menuju skor 100+, katalog soal Reading, serta komparasi resmi TOEFL vs IELTS.',
    readTimeMin: 11,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Memahami format TOEFL iBT terbaru (versi 2 jam yang dipersingkat).',
      'Menguasai sistem penilaian 0-30 per seksi menuju skor total 120 serta target universitas global.',
      'Membedakan 8 tipe pertanyaan inti pada seksi Reading (Factual, Negative Factual, Inference, dsb).',
    ],
    sections: [
      {
        id: 'sec-toefl-1-1',
        title: '1. Format TOEFL iBT Ringkas Modern (2 Jam)',
        badge: 'Exam Structure',
        content: `Mulai Juli 2023, ETS memperbarui tes TOEFL iBT menjadi lebih ringkas dengan total durasi kurang dari 2 jam:

- **Reading (35 menit)**:
  2 teks akademis (masing-masing ~700 kata, 10 pertanyaan per teks = total 20 soal).
- **Listening (36 menit)**:
  3 kuliah akademis (~5 menit, 6 soal tiap kuliah) + 2 percakapan kampus (~3 menit, 5 soal tiap dialog) = total 28 soal.
- **Speaking (16 menit)**:
  4 tugas (1 Independent Speaking + 3 Integrated Tasks membaca/mendengar + berbicara).
- **Writing (29 menit)**:
  - Task 1: Integrated Writing (20 menit, ~150-225 kata, membaca teks & mendengarkan kuliah).
  - Task 2: Writing for an Academic Discussion (10 menit, minimal 100 kata, berkontribusi dalam forum kelas).`,
        ruleBox: {
          formula: 'Skor Total TOEFL iBT = Reading (0-30) + Listening (0-30) + Speaking (0-30) + Writing (0-30) = Max 120',
          explanation: 'Skor 100+ umumnya menjadi ambang batas aman untuk universitas Top 50 AS dan beasiswa bergengsi (Fulbright, LPDP).',
        },
      },
      {
        id: 'sec-toefl-1-2',
        title: '2. Katalog 8 Tipe Pertanyaan TOEFL Reading',
        badge: 'Reading Question Catalog',
        content: `Seksi Reading menguji kemampuan analisis teks sains, sejarah, dan sosial:

1. **Factual Information**: Menemukan fakta eksplisit dalam satu kalimat/paragraf.
2. **Negative Factual (EXCEPT / NOT)**: Memverifikasi 3 opsi yang benar untuk menemukan 1 opsi yang salah atau tidak disebutkan.
3. **Inference**: Menyimpulkan makna implisit berdasarkan bukti faktual teks.
4. **Rhetorical Purpose**: Menanyakan alasan penulis menyebutkan suatu analogi atau detail ("Why does the author mention...").
5. **Vocabulary in Context**: Menentukan makna kata berdasarkan konteks kalimat sekelilingnya.
6. **Reference**: Mengidentifikasi rujukan pronoun (*it, they, this phenomenon*).
7. **Sentence Insertion**: Memasukkan satu kalimat baru ke salah satu dari 4 kotak hitam [■] berdasarkan kohesi logis.
8. **Prose Summary**: Memilih 3 ide sentral terpenting dari 6 opsi yang merangkum keseluruhan teks (berbobot 2 poin).`,
      },
      {
        id: 'sec-toefl-1-3',
        title: '3. Komparasi TOEFL iBT vs IELTS Academic',
        badge: 'TOEFL vs IELTS',
        content: `Tabel ekuivalensi skor resmi ETS dan Cambridge:

| TOEFL iBT Composite (0-120) | IELTS Academic Band (0-9.0) | Kategori Kemahiran (CEFR) | Standar Penerimaan |
|---|---|---|---|
| **114 - 120** | Band 8.5 - 9.0 | C2 (Proficient) | Ivy League, Cambridge/Oxford PhD |
| **102 - 109** | Band 7.5 | C1 (Advanced) | Harvard, MIT, Stanford Graduate |
| **94 - 101** | Band 7.0 | C1 (Advanced) | Standar universitas Top 100 global |
| **79 - 93** | Band 6.5 | B2 (Upper Intermediate) | Standar minimum beasiswa umum |
| **60 - 78** | Band 6.0 | B2 (Vantage) | Syarat program sarjana komunitas |

**Karakteristik Kunci:**
- TOEFL berbasis komputer 100% (bahkan berbicara ke mikrofon komputer), dengan penekanan kuat pada bahasa Inggris standar Amerika Utara dan tugas terintegrasi (Integrated).
- IELTS menawarkan opsi wawancara berbicara tatap muka langsung dengan manusia dan mencakup aksen internasional (British, Australian, American).`,
        examples: [
          {
            sentence: 'A score of 100+ on TOEFL iBT demonstrates that a test-taker can synthesize multi-source academic input without linguistic impediment.',
            translation: 'Skor 100+ pada TOEFL iBT membuktikan bahwa peserta tes dapat mensintesis masukan akademis multi-sumber tanpa hambatan linguistik.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Format TOEFL iBT modern berlangsung di bawah 2 jam tanpa istirahat di tengah ujian.',
      'Seksi Writing tidak lagi menggunakan esai independen 30 menit, melainkan Academic Discussion 10 menit.',
      'Skor 100+ setara dengan IELTS Band 7.5 dan membuka pintu ke mayoritas universitas papan atas dunia.',
    ],
    prevLessonId: 'ielts-06',
    nextLessonId: 'toefl-02',
  },
  {
    id: 'toefl-02',
    trackId: 'toefl-prep',
    slug: 'academic-discussion-writing-task',
    title: 'TOEFL Writing: Academic Discussion Mastery (10-Minute Sprint)',
    order: 2,
    summary: 'Format penulisan esai terbaru TOEFL iBT: Berkontribusi dalam forum diskusi akademis online bersama profesor dan dua rekan mahasiswa dalam 10 menit (minimal 100 kata).',
    readTimeMin: 10,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Membaca cepat pertanyaan profesor dan respon dua mahasiswa dalam <1.5 menit.',
      'Menulis kontribusi ide orisinal yang mengembangkan diskusi dengan argumen dan contoh spesifik.',
      'Mempertahankan akurasi gramatikal tinggi dalam batas waktu 10 menit.',
    ],
    sections: [
      {
        id: 'sec-toefl-2-1',
        title: '1. Formula 3 Langkah Respon Diskusi Akademis',
        badge: '10-Minute Formula',
        content: `Dalam batas waktu ketat 10 menit, gunakan cetak biru 3 langkah ini:

1. **Acknowledge & Position (1-2 kalimat)**:
   Sebutkan rekan yang kamu setujui atau beri tanggapan awal, lalu nyatakan posisi intimu secara tegas.
   *E.g. While Sarah brings up a valid point regarding municipal budget constraints, I firmly align with David's stance that investing in clean energy infrastructure yields superior long-term dividends.*
2. **Elaborate with Unique Angle & Evidence (3-4 kalimat)**:
   Jangan hanya mengulang apa yang sudah dikatakan rekanmu; sajikan SATU sudut pandang orisinal dan lengkapi dengan contoh konkret.
   *E.g. Specifically, transitioning toward municipal solar power not only curtails atmospheric carbon emissions, but also shields cities from volatile global fossil fuel price fluctuations. In my home country, for instance, cities adopting decentralized solar grids saved millions annually in emergency energy subsidies.*
3. **Synthesis / Closing (1 kalimat)**:
   Tautkan kembali idemu ke signifikansi topik yang diajukan profesor.
   *E.g. Therefore, subsidizing renewable infrastructure is far more economically prudent than continuing to finance conventional utilities.*`,
        ruleBox: {
          formula: 'Panjang Ideal = 110 - 140 kata, ditulis dalam 7-8 menit, 2 menit untuk proofreading.',
          explanation: 'Tugas ini dinilai pada skala 0-5. Menulis lebih dari 150 kata sering kali berisiko menimbulkan typo dan kesalahan tata bahasa karena waktu yang terbatas.',
          pitfall: 'Hanya menulis ulang argumen mahasiswa lain tanpa menambahkan ide atau contoh baru akan menghasilkan skor maksimal 3.0.',
        },
      },
      {
        id: 'sec-toefl-2-2',
        title: '2. Bank Frasa Pembuka & Transisi Sanggahan',
        badge: 'Sentence Starters',
        content: `**Frasa Menghubungkan Diri dengan Rekan Diskusi:**
- *Building upon [Name]'s insightful observation regarding...*
- *While I acknowledge [Name]'s concern about... I would argue that...*
- *Although [Name] makes a compelling case for... this perspective overlooks the fact that...*

**Frasa Memperkenalkan Sudut Pandang Orisinal:**
- *From my perspective, a far more decisive consideration is...*
- *What has not yet been adequately addressed is the issue of...*
- *To illustrate this dynamic, consider the case of...*

**Frasa Penutup Efektif:**
- *Consequently, prioritizing X serves as the most viable path forward.*
- *Ultimately, addressing this issue requires proactive intervention rather than passive observation.*`,
      },
      {
        id: 'sec-toefl-2-3',
        title: '3. Topik Diskusi Terpopuler & Kriteria Skor 5.0',
        badge: 'Scoring Criteria',
        content: `Topik yang paling sering muncul di Academic Discussion:
- **Urban Planning**: Transportasi publik gratis vs Jalur sepeda; Ruang terbuka hijau vs Perumahan terjangkau.
- **Education Policy**: Kuliah daring vs Tatap muka; Kurikulum seni vs Sains & Teknologi (STEM).
- **Workplace Dynamics**: Remote work 4 hari kerja seminggu vs Produktivitas kantor konvensional.
- **Environmental Economics**: Pajak karbon perusahaan vs Insentif konsumen ramah lingkungan.

**Kriteria Resmi Nilai 5.0 (Skor Tertinggi):**
- Kontribusi sangat relevan dan memperkaya diskusi kelas.
- Menunjukkan sintaksis kalimat yang bervariasi dengan pilihan kata akademis alami (*syntactic variety & lexical sophistication*).
- Hanya terdapat kesalahan minor sesekali yang tidak mengaburkan maksud kalimat.`,
        examples: [
          {
            sentence: 'In the Academic Discussion task, addressing the prompt with a unique real-world example elevates a score from an average 3.0 to a top-tier 5.0.',
            translation: 'Dalam tugas Diskusi Akademis, menanggapi prompt dengan contoh dunia nyata yang orisinal mendongkrak skor dari rata-rata 3.0 ke tingkat teratas 5.0.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Batas waktu hanya 10 menit; habiskan maksimal 1.5 menit membaca dan 8 menit menulis.',
      'Selalu sebut nama salah satu rekan diskusi untuk menunjukkan interaksi forum kelas.',
      'Sajikan contoh atau argumen baru yang belum disentuh oleh kedua mahasiswa di prompt.',
    ],
    prevLessonId: 'toefl-01',
    nextLessonId: 'toefl-03',
  },
  {
    id: 'toefl-03',
    trackId: 'toefl-prep',
    slug: 'integrated-writing-synthesis',
    title: 'TOEFL Integrated Writing: Reading-Lecture Synthesis',
    order: 3,
    summary: 'Kuasai teknik menulis esai sintesis 20 menit (150-225 kata) yang membandingkan 3 poin bacaan akademis dengan sanggahan profesor di rekaman kuliah.',
    readTimeMin: 11,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Membuat catatan kontras 3 poin antara Reading Passage dan Lecture menggunakan sistem 2 kolom.',
      'Menguasai hierarki Reporting Verbs objektif (asserts, contends, rebuts, refutes, casts doubt on).',
      'Menyusun esai sintesis 4 paragraf tanpa memasukkan opini pribadi sama sekali.',
    ],
    sections: [
      {
        id: 'sec-toefl-3-1',
        title: '1. Formula Esai Integrated Writing 4 Paragraf',
        badge: 'Synthesis Blueprint',
        content: `Format esai sintesis yang menjamin skor 28-30 pada Integrated Writing:

1. **Introduction (2-3 kalimat)**:
   Sebutkan topik sentral, klaim utama artikel bacaan, dan bagaimana dosen menyanggah klaim tersebut secara keseluruhan (*The reading passage asserts that X is feasible; however, the lecturer strongly refutes this stance by presenting three major counterarguments.*).
2. **Body Paragraph 1 (Poin 1 - 3-4 kalimat)**:
   Uraikan klaim bacaan #1 ➔ Jelaskan sanggahan dosen #1 beserta detail buktinya (*First, the author claims that... In stark contrast, the speaker contends that... specifically pointing out that...*).
3. **Body Paragraph 2 (Poin 2 - 3-4 kalimat)**:
   Uraikan klaim bacaan #2 ➔ Jelaskan sanggahan dosen #2 (*Second, while the passage posits that... the professor casts doubt on this by explaining that...*).
4. **Body Paragraph 3 (Poin 3 - 3-4 kalimat)**:
   Uraikan klaim bacaan #3 ➔ Jelaskan sanggahan dosen #3 (*Finally, the article argues that... On the contrary, the lecturer disputes this assertion because...*).`,
        ruleBox: {
          formula: 'Alokasi Konten: 70% isi tulisan harus merangkum rekaman LECTURE, 30% untuk READING.',
          explanation: 'Penguji TOEFL menguji apakah kamu berhasil menangkap argumen dosen, karena teks bacaan tetap muncul di layar saat kamu mengetik.',
          pitfall: 'DILARANG keras menulis opini pribadi seperti "I agree with the professor" atau menulis kesimpulan umum di akhir esai.',
        },
      },
      {
        id: 'sec-toefl-3-2',
        title: '2. Template Notetaking 2 Kolom',
        badge: 'Note-Taking System',
        content: `Saat membaca teks (3 menit) dan mendengarkan kuliah (sekitar 2 menit), bagi kertas corat-coretmu menjadi dua kolom:

| Reading Claims (Teks Tertulis) | Lecture Counterpoints (Audio Dosen) |
|---|---|
| **Point 1**: Ide pendukung bacaan #1 | **Sanggahan 1**: Mengapa dosen bilang itu salah / bukti bantahan |
| **Point 2**: Ide pendukung bacaan #2 | **Sanggahan 2**: Keterbatasan metode / fakta tersembunyi |
| **Point 3**: Ide pendukung bacaan #3 | **Sanggahan 3**: Dampak negatif tak terduga / biaya sebenarnya |

*Ingat: Dosen di rekaman kuliah hampir selalu 100% MENYANGGAH (rebut/refute) ketiga poin artikel bacaan secara berurutan.*`,
      },
      {
        id: 'sec-toefl-3-3',
        title: '3. Hierarki Register Reporting Verbs',
        badge: 'Reporting Verbs',
        content: `Gunakan verba yang tepat untuk menggambarkan klaim dan bantahan akademis:

**Untuk Merangkum Bacaan (Claims):**
- *The author posits / maintains / contends / asserts that...*
- *The reading passage advances the hypothesis that...*
- *It is suggested in the passage that...*

**Untuk Merangkum Sanggahan Dosen (Rebuttals):**
- *The lecturer refutes / rebuts / challenges this premise.*
- *The professor casts serious doubt on the veracity of this claim.*
- *The speaker contradicts the reading by demonstrating that...*
- *The lecturer undermines this argument, pointing out that...*`,
        examples: [
          {
            sentence: 'The passage asserts that solar mirrors could efficiently deflect asteroid impacts; however, the speaker refutes this, contending that electrostatic space dust would rapidly coat and neutralize the mirrors.',
            translation: 'Teks bacaan menegaskan bahwa cermin surya dapat secara efisien membelokkan hantaman asteroid; namun, pembicara membantah hal ini, dengan alasan bahwa debu antariksa elektrostatik akan dengan cepat melapisi dan menetralkan cermin tersebut.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Fokus utama adalah merangkum audio kuliah (Lecture); teks bacaan hanya berfungsi sebagai pembanding.',
      'Gunakan variasi verba sanggahan: refutes, challenges, casts doubt on, contradicts.',
      'Jangan pernah menulis kesimpulan opini di Integrated Writing.',
    ],
    prevLessonId: 'toefl-02',
    nextLessonId: 'toefl-04',
  },
  {
    id: 'toefl-04',
    trackId: 'toefl-prep',
    slug: 'toefl-speaking-tasks-mastery',
    title: 'TOEFL Speaking: Independent & Integrated Tasks',
    order: 4,
    summary: 'Kuasai 4 tugas berbicara TOEFL iBT: Task 1 Independent (15s prep, 45s speak) serta Task 2-4 Integrated membaca/mendengar dengan manajemen waktu dan intonasi presisi.',
    readTimeMin: 12,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Menyusun respon Task 1 dalam 15 detik persiapan menggunakan formula P-R-E-P.',
      'Mensintesis pengumuman kampus dan opini mahasiswa di Task 2 dalam 60 detik.',
      'Meringkas konsep kuliah akademis (Task 3 & 4) dengan kecepatan 130-150 kata per menit.',
    ],
    sections: [
      {
        id: 'sec-toefl-4-1',
        title: '1. Task 1 Independent: Formula PREP dalam 45 Detik',
        badge: 'Task 1 Blueprint',
        content: `Pada Task 1, kamu diberikan pertanyaan pilihan personal (*Do you prefer studying alone or with a group?*). Kamu hanya memiliki **15 detik persiapan** dan **45 detik bicara**:

**Formula PREP:**
- **P (Position - 5-7 detik)**: Nyatakan pilihanmu secara lugas (*In my view, I strongly prefer studying in groups...*).
- **R (Reason 1 - 15 detik)**: Jelaskan alasan pertama beserta penjabaran singkat (*First, collaborative study allows peers to clarify confusing concepts, which accelerates problem-solving...*).
- **E (Example / Detail - 15 detik)**: Berikan satu contoh konkret atau alasan kedua (*For instance, when preparing for my economics final last term, my classmates helped me master complex statistical models...*).
- **P (Payoff / Conclusion - 5 detik)**: Tutup dengan kalimat kesimpulan ringkas (*Hence, group collaboration delivers far more educational value for me.*).`,
      },
      {
        id: 'sec-toefl-4-2',
        title: '2. Task 2 Campus Situation (60 Detik)',
        badge: 'Task 2 Blueprint',
        content: `Format: Baca pengumuman kampus (45-50 detik) ➔ Dengar percakapan dua mahasiswa (sekitar 1 menit) ➔ Bicara (30 detik persiapan, 60 detik bicara).

**Struktur Respon 60 Detik:**
1. **The Change / Proposal (10-12 detik)**: Sebutkan perubahan yang diumumkan kampus (*The university plans to renovate the central library and relocate quiet study zones...*).
2. **Speaker's Stance (5 detik)**: Identifikasi mahasiswa yang vokal dan posisinya (*The woman strongly supports/opposes this decision...*).
3. **Reason 1 + Detail (20 detik)**: Sampaikan alasan pertama mahasiswa (*First, she explains that...*).
4. **Reason 2 + Detail (20 detik)**: Sampaikan alasan kedua mahasiswa (*Second, she points out that...*).`,
      },
      {
        id: 'sec-toefl-4-3',
        title: '3. Task 3 & Task 4: Kuliah Akademis (Integrated)',
        badge: 'Academic Tasks',
        content: `**Task 3 (Reading + Lecture):**
Teks bacaan mendefinisikan sebuah konsep sains/bisnis (*e.g. Behavioral Mimicry*), lalu profesor memberikan satu atau dua contoh konkret di kuliah.
➔ *Formula*: Definisikan konsep dalam 12 detik ➔ Hubungkan bagaimana contoh dosen mengilustrasikan konsep tersebut dalam 45 detik.

**Task 4 (Lecture Only):**
Profesor menjelaskan sebuah fenomena dengan dua mekanisme/kategori (*e.g. Two adaptations desert animals use to survive extreme heat*).
➔ *Formula*: Sebutkan topik utama dalam 10 detik ➔ Paparkan mekanisme pertama dan contohnya dalam 23 detik ➔ Paparkan mekanisme kedua dan contohnya dalam 23 detik.`,
        examples: [
          {
            sentence: 'In TOEFL Speaking Task 3, avoid spending more than 15 seconds defining the reading concept; the scoring rubric rewards how thoroughly you explain the professor\'s real-world example.',
            translation: 'Dalam TOEFL Speaking Task 3, hindari menghabiskan lebih dari 15 detik mendefinisikan konsep bacaan; rubrik penilaian menghargai seberapa tuntas kamu menjelaskan contoh nyata dari profesor.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Task 1: 15 detik persiapan sangat singkat; langsung pilih satu posisi tanpa ragu.',
      'Task 2-4: Jangan masukkan opinimu sendiri; kamu adalah reporter murni yang melaporkan apa yang didengar.',
      'Pertahankan kecepatan bicara stabil 130-150 wpm; hindari jeda diam (*dead air*) lebih dari 3 detik.',
    ],
    prevLessonId: 'toefl-03',
    nextLessonId: 'toefl-05',
  },
  {
    id: 'toefl-05',
    trackId: 'toefl-prep',
    slug: 'toefl-listening-academic-lectures',
    title: 'TOEFL Listening: Academic Lecture & Conversation Strategies',
    order: 5,
    summary: 'Kuasai pola organisasi kuliah universitas, cara menjawab pertanyaan Main Purpose dan Rhetorical Function, serta sistem notetaking Cornell untuk audio 5 menit.',
    readTimeMin: 11,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Mengenali 5 pola organisasi kuliah akademis (Problem/Solution, Cause/Effect, Classification, Comparison, Chronological).',
      'Membedakan pertanyaan Main Idea, Detail, Rhetorical Function, dan Speaker Attitude.',
      'Menerapkan sistem pencatatan Cornell yang dioptimalkan untuk rekaman kuliah panjang tanpa melihat soal.',
    ],
    sections: [
      {
        id: 'sec-toefl-5-1',
        title: '1. 5 Pola Organisasi Kuliah Akademis',
        badge: 'Lecture Structures',
        content: `Dosen di TOEFL selalu menyusun perkuliahannya berdasarkan salah satu dari 5 pola wacana ini:

1. **Classification / Typology**: Membagi satu kategori besar menjadi 2-3 sub-tipe (*e.g. Three types of glacial moraines*).
2. **Problem & Solution**: Mengangkat sebuah tantangan ilmiah lalu memaparkan eksperimen yang mengatasinya.
3. **Cause & Effect**: Menjelaskan rantai kausalitas fenomena alam (*e.g. Volcanic eruptions triggering global cooling*).
4. **Compare & Contrast**: Membandingkan dua teori atau dua spesies yang sering disalahartikan serupa.
5. **Chronological / Process**: Mengikuti linimasa evolusi sejarah atau tahapan metode penelitian.`,
      },
      {
        id: 'sec-toefl-5-2',
        title: '2. Pertanyaan Rhetorical Purpose & Speaker Attitude',
        badge: 'High-Level Questions',
        content: `Pertanyaan tingkat lanjut yang menentukan skor 26-30 di Listening:

**Rhetorical Function / Purpose ("Why does the professor say X?"):**
Pertanyaan ini sering memutar ulang potongan audio pendek (*Replay Question*).
- Jangan artikan kata secara harfiah; cari *alasan komunikasi* di balik ucapan tersebut (misal: *to clarify a misconception, to express skepticism, to prompt students to think*).

**Speaker Stance & Attitude:**
Dengarkan intonasi suara dan kata-kata peredam (*hedging*):
- Sikap Ragu / Skeptis: *Well, the theory sounds appealing on paper, but the data is rather scant...*
- Sikap Yakin / Mendukung: *This breakthrough unequivocally settled decades of controversy.*`,
      },
      {
        id: 'sec-toefl-5-3',
        title: '3. Metode Notetaking Cornell untuk TOEFL',
        badge: 'Cornell Note-Taking',
        content: `Di TOEFL Listening, pertanyaan baru muncul di layar SETELAH audio selesai. Catatan yang rapi adalah penyelamatmu:

- **Bagi Kertas Menjadi 2 Kolom**:
  - Kolom Kiri (1/3 lebar): Kata kunci topik utama, nama istilah ilmiah, dan tanda panah alur.
  - Kolom Kanan (2/3 lebar): Penjelasan detail, angka penting, contoh spesifik, dan kesimpulan dosen.
- **Gunakan Simbol Singkat**:
  - '+' (and / in addition) | '-' (lacks / negative) | '➔' (leads to / causes)
  - '↑' (increases) | '↓' (decreases) | '?' (doubtful / hypothesis) | '*' (crucial point)
- **Tulis Hanya Content Words**: Catat kata benda, kata kerja, dan sifat bermakna; abaikan artikel (*a/the*) dan preposisi.`,
        examples: [
          {
            sentence: 'When a professor pauses and asks a rhetorical question like "Now, why would birds engage in such risky behavior?", the subsequent sentence invariably contains the answer to a primary exam question.',
            translation: 'Ketika seorang profesor berhenti sejenak dan mengajukan pertanyaan retoris seperti "Nah, mengapa burung melakukan perilaku berisiko seperti itu?", kalimat berikutnya selalu memuat jawaban untuk pertanyaan ujian utama.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Pertanyaan baru terlihat setelah audio tuntas; kamu tidak bisa membaca soal terlebih dahulu seperti di IELTS.',
      'Fokus mencatat transisi dan kata penanda wacana yang diucapkan profesor.',
      'Pada pertanyaan Rhetorical Function, cari niat komunikatif pembicara, bukan arti harfiah kalimat.',
    ],
    prevLessonId: 'toefl-04',
    nextLessonId: 'toefl-06',
  },
  {
    id: 'toefl-06',
    trackId: 'toefl-prep',
    slug: 'toefl-reading-advanced-strategies',
    title: 'TOEFL Reading: Advanced Question Strategies',
    order: 6,
    summary: 'Kuasai teknik menaklukkan soal berbobot tinggi: Prose Summary (2 poin), Sentence Insertion (kotak hitam [■]), Negative Factual Information, dan Vocabulary-in-Context.',
    readTimeMin: 12,
    difficulty: 'TOEFL 90+',
    objectives: [
      'Memilih 3 ide utama yang tepat pada soal Prose Summary tanpa tertipu detail minor yang faktual tapi tidak esensial.',
      'Menemukan posisi kalimat baru pada soal Sentence Insertion dengan menganalisis penanda kohesi dan pronomina.',
      'Menyelesaikan 2 bacaan akademis (20 soal) dalam batas waktu ketat 35 menit.',
    ],
    sections: [
      {
        id: 'sec-toefl-6-1',
        title: '1. Prose Summary: Menyeleksi 3 Ide Pokok (2 Poin)',
        badge: 'Prose Summary',
        content: `Soal terakhir pada setiap bacaan Reading adalah **Prose Summary** (berbobot 2 poin). Kamu diminta memilih 3 dari 6 opsi pernyataan yang merangkum poin terpenting teks:

**Kriteria Opsi yang SALAH:**
1. **Factual Errors (Salah Fakta)**: Pernyataan yang bertentangan dengan isi bacaan (otomatis gugur).
2. **Minor Details (Detail Sepele)**: Pernyataan yang *100% benar sesuai teks*, namun hanya berupa contoh kecil, nama satu orang, atau data pendukung dalam satu kalimat, BUKAN pilar argumen bacaan!
3. **Not Mentioned**: Informasi yang tidak pernah dibahas sama sekali dalam teks.

**Kriteria Opsi yang BENAR:**
- Merangkum gagasan utama dari satu atau dua paragraf utuh.
- Menggunakan bahasa parafrase tingkat tinggi yang mencakup konsep makro bacaan.`,
        ruleBox: {
          formula: 'Skor Prose Summary: 3 benar = 2 poin | 2 benar = 1 poin | 1/0 benar = 0 poin.',
          explanation: 'Waspadai opsi yang informasinya benar namun sekadar detail remeh temeh. Itu adalah jebakan terbesar soal ini.',
        },
      },
      {
        id: 'sec-toefl-6-2',
        title: '2. Sentence Insertion: Navigasi Kotak Hitam [■]',
        badge: 'Sentence Insertion',
        content: `Kamu diminta memasukkan satu kalimat ke dalam salah satu dari empat kotak hitam [■] di teks. Gunakan 3 petunjuk kohesi ini:

1. **Pronoun Clues (Kata Ganti)**:
   Jika kalimat yang dimasukkan berbunyi: *"These sudden climatic shifts devastated local agriculture..."*
   ➔ Kalimat sebelumnya WAJIB menyebutkan tentang *perubahan iklim mendadak* secara spesifik!
2. **Transition Clues (Kata Penghubung)**:
   Kata seperti *However, Consequently, Furthermore, In other words* menentukan hubungan logis dengan kalimat sebelum dan sesudahnya.
3. **Chronological / Repetition Flow**:
   Periksa alur dari umum ke spesifik. Jangan memasukkan ide umum di tengah-tengah penjabaran teknis yang sedang berjalan.`,
      },
      {
        id: 'sec-toefl-6-3',
        title: '3. Negative Factual & Alokasi Waktu 35 Menit',
        badge: 'Negative Factual & Timing',
        content: `**Negative Factual Information (EXCEPT / NOT):**
- Pertanyaan meminta mencari hal yang TIDAK benar atau TIDAK disebutkan.
- Gunakan metode verifikasi eliminasi: Cari dan tandai 3 opsi yang terbukti ada di teks. Opsi yang tersisa tanpa bukti adalah jawaban yang benar.

**Manajemen Waktu 35 Menit (2 Bacaan = 17.5 Menit per Teks):**
- Jangan membaca seluruh teks dari awal sampai akhir sebelum mulai menjawab!
- Sistem antarmuka TOEFL menampilkan pertanyaan di sebelah kanan teks dan langsung mengarahkan layar ke paragraf yang relevan dengan tanda panah ➔.
- Kerjakan soal nomor 1 hingga 9 secara berurutan mengikuti alur paragraf, lalu gunakan pemahaman kumulatifmu untuk menyelesaikan soal nomor 10 (Prose Summary).`,
        examples: [
          {
            sentence: 'To master Sentence Insertion questions, trace demonstrative pronouns like "such adaptations" or "this phenomenon" backward to find their direct antecedent in the preceding sentence.',
            translation: 'Untuk menguasai soal Sentence Insertion, lacak kata ganti penunjuk seperti "such adaptations" atau "this phenomenon" ke belakang untuk menemukan anteseden langsungnya di kalimat sebelumnya.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Prose Summary menguji kemampuan membedakan ide sentral vs detail kecil pendukung.',
      'Sentence Insertion diselesaikan dengan melacak kata ganti (this, these, such) dan kata transisi.',
      'Alokasikan maksimal 17-18 menit per bacaan agar tidak kehabisan waktu pada teks kedua.',
    ],
    prevLessonId: 'toefl-05',
  },
];

export const toeflExercises: Record<string, Exercise[]> = {
  'toefl-01': [
    {
      id: 'ex-toefl01-1',
      lessonId: 'toefl-01',
      type: 'multiple-choice',
      title: 'Tipe Pertanyaan TOEFL Reading',
      instruction: 'Identifikasi tipe pertanyaan berdasarkan petunjuk soal.',
      question: 'Pertanyaan: "Why does the author mention the migration of wildebeests in paragraph 3?" Tipe pertanyaan apakah ini?',
      options: [
        { id: 'a', text: 'Vocabulary in Context', explanation: 'Salah, tidak menanyakan arti kata.' },
        { id: 'b', text: 'Rhetorical Purpose Question', explanation: 'Tepat! Soal menanyakan mengapa penulis memasukkan fakta/contoh tertentu.' },
        { id: 'c', text: 'Negative Factual Question', explanation: 'Soal tidak memakai kata "EXCEPT" atau "NOT".' },
        { id: 'd', text: 'Sentence Insertion Question', explanation: 'Bukan menempatkan kalimat ke dalam kotak.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-toefl01-2',
      lessonId: 'toefl-01',
      type: 'matching',
      title: 'Struktur Modul TOEFL iBT Modern',
      instruction: 'Pasangkan seksi ujian TOEFL iBT dengan format waktu dan jumlah soal resminya.',
      pairs: [
        { id: 'tf1', left: 'Reading', right: '2 bacaan akademis (20 soal) dalam 35 menit' },
        { id: 'tf2', left: 'Listening', right: '3 kuliah & 2 percakapan (28 soal) dalam 36 menit' },
        { id: 'tf3', left: 'Speaking', right: '1 tugas mandiri + 3 terintegrasi dalam 16 menit' },
        { id: 'tf4', left: 'Writing', right: 'Integrated Task (20m) & Academic Discussion (10m)' },
      ],
      explanation: 'Format 2 jam modern TOEFL iBT dirancang sangat efisien dan padat.',
      points: 15,
    },
    {
      id: 'ex-toefl01-3',
      lessonId: 'toefl-01',
      type: 'fill-blank',
      title: 'Ambang Batas Skor TOEFL 100+',
      instruction: 'Lengkapi pernyataan target skor di bawah dengan angka yang tepat.',
      sentence: 'Untuk meraih skor komposit aman 100+ dari total maksimal 120 poin, seorang peserta idealnya mengamankan rata-rata minimal [___] poin di setiap masing-masing 4 seksi ujian.',
      targets: [{ index: 0, correctAnswers: ['25', '25 poin'], hint: '100 dibagi 4 seksi' }],
      wordBank: ['25', '20', '28', '30'],
      explanation: 'Rata-rata 25 poin per seksi (Reading, Listening, Speaking, Writing) menghasilkan total skor 100.',
      points: 10,
    },
    {
      id: 'ex-toefl01-4',
      lessonId: 'toefl-01',
      type: 'multiple-choice',
      title: 'Komparasi TOEFL vs IELTS',
      instruction: 'Pilih perbedaan fundamental antara ujian TOEFL iBT dan IELTS Academic.',
      question: 'Manakah pernyataan yang paling akurat mengenai perbedaan kedua tes?',
      options: [
        { id: 'a', text: 'TOEFL tidak memiliki seksi berbicara sama sekali.', explanation: 'TOEFL memiliki seksi Speaking 16 menit yang direkam via komputer.' },
        { id: 'b', text: 'TOEFL sangat berfokus pada tugas terintegrasi (membaca & mendengar sebelum berbicara/menulis) dengan register universitas Amerika Utara.', explanation: 'Tepat! Ciri khas TOEFL adalah integrasi multi-skill dalam satu tugas.' },
        { id: 'c', text: 'IELTS dinilai dengan skala 0-120 sedangkan TOEFL menggunakan Band 0-9.', explanation: 'Terbalik: TOEFL berskala 0-120, IELTS berskala Band 0-9.' },
        { id: 'd', text: 'TOEFL hanya diterima di Amerika Serikat dan ditolak di Eropa.', explanation: 'TOEFL diterima di lebih dari 12.000 institusi di 160 negara di seluruh dunia.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'toefl-02': [
    {
      id: 'ex-toefl02-1',
      lessonId: 'toefl-02',
      type: 'writing-rubric',
      title: 'Simulasi TOEFL Academic Discussion Task (10 Menit)',
      instruction: 'Tulis respon diskusi kelas akademis online minimal 100 kata dalam 10 menit berdasarkan situasi di bawah.',
      taskType: 'TOEFL-Academic',
      prompt: `**Professor Diaz**: Next week, our city council will vote on whether to fund free public transportation for all residents or invest that capital into expanding bicycle lanes and pedestrian greenways. Which policy would produce a greater long-term benefit for urban sustainability?

**Claire**: Free public transit will immediately reduce traffic congestion and carbon emissions by incentivizing commuters to leave their private vehicles at home.

**Paul**: Expanding cycling infrastructure is cheaper to maintain and encourages an active, healthy lifestyle while directly addressing short-distance urban mobility.`,
      suggestedTimeMin: 10,
      minWordCount: 100,
      maxWordCount: 160,
      criteria: [
        {
          id: 'dev',
          name: 'Topic Development & Relevance',
          weightPercent: 50,
          descriptors: [
            { score: 5, label: 'Score 5', description: 'Relevant and clearly expressed contribution that adds fresh insights and well-chosen examples.' },
            { score: 3, label: 'Score 3', description: 'Adequate contribution, but ideas may be generic or partially repetitive of other classmates.' },
            { score: 1, label: 'Score 1', description: 'Limited contribution with poor development or tangential remarks.' },
          ],
        },
        {
          id: 'lang',
          name: 'Language Use & Syntactic Variety',
          weightPercent: 50,
          descriptors: [
            { score: 5, label: 'Score 5', description: 'High syntactic variety, sophisticated academic vocabulary, and minimal errors.' },
            { score: 3, label: 'Score 3', description: 'Noticeable errors in grammar and word choice that do not completely obscure meaning.' },
            { score: 1, label: 'Score 1', description: 'Frequent severe language errors that impede comprehensibility.' },
          ],
        },
      ],
      modelAnswer: {
        bandOrScore: 'Score 5.0 (Top Tier Model)',
        text: `While Claire makes a compelling point regarding immediate traffic alleviation, I strongly believe that prioritizing free public transportation delivers far superior equitable benefits. Public transit infrastructure serves a much broader demographic, including elderly citizens, low-income families, and disabled individuals who cannot realistically rely on bicycles in extreme weather conditions. For instance, in cities where transit fares were eliminated, ridership surged across suburban workforce corridors, significantly lowering daily living expenses for underserved communities. Therefore, subsidizing mass transit directly promotes both environmental sustainability and socioeconomic equity simultaneously.`,
        analysis: [
          'Directly acknowledges classmate (Claire) while establishing a distinct argument.',
          'Introduces a fresh angle: socioeconomic equity and inclusivity for non-cyclists.',
          'Provides a clear contextual example with precise academic vocabulary ("socioeconomic equity", "underserved communities", "traffic alleviation").',
          'Word count: ~110 words — perfectly concise for a 10-minute exercise.',
        ],
      },
      recommendedVocabulary: [
        { term: 'Socioeconomic equity', definition: 'Pemerataan keadilan sosial dan ekonomi', example: 'Mass transit subsidization fosters socioeconomic equity.' },
        { term: 'Alleviate congestion', definition: 'Meringankan kemacetan lalu lintas', example: 'Public transit helps alleviate heavy highway congestion.' },
      ],
      points: 20,
    },
    {
      id: 'ex-toefl02-2',
      lessonId: 'toefl-02',
      type: 'matching',
      title: 'Frasa Penghubung Diskusi Akademis',
      instruction: 'Pasangkan fungsi komunikatif dengan kalimat pembuka forum yang tepat.',
      pairs: [
        { id: 'fs1', left: 'Menyetujui sebagian rekan namun menawarkan sudut pandang baru', right: '"While I acknowledge David\'s perspective on costs, I would argue that..."' },
        { id: 'fs2', left: 'Mengembangkan gagasan rekan dengan bukti tambahan', right: '"Building upon Sarah\'s insightful remark regarding urban density,..."' },
        { id: 'fs3', left: 'Menyajikan contoh dunia nyata pendukung', right: '"To substantiate this argument, one need only look at the case of..."' },
        { id: 'fs4', left: 'Menyimpulkan dampak kebijakan secara makro', right: '"Consequently, prioritizing this initiative delivers far greater societal dividends."' },
      ],
      explanation: 'Frasa transisi ini memperlihatkan interaksi aktif kandidat dalam simulasi forum perkuliahan.',
      points: 15,
    },
    {
      id: 'ex-toefl02-3',
      lessonId: 'toefl-02',
      type: 'multiple-choice',
      title: 'Strategi Manajemen Waktu 10 Menit',
      instruction: 'Manakah pembagian waktu yang paling direkomendasikan untuk tugas Academic Discussion?',
      question: 'Bagaimana membagi waktu 10 menit secara ideal?',
      options: [
        { id: 'a', text: '5 menit membaca prompt profesor dan 5 menit menulis tanpa sempat mengoreksi.', explanation: 'Membaca 5 menit terlalu lama; sisa waktu menulis akan sangat mepet.' },
        { id: 'b', text: 'Maksimal 1.5 menit membaca respon, 6.5-7 menit mengetik 110-130 kata, dan 1.5 menit proofreading error gramatikal.', explanation: 'Sempurna! Formula ini menjamin tulisan selesai dengan tata bahasa yang bersih.' },
        { id: 'c', text: 'Mengetik sebanyak 300 kata secepat mungkin tanpa berhenti.', explanation: 'Panjang berlebih berisiko tinggi memunculkan banyak kesalahan ketik.' },
        { id: 'd', text: 'Langsung mengetik tanpa membaca argumen mahasiswa lain.', explanation: 'Kandidat wajib menanggapi konteks percakapan di layar.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'toefl-03': [
    {
      id: 'ex-toefl03-1',
      lessonId: 'toefl-03',
      type: 'multiple-choice',
      title: 'Reporting Verbs untuk Sanggahan (Refutation)',
      instruction: 'Pilih frasa pelapor yang paling tepat untuk menunjukkan bahwa dosen membantah klaim artikel.',
      question: 'The reading passage claims that solar mirrors can easily clean space debris. In the lecture, the professor _____ this assertion by explaining that mirrors would quickly degrade due to micro-meteorite collisions.',
      options: [
        { id: 'a', text: 'casts doubt on', explanation: 'Tepat! "Casts doubt on" adalah kolokasi standar TOEFL untuk menyatakan sanggahan ilmiah.' },
        { id: 'b', text: 'corroborates', explanation: '"Corroborate" berarti membenarkan/mendukung, bukan membantah.' },
        { id: 'c', text: 'substantiates', explanation: '"Substantiate" berarti membuktikan kebenaran suatu klaim.' },
        { id: 'd', text: 'advocates for', explanation: '"Advocate for" berarti membela atau mendukung.' },
      ],
      correctAnswerId: 'a',
      points: 15,
    },
    {
      id: 'ex-toefl03-2',
      lessonId: 'toefl-03',
      type: 'matching',
      title: 'Prinsip Penulisan Integrated Writing',
      instruction: 'Pasangkan aturan penulisan dengan justifikasi akademis resminya.',
      pairs: [
        { id: 'ir1', left: 'Alokasikan 70% isi esai untuk poin kuliah', right: 'Karena audio kuliah hanya terdengar satu kali dan menguji daya ingat sintesis' },
        { id: 'ir2', left: 'Dilarang menulis opini atau kesimpulan pribadi', right: 'Karena tugas ini murni menguji kemampuan reporting objektif antar-sumber' },
        { id: 'ir3', left: 'Gunakan catatan 2 kolom saat mendengarkan', right: 'Untuk memetakan langsung counter-argument dosen terhadap 3 klaim teks' },
        { id: 'ir4', left: 'Batas kata ideal 150 - 225 kata', right: 'Panjang yang cukup untuk merangkum 3 poin tanpa memasukkan rincian tidak perlu' },
      ],
      explanation: 'Mematuhi aturan sintesis memastikan perolehan skor maksimal di Integrated Writing.',
      points: 15,
    },
    {
      id: 'ex-toefl03-3',
      lessonId: 'toefl-03',
      type: 'fill-blank',
      title: 'Formula Transisi Sanggahan Dosen',
      instruction: 'Lengkapi kalimat sintesis di bawah dengan kata transisi kontras yang baku.',
      sentence: 'The author claims that vertical farming requires minimal water; [___], the lecturer refutes this by emphasizing the massive electrical energy consumed by artificial LED lighting.',
      targets: [{ index: 0, correctAnswers: ['however', 'in contrast', 'on the other hand'], hint: 'Kata hubung kontras antarklausa' }],
      wordBank: ['however', 'furthermore', 'similarly', 'in addition'],
      explanation: '"However" atau "in contrast" menunjukkan transisi pertentangan antara klaim bacaan dan fakta kuliah.',
      points: 10,
    },
  ],
  'toefl-04': [
    {
      id: 'ex-toefl04-1',
      lessonId: 'toefl-04',
      type: 'matching',
      title: 'Karakteristik 4 Tugas Speaking TOEFL',
      instruction: 'Pasangkan tugas berbicara dengan format persiapan dan topik ujinya.',
      pairs: [
        { id: 'sp1', left: 'Task 1 (Independent)', right: '15 detik persiapan, 45 detik bicara tentang pilihan personal' },
        { id: 'sp2', left: 'Task 2 (Campus Situation)', right: 'Sintesis pengumuman kampus & respon opini mahasiswa (60 detik)' },
        { id: 'sp3', left: 'Task 3 (Academic Concept)', right: 'Definisi konsep teks + ilustrasi contoh dosen di kuliah (60 detik)' },
        { id: 'sp4', left: 'Task 4 (Academic Lecture)', right: 'Meringkas kuliah profesor dengan 2 poin/contoh utama (60 detik)' },
      ],
      explanation: 'Menguasai pola tiap tugas membuat kandidat langsung siap saat instruksi berbunyi.',
      points: 15,
    },
    {
      id: 'ex-toefl04-2',
      lessonId: 'toefl-04',
      type: 'fill-blank',
      title: 'Penerapan Formula PREP Task 1',
      instruction: 'Lengkapi urutan formula 45 detik untuk respon Speaking Task 1:',
      sentence: 'Formula PREP terdiri dari: [___] (nyatakan pilihan), Reason (alasan), Example (contoh konkret), dan Payoff (penutup).',
      targets: [{ index: 0, correctAnswers: ['Position', 'position', 'Pilihan'], hint: 'Posisi/pilihan pribadi di awal' }],
      wordBank: ['Position', 'Problem', 'Paraphrase', 'Percentage'],
      explanation: 'PREP = Position, Reason, Example, Payoff/Conclusion.',
      points: 10,
    },
    {
      id: 'ex-toefl04-3',
      lessonId: 'toefl-04',
      type: 'multiple-choice',
      title: 'Alokasi Waktu Speaking Task 2',
      instruction: 'Dalam Speaking Task 2 (Campus Situation), bagaimana mengalokasikan waktu bicara 60 detik secara optimal?',
      question: 'Manakah pembagian waktu yang paling dianjurkan?',
      options: [
        { id: 'a', text: '40 detik menjelaskan isi pengumuman kampus dan 20 detik untuk opini mahasiswa.', explanation: 'Terlalu banyak membahas teks; penilaian utama berfokus pada apa yang dikatakan mahasiswa.' },
        { id: 'b', text: 'Sekitar 10-12 detik merangkum perubahan di pengumuman, dan 45-50 detik mengelaborasi 2 alasan opini mahasiswa.', explanation: 'Sempurna! Respon mahasiswa adalah porsi terbesar yang dinilai penguji.' },
        { id: 'c', text: '60 detik penuh menceritakan apakah kamu sendiri setuju dengan kebijakan kampus tersebut.', explanation: 'Opini kandidat dilarang di Integrated Speaking; laporkan hanya ucapan mahasiswa di rekaman.' },
        { id: 'd', text: 'Membaca ulang seluruh teks pengumuman kata per kata.', explanation: 'Teks bacaan sudah hilang saat waktu bicara dimulai.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-toefl04-4',
      lessonId: 'toefl-04',
      type: 'shadowing',
      title: 'Shadowing Kelancaran Pacing Speaking Task 1',
      instruction: 'Latih kelancaran bicara pada rentang kecepatan 140 wpm dengan intonasi mantap dan penekanan kata kunci.',
      textToShadow: 'In my view, I firmly believe that universities should require first-year students to live on campus. First, living in dormitories fosters meaningful interpersonal connections and eases the transition into academic life. For example, during my freshman year, residing alongside peers allowed us to form collaborative study groups that greatly improved our exam performance.',
      ipaPhonetic: '/ɪn maɪ vjuː, aɪ ˈfɜːrmli bɪˈliːv ðæt juːnɪˈvɜːrsɪtiz ʃʊd rɪˈkwaɪər.../',
      translation: 'Menurut pandangan saya, saya sangat meyakini bahwa universitas harus mewajibkan mahasiswa tahun pertama tinggal di asrama kampus. Pertama, tinggal di asrama memupuk hubungan interpersonal yang bermakna dan mempermudah transisi ke kehidupan perkuliahan.',
      audioVoice: 'en-US',
      keyIntonationPoints: [
        'Pertahankan ritme stabil tanpa jeda "uhm/aah" yang panjang.',
        'Berikan penekanan pada frasa bermakna: "firmly believe", "meaningful interpersonal connections", "greatly improved".',
        'Tutup dengan intonasi menurun di akhir kalimat penutup.',
      ],
      tips: 'Jaga ritme stabil tanpa jeda yang panjang. Berikan penekanan pada kata kunci argumen.',
      points: 20,
    },
  ],
  'toefl-05': [
    {
      id: 'ex-toefl05-1',
      lessonId: 'toefl-05',
      type: 'matching',
      title: 'Pola Organisasi Kuliah Akademis',
      instruction: 'Pasangkan kalimat sinyal profesor dengan jenis struktur kuliah yang sedang digunakan.',
      pairs: [
        { id: 'lp1', left: '"Let\'s examine how volcanic eruptions triggered a chain reaction leading to the Little Ice Age."', right: 'Cause & Effect' },
        { id: 'lp2', left: '"Marine biologists classify deep-sea corals into two distinct structural categories."', right: 'Classification / Typology' },
        { id: 'lp3', left: '"While classical economists assumed rational consumer behavior, behavioral experiments reveal a stark contrast."', right: 'Compare & Contrast' },
        { id: 'lp4', left: '"Engineers faced immense structural instability, which was overcome by introducing flexible carbon-fiber dampers."', right: 'Problem & Solution' },
      ],
      explanation: 'Mengenali pola wacana membantu memprediksi pertanyaan struktur kuliah.',
      points: 15,
    },
    {
      id: 'ex-toefl05-2',
      lessonId: 'toefl-05',
      type: 'multiple-choice',
      title: 'Memahami Pertanyaan Rhetorical Function',
      instruction: 'Profesor berkata: "Now, some researchers thought the statues were moved using wooden rollers. But remember, Easter Island has virtually no native trees tall enough for that." Mengapa profesor menyebutkan fakta tentang pohon?',
      question: 'Why does the professor mention that Easter Island has no tall native trees?',
      options: [
        { id: 'a', text: 'To explain why ancient islanders were skilled at woodworking.', explanation: 'Bertentangan dengan ketiadaan pohon.' },
        { id: 'b', text: 'To cast doubt on the hypothesis that wooden rollers were used to transport the statues.', explanation: 'Tepat! Ketiadaan pohon menyangkal teori penggunaan kayu penggelinding.' },
        { id: 'c', text: 'To encourage students to study deforestation in the Pacific.', explanation: 'Bukan tujuan komunikatif dosen pada konteks ini.' },
        { id: 'd', text: 'To argue that the statues were sculpted from palm wood.', explanation: 'Patung dibuat dari batu vulkanik, bukan kayu.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-toefl05-3',
      lessonId: 'toefl-05',
      type: 'fill-blank',
      title: 'Kata Sinyal Sikap Ragu Dosen (Hedging)',
      instruction: 'Lengkapi kalimat di bawah dengan kata yang menunjukkan sikap skeptis dosen terhadap sebuah temuan baru.',
      sentence: 'The professor expresses reservations about the recent study, noting that while the preliminary findings are intriguing, the methodology remains highly [___].',
      targets: [{ index: 0, correctAnswers: ['questionable', 'debatable', 'disputable'], hint: 'Kata sifat yang berarti diragukan kebenarannya' }],
      wordBank: ['questionable', 'proven', 'irrefutable', 'definitive'],
      explanation: '"Questionable" atau "debatable" mengindikasikan sikap kehati-hatian atau skeptisisme dosen.',
      points: 10,
    },
    {
      id: 'ex-toefl05-4',
      lessonId: 'toefl-05',
      type: 'multiple-choice',
      title: 'Prinsip Notetaking Kuliah TOEFL',
      instruction: 'Apa kebiasaan notetaking yang paling efektif saat mendengarkan kuliah sains selama 5 menit di TOEFL?',
      question: 'Bagaimana cara mencatat yang paling efisien?',
      options: [
        { id: 'a', text: 'Mencoba mengetik atau menulis setiap kata yang diucapkan dosen.', explanation: 'Mustahil dilakukan dan membuat kandidat kehilangan fokus mendengar ide inti.' },
        { id: 'b', text: 'Mencatat kata-kata bermakna (content words), singkatan, serta panah hubungan sebab-akibat antarkonsep.', explanation: 'Sempurna! Notetaking efektif berfokus pada alur ide dan hubungan kausalitas.' },
        { id: 'c', text: 'Tidak mencatat sama sekali agar bisa mendengarkan dengan rileks.', explanation: 'Audio 5 menit memuat terlalu banyak data detail untuk diingat murni di kepala.' },
        { id: 'd', text: 'Hanya mencatat angka dan tahun saja.', explanation: 'TOEFL jarang menguji hafalan angka mentah; yang diuji adalah konsep dan alasan.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
  'toefl-06': [
    {
      id: 'ex-toefl06-1',
      lessonId: 'toefl-06',
      type: 'multiple-choice',
      title: 'Menyingkirkan Pengecoh Prose Summary',
      instruction: 'Dalam soal Prose Summary (berbobot 2 poin), manakah opsi yang WAJIB disingkirkan meskipun faktanya benar sesuai teks?',
      question: 'Karakteristik opsi manakah yang merupakan pengecoh (distractor) klasik di Prose Summary?',
      options: [
        { id: 'a', text: 'Opsi yang merangkum gagasan sentral dari dua paragraf utama.', explanation: 'Ini adalah ciri opsi benar.' },
        { id: 'b', text: 'Opsi yang menyebutkan fakta benar dari teks tetapi hanya merupakan detail kecil atau contoh spesifik pendukung.', explanation: 'Tepat! Minor details yang benar faktanya adalah jebakan nomor satu Prose Summary.' },
        { id: 'c', text: 'Opsi yang memparafrasekan kalimat tesis bacaan.', explanation: 'Ini adalah kandidat kuat opsi benar.' },
        { id: 'd', text: 'Opsi yang menggunakan kosakata akademis tingkat tinggi.', explanation: 'Tingkat kesulitan kata tidak menentukan status opsi.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-toefl06-2',
      lessonId: 'toefl-06',
      type: 'fill-blank',
      title: 'Petunjuk Kohesi Sentence Insertion',
      instruction: 'Kalimat yang akan disisipkan berbunyi: "This remarkable adaptation allows the kangaroo rat to thrive without drinking liquid water." Kalimat sebelumnya di teks wajib membahas tentang [___].',
      sentence: 'Anteseden yang dicari sebelum kalimat di atas harus menyebutkan [___] spesifik hewan tersebut dalam menghemat cairan.',
      targets: [{ index: 0, correctAnswers: ['adaptasi', 'adaptation', 'mekanisme adaptasi'], hint: 'Konsep penyesuaian tubuh/perilaku' }],
      wordBank: ['adaptasi', 'habitat', 'pemangsa', 'reproduksi'],
      explanation: 'Frasa penunjuk "This remarkable adaptation" mengharuskan kalimat sebelumnya telah memaparkan adaptasi yang dimaksud.',
      points: 10,
    },
    {
      id: 'ex-toefl06-3',
      lessonId: 'toefl-06',
      type: 'multiple-choice',
      title: 'Strategi Soal Negative Factual (EXCEPT)',
      instruction: 'Bagaimana cara tercepat dan paling akurat menjawab pertanyaan dengan kata "EXCEPT" atau "NOT" pada TOEFL Reading?',
      question: 'Metode terbaik untuk soal Negative Factual adalah:',
      options: [
        { id: 'a', text: 'Langsung memilih opsi pertama yang tidak kamu pahami artinya.', explanation: 'Bukan strategi berbasis bukti teks.' },
        { id: 'b', text: 'Mencari dan memverifikasi 3 opsi yang secara nyata disebutkan dalam paragraf; opsi yang tidak terbukti atau bertentangan adalah jawabannya.', explanation: 'Tepat! Metode eliminasi 3 opsi benar menjamin akurasi 100% pada soal EXCEPT.' },
        { id: 'c', text: 'Menebak jawaban secara acak untuk menghemat waktu.', explanation: 'Metode spekulatif tidak direkomendasikan.' },
        { id: 'd', text: 'Memilih opsi yang paling panjang kalimatnya.', explanation: 'Panjang opsi tidak berkaitan dengan kunci jawaban.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
    {
      id: 'ex-toefl06-4',
      lessonId: 'toefl-06',
      type: 'multiple-choice',
      title: 'Vocabulary-in-Context Trap',
      instruction: 'Kata "championed" dalam kalimat "Professor Alvarez championed the theory of asteroid impact extinction against prevailing skepticism" memiliki arti yang paling dekat dengan:',
      question: 'What is the meaning of "championed" in this context?',
      options: [
        { id: 'a', text: 'won a competition with', explanation: 'Itu adalah arti harfiah kata "champion" dalam konteks olahraga, bukan konteks akademis.' },
        { id: 'b', text: 'vigorously supported and defended', explanation: 'Tepat! "Champion" sebagai kata kerja berarti membela atau mendukung kuat suatu gagasan.' },
        { id: 'c', text: 'doubted and questioned', explanation: 'Kebalikan dari makna aslinya.' },
        { id: 'd', text: 'financially funded', explanation: 'Mendukung gagasan tidak selalu berarti mendanai secara finansial.' },
      ],
      correctAnswerId: 'b',
      points: 10,
    },
  ],
};
