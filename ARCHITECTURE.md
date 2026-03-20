# ARCHITECTURE.md

## System Overview

Dynamic portfolio website that auto-syncs with GitHub and LinkedIn APIs to demonstrate production-grade engineering excellence.

---

## Design Decisions

### ADR-001: Next.js API Routes for Data Fetching

**Decision:** Use Next.js API routes instead of direct frontend API calls

**Rationale:**
- API tokens not exposed to frontend (security)
- Server-side caching reduces API calls (performance)
- Centralized error handling (reliability)
- Single point for rate limiting (stability)

**Alternatives Considered:**
- ❌ Direct frontend fetch → Security risk (token exposed)
- ❌ Separate Node.js server → Overkill for portfolio
- ❌ Serverless functions → Similar to API routes but more complex

**Implementation:**
```
/api/github/repos      → Fetch repositories
/api/github/user       → Fetch user profile
/api/linkedin/profile  → Fetch LinkedIn experience (future)
```

---

### ADR-002: File-Based Caching with 24h TTL

**Decision:** Cache GitHub API responses in file system for 24 hours

**Rationale:**
- Reduce GitHub API calls (rate limit: 60/hour unauthenticated, 5000/hour authenticated)
- Faster page loads (serve from cache: ~10ms vs API: ~500ms)
- Handle GitHub API downtime gracefully (stale cache fallback)
- No database overhead for simple portfolio

**Cache Strategy:**
1. **First fetch:** Call GitHub API → Cache result → Serve data
2. **Subsequent:** Check cache → If valid (< 24h) serve cached → Else refresh
3. **Daily refresh:** GitHub Actions scheduled job triggers API refresh
4. **Fallback:** If API fails, serve stale cache (better than error)

**Implementation:**
```javascript
// .cache/github_repos.json (gitignored)
// TTL: 24 hours (86400 seconds)
// Refresh: Daily via GitHub Actions cron
```

**Why not Redis/Database:**
- Portfolio traffic is low (not high-concurrency)
- File system caching is simple, zero dependencies
- Can upgrade to Redis later if needed (architecture allows)

---

### ADR-003: Dark Professional Aesthetic (Existing)

**Decision:** Maintain existing dark theme with cyan/pink neon accents

**Rationale:**
- Already implemented and looks professional
- Tech-forward vibe (matches data engineering brand)
- High contrast for accessibility
- Distinctive (not generic portfolio)

**Design Tokens:**
```css
:root {
  --color-bg: #000000;
  --color-bg-secondary: #0a0e27;
  --color-accent-cyan: #00ffdd;
  --color-accent-pink: #ff006e;
  --color-text: #ffffff;
  --color-text-muted: #9ca3af;

  --font-display: 'Serif', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Fira Code', monospace;
}
```

---

### ADR-004: Component Modularity (<200 lines)

**Decision:** Keep components under 200 lines, extract when growing

**Rationale:**
- Easier to maintain (single responsibility principle)
- Easier to test (isolated units)
- Reduces tech debt (no monolithic components)
- Better code reuse

**Component Hierarchy:**
```
pages/
  index.jsx                 → Home page (layout only)

components/
  Navigation.jsx            → Header navigation
  Hero.jsx                  → Hero section
  Profile.jsx               → About/Bio
  Projects.jsx              → Project cards (auto-updated)
  Arsenal.jsx               → Tools/Tech stack
  Skills.jsx                → Skills visualization
  Contact.jsx               → Contact form
  Footer.jsx                → Footer links
  ScrollProgress.jsx        → Scroll indicator

  ui/                       → Reusable UI components
    ProjectCard.jsx         → Individual project card
    SkillBar.jsx            → Skill proficiency bar
    LoadingSpinner.jsx      → Loading state
    Toast.jsx               → Notification toast

utils/
  api.js                    → API client utilities
  cache.js                  → Cache management
  constants.js              → Global constants
```

---

## Data Flow

### GitHub Repository Sync

```
User visits portfolio
  ↓
Frontend requests /api/github/repos
  ↓
API route checks cache (.cache/github_repos.json)
  ↓
If cache valid (<24h) → Return cached data (10ms)
  ↓
If cache expired → Fetch from GitHub API (500ms)
  ↓
Cache new data → Return to frontend
  ↓
Frontend renders ProjectCard components
```

### Scheduled Data Refresh

```
GitHub Actions (Daily at 00:00 UTC)
  ↓
Run npm run refresh:github
  ↓
Call /api/github/repos with force_refresh=true
  ↓
Fetch fresh data from GitHub API
  ↓
Update cache (.cache/github_repos.json)
  ↓
Commit changes (if data changed)
  ↓
Auto-deploy to Vercel
```

---

## Security Architecture

### Secrets Management
- ✅ All API tokens in `.env` (gitignored)
- ✅ GitHub Actions secrets for CI/CD
- ✅ Environment variables in Vercel
- ✅ No tokens logged or exposed to frontend

### API Security
- ✅ Input validation on all API routes
- ✅ Rate limiting (max 100 req/min per IP)
- ✅ Timeout handling (5s timeout on external APIs)
- ✅ CORS configured (only allow portfolio domain)
- ✅ Error messages don't expose system details

### Data Protection
- ✅ No PII logged
- ✅ API responses sanitized before caching
- ✅ HTTPS enforced
- ✅ No sensitive data in error responses

---

## Performance Architecture

### Optimization Strategies

**1. Code Splitting**
- Lazy load page components
- Split vendor bundles
- Target: Main bundle <100KB

**2. API Caching**
- Cache GitHub API responses (24h TTL)
- Serve cached data instantly (10ms)
- Reduce API calls by 95%+

**3. Image Optimization**
- Use Next.js Image component
- Lazy load images below fold
- WebP format with JPEG fallback

**4. Static Generation**
- Pre-render pages at build time
- Incremental static regeneration (ISR)
- CDN edge caching

### Performance Targets
```
Page Load Time:     <1s
First Contentful Paint: <0.6s
Lighthouse Score:   >90
Bundle Size:        <100KB
API Response:       <500ms (cold), <50ms (cached)
```

---

## CI/CD Pipeline Architecture

### Pipeline Stages

```
1. Lint (ESLint, Prettier)
   ↓
2. Test (Jest, >85% coverage)
   ↓
3. Security (npm audit, 0 vulns)
   ↓
4. Build (Next.js build)
   ↓
5. Deploy (Vercel)
   ↓
6. Refresh Data (Daily cron)
```

### Automated Jobs

**On Push:**
- Run linting
- Run tests
- Security audit
- Build verification

**On Main Branch:**
- All above +
- Deploy to production
- Refresh GitHub data

**Daily Cron (00:00 UTC):**
- Refresh GitHub data
- Refresh LinkedIn data (future)
- Auto-commit if changed
- Auto-deploy

---

## Tech Stack

### Core
- **Framework:** Next.js 14.1.0
- **UI Library:** React 18.2.0
- **Styling:** Tailwind CSS 3.4.19
- **Language:** JavaScript (ES6+)

### DevTools
- **Linting:** ESLint 8.57.1
- **Formatting:** Prettier (to be added)
- **Testing:** Jest + React Testing Library (to be added)
- **CI/CD:** GitHub Actions

### Infrastructure
- **Hosting:** Vercel
- **Caching:** File System (local dev), Vercel Edge (production)
- **Analytics:** Vercel Analytics (optional)
- **Monitoring:** Vercel Logs (optional)

### External APIs
- **GitHub API:** Repository data, user profile
- **LinkedIn API:** Experience, skills (future)

---

## Folder Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml                 # CI/CD pipeline
├── .cache/                        # API cache (gitignored)
│   ├── github_repos.json
│   └── github_user.json
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Profile.jsx
│   ├── Projects.jsx              # Auto-updated from GitHub
│   ├── Arsenal.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── ScrollProgress.jsx
│   └── ui/                       # Reusable UI
│       ├── ProjectCard.jsx
│       ├── SkillBar.jsx
│       ├── LoadingSpinner.jsx
│       └── Toast.jsx
├── pages/
│   ├── index.jsx                 # Home page
│   ├── _app.jsx                  # App wrapper
│   ├── _document.jsx             # Document wrapper
│   └── api/                      # API routes
│       └── github/
│           ├── repos.js          # Fetch repositories
│           └── user.js           # Fetch user profile
├── utils/
│   ├── api.js                    # API utilities
│   ├── cache.js                  # Cache management
│   └── constants.js              # Global constants
├── public/
│   └── images/                   # Static assets
├── styles/
│   └── globals.css               # Global styles
├── tests/                        # Tests
│   ├── components/
│   ├── api/
│   └── utils/
├── .env.example                  # Environment template
├── .env                          # Secrets (gitignored)
├── ARCHITECTURE.md               # This file
├── SECURITY.md                   # Security audit
├── PERFORMANCE.md                # Performance metrics
├── README.md                     # Setup instructions
└── package.json
```

---

## Tech Debt Prevention

### Code Quality Standards

**Naming Conventions:**
- Components: PascalCase (ProjectCard.jsx)
- Functions: camelCase (fetchGitHubRepos)
- Constants: UPPER_SNAKE_CASE (MAX_CACHE_AGE)
- Files: Match component name

**Component Guidelines:**
- Max 200 lines per component
- Single responsibility principle
- Prop validation (PropTypes or TypeScript)
- No console.log in production

**Code Review Checklist:**
- [ ] No hardcoded values (use constants)
- [ ] Error handling on all async operations
- [ ] No TODO comments without issue reference
- [ ] Clear function/variable names
- [ ] Comments explain "why", not "what"

---

## Scalability Considerations

**Current Scale:**
- Portfolio traffic: <1000 visitors/month
- GitHub API calls: ~100/day (with caching)
- Cache storage: <10MB

**Future Scale (if needed):**
- Add Redis for distributed caching
- Add database for analytics tracking
- Add rate limiting per user (not just global)
- Add CDN for static assets
- Add monitoring (Sentry, Datadog)

**Migration Path:**
- File cache → Redis (drop-in replacement, same interface)
- Static site → Dynamic (ISR already supports this)
- Monorepo → Microservices (if adding multiple projects)

---

## Maintenance

### Weekly Tasks
- Review GitHub Actions logs
- Check Vercel deployment status
- Monitor error logs (if any)

### Monthly Tasks
- Update dependencies (npm update)
- Security audit (npm audit)
- Performance audit (Lighthouse)
- Review tech debt score

### Quarterly Tasks
- Refactor outdated patterns
- Update documentation
- Review architecture decisions
- Consider new optimizations

---

## Tech Debt Score Targets

**Current Target:** <2.0/10 (Excellent)

**Scoring Criteria:**
- Component modularity: <200 lines each
- Test coverage: >85%
- Documentation: All major decisions documented
- Security: 0 hardcoded secrets, 0 vulnerabilities
- Performance: Lighthouse >90
- Dependencies: All up-to-date, 0 unused

---

**Last Updated:** 2026-03-20
**Version:** 1.0.0
**Status:** In Progress (Phase 1 Complete)
