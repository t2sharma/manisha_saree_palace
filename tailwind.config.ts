import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#7A1D1D",
        gold: "#D4AF37",
        cream: "#F4EDE2",
        royal: "#0B2F6B",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      backgroundImage: {
        "textile-pattern":
          "radial-gradient(circle at 1px 1px, rgba(212,175,55,0.35) 1px, transparent 0)",
      },
      backgroundSize: {
        "textile-pattern": "12px 12px",
      },
    },
  },
  plugins: [],
};

export default config;
