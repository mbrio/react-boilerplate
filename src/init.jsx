import * as less from './init.less';
import React from 'react';
import Router from 'react-router';
const { HashLocation, HistoryLocation } = Router;

// Initializes required vendor libraries, if you want to use Bootstrap JS you can
// import them here.
import * as vendors from './vendors';

// Initializes all ServiceWorker instances
import startServices from './services';

// Initializes all routes
import routes from './routes';

/*
 * In this boilerplate we are using a ServiceWorker to handle caching of network
 * requests.
 */

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

// We start our services then our router
startServices().then(() => {
  Router.run(routes, location, function(Handler) {
    return React.render(<Handler />, document.body);
  });
});