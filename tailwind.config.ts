import type { Config } from "tailwindcss";

const config: Config = {
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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00543D",
          secondary: "#6A1510",
          accent: "#F4EED6",
          neutral: "#FFFFF0",
          "base-100": "#3C2F2F",
          info: "#2F4F4F",
          success: "#8FBC8F",
          warning: "#CFB53B",
          error: "#800000",
        },
      },
    ],
  },
};
export default config;
