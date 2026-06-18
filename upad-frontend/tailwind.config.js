/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        upad: {
          blue:   '#2563eb',
          light:  '#0ea5e9',
          bg:     '#f0f7ff',
          yellow: '#fbbf24',
          green:  '#34d399',
          pink:   '#f472b6',
          orange: '#fb923c',
          purple: '#a78bfa',
        },
      },
      animation: {
        'float-slow':   'floatUp 8s ease-in-out infinite',
        'float-medium': 'floatUp 6s ease-in-out infinite 1s',
        'float-fast':   'floatUp 4s ease-in-out infinite 2s',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-in':     'slideIn 0.5s ease-out',
        'fade-in':      'fadeIn 0.8s ease-out',
        'bounce-gentle':'bounceGentle 2s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '33%':      { transform: 'translateY(-20px) rotate(5deg)', opacity: '1' },
          '66%':      { transform: 'translateY(-10px) rotate(-5deg)', opacity: '0.8' },
        },
        slideIn: {
          '0%':   { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
