// We check to ensure service workers are supported by the browser before
// installing
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/flux-library-service-worker.js')
    .then(function (registration) {
      console.log('FluxLibraryServiceWorker registered.');
    }).catch(function (err) {
      console.log('FluxLibraryServiceWorker registration failed with error', err);
    });
}