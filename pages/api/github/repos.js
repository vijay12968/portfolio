import { fetchGitHubAPI, transformRepoToProject, validateGitHubUsername } from '../../../utils/api';
import { getCachedData, setCachedData } from '../../../utils/cache';
import { GITHUB_USERNAME } from '../../../utils/constants';
import { logAPIMetrics } from '../../../utils/performance';

/**
 * API Route: /api/github/repos
 * Fetches GitHub repositories with caching
 *
 * Query params:
 *  - force_refresh: 'true' to bypass cache
 *  - username: GitHub username (defaults to GITHUB_USERNAME)
 */
export default async function handler(req, res) {
  const startTime = Date.now();

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse query params
    const { force_refresh, username } = req.query;
    const targetUsername = username || GITHUB_USERNAME;

    // Validate username
    if (!validateGitHubUsername(targetUsername)) {
      return res.status(400).json({ error: 'Invalid GitHub username format' });
    }

    // Cache key
    const cacheKey = `github_repos_${targetUsername}`;

    // Check cache (unless force refresh)
    if (force_refresh !== 'true') {
      const cachedData = await getCachedData(cacheKey);
      if (cachedData) {
        const duration = Date.now() - startTime;
        logAPIMetrics('/api/github/repos', duration, true);
        console.log('Serving from cache:', cacheKey);
        return res.status(200).json({
          data: cachedData,
          cached: true,
          source: 'cache',
          responseTime: `${duration}ms`,
        });
      }
    }

    // Fetch from GitHub API
    console.log('Fetching from GitHub API:', targetUsername);
    const repos = await fetchGitHubAPI(`/users/${targetUsername}/repos`, {
      // Sort by updated date, show public repos only
      query: '?sort=updated&type=public&per_page=100',
    });

    // Filter out forked repos and archived repos (optional)
    const filteredRepos = repos.filter(repo => !repo.fork && !repo.archived);

    // Transform repos to portfolio projects
    const projects = filteredRepos.map(transformRepoToProject);

    // Sort by stars (descending)
    projects.sort((a, b) => {
      const starsA = parseInt(a.metrics[0]?.replace(/[^0-9]/g, '') || 0);
      const starsB = parseInt(b.metrics[0]?.replace(/[^0-9]/g, '') || 0);
      return starsB - starsA;
    });

    // Cache the result
    await setCachedData(cacheKey, projects);

    const duration = Date.now() - startTime;
    logAPIMetrics('/api/github/repos', duration, false);

    return res.status(200).json({
      data: projects,
      cached: false,
      source: 'github_api',
      count: projects.length,
      responseTime: `${duration}ms`,
    });
  } catch (error) {
    console.error('GitHub API error:', error.message);

    // Try to serve stale cache on error
    const cacheKey = `github_repos_${req.query.username || GITHUB_USERNAME}`;
    const staleCache = await getCachedData(cacheKey);

    if (staleCache) {
      console.log('Serving stale cache due to error:', cacheKey);
      return res.status(200).json({
        data: staleCache,
        cached: true,
        source: 'stale_cache',
        warning: 'Serving cached data due to API error',
      });
    }

    // No cache available, return error
    return res.status(500).json({
      error: 'Unable to fetch GitHub repositories. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
