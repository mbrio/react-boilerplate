// A polyfill for the fetch API
import * as fetchPolyfill from 'whatwg-fetch';

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