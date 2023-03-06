/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop-light': "url('/images/bg-desktop-light.jpg')",
        'hero-mobile-light': "url('/images/bg-mobile-light.jpg')",
        'hero-desktop-dark': "url('/images/bg-desktop-dark.jpg')",
        'hero-mobile-dark': "url('/images/bg-mobile-dark.jpg')"
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
