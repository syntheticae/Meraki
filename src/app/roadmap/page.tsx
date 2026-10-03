'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function RoadmapPage() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/?tab=roadmap');
  }, [router]);
  return null;
}
