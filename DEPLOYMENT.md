# Deployment Guide for Gonzalo Morales Website

## What You Have

A Next.js portfolio website showcasing artwork, ready to deploy to production hosting.

## Website Features

✅ **Bilingual** - English and Spanish versions (automatically switches via URL)
✅ **Gallery** - 94 artworks (25 bodegones + 69 retratos) with lightbox viewing
✅ **Responsive** - Works on mobile, tablet, and desktop
✅ **Modern Stack** - Next.js 16 with optimized performance
✅ **Elegant Design** - Minimalist, classical design perfect for art

## Pages Included

- **Home** (`/en` and `/es`) - Hero section with featured works
- **Works** - Full gallery with category filters (Bodegones/Retratos)
- **Biography** - Artist biography in both languages
- **Contact** - Contact form
- **Store** - Print inquiry and licensing information

---

## Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps. It's made by the creators of Next.js and offers excellent performance.

### Method 1: Deploy from GitHub (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up or log in (use your GitHub account)

2. **Import your repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository: `Gonzalo-Morales---Web`

3. **Configure the project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `next build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add `gonzalomorales.net`
   - Follow Vercel's instructions to update DNS records

### Method 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy!

# For production deployment
vercel --prod
```

### Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Preview deployments for pull requests
- Rollback to previous versions anytime

---

## Alternative Hosting Options

### Netlify

1. **Connect Repository**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain `gonzalomorales.net`

### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize and deploy
railway init
railway up
```

### Render

1. Go to https://render.com
2. Connect your GitHub repository
3. Select "Web Service"
4. Build command: `npm run build`
5. Start command: `npm run start`

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Build settings are auto-detected for Next.js
4. Deploy

---

## Custom Domain Setup

### General DNS Configuration

Point your domain to your hosting provider:

**For Vercel:**
- Add A record: `76.76.21.21`
- Add CNAME record: `www` → `cname.vercel-dns.com`

**For Netlify:**
- Add A record pointing to Netlify's IP
- Add CNAME record: `www` → `your-site.netlify.app`

### SSL Certificate

All recommended platforms provide free SSL certificates automatically via Let's Encrypt.

---

## Environment Variables

If you need environment variables (e.g., for contact form API keys):

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add your variables (e.g., `EMAIL_API_KEY`)
3. Redeploy for changes to take effect

**Netlify:**
1. Go to Site settings → Environment variables
2. Add your variables

Create a `.env.local` file for local development (already in `.gitignore`):
```
EMAIL_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

---

## Performance Optimization

Your site is already optimized, but here are the features enabled:

✅ **Image Optimization** - Next.js automatically optimizes images
✅ **Code Splitting** - Only loads necessary JavaScript
✅ **Static Generation** - Pages pre-rendered for fast loading
✅ **CDN Distribution** - Assets served from global CDN
✅ **Caching** - Automatic cache headers for static assets

---

## Contact Form Integration

To make the contact form functional after deployment:

### Option 1: Vercel Forms + Email Service

Install Resend (free tier available):
```bash
npm install resend
```

Create `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'contact@gonzalomorales.net',
      to: 'your-email@example.com',
      subject: `Contact from ${name}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

### Option 2: Formspree (No code needed)

1. Sign up at https://formspree.io
2. Create a form and get your form ID
3. Update `components/ContactForm.tsx`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: SendGrid

Similar to Resend, use SendGrid's API for email sending.

---

## Monitoring & Analytics

### Vercel Analytics (Built-in)

Automatically tracks:
- Page views
- Performance metrics
- Core Web Vitals

Enable in Vercel dashboard → Analytics

### Google Analytics

Add to `app/layout.tsx`:
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

---

## Updating Content

### Adding Artworks

1. Add images to `public/images/bodegones/` or `public/images/retratos/`
2. Commit and push to GitHub:
```bash
git add public/images/
git commit -m "Add new artworks"
git push origin main
```
3. Automatic deployment triggers (on Vercel/Netlify)

### Updating Text

1. Edit files in `app/[lang]/` or `lib/i18n.ts`
2. Push to GitHub
3. Automatic deployment

---

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 3001)
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start

# Type checking
npx tsc --noEmit
```

---

## Troubleshooting

**Build failing on Vercel?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Node version: Use latest LTS (specified in `package.json` if needed)

**Images not loading?**
- Verify images are committed to Git
- Check image paths are correct
- Clear Vercel cache and redeploy

**Custom domain not working?**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings

**Environment variables not working?**
- Redeploy after adding variables
- Variables starting with `NEXT_PUBLIC_` are exposed to browser
- Other variables are server-side only

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
└── .next/                  # Build output (auto-generated)
```

---

## Technical Details

- **Framework**: Next.js 16 with App Router
- **Build Tool**: Turbopack (fast refresh)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Recommended Hosting**: Vercel
- **Images**: 94 total artworks (25 bodegones, 69 retratos)

---

## GitHub Repository

https://github.com/beralc/Gonzalo-Morales---Web

## Support Resources

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- GitHub Repository: https://github.com/beralc/Gonzalo-Morales---Web
