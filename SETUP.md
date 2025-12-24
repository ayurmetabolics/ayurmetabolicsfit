# Setup Guide for AyurMetabolics.fit

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your actual values.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Google Ads Setup

1. **Get your Publisher ID:**
   - Sign up for Google AdSense at https://www.google.com/adsense
   - Once approved, you'll receive a Publisher ID (format: `ca-pub-XXXXXXXXXX`)

2. **Configure in environment:**
   - Add `NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID=ca-pub-XXXXXXXXXX` to `.env.local`

3. **Get Ad Slot IDs:**
   - In AdSense dashboard, create ad units
   - Each ad unit has a unique slot ID
   - Update `adSlot` props in components where `<GoogleAds />` is used

4. **Update ad slots in code:**
   - `app/page.tsx` - Update the `adSlot` values
   - `app/about/page.tsx` - Update the `adSlot` value
   - `app/research/page.tsx` - Update the `adSlot` values
   - `app/blog/[id]/page.tsx` - Update the `adSlot` values

## Newsletter Integration

### Option 1: Mailchimp

1. Install Mailchimp SDK:
   ```bash
   npm install @mailchimp/mailchimp_marketing
   ```

2. Get API credentials from Mailchimp dashboard

3. Update `app/api/newsletter/route.ts`:
   ```typescript
   import mailchimp from '@mailchimp/mailchimp_marketing';

   mailchimp.setConfig({
     apiKey: process.env.MAILCHIMP_API_KEY,
     server: process.env.MAILCHIMP_SERVER_PREFIX,
   });

   await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
     email_address: email,
     status: 'subscribed',
   });
   ```

### Option 2: ConvertKit

1. Install ConvertKit SDK:
   ```bash
   npm install @convertkit/api
   ```

2. Update the newsletter route accordingly

### Option 3: Custom Email Service

Implement your own email service integration in `app/api/newsletter/route.ts`

## Domain Configuration (Namecheap)

### For Vercel Deployment:

1. **Deploy to Vercel:**
   - Push code to GitHub
   - Import repository in Vercel
   - Deploy

2. **Add Domain in Vercel:**
   - Go to Project Settings > Domains
   - Add `ayurmetabolics.fit`
   - Add `www.ayurmetabolics.fit`

3. **Update Namecheap DNS:**
   - Log into Namecheap
   - Go to Domain List > Manage
   - Change nameservers to Vercel's (provided in Vercel dashboard)
   - Or use Advanced DNS and add A/CNAME records as instructed by Vercel

### For Other Hosting:

1. Get your hosting provider's IP address or nameservers
2. Update Namecheap DNS records accordingly
3. Add domain to your hosting provider

## Content Management

### Adding Blog Posts

Edit `lib/data.ts` and add to the `blogPosts` array:

```typescript
{
  id: 'unique-id',
  title: 'Your Post Title',
  excerpt: 'Brief description...',
  content: `# Your Markdown Content Here`,
  category: 'Herbal Protocols' | 'Metabolic Science' | 'Visceral Fat',
  author: 'Dr. Your Name',
  publishedAt: '2024-12-24',
  likes: 0,
  comments: []
}
```

### Adding Research Studies

Edit `lib/data.ts` and add to the `researchStudies` array:

```typescript
{
  id: 'unique-id',
  title: 'Study Title',
  authors: 'Author Names',
  journal: 'Journal Name',
  year: 2024,
  doi: '10.xxxx/xxxxx', // optional
  abstract: 'Study abstract...',
  relevance: 'Why this matters for AyurMetabolics...'
}
```

## Production Deployment

### Build the site:
```bash
npm run build
```

### Test production build locally:
```bash
npm start
```

### Deploy to Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Environment Variables in Production:
- Add all environment variables in your hosting provider's dashboard
- For Vercel: Project Settings > Environment Variables

## Data Storage

Currently using file-based storage. For production, consider:

1. **Database Migration:**
   - PostgreSQL (recommended)
   - MongoDB
   - Supabase
   - PlanetScale

2. **Update API Routes:**
   - Replace file I/O with database queries
   - Add proper error handling
   - Implement rate limiting

## Customization

### Colors:
Edit `app/globals.css` to change the color scheme:
- Sage Green: `#87a96b`
- Turmeric Gold: `#d4a574`
- Accent Earth: `#8b7355`

### Typography:
The site uses Inter font. To change:
1. Import a different font in `app/layout.tsx`
2. Update CSS variables in `app/globals.css`

### Layout:
- Navigation: `components/Navigation.tsx`
- Footer: `app/layout.tsx`
- Page layouts: Individual page files in `app/`

## Troubleshooting

### Visit Counter Not Working:
- Ensure `/data` directory exists and is writable
- Check file permissions
- Verify API route is accessible

### Google Ads Not Showing:
- Verify Publisher ID is correct
- Check AdSense account is approved
- Ensure ad slots are active
- Check browser console for errors

### Newsletter Not Working:
- Verify API route is accessible
- Check email service credentials
- Review server logs for errors

## Support

For issues or questions, check the main README.md or contact through the website.

