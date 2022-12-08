/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'project-blue':'#0904FF',
        'project-white':'#f1f1f1'
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      fontFamily: {
        'albert': ['albert-sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
