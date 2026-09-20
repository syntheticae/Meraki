'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function SyntaxPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=syntax'); }, [router]);
  return null;
}
