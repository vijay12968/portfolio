import fs from 'fs';
import path from 'path';
import { CACHE_DIR, CACHE_TTL } from './constants';

/**
 * File-based caching utility
 * Caches API responses to reduce external API calls
 */

/**
 * Get cached data if valid (not expired)
 * @param {string} key - Cache key (filename)
 * @returns {object|null} Cached data or null if expired/missing
 */
export async function getCachedData(key) {
  try {
    const cacheFilePath = path.join(process.cwd(), CACHE_DIR, `${key}.json`);

    // Check if cache file exists
    if (!fs.existsSync(cacheFilePath)) {
      return null;
    }

    // Read cache file
    const cacheContent = fs.readFileSync(cacheFilePath, 'utf-8');
    const cache = JSON.parse(cacheContent);

    // Check if cache is expired
    const now = Date.now();
    const cacheAge = now - cache.timestamp;
    const isExpired = cacheAge > CACHE_TTL * 1000; // Convert TTL to milliseconds

    if (isExpired) {
      console.log(`Cache expired for key: ${key} (age: ${Math.floor(cacheAge / 1000)}s, TTL: ${CACHE_TTL}s)`);
      return null;
    }

    console.log(`Cache hit for key: ${key} (age: ${Math.floor(cacheAge / 1000)}s)`);
    return cache.data;
  } catch (error) {
    console.error(`Error reading cache for key: ${key}`, error.message);
    return null;
  }
}

/**
 * Set cached data with timestamp
 * @param {string} key - Cache key (filename)
 * @param {object} data - Data to cache
 */
export async function setCachedData(key, data) {
  try {
    const cacheDir = path.join(process.cwd(), CACHE_DIR);
    const cacheFilePath = path.join(cacheDir, `${key}.json`);

    // Ensure cache directory exists
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }

    // Write cache file with timestamp
    const cacheContent = {
      timestamp: Date.now(),
      data,
    };

    fs.writeFileSync(cacheFilePath, JSON.stringify(cacheContent, null, 2));
    console.log(`Cache set for key: ${key}`);
  } catch (error) {
    console.error(`Error writing cache for key: ${key}`, error.message);
  }
}

/**
 * Clear cache for a specific key
 * @param {string} key - Cache key (filename)
 */
export async function clearCache(key) {
  try {
    const cacheFilePath = path.join(process.cwd(), CACHE_DIR, `${key}.json`);

    if (fs.existsSync(cacheFilePath)) {
      fs.unlinkSync(cacheFilePath);
      console.log(`Cache cleared for key: ${key}`);
    }
  } catch (error) {
    console.error(`Error clearing cache for key: ${key}`, error.message);
  }
}

/**
 * Clear all cache files
 */
export async function clearAllCache() {
  try {
    const cacheDir = path.join(process.cwd(), CACHE_DIR);

    if (fs.existsSync(cacheDir)) {
      const files = fs.readdirSync(cacheDir);
      files.forEach(file => {
        fs.unlinkSync(path.join(cacheDir, file));
      });
      console.log('All cache cleared');
    }
  } catch (error) {
    console.error('Error clearing all cache:', error.message);
  }
}
