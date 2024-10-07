/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {},
    fontFamily:{
      Vazirmatn:["Vazirmatn"],
      ABSTER:["ABSTER"],
      DanaFaNum:["DanaFaNum"],
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg':'992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
  
  },
  plugins: [],
}

