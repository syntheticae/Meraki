'use client';

import React from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { TracksView } from '@/components/views/TracksView';

export default function LearnIndexPage() {
  return (
    <AppShell
      category="Kurikulum Tracks"
      title="Struktur Jalur Belajar Mandiri"
      activeTab="tracks"
    >
      <TracksView />
    </AppShell>
  );
}
