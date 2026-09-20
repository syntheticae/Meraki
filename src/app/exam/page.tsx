'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function ExamHubPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=exam'); }, [router]);
  return null;
}
