import { Lesson } from '@/types/course';
import { Exercise } from '@/types/exercise';

export const conversationLessons: Lesson[] = [
  {
    id: 'conv-01',
    trackId: 'conversation-english',
    slug: 'everyday-introductions-and-small-talk',
    title: 'Everyday Introductions & Natural Small Talk',
    order: 1,
    summary: 'Pelajari seni memulai obrolan ringan (small talk), menyapa penutur asli secara natural tanpa kaku, dan menjaga ritme percakapan menggunakan teknik Ping-Pong.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Memahami variasi salam kasual vs formal melebihi "How are you?".',
      'Menerapkan aturan Ping-Pong (Answer + Add-on + Question) agar percakapan terus mengalir.',
      'Menggunakan conversational fillers alami: "Actually", "By the way", "To be honest".',
      'Menghindari topik tabu dalam small talk penutur asli bahasa Inggris.',
    ],
    sections: [
      {
        id: 'sec-c01-1',
        title: '1. Menyapa di Luar "How are you?" & "I\'m fine, thank you"',
        badge: 'Natural Greetings',
        content: `Sebagian besar pembelajar bahasa Inggris diajarkan merespons *"How are you?"* dengan *"I'm fine, thank you, and you?"*. Di kehidupan nyata, penutur asli memiliki spektrum salam yang jauh lebih beragam dan cair.

### Variasi Pertanyaan Sapaan:
1. **"How's it going?"** /ˈhaʊz ɪt ˈɡoʊɪŋ/ — Sangat umum di AS & UK untuk teman, kolega, atau kenalan.
   - Respon natural: *"Good, thanks! How about you?"* atau *"Can't complain! Yourself?"*
2. **"What have you been up to?"** /wʌt həv juː bɪn ʌp tuː/ — Digunakan saat bertemu orang yang sudah lama tidak dijumpai.
   - Respon natural: *"Not much, just work and family. What about you?"*
3. **"How have you been?"** — Bertanya tentang kabar selama rentang waktu tertentu.
   - Respon natural: *"I've been keeping busy! How are things with you?"*
4. **"All good?" / "You alright?"** (UK/Commonwealth) — Sapaan kilat.
   - Respon natural: *"Yeah, good thanks, you?"*`,
        examples: [
          {
            sentence: 'A: "Hey Alex! How\'s your week going?" — B: "Pretty productive so far, thanks! How are things on your end?"',
            translation: 'A: "Hei Alex! Bagaimana minggumu sejauh ini?" — B: "Cukup produktif, terima kasih! Bagaimana denganmu?"',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: 'Pragmatics Alert: "You alright?" di Inggris',
          text: 'Di Inggris, orang sering menyapa dengan "Alright?" atau "You alright?". Ini BUKAN menanyakan apakah kamu sakit atau sedang sedih, melainkan sinonim kasual dari "Hello! / How are you?". Cukup balas dengan "Yeah, good thanks, you?".',
        },
      },
      {
        id: 'sec-c01-2',
        title: '2. Dialog Situasional: Bertemu Kenalan Baru di Acara Santai',
        badge: 'Live Dialogue',
        content: `Berikut adalah contoh percakapan nyata saat dua orang bertemu di acara kumpul komunitas (networking/social mixer).

**Setting:** Coffee break di sebuah lokakarya internasional di Jakarta.
**Karakter:** Maya (Indonesia) & Liam (Australia).

---
**Liam:** *"Excuse me, is anyone sitting here?"*
**Maya:** *"No, go ahead! Please take a seat."*
**Liam:** *"Thanks, appreciate it. I'm Liam, by the way. I work in digital design."*
**Maya:** *"Nice to meet you, Liam! I'm Maya. I'm a UX writer. Are you based here in Jakarta or just visiting?"*
**Liam:** *"I actually just moved here two months ago from Melbourne. Still adjusting to the humidity, honestly!"*
**Maya:** *(laughs)* *"Oh, I can imagine! Jakarta heat is definitely something else. Have you had the chance to explore the city yet?"*
**Liam:** *"A little bit! I went to Kota Tua last weekend. Any food recommendations around here?"*
**Maya:** *"Definitely! You have to try the soto ayam right across the street — it's hands down the best around."*
---`,
        examples: [
          {
            sentence: '"Hands down the best" = Tanpa diragukan lagi yang terbaik.',
            translation: 'Frasa idiomatis kasual yang sering dipakai dalam percakapan santai.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'The Ping-Pong Rule: Answer + Add-on (Details) + Return Question',
          explanation: 'Jangan pernah menjawab hanya dengan 1 kata ("Yes" atau "Good"). Berikan sedikit informasi tambahan lalu lemparkan pertanyaan balik agar lawan bicara merasa didengarkan.',
          pitfall: 'Hanya menjawab "I am fine" menghentikan percakapan seketika (conversational dead-end).',
        },
      },
      {
        id: 'sec-c01-3',
        title: '3. Kosakata & Conversational Fillers (Pelumas Percakapan)',
        badge: 'Vocabulary Panel',
        content: `Penutur asli menggunakan kata-kata penghubung (*discourse markers*) agar transisi terdengar santun dan tidak seperti interogasi:

| Frasa | Makna & Fungsi | Contoh Kalimat |
|---|---|---|
| **By the way...** | Mengalihkan topik secara natural / memperkenalkan diri | *"By the way, did you catch the keynote speech?"* |
| **To be honest...** | Menyatakan opini jujur tanpa menyinggung | *"To be honest, I found the second session a bit dry."* |
| **Actually...** | Mengoreksi asumsi secara halus / fakta mengejutkan | *"Actually, I used to live in Melbourne for two years!"* |
| **Fair enough.** | Menunjukkan pemahaman / sepakat pada alasan orang lain | *"A: I skipped the party because I was exhausted. B: Fair enough."* |
| **Small world!** | Ungkapan ketika menemukan kesamaan tak terduga | *"You went to Gadjah Mada University too? Small world!"* |
| **Speaking of which...** | Menghubungkan topik baru dengan apa yang baru saja dibahas | *"Speaking of coffee, is there a good café nearby?"* |`,
        examples: [
          {
            sentence: 'Actually, that reminds me of an article I read yesterday.',
            translation: 'Sebenarnya, hal itu mengingatkan saya pada artikel yang saya baca kemarin.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-c01-4',
        title: '4. Etika Small Talk: Topik Aman vs Topik Tabu',
        badge: 'Cultural Etiquette',
        content: `Budaya berbahasa Inggris membedakan topik yang sopan untuk basa-basi dengan orang yang baru dikenal:

### ✅ Topik Aman & Disukai (Safe Topics):
- **Cuaca & Lingkungan sekitar**: *"Unbelievable weather today, isn't it?"*
- **Perjalanan & Transportasi**: *"How was the traffic getting here?"*
- **Makanan, Hobi & Hiburan**: *"Have you watched that new documentary on Netflix?"*
- **Rencana Akhir Pekan**: *"Got any fun plans for the weekend?"*

### ❌ Topik Tabu untuk Orang Asing (Avoid):
- **Gaji & Finansial**: *"How much do you earn?"* (Sangat tidak sopan)
- **Status Pernikahan / Anak**: *"Why aren't you married yet?"* (Pelanggaran privasi)
- **Politik Partisan & Agama**: Terlalu sensitif untuk obrolan pertama.
- **Komentar Fisik**: *"You look like you've gained weight"* (Tabu mutlak dalam budaya Barat).`,
        callout: {
          type: 'warning',
          title: 'Perbedaan Budaya Indonesia vs Barat',
          text: 'Di Indonesia, menanyakan "Sudah menikah?" atau "Kerja di mana, gajinya berapa?" sering dianggap ramah tamah. Bagi penutur bahasa Inggris Barat, hal ini tergolong sangat invasif dan membuat canggung.',
        },
      },
    ],
    keyTakeaways: [
      'Gunakan variasi sapaan "How\'s it going?" atau "What have you been up to?" untuk terdengar natural.',
      'Terapkan rumus Ping-Pong: Jawab + Tambahkan detail + Lempar pertanyaan balik.',
      'Gunakan conversational fillers seperti "By the way", "Actually", dan "Fair enough".',
      'Pilih topik aman: cuaca, makanan, hobi, dan acara terkini.',
    ],
    nextLessonId: 'conv-02',
  },

  {
    id: 'conv-02',
    trackId: 'conversation-english',
    slug: 'asking-for-help-and-clarification',
    title: 'Asking for Help, Directions & Clarification',
    order: 2,
    summary: 'Kuasai cara meminta bantuan secara sopan, menanyakan arah di kota asing, dan meminta lawan bicara mengulang tanpa merasa canggung atau takut salah.',
    readTimeMin: 7,
    difficulty: 'Beginner',
    objectives: [
      'Membedakan tingkatan kesopanan: "Can you...", "Could you...", "Would you mind...".',
      'Menguasai frasa navigasi arah (turn left, take the second exit, across from).',
      'Menanyakan klarifikasi saat tidak mendengar atau tidak paham maksud penutur asli.',
      'Menghindari jawaban kaku "Repeat please" dengan alternatif profesional.',
    ],
    sections: [
      {
        id: 'sec-c02-1',
        title: '1. Tingkatan Kesopanan dalam Meminta Bantuan (Politeness Gradient)',
        badge: 'Polite Requests',
        content: `Dalam bahasa Inggris, meminta bantuan dengan *"Give me directions"* atau *"Help me"* terdengar seperti perintah (imperative) yang kasar. Gunakan pola modal verb bersyarat:

### Spektrum Kesopanan:
1. **Langsung / Kasual (Teman dekat):**
   - *"Can you give me a hand with this?"*
2. **Sopan & Standar (Kolega / Tempat umum):**
   - *"Could you please point me in the right direction?"*
   - *"Could you do me a quick favor?"*
3. **Sangat Sopan / Respek Tinggi (Orang asing / Atasan):**
   - *"Would you mind helping me for a second?"* *(Perhatikan: kata kerja setelah "mind" selalu berbentuk Gerund -ing!)*
   - *"I was wondering if you might be able to help me with this form."*`,
        examples: [
          {
            sentence: 'Would you mind holding the door for a moment?',
            translation: 'Apakah Anda keberatan menahan pintunya sebentar?',
            explanation: 'Setelah "Would you mind", kata kerja selalu memakai bentuk -ing (holding, bukan hold).',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Would you mind + Verb-ing...?  |  Could you possibly + Verb 1...?',
          explanation: 'Kunci menjawab "Would you mind...": jika kamu BERSEDIA membantu, jawab "Not at all!" atau "Sure, no problem!" (karena arti harfiahnya "Apakah kamu keberatan? — Tidak keberatan sama sekali").',
          pitfall: 'Jangan menjawab "Yes!" jika kamu mau membantu, karena "Yes, I mind" berarti "Ya, saya keberatan!".',
        },
      },
      {
        id: 'sec-c02-2',
        title: '2. Dialog Situasional: Menanyakan Arah di Stasiun / Bandara',
        badge: 'Live Dialogue',
        content: `**Setting:** Heathrow Airport Terminal 5, London.
**Karakter:** Dika (Turis/Pelajar) & Information Desk Officer (Petugas).

---
**Dika:** *"Excuse me, sorry to bother you, but I'm trying to find the Elizabeth Line train to central London. Could you point me in the right direction?"*
**Officer:** *"Sure thing, mate! You'll want to head straight down this corridor, pass the duty-free shops, and take the lift down to Level -1. Once you exit the lift, follow the purple signs."*
**Dika:** *"Got it. So straight ahead, past the shops, and down to Level -1?"*
**Officer:** *"Spot on. The ticket barriers will be right in front of you."*
**Dika:** *"Brilliant, thank you so much for your help!"*
**Officer:** *"No worries at all! Have a safe journey."*
---`,
        examples: [
          {
            sentence: '"Spot on" (British English) = Tepat sekali / 100% akurat.',
            translation: 'Frasa yang sangat sering dipakai di UK dan Australia sebagai afirmasi.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-c02-3',
        title: '3. Meminta Klarifikasi (Saat Belum Paham atau Kurang Jelas)',
        badge: 'Clarification Skills',
        content: `Banyak pembelajar merasa malu dan hanya mengangguk pura-pura paham. Penutur asli justru sangat mengapresiasi jika kita meminta klarifikasi dengan kalimat yang tepat:

### Hindari:
- ❌ *"Repeat please"* (Terdengar seperti perintah kaku pada robot).
- ❌ *"What?!"* (Terdengar agresif atau tersinggung).

### Gunakan Alternatif Alami:
| Situasi | Frasa Alami | Terjemahan |
|---|---|---|
| **Suara kurang terdengar** | *"Sorry, I didn't quite catch that. Could you say it once more?"* | Maaf, saya kurang dengar tadi. Bisa tolong ulangi? |
| **Bicara terlalu cepat** | *"Would you mind slowing down just a little bit?"* | Apakah Anda keberatan berbicara sedikit lebih pelan? |
| **Kata/istilah tidak dikenal** | *"What do you mean by [word] in this context?"* | Apa maksud Anda dengan [kata tersebut] dalam konteks ini? |
| **Konfirmasi pemahaman** | *"So, if I understand correctly, we need to..."* | Jadi, jika pemahaman saya benar, kita perlu... |
| **Mengeja nama/alamat** | *"Could you spell that out for me, please?"* | Bisakah tolong diejakan untuk saya? |`,
        callout: {
          type: 'tip',
          title: 'Teknik "Paraphrase Confirmation"',
          text: 'Ulangi apa yang kamu tangkap dengan kata-katamu sendiri: "Just to make sure we\'re on the same page, the meeting starts at 2 PM, right?". Ini menghilangkan keraguan 100%.',
        },
      },
      {
        id: 'sec-c02-4',
        title: '4. Merespons Ucapan Terima Kasih & Permintaan Maaf',
        badge: 'Social Polish',
        content: `Kembangkan respon selain *"You're welcome"*:

- **Kasual & Ramah:**
  - *"No worries!"* (Sangat populer di Australia & UK)
  - *"Don't mention it!"*
  - *"Anytime!"* (Senang membantu kapan saja)
  - *"Glad I could help!"*
- **Profesional / Bisnis:**
  - *"My pleasure."*
  - *"Happy to help."*`,
      },
    ],
    keyTakeaways: [
      'Gunakan modal bertingkat: "Could you possibly..." atau "Would you mind -ing...".',
      'Ingat logika "Would you mind": jawab "Not at all / Sure" jika bersedia membantu.',
      'Ganti "Repeat please" dengan "Sorry, I didn\'t quite catch that. Could you say that again?".',
      'Konfirmasi ulang dengan "So, if I understand correctly..." untuk mencegah miskomunikasi.',
    ],
    prevLessonId: 'conv-01',
    nextLessonId: 'conv-03',
  },

  {
    id: 'conv-03',
    trackId: 'conversation-english',
    slug: 'workplace-communication',
    title: 'Professional Workplace & Business English',
    order: 3,
    summary: 'Pelajari bahasa pertemuan bisnis, cara menyanggah pendapat tanpa memicu konflik, menyampaikan update proyek, dan menguasai idiom korporat modern.',
    readTimeMin: 8,
    difficulty: 'Intermediate',
    objectives: [
      'Menyampaikan pendapat dan sanggahan secara konstruktif menggunakan teknik softening.',
      'Memahami idiom dan istilah korporat populer: "touch base", "circle back", "bandwidth".',
      'Memimpin dan berpartisipasi aktif dalam sesi update proyek (stand-up / sync meeting).',
      'Mengubah kalimat instruksi langsung menjadi permintaan kolaboratif.',
    ],
    sections: [
      {
        id: 'sec-c03-1',
        title: '1. Seni Menyanggah dengan Santun (Constructive Disagreement)',
        badge: 'Diplomatic English',
        content: `Di tempat kerja global, mengatakan *"You are wrong"* atau *"I disagree with that"* secara frontal dipandang tidak diplomatis. Penutur profesional menggunakan teknik **"Agree in part, then pivot"**:

### Pola Diplomatis:
1. **Apresiasi dulu sebelum menyanggah:**
   - *"I see your point, but have we considered the budget constraints?"*
   - *"That\'s a valid concern, though from my perspective..."*
2. **Gunakan modal pelembut (softeners):**
   - Direct: *"This deadline is impossible."*
   - Softened: *"I'm afraid that deadline might be a bit tight given our current workload."*
3. **Gunakan pertanyaan alih-alih pernyataan menyalahkan:**
   - Direct: *"Your plan won't work."*
   - Softened: *"How do you see us handling the potential supply delays with this approach?"*`,
        examples: [
          {
            sentence: 'I understand where you\'re coming from, but I\'m slightly hesitant about rolling this out without further testing.',
            translation: 'Saya memahami sudut pandang Anda, namun saya agak ragu untuk meluncurkan ini tanpa pengujian lebih lanjut.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Softener ("I\'m afraid / Perhaps / It seems to me") + Conditional Modal ("might / could")',
          explanation: 'Bahasa diplomatis memisahkan antara mengkritik ide vs menyerang orangnya. Ini menjaga kerja sama tim tetap solid.',
          pitfall: 'Jangan terlalu banyak meminta maaf ("Sorry, sorry") saat menyatakan opini profesional; gunakan "I see your point" alih-alih "I\'m sorry".',
        },
      },
      {
        id: 'sec-c03-2',
        title: '2. Dialog Situasional: Sprint Review & Project Check-in',
        badge: 'Live Dialogue',
        content: `**Setting:** Virtual Zoom meeting tim produk internasional.
**Karakter:** Sarah (Product Lead) & Reza (Frontend Engineer).

---
**Sarah:** *"Morning team! Let's kick off our weekly sync. Reza, could you give us a quick rundown on where we stand with the onboarding flow?"*
**Reza:** *"Sure, Sarah. On the frontend side, we've wrapped up the profile setup screens and they're ready for QA. However, we hit a slight bottleneck with the third-party API integration."*
**Sarah:** *"Thanks for flagging that, Reza. Do you have the bandwidth to tackle that today, or do we need to bring someone else in?"*
**Reza:** *"I can look into it this afternoon, but it would be great to align with the backend team first so we don't duplicate efforts."*
**Sarah:** *"Makes total sense. Let's circle back after stand-up and set up a quick 15-minute sync with David from backend."*
**Reza:** *"Sounds like a plan. I'll shoot him a quick message on Slack."*
---`,
        examples: [
          {
            sentence: '"Wrap up" = menyelesaikan pekerjaan. "Bottleneck" = hambatan/penyumbat alur kerja.',
            translation: 'Frasa standar di industri teknologi dan manajemen modern.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-c03-3',
        title: '3. Kamus Idiom & Jargon Korporat (Corporate Buzzwords)',
        badge: 'Vocabulary Panel',
        content: `Berikut adalah istilah yang paling sering kamu dengar di email dan rapat perusahaan multinasional:

| Istilah | Arti Sebenarnya | Contoh di Kantor |
|---|---|---|
| **Touch base** | Berbincang singkat untuk update kabar | *"Let's touch base on Friday before the client demo."* |
| **Circle back** | Membahas kembali topik ini nanti | *"I don't have the figures right now, so let me circle back to you."* |
| **Bandwidth** | Kapasitas waktu / tenaga mental yang tersedia | *"I\'d love to help, but I honestly don\'t have the bandwidth this week."* |
| **Flag (verb)** | Menandai / memberitahu potensi masalah | *"Thanks for flagging that discrepancy in the financial report."* |
| **Align on** | Menyamakan persepsi dan kesepakatan | *"We need to align on our Q3 deliverables before presenting to leadership."* |
| **Action item** | Tugas konkret yang harus dikerjakan setelah rapat | *"Let\'s review the action items and assign owners before we wrap up."* |`,
        callout: {
          type: 'info',
          title: 'Tips Penggunaan Jargon',
          text: 'Gunakan frasa ini secara proporsional. Terlalu banyak menumpuk buzzword dapat membuat komunikasi terkesan berbelit-belit. Kejelasan (clarity) tetap menjadi prioritas utama.',
        },
      },
      {
        id: 'sec-c03-4',
        title: '4. Menulis Pesan & Email: Mengubah Direct Jadi Collaborative',
        badge: 'Tone Adjustment',
        content: `Bandingkan transformasi nada bicara ini:

- **Kasar / Kaku:** *"I need the report now."*
- **Kolaboratif:** *"Could you send over the report when you have a spare moment? We need it for the 2 PM presentation."*
<br/>
- **Kasar / Kaku:** *"You forgot to attach the file."*
- **Kolaboratif:** *"It looks like the attachment didn't come through on my end. Would you mind resending it?"*
<br/>
- **Kasar / Kaku:** *"Answer my question."*
- **Kolaboratif:** *"I just wanted to follow up on my previous note regarding the timeline."*`,
      },
    ],
    keyTakeaways: [
      'Gunakan teknik diplomatis "Agree in part, then pivot" untuk menyampaikan kritik konstruktif.',
      'Gunakan modal pelembut (softeners) seperti "I\'m afraid", "might be", dan "slightly".',
      'Kuasai istilah esensial: "touch base", "circle back", "bandwidth", "flag", dan "align on".',
      'Gunakan pola pertanyaan kolaboratif alih-alih perintah langsung.',
    ],
    prevLessonId: 'conv-02',
    nextLessonId: 'conv-04',
  },

  {
    id: 'conv-04',
    trackId: 'conversation-english',
    slug: 'academic-discussions-and-seminars',
    title: 'Academic Discussions & Seminar Debates',
    order: 4,
    summary: 'Kuasai bahasa diskusi akademis tingkat tinggi untuk IELTS Speaking Part 3, kuliah luar negeri, dan seminar internasional: bernuansa, berbasis data, dan terstruktur.',
    readTimeMin: 8,
    difficulty: 'Advanced',
    objectives: [
      'Menerapkan bahasa "Hedging" untuk menghindari klaim mutlak dalam diskusi akademis.',
      'Menggunakan frasa transisi ilmiah: "From a sociological standpoint", "Evidence suggests that".',
      'Merespons argumen lawan bicara secara analitis tanpa memicu perselisihan pribadi.',
      'Menyusun argumen dengan struktur AREA (Assertion, Reason, Evidence, Alternative).',
    ],
    sections: [
      {
        id: 'sec-c04-1',
        title: '1. Seni "Hedging" (Menghindari Klaim Mutlak)',
        badge: 'Academic Hedging',
        content: `Dalam diskusi akademis di universitas terkemuka dunia, membuat pernyataan mutlak (*overgeneralization*) seperti *"Technology always causes depression"* akan langsung diserang oleh penguji atau profesor. Pembicara yang matang selalu memakai **hedging** (bahasa berpagar):

### Mengapa Hedging Krusial?
Hedging menunjukkan kehati-hatian intelektual dan kesadaran bahwa fenomena sosial atau ilmiah memiliki variabel yang kompleks.

| Klaim Mutlak (Lemah) | Versi Hedged (Akademis Kuat) |
|---|---|
| *"Remote work ruins team communication."* | *"Evidence suggests that remote work **tends to** hinder spontaneous communication unless structured protocols are in place."* |
| *"Young people don't care about politics."* | *"It **appears that** younger demographics **are generally more inclined to** engage with grassroots movements rather than traditional partisan politics."* |
| *"AI will replace all teachers."* | *"While AI will undoubtedly reshape education, it **is arguably unlikely to** replace the pastoral and emotional support provided by educators."* |`,
        examples: [
          {
            sentence: 'Studies seem to indicate that socioeconomic background plays a considerable role in academic attainment.',
            translation: 'Penelitian tampak menunjukkan bahwa latar belakang sosioekonomi memainkan peran yang cukup besar dalam capaian akademis.',
            isCorrect: true,
          },
        ],
        ruleBox: {
          formula: 'Subject + tends to / appears to / is likely to + Verb 1  |  Evidence suggests that...',
          explanation: 'Gunakan hedging verbs (suggest, indicate, tend to) dan modal adverbs (arguably, predominantly, plausibly) untuk meningkatkan bobot intelektual ucapanmu.',
          pitfall: 'Jangan memakai kata mutlak seperti "always", "never", "all people", "definitely" tanpa data empiris yang tak terbantahkan.',
        },
      },
      {
        id: 'sec-c04-2',
        title: '2. Dialog Situasional: Perdebatan Seminar Universitas',
        badge: 'Live Dialogue',
        content: `**Setting:** Sesi seminar pascasarjana tentang Kebijakan Lingkungan & Urbanisasi.
**Karakter:** Professor Vance (Dosen), Aisha (Mahasiswa), dan Julian (Mahasiswa).

---
**Prof. Vance:** *"Aisha, building on the reading from Stern on carbon taxation, what\'s your assessment of market-driven climate mechanisms?"*
**Aisha:** *"Well, from an economic standpoint, carbon pricing creates a compelling incentive for industrial decarbonization. However, we must also consider the regressive impact it can have on low-income households if subsidies aren't redirected equitably."*
**Julian:** *"If I could just jump in here — while I take Aisha\'s point about equity, empirical case studies from Sweden demonstrate that revenue recycling can largely mitigate those regressive effects."*
**Aisha:** *"That\'s a fair counterpoint, Julian. But Sweden benefits from exceptionally high institutional trust, which might not be directly applicable to emerging economies."*
**Prof. Vance:** *"Excellent synthesis from both of you. You've hit on the fundamental tension between theoretical economic models and institutional realities."*
---`,
        examples: [
          {
            sentence: '"If I could just jump in here" = Frasa sopan standar untuk menyela dalam diskusi akademis tanpa memotong secara kasar.',
            translation: 'Gunakan frasa ini saat ingin menanggapi poin pembicara sebelumnya.',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-c04-3',
        title: '3. Frasa Framing untuk Menyoroti Sudut Pandang Spesifik',
        badge: 'Discourse Frames',
        content: `Tunjukkan kemampuan analisis multidisipliner dengan menggunakan kerangka sudut pandang (*disciplinary framing*):

- **Dari sudut pandang sosial:**
  - *"From a sociological perspective..."*
  - *"Looking at this through a cultural lens..."*
- **Dari sudut pandang ekonomi/kebijakan:**
  - *"From an economic standpoint..."*
  - *"In terms of policy implementation, the primary hurdle is..."*
- **Menimbang dua sisi berlawanan:**
  - *"On the one hand, there is substantial merit in the argument that... On the other hand, one cannot overlook..."*
- **Merujuk pada konsensus ilmiah:**
  - *"The prevailing consensus among researchers seems to be that..."*
  - *"Extensive empirical literature supports the premise that..."*`,
        callout: {
          type: 'exam-tip',
          title: 'IELTS Speaking Part 3 Goldmine',
          text: 'Menggunakan frasa seperti "From a sociological standpoint..." atau "While that is a plausible explanation, there are several caveats..." langsung membedakan kandidat Band 6.0 dengan kandidat Band 7.5+ di mata penguji.',
        },
      },
      {
        id: 'sec-c04-4',
        title: '4. Teknik AREA untuk Menjawab Pertanyaan Kompleks',
        badge: 'Argument Structure',
        content: `Saat ditanya pertanyaan berbobot, susun jawaban dalam 4 langkah:

1. **A - Assertion (Pernyataan Utama):**
   - *"I would argue that urbanization is fundamentally a double-edged sword."*
2. **R - Reason (Alasan Logis):**
   - *"While it concentrates economic opportunity and innovation, it frequently strains existing public infrastructure."*
3. **E - Evidence / Example (Bukti atau Contoh):**
   - *"Take megacities like Jakarta or Manila, for instance, where traffic congestion and water management pose severe logistical crises."*
4. **A - Alternative / Conclusion (Nuansa / Kesimpulan):**
   - *"Therefore, sustainable urban planning is not merely desirable, but absolutely imperative."*`,
      },
    ],
    keyTakeaways: [
      'Gunakan hedging ("tends to", "evidence suggests that", "arguably") agar tidak membuat klaim mutlak yang rapuh.',
      'Gunakan frasa penyela yang santun: "If I could just jump in here...".',
      'Terapkan framing sudut pandang: "From a sociological standpoint...", "From an economic lens...".',
      'Gunakan rumus AREA untuk menyusun jawaban berbobot dalam IELTS Part 3 atau seminar kampus.',
    ],
    prevLessonId: 'conv-03',
    nextLessonId: 'conv-05',
  },

  {
    id: 'conv-05',
    trackId: 'conversation-english',
    slug: 'practical-daily-situations',
    title: 'Practical Daily Situations: Dining, Shopping & Clinic',
    order: 5,
    summary: 'Kuasai percakapan praktis di dunia nyata saat bepergian ke luar negeri: memesan di restoran/kafe, berbelanja pakaian, dan menjelaskan keluhan kesehatan di klinik.',
    readTimeMin: 7,
    difficulty: 'Intermediate',
    objectives: [
      'Memesan makanan dan minuman secara fasih dengan modifikasi pesanan khusus.',
      'Melakukan transaksi belanja pakaian (menanyakan ukuran, ruang ganti, dan retur).',
      'Menjelaskan gejala medis dan keluhan fisik secara akurat kepada dokter atau apoteker.',
      'Mengatasi kesalahpahaman transaksi dengan tenang dan sopan.',
    ],
    sections: [
      {
        id: 'sec-c05-1',
        title: '1. Di Kafe & Restoran (Ordering & Dietary Requests)',
        badge: 'Dining Out',
        content: `Memesan makanan di negara penutur bahasa Inggris memiliki konvensi khusus. Alih-alih berkata *"I want a latte"*, gunakan struktur permintaan sopan:

### Frasa Utama:
- *"Could I get a flat white with oat milk, please?"*
- *"I'll have the grilled salmon, but could I get the dressing on the side?"*
- *"Is it possible to substitute the fries with a side salad?"*
- *"To stay or to go?"* (US) / *"Having here or takeaway?"* (UK/Aus) — *"To go, please!"*
- *"Could we split the bill, please?"* atau *"Can we pay separately?"*

### Menanyakan Alergi & Diet:
- *"Does this dish contain any nuts or dairy? I have a severe allergy."*
- *"Are there any vegetarian or gluten-free options available?"*`,
        examples: [
          {
            sentence: 'Could we get the check whenever you have a chance, please?',
            translation: 'Bisakah kami meminta tagihannya saat Anda ada waktu senggang?',
            explanation: '"Check" lazim di US, sedangkan "bill" lebih lazim di UK/Commonwealth.',
            isCorrect: true,
          },
        ],
        callout: {
          type: 'tip',
          title: '"On the side" & "Hold the..."',
          text: '"Dressing on the side" = saus dipisah di mangkuk kecil. "Hold the onions" = jangan pakai bawang (skip the onions).',
        },
      },
      {
        id: 'sec-c05-2',
        title: '2. Di Toko & Butik (Shopping & Fitting Rooms)',
        badge: 'Retail English',
        content: `**Setting:** Toko pakaian di pusat perbelanjaan.

---
**Clerk:** *"Hi there! Just let me know if you need any help finding sizes."*
**Customer:** *"Thanks! Do you happen to have this jacket in a medium? The one on the rack is a bit too loose."*
**Clerk:** *"Let me check the stockroom for you... Yes, here you go! Would you like to try it on?"*
**Customer:** *"Yes, please. Where are the fitting rooms?"*
**Clerk:** *"Just around the corner to your left."*
*(Setelah mencoba)*
**Customer:** *"It fits perfectly! By the way, what is your exchange policy in case I change my mind?"*
**Clerk:** *"You have 30 days with the original receipt and tags attached."*
---`,
        examples: [
          {
            sentence: '"Do you happen to have...?" = frasa sangat sopan untuk menanyakan apakah barang tersedia.',
            translation: 'Terdengar jauh lebih santun daripada sekadar "Do you have...".',
            isCorrect: true,
          },
        ],
      },
      {
        id: 'sec-c05-3',
        title: '3. Di Klinik & Apotek (Explaining Health Symptoms)',
        badge: 'Medical English',
        content: `Saat sakit di luar negeri, menjelaskan gejala dengan kata yang tepat sangat menentukan keakuratan diagnosis dokter:

| Gejala Bahasa Indonesia | Istilah Bahasa Inggris yang Tepat | Contoh Kalimat |
|---|---|---|
| Sakit kepala berdenyut | **Throbbing headache** | *"I've had this throbbing headache since yesterday morning."* |
| Hidung tersumbat / meler | **Stuffy nose / Runny nose** | *"I have a stuffy nose and a scratchy throat."* |
| Sakit tenggorokan | **Sore throat** | *"It hurts when I swallow because of my sore throat."* |
| Mual / ingin muntah | **Feeling nauseous** /ˈnɔːziəs/ | *"I feel quite nauseous, especially after eating."* |
| Pusing berputar | **Feeling dizzy / lightheaded** | *"I felt lightheaded when I stood up quickly."* |
| Nyeri pegal-pegal | **Body aches** | *"I have a mild fever accompanied by general body aches."* |
| Resep obat dokter | **Prescription** | *"Do I need a prescription for this antibiotic?"* |
| Obat bebas tanpa resep | **Over-the-counter (OTC)** | *"Can you recommend any over-the-counter pain relievers?"* |`,
        callout: {
          type: 'warning',
          title: 'Perbedaan "Sick" vs "Ill" vs "Hurt"',
          text: '"My stomach hurts" = perut saya terasa sakit (nyeri fisik). "I feel sick" = saya merasa mual/ingin muntah (atau sedang tidak enak badan secara umum). "He is terminally ill" = sakit berat dalam jangka panjang.',
        },
      },
      {
        id: 'sec-c05-4',
        title: '4. Menangani Masalah Pembayaran & Transaksi',
        badge: 'Problem Solving',
        content: `Jika terjadi kesalahan pada tagihan atau barang belanjaan:

- *"Excuse me, I think there might be a slight mistake on this bill. We didn't order the sparkling water."*
- *"It looks like I was charged twice for this item. Could you please double-check the transaction?"*
- *"My card was declined for some reason. Let me try a different one."*
- *"Could I get a receipt, please?"*`,
      },
    ],
    keyTakeaways: [
      'Gunakan "Could I get...", "On the side", dan "To go / Takeaway" saat memesan makanan.',
      'Gunakan "Do you happen to have... in a [size]?" saat berbelanja pakaian.',
      'Pahami istilah medis esensial: "throbbing headache", "sore throat", "nauseous", dan "prescription".',
      'Ungkapkan komplain transaksi dengan tenang: "I think there might be a slight mistake on this bill...".',
    ],
    prevLessonId: 'conv-04',
  },
];

// Exercises for each conversation lesson
export const conversationExercises: Record<string, Exercise[]> = {
  'conv-01': [
    {
      id: 'ex-conv01-1',
      lessonId: 'conv-01',
      type: 'multiple-choice',
      title: 'Respon Alami untuk Sapaan Kasual',
      instruction: 'Pilih respon yang paling natural dan mencerminkan prinsip Ping-Pong percakapan.',
      points: 10,
      question: 'Seorang rekan kerja berpapasan denganmu di lobi kantor dan berkata: "Hey! How\'s your day going so far?". Respon manakah yang paling natural dan menjaga percakapan tetap hangat?',
      options: [
        {
          id: 'opt-1',
          text: 'I am fine, thank you. And you?',
          explanation: 'Terlalu kaku dan seperti buku teks sekolah dasar zaman dulu; kurang natural untuk lingkungan kerja kasual modern.',
        },
        {
          id: 'opt-2',
          text: 'Pretty good, thanks! Just wrapping up a client report. How about things on your end?',
          explanation: 'Tepat sekali! Menjawab dengan santai, memberi sedikit konteks aktivitas (add-on), lalu melemparkan pertanyaan balik (Ping-Pong).',
        },
        {
          id: 'opt-3',
          text: 'Yes, I am working.',
          explanation: 'Tidak menjawab pertanyaan "How\'s your day going" dan mematikan kelanjutan percakapan.',
        },
        {
          id: 'opt-4',
          text: 'Why do you ask me?',
          explanation: 'Terdengar curiga dan sangat tidak ramah.',
        },
      ],
      correctAnswerId: 'opt-2',
      grammarTip: 'Prinsip Ping-Pong: Jawab kabar + Tambahkan 1 kalimat detail + Tanyakan kabar balik.',
    },
    {
      id: 'ex-conv01-2',
      lessonId: 'conv-01',
      type: 'matching',
      title: 'Mencocokkan Conversational Fillers dengan Fungsinya',
      instruction: 'Cocokkan frasa percakapan bahasa Inggris dengan fungsi pragmatisnya yang tepat.',
      points: 10,
      pairs: [
        { id: 'p1', left: 'By the way...', right: 'Mengalihkan atau menambahkan topik pembicaraan baru' },
        { id: 'p2', left: 'To be honest...', right: 'Menyampaikan opini atau perasaan jujur dengan sopan' },
        { id: 'p3', left: 'Fair enough.', right: 'Menunjukkan bahwa kita memahami dan menerima alasan orang lain' },
        { id: 'p4', left: 'Actually...', right: 'Mengoreksi salah paham atau memberikan fakta mengejutkan' },
      ],
      explanation: 'Discourse markers membantu pendengar memahami intensi dan transisi kalimat penutur secara mulus.',
    },
  ],

  'conv-02': [
    {
      id: 'ex-conv02-1',
      lessonId: 'conv-02',
      type: 'multiple-choice',
      title: 'Logika Menjawab "Would you mind...?"',
      instruction: 'Pilih respon yang gramatikal dan menyatakan kesediaan membantu.',
      points: 10,
      question: 'Seorang turis membawa koper berat dan bertanya kepadamu di stasiun: "Excuse me, would you mind helping me carry this bag up the stairs?". Jika kamu MAU dan BERSEDIA membantunya, apa yang harus kamu katakan?',
      options: [
        {
          id: 'opt-1',
          text: 'Yes, I mind!',
          explanation: 'Ini berarti "Ya, saya keberatan!", yang artinya kamu menolak membantu.',
        },
        {
          id: 'opt-2',
          text: 'Not at all, let me give you a hand!',
          explanation: 'Tepat sekali! "Would you mind" berarti "Apakah kamu keberatan?". Menjawab "Not at all" (Tidak keberatan sama sekali) adalah cara menyatakan kesediaan membantu.',
        },
        {
          id: 'opt-3',
          text: 'Yes, please carry it.',
          explanation: 'Tidak gramatikal dan maknanya terbalik.',
        },
        {
          id: 'opt-4',
          text: 'Repeat please!',
          explanation: 'Kurang sopan dan tidak menjawab pertanyaan kesediaan.',
        },
      ],
      correctAnswerId: 'opt-2',
      grammarTip: 'Ingat: "Would you mind?" = "Apakah kamu keberatan?". Bersedia = "Not at all" / "No, not at all, happy to help!".',
    },
    {
      id: 'ex-conv02-2',
      lessonId: 'conv-02',
      type: 'fill-blank',
      title: 'Meminta Klarifikasi secara Elegan',
      instruction: 'Lengkapi kalimat klarifikasi berikut dengan kata yang tepat.',
      points: 10,
      sentence: 'Sorry, I didn\'t quite [___] that. Could you please say it once more?',
      targets: [
        {
          index: 0,
          correctAnswers: ['catch', 'hear', 'get'],
          hint: 'Kata kerja yang lazim dipakai untuk "menangkap/mendengar ucapan"',
        },
      ],
      wordBank: ['catch', 'tell', 'read', 'bring'],
      explanation: '"I didn\'t quite catch that" adalah idiom percakapan paling alami untuk menyatakan bahwa kamu tidak sempat mendengar jelas apa yang diucapkan.',
    },
  ],

  'conv-03': [
    {
      id: 'ex-conv03-1',
      lessonId: 'conv-03',
      type: 'multiple-choice',
      title: 'Menyampaikan Sanggahan Diplomatis di Tempat Kerja',
      instruction: 'Pilih kalimat yang paling profesional dan konstruktif dalam rapat tim.',
      points: 10,
      question: 'Atasanmu mengusulkan peluncuran produk minggu depan, padahal tim belum sempat melakukan pengujian keamanan (security audit). Kalimat mana yang paling diplomatis dan berbobot?',
      options: [
        {
          id: 'opt-1',
          text: 'That is a terrible idea and it will fail.',
          explanation: 'Sangat kasar dan tidak konstruktif; menyerang secara personal.',
        },
        {
          id: 'opt-2',
          text: 'I see the value in launching quickly, but I\'m slightly hesitant about moving forward without completing our security audit first.',
          explanation: 'Sempurna! Mengakui niat baik peluncuran cepat, lalu menyampaikan kekhawatiran dengan pelembut diplomatis ("slightly hesitant").',
        },
        {
          id: 'opt-3',
          text: 'I am sorry, sorry, I cannot do that.',
          explanation: 'Terlalu pasif dan tidak menjelaskan argumen teknis yang melandasi keberatan.',
        },
        {
          id: 'opt-4',
          text: 'You don\'t understand technology.',
          explanation: 'Tidak pantas dan melanggar kode etik profesional.',
        },
      ],
      correctAnswerId: 'opt-2',
      grammarTip: 'Gunakan teknik diplomatis: Akui nilai idenya + gunakan pelembut ("slightly hesitant", "might consider").',
    },
    {
      id: 'ex-conv03-2',
      lessonId: 'conv-03',
      type: 'matching',
      title: 'Mencocokkan Corporate Buzzwords dengan Konteksnya',
      instruction: 'Cocokkan istilah kantor populer dengan artinya dalam bahasa Indonesia.',
      points: 10,
      pairs: [
        { id: 'p1', left: 'Touch base', right: 'Berbincang singkat untuk update status pekerjaan' },
        { id: 'p2', left: 'Circle back', right: 'Membahas kembali topik tertentu di waktu mendatang' },
        { id: 'p3', left: 'Bandwidth', right: 'Kapasitas waktu dan energi kerja yang tersedia' },
        { id: 'p4', left: 'Action items', right: 'Daftar tugas tindak lanjut konkret setelah meeting' },
      ],
      explanation: 'Istilah korporat memfasilitasi komunikasi singkat dan terstandarisasi di lingkungan kerja multinasional.',
    },
  ],

  'conv-04': [
    {
      id: 'ex-conv04-1',
      lessonId: 'conv-04',
      type: 'multiple-choice',
      title: 'Mengidentifikasi Penggunaan Hedging Akademis',
      instruction: 'Pilih kalimat yang paling memenuhi standar diskusi ilmiah/seminar.',
      points: 10,
      question: 'Manakah dari pernyataan berikut yang menggunakan teknik "Hedging" dengan tepat untuk menghindari overgeneralization?',
      options: [
        {
          id: 'opt-1',
          text: 'Social media always completely destroys attention spans in teenagers.',
          explanation: 'Menggunakan kata mutlak "always" dan "completely" tanpa ruang untuk nuansa atau pengecualian.',
        },
        {
          id: 'opt-2',
          text: 'Recent empirical studies tend to suggest that excessive screen time is correlated with reduced cognitive endurance.',
          explanation: 'Tepat sekali! Menggunakan "tend to suggest", "excessive", dan "correlated with" — ciri khas penalaran ilmiah yang matang.',
        },
        {
          id: 'opt-3',
          text: 'Nobody reads books anymore because everyone is on their phone.',
          explanation: 'Klaim hiperbolik mutlak ("Nobody", "everyone") yang tidak dapat dipertahankan secara akademis.',
        },
        {
          id: 'opt-4',
          text: 'All smartphones must be banned in every school immediately.',
          explanation: 'Pernyataan bernada seruan dogmatis tanpa pembuktian analitis.',
        },
      ],
      correctAnswerId: 'opt-2',
      grammarTip: 'Hedging verbs seperti "tend to suggest" atau "seem to indicate" memberi bobot intelektual tinggi.',
    },
    {
      id: 'ex-conv04-2',
      lessonId: 'conv-04',
      type: 'matching',
      title: 'Menghubungkan Elemen Argumen AREA',
      instruction: 'Cocokkan huruf dalam metode AREA dengan fungsi retorisnya dalam berargumentasi.',
      points: 10,
      pairs: [
        { id: 'p1', left: 'A - Assertion', right: 'Pernyataan klaim atau tesis utama yang hendak dipertahankan' },
        { id: 'p2', left: 'R - Reason', right: 'Penjelasan sebab-akibat logis mengapa klaim tersebut valid' },
        { id: 'p3', left: 'E - Evidence', right: 'Bukti data konkret, studi kasus, atau contoh nyata pendukung' },
        { id: 'p4', left: 'A - Alternative / Conclusion', right: 'Penegasan kembali kesimpulan atau antisipasi sudut pandang lain' },
      ],
      explanation: 'Metode AREA memastikan jawaban lisan terstruktur kokoh dalam wawancara akademis atau ujian IELTS Speaking.',
    },
  ],

  'conv-05': [
    {
      id: 'ex-conv05-1',
      lessonId: 'conv-05',
      type: 'multiple-choice',
      title: 'Memesan Makanan dengan Modifikasi Khusus',
      instruction: 'Pilih kalimat pemesanan yang paling tepat di restoran penutur bahasa Inggris.',
      points: 10,
      question: 'Kamu ingin memesan salad Caesar di kafe, tetapi ingin agar sausnya dipisah di mangkuk kecil (tidak langsung dituangkan di atas sayur). Frasa apa yang harus kamu gunakan?',
      options: [
        {
          id: 'opt-1',
          text: 'Give me salad with separate sauce please.',
          explanation: 'Bisa dimengerti tetapi terdengar kaku dan tidak lazim dalam percakapan sehari-hari penutur asli.',
        },
        {
          id: 'opt-2',
          text: 'Could I have the Caesar salad, but with the dressing on the side, please?',
          explanation: 'Sempurna! Frasa standar di seluruh dunia berbahasa Inggris untuk saus yang dipisah adalah "on the side".',
        },
        {
          id: 'opt-3',
          text: 'I want salad without any taste.',
          explanation: 'Bermakna salah ("tanpa rasa").',
        },
        {
          id: 'opt-4',
          text: 'Sauce outside the bowl now.',
          explanation: 'Terdengar kasar dan tidak gramatikal.',
        },
      ],
      correctAnswerId: 'opt-2',
      grammarTip: 'Gunakan idiom "on the side" untuk saus, keju, atau pelengkap yang ingin disajikan terpisah.',
    },
    {
      id: 'ex-conv05-2',
      lessonId: 'conv-05',
      type: 'fill-blank',
      title: 'Menjelaskan Gejala Medis di Klinik',
      instruction: 'Lengkapi keluhan medis berikut dengan kata yang tepat untuk rasa nyeri berdenyut di kepala.',
      points: 10,
      sentence: 'Doctor, I\'ve been experiencing a severe [___] headache on the left side of my head for two days.',
      targets: [
        {
          index: 0,
          correctAnswers: ['throbbing', 'pounding', 'splitting'],
          hint: 'Istilah medis untuk sakit kepala yang terasa berdenyut-denyut (dimulai dengan huruf th-)',
        },
      ],
      wordBank: ['throbbing', 'itching', 'running', 'floating'],
      explanation: '"Throbbing headache" adalah kolokasi medis presisi untuk sakit kepala yang berdenyut seirama detak jantung.',
    },
  ],
};
