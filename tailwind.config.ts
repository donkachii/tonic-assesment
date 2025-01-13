import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#0A2640",
        secondary: "#FFFFFF",
        tertiary: "#65E4A3",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        manrope: ["var(--font-manrope)", "manrope"],
      },
      boxShadow: {
        custom: "0px 4px 32px 0px #00000014",
      },
    },
  },
  plugins: [],
} satisfies Config;
