import React from 'react';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStores from '../stores/FluxLibraryStore';
import FluxLibraryContainer from '../containers/FluxLibraryContainer';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
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
}
