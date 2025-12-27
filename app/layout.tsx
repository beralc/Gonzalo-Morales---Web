import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const siteUrl = 'https://www.gonzalomorales.net';
const siteTitle = 'Gonzalo Morales Sáurez - Costa Rican Hyperrealist Painter';
const siteDescription = 'Official website of Gonzalo Morales Sáurez (1945-2017), renowned Costa Rican hyperrealist painter known for his still life and portrait works. Studied at Real Academia de Bellas Artes de San Fernando in Madrid.';
const previewImage = '/images/bodegones/bodegon_frutas.jpg';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: ['Gonzalo Morales Sáurez', 'Costa Rican painter', 'hyperrealism', 'photorealism', 'still life', 'bodegones', 'portraits', 'Costa Rican art'],
  authors: [{ name: 'Gonzalo Morales Sáurez' }],
  creator: 'Gonzalo Morales Sáurez',
  publisher: 'Bernardo Morales',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}${previewImage}`,
        width: 1200,
        height: 630,
        alt: 'Artwork by Gonzalo Morales Sáurez',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}${previewImage}`],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

const GA_MEASUREMENT_ID = 'G-MSD3DC04H0';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Gonzalo Morales Sáurez',
  givenName: 'Gonzalo',
  familyName: 'Morales Sáurez',
  birthDate: '1945-07-09',
  birthPlace: {
    '@type': 'Place',
    name: 'San José',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San José',
      addressCountry: 'CR',
    },
  },
  deathDate: '2017-12-22',
  deathPlace: {
    '@type': 'Place',
    name: 'Sabanilla',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sabanilla',
      addressCountry: 'CR',
    },
  },
  nationality: {
    '@type': 'Country',
    name: 'Costa Rica',
  },
  jobTitle: 'Painter and Sculptor',
  hasOccupation: [
    {
      '@type': 'Occupation',
      name: 'Painter',
      occupationalCategory: 'Visual Artist',
    },
    {
      '@type': 'Occupation',
      name: 'Sculptor',
      occupationalCategory: 'Visual Artist',
    },
  ],
  knowsAbout: ['Hyperrealism', 'Photorealism', 'Still Life Painting', 'Portrait Painting'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Real Academia de Bellas Artes de San Fernando',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressCountry: 'ES',
    },
  },
  spouse: {
    '@type': 'Person',
    name: 'Nieves Mateo',
  },
  children: [
    {
      '@type': 'Person',
      name: 'Bernardo Morales',
    },
    {
      '@type': 'Person',
      name: 'Rosa Guindos',
    },
    {
      '@type': 'Person',
      name: 'Antonio Guindos',
    },
  ],
  url: siteUrl,
  sameAs: [
    'https://en.wikipedia.org/wiki/Gonzalo_Morales_S%C3%A1urez',
  ],
  description: siteDescription,
  image: `${siteUrl}${previewImage}`,
  inLanguage: ['es', 'en'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
