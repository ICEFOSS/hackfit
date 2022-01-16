module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pixeboy", "sans-serif"],
      },
      colors: {
        brochgreen: "#007241",
        brochwhite: "#d4d2d8",
        brochblack: "#2e2e2e",
      },
      backgroundImage: {
        landingImage: "url('/src/assests/landing.svg')",
      },
    },
  },
  plugins: [],
};
