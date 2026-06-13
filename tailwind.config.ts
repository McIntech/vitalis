import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F6B47',
          deep: '#0A4D33',
          soft: '#1F8C5E',
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
        surface: {
          cream: '#FAF7F2',
          bone: '#F1ECE3',
        },
        ink: {
          DEFAULT: '#1A2421',
          muted: '#4A5853',
          soft: '#7A8580',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
}

export default config
