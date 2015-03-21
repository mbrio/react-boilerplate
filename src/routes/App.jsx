import * as less from './App.less';
import React from 'react';
// TODO: Fix when react-router fully supports 0.13
import { RouteHandler, Link } from 'react-router';

// A route handler that contains the entirety of the application.
export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <Link to='/' className='navbar-brand'>React Boilerplate</Link>
            </div>
          </div>
        </nav>
        <RouteHandler />
      </div>
    );
  }
}