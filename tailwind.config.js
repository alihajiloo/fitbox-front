module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#7678ed',

        accent: '#da4167',
        'accent-700': '#d62f59',
        'accent-500': '#dc4a6e',
        warn: '#d90429',
        'dark-gary': '#363537'
      },
      boxShadow: {
        primary: '0 4px 14px 0 rgba(0, 118, 255, 0.39)',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
