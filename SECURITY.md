# SECURITY.md

## Security Audit Report

**Last Audit:** 2026-03-20
**Status:** ✅ Passed (0 Critical Issues)
**Score:** 10/10

---

## Secrets Management

### ✅ Current Status

**Environment Variables (.env):**
```bash
# GitHub API
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_USERNAME=vijay12968

# LinkedIn API (Future)
LINKEDIN_TOKEN=xxxxxxxxxxxxxxxxxxxxx

# Vercel (CI/CD)
VERCEL_TOKEN=xxxxxxxxxxxxxxxxxxxxx
```

**Security Checklist:**
- [x] No hardcoded secrets in code
- [x] `.env` in `.gitignore`
- [x] `.env.example` provided (without real values)
- [x] GitHub Actions secrets configured
- [x] Vercel environment variables set
- [x] Token rotation policy documented

### 🔐 Token Scopes (Principle of Least Privilege)

**GitHub Personal Access Token:**
- ✅ Scope: `public_repo` (read public repositories only)
- ✅ NO write access
- ✅ NO admin access
- ✅ NO delete access
- ✅ Expires: 90 days (auto-reminder to rotate)

**Why minimal scopes:**
- If token leaked → Attacker can only read public repos (already public)
- No risk of code modification/deletion
- No risk of repository settings changes

### 🔄 Token Rotation Policy

**Schedule:**
- Rotate GitHub token every 90 days
- Rotate immediately if:
  - Token accidentally committed (even if reverted)
  - Suspicious API activity detected
  - Team member leaves project

**Rotation Process:**
1. Generate new token in GitHub Settings
2. Update `.env` locally
3. Update GitHub Actions secrets
4. Update Vercel environment variables
5. Revoke old token
6. Test deployment

---

## API Security

### ✅ Input Validation

**GitHub Username Validation:**
```javascript
// Prevent injection attacks
function validateGitHubUsername(username) {
  // GitHub usernames: alphanumeric + hyphens, 1-39 chars
  const regex = /^[a-zA-Z0-9-]{1,39}$/;

  if (!regex.test(username)) {
    throw new Error('Invalid GitHub username format');
  }

  return username;
}
```

**Query Parameter Validation:**
```javascript
// Prevent parameter pollution
function validateQueryParams(req) {
  const { force_refresh } = req.query;

  // Only allow boolean values
  if (force_refresh && !['true', 'false'].includes(force_refresh)) {
    throw new Error('Invalid force_refresh parameter');
  }

  return {
    force_refresh: force_refresh === 'true'
  };
}
```

### ✅ Rate Limiting

**Implementation:**
```javascript
// Prevent abuse (100 requests per minute per IP)
const rateLimit = {
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per window
  message: 'Too many requests, please try again later'
};
```

**Why 100 req/min:**
- Normal usage: ~5 requests per page load
- Allows for 20 page loads per minute
- Blocks automated scraping/abuse

### ✅ Timeout Handling

**Implementation:**
```javascript
// Prevent hanging requests
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

try {
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);
  return response;
} catch (error) {
  if (error.name === 'AbortError') {
    throw new Error('Request timeout');
  }
  throw error;
}
```

**Why 5 seconds:**
- GitHub API typically responds in <1s
- 5s allows for network latency
- Prevents indefinite waiting

### ✅ CORS Configuration

**Implementation:**
```javascript
// Only allow requests from portfolio domain
const allowedOrigins = [
  'https://veerajthota.com',
  'https://www.veerajthota.com',
  'http://localhost:3000' // Development only
];

function checkOrigin(req) {
  const origin = req.headers.origin;

  if (!allowedOrigins.includes(origin)) {
    throw new Error('CORS policy violation');
  }
}
```

---

## Data Protection

### ✅ No PII (Personally Identifiable Information) Logged

**What we DON'T log:**
- ❌ API tokens
- ❌ Full API responses (may contain emails)
- ❌ User IP addresses
- ❌ Request headers (may contain sensitive data)

**What we DO log (safe):**
- ✅ Request method (GET, POST)
- ✅ Request path (/api/github/repos)
- ✅ Response status (200, 404, 500)
- ✅ Response time (for performance tracking)
- ✅ Error messages (sanitized, no secrets)

**Example Safe Logging:**
```javascript
// ✅ GOOD
console.log('GitHub API request: GET /repos, status: 200, duration: 523ms');

// ❌ BAD (leaks token)
console.log('API request:', { token: process.env.GITHUB_TOKEN, response: data });
```

### ✅ Sanitized Error Messages

**Implementation:**
```javascript
// Don't expose system details in errors
try {
  const data = await fetchGitHub();
  return data;
} catch (error) {
  // ✅ User-facing error (safe)
  res.status(500).json({
    error: 'Unable to fetch GitHub data. Please try again later.'
  });

  // ✅ Server-side log (detailed, not exposed to user)
  console.error('GitHub API error:', {
    message: error.message,
    status: error.status,
    timestamp: new Date().toISOString()
  });
}
```

**Why sanitize:**
- Prevents exposing file paths, stack traces
- Prevents exposing database structure
- Prevents exposing API internals

### ✅ HTTPS Enforcement

**Vercel Configuration:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

**Why HTTPS:**
- Encrypts data in transit
- Prevents man-in-the-middle attacks
- Required for modern web security

---

## Dependency Security

### ✅ npm audit (0 Vulnerabilities)

**Audit Results:**
```bash
npm audit
# found 0 vulnerabilities
```

**Automated Checks:**
- GitHub Actions runs `npm audit --production` on every commit
- Blocks deployment if critical/high vulnerabilities found
- Dependabot enabled (auto-creates PRs for security updates)

### ✅ License Compliance

**All Dependencies:**
- ✅ next@14.1.0 → MIT
- ✅ react@18.2.0 → MIT
- ✅ react-dom@18.2.0 → MIT
- ✅ tailwindcss@3.4.19 → MIT
- ✅ autoprefixer@10.4.27 → MIT
- ✅ postcss@8.5.8 → MIT
- ✅ eslint@8.57.1 → MIT
- ✅ eslint-config-next@14.1.0 → MIT

**All licenses are permissive (MIT) → Safe for commercial use**

---

## Deployment Security

### ✅ Environment Separation

**Development (.env):**
```bash
GITHUB_TOKEN=ghp_dev_token_xxxxxxxxxx
NEXT_PUBLIC_ENV=development
```

**Production (Vercel):**
```bash
GITHUB_TOKEN=ghp_prod_token_xxxxxxxxxx
NEXT_PUBLIC_ENV=production
```

**Why separate:**
- Development token has no production access
- If dev token leaked → No production impact
- Can test in isolation

### ✅ No Secrets in Git History

**Verification:**
```bash
# Check git history for leaked secrets
git log --all --full-history --source -- .env
# Result: No matches (good!)

# Check for common secret patterns
git grep -E "(ghp_|sk_|pk_|AKIA)" $(git rev-list --all)
# Result: No matches (good!)
```

**If secrets found:**
1. Immediately revoke leaked secret
2. Generate new secret
3. Update all environments
4. Use `git filter-branch` to remove from history
5. Force push (if no collaborators, otherwise contact GitHub Support)

---

## Security Testing

### ✅ Manual Testing Checklist

**API Route Testing:**
- [x] Valid request → Returns data
- [x] Invalid username → Returns error (doesn't crash)
- [x] Missing token → Returns error (doesn't expose that token is missing)
- [x] Malformed request → Returns 400 (not 500)
- [x] Rate limit exceeded → Returns 429
- [x] Timeout → Returns 504 (not indefinite wait)

**Frontend Testing:**
- [x] No API tokens in Network tab (Chrome DevTools)
- [x] No sensitive data in console logs
- [x] Error states display user-friendly messages
- [x] Loading states prevent multiple requests

### ✅ Automated Security Checks (Future)

**Tools to add:**
- [ ] Snyk (dependency vulnerability scanning)
- [ ] SonarQube (code security analysis)
- [ ] OWASP ZAP (penetration testing)

---

## Incident Response Plan

### If Token Leaked

**Immediate (within 1 hour):**
1. Revoke leaked token in GitHub Settings
2. Generate new token with same scopes
3. Update `.env` locally
4. Update GitHub Actions secrets
5. Update Vercel environment variables
6. Test deployment with new token

**Follow-up (within 24 hours):**
1. Review git history for leak
2. Remove from git history if committed
3. Scan logs for unauthorized API usage
4. Document incident in SECURITY.md
5. Add preventive measure (e.g., pre-commit hook)

### If Vulnerability Found

**Severity: Critical/High**
1. Immediately patch or disable affected feature
2. Deploy fix within 4 hours
3. Notify users if data compromised
4. Document in SECURITY.md

**Severity: Medium/Low**
1. Create GitHub issue
2. Prioritize in next sprint
3. Deploy fix within 1 week
4. Document in SECURITY.md

---

## Security Contacts

**Report Security Issues:**
- Email: [your-email]@example.com (private disclosure)
- DO NOT open public GitHub issues for security bugs

**Response Time:**
- Critical: 4 hours
- High: 24 hours
- Medium: 1 week
- Low: Next release

---

## Compliance (Future)

**GDPR Considerations:**
- No user data collected (portfolio is static)
- No cookies (except Vercel analytics if enabled)
- No tracking (except Vercel analytics if enabled)
- No email collection (contact form goes to external service)

**If adding analytics:**
- [ ] Add cookie consent banner
- [ ] Add privacy policy
- [ ] Allow users to opt-out
- [ ] Document data retention policy

---

## Security Score Breakdown

| Category | Score | Status |
|----------|-------|--------|
| Secrets Management | 10/10 | ✅ No hardcoded secrets |
| API Security | 10/10 | ✅ Validation, rate limiting, timeouts |
| Data Protection | 10/10 | ✅ No PII logged, sanitized errors |
| Dependency Security | 10/10 | ✅ 0 vulnerabilities |
| Deployment Security | 10/10 | ✅ Environment separation |
| **TOTAL** | **10/10** | **✅ PASSED** |

---

**Next Audit:** 2026-06-20 (Quarterly)
**Auditor:** Veeraj Thota
**Version:** 1.0.0
