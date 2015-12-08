(function() {
  'use strict';

  var partials = [
    'intro',
    'about',
    'ember',
    'emberCli',
    'handlebars',
    'models',
    'controllers',
    'router',
    'components',
    'next',
    'questions'];

  activate();

  function supportsImports() {
    return 'import' in document.createElement('link');
  }

  function importPartial(id) {
    var slideContainer = document.querySelector('#slides'),
        link           = document.querySelector('link[rel="import"]#partial-' + id),
        content;

    if (link && link.import) {
      content = link.import.querySelector('.partial');
      if (slideContainer && content) {
        slideContainer.appendChild(content.cloneNode(true));
      }
    }
  }

  function activate() {
    var i;
    if (supportsImports()) {
      console.log('HTML Import supported!');
    } else {
      console.log('HTML Import not supported!');
      return;
    }

    for (i = 0; i < partials.length; i++) {
      importPartial(partials[i]);
    }

    Reveal.initialize({

      // Display controls in the bottom right corner
      controls : true,

      // Display a presentation progress bar
      progress : true,

      // Display the page number of the current slide
      slideNumber : false,

      // Push each slide change to the browser history
      history : true,

      // Enable keyboard shortcuts for navigation
      keyboard : true,

      // Enable the slide overview mode
      overview : true,

      // Vertical centering of slides
      center : true,

      // Enables touch navigation on devices with touch input
      touch : true,

      // Loop the presentation
      loop : false,

      // Change the presentation direction to be RTL
      rtl : false,

      // Turns fragments on and off globally
      fragments : true,

      // Flags if the presentation is running in an embedded mode,
      // i.e. contained within a limited portion of the screen
      embedded : false,

      // Flags if we should show a help overlay when the questionmark
      // key is pressed
      help : true,

      // Number of milliseconds between automatically proceeding to the
      // next slide, disabled when set to 0, this value can be overwritten
      // by using a data-autoslide attribute on your slides
      autoSlide : 0,

      // Stop auto-sliding after user input
      autoSlideStoppable : true,

      // Enable slide navigation via mouse wheel
      mouseWheel : false,

      // Hides the address bar on mobile devices
      hideAddressBar : true,

      // Opens links in an iframe preview overlay
      previewLinks : false,

      // Transition style
      transition : 'default', // none/fade/slide/convex/concave/zoom

      // Transition speed
      transitionSpeed : 'default', // default/fast/slow

      // Transition style for full page slide backgrounds
      backgroundTransition : 'default', // none/fade/slide/convex/concave/zoom

      // Number of slides away from the current that are visible
      viewDistance : 3,

      // Parallax background image
      parallaxBackgroundImage : '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

      // Parallax background size
      parallaxBackgroundSize : '', // CSS syntax, e.g. "2100px 900px"

      // Amount to move parallax background (horizontal and vertical) on slide change
      // Number, e.g. 100
      parallaxBackgroundHorizontal : '',
      parallaxBackgroundVertical   : '',

      // Optional reveal.js plugins
      dependencies : [
        {
          src       : 'vendor/reveal.js/lib/js/classList.js',
          condition : function() {
            return !document.body.classList;
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/markdown/marked.js',
          condition : function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/markdown/markdown.js',
          condition : function() {
            return !!document.querySelector('[data-markdown]');
          }
        },
        {
          src       : 'vendor/reveal.js/plugin/highlight/highlight.js',
          async     : true,
          condition : function() {
            return !!document.querySelector('pre code');
          },
          callback  : function() {
            hljs.initHighlightingOnLoad();
          }
        },
        {
          src   : 'vendor/reveal.js/plugin/zoom-js/zoom.js',
          async : true
        },
        {
          src   : 'vendor/reveal.js/plugin/notes/notes.js',
          async : true
        }
      ]
    });
  }
})();
