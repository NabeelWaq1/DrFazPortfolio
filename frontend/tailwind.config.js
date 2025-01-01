/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#d9dcd6',
        primary: '#16425b',
        secondary: '#2f6690',
        tritary: '#ffc857',
        thrice: '#ffb405',
        tealLight: '#2A6F97',
        blueTeal: '#2C7DA0',
        blueSky: '#468FAF',
        skyLight: '#61A5C2',
        skyMid: '#89C2D9',
        skyPale: '#A9D6E5',
      },
      boxShadow: {
        '3xl':'rgba(0, 0, 0, 0.3) 8px 10px 15px, rgba(0, 0, 0, 0.22) 15px 15px 12px',
        '4xl':'rgba(0, 0, 0, 0.3) 4px 3px 3px, rgba(0, 0, 0, 0.22) 5px 3px 3px'
      }
    },
  },
  plugins: [],
}