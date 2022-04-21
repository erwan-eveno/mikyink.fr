module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#0A0E11',
        'primaryGradient': '#131619',
        'customWhite': '#FAF9F5'
      },
      boxShadow: {
        'navShadow': '0px 0 10px 2px rgba(0,0,0,.3)',
      },
      fontFamily: {
        'roboto': ['Roboto Slab', 'serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'nunitoSans': ['Nunito', 'sans-serif'],
        'robotoNoSlab': ['Roboto']
      }
    },
  },
  plugins: [],
}
