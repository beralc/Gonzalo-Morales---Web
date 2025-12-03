import React from 'react';
import Link from 'next/link';
import { Language, languages, translations } from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import CookieConsent from '@/components/CookieConsent';

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = lang as Language;
  const t = translations[language];

  return (
    <>
      <Navigation lang={language} />
      <main className="pt-20">
        {children}
      </main>
      <footer className="bg-neutral-900 text-neutral-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 - About */}
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                Gonzalo Morales Sáurez
              </h3>
              <p className="text-sm text-neutral-400">
                {language === 'en'
                  ? 'Costa Rican painter (1945-2017). Celebrating a legacy of classical art.'
                  : 'Pintor costarricense (1945-2017). Celebrando un legado de arte clásico.'
                }
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                {language === 'en' ? 'Quick Links' : 'Enlaces'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${language}/works`} className="hover:text-white transition-colors">{t.nav.works}</Link></li>
                <li><Link href={`/${language}/biography`} className="hover:text-white transition-colors">{t.nav.biography}</Link></li>
                <li><Link href={`/${language}/exhibitions`} className="hover:text-white transition-colors">{language === 'en' ? 'Exhibitions' : 'Exposiciones'}</Link></li>
                <li><Link href={`/${language}/contact`} className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
                <li><Link href={`/${language}/store`} className="hover:text-white transition-colors">{t.nav.store}</Link></li>
              </ul>
            </div>

            {/* Column 3 - Legal */}
            <div>
              <h3 className="font-serif text-xl text-white mb-4">
                {language === 'en' ? 'Legal' : 'Legal'}
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={`/${language}/privacy`} className="hover:text-white transition-colors">{language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}</Link></li>
                <li><Link href={`/${language}/terms`} className="hover:text-white transition-colors">{language === 'en' ? 'Terms & Conditions' : 'Términos y Condiciones'}</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-700 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Gonzalo Morales Sáurez Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <CookieConsent lang={language} />
    </>
  );
}
