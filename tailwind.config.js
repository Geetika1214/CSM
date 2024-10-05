/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom-radius': '25px', // Replace '15px' with your desired radius
      },
      colors :{
        slate:{
          700:"#3E6680",
        },
        blue:{
          900: "#1B3BBC",
        },
      }
    }, 
  },
  plugins: [],
}