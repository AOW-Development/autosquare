// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ['var(--font-inter)'],
//         exo2: ['var(--font-exo2)'],
//         audiowide: ['var(--font-audiowide)'],
//       },
//     },
//   },
//   plugins: [],
// }
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
        'exo-2': ['Exo 2', 'sans-serif'],
        audiowide: ['var(--font-audiowide)'],
        'custom-stack': [
          'var(--font-inter)',
          'Exo 2',
          'var(--font-audiowide)',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}