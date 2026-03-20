/**
 * Performance Monitoring Utilities
 *
 * Track and measure performance metrics
 */

/**
 * Measure execution time of a function
 * @param {Function} fn - Function to measure
 * @param {string} label - Label for logging
 * @returns {Promise<any>} Function result
 */
export async function measureTime(fn, label = 'Operation') {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`);
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    console.error(`[Performance] ${label} failed after ${duration.toFixed(2)}ms:`, error.message);
    throw error;
  }
}

/**
 * Log performance metrics for API calls
 * @param {string} endpoint - API endpoint
 * @param {number} duration - Duration in ms
 * @param {boolean} cached - Whether data was cached
 */
export function logAPIMetrics(endpoint, duration, cached = false) {
  const source = cached ? 'cache' : 'API';
  const emoji = duration < 50 ? '⚡' : duration < 500 ? '✅' : '⚠️';

  console.log(`${emoji} [API] ${endpoint} (${source}): ${duration.toFixed(2)}ms`);

  // Warning for slow API calls
  if (!cached && duration > 2000) {
    console.warn(`[Performance] Slow API call detected: ${endpoint} took ${duration.toFixed(2)}ms`);
  }
}

/**
 * Calculate cache hit rate
 * @param {number} hits - Number of cache hits
 * @param {number} misses - Number of cache misses
 * @returns {string} Cache hit rate percentage
 */
export function calculateCacheHitRate(hits, misses) {
  const total = hits + misses;
  if (total === 0) return '0%';
  const rate = (hits / total) * 100;
  return `${rate.toFixed(1)}%`;
}

/**
 * Format bytes to human-readable size
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size
 */
export function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Monitor memory usage (Node.js only)
 * @returns {object} Memory usage stats
 */
export function getMemoryUsage() {
  if (typeof process === 'undefined') return null;

  const usage = process.memoryUsage();
  return {
    heapUsed: formatBytes(usage.heapUsed),
    heapTotal: formatBytes(usage.heapTotal),
    external: formatBytes(usage.external),
    rss: formatBytes(usage.rss),
  };
}

/**
 * Log memory usage
 */
export function logMemoryUsage() {
  const usage = getMemoryUsage();
  if (!usage) return;

  console.log('[Performance] Memory Usage:', {
    'Heap Used': usage.heapUsed,
    'Heap Total': usage.heapTotal,
    'RSS': usage.rss,
  });
}

/**
 * Create a performance mark (for Web Performance API)
 * @param {string} name - Mark name
 */
export function mark(name) {
  if (typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name);
  }
}

/**
 * Measure between two performance marks
 * @param {string} name - Measure name
 * @param {string} startMark - Start mark name
 * @param {string} endMark - End mark name
 * @returns {number} Duration in ms
 */
export function measure(name, startMark, endMark) {
  if (typeof performance !== 'undefined' && performance.measure) {
    performance.measure(name, startMark, endMark);
    const entries = performance.getEntriesByName(name);
    if (entries.length > 0) {
      return entries[0].duration;
    }
  }
  return 0;
}

/**
 * Get Core Web Vitals (client-side only)
 * Note: Requires web-vitals library: npm install web-vitals
 * Commented out until library is installed
 */
// export async function reportWebVitals() {
//   if (typeof window === 'undefined') return;
//   try {
//     const webVitals = await import('web-vitals');
//     webVitals.getCLS(console.log);
//     webVitals.getFID(console.log);
//     webVitals.getFCP(console.log);
//     webVitals.getLCP(console.log);
//     webVitals.getTTFB(console.log);
//   } catch (err) {
//     console.log('[Performance] web-vitals not installed');
//   }
// }

/**
 * Performance budget checker
 * @param {object} metrics - Current metrics
 * @param {object} budgets - Performance budgets
 * @returns {object} Budget status
 */
export function checkPerformanceBudget(metrics, budgets) {
  const results = {};

  for (const [key, value] of Object.entries(metrics)) {
    const budget = budgets[key];
    if (budget) {
      const withinBudget = value <= budget;
      results[key] = {
        current: value,
        budget,
        withinBudget,
        percentage: ((value / budget) * 100).toFixed(1) + '%',
      };
    }
  }

  return results;
}

/**
 * Example usage in API route:
 *
 * import { measureTime, logAPIMetrics } from '../../utils/performance';
 *
 * export default async function handler(req, res) {
 *   const start = Date.now();
 *
 *   const data = await measureTime(
 *     () => fetchGitHubAPI('/users/vijay12968/repos'),
 *     'GitHub API - Fetch Repos'
 *   );
 *
 *   const duration = Date.now() - start;
 *   logAPIMetrics('/api/github/repos', duration, false);
 *
 *   return res.json({ data });
 * }
 */
