import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#AB23FF" },
      backgroundImage: {
        herogradient:
          "linear-gradient(174.64deg, #000000 4.29%, #3D8BFF 47.39%, #AB23FF 95.05%)",
        textgradient: "linear-gradient(90deg, #3D8BFF 0%, #AB23FF 100%)",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        monument: ["Monument Extended", "sans-serif"],
      },
      screens: {
        biglaptop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
