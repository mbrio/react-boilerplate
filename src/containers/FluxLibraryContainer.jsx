import React from 'react';
import Marty from 'marty';
import FluxLibraryList from '../components/FluxLibraryList';

// A container that translates Flux state into component properties.
export default React.createClass({
  displayName: 'FluxLibraryContainer',

  propTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return this.props.store.getState();
  },

  onStatusChange: function (state, store) {
    this.setState(state);
  },

  componentDidMount: function () {
    this.changeListener = this.props.store.addChangeListener(this.onStatusChange);
  },

  componentWillUnmount: function () {
    if (this.changeListener) {
      this.changeListener.dispose();
      this.changeListener = null;
    }
  },

  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown: function (fluxLibrary) {
    this.props.actions.moveDown(fluxLibrary);
  },

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp: function (fluxLibrary) {
    this.props.actions.moveUp(fluxLibrary);
  },

  render: function () {
    return (<FluxLibraryList fluxLibraries={this.state.fluxLibraries}
                             onMoveLibraryUp={this.moveLibraryUp}
                             onMoveLibraryDown={this.moveLibraryDown} />);
  }
});