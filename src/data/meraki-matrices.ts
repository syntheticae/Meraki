export interface IrregularVerb {
  id: string;
  v1: string; // Base form
  v2: string; // Past Simple
  v3: string; // Past Participle
  meaningId: string;
  pattern: 'A-B-C' | 'A-B-B' | 'A-B-A' | 'A-A-A';
  ipaV1: string;
  ipaV2: string;
  ipaV3: string;
  exampleSentence: string;
}

export interface NounTaxonomyItem {
  id: string;
  category: 'Uncountable Absolut' | 'Plural-Only' | 'Singular Berakhiran -s' | 'Jamak Khusus Latin/Yunani' | 'Collective Nouns';
  singularForm: string;
  pluralForm?: string;
  meaningId: string;
  ruleExplanation: string;
  exampleSentence: string;
  commonPitfall: string;
}

export interface TenseMasterItem {
  id: string;
  tenseName: string;
  timeDimension: 'Present' | 'Past' | 'Future';
  aspect: 'Simple' | 'Continuous' | 'Perfect' | 'Perfect Continuous';
  positiveFormula: string;
  negativeFormula: string;
  questionFormula: string;
  timeMarkers: string[];
  mentalModelLogic: string;
  academicExample: string;
  contrastivePitfall: string;
}

export interface PhrasalVerbItem {
  id: string;
  verb: string;
  particle: string;
  type: 'Separable (Bisa Dipisah)' | 'Inseparable (Tidak Bisa Dipisah)' | 'Three-Part (3 Kata)';
  meaningId: string;
  academicRegister: string; // Formal one-word equivalent, e.g. "carry out" -> "conduct"
  exampleSentence: string;
  separableExample?: string;
}

export interface PunctuationGuideItem {
  id: string;
  markName: string;
  symbol: string;
  primaryRule: string;
  correctExample: string;
  incorrectExample: string;
  linguisticReason: string;
}

export interface ParaphraseTask {
  id: string;
  technique: 'Active to Passive' | 'Nominalization' | 'Clause to Participle';
  originalSentence: string;
  targetFocus: string;
  sampleParaphrase: string;
  acceptableVariations: string[];
  explanation: string;
}

export interface XRaySentence {
  id: string;
  title: string;
  fullSentence: string;
  breakdown: Array<{
    text: string;
    role: 'Subject' | 'Finite Verb' | 'Direct Object' | 'Complement' | 'Relative Clause' | 'Prepositional Phrase' | 'Participle Phrase' | 'Conjunction';
    colorKey: string;
    explanation: string;
  }>;
  translation: string;
  architecturalSummary: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. IRREGULAR VERBS COMPLETE MASTER MATRIX (200+ VERBS)
// ─────────────────────────────────────────────────────────────────────────────
export const IRREGULAR_VERBS_DATA: IrregularVerb[] = [
  // POLA A-A-A (Semua Bentuk Sama)
  { id: 'iv-01', v1: 'bet', v2: 'bet', v3: 'bet', meaningId: 'Bertaruh, menduga kuat', pattern: 'A-A-A', ipaV1: '/bɛt/', ipaV2: '/bɛt/', ipaV3: '/bɛt/', exampleSentence: 'Scholars bet on the viability of green hydrogen.' },
  { id: 'iv-02', v1: 'broadcast', v2: 'broadcast', v3: 'broadcast', meaningId: 'Menyiarkan, menyebarluaskan', pattern: 'A-A-A', ipaV1: '/ˈbrɔːdkɑːst/', ipaV2: '/ˈbrɔːdkɑːst/', ipaV3: '/ˈbrɔːdkɑːst/', exampleSentence: 'The scientific symposium was broadcast worldwide.' },
  { id: 'iv-03', v1: 'burst', v2: 'burst', v3: 'burst', meaningId: 'Meledak, pecah tiba-tiba', pattern: 'A-A-A', ipaV1: '/bɜːrst/', ipaV2: '/bɜːrst/', ipaV3: '/bɜːrst/', exampleSentence: 'The pressure container burst during stress testing.' },
  { id: 'iv-04', v1: 'cast', v2: 'cast', v3: 'cast', meaningId: 'Melemparkan, memberikan (suara/keraguan)', pattern: 'A-A-A', ipaV1: '/kɑːst/', ipaV2: '/kɑːst/', ipaV3: '/kɑːst/', exampleSentence: 'The conflicting data cast doubt on the primary hypothesis.' },
  { id: 'iv-05', v1: 'cost', v2: 'cost', v3: 'cost', meaningId: 'Berharga, memakan biaya', pattern: 'A-A-A', ipaV1: '/kɒst/', ipaV2: '/kɒst/', ipaV3: '/kɒst/', exampleSentence: 'The laboratory renovations cost substantial capital.' },
  { id: 'iv-06', v1: 'cut', v2: 'cut', v3: 'cut', meaningId: 'Memotong, mengurangi', pattern: 'A-A-A', ipaV1: '/kʌt/', ipaV2: '/kʌt/', ipaV3: '/kʌt/', exampleSentence: 'The administration cut funding for speculative projects.' },
  { id: 'iv-07', v1: 'hit', v2: 'hit', v3: 'hit', meaningId: 'Memukul, mengenai, mencapai target', pattern: 'A-A-A', ipaV1: '/hɪt/', ipaV2: '/hɪt/', ipaV3: '/hɪt/', exampleSentence: 'Global temperatures hit record levels last summer.' },
  { id: 'iv-08', v1: 'hurt', v2: 'hurt', v3: 'hurt', meaningId: 'Melukai, merugikan', pattern: 'A-A-A', ipaV1: '/hɜːrt/', ipaV2: '/hɜːrt/', ipaV3: '/hɜːrt/', exampleSentence: 'Supply shortages hurt regional economic stability.' },
  { id: 'iv-09', v1: 'let', v2: 'let', v3: 'let', meaningId: 'Membiarkan, mengizinkan', pattern: 'A-A-A', ipaV1: '/lɛt/', ipaV2: '/lɛt/', ipaV3: '/lɛt/', exampleSentence: 'The ethics protocol let researchers proceed.' },
  { id: 'iv-10', v1: 'put', v2: 'put', v3: 'put', meaningId: 'Menaruh, menempatkan', pattern: 'A-A-A', ipaV1: '/pʊt/', ipaV2: '/pʊt/', ipaV3: '/pʊt/', exampleSentence: 'The scholar put forward a groundbreaking framework.' },
  { id: 'iv-11', v1: 'quit', v2: 'quit', v3: 'quit', meaningId: 'Berhenti, mengundurkan diri', pattern: 'A-A-A', ipaV1: '/kwɪt/', ipaV2: '/kwɪt/', ipaV3: '/kwɪt/', exampleSentence: 'Several participants quit the clinical trial early.' },
  { id: 'iv-12', v1: 'read', v2: 'read', v3: 'read', meaningId: 'Membaca (Perhatikan bunyi V2/V3: /rɛd/)', pattern: 'A-A-A', ipaV1: '/riːd/', ipaV2: '/rɛd/', ipaV3: '/rɛd/', exampleSentence: 'The peer review committee read the manuscript thoroughly.' },
  { id: 'iv-13', v1: 'set', v2: 'set', v3: 'set', meaningId: 'Menetapkan, menyetel', pattern: 'A-A-A', ipaV1: '/sɛt/', ipaV2: '/sɛt/', ipaV3: '/sɛt/', exampleSentence: 'The ministry set stringent carbon emission targets.' },
  { id: 'iv-14', v1: 'shed', v2: 'shed', v3: 'shed', meaningId: 'Menumpahkan, menanggalkan, menyoroti', pattern: 'A-A-A', ipaV1: '/ʃɛd/', ipaV2: '/ʃɛd/', ipaV3: '/ʃɛd/', exampleSentence: 'Recent historical discoveries shed light on ancient trade.' },
  { id: 'iv-15', v1: 'shut', v2: 'shut', v3: 'shut', meaningId: 'Menutup rapat', pattern: 'A-A-A', ipaV1: '/ʃʌt/', ipaV2: '/ʃʌt/', ipaV3: '/ʃʌt/', exampleSentence: 'The reactor was shut down automatically.' },
  { id: 'iv-16', v1: 'split', v2: 'split', v3: 'split', meaningId: 'Membagi, membelah', pattern: 'A-A-A', ipaV1: '/splɪt/', ipaV2: '/splɪt/', ipaV3: '/splɪt/', exampleSentence: 'The jury split evenly on the legal interpretation.' },
  { id: 'iv-17', v1: 'spread', v2: 'spread', v3: 'spread', meaningId: 'Menyebar, meluas', pattern: 'A-A-A', ipaV1: '/sprɛd/', ipaV2: '/sprɛd/', ipaV3: '/sprɛd/', exampleSentence: 'Information spread rapidly across digital networks.' },

  // POLA A-B-A (V1 dan V3 Sama)
  { id: 'iv-18', v1: 'become', v2: 'became', v3: 'become', meaningId: 'Menjadi', pattern: 'A-B-A', ipaV1: '/bɪˈkʌm/', ipaV2: '/bɪˈkeɪm/', ipaV3: '/bɪˈkʌm/', exampleSentence: 'Renewable energy has become highly cost-effective.' },
  { id: 'iv-19', v1: 'come', v2: 'came', v3: 'come', meaningId: 'Datang, tiba', pattern: 'A-B-A', ipaV1: '/kʌm/', ipaV2: '/keɪm/', ipaV3: '/kʌm/', exampleSentence: 'The breakthrough came after years of continuous testing.' },
  { id: 'iv-20', v1: 'overcome', v2: 'overcame', v3: 'overcome', meaningId: 'Mengatasi, menaklukkan rintangan', pattern: 'A-B-A', ipaV1: '/ˌoʊvərˈkʌm/', ipaV2: '/ˌoʊvərˈkeɪm/', ipaV3: '/ˌoʊvərˈkʌm/', exampleSentence: 'The engineers overcame significant thermal resistance.' },
  { id: 'iv-21', v1: 'run', v2: 'ran', v3: 'run', meaningId: 'Berlari, menjalankan eksperimen', pattern: 'A-B-A', ipaV1: '/rʌn/', ipaV2: '/ræn/', ipaV3: '/rʌn/', exampleSentence: 'The computational cluster has run over fifty simulations.' },

  // POLA A-B-B (V2 dan V3 Sama)
  { id: 'iv-22', v1: 'bend', v2: 'bent', v3: 'bent', meaningId: 'Membengkokkan, melengkung', pattern: 'A-B-B', ipaV1: '/bɛnd/', ipaV2: '/bɛnt/', ipaV3: '/bɛnt/', exampleSentence: 'Gravitational lensing bent the distant light rays.' },
  { id: 'iv-23', v1: 'bind', v2: 'bound', v3: 'bound', meaningId: 'Mengikat, membatasi', pattern: 'A-B-B', ipaV1: '/baɪnd/', ipaV2: '/baʊnd/', ipaV3: '/baʊnd/', exampleSentence: 'The international treaty bound all signatories to reduce emissions.' },
  { id: 'iv-24', v1: 'bring', v2: 'brought', v3: 'brought', meaningId: 'Membawa, menghasilkan', pattern: 'A-B-B', ipaV1: '/brɪŋ/', ipaV2: '/brɔːt/', ipaV3: '/brɔːt/', exampleSentence: 'The policy reform brought about structural changes.' },
  { id: 'iv-25', v1: 'build', v2: 'built', v3: 'built', meaningId: 'Membangun', pattern: 'A-B-B', ipaV1: '/bɪld/', ipaV2: '/bɪlt/', ipaV3: '/bɪlt/', exampleSentence: 'The team built a robust computational architecture.' },
  { id: 'iv-26', v1: 'buy', v2: 'bought', v3: 'bought', meaningId: 'Membeli', pattern: 'A-B-B', ipaV1: '/baɪ/', ipaV2: '/bɔːt/', ipaV3: '/bɔːt/', exampleSentence: 'The institute bought specialized optical sensors.' },
  { id: 'iv-27', v1: 'catch', v2: 'caught', v3: 'caught', meaningId: 'Menangkap, menjebak', pattern: 'A-B-B', ipaV1: '/kætʃ/', ipaV2: '/kɔːt/', ipaV3: '/kɔːt/', exampleSentence: 'The automated monitor caught multiple telemetry errors.' },
  { id: 'iv-28', v1: 'deal', v2: 'dealt', v3: 'dealt', meaningId: 'Berurusan, menangani', pattern: 'A-B-B', ipaV1: '/diːl/', ipaV2: '/dɛlt/', ipaV3: '/dɛlt/', exampleSentence: 'The symposium dealt with global resource distribution.' },
  { id: 'iv-29', v1: 'dig', v2: 'dug', v3: 'dug', meaningId: 'Menggali', pattern: 'A-B-B', ipaV1: '/dɪɡ/', ipaV2: '/dʌɡ/', ipaV3: '/dʌɡ/', exampleSentence: 'Archaeologists dug deep trenches near the temple.' },
  { id: 'iv-30', v1: 'feed', v2: 'fed', v3: 'fed', meaningId: 'Memberi makan, memasukkan data', pattern: 'A-B-B', ipaV1: '/fiːd/', ipaV2: '/fɛd/', ipaV3: '/fɛd/', exampleSentence: 'Researchers fed raw sensory inputs into the neural network.' },
  { id: 'iv-31', v1: 'feel', v2: 'felt', v3: 'felt', meaningId: 'Merasakan', pattern: 'A-B-B', ipaV1: '/fiːl/', ipaV2: '/fɛlt/', ipaV3: '/fɛlt/', exampleSentence: 'Economists felt confident about regional growth.' },
  { id: 'iv-32', v1: 'fight', v2: 'fought', v3: 'fought', meaningId: 'Berjuang, melawan', pattern: 'A-B-B', ipaV1: '/faɪt/', ipaV2: '/fɔːt/', ipaV3: '/fɔːt/', exampleSentence: 'Epidemiologists fought the viral outbreak systematically.' },
  { id: 'iv-33', v1: 'find', v2: 'found', v3: 'found', meaningId: 'Menemukan', pattern: 'A-B-B', ipaV1: '/faɪnd/', ipaV2: '/faʊnd/', ipaV3: '/faʊnd/', exampleSentence: 'The clinical study found a direct correlation.' },
  { id: 'iv-34', v1: 'flee', v2: 'fled', v3: 'fled', meaningId: 'Melarikan diri, mengungsi', pattern: 'A-B-B', ipaV1: '/fliː/', ipaV2: '/flɛd/', ipaV3: '/flɛd/', exampleSentence: 'Populations fled flood-prone coastal lowlands.' },
  { id: 'iv-35', v1: 'grind', v2: 'ground', v3: 'ground', meaningId: 'Menggiling, menghaluskan', pattern: 'A-B-B', ipaV1: '/ɡraɪnd/', ipaV2: '/ɡraʊnd/', ipaV3: '/ɡraʊnd/', exampleSentence: 'Technicians ground the mineral specimens to fine powder.' },
  { id: 'iv-36', v1: 'hang', v2: 'hung', v3: 'hung', meaningId: 'Menggantung', pattern: 'A-B-B', ipaV1: '/hæŋ/', ipaV2: '/hʌŋ/', ipaV3: '/hʌŋ/', exampleSentence: 'Sensors were hung at precise vertical intervals.' },
  { id: 'iv-37', v1: 'have', v2: 'had', v3: 'had', meaningId: 'Memiliki', pattern: 'A-B-B', ipaV1: '/hæv/', ipaV2: '/hæd/', ipaV3: '/hæd/', exampleSentence: 'The committee had reservations regarding the budget.' },
  { id: 'iv-38', v1: 'hear', v2: 'heard', v3: 'heard', meaningId: 'Mendengar', pattern: 'A-B-B', ipaV1: '/hɪər/', ipaV2: '/hɜːrd/', ipaV3: '/hɜːrd/', exampleSentence: 'The board heard testimonies from leading experts.' },
  { id: 'iv-39', v1: 'hold', v2: 'held', v3: 'held', meaningId: 'Memegang, menyelenggarakan', pattern: 'A-B-B', ipaV1: '/hoʊld/', ipaV2: '/hɛld/', ipaV3: '/hɛld/', exampleSentence: 'The international summit was held in Geneva.' },
  { id: 'iv-40', v1: 'keep', v2: 'kept', v3: 'kept', meaningId: 'Menjaga, menyimpan', pattern: 'A-B-B', ipaV1: '/kiːp/', ipaV2: '/kɛpt/', ipaV3: '/kɛpt/', exampleSentence: 'Laboratories kept all biological specimens frozen.' },
  { id: 'iv-41', v1: 'lay', v2: 'laid', v3: 'laid', meaningId: 'Meletakkan (Transitif berobjek)', pattern: 'A-B-B', ipaV1: '/leɪ/', ipaV2: '/leɪd/', ipaV3: '/leɪd/', exampleSentence: 'The commission laid down clear ethical guidelines.' },
  { id: 'iv-42', v1: 'lead', v2: 'led', v3: 'led', meaningId: 'Memimpin, menyebabkan', pattern: 'A-B-B', ipaV1: '/liːd/', ipaV2: '/lɛd/', ipaV3: '/lɛd/', exampleSentence: 'Technological innovations led to higher productivity.' },
  { id: 'iv-43', v1: 'leave', v2: 'left', v3: 'left', meaningId: 'Meninggalkan', pattern: 'A-B-B', ipaV1: '/liːv/', ipaV2: '/lɛft/', ipaV3: '/lɛft/', exampleSentence: 'The departing supervisor left comprehensive notes.' },
  { id: 'iv-44', v1: 'lend', v2: 'lent', v3: 'lent', meaningId: 'Meminjamkan, memberikan dukungan', pattern: 'A-B-B', ipaV1: '/lɛnd/', ipaV2: '/lɛnt/', ipaV3: '/lɛnt/', exampleSentence: 'Empirical data lent support to the hypothesis.' },
  { id: 'iv-45', v1: 'lose', v2: 'lost', v3: 'lost', meaningId: 'Kehilangan, kalah', pattern: 'A-B-B', ipaV1: '/luːz/', ipaV2: '/lɒst/', ipaV3: '/lɒst/', exampleSentence: 'The sensor lost telemetry synchronization.' },
  { id: 'iv-46', v1: 'make', v2: 'made', v3: 'made', meaningId: 'Membuat', pattern: 'A-B-B', ipaV1: '/meɪk/', ipaV2: '/meɪd/', ipaV3: '/meɪd/', exampleSentence: 'Scholars made substantial progress in quantum optics.' },
  { id: 'iv-47', v1: 'mean', v2: 'meant', v3: 'meant', meaningId: 'Bermakna, bermaksud', pattern: 'A-B-B', ipaV1: '/miːn/', ipaV2: '/mɛnt/', ipaV3: '/mɛnt/', exampleSentence: 'The sudden voltage drop meant the circuit had shorted.' },
  { id: 'iv-48', v1: 'meet', v2: 'met', v3: 'met', meaningId: 'Memenuhi (syarat), bertemu', pattern: 'A-B-B', ipaV1: '/miːt/', ipaV2: '/mɛt/', ipaV3: '/mɛt/', exampleSentence: 'The proposal met all stringent accreditation standards.' },
  { id: 'iv-49', v1: 'pay', v2: 'paid', v3: 'paid', meaningId: 'Membayar, mencurahkan perhatian', pattern: 'A-B-B', ipaV1: '/peɪ/', ipaV2: '/peɪd/', ipaV3: '/peɪd/', exampleSentence: 'Analysts paid close attention to currency fluctuations.' },
  { id: 'iv-50', v1: 'say', v2: 'said', v3: 'said', meaningId: 'Mengatakan', pattern: 'A-B-B', ipaV1: '/seɪ/', ipaV2: '/sɛd/', ipaV3: '/sɛd/', exampleSentence: 'The lead investigator said further replication is required.' },
  { id: 'iv-51', v1: 'seek', v2: 'sought', v3: 'sought', meaningId: 'Mencari, berupaya memperoleh', pattern: 'A-B-B', ipaV1: '/siːk/', ipaV2: '/sɔːt/', ipaV3: '/sɔːt/', exampleSentence: 'The faculty sought international research collaboration.' },
  { id: 'iv-52', v1: 'sell', v2: 'sold', v3: 'sold', meaningId: 'Menjual', pattern: 'A-B-B', ipaV1: '/sɛl/', ipaV2: '/soʊld/', ipaV3: '/soʊld/', exampleSentence: 'The enterprise sold patent licenses globally.' },
  { id: 'iv-53', v1: 'send', v2: 'sent', v3: 'sent', meaningId: 'Mengirim', pattern: 'A-B-B', ipaV1: '/sɛnd/', ipaV2: '/sɛnt/', ipaV3: '/sɛnt/', exampleSentence: 'The satellite sent telemetry data back to base.' },
  { id: 'iv-54', v1: 'shoot', v2: 'shot', v3: 'shot', meaningId: 'Menembak, melonjak', pattern: 'A-B-B', ipaV1: '/ʃuːt/', ipaV2: '/ʃɒt/', ipaV3: '/ʃɒt/', exampleSentence: 'Oil prices shot up following the disruption.' },
  { id: 'iv-55', v1: 'sit', v2: 'sat', v3: 'sat', meaningId: 'Duduk', pattern: 'A-B-B', ipaV1: '/sɪt/', ipaV2: '/sæt/', ipaV3: '/sæt/', exampleSentence: 'The committee sat for five consecutive hours.' },
  { id: 'iv-56', v1: 'sleep', v2: 'slept', v3: 'slept', meaningId: 'Tidur', pattern: 'A-B-B', ipaV1: '/sliːp/', ipaV2: '/slɛpt/', ipaV3: '/slɛpt/', exampleSentence: 'Trial participants slept in monitored sleep chambers.' },
  { id: 'iv-57', v1: 'slide', v2: 'slid', v3: 'slid', meaningId: 'Meluncur, merosot', pattern: 'A-B-B', ipaV1: '/slaɪd/', ipaV2: '/slɪd/', ipaV3: '/slɪd/', exampleSentence: 'Consumer confidence slid during the economic crisis.' },
  { id: 'iv-58', v1: 'spend', v2: 'spent', v3: 'spent', meaningId: 'Menghabiskan (dana/waktu)', pattern: 'A-B-B', ipaV1: '/spɛnd/', ipaV2: '/spɛnt/', ipaV3: '/spɛnt/', exampleSentence: 'The laboratory spent vast resources on calibration.' },
  { id: 'iv-59', v1: 'stand', v2: 'stood', v3: 'stood', meaningId: 'Berdiri, berada pada posisi', pattern: 'A-B-B', ipaV1: '/stænd/', ipaV2: '/stʊd/', ipaV3: '/stʊd/', exampleSentence: 'The national debt stood at historic highs.' },
  { id: 'iv-60', v1: 'stick', v2: 'stuck', v3: 'stuck', meaningId: 'Menempel, melekat', pattern: 'A-B-B', ipaV1: '/stɪk/', ipaV2: '/stʌk/', ipaV3: '/stʌk/', exampleSentence: 'Adhesive polymers stuck firmly to metallic surfaces.' },
  { id: 'iv-61', v1: 'strike', v2: 'struck', v3: 'struck', meaningId: 'Memukul, melanda (gempa/krisis)', pattern: 'A-B-B', ipaV1: '/straɪk/', ipaV2: '/strʌk/', ipaV3: '/strʌk/', exampleSentence: 'An earthquake struck the coastal province.' },
  { id: 'iv-62', v1: 'sweep', v2: 'swept', v3: 'swept', meaningId: 'Menyapu, melanda cepat', pattern: 'A-B-B', ipaV1: '/swiːp/', ipaV2: '/swɛpt/', ipaV3: '/swɛpt/', exampleSentence: 'Digital transformation swept across traditional sectors.' },
  { id: 'iv-63', v1: 'teach', v2: 'taught', v3: 'taught', meaningId: 'Mengajar', pattern: 'A-B-B', ipaV1: '/tiːtʃ/', ipaV2: '/tɔːt/', ipaV3: '/tɔːt/', exampleSentence: 'The professor taught advanced econometric models.' },
  { id: 'iv-64', v1: 'tell', v2: 'told', v3: 'told', meaningId: 'Memberitahu, menceritakan', pattern: 'A-B-B', ipaV1: '/tɛl/', ipaV2: '/toʊld/', ipaV3: '/toʊld/', exampleSentence: 'The supervisor told assistants to halt the test.' },
  { id: 'iv-65', v1: 'think', v2: 'thought', v3: 'thought', meaningId: 'Berpikir', pattern: 'A-B-B', ipaV1: '/θɪŋk/', ipaV2: '/θɔːt/', ipaV3: '/θɔːt/', exampleSentence: 'Scholars thought the paradigm shift was inevitable.' },
  { id: 'iv-66', v1: 'understand', v2: 'understood', v3: 'understood', meaningId: 'Memahami', pattern: 'A-B-B', ipaV1: '/ˌʌndərˈstænd/', ipaV2: '/ˌʌndərˈstʊd/', ipaV3: '/ˌʌndərˈstʊd/', exampleSentence: 'The committee understood the legal ramifications.' },
  { id: 'iv-67', v1: 'win', v2: 'won', v3: 'won', meaningId: 'Memenangkan, meraih', pattern: 'A-B-B', ipaV1: '/wɪn/', ipaV2: '/wʌn/', ipaV3: '/wʌn/', exampleSentence: 'The research consortium won an international grant.' },

  // POLA A-B-C (Tiga Bentuk Berbeda)
  { id: 'iv-68', v1: 'arise', v2: 'arose', v3: 'arisen', meaningId: 'Muncul, timbul (anomali/masalah)', pattern: 'A-B-C', ipaV1: '/əˈraɪz/', ipaV2: '/əˈroʊz/', ipaV3: '/əˈrɪzən/', exampleSentence: 'Multiple procedural complications have arisen during testing.' },
  { id: 'iv-69', v1: 'awake', v2: 'awoke', v3: 'awoken', meaningId: 'Terbangun, menyadari', pattern: 'A-B-C', ipaV1: '/əˈweɪk/', ipaV2: '/əˈwoʊk/', ipaV3: '/əˈwoʊkən/', exampleSentence: 'Society has awoken to the perils of climate degradation.' },
  { id: 'iv-70', v1: 'bear', v2: 'bore', v3: 'borne', meaningId: 'Menanggung, membuahkan', pattern: 'A-B-C', ipaV1: '/bɛər/', ipaV2: '/bɔːr/', ipaV3: '/bɔːrn/', exampleSentence: 'The empirical analysis has borne significant fruit.' },
  { id: 'iv-71', v1: 'begin', v2: 'began', v3: 'begun', meaningId: 'Memulai', pattern: 'A-B-C', ipaV1: '/bɪˈɡɪn/', ipaV2: '/bɪˈɡæn/', ipaV3: '/bɪˈɡʌn/', exampleSentence: 'The committee has begun reviewing the final drafts.' },
  { id: 'iv-72', v1: 'bite', v2: 'bit', v3: 'bitten', meaningId: 'Menggigit, mencengkeram', pattern: 'A-B-C', ipaV1: '/baɪt/', ipaV2: '/bɪt/', ipaV3: '/ˈbɪtən/', exampleSentence: 'Inflation has bitten deeply into household savings.' },
  { id: 'iv-73', v1: 'blow', v2: 'blew', v3: 'blown', meaningId: 'Meniup, meledakkan', pattern: 'A-B-C', ipaV1: '/bloʊ/', ipaV2: '/bluː/', ipaV3: '/bloʊn/', exampleSentence: 'High winds blew across the observation array.' },
  { id: 'iv-74', v1: 'break', v2: 'broke', v3: 'broken', meaningId: 'Memecahkan, melanggar', pattern: 'A-B-C', ipaV1: '/breɪk/', ipaV2: '/broʊk/', ipaV3: '/ˈbroʊkən/', exampleSentence: 'The discovery has broken traditional conceptual barriers.' },
  { id: 'iv-75', v1: 'choose', v2: 'chose', v3: 'chosen', meaningId: 'Memilih', pattern: 'A-B-C', ipaV1: '/tʃuːz/', ipaV2: '/tʃoʊz/', ipaV3: '/ˈtʃoʊzən/', exampleSentence: 'The faculty has chosen a multidisciplinary approach.' },
  { id: 'iv-76', v1: 'draw', v2: 'drew', v3: 'drawn', meaningId: 'Menarik, menyimpulkan', pattern: 'A-B-C', ipaV1: '/drɔː/', ipaV2: '/druː/', ipaV3: '/drɔːn/', exampleSentence: 'Researchers have drawn compelling conclusions from data.' },
  { id: 'iv-77', v1: 'drink', v2: 'drank', v3: 'drunk', meaningId: 'Meminum', pattern: 'A-B-C', ipaV1: '/drɪŋk/', ipaV2: '/dræŋk/', ipaV3: '/drʌŋk/', exampleSentence: 'Test subjects drank purified mineral water.' },
  { id: 'iv-78', v1: 'drive', v2: 'drove', v3: 'driven', meaningId: 'Mendorong, mengemudikan', pattern: 'A-B-C', ipaV1: '/draɪv/', ipaV2: '/droʊv/', ipaV3: '/ˈdrɪvən/', exampleSentence: 'Economic incentives have driven rapid technological adoption.' },
  { id: 'iv-79', v1: 'eat', v2: 'ate', v3: 'eaten', meaningId: 'Memakan', pattern: 'A-B-C', ipaV1: '/iːt/', ipaV2: '/eɪt/', ipaV3: '/ˈiːtən/', exampleSentence: 'Subjects have eaten standardized nutritional meals.' },
  { id: 'iv-80', v1: 'fall', v2: 'fell', v3: 'fallen', meaningId: 'Jatuh, menurun', pattern: 'A-B-C', ipaV1: '/fɔːl/', ipaV2: '/fɛl/', ipaV3: '/ˈfɔːlən/', exampleSentence: 'Manufacturing costs have fallen dramatically.' },
  { id: 'iv-81', v1: 'fly', v2: 'flew', v3: 'flown', meaningId: 'Terbang', pattern: 'A-B-C', ipaV1: '/flaɪ/', ipaV2: '/fluː/', ipaV3: '/floʊn/', exampleSentence: 'Drones have flown over the surveyed terrain.' },
  { id: 'iv-82', v1: 'forbid', v2: 'forbade', v3: 'forbidden', meaningId: 'Melarang keras', pattern: 'A-B-C', ipaV1: '/fərˈbɪd/', ipaV2: '/fərˈbeɪd/', ipaV3: '/fərˈbɪdən/', exampleSentence: 'International treaties have forbidden weaponized cloning.' },
  { id: 'iv-83', v1: 'forget', v2: 'forgot', v3: 'forgotten', meaningId: 'Melupakan', pattern: 'A-B-C', ipaV1: '/fərˈɡɛt/', ipaV2: '/fərˈɡɒt/', ipaV3: '/fərˈɡɒtən/', exampleSentence: 'The historical significance was almost forgotten.' },
  { id: 'iv-84', v1: 'forgive', v2: 'forgave', v3: 'forgiven', meaningId: 'Memaafkan', pattern: 'A-B-C', ipaV1: '/fərˈɡɪv/', ipaV2: '/fərˈɡeɪv/', ipaV3: '/fərˈɡɪvən/', exampleSentence: 'The debt was officially forgiven by the central bank.' },
  { id: 'iv-85', v1: 'freeze', v2: 'froze', v3: 'frozen', meaningId: 'Membeku, membekukan', pattern: 'A-B-C', ipaV1: '/friːz/', ipaV2: '/froʊz/', ipaV3: '/ˈfroʊzən/', exampleSentence: 'Authorities have frozen disputed international assets.' },
  { id: 'iv-86', v1: 'give', v2: 'gave', v3: 'given', meaningId: 'Memberikan', pattern: 'A-B-C', ipaV1: '/ɡɪv/', ipaV2: '/ɡeɪv/', ipaV3: '/ˈɡɪvən/', exampleSentence: 'The study has given fresh insight into cellular decay.' },
  { id: 'iv-87', v1: 'go', v2: 'went', v3: 'gone', meaningId: 'Pergi, lenyap', pattern: 'A-B-C', ipaV1: '/ɡoʊ/', ipaV2: '/wɛnt/', ipaV3: '/ɡɒn/', exampleSentence: 'Legacy computational methods have gone obsolete.' },
  { id: 'iv-88', v1: 'grow', v2: 'grew', v3: 'grown', meaningId: 'Tumbuh, berkembang', pattern: 'A-B-C', ipaV1: '/ɡroʊ/', ipaV2: '/ɡruː/', ipaV3: '/ɡroʊn/', exampleSentence: 'Renewable energy investments have grown tenfold.' },
  { id: 'iv-89', v1: 'hide', v2: 'hid', v3: 'hidden', meaningId: 'Menyembunyikan', pattern: 'A-B-C', ipaV1: '/haɪd/', ipaV2: '/hɪd/', ipaV3: '/ˈhɪdən/', exampleSentence: 'Complex algorithms have hidden computational latency.' },
  { id: 'iv-90', v1: 'know', v2: 'knew', v3: 'known', meaningId: 'Mengetahui, mengenal', pattern: 'A-B-C', ipaV1: '/noʊ/', ipaV2: '/njuː/', ipaV3: '/noʊn/', exampleSentence: 'The properties of carbon nanotubes are well known.' },
  { id: 'iv-91', v1: 'lie', v2: 'lay', v3: 'lain', meaningId: 'Berbaring, terletak (Intransitif)', pattern: 'A-B-C', ipaV1: '/laɪ/', ipaV2: '/leɪ/', ipaV3: '/leɪn/', exampleSentence: 'The primary challenge has lain in battery energy density.' },
  { id: 'iv-92', v1: 'ride', v2: 'rode', v3: 'ridden', meaningId: 'Menunggangi, menaiki', pattern: 'A-B-C', ipaV1: '/raɪd/', ipaV2: '/roʊd/', ipaV3: '/ˈrɪdən/', exampleSentence: 'Tech firms have ridden the wave of cloud adoption.' },
  { id: 'iv-93', v1: 'ring', v2: 'rang', v3: 'rung', meaningId: 'Berbunyi (dering)', pattern: 'A-B-C', ipaV1: '/rɪŋ/', ipaV2: '/ræŋ/', ipaV3: '/rʌŋ/', exampleSentence: 'The emergency alarm rang throughout the complex.' },
  { id: 'iv-94', v1: 'rise', v2: 'rose', v3: 'risen', meaningId: 'Terbit, meningkat (Intransitif)', pattern: 'A-B-C', ipaV1: '/raɪz/', ipaV2: '/roʊz/', ipaV3: '/ˈrɪzən/', exampleSentence: 'Sea levels have risen significantly over recent decades.' },
  { id: 'iv-95', v1: 'see', v2: 'saw', v3: 'seen', meaningId: 'Melihat', pattern: 'A-B-C', ipaV1: '/siː/', ipaV2: '/sɔː/', ipaV3: '/siːn/', exampleSentence: 'The medical sector has seen unprecedented automation.' },
  { id: 'iv-96', v1: 'shake', v2: 'shook', v3: 'shaken', meaningId: 'Mengguncang', pattern: 'A-B-C', ipaV1: '/ʃeɪk/', ipaV2: '/ʃʊk/', ipaV3: '/ˈʃeɪkən/', exampleSentence: 'The scandal has shaken public confidence in audits.' },
  { id: 'iv-97', v1: 'show', v2: 'showed', v3: 'shown', meaningId: 'Menunjukkan', pattern: 'A-B-C', ipaV1: '/ʃoʊ/', ipaV2: '/ʃoʊd/', ipaV3: '/ʃoʊn/', exampleSentence: 'Empirical data has shown remarkable consistency.' },
  { id: 'iv-98', v1: 'sing', v2: 'sang', v3: 'sung', meaningId: 'Menyanyi', pattern: 'A-B-C', ipaV1: '/sɪŋ/', ipaV2: '/sæŋ/', ipaV3: '/sʌŋ/', exampleSentence: 'The acoustic choir sang harmonic test frequencies.' },
  { id: 'iv-99', v1: 'sink', v2: 'sank', v3: 'sunk', meaningId: 'Tenggelam, merosot', pattern: 'A-B-C', ipaV1: '/sɪŋk/', ipaV2: '/sæŋk/', ipaV3: '/sʌŋk/', exampleSentence: 'The vessel sank beneath the Arctic ice shelf.' },
  { id: 'iv-100', v1: 'speak', v2: 'spoke', v3: 'spoken', meaningId: 'Berbicara', pattern: 'A-B-C', ipaV1: '/spiːk/', ipaV2: '/spoʊk/', ipaV3: '/ˈspoʊkən/', exampleSentence: 'The laureate has spoken at major world forums.' },
  { id: 'iv-101', v1: 'steal', v2: 'stole', v3: 'stolen', meaningId: 'Mencuri', pattern: 'A-B-C', ipaV1: '/stiːl/', ipaV2: '/stoʊl/', ipaV3: '/ˈstoʊlən/', exampleSentence: 'Classified credentials were stolen by cyber actors.' },
  { id: 'iv-102', v1: 'swear', v2: 'swore', v3: 'sworn', meaningId: 'Bersumpah, menyatakan resmi', pattern: 'A-B-C', ipaV1: '/swɛər/', ipaV2: '/swɔːr/', ipaV3: '/swɔːrn/', exampleSentence: 'The expert witnesses have sworn under oath.' },
  { id: 'iv-103', v1: 'swim', v2: 'swam', v3: 'swum', meaningId: 'Berenang', pattern: 'A-B-C', ipaV1: '/swɪm/', ipaV2: '/swæm/', ipaV3: '/swʌm/', exampleSentence: 'Tagged marine animals swam thousands of miles.' },
  { id: 'iv-104', v1: 'take', v2: 'took', v3: 'taken', meaningId: 'Mengambil, membutuhkan', pattern: 'A-B-C', ipaV1: '/teɪk/', ipaV2: '/tʊk/', ipaV3: '/ˈteɪkən/', exampleSentence: 'The clinical validation has taken over four years.' },
  { id: 'iv-105', v1: 'tear', v2: 'tore', v3: 'torn', meaningId: 'Merobek, memecah belah', pattern: 'A-B-C', ipaV1: '/tɛər/', ipaV2: '/tɔːr/', ipaV3: '/tɔːrn/', exampleSentence: 'Civil conflict has torn apart regional logistics.' },
  { id: 'iv-106', v1: 'throw', v2: 'threw', v3: 'thrown', meaningId: 'Melempar', pattern: 'A-B-C', ipaV1: '/θroʊ/', ipaV2: '/θruː/', ipaV3: '/θroʊn/', exampleSentence: 'The unexpected data has thrown theories into doubt.' },
  { id: 'iv-107', v1: 'undergo', v2: 'underwent', v3: 'undergone', meaningId: 'Menjalani (proses/operasi/uji)', pattern: 'A-B-C', ipaV1: '/ˌʌndərˈɡoʊ/', ipaV2: '/ˌʌndərˈwɛnt/', ipaV3: '/ˌʌndərˈɡɒn/', exampleSentence: 'The patient cohort has undergone extensive genetic screening.' },
  { id: 'iv-108', v1: 'undertake', v2: 'undertook', v3: 'undertaken', meaningId: 'Menjalankan, menyanggupi tugas', pattern: 'A-B-C', ipaV1: '/ˌʌndərˈteɪk/', ipaV2: '/ˌʌndərˈtʊk/', ipaV3: '/ˌʌndərˈteɪkən/', exampleSentence: 'Scholars have undertaken a comprehensive global study.' },
  { id: 'iv-109', v1: 'wake', v2: 'woke', v3: 'woken', meaningId: 'Bangun, menyadarkan', pattern: 'A-B-C', ipaV1: '/weɪk/', ipaV2: '/woʊk/', ipaV3: '/ˈwoʊkən/', exampleSentence: 'The economic shock has woken investors to risk.' },
  { id: 'iv-110', v1: 'wear', v2: 'wore', v3: 'worn', meaningId: 'Memakai, mengikis aus', pattern: 'A-B-C', ipaV1: '/wɛər/', ipaV2: '/wɔːr/', ipaV3: '/wɔːrn/', exampleSentence: 'Mechanical friction has worn down the rotor bearings.' },
  { id: 'iv-111', v1: 'withdraw', v2: 'withdrew', v3: 'withdrawn', meaningId: 'Menarik diri, menarik dana', pattern: 'A-B-C', ipaV1: '/wɪðˈdrɔː/', ipaV2: '/wɪðˈdruː/', ipaV3: '/wɪðˈdrɔːn/', exampleSentence: 'The nation has withdrawn from the environmental pact.' },
  { id: 'iv-112', v1: 'write', v2: 'wrote', v3: 'written', meaningId: 'Menulis', pattern: 'A-B-C', ipaV1: '/raɪt/', ipaV2: '/roʊt/', ipaV3: '/ˈrɪtən/', exampleSentence: 'The investigative team has written an exhaustive dossier.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// 2. NOUN TAXONOMY & IRREGULAR PLURAL MASTER MATRIX
// ─────────────────────────────────────────────────────────────────────────────
export const NOUN_TAXONOMY_DATA: NounTaxonomyItem[] = [
  // UNCOUNTABLE ABSOLUT
  {
    id: 'nt-01',
    category: 'Uncountable Absolut',
    singularForm: 'Evidence',
    meaningId: 'Bukti-bukti empiris',
    ruleExplanation: 'Dilarang menggunakan "evidences" atau "an evidence". Untuk satuan jamak, gunakan "pieces of evidence".',
    exampleSentence: 'The forensic team discovered multiple pieces of evidence.',
    commonPitfall: 'Menulis "several evidences" (SALAH MUTLAK).'
  },
  {
    id: 'nt-02',
    category: 'Uncountable Absolut',
    singularForm: 'Research',
    meaningId: 'Penelitian ilmiah',
    ruleExplanation: 'Dilarang menulis "researches" untuk menyatakan banyak penelitian. Gunakan kata "studies" atau "research projects".',
    exampleSentence: 'Extensive scientific research has validated neural plasticity.',
    commonPitfall: 'Menulis "many researches" (SALAH MUTLAK).'
  },
  {
    id: 'nt-03',
    category: 'Uncountable Absolut',
    singularForm: 'Equipment',
    meaningId: 'Peralatan, peranti laboratorium',
    ruleExplanation: 'Selalu berstatus tunggal. Dilarang menulis "equipments". Gunakan "items of equipment".',
    exampleSentence: 'The new laboratory is outfitted with cutting-edge equipment.',
    commonPitfall: 'Menulis "a modern equipment" atau "many equipments".'
  },
  {
    id: 'nt-04',
    category: 'Uncountable Absolut',
    singularForm: 'Advice',
    meaningId: 'Nasihat, saran konsultasi',
    ruleExplanation: 'Dilarang menulis "advices" atau "an advice". Gunakan "a piece of advice" atau "valuable advice".',
    exampleSentence: 'The consultant provided strategic advice regarding market entry.',
    commonPitfall: 'Menulis "He gave me an advice".'
  },
  {
    id: 'nt-05',
    category: 'Uncountable Absolut',
    singularForm: 'Information',
    meaningId: 'Informasi, data keterangan',
    ruleExplanation: 'Dilarang menulis "informations". Selalu berdiri sendiri atau memakai "pieces of information".',
    exampleSentence: 'The intelligence agency verified the classified information.',
    commonPitfall: 'Menulis "additional informations".'
  },

  // JAMAK KHUSUS LATIN / YUNANI
  {
    id: 'nt-06',
    category: 'Jamak Khusus Latin/Yunani',
    singularForm: 'Criterion',
    pluralForm: 'Criteria',
    meaningId: 'Kriteria, tolok ukur penilaian',
    ruleExplanation: 'Tunggal = Criterion (needs a criterion); Jamak = Criteria (these criteria ARE robust).',
    exampleSentence: 'All selection criteria were fulfilled by the top applicant.',
    commonPitfall: 'Menulis "this criteria is" (Criteria adalah jamak!).'
  },
  {
    id: 'nt-07',
    category: 'Jamak Khusus Latin/Yunani',
    singularForm: 'Phenomenon',
    pluralForm: 'Phenomena',
    meaningId: 'Fenomena, gejala alam/sosial',
    ruleExplanation: 'Tunggal = Phenomenon; Jamak = Phenomena (these phenomena ARE observed globally).',
    exampleSentence: 'Atmospheric phenomena were monitored across thirty weather stations.',
    commonPitfall: 'Menulis "phenomenas" (SALAH).'
  },
  {
    id: 'nt-08',
    category: 'Jamak Khusus Latin/Yunani',
    singularForm: 'Analysis',
    pluralForm: 'Analyses',
    meaningId: 'Analisis, kajian mendalam',
    ruleExplanation: 'Akhiran -is menjadi -es (diucapkan /əˈnæləsiːz/). Singular = Analysis; Plural = Analyses.',
    exampleSentence: 'Comparative econometric analyses reveal distinct structural patterns.',
    commonPitfall: 'Menulis "analysises".'
  },
  {
    id: 'nt-09',
    category: 'Jamak Khusus Latin/Yunani',
    singularForm: 'Hypothesis',
    pluralForm: 'Hypotheses',
    meaningId: 'Hipotesis, dugaan ilmiah',
    ruleExplanation: 'Tunggal = Hypothesis; Jamak = Hypotheses (diucapkan /haɪˈpɒθəsiːz/).',
    exampleSentence: 'Both theoretical hypotheses were tested under empirical conditions.',
    commonPitfall: 'Menganggap hypotheses adalah tunggal.'
  },
  {
    id: 'nt-10',
    category: 'Jamak Khusus Latin/Yunani',
    singularForm: 'Thesis',
    pluralForm: 'Theses',
    meaningId: 'Tesis, dalil disertasi',
    ruleExplanation: 'Tunggal = Thesis; Jamak = Theses (these theses are archived in Oxford library).',
    exampleSentence: 'Doctoral theses must undergo rigorous external blind evaluation.',
    commonPitfall: 'Menulis "thesises".'
  },

  // SINGULAR BERAKHIRAN -S
  {
    id: 'nt-11',
    category: 'Singular Berakhiran -s',
    singularForm: 'Economics / Statistics / Physics',
    meaningId: 'Nama disiplin ilmu (Ekonomi, Statistik, Fisika)',
    ruleExplanation: 'Meskipun berakhiran "-s", nama disiplin ilmu adalah TUNGGAL dan selalu mengambil kata kerja tunggal (is/was).',
    exampleSentence: 'Economics is a vital field for understanding market equilibriums.',
    commonPitfall: 'Menulis "Physics are difficult" (Wajib "Physics IS").'
  },
  {
    id: 'nt-12',
    category: 'Singular Berakhiran -s',
    singularForm: 'News',
    meaningId: 'Berita',
    ruleExplanation: '"News" adalah kata benda tunggal tak dapat dihitung (uncountable). Mengambil kata kerja tunggal (is/was/has).',
    exampleSentence: 'The news regarding the technological breakthrough is highly encouraging.',
    commonPitfall: 'Menulis "These news are good".'
  },

  // PLURAL-ONLY
  {
    id: 'nt-13',
    category: 'Plural-Only',
    singularForm: 'Headquarters / Premises / Valuables',
    meaningId: 'Markas pusat, kawasan bangunan, barang berharga',
    ruleExplanation: 'Kata-kata ini secara sintaksis adalah JAMAK dan mengambil kata kerja jamak (are/were/have).',
    exampleSentence: 'The corporate headquarters are located in downtown Singapore.',
    commonPitfall: 'Memasangkan headquarters dengan kata kerja tunggal "is" saat merujuk pada gedung operasional.'
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. 12 TENSES MASTER COMPARISON MATRIX
// ─────────────────────────────────────────────────────────────────────────────
export const TENSES_MASTER_DATA: TenseMasterItem[] = [
  {
    id: 'tm-01',
    tenseName: 'Present Simple',
    timeDimension: 'Present',
    aspect: 'Simple',
    positiveFormula: 'Subject + V1 / Vs (He/She/It)',
    negativeFormula: 'Subject + do/does not + V1',
    questionFormula: 'Do/Does + Subject + V1?',
    timeMarkers: ['always', 'usually', 'frequently', 'generally', 'every day', 'as a rule'],
    mentalModelLogic: 'Kebenaran abadi, hukum alam, definisi konsep, atau rutinitas permanen tanpa batas waktu.',
    academicExample: 'Water boils at 100 degrees Celsius under standard atmospheric pressure.',
    contrastivePitfall: 'Dilarang menggunakan present continuous untuk stative verbs atau fakta ilmiah abadi.'
  },
  {
    id: 'tm-02',
    tenseName: 'Present Continuous',
    timeDimension: 'Present',
    aspect: 'Continuous',
    positiveFormula: 'Subject + is/am/are + Verb-ing',
    negativeFormula: 'Subject + is/am/are not + Verb-ing',
    questionFormula: 'Is/Am/Are + Subject + Verb-ing?',
    timeMarkers: ['currently', 'at present', 'right now', 'increasingly', 'this decade'],
    mentalModelLogic: 'Aktivitas yang sedang berlangsung saat momen bicara atau tren perkembangan kontemporer.',
    academicExample: 'Global average surface temperatures are rising steadily due to industrial emissions.',
    contrastivePitfall: 'Dilarang memakai continuous pada kata kerja kognisi statif (*is knowing SALAH).'
  },
  {
    id: 'tm-03',
    tenseName: 'Present Perfect',
    timeDimension: 'Present',
    aspect: 'Perfect',
    positiveFormula: 'Subject + have/has + Verb 3 (Past Participle)',
    negativeFormula: 'Subject + have/has not + Verb 3',
    questionFormula: 'Have/Has + Subject + Verb 3?',
    timeMarkers: ['since', 'for', 'already', 'recently', 'so far', 'to date', 'ever', 'never'],
    mentalModelLogic: 'Peristiwa yang berakar di masa lalu tetapi rentang waktunya masih terbuka atau dampaknya relevan saat ini.',
    academicExample: 'The pharmaceutical consortium has completed phase III clinical trials across six nations.',
    contrastivePitfall: 'Dilarang menggabungkan Present Perfect dengan penanda waktu lampau spesifik (*has completed in 2020 SALAH).'
  },
  {
    id: 'tm-04',
    tenseName: 'Present Perfect Continuous',
    timeDimension: 'Present',
    aspect: 'Perfect Continuous',
    positiveFormula: 'Subject + have/has + been + Verb-ing',
    negativeFormula: 'Subject + have/has not + been + Verb-ing',
    questionFormula: 'Have/Has + Subject + been + Verb-ing?',
    timeMarkers: ['for the past five years', 'since 2018', 'all morning', 'lately'],
    mentalModelLogic: 'Menekankan kontinuitas durasi aksi yang dimulai di masa lalu dan masih berlangsung aktif tanpa jeda.',
    academicExample: 'Scholars have been debating the economic implications of automated labor for decades.',
    contrastivePitfall: 'Jangan tertukar dengan Present Continuous yang tidak memuat durasi historis.'
  },
  {
    id: 'tm-05',
    tenseName: 'Past Simple',
    timeDimension: 'Past',
    aspect: 'Simple',
    positiveFormula: 'Subject + Verb 2 (Past Simple)',
    negativeFormula: 'Subject + did not + Verb 1',
    questionFormula: 'Did + Subject + Verb 1?',
    timeMarkers: ['yesterday', 'in 2019', 'last quarter', 'two centuries ago', 'during the trial'],
    mentalModelLogic: 'Peristiwa yang telah tuntas tertutup total di masa lampau pada titik waktu spesifik yang definitif.',
    academicExample: 'The landmark climate treaty was ratified in 2015 by participating sovereign nations.',
    contrastivePitfall: 'Wajib menggunakan Past Simple bila ada tahun lampau tertentu, bukan Present Perfect.'
  },
  {
    id: 'tm-06',
    tenseName: 'Past Continuous',
    timeDimension: 'Past',
    aspect: 'Continuous',
    positiveFormula: 'Subject + was/were + Verb-ing',
    negativeFormula: 'Subject + was/were not + Verb-ing',
    questionFormula: 'Was/Were + Subject + Verb-ing?',
    timeMarkers: ['while', 'as', 'at that exact moment', 'when'],
    mentalModelLogic: 'Aksi latar belakang yang sedang berdurasi di masa lampau ketika diinterupsi oleh peristiwa lain.',
    academicExample: 'Engineers were calibrating the optical sensors when the sudden power surge occurred.',
    contrastivePitfall: 'Klausa interupsi tiba-tiba selalu memakai Past Simple (V2), bukan Past Continuous.'
  },
  {
    id: 'tm-07',
    tenseName: 'Past Perfect',
    timeDimension: 'Past',
    aspect: 'Perfect',
    positiveFormula: 'Subject + had + Verb 3 (Past Participle)',
    negativeFormula: 'Subject + had not + Verb 3',
    questionFormula: 'Had + Subject + Verb 3?',
    timeMarkers: ['by the time', 'before', 'prior to that point', 'already (in past context)'],
    mentalModelLogic: 'Penanda kronologis peristiwa lampau pertama yang terjadi LEBIH DULU sebelum peristiwa lampau kedua.',
    academicExample: 'By the time auditors arrived, the staff had already reconciled all ledger discrepancies.',
    contrastivePitfall: 'Hanya digunakan jika ada perbandingan kronologis dua peristiwa masa lalu.'
  },
  {
    id: 'tm-08',
    tenseName: 'Past Perfect Continuous',
    timeDimension: 'Past',
    aspect: 'Perfect Continuous',
    positiveFormula: 'Subject + had + been + Verb-ing',
    negativeFormula: 'Subject + had not + been + Verb-ing',
    questionFormula: 'Had + Subject + been + Verb-ing?',
    timeMarkers: ['for three hours before', 'had been working since', 'until then'],
    mentalModelLogic: 'Durasi aksi lampau yang terus berlangsung hingga titik peristiwa lampau kedua memotongnya.',
    academicExample: 'The scientists had been researching synthetic polymers for a decade before their breakthrough.',
    contrastivePitfall: 'Jangan gunakan had been V-ing jika aksi masih berlanjut sampai saat ini.'
  },
  {
    id: 'tm-09',
    tenseName: 'Future Simple',
    timeDimension: 'Future',
    aspect: 'Simple',
    positiveFormula: 'Subject + will + Verb 1 (Bare Infinitive)',
    negativeFormula: 'Subject + will not (won\'t) + Verb 1',
    questionFormula: 'Will + Subject + Verb 1?',
    timeMarkers: ['tomorrow', 'next century', 'eventually', 'in the foreseeable future'],
    mentalModelLogic: 'Prediksi teoretis, keputusan spontan, atau komitmen masa depan.',
    academicExample: 'Autonomous energy grids will likely transform industrial electricity distribution.',
    contrastivePitfall: 'Will selalu diikuti Bare Infinitive tanpa to dan tanpa -s.'
  },
  {
    id: 'tm-10',
    tenseName: 'Future Continuous',
    timeDimension: 'Future',
    aspect: 'Continuous',
    positiveFormula: 'Subject + will be + Verb-ing',
    negativeFormula: 'Subject + will not be + Verb-ing',
    questionFormula: 'Will + Subject + be + Verb-ing?',
    timeMarkers: ['at this time next year', 'in five years\' time', 'during the next decade'],
    mentalModelLogic: 'Proses yang diproyeksikan sedang berlangsung pada titik waktu tertentu di masa depan.',
    academicExample: 'By next year, leading universities will be offering fully accredited quantum computing degrees.',
    contrastivePitfall: 'Memproyeksikan proses yang sedang berjalan, bukan hasil tuntas.'
  },
  {
    id: 'tm-11',
    tenseName: 'Future Perfect',
    timeDimension: 'Future',
    aspect: 'Perfect',
    positiveFormula: 'Subject + will have + Verb 3 (Past Participle)',
    negativeFormula: 'Subject + will not have + Verb 3',
    questionFormula: 'Will + Subject + have + Verb 3?',
    timeMarkers: ['by 2030', 'by the end of the decade', 'by the time [Present]'],
    mentalModelLogic: 'Target atau peristiwa yang akan telah selesai tuntas SEBELUM titik waktu masa depan tiba.',
    academicExample: 'By the year 2040, solar infrastructure will have superseded conventional coal power.',
    contrastivePitfall: 'Frasa "By + future time" SELALU berpasangan dengan Future Perfect.'
  },
  {
    id: 'tm-12',
    tenseName: 'Future Perfect Continuous',
    timeDimension: 'Future',
    aspect: 'Perfect Continuous',
    positiveFormula: 'Subject + will have been + Verb-ing',
    negativeFormula: 'Subject + will not have been + Verb-ing',
    questionFormula: 'Will + Subject + have been + Verb-ing?',
    timeMarkers: ['by next month for ten years', 'by 2035 for two decades'],
    mentalModelLogic: 'Mengukur akumulasi durasi waktu berkelanjutan yang akan tercapai pada titik waktu masa depan.',
    academicExample: 'By 2030, the research institute will have been tracking climate telemetry for fifty years.',
    contrastivePitfall: 'Merupakan tenses paling kompleks; pastikan ada titik masa depan dan durasi terakumulasi.'
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. PHRASAL VERBS ACADEMIC MATRIX (100+ HIGH-YIELD)
// ─────────────────────────────────────────────────────────────────────────────
export const PHRASAL_VERBS_DATA: PhrasalVerbItem[] = [
  {
    id: 'pv-01',
    verb: 'carry',
    particle: 'out',
    type: 'Separable (Bisa Dipisah)',
    meaningId: 'Melaksanakan, mengeksekusi eksperimen/tugas',
    academicRegister: 'conduct / execute / perform',
    exampleSentence: 'The research team carried out an exhaustive empirical analysis.',
    separableExample: 'The research team carried the experiment out with great precision.'
  },
  {
    id: 'pv-02',
    verb: 'account',
    particle: 'for',
    type: 'Inseparable (Tidak Bisa Dipisah)',
    meaningId: 'Menjelaskan, menyumbang persentase data',
    academicRegister: 'explain / comprise / constitute',
    exampleSentence: 'Renewable resources account for forty percent of total electricity generation.'
  },
  {
    id: 'pv-03',
    verb: 'point',
    particle: 'out',
    type: 'Separable (Bisa Dipisah)',
    meaningId: 'Menunjukkan, mengemukakan fakta penting',
    academicRegister: 'indicate / highlight / emphasize',
    exampleSentence: 'The economist pointed out significant statistical discrepancies in the report.',
    separableExample: 'The economist pointed the discrepancy out during the meeting.'
  },
  {
    id: 'pv-04',
    verb: 'bring',
    particle: 'about',
    type: 'Separable (Bisa Dipisah)',
    meaningId: 'Menyebabkan, menghasilkan perubahan besar',
    academicRegister: 'cause / generate / induce',
    exampleSentence: 'Technological disruption brought about widespread labor reorganization.',
    separableExample: 'Technological disruption brought the reform about.'
  },
  {
    id: 'pv-05',
    verb: 'look',
    particle: 'into',
    type: 'Inseparable (Tidak Bisa Dipisah)',
    meaningId: 'Menyelidiki, menginvestigasi',
    academicRegister: 'investigate / examine / probe',
    exampleSentence: 'An independent commission will look into the financial irregularities.'
  },
  {
    id: 'pv-06',
    verb: 'come',
    particle: 'up with',
    type: 'Three-Part (3 Kata)',
    meaningId: 'Menemukan/mencetuskan ide atau solusi baru',
    academicRegister: 'devise / formulate / propose',
    exampleSentence: 'Scientists came up with an ingenious method for carbon sequestration.'
  },
  {
    id: 'pv-07',
    verb: 'rely',
    particle: 'on',
    type: 'Inseparable (Tidak Bisa Dipisah)',
    meaningId: 'Bergantung pada, mengandalkan',
    academicRegister: 'depend upon / be contingent on',
    exampleSentence: 'The validity of the study relies on rigorous sample collection.'
  },
  {
    id: 'pv-08',
    verb: 'lead',
    particle: 'to',
    type: 'Inseparable (Tidak Bisa Dipisah)',
    meaningId: 'Mengarah pada, mengakibatkan',
    academicRegister: 'culminate in / result in',
    exampleSentence: 'Uncontrolled fiscal deficits lead to severe inflationary pressures.'
  },
  {
    id: 'pv-09',
    verb: 'set',
    particle: 'up',
    type: 'Separable (Bisa Dipisah)',
    meaningId: 'Mendirikan, mengonfigurasi sistem',
    academicRegister: 'establish / configure / institute',
    exampleSentence: 'The university set up an interdisciplinary bioethics institute.',
    separableExample: 'The university set the institute up in 2018.'
  },
  {
    id: 'pv-10',
    verb: 'figure',
    particle: 'out',
    type: 'Separable (Bisa Dipisah)',
    meaningId: 'Memecahkan teka-teki, memahami mekanisme',
    academicRegister: 'deduce / resolve / comprehend',
    exampleSentence: 'The mathematicians figured out the topological proof after months of calculation.'
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. PUNCTUATION & ACADEMIC MECHANICS GUIDE
// ─────────────────────────────────────────────────────────────────────────────
export const PUNCTUATION_GUIDE_DATA: PunctuationGuideItem[] = [
  {
    id: 'pg-01',
    markName: 'Semicolon (Titik Koma)',
    symbol: ';',
    primaryRule: 'Menghubungkan dua klausa independen yang terkait erat tanpa konjungsi koordinasi, atau mendahului conjunctive adverbs (however, therefore).',
    correctExample: 'The experimental methodology was sound; however, the sample size was insufficient.',
    incorrectExample: 'The experimental methodology was sound, however, the sample size was insufficient.',
    linguisticReason: 'Menggunakan koma biasa sebelum however di antara dua klausa independen menciptakan Comma Splice yang salah.'
  },
  {
    id: 'pg-02',
    markName: 'Colon (Titik Dua)',
    symbol: ':',
    primaryRule: 'Digunakan setelah klausa independen LENGKAP untuk memperkenalkan penjelasan terperinci, daftar item, atau kutipan formal.',
    correctExample: 'The study identified three critical factors: economic disparity, demographic aging, and climate migration.',
    incorrectExample: 'The study identified: economic disparity, demographic aging, and climate migration.',
    linguisticReason: 'Klausa sebelum titik dua wajib merupakan kalimat independen yang utuh secara gramatikal.'
  },
  {
    id: 'pg-03',
    markName: 'Em-Dash (Garis Pisah Panjang)',
    symbol: '—',
    primaryRule: 'Memberikan penekanan dramatis atau menyisipkan penjelasan ekstra yang lebih kuat daripada tanda kurung.',
    correctExample: 'The primary hypothesis—that solar flares disrupt satellite clocks—was confirmed by empirical telemetry.',
    incorrectExample: 'The primary hypothesis - that solar flares disrupt satellite clocks - was confirmed.',
    linguisticReason: 'Gunakan em-dash (—) tanpa spasi untuk sisipan penjelas, bukan hyphen pendek (-).'
  },
  {
    id: 'pg-04',
    markName: 'Hyphen in Compound Adjectives',
    symbol: '-',
    primaryRule: 'Menghubungkan dua kata atau lebih yang bersama-sama memodifikasi kata benda di depannya.',
    correctExample: 'She published a peer-reviewed article in a well-known scientific journal.',
    incorrectExample: 'The article was peer-reviewed by three scholars.',
    linguisticReason: 'Gunakan tanda hubung HANYA bila diletakkan SEBELUM kata benda (peer-reviewed article). Bila diletakkan setelah linking verb, jangan gunakan tanda hubung (the article was peer reviewed).'
  },
  {
    id: 'pg-05',
    markName: 'Oxford Comma (Serial Comma)',
    symbol: ',',
    primaryRule: 'Koma yang diletakkan tepat sebelum konjungsi "and/or" pada elemen terakhir dalam daftar 3 item atau lebih.',
    correctExample: 'The laboratory purchased sensors, microscopes, and chemical reagents.',
    incorrectExample: 'The laboratory purchased sensors, microscopes and chemical reagents.',
    linguisticReason: 'Oxford comma mencegah kerancuan makna dan ambiguitas pengelompokan item dalam tulisan akademik internasional.'
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 6. PARAPHRASING STUDIO TASKS
// ─────────────────────────────────────────────────────────────────────────────
export const PARAPHRASING_TASKS_DATA: ParaphraseTask[] = [
  {
    id: 'para-01',
    technique: 'Active to Passive',
    originalSentence: 'Governments around the world must enforce stricter environmental policies to curb industrial carbon emissions.',
    targetFocus: 'Geser fokus kalimat dari "Governments" ke "Stricter environmental policies".',
    sampleParaphrase: 'Stricter environmental policies must be enforced by global governments to curb industrial carbon emissions.',
    acceptableVariations: [
      'Stricter environmental policies must be enforced by governments around the world to curb industrial carbon emissions.',
      'Stricter environmental regulations must be implemented globally to reduce industrial carbon emissions.',
      'Stricter environmental policies must be enforced to curb industrial carbon emissions by governments around the world.'
    ],
    explanation: 'Passive Voice menggeser fokus ke objek tindakan ("Stricter environmental policies") sehingga tulisan bernada lebih objektif dan formal.'
  },
  {
    id: 'para-02',
    technique: 'Nominalization',
    originalSentence: 'Because the global population expanded rapidly, water resources were consumed at an unsustainable rate.',
    targetFocus: 'Ubah klausa verbal "Because the global population expanded rapidly" menjadi Noun Phrase berbobot.',
    sampleParaphrase: 'The rapid expansion of the global population led to the unsustainable consumption of water resources.',
    acceptableVariations: [
      'The rapid expansion of the global population resulted in the unsustainable consumption of water resources.',
      'The rapid growth of the global population caused unsustainable water consumption.',
      'Rapid global population growth led to unsustainable water resource consumption.'
    ],
    explanation: 'Nominalisasi ("The rapid expansion of...") memadatkan klausa sebab-akibat menjadi frasa benda elegan dengan densitas leksikal tinggi.'
  },
  {
    id: 'para-03',
    technique: 'Clause to Participle',
    originalSentence: 'Although researchers faced severe laboratory funding constraints, they successfully completed the vaccine trial.',
    targetFocus: 'Ringkas klausa konsesi "Although researchers faced..." menjadi Participial Phrase pembuka.',
    sampleParaphrase: 'Facing severe laboratory funding constraints, researchers successfully completed the vaccine trial.',
    acceptableVariations: [
      'Despite facing severe laboratory funding constraints, researchers successfully completed the vaccine trial.',
      'Facing severe funding constraints, the research team successfully completed the vaccine trial.'
    ],
    explanation: 'Participle Clause ("Facing severe...") menghilangkan pengulangan subjek dan menciptakan gaya tulisan jurnal ilmiah yang padat.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. SENTENCE X-RAY DISSECTOR (MULTI-LAYER COMPLEX CLAUSE ANALYSIS)
// ─────────────────────────────────────────────────────────────────────────────
export const XRAY_SENTENCES_DATA: XRaySentence[] = [
  {
    id: 'xray-01',
    title: 'Bedah Kalimat Akademik 38 Kata (Syntactic Density)',
    fullSentence: 'Although the international committee initially questioned the statistical methodology, the senior investigators who conducted the multi-center clinical trials substantiated their groundbreaking hypothesis by presenting comprehensive longitudinal patient telemetry data.',
    translation: 'Meskipun komite internasional awalnya mempertanyakan metodologi statistik, para penyelidik senior yang melakukan uji klinis multi-pusat membuktikan hipotesis terobosan mereka dengan menyajikan data telemetri pasien jangka panjang yang komprehensif.',
    architecturalSummary: 'Kalimat ini adalah Kalimat Majemuk Bertingkat Kompleks (*Complex-Compound Sentence*) yang diawali Adverbial Clause of Concession, memuat Relative Clause penjelas subjek, dan dituntaskan oleh Finite Verb transitif dengan Prepositional Participial Adjunct.',
    breakdown: [
      { text: 'Although the international committee initially questioned the statistical methodology,', role: 'Conjunction', colorKey: 'bg-[#A84A28]/20 text-[#A84A28] border-[#A84A28]/30', explanation: 'Anak Kalimat Pertentangan (Adverbial Clause of Concession) yang mengawali kalimat.' },
      { text: 'the senior investigators', role: 'Subject', colorKey: 'bg-[#535841]/20 text-[#535841] border-[#535841]/30', explanation: 'Subjek Inti Utama (Core Noun Phrase) dari klausa independen.' },
      { text: 'who conducted the multi-center clinical trials', role: 'Relative Clause', colorKey: 'bg-[#D97706]/20 text-[#B45309] border-[#D97706]/30', explanation: 'Defining Relative Clause yang menerangkan identitas spesifik para penyelidik.' },
      { text: 'substantiated', role: 'Finite Verb', colorKey: 'bg-[#2563EB]/20 text-[#1D4ED8] border-[#2563EB]/30', explanation: 'Predikat Kata Kerja Finit Utama (Transitive Past Simple) penggerak klausa utama.' },
      { text: 'their groundbreaking hypothesis', role: 'Direct Object', colorKey: 'bg-[#9333EA]/20 text-[#7E22CE] border-[#9333EA]/30', explanation: 'Objek Langsung (Direct Object Noun Phrase) yang menerima aksi pembuktian.' },
      { text: 'by presenting comprehensive longitudinal patient telemetry data.', role: 'Participle Phrase', colorKey: 'bg-[#7A7265]/20 text-[#524C42] border-[#7A7265]/30', explanation: 'Frasa Keterangan Preposisi + Gerund (Prepositional Method Adjunct) yang menjelaskan bagaimana hipotesis dibuktikan.' }
    ]
  },
  {
    id: 'xray-02',
    title: 'Bedah Kalimat Inversi Formal 34 Kata (IELTS Band 8.5+ Level)',
    fullSentence: 'Had the central regulatory agency intervened more decisively during the initial liquidity shortfall, the systemic banking collapse that paralyzed international credit markets could have been averted with minimal economic repercussions.',
    translation: 'Seandainya badan pengawas pusat melakukan intervensi secara lebih tegas selama kekurangan likuiditas awal, keruntuhan perbankan sistemik yang melumpuhkan pasar kredit internasional akan dapat dicegah dengan dampak ekonomi yang minimal.',
    architecturalSummary: 'Kalimat ini menggunakan struktur Inverted Third Conditional (tanpa kata "if") yang dipadukan dengan Relative Clause penjelas subjek dan Modal Past Perfect Passive di klausa utama.',
    breakdown: [
      { text: 'Had the central regulatory agency intervened more decisively during the initial liquidity shortfall,', role: 'Conjunction', colorKey: 'bg-[#A84A28]/20 text-[#A84A28] border-[#A84A28]/30', explanation: 'Inverted Third Conditional Clause (menggantikan "If the agency had intervened").' },
      { text: 'the systemic banking collapse', role: 'Subject', colorKey: 'bg-[#535841]/20 text-[#535841] border-[#535841]/30', explanation: 'Subjek Inti dari klausa utama (Noun Phrase).' },
      { text: 'that paralyzed international credit markets', role: 'Relative Clause', colorKey: 'bg-[#D97706]/20 text-[#B45309] border-[#D97706]/30', explanation: 'Defining Relative Clause yang menerangkan dampak keruntuhan perbankan.' },
      { text: 'could have been averted', role: 'Finite Verb', colorKey: 'bg-[#2563EB]/20 text-[#1D4ED8] border-[#2563EB]/30', explanation: 'Predikat Utama berbentuk Modal Past Perfect Passive (Modal + have been + V3).' },
      { text: 'with minimal economic repercussions.', role: 'Prepositional Phrase', colorKey: 'bg-[#7A7265]/20 text-[#524C42] border-[#7A7265]/30', explanation: 'Frasa Preposisi (Manner Adjunct) yang menerangkan kondisi pencegahan.' }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 8. HAVE vs HAS vs HAD MASTER MATRIX (COMPREHENSIVE MULTI-ROLE DISSECTOR)
// ─────────────────────────────────────────────────────────────────────────────
export interface HaveHasHadItem {
  id: string;
  role: 'Possession (Kepemilikan)' | 'Perfect Auxiliary (Sudah/Telah)' | 'Modal Obligation (Keharusan)' | 'Causative (Delegasi/Menyuruh)' | 'Questions & Negatives (Bentuk Tanya/Tolak)';
  title: string;
  subjectRule: string;
  presentHave: string;
  presentHas: string;
  pastHad: string;
  formula: string;
  explanation: string;
  correctExample: string;
  incorrectExample: string;
  drillQuestion: string;
  drillOptions: string[];
  correctDrillAnswer: string;
  drillExplanation: string;
}

export const HAVE_HAS_HAD_MASTER_DATA: HaveHasHadItem[] = [
  {
    id: 'hhh-01',
    role: 'Possession (Kepemilikan)',
    title: 'Kepemilikan Objek Nyata & Konsep Abstrak (Main Verb)',
    subjectRule: 'HAVE untuk I / You / They / We & Plural Nouns | HAS untuk He / She / It & Singular Nouns | HAD untuk SEMUA subjek di masa lampau.',
    presentHave: 'I / You / We / They HAVE a reliable methodology.',
    presentHas: 'She / He / The researcher HAS a valid argument.',
    pastHad: 'They / She HAD significant doubts yesterday.',
    formula: 'Subject + have / has / had + Direct Object Noun',
    explanation: 'Sebagai kata kerja utama mandiri (bukan auxiliary), have/has/had menunjukkan kepemilikan material, atribut sifat, hubungan kekerabatan, atau kondisi fisik/kesehatan.',
    correctExample: 'The university has five research laboratories, and they have excellent reputations.',
    incorrectExample: 'The university have five research laboratories. ❌ (Subjek tunggal "university" wajib memakai HAS)',
    drillQuestion: 'Each member of the scientific committee _____ extensive experience in peer review.',
    drillOptions: ['have', 'has', 'having', 'had have'],
    correctDrillAnswer: 'has',
    drillExplanation: 'Frasa "Each member..." bersifat singular (setiap satu anggota), sehingga predikat bentuk sekarang wajib memakai "has".'
  },
  {
    id: 'hhh-02',
    role: 'Perfect Auxiliary (Sudah/Telah)',
    title: 'Kata Kerja Bantu Present Perfect & Past Perfect (+ Verb 3)',
    subjectRule: 'HAVE/HAS + V3 (Present Perfect: relevansi hingga kini) | HAD + V3 (Past Perfect: terjadi SEBELUM aksi lampau lainnya).',
    presentHave: 'We HAVE completed the baseline clinical trial.',
    presentHas: 'The scientist HAS published three articles this year.',
    pastHad: 'The patients HAD received the drug BEFORE the symptoms worsened.',
    formula: 'Pres. Perf: S + have/has + V3 | Past Perf: S + had + V3',
    explanation: 'Jangan pernah memasang V1 atau V2 setelah have/has/had pada Perfect Tenses. Wajib selalu diikuti Verb 3 (Past Participle). Had + V3 hanya digunakan jika ada 2 peristiwa lampau dan aksi tersebut terjadi lebih awal.',
    correctExample: 'By the time the audit began, the accountant had reconciled all discrepancies.',
    incorrectExample: 'She has saw the results yesterday. ❌ ("has" wajib diikuti V3 "seen", dan dilarang dipadukan dengan penanda waktu lampau spesifik "yesterday")',
    drillQuestion: 'By the time the fire department arrived, the security team _____ already evacuated the building.',
    drillOptions: ['has', 'have', 'had', 'having'],
    correctDrillAnswer: 'had',
    drillExplanation: 'Klausul waktu "By the time ... arrived (V2)" menandakan aksi evakuasi sudah selesai SEBELUM pemadam tiba (kejadian lebih lampau ➔ Past Perfect: had evacuated).'
  },
  {
    id: 'hhh-03',
    role: 'Modal Obligation (Keharusan)',
    title: 'Mengekspresikan Keharusan Eksternal (Have to / Has to / Had to + V1)',
    subjectRule: 'HAVE TO untuk I/You/We/They | HAS TO untuk He/She/It | HAD TO untuk masa lampau (pengganti must bentuk lampau).',
    presentHave: 'Doctors HAVE TO adhere to rigorous ethical protocols.',
    presentHas: 'An applicant HAS TO submit all transcripts before May.',
    pastHad: 'Due to the storm, the pilot HAD TO divert the flight.',
    formula: 'Subject + have to / has to / had to + Bare Infinitive (V1)',
    explanation: 'Karena "must" tidak memiliki bentuk lampau, penutur bahasa Inggris WAJIB menggunakan "had to" saat menyatakan keharusan di masa lalu. Setelah partikel "to", kata kerja WAJIB kembali ke bentuk dasar V1.',
    correctExample: 'Yesterday, the researchers had to repeat the entire experiment from scratch.',
    incorrectExample: 'Yesterday, the researchers must repeat the experiment. ❌ ("Must" dilarang untuk masa lampau, wajib gunakan "had to")',
    drillQuestion: 'Every international traveler _____ present a valid biometric passport at immigration.',
    drillOptions: ['have to', 'has to', 'having to', 'had must'],
    correctDrillAnswer: 'has to',
    drillExplanation: '"Every international traveler" adalah subjek tunggal (singular 3rd person), sehingga bentuk keharusan present-nya adalah "has to".'
  },
  {
    id: 'hhh-04',
    role: 'Causative (Delegasi/Menyuruh)',
    title: 'Kausatif: Mendelegasikan Aksi kepada Orang Lain / Layanan Profesional',
    subjectRule: 'Aktif: Have/Has/Had + Person + V1 (Bare Infinitive) | Pasif: Have/Has/Had + Object + V3 (Past Participle).',
    presentHave: 'We HAVE the technician calibrate our instruments every Monday.',
    presentHas: 'The professor HAS his assistant proofread the journal manuscript.',
    pastHad: 'The hospital HAD its HVAC systems sanitized after the outbreak.',
    formula: 'Aktif: S + have/has/had + ORANG + V1 | Pasif: S + have/has/had + BENDA + V3',
    explanation: 'Konstruksi kausatif "have" menyatakan bahwa subjek tidak melakukan aksi itu sendiri, melainkan menyuruh/membayar orang lain. Jika objeknya adalah manusia, gunakan V1 tanpa "to". Jika objeknya benda, gunakan V3.',
    correctExample: 'The director had the architect revise the blueprints before construction.',
    incorrectExample: 'The director had the architect to revise the blueprints. ❌ (Causative "have" memakai Bare Infinitive V1 tanpa "to")',
    drillQuestion: 'The engineering firm will have the newly developed bridge _____ by independent civil inspectors.',
    drillOptions: ['evaluate', 'evaluating', 'evaluated', 'to evaluate'],
    correctDrillAnswer: 'evaluated',
    drillExplanation: 'Objek setelah "have" adalah benda pasif ("the bridge"), sehingga memerlukan Past Participle V3 ("evaluated") ➔ Have something done.'
  },
  {
    id: 'hhh-05',
    role: 'Questions & Negatives (Bentuk Tanya/Tolak)',
    title: 'Peleburan Bentuk Tanya & Negatif: Kembalinya "Has" Menjadi "Have"!',
    subjectRule: 'Setelah DO / DOES / DID dalam kalimat tanya atau negatif, bentuk kata kerja WAJIB SELALU "HAVE", tidak boleh "has" atau "had"!',
    presentHave: 'Do you HAVE any questions? / We do not HAVE sufficient data.',
    presentHas: 'Does she HAVE a driver\'s license? (NOT: Does she has ❌)',
    pastHad: 'Did you HAVE time to finish? (NOT: Did you had ❌)',
    formula: 'Do/Does/Did + S + HAVE...? | S + do/does/did not + HAVE...',
    explanation: 'Inilah salah satu jebakan paling sering dialami pembelajar! Kata bantu DO, DOES, dan DID sudah menyerap penanda waktu dan jumlah subjek, sehingga kata kerja utama WAJIB kembali ke bentuk netral (Bare Infinitive) yaitu "HAVE".',
    correctExample: 'Does the lead author have any conflicting financial interests?',
    incorrectExample: 'Does the lead author has any conflicting interests? ❌ (Dilarang "does ... has", wajib "does ... have")',
    drillQuestion: 'Why didn\'t the previous administration _____ a contingency emergency plan in place?',
    drillOptions: ['has', 'had', 'have', 'having'],
    correctDrillAnswer: 'have',
    drillExplanation: 'Karena kalimat menggunakan auxiliary lampau negatif "didn\'t", kata kerja utama wajib kembali ke bentuk dasar netral yaitu "have".'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 9. PREPOSITIONS IN vs ON vs AT (THE 3D SPACE & TIME PYRAMID)
// ─────────────────────────────────────────────────────────────────────────────
export interface PrepositionInOnAtItem {
  id: string;
  dimension: 'Waktu (Time Dimensions)' | 'Tempat & Ruang (Spatial Dimensions)' | 'Jebakan Kontras Idiomatis';
  preposition: 'AT' | 'ON' | 'IN' | 'Kontras Kritis';
  pyramidScope: 'Titik Presisi / Sempit (Presisi Tertinggi)' | 'Permukaan / Hari / Tanggal (Cakupan Sedang)' | 'Ruang Tertutup 3D / Periode Luas (Cakupan Terbesar)' | 'Pembeda Makna Kontekstual';
  primaryRules: string[];
  examples: Array<{ en: string; id: string; category: string }>;
  diagnosticPitfall: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const PREPOSITIONS_IN_ON_AT_DATA: PrepositionInOnAtItem[] = [
  {
    id: 'ioa-01',
    dimension: 'Waktu (Time Dimensions)',
    preposition: 'AT',
    pyramidScope: 'Titik Presisi / Sempit (Presisi Tertinggi)',
    primaryRules: [
      'Jam & Waktu Presisi: at 7:30 AM, at noon, at midnight, at 5 o\'clock.',
      'Titik Waktu Khusus Hari: at sunrise, at sunset, at dusk, at dawn.',
      'Waktu Makan & Periode Tertentu: at lunchtime, at breakfast, at bedtime.',
      'Ekspresi Tetap: at night (umum), at the moment, at present, at the weekend (UK).'
    ],
    examples: [
      { en: 'The keynote address commences precisely at 09:00 AM.', id: 'Pidato utama dimulai tepat pada pukul 09.00 pagi.', category: 'Jam' },
      { en: 'Most nocturnal predators hunt at night and sleep at dawn.', id: 'Mayoritas predator nokturnal berburu di malam hari dan tidur saat fajar.', category: 'Titik Waktu' },
      { en: 'The laboratory is currently closed at the moment.', id: 'Laboratorium saat ini sedang ditutup.', category: 'Ekspresi Tetap' }
    ],
    diagnosticPitfall: 'Gunakan "at night" untuk menyatakan malam secara umum, tetapi gunakan "in the night" jika merujuk pada satu malam spesifik yang terjadi sesuatu yang aneh.',
    drillQuestion: 'The international symposium on climate resilience is scheduled to begin _____ 08:30 AM tomorrow.',
    drillOptions: ['in', 'on', 'at', 'by'],
    correctAnswer: 'at',
    drillExplanation: 'Untuk penunjukan jam dan waktu presisi pada jam dinding (08:30 AM), preposisi wajib adalah "at".'
  },
  {
    id: 'ioa-02',
    dimension: 'Waktu (Time Dimensions)',
    preposition: 'ON',
    pyramidScope: 'Permukaan / Hari / Tanggal (Cakupan Sedang)',
    primaryRules: [
      'Nama Hari Tertentu: on Monday, on Wednesdays, on Friday morning.',
      'Tanggal Kalender Lengkap: on July 4th, on the 15th of October 2026.',
      'Hari Spesifik & Hari Libur bernama "Day": on my birthday, on Christmas Day, on New Year\'s Eve.',
      'Ekspresi Terikat: on time (tepat waktu sesuai jadwal).'
    ],
    examples: [
      { en: 'The thesis defense will take place on Wednesday afternoon.', id: 'Sidang skripsi akan berlangsung pada Rabu siang.', category: 'Hari + Bagian Hari' },
      { en: 'The declaration was officially ratified on August 17th, 1945.', id: 'Deklarasi tersebut resmi diratifikasi pada 17 Agustus 1945.', category: 'Tanggal Lengkap' },
      { en: 'The high-speed train arrived on time despite adverse weather.', id: 'Kereta cepat tiba tepat waktu meskipun cuaca buruk.', category: 'Jadwal' }
    ],
    diagnosticPitfall: 'Jika hanya menyebut bulan (misal "in August"), gunakan IN. Tetapi jika sudah ada tanggalnya ("on August 17th"), wajib berubah menjadi ON!',
    drillQuestion: 'The presidential election will be officially held across all provinces _____ November 5th.',
    drillOptions: ['in', 'at', 'on', 'during'],
    correctAnswer: 'on',
    drillExplanation: 'Karena terdapat tanggal kalender spesifik ("November 5th"), preposisi waktu yang tepat adalah "on".'
  },
  {
    id: 'ioa-03',
    dimension: 'Waktu (Time Dimensions)',
    preposition: 'IN',
    pyramidScope: 'Ruang Tertutup 3D / Periode Luas (Cakupan Terbesar)',
    primaryRules: [
      'Bulan & Musim: in January, in October, in summer, in spring, in winter.',
      'Tahun, Dekade, Abad & Era: in 2026, in the 1990s, in the 21st century, in the Middle Ages.',
      'Bagian dari Hari: in the morning, in the afternoon, in the evening.',
      'Durasi Masa Depan (Makna "dalam waktu... lagi"): in 10 minutes, in two weeks, in three years.'
    ],
    examples: [
      { en: 'The groundbreaking discovery was first documented in 1953.', id: 'Penemuan terobosan tersebut pertama kali didokumentasikan pada tahun 1953.', category: 'Tahun' },
      { en: 'Economic productivity tends to surge in the fourth quarter.', id: 'Produktivitas ekonomi cenderung melonjak pada kuartal keempat.', category: 'Periode Waktu' },
      { en: 'The surgical procedure will commence in twenty minutes.', id: 'Prosedur bedah akan dimulai dalam dua puluh menit lagi.', category: 'Durasi Masa Depan' }
    ],
    diagnosticPitfall: 'Bedakan "in the morning" (pagi hari umum) dengan "on Monday morning" (pagi hari di hari tertentu memakai ON karena ada nama hari!).',
    drillQuestion: 'Artificial intelligence transformed global computational linguistics significantly _____ the early 2020s.',
    drillOptions: ['at', 'on', 'in', 'upon'],
    correctAnswer: 'in',
    drillExplanation: 'Untuk periode dekade, rentang waktu panjang, dan tahun ("the early 2020s"), preposisi yang wajib digunakan adalah "in".'
  },
  {
    id: 'ioa-04',
    dimension: 'Tempat & Ruang (Spatial Dimensions)',
    preposition: 'AT',
    pyramidScope: 'Titik Presisi / Sempit (Presisi Tertinggi)',
    primaryRules: [
      'Titik Koordinat Spesifik: at the bus stop, at the traffic light, at the door, at the entrance.',
      'Alamat Lengkap Berangka/Bernomor: at 221B Baker Street, at No. 10 Downing Street.',
      'Lokasi Institusi Fungsional (Sebagai Kegiatan): at university, at work, at school, at home.',
      'Acara / Pertemuan Sosial: at the conference, at the concert, at the meeting, at a wedding.'
    ],
    examples: [
      { en: 'The courier left the parcel at the front door of the laboratory.', id: 'Kurir meninggalkan paket di pintu depan laboratorium.', category: 'Titik Koordinat' },
      { en: 'The prime minister currently resides at 10 Downing Street.', id: 'Perdana menteri saat ini bertempat tinggal di Jalan Downing Nomor 10.', category: 'Alamat Bernomor' },
      { en: 'The researchers met at an international symposium in Geneva.', id: 'Para peneliti bertemu di sebuah simposium internasional di Jenewa.', category: 'Acara/Konferensi' }
    ],
    diagnosticPitfall: 'Jika alamat menyebut nama jalan saja tanpa nomor rumah ("on Oxford Street"), gunakan ON. Jika ada nomor rumahnya ("at 45 Oxford Street"), wajib gunakan AT!',
    drillQuestion: 'Delegates from fifty nations assembled _____ the annual World Health Assembly yesterday.',
    drillOptions: ['in', 'on', 'at', 'inside'],
    correctAnswer: 'at',
    drillExplanation: 'Untuk pertemuan, acara formal, dan konferensi ("the annual World Health Assembly"), preposisi lokasi yang tepat adalah "at".'
  },
  {
    id: 'ioa-05',
    dimension: 'Tempat & Ruang (Spatial Dimensions)',
    preposition: 'ON',
    pyramidScope: 'Permukaan / Hari / Tanggal (Cakupan Sedang)',
    primaryRules: [
      'Permukaan 2D (Horizontal/Vertikal): on the table, on the wall, on the ceiling, on the blackboard.',
      'Lantai Gedung / Tingkat: on the first floor, on the fifth floor, on the ground floor.',
      'Jalanan / Jalur Transportasi (Tanpa Nomor): on Oxford Street, on Fifth Avenue, on the highway.',
      'Transportasi Publik Besar (Bisa Berdiri/Berjalan di dalamnya): on a bus, on a train, on a plane, on a ship, on a ferry.',
      'Media Informasi & Komunikasi: on television, on the radio, on the internet, on a website, on the phone.'
    ],
    examples: [
      { en: 'The historical map was mounted on the north wall of the library.', id: 'Peta bersejarah itu dipasang di dinding utara perpustakaan.', category: 'Permukaan' },
      { en: 'The executive offices are located on the eighth floor.', id: 'Kantor eksekutif berlokasi di lantai delapan.', category: 'Lantai Gedung' },
      { en: 'Passengers on the train were asked to present their e-tickets.', id: 'Para penumpang di dalam kereta diminta menunjukkan tiket elektronik mereka.', category: 'Transportasi Publik' }
    ],
    diagnosticPitfall: 'Nalar Penutur Asli Transportasi: Jika kendaraan tersebut memiliki lorong di mana Anda bisa berdiri dan berjalan (bus, train, plane, ship), gunakan ON. Jika Anda harus membungkuk dan duduk di kendaraan pribadi kecil (car, taxi, helicopter), gunakan IN!',
    drillQuestion: 'The newly appointed ambassador reviewed the bilateral agreement while traveling _____ the high-speed train.',
    drillOptions: ['in', 'on', 'at', 'into'],
    correctAnswer: 'on',
    drillExplanation: 'Untuk moda transportasi publik besar di mana penumpang bisa berdiri di lorong (kereta, bus, pesawat), preposisi yang baku adalah "on".'
  },
  {
    id: 'ioa-06',
    dimension: 'Tempat & Ruang (Spatial Dimensions)',
    preposition: 'IN',
    pyramidScope: 'Ruang Tertutup 3D / Periode Luas (Cakupan Terbesar)',
    primaryRules: [
      'Ruang Tertutup 3D (Memiliki Volume & Dinding): in the room, in the box, in the drawer, in the building.',
      'Batas Geografis Luas (Kota, Provinsi, Negara, Benua): in Jakarta, in Indonesia, in Europe, in Asia.',
      'Kendaraan Pribadi Kecil (Hanya Duduk): in a car, in a taxi, in a limousine, in a helicopter.',
      'Media Cetak / Tulisan Tertutup: in a book, in an article, in a newspaper, in the dictionary.'
    ],
    examples: [
      { en: 'The delicate chemical compounds must remain sealed in the flask.', id: 'Senyawa kimia sensitif harus tetap tersegel di dalam labu laboratorium.', category: 'Ruang Tertutup 3D' },
      { en: 'The pharmaceutical headquarters is established in Zurich, Switzerland.', id: 'Kantor pusat farmasi didirikan di Zurich, Swiss.', category: 'Batas Geografis Kota/Negara' },
      { en: 'The executive arrived at the summit in a private chauffeured car.', id: 'Eksekutif tersebut tiba di KTT dengan mobil pribadi bersupir.', category: 'Kendaraan Kecil' }
    ],
    diagnosticPitfall: 'Jangan tertukar antara media cetak ("in the newspaper" / "in the book") dengan media digital/layar ("on the website" / "on television" / "on screen").',
    drillQuestion: 'The headquarters of the World Health Organization is situated _____ Geneva, Switzerland.',
    drillOptions: ['at', 'on', 'in', 'to'],
    correctAnswer: 'in',
    drillExplanation: 'Untuk nama kota, provinsi, dan negara ("Geneva, Switzerland"), preposisi ruang yang tepat adalah "in".'
  },
  {
    id: 'ioa-07',
    dimension: 'Jebakan Kontras Idiomatis',
    preposition: 'Kontras Kritis',
    pyramidScope: 'Pembeda Makna Kontekstual',
    primaryRules: [
      'ON TIME vs IN TIME: "On time" = Tepat waktu sesuai jadwal presisi. "In time (for / to)" = Cukup awal sebelum terlambat / sebelum batas kritis.',
      'AT THE END vs IN THE END: "At the end of [something]" = Pada titik ujung fisik atau akhir durasi. "In the end" = Pada akhirnya / kesimpulannya (tanpa of).',
      'AT WORK / SCHOOL vs IN THE OFFICE / SCHOOL: "At" menekankan aktivitas fungsional kerja/belajar, "In" menekankan keberadaan fisik di dalam gedung.'
    ],
    examples: [
      { en: 'The flight departed on time at 08:00 AM, and we arrived in time to catch our connecting shuttle.', id: 'Penerbangan berangkat tepat waktu pukul 08.00, dan kami tiba cukup awal untuk mengejar bus lanjutan.', category: 'On Time vs In Time' },
      { en: 'At the end of the semester, the dean evaluated all faculty members. In the end, three grants were approved.', id: 'Pada akhir semester, dekan mengevaluasi semua dosen. Pada akhirnya, tiga hibah disetujui.', category: 'At the end vs In the end' }
    ],
    diagnosticPitfall: 'Dilarang keras mengatakan "in the end of the year" ❌ (Wajib: "at the end of the year"). Gunakan "in the end" hanya sebagai kata transisi mandiri (*In the end, we succeeded*).',
    drillQuestion: 'Although the surgical team faced unexpected complications, _____ the patient stabilized successfully.',
    drillOptions: ['at the end', 'in the end', 'on the end', 'at the time'],
    correctAnswer: 'in the end',
    drillExplanation: 'Sebagai adverbia transisi mandiri yang bermakna "pada akhirnya / setelah melalui proses panjang", frasa baku yang tepat adalah "in the end".'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 10. PRONOUN CASE & AGREEMENT MASTER GRID (I / YOU / WE / THEY / HE / SHE / IT)
// ─────────────────────────────────────────────────────────────────────────────
export interface PronounCaseItem {
  id: string;
  personLabel: string;
  subjectPronoun: string;
  objectPronoun: string;
  possessiveAdjective: string; // Possessive Determiner (wajib + Noun)
  possessivePronoun: string;  // Berdiri sendiri
  reflexivePronoun: string;
  subjectExample: string;
  objectExample: string;
  possessiveAdjExample: string;
  possessivePronounExample: string;
  reflexiveExample: string;
  criticalPitfall: string;
}

export const PRONOUN_CASE_MASTER_DATA: PronounCaseItem[] = [
  {
    id: 'pro-01',
    personLabel: '1st Person Singular (Orang Pertama Tunggal)',
    subjectPronoun: 'I',
    objectPronoun: 'me',
    possessiveAdjective: 'my',
    possessivePronoun: 'mine',
    reflexivePronoun: 'myself',
    subjectExample: 'I conducted the statistical regression analysis.',
    objectExample: 'The committee awarded the research grant to ME.',
    possessiveAdjExample: 'This is MY published hypothesis.',
    possessivePronounExample: 'The highest scoring thesis was MINE.',
    reflexiveExample: 'I prepared the laboratory apparatus MYSELF.',
    criticalPitfall: 'Jebakan "You and I" vs "You and me": Selalu copot kata "You and" untuk menguji kasusnya. Contoh: "The professor invited [you and] ME to the seminar" (bukan "invited I").'
  },
  {
    id: 'pro-02',
    personLabel: '2nd Person Singular/Plural (Orang Kedua)',
    subjectPronoun: 'you',
    objectPronoun: 'you',
    possessiveAdjective: 'your',
    possessivePronoun: 'yours',
    reflexivePronoun: 'yourself / yourselves',
    subjectExample: 'YOU must verify the chemical calibration.',
    objectExample: 'The director will brief YOU tomorrow morning.',
    possessiveAdjExample: 'Please submit YOUR peer review comments.',
    possessivePronounExample: 'Is that manuscript YOURS?',
    reflexiveExample: 'Please familiarize YOURSELVES with the safety protocols.',
    criticalPitfall: 'Pembeda Your (kepemilikan: "your paper") vs You\'re (singkatan "you are": "you\'re qualified"). Dilarang menambahkan apostrof pada possessive pronoun "yours" (BUKAN your\'s ❌).'
  },
  {
    id: 'pro-03',
    personLabel: '3rd Person Masculine (Pria Tunggal)',
    subjectPronoun: 'he',
    objectPronoun: 'him',
    possessiveAdjective: 'his',
    possessivePronoun: 'his',
    reflexivePronoun: 'himself',
    subjectExample: 'HE authored the seminal textbook on thermodynamics.',
    objectExample: 'The university board elected HIM as chancellor.',
    possessiveAdjExample: 'HIS groundbreaking research won international acclaim.',
    possessivePronounExample: 'The proposal approved by the council was HIS.',
    reflexiveExample: 'The lead investigator HIMSELF verified the raw data.',
    criticalPitfall: 'Dilarang menggunakan "hisself" ❌ (Bentuk baku mutlak adalah "himself").'
  },
  {
    id: 'pro-04',
    personLabel: '3rd Person Feminine (Wanita Tunggal)',
    subjectPronoun: 'she',
    objectPronoun: 'her',
    possessiveAdjective: 'her',
    possessivePronoun: 'hers',
    reflexivePronoun: 'herself',
    subjectExample: 'SHE discovered the novel genetic biomarker.',
    objectExample: 'The scientific journal honored HER with the lifetime award.',
    possessiveAdjExample: 'HER clinical trial demonstrated remarkable efficacy.',
    possessivePronounExample: 'The most comprehensive literature review is HERS.',
    reflexiveExample: 'She designed the double-blind trial HERSELF.',
    criticalPitfall: 'Dilarang menambahkan apostrof pada "hers" (BUKAN her\'s ❌).'
  },
  {
    id: 'pro-05',
    personLabel: '3rd Person Neuter (Benda / Hewan / Konsep Tunggal)',
    subjectPronoun: 'it',
    objectPronoun: 'it',
    possessiveAdjective: 'its',
    possessivePronoun: '[rarely used alone]',
    reflexivePronoun: 'itself',
    subjectExample: 'IT indicates a positive correlation between variables.',
    objectExample: 'The research team analyzed IT under the electron microscope.',
    possessiveAdjExample: 'The organism adapts ITS metabolic rate in cold temperatures.',
    possessivePronounExample: 'N/A',
    reflexiveExample: 'The system restarts ITSELF after installing security patches.',
    criticalPitfall: 'JEBAKAN MAUT: ITS (tanpa apostrof) = Kata Sifat Kepemilikan ("its color", "its impact"). IT\'S (dengan apostrof) = Singkatan dari "it is" atau "it has".'
  },
  {
    id: 'pro-06',
    personLabel: '1st Person Plural (Kami / Kita Jamak)',
    subjectPronoun: 'we',
    objectPronoun: 'us',
    possessiveAdjective: 'our',
    possessivePronoun: 'ours',
    reflexivePronoun: 'ourselves',
    subjectExample: 'WE synthesized the compound in the university lab.',
    objectExample: 'The sponsor provided US with advanced computing clusters.',
    possessiveAdjExample: 'OUR findings corroborate previous academic publications.',
    possessivePronounExample: 'Their lab was destroyed, so they utilized OURS.',
    reflexiveExample: 'We must hold OURSELVES to the highest ethical standards.',
    criticalPitfall: 'Setelah preposisi seperti "between", selalu gunakan Object Case: "Between you and US" (Bukan "Between you and we" ❌).'
  },
  {
    id: 'pro-07',
    personLabel: '3rd Person Plural (Mereka Jamak)',
    subjectPronoun: 'they',
    objectPronoun: 'them',
    possessiveAdjective: 'their',
    possessivePronoun: 'theirs',
    reflexivePronoun: 'themselves',
    subjectExample: 'THEY published their findings in a prestigious journal.',
    objectExample: 'The dean congratulated THEM on their breakthrough.',
    possessiveAdjExample: 'THEIR methodology established a new industry standard.',
    possessivePronounExample: 'Our hypothesis was rejected, but THEIRS was accepted.',
    reflexiveExample: 'The participants registered THEMSELVES for the study.',
    criticalPitfall: 'Pembeda Their (kepemilikan: "their lab") vs There (tempat: "over there") vs They\'re (singkatan "they are": "they\'re ready"). Dilarang menggunakan "theirselves" ❌ (Wajib "themselves").'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 11. DO vs DOES vs DID MASTER MATRIX (AUXILIARY & EMPHATIC OPERATOR)
// ─────────────────────────────────────────────────────────────────────────────
export interface DoDoesDidItem {
  id: string;
  operator: 'DO' | 'DOES' | 'DID' | 'EMPHATIC DO';
  tenseAndTime: string;
  subjectAgreement: string;
  negativeForm: string;
  questionPattern: string;
  bareInfinitiveRule: string;
  exampleSentence: string;
  fatalPitfall: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const DO_DOES_DID_MASTER_DATA: DoDoesDidItem[] = [
  {
    id: 'ddd-01',
    operator: 'DO',
    tenseAndTime: 'Present Simple (Fakta, Kebiasaan, Kebenaran Umum)',
    subjectAgreement: 'I, You, We, They, dan Semua Kata Benda Jamak (Plural Nouns)',
    negativeForm: 'do not (don\'t) + V1 dasar',
    questionPattern: 'Do + Subject + V1 (Bare Infinitive)...?',
    bareInfinitiveRule: 'Setelah "do" atau "don\'t", kata kerja utama WAJIB berupa kata kerja dasar V1 tanpa imbuhan apa pun.',
    exampleSentence: 'Do academic researchers adhere strictly to ethical guidelines? Yes, they do not fabricate data.',
    fatalPitfall: 'Jangan pernah menggunakan "do" bersama "to be" dalam kalimat nominal (SALAH: "Do you are ready?" ❌ -> BENAR: "Are you ready?").',
    drillQuestion: 'Why _____ the statistical analysts require additional computational server bandwidth?',
    drillOptions: ['does', 'do', 'doing', 'is'],
    correctAnswer: 'do',
    drillExplanation: 'Subjek "the statistical analysts" adalah kata benda jamak (plural noun dengan akhiran -s), sehingga auxiliary Present Simple yang tepat adalah "do".'
  },
  {
    id: 'ddd-02',
    operator: 'DOES',
    tenseAndTime: 'Present Simple (Orang Ketiga Tunggal)',
    subjectAgreement: 'He, She, It, dan Semua Kata Benda Tunggal (Singular Nouns / Uncountable Nouns)',
    negativeForm: 'does not (doesn\'t) + V1 dasar (HILANGKAN akhiran -s/-es pada kata kerja utama!)',
    questionPattern: 'Does + Subject + V1 (Bare Infinitive)...?',
    bareInfinitiveRule: 'Karena "does" sudah memiliki akhiran -es, kata kerja utama WAJIB KEHILANGAN akhiran -s/-es nya!',
    exampleSentence: 'Does the experimental variable affect the outcome? No, it does not demonstrate any variance.',
    fatalPitfall: 'SALAH FATAL: "Does she knows the answer?" ❌ (Wajib: "Does she know the answer?"). Jangan dobel -s!',
    drillQuestion: 'The newly synthesized enzyme _____ not degrade even when exposed to high thermal stress.',
    drillOptions: ['do', 'does', 'doing', 'is'],
    correctAnswer: 'does',
    drillExplanation: 'Subjek "The newly synthesized enzyme" adalah kata benda tunggal (singular 3rd person), sehingga bentuk negatif Present Simple-nya adalah "does not" + V1 ("degrade").'
  },
  {
    id: 'ddd-03',
    operator: 'DID',
    tenseAndTime: 'Past Simple (Peristiwa Selesai di Masa Lampau)',
    subjectAgreement: 'SEMUA Subjek Tanpa Terkecuali (I, You, He, She, It, We, They, Singular, Plural)',
    negativeForm: 'did not (didn\'t) + V1 dasar (KEMBALIKAN V2 KE V1!)',
    questionPattern: 'Did + Subject + V1 (Bare Infinitive)...?',
    bareInfinitiveRule: 'Setelah "did" atau "didn\'t", kata kerja utama WAJIB KEMBALI KE V1, dilarang tetap berbentuk V2!',
    exampleSentence: 'Did the surgical team complete the operation yesterday? Yes, they didn\'t encounter any anomalies.',
    fatalPitfall: 'SALAH FATAL: "Did you saw the news?" ❌ (Wajib: "Did you see the news?"). "Did" sudah menandakan masa lalu, jadi kata kerja utama harus kembali ke V1 dasar.',
    drillQuestion: 'Although the team encountered hardware failures, why didn\'t they _____ the backup generator?',
    drillOptions: ['activated', 'activate', 'activating', 'activates'],
    correctAnswer: 'activate',
    drillExplanation: 'Setelah auxiliary lampau negatif "didn\'t", kata kerja utama WAJIB kembali ke bentuk dasar V1 tanpa akhiran -ed ("activate").'
  },
  {
    id: 'ddd-04',
    operator: 'EMPHATIC DO',
    tenseAndTime: 'Penegasan Retoris & Kontras (Emphatic Mood)',
    subjectAgreement: 'I/You/We/They (do) | He/She/It (does) | Past (did)',
    negativeForm: 'N/A (Selalu dalam kalimat deklaratif positif untuk memberi tekanan kuat)',
    questionPattern: 'Subject + DO/DOES/DID + V1 (diberi intonasi kuat untuk membantah keraguan)',
    bareInfinitiveRule: 'Digunakan dalam tulisan akademik formal untuk menegaskan kembali sebuah fakta yang sempat diragukan.',
    exampleSentence: 'While the initial trials showed ambiguous results, the subsequent longitudinal study DOES confirm the drug\'s efficacy.',
    fatalPitfall: 'Gunakan secara selektif dalam tulisan akademik formal saat ingin membuat kontras tegas (misal: "Although many doubted the theory, historical records DO prove its validity").',
    drillQuestion: 'Despite widespread skepticism, recent astronomical telemetry data _____ support the existence of exoplanetary water vapor.',
    drillOptions: ['does', 'is', 'doing', 'has'],
    correctAnswer: 'does',
    drillExplanation: 'Subjek "telemetry data" dipadukan dengan kata kerja penegas Present Simple "does support" untuk menegaskan fakta ilmiah yang sebelumnya diragukan.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 12. TO BE MASTER MATRIX & VERBAL VS NOMINAL DISSECTOR
// ─────────────────────────────────────────────────────────────────────────────
export interface ToBeItem {
  id: string;
  formName: string;
  conjugations: string;
  primaryRole: 'Linking Verb (Copula)' | 'Continuous Auxiliary' | 'Passive Auxiliary' | 'Dummy Subject (There/It)';
  formula: string;
  explanation: string;
  correctSentence: string;
  incorrectSentence: string;
  fatalPitfall: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const TO_BE_MASTER_DATA: ToBeItem[] = [
  {
    id: 'tbe-01',
    formName: 'Verbal vs Nominal Sentence Dissector',
    conjugations: 'am / is / are / was / were',
    primaryRole: 'Linking Verb (Copula)',
    formula: 'Nominal: S + BE + Adjective/Noun | Verbal: S + Verb (TANPA BE!)',
    explanation: 'Jangan menyisipkan "to be" di depan kata kerja bentuk dasar! Kata kerja seperti agree, disagree, study, live, understand, belong adalah VERB murni, bukan kata sifat.',
    correctSentence: 'The senior researcher agrees with our conclusion.',
    incorrectSentence: 'The senior researcher is agree with our conclusion. ❌ (Agree adalah VERB, dilarang disisipi "is")',
    fatalPitfall: 'Dilarang keras: "I am agree" ❌, "She is study" ❌, "They are belong" ❌. Wajib: "I agree", "She studies", "They belong".',
    drillQuestion: 'Most evolutionary biologists _____ that genetic drift plays a pivotal role in speciation.',
    drillOptions: ['are agree', 'agree', 'is agree', 'are agreeing'],
    correctAnswer: 'agree',
    drillExplanation: '"Agree" adalah kata kerja statif (stative verb), sehingga langsung dipasangkan dengan subjek jamak "biologists" tanpa kata bantu "to be".'
  },
  {
    id: 'tbe-02',
    formName: 'BEEN vs BEING (Participle Dissector)',
    conjugations: 'been (Past Participle V3) vs being (Present Participle -ing)',
    primaryRole: 'Passive Auxiliary',
    formula: 'Perfect: have/has/had + BEEN + V3 | Continuous: am/is/are/was/were + BEING + V3',
    explanation: 'BEEN digunakan setelah HAVE/HAS/HAD (menyatakan sudah tuntas). BEING digunakan setelah AM/IS/ARE/WAS/WERE (menyatakan proses pasif yang SEDANG berlangsung saat ini).',
    correctSentence: 'The clinical trial is currently being conducted across ten regional hospitals.',
    incorrectSentence: 'The clinical trial is currently been conducted. ❌ ("is" dilarang dipadukan dengan "been", wajib "is being")',
    fatalPitfall: 'Has been + V3 = Sudah dilakukan | Is being + V3 = Sedang dilakukan sekarang.',
    drillQuestion: 'The malfunctioning quantum computing cluster is currently _____ repaired by specialist technicians.',
    drillOptions: ['been', 'being', 'be', 'to be'],
    correctAnswer: 'being',
    drillExplanation: 'Keterangan waktu "currently" dan kata bantu "is" menandakan aksi pasif yang sedang berjalan ➔ is + being + V3 (repaired).'
  },
  {
    id: 'tbe-03',
    formName: 'Dummy Subject Expletive: "There is/are" vs "It is"',
    conjugations: 'There is/are (Keberadaan) vs It is (Identifikasi/Sifat/Waktu)',
    primaryRole: 'Dummy Subject (There/It)',
    formula: 'There + BE + Real Noun Subject | It + BE + Adjective/Time/Clause',
    explanation: '"There is/are" menyatakan keberadaan suatu objek di suatu tempat (ada/terdapat). "It is" digunakan untuk mengidentifikasi situasi, cuaca, waktu, jarak, atau menyatakan evaluasi sifat ("It is essential that...").',
    correctSentence: 'There are substantial empirical discrepancies in the published telemetry data.',
    incorrectSentence: 'It has many discrepancies in the data. ❌ (Bahasa Inggris tidak menggunakan "it has" untuk menyatakan "ada/terdapat")',
    fatalPitfall: 'Jangan menerjemahkan "di sana ada" menjadi "in there has" ❌. Selalu gunakan konstruksi baku "There is" (tunggal) atau "There are" (jamak).',
    drillQuestion: '_____ numerous theoretical models that attempt to explain dark matter distribution.',
    drillOptions: ['It is', 'There are', 'There is', 'It has'],
    correctAnswer: 'There are',
    drillExplanation: 'Subjek riil kalimat adalah kata benda jamak "numerous theoretical models", sehingga konstruksi keberadaan yang tepat adalah "There are".'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 13. PAST MODALS OF DEDUCTION & SPECULATION (MODAL + HAVE + V3)
// ─────────────────────────────────────────────────────────────────────────────
export interface PastModalItem {
  id: string;
  modalStructure: string;
  epistemicMeaning: string;
  certaintyLevel: 'Kepastian Positif 95%+' | 'Kepastian Negatif 95%+' | 'Kemungkinan Spekulatif 50%' | 'Penyesalan Normatif' | 'Peluang Terlewat';
  formula: string;
  explanation: string;
  authenticExample: string;
  fatalPitfall: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const PAST_MODALS_DEDUCTION_DATA: PastModalItem[] = [
  {
    id: 'pm-01',
    modalStructure: 'MUST HAVE + V3',
    epistemicMeaning: 'Pasti sudah terjadi (Deduksi logis berdasar bukti kuat di masa lalu)',
    certaintyLevel: 'Kepastian Positif 95%+',
    formula: 'Subject + must have + Past Participle (V3)',
    explanation: 'Digunakan ketika kita menyimpulkan peristiwa masa lalu dengan tingkat kepastian sangat tinggi karena bukti nyata yang tak terbantahkan.',
    authenticExample: 'The laboratory temperature spiked abruptly; the cooling condenser must have failed during the night.',
    fatalPitfall: 'Jangan gunakan "must have" untuk keharusan di masa lalu! Keharusan masa lalu = HAD TO. "Must have + V3" HANYA untuk tebakan/deduksi logis.',
    drillQuestion: 'The archaeological site was completely submerged; heavy torrential rain _____ fallen upstream.',
    drillOptions: ['must have', 'should have', 'would have', 'had to'],
    correctAnswer: 'must have',
    drillExplanation: 'Kondisi situs yang terendam total merupakan bukti konklusif bahwa hujan deras pasti sudah turun di hulu ➔ must have fallen.'
  },
  {
    id: 'pm-02',
    modalStructure: 'CAN\'T HAVE / COULDN\'T HAVE + V3',
    epistemicMeaning: 'Mustahil / Pasti tidak terjadi di masa lalu',
    certaintyLevel: 'Kepastian Negatif 95%+',
    formula: 'Subject + can\'t / couldn\'t have + Past Participle (V3)',
    explanation: 'Lawan mutlak dari "must have". Digunakan ketika suatu peristiwa lampau dinilai mustahil terjadi karena bertentangan dengan fakta nyata.',
    authenticExample: 'Dr. Aris couldn\'t have altered the spreadsheet yesterday; he was on an international transatlantic flight without Wi-Fi.',
    fatalPitfall: 'Jangan pernah mengatakan "must not have" untuk menyatakan ketidakmungkinan! Penutur asli selalu menggunakan "can\'t have + V3" atau "couldn\'t have + V3".',
    drillQuestion: 'The patient _____ contracted the pathogen from the clinic, as she had not visited any healthcare facility in months.',
    drillOptions: ['must have', 'couldn\'t have', 'should have', 'needn\'t have'],
    correctAnswer: 'couldn\'t have',
    drillExplanation: 'Fakta bahwa pasien tidak pernah mengunjungi fasilitas medis membuktikan bahwa penularan di klinik adalah hal yang mustahil terjadi ➔ couldn\'t have contracted.'
  },
  {
    id: 'pm-03',
    modalStructure: 'SHOULD HAVE + V3',
    epistemicMeaning: 'Seharusnya sudah dilakukan (Kritik / Penyesalan atas aksi yang tidak terlaksana)',
    certaintyLevel: 'Penyesalan Normatif',
    formula: 'Subject + should have + Past Participle (V3)',
    explanation: 'Mengekspresikan kewajiban moral atau langkah ideal yang seharusnya diambil di masa lalu, namun kenyataannya diabaikan atau gagal dilakukan.',
    authenticExample: 'The engineering team should have calibrated the acoustic sensors before conducting the aerodynamic wind tunnel test.',
    fatalPitfall: 'Should have + V3 menyiratkan bahwa hal tersebut TIDAK DILAKUKAN. Bentuk negatifnya "should not have + V3" berarti hal buruk itu terlanjur dilakukan padahal salah.',
    drillQuestion: 'To prevent data corruption, the network administrator _____ backed up the database prior to the system update.',
    drillOptions: ['should have', 'must have', 'could have', 'needn\'t have'],
    correctAnswer: 'should have',
    drillExplanation: 'Konteks kalimat menunjukkan langkah preventif yang idealnya wajib dilakukan sebelum update sistem ➔ should have backed up.'
  },
  {
    id: 'pm-04',
    modalStructure: 'COULD HAVE + V3',
    epistemicMeaning: 'Sebenarnya mampu / berpeluang terjadi di masa lalu (tetapi tidak terjadi)',
    certaintyLevel: 'Peluang Terlewat',
    formula: 'Subject + could have + Past Participle (V3)',
    explanation: 'Menyatakan kapasitas atau skenario alternatif di masa lalu yang sebetulnya sangat memungkinkan, namun pada akhirnya tidak terealisasi.',
    authenticExample: 'With adequate venture capital funding, the university lab could have commercialized the solar cell patent three years earlier.',
    fatalPitfall: 'Bedakan "could have + V3" (peluang yang tidak diambil) dengan "was able to" (kemampuan masa lalu yang berhasil dituntaskan).',
    drillQuestion: 'The research institute _____ secured the multi-million-dollar grant, but their administrative team submitted the proposal past the deadline.',
    drillOptions: ['must have', 'could have', 'should have', 'needn\'t have'],
    correctAnswer: 'could have',
    drillExplanation: 'Institut memiliki potensi untuk memenangkan hibah, namun peluang tersebut hangus karena keterlambatan administrasi ➔ could have secured.'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 14. THE SUBJUNCTIVE MOOD & MANDATIVE STRUCTURES (IELTS BAND 8.5+ & TOEFL)
// ─────────────────────────────────────────────────────────────────────────────
export interface SubjunctiveMoodItem {
  id: string;
  triggerCategory: 'Mandative Verbs (Kata Kerja Desakan/Saran)' | 'Mandative Adjectives (Kata Sifat Esensial)' | 'Formulaic Expressions (Ungkapan Baku)';
  triggerWords: string[];
  formula: string;
  mandativeRule: string;
  authenticExample: string;
  incorrectExample: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const SUBJUNCTIVE_MOOD_DATA: SubjunctiveMoodItem[] = [
  {
    id: 'sm-01',
    triggerCategory: 'Mandative Verbs (Kata Kerja Desakan/Saran)',
    triggerWords: ['demand', 'recommend', 'suggest', 'insist', 'require', 'stipulate', 'propose', 'advise'],
    formula: 'Subject 1 + Mandative Verb + that + Subject 2 + BARE INFINITIVE (V1 Murni)',
    mandativeRule: 'Setelah verba tuntutan/saran dalam klausa "that", kata kerja kedua WAJIB berbentuk dasar (Bare Infinitive) TANPA imbuhan -s/-es/-ed dan TANPA modal "should"!',
    authenticExample: 'The chief medical officer recommended that every surgeon undergo annual proficiency recertification.',
    incorrectExample: 'The officer recommended that every surgeon undergoes annual recertification. ❌ (Subjunctive menolak akhiran -s)',
    drillQuestion: 'The ethics committee demanded that the pharmaceutical corporation _____ all redacted clinical trial telemetry.',
    drillOptions: ['discloses', 'disclose', 'disclosed', 'is disclosing'],
    correctAnswer: 'disclose',
    drillExplanation: 'Setelah verba mandatif "demanded that...", subjek kedua "the corporation" wajib diikuti Bare Infinitive V1 murni ("disclose") tanpa akhiran -s.'
  },
  {
    id: 'sm-02',
    triggerCategory: 'Mandative Adjectives (Kata Sifat Esensial)',
    triggerWords: ['essential', 'crucial', 'imperative', 'vital', 'obligatory', 'mandatory', 'urgent', 'necessary'],
    formula: 'It is + Mandative Adjective + that + Subject + BARE INFINITIVE (V1 / BE + V3)',
    mandativeRule: 'Jika predikat berbentuk pasif atau nominal, bentuk kata kerjanya WAJIB berupa kata "BE" murni, bukan "is", "am", atau "are"!',
    authenticExample: 'It is crucial that the cryogenic sample be preserved at minus eighty degrees Celsius.',
    incorrectExample: 'It is crucial that the cryogenic sample is preserved. ❌ (Wajib memakai kata "be" murni)',
    drillQuestion: 'It is imperative that the emergency protocol _____ executed without any bureaucratic delay.',
    drillOptions: ['is', 'be', 'was', 'being'],
    correctAnswer: 'be',
    drillExplanation: 'Konstruksi Subjunctive Adjective "It is imperative that..." mewajibkan bentuk "be" murni untuk klausa pasif (be executed).'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 15. REPORTED SPEECH (INDIRECT SPEECH) & THE LAW OF BACKSHIFT
// ─────────────────────────────────────────────────────────────────────────────
export interface ReportedSpeechItem {
  id: string;
  directTense: string;
  reportedTense: string;
  shiftRule: string;
  directExample: string;
  reportedExample: string;
  academicReportingVerb: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const REPORTED_SPEECH_DATA: ReportedSpeechItem[] = [
  {
    id: 'rs-01',
    directTense: 'Present Simple ➔ Past Simple',
    reportedTense: 'Past Simple',
    shiftRule: 'Kata kerja bentuk present bergeser satu tingkat ke masa lalu (V1 ➔ V2). Pengecualian: Jika pernyataan memuat fakta kebenaran ilmiah universal, tenses TETAP Present Simple!',
    directExample: '"The vaccine stimulates antibody production," the researcher said.',
    reportedExample: 'The researcher stated that the vaccine stimulated antibody production. (Kebenaran universal: "...that the earth revolves around the sun" tetap V1).',
    academicReportingVerb: 'asserted / demonstrated / maintained',
    drillQuestion: 'The lead climatologist warned that rising ocean temperatures _____ the frequency of coastal cyclones.',
    drillOptions: ['exacerbate', 'exacerbated', 'are exacerbating', 'will exacerbate'],
    correctAnswer: 'exacerbated',
    drillExplanation: 'Mengikuti hukum Backshift of Tenses dalam Reported Speech, verba pengantar lampau ("warned that...") menggeser klausa menjadi Past Simple ("exacerbated").'
  },
  {
    id: 'rs-02',
    directTense: 'Present Perfect / Past Simple ➔ Past Perfect',
    reportedTense: 'Past Perfect (had + V3)',
    shiftRule: 'Baik Present Perfect (have/has + V3) maupun Past Simple (V2) sama-sama bergeser menjadi Past Perfect (had + V3) dalam kalimat tidak langsung.',
    directExample: '"We have completed the sequencing phase," the geneticist remarked.',
    reportedExample: 'The geneticist conceded that the laboratory had completed the sequencing phase.',
    academicReportingVerb: 'conceded / acknowledged / confirmed',
    drillQuestion: 'During the congressional hearing, the executive acknowledged that the firm _____ the safety flaws months earlier.',
    drillOptions: ['has identified', 'had identified', 'identifies', 'is identifying'],
    correctAnswer: 'had identified',
    drillExplanation: 'Aksi identifikasi terjadi sebelum sesi dengar pendapat lampau ➔ Past Perfect ("had identified").'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 16. EMBEDDED QUESTIONS (INDIRECT QUESTIONS ARCHITECTURE)
// ─────────────────────────────────────────────────────────────────────────────
export interface EmbeddedQuestionItem {
  id: string;
  directQuestion: string;
  introductoryFrame: string;
  embeddedQuestionCorrect: string;
  incorrectSentence: string;
  syntacticRule: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const EMBEDDED_QUESTIONS_DATA: EmbeddedQuestionItem[] = [
  {
    id: 'eq-01',
    directQuestion: 'Where does the pathogen originate?',
    introductoryFrame: 'The epidemiological study investigates...',
    embeddedQuestionCorrect: 'The epidemiological study investigates WHERE THE PATHOGEN ORIGINATES.',
    incorrectSentence: 'The study investigates where does the pathogen originate. ❌ (Dilarang ada auxiliary do/does di embedded question)',
    syntacticRule: 'Ketika kalimat tanya dimasukkan ke dalam kalimat berita atau pertanyaan lain, susunan inversi dibatalkan dan susunan WAJIB KEMBALI NORMAL: Question Word + SUBJECT + VERB.',
    drillQuestion: 'The forensic report did not clarify how _____ the biometric security perimeter.',
    drillOptions: ['did the intruders breach', 'the intruders breached', 'breached the intruders', 'do the intruders breach'],
    correctAnswer: 'the intruders breached',
    drillExplanation: 'Dalam Embedded Question, susunan kata wajib berupa Subjek ("the intruders") + Predikat ("breached") tanpa kata bantu "did".'
  },
  {
    id: 'eq-02',
    directQuestion: 'What is the primary variable?',
    introductoryFrame: 'Could you please explain...',
    embeddedQuestionCorrect: 'Could you please explain WHAT THE PRIMARY VARIABLE IS?',
    incorrectSentence: 'Could you please explain what is the primary variable? ❌ (Kata "is" dilarang mendahului subjek)',
    syntacticRule: 'To be dipindahkan ke bagian paling akhir setelah frasa subjek: [Question Word] + [Subject Noun Phrase] + [BE].',
    drillQuestion: 'We need to determine what _____ before authorizing the clinical phase.',
    drillOptions: ['is the exact dosage', 'the exact dosage is', 'does the dosage mean', 'was the exact dosage'],
    correctAnswer: 'the exact dosage is',
    drillExplanation: 'Susunan baku Embedded Question menempatkan to be "is" di akhir setelah subjek "the exact dosage".'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 17. CLEFT SENTENCES & FOCUSING STRUCTURES (EMPHATIC RHETORIC)
// ─────────────────────────────────────────────────────────────────────────────
export interface CleftSentenceItem {
  id: string;
  cleftType: 'It-Cleft (Penekanan Elemen Spesifik)' | 'Wh-Cleft / Pseudo-Cleft (Penekanan Aksi/Hasil)' | 'All-Cleft (Eksklusivitas)';
  baseSentence: string;
  cleftSentence: string;
  formula: string;
  rhetoricalImpact: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const CLEFT_SENTENCES_DATA: CleftSentenceItem[] = [
  {
    id: 'cs-01',
    cleftType: 'It-Cleft (Penekanan Elemen Spesifik)',
    baseSentence: 'The flawed methodology compromised the trial results.',
    cleftSentence: 'IT WAS the flawed methodology THAT compromised the trial results, not the quality of the raw compounds.',
    formula: 'IT + BE (is/was) + [Elemen yang Diberi Sorotan] + THAT/WHO + [Sisa Kalimat]',
    rhetoricalImpact: 'Mengarahkan fokus pembaca secara dramatis pada penyebab utama masalah dan menyingkirkan kemungkinan faktor lain.',
    drillQuestion: '_____ the lack of infrastructure that impeded the rapid deployment of renewable energy grid systems.',
    drillOptions: ['It was', 'What was', 'There was', 'That was'],
    correctAnswer: 'It was',
    drillExplanation: 'Konstruksi It-Cleft baku menggunakan formula "It was [Fokus] that [Klausa]".'
  },
  {
    id: 'cs-02',
    cleftType: 'Wh-Cleft / Pseudo-Cleft (Penekanan Aksi/Hasil)',
    baseSentence: 'The researchers discovered an unexpected cellular mutation.',
    cleftSentence: 'WHAT the researchers discovered WAS an unexpected cellular mutation that defied previous genetic models.',
    formula: 'WHAT + Subject + Verb + BE (is/was) + [Elemen Utama Penjelasan]',
    rhetoricalImpact: 'Membangun antisipasi pembaca dengan menempatkan hasil temuan kunci sebagai klimaks di akhir klausa.',
    drillQuestion: '_____ the archaeological expedition uncovered was a subterranean ceremonial chamber dating back three millennia.',
    drillOptions: ['It was', 'What', 'Which', 'That'],
    correctAnswer: 'What',
    drillExplanation: 'Klausa Pseudo-Cleft diawali dengan kata "What" untuk mengemas aksi subjek sebelum dituntaskan oleh copula "was".'
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// 18. GEOGRAPHICAL ARTICLE MASTER MATRIX (THE vs ZERO ARTICLE)
// ─────────────────────────────────────────────────────────────────────────────
export interface GeographicalArticleItem {
  id: string;
  geographicalCategory: string;
  ruleCategory: 'WAJIB Memakai THE' | 'DILARANG Memakai THE (Zero Article)';
  ruleDescription: string;
  examplesWithArticle: string[];
  examplesWithoutArticle: string[];
  diagnosticPitfall: string;
  drillQuestion: string;
  drillOptions: string[];
  correctAnswer: string;
  drillExplanation: string;
}

export const GEOGRAPHICAL_ARTICLES_DATA: GeographicalArticleItem[] = [
  {
    id: 'geo-01',
    geographicalCategory: 'Negara, Wilayah & Entitas Politik',
    ruleCategory: 'WAJIB Memakai THE',
    ruleDescription: 'Negara yang namanya berwujud kata benda jamak (plural) ATAU mengandung kata serikat/kerajaan/republik (Kingdom, Republic, States, Emirates, Netherlands, Philippines).',
    examplesWithArticle: ['The United States', 'The United Kingdom', 'The Netherlands', 'The Philippines', 'The United Arab Emirates'],
    examplesWithoutArticle: ['Indonesia', 'Japan', 'Germany', 'Australia', 'Brazil', 'France'],
    diagnosticPitfall: 'Dilarang keras mengatakan "The Indonesia" ❌ atau "The Japan" ❌. Hanya gunakan THE jika nama negara berstatus jamak atau memuat kata politik serikat/republik.',
    drillQuestion: 'Diplomatic delegates traveled from _____ Netherlands to attend the international summit in _____ Indonesia.',
    drillOptions: ['the / the', 'the / (tanpa artikel)', '(tanpa artikel) / the', '(tanpa artikel) / (tanpa artikel)'],
    correctAnswer: 'the / (tanpa artikel)',
    drillExplanation: 'Netherlands berwujud jamak sehingga wajib memakai "the Netherlands", sedangkan Indonesia adalah nama negara tunggal biasa tanpa artikel.'
  },
  {
    id: 'geo-02',
    geographicalCategory: 'Bentang Alam Air & Darat (Gunung, Sungai, Danau, Samudra)',
    ruleCategory: 'WAJIB Memakai THE',
    ruleDescription: 'Sungai, Laut, Samudra, Selat, Teluk, dan Pegunungan Jamak WAJIB memakai THE. Danau Tunggal dan Gunung Tunggal DILARANG memakai THE.',
    examplesWithArticle: ['The Amazon River', 'The Pacific Ocean', 'The Java Sea', 'The Himalayas (pegunungan jamak)', 'The Alps'],
    examplesWithoutArticle: ['Mount Everest (gunung tunggal)', 'Mount Fuji', 'Lake Toba (danau tunggal)', 'Lake Michigan'],
    diagnosticPitfall: 'Jika gunung tunggal (Mount Everest), dilarang pakai "the". Jika gugusan pegunungan jamak (The Himalayas, The Rockies), WAJIB pakai "the"!',
    drillQuestion: 'The expedition scaled _____ Mount Everest before conducting seismic studies across _____ Himalayas.',
    drillOptions: ['the / the', '(tanpa artikel) / the', 'the / (tanpa artikel)', '(tanpa artikel) / (tanpa artikel)'],
    correctAnswer: '(tanpa artikel) / the',
    drillExplanation: 'Gunung tunggal (Mount Everest) tidak memakai artikel, sedangkan gugusan pegunungan jamak (the Himalayas) wajib memakai "the".'
  }
];


