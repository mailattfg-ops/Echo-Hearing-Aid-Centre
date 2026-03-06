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
        brand: {
          red: "#AD0600",
          dark: "#5A0D0A",
          muted: "#F9E3E5",
        },
        base: {
          white: "#FFFFFF",
          gray: "#F8F9FA",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
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
