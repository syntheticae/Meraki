'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function PracticePage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=practice'); }, [router]);
  return null;
}
