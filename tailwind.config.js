/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-main': '#074e67',
        'yellow-main': '#e1ae45',
        'blue-light': '#13315a',
        'dark': '#161C2C',
      },
    },
  },
  plugins: [],
}

