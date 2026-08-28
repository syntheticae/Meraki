'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Check, 
  RotateCcw, 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  HelpCircle, 
  Shuffle, 
  ArrowRight, 
  ListCheck, 
  Award, 
  Layers, 
  Sparkles, 
  Volume2, 
  AlertTriangle, 
  Clock, 
  GraduationCap, 
  Table, 
  PenTool, 
  Archive, 
  FileText, 
  Download, 
  Upload, 
  BarChart2, 
  Ear, 
  Target, 
  TrendingUp, 
  Menu, 
  X, 
  Compass, 
  BookMarked, 
  ShieldCheck, 
  ExternalLink, 
  ChevronDown, 
  Scissors,
  Play,
  Headphones,
  Timer,
  Activity,
  Flame,
  Zap,
  RefreshCw
} from 'lucide-react';
import { MERAKI_CURRICULUM, LearningTopic, PracticeQuestion, ErrorCorrectionTask } from '@/data/meraki-data';
import { OXFORD_3000_VOCABULARY, OxfordWord, checkMeaningAccuracy } from '@/data/oxford-3000';
import { 
  IRREGULAR_VERBS_DATA, 
  NOUN_TAXONOMY_DATA, 
  TENSES_MASTER_DATA, 
  PHRASAL_VERBS_DATA, 
  PUNCTUATION_GUIDE_DATA, 
  PARAPHRASING_TASKS_DATA, 
  XRAY_SENTENCES_DATA,
  HAVE_HAS_HAD_MASTER_DATA,
  PREPOSITIONS_IN_ON_AT_DATA,
  PRONOUN_CASE_MASTER_DATA,
  DO_DOES_DID_MASTER_DATA,
  TO_BE_MASTER_DATA,
  PAST_MODALS_DEDUCTION_DATA,
  SUBJUNCTIVE_MOOD_DATA,
  REPORTED_SPEECH_DATA,
  EMBEDDED_QUESTIONS_DATA,
  CLEFT_SENTENCES_DATA,
  GEOGRAPHICAL_ARTICLES_DATA
} from '@/data/meraki-matrices';
import {
  ACADEMIC_COLLOCATIONS_DATA,
  ON_POINT_VERBS_DATA,
  DEPENDENT_PREPOSITIONS_DATA,
  CONFUSABLE_WORDS_DATA,
  MINIMAL_PAIRS_DATA,
  IELTS_TASK1_TRENDS_DATA,
  SENTENCE_COMBINING_DATA,
  DIRECT_TRANSLATION_TRAPS_DATA
} from '@/data/meraki-collocations';
import { clsx } from 'clsx';

// Master Navigation Items
type NavigationHub = 
  | 'curriculum' 
  | 'practice' 
  | 'collocations' 
  | 'matrices' 
  | 'studio' 
  | 'phonetics' 
  | 'oxford3000' 
  | 'vault' 
  | 'diagnostic';

export default function MerakiApp() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('modul-01-subject-pronouns');
  const [activeHub, setActiveHub] = useState<NavigationHub>('curriculum');

  const handleNavSelect = (hub: NavigationHub) => {
    setActiveHub(hub);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsNavOpen(false);
    }
  };
  
  // Sidebar visibility (Zen / Focus mode)
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  const [isModuleIndexOpen, setIsModuleIndexOpen] = useState<boolean>(true);

  // Auto-detect mobile screen on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setIsNavOpen(false);
        setIsModuleIndexOpen(false);
      }
    }
  }, []);

  // Practice Mode
  const [practiceSubMode, setPracticeSubMode] = useState<'quiz' | 'sentence-doctor'>('quiz');

  // Matrices Sub-Tab: 'have-has-had' | 'in-on-at' | 'pronouns' | 'do-does-did' | 'to-be' | 'past-modals' | 'subjunctive' | 'reported-speech' | 'embedded-questions' | 'cleft-sentences' | 'geographical-articles' | 'irregular' | 'nouns' | 'tenses' | 'phrasal' | 'punctuation'
  const [matrixSubTab, setMatrixSubTab] = useState<'have-has-had' | 'in-on-at' | 'pronouns' | 'do-does-did' | 'to-be' | 'past-modals' | 'subjunctive' | 'reported-speech' | 'embedded-questions' | 'cleft-sentences' | 'geographical-articles' | 'irregular' | 'nouns' | 'tenses' | 'phrasal' | 'punctuation'>('have-has-had');
  const [matrixSearch, setMatrixSearch] = useState<string>('');
  
  // Have / Has / Had state
  const [activeHhhIndex, setActiveHhhIndex] = useState<number>(0);
  const [hhhSelected, setHhhSelected] = useState<string | null>(null);

  // In / On / At state
  const [activeIoaIndex, setActiveIoaIndex] = useState<number>(0);
  const [ioaSelected, setIoaSelected] = useState<string | null>(null);
  const [ioaDimensionFilter, setIoaDimensionFilter] = useState<'all' | 'time' | 'space' | 'idiom'>('all');

  // Pronouns state
  const [activeProIndex, setActiveProIndex] = useState<number>(0);

  // Do / Does / Did state
  const [activeDddIndex, setActiveDddIndex] = useState<number>(0);
  const [dddSelected, setDddSelected] = useState<string | null>(null);

  // To Be state
  const [activeTbeIndex, setActiveTbeIndex] = useState<number>(0);
  const [tbeSelected, setTbeSelected] = useState<string | null>(null);

  // Past Modals state
  const [activePmIndex, setActivePmIndex] = useState<number>(0);
  const [pmSelected, setPmSelected] = useState<string | null>(null);

  // Subjunctive Mood state
  const [activeSmIndex, setActiveSmIndex] = useState<number>(0);
  const [smSelected, setSmSelected] = useState<string | null>(null);

  // Reported Speech state
  const [activeRsIndex, setActiveRsIndex] = useState<number>(0);
  const [rsSelected, setRsSelected] = useState<string | null>(null);

  // Embedded Questions state
  const [activeEqIndex, setActiveEqIndex] = useState<number>(0);
  const [eqSelected, setEqSelected] = useState<string | null>(null);

  // Cleft Sentences state
  const [activeCsIndex, setActiveCsIndex] = useState<number>(0);
  const [csSelected, setCsSelected] = useState<string | null>(null);

  // Geographical Articles state
  const [activeGeoIndex, setActiveGeoIndex] = useState<number>(0);
  const [geoSelected, setGeoSelected] = useState<string | null>(null);

  // Irregular Verbs state
  const [irregularPatternFilter, setIrregularPatternFilter] = useState<string>('all');
  const [irregularDrillMode, setIrregularDrillMode] = useState<boolean>(false);
  const [irregularUserInputs, setIrregularUserInputs] = useState<Record<string, { v2: string; v3: string }>>({});

  // Collocations & Lexicon Sub-Tab
  const [collocationSubTab, setCollocationSubTab] = useState<'acl' | 'on-point' | 'prep' | 'confusables' | 'traps'>('acl');
  const [collocationSearch, setCollocationSearch] = useState<string>('');
  const [activeCollocationIndex, setActiveCollocationIndex] = useState<number>(0);
  const [collocationQuizSelected, setCollocationQuizSelected] = useState<string | null>(null);

  // Direct Translation Traps state
  const [activeTrapIndex, setActiveTrapIndex] = useState<number>(0);
  const [trapSelected, setTrapSelected] = useState<string | null>(null);

  const [activePrepIndex, setActivePrepIndex] = useState<number>(0);
  const [prepCategoryFilter, setPrepCategoryFilter] = useState<'all' | 'Adjective' | 'Verb' | 'Noun'>('all');
  const [prepSearchQuery, setPrepSearchQuery] = useState<string>('');
  const [prepUserInput, setPrepUserInput] = useState<string>('');
  const [prepFeedback, setPrepFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  const [activeConfusableIndex, setActiveConfusableIndex] = useState<number>(0);
  const [confusableSelected, setConfusableSelected] = useState<string | null>(null);

  // Studio Sub-Tab
  const [studioSubTab, setStudioSubTab] = useState<'paraphrase' | 'xray' | 'ielts-task1' | 'combine' | 'writing-pad'>('paraphrase');
  const [activeParaIndex, setActiveParaIndex] = useState<number>(0);
  const [paraUserInput, setParaUserInput] = useState<string>('');
  const [paraFeedback, setParaFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  const [activeXrayIndex, setActiveXrayIndex] = useState<number>(0);
  const [activeIeltsTrendIndex, setActiveIeltsTrendIndex] = useState<number>(0);
  const [activeCombineIndex, setActiveCombineIndex] = useState<number>(0);
  const [combineUserInput, setCombineUserInput] = useState<string>('');
  const [combineFeedback, setCombineFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  // Phonetics Lab Modes & Ear Training State
  const [activeMinimalPairIndex, setActiveMinimalPairIndex] = useState<number>(0);
  const [phoneticsMode, setPhoneticsMode] = useState<'reference' | 'ear-training' | 'shadowing'>('reference');
  const [earSecretWord, setEarSecretWord] = useState<'A' | 'B' | null>(null);
  const [earSelectedChoice, setEarSelectedChoice] = useState<'A' | 'B' | null>(null);
  const [earScore, setEarScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });
  const [shadowingCountdown, setShadowingCountdown] = useState<number>(5);
  const [isShadowingRunning, setIsShadowingRunning] = useState<boolean>(false);

  // Deterministic Writing Pad State (No AI, Rule-Based)
  const [writingPadText, setWritingPadText] = useState<string>('');

  // Progress & Mistake Vault State
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [mistakeVault, setMistakeVault] = useState<Array<{ 
    id: string; 
    type: 'quiz' | 'doctor' | 'collocation' | 'prep'; 
    title: string; 
    question: string; 
    prompt: string; 
    correctAnswer: string; 
    explanation: string; 
    timestamp: number;
    timesMissed?: number;
    category?: string;
  }>>([]);
  
  // Re-quiz in Vault State
  const [vaultReQuizId, setVaultReQuizId] = useState<string | null>(null);
  const [vaultReQuizAnswer, setVaultReQuizAnswer] = useState<string>('');
  const [vaultReQuizFeedback, setVaultReQuizFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  // Interactive Practice State
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [isShuffleQuiz, setIsShuffleQuiz] = useState<boolean>(false);
  const [activeDoctorIndex, setActiveDoctorIndex] = useState<number>(0);
  const [doctorUserInput, setDoctorUserInput] = useState<string>('');
  const [doctorFeedback, setDoctorFeedback] = useState<{ checked: boolean; isCorrect: boolean } | null>(null);

  const [searchFilter, setSearchFilter] = useState<string>('');

  // Diagnostic Test State with Timer & Persistence
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, string>>({});
  const [diagnosticSubmitted, setDiagnosticSubmitted] = useState<boolean>(false);
  const [diagnosticTimerSeconds, setDiagnosticTimerSeconds] = useState<number | null>(null);
  const [diagnosticTimerMode, setDiagnosticTimerMode] = useState<number | null>(null); // null = untimed, 1800 = 30m, 3600 = 60m
  const [isShuffleDiagnostic, setIsShuffleDiagnostic] = useState<boolean>(false);

  // Oxford 3000 State with Spaced Repetition System (SRS)
  const [oxfordIndex, setOxfordIndex] = useState<number>(0);
  const [userMeaningInput, setUserMeaningInput] = useState<string>('');
  const [meaningFeedback, setMeaningFeedback] = useState<{ checked: boolean; isCorrect: boolean; matched?: string } | null>(null);
  const [oxfordCefrFilter, setOxfordCefrFilter] = useState<string>('all');
  const [oxfordSrsFilter, setOxfordSrsFilter] = useState<'all' | 'due' | 'box1' | 'box4'>('all');
  const [oxfordSearch, setOxfordSearch] = useState<string>('');

  // SRS State: wordId -> { box: 1|2|3|4, nextReviewDate: timestamp }
  const [srsDeck, setSrsDeck] = useState<Record<string, { box: number; lastReviewed: number }>>({});

  // Can-Do Checkpoints State & Copy status
  const [checkedCanDo, setCheckedCanDo] = useState<Record<string, boolean>>({});
  const [copiedAxiom, setCopiedAxiom] = useState<boolean>(false);

  // File Input Ref for JSON Restore
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const storedCompleted = localStorage.getItem('meraki_completed_topics');
      if (storedCompleted) setCompletedTopicIds(JSON.parse(storedCompleted));
      
      const storedAnswers = localStorage.getItem('meraki_quiz_answers');
      if (storedAnswers) setQuizAnswers(JSON.parse(storedAnswers));

      const storedSrs = localStorage.getItem('meraki_srs_deck');
      if (storedSrs) setSrsDeck(JSON.parse(storedSrs));

      const storedVault = localStorage.getItem('meraki_mistake_vault');
      if (storedVault) setMistakeVault(JSON.parse(storedVault));

      const storedPad = localStorage.getItem('meraki_writing_pad_text');
      if (storedPad) setWritingPadText(storedPad);

      const storedCanDo = localStorage.getItem('meraki_can_do_checks');
      if (storedCanDo) setCheckedCanDo(JSON.parse(storedCanDo));

      const storedDiag = localStorage.getItem('meraki_diagnostic_answers');
      if (storedDiag) setDiagnosticAnswers(JSON.parse(storedDiag));

      const storedDiagSubmitted = localStorage.getItem('meraki_diagnostic_submitted');
      if (storedDiagSubmitted) setDiagnosticSubmitted(JSON.parse(storedDiagSubmitted));
    } catch (e) {
      console.warn('Storage read error:', e);
    }
  }, []);

  // Auto-close mobile navigation drawer on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Diagnostic Timer interval
  useEffect(() => {
    if (diagnosticTimerSeconds === null || diagnosticTimerSeconds <= 0 || diagnosticSubmitted) return;
    const timerId = setInterval(() => {
      setDiagnosticTimerSeconds((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timerId);
          setDiagnosticSubmitted(true);
          try {
            localStorage.setItem('meraki_diagnostic_submitted', 'true');
          } catch (err) {}
          alert('Waktu ujian diagnostic telah berakhir! Lembar jawaban Anda otomatis dikumpulkan.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, [diagnosticTimerSeconds, diagnosticSubmitted]);

  // Shadowing countdown interval
  useEffect(() => {
    if (!isShadowingRunning || shadowingCountdown <= 0) return;
    const interval = setInterval(() => {
      setShadowingCountdown((prev) => {
        if (prev <= 1) {
          setIsShadowingRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isShadowingRunning, shadowingCountdown]);

  const handleToggleCanDo = (key: string) => {
    const next = { ...checkedCanDo, [key]: !checkedCanDo[key] };
    setCheckedCanDo(next);
    try {
      localStorage.setItem('meraki_can_do_checks', JSON.stringify(next));
    } catch (e) {}
  };

  const handleCopyModuleAxioms = () => {
    if (!currentTopic.pocketAxioms) return;
    const textToCopy = `# Meraki Quick Revision: ${currentTopic.title}\n\n${currentTopic.pocketAxioms.map(a => `- ${a}`).join('\n')}\n\n*Prasyarat: ${currentTopic.prerequisite || 'None'} | ${currentTopic.stageName}*`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAxiom(true);
    setTimeout(() => setCopiedAxiom(false), 2000);
  };

  // Export / Import Data (JSON Portability)
  const handleExportDataBackup = () => {
    const backupData = {
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      completedTopics: completedTopicIds,
      quizAnswers,
      srsDeck,
      mistakeVault,
      canDoChecks: checkedCanDo,
      writingPadText
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meraki-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportDataBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.completedTopics) {
          setCompletedTopicIds(parsed.completedTopics);
          localStorage.setItem('meraki_completed_topics', JSON.stringify(parsed.completedTopics));
        }
        if (parsed.quizAnswers) {
          setQuizAnswers(parsed.quizAnswers);
          localStorage.setItem('meraki_quiz_answers', JSON.stringify(parsed.quizAnswers));
        }
        if (parsed.srsDeck) {
          setSrsDeck(parsed.srsDeck);
          localStorage.setItem('meraki_srs_deck', JSON.stringify(parsed.srsDeck));
        }
        if (parsed.mistakeVault) {
          setMistakeVault(parsed.mistakeVault);
          localStorage.setItem('meraki_mistake_vault', JSON.stringify(parsed.mistakeVault));
        }
        if (parsed.canDoChecks) {
          setCheckedCanDo(parsed.canDoChecks);
          localStorage.setItem('meraki_can_do_checks', JSON.stringify(parsed.canDoChecks));
        }
        if (parsed.writingPadText) {
          setWritingPadText(parsed.writingPadText);
          localStorage.setItem('meraki_writing_pad_text', parsed.writingPadText);
        }
        alert('Data progres belajar Meraki berhasil dipulihkan!');
      } catch (err) {
        alert('Gagal memulihkan file backup JSON.');
      }
    };
    reader.readAsText(file);
  };

  const currentTopic = MERAKI_CURRICULUM.find((t) => t.id === selectedTopicId) || MERAKI_CURRICULUM[0];
  const questions = currentTopic.questions || [];
  const currentQuestion = questions[activeQuestionIndex] || questions[0];

  const doctorTasks = currentTopic.errorCorrectionTasks || [];
  const currentDoctorTask: ErrorCorrectionTask | undefined = doctorTasks[activeDoctorIndex];

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setActiveQuestionIndex(0);
    setActiveDoctorIndex(0);
    setDoctorUserInput('');
    setDoctorFeedback(null);
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsModuleIndexOpen(false);
    }
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    const updated = { ...quizAnswers, [questionId]: answer };
    setQuizAnswers(updated);
    try {
      localStorage.setItem('meraki_quiz_answers', JSON.stringify(updated));
    } catch (e) {}

    // If incorrect, automatically record in Mistake Vault!
    if (answer !== currentQuestion.correctAnswer) {
      recordMistake({
        id: currentQuestion.id,
        type: 'quiz',
        title: currentTopic.title,
        question: currentQuestion.question,
        prompt: `Pilihan Anda: "${answer}" (Salah)`,
        correctAnswer: currentQuestion.correctAnswer,
        explanation: currentQuestion.explanation,
        timestamp: Date.now()
      });
    }
  };

  const recordMistake = (item: { 
    id: string; 
    type: 'quiz' | 'doctor' | 'collocation' | 'prep'; 
    title: string; 
    question: string; 
    prompt: string; 
    correctAnswer: string; 
    explanation: string; 
    timestamp: number;
    category?: string;
  }) => {
    setMistakeVault((prev) => {
      const existingIndex = prev.findIndex((m) => m.id === item.id);
      let updated: typeof prev;
      if (existingIndex >= 0) {
        const existing = prev[existingIndex];
        const updatedItem = {
          ...existing,
          ...item,
          timesMissed: (existing.timesMissed || 1) + 1,
          timestamp: Date.now(),
        };
        updated = [
          updatedItem,
          ...prev.slice(0, existingIndex),
          ...prev.slice(existingIndex + 1),
        ];
      } else {
        updated = [{ ...item, timesMissed: 1 }, ...prev];
      }
      try {
        localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  const handleRemoveFromVault = (id: string) => {
    const updated = mistakeVault.filter(m => m.id !== id);
    setMistakeVault(updated);
    if (vaultReQuizId === id) {
      setVaultReQuizId(null);
      setVaultReQuizAnswer('');
      setVaultReQuizFeedback(null);
    }
    try {
      localStorage.setItem('meraki_mistake_vault', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleResetTopicQuiz = () => {
    const qIds = currentTopic.questions.map(q => q.id);
    const updated = { ...quizAnswers };
    qIds.forEach(id => delete updated[id]);
    setQuizAnswers(updated);
    try {
      localStorage.setItem('meraki_quiz_answers', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSelectDiagnosticAnswer = (questionId: string, answer: string) => {
    const updated = { ...diagnosticAnswers, [questionId]: answer };
    setDiagnosticAnswers(updated);
    try {
      localStorage.setItem('meraki_diagnostic_answers', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleSubmitDiagnostic = () => {
    setDiagnosticSubmitted(true);
    try {
      localStorage.setItem('meraki_diagnostic_submitted', 'true');
    } catch (e) {}
  };

  const handleResetDiagnostic = () => {
    setDiagnosticAnswers({});
    setDiagnosticSubmitted(false);
    setDiagnosticTimerSeconds(diagnosticTimerMode);
    try {
      localStorage.removeItem('meraki_diagnostic_answers');
      localStorage.removeItem('meraki_diagnostic_submitted');
    } catch (e) {}
  };

  const handleToggleTopicComplete = (topicId: string) => {
    let next: string[];
    if (completedTopicIds.includes(topicId)) {
      next = completedTopicIds.filter((id) => id !== topicId);
    } else {
      next = [...completedTopicIds, topicId];
    }
    setCompletedTopicIds(next);
    try {
      localStorage.setItem('meraki_completed_topics', JSON.stringify(next));
    } catch (e) {}
  };

  const handleResetProgress = () => {
    if (confirm('Reset seluruh riwayat progres belajar, jawaban kuis, SRS Oxford 3000, dan Mistake Vault?')) {
      setCompletedTopicIds([]);
      setQuizAnswers({});
      setDiagnosticAnswers({});
      setDiagnosticSubmitted(false);
      setDiagnosticTimerSeconds(null);
      setDiagnosticTimerMode(null);
      setSrsDeck({});
      setMistakeVault([]);
      setCheckedCanDo({});
      setWritingPadText('');
      setUserMeaningInput('');
      setMeaningFeedback(null);
      localStorage.removeItem('meraki_completed_topics');
      localStorage.removeItem('meraki_quiz_answers');
      localStorage.removeItem('meraki_srs_deck');
      localStorage.removeItem('meraki_mistake_vault');
      localStorage.removeItem('meraki_can_do_checks');
      localStorage.removeItem('meraki_writing_pad_text');
      localStorage.removeItem('meraki_diagnostic_answers');
      localStorage.removeItem('meraki_diagnostic_submitted');
    }
  };

  // Web Speech API: Native American TTS Audio
  const playNativeAudio = (textToSpeak: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  // Dynamically extract ordered stages from MERAKI_CURRICULUM
  const stageGroups = Array.from(new Set(MERAKI_CURRICULUM.map((t) => t.stageName)));

  const filteredTopics = MERAKI_CURRICULUM.filter((t) =>
    t.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    t.subtitle.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Diagnostic Test Questions aggregation
  const allDiagnosticQuestions: PracticeQuestion[] = MERAKI_CURRICULUM.flatMap((t) => t.questions);

  const diagnosticAnalytics = useMemo(() => {
    let correctTotal = 0;
    const categoryStats: Record<string, { correct: number; total: number }> = {
      'Word Classes': { correct: 0, total: 0 },
      'Sentence Architecture': { correct: 0, total: 0 },
      'Tenses Logic': { correct: 0, total: 0 },
      'Complex Structures': { correct: 0, total: 0 },
      'Exam Readiness': { correct: 0, total: 0 },
    };

    allDiagnosticQuestions.forEach((q) => {
      const cat = q.category || 'Word Classes';
      if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
      categoryStats[cat].total += 1;

      if (diagnosticAnswers[q.id] === q.correctAnswer) {
        correctTotal++;
        categoryStats[cat].correct += 1;
      }
    });

    return {
      correctTotal,
      total: allDiagnosticQuestions.length,
      percentage: allDiagnosticQuestions.length > 0 ? Math.round((correctTotal / allDiagnosticQuestions.length) * 100) : 0,
      categoryStats,
    };
  }, [diagnosticAnswers, allDiagnosticQuestions]);

  // Oxford 3000 filtering with SRS
  const filteredOxfordList = OXFORD_3000_VOCABULARY.filter((item) => {
    const matchesCefr = oxfordCefrFilter === 'all' || item.cefr === oxfordCefrFilter;
    const matchesSearch =
      item.word.toLowerCase().includes(oxfordSearch.toLowerCase()) ||
      item.meaningId.toLowerCase().includes(oxfordSearch.toLowerCase()) ||
      item.meaningEn.toLowerCase().includes(oxfordSearch.toLowerCase());
    
    const wordSrs = srsDeck[item.id] || { box: 1, lastReviewed: 0 };
    let matchesSrs = true;
    if (oxfordSrsFilter === 'box1') matchesSrs = wordSrs.box === 1;
    if (oxfordSrsFilter === 'box4') matchesSrs = wordSrs.box === 4;
    if (oxfordSrsFilter === 'due') {
      const daysPassed = (Date.now() - wordSrs.lastReviewed) / (1000 * 60 * 60 * 24);
      matchesSrs = wordSrs.box === 1 || (wordSrs.box === 2 && daysPassed >= 3) || (wordSrs.box === 3 && daysPassed >= 7);
    }

    return matchesCefr && matchesSearch && matchesSrs;
  });

  const currentOxfordWord: OxfordWord = filteredOxfordList[oxfordIndex] || filteredOxfordList[0] || OXFORD_3000_VOCABULARY[0];
  const currentWordSrs = srsDeck[currentOxfordWord?.id] || { box: 1, lastReviewed: 0 };

  const handleCheckOxfordMeaning = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userMeaningInput.trim() || !currentOxfordWord) return;

    const result = checkMeaningAccuracy(userMeaningInput, currentOxfordWord);
    setMeaningFeedback({ checked: true, isCorrect: result.isCorrect, matched: result.matchedKeyword });

    if (result.isCorrect) {
      handleRateSrs(currentOxfordWord.id, Math.min(4, currentWordSrs.box + 1));
    }
  };

  const handleRateSrs = (wordId: string, targetBox: number) => {
    const updated = {
      ...srsDeck,
      [wordId]: { box: targetBox, lastReviewed: Date.now() },
    };
    setSrsDeck(updated);
    try {
      localStorage.setItem('meraki_srs_deck', JSON.stringify(updated));
    } catch (e) {}
  };

  const handleNextOxfordWord = () => {
    setUserMeaningInput('');
    setMeaningFeedback(null);
    setOxfordIndex((prev) => (prev + 1) % filteredOxfordList.length);
  };

  const handlePrevOxfordWord = () => {
    setUserMeaningInput('');
    setMeaningFeedback(null);
    setOxfordIndex((prev) => (prev === 0 ? filteredOxfordList.length - 1 : prev - 1));
  };

  const handleRandomOxfordWord = () => {
    setUserMeaningInput('');
    setMeaningFeedback(null);
    const rand = Math.floor(Math.random() * filteredOxfordList.length);
    setOxfordIndex(rand);
  };

  // Keyboard Shortcuts for Power Users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
        return;
      }

      // Oxford 3000 Shortcuts
      if (activeHub === 'oxford3000') {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNextOxfordWord();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrevOxfordWord();
        } else if (e.key === ' ') {
          e.preventDefault();
          if (currentOxfordWord) playNativeAudio(currentOxfordWord.word);
        }
      }

      // Practice Quiz Shortcuts
      if (activeHub === 'practice' && practiceSubMode === 'quiz') {
        if (e.key === 'ArrowRight' && activeQuestionIndex < questions.length - 1) {
          e.preventDefault();
          setActiveQuestionIndex((prev) => prev + 1);
        } else if (e.key === 'ArrowLeft' && activeQuestionIndex > 0) {
          e.preventDefault();
          setActiveQuestionIndex((prev) => prev - 1);
        } else if (['1', '2', '3', '4'].includes(e.key)) {
          const optIdx = parseInt(e.key) - 1;
          if (currentQuestion && currentQuestion.options && currentQuestion.options[optIdx]) {
            if (quizAnswers[currentQuestion.id] === undefined) {
              handleSelectAnswer(currentQuestion.id, currentQuestion.options[optIdx]);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeHub, practiceSubMode, activeQuestionIndex, questions, currentQuestion, quizAnswers, currentOxfordWord, filteredOxfordList, oxfordIndex]);

  // Sentence Doctor submit handler
  const handleCheckDoctorSentence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!doctorUserInput.trim() || !currentDoctorTask) return;

    const cleanInput = doctorUserInput.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    const cleanTarget = currentDoctorTask.correctedSentence.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    
    let isMatch = cleanInput === cleanTarget;
    if (!isMatch && currentDoctorTask.acceptedVariations) {
      isMatch = currentDoctorTask.acceptedVariations.some(
        (v) => cleanInput === v.trim().toLowerCase().replace(/[.\s]+/g, ' ')
      );
    }

    setDoctorFeedback({ checked: true, isCorrect: isMatch });

    if (!isMatch) {
      recordMistake({
        id: currentDoctorTask.id,
        type: 'doctor',
        title: currentTopic.title,
        question: currentDoctorTask.flawedSentence,
        prompt: `Koreksi Anda: "${doctorUserInput}"`,
        correctAnswer: currentDoctorTask.correctedSentence,
        explanation: currentDoctorTask.linguisticExplanation,
        timestamp: Date.now()
      });
    }
  };

  // Paraphrasing submit handler
  const currentParaTask = PARAPHRASING_TASKS_DATA[activeParaIndex];
  const handleCheckParaphrase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paraUserInput.trim() || !currentParaTask) return;

    const cleanInput = paraUserInput.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    const cleanSample = currentParaTask.sampleParaphrase.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    
    let isMatch = cleanInput === cleanSample;
    if (!isMatch && currentParaTask.acceptableVariations) {
      isMatch = currentParaTask.acceptableVariations.some(
        (v) => cleanInput === v.trim().toLowerCase().replace(/[.\s]+/g, ' ')
      );
    }

    setParaFeedback({ checked: true, isCorrect: isMatch });
  };

  // Dependent Preposition submit handler
  const currentPrepTask = DEPENDENT_PREPOSITIONS_DATA[activePrepIndex];
  const handleCheckPrep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prepUserInput.trim() || !currentPrepTask) return;

    const cleanInput = prepUserInput.trim().toLowerCase().replace(/[^a-z]/g, '');
    const cleanTarget = currentPrepTask.requiredPreposition.trim().toLowerCase().replace(/[^a-z]/g, '');
    const isMatch = cleanInput === cleanTarget;

    setPrepFeedback({ checked: true, isCorrect: isMatch });

    if (!isMatch) {
      recordMistake({
        id: currentPrepTask.id,
        type: 'prep',
        title: `Preposition: ${currentPrepTask.word}`,
        question: currentPrepTask.clozeSentence,
        prompt: `Jawaban Anda: "${prepUserInput}"`,
        correctAnswer: currentPrepTask.requiredPreposition,
        explanation: `Kata "${currentPrepTask.word}" (${currentPrepTask.partOfSpeech}) wajib berpasangan dengan preposisi "${currentPrepTask.requiredPreposition}".`,
        timestamp: Date.now()
      });
    }
  };

  // Sentence Combine submit handler
  const currentCombineTask = SENTENCE_COMBINING_DATA[activeCombineIndex];
  const handleCheckCombine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!combineUserInput.trim() || !currentCombineTask) return;

    const cleanInput = combineUserInput.trim().toLowerCase().replace(/[.\s]+/g, ' ');
    const cleanSample = currentCombineTask.sampleCombined.trim().toLowerCase().replace(/[.\s]+/g, ' ');

    let isMatch = cleanInput === cleanSample;
    if (!isMatch && currentCombineTask.acceptedVariations) {
      isMatch = currentCombineTask.acceptedVariations.some(
        (v) => cleanInput === v.trim().toLowerCase().replace(/[.\s]+/g, ' ')
      );
    }

    setCombineFeedback({ checked: true, isCorrect: isMatch });
  };

  // Deterministic Writing Pad Metric Analyzer with Sentence Rhythm & Academic Chunk Radar (Zero AI)
  const analyzeWritingPad = (text: string) => {
    const rawTokens = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = text.trim() ? rawTokens.length : 0;
    const charCount = text.length;

    const uniqueWords = new Set(rawTokens.map(w => w.toLowerCase().replace(/[^a-z0-9]/g, '')));
    const ttr = wordCount > 0 ? Math.round((uniqueWords.size / wordCount) * 100) : 0;

    const rawSentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 0);
    const sentenceCount = rawSentences.length;
    const avgWordsPerSentence = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;

    // Sentence rhythm calculation (lengths of each individual sentence)
    const sentenceLengths = rawSentences.map(s => s.split(/\s+/).filter(Boolean).length);
    
    // Rhythm monotony detection (3+ consecutive sentences with identical or +/- 1 length)
    let isMonotonous = false;
    let monotonyReason = '';
    if (sentenceLengths.length >= 3) {
      for (let i = 0; i <= sentenceLengths.length - 3; i++) {
        const [a, b, c] = [sentenceLengths[i], sentenceLengths[i+1], sentenceLengths[i+2]];
        if (Math.abs(a - b) <= 2 && Math.abs(b - c) <= 2 && Math.abs(a - c) <= 3 && a >= 5) {
          isMonotonous = true;
          monotonyReason = `Kalimat ${i+1}–${i+3} memiliki panjang yang hampir seragam (${a}, ${b}, ${c} kata). Variasikan panjang klausa untuk menciptakan ritme esai yang lebih dinamis.`;
          break;
        }
      }
    }

    // Hedging words detector
    const hedgingTokens = ['suggest', 'suggests', 'suggested', 'appear', 'appears', 'appeared', 'tend', 'tends', 'tended', 'may', 'might', 'could', 'potentially', 'arguably', 'largely', 'predominantly', 'plausibly', 'seemingly'];
    const lowerText = text.toLowerCase();
    const detectedHedging = hedgingTokens.filter(h => new RegExp(`\\b${h}\\b`, 'i').test(lowerText));

    // Academic High-Yield Chunks & Connectors (75+ items)
    const academicChunks = [
      'in light of', 'with respect to', 'it is widely argued that', 'conversely', 'a substantial body of evidence',
      'plays a pivotal role', 'play a pivotal role', 'shed light on', 'sheds light on', 'a significant proportion of',
      'it is worth noting that', 'on the grounds that', 'in stark contrast to', 'exerts a profound influence',
      'it can be deduced that', 'compelling evidence', 'underlying cause', 'a cornerstone of', 'give rise to',
      'gives rise to', 'cast doubt on', 'casts doubt on', 'paramount importance', 'notwithstanding',
      'in accordance with', 'pave the way for', 'paves the way for', 'warrant further investigation',
      'as a consequence', 'in this regard', 'to a certain extent', 'bearing in mind', 'draw a distinction between',
      'exert considerable pressure', 'hold the view that', 'it is evident that', 'on the premise that',
      'reach a consensus', 'serve as a catalyst for', 'take into account', 'take into consideration'
    ];
    const detectedAcademicChunks = academicChunks.filter(chunk => lowerText.includes(chunk));
    const academicChunkDensity = sentenceCount > 0 ? Math.min(100, Math.round((detectedAcademicChunks.length / sentenceCount) * 100)) : 0;

    // Informal words detector
    const informalTokens = ['a lot of', 'stuff', 'things', 'gonna', 'wanna', 'very good', 'bad', 'huge', 'kids', 'kind of', 'sort of'];
    const detectedInformal = informalTokens.filter(inf => lowerText.includes(inf));

    return {
      wordCount,
      charCount,
      uniqueWordsCount: uniqueWords.size,
      ttr,
      sentenceCount,
      avgWordsPerSentence,
      sentenceLengths,
      isMonotonous,
      monotonyReason,
      detectedHedging,
      detectedAcademicChunks,
      academicChunkDensity,
      detectedInformal
    };
  };

  const padMetrics = analyzeWritingPad(writingPadText);

  // Get current hub label
  const getHubTitle = () => {
    switch (activeHub) {
      case 'curriculum': return 'Kurikulum Fondasi (9 Tahap)';
      case 'practice': return 'Latihan Soal & Bedah Kalimat';
      case 'collocations': return 'ACL & Diksi Alami';
      case 'matrices': return 'Master Matriks Fondasi';
      case 'studio': return 'Studio Sintaksis & Ujian';
      case 'phonetics': return 'Minimal Pairs Audio Lab';
      case 'oxford3000': return 'Oxford 3000 SRS Studio';
      case 'vault': return 'Mistake Vault (Bank Khilaf)';
      case 'diagnostic': return 'Diagnostic Matrix';
      default: return 'Meraki';
    }
  };

  return (
    <div className="h-screen w-screen flex bg-[#EFE9DF] text-[#1E1B17] overflow-hidden antialiased select-text">
      {/* Hidden File Input for Data Restore */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImportDataBackup}
        accept=".json"
        className="hidden"
      />

      {/* Mobile Backdrop Overlay */}
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      {/* ───────────── MASTER APP SIDEBAR (MODERN, CLEAN, COLLAPSIBLE & MOBILE-DRAWER) ───────────── */}
      <aside className={clsx(
        'bg-[#E8E2D6] border-r border-[#C8C0B0] flex flex-col justify-between h-full transition-all duration-300 shrink-0 select-none overflow-hidden',
        // Desktop positioning
        'hidden md:flex',
        isNavOpen ? 'md:w-64' : 'md:w-0 md:border-r-0',
        // Mobile positioning when open
        isNavOpen && '!flex fixed inset-y-0 left-0 z-50 w-72 shadow-2xl md:shadow-none md:relative'
      )}>
        {/* Sidebar Header */}
        <div className="p-5 border-b border-[#C8C0B0] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1E1B17]">
                Meraki
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider bg-[#A84A28]/10 text-[#A84A28] px-2 py-0.5 rounded-full font-bold">
                Oxford
              </span>
            </div>
            <button
              onClick={() => setIsNavOpen(false)}
              className="p-1.5 rounded-xl hover:bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17] transition-colors tactile-btn"
              title="Sembunyikan Navigasi (Zen Mode)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <div className="flex-1 overflow-y-auto p-3 space-y-6">
          {/* Section 1: Kurikulum & Latihan */}
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] px-3 font-semibold block">
              Kurikulum & Teori
            </span>
            <button
              onClick={() => handleNavSelect('curriculum')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'curriculum'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <BookOpen className="w-4 h-4 text-[#A84A28]" />
              <span>Modul Materi (9 Tahap)</span>
            </button>

            <button
              onClick={() => handleNavSelect('practice')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'practice'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <ListCheck className="w-4 h-4 text-[#535841]" />
              <span>Latihan & Bedah Soal</span>
            </button>
          </div>

          {/* Section 2: Diksi & Fondasi Leksikal */}
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] px-3 font-semibold block">
              Laboratorium Diksi
            </span>
            <button
              onClick={() => handleNavSelect('collocations')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'collocations'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <Sparkles className="w-4 h-4 text-[#A84A28]" />
              <span>ACL & Diksi Alami</span>
            </button>

            <button
              onClick={() => handleNavSelect('matrices')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'matrices'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <Table className="w-4 h-4 text-[#535841]" />
              <span>Master Matriks Fondasi</span>
            </button>

            <button
              onClick={() => handleNavSelect('studio')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'studio'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <PenTool className="w-4 h-4 text-[#A84A28]" />
              <span>Studio Sintaksis</span>
            </button>

            <button
              onClick={() => handleNavSelect('phonetics')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'phonetics'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <Ear className="w-4 h-4 text-[#535841]" />
              <span>Minimal Pairs Lab</span>
            </button>

            <button
              onClick={() => handleNavSelect('oxford3000')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'oxford3000'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <Layers className="w-4 h-4 text-[#A84A28]" />
              <span>Oxford 3000 SRS</span>
            </button>
          </div>

          {/* Section 3: Evaluasi & Bank Khilaf */}
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] px-3 font-semibold block">
              Evaluasi & Bank Khilaf
            </span>
            <button
              onClick={() => handleNavSelect('vault')}
              className={clsx(
                'w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'vault'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <div className="flex items-center gap-3">
                <Archive className="w-4 h-4 text-[#A84A28]" />
                <span>Mistake Vault</span>
              </div>
              {mistakeVault.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#A84A28] text-white font-bold">
                  {mistakeVault.length}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavSelect('diagnostic')}
              className={clsx(
                'w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs transition-all tactile-btn text-left',
                activeHub === 'diagnostic'
                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-semibold shadow-xs'
                  : 'text-[#38332A] hover:bg-[#DDD7CA]'
              )}
            >
              <Award className="w-4 h-4 text-[#535841]" />
              <span>Diagnostic Matrix</span>
            </button>
          </div>

          {/* Section 4: Pusat Studi & Simulasi Lanjutan */}
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] px-3 font-semibold block">
              Pusat Studi Lanjutan
            </span>
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-2xl text-xs transition-all tactile-btn text-left text-[#38332A] hover:bg-[#DDD7CA]"
            >
              <div className="flex items-center gap-3">
                <BarChart2 className="w-4 h-4 text-[#A84A28]" />
                <span>Dashboard Analisis</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#7A7265]" />
            </Link>

            <Link
              href="/exam"
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-2xl text-xs transition-all tactile-btn text-left text-[#38332A] hover:bg-[#DDD7CA]"
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-4 h-4 text-[#535841]" />
                <span>IELTS & TOEFL Hub</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#7A7265]" />
            </Link>

            <Link
              href="/vocabulary"
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-2xl text-xs transition-all tactile-btn text-left text-[#38332A] hover:bg-[#DDD7CA]"
            >
              <div className="flex items-center gap-3">
                <BookMarked className="w-4 h-4 text-[#A84A28]" />
                <span>AWL Lexical Vault</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#7A7265]" />
            </Link>
          </div>
        </div>

        {/* Sidebar Footer: Progress Box & Backup Utilities */}
        <div className="p-4 border-t border-[#C8C0B0] bg-[#E2DCD0]/60 space-y-3 shrink-0">
          <div className="p-3 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#7A7265]">Kurikulum Selesai</span>
              <span className="font-bold text-[#1E1B17]">
                {completedTopicIds.length}/{MERAKI_CURRICULUM.length}
              </span>
            </div>
            <div className="w-full h-1.5 bg-[#C8C0B0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#A84A28] transition-all duration-500"
                style={{
                  width: `${(completedTopicIds.length / MERAKI_CURRICULUM.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-[#7A7265] pt-1">
            <button
              onClick={handleExportDataBackup}
              className="hover:text-[#1E1B17] flex items-center gap-1 hover:underline"
              title="Cadangkan Data Progres (.json)"
            >
              <Download className="w-3 h-3" />
              <span>Backup</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="hover:text-[#1E1B17] flex items-center gap-1 hover:underline"
              title="Pulihkan Data Backup (.json)"
            >
              <Upload className="w-3 h-3" />
              <span>Restore</span>
            </button>

            <button
              onClick={handleResetProgress}
              className="hover:text-[#A84A28] flex items-center gap-1 hover:underline"
              title="Reset Progres"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ───────────── MAIN APP CONTAINER ───────────── */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Minimal Toolbar */}
        <header className="h-12 px-4 sm:px-6 glass-header border-b border-[#C8C0B0] flex items-center justify-between shrink-0 z-30">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            <button
              onClick={() => setIsNavOpen(true)}
              className="p-1.5 rounded-xl bg-[#DDD7CA] hover:bg-[#C8C0B0] text-[#1E1B17] transition-all tactile-btn flex items-center gap-1.5 text-xs font-mono shrink-0"
              title="Buka Menu Navigasi"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>

            <div className="flex items-center gap-1.5 truncate">
              <span className="font-serif text-sm font-semibold text-[#1E1B17] truncate">
                {getHubTitle()}
              </span>
              {activeHub === 'curriculum' && (
                <>
                  <span className="text-[#7A7265] text-xs">/</span>
                  <span className="font-mono text-xs text-[#A84A28] truncate">
                    Modul {String(currentTopic.moduleNumber).padStart(2, '0')}: {currentTopic.title}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeHub === 'curriculum' && (
              <div className="flex items-center gap-1 bg-[#DDD7CA] p-0.5 rounded-xl border border-[#C8C0B0] text-xs font-mono">
                <button
                  onClick={() => setIsModuleIndexOpen(!isModuleIndexOpen)}
                  className={clsx(
                    'px-2.5 py-1 rounded-lg transition-all tactile-btn flex items-center gap-1 text-[11px]',
                    isModuleIndexOpen ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                  )}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Daftar Modul</span>
                </button>
              </div>
            )}

            {mistakeVault.length > 0 && activeHub !== 'vault' && (
              <button
                onClick={() => setActiveHub('vault')}
                className="flex items-center gap-1.5 bg-[#A84A28]/15 border border-[#A84A28]/30 text-[#A84A28] hover:bg-[#A84A28] hover:text-white px-2.5 py-1 rounded-xl text-xs font-mono transition-all tactile-btn"
              >
                <Archive className="w-3.5 h-3.5" />
                <span>{mistakeVault.length} Khilaf</span>
              </button>
            )}
          </div>
        </header>

        {/* Dynamic Content Canvas */}
        <main className="flex-1 overflow-hidden">
          {/* ───────────── WORKSPACE 1: KURIKULUM (MATERI LENGKAP) ───────────── */}
          {activeHub === 'curriculum' && (
            <div className="h-full grid grid-cols-12 overflow-hidden relative">
              {/* Mobile Module Directory Modal (Bottom Sheet on Mobile) */}
              {isModuleIndexOpen && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-xs md:hidden">
                  <div className="w-full max-h-[82vh] bg-[#E8E2D6] rounded-t-3xl sm:rounded-3xl border border-[#C8C0B0] flex flex-col overflow-hidden shadow-2xl p-4 space-y-3 animate-in slide-in-from-bottom duration-200">
                    <div className="flex items-center justify-between pb-2 border-b border-[#C8C0B0]">
                      <span className="font-serif text-lg font-bold text-[#1E1B17]">Pilih Modul Kurikulum</span>
                      <button
                        onClick={() => setIsModuleIndexOpen(false)}
                        className="p-1.5 rounded-full bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-[#7A7265] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Cari modul..."
                        className="w-full pl-9 pr-3 py-2 text-base sm:text-xs bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                      />
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                      {stageGroups.map((stageTitle) => {
                        const items = filteredTopics.filter((t) => t.stageName === stageTitle);
                        if (items.length === 0) return null;
                        return (
                          <div key={stageTitle} className="space-y-1.5">
                            <div className="flex items-center gap-1.5 px-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#A84A28]" />
                              <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] font-semibold">
                                {stageTitle}
                              </span>
                            </div>
                            <div className="space-y-1">
                              {items.map((topic) => {
                                const isSelected = topic.id === selectedTopicId;
                                const isDone = completedTopicIds.includes(topic.id);
                                return (
                                  <button
                                    key={topic.id}
                                    onClick={() => handleSelectTopic(topic.id)}
                                    className={clsx(
                                      'w-full text-left p-3 rounded-2xl transition-all flex items-start justify-between gap-2.5 tactile-btn min-h-[46px]',
                                      isSelected
                                        ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs'
                                        : 'bg-[#E2DCD0]/70 hover:bg-[#DDD7CA] text-[#38332A]'
                                    )}
                                  >
                                    <div className="space-y-0.5 flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <span className={clsx(
                                          'font-mono text-[10px] px-1.5 py-0.2 rounded-md',
                                          isSelected ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#7A7265]'
                                        )}>
                                          {String(topic.moduleNumber).padStart(2, '0')}
                                        </span>
                                        <h4 className={clsx('text-xs font-medium line-clamp-1', isSelected ? 'text-[#EFE9DF]' : 'text-[#1E1B17]')}>
                                          {topic.title}
                                        </h4>
                                      </div>
                                      <p className={clsx('text-[11px] line-clamp-1 pl-6', isSelected ? 'text-[#EFE9DF]/70' : 'text-[#7A7265]')}>
                                        {topic.subtitle}
                                      </p>
                                    </div>
                                    {isDone && <Check className="w-3.5 h-3.5 text-[#535841] shrink-0 mt-1" />}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop Module Directory Sidebar */}
              {isModuleIndexOpen && (
                <aside className="hidden md:flex md:col-span-4 lg:col-span-3 bg-[#E8E2D6] border-r border-[#C8C0B0] flex-col h-full overflow-hidden transition-all duration-300">
                  <div className="p-3.5 border-b border-[#C8C0B0]/70 space-y-2 shrink-0">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-[#7A7265] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        placeholder="Cari modul kurikulum..."
                        className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                      />
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-3 space-y-4">
                    {stageGroups.map((stageTitle) => {
                      const items = filteredTopics.filter((t) => t.stageName === stageTitle);
                      if (items.length === 0) return null;

                      return (
                        <div key={stageTitle} className="space-y-1.5">
                          <div className="flex items-center gap-1.5 px-2 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A84A28]" />
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#7A7265] font-semibold">
                              {stageTitle}
                            </span>
                          </div>
                          <div className="space-y-1">
                            {items.map((topic) => {
                              const isSelected = topic.id === selectedTopicId;
                              const isDone = completedTopicIds.includes(topic.id);

                              return (
                                <button
                                  key={topic.id}
                                  onClick={() => handleSelectTopic(topic.id)}
                                  className={clsx(
                                    'w-full text-left p-3 rounded-2xl transition-all duration-200 flex items-start justify-between gap-2.5 tactile-btn',
                                    isSelected
                                      ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs'
                                      : 'bg-[#E2DCD0]/60 hover:bg-[#DDD7CA] text-[#38332A]'
                                  )}
                                >
                                  <div className="space-y-0.5 flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className={clsx(
                                        'font-mono text-[10px] px-1.5 py-0.2 rounded-md',
                                        isSelected ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#7A7265]'
                                      )}>
                                        {String(topic.moduleNumber).padStart(2, '0')}
                                      </span>
                                      <h4 className={clsx(
                                        'text-xs font-medium line-clamp-1',
                                        isSelected ? 'text-[#EFE9DF]' : 'text-[#1E1B17]'
                                      )}>
                                        {topic.title}
                                      </h4>
                                    </div>
                                    <p className={clsx(
                                      'text-[11px] line-clamp-1 pl-6',
                                      isSelected ? 'text-[#EFE9DF]/70' : 'text-[#7A7265]'
                                    )}>
                                      {topic.subtitle}
                                    </p>
                                  </div>

                                  <div className="shrink-0 mt-0.5">
                                    {isDone ? (
                                      <span className={clsx(
                                        'w-4 h-4 rounded-full flex items-center justify-center text-[10px]',
                                        isSelected ? 'bg-[#535841] text-[#EFE9DF]' : 'bg-[#535841]/20 text-[#535841]'
                                      )}>
                                        <Check className="w-2.5 h-2.5" />
                                      </span>
                                    ) : (
                                      <span className={clsx(
                                        'w-1.5 h-1.5 rounded-full inline-block mt-1',
                                        isSelected ? 'bg-white/40' : 'bg-black/15'
                                      )} />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </aside>
              )}

              {/* Main Reading Pane */}
              <section className={clsx(
                'bg-[#EFE9DF] overflow-y-auto h-full p-4 sm:p-8 lg:p-12 pb-28 md:pb-12 space-y-6 sm:space-y-8 transition-all duration-300',
                isModuleIndexOpen ? 'col-span-12 md:col-span-8 lg:col-span-9' : 'col-span-12'
              )}>
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                  {/* Mobile Quick Module Chips Carousel */}
                  <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-1 shrink-0 pb-2 border-b border-[#C8C0B0]/60">
                    {MERAKI_CURRICULUM.map((topic) => {
                      const isSelected = topic.id === selectedTopicId;
                      const isDone = completedTopicIds.includes(topic.id);
                      return (
                        <button
                          key={topic.id}
                          onClick={() => handleSelectTopic(topic.id)}
                          className={clsx(
                            'px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all tactile-btn flex items-center gap-1.5 shrink-0 min-h-[38px]',
                            isSelected
                              ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                              : 'bg-[#E6E0D4] text-[#7A7265] border border-[#C8C0B0]'
                          )}
                        >
                          <span>{String(topic.moduleNumber).padStart(2, '0')}</span>
                          <span className="max-w-[120px] truncate">{topic.title}</span>
                          {isDone && <Check className="w-3 h-3 text-[#535841]" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Topic Header */}
                  <div className="space-y-3 pb-6 border-b border-[#C8C0B0]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#A84A28] font-medium bg-[#A84A28]/10 px-2.5 py-0.5 rounded-md">
                          {currentTopic.stageName}
                        </span>
                        {currentTopic.prerequisite && (
                          <span className="font-mono text-[10px] text-[#7A7265] bg-[#DDD7CA] px-2 py-0.5 rounded-md">
                            Prasyarat: {currentTopic.prerequisite}
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-xs text-[#7A7265]">
                        ~{currentTopic.estimatedMinutes} menit baca
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl font-serif text-[#1E1B17] leading-tight">
                      {currentTopic.title}
                    </h1>
                    <p className="text-sm text-[#524C42] leading-relaxed drop-cap">
                      {currentTopic.coreConceptSummary}
                    </p>
                  </div>

                  {/* Mental Model Intro */}
                  {currentTopic.mentalModelIntro && (
                    <div className="p-6 rounded-3xl bg-[#DDD7CA]/80 border-l-4 border-l-[#535841] space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#535841]" />
                        <span className="font-mono text-xs uppercase tracking-wider text-[#535841] font-semibold">
                          Mental Model & Nalar Penutur Asli:
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#38332A] leading-relaxed italic">
                        "{currentTopic.mentalModelIntro}"
                      </p>
                    </div>
                  )}

                  {/* Decision Tree / Flowchart */}
                  {currentTopic.decisionTree && currentTopic.decisionTree.length > 0 && (
                    <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4">
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#A84A28]" />
                        <h3 className="font-serif text-lg font-medium text-[#1E1B17]">
                          Diagram Alur Keputusan Gramatikal (Mental Flowchart)
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {currentTopic.decisionTree.map((node, nIdx) => (
                          <div key={nIdx} className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] bg-[#1E1B17] text-[#EFE9DF] px-2 py-0.5 rounded font-semibold">
                                {node.step}
                              </span>
                              <span className="font-serif text-sm font-semibold text-[#1E1B17]">
                                {node.question}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                              {node.branches.map((br, bIdx) => (
                                <div key={bIdx} className="p-3.5 rounded-xl bg-[#E6E0D4] border border-[#C8C0B0]/80 text-xs space-y-1">
                                  <span className="font-mono text-[10px] uppercase font-semibold text-[#A84A28] block">
                                    Kondisi: {br.condition}
                                  </span>
                                  <div className="font-serif font-bold text-[#1E1B17]">
                                    ➔ {br.outcome}
                                  </div>
                                  <p className="text-[11px] text-[#524C42] pt-1 border-t border-[#C8C0B0]/60">
                                    {br.rule}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step-by-Step Sections */}
                  <div className="space-y-6">
                    {currentTopic.sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] uppercase tracking-wider bg-[#DDD7CA] text-[#A84A28] px-2 py-0.5 rounded-md font-semibold">
                            {section.stepNumber}
                          </span>
                          {section.title && (
                            <h3 className="text-lg font-serif font-medium text-[#1E1B17]">
                              {section.title}
                            </h3>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#38332A] leading-relaxed">
                          {section.explanation}
                        </p>

                        {/* Formula Card */}
                        {section.formula && (
                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17] space-y-1">
                            <span className="text-[10px] text-[#7A7265] uppercase tracking-wider block font-semibold">
                              Rumus / Kaidah Baku:
                            </span>
                            <div className="font-medium text-[#A84A28]">{section.formula}</div>
                          </div>
                        )}

                        {/* Examples with Native Audio */}
                        {section.examples && section.examples.length > 0 && (
                          <div className="space-y-2 pt-1">
                            <span className="font-mono text-[11px] text-[#7A7265] uppercase tracking-wider block">
                              Contoh Kontekstual:
                            </span>
                            {section.examples.map((ex, i) => (
                              <div
                                key={i}
                                className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 space-y-1 text-xs"
                              >
                                <div className="flex items-start justify-between gap-2">
                                  <p className="font-serif text-sm text-[#1E1B17] italic">
                                    "{ex.sentence}"
                                  </p>
                                  <button
                                    onClick={() => playNativeAudio(ex.sentence)}
                                    className="p-1 rounded-md hover:bg-[#C8C0B0]/40 text-[#7A7265] hover:text-[#1E1B17] transition-colors shrink-0"
                                    title="Dengarkan pelafalan asli"
                                  >
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <p className="text-[#7A7265]">{ex.translation}</p>
                                {ex.note && (
                                  <p className="text-[11px] text-[#535841] font-mono">{ex.note}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Contrastive Analysis */}
                        {section.contrastiveAnalysis && (
                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                            <span className="font-mono text-[10px] uppercase font-semibold text-[#A84A28] block">
                              Analisis Kontrastif & Jebakan Fatal:
                            </span>
                            <div className="space-y-1.5 text-xs">
                              <div className="p-2.5 rounded-lg bg-[#A84A28]/10 text-[#1E1B17] border border-[#A84A28]/20">
                                <span className="font-mono font-semibold text-[#A84A28] mr-2">Salah:</span>
                                <span className="italic">"{section.contrastiveAnalysis.incorrectSentence}"</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-[#535841]/10 text-[#1E1B17] border border-[#535841]/20">
                                <span className="font-mono font-semibold text-[#535841] mr-2">Benar:</span>
                                <span className="italic">"{section.contrastiveAnalysis.correctSentence}"</span>
                              </div>
                            </div>
                            <p className="text-[11px] text-[#524C42] leading-relaxed pt-1">
                              <strong>Mengapa demikian?</strong> {section.contrastiveAnalysis.linguisticReason}
                            </p>
                          </div>
                        )}

                        {/* Common Pitfall */}
                        {section.commonPitfall && (
                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/90 border-l-4 border-l-[#A84A28] text-xs text-[#1E1B17] space-y-0.5">
                            <strong className="font-semibold block text-[#A84A28]">Catatan Penting / Jebakan Umum:</strong>
                            <p className="leading-relaxed text-[#524C42]">{section.commonPitfall}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Register Elevation Ladder */}
                  {currentTopic.registerLadder && (
                    <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#A84A28]" />
                        <h3 className="font-serif text-lg font-medium text-[#1E1B17]">
                          Tangga Peningkatan Formalitas (Register Elevation Ladder)
                        </h3>
                      </div>

                      <div className="space-y-2.5 text-xs">
                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/60 border border-[#C8C0B0] space-y-1">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#7A7265] block">
                            Level 1: Percakapan Santai (Baseline IELTS 5.5)
                          </span>
                          <p className="font-serif text-[#7A7265] italic">"{currentTopic.registerLadder.informal}"</p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                            Level 2: Standar Baku Tertulis (IELTS 6.5 - 7.0)
                          </span>
                          <p className="font-serif text-[#1E1B17] italic">"{currentTopic.registerLadder.standard}"</p>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#535841]/15 border border-[#535841]/30 space-y-1">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                            Level 3: High Academic Polish (IELTS Band 8.5+ / TOEFL iBT 115+)
                          </span>
                          <p className="font-serif text-sm font-semibold text-[#1E1B17] italic">"{currentTopic.registerLadder.academicHigh}"</p>
                        </div>

                        <div className="p-3 rounded-xl bg-[#DDD7CA]/70 text-[11px] text-[#524C42] border border-[#C8C0B0]/60">
                          <strong>Nalar Peningkatan Sintaksis:</strong> {currentTopic.registerLadder.analysis}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Exam Bridge */}
                  {currentTopic.examBridge && (
                    <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#A84A28]" />
                        <h3 className="font-serif text-lg text-[#1E1B17]">
                          Aplikasi Strategis pada IELTS & TOEFL
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1.5">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#A84A28] block">
                            IELTS Writing & Speaking:
                          </span>
                          <p className="text-[#38332A] leading-relaxed">
                            {currentTopic.examBridge.ieltsApplication}
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1.5">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                            TOEFL iBT (Structure & Academic Writing):
                          </span>
                          <p className="text-[#38332A] leading-relaxed">
                            {currentTopic.examBridge.toeflApplication}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#DDD7CA]/60 border border-[#C8C0B0] text-[11px] font-mono text-[#524C42]">
                        <strong>Dampak Skor Penilaian:</strong> {currentTopic.examBridge.scoringImpact}
                      </div>
                    </div>
                  )}

                  {/* Can-Do Checklist */}
                  {currentTopic.canDoChecklist && currentTopic.canDoChecklist.length > 0 && (
                    <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                          <h3 className="font-serif text-lg text-[#1E1B17] font-medium">
                            Can-Do Self-Assessment (Radar Refleksi Mandiri)
                          </h3>
                        </div>
                        <span className="font-mono text-[10px] text-[#7A7265]">Ceklis setelah menguasai</span>
                      </div>

                      <div className="space-y-2">
                        {currentTopic.canDoChecklist.map((item, cIdx) => {
                          const checkKey = `${currentTopic.id}-cando-${cIdx}`;
                          const isChecked = !!checkedCanDo[checkKey];

                          return (
                            <button
                              key={cIdx}
                              onClick={() => handleToggleCanDo(checkKey)}
                              className={clsx(
                                'w-full text-left p-3 rounded-2xl border text-xs transition-all flex items-start gap-3 cursor-pointer',
                                isChecked ? 'bg-[#535841]/15 border-[#535841]/40 text-[#1E1B17]' : 'bg-[#DDD7CA] border-[#C8C0B0] text-[#38332A]'
                              )}
                            >
                              <span className={clsx(
                                'w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5',
                                isChecked ? 'bg-[#535841] border-[#535841] text-white' : 'border-[#7A7265]'
                              )}>
                                {isChecked && <Check className="w-3 h-3" />}
                              </span>
                              <span className={clsx('leading-relaxed', isChecked && 'line-through text-[#7A7265]')}>
                                {item}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Pocket Axioms */}
                  {currentTopic.pocketAxioms && currentTopic.pocketAxioms.length > 0 && (
                    <div className="p-6 rounded-3xl bg-[#1E1B17] text-[#EFE9DF] shadow-md space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-[#A84A28]" />
                          <h3 className="font-serif text-lg font-medium text-[#EFE9DF]">
                            Pocket Axioms (Kartu Contekan Kilat 30 Detik)
                          </h3>
                        </div>
                        <button
                          onClick={handleCopyModuleAxioms}
                          className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono transition-colors flex items-center gap-1"
                        >
                          <FileText className="w-3 h-3" />
                          <span>{copiedAxiom ? 'Tersalin!' : 'Salin Ringkasan'}</span>
                        </button>
                      </div>

                      <ul className="space-y-2 text-xs text-[#DDD7CA]">
                        {currentTopic.pocketAxioms.map((ax, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="text-[#A84A28] font-bold mt-0.5">▪</span>
                            <span className="leading-relaxed">{ax}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom Action */}
                  <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-base text-[#1E1B17]">Sudah Selesai Membaca Modul Ini?</h4>
                      <p className="text-xs text-[#7A7265]">Uji pemahamanmu pada section latihan kuis khusus modul ini.</p>
                    </div>

                    <button
                      onClick={() => setActiveHub('practice')}
                      className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono transition-colors flex items-center gap-2 shadow-xs"
                    >
                      <span>Buka Latihan Soal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ───────────── WORKSPACE 2: LATIHAN SOAL & BEDAH KALIMAT ───────────── */}
          {activeHub === 'practice' && (
            <div className="h-full grid grid-cols-12 overflow-hidden">
              {/* Desktop Topic Selector Sidebar */}
              <aside className="hidden md:flex md:col-span-4 lg:col-span-3 bg-[#E8E2D6] border-r border-[#C8C0B0] flex-col h-full overflow-hidden p-4 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#7A7265] font-semibold block">
                  Pilih Modul Soal:
                </span>
                <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                  {MERAKI_CURRICULUM.map((topic) => {
                    const isSelected = topic.id === selectedTopicId;
                    const isDone = completedTopicIds.includes(topic.id);

                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleSelectTopic(topic.id)}
                        className={clsx(
                          'w-full text-left p-3 rounded-2xl text-xs transition-all flex items-center justify-between gap-2 tactile-btn',
                          isSelected
                            ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs font-medium'
                            : 'bg-[#E2DCD0]/60 hover:bg-[#DDD7CA] text-[#38332A]'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] opacity-70">
                            {String(topic.moduleNumber).padStart(2, '0')}
                          </span>
                          <span className="line-clamp-1">{topic.title}</span>
                        </div>
                        {isDone && (
                          <Check className="w-3.5 h-3.5 shrink-0 text-[#535841]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Right Practice Area */}
              <section className="col-span-12 md:col-span-8 lg:col-span-9 bg-[#EFE9DF] overflow-y-auto h-full p-4 sm:p-8 lg:p-12 pb-28 md:pb-12 flex flex-col justify-between">
                <div className="max-w-2xl mx-auto w-full space-y-5 sm:space-y-6 my-auto">
                  {/* Mobile Quick Module Chips */}
                  <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-0.5 -mx-1 shrink-0 pb-2 border-b border-[#C8C0B0]/60">
                    {MERAKI_CURRICULUM.map((topic) => {
                      const isSelected = topic.id === selectedTopicId;
                      const isDone = completedTopicIds.includes(topic.id);
                      return (
                        <button
                          key={topic.id}
                          onClick={() => handleSelectTopic(topic.id)}
                          className={clsx(
                            'px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all tactile-btn flex items-center gap-1.5 shrink-0 min-h-[38px]',
                            isSelected
                              ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                              : 'bg-[#E6E0D4] text-[#7A7265] border border-[#C8C0B0]'
                          )}
                        >
                          <span>{String(topic.moduleNumber).padStart(2, '0')}</span>
                          <span className="max-w-[120px] truncate">{topic.title}</span>
                          {isDone && <Check className="w-3 h-3 text-[#535841]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#C8C0B0]">
                    <div>
                      <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">
                        Modul {String(currentTopic.moduleNumber).padStart(2, '0')}: {currentTopic.title}
                      </span>
                      <h2 className="text-xl font-serif text-[#1E1B17]">Latihan Sintaksis & Produksi</h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleResetTopicQuiz}
                        title="Mulai ulang jawaban topik ini"
                        aria-label="Mulai ulang jawaban topik ini"
                        className="px-2.5 py-1.5 rounded-xl bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 text-[#7A7265] hover:text-[#1E1B17] text-xs font-mono flex items-center gap-1 border border-[#C8C0B0] tactile-btn min-h-[36px]"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Reset Topik</span>
                      </button>

                      <div className="flex items-center gap-1 bg-[#DDD7CA] p-1 rounded-2xl border border-[#C8C0B0]">
                        <button
                          onClick={() => setPracticeSubMode('quiz')}
                          className={clsx(
                            'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn min-h-[36px]',
                            practiceSubMode === 'quiz' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                          )}
                        >
                          Pilihan Ganda
                        </button>
                        <button
                          onClick={() => setPracticeSubMode('sentence-doctor')}
                          className={clsx(
                            'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn flex items-center gap-1 min-h-[36px]',
                            practiceSubMode === 'sentence-doctor' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                          )}
                        >
                          <Sparkles className="w-3 h-3 text-[#A84A28]" />
                          <span>Bedah Kalimat</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {practiceSubMode === 'quiz' && (
                    <div className="space-y-6">
                      <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono text-[#7A7265]">
                          <span className="bg-[#DDD7CA] px-2.5 py-0.5 rounded text-[#535841] font-semibold">
                            Level: {currentQuestion.difficulty}
                          </span>
                          <span>Soal {activeQuestionIndex + 1} dari {questions.length}</span>
                        </div>

                        <p className="text-sm sm:text-base font-medium text-[#1E1B17] leading-relaxed">
                          {currentQuestion.question}
                        </p>

                        <div className="space-y-2.5 pt-2">
                          {currentQuestion.options?.map((opt, oIdx) => {
                            const selected = quizAnswers[currentQuestion.id] === opt;
                            const isAnswered = quizAnswers[currentQuestion.id] !== undefined;
                            const isCorrect = opt === currentQuestion.correctAnswer;

                            let optStyle = 'bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 border-[#C8C0B0] text-[#38332A]';

                            if (isAnswered) {
                              if (isCorrect) {
                                optStyle = 'bg-[#535841]/15 border-[#535841]/40 text-[#1E1B17] font-medium';
                              } else if (selected && !isCorrect) {
                                optStyle = 'bg-[#A84A28]/15 border-[#A84A28]/30 text-[#1E1B17]';
                              } else {
                                optStyle = 'bg-[#DDD7CA]/30 border-transparent text-[#7A7265] opacity-40';
                              }
                            } else if (selected) {
                              optStyle = 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17]';
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleSelectAnswer(currentQuestion.id, opt)}
                                disabled={isAnswered}
                                className={clsx(
                                  'w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all tactile-btn flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default',
                                  optStyle
                                )}
                              >
                                <div className="flex items-start gap-2.5">
                                  <span className="font-mono text-[10px] bg-black/05 border border-black/10 px-1.5 py-0.5 rounded font-semibold text-[#7A7265] shrink-0">
                                    {['A', 'B', 'C', 'D'][oIdx]}
                                  </span>
                                  <span className="leading-snug">{opt}</span>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                                  {!isAnswered && (
                                    <kbd className="font-mono text-[9px] text-[#7A7265] bg-[#DDD7CA] px-1.5 py-0.5 rounded border border-[#C8C0B0]">
                                      {oIdx + 1}
                                    </kbd>
                                  )}
                                  {isAnswered && isCorrect && (
                                    <Check className="w-4 h-4 text-[#535841] shrink-0" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        {quizAnswers[currentQuestion.id] && (
                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1.5 animate-in fade-in duration-200 mt-4">
                            <span className="font-mono text-[10px] uppercase font-semibold text-[#A84A28] block">
                              Pembahasan & Kaidah:
                            </span>
                            <p className="text-[#38332A] leading-relaxed">
                              {currentQuestion.explanation}
                            </p>
                            {currentQuestion.ruleReference && (
                              <p className="text-[11px] text-[#535841] font-mono pt-1 border-t border-[#C8C0B0]/60">
                                Rujukan: {currentQuestion.ruleReference}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-2">
                        <button
                          onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                          disabled={activeQuestionIndex === 0}
                          className="px-3 sm:px-4 py-2 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono text-[#7A7265] hover:text-[#1E1B17] disabled:opacity-30 flex items-center gap-1 tactile-btn min-h-[40px]"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                          <span>Sebelumnya</span>
                        </button>

                        <button
                          onClick={() => handleToggleTopicComplete(currentTopic.id)}
                          className={clsx(
                            'px-3 sm:px-5 py-2 rounded-2xl font-mono text-xs font-medium transition-all tactile-btn flex items-center gap-1.5 min-h-[40px]',
                            completedTopicIds.includes(currentTopic.id)
                              ? 'bg-[#535841] text-[#EFE9DF]'
                              : 'bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF]'
                          )}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>
                            {completedTopicIds.includes(currentTopic.id)
                              ? 'Dikuasai'
                              : 'Tandai Selesai'}
                          </span>
                        </button>

                        <button
                          onClick={() =>
                            setActiveQuestionIndex((prev) =>
                              Math.min(questions.length - 1, prev + 1)
                            )
                          }
                          disabled={activeQuestionIndex === questions.length - 1}
                          className="px-3 sm:px-4 py-2 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono text-[#1E1B17] hover:text-[#A84A28] disabled:opacity-30 flex items-center gap-1 tactile-btn min-h-[40px]"
                        >
                          <span>Selanjutnya</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {practiceSubMode === 'sentence-doctor' && (
                    <div className="space-y-6">
                      {currentDoctorTask ? (
                        <div className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4 sm:space-y-5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">
                              Tantangan Koreksi Sintaksis:
                            </span>
                            <span className="font-mono text-xs text-[#7A7265]">
                              Tugas {activeDoctorIndex + 1} dari {doctorTasks.length}
                            </span>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/30 space-y-1.5">
                            <span className="font-mono text-[10px] uppercase text-[#A84A28] block font-semibold">
                              Kalimat Cacat / Mengandung Kesalahan:
                            </span>
                            <p className="font-serif text-base text-[#1E1B17] italic">
                              "{currentDoctorTask.flawedSentence}"
                            </p>
                          </div>

                          <form onSubmit={handleCheckDoctorSentence} className="space-y-3">
                            <label className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] font-semibold block mb-1.5">
                              Ketik Kalimat Versi yang Sudah Dikoreksi:
                            </label>
                            <textarea
                              value={doctorUserInput}
                              onChange={(e) => {
                                setDoctorUserInput(e.target.value);
                                setDoctorFeedback(null);
                              }}
                              rows={3}
                              placeholder="Ketik kalimat yang benar secara gramatikal..."
                              className="w-full p-3.5 text-base sm:text-sm bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                            />
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all shadow-xs tactile-btn min-h-[44px]"
                              >
                                Verifikasi Perbaikan
                              </button>
                            </div>
                          </form>

                          {doctorFeedback && (
                            <div className={clsx(
                              'p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200',
                              doctorFeedback.isCorrect
                                ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]'
                                : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                            )}>
                              <div className="flex items-center gap-2 font-semibold">
                                {doctorFeedback.isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                                    <span>Koreksi Sempurna! Struktur kalimat sudah baku.</span>
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                                    <span>Koreksi belum tepat. Tinjau kunci perbaikan di bawah:</span>
                                  </>
                                )}
                              </div>

                              <div className="space-y-1 pt-1 border-t border-[#C8C0B0]/60">
                                <p><strong>Kalimat Baku:</strong> "{currentDoctorTask.correctedSentence}"</p>
                                <p className="text-[#524C42] leading-relaxed">
                                  <strong>Penjelasan Nalar:</strong> {currentDoctorTask.linguisticExplanation}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-8 text-center bg-[#E6E0D4] rounded-3xl border border-[#C8C0B0] text-xs text-[#7A7265]">
                          Modul ini difokuskan pada penguasaan konsep di tab Pilihan Ganda.
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </section>
            </div>
          )}

          {/* ───────────── WORKSPACE 3: ACL & DIKSI ALAMI ───────────── */}
          {activeHub === 'collocations' && (
            <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 pb-28 md:pb-12">
              {/* Header Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#C8C0B0] shrink-0">
                <div>
                  <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">
                    Academic Collocations List (ACL) & Natural Lexicon Studio
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1E1B17]">Studio Kolokasi Baku & Diksi On-Point</h2>
                </div>

                <div className="flex items-center gap-1 bg-[#DDD7CA] p-1.5 rounded-2xl border border-[#C8C0B0] overflow-x-auto no-scrollbar w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setCollocationSubTab('acl')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      collocationSubTab === 'acl' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    ACL Collocations
                  </button>
                  <button
                    onClick={() => setCollocationSubTab('on-point')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      collocationSubTab === 'on-point' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    On-Point Verbs
                  </button>
                  <button
                    onClick={() => setCollocationSubTab('prep')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      collocationSubTab === 'prep' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Prepositions
                  </button>
                  <button
                    onClick={() => setCollocationSubTab('confusables')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      collocationSubTab === 'confusables' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Confusables
                  </button>
                  <button
                    onClick={() => setCollocationSubTab('traps')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      collocationSubTab === 'traps' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Anti-Literal (L1 Traps)
                  </button>
                </div>
              </div>

              {/* Sub-tab 1: ACL */}
              {collocationSubTab === 'acl' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Filter & Collocation Items */}
                  <div className="col-span-1 lg:col-span-6 space-y-3">
                    <div className="relative shrink-0">
                      <Search className="w-3.5 h-3.5 text-[#7A7265] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={collocationSearch}
                        onChange={(e) => setCollocationSearch(e.target.value)}
                        placeholder="Cari kolokasi atau arti..."
                        className="w-full pl-9 pr-3 py-2.5 text-base sm:text-xs bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                      />
                    </div>

                    <div className="space-y-2.5">
                      {ACADEMIC_COLLOCATIONS_DATA
                        .filter(c => c.collocation.toLowerCase().includes(collocationSearch.toLowerCase()) || c.meaningId.toLowerCase().includes(collocationSearch.toLowerCase()))
                        .map((col, idx) => {
                          const isSelected = activeCollocationIndex === idx;

                          return (
                            <button
                              key={col.id}
                              onClick={() => {
                                setActiveCollocationIndex(idx);
                                setCollocationQuizSelected(null);
                              }}
                              className={clsx(
                                'w-full text-left p-4 sm:p-5 rounded-3xl border transition-all tactile-btn space-y-2.5',
                                isSelected ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-sm' : 'bg-[#E6E0D4] border-[#C8C0B0] text-[#38332A] hover:bg-[#DDD7CA]'
                              )}
                            >
                              <div className="flex items-center justify-between">
                                <span className={clsx(
                                  'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                                  isSelected ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#A84A28]'
                                )}>
                                  {col.type}
                                </span>
                                <Volume2
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playNativeAudio(col.collocation);
                                  }}
                                  className="w-4 h-4 cursor-pointer opacity-70 hover:opacity-100"
                                />
                              </div>

                              <h4 className="font-serif text-lg font-bold">{col.collocation}</h4>
                              <p className={clsx('text-xs line-clamp-1', isSelected ? 'text-[#EFE9DF]/80' : 'text-[#7A7265]')}>
                                {col.meaningId}
                              </p>

                              <div className={clsx(
                                'p-2.5 rounded-2xl text-[11px] font-mono leading-relaxed',
                                isSelected ? 'bg-white/10 text-[#DDD7CA]' : 'bg-[#A84A28]/10 text-[#A84A28]'
                              )}>
                                {col.literalIndonesianWarning}
                              </div>
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Right Column: Interactive Cloze Test Card (Sticky on desktop) */}
                  <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-4 bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
                    {(() => {
                      const col = ACADEMIC_COLLOCATIONS_DATA[activeCollocationIndex] || ACADEMIC_COLLOCATIONS_DATA[0];
                      const options = [col.correctTarget, ...col.distractors].sort();

                      return (
                        <div className="space-y-5">
                          <div className="pb-3 border-b border-[#C8C0B0]">
                            <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold block">
                              Uji Pasangan Kolokasi Baku (Cloze Test):
                            </span>
                            <div className="flex items-center justify-between gap-2 mt-1">
                              <h3 className="font-serif text-2xl text-[#1E1B17] font-bold">{col.collocation}</h3>
                              <button onClick={() => playNativeAudio(col.collocation)} className="text-[#7A7265] hover:text-[#1E1B17] p-1.5 rounded-full bg-[#DDD7CA]">
                                <Volume2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="p-4 sm:p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                              Lengkapi Kalimat dengan Pasangan Kolokasi yang Tepat:
                            </span>
                            <p className="font-serif text-base text-[#1E1B17] leading-relaxed">"{col.clozePrompt}"</p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {options.map((opt, oIdx) => {
                              const isSelected = collocationQuizSelected === opt;
                              const isCorrect = opt === col.correctTarget;

                              let optStyle = 'bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 border-[#C8C0B0] text-[#1E1B17]';
                              if (collocationQuizSelected) {
                                if (isCorrect) optStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                else if (isSelected && !isCorrect) optStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                else optStyle = 'opacity-40 bg-[#DDD7CA] border-transparent text-[#7A7265]';
                              }

                              return (
                                <button
                                  key={oIdx}
                                  onClick={() => {
                                    setCollocationQuizSelected(opt);
                                    if (opt !== col.correctTarget) {
                                      recordMistake({
                                        id: `acl-${col.id}`,
                                        type: 'collocation',
                                        title: `ACL: ${col.collocation}`,
                                        question: col.clozePrompt,
                                        prompt: `Pilihan Anda: "${opt}" (Kurang tepat)`,
                                        correctAnswer: col.correctTarget,
                                        explanation: col.literalIndonesianWarning,
                                        timestamp: Date.now()
                                      });
                                    }
                                  }}
                                  disabled={collocationQuizSelected !== null}
                                  className={clsx(
                                    'p-3.5 rounded-2xl border text-xs font-mono transition-all tactile-btn text-center min-h-[44px]',
                                    optStyle
                                  )}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {collocationQuizSelected && (
                            <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-2.5 animate-in fade-in duration-200">
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase text-[#7A7265] font-semibold">Contoh Kalimat Akademik Baku:</span>
                                <button onClick={() => playNativeAudio(col.exampleSentence)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="font-serif text-sm text-[#1E1B17] italic">"{col.exampleSentence}"</p>
                              <p className="text-[#524C42] leading-relaxed pt-2 border-t border-[#C8C0B0]/60">
                                <strong>Kaidah Leksikal:</strong> {col.literalIndonesianWarning}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* Sub-tab 2: On-Point Verbs */}
              {collocationSubTab === 'on-point' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ON_POINT_VERBS_DATA.map(opv => (
                      <div key={opv.id} className="p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] bg-[#A84A28]/10 text-[#A84A28] px-2.5 py-0.5 rounded-full font-semibold">
                            {opv.partOfSpeech}
                          </span>
                          <button onClick={() => playNativeAudio(opv.onPointVerb)} className="text-[#7A7265] hover:text-[#1E1B17] tactile-btn">
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div>
                          <h4 className="font-serif text-2xl font-bold text-[#1E1B17]">{opv.onPointVerb}</h4>
                          <span className="font-mono text-xs text-[#7A7265] block">{opv.ipa}</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-xs space-y-0.5">
                          <span className="font-mono text-[10px] text-[#A84A28] uppercase block font-semibold">Gantikan Frasa Panjang/Kaku:</span>
                          <p className="text-[#1E1B17] font-medium">❌ "{opv.indonesianClunkyPhrase}"</p>
                          <p className="text-[11px] text-[#7A7265] italic">({opv.clunkyEnglishWordy})</p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1">
                          <span className="font-mono text-[10px] text-[#535841] uppercase block font-semibold">Definisi & Contoh Baku:</span>
                          <p className="text-[11px] text-[#38332A] leading-relaxed">{opv.formalDefinition}</p>
                          <p className="font-serif text-[12px] text-[#1E1B17] italic pt-1 border-t border-[#C8C0B0]/60">
                            "{opv.exampleSentence}"
                          </p>
                        </div>

                        {opv.antonymOrPair && (
                          <div className="text-[11px] font-mono text-[#7A7265]">
                            <strong>Pasangan / Antonim:</strong> {opv.antonymOrPair}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub-tab 3: Dependent Prepositions Master Studio */}
              {collocationSubTab === 'prep' && (() => {
                const filteredPreps = DEPENDENT_PREPOSITIONS_DATA.filter(item => {
                  const matchesCat = prepCategoryFilter === 'all' || item.partOfSpeech === prepCategoryFilter;
                  const matchesSearch = !prepSearchQuery.trim() ||
                    item.word.toLowerCase().includes(prepSearchQuery.toLowerCase()) ||
                    item.meaningId.toLowerCase().includes(prepSearchQuery.toLowerCase()) ||
                    item.requiredPreposition.toLowerCase().includes(prepSearchQuery.toLowerCase());
                  return matchesCat && matchesSearch;
                });

                const activeItem = DEPENDENT_PREPOSITIONS_DATA[activePrepIndex] || DEPENDENT_PREPOSITIONS_DATA[0];
                const commonPreps = ['to', 'for', 'of', 'in', 'on', 'with', 'from', 'against', 'between', 'into', 'towards'];

                return (
                  <div className="space-y-6 w-full">
                    {/* Header Controls: Filters & Search */}
                    <div className="p-4 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Category Chips */}
                      <div className="flex flex-wrap gap-2">
                        {(['all', 'Adjective', 'Verb', 'Noun'] as const).map(cat => {
                          const count = cat === 'all'
                            ? DEPENDENT_PREPOSITIONS_DATA.length
                            : DEPENDENT_PREPOSITIONS_DATA.filter(p => p.partOfSpeech === cat).length;
                          const isSel = prepCategoryFilter === cat;

                          return (
                            <button
                              key={cat}
                              onClick={() => setPrepCategoryFilter(cat)}
                              className={clsx(
                                'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn flex items-center gap-1.5 min-h-[38px]',
                                isSel
                                  ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs'
                                  : 'bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17]'
                              )}
                            >
                              <span>{cat === 'all' ? 'Semua Kategori' : cat}</span>
                              <span className={clsx(
                                'px-1.5 py-0.2 text-[10px] rounded-md font-mono',
                                isSel ? 'bg-[#EFE9DF]/20 text-[#EFE9DF]' : 'bg-[#C8C0B0]/40 text-[#7A7265]'
                              )}>
                                {count}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Search Bar */}
                      <div className="relative w-full md:w-72">
                        <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A7265]" />
                        <input
                          type="text"
                          value={prepSearchQuery}
                          onChange={(e) => setPrepSearchQuery(e.target.value)}
                          placeholder="Cari kata atau arti..."
                          className="w-full pl-9 pr-4 py-2 bg-[#DDD7CA] border border-[#C8C0B0] rounded-xl text-xs text-[#1E1B17] placeholder:text-[#7A7265] outline-hidden focus:border-[#A84A28] min-h-[38px]"
                        />
                      </div>
                    </div>

                    {/* 2-Column Main Studio */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Left Column: Interactive Directory List */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center justify-between px-1">
                          <span className="font-mono text-[11px] text-[#7A7265] uppercase font-semibold">
                            Direktori Kata ({filteredPreps.length} item)
                          </span>
                          <span className="text-[11px] font-mono text-[#535841]">
                            Pilih kata untuk latihan
                          </span>
                        </div>

                        <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                          {filteredPreps.length === 0 ? (
                            <div className="p-8 text-center bg-[#E6E0D4] border border-[#C8C0B0] rounded-2xl text-xs text-[#7A7265]">
                              Tidak ada dependent preposition yang cocok dengan pencarian "{prepSearchQuery}".
                            </div>
                          ) : (
                            filteredPreps.map((item) => {
                              const isSelected = DEPENDENT_PREPOSITIONS_DATA.findIndex(p => p.id === item.id) === activePrepIndex;
                              const realIndex = DEPENDENT_PREPOSITIONS_DATA.findIndex(p => p.id === item.id);

                              return (
                                <div
                                  key={item.id}
                                  onClick={() => {
                                    setActivePrepIndex(realIndex);
                                    setPrepUserInput('');
                                    setPrepFeedback(null);
                                  }}
                                  className={clsx(
                                    'p-3.5 rounded-2xl border transition-all cursor-pointer tactile-btn text-left flex items-center justify-between gap-3',
                                    isSelected
                                      ? 'bg-[#E6E0D4] border-[#A84A28] shadow-sm ring-1 ring-[#A84A28]/30'
                                      : 'bg-[#E6E0D4]/70 hover:bg-[#E6E0D4] border-[#C8C0B0]'
                                  )}
                                >
                                  <div className="space-y-1 flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="font-serif font-bold text-sm text-[#1E1B17]">
                                        {item.word}
                                      </span>
                                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-[#DDD7CA] text-[#7A7265]">
                                        {item.partOfSpeech}
                                      </span>
                                    </div>
                                    <p className="text-xs text-[#7A7265] truncate font-sans">
                                      {item.meaningId}
                                    </p>
                                  </div>

                                  <div className="flex items-center gap-2 shrink-0">
                                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#535841]/15 text-[#535841]">
                                      + {item.requiredPreposition}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        playNativeAudio(`${item.word} ${item.requiredPreposition}`);
                                      }}
                                      title="Dengarkan pengucapan"
                                      className="p-1.5 rounded-lg hover:bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17] transition-colors"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })
                          )}
                        </div>
                      </div>

                      {/* Right Column: Sticky Interactive Cloze Studio Card */}
                      <div className="lg:col-span-7 lg:sticky lg:top-24 space-y-4">
                        <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-5">
                          {/* Card Top Info */}
                          <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                            <div className="flex items-center gap-2">
                              <span className="font-serif text-lg font-bold text-[#1E1B17]">
                                {activeItem.word}
                              </span>
                              <span className="font-mono text-xs bg-[#535841]/10 text-[#535841] px-2.5 py-0.5 rounded-md uppercase font-semibold">
                                {activeItem.partOfSpeech}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-[#7A7265]">
                              Item {activePrepIndex + 1} dari {DEPENDENT_PREPOSITIONS_DATA.length}
                            </span>
                          </div>

                          {/* Indonesian Meaning Context */}
                          <div className="px-3.5 py-2 rounded-xl bg-[#DDD7CA]/60 border border-[#C8C0B0]/60 text-xs text-[#1E1B17]">
                            <span className="font-mono font-semibold text-[#7A7265] text-[10px] uppercase block">Makna Kontekstual:</span>
                            {activeItem.meaningId}
                          </div>

                          {/* Cloze Prompt */}
                          <div className="p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold">
                                Lengkapi Preposisi Terikat yang Tepat:
                              </span>
                              <button
                                onClick={() => playNativeAudio(activeItem.clozeSentence.replace('_____', activeItem.requiredPreposition))}
                                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#535841] hover:text-[#1E1B17] transition-colors"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                                <span>Dengar Kalimat</span>
                              </button>
                            </div>
                            <p className="font-serif text-lg text-[#1E1B17] leading-relaxed">
                              "{activeItem.clozeSentence}"
                            </p>
                          </div>

                          {/* Rapid Preposition Selector Chips */}
                          <div className="space-y-1.5">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                              Pilih Cepat Preposisi:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {commonPreps.map(p => (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => {
                                    setPrepUserInput(p);
                                    setPrepFeedback(null);
                                  }}
                                  className={clsx(
                                    'px-2.5 py-1 rounded-lg text-xs font-mono transition-all tactile-btn',
                                    prepUserInput.trim().toLowerCase() === p
                                      ? 'bg-[#A84A28] text-[#EFE9DF] font-bold shadow-xs'
                                      : 'bg-[#DDD7CA] text-[#1E1B17] hover:bg-[#C8C0B0]'
                                  )}
                                >
                                  {p}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Submission Form */}
                          <form onSubmit={handleCheckPrep} className="space-y-3">
                            <div className="flex gap-2">
                              <input
                                type="text"
                                value={prepUserInput}
                                onChange={(e) => {
                                  setPrepUserInput(e.target.value);
                                  setPrepFeedback(null);
                                }}
                                placeholder="Ketik atau pilih preposisi di atas..."
                                className="flex-1 px-4 py-2.5 text-base sm:text-sm bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17] font-mono"
                              />
                              <button
                                type="submit"
                                className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn shrink-0 min-h-[44px]"
                              >
                                Periksa Preposisi
                              </button>
                            </div>
                          </form>

                          {/* Instant Feedback Panel */}
                          {prepFeedback && (
                            <div className={clsx(
                              'p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200',
                              prepFeedback.isCorrect ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                            )}>
                              <div className="flex items-center gap-2 font-semibold">
                                {prepFeedback.isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                                    <span>Preposisi Tepat! <strong>"{activeItem.word} {activeItem.requiredPreposition}"</strong></span>
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                                    <span>Preposisi kurang tepat. Preposisi baku adalah: <strong>"{activeItem.requiredPreposition}"</strong></span>
                                  </>
                                )}
                              </div>

                              <p className="font-serif text-[#1E1B17] italic pt-1 border-t border-[#C8C0B0]/60">
                                "{activeItem.exampleSentence}"
                              </p>
                            </div>
                          )}

                          {/* Navigation Buttons */}
                          <div className="flex justify-between gap-3 pt-2 border-t border-[#C8C0B0]">
                            <button
                              onClick={() => {
                                setActivePrepIndex(prev => Math.max(0, prev - 1));
                                setPrepUserInput('');
                                setPrepFeedback(null);
                              }}
                              disabled={activePrepIndex === 0}
                              className="px-4 py-2.5 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] text-xs font-mono disabled:opacity-30 tactile-btn min-h-[40px]"
                            >
                              ← Sebelumnya
                            </button>

                            <button
                              onClick={() => {
                                const rand = Math.floor(Math.random() * DEPENDENT_PREPOSITIONS_DATA.length);
                                setActivePrepIndex(rand);
                                setPrepUserInput('');
                                setPrepFeedback(null);
                              }}
                              className="px-3.5 py-2.5 rounded-2xl bg-[#DDD7CA] hover:bg-[#C8C0B0] text-xs font-mono text-[#7A7265] tactile-btn min-h-[40px]"
                            >
                              Acak Kata
                            </button>

                            <button
                              onClick={() => {
                                setActivePrepIndex(prev => Math.min(DEPENDENT_PREPOSITIONS_DATA.length - 1, prev + 1));
                                setPrepUserInput('');
                                setPrepFeedback(null);
                              }}
                              disabled={activePrepIndex === DEPENDENT_PREPOSITIONS_DATA.length - 1}
                              className="px-4 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono disabled:opacity-30 tactile-btn min-h-[40px]"
                            >
                              Selanjutnya →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Sub-tab 4: Confusable Words */}
              {collocationSubTab === 'confusables' && (
                <div className="max-w-2xl mx-auto w-full space-y-6">
                  {(() => {
                    const cw = CONFUSABLE_WORDS_DATA[activeConfusableIndex] || CONFUSABLE_WORDS_DATA[0];

                    return (
                      <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-5">
                        <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                          <h3 className="font-serif text-2xl font-bold text-[#1E1B17]">
                            {cw.wordA} vs {cw.wordB}
                          </h3>
                          <span className="font-mono text-xs text-[#7A7265]">
                            Pasangan {activeConfusableIndex + 1} dari {CONFUSABLE_WORDS_DATA.length}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                            <span className="font-mono text-xs font-bold text-[#A84A28] block">{cw.wordA} ({cw.posA})</span>
                            <p className="text-[#38332A]">{cw.definitionA}</p>
                            <p className="font-serif text-[12px] text-[#1E1B17] italic pt-1 border-t border-[#C8C0B0]/60">
                              "{cw.exampleA}"
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                            <span className="font-mono text-xs font-bold text-[#535841] block">{cw.wordB} ({cw.posB})</span>
                            <p className="text-[#38332A]">{cw.definitionB}</p>
                            <p className="font-serif text-[12px] text-[#1E1B17] italic pt-1 border-t border-[#C8C0B0]/60">
                              "{cw.exampleB}"
                            </p>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#535841]/10 border border-[#535841]/30 text-xs font-mono text-[#535841]">
                          <strong>Trik Memori Diagnostik:</strong> {cw.diagnosticTrick}
                        </div>

                        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                          <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                            Uji Ketepatan Penggunaan dalam Kalimat:
                          </span>
                          <p className="font-serif text-sm text-[#1E1B17]">"{cw.quizQuestion}"</p>

                          <div className="grid grid-cols-2 gap-2">
                            {cw.quizOptions.map(opt => {
                              const isSelected = confusableSelected === opt;
                              const isCorrect = opt === cw.correctWord;

                              let btnStyle = 'bg-[#E6E0D4] hover:bg-[#E6E0D4]/80 border-[#C8C0B0] text-[#1E1B17]';
                              if (confusableSelected) {
                                if (isCorrect) btnStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                else if (isSelected && !isCorrect) btnStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                else btnStyle = 'opacity-40 bg-[#E6E0D4] border-transparent text-[#7A7265]';
                              }

                              return (
                                <button
                                  key={opt}
                                  onClick={() => {
                                    setConfusableSelected(opt);
                                    if (opt !== cw.correctWord) {
                                      recordMistake({
                                        id: `confusable-${cw.id}`,
                                        type: 'collocation',
                                        title: `Confusables: ${cw.wordA} vs ${cw.wordB}`,
                                        question: cw.quizQuestion,
                                        prompt: `Pilihan Anda: "${opt}" (Kurang tepat)`,
                                        correctAnswer: cw.correctWord,
                                        explanation: `Kata yang tepat adalah "${cw.correctWord}". Perbedaan: ${cw.diagnosticTrick}`,
                                        timestamp: Date.now()
                                      });
                                    }
                                  }}
                                  disabled={confusableSelected !== null}
                                  className={clsx(
                                    'p-3 rounded-2xl border text-xs font-mono transition-all tactile-btn text-center min-h-[44px]',
                                    btnStyle
                                  )}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="flex justify-between gap-3">
                    <button
                      onClick={() => {
                        setActiveConfusableIndex(prev => Math.max(0, prev - 1));
                        setConfusableSelected(null);
                      }}
                      disabled={activeConfusableIndex === 0}
                      className="px-5 py-2.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono disabled:opacity-30 tactile-btn min-h-[44px]"
                    >
                      Pasangan Sebelumnya
                    </button>

                    <button
                      onClick={() => {
                        setActiveConfusableIndex(prev => Math.min(CONFUSABLE_WORDS_DATA.length - 1, prev + 1));
                        setConfusableSelected(null);
                      }}
                      disabled={activeConfusableIndex === CONFUSABLE_WORDS_DATA.length - 1}
                      className="px-5 py-2.5 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono disabled:opacity-30 tactile-btn min-h-[44px]"
                    >
                      Pasangan Selanjutnya
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-tab 5: Anti-Literal / L1 Direct Translation Traps */}
              {collocationSubTab === 'traps' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: List of L1 Traps */}
                  <div className="col-span-1 lg:col-span-6 space-y-3">
                    <div className="p-4 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/30 text-xs space-y-1">
                      <strong className="text-[#A84A28] font-mono text-[11px] uppercase block">
                        Bahaya L1 Interference (Terjemahan Kata-per-Kata):
                      </strong>
                      <p className="text-[#38332A] leading-relaxed">
                        Pola berpikir bahasa Indonesia seringkali meminjam metafora fisik ("cuci mata", "tidak enak hati", "makan korban") yang jika diterjemahkan mentah-mentah ke bahasa Inggris akan terdengar sangat aneh bagi penutur asli.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      {DIRECT_TRANSLATION_TRAPS_DATA.map((trap, idx) => (
                        <button
                          key={trap.id}
                          onClick={() => {
                            setActiveTrapIndex(idx);
                            setTrapSelected(null);
                          }}
                          className={clsx(
                            'w-full text-left p-4 sm:p-5 rounded-3xl border transition-all tactile-btn space-y-2.5',
                            activeTrapIndex === idx
                              ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-sm'
                              : 'bg-[#E6E0D4] border-[#C8C0B0] text-[#38332A] hover:bg-[#DDD7CA]'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={clsx(
                              'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                              activeTrapIndex === idx ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#A84A28]'
                            )}>
                              {trap.registerCategory}
                            </span>
                          </div>

                          <h4 className="font-serif text-base font-bold">{trap.indonesianPhrase}</h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <div className={clsx(
                              'p-2.5 rounded-xl border',
                              activeTrapIndex === idx ? 'bg-white/10 border-white/20 text-[#EFE9DF]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                            )}>
                              <span className="font-mono text-[9px] uppercase block font-semibold opacity-75">Kaku / Cacat:</span>
                              <span className="line-through">{trap.literalClunkyEnglish}</span>
                            </div>

                            <div className={clsx(
                              'p-2.5 rounded-xl border',
                              activeTrapIndex === idx ? 'bg-white/20 border-white/30 text-[#EFE9DF]' : 'bg-[#535841]/15 border-[#535841]/30 text-[#1E1B17]'
                            )}>
                              <span className="font-mono text-[9px] uppercase block font-semibold opacity-75">Native On-Point:</span>
                              <span className="font-semibold">{trap.onPointNativeEnglish}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Deep Dive & Live Diagnostic Drill */}
                  <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-4 bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
                    {(() => {
                      const trap = DIRECT_TRANSLATION_TRAPS_DATA[activeTrapIndex] || DIRECT_TRANSLATION_TRAPS_DATA[0];

                      return (
                        <div className="space-y-5">
                          <div className="pb-3 border-b border-[#C8C0B0]">
                            <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold block">
                              Pembedahan L1: {trap.registerCategory}
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-[#1E1B17] mt-1">{trap.indonesianPhrase}</h3>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-4 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/30 space-y-1">
                              <span className="font-mono text-[10px] text-[#A84A28] uppercase block font-semibold">
                                Terjemahan Kaku (SALAH):
                              </span>
                              <p className="font-serif text-sm font-semibold text-[#1E1B17] line-through">
                                "{trap.literalClunkyEnglish}"
                              </p>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#535841]/15 border border-[#535841]/30 space-y-1">
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] text-[#535841] uppercase font-semibold">
                                  Diksi Native On-Point (BENAR):
                                </span>
                                <button onClick={() => playNativeAudio(trap.onPointNativeEnglish)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                              <p className="font-serif text-sm font-bold text-[#1E1B17]">
                                "{trap.onPointNativeEnglish}"
                              </p>
                            </div>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1.5">
                            <strong className="text-[#535841] font-mono text-[10px] uppercase block">
                              Mengapa Terdengar Aneh Bagi Native Speaker?
                            </strong>
                            <p className="text-[#38332A] leading-relaxed">{trap.linguisticExplanation}</p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold">Contoh Kalimat Baku:</span>
                              <button onClick={() => playNativeAudio(trap.exampleSentence)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                <Volume2 className="w-3 h-3" />
                              </button>
                            </div>
                            <p className="font-serif text-[#1E1B17] italic">"{trap.exampleSentence}"</p>
                          </div>

                          {/* Live Drill */}
                          <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                              Uji Pilihan Diksi Baku (Anti-Literal):
                            </span>
                            <p className="font-serif text-sm text-[#1E1B17]">"{trap.drillQuestion}"</p>

                            <div className="grid grid-cols-2 gap-2">
                              {trap.drillOptions.map(opt => {
                                const isSelected = trapSelected === opt;
                                const isCorrect = opt === trap.correctAnswer;

                                let btnStyle = 'bg-[#E6E0D4] hover:bg-[#E6E0D4]/80 border-[#C8C0B0] text-[#1E1B17]';
                                if (trapSelected) {
                                  if (isCorrect) btnStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                  else if (isSelected && !isCorrect) btnStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                  else btnStyle = 'opacity-40 bg-[#E6E0D4] border-transparent text-[#7A7265]';
                                }

                                return (
                                  <button
                                    key={opt}
                                    onClick={() => {
                                      setTrapSelected(opt);
                                      if (opt !== trap.correctAnswer) {
                                        recordMistake({
                                          id: `trap-${trap.id}`,
                                          type: 'collocation',
                                          title: `L1 Trap: ${trap.indonesianPhrase}`,
                                          question: `Konsep: "${trap.indonesianPhrase}" (Bukan harfiah: "${trap.literalClunkyEnglish}")`,
                                          prompt: `Pilihan Anda: "${opt}" (Salah/Harfiah)`,
                                          correctAnswer: trap.correctAnswer,
                                          explanation: trap.drillExplanation,
                                          timestamp: Date.now()
                                        });
                                      }
                                    }}
                                    disabled={trapSelected !== null}
                                    className={clsx(
                                      'p-3 rounded-2xl border text-xs font-mono transition-all tactile-btn text-center min-h-[44px]',
                                      btnStyle
                                    )}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {trapSelected && (
                            <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1 animate-in fade-in duration-200">
                              <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                                Penjelasan Nalar Diksi:
                              </span>
                              <p className="text-[#38332A] leading-relaxed">{trap.drillExplanation}</p>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────── WORKSPACE 4: MATRIKS FONDASI ───────────── */}
          {activeHub === 'matrices' && (
            <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 pb-28 md:pb-12">
              {/* Header Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#C8C0B0] shrink-0">
                <div>
                  <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">
                    Laboratorium Matriks Referensi Interaktif
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1E1B17]">Master Reference & Drill Matrices</h2>
                </div>

                <div className="flex items-center gap-1.5 bg-[#DDD7CA] p-1.5 rounded-2xl border border-[#C8C0B0] overflow-x-auto no-scrollbar w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setMatrixSubTab('have-has-had')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'have-has-had' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Have / Has / Had
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('in-on-at')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'in-on-at' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    In / On / At (Piramida)
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('pronouns')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'pronouns' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Pronouns (Kasus)
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('do-does-did')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'do-does-did' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Do / Does / Did
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('to-be')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'to-be' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    To Be (Verbal vs Nominal)
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('past-modals')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'past-modals' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Past Modals
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('subjunctive')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'subjunctive' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Subjunctive
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('reported-speech')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'reported-speech' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Reported Speech
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('embedded-questions')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'embedded-questions' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Embedded Questions
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('cleft-sentences')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'cleft-sentences' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Cleft Sentences
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('geographical-articles')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'geographical-articles' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Geographical Articles
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('irregular')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'irregular' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Irregular Verbs ({IRREGULAR_VERBS_DATA.length})
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('nouns')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'nouns' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Noun Taxonomy
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('tenses')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'tenses' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    12 Tenses Master
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('phrasal')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'phrasal' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Phrasal Verbs
                  </button>
                  <button
                    onClick={() => setMatrixSubTab('punctuation')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      matrixSubTab === 'punctuation' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Tanda Baca
                  </button>
                </div>
              </div>

              {/* ───────────── SUB-TAB 1: HAVE / HAS / HAD MASTER DISSECTOR ───────────── */}
              {matrixSubTab === 'have-has-had' && (
                <div className="space-y-6">
                  {/* Subject Agreement Quick Summary Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 sm:p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-xl text-[#1E1B17]">HAVE</span>
                        <span className="font-mono text-[10px] bg-[#535841]/20 text-[#535841] px-2.5 py-0.5 rounded-full font-semibold">Present</span>
                      </div>
                      <p className="text-xs font-semibold text-[#A84A28]">I, You, They, We, & Plural Nouns</p>
                      <p className="text-[11px] text-[#7A7265] italic">contoh: "The students HAVE completed their research."</p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-xl text-[#1E1B17]">HAS</span>
                        <span className="font-mono text-[10px] bg-[#A84A28]/20 text-[#A84A28] px-2.5 py-0.5 rounded-full font-semibold">Present (3rd Singular)</span>
                      </div>
                      <p className="text-xs font-semibold text-[#A84A28]">He, She, It, & Singular/Uncountable Nouns</p>
                      <p className="text-[11px] text-[#7A7265] italic">contoh: "The committee HAS published its findings."</p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-1.5 shadow-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-xl text-[#1E1B17]">HAD</span>
                        <span className="font-mono text-[10px] bg-[#1E1B17] text-[#EFE9DF] px-2.5 py-0.5 rounded-full font-semibold">Past (Semua Subjek)</span>
                      </div>
                      <p className="text-xs font-semibold text-[#535841]">Semua Subjek Tanpa Terkecuali</p>
                      <p className="text-[11px] text-[#7A7265] italic">contoh: "They HAD arrived before the storm began."</p>
                    </div>
                  </div>

                  {/* 5 Core Functions Grid with Interactive Drill */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: 5 Roles List */}
                    <div className="col-span-1 lg:col-span-6 space-y-3">
                      {HAVE_HAS_HAD_MASTER_DATA.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveHhhIndex(idx);
                            setHhhSelected(null);
                          }}
                          className={clsx(
                            'w-full text-left p-4 sm:p-5 rounded-3xl border transition-all tactile-btn space-y-2.5',
                            activeHhhIndex === idx
                              ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-sm'
                              : 'bg-[#E6E0D4] border-[#C8C0B0] text-[#38332A] hover:bg-[#DDD7CA]'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={clsx(
                              'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                              activeHhhIndex === idx ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#A84A28]'
                            )}>
                              {item.role}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                          <p className={clsx('text-xs font-mono', activeHhhIndex === idx ? 'text-[#EFE9DF]/80' : 'text-[#535841]')}>
                            Rumus: {item.formula}
                          </p>

                          <div className={clsx(
                            'p-2.5 rounded-2xl text-[11px] space-y-1',
                            activeHhhIndex === idx ? 'bg-white/10 text-[#DDD7CA]' : 'bg-[#DDD7CA] text-[#524C42]'
                          )}>
                            <p><strong>Contoh Baku:</strong> {item.correctExample}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Right: Active Deep-Dive & Diagnostic Drill (Sticky on desktop) */}
                    <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-4 bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
                      {(() => {
                        const hhh = HAVE_HAS_HAD_MASTER_DATA[activeHhhIndex] || HAVE_HAS_HAD_MASTER_DATA[0];

                        return (
                          <div className="space-y-5">
                            <div className="pb-3 border-b border-[#C8C0B0]">
                              <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold block">
                                Uji Pemahaman: {hhh.role}
                              </span>
                              <h3 className="font-serif text-2xl font-bold text-[#1E1B17] mt-1">{hhh.title}</h3>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-2">
                              <p className="leading-relaxed text-[#38332A]">{hhh.explanation}</p>
                              <div className="p-2.5 rounded-xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[#1E1B17]">
                                <strong>Peringatan Kesalahan:</strong> {hhh.incorrectExample}
                              </div>
                            </div>

                            {/* Cloze Drill */}
                            <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                              <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                                Lengkapi Kalimat dengan Bentuk yang Benar:
                              </span>
                              <p className="font-serif text-sm font-medium text-[#1E1B17]">"{hhh.drillQuestion}"</p>

                              <div className="grid grid-cols-2 gap-2">
                                {hhh.drillOptions.map(opt => {
                                  const isSelected = hhhSelected === opt;
                                  const isCorrect = opt === hhh.correctDrillAnswer;

                                  let optStyle = 'bg-[#E6E0D4] hover:bg-[#E6E0D4]/80 border-[#C8C0B0] text-[#1E1B17]';
                                  if (hhhSelected) {
                                    if (isCorrect) optStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                    else if (isSelected && !isCorrect) optStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                    else optStyle = 'opacity-40 bg-[#E6E0D4] border-transparent text-[#7A7265]';
                                  }

                                  return (
                                    <button
                                      key={opt}
                                      onClick={() => setHhhSelected(opt)}
                                      disabled={hhhSelected !== null}
                                      className={clsx(
                                        'p-3 rounded-2xl border text-xs font-mono transition-all tactile-btn text-center min-h-[44px]',
                                        optStyle
                                      )}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {hhhSelected && (
                              <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1 animate-in fade-in duration-200">
                                <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                                  Nalar Kaidah Baku:
                                </span>
                                <p className="text-[#38332A] leading-relaxed">{hhh.drillExplanation}</p>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 2: IN / ON / AT MASTER PYRAMID ───────────── */}
              {matrixSubTab === 'in-on-at' && (
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div className="flex flex-wrap items-center gap-2 pb-1">
                    <span className="font-mono text-xs text-[#7A7265] uppercase font-semibold mr-1">Dimensi:</span>
                    <button
                      onClick={() => setIoaDimensionFilter('all')}
                      className={clsx(
                        'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn min-h-[36px]',
                        ioaDimensionFilter === 'all' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'bg-[#DDD7CA] text-[#7A7265]'
                      )}
                    >
                      Semua Dimensi
                    </button>
                    <button
                      onClick={() => setIoaDimensionFilter('time')}
                      className={clsx(
                        'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn min-h-[36px]',
                        ioaDimensionFilter === 'time' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'bg-[#DDD7CA] text-[#7A7265]'
                      )}
                    >
                      Waktu (Time)
                    </button>
                    <button
                      onClick={() => setIoaDimensionFilter('space')}
                      className={clsx(
                        'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn min-h-[36px]',
                        ioaDimensionFilter === 'space' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'bg-[#DDD7CA] text-[#7A7265]'
                      )}
                    >
                      Tempat & Ruang (Space)
                    </button>
                    <button
                      onClick={() => setIoaDimensionFilter('idiom')}
                      className={clsx(
                        'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn min-h-[36px]',
                        ioaDimensionFilter === 'idiom' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'bg-[#DDD7CA] text-[#7A7265]'
                      )}
                    >
                      Jebakan Kontras Idiomatis
                    </button>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {PREPOSITIONS_IN_ON_AT_DATA
                      .filter(ioa => {
                        if (ioaDimensionFilter === 'time') return ioa.dimension.includes('Waktu');
                        if (ioaDimensionFilter === 'space') return ioa.dimension.includes('Tempat');
                        if (ioaDimensionFilter === 'idiom') return ioa.dimension.includes('Kontras');
                        return true;
                      })
                      .map((ioa) => (
                        <div key={ioa.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4 shadow-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-3xl font-bold text-[#1E1B17]">{ioa.preposition}</span>
                            <span className="font-mono text-[10px] bg-[#A84A28]/10 text-[#A84A28] px-2.5 py-0.5 rounded-full font-semibold">
                              {ioa.dimension}
                            </span>
                          </div>

                          <div className="p-3 rounded-2xl bg-[#DDD7CA] text-[11px] font-mono text-[#535841]">
                            <strong>Cakupan Piramida:</strong> {ioa.pyramidScope}
                          </div>

                          {/* Rules */}
                          <div className="space-y-1.5 text-xs">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">Kaidah Baku:</span>
                            <ul className="space-y-1 text-[#38332A]">
                              {ioa.primaryRules.map((r, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-1.5 leading-relaxed">
                                  <span className="text-[#A84A28] font-bold">•</span>
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Examples */}
                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 space-y-2 text-xs">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">Contoh Kontekstual:</span>
                            {ioa.examples.map((ex, eIdx) => (
                              <div key={eIdx} className="space-y-0.5">
                                <div className="flex items-center justify-between">
                                  <p className="font-serif text-[#1E1B17] italic">"{ex.en}"</p>
                                  <button onClick={() => playNativeAudio(ex.en)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                    <Volume2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <p className="text-[11px] text-[#7A7265]">{ex.id}</p>
                              </div>
                            ))}
                          </div>

                          <div className="p-3 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[11px] text-[#1E1B17]">
                            <strong>Jebakan Fatal:</strong> {ioa.diagnosticPitfall}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 3: PRONOUN CASE & AGREEMENT GRID ───────────── */}
              {matrixSubTab === 'pronouns' && (
                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-3xl bg-[#535841]/10 border border-[#535841]/30 text-xs space-y-1.5 shadow-xs">
                    <strong className="text-[#535841] font-mono text-[11px] uppercase block font-bold">Aturan Emas Kasus Kata Ganti (Pronoun Case System):</strong>
                    <p className="text-[#38332A] leading-relaxed">
                      1. <strong>Subject Case</strong> (I, you, he, she, it, we, they) = Pelaku aksi kalimat.<br/>
                      2. <strong>Object Case</strong> (me, you, him, her, it, us, them) = Penerima aksi & WAJIB setelah SEMUA preposisi (*between you and ME, to US*).<br/>
                      3. <strong>Possessive Adjective</strong> (my, your, his, her, its, our, their) = Wajib nempel dengan kata benda (*its tail*).<br/>
                      4. <strong>Possessive Pronoun</strong> (mine, yours, his, hers, ours, theirs) = Berdiri sendiri tanpa kata benda.<br/>
                      5. <strong>Reflexive</strong> (myself, yourself, himself, herself, itself, ourselves, themselves) = Ketika subjek dan objek adalah orang yang sama.
                    </p>
                  </div>

                  {/* 5-Column Table */}
                  <div className="overflow-x-auto rounded-3xl border border-[#C8C0B0] bg-[#E6E0D4] smooth-scroll p-1">
                    <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                      <thead className="bg-[#DDD7CA] border-b border-[#C8C0B0] font-mono text-[11px] text-[#7A7265]">
                        <tr>
                          <th className="p-3.5">Orang / Entitas</th>
                          <th className="p-3.5">1. Subject (Pelaku)</th>
                          <th className="p-3.5">2. Object (Penerima)</th>
                          <th className="p-3.5">3. Poss. Adjective (+ Noun)</th>
                          <th className="p-3.5">4. Poss. Pronoun (Mandiri)</th>
                          <th className="p-3.5">5. Reflexive / Emphatic</th>
                          <th className="p-3.5">Jebakan Kritis</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#C8C0B0]/60">
                        {PRONOUN_CASE_MASTER_DATA.map(pro => (
                          <tr key={pro.id} className="hover:bg-[#DDD7CA]/50 transition-colors">
                            <td className="p-3.5 font-semibold text-[#1E1B17] font-mono text-[11px]">
                              {pro.personLabel}
                            </td>
                            <td className="p-3.5 font-serif font-bold text-sm text-[#A84A28]">
                              <div className="flex items-center gap-1.5">
                                <span>{pro.subjectPronoun}</span>
                                <button onClick={() => playNativeAudio(pro.subjectPronoun)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                  <Volume2 className="w-3 h-3" />
                                </button>
                              </div>
                            </td>
                            <td className="p-3.5 font-mono text-xs font-medium text-[#1E1B17]">
                              {pro.objectPronoun}
                            </td>
                            <td className="p-3.5 font-mono text-xs font-semibold text-[#535841]">
                              {pro.possessiveAdjective}
                            </td>
                            <td className="p-3.5 font-mono text-xs text-[#7A7265]">
                              {pro.possessivePronoun}
                            </td>
                            <td className="p-3.5 font-mono text-xs text-[#A84A28]">
                              {pro.reflexivePronoun}
                            </td>
                            <td className="p-3.5 text-[11px] text-[#524C42] max-w-xs">
                              {pro.criticalPitfall}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 4: DO / DOES / DID MASTER MATRIX ───────────── */}
              {matrixSubTab === 'do-does-did' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {DO_DOES_DID_MASTER_DATA.map((ddd) => (
                      <div key={ddd.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-3xl font-bold text-[#1E1B17]">{ddd.operator}</span>
                          <span className="font-mono text-[10px] bg-[#1E1B17] text-[#EFE9DF] px-2.5 py-0.5 rounded-full font-semibold">
                            {ddd.tenseAndTime}
                          </span>
                        </div>

                        <div className="text-xs space-y-1">
                          <strong className="text-[#A84A28] font-mono text-[10px] uppercase block">Subjek yang Sesuai:</strong>
                          <p className="text-[#1E1B17] font-medium">{ddd.subjectAgreement}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-[11px] space-y-1">
                          <div className="text-[#535841]">Negatif: {ddd.negativeForm}</div>
                          <div className="text-[#7A7265]">Tanya: {ddd.questionPattern}</div>
                        </div>

                        <div className="text-xs space-y-1">
                          <strong className="text-[#535841] font-mono text-[10px] uppercase block">Aturan Bare Infinitive:</strong>
                          <p className="text-[11px] text-[#38332A] leading-relaxed">{ddd.bareInfinitiveRule}</p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 text-xs space-y-1">
                          <span className="font-mono text-[10px] text-[#7A7265] uppercase block">Contoh:</span>
                          <p className="font-serif text-[12px] text-[#1E1B17] italic">"{ddd.exampleSentence}"</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[11px] text-[#1E1B17]">
                          <strong>Jebakan Fatal:</strong> {ddd.fatalPitfall}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 5: TO BE MASTER MATRIX ───────────── */}
              {matrixSubTab === 'to-be' && (
                <div className="space-y-6">
                  <div className="p-4 sm:p-5 rounded-3xl bg-[#535841]/10 border border-[#535841]/30 text-xs space-y-1.5 shadow-xs">
                    <strong className="text-[#535841] font-mono text-[11px] uppercase block font-bold">
                      Kaidah Emas To Be & Kalimat Verbal vs Nominal:
                    </strong>
                    <p className="text-[#38332A] leading-relaxed">
                      1. <strong>Kalimat Verbal</strong>: Subjek + Kata Kerja Langsung (DILARANG pakai is/am/are/was/were di depan V1, e.g. <em>I agree</em> ✔️, bukan <em>I am agree ❌</em>).<br/>
                      2. <strong>Kalimat Nominal</strong>: Subjek + To Be + Kata Sifat/Benda/Keterangan (e.g. <em>She is diligent</em>).<br/>
                      3. <strong>Been vs Being</strong>: <em>Have/has/had BEEN</em> (sudah tuntas) vs <em>Is/are/was BEING</em> (sedang diproses pasif).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="col-span-1 lg:col-span-6 space-y-3">
                      {TO_BE_MASTER_DATA.map((tbe, idx) => (
                        <button
                          key={tbe.id}
                          onClick={() => {
                            setActiveTbeIndex(idx);
                            setTbeSelected(null);
                          }}
                          className={clsx(
                            'w-full text-left p-4 sm:p-5 rounded-3xl border transition-all tactile-btn space-y-2.5',
                            activeTbeIndex === idx
                              ? 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17] shadow-sm'
                              : 'bg-[#E6E0D4] border-[#C8C0B0] text-[#38332A] hover:bg-[#DDD7CA]'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className={clsx(
                              'font-mono text-[10px] px-2.5 py-0.5 rounded-full font-semibold',
                              activeTbeIndex === idx ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#A84A28]'
                            )}>
                              {tbe.primaryRole}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg font-bold">{tbe.formName}</h4>
                          <p className={clsx('text-xs font-mono', activeTbeIndex === idx ? 'text-[#EFE9DF]/80' : 'text-[#535841]')}>
                            Rumus: {tbe.formula}
                          </p>

                          <div className={clsx(
                            'p-2.5 rounded-2xl text-[11px] space-y-1',
                            activeTbeIndex === idx ? 'bg-white/10 text-[#DDD7CA]' : 'bg-[#DDD7CA] text-[#524C42]'
                          )}>
                            <p><strong>Contoh Baku:</strong> {tbe.correctSentence}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="col-span-1 lg:col-span-6 lg:sticky lg:top-4 bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
                      {(() => {
                        const tbe = TO_BE_MASTER_DATA[activeTbeIndex] || TO_BE_MASTER_DATA[0];

                        return (
                          <div className="space-y-5">
                            <div className="pb-3 border-b border-[#C8C0B0]">
                              <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold block">
                                Uji Pemahaman: {tbe.primaryRole}
                              </span>
                              <h3 className="font-serif text-2xl font-bold text-[#1E1B17] mt-1">{tbe.formName}</h3>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-2">
                              <p className="leading-relaxed text-[#38332A]">{tbe.explanation}</p>
                              <div className="p-2.5 rounded-xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[#1E1B17]">
                                <strong>Peringatan Kesalahan Fatal:</strong> {tbe.fatalPitfall}
                              </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                              <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                                Lengkapi Kalimat dengan Kaidah To Be yang Benar:
                              </span>
                              <p className="font-serif text-sm font-medium text-[#1E1B17]">"{tbe.drillQuestion}"</p>

                              <div className="grid grid-cols-2 gap-2">
                                {tbe.drillOptions.map(opt => {
                                  const isSelected = tbeSelected === opt;
                                  const isCorrect = opt === tbe.correctAnswer;

                                  let optStyle = 'bg-[#E6E0D4] hover:bg-[#E6E0D4]/80 border-[#C8C0B0] text-[#1E1B17]';
                                  if (tbeSelected) {
                                    if (isCorrect) optStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                    else if (isSelected && !isCorrect) optStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                    else optStyle = 'opacity-40 bg-[#E6E0D4] border-transparent text-[#7A7265]';
                                  }

                                  return (
                                    <button
                                      key={opt}
                                      onClick={() => setTbeSelected(opt)}
                                      disabled={tbeSelected !== null}
                                      className={clsx(
                                        'p-3 rounded-2xl border text-xs font-mono transition-all tactile-btn text-center min-h-[44px]',
                                        optStyle
                                      )}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {tbeSelected && (
                              <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1 animate-in fade-in duration-200">
                                <span className="font-mono text-[10px] uppercase font-semibold text-[#535841] block">
                                  Nalar Kaidah Baku:
                                </span>
                                <p className="text-[#38332A] leading-relaxed">{tbe.drillExplanation}</p>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 6: PAST MODALS OF DEDUCTION ───────────── */}
              {matrixSubTab === 'past-modals' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {PAST_MODALS_DEDUCTION_DATA.map((pm) => (
                      <div key={pm.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xl font-bold text-[#1E1B17]">{pm.modalStructure}</span>
                          <span className="font-mono text-[9px] bg-[#1E1B17] text-[#EFE9DF] px-2.5 py-0.5 rounded-full font-semibold">
                            {pm.certaintyLevel}
                          </span>
                        </div>

                        <div className="text-xs space-y-1">
                          <strong className="text-[#A84A28] font-mono text-[10px] uppercase block">Makna Epistemik:</strong>
                          <p className="text-[#1E1B17] font-medium">{pm.epistemicMeaning}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-[11px] text-[#535841]">
                          Rumus: {pm.formula}
                        </div>

                        <p className="text-[11px] text-[#38332A] leading-relaxed">{pm.explanation}</p>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold">Contoh:</span>
                            <button onClick={() => playNativeAudio(pm.authenticExample)} className="text-[#7A7265] hover:text-[#1E1B17]">
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="font-serif text-[12px] text-[#1E1B17] italic">"{pm.authenticExample}"</p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[11px] text-[#1E1B17]">
                          <strong>Jebakan:</strong> {pm.fatalPitfall}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 7: SUBJUNCTIVE MOOD ───────────── */}
              {matrixSubTab === 'subjunctive' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SUBJUNCTIVE_MOOD_DATA.map((sm) => (
                      <div key={sm.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xl font-bold text-[#1E1B17]">{sm.triggerCategory}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {sm.triggerWords.map(w => (
                            <span key={w} className="font-mono text-[10px] bg-[#DDD7CA] text-[#A84A28] px-2.5 py-0.5 rounded-md font-semibold">
                              {w}
                            </span>
                          ))}
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-[11px] text-[#535841]">
                          Rumus Subjunctive: {sm.formula}
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">{sm.mandativeRule}</p>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-[#535841]/15 text-[#1E1B17] border border-[#535841]/30">
                            <strong>Baku (Subjunctive V1):</strong> "{sm.authenticExample}"
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#A84A28]/15 text-[#1E1B17] border border-[#A84A28]/30">
                            <strong>Salah:</strong> "{sm.incorrectExample}"
                          </div>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-2">
                          <span className="font-mono text-[10px] uppercase font-semibold text-[#7A7265] block">Uji Mandatif:</span>
                          <p className="font-serif text-sm">"{sm.drillQuestion}"</p>
                          <p className="font-mono text-[11px] text-[#535841]">Jawaban Baku: <strong>{sm.correctAnswer}</strong> — {sm.drillExplanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 8: REPORTED SPEECH ───────────── */}
              {matrixSubTab === 'reported-speech' && (
                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-3xl bg-[#535841]/10 border border-[#535841]/30 text-xs space-y-1.5 shadow-xs">
                    <strong className="text-[#535841] font-mono text-[11px] uppercase block font-bold">Hukum Backshift of Tenses (Pergeseran Waktu):</strong>
                    <p className="text-[#38332A] leading-relaxed">
                      Ketika mengubah kalimat langsung ke kalimat berita tidak langsung, tenses bergeser satu tingkat ke masa lalu (kecuali untuk kebenaran ilmiah universal yang tetap dalam Simple Present!).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REPORTED_SPEECH_DATA.map((rs) => (
                      <div key={rs.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-xl font-bold text-[#1E1B17]">{rs.directTense}</span>
                          <span className="font-mono text-[10px] bg-[#1E1B17] text-[#EFE9DF] px-2.5 py-0.5 rounded-full font-semibold">
                            {rs.reportedTense}
                          </span>
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">{rs.shiftRule}</p>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] text-[#7A7265]">
                            <strong>Direct:</strong> {rs.directExample}
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#535841]/15 text-[#1E1B17] border border-[#535841]/30">
                            <strong>Reported (Indirect):</strong> {rs.reportedExample}
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#DDD7CA] text-[11px] font-mono text-[#535841]">
                          <strong>Academic Reporting Verbs:</strong> {rs.academicReportingVerb}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 9: EMBEDDED QUESTIONS ───────────── */}
              {matrixSubTab === 'embedded-questions' && (
                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-3xl bg-[#A84A28]/10 border border-[#A84A28]/30 text-xs space-y-1.5 shadow-xs">
                    <strong className="text-[#A84A28] font-mono text-[11px] uppercase block font-bold">
                      Aturan Pembatalan Inversi (Embedded Question Architecture):
                    </strong>
                    <p className="text-[#38332A] leading-relaxed">
                      Ketika kalimat tanya disisipkan ke dalam kalimat lain, struktur kalimat <strong>WAJIB KEMBALI NORMAL: Question Word + SUBJECT + VERB</strong>. Dilarang menggunakan auxiliary <em>do/does/did</em> dan to be diletakkan di akhir.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EMBEDDED_QUESTIONS_DATA.map((eq) => (
                      <div key={eq.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] text-xs space-y-1">
                          <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">Pertanyaan Asli (Direct):</span>
                          <p className="font-serif text-sm font-semibold text-[#1E1B17]">"{eq.directQuestion}"</p>
                          <span className="font-mono text-[10px] text-[#A84A28] block">Disisipkan ke: "{eq.introductoryFrame}"</span>
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-[#535841]/15 text-[#1E1B17] border border-[#535841]/30">
                            <strong>Baku (Subjek + Predikat):</strong> "{eq.embeddedQuestionCorrect}"
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#A84A28]/15 text-[#1E1B17] border border-[#A84A28]/30">
                            <strong>Salah:</strong> "{eq.incorrectSentence}"
                          </div>
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">{eq.syntacticRule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 10: CLEFT SENTENCES ───────────── */}
              {matrixSubTab === 'cleft-sentences' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CLEFT_SENTENCES_DATA.map((cs) => (
                      <div key={cs.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-lg font-bold text-[#1E1B17]">{cs.cleftType}</h4>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] font-mono text-[11px] text-[#535841]">
                          Formula: {cs.formula}
                        </div>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] text-[#7A7265]">
                            <strong>Kalimat Biasa:</strong> "{cs.baseSentence}"
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#535841]/15 text-[#1E1B17] border border-[#535841]/30">
                            <strong>Versi Cleft (Sorotan Kuat):</strong> "{cs.cleftSentence}"
                          </div>
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">
                          <strong>Dampak Retorika:</strong> {cs.rhetoricalImpact}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 11: GEOGRAPHICAL ARTICLES ───────────── */}
              {matrixSubTab === 'geographical-articles' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GEOGRAPHICAL_ARTICLES_DATA.map((geo) => (
                      <div key={geo.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-lg font-bold text-[#1E1B17]">{geo.geographicalCategory}</h4>
                          <span className="font-mono text-[10px] bg-[#A84A28] text-white px-2.5 py-0.5 rounded-full font-semibold">
                            {geo.ruleCategory}
                          </span>
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">{geo.ruleDescription}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                          <div className="p-3.5 rounded-2xl bg-[#535841]/15 border border-[#535841]/30 space-y-1">
                            <span className="font-mono text-[10px] font-bold text-[#535841] block">Wajib Pakai "THE":</span>
                            <ul className="space-y-0.5 text-[11px] text-[#1E1B17]">
                              {geo.examplesWithArticle.map(ex => (
                                <li key={ex}>• {ex}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1">
                            <span className="font-mono text-[10px] font-bold text-[#7A7265] block">Dilarang "THE" (Ø):</span>
                            <ul className="space-y-0.5 text-[11px] text-[#1E1B17]">
                              {geo.examplesWithoutArticle.map(ex => (
                                <li key={ex}>• {ex}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-[11px] text-[#1E1B17]">
                          <strong>Peringatan Diagnostik:</strong> {geo.diagnosticPitfall}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 12: IRREGULAR VERBS ───────────── */}
              {matrixSubTab === 'irregular' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="relative w-64">
                        <Search className="w-3.5 h-3.5 text-[#7A7265] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={matrixSearch}
                          onChange={(e) => setMatrixSearch(e.target.value)}
                          placeholder="Cari V1, V2, V3, atau arti..."
                          className="w-full pl-9 pr-3 py-2 text-base sm:text-xs bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                        />
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {['all', 'A-B-C', 'A-B-B', 'A-B-A', 'A-A-A'].map(pat => (
                          <button
                            key={pat}
                            onClick={() => setIrregularPatternFilter(pat)}
                            className={clsx(
                              'px-3 py-1.5 rounded-xl text-[10px] font-mono transition-all tactile-btn min-h-[36px]',
                              irregularPatternFilter === pat ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'bg-[#DDD7CA] text-[#7A7265]'
                            )}
                          >
                            {pat === 'all' ? 'Semua Pola' : pat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setIrregularDrillMode(!irregularDrillMode)}
                      className={clsx(
                        'px-4 py-2 rounded-2xl text-xs font-mono font-medium transition-all flex items-center gap-1.5 tactile-btn min-h-[40px]',
                        irregularDrillMode ? 'bg-[#A84A28] text-white' : 'bg-[#DDD7CA] text-[#1E1B17] border border-[#C8C0B0]'
                      )}
                    >
                      <Scissors className="w-3.5 h-3.5" />
                      <span>{irregularDrillMode ? 'Keluar Mode Uji Ketik' : 'Mode Uji Ketik (Drill)'}</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto rounded-3xl border border-[#C8C0B0] bg-[#E6E0D4] smooth-scroll p-1">
                    <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                      <thead className="bg-[#DDD7CA] border-b border-[#C8C0B0] font-mono text-[11px] text-[#7A7265]">
                        <tr>
                          <th className="p-3.5">Verb 1 (Base)</th>
                          <th className="p-3.5">Verb 2 (Past Simple)</th>
                          <th className="p-3.5">Verb 3 (Past Participle)</th>
                          <th className="p-3.5">Pola</th>
                          <th className="p-3.5">Arti Bahasa Indonesia</th>
                          <th className="p-3.5">Contoh Akademik</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#C8C0B0]/60">
                        {IRREGULAR_VERBS_DATA
                          .filter(iv => {
                            const matchesPat = irregularPatternFilter === 'all' || iv.pattern === irregularPatternFilter;
                            const matchesS = iv.v1.toLowerCase().includes(matrixSearch.toLowerCase()) ||
                              iv.v2.toLowerCase().includes(matrixSearch.toLowerCase()) ||
                              iv.v3.toLowerCase().includes(matrixSearch.toLowerCase()) ||
                              iv.meaningId.toLowerCase().includes(matrixSearch.toLowerCase());
                            return matchesPat && matchesS;
                          })
                          .map(iv => {
                            const userInput = irregularUserInputs[iv.id] || { v2: '', v3: '' };
                            const v2Correct = userInput.v2.trim().toLowerCase() === iv.v2.toLowerCase();
                            const v3Correct = userInput.v3.trim().toLowerCase() === iv.v3.toLowerCase();

                            return (
                              <tr key={iv.id} className="hover:bg-[#DDD7CA]/50 transition-colors">
                                <td className="p-3.5 font-serif font-medium text-sm text-[#1E1B17]">
                                  <div className="flex items-center gap-2">
                                    <span>{iv.v1}</span>
                                    <button onClick={() => playNativeAudio(iv.v1)} className="text-[#7A7265] hover:text-[#1E1B17]">
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                  <span className="font-mono text-[10px] text-[#7A7265] block">{iv.ipaV1}</span>
                                </td>

                                <td className="p-3.5 font-mono text-xs">
                                  {irregularDrillMode ? (
                                    <input
                                      type="text"
                                      value={userInput.v2}
                                      onChange={(e) => setIrregularUserInputs(prev => ({ ...prev, [iv.id]: { ...userInput, v2: e.target.value } }))}
                                      placeholder="Ketik V2..."
                                      className={clsx(
                                        'px-2.5 py-1.5 rounded-xl border text-xs w-28 outline-hidden',
                                        userInput.v2 ? (v2Correct ? 'bg-[#535841]/20 border-[#535841] text-[#1E1B17]' : 'bg-[#A84A28]/20 border-[#A84A28]') : 'bg-[#DDD7CA] border-[#C8C0B0]'
                                      )}
                                    />
                                  ) : (
                                    <div>
                                      <span className="font-semibold text-[#1E1B17]">{iv.v2}</span>
                                      <span className="text-[10px] text-[#7A7265] block">{iv.ipaV2}</span>
                                    </div>
                                  )}
                                </td>

                                <td className="p-3.5 font-mono text-xs">
                                  {irregularDrillMode ? (
                                    <input
                                      type="text"
                                      value={userInput.v3}
                                      onChange={(e) => setIrregularUserInputs(prev => ({ ...prev, [iv.id]: { ...userInput, v3: e.target.value } }))}
                                      placeholder="Ketik V3..."
                                      className={clsx(
                                        'px-2.5 py-1.5 rounded-xl border text-xs w-28 outline-hidden',
                                        userInput.v3 ? (v3Correct ? 'bg-[#535841]/20 border-[#535841] text-[#1E1B17]' : 'bg-[#A84A28]/20 border-[#A84A28]') : 'bg-[#DDD7CA] border-[#C8C0B0]'
                                      )}
                                    />
                                  ) : (
                                    <div>
                                      <span className="font-semibold text-[#A84A28]">{iv.v3}</span>
                                      <span className="text-[10px] text-[#7A7265] block">{iv.ipaV3}</span>
                                    </div>
                                  )}
                                </td>

                                <td className="p-3.5">
                                  <span className="font-mono text-[10px] bg-[#DDD7CA] px-2 py-0.5 rounded border border-[#C8C0B0] text-[#7A7265]">
                                    {iv.pattern}
                                  </span>
                                </td>

                                <td className="p-3.5 text-xs text-[#38332A] max-w-xs">
                                  {iv.meaningId}
                                </td>

                                <td className="p-3.5 text-xs text-[#7A7265] italic max-w-sm">
                                  "{iv.exampleSentence}"
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 13: NOUN TAXONOMY ───────────── */}
              {matrixSubTab === 'nouns' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {NOUN_TAXONOMY_DATA.map(nt => (
                      <div key={nt.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] uppercase font-semibold bg-[#DDD7CA] text-[#A84A28] px-2.5 py-0.5 rounded-full">
                            {nt.category}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-serif text-xl text-[#1E1B17] font-bold">{nt.singularForm}</h4>
                          {nt.pluralForm && (
                            <span className="font-mono text-xs text-[#A84A28] block">Jamak: {nt.pluralForm}</span>
                          )}
                          <span className="text-xs text-[#7A7265] block mt-0.5">{nt.meaningId}</span>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs text-[#38332A] space-y-1">
                          <strong>Kaidah Sintaksis:</strong>
                          <p className="text-[11px] leading-relaxed">{nt.ruleExplanation}</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-xs space-y-0.5">
                          <strong className="text-[#A84A28] text-[10px] uppercase font-mono block">Jebakan Fatal:</strong>
                          <p className="text-[#1E1B17] text-[11px]">{nt.commonPitfall}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 14: 12 TENSES MASTER ───────────── */}
              {matrixSubTab === 'tenses' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {TENSES_MASTER_DATA.map(tm => (
                      <div key={tm.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] bg-[#1E1B17] text-[#EFE9DF] px-2.5 py-0.5 rounded-full font-semibold">
                            {tm.timeDimension} · {tm.aspect}
                          </span>
                        </div>

                        <h4 className="font-serif text-2xl text-[#1E1B17] font-bold">{tm.tenseName}</h4>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-[11px] space-y-1">
                          <div className="text-[#A84A28] font-medium">(+) {tm.positiveFormula}</div>
                          <div className="text-[#7A7265]">(-) {tm.negativeFormula}</div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <strong className="text-[#535841] font-mono text-[10px] uppercase block">Mental Model Logic:</strong>
                          <p className="text-[#38332A] text-[11px] leading-relaxed italic">"{tm.mentalModelLogic}"</p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0]/60 text-xs space-y-1">
                          <span className="font-mono text-[10px] text-[#7A7265] uppercase block">Contoh Akademik:</span>
                          <p className="font-serif text-[12px] text-[#1E1B17] italic">"{tm.academicExample}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 15: PHRASAL VERBS ───────────── */}
              {matrixSubTab === 'phrasal' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PHRASAL_VERBS_DATA.map(pv => (
                      <div key={pv.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif text-xl font-bold text-[#1E1B17]">{pv.verb} {pv.particle}</h4>
                            <span className="font-mono text-[10px] bg-[#DDD7CA] text-[#A84A28] px-2 py-0.5 rounded font-semibold">
                              {pv.type}
                            </span>
                          </div>
                          <button onClick={() => playNativeAudio(`${pv.verb} ${pv.particle}`)} className="text-[#7A7265] hover:text-[#1E1B17]">
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-xs space-y-1">
                          <p><strong>Arti:</strong> {pv.meaningId}</p>
                          <p className="font-mono text-[11px] text-[#535841]">
                            <strong>Padanan Formal Satu Kata:</strong> {pv.academicRegister}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1">
                          <p className="font-serif text-[#1E1B17] italic">"{pv.exampleSentence}"</p>
                          {pv.separableExample && (
                            <p className="font-mono text-[10px] text-[#7A7265] pt-1 border-t border-[#C8C0B0]/60">
                              Pola Terpisah: "{pv.separableExample}"
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ───────────── SUB-TAB 16: PUNCTUATION GUIDE ───────────── */}
              {matrixSubTab === 'punctuation' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {PUNCTUATION_GUIDE_DATA.map(pg => (
                      <div key={pg.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-3.5 shadow-xs">
                        <div className="flex items-center gap-3">
                          <span className="w-11 h-11 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] font-serif text-2xl flex items-center justify-center font-bold">
                            {pg.symbol}
                          </span>
                          <div>
                            <h4 className="font-serif text-lg text-[#1E1B17] font-semibold">{pg.markName}</h4>
                            <span className="font-mono text-[10px] text-[#7A7265]">Kaidah Tanda Baca Akademik</span>
                          </div>
                        </div>

                        <p className="text-xs text-[#38332A] leading-relaxed">{pg.primaryRule}</p>

                        <div className="space-y-1.5 text-xs">
                          <div className="p-2.5 rounded-xl bg-[#535841]/15 text-[#1E1B17] border border-[#535841]/30">
                            <span className="font-mono font-semibold text-[#535841] mr-2">Baku:</span>
                            <span className="italic">"{pg.correctExample}"</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#A84A28]/15 text-[#1E1B17] border border-[#A84A28]/30">
                            <span className="font-mono font-semibold text-[#A84A28] mr-2">Salah:</span>
                            <span className="italic">"{pg.incorrectExample}"</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#524C42] leading-relaxed pt-1">
                          <strong>Nalar Linguistik:</strong> {pg.linguisticReason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────── WORKSPACE 5: STUDIO SINTAKSIS ───────────── */}
          {activeHub === 'studio' && (
            <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 pb-28 md:pb-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#C8C0B0] shrink-0">
                <div>
                  <span className="font-mono text-xs text-[#A84A28] uppercase font-semibold">
                    Studio Produksi & Analisis Retorika Mandiri
                  </span>
                  <h2 className="text-xl sm:text-2xl font-serif text-[#1E1B17]">Academic Syntax & Exam Studio</h2>
                </div>

                <div className="flex items-center gap-1.5 bg-[#DDD7CA] p-1.5 rounded-2xl border border-[#C8C0B0] overflow-x-auto no-scrollbar w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setStudioSubTab('paraphrase')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      studioSubTab === 'paraphrase' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Paraphrasing
                  </button>
                  <button
                    onClick={() => setStudioSubTab('xray')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      studioSubTab === 'xray' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Sentence X-Ray
                  </button>
                  <button
                    onClick={() => setStudioSubTab('ielts-task1')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      studioSubTab === 'ielts-task1' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    IELTS Task 1
                  </button>
                  <button
                    onClick={() => setStudioSubTab('combine')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      studioSubTab === 'combine' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Combining
                  </button>
                  <button
                    onClick={() => setStudioSubTab('writing-pad')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all tactile-btn whitespace-nowrap shrink-0 min-h-[36px]',
                      studioSubTab === 'writing-pad' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Writing Pad
                  </button>
                </div>
              </div>

              {/* Paraphrasing */}
              {studioSubTab === 'paraphrase' && (
                <div className="max-w-3xl mx-auto w-full flex-1 overflow-y-auto space-y-6 my-auto">
                  <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-3 py-1 rounded-md uppercase font-semibold">
                        Teknik: {currentParaTask.technique}
                      </span>
                      <span className="font-mono text-xs text-[#7A7265]">
                        Tugas {activeParaIndex + 1} dari {PARAPHRASING_TASKS_DATA.length}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1">
                      <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                        Kalimat Asli (Prompt):
                      </span>
                      <p className="font-serif text-base text-[#1E1B17]">"{currentParaTask.originalSentence}"</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#535841]/10 border border-[#535841]/30 text-xs font-mono text-[#535841]">
                      <strong>Target Fokus Parafrase:</strong> {currentParaTask.targetFocus}
                    </div>

                    <form onSubmit={handleCheckParaphrase} className="space-y-3">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] font-semibold block">
                        Ketik Kalimat Hasil Parafrase Anda:
                      </label>
                      <textarea
                        value={paraUserInput}
                        onChange={(e) => {
                          setParaUserInput(e.target.value);
                          setParaFeedback(null);
                        }}
                        rows={3}
                        placeholder="Ketik parafrase formal yang mempertahankan makna..."
                        className="w-full p-3.5 text-xs sm:text-sm bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn shadow-xs"
                        >
                          Verifikasi Parafrase
                        </button>
                      </div>
                    </form>

                    {paraFeedback && (
                      <div className={clsx(
                        'p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200',
                        paraFeedback.isCorrect ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                      )}>
                        <div className="flex items-center gap-2 font-semibold">
                          {paraFeedback.isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                              <span>Parafrase Sangat Baik & Alami!</span>
                            </>
                          ) : (
                            <>
                              <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                              <span>Parafrase alternatif dapat ditinjau di bawah:</span>
                            </>
                          )}
                        </div>

                        <div className="space-y-1 pt-1 border-t border-[#C8C0B0]/60">
                          <p><strong>Contoh Parafrase Baku:</strong> "{currentParaTask.sampleParaphrase}"</p>
                          <p className="text-[#524C42] leading-relaxed">
                            <strong>Penjelasan Linguistik:</strong> {currentParaTask.explanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        setActiveParaIndex(prev => Math.max(0, prev - 1));
                        setParaUserInput('');
                        setParaFeedback(null);
                      }}
                      disabled={activeParaIndex === 0}
                      className="px-4 py-2 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono disabled:opacity-30 tactile-btn"
                    >
                      Tugas Sebelumnya
                    </button>

                    <button
                      onClick={() => {
                        setActiveParaIndex(prev => Math.min(PARAPHRASING_TASKS_DATA.length - 1, prev + 1));
                        setParaUserInput('');
                        setParaFeedback(null);
                      }}
                      disabled={activeParaIndex === PARAPHRASING_TASKS_DATA.length - 1}
                      className="px-4 py-2 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono disabled:opacity-30 tactile-btn"
                    >
                      Tugas Selanjutnya
                    </button>
                  </div>
                </div>
              )}

              {/* X-Ray */}
              {studioSubTab === 'xray' && (
                <div className="max-w-4xl mx-auto w-full flex-1 overflow-y-auto space-y-6 my-auto">
                  {(() => {
                    const xray = XRAY_SENTENCES_DATA[activeXrayIndex];
                    return (
                      <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-6">
                        <div className="flex items-center justify-between pb-3 border-b border-[#C8C0B0]">
                          <h3 className="font-serif text-xl text-[#1E1B17] font-semibold">{xray.title}</h3>
                          <div className="flex gap-2">
                            {XRAY_SENTENCES_DATA.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveXrayIndex(idx)}
                                className={clsx(
                                  'px-3 py-1 rounded-xl text-xs font-mono',
                                  activeXrayIndex === idx ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#7A7265]'
                                )}
                              >
                                Kasus {idx + 1}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                          <span className="font-mono text-[10px] uppercase text-[#7A7265] block font-semibold">
                            Visual Syntactic Layers (Klik & Sorot Konstituen):
                          </span>
                          <div className="text-base sm:text-lg font-serif leading-relaxed flex flex-wrap gap-1.5">
                            {xray.breakdown.map((block, bIdx) => (
                              <span
                                key={bIdx}
                                className={clsx(
                                  'px-2 py-0.5 rounded-lg border text-sm sm:text-base font-medium inline-block transition-all',
                                  block.colorKey
                                )}
                                title={`${block.role}: ${block.explanation}`}
                              >
                                {block.text}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {xray.breakdown.map((block, bIdx) => (
                            <div key={bIdx} className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0] text-xs space-y-1">
                              <span className="font-mono text-[10px] font-semibold uppercase text-[#A84A28] block">
                                {block.role}
                              </span>
                              <p className="font-serif text-[#1E1B17] italic">"{block.text}"</p>
                              <p className="text-[11px] text-[#524C42] pt-1 border-t border-[#C8C0B0]/60">
                                {block.explanation}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1">
                          <strong>Ringkasan Arsitektur Kalimat:</strong>
                          <p className="text-[#38332A] leading-relaxed">{xray.architecturalSummary}</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* IELTS Task 1 */}
              {studioSubTab === 'ielts-task1' && (
                <div className="max-w-4xl mx-auto w-full flex-1 overflow-y-auto space-y-6 my-auto">
                  <div className="flex gap-2 pb-2 border-b border-[#C8C0B0]">
                    {IELTS_TASK1_TRENDS_DATA.map((tr, idx) => (
                      <button
                        key={tr.id}
                        onClick={() => setActiveIeltsTrendIndex(idx)}
                        className={clsx(
                          'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn',
                          activeIeltsTrendIndex === idx ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'bg-[#E6E0D4] border border-[#C8C0B0] text-[#7A7265]'
                        )}
                      >
                        {tr.trendType}
                      </button>
                    ))}
                  </div>

                  {(() => {
                    const tr = IELTS_TASK1_TRENDS_DATA[activeIeltsTrendIndex];

                    return (
                      <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#A84A28]" />
                            <h3 className="font-serif text-xl font-bold text-[#1E1B17]">{tr.trendType}</h3>
                          </div>
                          <span className="font-mono text-xs bg-[#DDD7CA] text-[#A84A28] px-2.5 py-0.5 rounded font-semibold">
                            IELTS Writing Task 1 Formula
                          </span>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] font-mono text-xs text-[#1E1B17] space-y-1">
                          <span className="text-[10px] text-[#7A7265] uppercase block font-semibold">Struktur Kalimat Baku:</span>
                          <div className="font-semibold text-[#A84A28]">{tr.formulaStructure}</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0] space-y-1.5">
                            <span className="font-mono text-[10px] text-[#A84A28] uppercase font-semibold block">Verba Tren Kuat:</span>
                            <div className="flex flex-wrap gap-1">
                              {tr.highYieldVerbs.map(v => (
                                <span key={v} className="font-mono text-[10px] bg-[#E6E0D4] px-2 py-0.5 rounded border border-[#C8C0B0]">
                                  {v}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0] space-y-1.5">
                            <span className="font-mono text-[10px] text-[#535841] uppercase font-semibold block">Frasa Benda Tren:</span>
                            <div className="flex flex-wrap gap-1">
                              {tr.highYieldNouns.map(n => (
                                <span key={n} className="font-mono text-[10px] bg-[#E6E0D4] px-2 py-0.5 rounded border border-[#C8C0B0]">
                                  {n}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-[#DDD7CA]/70 border border-[#C8C0B0] space-y-1.5">
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold block">Adverbia Derajat:</span>
                            <div className="flex flex-wrap gap-1">
                              {tr.highYieldAdverbs.map(adv => (
                                <span key={adv} className="font-mono text-[10px] bg-[#E6E0D4] px-2 py-0.5 rounded border border-[#C8C0B0]">
                                  {adv}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-[#535841]/10 border border-[#535841]/30 text-xs space-y-1">
                          <span className="font-mono text-[10px] uppercase text-[#535841] font-semibold block">
                            Contoh Kalimat Laporan Data IELTS:
                          </span>
                          <p className="font-serif text-sm text-[#1E1B17] italic">"{tr.sampleSentence}"</p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Combining */}
              {studioSubTab === 'combine' && (
                <div className="max-w-3xl mx-auto w-full flex-1 overflow-y-auto space-y-6 my-auto">
                  <div className="p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-3 py-1 rounded-md uppercase font-semibold">
                        Teknik: {currentCombineTask.technique}
                      </span>
                      <span className="font-mono text-xs text-[#7A7265]">
                        Tugas {activeCombineIndex + 1} dari {SENTENCE_COMBINING_DATA.length}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                      <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                        Gabungkan 2 Kalimat Pendek Ini Menjadi 1 Kalimat Majemuk Padat:
                      </span>
                      <ul className="space-y-1 text-xs sm:text-sm font-serif text-[#1E1B17]">
                        {currentCombineTask.sourceSentences.map((sent, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="font-mono text-[10px] text-[#A84A28] font-bold">({sIdx + 1})</span>
                            <span>{sent}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form onSubmit={handleCheckCombine} className="space-y-3">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] font-semibold block">
                        Ketik Kalimat Hasil Penggabungan Anda:
                      </label>
                      <textarea
                        value={combineUserInput}
                        onChange={(e) => {
                          setCombineUserInput(e.target.value);
                          setCombineFeedback(null);
                        }}
                        rows={3}
                        placeholder="Ketik kalimat tunggal yang padat..."
                        className="w-full p-3.5 text-xs sm:text-sm bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                      />
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn shadow-xs"
                        >
                          Verifikasi Penggabungan
                        </button>
                      </div>
                    </form>

                    {combineFeedback && (
                      <div className={clsx(
                        'p-4 rounded-2xl border text-xs space-y-2 animate-in fade-in duration-200',
                        combineFeedback.isCorrect ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                      )}>
                        <div className="flex items-center gap-2 font-semibold">
                          {combineFeedback.isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                              <span>Penggabungan Sangat Padat & Alami!</span>
                            </>
                          ) : (
                            <>
                              <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                              <span>Struktur alternatif dapat ditinjau di bawah:</span>
                            </>
                          )}
                        </div>

                        <div className="space-y-1 pt-1 border-t border-[#C8C0B0]/60">
                          <p><strong>Kalimat Gabungan Baku:</strong> "{currentCombineTask.sampleCombined}"</p>
                          <p className="text-[#524C42] leading-relaxed">
                            <strong>Penjelasan Linguistik:</strong> {currentCombineTask.linguisticExplanation}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        setActiveCombineIndex(prev => Math.max(0, prev - 1));
                        setCombineUserInput('');
                        setCombineFeedback(null);
                      }}
                      disabled={activeCombineIndex === 0}
                      className="px-4 py-2 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono disabled:opacity-30 tactile-btn"
                    >
                      Tugas Sebelumnya
                    </button>

                    <button
                      onClick={() => {
                        setActiveCombineIndex(prev => Math.min(SENTENCE_COMBINING_DATA.length - 1, prev + 1));
                        setCombineUserInput('');
                        setCombineFeedback(null);
                      }}
                      disabled={activeCombineIndex === SENTENCE_COMBINING_DATA.length - 1}
                      className="px-4 py-2 rounded-2xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono disabled:opacity-30 tactile-btn"
                    >
                      Tugas Selanjutnya
                    </button>
                  </div>
                </div>
              )}

              {/* Writing Pad */}
              {studioSubTab === 'writing-pad' && (
                <div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden">
                  <div className="col-span-12 lg:col-span-8 flex flex-col h-full space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#7A7265] uppercase font-semibold">
                        Kanvas Penulisan Esai Formal (IELTS / TOEFL Simulator)
                      </span>
                      <button
                        onClick={() => setWritingPadText('')}
                        className="text-xs font-mono text-[#A84A28] hover:underline"
                      >
                        Bersihkan Teks
                      </button>
                    </div>

                    <textarea
                      value={writingPadText}
                      onChange={(e) => {
                        setWritingPadText(e.target.value);
                        try {
                          localStorage.setItem('meraki_writing_pad_text', e.target.value);
                        } catch (err) {}
                      }}
                      placeholder="Mulai ketik esai argumentatif atau paragraf deskripsi data Anda di sini... Sistem akan menganalisis metrik sintaksis dan leksikal secara instan tanpa ketergantungan AI."
                      className="flex-1 w-full p-6 text-sm bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl outline-hidden focus:border-[#A84A28] text-[#1E1B17] font-serif leading-relaxed resize-none shadow-xs"
                    />
                  </div>

                  <div className="col-span-12 lg:col-span-4 bg-[#E6E0D4] border border-[#C8C0B0] rounded-3xl p-5 overflow-y-auto space-y-5">
                    <h3 className="font-serif text-lg font-semibold text-[#1E1B17] pb-2 border-b border-[#C8C0B0]">
                      Metrik Sintaksis & Leksikal
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-center">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase block">Total Kata</span>
                        <span className="font-serif text-2xl font-bold text-[#1E1B17]">{padMetrics.wordCount}</span>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-center">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase block">Lexical Diversity (TTR)</span>
                        <span className="font-serif text-2xl font-bold text-[#535841]">{padMetrics.ttr}%</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-[#C8C0B0]/60">
                        <span className="text-[#7A7265]">Jumlah Kalimat:</span>
                        <span className="font-mono font-semibold text-[#1E1B17]">{padMetrics.sentenceCount}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#C8C0B0]/60">
                        <span className="text-[#7A7265]">Rata-rata Kata/Kalimat:</span>
                        <span className="font-mono font-semibold text-[#1E1B17]">{padMetrics.avgWordsPerSentence} kata</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#C8C0B0]/60">
                        <span className="text-[#7A7265]">Academic Chunk Density:</span>
                        <span className="font-mono font-semibold text-[#A84A28]">{padMetrics.academicChunkDensity}%</span>
                      </div>
                    </div>

                    {/* Sentence Rhythm & Monotony Visualizer */}
                    <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold">
                          Diagram Ritme & Variasi Kalimat:
                        </span>
                        <Activity className="w-3.5 h-3.5 text-[#7A7265]" />
                      </div>

                      {padMetrics.sentenceLengths.length > 0 ? (
                        <div className="space-y-1.5 pt-1">
                          <div className="flex items-end gap-1.5 h-16 px-1 pt-2 bg-[#E6E0D4] rounded-xl border border-[#C8C0B0]/60 overflow-x-auto no-scrollbar">
                            {padMetrics.sentenceLengths.map((len, idx) => {
                              const heightPct = Math.min(100, Math.max(15, (len / 35) * 100));
                              const isIdeal = len >= 12 && len <= 28;
                              return (
                                <div key={idx} className="flex flex-col items-center flex-1 min-w-[20px] h-full justify-end group relative">
                                  <div
                                    className={clsx(
                                      'w-full rounded-t-sm transition-all',
                                      isIdeal ? 'bg-[#535841]' : len < 12 ? 'bg-[#DDD7CA] border border-[#7A7265]' : 'bg-[#A84A28]'
                                    )}
                                    style={{ height: `${heightPct}%` }}
                                  />
                                  <span className="font-mono text-[8px] text-[#7A7265] mt-0.5">{len}</span>
                                </div>
                              );
                            })}
                          </div>
                          <span className="font-mono text-[9px] text-[#7A7265] block text-center">
                            Setiap bar = jumlah kata per kalimat (Hijau: ideal 12–28 kata)
                          </span>
                        </div>
                      ) : (
                        <p className="text-[11px] text-[#7A7265] italic">Ketik minimal 1 kalimat untuk melihat grafik ritme.</p>
                      )}

                      {padMetrics.isMonotonous && (
                        <div className="p-2.5 rounded-xl bg-[#A84A28]/15 border border-[#A84A28]/30 text-[11px] text-[#1E1B17] space-y-0.5">
                          <strong className="text-[#A84A28] font-mono text-[9px] uppercase block">Peringatan Ritme Monoton:</strong>
                          <p>{padMetrics.monotonyReason}</p>
                        </div>
                      )}
                    </div>

                    {/* Academic High-Yield Chunks Radar */}
                    <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#A84A28] uppercase font-semibold block">
                          Academic Chunks & Connectors ({padMetrics.detectedAcademicChunks.length}):
                        </span>
                        <Zap className="w-3.5 h-3.5 text-[#A84A28]" />
                      </div>
                      {padMetrics.detectedAcademicChunks.length > 0 ? (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {padMetrics.detectedAcademicChunks.map(chunk => (
                            <span key={chunk} className="font-mono text-[10px] bg-[#A84A28]/15 text-[#A84A28] border border-[#A84A28]/25 px-2 py-0.5 rounded-md font-semibold">
                              {chunk}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[11px] text-[#7A7265] italic">
                          Belum ada frasa transisi akademik. Coba gunakan: *in light of*, *conversely*, *with respect to*, atau *plays a pivotal role*.
                        </p>
                      )}
                    </div>

                    {/* Academic Hedging */}
                    <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-1.5">
                      <span className="font-mono text-[10px] text-[#535841] uppercase font-semibold block">
                        Academic Hedging Terdeteksi ({padMetrics.detectedHedging.length}):
                      </span>
                      {padMetrics.detectedHedging.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {padMetrics.detectedHedging.map(h => (
                            <span key={h} className="font-mono text-[10px] bg-[#535841]/20 text-[#535841] px-2 py-0.5 rounded">
                              {h}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[11px] text-[#7A7265] italic">Belum ada hedging. Gunakan kata seperti *suggests*, *tends to*, atau *may*.</p>
                      )}
                    </div>

                    {padMetrics.detectedInformal.length > 0 && (
                      <div className="p-3.5 rounded-2xl bg-[#A84A28]/15 border border-[#A84A28]/30 space-y-1 text-xs">
                        <strong className="text-[#A84A28] font-mono text-[10px] uppercase block">Peringatan Kata Informal:</strong>
                        <p className="text-[11px] text-[#1E1B17]">
                          Hindari kata: {padMetrics.detectedInformal.join(', ')} dalam esai akademik formal.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────── WORKSPACE 6: FONETIK LAB ───────────── */}
          {activeHub === 'phonetics' && (
            <div className="max-w-4xl mx-auto h-full p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 pb-28 md:pb-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#C8C0B0]">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A84A28] font-semibold">
                    Comparative Phonetics & Ear Training Studio
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#1E1B17]">
                    Minimal Pairs & Ear Training Lab
                  </h2>
                </div>

                <div className="flex items-center gap-1 bg-[#DDD7CA] p-1.5 rounded-2xl border border-[#C8C0B0] self-start sm:self-auto shrink-0">
                  <button
                    onClick={() => setPhoneticsMode('reference')}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn',
                      phoneticsMode === 'reference' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    Komparasi IPA
                  </button>
                  <button
                    onClick={() => {
                      setPhoneticsMode('ear-training');
                      setEarSecretWord(null);
                      setEarSelectedChoice(null);
                    }}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn flex items-center gap-1',
                      phoneticsMode === 'ear-training' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    <Headphones className="w-3 h-3 text-[#A84A28]" />
                    <span>Listening Drill</span>
                  </button>
                  <button
                    onClick={() => {
                      setPhoneticsMode('shadowing');
                      setIsShadowingRunning(false);
                      setShadowingCountdown(5);
                    }}
                    className={clsx(
                      'px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all tactile-btn flex items-center gap-1',
                      phoneticsMode === 'shadowing' ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold shadow-xs' : 'text-[#7A7265] hover:text-[#1E1B17]'
                    )}
                  >
                    <Timer className="w-3 h-3 text-[#535841]" />
                    <span>Shadowing</span>
                  </button>
                </div>
              </div>

              {/* Minimal Pair Pills */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {MINIMAL_PAIRS_DATA.map((mp, idx) => (
                  <button
                    key={mp.id}
                    onClick={() => {
                      setActiveMinimalPairIndex(idx);
                      setEarSecretWord(null);
                      setEarSelectedChoice(null);
                    }}
                    className={clsx(
                      'px-4 py-2 rounded-2xl text-xs font-mono whitespace-nowrap transition-all tactile-btn',
                      activeMinimalPairIndex === idx ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'bg-[#E6E0D4] border border-[#C8C0B0] text-[#7A7265]'
                    )}
                  >
                    {mp.phonemeContrast}
                  </button>
                ))}
              </div>

              {(() => {
                const mp = MINIMAL_PAIRS_DATA[activeMinimalPairIndex];

                if (phoneticsMode === 'ear-training') {
                  const hasStarted = earSecretWord !== null;
                  const isAnswered = earSelectedChoice !== null;
                  const isCorrect = earSelectedChoice === earSecretWord;

                  const handlePlaySecretWord = () => {
                    let secret = earSecretWord;
                    if (!secret) {
                      secret = Math.random() > 0.5 ? 'A' : 'B';
                      setEarSecretWord(secret);
                    }
                    const wordToPlay = secret === 'A' ? mp.wordA : mp.wordB;
                    playNativeAudio(wordToPlay);
                  };

                  const handleSelectEarChoice = (choice: 'A' | 'B') => {
                    if (isAnswered) return;
                    setEarSelectedChoice(choice);
                    const correct = choice === earSecretWord;
                    setEarScore(prev => ({
                      correct: prev.correct + (correct ? 1 : 0),
                      total: prev.total + 1
                    }));
                  };

                  const handleNextEarRound = () => {
                    const nextSecret = Math.random() > 0.5 ? 'A' : 'B';
                    setEarSecretWord(nextSecret);
                    setEarSelectedChoice(null);
                    const wordToPlay = nextSecret === 'A' ? mp.wordA : mp.wordB;
                    playNativeAudio(wordToPlay);
                  };

                  return (
                    <div className="p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-6 text-center">
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#C8C0B0]">
                        <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-3 py-1 rounded-md uppercase font-semibold">
                          Drill Telinga: Kontras {mp.phonemeContrast}
                        </span>
                        <div className="font-mono text-xs text-[#7A7265]">
                          Akurasi: <strong className="text-[#1E1B17]">{earScore.correct} / {earScore.total}</strong> ({earScore.total > 0 ? Math.round((earScore.correct / earScore.total) * 100) : 0}%)
                        </div>
                      </div>

                      <div className="space-y-4 max-w-lg mx-auto">
                        <h3 className="font-serif text-2xl text-[#1E1B17]">
                          Dengarkan dan Tebak Kata yang Diucapkan
                        </h3>
                        <p className="text-xs text-[#524C42] leading-relaxed">
                          Sistem akan memutar salah satu kata dari pasangan <strong className="font-mono">{mp.wordA}</strong> ({mp.ipaA}) atau <strong className="font-mono">{mp.wordB}</strong> ({mp.ipaB}).
                        </p>

                        <button
                          onClick={handlePlaySecretWord}
                          className="px-6 py-3.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-sm font-mono flex items-center justify-center gap-2 mx-auto tactile-btn shadow-md"
                          aria-label="Putar suara kata misterius"
                        >
                          <Volume2 className="w-5 h-5" />
                          <span>{hasStarted ? 'Putar Ulang Suara' : 'Mulai Putar Suara'}</span>
                        </button>
                      </div>

                      {hasStarted && (
                        <div className="space-y-4 pt-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] block font-semibold">
                            Kata mana yang barusan Anda dengar?
                          </span>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                            {(['A', 'B'] as const).map(letter => {
                              const word = letter === 'A' ? mp.wordA : mp.wordB;
                              const ipa = letter === 'A' ? mp.ipaA : mp.ipaB;
                              const meaning = letter === 'A' ? mp.meaningA : mp.meaningB;
                              const isChoice = earSelectedChoice === letter;
                              const isTarget = earSecretWord === letter;

                              let btnStyle = 'bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 border-[#C8C0B0] text-[#1E1B17]';
                              if (isAnswered) {
                                if (isTarget) btnStyle = 'bg-[#535841]/20 border-[#535841] text-[#1E1B17] font-bold';
                                else if (isChoice && !isTarget) btnStyle = 'bg-[#A84A28]/20 border-[#A84A28] text-[#1E1B17]';
                                else btnStyle = 'opacity-40 bg-[#DDD7CA] border-transparent text-[#7A7265]';
                              }

                              return (
                                <button
                                  key={letter}
                                  onClick={() => handleSelectEarChoice(letter)}
                                  disabled={isAnswered}
                                  className={clsx(
                                    'p-5 rounded-3xl border transition-all tactile-btn text-center space-y-1',
                                    btnStyle
                                  )}
                                >
                                  <span className="font-mono text-[10px] text-[#7A7265] uppercase block">Opsi ({letter})</span>
                                  <h4 className="font-serif text-3xl font-bold">{word}</h4>
                                  <span className="font-mono text-xs text-[#A84A28] block">{ipa}</span>
                                  <p className="text-[11px] text-[#524C42]">{meaning}</p>
                                </button>
                              );
                            })}
                          </div>

                          {isAnswered && (
                            <div className={clsx(
                              'p-4 rounded-2xl border text-xs max-w-lg mx-auto space-y-3 animate-in fade-in duration-200 text-left',
                              isCorrect ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                            )}>
                              <div className="flex items-center gap-2 font-bold">
                                {isCorrect ? (
                                  <>
                                    <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                                    <span>Tepat Sekali! Telinga Anda berhasil menangkap beda fonem.</span>
                                  </>
                                ) : (
                                  <>
                                    <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                                    <span>Belum Tepat! Kata yang diputar adalah "{earSecretWord === 'A' ? mp.wordA : mp.wordB}".</span>
                                  </>
                                )}
                              </div>
                              <p className="text-[#524C42] leading-relaxed">
                                <strong>Kunci Pembeda:</strong> {mp.description}
                              </p>

                              <div className="flex justify-end pt-2 border-t border-[#C8C0B0]/60">
                                <button
                                  onClick={handleNextEarRound}
                                  className="px-4 py-2 rounded-xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono font-medium tactile-btn"
                                >
                                  Soal Berikutnya
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                if (phoneticsMode === 'shadowing') {
                  const handleStartShadowing = () => {
                    playNativeAudio(mp.contrastContext);
                    setIsShadowingRunning(true);
                    setShadowingCountdown(5);
                  };

                  return (
                    <div className="p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-6 text-center">
                      <div className="space-y-2">
                        <span className="font-mono text-xs bg-[#535841]/10 text-[#535841] px-3 py-1 rounded-md uppercase font-semibold">
                          Shadowing & Articulation Loop: {mp.phonemeContrast}
                        </span>
                        <h3 className="font-serif text-2xl text-[#1E1B17]">
                          Tiru Intonasi & Artikulasi Kalimat Kontras
                        </h3>
                        <p className="text-xs text-[#524C42] max-w-md mx-auto leading-relaxed">
                          Dengarkan pelafalan penutur asli, lalu tirukan secara lantang dalam hitungan mundur 5 detik.
                        </p>
                      </div>

                      <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-4 max-w-xl mx-auto text-left">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                          Target Kalimat Shadowing:
                        </span>
                        <p className="font-serif text-lg text-[#1E1B17] italic leading-relaxed">
                          "{mp.contrastContext}"
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#C8C0B0]/60">
                          <button
                            onClick={handleStartShadowing}
                            disabled={isShadowingRunning}
                            className="px-5 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono flex items-center gap-2 tactile-btn disabled:opacity-50"
                          >
                            <Play className="w-4 h-4" />
                            <span>{isShadowingRunning ? `Menirukan (${shadowingCountdown}s)...` : 'Putar & Mulai Shadowing'}</span>
                          </button>

                          {isShadowingRunning && (
                            <div className="flex items-center gap-2 font-mono text-xs text-[#A84A28] font-bold animate-pulse">
                              <Timer className="w-4 h-4" />
                              <span>Waktu Ucap: {shadowingCountdown} detik</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                // Default: Reference View
                return (
                  <div className="p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-6 text-center">
                    <div>
                      <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-3 py-1 rounded-md uppercase font-semibold">
                        Kontras Fonetik: {mp.phonemeContrast}
                      </span>
                      <p className="text-xs text-[#524C42] max-w-lg mx-auto mt-2 leading-relaxed">
                        {mp.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">Kata A:</span>
                        <h3 className="text-4xl font-serif text-[#1E1B17]">{mp.wordA}</h3>
                        <span className="font-mono text-xs text-[#A84A28] block">{mp.ipaA}</span>
                        <p className="text-xs text-[#38332A]">{mp.meaningA}</p>
                        <button
                          onClick={() => playNativeAudio(mp.wordA)}
                          className="px-4 py-2 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono flex items-center gap-2 mx-auto tactile-btn shadow-xs"
                          aria-label={`Dengarkan pelafalan ${mp.wordA}`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>Dengarkan Kata A</span>
                        </button>
                      </div>

                      <div className="p-6 rounded-3xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">Kata B:</span>
                        <h3 className="text-4xl font-serif text-[#1E1B17]">{mp.wordB}</h3>
                        <span className="font-mono text-xs text-[#535841] block">{mp.ipaB}</span>
                        <p className="text-xs text-[#38332A]">{mp.meaningB}</p>
                        <button
                          onClick={() => playNativeAudio(mp.wordB)}
                          className="px-4 py-2 rounded-2xl bg-[#535841] hover:bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono flex items-center gap-2 mx-auto tactile-btn shadow-xs"
                          aria-label={`Dengarkan pelafalan ${mp.wordB}`}
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>Dengarkan Kata B</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-[#7A7265] uppercase font-semibold">
                          Kalimat Kontras Pembanding:
                        </span>
                        <button 
                          onClick={() => playNativeAudio(mp.contrastContext)} 
                          className="text-[#7A7265] hover:text-[#1E1B17] tactile-btn"
                          aria-label="Dengarkan kalimat kontras"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-serif text-base text-[#1E1B17] italic">"{mp.contrastContext}"</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ───────────── WORKSPACE 7: OXFORD 3000 SRS LAB ───────────── */}
          {activeHub === 'oxford3000' && (
            <div className="h-full grid grid-cols-12 overflow-hidden">
              <aside className="hidden md:flex md:col-span-4 lg:col-span-3 bg-[#E8E2D6] border-r border-[#C8C0B0] flex-col h-full overflow-hidden p-4 space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#7A7265] uppercase tracking-wider block font-semibold">
                    American Oxford 3000 (SRS Studio)
                  </span>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#7A7265] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={oxfordSearch}
                      onChange={(e) => {
                        setOxfordSearch(e.target.value);
                        setOxfordIndex(0);
                      }}
                      placeholder="Cari kata atau arti..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                    />
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {['all', 'A1', 'A2', 'B1', 'B2', 'C1'].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => {
                          setOxfordCefrFilter(lvl);
                          setOxfordIndex(0);
                        }}
                        className={clsx(
                          'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all',
                          oxfordCefrFilter === lvl
                            ? 'bg-[#1E1B17] text-[#EFE9DF]'
                            : 'bg-[#DDD7CA] text-[#7A7265] hover:text-[#1E1B17]'
                        )}
                      >
                        {lvl === 'all' ? 'Semua CEFR' : lvl}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    <button
                      onClick={() => { setOxfordSrsFilter('all'); setOxfordIndex(0); }}
                      className={clsx(
                        'px-2.5 py-1 rounded-xl text-[9px] font-mono transition-all',
                        oxfordSrsFilter === 'all' ? 'bg-[#1E1B17] text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#7A7265]'
                      )}
                    >
                      Semua ({OXFORD_3000_VOCABULARY.length})
                    </button>
                    <button
                      onClick={() => { setOxfordSrsFilter('due'); setOxfordIndex(0); }}
                      className={clsx(
                        'px-2.5 py-1 rounded-xl text-[9px] font-mono transition-all flex items-center gap-1',
                        oxfordSrsFilter === 'due' ? 'bg-[#A84A28] text-white' : 'bg-[#DDD7CA] text-[#A84A28]'
                      )}
                    >
                      <Clock className="w-2.5 h-2.5" />
                      <span>Review Hari Ini</span>
                    </button>
                    <button
                      onClick={() => { setOxfordSrsFilter('box4'); setOxfordIndex(0); }}
                      className={clsx(
                        'px-2.5 py-1 rounded-xl text-[9px] font-mono transition-all flex items-center gap-1',
                        oxfordSrsFilter === 'box4' ? 'bg-[#535841] text-white' : 'bg-[#DDD7CA] text-[#535841]'
                      )}
                    >
                      <Check className="w-2.5 h-2.5" />
                      <span>Mastered (Box 4)</span>
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                  {filteredOxfordList.slice(0, 120).map((item) => {
                    const isSelected = item.id === currentOxfordWord?.id;
                    const wordSrs = srsDeck[item.id] || { box: 1 };

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          const actualIdx = filteredOxfordList.findIndex((w) => w.id === item.id);
                          setOxfordIndex(actualIdx >= 0 ? actualIdx : 0);
                          setUserMeaningInput('');
                          setMeaningFeedback(null);
                        }}
                        className={clsx(
                          'w-full text-left p-2.5 rounded-2xl text-xs transition-all flex items-center justify-between gap-2',
                          isSelected
                            ? 'bg-[#1E1B17] text-[#EFE9DF] shadow-xs font-medium'
                            : 'bg-[#E2DCD0]/60 hover:bg-[#DDD7CA] text-[#38332A]'
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm">{item.word}</span>
                          <span className={clsx(
                            'font-mono text-[9px] px-1.5 py-0.5 rounded-sm',
                            isSelected ? 'bg-white/20 text-[#EFE9DF]' : 'bg-[#DDD7CA] text-[#7A7265]'
                          )}>
                            {item.cefr}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 font-mono text-[9px]">
                          <span className={clsx(
                            'px-1.5 py-0.5 rounded',
                            wordSrs.box === 4 ? 'bg-[#535841]/20 text-[#535841]' : 'bg-black/05 text-[#7A7265]'
                          )}>
                            Box {wordSrs.box}
                          </span>
                        </div>
                      </button>
                    );
                  })}

                  {filteredOxfordList.length > 120 && (
                    <div className="p-2 text-center text-[10px] font-mono text-[#7A7265]">
                      Menampilkan 120 dari {filteredOxfordList.length} kata
                    </div>
                  )}
                </div>
              </aside>

              <section className="col-span-12 md:col-span-8 lg:col-span-9 bg-[#EFE9DF] overflow-y-auto h-full p-4 sm:p-8 pb-28 md:pb-8 flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8 my-auto">
                  <div className="p-5 sm:p-8 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-sm space-y-5 sm:space-y-6 text-center">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-3 py-1 rounded-md uppercase font-semibold">
                          CEFR {currentOxfordWord?.cefr}
                        </span>
                        <span className="font-mono text-xs bg-[#535841]/10 text-[#535841] px-2.5 py-1 rounded-md">
                          Box {currentWordSrs.box}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#7A7265]">
                        Kata {oxfordIndex + 1} dari {filteredOxfordList.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-3">
                        <h2 className="text-3xl sm:text-5xl font-serif text-[#1E1B17]">
                          {currentOxfordWord?.word}
                        </h2>
                        <button
                          onClick={() => playNativeAudio(currentOxfordWord?.word)}
                          className="p-2.5 rounded-full bg-[#DDD7CA] hover:bg-[#A84A28] text-[#1E1B17] hover:text-[#EFE9DF] transition-all shadow-xs tactile-btn"
                          title="Dengarkan pengucapan asli Amerika"
                        >
                          <Volume2 className="w-4 sm:w-5 h-4 sm:h-5" />
                        </button>
                      </div>

                      <div className="font-mono text-xs text-[#7A7265] flex items-center justify-center gap-2">
                        <span>{currentOxfordWord?.partOfSpeech}</span>
                        <span>·</span>
                        <span className="text-[#A84A28]">{currentOxfordWord?.ipa}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs sm:text-sm text-[#38332A] italic flex items-center justify-between gap-3">
                      <span>"{currentOxfordWord?.exampleSentence}"</span>
                      <button
                        onClick={() => playNativeAudio(currentOxfordWord?.exampleSentence)}
                        className="text-[#7A7265] hover:text-[#1E1B17] shrink-0"
                        title="Dengarkan kalimat"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleCheckOxfordMeaning} className="space-y-3 pt-2">
                      <div className="text-left">
                        <label className="font-mono text-[11px] uppercase tracking-wider text-[#7A7265] font-semibold block mb-1.5">
                          Ketik Arti / Makna Kata dalam Bahasa Indonesia:
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={userMeaningInput}
                            onChange={(e) => {
                              setUserMeaningInput(e.target.value);
                              setMeaningFeedback(null);
                            }}
                            placeholder="contoh: menghasilkan, membuat, membuktikan..."
                            className="flex-1 px-4 py-2.5 text-base sm:text-sm bg-[#DDD7CA] border border-[#C8C0B0] rounded-2xl outline-hidden focus:border-[#A84A28] text-[#1E1B17] shadow-xs"
                          />
                          <button
                            type="submit"
                            className="px-5 sm:px-6 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-all tactile-btn shadow-xs shrink-0 flex items-center gap-1.5 min-h-[44px]"
                          >
                            <span>Periksa</span>
                            <kbd className="hidden sm:inline text-[9px] bg-white/20 px-1.5 py-0.5 rounded font-mono">↵</kbd>
                          </button>
                        </div>
                      </div>
                    </form>

                    {meaningFeedback && (
                      <div className={clsx(
                        'p-4 sm:p-5 rounded-2xl border text-left space-y-3 sm:space-y-4 animate-in fade-in duration-200',
                        meaningFeedback.isCorrect
                          ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]'
                          : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                      )}>
                        <div className="flex items-center gap-2 text-xs font-semibold">
                          {meaningFeedback.isCorrect ? (
                            <>
                              <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                              <span>Jawaban Tepat! Kata ini dipromosikan di antrean memori.</span>
                            </>
                          ) : (
                            <>
                              <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                              <span>Kurang tepat. Tinjau arti baku di bawah ini:</span>
                            </>
                          )}
                        </div>

                        <div className="space-y-1.5 text-xs pt-2 border-t border-[#C8C0B0]/60">
                          <div>
                            <strong className="text-[#1E1B17]">Arti Indonesia:</strong>{' '}
                            <span className="text-[#38332A]">{currentOxfordWord?.meaningId}</span>
                          </div>
                          <div>
                            <strong className="text-[#1E1B17]">Definisi Inggris:</strong>{' '}
                            <span className="text-[#7A7265] italic">{currentOxfordWord?.meaningEn}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#C8C0B0]/60">
                          <span className="font-mono text-[10px] uppercase text-[#7A7265] block mb-1">
                            Kolokasi Baku:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {currentOxfordWord?.collocations.map((col, cIdx) => (
                              <span
                                key={cIdx}
                                className="text-[10px] font-mono bg-[#DDD7CA] px-2 py-0.5 rounded-md border border-[#C8C0B0] text-[#1E1B17]"
                              >
                                {col}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#C8C0B0]/60 space-y-2">
                          <span className="font-mono text-[10px] uppercase text-[#7A7265] block">
                            Tentukan Interval Pengulangan Memori (SRS):
                          </span>
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              onClick={() => { handleRateSrs(currentOxfordWord.id, 1); handleNextOxfordWord(); }}
                              className="p-2.5 rounded-xl bg-[#A84A28]/20 hover:bg-[#A84A28] hover:text-white text-[#1E1B17] font-mono text-[10px] transition-colors tactile-btn min-h-[44px]"
                            >
                              Lupa (Besok)
                            </button>
                            <button
                              onClick={() => { handleRateSrs(currentOxfordWord.id, 2); handleNextOxfordWord(); }}
                              className="p-2.5 rounded-xl bg-[#DDD7CA] hover:bg-[#1E1B17] hover:text-white text-[#1E1B17] font-mono text-[10px] transition-colors tactile-btn min-h-[44px]"
                            >
                              Ragu (3 Hari)
                            </button>
                            <button
                              onClick={() => { handleRateSrs(currentOxfordWord.id, 4); handleNextOxfordWord(); }}
                              className="p-2.5 rounded-xl bg-[#535841]/20 hover:bg-[#535841] hover:text-white text-[#1E1B17] font-mono text-[10px] transition-colors tactile-btn min-h-[44px]"
                            >
                              Mantap (Box 4)
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      onClick={handlePrevOxfordWord}
                      className="px-3.5 sm:px-5 py-2.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-xs font-mono text-[#1E1B17] hover:bg-[#DDD7CA] flex items-center gap-1.5 tactile-btn min-h-[42px]"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Sebelumnya</span>
                    </button>

                    <button
                      onClick={handleRandomOxfordWord}
                      className="p-2.5 rounded-2xl bg-[#E6E0D4] border border-[#C8C0B0] text-[#7A7265] hover:text-[#1E1B17] transition-colors tactile-btn min-h-[42px]"
                      title="Acak kata"
                    >
                      <Shuffle className="w-4 h-4" />
                    </button>

                    <button
                      onClick={handleNextOxfordWord}
                      className="px-3.5 sm:px-5 py-2.5 rounded-2xl bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono flex items-center gap-1.5 transition-colors tactile-btn min-h-[42px]"
                    >
                      <span>Selanjutnya</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ───────────── WORKSPACE 8: MISTAKE VAULT ───────────── */}
          {activeHub === 'vault' && (
            <div className="h-full max-w-4xl mx-auto p-4 sm:p-8 overflow-y-auto space-y-6 pb-28 md:pb-8">
              <div className="space-y-2 pb-6 border-b border-[#C8C0B0]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A84A28] font-semibold">
                  Personal Weakness Re-tester & Mastery Loop
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[#1E1B17]">
                  Mistake Vault: Bank Khilaf & Analisis Pola Kesalahan
                </h2>
                <p className="text-xs sm:text-sm text-[#7A7265]">
                  Setiap pertanyaan, kolokasi, preposisi, atau latihan kalimat yang pernah Anda jawab kurang tepat akan terkumpul otomatis di sini. Uji ulang sampai tuntas untuk menutup celah kelemahan gramatikal.
                </p>
              </div>

              {mistakeVault.length === 0 ? (
                <div className="p-8 sm:p-12 text-center bg-[#E6E0D4] rounded-3xl border border-[#C8C0B0] space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#535841] mx-auto" />
                  <h3 className="font-serif text-lg text-[#1E1B17]">Mistake Vault Kosong!</h3>
                  <p className="text-xs text-[#7A7265] max-w-md mx-auto">
                    Semua soal latihan yang Anda kerjakan telah terjawab dengan benar, atau Anda telah menyelesaikan seluruh sesi perbaikan.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Personal Error Pattern Visualizer (Zero AI, Pure SVG) */}
                  {(() => {
                    const totalMistakes = mistakeVault.length;
                    const quizCount = mistakeVault.filter(m => m.type === 'quiz').length;
                    const doctorCount = mistakeVault.filter(m => m.type === 'doctor').length;
                    const collocationCount = mistakeVault.filter(m => m.type === 'collocation').length;
                    const prepCount = mistakeVault.filter(m => m.type === 'prep').length;

                    const quizPct = Math.round((quizCount / totalMistakes) * 100);
                    const doctorPct = Math.round((doctorCount / totalMistakes) * 100);
                    const colPct = Math.round((collocationCount / totalMistakes) * 100);
                    const prepPct = Math.round((prepCount / totalMistakes) * 100);

                    return (
                      <div className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-mono text-[10px] text-[#7A7265] uppercase tracking-wider block font-semibold">
                              Analisis Frekuensi & Pola Kelemahan
                            </span>
                            <h3 className="font-serif text-lg text-[#1E1B17] font-semibold">
                              Distribusi {totalMistakes} Catatan Kesalahan
                            </h3>
                          </div>
                          <BarChart2 className="w-5 h-5 text-[#A84A28]" />
                        </div>

                        {/* Stacked Percentage Bar */}
                        <div className="w-full h-3.5 bg-[#DDD7CA] rounded-full overflow-hidden flex border border-[#C8C0B0]/60">
                          {quizPct > 0 && <div style={{ width: `${quizPct}%` }} className="bg-[#A84A28] h-full" title={`Grammar/Quiz: ${quizPct}%`} />}
                          {colPct > 0 && <div style={{ width: `${colPct}%` }} className="bg-[#535841] h-full" title={`Kolokasi/Diksi: ${colPct}%`} />}
                          {prepPct > 0 && <div style={{ width: `${prepPct}%` }} className="bg-[#7A7265] h-full" title={`Preposisi: ${prepPct}%`} />}
                          {doctorPct > 0 && <div style={{ width: `${doctorPct}%` }} className="bg-[#1E1B17] h-full" title={`Sintaksis/Doctor: ${doctorPct}%`} />}
                        </div>

                        {/* Legend */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-xs font-mono">
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#A84A28]" />
                            <span>Grammar ({quizCount})</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#535841]" />
                            <span>Kolokasi ({collocationCount})</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#7A7265]" />
                            <span>Preposisi ({prepCount})</span>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#DDD7CA] border border-[#C8C0B0] flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#1E1B17]" />
                            <span>Sintaksis ({doctorCount})</span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="space-y-4">
                    {mistakeVault.map((item) => {
                      const isReQuizzing = vaultReQuizId === item.id;

                      const handleCheckReQuiz = (e: React.FormEvent) => {
                        e.preventDefault();
                        const cleanInput = vaultReQuizAnswer.trim().toLowerCase().replace(/[.\s]+/g, ' ');
                        const cleanCorrect = item.correctAnswer.trim().toLowerCase().replace(/[.\s]+/g, ' ');
                        const isMatch = cleanInput === cleanCorrect;
                        setVaultReQuizFeedback({ checked: true, isCorrect: isMatch });
                      };

                      return (
                        <div key={item.id} className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-xs space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs bg-[#A84A28]/10 text-[#A84A28] px-2.5 py-0.5 rounded-full font-semibold">
                                {item.type === 'quiz' ? 'Pilihan Ganda' : item.type === 'doctor' ? 'Bedah Kalimat' : item.type === 'collocation' ? 'Kolokasi & Diksi' : 'Preposisi'}
                              </span>
                              {item.timesMissed && item.timesMissed > 1 && (
                                <span className="font-mono text-[10px] bg-[#A84A28] text-white px-2 py-0.5 rounded-full font-bold">
                                  Salah {item.timesMissed}x
                                </span>
                              )}
                              <span className="text-xs text-[#7A7265]">{item.title}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => {
                                  if (isReQuizzing) {
                                    setVaultReQuizId(null);
                                    setVaultReQuizAnswer('');
                                    setVaultReQuizFeedback(null);
                                  } else {
                                    setVaultReQuizId(item.id);
                                    setVaultReQuizAnswer('');
                                    setVaultReQuizFeedback(null);
                                  }
                                }}
                                className="text-xs font-mono text-[#A84A28] hover:underline flex items-center gap-1 tactile-btn"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>{isReQuizzing ? 'Tutup Uji Ulang' : 'Uji Ulang'}</span>
                              </button>
                              <button
                                onClick={() => handleRemoveFromVault(item.id)}
                                className="text-xs font-mono text-[#535841] hover:underline flex items-center gap-1 tactile-btn"
                              >
                                <Check className="w-3.5 h-3.5" />
                                <span>Sudah Paham (Hapus)</span>
                              </button>
                            </div>
                          </div>

                          <p className="text-sm font-serif font-medium text-[#1E1B17]">
                            "{item.question}"
                          </p>

                          {/* Re-Quiz Interactive Flow */}
                          {isReQuizzing ? (
                            <form onSubmit={handleCheckReQuiz} className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-3 animate-in fade-in duration-200">
                              <span className="font-mono text-[10px] text-[#7A7265] uppercase block font-semibold">
                                Coba Jawab Ulang Secara Mandiri:
                              </span>
                              <input
                                type="text"
                                value={vaultReQuizAnswer}
                                onChange={(e) => {
                                  setVaultReQuizAnswer(e.target.value);
                                  setVaultReQuizFeedback(null);
                                }}
                                placeholder="Ketik jawaban / opsi yang benar..."
                                className="w-full p-2.5 text-xs bg-[#E6E0D4] border border-[#C8C0B0] rounded-xl outline-hidden focus:border-[#A84A28] text-[#1E1B17]"
                              />
                              <div className="flex items-center justify-between">
                                <button
                                  type="submit"
                                  className="px-4 py-2 rounded-xl bg-[#1E1B17] text-[#EFE9DF] text-xs font-mono font-medium tactile-btn"
                                >
                                  Verifikasi Jawaban
                                </button>
                              </div>

                              {vaultReQuizFeedback && (
                                <div className={clsx(
                                  'p-3 rounded-xl border text-xs space-y-1.5 animate-in fade-in',
                                  vaultReQuizFeedback.isCorrect ? 'bg-[#535841]/10 border-[#535841]/30 text-[#1E1B17]' : 'bg-[#A84A28]/10 border-[#A84A28]/30 text-[#1E1B17]'
                                )}>
                                  <div className="flex items-center justify-between">
                                    <span className="font-bold flex items-center gap-1.5">
                                      {vaultReQuizFeedback.isCorrect ? (
                                        <>
                                          <CheckCircle2 className="w-4 h-4 text-[#535841]" />
                                          <span>Luar Biasa! Jawaban Anda Benar.</span>
                                        </>
                                      ) : (
                                        <>
                                          <HelpCircle className="w-4 h-4 text-[#A84A28]" />
                                          <span>Masih Kurang Tepat. Kunci: {item.correctAnswer}</span>
                                        </>
                                      )}
                                    </span>
                                    {vaultReQuizFeedback.isCorrect && (
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveFromVault(item.id)}
                                        className="px-3 py-1 rounded-lg bg-[#535841] text-[#EFE9DF] text-[10px] font-mono font-medium tactile-btn"
                                      >
                                        Hapus dari Vault
                                      </button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </form>
                          ) : (
                            <>
                              <div className="p-3 rounded-2xl bg-[#A84A28]/10 border border-[#A84A28]/20 text-xs text-[#1E1B17]">
                                {item.prompt}
                              </div>

                              <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs space-y-1">
                                <p><strong>Kunci Jawaban Baku:</strong> {item.correctAnswer}</p>
                                <p className="text-[#524C42] leading-relaxed"><strong>Pembahasan:</strong> {item.explanation}</p>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ───────────── WORKSPACE 9: DIAGNOSTIC MATRIX ───────────── */}
          {activeHub === 'diagnostic' && (
            <div className="h-full max-w-4xl mx-auto p-4 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 pb-28 md:pb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#C8C0B0]">
                <div className="space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#A84A28] font-semibold">
                    Comprehensive Diagnostic Evaluation & Weakness Radar
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#1E1B17]">
                    Diagnostic Matrix: Uji Kesiapan Tata Bahasa
                  </h2>
                  <p className="text-xs sm:text-sm text-[#7A7265]">
                    Evaluasi presisi {allDiagnosticQuestions.length} pertanyaan lintas kategori untuk memetakan kekuatan dan titik lemah gramatikalmu.
                  </p>
                </div>

                {/* Diagnostic Timer Controls */}
                <div className="flex flex-wrap items-center gap-2 bg-[#DDD7CA] p-1.5 rounded-2xl border border-[#C8C0B0] self-start sm:self-auto shrink-0">
                  <span className="font-mono text-[10px] text-[#7A7265] uppercase px-2 font-semibold flex items-center gap-1">
                    <Timer className="w-3 h-3 text-[#A84A28]" />
                    <span>Timer:</span>
                  </span>
                  {[
                    { label: 'Bebas', seconds: null },
                    { label: '30m', seconds: 1800 },
                    { label: '60m', seconds: 3600 },
                  ].map(tm => (
                    <button
                      key={tm.label}
                      onClick={() => {
                        setDiagnosticTimerMode(tm.seconds);
                        setDiagnosticTimerSeconds(tm.seconds);
                      }}
                      className={clsx(
                        'px-2.5 py-1 rounded-xl text-[10px] font-mono transition-all tactile-btn',
                        diagnosticTimerMode === tm.seconds ? 'bg-[#1E1B17] text-[#EFE9DF] font-bold' : 'text-[#7A7265] hover:text-[#1E1B17]'
                      )}
                    >
                      {tm.label}
                    </button>
                  ))}
                  {diagnosticTimerSeconds !== null && (
                    <span className="font-mono text-xs font-bold text-[#A84A28] px-2 py-0.5 bg-[#A84A28]/10 rounded-lg">
                      {Math.floor(diagnosticTimerSeconds / 60)}:{String(diagnosticTimerSeconds % 60).padStart(2, '0')}
                    </span>
                  )}
                </div>
              </div>

              {diagnosticSubmitted && (
                <div className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] shadow-md space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#C8C0B0]">
                    <div>
                      <span className="font-mono text-xs text-[#7A7265] uppercase">Skor Diagnostik Global:</span>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B17]">
                        {diagnosticAnalytics.percentage}% ({diagnosticAnalytics.correctTotal} / {diagnosticAnalytics.total} Benar)
                      </h3>
                    </div>
                    <button
                      onClick={handleResetDiagnostic}
                      className="px-4 py-2 rounded-2xl bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 text-xs font-mono text-[#1E1B17] border border-[#C8C0B0] tactile-btn min-h-[40px] flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Uji Ulang Tes</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <span className="font-mono text-xs uppercase text-[#1E1B17] font-semibold block">
                      Matriks Kompetensi per Kategori:
                    </span>
                    
                    <div className="space-y-3">
                      {Object.entries(diagnosticAnalytics.categoryStats).map(([catName, stats]) => {
                        const catPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                        const isWeak = catPct < 70;

                        return (
                          <div key={catName} className="p-4 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-[#1E1B17]">{catName}</span>
                              <div className="flex items-center gap-2">
                                <span className={clsx(
                                  'font-mono px-2 py-0.5 rounded text-[10px] font-semibold',
                                  catPct >= 80 ? 'bg-[#535841]/20 text-[#535841]' : isWeak ? 'bg-[#A84A28]/20 text-[#A84A28]' : 'bg-black/05 text-[#1E1B17]'
                                )}>
                                  {catPct >= 80 ? 'Solid / Siap Ujian' : isWeak ? 'Titik Lemah Kritis' : 'Perlu Penguatan'} ({catPct}%)
                                </span>
                              </div>
                            </div>

                            <div className="w-full h-2 bg-[#C8C0B0]/60 rounded-full overflow-hidden">
                              <div
                                className={clsx(
                                  'h-full transition-all duration-500',
                                  catPct >= 80 ? 'bg-[#535841]' : isWeak ? 'bg-[#A84A28]' : 'bg-[#1E1B17]'
                                )}
                                style={{ width: `${catPct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                {allDiagnosticQuestions.map((q, idx) => {
                  const userSelected = diagnosticAnswers[q.id];
                  const isCorrect = userSelected === q.correctAnswer;

                  return (
                    <div
                      key={q.id}
                      className="p-5 sm:p-6 rounded-3xl bg-[#E6E0D4] border border-[#C8C0B0] space-y-4 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-[#7A7265]">Soal {idx + 1}</span>
                          <span className="font-mono text-[10px] bg-[#DDD7CA] text-[#7A7265] px-2 py-0.5 rounded">
                            {q.category}
                          </span>
                        </div>
                        {diagnosticSubmitted && (
                          <span className={clsx(
                            'text-xs font-mono font-medium',
                            isCorrect ? 'text-[#535841]' : 'text-[#A84A28]'
                          )}>
                            {isCorrect ? 'Benar' : 'Salah'}
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-medium text-[#1E1B17]">
                        {q.question}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {q.options?.map((opt, oIdx) => {
                          const isThisSelected = userSelected === opt;
                          const isThisCorrect = opt === q.correctAnswer;

                          let btnStyle = 'bg-[#DDD7CA] hover:bg-[#DDD7CA]/80 border-[#C8C0B0] text-[#38332A]';

                          if (diagnosticSubmitted) {
                            if (isThisCorrect) {
                              btnStyle = 'bg-[#535841]/20 border-[#535841]/50 text-[#1E1B17] font-medium';
                            } else if (isThisSelected && !isThisCorrect) {
                              btnStyle = 'bg-[#A84A28]/20 border-[#A84A28]/40 text-[#1E1B17]';
                            }
                          } else if (isThisSelected) {
                            btnStyle = 'bg-[#1E1B17] text-[#EFE9DF] border-[#1E1B17]';
                          }

                          return (
                            <button
                              key={oIdx}
                              onClick={() => {
                                if (!diagnosticSubmitted) {
                                  handleSelectDiagnosticAnswer(q.id, opt);
                                }
                              }}
                              className={clsx(
                                'p-3.5 rounded-2xl border text-xs text-left transition-all tactile-btn min-h-[44px]',
                                btnStyle
                              )}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {diagnosticSubmitted && (
                        <div className="p-3.5 rounded-2xl bg-[#DDD7CA] border border-[#C8C0B0] text-xs text-[#7A7265] space-y-1">
                          <span className="font-mono text-[#A84A28] block font-semibold">
                            Penjelasan & Kaidah:
                          </span>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!diagnosticSubmitted && (
                <div className="pt-4 pb-8 flex justify-end">
                  <button
                    onClick={handleSubmitDiagnostic}
                    className="px-8 py-3.5 rounded-full bg-[#1E1B17] hover:bg-[#A84A28] text-[#EFE9DF] text-xs font-mono font-medium transition-colors shadow-sm tactile-btn min-h-[44px]"
                  >
                    Kumpulkan Lembar Jawaban Diagnostik
                  </button>
                </div>
              )}
            </div>
          )}
        </main>

        {/* ───────────── MOBILE BOTTOM BAR (IPHONE 13 OPTIMIZED) ───────────── */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 glass-header border-t border-[#C8C0B0] flex items-center justify-around py-1.5 px-2 pb-safe bg-[#E6E0D4]/95 backdrop-blur-md">
          <button
            onClick={() => handleNavSelect('curriculum')}
            className={clsx(
              'flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all tactile-btn min-w-[52px]',
              activeHub === 'curriculum' ? 'text-[#A84A28] font-bold' : 'text-[#7A7265]'
            )}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[9px] font-mono">Modul</span>
          </button>

          <button
            onClick={() => handleNavSelect('practice')}
            className={clsx(
              'flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all tactile-btn min-w-[52px]',
              activeHub === 'practice' ? 'text-[#A84A28] font-bold' : 'text-[#7A7265]'
            )}
          >
            <ListCheck className="w-4 h-4" />
            <span className="text-[9px] font-mono">Latihan</span>
          </button>

          <button
            onClick={() => handleNavSelect('collocations')}
            className={clsx(
              'flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all tactile-btn min-w-[52px]',
              activeHub === 'collocations' ? 'text-[#A84A28] font-bold' : 'text-[#7A7265]'
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[9px] font-mono">Diksi</span>
          </button>

          <button
            onClick={() => handleNavSelect('matrices')}
            className={clsx(
              'flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all tactile-btn min-w-[52px]',
              activeHub === 'matrices' ? 'text-[#A84A28] font-bold' : 'text-[#7A7265]'
            )}
          >
            <Table className="w-4 h-4" />
            <span className="text-[9px] font-mono">Matriks</span>
          </button>

          <button
            onClick={() => setIsNavOpen(true)}
            className="flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all tactile-btn min-w-[52px] text-[#7A7265]"
          >
            <Menu className="w-4 h-4" />
            <span className="text-[9px] font-mono">Menu</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
