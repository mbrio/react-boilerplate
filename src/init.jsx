import * as less from './init.less';

// Needed for Bootstrap
//
// import jQuery from 'jquery';
// window.jQuery = jQuery;

// Uncomment the modules you would like to use, you must also uncomment the
// jQuery line above.
//
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
import Router from 'react-router';
import routes from './routes';

const { HashLocation, HistoryLocation } = Router;

Router.run(routes, function(Handler) {
  return React.render(<Handler />, document.body);
});