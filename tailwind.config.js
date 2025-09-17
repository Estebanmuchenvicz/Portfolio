/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733",
        secondary: "#3366FF",
      },
      fontFamily: {
        custom: ["Montserrat", "sans-serif"],
        custom1: ['Bungee Shade', 'cursive'],
        custom2: ['Concert One', 'cursive'],
        custom3:['Lalezar', 'cursive'],
        custom4:['Black Han Sans', 'sans-serif']
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem'
      },
    },
  },
  plugins: [],
};

  