import React from 'react';
import FluxLibraryContainer from '../containers/FluxLibraryContainer';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStores from '../stores/FluxLibraryStore';

// A route handler that represents the Home route.
export default React.createClass({
  displayName: 'Home',

  render: function () {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxLibraryContainer store={FluxLibraryStores}
                              actions={FluxLibraryActions} />
      </div>
    );
  }
});
