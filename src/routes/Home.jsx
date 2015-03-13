import React from 'react';
import { Flux } from 'minimal-flux';
import FluxLibraryList from '../components/FluxLibraryList';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStore from '../stores/FluxLibraryStore';
import FluxContainer from '../containers/FluxContainer';

const flux = new Flux({
  actions: {
    fluxLibrary: FluxLibraryActions
  },
  stores: {
    fluxLibrary: FluxLibraryStore
  }
});

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxContainer store={flux.stores.fluxLibrary}
                       actions={flux.actions.fluxLibrary} >
          <FluxLibraryList />
        </FluxContainer>
      </div>
    );
  }
}
