'use client';

import React from 'react';
import {
  Compass,
  CheckCircle2,
  Circle,
  BookOpen,
  FlaskConical,
  BrainCircuit,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { UserRoadmapProgress, RoadmapTask } from '@/types/roadmap';
import { getActiveDayPlan } from '@/lib/roadmapEngine';
import { clsx } from 'clsx';

interface DailyMissionWidgetProps {
  roadmap: UserRoadmapProgress;
  onTabChange: (tabId: string, options?: { topicId?: string; stageIdx?: number }) => void;
  onTaskToggle: (taskId: string) => void;
}

export function DailyMissionWidget({
  roadmap,
  onTabChange,
  onTaskToggle,
}: DailyMissionWidgetProps) {
  const currentDay = getActiveDayPlan(roadmap);
  if (!currentDay) return null;

  const totalTasks = currentDay.tasks.length;
  const completedCount = currentDay.tasks.filter((t) => t.completed).length;
  const percentage = Math.round((completedCount / totalTasks) * 100);
  const isAllDone = completedCount === totalTasks;

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
    <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#141414] border border-[#CBD5E1] dark:border-white/10 shadow-xs space-y-4">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#CBD5E1] dark:border-white/10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00638E] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-[#00638E] dark:text-[#8CB9CC]">
              Misi Belajar Hari Ini · Hari {currentDay.dayNumber} dari {roadmap.totalDays}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-serif font-bold text-[#0F172A] dark:text-white">
            {currentDay.themeTitle}
          </h3>
          <p className="text-xs text-[#475569] dark:text-[#94A3B8]">
            {currentDay.phaseName} · Target: {roadmap.targetTitle}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onTabChange('roadmap')}
          className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F1F5F9] dark:bg-[#1C1C1C] hover:bg-[#00638E] hover:text-white text-xs font-mono font-semibold transition-all border border-[#CBD5E1] dark:border-white/10 cursor-pointer text-[#0F172A] dark:text-white"
        >
          <Compass className="w-3.5 h-3.5 text-[#00638E] dark:text-[#8CB9CC] group-hover:text-white" />
          <span>Buka Peta Roadmap</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Progress Metric */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#475569] dark:text-[#94A3B8]">Porsi Belajar Harian:</span>
          <span className="font-bold text-[#0F172A] dark:text-white">
            {completedCount}/{totalTasks} Tugas Selesai ({percentage}%)
          </span>
        </div>
        <div className="w-full bg-[#E2E8F0] dark:bg-white/10 rounded-full h-2 overflow-hidden">
          <div
            style={{ width: `${percentage}%` }}
            className={clsx(
              'h-full rounded-full transition-all duration-500',
              isAllDone ? 'bg-emerald-500' : 'bg-[#00638E]'
            )}
          />
        </div>
      </div>

      {/* All Done Celebration Message */}
      {isAllDone && (
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-3 animate-in fade-in">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
            <strong>Misi Hari Ini Tuntas!</strong> Porsi belajar harianmu telah terpenuhi secara seimbang.
            Kamu bisa beristirahat atau melanjutkan eksplorasi bebas di laboratorium.
          </p>
        </div>
      )}

      {/* Tasks List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {currentDay.tasks.map((task, idx) => (
          <div
            key={task.id}
            className={clsx(
              'p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 shadow-2xs',
              task.completed
                ? 'bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-500/30'
                : 'bg-[#F8FAFC] dark:bg-[#1C1C1C] border-[#CBD5E1] dark:border-white/10 hover:border-[#00638E]'
            )}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold text-[#475569] dark:text-[#8CB9CC] flex items-center gap-1.5">
                  {getTaskIcon(task.type)}
                  <span>Langkah 0{idx + 1}</span>
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-[#475569] dark:text-[#94A3B8]">
                  <Clock className="w-3 h-3 text-[#00638E]" /> {task.estimatedMinutes} mnt
                </span>
              </div>

              <div>
                <h4
                  className={clsx(
                    'text-xs font-bold font-serif leading-snug line-clamp-2',
                    task.completed
                      ? 'line-through text-[#475569] dark:text-[#94A3B8]'
                      : 'text-[#0F172A] dark:text-white'
                  )}
                >
                  {task.title}
                </h4>
                <p className="text-[11px] text-[#475569] dark:text-[#94A3B8] line-clamp-2 mt-0.5 leading-relaxed">
                  {task.subtitle}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#CBD5E1]/60 dark:border-white/10 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => onTaskToggle(task.id)}
                className="flex items-center gap-1.5 text-[11px] font-mono font-semibold transition-colors cursor-pointer text-[#475569] dark:text-[#94A3B8] hover:text-[#00638E]"
                title="Tandai selesai"
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
}
