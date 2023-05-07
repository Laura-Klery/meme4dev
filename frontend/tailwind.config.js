/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/css/**/*.css',
    './components/**/*.{vue,js}',
    './views/*.{vue,js}',
    './mains.js'
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '768px',
      md: '1024px',
      lg: '1260px',
    },
    fontSize: {
      '2xs': '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.75rem', // 28px
      '5xl': '2rem', // 32px
      '6xl': '2.5rem', // 40px
      '7xl': '3rem', // 48px
      '8xl': '3.5rem', // 56px
      '9xl': '4rem', // 64px
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#AE9973',
          'extra-light': '#F2F2F2',
          lighten: {
            70: '#E7E0D5',
            50: '#D7CCB9',
            25: '#C2B396',
            10: '#B6A481',
          },
          darken: {
            10: '#9D8A68',
            25: '#827356',
            50: '#564D3A',
            70: '#342E23',
          },
        },
        neutral: {
          light: {
            DEFAULT: '#FFFFFF',
            darken: {
              4: '#F2F2F2',
              5: '#F2F2F2',
              10: '#E5E5E5',
              25: '#BFBFBF',
              50: '#7F7F7F',
              70: '#4C4C4C',
            },
          },
          dark: {
            DEFAULT: '#2B2A28',
            lighten: {
              10: '#41403E',
              25: '#605F5E',
              50: '#959594',
              70: '#C0C0BF',
            },
          },
        },
      },
    },
    fontFamily: {
      brunoAce: ['Bruno Ace', 'serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

