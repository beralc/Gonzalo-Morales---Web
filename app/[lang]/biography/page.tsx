import React from 'react';
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
  const seo = pageSEO.biography[language];

  return generateSEO(seo, language);
}

export default async function BiographyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = translations[lang as Language];

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Magazine Hero */}
        <div className="relative w-full h-[70vh] min-h-[500px] max-h-[700px] mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/gonzalo_morales.jpg"
            alt="Gonzalo Morales Sáurez"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <p className="text-neutral-300 text-sm uppercase tracking-widest mb-3">1945 - 2017</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              Gonzalo Morales Sáurez
            </h1>
            <p className="text-neutral-200 text-lg md:text-xl max-w-2xl">
              {lang === 'en'
                ? 'Master of still life and portraiture, dedicated to revealing beauty in everyday moments'
                : 'Maestro del bodegón y el retrato, dedicado a revelar la belleza en momentos cotidianos'}
            </p>
          </div>
        </div>

        {/* Magazine Article Content */}
        <article className="max-w-4xl mx-auto">
          {lang === 'en' ? (
            <>
              {/* Opening Section */}
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                <strong className="text-neutral-900">Gonzalo Morales Sáurez (1945-2017)</strong> was one of Costa Rica's most distinguished painters of the late 20th and early 21st centuries. Throughout his remarkable career spanning over four decades, he captivated audiences with his masterful still life compositions and intimate portraits, establishing himself as a leading figure in Costa Rican representational art.
              </p>

              {/* Early Life with Photos */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Early Life and Formation
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                      Born in Costa Rica in 1945, Gonzalo Morales showed an early affinity for visual arts. His formative years were marked by intense study and dedication to understanding the classical principles of painting—light, composition, color theory, and the subtle beauty found in everyday objects and human expressions.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      This foundation would become the bedrock of his artistic philosophy throughout his life, as Morales developed a deep appreciation for the European masters while maintaining a distinctly Latin American sensibility.
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-70s.JPG"
                      alt="Gonzalo Morales in the 1970s"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-lg">Gonzalo in the 1970s</p>
                      <p className="text-neutral-200 text-sm">Beginning of an extraordinary artistic journey</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl mb-8 group">
                  <img
                    src="/images/gonzalo-70s-2.jpg"
                    alt="Gonzalo Morales in his early career"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 md:p-12 max-w-xl">
                      <p className="text-white text-xl md:text-2xl font-serif leading-relaxed">
                        His work bridges the classical tradition with a contemporary Costa Rican perspective, creating a unique voice that resonated with collectors and art enthusiasts both locally and internationally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pull Quote */}
              <div className="my-20 py-12 border-y-2 border-neutral-200">
                <blockquote className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-neutral-900 italic leading-relaxed">
                    "Revealing the hidden beauty and quiet dignity of the mundane"
                  </p>
                </blockquote>
              </div>

              {/* Artistic Style with Painting Photo */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Artistic Style and Themes
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-pintando.JPG"
                      alt="Gonzalo Morales painting in his studio"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white font-serif text-2xl mb-2">The Artist at Work</p>
                      <p className="text-neutral-200">
                        Capturing the essence of his subjects with masterful technique
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Morales' work is characterized by his exceptional technical skill and his ability to capture the interplay of light and shadow with remarkable precision.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Working primarily in oils and pastels, he employed classical techniques while bringing a fresh, contemporary perspective to traditional genres.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                      His beloved still life paintings (<em>bodegones</em>) transform ordinary objects—flowers, fruits, household items—into subjects of profound contemplation. Through careful arrangement and masterful brushwork, he revealed the hidden beauty and quiet dignity of the mundane.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      His color palette ranged from rich, warm tones to subtle, muted harmonies, always serving the emotional and aesthetic goals of each composition.
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-juanrafael-mora.JPG"
                      alt="Gonzalo with portrait commission"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-lg">Portrait of Juan Rafael Mora</p>
                      <p className="text-neutral-200 text-sm">
                        Capturing essence and character with psychological depth
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed mt-8">
                  His portrait work demonstrates an equally refined sensibility. Morales had an exceptional ability to capture not just the physical likeness of his subjects, but their essence and character. His portraits, including notable works depicting Costa Rican dignitaries and everyday citizens alike, are marked by psychological depth and humanistic warmth.
                </p>
              </div>

              {/* Career Highlights with Madrid Photos */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Career Highlights and International Recognition
                </h2>

                <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                  Throughout his career, Morales exhibited extensively both in Costa Rica and internationally. His first solo exhibition took place in 1974 at Espacio Jorge Debravo in San José, marking the beginning of a prolific exhibition career. He went on to hold twelve individual exhibitions at prestigious venues including the Galería Sara Gordon, Casa Cultural de Mexico, and a retrospective at the Costa Rican Legislative Assembly in 1988.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/Gonzalo-madrid-2015.JPG"
                      alt="Gonzalo Morales in Madrid 2015"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-xl mb-2">Madrid, 2015</p>
                      <p className="text-neutral-200">
                        International exhibitions establishing his reputation in Europe
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-madrid-2-2015.JPG"
                      alt="Gonzalo at Madrid exhibition"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-xl mb-2">European Success</p>
                      <p className="text-neutral-200">
                        Later career achievements and recognition
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed">
                  Morales also participated in over 30 collective exhibitions, including the VI Bienal Iberoamericana de Arte in Mexico City (1988) and exhibitions at the Organization of American States Museum in Washington, DC. His work was shown in Spain, Panama, El Salvador, Nicaragua, and across Central America, establishing his reputation as a significant figure in Latin American art.
                </p>
              </div>

              {/* Legacy Section */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Legacy and Impact
                </h2>

                <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-8">
                  <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                    Throughout his seven-decade life, Gonzalo Morales remained steadfast in his commitment to representational art during an era that saw many artists embrace abstraction and conceptualism. His dedication to craftsmanship and traditional techniques served as both a preservation of artistic heritage and a testament to the enduring power of figurative painting.
                  </p>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Morales' work continues to be celebrated for its technical excellence, emotional depth, and its ability to find the extraordinary within the ordinary. His paintings invite viewers to slow down, to observe carefully, and to find beauty in the simple, quiet moments of life.
                  </p>
                </div>

                <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-center">
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
                    Today, his works are held in private collections throughout Central America, North America, and Europe. His legacy lives on not only through his paintings but through the many lives he touched with his art, his teaching, and his generous spirit.
                  </p>
                  <p className="text-white font-serif text-2xl md:text-3xl mb-2">Gonzalo Morales Sáurez</p>
                  <p className="text-neutral-400 text-xl">1945 - 2017</p>
                </div>
              </div>

              {/* Press Recognition Section */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6 text-center">
                  Press Recognition
                </h2>
                <p className="text-neutral-600 text-center mb-12 max-w-3xl mx-auto text-lg">
                  Featured articles celebrating the life and work of Gonzalo Morales Sáurez
                </p>

                <div className="space-y-6">
                  {/* Article 1 - CRHoy */}
                  <a
                    href="https://crhoy.com/retratistas-presidenciales-sus-pinceles-dan-color-a-la-historia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">CRHoy</p>
                            <p className="text-xs text-neutral-500">May 14, 2017</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Read article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Retratistas presidenciales: Sus pinceles dan color a la historia
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Features Gonzalo Morales Sáurez as a presidential portraitist who painted Abel Pacheco, Miguel Ángel Rodríguez, and Laura Chinchilla, continuing a family tradition of capturing Costa Rican leaders.
                      </p>
                    </div>
                  </a>

                  {/* Article 2 - La Nación */}
                  <a
                    href="https://www.nacion.com/viva/cultura/un-hiperrealista-costarricense/PCKQTDLAWRFPTENY43JMQWR57A/story/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">La Nación</p>
                            <p className="text-xs text-neutral-500">January 18, 2015</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Read article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Un hiperrealista costarricense
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Explores Gonzalo Morales Sáurez as a Costa Rican hyperrealist painter, highlighting his 1976 oil painting "Cajones de basura" which demonstrates his approach to elevating everyday objects into meaningful artistic subjects.
                      </p>
                    </div>
                  </a>

                  {/* Article 3 - Teletica */}
                  <a
                    href="https://www.teletica.com/nacional/retrato-de-juan-rafael-mora-porras-sera-colocado-en-todas-las-embajadas-de-costa-rica-en-el-mundo_202128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Teletica</p>
                            <p className="text-xs text-neutral-500">August 16, 2018</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Read article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Portrait of Juan Rafael Mora Porras to be placed in all Costa Rican embassies
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Costa Rica's diplomatic missions will display digital replicas of Gonzalo Morales Sáurez's portrait of national hero Juan Rafael Mora Porras in embassies and consulates worldwide, commemorating the bicentennial of independence.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Spanish Version */}
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                <strong className="text-neutral-900">Gonzalo Morales Sáurez (1945-2017)</strong> fue uno de los pintores más distinguidos de Costa Rica de finales del siglo XX y principios del XXI. A lo largo de su notable carrera de más de cuatro décadas, cautivó al público con sus magistrales composiciones de bodegones y retratos íntimos, estableciéndose como una figura líder en el arte representacional costarricense.
              </p>

              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Vida Temprana y Formación
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                      Nacido en Costa Rica en 1945, Gonzalo Morales mostró desde temprana edad una afinidad por las artes visuales. Sus años formativos estuvieron marcados por un estudio intenso y una dedicación a comprender los principios clásicos de la pintura: luz, composición, teoría del color y la belleza sutil encontrada en objetos cotidianos y expresiones humanas.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Esta base se convertiría en el fundamento de su filosofía artística durante toda su vida, mientras Morales desarrollaba un profundo aprecio por los maestros europeos manteniendo una sensibilidad distintamente latinoamericana.
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-70s.JPG"
                      alt="Gonzalo Morales en los años 70"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-lg">Gonzalo en los años 70</p>
                      <p className="text-neutral-200 text-sm">Inicio de un extraordinario viaje artístico</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl mb-8 group">
                  <img
                    src="/images/gonzalo-70s-2.jpg"
                    alt="Gonzalo Morales en su carrera temprana"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 md:p-12 max-w-xl">
                      <p className="text-white text-xl md:text-2xl font-serif leading-relaxed">
                        Su obra une la tradición clásica con una perspectiva costarricense contemporánea, creando una voz única que resonó con coleccionistas y entusiastas del arte tanto local como internacionalmente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-20 py-12 border-y-2 border-neutral-200">
                <blockquote className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-neutral-900 italic leading-relaxed">
                    "Revelando la belleza oculta y la dignidad silenciosa de lo mundano"
                  </p>
                </blockquote>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Estilo Artístico y Temas
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="md:col-span-2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-pintando.JPG"
                      alt="Gonzalo Morales pintando en su taller"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-white font-serif text-2xl mb-2">El Artista en su Taller</p>
                      <p className="text-neutral-200">
                        Capturando la esencia de sus sujetos con técnica magistral
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      La obra de Morales se caracteriza por su excepcional habilidad técnica y su capacidad para capturar el juego de luz y sombra con notable precisión.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Trabajando principalmente en óleos y pasteles, empleó técnicas clásicas mientras aportaba una perspectiva fresca y contemporánea a géneros tradicionales.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                      Sus amados bodegones transforman objetos ordinarios—flores, frutas, artículos domésticos—en sujetos de profunda contemplación. A través de una cuidadosa disposición y pinceladas magistrales, reveló la belleza oculta y la dignidad silenciosa de lo mundano.
                    </p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Su paleta de colores abarcaba desde tonos ricos y cálidos hasta armonías sutiles y apagadas, siempre al servicio de los objetivos emocionales y estéticos de cada composición.
                    </p>
                  </div>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-juanrafael-mora.JPG"
                      alt="Gonzalo con encargo de retrato"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-lg">Retrato de Juan Rafael Mora</p>
                      <p className="text-neutral-200 text-sm">
                        Capturando esencia y carácter con profundidad psicológica
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed mt-8">
                  Su trabajo de retrato demuestra una sensibilidad igualmente refinada. Morales tenía una habilidad excepcional para capturar no solo el parecido físico de sus sujetos, sino su esencia y carácter. Sus retratos, incluyendo obras notables que representan dignatarios costarricenses y ciudadanos comunes por igual, están marcados por profundidad psicológica y calidez humanística.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Momentos Destacados y Reconocimiento Internacional
                </h2>

                <p className="text-neutral-700 text-lg leading-relaxed mb-8">
                  A lo largo de su carrera, Morales expuso extensamente tanto en Costa Rica como internacionalmente. Su primera exposición individual tuvo lugar en 1974 en el Espacio Jorge Debravo en San José, marcando el inicio de una prolífica carrera expositiva. Realizó doce exposiciones individuales en prestigiosos lugares incluyendo la Galería Sara Gordon, Casa Cultural de México, y una retrospectiva en la Asamblea Legislativa de Costa Rica en 1988.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/Gonzalo-madrid-2015.JPG"
                      alt="Gonzalo Morales en Madrid 2015"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-xl mb-2">Madrid, 2015</p>
                      <p className="text-neutral-200">
                        Exposiciones internacionales estableciendo su reputación en Europa
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/images/gonzalo-madrid-2-2015.JPG"
                      alt="Gonzalo en exposición de Madrid"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-serif text-xl mb-2">Éxito Europeo</p>
                      <p className="text-neutral-200">
                        Logros y reconocimiento en su carrera tardía
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-700 text-lg leading-relaxed">
                  Morales también participó en más de 30 exposiciones colectivas, incluyendo la VI Bienal Iberoamericana de Arte en la Ciudad de México (1988) y exposiciones en el Museo de la Organización de Estados Americanos en Washington, DC. Su obra se mostró en España, Panamá, El Salvador, Nicaragua y a través de Centroamérica, estableciendo su reputación como una figura significativa en el arte latinoamericano.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">
                  Legado e Impacto
                </h2>

                <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-8">
                  <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                    A lo largo de sus siete décadas de vida, Gonzalo Morales permaneció firme en su compromiso con el arte representacional durante una era que vio a muchos artistas abrazar la abstracción y el conceptualismo. Su dedicación a la artesanía y las técnicas tradicionales sirvió tanto como preservación del patrimonio artístico como testimonio del poder perdurable de la pintura figurativa.
                  </p>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    La obra de Morales continúa siendo celebrada por su excelencia técnica, profundidad emocional y su capacidad para encontrar lo extraordinario dentro de lo ordinario. Sus pinturas invitan a los espectadores a desacelerar, observar cuidadosamente y encontrar belleza en los momentos simples y tranquilos de la vida.
                  </p>
                </div>

                <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-center">
                  <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
                    Hoy, sus obras se encuentran en colecciones privadas a través de Centroamérica, Norteamérica y Europa. Su legado vive no solo a través de sus pinturas sino a través de las muchas vidas que tocó con su arte, su enseñanza y su espíritu generoso.
                  </p>
                  <p className="text-white font-serif text-2xl md:text-3xl mb-2">Gonzalo Morales Sáurez</p>
                  <p className="text-neutral-400 text-xl">1945 - 2017</p>
                </div>
              </div>

              {/* Press Recognition Section - Spanish */}
              <div className="mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6 text-center">
                  Reconocimiento en Medios
                </h2>
                <p className="text-neutral-600 text-center mb-12 max-w-3xl mx-auto text-lg">
                  Artículos destacados celebrando la vida y obra de Gonzalo Morales Sáurez
                </p>

                <div className="space-y-6">
                  {/* Article 1 - CRHoy */}
                  <a
                    href="https://crhoy.com/retratistas-presidenciales-sus-pinceles-dan-color-a-la-historia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">CRHoy</p>
                            <p className="text-xs text-neutral-500">14 de mayo, 2017</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Leer artículo</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Retratistas presidenciales: Sus pinceles dan color a la historia
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Presenta a Gonzalo Morales Sáurez como retratista presidencial quien pintó a Abel Pacheco, Miguel Ángel Rodríguez y Laura Chinchilla, continuando una tradición familiar de capturar líderes costarricenses.
                      </p>
                    </div>
                  </a>

                  {/* Article 2 - La Nación */}
                  <a
                    href="https://www.nacion.com/viva/cultura/un-hiperrealista-costarricense/PCKQTDLAWRFPTENY43JMQWR57A/story/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">La Nación</p>
                            <p className="text-xs text-neutral-500">18 de enero, 2015</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Leer artículo</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Un hiperrealista costarricense
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Explora a Gonzalo Morales Sáurez como pintor hiperrealista costarricense, destacando su pintura al óleo de 1976 "Cajones de basura" que demuestra su enfoque de elevar objetos cotidianos a temas artísticos significativos.
                      </p>
                    </div>
                  </a>

                  {/* Article 3 - Teletica */}
                  <a
                    href="https://www.teletica.com/nacional/retrato-de-juan-rafael-mora-porras-sera-colocado-en-todas-las-embajadas-de-costa-rica-en-el-mundo_202128"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-2xl border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900 uppercase tracking-wide">Teletica</p>
                            <p className="text-xs text-neutral-500">16 de agosto, 2018</p>
                          </div>
                        </div>
                        <div className="flex items-center text-neutral-600 group-hover:text-neutral-900 transition-colors">
                          <span className="text-sm font-medium mr-2">Leer artículo</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        Retrato de Juan Rafael Mora Porras será colocado en todas las embajadas de Costa Rica
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Las misiones diplomáticas de Costa Rica exhibirán réplicas digitales del retrato de Gonzalo Morales Sáurez del héroe nacional Juan Rafael Mora Porras en embajadas y consulados mundialmente, conmemorando el bicentenario de la independencia.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
        </article>
      </div>
    </div>
  );
}
