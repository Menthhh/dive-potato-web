/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#FEC32D", // Custom Yellow
        secondary: "#1e3a8a", // Dark Blue
        accent: "#ff5733", // Orange-Red
        dark: "#222222",
        light: "#f9f9f9",
      },
      fontFamily: {
        heading: ["'Josefin Sans'", "sans-serif"],
        body: ["'Anuphan'", "sans-serif"],
      },
      spacing: {
        18: "4.5rem", // Custom spacing
        22: "5.5rem",
      },
    },
  },
  plugins: [],
}

