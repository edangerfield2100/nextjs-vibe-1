/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ["Courier New", "monospace"],
        groovy: ["Comic Sans MS", "cursive"],
      },
      colors: {
        "retro-orange": "#FF6B35",
        "retro-yellow": "#F7931E",
        "retro-brown": "#8B4513",
        "retro-cream": "#FFF8DC",
        "retro-green": "#228B22",
        "retro-red": "#DC143C",
      },
      backgroundImage: {
        "gradient-retro": "linear-gradient(45deg, #FF6B35, #F7931E, #FFD700)",
        "wood-pattern":
          "repeating-linear-gradient(90deg, #8B4513 0px, #A0522D 2px, #8B4513 4px)",
      },
    },
  },
  plugins: [],
};
