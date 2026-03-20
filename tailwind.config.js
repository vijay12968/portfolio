/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          white: '#fafafa',
          cream: '#f5f1ed',
          tan: '#f0ebe3',
        },
        sage: {
          DEFAULT: '#8b9e7e',
          light: '#d1dcc8',
          dark: '#6a7d5e',
        },
        charcoal: '#2a2a2a',
        gold: '#d4a574',
        muted: '#5a5a5a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.05)',
        md: '0 4px 16px rgba(0,0,0,0.08)',
        lg: '0 8px 32px rgba(0,0,0,0.12)',
        gold: '0 0 20px rgba(212, 165, 116, 0.3)',
        sage: '0 0 20px rgba(139, 158, 126, 0.3)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.14)',
      },
      transitionDuration: {
        250: '250ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 158, 126, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 158, 126, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
