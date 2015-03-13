import React from 'react';
import FluxList from '../components/FluxList';
import AppFlux from '../flux/AppFlux';
import FluxComponent from 'flummox/component';

const appFlux = new AppFlux();

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxComponent flux={appFlux} connectToStores={{
          Flux: store => ({
            fluxLibraries: store.state.fluxLibraries
          })
        }}>
          <FluxList />
        </FluxComponent>
      </div>
    );
  }
}
