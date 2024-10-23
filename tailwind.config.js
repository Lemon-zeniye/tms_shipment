const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ecf1fe",
          100: "#d4def7",
          200: "#a6b9f1",
          300: "#7592ec",
          400: "#4e72e9",
          500: "#375de8",
          600: "#2b53e8",
          700: "#2144ce",
          800: "#193db9",
          900: "#0b33a3",
          950: "#172554",
        },
      },
      fontFamily: {
        custom: ["CustomFont"],
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
