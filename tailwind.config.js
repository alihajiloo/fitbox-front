module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  content: ["./node_modules/tv-toast/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#7678ed",
        "primary-800": "#3d348b",
        "accent-2": "#f35b04",
        accent: "#da4167",
        "accent-700": "#d62f59",
        "accent-500": "#dc4a6e",
        warn: "#d90429",
        "dark-gary": "#363537",
      },
      boxShadow: {
        primary: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
