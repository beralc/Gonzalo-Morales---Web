import React from 'react';
import Link from 'next/link';
import { Language, translations, languages } from '@/lib/i18n';
import { getArtworks } from '@/lib/getArtworks';
import Gallery from '@/components/Gallery';

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export default async function RetratosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language];
  const artworks = getArtworks('retratos');

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-neutral-900 mb-4 text-center">
          {t.works.retratos}
        </h1>
        <p className="text-center text-neutral-600 mb-8">
          {artworks.length} {lang === 'en' ? 'works' : 'obras'}
        </p>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href={`/${lang}/works`}
            className="px-6 py-2 border-2 border-neutral-900 text-neutral-900 rounded-md hover:bg-neutral-900 hover:text-white transition-colors font-medium"
          >
            {t.works.allWorks}
          </Link>
          <Link
            href={`/${lang}/works/bodegones`}
            className="px-6 py-2 border-2 border-neutral-900 text-neutral-900 rounded-md hover:bg-neutral-900 hover:text-white transition-colors font-medium"
          >
            {t.works.bodegones}
          </Link>
          <Link
            href={`/${lang}/works/retratos`}
            className="px-6 py-2 bg-neutral-900 text-white rounded-md font-medium"
          >
            {t.works.retratos}
          </Link>
        </div>

        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}
