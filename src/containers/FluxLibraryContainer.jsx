import React from 'react';
import Marty from 'marty';
import FluxLibraryList from '../components/FluxLibraryList';
import FluxLibraryStore from '../stores/FluxLibraryStore';
import FluxLibraryActions from '../actions/FluxLibraryActions';

// A state mixin to be used by `FluxList`.
let FluxLibraryState = Marty.createStateMixin({
  listenTo: [FluxLibraryStore],

  getState: function () {
    return {
      fluxLibraries: FluxLibraryStore.getState().fluxLibraries
    };
  }
});

// A container that translates Flux state into component properties.
export default React.createClass({
  displayName: 'FluxLibraryContainer',

  mixins: [FluxLibraryState],

  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown: function (fluxLibrary) {
    FluxLibraryActions.moveDown(fluxLibrary);
  },

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp: function (fluxLibrary) {
    FluxLibraryActions.moveUp(fluxLibrary);
  },

  render: function () {
    return (<FluxLibraryList fluxLibraries={this.state.fluxLibraries}
                             onMoveLibraryUp={this.moveLibraryUp}
                             onMoveLibraryDown={this.moveLibraryDown} />);
  }
});