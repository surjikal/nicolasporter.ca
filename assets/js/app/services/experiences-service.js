(function() {

  app.service('experiences', function() {
    return [
      {
        location: '42',
        position: 'Founder & CTO',
        terms: [
          {
            duration: {
              start: 'February 2013',
              stop: 'Current'
            },
            tasks: ["I type a lot"],
            technologies: ["JavaScript", "AngularJS", "Node.js, Express", "Git", "jQuery, Zepto", "Docker", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh"]
          }
        ]
      }, {
        location: 'Trolley',
        position: 'Lead Software Developer',
        terms: [
          {
            duration: {
              start: 'April 2012',
              stop: 'February 2013'
            },
            tasks: ["Built a hybrid mobile web app for an m-commerce venture; integrated with Stripe and PayPal APIs", "Developed a highly customized GruntJS-based toolchain, reducing setup times from a day to seconds", "Created the app using a decoupled client/server architecture (Backbone & Django+TastyPie)", "Finalists at the Ottawa Startup Weekend (team Virtual Plaza)"],
            technologies: ["JavaScript", "Git", "Backbone", "jQuery, Zepto", "Python, Django", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh"]
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
            tasks: ["Node.js development on a multi-tenant web app (BlazeLoop)", "Designed and implemented a (now patented!) dynamic API system, significantly improving BlazeLoop's maintainability", "Conducted multiple in-person technical interviews"],
            technologies: ["JavaScript", "Git", "jQuery, Zepto", "HTML, Jade", "CSS, Sass, Compass", "Nginx", "GNU/Linux", "Bash, Zsh", "Node.js, Express", "MongoDB"]
          }, {
            duration: {
              start: 'April 2011',
              stop: 'September 2011'
            },
            tasks: ["Designed and built prototype for a new mobile web app, BlazeLoop", "Improved BlazeCast's compatibility with legacy IE browsers."],
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
