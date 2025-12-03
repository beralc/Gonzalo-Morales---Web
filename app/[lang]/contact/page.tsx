import React from 'react';
import { Metadata } from 'next';
import { Language, translations, languages } from '@/lib/i18n';
import { generateSEO, pageSEO } from '@/lib/seo';
import HubSpotForm from '@/components/HubSpotForm';

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
  const seo = pageSEO.contact[language];

  return generateSEO(seo, language);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-serif text-5xl text-neutral-900 mb-4 text-center">
          {t.contact.title}
        </h1>
        <p className="text-center text-neutral-600 mb-12">
          {lang === 'en'
            ? 'For inquiries about prints, licensing, or general questions, please reach out using the form below.'
            : 'Para consultas sobre impresiones, licencias o preguntas generales, por favor contáctenos usando el formulario a continuación.'
          }
        </p>

        <HubSpotForm language={lang} />
      </div>
    </div>
  );
}
