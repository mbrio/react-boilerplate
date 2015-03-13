import * as less from './init.less';

/*
 * jQuery is needed for Bootstrap JS. This is **NOT** the preferred method of
 * linking jQuery, it is merely included for a quick offline fix. If you need to
 * use any Bootstrap JS it is strongly suggested to link the CDN jQuery from
 * within `/src/index.html`.
 */

// import jq from 'jquery';
// if (window.jQuery === undefined) {
//   window.$ = window.jQuery = jq;
// }

/*
 * Uncomment the Bootstrap modules you would like to use within your code.
 */

// import * as bsAffix from 'bootstrap/js/affix.js';
// import * as bsAlert from 'bootstrap/js/alert.js';
// import * as bsTooltip from 'bootstrap/js/tooltip.js';
// import * as bsButton from 'bootstrap/js/button.js';
// import * as bsCarousel from 'bootstrap/js/carousel.js';
// import * as bsCollapse from 'bootstrap/js/collapse.js';
// import * as bsDropdown from 'bootstrap/js/dropdown.js';
// import * as bsModal from 'bootstrap/js/modal.js';
// import * as bsPopover from 'bootstrap/js/popover.js';
// import * as bsScrollspy from 'bootstrap/js/scrollspy.js';
// import * as bsTab from 'bootstrap/js/tab.js';
// import * as bsTransition from 'bootstrap/js/transition.js';

import React from 'react';
// TODO: Fix when react-router fully supports 0.13
import Router from 'react-router/build/npm';
import routes from './routes';
const { HashLocation, HistoryLocation } = Router;

console.log('Initializing in ' + NODE_ENV + ' mode.');

// Configure React Router to use hash locations to determine the current
// route. (e.g. http://example.com#/home).
let location = HashLocation;

/*
 * Sometimes in production you may want to use the HTML5 history API for
 * cleaner URLs (e.g. http://example.com/home), I've included a
 * `/config/htaccess` file that redirects all web traffic to `index.html` for
 * use with single page applications, and you'll need to uncomment the following
 * lines:
 */

// if (NODE_ENV === 'production') {
//   location = HistoryLocation;
// }

Router.run(routes, location, function(Handler) {
  return React.render(<Handler />, document.body);
});