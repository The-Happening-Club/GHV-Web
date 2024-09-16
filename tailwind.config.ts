import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        normalidad: ["normalidad-text", "sans-serif"],
        epilogue: ["epilogue", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          dark: '#080024',
          light: '#3A3E8D'
        }
      },
    },
  },
  plugins: [],
};
export default config;
