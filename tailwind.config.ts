import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        command: {
          950: "#05070a",
          900: "#081018",
          800: "#0d1823",
          700: "#142231"
        },
        signal: {
          cyan: "#46d8ff",
          green: "#70f0a6",
          amber: "#ffca5f",
          red: "#ff6b6b"
        }
      },
      boxShadow: {
        panel: "0 18px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
