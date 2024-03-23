import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "375px",
      xs: "440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1450px",
      "3xl": "1640px",
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        "main-box-shadow": "0 10px 20px 0px rgba(209,188,178,0.25)",
        "white-box-shadow": "-10px 4px 0px 0px #fff",
        "white-box-shadow-plus": "0px 10px 0px 0px #fff",
      },
      fontFamily: {
        Prompt: ["Prompt", "Arial", "sans-serif"],
        PromptMed: ["Prompt Medium", "Arial", "sans-serif"],
      },
      colors: {
        "main-bg-color": "#F9F6F5",
        "main-text-color": "#32324D",
        "secondary-text-color": "#AD8775",
        "disable-text-color": "#EDE4E0",
        "sub-text-color": "#666666",
        "red-hot": "#FF6666",
        "green-new": "#84BF56",
        "orange-popular": "#E59D49",
        "accent-color": "#DBA514",
        "disable-color": "#D1BCB2",
      },
    },
  },
  plugins: [],
};
export default config;
