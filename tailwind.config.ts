import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F2D5C',
          deep: '#0F1733',
          soft: '#2D4A8F',
        },
        teal: {
          DEFAULT: '#2BA76C',
          deep: '#1F7E50',
          light: '#6FD4A8',
        },
        coral: {
          DEFAULT: '#EC4899',
          deep: '#BE2C7A',
          light: '#FBB6CE',
        },
        sage: {
          DEFAULT: '#C5E6D6',
          light: '#E1F1E8',
          dark: '#7FB89A',
        },
        accent: {
          DEFAULT: '#F5A623',
          deep: '#C77F0E',
          light: '#FCD89A',
        },
        violet: {
          DEFAULT: '#5B3B95',
          light: '#8B5FBA',
        },
        surface: {
          cream: '#FAF7F2',
          bone: '#F1ECE3',
          paper: '#FFFEFB',
        },
        ink: {
          DEFAULT: '#0E1733',
          muted: '#475569',
          soft: '#7C879C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31, 45, 92, 0.08), 0 8px 24px rgba(31, 45, 92, 0.10)',
        glow: '0 0 0 1px rgba(31, 45, 92, 0.12), 0 20px 60px rgba(31, 45, 92, 0.22)',
        coral: '0 12px 30px rgba(236, 72, 153, 0.32), 0 0 0 1px rgba(236, 72, 153, 0.16)',
        teal: '0 12px 30px rgba(43, 167, 108, 0.28), 0 0 0 1px rgba(43, 167, 108, 0.18)',
      },
    },
  },
  plugins: [],
}

export default config
