module.exports = {
  darkMode: false,
  purge: {
    mode: 'layers',
    layers: ['utilities'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '640px',
          lg: '960px',
          xl: '1220px',
        },
      },
      flex: {
        2: '2 1 0%',
        3: '3 1 0%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-pseudo-selectors'),
  ],
};
