import { fetchGitHubAPI, validateGitHubUsername } from '../../../utils/api';
import { getCachedData, setCachedData } from '../../../utils/cache';
import { GITHUB_USERNAME } from '../../../utils/constants';

/**
 * API Route: /api/github/user
 * Fetches GitHub user profile with caching
 *
 * Query params:
 *  - force_refresh: 'true' to bypass cache
 *  - username: GitHub username (defaults to GITHUB_USERNAME)
 */
export default async function handler(req, res) {
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
    const cacheKey = `github_user_${targetUsername}`;

    // Check cache (unless force refresh)
    if (force_refresh !== 'true') {
      const cachedData = await getCachedData(cacheKey);
      if (cachedData) {
        console.log('Serving from cache:', cacheKey);
        return res.status(200).json({
          data: cachedData,
          cached: true,
          source: 'cache',
        });
      }
    }

    // Fetch from GitHub API
    console.log('Fetching from GitHub API:', targetUsername);
    const user = await fetchGitHubAPI(`/users/${targetUsername}`);

    // Extract relevant user data
    const userData = {
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatar: user.avatar_url,
      location: user.location,
      company: user.company,
      blog: user.blog,
      twitter: user.twitter_username,
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };

    // Cache the result
    await setCachedData(cacheKey, userData);

    return res.status(200).json({
      data: userData,
      cached: false,
      source: 'github_api',
    });
  } catch (error) {
    console.error('GitHub API error:', error.message);

    // Try to serve stale cache on error
    const cacheKey = `github_user_${req.query.username || GITHUB_USERNAME}`;
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
      error: 'Unable to fetch GitHub user profile. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
