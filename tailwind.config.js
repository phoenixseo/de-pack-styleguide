module.exports = {
  content: [
    "./components/**/*.{twig,js}",
    "./css-input/**/*.css"
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      colors: {
        lava: {
          DEFAULT: '#c31924',
          light: '#e32633',
          dark: '#a2151f'
        },
        isabelline: '#efefea',
        ghostwhite: '#f6f7fc',
        onyx: '#3d3d3d',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
}
