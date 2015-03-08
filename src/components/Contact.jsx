import React from 'react';
import Navigation from './shared/Navigation';

export default React.createClass({
  displayName: 'Contact',

  render: function () {
    return (
      <div>
        <Navigation selected='Contact' />
        <div className='container'>
          <h2>Contact</h2>
        </div>
      </div>
    );
  }
});
