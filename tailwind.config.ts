import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "button-press": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
        },
        "button-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.2)" },
          "50%": { boxShadow: "0 0 0 15px rgba(0, 0, 0, 0)" },
        },
        "input-focus": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-1.25rem)", scale: "0.85" },
        },
        "input-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        "gradient-flow": {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "50%": {
            backgroundPosition: "100% 0%",
          },
          "100%": {
            backgroundPosition: "200% 0%",
          },
        },
        "gradient-x": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "spin-slow-1": "spin-slow 60s linear infinite",
        "spin-reverse-1": "spin-reverse 70s linear infinite",
        // Nuevas animaciones con diferentes velocidades
        "spin-slow-2": "spin-slow 80s linear infinite",
        "spin-reverse-2": "spin-reverse 90s linear infinite",
        "spin-slow-3": "spin-slow 100s linear infinite",
        "spin-reverse-3": "spin-reverse 110s linear infinite",
        "button-click": "button-press 0.3s ease-in-out",
        "button-pulse":
          "button-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "input-shake": "input-shake 0.3s ease-in-out",
        "gradient-animate": "gradient-flow 15s linear infinite",
        "gradient-x": "gradient-x 8s ease-in-out infinite",
      },
      willChange: {
        transform: "transform",
        background: "background-position",
      },
    },
  },
  plugins: [],
};

export default config;
