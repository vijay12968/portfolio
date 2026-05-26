/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Performance: Compress output
  compress: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24, // Cache images for 24 hours
  },

  // Turbopack configuration (Next.js 16+)
  turbopack: {},

  // Security + Performance Headers
  // ship-safe-ignore MISSING_CSP - CSP configured below on line 51-52
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [ // ship-safe-ignore MISSING_CSP - includes CSP header
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.github.com;"
          }
        ],
      },
      {
        // Cache API responses
        source: '/api/:path*',
        headers: [ // ship-safe-ignore MISSING_CSP - API endpoints inherit global CSP
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Note: Webpack config removed - Next.js 16 uses Turbopack by default
  // Turbopack handles optimization automatically with better performance
};

module.exports = nextConfig;
