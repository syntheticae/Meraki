'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Compass,
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  BookOpen,
  FlaskConical,
  BrainCircuit,
  Sparkles,
  Settings2,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { progressRepository } from '@/services/storage';
import { UserRoadmapProgress, RoadmapTargetId, RoadmapTask } from '@/types/roadmap';
import { TargetSelectionModal } from '@/components/roadmap/TargetSelectionModal';
import { clsx } from 'clsx';

interface RoadmapViewProps {
  onTabChange: (tabId: string, options?: { topicId?: string; stageIdx?: number }) => void;
}

export function RoadmapView({ onTabChange }: RoadmapViewProps) {
  const [roadmap, setRoadmap] = useState<UserRoadmapProgress | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeDayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    progressRepository.getRoadmap().then(setRoadmap);
  }, []);

  const totalTasks = useMemo(() => {
    if (!roadmap) return 0;
    return roadmap.days.reduce((acc, d) => acc + d.tasks.length, 0);
  }, [roadmap]);

  const completedTasksCount = useMemo(() => {
    if (!roadmap) return 0;
    return roadmap.days.reduce(
      (acc, d) => acc + d.tasks.filter((t) => t.completed).length,
      0
    );
  }, [roadmap]);

  const completedDaysCount = useMemo(() => {
    if (!roadmap) return 0;
    return roadmap.days.filter((d) => d.isCompleted).length;
  }, [roadmap]);

  const overallPercentage = totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0;

  const handleTaskToggle = async (taskId: string) => {
    const updatedUserProgress = await progressRepository.completeRoadmapTask(taskId);
    if (updatedUserProgress.roadmap) {
      setRoadmap(updatedUserProgress.roadmap);
    }
  };

  const handleSwitchTarget = async (newTargetId: RoadmapTargetId) => {
    const updated = await progressRepository.switchRoadmapTarget(newTargetId);
    if (updated.roadmap) {
      setRoadmap(updated.roadmap);
    }
    setIsModalOpen(false);
  };

  const scrollToActiveDay = () => {
    if (activeDayRef.current) {
      activeDayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!roadmap) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="p-8 text-center space-y-2 rounded-2xl bg-white dark:bg-[#141414] border border-[#CBDDE6] dark:border-white/10 shadow-xs">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin mx-auto"
            style={{ borderColor: '#00638E', borderTopColor: 'transparent' }}
          />
          <p className="text-xs font-mono text-[#334155] dark:text-[#8FA4AD]">
            Menyusun roadmap belajar personal...
          </p>
        </div>
      </div>
    );
  }

  const filteredDays = roadmap.days.filter((d) => {
    if (selectedPhase === 'all') return true;
    return d.phase === selectedPhase;
  });

  const getTaskIcon = (type: RoadmapTask['type']) => {
    switch (type) {
      case 'module':
        return <BookOpen className="w-4 h-4 text-[#00638E] dark:text-[#8CB9CC]" />;
      case 'lab':
      case 'practice':
        return <FlaskConical className="w-4 h-4 text-[#004A6B] dark:text-[#BFD8E3]" />;
      case 'flashcard':
      case 'vault':
      default:
        return <BrainCircuit className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Hero Header Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00638E] animate-pulse" />
              <span className="font-mono text-xs text-[#00638E] dark:text-[#8CB9CC] uppercase tracking-wider font-bold">
                Smart Curriculum Roadmap
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] dark:text-white">
              {roadmap.targetTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] max-w-2xl leading-relaxed">
              Jalur belajar harian terstruktur: 1 materi teori, 1 lab penguatan praktis, dan 1 sesi review memori spasial setiap hari.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={scrollToActiveDay}
              className="px-4 py-2.5 rounded-xl bg-[#00638E] text-white text-xs font-mono font-bold hover:bg-[#004A6B] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Ke Hari Aktif (Hari {roadmap.currentDayIndex + 1})</span>
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-xs font-mono font-semibold text-[#0F172A] dark:text-white hover:bg-[#E2ECF2] dark:hover:bg-[#2B2B2B] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Settings2 className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC]" />
              <span>Ganti Target Jalur</span>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="pt-2 border-t border-[#CBD5E1]/60 dark:border-white/10 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
            <span className="text-[#475569] dark:text-[#94A3B8]">
              Progres Keseluruhan: <strong>{completedDaysCount} dari {roadmap.totalDays} Hari Tuntas</strong>
            </span>
            <span className="font-bold text-[#00638E] dark:text-[#8CB9CC]">
              {completedTasksCount}/{totalTasks} Tugas Selesai ({overallPercentage}%)
            </span>
          </div>
          <div className="w-full bg-[#E2E8F0] dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
            <div
              style={{ width: `${overallPercentage}%` }}
              className="h-full rounded-full transition-all duration-700 bg-[#00638E]"
            />
          </div>
        </div>

        {/* Phase Filter Tabs */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#475569] dark:text-[#8CB9CC] mr-1 font-semibold">
            Filter Fase:
          </span>
          {[
            { id: 'all', label: `Semua Fase (${roadmap.days.length} Hari)` },
            { id: 1, label: 'Fase 1: Fondasi Inti' },
            { id: 2, label: 'Fase 2: Penguatan Struktur' },
            { id: 3, label: 'Fase 3: Akselerasi & Ujian' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedPhase(tab.id as number | 'all')}
              className={clsx(
                'px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer font-medium',
                selectedPhase === tab.id
                  ? 'bg-[#00638E] text-white font-bold shadow-xs'
                  : 'bg-[#F1F5F9] dark:bg-[#1C1C1C] border border-[#CBD5E1] dark:border-white/10 text-[#475569] dark:text-[#94A3B8] hover:text-[#00638E]'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Days Timeline Grid */}
      <div className="space-y-4">
        {filteredDays.map((dayPlan) => {
          const isCurrent = dayPlan.isCurrentDay;
          const isDone = dayPlan.isCompleted;

          return (
            <div
              key={dayPlan.dayNumber}
              ref={isCurrent ? activeDayRef : null}
              className={clsx(
                'p-5 sm:p-6 rounded-3xl border transition-all space-y-4 shadow-xs',
                isCurrent
                  ? 'bg-white dark:bg-[#141414] border-2 border-[#00638E] shadow-md ring-2 ring-[#00638E]/20'
                  : isDone
                  ? 'bg-white/80 dark:bg-[#141414]/80 border-[#CBD5E1] dark:border-white/10 opacity-95'
                  : 'bg-white/50 dark:bg-[#141414]/50 border-[#CBD5E1] dark:border-white/10'
              )}
            >
              {/* Day Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#CBD5E1] dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      'px-2.5 py-1 rounded-lg font-mono text-xs font-bold',
                      isCurrent
                        ? 'bg-[#00638E] text-white shadow-xs'
                        : isDone
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                        : 'bg-[#E2ECF2] dark:bg-white/10 text-[#004A6B] dark:text-[#BFD8E3]'
                    )}
                  >
                    Hari {String(dayPlan.dayNumber).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-base font-serif font-bold text-[#0F172A] dark:text-white">
                      {dayPlan.themeTitle}
                    </h3>
                    <p className="text-[11px] text-[#475569] dark:text-[#94A3B8] font-mono">
                      {dayPlan.phaseName}
                    </p>
                  </div>
                </div>

                <div>
                  {isDone ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Hari Selesai</span>
                    </span>
                  ) : isCurrent ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00638E]/15 text-[#00638E] dark:text-[#8CB9CC] border border-[#00638E]/30 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-[#00638E]" />
                      <span>Fokus Hari Ini</span>
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-[#475569] dark:text-[#94A3B8]">
                      Terjadwal
                    </span>
                  )}
                </div>
              </div>

              {/* Day Tasks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {dayPlan.tasks.map((task, tIdx) => (
                  <div
                    key={task.id}
                    className={clsx(
                      'p-3.5 rounded-2xl border transition-all flex flex-col justify-between space-y-3',
                      task.completed
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-500/25'
                        : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E]'
                    )}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="uppercase font-bold text-[#475569] dark:text-[#8CB9CC] flex items-center gap-1.5">
                          {getTaskIcon(task.type)}
                          <span>Langkah 0{tIdx + 1}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[#475569] dark:text-[#94A3B8]">
                          <Clock className="w-3 h-3 text-[#00638E]" /> {task.estimatedMinutes} mnt
                        </span>
                      </div>

                      <h4
                        className={clsx(
                          'text-xs font-serif font-bold leading-snug line-clamp-2',
                          task.completed
                            ? 'line-through text-[#475569] dark:text-[#94A3B8]'
                            : 'text-[#0F172A] dark:text-white'
                        )}
                      >
                        {task.title}
                      </h4>
                      <p className="text-[11px] text-[#475569] dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
                        {task.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#CBD5E1]/60 dark:border-white/10 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleTaskToggle(task.id)}
                        className="flex items-center gap-1.5 text-[11px] font-mono font-semibold transition-colors cursor-pointer text-[#475569] dark:text-[#94A3B8] hover:text-[#00638E]"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#CBD5E1] dark:text-white/20" />
                        )}
                        <span>{task.completed ? 'Selesai' : 'Centang'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onTabChange(task.targetTab, task.targetOptions)}
                        className={clsx(
                          'px-2.5 py-1 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1 cursor-pointer',
                          task.completed
                            ? 'bg-[#F1F5F9] dark:bg-white/5 text-[#475569] dark:text-[#94A3B8]'
                            : 'bg-[#00638E] text-white hover:bg-[#004A6B] shadow-xs'
                        )}
                      >
                        <span>Buka</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Target Selector Modal */}
      <TargetSelectionModal
        isOpen={isModalOpen}
        currentTargetId={roadmap.targetId}
        onClose={() => setIsModalOpen(false)}
        onSelectTarget={handleSwitchTarget}
      />
    </div>
  );
}
