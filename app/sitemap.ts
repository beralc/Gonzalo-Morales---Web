import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gonzalomorales.net';
  const languages = ['en', 'es'];

  // Generate URLs for all pages in both languages
  const routes = [
    '',
    '/works',
    '/works/bodegones',
    '/works/retratos',
    '/biography',
    '/exhibitions',
    '/contact',
    '/store',
    '/privacy',
    '/terms',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add homepage
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  });

  // Add all language-specific pages
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/works' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/works' ? 0.9 : 0.8,
      });
    });
  });

  return sitemap;
}
