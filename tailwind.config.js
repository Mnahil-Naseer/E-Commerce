/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideinLeft: {
          from: { transform: 'translateX(-100%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        slideinRight: {
          from: { transform: 'translateX(100%)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        slideoutLeft: {
          from: { transform: 'translateX(0)', opacity: 0 },
          to: { transform: 'translateX(-100%)', opacity: 1 },
        },
        slideoutRight: {
          from: { transform: 'translateX(0)', opacity: 0 },
          to: { transform: 'translateX(100%)', opacity: 1 },
        },
        fadein: {
          from: { opacity: '0;' },
          to: { opacity: '1;' },
        },
        fadeout: {
          from: { opacity: '1;' },
          to: { opacity: '0;' },
        },
        zoomIn: {
          from: { transform: 'scale(0.5)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1},
        },
        zoomOut: {
          from: { transform: 'scale(1)', opacity: 1 },
          to: { transform: 'scale(0.9)', opacity: 1 },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(0)', opacity: 0 },
          to: { transform: 'translateY(-100%)', opacity: 1 },
        },
      },
      animation: {
        slideinLeft: 'slideinLeft 1.5s ease-out forwards ',
        slideinRight: 'slideinRight 1.5s ease-out forwards',
        slideoutLeft: 'slideoutLeft 1.5s ease-in forwards',
        slideoutRight: 'slideoutRight 1.5s ease-in forwards',
        fadein: 'fadein 1.5s ease-in forwards',
        fadeout: 'fadeout 1.5s ease-out forwards',
        zoomIn: 'zoomIn 1.5s ease-in forwards',
        zoomOut: 'zoomOut 1.5s ease-out forwards ',
        slideDown: 'slideDown 1.5s ease-in-out  ',
        slideUp: 'slideUp 1.5s ease-out ',
      },
    },
  },
  plugins: [],
}
