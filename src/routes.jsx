import React from 'react';
import Router from 'react-router';
const { Route, DefaultRoute } = Router;

import Home from './components/Home';
import App from './components/App';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
  </Route>
);