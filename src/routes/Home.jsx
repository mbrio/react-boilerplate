import React from 'react';
import flux from '../flux';
import FluxLibraryContainer from '../containers/FluxLibraryContainer';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxLibraryContainer store={flux.stores.fluxLibrary}
                              actions={flux.actions.fluxLibrary} />
      </div>
    );
  }
}
