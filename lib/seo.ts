import { Metadata } from 'next';
import { Language } from './i18n';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const siteUrl = 'https://www.gonzalomorales.net';

export function generateSEO(config: SEOConfig, lang: Language): Metadata {
  const { title, description, keywords, ogImage } = config;

  return {
    title,
    description,
    keywords: keywords || `Gonzalo Morales, Gonzalo Morales Sáurez, Costa Rican painter, Costa Rican art, bodegones, still life, portraits, retratos, pintor costarricense, arte costarricense, Latin American art, oil painting, pastel painting, classical painting, representational art`,
    authors: [{ name: 'Gonzalo Morales Sáurez Estate' }],
    creator: 'Gonzalo Morales Sáurez',
    publisher: 'Gonzalo Morales Sáurez Estate',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: lang === 'en' ? 'en_US' : 'es_ES',
      url: siteUrl,
      title,
      description,
      siteName: 'Gonzalo Morales Sáurez - Official Website',
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const pageSEO = {
  home: {
    en: {
      title: 'Gonzalo Morales Sáurez - Costa Rican Painter | Official Website',
      description: 'Official website of Gonzalo Morales Sáurez (1945-2017), renowned Costa Rican painter known for masterful still life paintings and intimate portraits. Explore over 90 original artworks.',
      keywords: 'Gonzalo Morales Sáurez, Costa Rican painter, bodegones, still life paintings, Costa Rican art, Latin American artist, oil paintings, pastel paintings, art gallery, Costa Rica',
    },
    es: {
      title: 'Gonzalo Morales Sáurez - Pintor Costarricense | Sitio Oficial',
      description: 'Sitio web oficial de Gonzalo Morales Sáurez (1945-2017), reconocido pintor costarricense conocido por sus magistrales bodegones y retratos íntimos. Explore más de 90 obras originales.',
      keywords: 'Gonzalo Morales Sáurez, pintor costarricense, bodegones, naturaleza muerta, arte costarricense, artista latinoamericano, pinturas al óleo, pinturas al pastel, galería de arte, Costa Rica',
    },
  },
  works: {
    en: {
      title: 'Artworks - Gonzalo Morales Sáurez | Still Life & Portraits',
      description: 'Browse the complete collection of Gonzalo Morales Sáurez artworks including 25 still life paintings (bodegones) and 69 portraits. High-quality images of Costa Rican masterpieces.',
      keywords: 'Gonzalo Morales artworks, bodegones collection, portrait paintings, Costa Rican art gallery, still life art, classical paintings, oil paintings Costa Rica',
    },
    es: {
      title: 'Obras - Gonzalo Morales Sáurez | Bodegones y Retratos',
      description: 'Explore la colección completa de obras de Gonzalo Morales Sáurez incluyendo 25 bodegones y 69 retratos. Imágenes de alta calidad de obras maestras costarricenses.',
      keywords: 'obras Gonzalo Morales, colección bodegones, pinturas retratos, galería arte costarricense, naturaleza muerta, pinturas clásicas, pinturas al óleo Costa Rica',
    },
  },
  biography: {
    en: {
      title: 'Biography - Gonzalo Morales Sáurez | Life & Legacy',
      description: 'Learn about the life and artistic career of Gonzalo Morales Sáurez (1945-2017), from his early formation to becoming one of Costa Rica\'s most distinguished painters with 40+ years of exhibitions.',
      keywords: 'Gonzalo Morales biography, Costa Rican artist biography, painter life story, art history Costa Rica, Latin American painters, contemporary Costa Rican art',
    },
    es: {
      title: 'Biografía - Gonzalo Morales Sáurez | Vida y Legado',
      description: 'Conozca la vida y carrera artística de Gonzalo Morales Sáurez (1945-2017), desde su formación temprana hasta convertirse en uno de los pintores más distinguidos de Costa Rica con más de 40 años de exposiciones.',
      keywords: 'biografía Gonzalo Morales, artista costarricense biografía, historia pintor, historia arte Costa Rica, pintores latinoamericanos, arte contemporáneo costarricense',
    },
  },
  exhibitions: {
    en: {
      title: 'Exhibitions - Gonzalo Morales Sáurez | 40+ Years of Shows',
      description: 'Complete exhibition history of Gonzalo Morales Sáurez from 1974-2013. 12 solo exhibitions and 30+ collective shows across Costa Rica, Mexico, Spain, USA, and Central America.',
      keywords: 'Gonzalo Morales exhibitions, art exhibitions Costa Rica, Latin American art shows, Bienal Iberoamericana, OEA Museum, art history',
    },
    es: {
      title: 'Exposiciones - Gonzalo Morales Sáurez | 40+ Años de Exhibiciones',
      description: 'Historia completa de exposiciones de Gonzalo Morales Sáurez desde 1974-2013. 12 exposiciones individuales y más de 30 colectivas en Costa Rica, México, España, EE.UU. y Centroamérica.',
      keywords: 'exposiciones Gonzalo Morales, exposiciones arte Costa Rica, exhibiciones arte latinoamericano, Bienal Iberoamericana, Museo OEA, historia del arte',
    },
  },
  store: {
    en: {
      title: 'Art Prints & Licensing - Gonzalo Morales Sáurez',
      description: 'Purchase high-quality giclée prints of Gonzalo Morales Sáurez artworks or inquire about licensing for commercial use. Museum-grade archival prints with certificates of authenticity.',
      keywords: 'art prints Costa Rica, giclée prints, art licensing, buy Costa Rican art, museum quality prints, fine art prints, Gonzalo Morales prints',
    },
    es: {
      title: 'Impresiones de Arte y Licencias - Gonzalo Morales Sáurez',
      description: 'Adquiera impresiones giclée de alta calidad de las obras de Gonzalo Morales Sáurez o consulte sobre licencias para uso comercial. Impresiones de archivo de grado museo con certificados de autenticidad.',
      keywords: 'impresiones de arte Costa Rica, impresiones giclée, licencias de arte, comprar arte costarricense, impresiones calidad museo, impresiones de bellas artes, impresiones Gonzalo Morales',
    },
  },
  contact: {
    en: {
      title: 'Contact - Gonzalo Morales Sáurez Estate',
      description: 'Contact the Gonzalo Morales Sáurez Estate for inquiries about prints, licensing, exhibitions, or general information about the artist and his works.',
      keywords: 'contact Gonzalo Morales, art inquiries Costa Rica, art licensing contact, buy Costa Rican art, art estate contact',
    },
    es: {
      title: 'Contacto - Legado Gonzalo Morales Sáurez',
      description: 'Contacte al Legado de Gonzalo Morales Sáurez para consultas sobre impresiones, licencias, exposiciones o información general sobre el artista y sus obras.',
      keywords: 'contacto Gonzalo Morales, consultas arte Costa Rica, contacto licencias arte, comprar arte costarricense, contacto legado artístico',
    },
  },
};
