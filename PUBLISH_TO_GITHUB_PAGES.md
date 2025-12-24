# How to Publish to GitHub Pages - Step by Step

## 📋 Prerequisites

- Your code is already configured for GitHub Pages ✅
- You have a GitHub account
- Your repository is on GitHub (or you'll create it)

## 🚀 Step-by-Step Instructions

### Step 1: Commit and Push Your Code

If you haven't committed yet, run these commands:

```bash
# Check what's staged (already done)
git status

# Commit all changes
git commit -m "Initial commit: AyurMetabolics blog website configured for GitHub Pages"

# If you haven't connected to GitHub yet, add remote:
# git remote add origin https://github.com/YOUR_USERNAME/ayurmetabolicsfit.git

# Push to GitHub
git push -u origin main
```

**Note**: If this is a new repository, you may need to create it on GitHub first:
1. Go to https://github.com/new
2. Repository name: `ayurmetabolicsfit`
3. Make it Public (required for free GitHub Pages)
4. Don't initialize with README (you already have one)
5. Click "Create repository"
6. Then follow the commands GitHub shows you

### Step 2: Enable GitHub Pages

1. **Go to your repository on GitHub**
   - Navigate to: `https://github.com/YOUR_USERNAME/ayurmetabolicsfit`

2. **Open Settings**
   - Click the **Settings** tab (top right of repository)

3. **Go to Pages**
   - In the left sidebar, click **Pages**

4. **Configure Source**
   - Under **Source**, you'll see a dropdown
   - **IMPORTANT**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
   - This enables the automatic deployment workflow

5. **Save**
   - Click **Save** (if there's a save button)

### Step 3: Trigger the Deployment

The deployment will automatically start when:
- You push code to the `main` branch, OR
- You can manually trigger it:

1. Go to the **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow
3. If it hasn't run yet, click on it and click "Run workflow"

### Step 4: Wait for Deployment

1. **Monitor the workflow**
   - Go to **Actions** tab
   - Click on the running workflow
   - Watch the build process (takes 2-3 minutes)

2. **Check for success**
   - You'll see a green checkmark ✅ when done
   - If there's an error (red X), click on it to see details

### Step 5: Access Your Site

Once deployment is complete, your site will be available at:

**If repository is named `ayurmetabolicsfit`:**
```
https://YOUR_USERNAME.github.io/ayurmetabolicsfit/
```

**If repository is named differently:**
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
```

## 🔧 Optional: Custom Domain Setup

To use `ayurmetabolics.fit` instead of the GitHub.io URL:

### In GitHub:

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `ayurmetabolics.fit`
3. Check **"Enforce HTTPS"**
4. Click **Save**

### In Namecheap:

1. Log into Namecheap
2. Go to **Domain List** → Click **Manage** next to `ayurmetabolics.fit`
3. Go to **Advanced DNS** tab
4. Add these **A Records** (replace existing if any):
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.108.153` → TTL: Automatic
   - Value: `185.199.109.153` → TTL: Automatic
   - Value: `185.199.110.153` → TTL: Automatic
   - Value: `185.199.111.153` → TTL: Automatic

5. Add **CNAME Record** (optional, for www):
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `YOUR_USERNAME.github.io`
   - TTL: Automatic

6. **Wait 24-48 hours** for DNS propagation

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at the GitHub Pages URL
- [ ] Navigation works (Blog, Research, About)
- [ ] Blog posts are visible
- [ ] Like buttons work (test by clicking)
- [ ] Comments work (test by adding a comment)
- [ ] Visit counter shows (may show 0 initially)
- [ ] Newsletter form displays
- [ ] Google Ads placeholder shows (if configured)

## 🐛 Troubleshooting

### Build Fails

**Problem**: Workflow shows red X

**Solutions**:
1. Check the Actions log for error messages
2. Ensure `package.json` has all dependencies
3. Verify Node.js version (workflow uses Node 20)

### Site Not Updating

**Problem**: Changes don't appear after push

**Solutions**:
1. Check Actions tab - is workflow running?
2. Wait a few minutes for deployment
3. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Clear browser cache

### 404 Errors

**Problem**: Pages show 404

**Solutions**:
1. Check if `basePath` is set correctly in `next.config.ts`
2. If using custom domain, verify DNS settings
3. Ensure `.nojekyll` file exists in `public/` folder

### Custom Domain Not Working

**Problem**: Custom domain doesn't load

**Solutions**:
1. Wait 24-48 hours for DNS propagation
2. Verify A records are correct in Namecheap
3. Check GitHub Pages settings show domain is verified
4. Try accessing via GitHub.io URL first to confirm site works

## 📝 Quick Reference Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Check if remote is set
git remote -v

# Add remote (if needed)
git remote add origin https://github.com/YOUR_USERNAME/ayurmetabolicsfit.git
```

## 🎉 Success!

Once deployed, your site will automatically update every time you push to the `main` branch. The GitHub Actions workflow handles everything automatically!

## 📚 Additional Resources

- Full setup guide: `GITHUB_PAGES_SETUP.md`
- Quick start: `DEPLOYMENT_QUICK_START.md`
- Changes made: `GITHUB_PAGES_CHANGES.md`

