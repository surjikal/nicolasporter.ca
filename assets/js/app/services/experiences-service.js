(function() {

  app.service('experiences', function() {
    return [
      {
        location: '42',
        position: 'Lead Software Developer',
        terms: [
          {
            duration: {
              start: 'February 2013',
              stop: 'Current'
            },
            tasks: ["Built hybrid mobile web app using AngularJS and Cordova/PhoneGap.", "Built an analytics dashboard (AngularJS), featuring a cache-manifest-based offline mode.", "Finalist at the first Fashion Hackathon in NYC, presented the product on the runway during Fashion Week NYC."],
            technologies: ["JavaScript", "AngularJS", "Node.js, Express", "Git", "jQuery, Zepto", "Fabric", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh"]
          }
        ]
      }, {
        location: 'Trolley',
        position: 'Lead Software Developer',
        terms: [
          {
            duration: {
              start: 'April 2012',
              stop: 'Current'
            },
            tasks: ["Built hybrid mobile web app for m-commerce, frontend using Backbone and Cordova, backend is REST-style API (Django)", "Developed highly customized GruntJS-based toolchain, reducing setup times from a day to seconds", "Finalists at the Ottawa Startup Weekend (team Virtual Plaza)"],
            technologies: ["JavaScript", "Git", "Backbone", "jQuery, Zepto", "Python, Django", "Fabric", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh"]
          }
        ]
      }, {
        location: 'Benbria',
        position: 'Software Developer',
        terms: [
          {
            duration: {
              start: 'April 2012',
              stop: 'September 2012'
            },
            tasks: ["Node.js development on a multi-tenant web app (BlazeLoop)", "Designed and implemented a dynamic API system, significantly improving maintainability of BlazeLoop", "Conducted multiple in-person technical interviews"],
            technologies: ["JavaScript", "Git", "jQuery, Zepto", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh", "Node.js, Express", "MongoDB"]
          }, {
            duration: {
              start: 'April 2011',
              stop: 'September 2011'
            },
            tasks: ["Designed and built prototype for a new mobile web app, BlazeLoop", "Fixed BlazeCast's (Benbria's main product)"],
            technologies: ["JavaScript", "jQuery, Zepto", "Git", "HTML, Jade", "CSS, Sass, Compass", "GNU/Linux", "Bash, Zsh"]
          }, {
            duration: {
              start: 'April 2010',
              stop: 'September 2010'
            },
            tasks: ["Built and shipped a Django-based web app for one of the largest restaurant chains in the US"],
            technologies: ["Git", "Python, Django", "GNU/Linux", "Bash, Zsh"]
          }
        ]
      }
    ];
  });

}).call(this);
