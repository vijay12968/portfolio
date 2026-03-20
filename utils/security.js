// Security utilities for form validation and sanitization

/**
 * Sanitize user input to prevent XSS attacks
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';

  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

/**
 * Validate name (no special characters except spaces, hyphens, apostrophes)
 */
export const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
  return nameRegex.test(name);
};

/**
 * Validate message length and content
 */
export const validateMessage = (message) => {
  if (!message || message.length < 10) return false;
  if (message.length > 1000) return false;

  // Check for suspicious patterns (spam indicators)
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner)\b/i,
    /(https?:\/\/){2,}/i, // Multiple URLs
    /(.)\1{10,}/, // Repeated characters
  ];

  return !spamPatterns.some(pattern => pattern.test(message));
};

/**
 * Rate limiting helper (client-side)
 */
export const checkRateLimit = (key, maxAttempts = 3, windowMs = 60000) => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(key) || '[]');

  // Filter attempts within time window
  const recentAttempts = attempts.filter(time => now - time < windowMs);

  if (recentAttempts.length >= maxAttempts) {
    return {
      allowed: false,
      retryAfter: windowMs - (now - recentAttempts[0])
    };
  }

  // Add new attempt
  recentAttempts.push(now);
  localStorage.setItem(key, JSON.stringify(recentAttempts));

  return { allowed: true };
};

/**
 * Generate CSRF-like token for form submission
 */
export const generateFormToken = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Verify form token (basic client-side check)
 */
export const verifyFormToken = (token) => {
  if (!token) return false;

  const [timestamp] = token.split('-');
  const tokenAge = Date.now() - parseInt(timestamp);

  // Token valid for 1 hour
  return tokenAge < 3600000;
};
