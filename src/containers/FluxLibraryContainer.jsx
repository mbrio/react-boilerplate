import React from 'react';
import Fluxxor from 'fluxxor';
import FluxLibraryList from '../components/FluxLibraryList';

// A container that translates Flux state into component properties.
export default React.createClass({
  displayName: 'FluxLibraryContainer',

  propTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  onStatusChange: function () {
    this.setState(this.props.store.state);
  },

  getInitialState: function () {
    return this.props.store.state;
  },

  componentDidMount: function() {
    this.props.store.addListener("change", this.onStatusChange);
    this.setState(this.props.store.state);
  },

  componentWillUnmount: function () {
    this.props.store.removeListener("change", this.onStatusChange);
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
    if (this.props.store) {
      const fluxState = this.state;

      return (<FluxLibraryList fluxLibraries={fluxState.fluxLibraries}
                               onMoveLibraryUp={this.moveLibraryUp}
                               onMoveLibraryDown={this.moveLibraryDown} />);
    } else {
      return (<div></div>);
    }
  }
});