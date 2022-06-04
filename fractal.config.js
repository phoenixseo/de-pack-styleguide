'use strict';


/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* set the theme */
const webUITheme = require('@frctl/mandelbrot');

/* Set the title of the project */
fractal.set('project.title', 'DE-PACK Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/docs');

/* Tell Fractal where to put the static build */
fractal.web.set('builder.dest', __dirname + '/web');


/*
 * Theme
 */
fractal.web.theme(
  webUITheme({
    skin: {
      name: 'fuchsia',
      accent: '#c31924',
      complement: '#FFFFFF',
      links: '#c31924',
    },
    information: [
      {
        label: 'Version',
        value: require('./package.json').version,
      },
      {
        label: 'Built on',
        value: new Date(),
        type: 'time',
        format: (value) => {
          return value.toLocaleDateString('en');
        },
      },
      {
        label: 'Fractal Help',
        value: '<a href="https://fractal.build/guide/#requirements">Help</a>',
      }
    ],
  })
);
