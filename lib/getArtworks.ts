import fs from 'fs';
import path from 'path';

export interface Artwork {
  id: string;
  filename: string;
  category: 'bodegones' | 'retratos';
  path: string;
}

export function getArtworks(category?: 'bodegones' | 'retratos'): Artwork[] {
  const publicImagesPath = path.join(process.cwd(), 'public', 'images');
  const artworks: Artwork[] = [];

  const categories = category ? [category] : ['bodegones', 'retratos'];

  categories.forEach((cat) => {
    const categoryPath = path.join(publicImagesPath, cat);

    if (fs.existsSync(categoryPath)) {
      const files = fs.readdirSync(categoryPath);

      files.forEach((file) => {
        // Filter out non-image files and directories
        if (file.match(/\.(jpg|jpeg|png|gif|webp)$/i) && file !== 'old') {
          artworks.push({
            id: `${cat}-${file}`,
            filename: file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, ''),
            category: cat as 'bodegones' | 'retratos',
            path: `/images/${cat}/${file}`,
          });
        }
      });
    }
  });

  return artworks;
}
