'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();

    // Check if browser language is Spanish (es, es-ES, es-MX, etc.)
    const isSpanish = browserLang.startsWith('es');

    // Redirect to appropriate language
    const targetLang = isSpanish ? 'es' : 'en';
    router.replace(`/${targetLang}`);
  }, [router]);

  // Show loading state while detecting/redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900 mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
  );
}
