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
        dark: {
          primary: "#2B4162",
          secondary: "#9A8C98",
          accent: "#8B4513",
          neutral: "#F4F3EE",
          "base-100": "#473839",
          info: "#4A5D6A",
          success: "#4F7942",
          warning: "#C07400",
          error: "#8B0000",
        },
        light: {
          primary: "#81A4CD",
          secondary: "#6A1510",
          accent: "#F4EED6",
          neutral: "#3C2F2F",
          "base-100": "#FFFFF0",
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
