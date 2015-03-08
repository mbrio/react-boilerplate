import React from 'react';
import Router from 'react-router';
const { Route, DefaultRoute, NotFoundRoute } = Router;

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import App from './components/App';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route name='about' handler={About} />
    <Route name='contact' handler={Contact} />
  </Route>
);