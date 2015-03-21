import * as less from './App.less';
import React from 'react';
import Router from 'react-router';

const { RouteHandler, Link } = Router;

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