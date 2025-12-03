import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Language, translations, languages } from '@/lib/i18n';
import { getArtworks } from '@/lib/getArtworks';
import Gallery from '@/components/Gallery';
import { generateSEO, pageSEO } from '@/lib/seo';

export async function generateStaticParams() {
  return Object.keys(languages).map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = (lang === 'en' || lang === 'es' ? lang : 'en') as Language;
  const seo = pageSEO.works[language];

  return generateSEO(seo, language);
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language];
  const artworks = getArtworks();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-neutral-900 mb-8 text-center">
          {t.works.title}
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href={`/${lang}/works`}
            className="px-6 py-2 bg-neutral-900 text-white rounded-md font-medium"
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
            className="px-6 py-2 border-2 border-neutral-900 text-neutral-900 rounded-md hover:bg-neutral-900 hover:text-white transition-colors font-medium"
          >
            {t.works.retratos}
          </Link>
        </div>

        <Gallery artworks={artworks} />
      </div>
    </div>
  );
}
