/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plus: ["Plus Jakarta Sans", "sans-serif"],
        
        },
       backgroundImage: {
        'hero': "url('/Assets/Vector (8).png')",
        'footer': ["#E40443"],
      },
    },
  },
  plugins: [],
};
