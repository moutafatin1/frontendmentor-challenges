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
      bigShoulders: ["Big Shoulders Display", "sans-serif"],
      kumbh: ["Kumbh Sans", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "pattern-background":
          "url('/order-summary/pattern-background-desktop.svg')",
        "card-pattern-top": "url('/profile-card/bg-pattern-top.svg')",
        "card-pattern-bottom": "url('/profile-card/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
