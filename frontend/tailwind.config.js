/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
const MyClasses = plugin(function ({ addUtilities }) {
  addUtilities({
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },

    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".flip": {
      transform: "rotateY(180deg)",
    },
  })
})
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#023047",
      },
      fontFamily: {
        custom: ["Roboto Slab"],
      },
    },
  },
  plugins: [MyClasses],
}
