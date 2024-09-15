/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OkraMediumLight: ["OkraMediumLight", "sans-serif"],
        Okra: ["Okra", "sans-serif"],
        OkraMedium: ["OkraMedium", "sans-serif"],
        OkraBold: ["OkraBold", "sans-serif"],
        OkraExtraBold: ["OkraExtraBold", "sans-serif"],
      },
      colors: {
        primary: '#F7CA49',
        primaryLight: '#FFE141',
        secondary: '#0D8320',
        text: '#363636',
        disabled: '#9197A6',
        border: '#D0D4DC',
        backgroundSecondary: '#F5F6FB'
      },
    },
  },
  plugins: [],
}
