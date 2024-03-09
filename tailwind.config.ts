import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "440px",
      xs: "540px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
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
