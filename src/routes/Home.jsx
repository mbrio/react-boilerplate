import React from 'react';
import Marty from 'marty/dist/node/marty';
import FluxList from '../components/FluxList';
import FluxContainer from '../containers/FluxContainer';

// A route handler that represents the Home route.
export default class Home extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='page-header'>
          <h1>FLUX</h1>
        </div>
        <FluxContainer component={FluxList} />
      </div>
    );
  }
}
