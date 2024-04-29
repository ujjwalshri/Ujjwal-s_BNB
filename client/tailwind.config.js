/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#176B87',
        secondary: '#053B50',
        hoverStyle: '#237c74'
      }
    },
  },
  plugins: [],
}

