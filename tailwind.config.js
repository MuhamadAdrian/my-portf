/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: '#749960',
        secondary: '#FBFFF3',
        mainBackground: '#1e261f',
        primaryDarken: '#3A633D',
        greenArmy: '#737E5C',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(169.40% 89.55% at 94.76% 6.29%, rgba(0, 0, 0, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
    },
  },
  plugins: [],
}
