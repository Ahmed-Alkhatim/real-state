/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ads': "url('/ads-bg.png')",
      }
    },
    fontSize : {
      'medium': '16px',
    },
    colors:{
      'primary' : "#703BF7",
      "secondary" : "#999999",
      "black" : "#141414",
      "gray-1" : "#1A1A1A",
      "gray-2" : "#262626",
      "gray-3" : "#999999",
      "gray-o-3" : "rgba(153,153,153,.3)"
    }
  },
  plugins: [],
}