import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./hooks/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#060708",
        ink: "#0B0F0C",
        gold: "#C9A84C",
        pine: "#1A4A2E",
        resin: "#A85B36",
        lichen: "#BFCBA8",
        bone: "#E8E0D1"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"]
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
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(18px, -26px, 0) rotate(5deg)" },
          "100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" }
        }
      },
      animation: {
        "mist-rise": "mist-rise 7s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        shimmer: "shimmer 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        drift: "drift 12s cubic-bezier(0.16, 1, 0.3, 1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
