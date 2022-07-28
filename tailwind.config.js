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
        'darkGray': '#A4A4A4',
        'bluePriority': '#428bc1',
        'purplePriority': '#8942c1',
        'yellowPriority': '#f8a541',
        'greenPriority': '#00a790',
        'redPriority': '#ed4c5c',
      },
      fontFamily: {
        poppins: ['poppins', 'sans']
      }
    },
  },
  plugins: [],
}
