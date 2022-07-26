/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'v1': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'lightBlue': '#16ABF8',
        'dark': '#111111',
        'backgroundColor': '#F4F4F4',
        'lightGray': '#888888',
      },
      fontFamily: {
        poppins: ['poppins', 'sans']
      }
    },
  },
  plugins: [],
}
