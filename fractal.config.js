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

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/assets');
fractal.web.set('static.mount', 'assets');

/* Tell Fractal where to put the static build */
fractal.web.set('builder.dest', __dirname + '/web');

/* Statuses */
fractal.components.set('statuses', {
  prototype: {
    label: "Prototype",
    description: "Do not implement.",
    color: "#ff3333"
  },
  wip: {
    label: "WIP",
    description: "Work in progress. Implement with caution.",
    color: "#ff9233"
  },
  ready: {
    label: "Ready",
    description: "Ready to implement.",
    color: "#29cc29"
  }
});

fractal.docs.set('statuses', {
  draft: {
    label: "Draft",
    description: "Work in progress.",
    color: "#ff3333"
  },
  ready: {
    label: "Ready",
    description: "Ready for referencing.",
    color: "#29cc29"
  }
});



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
