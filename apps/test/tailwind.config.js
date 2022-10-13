const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      arimo: ['Arimo'],
    },
    extend: {
      content: {
        success: 'url("./assets/images/success.svg")',
      },
      colors: {
        text: '#0D2444',
        green: '#A6C34F',
        navigation: '#072446',
        footerIcons: '#9CC634',
        white: '#FFFFFF',
      },
      animation: {
        openMenuX: 'openMenuX 0.52s ease-in',
        closeMenuX: 'closeMenuX 0.52s ease-in',
        openMenuY: 'openMenuX 0.52s ease-in',
        closeMenuY: 'closeMenuX 0.52s ease-in',
      },
      keyframes: {
        openMenuX: {
          '0%': { right: '-372px' },
          '100%': { right: '0px' },
        },
        closeMenuX: {
          '0%': { right: '0px' },
          '100%': { right: '-372px' },
        },
        openMenuY: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        closeMenuY: {
          '0%': { height: '100%' },
          '100%': { height: '0%' },
        },
      },
    },
  },
  plugins: [],
};
