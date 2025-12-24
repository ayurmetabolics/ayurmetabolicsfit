# GitHub Pages Deployment Guide

## ✅ Configuration Complete

Your project has been configured for GitHub Pages deployment. All dynamic features have been converted to use client-side storage (localStorage) since GitHub Pages only serves static files.

## Changes Made

1. **Next.js Static Export**: Configured `next.config.ts` for static export
2. **Client-Side Storage**: Converted API routes to use localStorage
3. **GitHub Actions Workflow**: Created automatic deployment workflow
4. **Updated Components**: All interactive features now work client-side

## Deployment Steps

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Push Your Code

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

### 3. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your Next.js site
- Export it as static files
- Deploy to GitHub Pages

### 4. Access Your Site

Your site will be available at:
- `https://[your-username].github.io/ayurmetabolicsfit/`

Or if you set up a custom domain:
- `https://ayurmetabolics.fit`

## Custom Domain Setup

### Option 1: Using Repository Name in URL

If your repository is `ayurmetabolicsfit`, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/ayurmetabolicsfit',
  trailingSlash: true,
};
```

### Option 2: Using Custom Domain (ayurmetabolics.fit)

1. In GitHub repository Settings → Pages:
   - Enter your custom domain: `ayurmetabolics.fit`
   - Check "Enforce HTTPS"

2. Update `next.config.ts`:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     // No basePath needed for custom domain
   };
   ```

3. Update Namecheap DNS:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record: `@` → `[your-username].github.io`

## Features That Work on GitHub Pages

✅ **Visit Counter**: Uses localStorage (per-user, not global)  
✅ **Like Button**: Uses localStorage (per-user)  
✅ **Comments**: Uses localStorage (per-user)  
✅ **Newsletter**: Configure external service (see below)  
✅ **Google Ads**: Works with static export  
✅ **All Pages**: Fully functional  

## Newsletter Integration

Since GitHub Pages is static, you need an external service for newsletter subscriptions:

### Option 1: Formspree (Free Tier Available)

1. Sign up at https://formspree.io
2. Create a form
3. Get your form endpoint
4. Add to GitHub Secrets:
   - Go to Repository → Settings → Secrets and variables → Actions
   - Add secret: `NEXT_PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/YOUR_FORM_ID`
5. Update `.env.local` (for local development):
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

### Option 2: Mailchimp

Use Mailchimp's embedded form or API with a serverless function (Vercel, Netlify Functions).

### Option 3: ConvertKit

Similar to Mailchimp, use their API with a serverless function.

## Environment Variables

For GitHub Pages deployment, add secrets in:
**Repository → Settings → Secrets and variables → Actions**

- `NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID` (if using Google Ads)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (if using Formspree)

These will be available during the build process.

## Local Development

For local development, create `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_ADS_PUBLISHER_ID=ca-pub-XXXXXXXXXX
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## Limitations

⚠️ **Client-Side Storage**: 
- Visit counter, likes, and comments are stored per-user in their browser
- Not shared across users
- For shared data, you'll need a backend service

⚠️ **No Server-Side Features**:
- No API routes
- No server-side rendering
- No database connections

## Upgrading to Full Backend (Optional)

If you need shared data (global visit counter, shared comments), consider:
- **Vercel**: Free tier with serverless functions
- **Netlify**: Free tier with serverless functions
- **Railway**: Easy database hosting
- **Supabase**: Free tier with database and auth

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Ensure Node.js 20+ is used (workflow specifies this)
- Verify all dependencies are in `package.json`

### Site Not Updating
- Check GitHub Actions workflow status
- Verify Pages settings use "GitHub Actions" as source
- Clear browser cache

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Pages domain settings

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages in repository settings
3. ✅ Configure custom domain (if using)
4. ✅ Set up newsletter service
5. ✅ Add environment variables as secrets
6. ✅ Monitor deployment in Actions tab

Your site will automatically deploy on every push to `main` branch!

