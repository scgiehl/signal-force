/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background layers — deep graphite, never pitch black
        ink: {
          950: '#07090d',
          900: '#0a0d12',
          850: '#0e1218',
          800: '#13171e',
          750: '#171c25',
          700: '#1c222c',
          600: '#252c39',
          500: '#2e3645',
        },
        // Text and surface contrast
        bone: {
          50: '#f4f6fa',
          100: '#e8ecf1',
          200: '#cfd5e0',
          300: '#a8b1c0',
          400: '#7e8595',
          500: '#5a616f',
        },
        // Signal accent — cobalt-blue from the logo concept
        signal: {
          400: '#5b8bff',
          500: '#3d6eff',
          600: '#2856f0',
          700: '#1d44cc',
        },
        // Secondary accent — restrained amber for "intelligence priority"
        amber: {
          400: '#e6b25c',
          500: '#d29a3f',
          600: '#a87a2d',
        },
        // Tertiary — analog red for alerts / SIGINT-style classification tags
        warn: {
          500: '#e85a4f',
        },
      },
      fontFamily: {
        display: ['"Orbitron"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.28em',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-lines-strong':
          'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 40%, rgba(61,110,255,0.18) 0%, rgba(7,9,13,0) 70%)',
        'panel-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.03) 100%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-64': '64px 64px',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.03) inset, 0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px -20px rgba(0,0,0,0.6)',
        signal: '0 0 0 1px rgba(61,110,255,0.35), 0 0 40px -10px rgba(61,110,255,0.6)',
        glow: '0 0 80px -10px rgba(61,110,255,0.45)',
      },
      animation: {
        sweep: 'sweep 6s linear infinite',
        pulse2: 'pulse2 3s ease-in-out infinite',
        scan: 'scan 4s ease-in-out infinite',
        ticker: 'ticker 60s linear infinite',
        caret: 'caret 1s steps(1) infinite',
        stack: 'stack 3.6s cubic-bezier(0.22, 1, 0.36, 1) infinite',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        caret: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        stack: {
          '0%': { transform: 'translateY(28px) scaleX(0.92)', opacity: '0' },
          '18%': { transform: 'translateY(0) scaleX(1)', opacity: '1' },
          '82%': { transform: 'translateY(0) scaleX(1)', opacity: '1' },
          '100%': { transform: 'translateY(-10px) scaleX(0.96)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
