/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'projectblue':'#0904FF',
        'projectwhite':'#f1f1f1',
        'projectgrey':'#6A6A6A'
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite'
      },
      fontFamily: {
        'albert': ['albert-sans', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-20px)' },
          '50%': { transform: 'translateY(20px)' },
        }
      }
    },
  },
  plugins: [],
}
