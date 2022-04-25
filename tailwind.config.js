module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      redhat: ["Red Hat Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      deca: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "pattern-background":
          "url('/order-summary/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
};
