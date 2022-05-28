module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
    },
    letterSpacing: {
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '3px',
    },
    extend: {
      colors: {
        'Hex': '#E4E7FF',
        'buttonColor': '#280DD2',
        'buttonColorb': '#06022E',
        'heroColor':   'rgba(27, 5, 2, 0.81)',
        'btnColor':'rgba(55, 2, 25, 0.97)'

      },
      
    },
  },
  plugins: [],
}