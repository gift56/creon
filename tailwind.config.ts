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
      },
    },
  },
  plugins: [],
};
export default config;
