import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "JIT",
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        tall: { raw: "(min-height: 970px) and (min-width: 1280px)" },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2.25rem",
        },
      },
      colors: {
        red: "#FF1E1E",
        success: "#44FF57",
        grayBorder: "#C852FF",
        hoverText: "#CDCDCD",
        lightGray: "#242424",
        darkGray: "#676767",
        bgColor: "#D9D9D9",
        pink: "#7879F1",
        darkPink: "#C852FF40",
        grayText: "#4F4F4F",
        purpleText: "#7879F1",
        violet: "#7879F1",
        lightVaiolet: "#CEB7FF",
        darkerViolet: "#B08AFF",
        darkViolet: "#494AE1",
        lighterGray: "#9E9E9E26",
      },
    },
  },
  plugins: [],
};
export default config;
