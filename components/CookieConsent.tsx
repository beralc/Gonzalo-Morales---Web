'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Language } from '@/lib/i18n';

interface CookieConsentProps {
  lang: Language;
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  const text = lang === 'en' ? {
    message: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
    accept: 'Accept',
    reject: 'Reject',
    learnMore: 'Learn more',
  } : {
    message: 'Utilizamos cookies para mejorar su experiencia de navegación y analizar nuestro tráfico. Al hacer clic en "Aceptar", usted acepta nuestro uso de cookies.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    learnMore: 'Más información',
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-900 text-white p-4 sm:p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm sm:text-base text-center sm:text-left">
          <p>{text.message}{' '}
            <Link href={`/${lang}/privacy`} className="underline hover:text-neutral-300">
              {text.learnMore}
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={rejectCookies}
            className="px-6 py-2 border border-white text-white rounded-md hover:bg-white hover:text-neutral-900 transition-colors"
          >
            {text.reject}
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-neutral-100 transition-colors font-medium"
          >
            {text.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
