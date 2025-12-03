import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Language, translations, languages } from '@/lib/i18n';
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
  const seo = pageSEO.store[language];

  return generateSEO(seo, language);
}

export default async function StorePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-neutral-900 mb-4 text-center">
          {t.store.title}
        </h1>
        <p className="text-center text-neutral-600 mb-12">
          {t.store.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Prints Card */}
          <div className="border-2 border-neutral-200 rounded-lg p-8 hover:border-neutral-900 transition-colors">
            <h2 className="font-serif text-3xl text-neutral-900 mb-4">
              {lang === 'en' ? 'Fine Art Prints' : 'Impresiones de Arte'}
            </h2>
            <p className="text-neutral-600 mb-6">
              {lang === 'en'
                ? 'High-quality giclée prints of selected works, printed on museum-grade archival paper.'
                : 'Impresiones giclée de alta calidad de obras seleccionadas, impresas en papel de archivo de grado museo.'
              }
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Museum-quality archival paper' : 'Papel de archivo de calidad museo'}
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Multiple size options available' : 'Múltiples opciones de tamaño disponibles'}
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Certificate of authenticity included' : 'Certificado de autenticidad incluido'}
              </li>
            </ul>
            <Link
              href={`/${lang}/contact`}
              className="inline-block w-full text-center bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-700 transition-colors font-medium"
            >
              {t.store.inquire}
            </Link>
          </div>

          {/* Licensing Card */}
          <div className="border-2 border-neutral-200 rounded-lg p-8 hover:border-neutral-900 transition-colors">
            <h2 className="font-serif text-3xl text-neutral-900 mb-4">
              {lang === 'en' ? 'Licensing' : 'Licencias'}
            </h2>
            <p className="text-neutral-600 mb-6">
              {lang === 'en'
                ? 'Interested in licensing Gonzalo Morales\' artwork for commercial use, publications, or exhibitions?'
                : '¿Interesado en licenciar la obra de Gonzalo Morales para uso comercial, publicaciones o exhibiciones?'
              }
            </p>
            <ul className="text-neutral-700 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Commercial reproduction rights' : 'Derechos de reproducción comercial'}
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Exhibition rights' : 'Derechos de exhibición'}
              </li>
              <li className="flex items-start">
                <span className="text-neutral-900 mr-2">•</span>
                {lang === 'en' ? 'Publication and editorial use' : 'Uso editorial y publicación'}
              </li>
            </ul>
            <Link
              href={`/${lang}/contact`}
              className="inline-block w-full text-center border-2 border-neutral-900 text-neutral-900 px-6 py-3 rounded-md hover:bg-neutral-900 hover:text-white transition-colors font-medium"
            >
              {lang === 'en' ? 'Contact for Licensing' : 'Contactar para Licencias'}
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-neutral-50 rounded-lg p-8 text-center">
          <h3 className="font-serif text-2xl text-neutral-900 mb-4">
            {lang === 'en' ? 'Custom Requests' : 'Solicitudes Personalizadas'}
          </h3>
          <p className="text-neutral-700 mb-6">
            {lang === 'en'
              ? 'Have a specific size in mind or a special request? We\'re happy to work with you to create the perfect piece for your space.'
              : '¿Tiene un tamaño específico en mente o una solicitud especial? Estamos felices de trabajar con usted para crear la pieza perfecta para su espacio.'
            }
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block text-neutral-900 hover:underline font-medium"
          >
            {lang === 'en' ? 'Get in touch →' : 'Póngase en contacto →'}
          </Link>
        </div>
      </div>
    </div>
  );
}
