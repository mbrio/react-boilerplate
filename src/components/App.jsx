import * as less from './App.less';
import React from 'react';
import Router from 'react-router';

const { RouteHandler, Link } = Router;

export default React.createClass({
  displayName: 'App',

  render: function () {
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
});