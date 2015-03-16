import React from 'react';
import { ListenerMixin } from 'reflux';
import FluxLibraryList from '../components/FluxLibraryList';

// A container that translates Flux state into component properties.
export default React.createClass({
  displayName: 'FluxLibraryContainer',

  mixins: [ListenerMixin],

  propTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  onStatusChange: function (status) {
    this.setState(status);
  },

  componentDidMount: function() {
    this.listenTo(this.props.store, this.onStatusChange);
    this.setState(this.props.store.state);
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
    if (this.props.store && this.props.actions) {
      const fluxState = this.props.store.state;

      return (<FluxLibraryList fluxLibraries={fluxState.fluxLibraries}
                               onMoveLibraryUp={this.moveLibraryUp}
                               onMoveLibraryDown={this.moveLibraryDown} />);
    } else {
      return (<div></div>);
    }
  }
});