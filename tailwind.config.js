/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080808',
          2: '#101010',
          card: '#141414',
        },
        accent: {
          DEFAULT: '#c8f542',
          dark: '#a8d020',
        },
        border: {
          DEFAULT: '#1e1e1e',
          hover: '#333333',
        },
        text: {
          DEFAULT: '#a0a0a0',
          light: '#606060',
        },
        heading: '#f0f0f0',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        wide05: '0.05em',
        wide08: '0.08em',
        wide1: '0.1em',
        wide12: '0.12em',
        wide15: '0.15em',
        wide2: '0.2em',
      },
      animation: {
        spin20: 'spin 20s linear infinite',
        spin15r: 'spin 15s linear infinite reverse',
        spin10: 'spin 10s linear infinite',
        float6: 'float 6s ease-in-out infinite',
        float7: 'float 7s ease-in-out infinite',
        float55: 'float 5.5s ease-in-out infinite',
        pulse2: 'pulse2 2.5s ease-in-out infinite',
        ping2: 'ping2 2s ease-in-out infinite',
        scrollDown: 'scrollDown 1.5s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.95)' },
        },
        ping2: {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(200, 245, 66, 0.2)' },
          '50%': { boxShadow: '0 0 0 6px rgba(200, 245, 66, 0.1)' },
        },
        scrollDown: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'radial-accent': 'radial-gradient(circle, rgba(200, 245, 66, 0.06) 0%, transparent 70%)',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'skill-bar': 'linear-gradient(to right, #c8f542, #a8d020)',
      },
    },
  },
  plugins: [],
}
