'use client';

import React, { useState } from 'react';
import { PenTool, Sparkles, Clock, BookOpen, Award, CheckCircle, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { WritingRubric } from '@/components/exercises/WritingRubric';
import { WritingRubricExercise } from '@/types/exercise';

const WRITING_PROMPTS: WritingRubricExercise[] = [
  // 1. IELTS Task 2: Discuss Both Views
  {
    id: 'wp-ielts-task2-1',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Task 2: Technology & Human Connection',
    instruction: 'Tulis esai argumentatif minimal 250 kata dalam waktu 40 menit.',
    taskType: 'IELTS-Task-2',
    prompt: 'Some people argue that technological advancements have made people more socially isolated, while others believe technology brings communities closer together. Discuss both views and give your own opinion.',
    suggestedTimeMin: 40,
    minWordCount: 250,
    maxWordCount: 350,
    criteria: [
      {
        id: 'tr',
        name: 'Task Response',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Fully addresses both views and states a well-developed, nuanced position throughout.' },
          { score: 7, label: 'Band 7', description: 'Addresses both perspectives with clear central points and supporting explanations.' },
          { score: 5, label: 'Band 5', description: 'Addresses the topic only partially or one-sidedly.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Effortless paragraphing and varied linking phrases.' },
          { score: 7, label: 'Band 7', description: 'Clear paragraph progression with appropriate cohesive devices.' },
          { score: 5, label: 'Band 5', description: 'Inadequate or repetitive linking words.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Sophisticated academic vocabulary with natural collocations.' },
          { score: 7, label: 'Band 7', description: 'Good lexical range with awareness of style and collocation.' },
          { score: 5, label: 'Band 5', description: 'Limited vocabulary with noticeable spelling slips.' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Wide range of complex sentence structures with rare minor slips.' },
          { score: 7, label: 'Band 7', description: 'Frequent error-free complex sentences.' },
          { score: 5, label: 'Band 5', description: 'Limited complex structures with recurring errors.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 8.5 Sample Model',
      text: `The influence of digital communication technology on interpersonal relationships remains a subject of intense global debate. While critics argue that virtual interaction cultivates alienation, proponents contend that digital platforms bridge geographical divides. In my view, while excessive digital dependency can erode intimate face-to-face bonds, technology fundamentally enhances human connectivity when utilized mindfully.

On the one hand, excessive reliance on screen-based interactions can precipitate social isolation. When individuals replace authentic physical encounters with superficial virtual validation, their capacity for deep empathetic dialogue diminishes. For instance, studies among adolescents correlate excessive social media consumption with heightened feelings of loneliness and anxiety. Consequently, passive scrolling frequently replaces meaningful communal participation.

On the other hand, technological platforms empower individuals to forge and maintain vital connections across vast geographical barriers. Digital networks facilitate cross-border scholarly collaborations, support diaspora communities in preserving cultural ties, and provide marginalized individuals with supportive peer circles. Furthermore, modern video conferencing enables families separated across continents to sustain immediate emotional intimacy.

In conclusion, while unchecked technological consumption poses genuine risks of social detachment, its capacity to unite disparate communities is profound. By fostering disciplined digital habits, individuals can maximize communal connectivity without sacrificing the richness of direct interpersonal encounters.`,
      analysis: [
        'Nuanced balanced introduction presenting clear personal viewpoint.',
        'Paragraph 2 examines the isolation perspective with psychological evidence.',
        'Paragraph 3 explores global connectivity and emotional closeness.',
        'Sophisticated vocabulary: "precipitate social isolation", "superficial virtual validation", "disparate communities".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Precipitate alienation', definition: 'Memicu perasaan keterasingan sosial', example: 'Excessive screen time may precipitate alienation.' },
      { term: 'Disparate communities', definition: 'Komunitas yang terpisah atau berbeda-beda', example: 'Digital tools unite disparate communities globally.' },
      { term: 'Empathetic dialogue', definition: 'Percakapan penuh empati dan keterhubungan mendalam', example: 'Direct physical encounters foster empathetic dialogue.' },
    ],
    points: 30,
  },

  // 2. IELTS Task 2: Agree / Disagree
  {
    id: 'wp-ielts-task2-2',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Task 2: Higher Education Tuition Subsidies',
    instruction: 'Tulis esai argumentatif minimal 250 kata dalam waktu 40 menit.',
    taskType: 'IELTS-Task-2',
    prompt: 'University education should be funded entirely by the state and provided free of charge to all qualifying citizens. To what extent do you agree or disagree with this statement?',
    suggestedTimeMin: 40,
    minWordCount: 250,
    maxWordCount: 350,
    criteria: [
      {
        id: 'tr',
        name: 'Task Response',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Clear, consistent, well-supported stance maintained throughout the essay.' },
          { score: 7, label: 'Band 7', description: 'Clear position with relevant supporting arguments.' },
          { score: 5, label: 'Band 5', description: 'Unclear stance or poorly developed reasons.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Seamless logical transitions and natural topic progression.' },
          { score: 7, label: 'Band 7', description: 'Logically organized paragraphs with cohesive devices.' },
          { score: 5, label: 'Band 5', description: 'Overused or mechanical transitions.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Precise academic terminology regarding economics and education.' },
          { score: 7, label: 'Band 7', description: 'Varied academic vocabulary with few inaccuracies.' },
          { score: 5, label: 'Band 5', description: 'Repetitive basic wording.' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Full flexibility of complex clauses and conditional structures.' },
          { score: 7, label: 'Band 7', description: 'Accurate mix of complex and compound sentences.' },
          { score: 5, label: 'Band 5', description: 'Noticeable grammar slips.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 8.5 Sample Model',
      text: `The question of whether tertiary education should be fully subsidized by national governments is central to contemporary socioeconomic discourse. I completely agree that state-funded university tuition is a vital public investment that fosters social mobility, accelerates macroeconomic productivity, and dismantles hereditary inequality.

Primarily, abolishing university tuition democratizes intellectual advancement. When higher education depends on personal financial capacity, intellectually gifted students from underprivileged backgrounds are systematically excluded. By providing universal free tertiary access based solely on academic merit, nations cultivate human capital that would otherwise remain untapped. For example, Scandinavian countries that offer free university education consistently exhibit high social mobility and robust technological innovation indices.

Furthermore, state-funded higher education generates exponential fiscal returns. University graduates contribute significantly higher income taxes over their lifetimes and drive knowledge-intensive industries such as biotechnology, quantum engineering, and public health. Consequently, the initial public expenditure allocated to tuition subsidies is effectively recouped through sustained economic growth and reduced reliance on social welfare systems.

In conclusion, viewing university tuition as an individual commodity rather than a public good undermines national progress. State-funded higher education is not a fiscal burden, but rather an essential catalyst for equitable economic prosperity.`,
      analysis: [
        'Unambiguous thesis statement in introduction ("I completely agree").',
        'Body paragraph 1 focuses on social equity and meritocracy.',
        'Body paragraph 2 develops macroeconomic fiscal returns with concrete examples.',
        'Formal collocations: "democratizes intellectual advancement", "reaped through sustained economic growth", "catalyst for equitable prosperity".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Democratize access', definition: 'Membuka akses secara adil bagi seluruh lapisan masyarakat', example: 'State funding democratizes access to tertiary education.' },
      { term: 'Recoup expenditure', definition: 'Memperoleh kembali modal pengeluaran melalui hasil positif', example: 'Investments in science are recouped through productivity.' },
      { term: 'Social mobility', definition: 'Kemampuan individu berpindah ke kelas sosial-ekonomi yang lebih baik', example: 'Merit-based scholarships accelerate social mobility.' },
    ],
    points: 30,
  },

  // 3. IELTS Task 2: Problem & Solution
  {
    id: 'wp-ielts-task2-3',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Task 2: Urbanization & Megacity Strain',
    instruction: 'Tulis esai problem-solution minimal 250 kata dalam waktu 40 menit.',
    taskType: 'IELTS-Task-2',
    prompt: 'In many nations, rapid migration from rural areas to major metropolitan cities is creating severe socioeconomic and environmental strains. What are the primary causes of this phenomenon, and what effective measures can governments implement to resolve it?',
    suggestedTimeMin: 40,
    minWordCount: 250,
    maxWordCount: 350,
    criteria: [
      {
        id: 'tr',
        name: 'Task Response',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Fully explores both roots causes and actionable, viable policy solutions.' },
          { score: 7, label: 'Band 7', description: 'Clearly explains causes and relevant solutions.' },
          { score: 5, label: 'Band 5', description: 'Presents vague or disconnected solutions.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Logical cause-to-solution progression across body paragraphs.' },
          { score: 7, label: 'Band 7', description: 'Clear topic sentences and linking devices.' },
          { score: 5, label: 'Band 5', description: 'Weak paragraph transitions.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Advanced urban planning and demographic lexicon.' },
          { score: 7, label: 'Band 7', description: 'Appropriate range of formal vocabulary.' },
          { score: 5, label: 'Band 5', description: 'Basic and repetitive phrasing.' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Error-free complex sentence structures and nominalizations.' },
          { score: 7, label: 'Band 7', description: 'Good variety of compound and complex sentences.' },
          { score: 5, label: 'Band 5', description: 'Persistent minor errors in complex clauses.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 8.5 Sample Model',
      text: `Unprecedented rural-to-urban migration has placed immense strain on municipal infrastructure, housing affordability, and environmental equilibrium across the developing world. This essay examines the key catalysts driving this demographic shift and proposes strategic governmental interventions to alleviate urban congestion.

The primary impetus behind urban migration is the stark disparity in economic opportunity and public infrastructure between metropolitan hubs and rural hinterlands. Peripheral regions frequently suffer from agrarian job scarcity, substandard medical facilities, and limited secondary educational institutions. Consequently, younger demographics feel compelled to migrate to capital cities where multinational investment, high-speed digital connectivity, and diversified service sectors offer upward socioeconomic mobility.

To mitigate this urban bottleneck, policymakers must pursue aggressive regional decentralization. First, governments should incentivize corporate entities to establish regional headquarters outside primary metropolises through tax holidays and subsidized logistics corridors. Second, substantial state investment must be channeled into rural telecommunications and high-speed rail networks, allowing individuals to engage in telecommuting without physically relocating. Upgrading provincial hospitals and vocational colleges would further neutralize the necessity for urban relocation.

In conclusion, rural migration stems from systemic infrastructural disparities. By implementing economic decentralization and bolstering provincial amenities, governments can achieve balanced regional development and relieve metropolitan overpopulation.`,
      analysis: [
        'Paragraph 2 dissects core drivers: agrarian job scarcity and infrastructure imbalance.',
        'Paragraph 3 proposes actionable solutions: corporate tax holidays, regional transit, and provincial amenities.',
        'High-tier vocabulary: "agrarian job scarcity", "mitigate urban bottleneck", "infrastructural disparities".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Infrastructural disparities', definition: 'Kesenjangan pembangunan fasilitas dasar antar wilayah', example: 'Bridging infrastructural disparities prevents overpopulation.' },
      { term: 'Regional decentralization', definition: 'Penyebaran pusat industri dan ekonomi ke luar kota utama', example: 'Decentralization relieves pressure on capital cities.' },
    ],
    points: 30,
  },

  // 4. IELTS Task 1: Line Graph Trend
  {
    id: 'wp-ielts-task1-1',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Task 1: Global Renewable Energy Adoption (2010–2025)',
    instruction: 'Tulis laporan data statistik minimal 150 kata dalam waktu 20 menit.',
    taskType: 'IELTS-Task-1',
    prompt: 'The line graph illustrates the proportion of total electricity generated from three distinct renewable sources (Solar, Wind, and Hydroelectric) in a European nation between 2010 and 2025.',
    suggestedTimeMin: 20,
    minWordCount: 150,
    maxWordCount: 220,
    criteria: [
      {
        id: 'ta',
        name: 'Task Achievement',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Comprehensive overview with accurate key features and statistical milestones.' },
          { score: 7, label: 'Band 7', description: 'Clear overview and adequate key trend description.' },
          { score: 5, label: 'Band 5', description: 'Missing overview or inaccuracies in data reading.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Logical grouping by trend direction and comparative periods.' },
          { score: 7, label: 'Band 7', description: 'Well-structured paragraphs with clear connectors.' },
          { score: 5, label: 'Band 5', description: 'List-like data reporting without cohesive synthesis.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Wide range of precise trend verbs, nouns, and adverbs.' },
          { score: 7, label: 'Band 7', description: 'Appropriate trend vocabulary with minimal repetition.' },
          { score: 5, label: 'Band 5', description: 'Repetitive verbs (increased/decreased).' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Full mastery of passive, comparative, and complex temporal clauses.' },
          { score: 7, label: 'Band 7', description: 'Frequent error-free sentences with varied tenses.' },
          { score: 5, label: 'Band 5', description: 'Grammar errors in prepositional time markers.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 9.0 Benchmark Model',
      text: `The line graph delineates the percentage of electrical power generated from solar, wind, and hydroelectric installations in a European country over a fifteen-year period from 2010 to 2025.

Overall, it is immediately apparent that solar energy experienced the most dramatic expansion, eventually surpassing hydroelectric power to become the dominant source by 2025. In contrast, while hydroelectric output plateaued after initial dominance, wind energy registered a steady upward trajectory throughout the timeframe.

In 2010, hydroelectric generation was by far the leading contributor, accounting for nearly 40% of national electricity, whereas wind and solar power contributed modest shares of 12% and 5% respectively. Over the subsequent decade, hydroelectric output fluctuated marginally before stabilizing at approximately 35% between 2020 and 2025.

Conversely, solar energy witnessed exponential growth. After climbing steadily to 18% in 2018, it surged sharply over the final seven years, peaking at an unprecedented 44% in 2025. Concurrently, wind power grew steadily at a consistent rate of 2% annually, culminating in 28% by the end of the observation window.`,
      analysis: [
        'Introductory paraphrase with precise formal vocabulary ("delineates the percentage...").',
        'Strong overview paragraph highlighting dominant changes and general trajectory.',
        'Paragraph 3 details initial baseline figures; Paragraph 4 contrasts exponential expansion.',
        'High-yield trend verbs: "surpassed", "plateaued", "registered a steady trajectory", "surged sharply".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Surged sharply', definition: 'Melonjak naik dengan sangat tajam dan cepat', example: 'Solar output surged sharply between 2020 and 2025.' },
      { term: 'Plateaued at', definition: 'Mencapai titik datar stabil setelah fase kenaikan/penurunan', example: 'Hydroelectric shares plateaued at 35%.' },
      { term: 'Delineates', definition: 'Menggambarkan atau memetakan rincian secara visual', example: 'The graph delineates changes in electrical generation.' },
    ],
    points: 25,
  },

  // 5. IELTS Task 1: Process Diagram
  {
    id: 'wp-ielts-task1-2',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'IELTS Task 1: Industrial Seawater Desalination Process',
    instruction: 'Tulis laporan tahapan proses teknis minimal 150 kata dalam waktu 20 menit.',
    taskType: 'IELTS-Task-1',
    prompt: 'The diagram illustrates the sequential stages involved in the reverse-osmosis industrial process of producing potable drinking water from seawater.',
    suggestedTimeMin: 20,
    minWordCount: 150,
    maxWordCount: 220,
    criteria: [
      {
        id: 'ta',
        name: 'Task Achievement',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Chronologically recounts all process stages using impersonal passive voice.' },
          { score: 7, label: 'Band 7', description: 'Covers major stages accurately.' },
          { score: 5, label: 'Band 5', description: 'Omits key stages or confuses sequence.' },
        ],
      },
      {
        id: 'cc',
        name: 'Coherence and Cohesion',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Smooth sequential linking words (initially, subsequently, following this).' },
          { score: 7, label: 'Band 7', description: 'Good sequential flow.' },
          { score: 5, label: 'Band 5', description: 'Abrupt transitions between steps.' },
        ],
      },
      {
        id: 'lr',
        name: 'Lexical Resource',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Precise technical process vocabulary.' },
          { score: 7, label: 'Band 7', description: 'Adequate process terms.' },
          { score: 5, label: 'Band 5', description: 'Informal terminology.' },
        ],
      },
      {
        id: 'gra',
        name: 'Grammatical Range and Accuracy',
        weightPercent: 25,
        descriptors: [
          { score: 9, label: 'Band 9', description: 'Mastery of present passive structures and participle clauses.' },
          { score: 7, label: 'Band 7', description: 'Accurate passive sentences.' },
          { score: 5, label: 'Band 5', description: 'Errors in passive verb forms.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Band 9.0 Benchmark Model',
      text: `The diagram illustrates the multistage reverse-osmosis procedure employed to convert raw ocean water into purified potable water for domestic consumption.

Overall, the manufacturing sequence comprises four primary phases: raw intake and primary filtration, high-pressure semi-permeable membrane separation, chemical remineralization, and final distribution to municipal reservoirs.

Initially, seawater is extracted from coastal intake channels and routed through coarse mechanical filters to remove suspended solids, algae, and particulate matter. Subsequently, the pre-treated brine is pressurized by heavy-duty turbines and forced through specialized microscopic semi-permeable membranes. In this crucial stage, dissolved sodium and mineral salts are isolated and returned to the ocean as concentrated effluent, while desalinated freshwater permeates through the barrier.

Following membrane filtration, the purified water undergoes post-treatment disinfection where chlorine and essential dietary minerals, such as calcium and magnesium, are systematically reintroduced to achieve potability. Finally, the treated water is pumped into municipal storage silos, ready for distribution across the urban utility grid.`,
      analysis: [
        'Impersonal passive structures throughout ("is extracted", "is pressurized", "is routed").',
        'Clear overview defining the 4 main production stages.',
        'Precise sequential transitions: "Initially", "Subsequently", "In this crucial stage", "Following membrane filtration", "Finally".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Semi-permeable membrane', definition: 'Membran semi-permeabel berpori mikroskopis', example: 'Brine is forced through semi-permeable membranes.' },
      { term: 'Potable water', definition: 'Air murni yang layak dan aman diminum manusia', example: 'Desalination produces potable water for urban centers.' },
      { term: 'Effluent', definition: 'Limbah cair pekat yang dialirkan keluar', example: 'Concentrated salt effluent is returned to the ocean.' },
    ],
    points: 25,
  },

  // 6. TOEFL iBT: Academic Discussion
  {
    id: 'wp-toefl-academic-1',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'TOEFL iBT: Academic Discussion on Remote Work',
    instruction: 'Tulis respon diskusi kelas minimal 100 kata dalam 10 menit.',
    taskType: 'TOEFL-Academic',
    prompt: `**Professor Vance**: As corporations increasingly consider making telecommuting permanent, should governments offer tax incentives to companies that maintain remote-work policies, or should they incentivize employees to return to city-center offices to support local small businesses?

**Jessica**: Remote work drastically decreases daily commuting emissions and allows workers to achieve a healthier work-life balance, so governments should actively subsidize companies that adopt work-from-home models.

**David**: Empty commercial districts devastate neighborhood restaurants, transport services, and retailers that depend on daily office foot traffic. Supporting downtown businesses is crucial for economic vitality.`,
    suggestedTimeMin: 10,
    minWordCount: 100,
    maxWordCount: 160,
    criteria: [
      {
        id: 'dev',
        name: 'Topic Development & Relevance',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'Adds distinct arguments and illustrative insights.' },
          { score: 3, label: 'Score 3', description: 'Adequate but somewhat generic contribution.' },
          { score: 1, label: 'Score 1', description: 'Incomplete or unoriginal contribution.' },
        ],
      },
      {
        id: 'lang',
        name: 'Language Use',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'High precision and error-free execution.' },
          { score: 3, label: 'Score 3', description: 'Occasional minor grammar errors.' },
          { score: 1, label: 'Score 1', description: 'Frequent noticeable errors.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Score 5.0 (Top Tier Model)',
      text: `While David raises an important point regarding downtown economic recovery, I firmly agree with Jessica that subsidizing remote-work models delivers far superior long-term socioeconomic benefits. Rather than artificially preserving obsolete commuting patterns, government subsidies for telecommuting encourage economic decentralization. When professionals work from home, their disposable income is spent within residential suburbs, stimulating localized neighborhood enterprises rather than concentrating capital solely in central business districts. Furthermore, eliminating daily transit hours boosts workforce productivity and mental health. Therefore, incentivizing remote work establishes a more resilient, environmentally sustainable economic framework.`,
      analysis: [
        'Connects with both classmates directly while developing a fresh macro-economic argument (economic decentralization).',
        'Concise and forceful conclusion.',
      ],
    },
    recommendedVocabulary: [
      { term: 'Economic decentralization', definition: 'Penyebaran aktivitas ekonomi ke berbagai daerah', example: 'Remote work accelerates economic decentralization.' },
      { term: 'Obsolete patterns', definition: 'Pola-pola usang yang sudah tidak relevan', example: 'Cities should not preserve obsolete commuting routines.' },
    ],
    points: 20,
  },

  // 7. TOEFL iBT: Academic Discussion on AI Automation
  {
    id: 'wp-toefl-academic-2',
    lessonId: 'writing-studio',
    type: 'writing-rubric',
    title: 'TOEFL iBT: AI Automation in Healthcare Diagnostics',
    instruction: 'Tulis respon diskusi kelas minimal 100 kata dalam 10 menit.',
    taskType: 'TOEFL-Academic',
    prompt: `**Professor Al-Mansoor**: As generative AI and deep-learning diagnostics outperform human specialists in detecting complex radiographic anomalies, should hospital systems allow autonomous AI diagnostic decisions, or must final diagnostic approval remain exclusively with human clinicians?

**Rachel**: Diagnostic AI processes thousands of radiological scans in seconds with near-zero error rates. Full autonomy prevents clinician fatigue and expands life-saving diagnostics to rural clinics lacking certified radiologists.

**Marcus**: Healthcare is not merely statistical pattern matching. Human doctors understand nuanced patient histories, genetic anomalies, and empathetic bedside ethics that algorithmic models cannot comprehend.`,
    suggestedTimeMin: 10,
    minWordCount: 100,
    maxWordCount: 160,
    criteria: [
      {
        id: 'dev',
        name: 'Topic Development & Relevance',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'Presents insightful, nuanced synthesis with original argument.' },
          { score: 3, label: 'Score 3', description: 'Clear response with basic support.' },
          { score: 1, label: 'Score 1', description: 'Superficial response.' },
        ],
      },
      {
        id: 'lang',
        name: 'Language Use',
        weightPercent: 50,
        descriptors: [
          { score: 5, label: 'Score 5', description: 'Academic tone, sophisticated collocations, error-free.' },
          { score: 3, label: 'Score 3', description: 'Understandable with minor slips.' },
          { score: 1, label: 'Score 1', description: 'Grammar and lexical deficiencies.' },
        ],
      },
    ],
    modelAnswer: {
      bandOrScore: 'Score 5.0 (Top Tier Model)',
      text: `In my view, while Rachel highlights the compelling speed of deep-learning diagnostics, Marcus correctly emphasizes the indispensable necessity of human oversight. Autonomous medical AI poses profound ethical and legal liabilities; when an unmonitored algorithm produces a false-negative prognosis, assigning institutional accountability becomes murky. Therefore, the optimal framework is not complete autonomy, but a collaborative "human-in-the-loop" paradigm. In this system, AI acts as an infallible preliminary triage filter, flagging subtle micro-lesions, while licensed physicians synthesize these data with holistic patient examinations. This symbiotic approach maximizes diagnostic accuracy without forfeiting ethical responsibility.`,
      analysis: [
        'Engages directly with peers (Rachel & Marcus) while proposing an elevated third paradigm ("human-in-the-loop").',
        'Uses advanced academic phrasing: "indispensable necessity", "profound ethical liabilities", "symbiotic approach".',
      ],
    },
    recommendedVocabulary: [
      { term: 'Human-in-the-loop', definition: 'Paradigma kerja kolaboratif di mana keputusan akhir tetap divalidasi manusia', example: 'Medical AI requires a human-in-the-loop paradigm.' },
      { term: 'Assign accountability', definition: 'Menetapkan tanggung jawab hukum atau etika secara sah', example: 'Autonomous systems make it difficult to assign accountability.' },
    ],
    points: 20,
  },
];

export function WritingPadView() {
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  const currentExercise = WRITING_PROMPTS[selectedPromptIndex];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00638E]" />
          <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase tracking-widest font-bold">
            Academic Linter &amp; Assessment Pad
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif text-[#0F172A] dark:text-[#FFFFFF] font-bold">
          Simulasi Penulisan Esai &amp; Evaluasi Mandiri
        </h1>
        <p className="text-[#334155] dark:text-[#7A8992] text-xs sm:text-sm leading-relaxed font-sans">
          Ruang menulis bebas distraksi dengan timer waktu nyata, live word counter, analitik ritme kalimat, dan rubrik evaluasi standar Cambridge &amp; ETS.
        </p>
      </div>

      {/* Prompt Selector Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {WRITING_PROMPTS.map((prompt, idx) => (
          <button
            key={prompt.id}
            onClick={() => setSelectedPromptIndex(idx)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 tactile-btn cursor-pointer ${
              selectedPromptIndex === idx
                ? 'bg-[#00638E] text-white font-bold shadow-xs'
                : 'bg-white dark:bg-[#141414] hover:bg-[#F8FAFC] dark:hover:bg-[#1C1C1C] text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-[#FFFFFF] border border-[#CBD5E1] dark:border-white/10 shadow-xs'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span className="truncate max-w-[200px] sm:max-w-none">{prompt.title}</span>
          </button>
        ))}
      </div>

      {/* Main Writing Pad Component */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs">
        <WritingRubric key={currentExercise.id} exercise={currentExercise} />
      </div>
    </div>
  );
}

export default function WritingStudioPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=writing-pad'); }, [router]);
  return null;
}
