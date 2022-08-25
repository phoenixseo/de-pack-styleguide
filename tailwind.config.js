module.exports = {
  content: [
    "./components/**/*.{twig,js}",
    "./assets/css-input/**/*.css",
    "./templates/**/*.twig"
  ],
  theme: {
    fontFamily: {
      'sans': ['"Montserrat"', 'sans-serif'],
      'serif': ['"Crimson Text"', 'serif'],
      'mono': ['"Source Code Pro"', 'mono']
    },
    extend: {
      colors: {
        lava: {
          DEFAULT: '#c31924',
          light: '#e32633',
          dark: '#a2151f'
        },
        isabelline: '#efefea',
        ghostwhite: '#f6f7fc',
        onyx: {
          DEFAULT: '#3d3d3d',
          light: '#525252',
          dark: '#292929'
        },
        androidgreen: {
          DEFAULT: '#95c03d',
          light: '#abce64',
          dark: '#84ab36'
        },
        honeyyellow: {
          DEFAULT: '#f6ae2d',
          light: '#f8c462',
          dark: '#f5a614'
        },
        queenblue: {
          DEFAULT: '#33658a',
          light: '#4282b3',
          dark: '#2c5777'
        },
        darkskyblue: {
          DEFAULT: '#86bbd8',
          light: '#b2d4e6',
          dark: '#74b1d2'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#a2151f',
              '&:hover': {
                color: '#c31924'
              }
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
