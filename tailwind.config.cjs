/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoCondensed: ['Roboto Condensed', 'sans-serif'],
        RobotoMono: ['Roboto Mono', 'monospace'],
        RobotoSlab: ['Roboto Slab', 'serif'],
        SourceSansPro: ['Source Sans Pro', 'sans-serif'],
        
        Roboto: ['Roboto', 'sans-serif'],
        Axiforma: ['Axiforma', 'sans-serif'],
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
			addUtilities({
				".features-card": {
          width: '265px',
          // height: '254px',
          background: '#FFFFFF',
          /* sm */
          'box-shadow': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          'border-radius': '15px',
          /* Inside auto layout */
          flex: 'none',
          order: 0,
          'flex-grow': 0,
          "@media screen and (max-width: 768px)": {
            width: '201px',
          }
        },
				".testimonial-card": {
          width: '265px',
          // height: '254px',
          background: '#FFFFFF',
          /* sm */
          'box-shadow': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
          'border-radius': '15px',
          "@media screen and (max-width: 640px)": {
            width: '172px',
          },
          "@media screen and (max-width: 768px)": {
            width: '201px',
          }
        },

        ".how-it-works-gradient-text": {
          position: 'absolute',
          width: '95px',
          // height: '90px',
          left: '49px',
          top: '-45px',

          /* H1 Bold 2xl */

          'font-family': 'Axiforma',
          'font-style': 'normal',
          'font-weight': '700',
          'font-size': '72px',
          'line-height': '90px',
          "@media screen and (max-width: 768px)": {
            'font-size': '48px',
          },
          /* identical to box height, or 125% */

          'letter-spacing': '-0.02em',

          background: 'linear-gradient(207.72deg, #686868 -7.41%, rgba(104, 104, 104, 0) 65.31%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        }
      })
    })
  ],
}
