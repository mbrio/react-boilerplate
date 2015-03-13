import React from 'react';
import FluxList from '../components/FluxList';
import FluxLibraryFlux from '../flux/FluxLibraryFlux';
import FluxComponent from 'flummox/component';

const fluxLibraryFlux = new FluxLibraryFlux();

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxComponent flux={fluxLibraryFlux} connectToStores={{
          FluxLibrary: store => ({
            fluxLibraries: store.state.fluxLibraries
          })
        }}>
          <FluxList />
        </FluxComponent>
      </div>
    );
  }
}
