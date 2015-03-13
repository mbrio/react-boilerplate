import React from 'react';
import FluxLibraryList from '../components/FluxLibraryList';

// A container that translates Flux state into component properties.
class FluxLibraryContainer extends React.Component {
  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown(fluxLibrary) {
    this.props.flux.getActions('FluxLibrary').moveDown(fluxLibrary);
  }

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp(fluxLibrary) {
    this.props.flux.getActions('FluxLibrary').moveUp(fluxLibrary);
  }

  render() {
    if (this.props.fluxLibraries) {
      return (<FluxLibraryList fluxLibraries={this.props.fluxLibraries}
                               onMoveLibraryUp={this.moveLibraryUp.bind(this)}
                               onMoveLibraryDown={this.moveLibraryDown.bind(this)} />);
    } else {
      return (<div></div>);
    }
  }
}

FluxLibraryContainer.propTypes = {
  fluxLibraries: React.PropTypes.object,
  actions: React.PropTypes.object
};

export default FluxLibraryContainer;