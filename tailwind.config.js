/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
          'hero-pattern': "url('/src/assets/background-pattern-mobile.svg')",
          'hero-pattern-large': "url('/src/assets/background-pattern-desktop.svg')",
        },

        fontFamily: {
          workSans: ['Work Sans', 'sans-serif'],
        },
    },
  },
  plugins: [],
}

