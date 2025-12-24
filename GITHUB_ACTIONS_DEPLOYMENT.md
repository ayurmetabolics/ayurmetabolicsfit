# Detailed Steps: Deploy to GitHub Pages Using GitHub Actions

## 📋 Prerequisites Checklist

Before starting, ensure you have:
- ✅ All code committed locally
- ✅ GitHub account created
- ✅ Repository created on GitHub (or ready to create)
- ✅ GitHub Actions workflow file exists (`.github/workflows/deploy.yml`)

---

## 🚀 Step-by-Step Deployment Guide

### STEP 1: Verify Your Local Setup

First, check that everything is ready:

```bash
# Navigate to your project directory
cd /Users/paln1/githubRepo/ayurmetabolicsfit

# Check git status
git status

# Verify the workflow file exists
ls -la .github/workflows/deploy.yml
```

You should see:
- Files staged or committed
- The workflow file exists

---

### STEP 2: Create GitHub Repository (If Not Already Created)

If you haven't created the repository on GitHub yet:

1. **Go to GitHub**
   - Open https://github.com in your browser
   - Log in to your account

2. **Create New Repository**
   - Click the **"+"** icon in the top right
   - Select **"New repository"**

3. **Repository Settings**
   - **Repository name**: `ayurmetabolicsfit` (or your preferred name)
   - **Description**: "AyurMetabolics - Ayurveda and Metabolic Health Blog"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check:
     - ❌ "Add a README file" (you already have one)
     - ❌ "Add .gitignore" (you already have one)
     - ❌ "Choose a license" (optional)
   - Click **"Create repository"**

4. **Copy the Repository URL**
   - GitHub will show you commands, but note the URL
   - It will look like: `https://github.com/YOUR_USERNAME/ayurmetabolicsfit.git`

---

### STEP 3: Connect Local Repository to GitHub

If you haven't connected your local repo to GitHub:

```bash
# Check if remote is already set
git remote -v

# If nothing shows, add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ayurmetabolicsfit.git

# Verify it was added
git remote -v
```

**Example:**
```bash
git remote add origin https://github.com/johndoe/ayurmetabolicsfit.git
```

---

### STEP 4: Commit All Changes

Make sure all your files are committed:

```bash
# Check what needs to be committed
git status

# Add all files (if not already staged)
git add .

# Commit with a descriptive message
git commit -m "Initial commit: AyurMetabolics blog website configured for GitHub Pages"

# Verify the commit
git log --oneline -1
```

---

### STEP 5: Push to GitHub

Push your code to the main branch:

```bash
# Push to GitHub (first time)
git push -u origin main

# Or if you've pushed before
git push origin main
```

**What happens:**
- Your code uploads to GitHub
- This may take a minute or two
- You'll see progress in the terminal

**If you get an error about authentication:**
- GitHub may require a Personal Access Token
- Go to: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate a new token with `repo` permissions
- Use the token as your password when pushing

---

### STEP 6: Verify Workflow File is on GitHub

1. **Go to your repository on GitHub**
   - Navigate to: `https://github.com/YOUR_USERNAME/ayurmetabolicsfit`

2. **Check the workflow file exists**
   - Click on `.github` folder
   - Click on `workflows` folder
   - You should see `deploy.yml` file
   - If you don't see it, the push didn't include it - go back to Step 4

---

### STEP 7: Enable GitHub Pages with GitHub Actions

This is the critical step:

1. **Navigate to Settings**
   - In your repository, click the **"Settings"** tab
   - It's in the top menu bar of your repository

2. **Go to Pages Section**
   - In the left sidebar, scroll down and click **"Pages"**
   - You'll see "GitHub Pages" settings

3. **Select Source**
   - Look for a section labeled **"Source"** or **"Build and deployment"**
   - You'll see a dropdown that might say "Deploy from a branch" or "None"
   - **Click the dropdown** and select **"GitHub Actions"**
   - This is different from "Deploy from a branch"

4. **Save (if needed)**
   - Some configurations auto-save
   - If there's a **"Save"** button, click it

**What you should see after selecting GitHub Actions:**
- A message saying your site will be published via GitHub Actions
- No branch/folder selection needed
- The workflow will handle everything

---

### STEP 8: Trigger the Deployment Workflow

The workflow should start automatically, but you can verify:

1. **Go to Actions Tab**
   - Click the **"Actions"** tab in your repository
   - It's next to "Code", "Issues", "Pull requests", etc.

2. **Find the Workflow**
   - You should see "Deploy to GitHub Pages" workflow
   - It might show as "running" (yellow dot) or "completed" (green checkmark)

3. **If Workflow Didn't Start Automatically:**
   - Click on "Deploy to GitHub Pages"
   - Click **"Run workflow"** button (top right)
   - Select branch: `main`
   - Click **"Run workflow"**

---

### STEP 9: Monitor the Build Process

Watch the workflow run:

1. **Click on the Running Workflow**
   - You'll see it's running (yellow indicator)
   - Click on it to see details

2. **View Build Steps**
   - You'll see steps like:
     - ✅ Checkout
     - ✅ Setup Node.js
     - ✅ Install dependencies
     - ✅ Build
     - ✅ Setup Pages
     - ✅ Upload artifact
     - ✅ Deploy to GitHub Pages

3. **Wait for Completion**
   - This takes **2-5 minutes**
   - You'll see each step complete with a green checkmark ✅
   - The final step is "Deploy to GitHub Pages"

4. **Check for Errors**
   - If any step shows a red X ❌, click on it to see the error
   - Common issues:
     - Node version mismatch (should use Node 20)
     - Missing dependencies
     - Build errors

---

### STEP 10: Verify Deployment Success

Once the workflow completes:

1. **Check Workflow Status**
   - All steps should have green checkmarks ✅
   - The workflow should show "completed" with a green checkmark

2. **Go Back to Settings → Pages**
   - Navigate to: Settings → Pages
   - You should see:
     - "Your site is live at: https://YOUR_USERNAME.github.io/ayurmetabolicsfit/"
     - A green checkmark indicating it's published

3. **Visit Your Site**
   - Click the link or go to: `https://YOUR_USERNAME.github.io/ayurmetabolicsfit/`
   - Your site should load!

---

### STEP 11: Test Your Site

Verify everything works:

- [ ] Homepage loads
- [ ] Navigation works (Blog, Research, About)
- [ ] Blog posts are visible
- [ ] Can click on blog posts to read them
- [ ] Like buttons work (click to test)
- [ ] Comments work (try adding a comment)
- [ ] Visit counter shows
- [ ] Newsletter form displays
- [ ] All pages load correctly

---

## 🔄 Future Updates

After the initial deployment, updating your site is easy:

1. **Make changes to your code**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update: your change description"
   git push origin main
   ```
3. **The workflow runs automatically**
   - Go to Actions tab
   - Watch it deploy (takes 2-3 minutes)
   - Your site updates automatically!

---

## 🐛 Troubleshooting

### Problem: "GitHub Actions" option not showing

**Solution:**
1. Make sure you pushed the `.github/workflows/deploy.yml` file
2. Refresh the Settings → Pages page
3. Wait a few minutes after pushing - GitHub needs time to detect the workflow

### Problem: Workflow fails with "Node version" error

**Solution:**
- The workflow is already configured to use Node 20
- If it still fails, check the workflow file exists and is correct

### Problem: Build fails

**Solution:**
1. Click on the failed step in Actions
2. Read the error message
3. Common fixes:
   - Missing dependencies: Check `package.json`
   - Syntax errors: Fix code issues
   - Missing files: Ensure all files are committed

### Problem: Site shows 404

**Solution:**
1. Check if workflow completed successfully
2. Wait a few more minutes (deployment can take time)
3. Clear browser cache
4. Try incognito/private browsing mode

### Problem: Changes not appearing

**Solution:**
1. Verify you pushed to `main` branch
2. Check Actions tab - is workflow running?
3. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
4. Wait 2-3 minutes for deployment

---

## ✅ Success Checklist

After following all steps, you should have:

- ✅ Code pushed to GitHub
- ✅ GitHub Actions workflow file in repository
- ✅ GitHub Pages enabled with "GitHub Actions" source
- ✅ Workflow running/completed successfully
- ✅ Site accessible at GitHub Pages URL
- ✅ All features working on the live site

---

## 📝 Quick Command Reference

```bash
# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main

# Check remote
git remote -v

# Add remote (if needed)
git remote add origin https://github.com/YOUR_USERNAME/ayurmetabolicsfit.git
```

---

## 🎉 You're Done!

Once deployed, your site will automatically update every time you push to the `main` branch. The GitHub Actions workflow handles everything!

**Your site URL will be:**
```
https://YOUR_USERNAME.github.io/ayurmetabolicsfit/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

