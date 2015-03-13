import React from 'react';
// TODO: Fix when react-router fully supports 0.13
import Router from 'react-router/build/npm';
const { Route, DefaultRoute } = Router;

// You must import all of the components that represent route handlers
import Home from './routes/Home';
import App from './routes/App';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
  </Route>
);