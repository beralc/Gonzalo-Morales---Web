# Gonzalo Morales Sáurez - Official Website

Modern, elegant website for Costa Rican painter Gonzalo Morales Sáurez (1945-2017).

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build
# Static files will be in the out/ folder
```

## Features

- 🌍 **Bilingual** - Full English and Spanish support
- 🖼️ **Gallery** - 94 artworks with lightbox viewing
- 📱 **Responsive** - Perfect on all devices
- ⚡ **Fast** - Static site generation
- 🎨 **Elegant** - Minimalist design for classical art

## Pages

- **Home** - Hero section and featured works
- **Works** (Obras) - Full gallery with filters
  - All Works
  - Bodegones (Still Life) - 25 paintings
  - Retratos (Portraits) - 69 paintings
- **Biography** (Biografía) - Artist biography
- **Contact** (Contacto) - Contact form
- **Store** (Tienda) - Print inquiries

## Technology Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Modern styling
- **Static Export** - No server needed

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**TL;DR**: Upload contents of `out/` folder to your Hostinger public_html directory.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── [lang]/            # Language routes (en/es)
│   └── globals.css        # Global styles
├── components/            # React components
├── lib/                   # Utilities and data
├── public/images/         # Artwork images
│   ├── bodegones/        # Still life paintings
│   └── retratos/         # Portraits
└── out/                  # Built static files
```

## Adding Artwork

1. Add JPG files to `public/images/bodegones/` or `public/images/retratos/`
2. Run `npm run build`
3. Upload new `out/` folder to hosting

Images are automatically detected and added to the gallery!

## Editing Content

- **Translations**: Edit `lib/i18n.ts`
- **Biography**: Edit `app/[lang]/biography/page.tsx`
- **Store**: Edit `app/[lang]/store/page.tsx`

## License

© 2024 Gonzalo Morales Sáurez Estate. All rights reserved.
