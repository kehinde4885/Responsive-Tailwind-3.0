/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '990px',
      // => @media (min-width: 990px) { ... }
    },

    extend: {
      fontFamily: {
        playfair: "playfair Display ,serif",
        thiccboi: "Thiccboi"
      },

      backgroundImage: {
        'vid1' : "url('./Images/poster-00001.jpg')",
        'vid2' : "url('./Images/poster-00002.jpg')",
        'vid3' : "url('./Images/poster-00003.jpg')",
        'vid4' : "url('./Images/poster-00004.jpg')",
        'vid5' : "url('./Images/poster-00005.jpg')",
        'vid6' : "url('./Images/poster-00006.jpg')",
        'vid7' : "url('./Images/poster-00007.jpg')",
        'vid8' : "url('./Images/poster-00008.jpg')",
        'vid9' : "url('./Images/poster-00009.jpg')",
        'vid10' : "url('./Images/poster-00010.jpg')",
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
       },
  },
  plugins: [],
}
}
