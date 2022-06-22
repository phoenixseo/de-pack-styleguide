module.exports = {
  content: [
    "./components/**/*.{hbs,js}",
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
        androidgreen: '#95c03d',
        honeyyellow: {
          DEFAULT: '#f6ae2d',
          light: '#f8c462',
          dark: '#f5a614'
        },
        queenblue: '#33658a',
        darkskyblue: '#86bbd8'
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
