import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        lexend: ["var(--font-lexend)"],
        gabarito: ["var(--font-gabarito)"],
      },
      colors:{
        primary:"#ffffff",
        secondary:{
          DEFAULT:"#1c1919",
          foreground:"#a3a3a3",
        },
        link:"#ffffff"
      
        
      }
    },
  },
  darkMode: "class",
  plugins: [heroui({
    defaultTheme: "dark",
    defaultColor: "primary",
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#ffffff",
            foreground: "#000000"
          },

          secondary: {
            DEFAULT: "#1c1919",
            foreground: "#a3a3a3",
          },
        },
      },
    },
  })],
}

module.exports = config;