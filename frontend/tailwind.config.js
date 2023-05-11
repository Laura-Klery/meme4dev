/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
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
    borderRadius: {
      large: '50px',
    },
    colors: {
      violet: '#9B5DE5',
      rose: '#F15BB5',
      bleu: '#00BBF9',
      vert: '#00F5D4',
      blanc: '#FFFFFF',
      contour: '#EFEFEF',
    },
    extend: {
      backgroundImage: {
        'glassmorphism-form': `
          linear-gradient(rgba(239,239,239,0.6)0%,rgba(255,255,255,0.1)100%)`,
        'buttons': `
          linear-gradient(120.37deg, #9B5DE5 0%, #F15BB5 100%)`,
        'button-create': `
          linear-gradient(120.37deg, #00BBF9 0%, #00F5D4 100%)`,
      },
      boxShadow: {
        DEFAULT: '0 4px 25px 0 rgba(0,0,0,0.25)',
      }
    },
    fontFamily: {
      brunoAce: ['Bruno Ace', 'serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

