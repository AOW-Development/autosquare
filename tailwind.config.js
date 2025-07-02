/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        exo2: ['var(--font-exo2)'],
        audiowide: ['var(--font-audiowide)'],
      },
    },
  },
  plugins: [],
}