'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function ModulesPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=modules'); }, [router]);
  return null;
}
