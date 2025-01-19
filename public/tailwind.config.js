/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{htm,html}',
  ],
  // plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  prefix: 't-',
  safelist: ['lg:col-span-4', 'lg:col-span-6', 'lg:col-span-8', 'lg:col-span-12'],
  theme: {
    container: {
      center: true,
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          DEFAULT: '#100D2C',
          // foreground: 'white',
        },
        secondary: {
          DEFAULT: '#fc861e',
          // foreground: '#1C2635',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        poppins: ['var(--font-montserrat)'],
        sora: ['var(--font-sora)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  important: ".tw"
}
