/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      keyframes: {
        timeup: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },

      animation: {
        timeup3s: 'timeup 3s linear',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
