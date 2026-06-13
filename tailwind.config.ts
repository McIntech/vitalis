import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F6B47',
          deep: '#073822',
          soft: '#1F8C5E',
        },
        teal: {
          DEFAULT: '#0FB89C',
          deep: '#0A8470',
          light: '#7FD8C7',
        },
        coral: {
          DEFAULT: '#FF7A5C',
          deep: '#E55A3F',
          light: '#FFD1C4',
        },
        sage: {
          DEFAULT: '#B5D5C4',
          light: '#D6E7DD',
          dark: '#7FA992',
        },
        accent: {
          DEFAULT: '#C9A961',
          deep: '#A8893F',
          light: '#E4CB94',
        },
        violet: {
          DEFAULT: '#6D28D9',
          light: '#A78BFA',
        },
        surface: {
          cream: '#FAF7F2',
          bone: '#F1ECE3',
          paper: '#FFFEFB',
        },
        ink: {
          DEFAULT: '#0E1A16',
          muted: '#4A5853',
          soft: '#7A8580',
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
        soft: '0 1px 2px rgba(10, 77, 51, 0.06), 0 8px 24px rgba(10, 77, 51, 0.08)',
        glow: '0 0 0 1px rgba(15, 107, 71, 0.12), 0 20px 60px rgba(15, 107, 71, 0.18)',
        coral: '0 12px 30px rgba(229, 90, 63, 0.28), 0 0 0 1px rgba(229, 90, 63, 0.12)',
        teal: '0 12px 30px rgba(15, 184, 156, 0.25), 0 0 0 1px rgba(15, 184, 156, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
