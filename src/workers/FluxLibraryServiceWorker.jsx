// A polyfill for the fetch API
import * as fetchPolyfill from 'whatwg-fetch';

const CACHE_NAME = 'list-service-cache-1.0.0';

self.addEventListener('install', function(event) {
  event.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener('fetch', function(event) {
  console.log('test');
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) { return response; }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
