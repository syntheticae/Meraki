import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const readingWritingLessons: Lesson[] = [
  {
    id: 'rw-01',
    trackId: 'reading-writing-workshop',
    slug: 'skimming-scanning-inference',
    title: 'Academic Reading: Skimming, Scanning & Inference',
    order: 1,
    summary: 'Kuasai teknik membaca akademis yang efisien: skimming untuk ide utama, scanning untuk informasi spesifik, dan inference untuk pertanyaan tersirat.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan skimming untuk mendapatkan gist teks akademis dalam 2 menit.',
      'Menggunakan scanning untuk menemukan fakta/angka spesifik tanpa membaca seluruh teks.',
      'Menjawab pertanyaan inference berdasarkan informasi tersirat.',
    ],
    sections: [
      {
        id: 'sec-rw01-1',
        title: '1. Skimming vs Scanning — Kapan Menggunakan yang Mana?',
        badge: 'Reading Strategies',
        content: `**Skimming** = membaca cepat untuk menangkap IDE UTAMA (gist):
- Baca judul, subjudul, dan kalimat pertama setiap paragraf
- Perhatikan kata-kata yang dicetak tebal atau miring
- Gunakan untuk: memahami topik, struktur, dan argumen utama

**Scanning** = membaca cepat untuk INFORMASI SPESIFIK:
- Gerakkan mata melintasi teks mencari kata kunci
- Langsung berhenti ketika menemukan kata/angka yang dicari
- Gunakan untuk: nama, tanggal, statistik, definisi spesifik

**Kombinasi yang Efektif:**
1. Skim teks → dapatkan struktur dan gist (2 menit)
2. Baca pertanyaan → identifikasi kata kunci
3. Scan untuk menemukan lokasi jawaban
4. Baca bagian tersebut dengan cermat`,
        ruleBox: {
          formula: 'SKIM (gist) → READ QUESTIONS → SCAN (location) → READ CAREFULLY (answer)',
          explanation: 'Urutkan ini untuk efisiensi maksimal dalam IELTS/TOEFL Reading.',
        },
      },
      {
        id: 'sec-rw01-2',
        title: '2. Inference — Membaca Makna Tersirat',
        badge: 'Inference Skills',
        content: `**Inference** = menyimpulkan informasi yang TIDAK dinyatakan secara eksplisit, berdasarkan bukti dalam teks.

**Strategi Menjawab Pertanyaan Inference:**
1. Baca sekitar informasi yang relevan secara teliti
2. Hubungkan informasi yang ada dengan pengetahuan logis
3. Pilih jawaban yang paling didukung teks (bukan yang paling "logis" secara umum)
4. Hindari jawaban yang terlalu jauh melampaui apa yang tertulis

**Signal Words untuk Inference:**
- *It can be inferred that...*
- *The author implies that...*
- *Based on the passage, it is most likely that...*
- *The author's attitude toward X is...*`,
        examples: [
          {
            sentence: 'Teks: "The government doubled its investment in renewable energy over the last decade, yet carbon emissions have only decreased by 3%."',
            translation: 'Inference yang tepat: Investasi dalam energi terbarukan saja tidak cukup untuk mengurangi emisi karbon secara signifikan.',
            explanation: 'Kita tidak diberitahu secara langsung, tapi kombinasi "doubled investment" vs "only 3% decrease" mengimplikasikan inefisiensi.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'exam-tip',
          title: 'IELTS True/False/Not Given — Strategi Kritis',
          text: 'True = teks menyatakan secara eksplisit atau jelas menyiratkan. False = teks secara eksplisit membantah. Not Given = teks tidak menyebutkan atau tidak memberikan cukup informasi. Jangan inference terlalu jauh untuk NOT GIVEN!',
        },
      },
    ],
    keyTakeaways: [
      'Skimming = gist dan struktur (cepat). Scanning = fakta spesifik (cepat).',
      'Inference = kesimpulan berdasarkan bukti teks, bukan asumsi umum.',
      'IELTS True/False/Not Given: "Not Given" berarti teks tidak memberikan informasi cukup.',
      'Selalu baca pertanyaan SEBELUM membaca teks secara detail.',
    ],
    prevLessonId: 'vocab-05',
    nextLessonId: 'rw-02',
  },
  {
    id: 'rw-02',
    trackId: 'reading-writing-workshop',
    slug: 'essay-structure-argumentation',
    title: 'Academic Essay Structure & Argumentation',
    order: 2,
    summary: 'Kuasai struktur esai akademis 4-5 paragraf, cara mengembangkan argumen yang kuat (PEEL/TEEL), dan teknik mengorganisir ide sebelum menulis.',
    readTimeMin: 10,
    difficulty: 'Intermediate',
    objectives: [
      'Memahami struktur Introduction-Body-Conclusion dalam esai akademis.',
      'Menggunakan pola PEEL untuk mengembangkan paragraf body yang kuat.',
      'Membangun argumen yang koheren dan didukung bukti.',
    ],
    sections: [
      {
        id: 'sec-rw02-1',
        title: '1. Struktur Esai Akademis 5 Paragraf',
        badge: 'Essay Structure',
        content: `**Paragraph 1 — Introduction:**
- Hook (kalimat menarik perhatian)
- Background (konteks topik)
- Thesis statement (posisi dan peta esai)

**Paragraphs 2-4 — Body Paragraphs (PEEL):**
- **P**oint: Kalimat topik (topik paragraf)
- **E**xplanation: Penjelasan dan elaborasi
- **E**vidence: Bukti, statistik, contoh, atau kutipan
- **L**ink: Kalimat penutup yang menghubungkan kembali ke thesis

**Paragraph 5 — Conclusion:**
- Paraphrase thesis
- Rangkuman poin utama
- Final thought / recommendation / call to action`,
        ruleBox: {
          formula: 'Introduction (Hook + Background + Thesis) → Body × 3 (PEEL) → Conclusion',
          explanation: 'Setiap body paragraph hanya memiliki SATU ide utama yang dikembangkan secara mendalam.',
          pitfall: 'Jangan masukkan ide baru dalam Conclusion! Hanya rangkuman dari apa yang sudah dibahas.',
        },
      },
      {
        id: 'sec-rw02-2',
        title: '2. Thesis Statement — Kunci Esai yang Kuat',
        badge: 'Thesis',
        content: `**Thesis Statement** yang baik harus:
1. **Spesifik**: Bukan "Teknologi penting" → "Artificial intelligence has fundamentally transformed healthcare delivery by enabling more accurate diagnoses and personalized treatments."
2. **Contestable**: Bisa diperdebatkan (bukan fakta yang sudah jelas)
3. **Previewing**: Memberikan gambaran argumen utama yang akan dikembangkan

**Tipe Thesis untuk IELTS Task 2:**
- Opinion/Agree-Disagree: *"While there are some merits to this view, I firmly believe that..."*
- Discuss Both Views: *"This essay will examine both perspectives before arguing that..."*
- Problem-Solution: *"The most effective solutions to this problem involve..."*
- Advantage-Disadvantage: *"Although this development offers several benefits, the drawbacks ultimately outweigh the advantages."*`,
        examples: [
          {
            sentence: 'Weak: "Technology has advantages and disadvantages." → Strong: "While technological advancement accelerates economic growth, its detrimental effects on traditional employment patterns necessitate comprehensive retraining policies."',
            translation: 'Lemah: "Teknologi memiliki kelebihan dan kekurangan." → Kuat: "Meskipun kemajuan teknologi mempercepat pertumbuhan ekonomi, dampak negatifnya terhadap pola ketenagakerjaan tradisional memerlukan kebijakan pelatihan ulang yang komprehensif."',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Setiap body paragraph = satu ide utama yang dikembangkan dengan PEEL.',
      'Thesis statement harus spesifik, contestable, dan previewing.',
      'Conclusion = paraphrase thesis + rangkuman + final thought (tanpa ide baru).',
      'Rencanakan esai 5 menit sebelum menulis — map out PEEL untuk setiap paragraf.',
    ],
    prevLessonId: 'rw-01',
    nextLessonId: 'rw-03',
  },
  {
    id: 'rw-03',
    trackId: 'reading-writing-workshop',
    slug: 'cohesion-coherence-linking',
    title: 'Cohesion & Coherence: Linking Words & Discourse Markers',
    order: 3,
    summary: 'Kuasai cara menghubungkan ide dalam dan antar paragraf menggunakan linking words, discourse markers, pronoun reference, dan lexical chains secara alami — bukan berlebihan.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan linking words dengan tepat sesuai fungsi logisnya.',
      'Memahami perbedaan cohesion (dalam kalimat) vs coherence (logika keseluruhan).',
      'Menghindari kesalahan penggunaan linking words yang berlebihan.',
    ],
    sections: [
      {
        id: 'sec-rw03-1',
        title: '1. Linking Words berdasarkan Fungsi',
        badge: 'Linking Words',
        content: `| Fungsi | Linking Words |
|--------|--------------|
| **Menambahkan** | Furthermore, Moreover, In addition, Additionally, Besides |
| **Kontras** | However, Nevertheless, On the other hand, In contrast, Yet, Whereas |
| **Sebab** | Because, Since, As, Due to, Owing to, Given that |
| **Akibat** | Therefore, Consequently, As a result, Hence, Thus, This leads to |
| **Contoh** | For instance, For example, Such as, Including, Notably |
| **Penekanan** | In particular, Especially, Above all, Most importantly |
| **Konsesi** | Although, Even though, Despite, In spite of, While |
| **Kesimpulan** | In conclusion, To summarize, Overall, In summary, To conclude |`,
        callout: {
          type: 'warning',
          title: 'IELTS Trap — Terlalu Banyak Linking Words!',
          text: 'Penggunaan linking words yang berlebihan (setiap kalimat dimulai "Furthermore..." atau "Moreover...") sebenarnya MENURUNKAN skor Coherence & Cohesion. Gunakan secara alami dan bervariasi.',
        },
      },
      {
        id: 'sec-rw03-2',
        title: '2. Cohesion Devices: Pronoun Reference & Lexical Chains',
        badge: 'Cohesion Devices',
        content: `**Pronoun Reference** (menghindari repetisi):
- *The study was conducted in 2022. **It** involved over 500 participants.*
- *Researchers analyzed three variables. **These** included age, income, and education level.*
- *The government introduced new policies. **Their** impact was assessed over five years.*

**Lexical Chains** (kata-kata terkait yang menjaga tema):
- Climate change → global warming → carbon emissions → greenhouse gases → environmental impact
- Bukan semua harus sinonim persis — kata-kata yang berkaitan semantik juga membangun kohesi

**Substitution & Ellipsis:**
- *Some scientists support this theory; others **do not** [support it].* (ellipsis)
- *The original hypothesis was rejected. A new **one** was proposed.* (substitution)`,
        examples: [
          {
            sentence: 'The research team collected data from three countries. These nations were selected because of their diverse economic profiles, which allowed the team to draw comparative insights across different developmental contexts.',
            translation: 'Tim peneliti mengumpulkan data dari tiga negara. Negara-negara ini dipilih karena profil ekonomi mereka yang beragam, yang memungkinkan tim menarik wawasan komparatif di berbagai konteks pembangunan.',
            explanation: '"These nations" = pronoun reference ke "three countries". "their" = pronoun reference ke "nations". "which" = relative pronoun untuk "diverse profiles".',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Linking words harus digunakan sesuai fungsi logis, bukan sekadar formalitas.',
      'Terlalu banyak linking words = unnaturally forced — ini menurunkan skor IELTS!',
      'Cohesion = pronoun reference, lexical chains, substitution, ellipsis.',
      'Coherence = logika argumen yang mengalir secara natural antar paragraf.',
    ],
    prevLessonId: 'rw-02',
    nextLessonId: 'rw-04',
  },
  {
    id: 'rw-04',
    trackId: 'reading-writing-workshop',
    slug: 'ielts-task1-data-description',
    title: 'IELTS Task 1: Describing Graphs, Charts & Diagrams',
    order: 4,
    summary: 'Kuasai teknik mendeskripsi grafik (bar/line/pie), tabel, diagram proses, dan peta dalam 20 menit — dengan struktur Overview yang kuat dan language of trends.',
    readTimeMin: 10,
    difficulty: 'Advanced',
    objectives: [
      'Menulis Overview yang kuat — syarat utama skor di atas Band 5.',
      'Menggunakan language of trends dengan akurat (verba dan noun).',
      'Memilih dan mengelompokkan data secara selektif (bukan deskripsi setiap angka).',
    ],
    sections: [
      {
        id: 'sec-rw04-1',
        title: '1. Struktur Task 1 yang Ideal',
        badge: 'Task 1 Structure',
        content: `**Paragraph 1 — Introduction** (~1 kalimat):
Paraphrase judul grafik (jangan copy-paste!).
*"The graph illustrates changes in..."*

**Paragraph 2 — Overview** (~2 kalimat) ← PALING PENTING:
Sebutkan tren PALING MENONJOL tanpa angka spesifik.
*"Overall, it is evident that X experienced the most significant growth, while Y declined consistently throughout the period."*

**Paragraphs 3-4 — Details** (body):
Deskripsikan data secara selektif dan terkelompokkan dengan angka spesifik.

**Ingat:** Task 1 BUKAN esai — tidak perlu Conclusion atau opini!`,
        ruleBox: {
          formula: 'Introduction → Overview → Details (2-3 paragraf)',
          explanation: 'Overview = tren paling menonjol tanpa angka spesifik. Ini yang membedakan Band 5 dan Band 7!',
          pitfall: 'Jangan jelaskan SETIAP angka — pilih yang paling signifikan dan berkelompok.',
        },
      },
      {
        id: 'sec-rw04-2',
        title: '2. Language of Trends — Verba & Noun',
        badge: 'Trend Language',
        content: `**Verba Trend (dengan gradasi):**

| Naik | Turun | Stabil |
|------|-------|--------|
| increase | decrease | remain stable |
| rise | fall | level off |
| grow | decline | plateau |
| climb | drop | stay constant |
| surge (drastis) | plummet (drastis) | fluctuate (naik-turun) |

**Modifikasi dengan Adverb:**
- *increased **dramatically/significantly/sharply/considerably***
- *decreased **gradually/steadily/slightly/marginally***

**Noun Trend:**
- *a significant increase/decrease in...*
- *a dramatic rise/fall in...*
- *a steady growth/decline of...*

**Pola Kalimat:**
- *[Subject] + [verb] + [adverb] + from [angka awal] to [angka akhir]*
- *There was a [adjective] + [noun] + in [subject]*`,
        examples: [
          {
            sentence: 'The number of electric vehicles sold increased dramatically from 1.2 million in 2015 to 6.8 million by 2023, representing a rise of over 450%.',
            translation: 'Jumlah kendaraan listrik yang terjual meningkat secara dramatis dari 1,2 juta pada 2015 menjadi 6,8 juta pada 2023, mewakili kenaikan lebih dari 450%.',
            explanation: 'Verba + adverb + angka spesifik + periode waktu = Task 1 sentence yang lengkap.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Overview (tanpa angka) adalah elemen paling kritis Task 1 — tanpa ini, skor maksimal Band 5.',
      'Language of trends: verba (increase/rise/climb) + adverb (dramatically/slightly).',
      'Jangan deskripsikan SEMUA angka — pilih dan kelompokkan yang signifikan.',
      'Task 1 bukan esai — tidak ada kesimpulan/opini.',
    ],
    prevLessonId: 'rw-03',
    nextLessonId: 'rw-05',
  },
  {
    id: 'rw-05',
    trackId: 'reading-writing-workshop',
    slug: 'introductions-and-conclusions',
    title: 'Writing Introductions & Conclusions yang Berkesan',
    order: 5,
    summary: 'Kuasai berbagai teknik membuka dan menutup esai akademis: hook strategies, thesis statement variations, conclusion types, dan kesalahan yang harus dihindari.',
    readTimeMin: 8,
    difficulty: 'Advanced',
    objectives: [
      'Menggunakan berbagai teknik hook yang efektif untuk pembuka yang kuat.',
      'Menulis thesis statement yang presisi sesuai tipe pertanyaan IELTS.',
      'Menutup esai dengan conclusion yang efektif tanpa ide baru.',
    ],
    sections: [
      {
        id: 'sec-rw05-1',
        title: '1. Teknik Hook untuk Introduction yang Kuat',
        badge: 'Hook Techniques',
        content: `**5 Teknik Hook yang Efektif:**

1. **Surprising Statistic**: *"Over 70% of global freshwater is consumed by agriculture — a sector that often escapes critical scrutiny in environmental debates."*

2. **Thought-Provoking Question** (gunakan dengan hati-hati di IELTS): *"What would happen if governments prioritized mental health equally with physical health?"*

3. **Bold Statement/Claim**: *"The greatest threat to biodiversity in the twenty-first century is not climate change, but habitat fragmentation."*

4. **Contrast/Paradox**: *"Despite unprecedented levels of global connectivity, social isolation and loneliness are at an all-time high."*

5. **Brief Anecdote/Scenario** (lebih cocok TOEFL): *"Imagine waking up in a world where clean water is a luxury only the wealthy can afford."*`,
        callout: {
          type: 'exam-tip',
          title: 'IELTS vs TOEFL Introduction Style',
          text: 'IELTS Writing: Hindari teknik terlalu personal atau rhetorical questions yang berlebihan. Gunakan statistik, pernyataan kontras, atau background statement yang objektif. TOEFL lebih toleran dengan gaya personal.',
        },
      },
      {
        id: 'sec-rw05-2',
        title: '2. Conclusion Strategies — Menutup dengan Berkesan',
        badge: 'Conclusion Techniques',
        content: `**Struktur Conclusion yang Kuat:**
1. **Restate thesis** (paraphrase, JANGAN copy): mengulang posisi utama dengan kata-kata berbeda
2. **Summary of main points**: merangkum 2-3 argumen utama secara singkat
3. **Final statement** — pilih salah satu:
   - Recommendation: *"Policymakers should prioritize..."*
   - Prediction: *"If current trends continue, it is likely that..."*
   - Call to action: *"Society must collectively..."*
   - Broader significance: *"The implications of this extend far beyond..."*

**Kesalahan yang Harus Dihindari:**
- ❌ Menambahkan argumen/fakta baru di conclusion
- ❌ Terlalu panjang (max 10-15% dari total essay)
- ❌ Mengulang thesis dengan kalimat yang persis sama (copy)
- ❌ Mulai dengan "In conclusion, I think..." (terlalu informal)`,
        examples: [
          {
            sentence: 'In conclusion, while urban expansion offers economic opportunities, its adverse effects on green spaces and community well-being necessitate more rigorous urban planning policies that balance development with environmental preservation.',
            translation: 'Sebagai kesimpulan, meskipun ekspansi perkotaan menawarkan peluang ekonomi, dampak negatifnya terhadap ruang hijau dan kesejahteraan masyarakat memerlukan kebijakan perencanaan kota yang lebih ketat yang menyeimbangkan pembangunan dengan pelestarian lingkungan.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Hook yang kuat: statistik mengejutkan, pernyataan kontras, atau paradoks.',
      'Thesis harus spesifik, contestable, dan previewing argumen utama.',
      'Conclusion: paraphrase thesis + rangkuman + final thought — TANPA ide baru!',
      'IELTS conclusion: hindari yang terlalu personal; gunakan register akademis.',
    ],
    prevLessonId: 'rw-04',
    nextLessonId: 'rw-06',
  },
  {
    id: 'rw-06',
    trackId: 'reading-writing-workshop',
    slug: 'paraphrasing-and-summarizing',
    title: 'Paraphrasing, Summarizing & Synthesizing Sources',
    order: 6,
    summary: 'Kuasai teknik paraphrase yang efektif (bukan sekadar ganti sinonim), cara meringkas teks panjang menjadi esensial, dan cara mensintesis informasi dari beberapa sumber.',
    readTimeMin: 9,
    difficulty: 'Advanced',
    objectives: [
      'Membedakan paraphrase, summary, dan quotation — kapan menggunakan yang mana.',
      'Menerapkan teknik paraphrase yang sesungguhnya (bukan hanya ganti sinonim).',
      'Mensintesis informasi dari beberapa sumber secara koheren.',
    ],
    sections: [
      {
        id: 'sec-rw06-1',
        title: '1. Paraphrase yang Sesungguhnya — Bukan Hanya Sinonim',
        badge: 'Paraphrase Techniques',
        content: `**Paraphrase** yang baik memerlukan MULTIPLE transformasi, bukan hanya mengganti kata:

**5 Teknik Paraphrase:**
1. **Sinonim**: *significant → substantial, considerable, notable*
2. **Perubahan struktur kalimat**: aktif → pasif, atau mengubah urutan klausa
3. **Perubahan part of speech**: *"Economic growth is important" → "The importance of economic growth..."*
4. **Perubahan perspektif**: dari umum ke spesifik atau sebaliknya
5. **Kombinasi kalimat atau pemisahan**: gabungkan dua kalimat atau pisahkan satu

**Contoh Paraphrase Bertahap:**
- Original: *"The government's investment in education has yielded significant improvements in literacy rates."*
- Sinonim saja ❌: *"The government's expenditure on education has produced notable enhancements in reading ability."*
- Paraphrase sesungguhnya ✅: *"Literacy rates have improved substantially as a result of increased government funding directed toward education."*`,
        ruleBox: {
          formula: 'Good Paraphrase = New structure + New vocabulary + Same meaning',
          explanation: 'Paraphrase yang baik tidak terdeteksi sebagai salinan, namun tetap mempertahankan makna asli.',
          pitfall: 'Mengganti sinonim saja tanpa mengubah struktur = masih dianggap plagiarisme!',
        },
      },
      {
        id: 'sec-rw06-2',
        title: '2. Summarizing & Synthesizing Multiple Sources',
        badge: 'Summary & Synthesis',
        content: `**Summary** = menyatakan kembali ide utama sumber dalam kata-kata sendiri, jauh lebih singkat dari aslinya.

**Summary Process:**
1. Baca teks secara keseluruhan
2. Identifikasi ide utama setiap paragraf
3. Tulis ulang tanpa melihat teks asli
4. Pastikan ringkasan ~25% dari panjang asli

**Synthesis** = menggabungkan informasi dari BEBERAPA sumber untuk mendukung argumen:
- Bukan hanya merangkum sumber satu per satu
- Hubungkan ide dari berbagai sumber di sekitar argumen Anda

**Reporting Verbs untuk Synthesis:**
- *Smith (2021) **argues** that... However, Jones (2022) **contends** that...*
- *Both researchers **conclude** that... Though they **differ** in their approaches...*
- *The data **suggests**... This is **corroborated** by...*`,
        examples: [
          {
            sentence: 'While Chen (2020) emphasizes the role of genetic factors in obesity, Thompson and Liu (2022) argue that environmental influences are equally significant. A synthesis of these perspectives suggests that effective intervention requires addressing both biological and contextual determinants.',
            translation: 'Sementara Chen (2020) menekankan peran faktor genetik dalam obesitas, Thompson dan Liu (2022) berpendapat bahwa pengaruh lingkungan sama pentingnya. Sintesis dari perspektif-perspektif ini menunjukkan bahwa intervensi yang efektif memerlukan pengalamatan baik determinan biologis maupun kontekstual.',
            explanation: 'Synthesis: dua sumber dikontraskan, lalu disintesis menjadi argumen baru.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Paraphrase = perubahan struktur + sinonim + perubahan part of speech (bukan hanya sinonim).',
      'Summary = ide utama dalam kata sendiri, ~25% dari panjang asli.',
      'Synthesis = menggabungkan beberapa sumber di sekitar satu argumen.',
      'Reporting verbs: argues, contends, suggests, claims, demonstrates, highlights.',
    ],
    prevLessonId: 'rw-05',
    nextLessonId: 'ielts-01',
  },
];

export const readingWritingExercises: Record<string, Exercise[]> = {
  'rw-01': [
    {
      id: 'ex-rw01-1',
      lessonId: 'rw-01',
      type: 'multiple-choice',
      title: 'True/False/Not Given',
      instruction: 'Baca teks dan tentukan apakah pernyataan berikut True, False, atau Not Given.',
      question: 'Teks: "Studies show that bilingual children demonstrate enhanced executive function compared to monolingual peers, though the magnitude of this advantage varies significantly across different cognitive domains."\n\nPernyataan: "Bilingual children consistently outperform monolingual children in ALL cognitive tasks."',
      options: [
        { id: 'a', text: 'True', explanation: 'Teks tidak menyatakan "all cognitive tasks" — hanya menyebutkan "varies across different domains".' },
        { id: 'b', text: 'False', explanation: 'Benar! Teks menyatakan "the advantage varies significantly across different cognitive domains" — ini berlawanan dengan "ALL cognitive tasks".' },
        { id: 'c', text: 'Not Given', explanation: 'Teks memberikan informasi yang cukup untuk menentukan pernyataan ini salah.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'False = teks secara langsung membantah pernyataan. "Varies significantly" berlawanan dengan "consistently outperform in ALL".',
      points: 10,
    },
    {
      id: 'ex-rw01-2',
      lessonId: 'rw-01',
      type: 'multiple-choice',
      title: 'Inference Question',
      instruction: 'Apa yang dapat disimpulkan dari teks ini?',
      question: 'Teks: "Countries with the highest per capita income do not necessarily have the best health outcomes. Japan, despite having moderate income levels, consistently ranks among the healthiest nations, largely attributed to its diet and healthcare system."\n\nApa yang paling dapat disimpulkan dari teks ini?',
      options: [
        { id: 'a', text: 'Semua negara dengan pendapatan tinggi memiliki hasil kesehatan yang buruk.', explanation: 'Terlalu ekstrem — teks hanya menyatakan tidak "necessarily" ada hubungan, bukan tidak ada sama sekali.' },
        { id: 'b', text: 'Faktor-faktor di luar pendapatan per kapita berkontribusi signifikan terhadap kesehatan nasional.', explanation: 'Benar! Ini adalah inference yang tepat — Jepang yang "moderate income" tapi sehat mengimplikasikan faktor lain (diet, healthcare) lebih penting.' },
        { id: 'c', text: 'Jepang memiliki pendapatan per kapita tertinggi di Asia.', explanation: 'Teks menyebut "moderate income levels" — ini bertentangan dengan inferensi ini.' },
        { id: 'd', text: 'Semua negara harus meniru sistem kesehatan Jepang.', explanation: 'Teks tidak menyarankan ini sama sekali.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Inference yang baik = didukung bukti dalam teks + logika minimal yang diperlukan. Jangan over-infer!',
      points: 10,
    },
  ],
  'rw-02': [
    {
      id: 'ex-rw02-1',
      lessonId: 'rw-02',
      type: 'multiple-choice',
      title: 'Identifikasi Thesis Statement',
      instruction: 'Pilih thesis statement terbaik untuk esai "Apakah pekerjaan jarak jauh bermanfaat bagi produktivitas?"',
      question: 'Manakah thesis statement yang paling efektif dan memenuhi kaidah contestable, specific, and previewing?',
      options: [
        { id: 'a', text: 'Remote work has become increasingly popular in recent years.', explanation: 'Ini adalah statement fakta, bukan thesis yang contestable.' },
        { id: 'b', text: 'There are both advantages and disadvantages to remote work.', explanation: 'Terlalu umum dan tidak mengambil posisi yang jelas.' },
        { id: 'c', text: 'While remote work presents challenges in terms of collaboration, its overall impact on individual productivity and work-life balance is overwhelmingly positive when supported by appropriate digital infrastructure.', explanation: 'Benar! Spesifik, contestable, dan previewing argumen (challenges, productivity, work-life balance, digital infrastructure).' },
        { id: 'd', text: 'Remote work is good.', explanation: 'Terlalu sederhana, tidak ada detail atau peta argumen.' },
      ],
      correctAnswerId: 'c',
      grammarTip: 'Thesis yang baik: contestable (bisa diperdebatkan) + spesifik + previewing poin utama yang akan dikembangkan.',
      points: 10,
    },
    {
      id: 'ex-rw02-2',
      lessonId: 'rw-02',
      type: 'matching',
      title: 'PEEL Structure',
      instruction: 'Pasangkan bagian paragraf dengan komponen PEEL yang tepat.',
      pairs: [
        { id: 'peel1', left: '"Digital technology has fundamentally reshaped educational practices."', right: 'Point (Kalimat Topik)' },
        { id: 'peel2', left: '"This transformation means students can access diverse learning materials and personalized instruction regardless of geographical location."', right: 'Explanation (Penjelasan)' },
        { id: 'peel3', left: '"A UNESCO study found that digital learning improved academic outcomes by 35% in underserved communities."', right: 'Evidence (Bukti)' },
        { id: 'peel4', left: '"This demonstrates that digital technology serves as a powerful equalizer in education."', right: 'Link (Tautan ke Thesis)' },
      ],
      explanation: 'PEEL = Point + Explanation + Evidence + Link. Setiap body paragraph harus memiliki keempat komponen ini.',
      points: 15,
    },
  ],
  'rw-03': [
    {
      id: 'ex-rw03-1',
      lessonId: 'rw-03',
      type: 'multiple-choice',
      title: 'Pilih Linking Word yang Tepat',
      instruction: 'Pilih linking word yang paling tepat secara logis.',
      question: 'The government increased funding for public transport. ________, congestion in the city centre has decreased significantly.',
      options: [
        { id: 'a', text: 'However', explanation: '"However" menunjukkan kontras — tapi kedua kalimat tidak kontradiktif (investasi → hasilnya baik).' },
        { id: 'b', text: 'Consequently', explanation: 'Benar! "Consequently" menunjukkan akibat/hasil — peningkatan funding menyebabkan penurunan kemacetan.' },
        { id: 'c', text: 'Similarly', explanation: '"Similarly" digunakan untuk membandingkan dua hal yang mirip, bukan sebab-akibat.' },
        { id: 'd', text: 'In contrast', explanation: '"In contrast" digunakan untuk kontras — tidak tepat di sini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Pilih linking word berdasarkan hubungan LOGIS antara dua ide: sebab-akibat → consequently/therefore. Kontras → however/nevertheless.',
      points: 10,
    },
    {
      id: 'ex-rw03-2',
      lessonId: 'rw-03',
      type: 'fill-blank',
      title: 'Pronoun Reference',
      instruction: 'Lengkapi kalimat dengan pronoun reference yang tepat untuk menghindari repetisi.',
      sentence: 'The researchers conducted multiple surveys. [___] surveys revealed unexpected patterns that challenged existing theories.',
      targets: [{ index: 0, correctAnswers: ['These', 'The'], hint: 'Pronoun yang merujuk kembali ke "surveys" yang sudah disebutkan' }],
      wordBank: ['These', 'This', 'That', 'Those'],
      explanation: '"These surveys" = pronoun reference untuk "multiple surveys" (plural). "These" merujuk ke hal yang baru disebutkan, dekat dengan pembicara/penulis.',
      points: 10,
    },
  ],
  'rw-04': [
    {
      id: 'ex-rw04-1',
      lessonId: 'rw-04',
      type: 'multiple-choice',
      title: 'Language of Trends',
      instruction: 'Pilih deskripsi yang paling tepat untuk grafik berikut.',
      question: 'Data: Penjualan mobil listrik: 2019: 100.000 unit, 2020: 95.000 unit, 2021: 140.000 unit, 2022: 220.000 unit, 2023: 380.000 unit',
      options: [
        { id: 'a', text: 'Electric vehicle sales declined consistently from 2019 to 2023.', explanation: 'Tidak benar — ada penurunan di 2020, tapi keseluruhan tren adalah naik.' },
        { id: 'b', text: 'After a slight dip in 2020, electric vehicle sales increased dramatically, reaching 380,000 units by 2023.', explanation: 'Benar! Akurat mendeskripsikan penurunan kecil di 2020, lalu kenaikan dramatis dengan angka spesifik.' },
        { id: 'c', text: 'Electric vehicle sales were 100,000 in 2019, 95,000 in 2020, 140,000 in 2021, 220,000 in 2022, and 380,000 in 2023.', explanation: 'Ini hanya mendaftar angka tanpa mengidentifikasi tren — untuk Task 1 ini tidak ideal.' },
        { id: 'd', text: 'Electric vehicle sales surged dramatically throughout the entire period.', explanation: 'Tidak akurat — ada penurunan di 2020, jadi tidak "throughout the entire period".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Task 1 ideal: identifikasi tren, nyatakan pengecualian, sertakan angka spesifik di detail paragraf.',
      points: 10,
    },
    {
      id: 'ex-rw04-2',
      lessonId: 'rw-04',
      type: 'matching',
      title: 'Language of Trends — Gradasi',
      instruction: 'Pasangkan perubahan dengan kata yang paling tepat.',
      pairs: [
        { id: 'tr1', left: 'Naik dari 10% menjadi 90%', right: 'surged dramatically / rocketed' },
        { id: 'tr2', left: 'Naik dari 10% menjadi 12%', right: 'increased slightly / rose marginally' },
        { id: 'tr3', left: 'Turun dari 80% menjadi 5%', right: 'plummeted / collapsed dramatically' },
        { id: 'tr4', left: 'Antara 48% dan 52% selama 5 tahun', right: 'remained relatively stable / fluctuated slightly' },
      ],
      explanation: 'Gradasi kata trend penting untuk akurasi deskripsi: slight/marginal < moderate/steady < significant/considerable < dramatic/sharp < surge/plummet.',
      points: 15,
    },
  ],
  'rw-05': [
    {
      id: 'ex-rw05-1',
      lessonId: 'rw-05',
      type: 'multiple-choice',
      title: 'Teknik Hook',
      instruction: 'Pilih hook yang paling efektif untuk esai tentang dampak media sosial terhadap kesehatan mental remaja.',
      question: 'Kalimat pembuka (hook) manakah yang paling menarik perhatian pembaca dan memenuhi standar esai akademis?',
      options: [
        { id: 'a', text: 'Social media is very popular nowadays.', explanation: 'Terlalu umum dan tidak menarik — tidak ada fakta atau pertanyaan yang memancing perhatian.' },
        { id: 'b', text: 'In this essay, I will discuss social media and mental health.', explanation: 'Ini bukan hook — ini adalah pernyataan tujuan yang tidak menarik dan terlalu informal untuk IELTS.' },
        { id: 'c', text: 'Despite being constantly connected to hundreds of "friends" online, research shows that teenagers who spend more than three hours daily on social media are 60% more likely to report feelings of loneliness and depression.', explanation: 'Benar! Paradox + statistik spesifik = hook yang kuat dan relevan.' },
        { id: 'd', text: 'Have you ever used social media?', explanation: 'Rhetorical question yang terlalu simplistic dan tidak cocok untuk akademis.' },
      ],
      correctAnswerId: 'c',
      grammarTip: 'Hook terbaik: paradox atau statistik mengejutkan yang langsung relevan dengan topik. Hindari pernyataan terlalu umum atau pertanyaan retoris yang simplistik.',
      points: 10,
    },
  ],
  'rw-06': [
    {
      id: 'ex-rw06-1',
      lessonId: 'rw-06',
      type: 'multiple-choice',
      title: 'Evaluasi Kualitas Paraphrase',
      instruction: 'Tentukan manakah paraphrase terbaik dari kalimat asli.',
      question: 'Original: "Climate change disproportionately affects developing nations that have contributed least to global carbon emissions."',
      options: [
        { id: 'a', text: 'Climate change disproportionately impacts poor nations that contributed least to carbon dioxide emissions.', explanation: 'Hampir sama — hanya mengganti "affects" dengan "impacts" dan "global" dihapus. Ini bukan paraphrase yang cukup.' },
        { id: 'b', text: 'Developing nations, despite their minimal contribution to global greenhouse gas emissions, bear a disproportionate burden of the consequences of climate change.', explanation: 'Benar! Perubahan struktur (subjek berbeda), sinonim (bear a burden, minimal contribution), dan penjelasan tambahan.' },
        { id: 'c', text: 'The effects of climate change are felt most severely by countries that did not cause it.', explanation: 'Agak baik, tapi terlalu simplistic untuk konteks akademis.' },
        { id: 'd', text: 'Climate change is a big problem for developing countries.', explanation: 'Terlalu disederhanakan dan kehilangan nuansa "disproportionately" dan "contributed least".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Paraphrase terbaik = perubahan struktur + sinonim yang tepat + mempertahankan nuansa dan makna asli.',
      points: 10,
    },
    {
      id: 'ex-rw06-2',
      lessonId: 'rw-06',
      type: 'matching',
      title: 'Reporting Verbs untuk Synthesis',
      instruction: 'Pasangkan kalimat dengan reporting verb yang paling tepat.',
      pairs: [
        { id: 'rv1', left: 'Smith menyatakan dengan yakin bahwa kebijakan ini akan berhasil.', right: 'argues / contends / asserts' },
        { id: 'rv2', left: 'Data menunjukkan korelasi positif antara variabel.', right: 'indicates / reveals / demonstrates' },
        { id: 'rv3', left: 'Lee mengakui ada keterbatasan dalam metodologinya.', right: 'acknowledges / concedes / admits' },
        { id: 'rv4', left: 'Para peneliti mengusulkan sebuah solusi baru.', right: 'proposes / suggests / recommends' },
      ],
      explanation: 'Pilih reporting verb yang mencerminkan nuansa: argues (opini kuat) vs indicates (data/bukti) vs acknowledges (mengakui) vs proposes (usulan).',
      points: 15,
    },
  ],
};

