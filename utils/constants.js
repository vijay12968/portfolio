// Global Constants

// GitHub Configuration
export const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'vijay12968';
export const GITHUB_API_BASE = 'https://api.github.com';

// Cache Configuration
export const CACHE_DIR = '.cache';
export const CACHE_TTL = parseInt(process.env.CACHE_TTL) || 86400; // 24 hours in seconds

// API Rate Limiting
export const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 60000; // 1 minute
export const RATE_LIMIT_MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100;

// API Timeouts
export const API_TIMEOUT_MS = 5000; // 5 seconds

// GitHub API Endpoints
export const GITHUB_ENDPOINTS = {
  USER: '/users/{username}',
  REPOS: '/users/{username}/repos',
  REPO: '/repos/{username}/{repo}',
};

// Project Categories (for filtering)
export const PROJECT_TYPES = {
  ML: 'ML SYSTEM',
  DATA: 'DATA SCIENCE',
  LLM: 'LLM PIPELINE',
  WEB: 'WEB APP',
  API: 'API SERVICE',
};

// Skills Categories
export const SKILL_CATEGORIES = {
  DATA_ENGINEERING: 'Data Engineering',
  MACHINE_LEARNING: 'Machine Learning',
  WEB_DEVELOPMENT: 'Web Development',
  TOOLS: 'Tools & Technologies',
};

// Neon Colors (for UI consistency)
export const NEON_COLORS = {
  CYAN: 'cyan',
  PINK: 'pink',
};
