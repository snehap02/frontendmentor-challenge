/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'bg-hero-mobile': "url('/images/bg-hero-mobile.svg')"
      },
      fontFamily:{
        'poppins': 'Poppins',
        'open-sans': 'Open Sans'
      },
      colors:{
        'pink': '#ff52bf',
        'footer': '#00252e',
        'pale-cyan': '#ebfbff'
      },
      width:{
        firstwidth: '300px',
        secondwidth: '290px',
        thirdwidth: '275px',
        footermobilew: '295px',
        lgwidth: '460px',
        xlwidth: '520px',
        xlonewidth: '440px'
      }
    },
  },
  plugins: [],
}
