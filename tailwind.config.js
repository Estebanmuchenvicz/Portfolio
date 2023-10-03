/** @type {import('tailwindcss').Config} */
export default {
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
        },
        fontSize: {
          '2xl': '1.5rem',
          '3xl': '2rem',
          '4xl': '2.5rem',
        },
      },
    },
    variants: {},
    plugins: [],
  };
  