# Deployment Instructions for Gonzalo Morales Website

## What You Have

Your website has been successfully built and is ready to deploy! All static files are in the `out/` directory.

## Website Features

✅ **Bilingual** - English and Spanish versions (automatically switches via URL)
✅ **Gallery** - 94 artworks (25 bodegones + 69 retratos) with lightbox viewing
✅ **Responsive** - Works on mobile, tablet, and desktop
✅ **Static Export** - No server required, works on any hosting
✅ **Elegant Design** - Minimalist, classical design perfect for art

## Pages Included

- **Home** (`/en` and `/es`) - Hero section with featured works
- **Works** - Full gallery with category filters (Bodegones/Retratos)
- **Biography** - Artist biography in both languages
- **Contact** - Contact form (you'll need to configure email)
- **Store** - Print inquiry and licensing information

---

## Deploying to Hostinger

### Option 1: Using File Manager (Recommended for Hostinger)

1. **Log in to Hostinger**
   - Go to your Hostinger control panel
   - Navigate to **File Manager**

2. **Locate your public_html folder**
   - This is where your website files should go
   - If gonzalomorales.net points to a subfolder, navigate there

3. **Upload the files**
   - **IMPORTANT**: Upload the *contents* of the `out/` folder, NOT the `out` folder itself
   - Select all files and folders inside `out/`:
     - `en/`
     - `es/`
     - `images/`
     - `_next/`
     - `index.html`
     - All other files
   - Upload them to your public_html (or domain folder)

4. **Set permissions** (if needed)
   - Folders: 755
   - Files: 644

### Option 2: Using FTP

1. **Get your FTP credentials** from Hostinger
   - Host: Usually `ftp.yourdomain.com`
   - Username: Provided by Hostinger
   - Password: Your FTP password

2. **Use an FTP client** (like FileZilla, free download)
   - Connect to your Hostinger account
   - Navigate to `public_html` (or your domain folder)

3. **Upload all files from the `out/` folder**
   - Drag and drop everything from `out/` to the server
   - Do NOT upload the `out` folder itself

---

## Testing Your Website

After uploading, visit:
- https://www.gonzalomorales.net (should redirect to `/en`)
- https://www.gonzalomorales.net/en (English version)
- https://www.gonzalomorales.net/es (Spanish version)
- https://www.gonzalomorales.net/en/works (Gallery)

---

## Making Updates

### Adding or Removing Artworks

1. **Add images**: Place JPG files in `public/images/bodegones/` or `public/images/retratos/`
2. **Remove images**: Delete from the folders above
3. **Rebuild**: Run `npm run build`
4. **Re-upload**: Upload the new `out/` folder contents to Hostinger

### Updating Text Content

Edit these files:
- **Translations**: `lib/i18n.ts` (all text labels)
- **Biography**: `app/[lang]/biography/page.tsx`
- **Store info**: `app/[lang]/store/page.tsx`

After editing, run `npm run build` and re-upload.

---

## Contact Form Setup

The contact form is currently a static HTML form. To make it functional, you have three options:

### Option 1: Formspree (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
- Sign up at https://formspree.io
- Free plan allows 50 submissions/month
- Just update the form action in `app/[lang]/contact/page.tsx`

### Option 2: Hostinger Email
- Use Hostinger's form-to-email feature
- Check Hostinger docs for PHP mail() setup

### Option 3: External Service
- Google Forms
- Typeform
- Other form services

---

## Development Commands

```bash
# Run development server (with hot reload)
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start
```

---

## Project Structure

```
gonzalo/
├── app/                      # Pages and routes
│   ├── [lang]/              # Language-based routing
│   │   ├── page.tsx         # Home page
│   │   ├── works/           # Gallery pages
│   │   ├── biography/       # Biography page
│   │   ├── contact/         # Contact page
│   │   └── store/           # Store page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Navigation.tsx       # Header navigation
│   ├── Gallery.tsx          # Gallery grid
│   └── Lightbox.tsx         # Image viewer
├── lib/
│   ├── i18n.ts             # Translations
│   └── getArtworks.ts      # Image listing
├── public/
│   └── images/             # Artwork images
│       ├── bodegones/
│       └── retratos/
└── out/                    # Built static files (upload this!)
```

---

## Customization Tips

### Colors
Edit the Tailwind classes throughout the files:
- `neutral-900` = Dark gray/black
- `neutral-50` = Light background
- `neutral-600` = Medium gray

### Fonts
Fonts are imported in `app/globals.css`:
- **Serif**: Playfair Display (headings, artist name)
- **Sans**: Inter (body text, navigation)

To change fonts, update the Google Fonts import and the `@theme` section.

### Layout
- **Navigation**: `components/Navigation.tsx`
- **Footer**: `app/[lang]/layout.tsx`

---

## Troubleshooting

**Images not showing?**
- Make sure `public/images/bodegones/` and `public/images/retratos/` were uploaded
- Check that image file paths are correct

**404 errors?**
- Ensure `index.html` is in the root of your domain folder
- Check that all folders (en/, es/, _next/, images/) were uploaded

**CSS not loading?**
- Make sure the `_next/` folder was uploaded completely
- Check browser console for errors

---

## Support

Need help? Check:
- Hostinger documentation: https://support.hostinger.com
- Next.js documentation: https://nextjs.org/docs

---

## Technical Details

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: Static HTML export
- **Images**: 94 total artworks (25 bodegones, 69 retratos)

**No server required!** This is a fully static website that works on any web hosting.
