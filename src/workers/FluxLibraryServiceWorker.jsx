/*
 * You can inspect this service by typing about:serviceworker-internals into
 * Chrome.
 */

import * as fetchPolyfill from 'whatwg-fetch';
const CACHE_NAME = 'list-service-cache-1.0.0';

/*
 * This is a very simple exmaple, we are only using the caching mechanism to
 * store the JSON response file. We could take this much further and create a
 * completely offline experience, but there are many decisions that need to be
 * made that are outside the scope of this boilerplate.
 *
 * This implementation caches the file the first time and never updates it, in
 * order to see changes to the JSON file you'll need to remove the service
 * worker via about:serviceworker-internals.
 *
 * For more information about creating offline experiences:
 * http://jakearchibald.com/2014/offline-cookbook/
 *
 * For more information about service workers:
 * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/list.json'
      ]);
    })
  );
});