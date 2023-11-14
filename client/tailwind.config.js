/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inner: 'inset 100 100 100px 5px rgba(0, 0, 0, 0.9)',
      },
      zIndex: {
        'custom': -10, // Use a negative value for lower z-index
      },

    },
  },
  plugins: [],
}
