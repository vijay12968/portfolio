import { GITHUB_API_BASE, API_TIMEOUT_MS } from './constants';

/**
 * API utilities for external API calls
 */

/**
 * Fetch data from GitHub API with timeout and error handling
 * @param {string} endpoint - GitHub API endpoint (e.g., '/users/vijay12968')
 * @param {object} options - Fetch options
 * @returns {object} API response data
 */
export async function fetchGitHubAPI(endpoint, options = {}) {
  const url = `${GITHUB_API_BASE}${endpoint}`;
  const token = process.env.GITHUB_TOKEN;

  // Setup timeout controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        ...(token && { 'Authorization': `token ${token}` }),
        ...options.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Handle rate limiting
    if (response.status === 403 && response.headers.get('X-RateLimit-Remaining') === '0') {
      const resetTime = response.headers.get('X-RateLimit-Reset');
      const resetDate = new Date(resetTime * 1000);
      throw new Error(`GitHub API rate limit exceeded. Resets at ${resetDate.toISOString()}`);
    }

    // Handle authentication errors
    if (response.status === 401) {
      throw new Error('GitHub API authentication failed. Check GITHUB_TOKEN.');
    }

    // Handle not found
    if (response.status === 404) {
      throw new Error(`GitHub API endpoint not found: ${endpoint}`);
    }

    // Handle other errors
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error(`GitHub API request timeout after ${API_TIMEOUT_MS}ms`);
    }

    throw error;
  }
}

/**
 * Validate GitHub username format
 * @param {string} username - GitHub username
 * @returns {boolean} True if valid
 */
export function validateGitHubUsername(username) {
  // GitHub usernames: alphanumeric + hyphens, 1-39 chars
  const regex = /^[a-zA-Z0-9-]{1,39}$/;
  return regex.test(username);
}

/**
 * Sanitize API response (remove sensitive data before caching/logging)
 * @param {object} data - API response data
 * @returns {object} Sanitized data
 */
export function sanitizeAPIResponse(data) {
  // Remove potentially sensitive fields
  const sensitive = ['email', 'node_id', 'url', 'events_url', 'followers_url'];

  if (Array.isArray(data)) {
    return data.map(item => sanitizeObject(item, sensitive));
  }

  return sanitizeObject(data, sensitive);
}

function sanitizeObject(obj, sensitiveFields) {
  const sanitized = { ...obj };

  sensitiveFields.forEach(field => {
    delete sanitized[field];
  });

  return sanitized;
}

/**
 * Transform GitHub repository data to portfolio project format
 * @param {object} repo - GitHub repository object
 * @returns {object} Portfolio project object
 */
export function transformRepoToProject(repo) {
  // Determine project type based on topics/language
  const topics = repo.topics || [];
  const language = repo.language || '';

  let projectType = 'WEB APP';
  if (topics.includes('machine-learning') || topics.includes('ml')) {
    projectType = 'ML SYSTEM';
  } else if (topics.includes('data-science') || topics.includes('data')) {
    projectType = 'DATA SCIENCE';
  } else if (topics.includes('llm') || topics.includes('nlp')) {
    projectType = 'LLM PIPELINE';
  }

  // Determine neon color (alternate cyan/pink)
  const neonColor = Math.random() > 0.5 ? 'cyan' : 'pink';

  return {
    title: repo.name,
    subtitle: repo.description || 'GitHub Project',
    description: repo.description || 'View on GitHub for details',
    type: projectType,
    tech: [
      repo.language,
      ...topics.slice(0, 3), // First 3 topics as tech stack
    ].filter(Boolean),
    metrics: [
      `⭐ ${repo.stargazers_count} stars`,
      `🍴 ${repo.forks_count} forks`,
      repo.homepage && '🔗 Live Demo',
    ].filter(Boolean),
    neon: neonColor,
    icon: getProjectIcon(projectType),
    url: repo.html_url,
    homepage: repo.homepage,
  };
}

function getProjectIcon(type) {
  const icons = {
    'ML SYSTEM': '🤖',
    'DATA SCIENCE': '📊',
    'LLM PIPELINE': '⚡',
    'WEB APP': '🌐',
    'API SERVICE': '🔌',
  };
  return icons[type] || '💻';
}
