import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF5F2",
        lightAccent: "#F5BABB",
        mutedAccent: "#568F87",
        darkAccent: "#064232",
      },
    },
  },
};
export default config;
