const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pwhite: "#f6f6f2",
        pgreen: "#c2edc3",
        pblue: "#badfe7",
        pteallight: "#6fb3b8",
        ptealdark: "#388087",
      },
      maxWidth: {
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config("theme.fontSize.3xl"),
          fontWeight: config("theme.fontWeight.bold"),
        },
        h2: { fontSize: config("theme.fontSize.2xl") },
        h3: { fontSize: config("theme.fontSize.xl") },
        h4: { fontSize: config("theme.fontSize.lg") },
      });
    }),
  ],
};
