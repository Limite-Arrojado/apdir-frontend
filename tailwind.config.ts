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
        primary: "#059695",
        secondary: "#2E2F4F",
      },
      backgroundImage: {
        "banner-image": "url(../../public/home-banner.jpeg)",
        "quote-marks": "url(../../public/quote-marks.png)",
        world: "url(../../public/world.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-background": "url(../../public/mesh-background.png)",
        "footer-pattern": "url(../../public/footer-pattern.jpeg)",
        "banner-image": "url(../../public/home-banner.jpeg)",
      },
      screens: {
        lg: "1040px",
      },
    },
  },
  plugins: [],
};
export default config;
