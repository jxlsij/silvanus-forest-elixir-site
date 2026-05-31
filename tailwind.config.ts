import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./hooks/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#060708",
        gold: "#C9A84C",
        pine: "#1A4A2E"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"]
      },
      keyframes: {
        "mist-rise": {
          "0%": { opacity: "0.1", transform: "translate3d(-50%, 16px, 0) scaleX(0.84)" },
          "50%": { opacity: "0.34", transform: "translate3d(-50%, -10px, 0) scaleX(1)" },
          "100%": { opacity: "0.1", transform: "translate3d(-50%, 16px, 0) scaleX(0.84)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        "mist-rise": "mist-rise 7s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        shimmer: "shimmer 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
