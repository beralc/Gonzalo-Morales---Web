'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language, translations } from '@/lib/i18n';

interface NavigationProps {
  lang: Language;
}

export default function Navigation({ lang }: NavigationProps) {
  const pathname = usePathname();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    const currentPath = pathname.replace(`/${lang}`, '');
    return `/${newLang}${currentPath}`;
  };

  const navItems = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/works`, label: t.nav.works },
    { href: `/${lang}/biography`, label: t.nav.biography },
    { href: `/${lang}/exhibitions`, label: lang === 'en' ? 'Exhibitions' : 'Exposiciones' },
    { href: `/${lang}/contact`, label: t.nav.contact },
    { href: `/${lang}/store`, label: t.nav.store },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) {
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <Link href={`/${lang}`} className="font-serif text-xl sm:text-2xl text-neutral-900 hover:text-neutral-600 transition-colors">
            Gonzalo Morales
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-neutral-900 border-b-2 border-neutral-900'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <Link
              href={toggleLanguage()}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-3 py-1 border border-neutral-300 rounded-md"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </Link>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              href={toggleLanguage()}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-3 py-1 border border-neutral-300 rounded-md"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-600 hover:text-neutral-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
