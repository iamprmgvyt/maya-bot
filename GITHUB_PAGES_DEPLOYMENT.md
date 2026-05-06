# GitHub Pages Deployment Guide for Maya Bot Website

This guide will help you deploy your Maya Bot website to GitHub Pages for free hosting.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your project files ready

## Step 1: Prepare Your Project

### 1.1 Create a `.gitignore` file (if not exists)

```gitignore
node_modules
.next
.env
.env.local
.env.production
.env.development
*.log
```

### 1.2 Build the Project

Run the following command to build your Next.js application:

```bash
bun run build
```

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the `+` icon in the top-right corner
3. Select "New repository"
4. Name your repository (e.g., `maya-bot-website`)
5. Make sure to check "Public" if you want it accessible to everyone
6. Click "Create repository"

## Step 3: Push Your Code to GitHub

### 3.1 Initialize Git (if not done)

```bash
cd /home/z/my-project
git init
```

### 3.2 Add Your Files

```bash
git add .
```

### 3.3 Commit Your Changes

```bash
git commit -m "Initial commit: Maya Bot website"
```

### 3.4 Add Remote Repository

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### 3.5 Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Step 4: Configure for GitHub Pages

### Option A: Using GitHub Actions (Recommended for Next.js)

1. Create a folder `.github/workflows` in your project:

```bash
mkdir -p .github/workflows
```

2. Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Build
        run: bun run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Option B: Static Export (Simpler)

1. Update your `next.config.ts`:

```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Build and export:

```bash
bun run build
```

3. Create a `docs` folder and copy the build output:

```bash
mkdir docs
cp -r .next/static/* docs/
cp -r public/* docs/
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment", select:
   - **Source**: GitHub Actions (if using Option A)
   - **Source**: Deploy from a branch (if using Option B)
   - **Branch**: main /docs (if using Option B)
5. Click "Save"

## Step 6: Wait for Deployment

- If using GitHub Actions: The workflow will run automatically
- If using branch deployment: GitHub will build and deploy within a few minutes

Once deployed, you'll see your website at:
`https://YOUR_USERNAME.github.io/REPO_NAME`

## Step 7: Verify Your Website

1. Click the link provided by GitHub Pages
2. Test all features:
   - Navigation between sections
   - Language switching (English, Vietnamese, Hindi)
   - Animations
   - Responsive design on mobile devices

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Make sure all dependencies are installed:
   ```bash
   bun install
   ```

2. Check the build logs in GitHub Actions

3. Verify your `next.config.ts` is correctly configured

### 404 Errors

If you get 404 errors after deployment:

1. Check that GitHub Pages is enabled
2. Verify the build was successful
3. Check the deploy folder structure

### Animations Not Working

If animations don't work on the deployed site:

1. Make sure `framer-motion` is installed
2. Check the browser console for errors
3. Verify that the JavaScript files are loading correctly

## Custom Domain (Optional)

If you want to use a custom domain:

1. Buy a domain from a registrar (e.g., Namecheap, GoDaddy)
2. Go to your repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Follow GitHub's DNS configuration instructions

## Updates

To update your website:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

GitHub will automatically deploy your changes!

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Framer Motion](https://www.framer.com/motion/)

---

## Quick Summary

1. Create GitHub repository
2. Initialize Git and push your code
3. Configure GitHub Pages in repository settings
4. Wait for automatic deployment
5. Visit your live website!

Your Maya Bot website is now live and accessible to users worldwide! 🎵
