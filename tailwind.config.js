/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        body: "#f1f5f9",
        main: "#00d084",
        sec: "#40c491",
        btn: "#008655",
        sidebar: "#02b473",
        inp: "#aed581",
        gray: "#f7f7f7",
        azkar: "#45b39c",
        header: "#26ab7b",
        border: "#e5e5e5",
        quranBtn: "#dee2e6",
      },
    },
  },
  plugins: [],
};
