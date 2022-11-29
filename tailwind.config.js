/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./work.html","./about.html","./blog.html","./contact.html"],
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

       colors: {
        'grey': 'rgba(218,215,212,.4)',
        'grey2': 'rgba(218,215,212,.6)',
        'grey3': 'rgba(218, 215, 212, 0.07)',
        'bg1': '#e06c3e',
        'bg2': '#c74e4e',
        'bg3': '#337993',
        'bg4': '#d65245',
        'bg5': '#006bdc',
        'bg6': '#1a99ee',
       }
  },
  plugins: [],
}
}
