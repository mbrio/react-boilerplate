import React from 'react';
import { Route, DefaultRoute } from 'react-router';

// You must import all of the components that represent route handlers
import Home from './routes/Home';
import App from './routes/App';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
  </Route>
);