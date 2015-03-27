# React Boilerplate

A boilerplate for use compiling static applications consisting of ES6 source
using Babel and Webpack. Comes pre-configured to use React, React Router,
Flummox, Bootstrap, and LESS. This configuration comes with a service worker for
building offline applications.

Some helper libraries are included in this project including
[classenames](https://www.npmjs.com/package/classnames),
[Immutable](https://www.npmjs.com/package/immutable), and
[whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch).

## Configuration

This boilerplate has a special configuration for JSON files within Webpack.
Since writing a web API is outside the scope of this project we use Webpack's
file loader to handle JSON files. This is probably not what you'd want to do in
a production environment. In order to remove this configuration you can edit the
*webpack.production.js* file, the changes will be propagated to the other
Webpack environments.

## Build

In order to build the project you will first need to install all necessary node
modules:

```
npm install
```

To build a development version of the project execute:

```
npm run build
```

To build a production version of the project execute:

```
npm run build:production
```

To clean the directory execute:

```
npm run clean
```

## Development Server

To launch the development server with hot module swap enabled execute:

```
npm run start
```

This will allow you to edit your LESS and React components and immediately see
your changes take place within your browser without having to reload.

## Production vs Development

The Webpack configuration files supplied with React Boilerplate make available
a global `NODE_ENV` variable within the compiled React application. This is done
through the use of the `webpack.DefinePlugin`.

## Project Layout

All source code resides in the *src* directory, the compiled static application
will reside in the *build* directory.

### Initialization

The *src/init.jsx* file configures the application's environment, includes the
application's routes, starts the application's service workers, and runs the
React Router on `document.body`.

### Service Workers

Service workers aid in the development of offline applications. This particular
project is configured in an extremely simple way to cache the included JSON
file. For more information on service workers you can checkout the documentation
on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker_API).

In order to debug service workers in Chrome you can go to
[about:serviceworker-internals](about:serviceworker-internals).

### Routing

This configuration uses React Router for all routing needs, you must specify
your routes within *src/routes.jsx*. When using `HistoryLocation` for routing
you may want to make use of the *config/htaccess* file supplied that re-routes
all server requests to *index.html*, this allows you to use a single file on
Apache servers and redirect all routes to it.

### React Route Handlers

All of the application's React route handlers reside within *src/routes*.

### React Shared Components

All of the application's React shared components reside within *src/components*,
and all of the application's React container components reside within
*src/containers*.

### LESS

React Boilerplate is configured to store LESS files alongside the components
they style and to import them using Webpack from within the JSX source. Most
React components that represent a UI element will have a corresponding LESS
file, and shared LESS files are imported and configured within *src/init.less*.

*src/init.less* imports both Bootstrap and it's theme. You may override the
default Bootstrap variables by editing *src/less/variables.less*.

### Flux

Flux is handled by Flummox in React Boilerplate and it's files reside in
multiple locations; all data stores reside in *src/stores*; all actions reside
in *src/actions*; and the app's Flux configuration resides at *src/flux.jsx*.

For this example I use immutable data in the Flux store, it is not necessary,
but is a suggested practice, feel free to remove this if required.

## License

React Boilerplate is [BSD licensed](./LICENSE).