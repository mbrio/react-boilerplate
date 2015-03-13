import React from 'react';
import Marty from 'marty/dist/node/marty';
import FluxLibraryList from '../components/FluxLibraryList';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxLibraryList />
      </div>
    );
  }
}
