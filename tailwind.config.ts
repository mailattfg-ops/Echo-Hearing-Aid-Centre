import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#AD0600",
          light: "#D10700",
          dark: "#8A0500",
        },
        secondary: {
          DEFAULT: "#FF837E",
          light: "#FFA39F",
          dark: "#FF635D",
        },
        base: {
          white: "#FFFFFF",
          gray: "#F8F9FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
