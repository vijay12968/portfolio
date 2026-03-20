/**
 * k6 Load Test Script
 *
 * Tests portfolio performance under load
 *
 * Install k6: https://k6.io/docs/getting-started/installation/
 * Run: k6 run tests/load-test.js
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metrics
const errorRate = new Rate('errors');

// Test configuration
export const options = {
  stages: [
    { duration: '1m', target: 20 },   // Ramp up to 20 users
    { duration: '3m', target: 50 },   // Ramp up to 50 users
    { duration: '2m', target: 100 },  // Spike to 100 users
    { duration: '2m', target: 50 },   // Scale down to 50 users
    { duration: '1m', target: 0 },    // Ramp down to 0 users
  ],
  thresholds: {
    // 95% of requests should be below 1000ms
    http_req_duration: ['p(95)<1000'],
    // Error rate should be below 1%
    errors: ['rate<0.01'],
    // 95% of requests should succeed
    http_req_failed: ['rate<0.05'],
  },
};

// Base URL (change after deployment)
const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export default function () {
  // Test 1: Home page
  let res = http.get(`${BASE_URL}/`);
  check(res, {
    'home page status 200': (r) => r.status === 200,
    'home page loads fast': (r) => r.timings.duration < 1000,
    'home page has content': (r) => r.body.includes('VEERAJ'),
  }) || errorRate.add(1);

  sleep(1);

  // Test 2: GitHub API endpoint (repos)
  res = http.get(`${BASE_URL}/api/github/repos`);
  check(res, {
    'API repos status 200': (r) => r.status === 200,
    'API repos fast': (r) => r.timings.duration < 500,
    'API repos has data': (r) => r.json('data') !== undefined,
  }) || errorRate.add(1);

  sleep(1);

  // Test 3: GitHub API endpoint (user)
  res = http.get(`${BASE_URL}/api/github/user`);
  check(res, {
    'API user status 200': (r) => r.status === 200,
    'API user fast': (r) => r.timings.duration < 500,
    'API user has data': (r) => r.json('data') !== undefined,
  }) || errorRate.add(1);

  sleep(2);

  // Test 4: Cached API call (should be faster)
  res = http.get(`${BASE_URL}/api/github/repos`);
  check(res, {
    'cached API fast': (r) => r.timings.duration < 100,
    'cached from cache': (r) => r.json('cached') === true || r.json('source') === 'cache',
  }) || errorRate.add(1);

  sleep(1);
}

// Summary at the end
export function handleSummary(data) {
  return {
    'tests/load-test-summary.json': JSON.stringify(data, null, 2),
  };
}
