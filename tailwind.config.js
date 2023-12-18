/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'bf': "url('./pic/b5.jpg')",
        'ab': "url('./pic/b1.jpg')"
      },
      animation: {
        'arrow': 'arrow 1s infinite',
      },
      dropShadow: {
        'white': '0 2px 3px rgba(255, 255, 255, 0.4)'
      }
    },
  },
  plugins: [],
}

