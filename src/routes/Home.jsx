import React from 'react';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStores from '../stores/FluxLibraryStore';
import FluxLibraryContainer from '../containers/FluxLibraryContainer';
import FluxContainer from '../containers/FluxContainer';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxContainer store={FluxLibraryStores}
                       actions={FluxLibraryActions} >
          <FluxLibraryContainer />
        </FluxContainer>
      </div>
    );
  }
}
