import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ["Aboreto", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
