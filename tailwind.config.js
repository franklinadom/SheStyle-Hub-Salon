/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#6A1B9A',
          rose: '#F8BBD0',
          gold: '#D4AF37',
          cream: '#FFF8F8',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(106, 27, 154, 0.16)',
      },
      fontFamily: {
        display: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

