/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary
        purple: '#854dff',
        lightred : '#ff5757',
        //Neutral
        white: '	#ffffff',
        offwhite: '	#f0f0f0',
        lightgrey : '#dbdbdb',
        smokeygrey: '	#716f6f',
        offblack : '#141414',
      }
    },
  },
  plugins: [],
}

