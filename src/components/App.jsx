import React from 'react';
import Router from 'react-router';

const { RouteHandler } = Router;

export default React.createClass({
  displayName: 'App',

  render: function () {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});