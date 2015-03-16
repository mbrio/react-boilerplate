import React from 'react';
import FluxLibraryContainer from '../containers/FluxLibraryContainer';
import flux from '../flux';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxLibraryContainer store={flux.store('fluxLibrary')}
                              actions={flux.actions} />
      </div>
    );
  }
}
