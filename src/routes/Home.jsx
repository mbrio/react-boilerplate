import React from 'react';
import Marty from 'marty';
import FluxList from '../components/FluxList';

// A route handler that represents the Home route.
export default React.createClass({
  displayName: 'Home',

  render: function () {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxList />
      </div>
    );
  }
});
