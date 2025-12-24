# Quick Start: Deploy to GitHub Pages

## 🚀 3-Step Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Click **Save**

### Step 3: Wait for Deployment
- Go to **Actions** tab in your repository
- Watch the workflow run (takes ~2-3 minutes)
- Your site will be live at: `https://[username].github.io/ayurmetabolicsfit/`

## ✅ That's It!

The GitHub Actions workflow will automatically:
- Build your site
- Export as static files
- Deploy to GitHub Pages

## 🔧 Optional: Custom Domain

If you want to use `ayurmetabolics.fit`:

1. In GitHub: **Settings** → **Pages** → Enter custom domain
2. Update Namecheap DNS with GitHub Pages IPs (see `GITHUB_PAGES_SETUP.md`)
3. Wait 24-48 hours for DNS propagation

## 📝 Important Notes

- **Visit counter, likes, comments**: Stored per-user in browser (localStorage)
- **Newsletter**: Configure Formspree or similar service (see `GITHUB_PAGES_SETUP.md`)
- **Google Ads**: Add your Publisher ID as a GitHub Secret

## 📚 Full Documentation

See `GITHUB_PAGES_SETUP.md` for detailed instructions.

