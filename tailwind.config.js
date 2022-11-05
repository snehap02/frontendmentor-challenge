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
        'pale-cyan': '#ebfbff',
        'sky': '#edf9fc'
      },
      width:{
        firstwidth: '300px',
        secondwidth: '290px',
        thirdwidth: '275px',
        footermobilew: '295px',
        lgtwowidth: '460px',
        xlwidth: '520px',
        xlonewidth: '440px',
        lgwidth: '430px',
        lgonewidth: '450px',
        xltwowidth: '510px',
        xlthreewidth: '480px',
        mdwidth: '400px',
        footwidth: '380px'
      },
      margin:{
        margintop: '-50px',
        marginonetop: '233px'
      }
    },
  },
  plugins: [],
}
