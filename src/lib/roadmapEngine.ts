/**
 * Meraki English — Smart Roadmap Algorithmic Engine
 * Pure logic engine: zero external API costs, deterministic heuristic scheduling.
 */

import {
  RoadmapTargetId,
  RoadmapPresetMeta,
  RoadmapDayPlan,
  RoadmapTask,
  UserRoadmapProgress,
} from '@/types/roadmap';
import { MERAKI_CURRICULUM } from '@/data/meraki-data';

export const ROADMAP_PRESETS: RoadmapPresetMeta[] = [
  {
    id: 'foundation-30',
    title: 'Fondasi Cepat (30 Hari)',
    badge: 'Basic to Intermediate',
    durationDays: 30,
    estimatedHours: 15,
    description: 'Pola kalimat dasar, 16 tenses esensial, fonetik pengucapan IPA baku, dan 300 kosakata Oxford teratas.',
    targetAudience: 'Pemula atau pembelajar yang ingin memperbaiki dasar grammar & speaking dari nol.',
    accentColor: '#00638E',
  },
  {
    id: 'ielts-60',
    title: 'IELTS Academic Master (60 Hari)',
    badge: 'Target Band 6.5 - 7.5+',
    durationDays: 60,
    estimatedHours: 35,
    description: 'Tata bahasa tingkat lanjut, Academic Collocations List (ACL), teknik esai Task 1 & 2, serta strategi soal.',
    targetAudience: 'Calon penerima beasiswa (LPDP, AAS, Chevening) & pendaftar universitas luar negeri.',
    accentColor: '#004A6B',
  },
  {
    id: 'toefl-60',
    title: 'TOEFL iBT Target 90+ (60 Hari)',
    badge: 'Target Skor 90 - 105+',
    durationDays: 60,
    estimatedHours: 35,
    description: 'Struktur tata bahasa formal, Academic Discussion, Integrated Writing, dan penguatan reading speed.',
    targetAudience: 'Pendaftar studi lanjutan ke AS/Kanada atau sertifikasi kerja internasional.',
    accentColor: '#0F172A',
  },
  {
    id: 'academic-writing-30',
    title: 'Professional & Academic Writing (30 Hari)',
    badge: 'Writing Specialization',
    durationDays: 30,
    estimatedHours: 18,
    description: 'Arsitektur paragraf PEEL, hedging language, nominalisasi, reduksi klausa, dan pemolesan esai.',
    targetAudience: 'Mahasiswa, akademisi, dan profesional yang perlu menulis laporan, jurnal, atau proposal bahasa Inggris.',
    accentColor: '#8CB9CC',
  },
];

/**
 * Builds day-by-day balanced syllabus (Theory + Lab/Practice + Spaced Review).
 */
export function generateRoadmap(targetId: RoadmapTargetId, cefrLevel?: string): UserRoadmapProgress {
  const preset = ROADMAP_PRESETS.find((p) => p.id === targetId) || ROADMAP_PRESETS[0];
  const totalDays = preset.durationDays;
  const days: RoadmapDayPlan[] = [];

  // Determine stage distribution depending on target
  if (targetId === 'foundation-30') {
    // 30 Days focused on Stages 1 - 5 (Modules 1 - 20) + Phonetics & Essential Vocab
    for (let day = 1; day <= totalDays; day++) {
      const phase = day <= 10 ? 1 : day <= 20 ? 2 : 3;
      const phaseName =
        phase === 1
          ? 'Fase 1: Rekonstruksi Pola Kalimat & Tata Bahasa'
          : phase === 2
          ? 'Fase 2: Penguasaan 16 Tenses & Modals'
          : 'Fase 3: Klausa Kompleks & Kelancaran Fonetik';

      // Pick curriculum module (cycling or sequential across first 20 modules)
      const moduleIdx = Math.min((day - 1) % 20, MERAKI_CURRICULUM.length - 1);
      const curMod = MERAKI_CURRICULUM[moduleIdx] || MERAKI_CURRICULUM[0];

      // Lab assignment
      let labTab = 'phonetics';
      let labTitle = 'Latihan Fonetik IPA & Minimal Pairs';
      let labSubtitle = 'Latih pelafalan vokal dan konsonan baku Amerika';
      if (day % 3 === 0) {
        labTab = 'syntax';
        labTitle = 'Studio Sintaksis & Struktur Klausa';
        labSubtitle = 'Eksplorasi pembentukan klausa bertingkat';
      } else if (day % 3 === 1) {
        labTab = 'practice';
        labTitle = 'Sesi Bedah Soal & Kuis Interaktif';
        labSubtitle = `Uji pemahaman materi: ${curMod.title}`;
      }

      const tasks: RoadmapTask[] = [
        {
          id: `task_d${day}_theory`,
          type: 'module',
          title: `Bab ${String(curMod.moduleNumber).padStart(2, '0')}: ${curMod.title}`,
          subtitle: curMod.subtitle,
          estimatedMinutes: 9,
          targetTab: 'modules',
          targetOptions: { topicId: curMod.id },
          completed: false,
        },
        {
          id: `task_d${day}_lab`,
          type: 'lab',
          title: labTitle,
          subtitle: labSubtitle,
          estimatedMinutes: 6,
          targetTab: labTab,
          completed: false,
        },
        {
          id: `task_d${day}_srs`,
          type: 'flashcard',
          title: 'Oxford 3000 Flashcards (10 Kata)',
          subtitle: 'Pengulangan memori spasial Leitner harian',
          estimatedMinutes: 5,
          targetTab: 'flashcards',
          completed: false,
        },
      ];

      days.push({
        dayNumber: day,
        themeTitle: `Hari ${day}: ${curMod.title}`,
        phase,
        phaseName,
        tasks,
        isCurrentDay: day === 1,
        isUnlocked: day === 1,
        isCompleted: false,
      });
    }
  } else if (targetId === 'ielts-60') {
    // 60 Days: Stages 1-10 with heavy emphasis on Academic Collocations, Task 1/2 Writing & IELTS Hub
    for (let day = 1; day <= totalDays; day++) {
      const phase = day <= 20 ? 1 : day <= 40 ? 2 : 3;
      const phaseName =
        phase === 1
          ? 'Fase 1: Grammatical Range & Precision'
          : phase === 2
          ? 'Fase 2: Academic Collocations & Task 1 Data'
          : 'Fase 3: Task 2 Architecture & Mock Strategies';

      const moduleIdx = Math.min(day - 1, MERAKI_CURRICULUM.length - 1);
      const curMod = MERAKI_CURRICULUM[moduleIdx] || MERAKI_CURRICULUM[moduleIdx % MERAKI_CURRICULUM.length];

      let labTab = 'collocations';
      let labTitle = 'Diksi ACL & Kolokasi Akademis';
      let labSubtitle = 'Kuasai kombinasi kata baku untuk mengangkat Lexical Resource';

      if (day > 30 && day % 2 === 0) {
        labTab = 'writing-pad';
        labTitle = 'Writing Studio: Task 2 Prompt Analysis';
        labSubtitle = 'Tulis draft esai argumen dengan linter kohesi';
      } else if (day % 4 === 0) {
        labTab = 'exam';
        labTitle = 'IELTS Hub: Bedah Rubrik & Simulasi';
        labSubtitle = 'Analisis skor band 7.0+ per kriteria';
      }

      const tasks: RoadmapTask[] = [
        {
          id: `task_d${day}_theory`,
          type: 'module',
          title: `Bab ${String(curMod.moduleNumber).padStart(2, '0')}: ${curMod.title}`,
          subtitle: curMod.subtitle,
          estimatedMinutes: 10,
          targetTab: 'modules',
          targetOptions: { topicId: curMod.id },
          completed: false,
        },
        {
          id: `task_d${day}_lab`,
          type: 'lab',
          title: labTitle,
          subtitle: labSubtitle,
          estimatedMinutes: 7,
          targetTab: labTab,
          completed: false,
        },
        {
          id: `task_d${day}_srs`,
          type: 'vault',
          title: 'Tinjauan Memory Vault & Kosakata AWL',
          subtitle: 'Ulangi kesalahan kuis & perkuat kosakata tingkat lanjut',
          estimatedMinutes: 5,
          targetTab: day % 2 === 0 ? 'vault' : 'vocabulary',
          completed: false,
        },
      ];

      days.push({
        dayNumber: day,
        themeTitle: `Hari ${day}: ${curMod.title}`,
        phase,
        phaseName,
        tasks,
        isCurrentDay: day === 1,
        isUnlocked: day === 1,
        isCompleted: false,
      });
    }
  } else if (targetId === 'toefl-60') {
    // 60 Days: Structure, TOEFL Reading/Listening, Integrated Writing
    for (let day = 1; day <= totalDays; day++) {
      const phase = day <= 20 ? 1 : day <= 40 ? 2 : 3;
      const phaseName =
        phase === 1
          ? 'Fase 1: Structure & Written Expression Precision'
          : phase === 2
          ? 'Fase 2: Academic Discussion & Synthesis'
          : 'Fase 3: Integrated Tasks & Test Strategies';

      const moduleIdx = Math.min(day - 1, MERAKI_CURRICULUM.length - 1);
      const curMod = MERAKI_CURRICULUM[moduleIdx] || MERAKI_CURRICULUM[moduleIdx % MERAKI_CURRICULUM.length];

      let labTab = 'syntax';
      let labTitle = 'Studio Sintaksis: Clause Identification';
      let labSubtitle = 'Kunci akurasi kalimat kompleks TOEFL structure';

      if (day > 25 && day % 2 === 0) {
        labTab = 'writing-pad';
        labTitle = 'Writing Studio: Academic Discussion Post';
        labSubtitle = 'Latih respon tertulis 100-150 kata berwaktu';
      } else if (day % 3 === 0) {
        labTab = 'exam';
        labTitle = 'TOEFL Hub: Question Pattern Breakdown';
        labSubtitle = 'Negative factual, inference, dan insertion strategy';
      }

      const tasks: RoadmapTask[] = [
        {
          id: `task_d${day}_theory`,
          type: 'module',
          title: `Bab ${String(curMod.moduleNumber).padStart(2, '0')}: ${curMod.title}`,
          subtitle: curMod.subtitle,
          estimatedMinutes: 10,
          targetTab: 'modules',
          targetOptions: { topicId: curMod.id },
          completed: false,
        },
        {
          id: `task_d${day}_lab`,
          type: 'lab',
          title: labTitle,
          subtitle: labSubtitle,
          estimatedMinutes: 7,
          targetTab: labTab,
          completed: false,
        },
        {
          id: `task_d${day}_srs`,
          type: 'flashcard',
          title: 'AWL Lexicon & Flashcard Review',
          subtitle: 'Perkuat 10 kosakata akademis TOEFL',
          estimatedMinutes: 5,
          targetTab: 'vocabulary',
          completed: false,
        },
      ];

      days.push({
        dayNumber: day,
        themeTitle: `Hari ${day}: ${curMod.title}`,
        phase,
        phaseName,
        tasks,
        isCurrentDay: day === 1,
        isUnlocked: day === 1,
        isCompleted: false,
      });
    }
  } else {
    // academic-writing-30: Stages 4, 5, 6, 7 & 10 (Complex sentences, Nominals, PEEL)
    const writingModules = MERAKI_CURRICULUM.filter(
      (m) => [4, 5, 6, 7, 10].includes(m.stageNumber)
    );

    for (let day = 1; day <= totalDays; day++) {
      const phase = day <= 10 ? 1 : day <= 20 ? 2 : 3;
      const phaseName =
        phase === 1
          ? 'Fase 1: Kalimat Kompleks & Klausa Bertingkat'
          : phase === 2
          ? 'Fase 2: Arsitektur Paragraf PEEL & Cohesion'
          : 'Fase 3: Retorika Akademis, Parafrase & Sintesis';

      const curMod = writingModules[(day - 1) % writingModules.length] || MERAKI_CURRICULUM[0];

      const tasks: RoadmapTask[] = [
        {
          id: `task_d${day}_theory`,
          type: 'module',
          title: `Bab ${String(curMod.moduleNumber).padStart(2, '0')}: ${curMod.title}`,
          subtitle: curMod.subtitle,
          estimatedMinutes: 9,
          targetTab: 'modules',
          targetOptions: { topicId: curMod.id },
          completed: false,
        },
        {
          id: `task_d${day}_lab`,
          type: 'lab',
          title: day % 2 === 0 ? 'Writing Studio & Linter' : 'Diksi Kolokasi Akademis ACL',
          subtitle: 'Praktik langsung penyusunan argumen terstruktur',
          estimatedMinutes: 8,
          targetTab: day % 2 === 0 ? 'writing-pad' : 'collocations',
          completed: false,
        },
        {
          id: `task_d${day}_srs`,
          type: 'vault',
          title: 'Evaluasi Kesalahan Diksi & Grammar Vault',
          subtitle: 'Tinjau pola kalimat yang perlu diperbaiki',
          estimatedMinutes: 5,
          targetTab: 'vault',
          completed: false,
        },
      ];

      days.push({
        dayNumber: day,
        themeTitle: `Hari ${day}: ${curMod.title}`,
        phase,
        phaseName,
        tasks,
        isCurrentDay: day === 1,
        isUnlocked: day === 1,
        isCompleted: false,
      });
    }
  }

  // Diagnostic Level Adjustment (Bypass early days if CEFR is high and target is foundation)
  let initialDayIndex = 0;
  if (cefrLevel && ['B1', 'B2', 'C1'].includes(cefrLevel) && targetId === 'foundation-30') {
    // Fast-forward first 5 basic days
    const bypassDays = cefrLevel === 'B1' ? 4 : 8;
    for (let i = 0; i < Math.min(bypassDays, days.length); i++) {
      days[i].isCompleted = true;
      days[i].tasks.forEach((t) => {
        t.completed = true;
        t.completedAt = new Date().toISOString();
      });
    }
    initialDayIndex = Math.min(bypassDays, days.length - 1);
    days.forEach((d, idx) => {
      d.isCurrentDay = idx === initialDayIndex;
      d.isUnlocked = idx <= initialDayIndex;
    });
  }

  const now = new Date().toISOString();
  return {
    targetId,
    targetTitle: preset.title,
    totalDays,
    startDate: now,
    lastActiveDate: now,
    currentDayIndex: initialDayIndex,
    days,
    diagnosticLevelAtStart: cefrLevel,
  };
}

/**
 * Marks a specific task inside the roadmap as complete and advances days if all tasks done.
 */
export function markRoadmapTaskCompleted(
  roadmap: UserRoadmapProgress,
  taskId: string
): UserRoadmapProgress {
  const updatedDays = roadmap.days.map((dayPlan) => {
    const updatedTasks = dayPlan.tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: true,
          completedAt: new Date().toISOString(),
        };
      }
      return task;
    });

    const isAllTasksCompleted = updatedTasks.every((t) => t.completed);
    return {
      ...dayPlan,
      tasks: updatedTasks,
      isCompleted: isAllTasksCompleted,
    };
  });

  // Calculate new active day
  let newCurrentDayIdx = roadmap.currentDayIndex;
  const currentDay = updatedDays[newCurrentDayIdx];

  if (currentDay && currentDay.isCompleted) {
    if (newCurrentDayIdx + 1 < updatedDays.length) {
      newCurrentDayIdx += 1;
      updatedDays[newCurrentDayIdx].isUnlocked = true;
    }
  }

  // Update isCurrentDay flags
  updatedDays.forEach((d, idx) => {
    d.isCurrentDay = idx === newCurrentDayIdx;
  });

  return {
    ...roadmap,
    days: updatedDays,
    currentDayIndex: newCurrentDayIdx,
    lastActiveDate: new Date().toISOString(),
  };
}

/**
 * Automatically detects outside-roadmap progress (e.g. user read a topic in ModulesView)
 * and marks corresponding tasks completed.
 */
export function syncRoadmapWithExternalActivity(
  roadmap: UserRoadmapProgress,
  opts: { topicId?: string; practiceDone?: boolean; flashcardDone?: boolean }
): UserRoadmapProgress {
  if (!opts.topicId && !opts.practiceDone && !opts.flashcardDone) return roadmap;

  let hasChanged = false;
  const updatedDays = roadmap.days.map((dayPlan) => {
    const updatedTasks = dayPlan.tasks.map((task) => {
      if (task.completed) return task;

      if (opts.topicId && task.type === 'module' && task.targetOptions?.topicId === opts.topicId) {
        hasChanged = true;
        return { ...task, completed: true, completedAt: new Date().toISOString() };
      }
      return task;
    });

    return {
      ...dayPlan,
      tasks: updatedTasks,
      isCompleted: updatedTasks.every((t) => t.completed),
    };
  });

  if (!hasChanged) return roadmap;

  let activeIdx = roadmap.currentDayIndex;
  while (activeIdx < updatedDays.length && updatedDays[activeIdx].isCompleted) {
    if (activeIdx + 1 < updatedDays.length) {
      activeIdx += 1;
      updatedDays[activeIdx].isUnlocked = true;
    } else {
      break;
    }
  }

  updatedDays.forEach((d, idx) => {
    d.isCurrentDay = idx === activeIdx;
  });

  return {
    ...roadmap,
    days: updatedDays,
    currentDayIndex: activeIdx,
    lastActiveDate: new Date().toISOString(),
  };
}

/**
 * Returns the current active day plan, or the first incomplete day.
 */
export function getActiveDayPlan(roadmap: UserRoadmapProgress): RoadmapDayPlan {
  return roadmap.days[roadmap.currentDayIndex] || roadmap.days[0];
}
