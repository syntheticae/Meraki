'use client';

import React, { useState } from 'react';
import {
  Headphones,
  Volume2,
  Play,
  Timer,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Grid,
  Layers,
  Activity,
  Mic,
  RotateCcw,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MINIMAL_PAIRS_DATA, MinimalPair } from '@/data/meraki-collocations';
import { playTextToSpeech } from '@/services/speech';
import { clsx } from 'clsx';

// 44 English Phonemes Data (Received Pronunciation & General American standard)
interface PhonemeItem {
  symbol: string;
  name: string;
  category: 'vowel-short' | 'vowel-long' | 'diphthong' | 'consonant-voiceless' | 'consonant-voiced';
  examples: string[];
  articulationTip: string;
}

const PHONEME_DATA: PhonemeItem[] = [
  // Short Vowels
  { symbol: '/ɪ/', name: 'Short I', category: 'vowel-short', examples: ['bit', 'ship', 'sit'], articulationTip: 'Bibir rileks, lidah agak tinggi di tengah mulut, bunyi pendek.' },
  { symbol: '/e/', name: 'Short E', category: 'vowel-short', examples: ['bed', 'men', 'desk'], articulationTip: 'Mulut terbuka sedang, lidah di depan, bunyi tegas dan singkat.' },
  { symbol: '/æ/', name: 'Trap A', category: 'vowel-short', examples: ['cat', 'apple', 'man'], articulationTip: 'Rahang turun lebih lebar dari huruf "e", lidah rata di dasar mulut.' },
  { symbol: '/ʌ/', name: 'Strut U', category: 'vowel-short', examples: ['cup', 'love', 'bus'], articulationTip: 'Bunyi "a" pendek sentral, mulut santai tanpa senyum.' },
  { symbol: '/ɒ/', name: 'Lot O', category: 'vowel-short', examples: ['pot', 'clock', 'hot'], articulationTip: 'Bibir agak membulat, rahang terbuka ke bawah.' },
  { symbol: '/ʊ/', name: 'Foot OO', category: 'vowel-short', examples: ['book', 'put', 'foot'], articulationTip: 'Bibir agak membulat kendur, tidak sepanjang bunyi "u" Indonesia.' },
  { symbol: '/ə/', name: 'Schwa', category: 'vowel-short', examples: ['about', 'banana', 'camera'], articulationTip: 'Bunyi paling umum dalam bahasa Inggris: sepenuhnya rileks dan netral.' },

  // Long Vowels
  { symbol: '/iː/', name: 'Long EE', category: 'vowel-long', examples: ['beat', 'sheep', 'tree'], articulationTip: 'Tersenyum lebar, lidah ditekan ke langit-langit depan, tahan panjang.' },
  { symbol: '/ɑː/', name: 'Long AH', category: 'vowel-long', examples: ['car', 'father', 'park'], articulationTip: 'Rahang terbuka lebar ke bawah seperti periksa tenggorokan ke dokter.' },
  { symbol: '/ɔː/', name: 'Long OR', category: 'vowel-long', examples: ['door', 'saw', 'walk'], articulationTip: 'Bibir membulat tegas dan maju sedikit, resonansi di belakang.' },
  { symbol: '/uː/', name: 'Long OO', category: 'vowel-long', examples: ['boot', 'blue', 'moon'], articulationTip: 'Bibir mengerucut bulat sempit, dorong suara panjang.' },
  { symbol: '/ɜː/', name: 'Nurse ER', category: 'vowel-long', examples: ['bird', 'work', 'learn'], articulationTip: 'Lidah di tengah, bibir netral, suara panjang bergetar lembut.' },

  // Diphthongs
  { symbol: '/eɪ/', name: 'Face AI', category: 'diphthong', examples: ['day', 'make', 'train'], articulationTip: 'Meluncur halus dari /e/ santai ke /ɪ/ tersenyum.' },
  { symbol: '/aɪ/', name: 'Price EYE', category: 'diphthong', examples: ['my', 'time', 'pie'], articulationTip: 'Buka lebar dari /a/ lalu meluncur naik ke /ɪ/.' },
  { symbol: '/ɔɪ/', name: 'Choice OY', category: 'diphthong', examples: ['boy', 'coin', 'voice'], articulationTip: 'Mulai dari bibir bulat /ɔ/ lalu meluncur ke /ɪ/.' },
  { symbol: '/aʊ/', name: 'Mouth OW', category: 'diphthong', examples: ['now', 'house', 'brown'], articulationTip: 'Buka dari /a/ lebar lalu mengerucutkan bibir ke /ʊ/.' },
  { symbol: '/əʊ/', name: 'Go OH', category: 'diphthong', examples: ['no', 'home', 'road'], articulationTip: 'Mulai dari schwa santai lalu membulat pelan ke /ʊ/.' },
  { symbol: '/ɪə/', name: 'Near EAR', category: 'diphthong', examples: ['here', 'ear', 'clear'], articulationTip: 'Luncurkan dari /ɪ/ ke schwa /ə/ netral.' },
  { symbol: '/eə/', name: 'Square AIR', category: 'diphthong', examples: ['hair', 'care', 'bear'], articulationTip: 'Luncurkan dari /e/ agak terbuka ke schwa /ə/.' },
  { symbol: '/ʊə/', name: 'Cure OOR', category: 'diphthong', examples: ['tour', 'poor', 'cure'], articulationTip: 'Mulai dari bibir bulat /ʊ/ meluncur ke schwa /ə/.' },

  // Voiceless Consonants
  { symbol: '/p/', name: 'Voiceless P', category: 'consonant-voiceless', examples: ['pen', 'stop', 'happy'], articulationTip: 'Letupan dua bibir tanpa getaran pita suara (hembusan udara kuat).' },
  { symbol: '/t/', name: 'Voiceless T', category: 'consonant-voiceless', examples: ['tea', 'cat', 'water'], articulationTip: 'Ujung lidah di gusi atas, letupan udara tanpa getar suara.' },
  { symbol: '/k/', name: 'Voiceless K', category: 'consonant-voiceless', examples: ['cat', 'key', 'back'], articulationTip: 'Pangkal lidah menempel ke langit-langit lunak lalu lepas.' },
  { symbol: '/f/', name: 'Voiceless F', category: 'consonant-voiceless', examples: ['fish', 'leaf', 'photo'], articulationTip: 'Gigi seri atas menyentuh bibir bawah, hembuskan udara gesek.' },
  { symbol: '/θ/', name: 'Voiceless TH', category: 'consonant-voiceless', examples: ['think', 'bath', 'mouth'], articulationTip: 'Ujung lidah dijepit ringan di antara gigi seri, tiup tanpa getar.' },
  { symbol: '/s/', name: 'Voiceless S', category: 'consonant-voiceless', examples: ['sun', 'miss', 'city'], articulationTip: 'Desisan tajam melalui celah gigi rapat.' },
  { symbol: '/ʃ/', name: 'Voiceless SH', category: 'consonant-voiceless', examples: ['she', 'wash', 'action'], articulationTip: 'Bibir agak maju monyong, hembus desisan tebal lembut.' },
  { symbol: '/tʃ/', name: 'Voiceless CH', category: 'consonant-voiceless', examples: ['chair', 'match', 'nature'], articulationTip: 'Gabungan letupan /t/ yang langsung meluncur ke /ʃ/.' },
  { symbol: '/h/', name: 'Voiceless H', category: 'consonant-voiceless', examples: ['hat', 'behind', 'who'], articulationTip: 'Hembusan napas murni dari tenggorokan tanpa hambatan mulut.' },

  // Voiced Consonants
  { symbol: '/b/', name: 'Voiced B', category: 'consonant-voiced', examples: ['book', 'cab', 'baby'], articulationTip: 'Letupan dua bibir dengan pita suara bergetar nyata.' },
  { symbol: '/d/', name: 'Voiced D', category: 'consonant-voiced', examples: ['day', 'red', 'ladder'], articulationTip: 'Ujung lidah di gusi atas dengan getaran pita suara.' },
  { symbol: '/ɡ/', name: 'Voiced G', category: 'consonant-voiced', examples: ['go', 'big', 'bag'], articulationTip: 'Pangkal lidah di langit-langit lunak dengan getaran vokal.' },
  { symbol: '/v/', name: 'Voiced V', category: 'consonant-voiced', examples: ['voice', 'give', 'never'], articulationTip: 'Gigi atas di bibir bawah bergetar kuat (bukan "F" atau "P").' },
  { symbol: '/ð/', name: 'Voiced TH', category: 'consonant-voiced', examples: ['this', 'mother', 'with'], articulationTip: 'Ujung lidah dijepit gigi sambil mendengungkan suara getar.' },
  { symbol: '/z/', name: 'Voiced Z', category: 'consonant-voiced', examples: ['zoo', 'buzz', 'busy'], articulationTip: 'Desisan seperti lebah, gigi rapat dengan getaran suara.' },
  { symbol: '/ʒ/', name: 'Voiced ZH', category: 'consonant-voiced', examples: ['vision', 'measure', 'beige'], articulationTip: 'Versi bergetar dari /ʃ/, bibir maju dengungkan suara.' },
  { symbol: '/dʒ/', name: 'Voiced J', category: 'consonant-voiced', examples: ['jump', 'bridge', 'age'], articulationTip: 'Letupan /d/ meluncur ke /ʒ/ dengan getaran kuat.' },
  { symbol: '/m/', name: 'Nasal M', category: 'consonant-voiced', examples: ['man', 'home', 'summer'], articulationTip: 'Dua bibir rapat, suara keluar melalui rongga hidung.' },
  { symbol: '/n/', name: 'Nasal N', category: 'consonant-voiced', examples: ['no', 'pen', 'funny'], articulationTip: 'Ujung lidah menutup gusi atas, suara melalui hidung.' },
  { symbol: '/ŋ/', name: 'Nasal NG', category: 'consonant-voiced', examples: ['sing', 'finger', 'ring'], articulationTip: 'Pangkal lidah menutup langit-langit lunak, dengung hidung.' },
  { symbol: '/l/', name: 'Liquid L', category: 'consonant-voiced', examples: ['light', 'bell', 'yellow'], articulationTip: 'Ujung lidah di gusi atas, udara mengalir di samping lidah.' },
  { symbol: '/r/', name: 'Liquid R', category: 'consonant-voiced', examples: ['red', 'car', 'right'], articulationTip: 'Ujung lidah melengkung ke atas tanpa menyentuh langit-langit.' },
  { symbol: '/w/', name: 'Glide W', category: 'consonant-voiced', examples: ['wet', 'queen', 'water'], articulationTip: 'Bibir bulat maju seperti /uː/ lalu membuka cepat.' },
  { symbol: '/j/', name: 'Glide Y', category: 'consonant-voiced', examples: ['yes', 'yellow', 'you'], articulationTip: 'Lidah tinggi seperti /iː/ lalu meluncur ke vokal berikutnya.' },
];

export function PhoneticsView() {
  const [viewTab, setViewTab] = useState<'soundboard' | 'pairs' | 'ear-training' | 'shadowing'>('soundboard');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [activeMinimalPairIndex, setActiveMinimalPairIndex] = useState<number>(0);

  // Ear Training Drill State
  const [earSecretWord, setEarSecretWord] = useState<'A' | 'B' | null>(null);
  const [earSelectedChoice, setEarSelectedChoice] = useState<'A' | 'B' | null>(null);
  const [earScore, setEarScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Shadowing State
  const [shadowingCountdown, setShadowingCountdown] = useState<number>(5);
  const [isShadowingRunning, setIsShadowingRunning] = useState<boolean>(false);

  const activeMinimalPair = MINIMAL_PAIRS_DATA[activeMinimalPairIndex] || MINIMAL_PAIRS_DATA[0];

  const handlePlaySecretWord = () => {
    let secret = earSecretWord;
    if (!secret) {
      secret = Math.random() > 0.5 ? 'A' : 'B';
      setEarSecretWord(secret);
    }
    const wordToPlay = secret === 'A' ? activeMinimalPair.wordA : activeMinimalPair.wordB;
    playTextToSpeech(wordToPlay);
  };

  const handleSelectEarChoice = (choice: 'A' | 'B') => {
    if (earSelectedChoice !== null) return;
    setEarSelectedChoice(choice);
    const correct = choice === earSecretWord;
    setEarScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNextEarRound = () => {
    const nextSecret = Math.random() > 0.5 ? 'A' : 'B';
    setEarSecretWord(nextSecret);
    setEarSelectedChoice(null);
    const wordToPlay = nextSecret === 'A' ? activeMinimalPair.wordA : activeMinimalPair.wordB;
    playTextToSpeech(wordToPlay);
  };

  const handleStartShadowing = () => {
    playTextToSpeech(activeMinimalPair.contrastContext);
    setIsShadowingRunning(true);
    setShadowingCountdown(5);

    let count = 5;
    const interval = setInterval(() => {
      count -= 1;
      setShadowingCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        setIsShadowingRunning(false);
      }
    }, 1000);
  };

  const filteredPhonemes = PHONEME_DATA.filter((p) => {
    if (activeCategoryFilter === 'all') return true;
    return p.category === activeCategoryFilter;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
        {/* Header Hero */}
        <div className="bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#00638E] dark:text-[#8CB9CC] border border-[#00638E]/20 text-xs font-mono font-medium">
                <Headphones className="w-3.5 h-3.5" />
                <span>Standard International Phonetic Alphabet (IPA) Studio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-white">
                Studio Fonetik &amp; Latihan Telinga (Ear Training)
              </h1>
              <p className="text-xs sm:text-sm text-[#334155] dark:text-[#7A8992]">
                Kuasai 44 simbol bunyi bahasa Inggris, latih kepekaan telinga menangkap beda fonem krusial, dan bangun memori motorik wicara.
              </p>
            </div>

            {/* Sub-tab Pill Switcher */}
            <div className="flex items-center gap-1.5 p-1.5 bg-[#F1F5F9] dark:bg-[#1C1C1C] rounded-2xl border border-[#CBD5E1] dark:border-white/10 overflow-x-auto no-scrollbar shrink-0">
              <button
                onClick={() => setViewTab('soundboard')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5',
                  viewTab === 'soundboard'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
                )}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Soundboard 44 IPA</span>
              </button>
              <button
                onClick={() => setViewTab('pairs')}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5',
                  viewTab === 'pairs'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
                )}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Minimal Pairs</span>
              </button>
              <button
                onClick={() => {
                  setViewTab('ear-training');
                  setEarSecretWord(null);
                  setEarSelectedChoice(null);
                }}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5',
                  viewTab === 'ear-training'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
                )}
              >
                <Headphones className="w-3.5 h-3.5" />
                <span>Listening Drill</span>
              </button>
              <button
                onClick={() => {
                  setViewTab('shadowing');
                  setIsShadowingRunning(false);
                  setShadowingCountdown(5);
                }}
                className={clsx(
                  'px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap flex items-center gap-1.5',
                  viewTab === 'shadowing'
                    ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                    : 'text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
                )}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Shadowing Loop</span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: SOUNDBOARD 44 IPA */}
        {viewTab === 'soundboard' && (
          <div className="space-y-6">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 p-2 bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 rounded-2xl shadow-xs">
              {[
                { id: 'all', label: 'Semua 44 Fonem' },
                { id: 'vowel-short', label: 'Short Vowels (7)' },
                { id: 'vowel-long', label: 'Long Vowels (5)' },
                { id: 'diphthong', label: 'Diphthongs (8)' },
                { id: 'consonant-voiceless', label: 'Voiceless Consonants (9)' },
                { id: 'consonant-voiced', label: 'Voiced Consonants (15)' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveCategoryFilter(filter.id)}
                  className={clsx(
                    'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all',
                    activeCategoryFilter === filter.id
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white hover:bg-[#E2E8F0]'
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Interactive Grid of Phoneme Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {filteredPhonemes.map((p) => (
                <div
                  key={p.symbol}
                  className="p-4 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E] transition-all flex flex-col justify-between group shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-bold text-[#00638E] dark:text-[#8CB9CC]">
                      {p.symbol}
                    </span>
                    <button
                      onClick={() => playTextToSpeech(p.examples[0])}
                      className="p-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#00638E] hover:bg-[#E2E8F0] transition-colors"
                      title="Dengarkan pengucapan"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#0F172A] dark:text-white">{p.name}</h4>
                    <p className="text-[11px] font-mono text-[#475569] dark:text-[#7A8992] truncate">
                      {p.examples.join(', ')}
                    </p>
                  </div>

                  <p className="text-[10px] text-[#1E293B] dark:text-[#BFD8E3] line-clamp-2 leading-relaxed pt-2 border-t border-[#CBD5E1] dark:border-white/10">
                    {p.articulationTip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: MINIMAL PAIRS COMPARATIVE VIEW */}
        {viewTab === 'pairs' && (
          <div className="space-y-6">
            {/* Horizontal Minimal Pair Scroller */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {MINIMAL_PAIRS_DATA.map((mp, idx) => (
                <button
                  key={mp.id}
                  onClick={() => setActiveMinimalPairIndex(idx)}
                  className={clsx(
                    'px-4 py-2 rounded-2xl text-xs font-mono whitespace-nowrap transition-all shrink-0',
                    activeMinimalPairIndex === idx
                      ? 'bg-[#00638E] text-white font-semibold shadow-xs'
                      : 'bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 text-[#475569] dark:text-[#7A8992] hover:text-[#0F172A] dark:hover:text-white'
                  )}
                >
                  {mp.phonemeContrast}
                </button>
              ))}
            </div>

            {/* Large Minimal Pair Stage */}
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-2">
                <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20 px-3.5 py-1 rounded-full uppercase font-semibold">
                  Kontras Fonetik: {activeMinimalPair.phonemeContrast}
                </span>
                <p className="text-xs sm:text-sm text-[#1E293B] dark:text-[#BFD8E3] max-w-xl mx-auto leading-relaxed">
                  {activeMinimalPair.description}
                </p>
              </div>

              {/* Side by Side Words */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4">
                  <span className="font-mono text-[10px] text-[#475569] dark:text-[#7A8992] uppercase block font-semibold">
                    Kata A:
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F172A] dark:text-white">
                    {activeMinimalPair.wordA}
                  </h3>
                  <span className="font-mono text-sm text-[#00638E] dark:text-[#8CB9CC] block font-semibold">
                    {activeMinimalPair.ipaA}
                  </span>
                  <p className="text-xs text-[#1E293B] dark:text-white">{activeMinimalPair.meaningA}</p>
                  <button
                    onClick={() => playTextToSpeech(activeMinimalPair.wordA)}
                    className="px-5 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono flex items-center gap-2 mx-auto hover:bg-[#004A6B] transition-colors shadow-xs"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Dengarkan Kata A</span>
                  </button>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4">
                  <span className="font-mono text-[10px] text-[#475569] dark:text-[#7A8992] uppercase block font-semibold">
                    Kata B:
                  </span>
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold text-[#0F172A] dark:text-white">
                    {activeMinimalPair.wordB}
                  </h3>
                  <span className="font-mono text-sm text-[#004A6B] dark:text-[#BFD8E3] block font-semibold">
                    {activeMinimalPair.ipaB}
                  </span>
                  <p className="text-xs text-[#1E293B] dark:text-white">{activeMinimalPair.meaningB}</p>
                  <button
                    onClick={() => playTextToSpeech(activeMinimalPair.wordB)}
                    className="px-5 py-2.5 rounded-xl bg-[#004A6B] dark:bg-[#00638E] text-white text-xs font-mono flex items-center gap-2 mx-auto hover:bg-[#003852] transition-colors shadow-xs"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Dengarkan Kata B</span>
                  </button>
                </div>
              </div>

              {/* Contrast Sentence */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-2 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#475569] dark:text-[#7A8992] uppercase font-semibold">
                    Kalimat Kontras Pembanding:
                  </span>
                  <button
                    onClick={() => playTextToSpeech(activeMinimalPair.contrastContext)}
                    className="text-[#475569] dark:text-[#7A8992] hover:text-[#00638E] p-1.5 rounded-lg"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-serif text-base sm:text-lg text-[#0F172A] dark:text-white italic leading-relaxed">
                  "{activeMinimalPair.contrastContext}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EAR TRAINING LISTENING DRILL */}
        {viewTab === 'ear-training' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6 text-center">
              <div className="flex items-center justify-between pb-4 border-b border-[#CBD5E1] dark:border-white/10">
                <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/20 text-[#004A6B] dark:text-[#8CB9CC] border border-[#00638E]/20 px-3 py-1 rounded-full uppercase font-semibold">
                  Drill Telinga: Kontras {activeMinimalPair.phonemeContrast}
                </span>
                <div className="font-mono text-xs text-[#475569] dark:text-[#7A8992]">
                  Akurasi:{' '}
                  <strong className="text-[#0F172A] dark:text-white">
                    {earScore.correct} / {earScore.total}
                  </strong>{' '}
                  ({earScore.total > 0 ? Math.round((earScore.correct / earScore.total) * 100) : 0}%)
                </div>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] dark:text-white">
                  Dengarkan dan Tebak Kata yang Diucapkan
                </h3>
                <p className="text-xs text-[#1E293B] dark:text-[#BFD8E3] leading-relaxed">
                  Sistem akan memutar salah satu kata dari pasangan{' '}
                  <strong className="font-mono text-[#00638E] dark:text-[#8CB9CC]">{activeMinimalPair.wordA}</strong> ({activeMinimalPair.ipaA}) atau{' '}
                  <strong className="font-mono text-[#004A6B] dark:text-[#BFD8E3]">{activeMinimalPair.wordB}</strong> ({activeMinimalPair.ipaB}).
                </p>

                <button
                  onClick={handlePlaySecretWord}
                  className="px-6 py-3.5 rounded-2xl bg-[#00638E] text-white hover:bg-[#004A6B] text-sm font-mono flex items-center justify-center gap-2 mx-auto shadow-sm transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                  <span>{earSecretWord !== null ? 'Putar Ulang Suara' : 'Mulai Putar Suara'}</span>
                </button>
              </div>

              {earSecretWord !== null && (
                <div className="space-y-4 pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#475569] dark:text-[#7A8992] block font-semibold">
                    Kata mana yang baru saja Anda dengar?
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                    {(['A', 'B'] as const).map((letter) => {
                      const word = letter === 'A' ? activeMinimalPair.wordA : activeMinimalPair.wordB;
                      const ipa = letter === 'A' ? activeMinimalPair.ipaA : activeMinimalPair.ipaB;
                      const meaning = letter === 'A' ? activeMinimalPair.meaningA : activeMinimalPair.meaningB;
                      const isChoice = earSelectedChoice === letter;
                      const isTarget = earSecretWord === letter;

                      let btnStyle =
                        'bg-[#F8FAFC] dark:bg-[#1C1C1C] hover:bg-[#F1F5F9] dark:hover:bg-[#1C1C1C]/80 border-[#CBD5E1] dark:border-white/10 text-[#0F172A] dark:text-white';
                      if (earSelectedChoice !== null) {
                        if (isTarget) {
                          btnStyle =
                            'bg-emerald-500/15 border-emerald-600 text-emerald-950 dark:text-white font-bold';
                        } else if (isChoice && !isTarget) {
                          btnStyle = 'bg-rose-500/15 border-rose-400 text-rose-600';
                        } else {
                          btnStyle = 'opacity-40 bg-[#F8FAFC] dark:bg-[#1C1C1C] border-transparent text-[#475569]';
                        }
                      }

                      return (
                        <button
                          key={letter}
                          onClick={() => handleSelectEarChoice(letter)}
                          disabled={earSelectedChoice !== null}
                          className={clsx('p-5 rounded-2xl border transition-all text-center space-y-1', btnStyle)}
                        >
                          <span className="font-mono text-[10px] text-[#475569] dark:text-[#7A8992] uppercase block">
                            Opsi ({letter})
                          </span>
                          <h4 className="font-serif text-3xl font-bold">{word}</h4>
                          <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] block font-semibold">{ipa}</span>
                          <p className="text-[11px] text-[#1E293B] dark:text-[#BFD8E3]">{meaning}</p>
                        </button>
                      );
                    })}
                  </div>

                  {earSelectedChoice !== null && (
                    <div
                      className={clsx(
                        'p-4 rounded-2xl border text-xs max-w-lg mx-auto space-y-3 animate-in fade-in duration-200 text-left',
                        earSelectedChoice === earSecretWord
                          ? 'bg-emerald-500/10 border-emerald-600 text-emerald-950 dark:text-white'
                          : 'bg-rose-500/10 border-rose-300 text-rose-700 dark:text-rose-300'
                      )}
                    >
                      <div className="flex items-center gap-2 font-bold">
                        {earSelectedChoice === earSecretWord ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#8CB9CC]" />
                            <span>Tepat Sekali! Telinga Anda berhasil membedakan fonem.</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-4 h-4 text-rose-500" />
                            <span>
                              Belum Tepat! Kata yang diputar adalah "
                              {earSecretWord === 'A' ? activeMinimalPair.wordA : activeMinimalPair.wordB}".
                            </span>
                          </>
                        )}
                      </div>
                      <p className="text-[#1E293B] dark:text-[#BFD8E3] leading-relaxed">
                        <strong>Kunci Pembeda:</strong> {activeMinimalPair.description}
                      </p>

                      <div className="flex justify-end pt-2 border-t border-[#CBD5E1] dark:border-white/10">
                        <button
                          onClick={handleNextEarRound}
                          className="px-4 py-2 rounded-xl bg-[#00638E] text-white text-xs font-mono font-medium hover:bg-[#004A6B] transition-colors shadow-xs"
                        >
                          Soal Berikutnya →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: SHADOWING LOOP */}
        {viewTab === 'shadowing' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-6 text-center">
              <div className="space-y-2">
                <span className="font-mono text-xs bg-[#00638E]/10 dark:bg-[#00638E]/15 text-[#004A6B] dark:text-[#BFD8E3] border border-[#00638E]/20 px-3.5 py-1 rounded-full uppercase font-semibold">
                  Shadowing &amp; Articulation Loop: {activeMinimalPair.phonemeContrast}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] dark:text-white">
                  Tiru Intonasi &amp; Artikulasi Kalimat Kontras
                </h3>
                <p className="text-xs text-[#1E293B] dark:text-[#BFD8E3] max-w-md mx-auto leading-relaxed">
                  Dengarkan pelafalan penutur asli secara teliti, lalu tirukan dengan lantang selama hitungan mundur 5 detik.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 space-y-4 max-w-xl mx-auto text-left">
                <span className="font-mono text-[10px] text-[#475569] dark:text-[#7A8992] uppercase block font-semibold">
                  Target Kalimat Shadowing:
                </span>
                <p className="font-serif text-lg text-[#0F172A] dark:text-white italic leading-relaxed">
                  "{activeMinimalPair.contrastContext}"
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#CBD5E1] dark:border-white/10">
                  <button
                    onClick={handleStartShadowing}
                    disabled={isShadowingRunning}
                    className="px-5 py-2.5 rounded-xl bg-[#00638E] text-white hover:bg-[#004A6B] text-xs font-mono flex items-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
                  >
                    <Play className="w-4 h-4" />
                    <span>{isShadowingRunning ? `Menirukan (${shadowingCountdown}s)...` : 'Putar & Mulai Shadowing'}</span>
                  </button>

                  {isShadowingRunning && (
                    <div className="flex items-center gap-2 font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] font-bold animate-pulse">
                      <Timer className="w-4 h-4" />
                      <span>Waktu Ucap: {shadowingCountdown} detik</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}

export default function PhoneticsPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=phonetics'); }, [router]);
  return null;
}
