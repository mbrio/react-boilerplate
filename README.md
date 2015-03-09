# React Boilerplate

A boilerplate for use compiling static applications with ES6, React, React
Router, Marty, Bootstrap, LESS, and Webpack.

## Build

In order to build the project you will first need to install all necessary node
modules and have grunt-cli installed globally:

```
npm install -g grunt-cli
npm install
```

To build a development version of the project execute grunt:

```
grunt build
```

To build a production version of the project you must set the `NODE_ENV` to
production prior to executing grunt:

```
NODE_ENV=production grunt build
```

The built application will reside in the *build* directory.

## Development Server

Running grunt with no parameters will launch the development server with hot
module swap enabled, this will allow you to edit your LESS and React components
and immediately see your changes take place within your browser without having
to reload.

```
grunt
```

## Production vs Development

When running the build script grunt will try and load in the webpack config file
associated with the `NODE_ENV` environment variable. If `NODE_ENV` is not set
then it will default to the *development* environment. The webpack config file
must be named *webpack.{environment}.config.js* where *{environment}* is
replaced with the environment's name (e.g. webpack.development.config.js).

The Webpack configuration files supplied with React Boilerplate make available
a global `NODE_ENV` variable within the React application through the use of
`webpack.DefinePlugin` that corresponds with the environment specified.

## Project Layout

All source code resides in the *src* directory.

### Initialization

The *src/init.jsx* file configures the application's environment, includes the
application's routes, and runs the React Router on `document.body`.

### Routing

This configuration uses React Router for all routing needs, you must specify
your routes within *src/routes.jsx*.

### React Components

All of the application's React components reside within *src/components*. The
root of *src/components* is meant for the application's route handlers while the
*shared* directory is meant to hold any components that are reused throughout
the application.

React Boilerplate is configured to store LESS files alongside the components
that they style and to import them using Webpack. Every React component that
represents a UI element will have a corresponding LESS file, and shared LESS
files are imported and configured within *src/init.less*.

Shared LESS files reside in *src/less* and must be imported within
*src/init.less*.

### Marty

Flux is handled by Martyjs in React Boilerplate and it's files reside in
multiple locations; all data stores reside in *src/stores*; all actions reside
in *src/actions*; and all constants reside in *src/constants*.

### Assets

Any files needing to be directly copied into the *build* directory, separately
from what is imported using Webpack, must be placed within the *src/assets*
folder. All files within this directory are copied into *build*, and are made
available to the application.