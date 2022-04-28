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
      poppins: ["Poppins", "sans-serif"],
      beVietnom: ["Be Vietnam Pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "pattern-background":
          "url('/order-summary/pattern-background-desktop.svg')",
        "card-pattern-top": "url('/profile-card/bg-pattern-top.svg')",
        "card-pattern-bottom": "url('/profile-card/bg-pattern-bottom.svg')",
        "tablet-pattern": "url('/manage-landing-page/bg-tablet-pattern.svg')",
        "simplify-section-desktop":
          "url('/manage-landing-page/bg-simplify-section-desktop.svg')",
        "simplify-section-mobile":
          "url('/manage-landing-page/bg-simplify-section-mobile.svg')",
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        varyPaleRed: "hsl(13, 100%, 96%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryLigthGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
