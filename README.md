# AyurMetabolics.fit

A professional educational blog website focusing on the intersection of Ayurveda, metabolic health, and visceral fat reduction. The site combines traditional wisdom with modern scientific evidence, designed for health-conscious individuals seeking science-backed natural remedies.

## Features

- **Dynamic Blog Feed**: Homepage organized by categories (Herbal Protocols, Metabolic Science, Visceral Fat)
- **About the Author Page**: Highlights dual background as Data Scientist and Ayurvedic Doctor (BAMS)
- **Research/Evidence Section**: Curated collection of clinical studies with analysis
- **Newsletter Subscription**: Weekly insights delivery system
- **Visit Counter**: Tracks and displays site visits
- **Like & Comment System**: Interactive engagement on blog posts
- **Google Ads Integration**: Ready for AdSense integration
- **Long-form Reading Optimization**: Typography and layout optimized for extended reading

## Design

The site features a "Modern Holistic" aesthetic:
- Clean, white-space heavy design inspired by medical journals
- Earthy accent colors: Sage green (#87a96b) and Turmeric gold (#d4a574)
- Authoritative yet empathetic tone
- Responsive design for all devices

## Technology Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** (v4)
- **React Markdown** for blog content
- **Date-fns** for date formatting
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (Note: Currently running on 18.15.0 with warnings, but should work)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ayurmetabolics/ayurmetabolicsfit.git
cd ayurmetabolicsfit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Google Ads

To enable Google Ads:

1. Get your AdSense Publisher ID from Google AdSense
2. Update `components/GoogleAds.tsx`:
   - Replace `YOUR_PUBLISHER_ID` with your actual publisher ID
   - Update `adSlot` values with your ad slot IDs

### Newsletter Integration

The newsletter subscription currently logs emails. To integrate with an email service:

1. Update `app/api/newsletter/route.ts`
2. Integrate with your preferred service (Mailchimp, ConvertKit, SendGrid, etc.)

Example for Mailchimp:
```typescript
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

await mailchimp.lists.addListMember(listId, {
  email_address: email,
  status: 'subscribed',
});
```

### Domain Setup (Namecheap)

To connect your domain `AyurMetabolics.fit`:

1. **For Vercel Deployment** (Recommended):
   - Deploy to Vercel
   - In Vercel dashboard, go to Project Settings > Domains
   - Add `ayurmetabolics.fit` and `www.ayurmetabolics.fit`
   - Update your Namecheap DNS to point to Vercel's nameservers

2. **For Other Hosting**:
   - Update DNS A records to point to your hosting provider's IP
   - Add CNAME for www subdomain

## Project Structure

```
├── app/
│   ├── api/              # API routes (visits, likes, comments, newsletter)
│   ├── about/            # About the Author page
│   ├── blog/[id]/        # Individual blog post pages
│   ├── research/         # Research/Evidence section
│   ├── layout.tsx        # Root layout with navigation
│   ├── page.tsx          # Homepage with blog feed
│   └── globals.css       # Global styles and design system
├── components/           # React components
│   ├── BlogCard.tsx
│   ├── CommentSection.tsx
│   ├── GoogleAds.tsx
│   ├── LikeButton.tsx
│   ├── Navigation.tsx
│   ├── Newsletter.tsx
│   ├── VisitCounter.tsx
│   └── VisitTracker.tsx
├── lib/
│   ├── data.ts           # Sample blog posts and research studies
│   └── types.ts          # TypeScript type definitions
└── data/                 # Generated data files (visits, likes, comments)
```

## Data Storage

Currently, the site uses file-based storage for:
- Visit counts (`data/visits.json`)
- Likes (`data/likes.json`)
- Comments (`data/comments.json`)

For production, consider migrating to a database (PostgreSQL, MongoDB, etc.) for better scalability and reliability.

## Adding Blog Posts

Edit `lib/data.ts` to add new blog posts. Each post includes:
- Title, excerpt, and full content (Markdown supported)
- Category (Herbal Protocols, Metabolic Science, or Visceral Fat)
- Author name
- Publication date
- Initial like count

## Adding Research Studies

Edit `lib/data.ts` to add new research studies. Each study includes:
- Title, authors, journal, year
- DOI (optional)
- Abstract
- Relevance to AyurMetabolics

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### GitHub Pages (Configured)

✅ **The project is configured for GitHub Pages deployment!**

1. Push your code to GitHub
2. Go to Repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on every push to `main`

See `GITHUB_PAGES_SETUP.md` for detailed instructions.

**Note**: GitHub Pages uses static export, so dynamic features (visits, likes, comments) use client-side storage (localStorage) per user.

### Vercel (Alternative)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain in Vercel settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## License

All rights reserved. This is a private project for AyurMetabolics.fit.

## Support

For questions or issues, please contact through the website or open an issue in the repository.
