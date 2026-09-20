'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function MatricesPage() {
  const router = useRouter();
  React.useEffect(() => { router.replace('/?tab=matrices'); }, [router]);
  return null;
}
