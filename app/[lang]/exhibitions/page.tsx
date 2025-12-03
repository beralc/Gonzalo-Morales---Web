import React from 'react';
import { Metadata } from 'next';
import { Language, languages } from '@/lib/i18n';
import { generateSEO, pageSEO } from '@/lib/seo';
import ExhibitionsTimeline from '@/components/ExhibitionsTimeline';

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
  const seo = pageSEO.exhibitions[language];

  return generateSEO(seo, language);
}

export default async function ExhibitionsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const language = (lang === 'en' || lang === 'es' ? lang : 'en') as Language;

  const individualExhibitions = [
    { year: '2009', venue: 'Casa Cultural de Mexico', location: 'San José, Costa Rica' },
    { year: '2003', venue: 'Grupo SAMA', location: 'San José, Costa Rica' },
    { year: '2002', venue: 'Grupo SAMA', location: 'San José, Costa Rica' },
    { year: '2001', venue: 'Galería Sara Gordon', location: 'San José, Costa Rica' },
    { year: '1990', venue: '"Obras en Pastel" Galería Valanti', location: 'San José, Costa Rica' },
    { year: '1988', venue: 'Exposición-Retrospectiva, Asamblea Legislativa', location: 'San José, Costa Rica' },
    { year: '1987', venue: '"Obras en Pastel" Galería Contemporánea', location: 'San José, Costa Rica' },
    { year: '1986', venue: '"Obras en Pastel" Galería Contemporánea', location: 'San José, Costa Rica' },
    { year: '1981', venue: 'Galería de Arte, Club Internacional Colon', location: 'San José, Costa Rica' },
    { year: '1979', venue: 'Galería Forma y Color', location: 'San José, Costa Rica' },
    { year: '1978', venue: 'Sala Enrique Echandi, Ministerio Cultura, Juventud y Deportes', location: 'San José, Costa Rica' },
    { year: '1974', venue: 'Espacio Jorge Debravo', location: 'San José, Costa Rica' },
  ];

  const collectiveExhibitions = [
    { year: '2013', title: '"Exposición de Gatos"', venue: 'Costa Rica Country Club', location: 'Costa Rica' },
    { year: '2009', title: '"Contrastes"', venue: 'Instituto Cultural de Mexico', location: 'San José, CR' },
    { year: '2001', title: '', venue: 'Museo de los Niños', location: 'Costa Rica' },
    { year: '1999', title: '"Exposición Bodegón"', venue: 'Galería Nacional', location: 'Costa Rica' },
    { year: '1999', title: '"Exposición de Arte costarricense Premios Nacionales"', venue: '', location: 'Costa Rica' },
    { year: '1996', title: 'Collective exhibit', venue: 'Sala Enrique Echandi', location: 'Costa Rica' },
    { year: '1995', title: '"Premios Nacionales Aquileo J. Echeverria"', venue: '', location: 'Costa Rica' },
    { year: '1994', title: '', venue: 'Museo del Banco Central', location: 'San José, CR' },
    { year: '1994', title: '', venue: 'Galería siglo XXI', location: 'San Salvador, El Salvador' },
    { year: '1994', title: '', venue: 'Museo del Jade, Instituto Nacional de Seguros', location: 'San José, CR' },
    { year: '1992', title: '', venue: 'APEC Gallery', location: 'San José, CR' },
    { year: '1991', title: '', venue: 'Museo del Jade, Instituto Nacional de Seguros', location: 'San José, CR' },
    { year: '1988', title: '"VI Bienal Iberoamericana de Arte"', venue: 'Palacio de Bellas Artes', location: 'México, DF' },
    { year: '1987', title: '"VII Nueva Pintura Costarricense"', venue: 'Museo Nacional', location: 'Costa Rica' },
    { year: '1986', title: '"VI Nueva Pintura Costarricense"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1985', title: '"V Nueva Pintura Costarricense"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1984', title: '', venue: 'Galería etcétera', location: 'Ciudad de Panamá, Panamá' },
    { year: '1984', title: '"IV Nueva Pintura Costarricense"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1983', title: '', venue: 'Galería de los Independientes', location: 'San José, CR' },
    { year: '1982', title: '"III Bienal Iberoamericana de Arte"', venue: 'Museo Carrillo', location: 'México, DF' },
    { year: '1982', title: '"II Nueva Pintura Costarricense"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1982', title: '', venue: 'Museo de Arte de las Américas OEA', location: 'Washington DC, USA' },
    { year: '1981', title: '', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1980', title: '"I Salón de Octubre"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1978', title: '"Exposición Iberoamericana"', venue: 'Galería Forma', location: 'San Salvador' },
    { year: '1978', title: '"VI Salón Anual de artes plásticas"', venue: 'Museo Nacional', location: 'San José, CR' },
    { year: '1977', title: '', venue: 'Galería Arte Actual', location: 'San José, CR' },
    { year: '1977', title: '"Exposición Iberoamericana"', venue: 'Sala Plaza Colón', location: 'Madrid, Spain' },
    { year: '1977', title: '"Salón Internacional Xerox"', venue: '', location: 'Managua, Nicaragua' },
    { year: '1977', title: '"V Salón Anual de Artes Plásticas"', venue: 'Museo Nacional', location: 'Costa Rica' },
    { year: '1976', title: '', venue: 'Galería Antonio Machado', location: 'Madrid, Spain' },
    { year: '1975', title: '', venue: 'Galería Círculo Dos', location: 'Madrid, Spain' },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-16 text-center">
          {language === 'en' ? 'Exhibitions' : 'Exposiciones'}
        </h1>

        {/* Individual Exhibitions */}
        <section className="mb-32">
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12 text-center">
            {language === 'en' ? 'Individual Exhibitions' : 'Exposiciones Individuales'}
          </h2>
          <ExhibitionsTimeline
            exhibitions={individualExhibitions}
            type="individual"
            language={language}
          />
        </section>

        {/* Collective Exhibitions */}
        <section>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12 text-center">
            {language === 'en' ? 'Collective Exhibitions' : 'Exposiciones Colectivas'}
          </h2>
          <ExhibitionsTimeline
            exhibitions={collectiveExhibitions}
            type="collective"
            language={language}
          />
        </section>
      </div>
    </div>
  );
}
