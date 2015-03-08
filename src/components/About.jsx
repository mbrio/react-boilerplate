import React from 'react';
import Navigation from './shared/Navigation';

export default React.createClass({
  displayName: 'About',

  render: function () {
    return (
      <div>
        <Navigation selected='About' />
        <div className='container'>
          <h2>About</h2>
        </div>
      </div>
    );
  }
});
