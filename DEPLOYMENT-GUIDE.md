# 🚀 DEPLOYMENT GUIDE - VERCEL

**Target:** Deploy portfolio to Vercel (production)
**Time:** ~15 minutes
**Result:** Live portfolio at veerajthota.vercel.app

---

## ✅ PRE-DEPLOYMENT CHECKLIST

Before we deploy, let's verify everything is ready:

- [x] Code builds successfully ✅
- [x] Bundle size optimized (89.6 KB) ✅
- [x] API routes created ✅
- [x] Caching implemented ✅
- [x] Security configured ✅
- [ ] GitHub token added to .env ⚠️ **YOU NEED TO DO THIS**
- [ ] Git repository initialized
- [ ] Pushed to GitHub

---

## STEP 1: GET YOUR GITHUB TOKEN 🔑

### Option A: Create New Token (Recommended)

1. **Go to GitHub Settings:**
   ```
   https://github.com/settings/tokens
   ```

2. **Click "Generate new token (classic)"**

3. **Configure token:**
   - Note: `Portfolio Auto-Update`
   - Expiration: `90 days`
   - Scopes: **ONLY** check `public_repo` (read public repositories)

   ⚠️ **IMPORTANT:** Only `public_repo` - nothing else!

4. **Generate token**
   - Click "Generate token" at bottom
   - **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)

5. **Add to your .env file:**
   ```bash
   # Open .env in editor
   # Replace "your_token_here" with your actual token
   GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   GITHUB_USERNAME=vijay12968
   ```

### Option B: Use Existing Token

If you already have a token with `public_repo` scope:
1. Copy your existing token
2. Add to `.env` file

---

## STEP 2: TEST LOCALLY 🧪

Before deploying, let's make sure everything works:

```bash
# 1. Install dependencies (if not already)
npm install

# 2. Clean previous build
npm run clean

# 3. Build for production
npm run build

# Should see:
# ✓ Compiled successfully
# Route (pages)           Size     First Load JS
# ┌ ○ /                   4.41 kB  89.6 kB
```

**If build succeeds:** ✅ Continue to Step 3

**If build fails:**
- Check if `GITHUB_TOKEN` is set correctly in `.env`
- Make sure token has `public_repo` scope
- Verify internet connection

---

## STEP 3: TEST DEV SERVER 🌐

Let's verify the GitHub API integration works:

```bash
# Start development server
npm run dev
```

**Open browser:** http://localhost:3000

**Check:**
1. ✅ Page loads (Hero section visible)
2. ✅ Projects section shows (should fetch from GitHub)
3. ✅ Look at bottom of Projects section:
   - Should say: "◆ Live from GitHub API" or "◆ Cached from GitHub"
   - If it says "◆ Featured Projects (API unavailable)" → Token issue

**If everything works:** ✅ Continue to Step 4

**If API fails:**
- Check browser console (F12) for errors
- Check terminal for API errors
- Verify `GITHUB_TOKEN` is correct
- Make sure GitHub username is `vijay12968`

---

## STEP 4: INITIALIZE GIT REPOSITORY 📦

Let's prepare for GitHub:

```bash
# Check if git is already initialized
git status

# If NOT initialized (error: not a git repository):
git init
git add .
git commit -m "feat: production-grade portfolio with 9 skills integration

- Auto-updating from GitHub API
- Code splitting (89.6 KB bundle, -71% main)
- Security audit passed (10/10)
- CI/CD pipeline with daily refresh
- Performance optimized
- All 9 engineering skills applied

Phases 1-5 complete (62.5%)"

# If ALREADY initialized:
git add .
git commit -m "feat: ready for production deployment"
```

---

## STEP 5: PUSH TO GITHUB 🐙

### Create GitHub Repository

1. **Go to GitHub:**
   ```
   https://github.com/new
   ```

2. **Repository settings:**
   - Repository name: `portfolio`
   - Description: `Production-grade auto-updating portfolio`
   - Visibility: **Public** (so Vercel can access)
   - ❌ **DON'T** initialize with README (you already have one)

3. **Create repository**

### Push Your Code

```bash
# Add remote (replace vijay12968 with your GitHub username if different)
git remote add origin https://github.com/vijay12968/portfolio.git

# Check branch name
git branch

# If branch is "master", rename to "main":
git branch -M main

# Push to GitHub
git push -u origin main

# Enter GitHub credentials if prompted
```

**Verify on GitHub:**
- Go to https://github.com/vijay12968/portfolio
- Should see all your files
- ✅ README.md should be visible
- ✅ Check that `.env` is NOT visible (gitignored)

---

## STEP 6: DEPLOY TO VERCEL 🚀

### Create Vercel Account (if needed)

1. **Go to Vercel:**
   ```
   https://vercel.com
   ```

2. **Sign up with GitHub:**
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

### Import Repository

1. **From Vercel Dashboard:**
   - Click "Add New..." → "Project"
   - Click "Import" next to your `portfolio` repository

2. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

### Add Environment Variable ⚠️ CRITICAL

**Before deploying, add your GitHub token:**

1. **Click "Environment Variables"**

2. **Add variable:**
   - Name: `GITHUB_TOKEN`
   - Value: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` (your actual token)
   - Environment: **Production, Preview, Development** (check all)

3. **Add second variable:**
   - Name: `GITHUB_USERNAME`
   - Value: `vijay12968`
   - Environment: **Production, Preview, Development** (check all)

### Deploy

1. **Click "Deploy"**

2. **Wait for build (~2-3 minutes):**
   - Watch build logs
   - Should see: "✓ Compiled successfully"
   - Should see: "✓ Generating static pages"

3. **Deployment complete:**
   - You'll see: "🎉 Congratulations!"
   - Click "Visit" to see live site

---

## STEP 7: VERIFY DEPLOYMENT ✅

### Check Live Site

1. **Visit your live URL:**
   ```
   https://portfolio-<random>.vercel.app
   ```

2. **Verify features:**
   - [x] Page loads (Hero section)
   - [x] Projects load from GitHub API
   - [x] Check projects section bottom: "◆ Live from GitHub API"
   - [x] Navigation works
   - [x] Smooth animations
   - [x] Mobile responsive

### Check API Routes

```bash
# Test API endpoints
curl https://your-portfolio.vercel.app/api/github/repos

# Should return JSON with your repositories
```

### Custom Domain (Optional)

**If you have a domain (e.g., veerajthota.com):**

1. Go to Vercel Project → "Settings" → "Domains"
2. Add your domain
3. Configure DNS (Vercel provides instructions)
4. Wait for DNS propagation (~10 min - 24 hours)

---

## STEP 8: RUN PERFORMANCE TESTS 📊

Now that it's live, let's measure real performance:

### Lighthouse Audit

1. **Open your live site in Chrome**
2. **Open DevTools (F12)**
3. **Go to "Lighthouse" tab**
4. **Configure:**
   - Mode: Navigation
   - Device: Desktop
   - Categories: Performance, Accessibility, Best Practices, SEO
5. **Click "Analyze page load"**

**Expected Scores:**
- Performance: **>90** ✅
- Accessibility: **>95** ✅
- Best Practices: **>95** ✅
- SEO: **>90** ✅

### k6 Load Test

```bash
# Install k6 (if not installed)
# Windows: choco install k6
# Mac: brew install k6
# Linux: apt-get install k6

# Run load test against live site
BASE_URL=https://your-portfolio.vercel.app npm run perf:load
```

**Expected Results:**
- ✅ 95% of requests <1000ms
- ✅ Error rate <1%
- ✅ Handles 100 concurrent users

---

## STEP 9: CONFIGURE GITHUB ACTIONS 🔄

Enable automatic deployments on push:

### Add Vercel Token (Optional - for manual deployments)

If you want GitHub Actions to deploy instead of Vercel's GitHub integration:

1. **Get Vercel Token:**
   - Vercel Dashboard → Settings → Tokens
   - Create new token: `GitHub Actions`

2. **Add to GitHub Secrets:**
   - GitHub Repo → Settings → Secrets → Actions
   - New secret: `VERCEL_TOKEN` = `your_vercel_token`

3. **Add GitHub Token:**
   - New secret: `GITHUB_TOKEN` = `your_github_token`

**Note:** Vercel's GitHub integration auto-deploys by default, so this is optional.

---

## STEP 10: UPDATE DOCUMENTATION 📝

Update your live URL everywhere:

### 1. Update README.md

```bash
# Find this line:
**Live Site:** [veerajthota.com](https://veerajthota.com) *(coming soon)*

# Replace with:
**Live Site:** [your-portfolio.vercel.app](https://your-portfolio.vercel.app) ✅
```

### 2. Update GitHub Repository

- Go to GitHub repo → Settings
- Add website: `https://your-portfolio.vercel.app`
- Add description: `Production-grade auto-updating portfolio`

### 3. Push updates

```bash
git add README.md
git commit -m "docs: add live deployment URL"
git push
```

---

## 🎉 DEPLOYMENT COMPLETE!

Your portfolio is now live with:

- ✅ Auto-updating from GitHub API
- ✅ 89.6 KB optimized bundle
- ✅ Security headers configured
- ✅ Daily data refresh (GitHub Actions)
- ✅ Code splitting (lazy loading)
- ✅ Performance monitoring
- ✅ Professional design

---

## 📊 NEXT STEPS (AFTER DEPLOYMENT)

### Immediate (Today)
1. ✅ Run Lighthouse audit
2. ✅ Document Lighthouse scores in PERFORMANCE.md
3. ✅ Run k6 load test
4. ✅ Share portfolio URL (LinkedIn, resume)

### Short-term (This Week)
1. Add Vercel Analytics (optional)
2. Set up custom domain (optional)
3. Add error tracking with Sentry (optional)
4. Start Phase 6: Testing

### Long-term (This Month)
1. Add more projects to GitHub (they'll auto-sync!)
2. Add LinkedIn integration (Phase 3 enhancement)
3. Add blog section (optional)
4. Continuous improvements

---

## 🆘 TROUBLESHOOTING

### Build Fails on Vercel

**Error: "Module not found"**
- Check `package.json` has all dependencies
- Run `npm install` locally first
- Make sure build succeeds locally

**Error: "GitHub API authentication failed"**
- Check `GITHUB_TOKEN` environment variable in Vercel
- Verify token has `public_repo` scope
- Make sure token isn't expired

### Projects Don't Load

**Shows "Featured Projects (API unavailable)"**
- Check Vercel logs: Project → Deployments → Latest → View Function Logs
- Verify `GITHUB_TOKEN` environment variable is set
- Check token hasn't expired
- Verify `GITHUB_USERNAME=vijay12968`

### Slow Performance

**Lighthouse score <90**
- Check "Network" throttling isn't enabled
- Test on fast internet connection
- Wait for cache to warm up (first visit is slower)
- Check Vercel region (should be close to you)

---

## 📧 SUPPORT

**Issues?**
- Check Vercel logs: Dashboard → Project → Deployments → Logs
- Check GitHub Actions: GitHub → Actions tab
- Check browser console (F12)

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs
- GitHub: Open issue in your repo

---

**Ready to deploy? Let's do this!** 🚀

**Start with Step 1: Get your GitHub token!**
