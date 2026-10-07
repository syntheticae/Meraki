export type IELTSQuestionType =
  | 'TFNG'
  | 'MatchingHeadings'
  | 'SentenceCompletion'
  | 'SummaryCompletion'
  | 'MatchingFeatures';

export interface IELTSPassage {
  id: string;
  title: string;
  topic: string;
  body: string; // 250-400 word academic passage
}

export interface IELTSReadingQuestion {
  id: string;
  type: IELTSQuestionType;
  passageId: string;
  questionText: string;
  options?: string[];
  correctAnswer: string;
  strategyWalkthrough: string;
  trapExplanation?: string;
  keywordHint?: string;
}

export const IELTS_PASSAGES: IELTSPassage[] = [
  {
    id: 'p-01',
    title: 'Climate Change and Carbon Emissions',
    topic: 'Environment',
    body: 'The global discourse on climate change has intensified as empirical data reveals unprecedented shifts in the Earth\'s atmospheric composition. In 2023, widely recognized as the warmest year on historical record, surface temperatures exceeded pre-industrial baselines by a significant margin. Central to this phenomenon is the escalating concentration of greenhouse gases, particularly carbon dioxide (CO2). Recent atmospheric samplings indicate that CO2 levels have surged past 420 parts per million (ppm), a threshold that underscores the persistent reliance on fossil fuels despite international mitigation agreements.\n\nThe Intergovernmental Panel on Climate Change (IPCC) has issued unequivocal findings regarding the trajectory of these emissions, warning that without drastic structural changes to global energy systems, the goal of limiting temperature rise to 1.5°C will become unattainable. Interestingly, the impacts of this warming are not distributed evenly across the globe; the Arctic region is warming at approximately three times the global average rate, leading to rapid glacial retreat and permafrost thawing, which in turn releases further sequestered methane.\n\nDespite these alarming trends, there is measurable progress in the transition towards sustainable energy paradigms. Driven by technological advancements and economies of scale, renewable energy sources—primarily solar and wind—have seen exponential growth. By the end of 2023, renewable energy accounted for nearly 30% of global electricity generation, marking a historic milestone in the effort to decarbonize industrial emissions. However, experts caution that while this transition is crucial, it must be accompanied by comprehensive strategies targeting hard-to-abate sectors such as heavy manufacturing and aviation to achieve net-zero targets by the mid-century.'
  },
  {
    id: 'p-02',
    title: 'Urban Biodiversity and Green Infrastructure',
    topic: 'Urban Planning',
    body: 'As urbanization accelerates globally, the phenomenon known as the urban heat island (UHI) effect has become a critical challenge for city planners. Concrete, asphalt, and other conventional building materials absorb and retain solar radiation, leading to localized temperature elevations that can significantly impact public health and energy consumption. To counteract this, municipalities are increasingly turning to green infrastructure, integrating natural elements into the urban matrix.\n\nProminent examples of this approach include the extensive wildlife corridors developed in Singapore and Berlin. These interconnected green spaces not only facilitate the movement of urban fauna but also serve as vital ecological networks that sustain biodiversity amidst dense human habitation. Moreover, the implementation of green roofs—building rooftops partially or completely covered with vegetation—has proven highly effective. Studies demonstrate that widespread adoption of green roofs can reduce localized ambient temperatures by 3-4°C during peak summer months, mitigating the UHI effect.\n\nFurthermore, urban greening initiatives have unexpected benefits for local avian populations. Recent ecological surveys have documented a remarkable resurgence in biodiversity within metropolitan areas. A specific study recorded over 120 distinct bird species utilizing London\'s urban parks for foraging and nesting, illustrating that meticulously designed urban landscapes can function as robust ecosystems. The integration of such infrastructure thus represents a dual-purpose strategy: enhancing urban resilience to climate extremes while simultaneously fostering biodiversity.'
  },
  {
    id: 'p-03',
    title: 'Digital Literacy and Education Equity',
    topic: 'Education',
    body: 'The rapid integration of digital technologies into educational frameworks has fundamentally reshaped pedagogical methodologies. However, this digital transformation has also illuminated and exacerbated the digital divide, a socioeconomic disparity concerning access to information and communication technologies. According to comprehensive reports published by UNESCO, millions of students worldwide remain disenfranchised due to a lack of reliable internet connectivity or adequate computing devices, significantly hindering their academic progression.\n\nThe unprecedented global shift to remote learning necessitated by the COVID-19 pandemic served as a catalyst for examining education equity. While virtual classrooms enabled instructional continuity, the outcomes were highly polarized. Students in well-resourced environments adapted swiftly, whereas those in marginalized communities faced substantial learning losses. UNESCO estimates that nearly 463 million children globally could not be reached by digital and broadcast remote learning programs during school closures.\n\nIn analyzing the efficacy of these digital tools, researchers noted significant changes in the educational dynamic. Both educators and learners had to rapidly acquire new digital competencies, fundamentally altering the traditional classroom hierarchy. Digital platforms offered novel ways to track student engagement and customize learning trajectories. Interestingly, educational technologists continue to debate the long-term impacts of this transition, specifically regarding whether teachers or students benefited more from the forced adoption of digital tools, as the shift demanded unprecedented adaptability from both demographics.'
  },
  {
    id: 'p-04',
    title: 'The Psychology of Procrastination',
    topic: 'Psychology',
    body: 'A. Procrastination is frequently misunderstood as a simple lack of willpower or straightforward laziness. In psychological terms, however, it is defined as the voluntary, irrational delay of an intended course of action, despite the individual knowing that this delay will result in negative consequences. Unlike laziness, which is characterized by apathy and a lack of desire to act, procrastination is an active process—a choice to favor a more immediately rewarding task over a necessary, often stress-inducing one.\n\nB. Recent neuroscientific research has shed light on the biological underpinnings of this behavior. Functional MRI scans reveal that procrastination is essentially a battle between two areas of the brain: the prefrontal cortex, which is responsible for executive functions, planning, and long-term goals, and the limbic system, the emotional center that craves immediate gratification. When a task provokes anxiety or seems overwhelming, the limbic system often overrides the prefrontal cortex, leading to avoidance behavior.\n\nC. Clinical psychologists have identified various profiles of individuals who chronically delay tasks. These include the perfectionist, who is paralyzed by the fear of not meeting impossibly high standards; the dreamer, who resents dealing with the practical details of a task; the defier, who rebels against imposed schedules; the crisis-maker, who claims they only work well under pressure; and the overdoer, who struggles with prioritization and commits to too many tasks.\n\nD. The consequences of chronic procrastination are particularly evident in educational settings. Academic studies consistently show a strong negative correlation between procrastination and academic performance. Research indicates that approximately 75% of university students consider themselves procrastinators, with 50% reporting that they procrastinate to a degree that significantly impacts their grades, leading to heightened stress, lower well-being, and increased physical illness.\n\nE. To combat this pervasive issue, behavioral psychologists advocate for specific, evidence-based interventions. One highly effective strategy is the formulation of "implementation intentions"—if-then plans that specify exactly when and where a task will be executed. Another successful approach is "temptation bundling," which involves coupling a deeply dreaded task with an instantly gratifying behavior, thereby restructuring the reward system and minimizing the initial resistance to starting.'
  },
  {
    id: 'p-05',
    title: 'Biomimicry in Engineering',
    topic: 'Engineering',
    body: 'A. Biomimicry, the practice of looking to nature for inspiration to solve complex human problems, has roots stretching back centuries. Early pioneers of human flight, such as Otto von Lilienthal and the Wright Brothers, meticulously studied the aerodynamics of bird flight. By observing the curvature of avian wings and the mechanics of soaring, they developed early airfoils, establishing a foundational principle that nature’s evolutionary processes often yield optimal engineering designs.\n\nB. In the realm of materials science, biomimicry has led to groundbreaking innovations in public health. The Sharklet antibacterial surface technology is a prime example. Scientists analyzing shark skin discovered that its micro-pattern of overlapping, diamond-shaped scales, known as dermal denticles, mechanically inhibits the attachment and growth of bacteria and algae. By replicating this microscopic texture on medical devices and hospital surfaces, engineers created a material that prevents microbial colonization without the use of chemical antibiotics, thereby avoiding the exacerbation of antibiotic resistance.\n\nC. Transportation engineering has also benefited profoundly from biological observation. When Japanese engineers were designing the Shinkansen bullet train, they faced a significant challenge: the train created a thunderous sonic boom when emerging from tunnels due to displaced air pressure. The solution was found in the kingfisher, a bird that dives seamlessly into water with minimal splashing. By redesigning the train’s nose to mimic the kingfisher\'s elongated beak, engineers not only eliminated the noise problem but also increased the train\'s speed and reduced its electricity consumption.\n\nD. Another remarkable adaptation is the "Lotus effect," which refers to the self-cleaning properties of the lotus flower. The plant\'s leaves are coated with nanoscopic waxy bumps that prevent water from adhering. Instead, water forms spherical droplets that roll off the leaf, collecting dirt and debris along the way. This principle has been commercialized into self-cleaning paints, glass, and fabrics, significantly reducing the need for chemical cleaners and maintenance in modern architecture.\n\nE. As the imperative for sustainable technology intensifies, the commercial applications of biomimicry are expanding rapidly. Future prospects include wind turbine blades modeled after the flippers of humpback whales, which possess tubercles that dramatically increase aerodynamic efficiency, and building cooling systems inspired by termite mounds. By continuously analyzing biological blueprints, engineers are moving closer to technologies that are not only highly efficient but also intrinsically compatible with the natural environment.'
  },
  {
    id: 'p-06',
    title: 'Renewable Energy Storage Challenges',
    topic: 'Energy',
    body: 'The global transition toward renewable energy sources, while environmentally imperative, is fundamentally constrained by the intermittent nature of solar and wind power. Consequently, developing robust energy storage solutions has become the foremost challenge in modern electrical engineering. Currently, lithium-ion batteries dominate the market for short-term grid stabilization and electric vehicles. Their prevalence is largely due to dramatic cost reductions; grid-scale storage costs have plummeted by an astonishing 89% since 2010, making battery installations economically viable for utility companies.\n\nDespite the rapid ascent of chemical batteries, pumped hydro storage remains the workhorse of global energy reserves, accounting for approximately 94% of installed storage capacity worldwide. This mature technology involves pumping water to a higher elevation during periods of excess power generation and releasing it through turbines when demand peaks. However, pumped hydro is geographically restrictive and capital-intensive, prompting researchers to explore alternative utility-scale technologies.\n\nAmong the emerging alternatives, flow batteries are gaining significant traction. Unlike conventional solid-state batteries, flow batteries store energy in liquid electrolytes contained in external tanks, allowing for scalable and long-duration energy storage without the degradation issues that plague lithium-ion cells. Additionally, engineers are revisiting compressed air energy storage (CAES). This system utilizes surplus electricity to compress air into underground geological formations, such as salt caverns. When power is required, the pressurized air is heated and expanded through a turbine. While CAES offers massive storage potential, improving the round-trip efficiency of the thermodynamic process remains a critical hurdle for broader commercial deployment.'
  },
  {
    id: 'p-07',
    title: 'The History of Cartography',
    topic: 'History',
    body: 'Cartography, the art and science of mapmaking, provides a fascinating lens through which to view the evolution of human spatial awareness and technological advancement. The earliest known representations of the physical world date back to antiquity, with one of the most famous examples being a Babylonian clay tablet from around 600 BCE, which depicted the earth as a flat disk surrounded by a cosmic ocean.\n\nDuring the classical era, significant intellectual leaps were made, particularly by the Greco-Roman scholar Ptolemy in the 2nd century CE. He introduced a systematic approach to mapmaking by implementing a grid system of intersecting lines—the precursors to modern latitude and longitude—allowing for more precise coordinate plotting. Following the decline of the Roman Empire, cartographic progress continued in the Islamic world. In 1154 CE, the renowned Arab cartographer Al-Idrisi produced the Tabula Rogeriana, one of the most advanced and accurate world maps of the medieval period, synthesizing geographic knowledge from classical texts with contemporary merchant accounts.\n\nThe Age of Discovery fundamentally transformed cartography as navigators required reliable sea charts. In 1569, Gerardus Mercator introduced the Mercator projection, a revolutionary mathematical projection that represented lines of constant compass bearing as straight lines. While this distorted the size of landmasses at the poles, it became an indispensable tool for maritime navigation.\n\nToday, traditional mapmaking has been entirely superseded by Geographic Information Systems (GIS) technology. By utilizing satellite imagery and extensive databases, modern cartographers can layer complex spatial data, creating dynamic, multidimensional maps that are essential for everything from urban planning to disaster management.'
  },
  {
    id: 'p-08',
    title: 'Three Economists on Automation',
    topic: 'Economics',
    body: 'The discourse surrounding the automation of labor has polarized economic thought, with experts offering divergent forecasts regarding its long-term societal impact. Professor Chen, a labor economist, argues that while automation invariably displaces workers in routine manual and cognitive tasks, it simultaneously creates a "productivity effect." According to Chen, the cost savings generated by automated systems inevitably lead to lower prices for consumers and increased demand, which in turn stimulates job creation in new, unforeseen sectors. Thus, she maintains that historical patterns of technological unemployment are temporary friction rather than a permanent condition.\n\nConversely, Dr. Martinez takes a substantially more pessimistic stance. He asserts that the current wave of artificial intelligence and robotics represents a paradigm shift that defies historical precedents. Martinez contends that the cognitive capabilities of modern algorithms directly threaten the middle-class professional sector. He warns of severe labor market polarization, where only low-wage service jobs and highly specialized technical roles survive, leading to unprecedented income inequality. Martinez strongly advocates for the implementation of a universal basic income (UBI) as a necessary socioeconomic buffer.\n\nMeanwhile, Professor Okafor emphasizes the transformation of work dynamics rather than job quantities. She focuses on the concept of "human-machine augmentation," suggesting that automation will primarily redefine job descriptions rather than eliminate them entirely. Okafor highlights that tasks requiring high emotional intelligence, complex ethical judgment, and creative problem-solving cannot be replicated by current technologies. Her research indicates that the future workforce will need to focus intensively on lifelong learning and adaptability, as the premium on uniquely human cognitive skills will drastically increase across all industries.'
  }
];

export const IELTS_READING_QUESTIONS: IELTSReadingQuestion[] = [
  // TFNG
  {
    id: 'tfng-01',
    type: 'TFNG',
    passageId: 'p-01',
    questionText: 'In 2023, global surface temperatures reached the highest level ever recorded in history.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'True',
    strategyWalkthrough: 'Cari kata kunci "2023" dan "temperature". Passage secara eksplisit menyebutkan "In 2023, widely recognized as the warmest year on historical record...", yang memiliki arti yang persis sama dengan pernyataan.',
    keywordHint: '2023 warmest year'
  },
  {
    id: 'tfng-02',
    type: 'TFNG',
    passageId: 'p-01',
    questionText: 'Renewable energy has completely replaced fossil fuels in the global electricity sector.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'False',
    strategyWalkthrough: 'Cari kata kunci "renewable energy". Teks mengatakan bahwa energi terbarukan mencapai "nearly 30% of global electricity generation". Ini berarti belum sepenuhnya menggantikan bahan bakar fosil.',
    trapExplanation: 'Pertanyaan ini membesar-besarkan klaim (exaggeration). "Completely replaced" bertentangan dengan fakta "30%".',
    keywordHint: 'renewable energy'
  },
  {
    id: 'tfng-03',
    type: 'TFNG',
    passageId: 'p-01',
    questionText: 'The transition to renewable energy will cause significant economic damage to developing nations.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'Not Given',
    strategyWalkthrough: 'Cari kata kunci tentang dampak ekonomi di negara berkembang. Meskipun teks membahas transisi energi dan sektor yang sulit dikurangi emisinya (hard-to-abate sectors), tidak ada informasi tentang dampak finansial khusus pada negara berkembang.',
    trapExplanation: 'Ini adalah jebakan umum. Mungkin secara logika masuk akal atau sering Anda baca di berita, tetapi aturannya: jika tidak tertulis di teks, jawabannya Not Given.',
    keywordHint: 'developing nations'
  },
  {
    id: 'tfng-04',
    type: 'TFNG',
    passageId: 'p-01',
    questionText: 'Carbon dioxide concentration in the atmosphere has remained below 400 parts per million.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'False',
    strategyWalkthrough: 'Cari angka konsentrasi CO2. Teks dengan jelas menyatakan "CO2 levels have surged past 420 parts per million (ppm)", sehingga pernyataan bahwa levelnya tetap di bawah 400 adalah salah.',
    keywordHint: 'parts per million'
  },
  {
    id: 'tfng-05',
    type: 'TFNG',
    passageId: 'p-02',
    questionText: 'The government of Berlin provides financial incentives to citizens who install green roofs.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'Not Given',
    strategyWalkthrough: 'Cari informasi tentang "Berlin" dan "green roofs". Teks menyebutkan Berlin memiliki koridor satwa liar dan membahas manfaat green roofs, tetapi tidak pernah menyebutkan adanya insentif atau bantuan keuangan dari pemerintah.',
    trapExplanation: 'Anda mungkin berasumsi bahwa pemerintah yang mendanainya, namun asumsi pribadi tidak boleh digunakan. Informasinya murni tidak tersedia.',
    keywordHint: 'financial incentives'
  },
  {
    id: 'tfng-06',
    type: 'TFNG',
    passageId: 'p-02',
    questionText: 'Green roofs have the capacity to lower local ambient temperatures during peak summer.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'True',
    strategyWalkthrough: 'Cari kata "green roofs" dan "temperatures". Teks menyatakan "green roofs can reduce localized ambient temperatures by 3-4°C during peak summer months". Ini sejalan dengan pertanyaan.',
    keywordHint: 'ambient temperatures'
  },
  {
    id: 'tfng-07',
    type: 'TFNG',
    passageId: 'p-02',
    questionText: 'Maintaining wildlife corridors in cities requires a larger budget than traditional park maintenance.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'Not Given',
    strategyWalkthrough: 'Cari referensi mengenai "budget" atau biaya pemeliharaan. Teks fokus pada fungsi ekologis dan pengurangan suhu, namun sama sekali tidak membandingkan biaya perawatan koridor satwa liar dengan taman biasa.',
    trapExplanation: 'Jebakan Not Given sering kali memberikan perbandingan yang tampak logis ("larger budget") tetapi sama sekali tidak dibahas oleh penulis.',
    keywordHint: 'budget'
  },
  {
    id: 'tfng-08',
    type: 'TFNG',
    passageId: 'p-03',
    questionText: 'According to UNESCO, millions of children were excluded from digital learning programs during the pandemic.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'True',
    strategyWalkthrough: 'Cari "UNESCO" dan "remote learning". Paragraf kedua menyebutkan "UNESCO estimates that nearly 463 million children globally could not be reached by digital and broadcast remote learning programs".',
    keywordHint: 'UNESCO'
  },
  {
    id: 'tfng-09',
    type: 'TFNG',
    passageId: 'p-03',
    questionText: 'Students in marginalized communities adapted to digital learning faster than those in well-resourced environments.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'False',
    strategyWalkthrough: 'Cari kata "marginalized communities". Teks mengatakan sebaliknya: "Students in well-resourced environments adapted swiftly, whereas those in marginalized communities faced substantial learning losses".',
    trapExplanation: 'Pernyataan ini memutarbalikkan fakta yang ada di teks.',
    keywordHint: 'marginalized communities'
  },
  {
    id: 'tfng-10',
    type: 'TFNG',
    passageId: 'p-03',
    questionText: 'Educators gained more technical skills from remote learning than their students did.',
    options: ['True', 'False', 'Not Given'],
    correctAnswer: 'Not Given',
    strategyWalkthrough: 'Cari perbandingan antara guru ("educators") dan murid ("students"). Paragraf terakhir menyebutkan "educational technologists continue to debate... whether teachers or students benefited more". Karena ini masih diperdebatkan dan belum ada kesimpulan, kita tidak tahu jawabannya.',
    trapExplanation: 'Teks menyebutkan perdebatan mengenai siapa yang lebih diuntungkan, namun tidak memberikan jawaban atau simpulan akhir. Maka, jawabannya Not Given.',
    keywordHint: 'benefited more'
  },
  // Matching Headings (p-04)
  {
    id: 'mh-01',
    type: 'MatchingHeadings',
    passageId: 'p-04',
    questionText: 'Which heading best matches Paragraph A of Passage p-04?',
    options: [
      'A. The scientific mechanisms underlying avoidance behaviour',
      'B. Categorising the different profiles of those who delay',
      'C. What procrastination is and is not',
      'D. Practical methods supported by psychological research',
      'E. The measurable consequences on academic performance',
      'F. Cultural differences in time management attitudes',
      'G. The economic cost of workplace procrastination'
    ],
    correctAnswer: 'C. What procrastination is and is not',
    strategyWalkthrough: 'Baca kalimat pertama dan kedua Paragraf A. Paragraf ini mendefinisikan prokrastinasi ("defined as the voluntary, irrational delay...") dan membedakannya dari kemalasan ("Unlike laziness..."). Ini sangat cocok dengan judul C.',
    trapExplanation: 'Pilihan lain tidak mencakup inti definisi dan perbandingan yang diberikan di seluruh paragraf.'
  },
  {
    id: 'mh-02',
    type: 'MatchingHeadings',
    passageId: 'p-04',
    questionText: 'Which heading best matches Paragraph B of Passage p-04?',
    options: [
      'A. The scientific mechanisms underlying avoidance behaviour',
      'B. Categorising the different profiles of those who delay',
      'C. What procrastination is and is not',
      'D. Practical methods supported by psychological research',
      'E. The measurable consequences on academic performance',
      'F. Cultural differences in time management attitudes',
      'G. The economic cost of workplace procrastination'
    ],
    correctAnswer: 'A. The scientific mechanisms underlying avoidance behaviour',
    strategyWalkthrough: 'Cari fokus utama Paragraf B. Paragraf ini membahas "neuroscientific research", "MRI scans", dan pertempuran antara "prefrontal cortex" dan "limbic system". Ini semua adalah mekanisme biologis/ilmiah.',
    trapExplanation: 'Tidak ada pilihan lain yang menyebutkan aspek biologi atau sains.'
  },
  {
    id: 'mh-03',
    type: 'MatchingHeadings',
    passageId: 'p-04',
    questionText: 'Which heading best matches Paragraph C of Passage p-04?',
    options: [
      'A. The scientific mechanisms underlying avoidance behaviour',
      'B. Categorising the different profiles of those who delay',
      'C. What procrastination is and is not',
      'D. Practical methods supported by psychological research',
      'E. The measurable consequences on academic performance',
      'F. Cultural differences in time management attitudes',
      'G. The economic cost of workplace procrastination'
    ],
    correctAnswer: 'B. Categorising the different profiles of those who delay',
    strategyWalkthrough: 'Perhatikan daftar yang diberikan di Paragraf C: "perfectionist", "dreamer", "defier", "crisis-maker", dan "overdoer". Ini semua adalah kategori atau profil orang yang suka menunda.',
    trapExplanation: 'Sangat jelas dari struktur kalimatnya bahwa penulis sedang melakukan kategorisasi.'
  },
  {
    id: 'mh-04',
    type: 'MatchingHeadings',
    passageId: 'p-04',
    questionText: 'Which heading best matches Paragraph D of Passage p-04?',
    options: [
      'A. The scientific mechanisms underlying avoidance behaviour',
      'B. Categorising the different profiles of those who delay',
      'C. What procrastination is and is not',
      'D. Practical methods supported by psychological research',
      'E. The measurable consequences on academic performance',
      'F. Cultural differences in time management attitudes',
      'G. The economic cost of workplace procrastination'
    ],
    correctAnswer: 'E. The measurable consequences on academic performance',
    strategyWalkthrough: 'Paragraf D secara spesifik membahas "educational settings", "academic performance", dan dampaknya terhadap nilai ("impacts their grades"). Cocok dengan heading E.',
    trapExplanation: 'Jangan terkecoh dengan heading G (economic cost) karena fokus di sini adalah pendidikan/akademik, bukan tempat kerja.'
  },
  {
    id: 'mh-05',
    type: 'MatchingHeadings',
    passageId: 'p-04',
    questionText: 'Which heading best matches Paragraph E of Passage p-04?',
    options: [
      'A. The scientific mechanisms underlying avoidance behaviour',
      'B. Categorising the different profiles of those who delay',
      'C. What procrastination is and is not',
      'D. Practical methods supported by psychological research',
      'E. The measurable consequences on academic performance',
      'F. Cultural differences in time management attitudes',
      'G. The economic cost of workplace procrastination'
    ],
    correctAnswer: 'D. Practical methods supported by psychological research',
    strategyWalkthrough: 'Paragraf E membahas "evidence-based interventions" seperti "implementation intentions" dan "temptation bundling". Ini adalah metode praktis untuk mengatasi prokrastinasi.',
    trapExplanation: 'Kata "methods" dalam judul D merangkum strategi-strategi yang dijelaskan di paragraf.'
  },
  // Matching Headings (p-05)
  {
    id: 'mh-06',
    type: 'MatchingHeadings',
    passageId: 'p-05',
    questionText: 'Which heading best matches Paragraph A of Passage p-05?',
    options: [
      'A. From concept to commercial viability',
      'B. Harnessing aerodynamics from nature\'s pioneers',
      'C. Resisting microbial colonisation through structural design',
      'D. Eliminating surface contamination naturally',
      'E. Streamlining transport through avian anatomy',
      'F. Marine organisms as models for underwater robotics',
      'G. Plant root systems inspiring deep foundation engineering'
    ],
    correctAnswer: 'B. Harnessing aerodynamics from nature\'s pioneers',
    strategyWalkthrough: 'Paragraf A menceritakan sejarah awal ("Early pioneers") penerbangan seperti Wright Brothers yang meneliti burung ("aerodynamics of bird flight"). Cocok dengan heading B.',
    trapExplanation: 'Distractor F dan G menyebutkan alam tetapi spesifik ke robot bawah air dan akar tanaman yang tidak dibahas di teks.'
  },
  {
    id: 'mh-07',
    type: 'MatchingHeadings',
    passageId: 'p-05',
    questionText: 'Which heading best matches Paragraph B of Passage p-05?',
    options: [
      'A. From concept to commercial viability',
      'B. Harnessing aerodynamics from nature\'s pioneers',
      'C. Resisting microbial colonisation through structural design',
      'D. Eliminating surface contamination naturally',
      'E. Streamlining transport through avian anatomy',
      'F. Marine organisms as models for underwater robotics',
      'G. Plant root systems inspiring deep foundation engineering'
    ],
    correctAnswer: 'C. Resisting microbial colonisation through structural design',
    strategyWalkthrough: 'Paragraf B membahas struktur mikro kulit hiu yang "inhibits the attachment and growth of bacteria". Ini sejalan dengan "Resisting microbial colonisation".',
    trapExplanation: 'Jangan tertukar dengan D. Paragraf B fokus pada mikroba (antibacterial), sedangkan D lebih ke "self-cleaning" (efek lotus).'
  },
  {
    id: 'mh-08',
    type: 'MatchingHeadings',
    passageId: 'p-05',
    questionText: 'Which heading best matches Paragraph C of Passage p-05?',
    options: [
      'A. From concept to commercial viability',
      'B. Harnessing aerodynamics from nature\'s pioneers',
      'C. Resisting microbial colonisation through structural design',
      'D. Eliminating surface contamination naturally',
      'E. Streamlining transport through avian anatomy',
      'F. Marine organisms as models for underwater robotics',
      'G. Plant root systems inspiring deep foundation engineering'
    ],
    correctAnswer: 'E. Streamlining transport through avian anatomy',
    strategyWalkthrough: 'Paragraf C membahas kereta Shinkansen (transport) yang hidungnya didesain meniru paruh burung kingfisher (avian anatomy).',
    trapExplanation: 'Heading ini paling spesifik merangkum ide kereta api dan burung kingfisher.'
  },
  {
    id: 'mh-09',
    type: 'MatchingHeadings',
    passageId: 'p-05',
    questionText: 'Which heading best matches Paragraph D of Passage p-05?',
    options: [
      'A. From concept to commercial viability',
      'B. Harnessing aerodynamics from nature\'s pioneers',
      'C. Resisting microbial colonisation through structural design',
      'D. Eliminating surface contamination naturally',
      'E. Streamlining transport through avian anatomy',
      'F. Marine organisms as models for underwater robotics',
      'G. Plant root systems inspiring deep foundation engineering'
    ],
    correctAnswer: 'D. Eliminating surface contamination naturally',
    strategyWalkthrough: 'Paragraf D membahas efek Lotus ("self-cleaning properties") di mana air menggulung membawa kotoran ("collecting dirt and debris"). Ini maknanya sama dengan "Eliminating surface contamination".',
    trapExplanation: 'Heading C mungkin mengecoh, tetapi Paragraf D tidak membahas mikroba melainkan debu/kotoran.'
  },
  {
    id: 'mh-10',
    type: 'MatchingHeadings',
    passageId: 'p-05',
    questionText: 'Which heading best matches Paragraph E of Passage p-05?',
    options: [
      'A. From concept to commercial viability',
      'B. Harnessing aerodynamics from nature\'s pioneers',
      'C. Resisting microbial colonisation through structural design',
      'D. Eliminating surface contamination naturally',
      'E. Streamlining transport through avian anatomy',
      'F. Marine organisms as models for underwater robotics',
      'G. Plant root systems inspiring deep foundation engineering'
    ],
    correctAnswer: 'A. From concept to commercial viability',
    strategyWalkthrough: 'Paragraf E membahas masa depan dan aplikasi komersial biomimikri ("commercial applications of biomimicry are expanding rapidly").',
    trapExplanation: 'Pilihan ini merangkum penerapan ide alam menjadi inovasi yang dijual di dunia nyata.'
  },
  // Sentence Completion (p-06)
  {
    id: 'sc-01',
    type: 'SentenceCompletion',
    passageId: 'p-06',
    questionText: 'Due to dramatic cost reductions, ____________ are now the primary choice for stabilizing power grids over short periods.',
    correctAnswer: 'lithium-ion batteries',
    strategyWalkthrough: 'Cari kata "cost reductions" dan "grid stabilization" di teks. Teks menyebutkan "Currently, lithium-ion batteries dominate the market for short-term grid stabilization... due to dramatic cost reductions". Ambil kata benda yang tepat.',
    trapExplanation: 'Ingat batas kata maksimal 3 kata — jangan paraphrase dan tulis sama persis dengan teks (lithium-ion batteries).',
    keywordHint: 'cost reductions'
  },
  {
    id: 'sc-02',
    type: 'SentenceCompletion',
    passageId: 'p-06',
    questionText: 'The cost of installing large-scale storage systems has fallen by ____________ since the year 2010.',
    correctAnswer: '89%',
    strategyWalkthrough: 'Cari tahun "2010". Teks menyatakan "grid-scale storage costs have plummeted by an astonishing 89% since 2010". Kata yang hilang adalah persentasenya.',
    trapExplanation: 'Pastikan memasukkan simbol persen agar maknanya lengkap.',
    keywordHint: '2010'
  },
  {
    id: 'sc-03',
    type: 'SentenceCompletion',
    passageId: 'p-06',
    questionText: 'Despite the rise of chemical alternatives, the majority of global energy reserves still rely on ____________.',
    correctAnswer: 'pumped hydro storage',
    strategyWalkthrough: 'Cari kata kunci "global energy reserves". Paragraf 2 menyatakan "...pumped hydro storage remains the workhorse of global energy reserves".',
    trapExplanation: 'Ingat batas kata maksimal 3 kata. "pumped hydro" atau "pumped hydro storage" sama-sama benar, tapi "pumped hydro storage" paling pas secara tata bahasa.',
    keywordHint: 'global energy reserves'
  },
  {
    id: 'sc-04',
    type: 'SentenceCompletion',
    passageId: 'p-06',
    questionText: 'One advantage of flow batteries is that they keep their liquid electrolytes in ____________, avoiding typical cell degradation.',
    correctAnswer: 'external tanks',
    strategyWalkthrough: 'Cari kata kunci "flow batteries" dan "liquid electrolytes". Teks menyebutkan "flow batteries store energy in liquid electrolytes contained in external tanks".',
    trapExplanation: 'Ingat batas kata maksimal 3 kata — jangan paraphrase.',
    keywordHint: 'liquid electrolytes'
  },
  {
    id: 'sc-05',
    type: 'SentenceCompletion',
    passageId: 'p-06',
    questionText: 'A major challenge for compressed air energy storage is increasing the ____________ of its thermodynamic cycle.',
    correctAnswer: 'round-trip efficiency',
    strategyWalkthrough: 'Cari kata "compressed air" dan "thermodynamic". Di akhir paragraf terakhir tertulis "...improving the round-trip efficiency of the thermodynamic process remains a critical hurdle".',
    trapExplanation: 'Ingat batas kata maksimal 3 kata. Jangan tambahkan kata tidak perlu seperti "the".',
    keywordHint: 'thermodynamic'
  },
  // Summary Completion (p-07)
  {
    id: 'smc-01',
    type: 'SummaryCompletion',
    passageId: 'p-07',
    questionText: 'Throughout history, cartography has evolved from ancient visualizations, such as the [BLANK] mapping the world as a flat disk, to sophisticated technological systems.',
    options: ['Babylonian clay tablet', 'Ptolemy', 'Mercator projection', 'Al-Idrisi', 'GIS technology', 'Age of Discovery', 'satellite imagery', 'maritime navigation'],
    correctAnswer: 'Babylonian clay tablet',
    strategyWalkthrough: 'Cari deskripsi mengenai peta tertua yang menggambarkan dunia sebagai "flat disk" atau cakram datar. Paragraf pertama mengidentifikasi ini sebagai peninggalan dari Babilonia.',
    keywordHint: 'flat disk'
  },
  {
    id: 'smc-02',
    type: 'SummaryCompletion',
    passageId: 'p-07',
    questionText: 'A major structural improvement was introduced by [BLANK], who devised an early grid system that paved the way for modern coordinates.',
    options: ['Babylonian clay tablet', 'Ptolemy', 'Mercator projection', 'Al-Idrisi', 'GIS technology', 'Age of Discovery', 'satellite imagery', 'maritime navigation'],
    correctAnswer: 'Ptolemy',
    strategyWalkthrough: 'Cari nama tokoh di era klasik yang memperkenalkan "grid system". Teks menyebutkan "Greco-Roman scholar Ptolemy... introduced a systematic approach to mapmaking by implementing a grid system".',
    keywordHint: 'grid system'
  },
  {
    id: 'smc-03',
    type: 'SummaryCompletion',
    passageId: 'p-07',
    questionText: 'During the Middle Ages, cartographers like [BLANK] continued to refine geographic knowledge by combining classical texts with actual merchant observations.',
    options: ['Babylonian clay tablet', 'Ptolemy', 'Mercator projection', 'Al-Idrisi', 'GIS technology', 'Age of Discovery', 'satellite imagery', 'maritime navigation'],
    correctAnswer: 'Al-Idrisi',
    strategyWalkthrough: 'Cari tokoh pada masa abad pertengahan ("medieval period") yang menggunakan catatan saudagar ("merchant accounts"). Teks menyebut nama "Al-Idrisi".',
    keywordHint: 'merchant accounts'
  },
  {
    id: 'smc-04',
    type: 'SummaryCompletion',
    passageId: 'p-07',
    questionText: 'Later, the demand for reliable [BLANK] led to new mathematical approaches to mapmaking.',
    options: ['Babylonian clay tablet', 'Ptolemy', 'Mercator projection', 'Al-Idrisi', 'GIS technology', 'Age of Discovery', 'satellite imagery', 'maritime navigation'],
    correctAnswer: 'maritime navigation',
    strategyWalkthrough: 'Lihat paragraf ketiga. Karena adanya "Age of Discovery", dibutuhkan peta laut untuk mendukung navigasi kelautan. Teks menyatakan Mercator projection menjadi "indispensable tool for maritime navigation".',
    keywordHint: 'mathematical'
  },
  {
    id: 'smc-05',
    type: 'SummaryCompletion',
    passageId: 'p-07',
    questionText: 'In the present day, traditional paper mapping has been largely replaced by [BLANK], which layers complex spatial data to assist in planning and management.',
    options: ['Babylonian clay tablet', 'Ptolemy', 'Mercator projection', 'Al-Idrisi', 'GIS technology', 'Age of Discovery', 'satellite imagery', 'maritime navigation'],
    correctAnswer: 'GIS technology',
    strategyWalkthrough: 'Baca bagian akhir teks yang membahas masa modern. Teks menyebutkan bahwa pemetaan tradisional telah sepenuhnya digantikan oleh "Geographic Information Systems (GIS) technology".',
    keywordHint: 'modern cartographers'
  },
  // Matching Features (p-08)
  {
    id: 'mf-01',
    type: 'MatchingFeatures',
    passageId: 'p-08',
    questionText: 'Believes that automation will completely change the nature of human tasks rather than simply destroying jobs.',
    options: ['A. Professor Chen', 'B. Dr. Martinez', 'C. Professor Okafor'],
    correctAnswer: 'C. Professor Okafor',
    strategyWalkthrough: 'Cari ide tentang perubahan sifat pekerjaan. Professor Okafor menyatakan bahwa otomatisasi "will primarily redefine job descriptions rather than eliminate them entirely".',
    keywordHint: 'redefine'
  },
  {
    id: 'mf-02',
    type: 'MatchingFeatures',
    passageId: 'p-08',
    questionText: 'Argues that historical patterns of job creation will repeat as increased productivity lowers consumer prices.',
    options: ['A. Professor Chen', 'B. Dr. Martinez', 'C. Professor Okafor'],
    correctAnswer: 'A. Professor Chen',
    strategyWalkthrough: 'Cari referensi mengenai sejarah dan penurunan harga ("lower prices"). Professor Chen mengemukakan argumen bahwa penghematan biaya "inevitably lead to lower prices for consumers... stimulates job creation".',
    keywordHint: 'lower prices'
  },
  {
    id: 'mf-03',
    type: 'MatchingFeatures',
    passageId: 'p-08',
    questionText: 'Warns that artificial intelligence poses a unique and unprecedented threat to middle-class professionals.',
    options: ['A. Professor Chen', 'B. Dr. Martinez', 'C. Professor Okafor'],
    correctAnswer: 'B. Dr. Martinez',
    strategyWalkthrough: 'Cari pernyataan tentang ancaman unik (unprecedented threat) bagi kelas menengah. Dr. Martinez menyatakan bahwa algoritma cerdas secara langsung "threaten the middle-class professional sector".',
    keywordHint: 'middle-class'
  },
  {
    id: 'mf-04',
    type: 'MatchingFeatures',
    passageId: 'p-08',
    questionText: 'Suggests that skills like emotional intelligence and ethical judgment will become highly valued.',
    options: ['A. Professor Chen', 'B. Dr. Martinez', 'C. Professor Okafor'],
    correctAnswer: 'C. Professor Okafor',
    strategyWalkthrough: 'Cari kata "emotional intelligence". Professor Okafor menyoroti bahwa tugas yang membutuhkan "high emotional intelligence, complex ethical judgment... cannot be replicated".',
    keywordHint: 'emotional intelligence'
  },
  {
    id: 'mf-05',
    type: 'MatchingFeatures',
    passageId: 'p-08',
    questionText: 'Supports the introduction of a guaranteed minimum income to protect citizens from extreme inequality.',
    options: ['A. Professor Chen', 'B. Dr. Martinez', 'C. Professor Okafor'],
    correctAnswer: 'B. Dr. Martinez',
    strategyWalkthrough: 'Cari ide tentang jaminan pendapatan ("minimum income"). Dr. Martinez mengadvokasi penerapan "universal basic income (UBI) as a necessary socioeconomic buffer".',
    keywordHint: 'basic income'
  }
];
