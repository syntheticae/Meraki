import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const intermediateGrammarLessons: Lesson[] = [
  {
    id: 'inter-01',
    trackId: 'intermediate-grammar',
    slug: 'passive-voice-academic-writing',
    title: 'Passive Voice in Academic & Report Writing',
    order: 1,
    summary: 'Kuasai Passive Voice dalam semua 8 tenses utama, Get-Passive informal, Passive dengan modal verbs, dan strategi penggunaannya dalam tulisan akademis.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan Passive Voice dalam 8 tenses utama dengan rumus yang tepat.',
      'Membedakan penggunaan Passive dalam konteks formal dan informal.',
      'Memahami kapan menggunakan Active vs Passive Voice secara strategis.',
      'Menerapkan Passive dengan modal verbs dalam penulisan akademis.',
    ],
    sections: [
      {
        id: 'sec-i1-1',
        title: '1. Mengapa Passive Voice? Strategi Penulisan Akademis',
        badge: 'Academic Strategy',
        content: `Passive Voice digunakan ketika:
1. **Pelaku tidak diketahui**: *The manuscript was discovered in 1743.*
2. **Pelaku tidak penting/sudah jelas**: *The data was collected using a standardized questionnaire.*
3. **Fokus pada hasil, bukan siapa yang melakukan**: *The findings were published in Nature.*
4. **Objektivitas akademis**: menghindari "I/We" — *The experiment was conducted...*

**Rumus Dasar:** Subject + **be** (conjugated) + **V3** + (by + agent)`,
        ruleBox: {
          formula: 'Subject + [am/is/are/was/were/has been/will be] + V3 + (by + agent)',
          explanation: 'Konjugasi "be" menentukan tenses. V3 selalu tetap.',
          pitfall: 'Passive tidak dapat dibentuk dari intransitive verbs (arrive, occur, happen, sleep).',
        },
      },
      {
        id: 'sec-i1-2',
        title: '2. Tabel Konversi Active → Passive (8 Tenses)',
        badge: 'Complete Reference',
        content: `| Tenses | Active | Passive |
|--------|--------|---------|
| Simple Present | Scientists observe data. | Data **is observed**. |
| Present Continuous | They are analyzing samples. | Samples **are being analyzed**. |
| Simple Past | Committee approved proposal. | Proposal **was approved**. |
| Past Continuous | Workers were repairing bridge. | Bridge **was being repaired**. |
| Present Perfect | They have completed survey. | Survey **has been completed**. |
| Past Perfect | Engineers had tested system. | System **had been tested**. |
| Simple Future | Team will present findings. | Findings **will be presented**. |
| Future Perfect | They will have published results. | Results **will have been published**. |`,
        examples: [
          {
            sentence: 'The research paper has been submitted to the journal for peer review.',
            translation: 'Makalah penelitian telah diserahkan ke jurnal untuk ditinjau oleh rekan sejawat.',
            explanation: 'Present Perfect Passive: has been submitted.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-i1-3',
        title: '3. Get-Passive & Modal + Passive',
        badge: 'Variations',
        content: `**Get-Passive** (informal/spontaneous/unexpected):
- *She **got promoted** last month.*
- *My car **got stolen** downtown.*

**Modal + Passive** (very common in academic writing):
- *The results **must be verified** independently.*
- *The data **can be interpreted** in multiple ways.*
- *All submissions **will be reviewed** within two weeks.*`,
        examples: [
          {
            sentence: 'The hypothesis should be tested under controlled conditions before the results can be generalized.',
            translation: 'Hipotesis harus diuji dalam kondisi terkontrol sebelum hasilnya dapat digeneralisasi.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'exam-tip',
          title: 'IELTS Task 1 Process — Passive Sangat Penting',
          text: 'Dalam Task 1 (Process Diagrams): "The raw material is crushed, then filtered..." Kuasai ini untuk skor Grammatical Range yang tinggi.',
        },
      },
    ],
    keyTakeaways: [
      'Passive = Subject + be (conjugated) + V3.',
      'Intransitive verbs (arrive, occur, happen) tidak bisa dibuat passive.',
      'Get-passive untuk situasi informal, spontan, atau tak terduga.',
      'Modal + passive (must be done, should be considered) sangat umum dalam akademis.',
    ],
    prevLessonId: 'basic-06',
    nextLessonId: 'inter-02',
  },
  {
    id: 'inter-02',
    trackId: 'intermediate-grammar',
    slug: 'conditionals-and-inversion',
    title: 'Conditionals (All Types) & Formal Inversion',
    order: 2,
    summary: 'Kuasai 4 tipe conditional, Mixed Conditionals, alternatif unless/as long as/provided that, dan Inversion formal (Had/Were/Should).',
    readTimeMin: 10,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan semua 4 tipe conditional dengan tepat.',
      'Memahami dan menggunakan Mixed Conditionals.',
      'Menggunakan unless/as long as/provided that sebagai alternatif if.',
      'Menerapkan Formal Inversion dalam penulisan akademis.',
    ],
    sections: [
      {
        id: 'sec-i2-1',
        title: '1. Keempat Tipe Conditional',
        badge: 'Complete Reference',
        content: `| Tipe | Kondisi | If-Clause | Main Clause | Contoh |
|------|---------|-----------|-------------|--------|
| **0** | Fakta umum | Simple Present | Simple Present | If water reaches 100°C, it boils. |
| **1** | Mungkin terjadi | Simple Present | will + V1 | If it rains, the match will be cancelled. |
| **2** | Tidak nyata (present) | Simple Past | would + V1 | If I were a doctor, I would help everyone. |
| **3** | Tidak nyata (past) | Past Perfect | would have + V3 | If she had studied, she would have passed. |`,
        ruleBox: {
          formula: 'Type 2: If + Subject + WERE (formal), ... would + V1',
          explanation: '"Were" untuk semua subjek dalam Type 2 formal: "If I were you", "If she were here".',
          pitfall: '"If I was you..." (informal) → "If I were you..." (formal/IELTS/TOEFL).',
        },
      },
      {
        id: 'sec-i2-2',
        title: '2. Mixed Conditionals',
        badge: 'Advanced',
        content: `**Tipe A: Past condition → Present result**
- *If she **had chosen** medicine, she **would be** a doctor now.*

**Tipe B: Present condition → Past result**
- *If he **were** more careful (now), he **wouldn't have made** that mistake (then).*

Mixed conditionals menggabungkan dua tipe berbeda untuk hubungan waktu yang kompleks.`,
        examples: [
          {
            sentence: 'If the researchers had followed proper protocols (past), the study would be replicable today (present).',
            translation: 'Jika para peneliti mengikuti protokol yang tepat, penelitian ini akan dapat direplikasi hari ini.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-i2-3',
        title: '3. Conditional Alternatives & Formal Inversion',
        badge: 'Alternatives + Inversion',
        content: `**Alternatif "if":**
- **Unless** = if...not: *Unless you study, you will fail.*
- **As long as** = on condition: *As long as you work hard, success is achievable.*
- **Provided that** (formal): *You may use the lab, provided that you follow safety protocols.*
- **In case** (prevention): *Take an umbrella in case it rains.*

**Formal Inversion** (menggantikan "if" dengan auxiliary inversion):
| Normal | Formal Inversion |
|--------|-----------------|
| If I had known... | **Had** I known... |
| If this were true... | **Were** this true... |
| If you should encounter... | **Should** you encounter... |`,
        examples: [
          {
            sentence: 'Had the early results been more conclusive, the team would have published sooner.',
            translation: 'Seandainya hasil awal lebih meyakinkan, tim akan menerbitkan lebih awal.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Type 0 (fakta) | Type 1 (mungkin) | Type 2 (tidak nyata sekarang) | Type 3 (tidak nyata masa lalu).',
      'Type 2 formal: "If I WERE you..."',
      'Mixed: Past condition + Present result, atau Present condition + Past result.',
      'Formal inversion: Had/Were/Should menggantikan "If" + auxiliary.',
    ],
    prevLessonId: 'inter-01',
    nextLessonId: 'inter-03',
  },
  {
    id: 'inter-03',
    trackId: 'intermediate-grammar',
    slug: 'relative-clauses-advanced',
    title: 'Relative Clauses & Cleft Sentences',
    order: 3,
    summary: 'Defining vs Non-Defining relative clauses, relative pronouns lengkap, Reduced Relative Clauses, quantifiers + relative, dan Cleft Sentences untuk penekanan.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Membedakan Defining vs Non-Defining relative clauses.',
      'Memilih relative pronoun yang tepat.',
      'Mereduksi relative clauses menjadi participle phrases.',
      'Menggunakan Cleft Sentences untuk penekanan.',
    ],
    sections: [
      {
        id: 'sec-i3-1',
        title: '1. Defining vs Non-Defining',
        badge: 'Core Distinction',
        content: `**Defining** — menentukan IDENTITAS; tidak menggunakan koma; tidak bisa dihilangkan:
- *The researcher **who discovered the vaccine** received the Nobel Prize.*

**Non-Defining** — menambah info TAMBAHAN; menggunakan koma; bisa dihilangkan:
- *Professor Chen, **who has published 200 papers**, is retiring.*

**Aturan penting:**
- Non-defining: TIDAK menggunakan "that" — harus "who/which"
- Non-defining: Wajib ada koma`,
        ruleBox: {
          formula: 'Defining: N + who/that/which + clause | Non-Defining: N, + who/which + clause,',
          explanation: '"That" hanya untuk Defining. Non-defining selalu "who" (orang) atau "which" (benda).',
          pitfall: '"The study, that was published last year..." ❌ → "The study, which was published last year..." ✅',
        },
      },
      {
        id: 'sec-i3-2',
        title: '2. Relative Pronouns & Quantifiers',
        badge: 'Pronoun Guide',
        content: `| Pronoun | Untuk | Contoh |
|---------|-------|--------|
| who | Orang (subjek) | ...who discovered |
| whom | Orang (objek) | ...whom we interviewed |
| which | Benda/Hewan/Ide | ...which was tested |
| that | Orang/Benda (Defining only) | ...that confirmed |
| whose | Kepemilikan | ...whose research was cited |
| where | Tempat | ...where the experiment took place |
| when | Waktu | ...when the discovery was made |

**Quantifiers + Relative:**
- *200 participants, **all of whom** completed the survey.*
- *10 papers, **most of which** were relevant.*
- *3 hypotheses, **none of which** could be verified.*`,
      },
      {
        id: 'sec-i3-3',
        title: '3. Reduced Relative Clauses & Cleft Sentences',
        badge: 'Advanced Usage',
        content: `**Reduced Relative Clauses:**
| Full Form | Reduced |
|-----------|---------|
| students who are studying | students studying |
| the report which was submitted | the report submitted |
| data that had been collected | data collected |

**Cleft Sentences untuk Penekanan:**
- **It-Cleft**: *It was **Einstein** who developed relativity.*
- **What-Cleft**: *What we need is more collaboration.*`,
        examples: [
          {
            sentence: 'It is the lack of longitudinal data that prevents researchers from establishing causal relationships.',
            translation: 'Justru kurangnya data longitudinal yang mencegah para peneliti membangun hubungan kausal.',
            isCorrect: true,
          },
        ],
      },
    ],
    keyTakeaways: [
      'Defining (no comma) vs Non-defining (with commas) — "that" hanya untuk defining.',
      'Whose = kepemilikan. Whom = objek (him→whom, he→who).',
      'Reduced: active → -ing; passive → -ed.',
      'It-cleft (It was X that...) dan What-cleft (What we need is...) untuk penekanan.',
    ],
    prevLessonId: 'inter-02',
    nextLessonId: 'inter-04',
  },
  {
    id: 'inter-04',
    trackId: 'intermediate-grammar',
    slug: 'reported-speech',
    title: 'Reported Speech: Direct to Indirect',
    order: 4,
    summary: 'Tense backshift, perubahan pronoun dan time expressions, reporting verbs bervariasi, serta reported questions dan commands.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Menerapkan tense backshift dari Direct ke Indirect Speech.',
      'Mengubah pronoun dan time expressions dengan benar.',
      'Menggunakan reporting verbs yang bervariasi.',
      'Mengkonversi reported questions dan commands.',
    ],
    sections: [
      {
        id: 'sec-i4-1',
        title: '1. Tense Backshift & Time Expressions',
        badge: 'Core Rules',
        content: `| Direct Speech | Reported Speech |
|--------------|----------------|
| Simple Present | Simple Past |
| Present Continuous | Past Continuous |
| Present Perfect | Past Perfect |
| Simple Past | Past Perfect |
| Will | Would |
| Can | Could |
| Must | Had to |

**Time Expression Changes:**
| Direct | Reported |
|--------|---------|
| now | then |
| today | that day |
| yesterday | the day before |
| tomorrow | the following day |
| here | there |`,
        examples: [
          {
            sentence: '"I will submit my report here tomorrow." → She said she would submit her report there the following day.',
            translation: '"Saya akan mengumpulkan laporan di sini besok." → Dia berkata dia akan mengumpulkan laporan di sana keesokan harinya.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-i4-2',
        title: '2. Reporting Verbs & Question Forms',
        badge: 'Vocabulary Range',
        content: `| Pattern | Reporting Verbs |
|---------|----------------|
| V + that | claimed, argued, admitted, denied, explained |
| V + to-inf | agreed, promised, refused, decided, offered |
| V + gerund | admitted, denied, suggested, recommended |
| V + obj + to-inf | warned, told, asked, reminded, persuaded |

**Reported Questions:**
- Y/N: *"Are you ready?" → She asked **if I was** ready.* (normal word order!)
- WH: *"When did you arrive?" → He asked **when I had arrived**.*

**Reported Commands:**
- Positive: *"Study harder!" → She told me **to study** harder.*
- Negative: *"Don't give up!" → He told us **not to give up**.*`,
      },
    ],
    keyTakeaways: [
      'Backshift: Present→Past | Perfect→Past Perfect | Will→Would | Can→Could.',
      'Time: today→that day | tomorrow→the following day | here→there.',
      'Reported questions: normal word order (tidak dibalik), if/whether untuk Y/N.',
      'Commands: tell/ask + object + to-infinitive.',
    ],
    prevLessonId: 'inter-03',
    nextLessonId: 'inter-05',
  },
  {
    id: 'inter-05',
    trackId: 'intermediate-grammar',
    slug: 'gerunds-vs-infinitives',
    title: 'Gerunds & Infinitives: Complete Mastery',
    order: 5,
    summary: 'Verbs yang hanya diikuti Gerund, hanya Infinitive, atau keduanya dengan perubahan makna — termasuk Gerund sebagai subjek dan setelah preposisi.',
    readTimeMin: 9,
    difficulty: 'Intermediate',
    objectives: [
      'Mengenali verbs yang HANYA diikuti Gerund (-ing).',
      'Mengenali verbs yang HANYA diikuti Infinitive (to + V1).',
      'Memahami perbedaan makna ketika Gerund vs Infinitive mengubah arti.',
      'Menggunakan Gerund sebagai subjek dan setelah preposisi.',
    ],
    sections: [
      {
        id: 'sec-i5-1',
        title: '1. Verbs Only + Gerund & Only + Infinitive',
        badge: 'Core Categories',
        content: `**Gerund-only verbs** (MEGADISAFE mnemonic):
avoid, consider, deny, enjoy, finish, imagine, mind, miss, practice, suggest, admit, recommend, risk, postpone

**Infinitive-only verbs:**
agree, decide, fail, hope, manage, offer, plan, promise, refuse, seem, tend, want, expect, need, choose

**Gerund sebagai Subjek:** *Understanding complex data **requires** statistical literacy.*

**Setelah Preposisi — SELALU Gerund:**
- *interested **in pursuing** | without **understanding** | despite **facing** | in addition **to conducting***`,
      },
      {
        id: 'sec-i5-2',
        title: '2. Verbs with Meaning Changes',
        badge: 'Critical Differences',
        content: `| Verb | + Gerund | + Infinitive |
|------|----------|-------------|
| **remember** | *I remember locking the door.* (ingat melakukan di masa lalu) | *Remember to lock the door.* (ingat untuk melakukan nanti) |
| **forget** | *I'll never forget meeting her.* (tidak lupa pengalaman masa lalu) | *Don't forget to submit the form.* (ingat tugas masa depan) |
| **stop** | *He stopped smoking.* (berhenti dari kebiasaan) | *He stopped to smoke.* (berhenti untuk merokok — tujuan) |
| **regret** | *I regret not studying harder.* (penyesalan masa lalu) | *We regret to inform you...* (formal, present/future) |
| **try** | *Try drinking more water.* (coba sebagai eksperimen) | *Try to drink more water.* (berusaha keras) |`,
        callout: {
          type: 'warning',
          title: '"Stop to do" vs "Stop doing" — Jebakan Paling Sering!',
          text: '"He stopped smoking" = berhenti dari kebiasaan. "He stopped to smoke" = berhenti (melakukan hal lain) untuk merokok.',
        },
      },
    ],
    keyTakeaways: [
      'Gerund-only: avoid/enjoy/mind/finish/suggest/deny/admit/consider.',
      'Infinitive-only: want/plan/hope/decide/agree/refuse/manage/fail.',
      'Remember/forget/stop/regret/try + Gerund vs Infinitive = makna berbeda.',
      'Setelah preposisi: SELALU Gerund.',
    ],
    prevLessonId: 'inter-04',
    nextLessonId: 'inter-06',
  },
  {
    id: 'inter-06',
    trackId: 'intermediate-grammar',
    slug: 'participle-phrases',
    title: 'Participle Phrases & Dangling Modifiers',
    order: 6,
    summary: 'Present Participle, Past Participle, dan Perfect Participle Phrases untuk kalimat akademis yang padat — serta cara mengenali dan memperbaiki Dangling Modifiers.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Menggunakan Present Participle Phrases untuk aksi simultan.',
      'Menggunakan Past Participle Phrases untuk kondisi pasif.',
      'Menggunakan Perfect Participle Phrases untuk aksi yang mendahului.',
      'Mengenali dan memperbaiki Dangling Modifiers.',
    ],
    sections: [
      {
        id: 'sec-i6-1',
        title: '1. Present, Past & Perfect Participle Phrases',
        badge: 'Three Types',
        content: `**Present Participle (V-ing)** — aksi BERSAMAAN:
- *Walking into the room, she noticed the empty chair.*

**Past Participle (V3)** — kondisi PASIF:
- *Published in Nature, the study gained wide attention.*

**Perfect Participle (Having + V3)** — aksi SEBELUMNYA selesai:
- *Having reviewed all literature, the researchers felt confident.*
- *Having been thoroughly tested, the vaccine was approved.*

| Full Relative Clause | Reduced |
|---------------------|---------|
| students who are studying | students studying |
| the report which was submitted | the report submitted |
| After they had completed... | Having completed... |`,
        examples: [
          {
            sentence: 'Having established a strong theoretical foundation, the researchers were well-positioned to challenge conventional assumptions.',
            translation: 'Setelah membangun fondasi teoritis yang kuat, para peneliti berada dalam posisi yang baik untuk menantang asumsi konvensional.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-i6-2',
        title: '2. Dangling Modifiers — Deteksi & Perbaikan',
        badge: 'Common Error',
        content: `**Dangling Modifier** = participle phrase yang subjeknya bukan subjek main clause.

❌ *Walking down the street, the trees were beautiful.* (Pohon tidak bisa berjalan!)
✅ *Walking down the street, **I** noticed the trees were beautiful.*

❌ *Having studied for three days, the exam seemed easier.* (Ujian tidak belajar!)
✅ *Having studied for three days, **she** found the exam easier.*

**Cara Memperbaiki:**
1. Tambahkan subjek yang tepat pada main clause.
2. Atau ubah participle → subordinate clause: "After **she** had studied for three days..."`,
        callout: {
          type: 'warning',
          title: 'Test Sederhana: Siapa yang melakukan aksi dalam participle phrase?',
          text: 'Jawaban harus sama dengan subjek main clause. Jika berbeda → Dangling Modifier!',
        },
      },
    ],
    keyTakeaways: [
      'Present (-ing): aksi bersamaan.',
      'Past (V3): kondisi pasif atau hasil sebelumnya.',
      'Having + V3: aksi selesai sebelum main clause.',
      'Dangling Modifier: subjek participle ≠ subjek main clause — selalu perbaiki!',
    ],
    prevLessonId: 'inter-05',
    nextLessonId: 'vocab-01',
  },
];

export const intermediateGrammarExercises: Record<string, Exercise[]> = {
  'inter-01': [
    {
      id: 'ex-int01-1',
      lessonId: 'inter-01',
      type: 'multiple-choice',
      title: 'Active to Passive — Present Perfect',
      instruction: 'Pilih bentuk passive yang tepat.',
      question: 'Active: "Scientists have discovered a new species in the Amazon." → Passive: A new species ________ in the Amazon.',
      options: [
        { id: 'a', text: 'has been discovered by scientists', explanation: 'Benar! Present Perfect Passive: has been + V3.' },
        { id: 'b', text: 'was discovered by scientists', explanation: 'Simple Past Passive — bukan Present Perfect.' },
        { id: 'c', text: 'had been discovered', explanation: 'Past Perfect Passive — tidak sesuai konteks.' },
        { id: 'd', text: 'have been discovered', explanation: '"A new species" = singular → has been (bukan have been).' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Present Perfect Passive = has/have + been + V3. Singular subject → has been.',
      points: 10,
    },
    {
      id: 'ex-int01-2',
      lessonId: 'inter-01',
      type: 'fill-blank',
      title: 'Modal + Passive',
      instruction: 'Lengkapi dengan bentuk Modal Passive yang tepat.',
      sentence: 'All findings [___] verified by at least two independent reviewers before publication.',
      targets: [{ index: 0, correctAnswers: ['must be', 'should be', 'will be'], hint: 'Modal + be + V3' }],
      wordBank: ['must be', 'must been', 'should been', 'will verify'],
      explanation: 'Modal + Passive: must/should/will + be + V3. Tidak ada "been" langsung setelah modal.',
      points: 10,
    },
    {
      id: 'ex-int01-3',
      lessonId: 'inter-01',
      type: 'matching',
      title: 'Pasangkan Active dengan Passive-nya',
      instruction: 'Hubungkan kalimat active dengan bentuk passive yang tepat.',
      pairs: [
        { id: 'pv1', left: 'They are testing the vaccine.', right: 'The vaccine is being tested.' },
        { id: 'pv2', left: 'The team had completed the survey.', right: 'The survey had been completed.' },
        { id: 'pv3', left: 'Scientists will publish the results.', right: 'The results will be published.' },
        { id: 'pv4', left: 'Workers repaired the bridge.', right: 'The bridge was repaired.' },
      ],
      explanation: 'Passive formula = be (conjugated for tense) + V3.',
      points: 15,
    },
    {
      id: 'ex-int01-4',
      lessonId: 'inter-01',
      type: 'multiple-choice',
      title: 'Memilih Aktif vs Pasif',
      instruction: 'Pilih kalimat yang paling tepat untuk konteks akademis.',
      question: 'Dalam laporan penelitian tentang bagaimana sampel dikumpulkan:',
      options: [
        { id: 'a', text: 'We collected the samples using a random sampling method.', explanation: 'Subjektif — "We" mengurangi objektivitas akademis.' },
        { id: 'b', text: 'The samples were collected using a random sampling method.', explanation: 'Benar! Passive lebih objektif untuk laporan penelitian. Pelaku tidak penting.' },
        { id: 'c', text: 'The samples collected using a random sampling method.', explanation: 'Tidak gramatikal — tidak ada verb utama.' },
        { id: 'd', text: 'Collecting samples by a random sampling method.', explanation: 'Tidak gramatikal — tidak ada subject + main verb.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Dalam laporan akademis, passive lebih umum untuk menggambarkan metode karena lebih objektif.',
      points: 10,
    },
  ],
  'inter-02': [
    {
      id: 'ex-int02-1',
      lessonId: 'inter-02',
      type: 'multiple-choice',
      title: 'Identifikasi Tipe Conditional',
      instruction: 'Identifikasi tipe conditional kalimat berikut.',
      question: '"Had the early intervention been implemented, the crisis would have been averted."',
      options: [
        { id: 'a', text: 'Type 2 Conditional', explanation: 'Type 2 menggunakan "If + Past Simple, would + V1".' },
        { id: 'b', text: 'Type 3 Conditional dengan Formal Inversion', explanation: 'Benar! "Had + subject + V3..." = Inversion dari Type 3.' },
        { id: 'c', text: 'Type 1 Conditional', explanation: 'Type 1 untuk masa depan yang mungkin terjadi.' },
        { id: 'd', text: 'Mixed Conditional', explanation: 'Mixed menggabungkan dua tipe berbeda.' },
      ],
      correctAnswerId: 'b',
      grammarTip: '"Had + subject + V3..." = formal inversion dari "If + subject + had + V3..." (Type 3).',
      points: 10,
    },
    {
      id: 'ex-int02-2',
      lessonId: 'inter-02',
      type: 'fill-blank',
      title: 'Type 3 Conditional',
      instruction: 'Lengkapi Type 3 conditional dengan bentuk yang tepat.',
      sentence: 'If the funding [___] approved earlier, the project [___] completed on schedule.',
      targets: [
        { index: 0, correctAnswers: ['had been'], hint: 'Type 3 if-clause: If + Past Perfect' },
        { index: 1, correctAnswers: ['would have been', 'could have been'], hint: 'Type 3 main: would/could + have + V3' },
      ],
      wordBank: ['had been', 'were', 'would have been', 'would be'],
      explanation: 'Type 3: If + had + V3 → would/could + have + V3.',
      points: 15,
    },
    {
      id: 'ex-int02-3',
      lessonId: 'inter-02',
      type: 'multiple-choice',
      title: 'Mixed Conditional',
      instruction: 'Pilih bentuk Mixed Conditional yang tepat.',
      question: '"If she ________ her methodology, her study ________ accepted last year."',
      options: [
        { id: 'a', text: 'were more rigorous / would have been', explanation: 'Benar! Mixed B: Present condition (were = Type 2) → Past result (would have been = Type 3).' },
        { id: 'b', text: 'had been more rigorous / would have been', explanation: 'Ini Type 3 murni, bukan Mixed.' },
        { id: 'c', text: 'were more rigorous / would be', explanation: 'Ini Type 2 murni.' },
        { id: 'd', text: 'is rigorous / will have been', explanation: 'Tidak standar.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Mixed B: If + Past Simple (present nature) → would + have + V3 (past result).',
      points: 10,
    },
    {
      id: 'ex-int02-4',
      lessonId: 'inter-02',
      type: 'matching',
      title: 'Conditional Alternatives',
      instruction: 'Pasangkan kalimat dengan alternatif "if" yang paling tepat.',
      pairs: [
        { id: 'cond1', left: 'If you don\'t apply early, you won\'t get a spot.', right: 'Unless you apply early, you won\'t get a spot.' },
        { id: 'cond2', left: 'The project will succeed if the team stays focused.', right: 'As long as the team stays focused, the project will succeed.' },
        { id: 'cond3', left: 'Funding will be approved if proper protocols are followed.', right: 'Funding will be approved provided that proper protocols are followed.' },
        { id: 'cond4', left: 'Bring a backup copy if the system crashes.', right: 'Bring a backup copy in case the system crashes.' },
      ],
      explanation: 'Unless = if not | As long as = kondisi | Provided that = syarat formal | In case = pencegahan.',
      points: 15,
    },
  ],
  'inter-03': [
    {
      id: 'ex-int03-1',
      lessonId: 'inter-03',
      type: 'multiple-choice',
      title: 'Defining vs Non-Defining',
      instruction: 'Pilih kalimat yang menggunakan klausa relatif dengan BENAR.',
      question: 'Konteks: Ada banyak peneliti. Kita ingin menentukan peneliti MANA yang mendapat penghargaan.',
      options: [
        { id: 'a', text: 'The researcher, who discovered the cure, received the Nobel Prize.', explanation: 'Non-defining (koma) — tapi di sini kita perlu defining untuk mengidentifikasi peneliti mana!' },
        { id: 'b', text: 'The researcher who discovered the cure received the Nobel Prize.', explanation: 'Benar! Defining (tanpa koma) — mengidentifikasi peneliti mana.' },
        { id: 'c', text: 'The researcher, that discovered the cure, received the Nobel Prize.', explanation: '"That" tidak dapat digunakan dalam non-defining clause.' },
        { id: 'd', text: 'The researcher which discovered the cure received the Nobel Prize.', explanation: '"Which" untuk benda, bukan orang.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Jika klausa menentukan SIAPA/APA dari banyak kemungkinan → Defining (tanpa koma).',
      points: 10,
    },
    {
      id: 'ex-int03-2',
      lessonId: 'inter-03',
      type: 'fill-blank',
      title: 'Whose vs Who vs Whom',
      instruction: 'Pilih relative pronoun yang tepat.',
      sentence: 'The candidate [___] application we reviewed yesterday has been shortlisted.',
      targets: [{ index: 0, correctAnswers: ['whose'], hint: 'Kepemilikan: application = milik kandidat → whose' }],
      wordBank: ['who', 'whom', 'whose', 'which'],
      explanation: '"Whose" untuk kepemilikan: "the candidate\'s application" → "the candidate whose application".',
      points: 10,
    },
    {
      id: 'ex-int03-3',
      lessonId: 'inter-03',
      type: 'multiple-choice',
      title: 'Cleft Sentences untuk Penekanan Subjek',
      instruction: 'Pilih It-Cleft yang menekankan subjek kalimat.',
      question: 'Normal: "Professor Kim developed the new algorithm." → It-Cleft:',
      options: [
        { id: 'a', text: 'It was the new algorithm that Professor Kim developed.', explanation: 'Ini menekankan objek (the new algorithm), bukan subjek.' },
        { id: 'b', text: 'It was Professor Kim who developed the new algorithm.', explanation: 'Benar! Menekankan subjek "Professor Kim" dengan It-cleft + who.' },
        { id: 'c', text: 'What Professor Kim developed was the new algorithm.', explanation: 'Ini What-cleft (menekankan objek), bukan It-cleft menekankan subjek.' },
        { id: 'd', text: 'It was Professor Kim that the algorithm was developed by.', explanation: 'Pasif yang tidak alami.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'It-cleft: "It was/is + [yang ditekankan] + who (orang)/that (benda) + rest".',
      points: 10,
    },
    {
      id: 'ex-int03-4',
      lessonId: 'inter-03',
      type: 'matching',
      title: 'Quantifier + Relative Clause',
      instruction: 'Pasangkan dengan quantifier + relative clause yang tepat.',
      pairs: [
        { id: 'qr1', left: 'The team interviewed 50 experts,', right: 'all of whom contributed valuable insights.' },
        { id: 'qr2', left: 'She reviewed 20 papers,', right: 'most of which focused on climate change.' },
        { id: 'qr3', left: 'Three hypotheses were presented,', right: 'none of which could be immediately verified.' },
        { id: 'qr4', left: 'The data came from 10 sources,', right: 'several of which were international databases.' },
      ],
      explanation: '"of whom" untuk orang | "of which" untuk benda.',
      points: 15,
    },
  ],
  'inter-04': [
    {
      id: 'ex-int04-1',
      lessonId: 'inter-04',
      type: 'multiple-choice',
      title: 'Tense Backshift',
      instruction: 'Konversikan ke Reported Speech yang tepat.',
      question: '"I have been working on this project for two years," she said. → Reported:',
      options: [
        { id: 'a', text: 'She said she had been working on the project for two years.', explanation: 'Benar! Present Perfect Continuous → Past Perfect Continuous.' },
        { id: 'b', text: 'She said she has been working on the project for two years.', explanation: 'Backshift diperlukan.' },
        { id: 'c', text: 'She said she was working on the project for two years.', explanation: 'Past Continuous tidak menunjukkan durasi Perfect Continuous.' },
        { id: 'd', text: 'She said she had worked on the project for two years.', explanation: 'Simple past perfect kehilangan aspek kontinuitas.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Present Perfect Continuous → Past Perfect Continuous dalam reported speech.',
      points: 10,
    },
    {
      id: 'ex-int04-2',
      lessonId: 'inter-04',
      type: 'fill-blank',
      title: 'Reported Question (WH)',
      instruction: 'Ubah direct question menjadi reported question.',
      sentence: '"When did the committee make the decision?" → She asked [___] the committee had made the decision.',
      targets: [{ index: 0, correctAnswers: ['when'], hint: 'WH-word tetap, word order normal' }],
      wordBank: ['when', 'if', 'that', 'whether'],
      explanation: 'WH-questions dalam reported speech: WH-word tetap → word order kembali normal.',
      points: 10,
    },
    {
      id: 'ex-int04-3',
      lessonId: 'inter-04',
      type: 'matching',
      title: 'Reporting Verbs',
      instruction: 'Pasangkan direct speech dengan reporting verb yang tepat.',
      pairs: [
        { id: 'rv1', left: '"Don\'t touch the samples!"', right: 'warned them not to touch the samples.' },
        { id: 'rv2', left: '"Yes, I took the document."', right: 'admitted having taken the document.' },
        { id: 'rv3', left: '"Let\'s use a different approach."', right: 'suggested using a different approach.' },
        { id: 'rv4', left: '"I will submit it by Friday."', right: 'promised to submit it by Friday.' },
      ],
      explanation: 'warn + not to | admit + gerund | suggest + gerund | promise + to-infinitive.',
      points: 15,
    },
    {
      id: 'ex-int04-4',
      lessonId: 'inter-04',
      type: 'multiple-choice',
      title: 'Reported Yes/No Question',
      instruction: 'Pilih Reported Speech yang tepat.',
      question: '"Are you satisfied with the results?" the supervisor asked. → Reported:',
      options: [
        { id: 'a', text: 'The supervisor asked if I was satisfied with the results.', explanation: 'Benar! Y/N question → if/whether + normal word order + backshift.' },
        { id: 'b', text: 'The supervisor asked if was I satisfied with the results.', explanation: 'Word order salah — tidak dibalik dalam reported speech.' },
        { id: 'c', text: 'The supervisor asked that I was satisfied with the results.', explanation: '"That" untuk statements, bukan Y/N questions.' },
        { id: 'd', text: 'The supervisor asked whether am I satisfied.', explanation: 'Word order salah: "whether I am" bukan "whether am I".' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Reported Y/N question: ask + if/whether + subject + verb (normal order, backshifted).',
      points: 10,
    },
  ],
  'inter-05': [
    {
      id: 'ex-int05-1',
      lessonId: 'inter-05',
      type: 'multiple-choice',
      title: 'Gerund atau Infinitive?',
      instruction: 'Pilih bentuk yang tepat.',
      question: 'The professor suggested ________ the research design before collecting data.',
      options: [
        { id: 'a', text: 'to revise', explanation: '"Suggest" selalu diikuti Gerund.' },
        { id: 'b', text: 'revising', explanation: 'Benar! "Suggest" + Gerund: suggest revising.' },
        { id: 'c', text: 'revision', explanation: 'Noun tidak tepat di sini.' },
        { id: 'd', text: 'to be revised', explanation: 'Passive infinitive tidak tepat setelah "suggest".' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Suggest/enjoy/avoid/finish/mind/deny → SELALU diikuti Gerund (-ing).',
      points: 10,
    },
    {
      id: 'ex-int05-2',
      lessonId: 'inter-05',
      type: 'multiple-choice',
      title: 'Remember + Gerund vs Infinitive',
      instruction: 'Tentukan makna yang tepat.',
      question: '"Do you remember ________ the key inside the lab?" — Konteks: ingat PERNAH melakukan ini di masa lalu.',
      options: [
        { id: 'a', text: 'to leave', explanation: '"Remember to leave" = ingat untuk melakukan di masa depan.' },
        { id: 'b', text: 'leaving', explanation: 'Benar! "Remember leaving" = ingat bahwa pernah melakukan sesuatu di masa lalu.' },
        { id: 'c', text: 'to be left', explanation: 'Passive infinitive tidak tepat dalam konteks ini.' },
        { id: 'd', text: 'left', explanation: 'Bare infinitive tidak digunakan setelah "remember" di sini.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Remember + Gerund = mengingat aksi SUDAH TERJADI. Remember + Infinitive = ingat untuk melakukan NANTI.',
      points: 10,
    },
    {
      id: 'ex-int05-3',
      lessonId: 'inter-05',
      type: 'matching',
      title: 'Stop & Try — Gerund vs Infinitive',
      instruction: 'Pasangkan kalimat dengan maknanya.',
      pairs: [
        { id: 'gi1', left: 'She stopped smoking.', right: 'Dia berhenti dari kebiasaan merokok.' },
        { id: 'gi2', left: 'She stopped to smoke.', right: 'Dia berhenti (melakukan hal lain) untuk merokok.' },
        { id: 'gi3', left: 'He tried using a new method.', right: 'Dia mencoba metode baru sebagai eksperimen.' },
        { id: 'gi4', left: 'He tried to finish on time.', right: 'Dia berusaha keras (mungkin sulit) menyelesaikan tepat waktu.' },
      ],
      explanation: 'Stop/try + gerund vs infinitive menghasilkan makna yang SANGAT berbeda.',
      points: 15,
    },
    {
      id: 'ex-int05-4',
      lessonId: 'inter-05',
      type: 'fill-blank',
      title: 'Gerund Setelah Preposisi',
      instruction: 'Lengkapi kalimat dengan bentuk yang tepat.',
      sentence: 'The team succeeded in [___] a new methodology despite [___] numerous obstacles.',
      targets: [
        { index: 0, correctAnswers: ['developing', 'creating', 'establishing'], hint: 'Setelah "in" → Gerund' },
        { index: 1, correctAnswers: ['facing', 'encountering', 'overcoming'], hint: 'Setelah "despite" → Gerund' },
      ],
      wordBank: ['develop', 'developing', 'to develop', 'face', 'facing', 'to face'],
      explanation: 'Setelah preposisi → SELALU Gerund.',
      points: 15,
    },
    {
      id: 'ex-int05-5',
      lessonId: 'inter-05',
      type: 'multiple-choice',
      title: 'Gerund sebagai Subjek',
      instruction: 'Pilih kalimat yang benar.',
      question: 'Mana kalimat dengan Gerund sebagai subjek yang benar?',
      options: [
        { id: 'a', text: 'To understand complex data is require statistical literacy.', explanation: 'Tidak gramatikal.' },
        { id: 'b', text: 'Understanding complex data requires statistical literacy.', explanation: 'Benar! Gerund sebagai subjek + singular verb.' },
        { id: 'c', text: 'Understand complex data are requires statistical literacy.', explanation: '"are requires" salah.' },
        { id: 'd', text: 'To understanding complex data requires statistical literacy.', explanation: '"To + V-ing" bukan pola yang valid.' },
      ],
      correctAnswerId: 'b',
      grammarTip: 'Gerund sebagai subjek = singular → selalu singular verb: "Swimming is fun".',
      points: 10,
    },
  ],
  'inter-06': [
    {
      id: 'ex-int06-1',
      lessonId: 'inter-06',
      type: 'multiple-choice',
      title: 'Identifikasi Dangling Modifier',
      instruction: 'Pilih kalimat yang mengandung Dangling Modifier.',
      question: 'Mana kalimat yang SALAH karena Dangling Modifier?',
      options: [
        { id: 'a', text: 'Having reviewed the literature, the study appears to fill an important gap.', explanation: 'Dangling! "The study" tidak bisa "reviewing literature" — seharusnya para peneliti.' },
        { id: 'b', text: 'Having reviewed the literature, the researchers identified a significant gap.', explanation: 'Benar! "The researchers" melakukan reviewing — subjek sama.' },
        { id: 'c', text: 'Collecting data over five years, the team established a reliable dataset.', explanation: 'Benar! "The team" mengumpulkan data.' },
        { id: 'd', text: 'Developed collaboratively, the framework integrates multiple perspectives.', explanation: 'Benar! Past Participle: framework dikembangkan secara kolaboratif.' },
      ],
      correctAnswerId: 'a',
      grammarTip: 'Test: "Siapa yang melakukan aksi dalam participle phrase?" Harus sama dengan subjek main clause.',
      points: 10,
    },
    {
      id: 'ex-int06-2',
      lessonId: 'inter-06',
      type: 'matching',
      title: 'Jenis Participle Phrase',
      instruction: 'Pasangkan kalimat dengan jenis participle phrase yang digunakan.',
      pairs: [
        { id: 'pp1', left: 'Analyzing the data, the team found unexpected results.', right: 'Present Participle (aksi bersamaan)' },
        { id: 'pp2', left: 'Published in 2020, the study is highly cited.', right: 'Past Participle (kondisi pasif)' },
        { id: 'pp3', left: 'Having completed the fieldwork, they began data analysis.', right: 'Perfect Participle (aksi sebelumnya selesai)' },
        { id: 'pp4', left: 'Having been reviewed by experts, the paper was accepted.', right: 'Passive Perfect Participle' },
      ],
      explanation: 'Present (-ing) = bersamaan | Past (V3) = pasif | Having + V3 = sebelumnya | Having been + V3 = passive + sebelumnya.',
      points: 15,
    },
    {
      id: 'ex-int06-3',
      lessonId: 'inter-06',
      type: 'fill-blank',
      title: 'Reduce Relative Clause to Participle',
      instruction: 'Ubah relative clause menjadi participle phrase.',
      sentence: 'The data [___] from multiple sources suggests a consistent pattern.',
      targets: [{ index: 0, correctAnswers: ['collected', 'gathered', 'obtained', 'retrieved'], hint: 'Passive → Past Participle (V3)' }],
      wordBank: ['collected', 'collecting', 'that was collected', 'which collected'],
      explanation: '"Data which was collected" → Reduced: "Data collected". Passive relative → Past Participle.',
      points: 10,
    },
    {
      id: 'ex-int06-4',
      lessonId: 'inter-06',
      type: 'multiple-choice',
      title: 'Perfect Participle untuk Urutan Waktu',
      instruction: 'Pilih bentuk participle yang menunjukkan aksi selesai SEBELUM aksi lainnya.',
      question: '________ all ethical considerations, the team proceeded with the clinical trial.',
      options: [
        { id: 'a', text: 'Addressing', explanation: 'Present Participle = aksi bersamaan — tidak menunjukkan diselesaikan lebih dulu.' },
        { id: 'b', text: 'Having addressed', explanation: 'Benar! "Having + V3" = aksi selesai SEBELUM main clause.' },
        { id: 'c', text: 'Addressed', explanation: 'Past Participle ambigu di sini. Having addressed lebih jelas.' },
        { id: 'd', text: 'To address', explanation: 'Infinitive = tujuan, bukan urutan waktu.' },
      ],
      correctAnswerId: 'b',
      grammarTip: '"Having + V3" = Perfect Participle untuk prior action. Setara dengan "After they had addressed..."',
      points: 10,
    },
  ],
};

