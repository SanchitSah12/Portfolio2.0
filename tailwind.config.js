/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Tilt Neon", "sans-serif"],
        cool: ['Crystal Radio Kit']
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [daisyui],
}
