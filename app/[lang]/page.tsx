import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Language, translations, languages } from '@/lib/i18n';
import { getArtworks } from '@/lib/getArtworks';
import { generateSEO, pageSEO } from '@/lib/seo';
import HeroParallax from '@/components/HeroParallax';

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
  const seo = pageSEO.home[language];

  return generateSEO({
    ...seo,
    ogImage: '/images/bodegones/bodegon_big.jpg',
  }, language);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = (lang === 'en' || lang === 'es' ? lang : 'en') as Language;
  const t = translations[language];

  // Get featured artworks
  const allArtworks = getArtworks();
  const bodegones = allArtworks.filter(a => a.category === 'bodegones');
  const retratos = allArtworks.filter(a => a.category === 'retratos');

  const featuredArtworks = [
    allArtworks.find(a => a.filename === 'bodegon_1_big') || bodegones[0],
    allArtworks.find(a => a.filename === 'flores') || bodegones[1],
    allArtworks.find(a => a.filename === 'bodegon_2_big') || bodegones[2],
    allArtworks.find(a => a.filename === 'bodegon_3_big') || bodegones[3],
    allArtworks.find(a => a.filename === '2') || retratos[1],
    allArtworks.find(a => a.filename === '3') || retratos[2],
  ].filter(Boolean);

  // Hero image - bodegon_big.jpg
  const heroImage = allArtworks.find(a => a.filename === 'bodegon_big')?.path || '/images/bodegones/bodegon_big.jpg';
  const portraitPreview = allArtworks.find(a => a.filename === '4')?.path || '/images/retratos/4.jpg';

  return (
    <div className="min-h-screen">
      {/* Hero Section with Featured Image */}
      <section className="relative min-h-screen flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Background Featured Artwork with Parallax */}
        <HeroParallax imageSrc={heroImage} alt={t.home.title} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center py-20">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl text-white mb-4 animate-fade-in">
            {t.home.title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-100 mb-2">
            {t.home.subtitle}
          </p>
          <p className="text-lg sm:text-xl text-neutral-200 mb-8 sm:mb-12">
            {t.home.years}
          </p>
          <Link
            href={`/${language}/works`}
            className="inline-block bg-white text-neutral-900 px-8 sm:px-10 py-3 sm:py-4 rounded-md hover:bg-neutral-100 transition-all duration-300 font-medium text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            {t.home.viewWorks}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl text-center mb-8 text-neutral-900">
            {t.home.about}
          </h2>
          <div className="text-center text-neutral-700 text-lg leading-relaxed">
            <p>
              {language === 'en'
                ? 'Gonzalo Morales Sáurez was a distinguished Costa Rican painter whose work captured the essence of everyday beauty through masterful still life compositions and intimate portraits. His artistic legacy continues to inspire and captivate art lovers around the world.'
                : 'Gonzalo Morales Sáurez fue un distinguido pintor costarricense cuya obra capturó la esencia de la belleza cotidiana a través de magistrales composiciones de bodegones y retratos íntimos. Su legado artístico continúa inspirando y cautivando a los amantes del arte en todo el mundo.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-5xl text-center mb-16 text-neutral-900">
            {language === 'en' ? 'Featured Works' : 'Obras Destacadas'}
          </h2>

          {/* Grid of actual artwork */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {featuredArtworks.slice(0, 6).map((artwork, index) => (
              <Link
                key={artwork.id}
                href={`/${language}/works`}
                className="group relative aspect-square bg-neutral-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <img
                  src={artwork.path}
                  alt={artwork.filename}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Category Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bodegones */}
            <Link href={`/${language}/works/bodegones`} className="group relative h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={featuredArtworks[0]?.path || '/images/bodegones/bodegon_1_big.jpg'}
                alt={t.works.bodegones}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-4xl text-white mb-2">
                  {t.works.bodegones}
                </h3>
                <p className="text-neutral-200">
                  {language === 'en' ? '25 paintings' : '25 pinturas'}
                </p>
              </div>
            </Link>

            {/* Retratos */}
            <Link href={`/${language}/works/retratos`} className="group relative h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <img
                src={portraitPreview}
                alt={t.works.retratos}
                className="w-full h-full object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-serif text-4xl text-white mb-2">
                  {t.works.retratos}
                </h3>
                <p className="text-neutral-200">
                  {language === 'en' ? '69 paintings' : '69 pinturas'}
                </p>
              </div>
            </Link>
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href={`/${language}/works`}
              className="inline-block bg-neutral-900 text-white px-12 py-4 rounded-md hover:bg-neutral-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t.works.allWorks} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
