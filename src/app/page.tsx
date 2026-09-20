'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { OnboardingView } from '@/components/views/OnboardingView';
import { DashboardOverviewView } from '@/components/views/DashboardOverviewView';
import { ModulesView } from '@/components/views/ModulesView';
import { PracticeView } from '@/components/views/PracticeView';
import { MatricesView } from '@/components/views/MatricesView';
import { SyntaxView } from '@/components/views/SyntaxView';
import { CollocationsView } from '@/components/views/CollocationsView';
import { PhoneticsView } from '@/components/views/PhoneticsView';
import { FlashcardsView } from '@/components/views/FlashcardsView';
import { VocabularyView } from '@/components/views/VocabularyView';
import { WritingPadView } from '@/components/views/WritingPadView';
import { VaultView } from '@/components/views/VaultView';
import { DiagnosticView } from '@/components/views/DiagnosticView';
import { ExamView } from '@/components/views/ExamView';
import { progressRepository } from '@/services/storage';
import { useAppStore } from '@/stores/useAppStore';

// ── Tab metadata ───────────────────────────────────────────────────────────────
const TAB_META: Record<string, { category: string; title: string }> = {
  dashboard:    { category: 'Scholar Analytics',   title: 'Dashboard Progres' },
  modules:      { category: 'Kurikulum Inti',       title: 'Modul Materi (40 Bab)' },
  practice:     { category: 'Kurikulum Inti',       title: 'Latihan & Bedah Soal' },
  tracks:       { category: 'Kurikulum Inti',       title: '7 Jalur Kurikulum Tracks' },
  matrices:     { category: 'Laboratorium Bahasa',  title: 'Master Matriks Fondasi' },
  syntax:       { category: 'Laboratorium Bahasa',  title: 'Studio Sintaksis & Parafrase' },
  collocations: { category: 'Laboratorium Bahasa',  title: 'Diksi ACL & Kolokasi' },
  phonetics:    { category: 'Laboratorium Bahasa',  title: 'Fonetik IPA & Minimal Pairs' },
  flashcards:   { category: 'Laboratorium Bahasa',  title: 'Oxford 3000 SRS Flashcard' },
  vocabulary:   { category: 'Laboratorium Bahasa',  title: 'AWL Lexicon Oxford' },
  'writing-pad':{ category: 'Laboratorium Bahasa',  title: 'Writing Studio & Linter' },
  exam:         { category: 'Ujian & Evaluasi',     title: 'IELTS & TOEFL Hub' },
  vault:        { category: 'Ujian & Evaluasi',     title: 'Bank Khilaf (Mistake SRS)' },
  diagnostic:   { category: 'Ujian & Evaluasi',     title: 'Matriks Diagnostik CEFR' },
};

const VALID_TABS = new Set(Object.keys(TAB_META));

// ── Inner workstation ─────────────────────────────────────────────────────────
function WorkstationInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') ?? 'dashboard';
  const validInitial = VALID_TABS.has(initialTab) ? initialTab : 'dashboard';

  const [activeTab, setActiveTab] = useState(validInitial);
  const [modulesTopicId, setModulesTopicId] = useState<string | undefined>(undefined);
  const [onboardingDone, setOnboardingDone] = useState<boolean | null>(null); // null = loading

  const { lastViewedTopicId, hasCompletedOnboarding, setHasCompletedOnboarding } = useAppStore();

  // Check onboarding status on mount
  useEffect(() => {
    // Fast path: Zustand persisted store says done
    if (hasCompletedOnboarding) {
      setOnboardingDone(true);
      return;
    }
    // Slow path: check storage (handles first load / cleared store)
    progressRepository.getProgress().then((p) => {
      const done = p.hasCompletedOnboarding;
      if (done) setHasCompletedOnboarding(true);
      setOnboardingDone(done);
    });
  }, [hasCompletedOnboarding, setHasCompletedOnboarding]);

  // Set initial modulesTopicId from last viewed (persisted via Zustand)
  useEffect(() => {
    if (lastViewedTopicId) {
      setModulesTopicId(lastViewedTopicId);
    }
  }, [lastViewedTopicId]);

  const handleTabChange = useCallback(
    (tabId: string, opts?: { topicId?: string; stageIdx?: number }) => {
      const target = VALID_TABS.has(tabId) ? tabId : 'dashboard';
      if (opts?.topicId) setModulesTopicId(opts.topicId);
      setActiveTab(target);
      const url = target === 'dashboard' ? '/' : ('/?tab=' + target);
      window.history.pushState(null, '', url);
    },
    []
  );

  // Handle browser back/forward navigation
  useEffect(() => {
    const onPop = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab') ?? 'dashboard';
      setActiveTab(VALID_TABS.has(tab) ? tab : 'dashboard');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Loading state while checking onboarding
  if (onboardingDone === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#DFE5EA] dark:bg-[#000000]">
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: '#00638E', borderTopColor: 'transparent' }}
        />
      </div>
    );
  }

  // Onboarding gate
  if (!onboardingDone) {
    return (
      <OnboardingView
        onComplete={() => {
          setHasCompletedOnboarding(true);
          setOnboardingDone(true);
        }}
      />
    );
  }

  const meta = TAB_META[activeTab] ?? TAB_META['dashboard'];

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverviewView onTabChange={handleTabChange} />;
      case 'modules':
        return (
          <ModulesView
            initialTopicId={modulesTopicId}
            onTopicChange={setModulesTopicId}
          />
        );
      case 'practice':   return <PracticeView />;
      case 'matrices':   return <MatricesView />;
      case 'syntax':     return <SyntaxView />;
      case 'collocations': return <CollocationsView />;
      case 'phonetics':  return <PhoneticsView />;
      case 'flashcards': return <FlashcardsView />;
      case 'vocabulary': return <VocabularyView />;
      case 'writing-pad': return <WritingPadView />;
      case 'vault':      return <VaultView />;
      case 'diagnostic': return <DiagnosticView />;
      case 'exam':       return <ExamView />;
      default:           return <DashboardOverviewView onTabChange={handleTabChange} />;
    }
  };

  return (
    <>
      <AppShell
        category={meta.category}
        title={meta.title}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        {/* Tab transition wrapper — fade-in on every tab switch */}
        <div key={activeTab} className="animate-in fade-in duration-200">
          <ErrorBoundary onReset={() => setActiveTab('dashboard')}>
            {renderView()}
          </ErrorBoundary>
        </div>
      </AppShell>

      {/* Mobile bottom navigation — only shown on small screens */}
      <MobileBottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </>
  );
}

// ── Page root ──────────────────────────────────────────────────────────────────
export default function WorkstationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#DFE5EA] dark:bg-[#000000]">
          <div
            className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: '#00638E', borderTopColor: 'transparent' }}
          />
        </div>
      }
    >
      <WorkstationInner />
    </Suspense>
  );
}