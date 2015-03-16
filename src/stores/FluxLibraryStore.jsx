import Reflux from 'reflux';
import Immutable from 'immutable';
import FluxLibraryActions from '../actions/FluxLibraryActions';

// A Flux store that represents an immutable, ordered list of Flux library
// information.
export default Reflux.createStore({
  init: function () {
    this.listenTo(FluxLibraryActions.moveUp, this.moveUp);
    this.listenTo(FluxLibraryActions.moveDown, this.moveDown);

    this.state = {
      // We create our immutable data list of Flux libraries.
      fluxLibraries: Immutable.List([
        {
          name: 'Reflux',
          url: 'https://github.com/spoike/refluxjs'
        },
        {
          name: 'minimal-flux',
          url: 'https://github.com/malte-wessel/minimal-flux'
        },
        {
          name: 'Flummox',
          url: 'https://github.com/acdlite/flummox'
        },
        {
          name: 'Marty',
          url: 'https://github.com/jhollingworth/marty'
        },
        {
          name: 'Fluxxor',
          url: 'https://github.com/BinaryMuse/fluxxor'
        }
      ])
    };
  },

  // Moves a Flux library up the list within `this.state.fluxLibraries`.
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveUp: function (fluxLibrary) {
    const index = this.state.fluxLibraries.indexOf(fluxLibrary);

    if (index <= 0) {
      return;
    }

    const newIndex = index - 1;

    this.swapIndexes(this.state, newIndex, index);
  },

  // Moves a Flux library down the list within `this.state.fluxLibraries`.
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveDown: function(fluxLibrary) {
    const index = this.state.fluxLibraries.indexOf(fluxLibrary);

    if (index >= this.state.fluxLibraries.size - 1) {
      return;
    }

    const newIndex = index + 1;

    this.swapIndexes(this.state, index, newIndex);
  },

  // Swaps two adjacent items within `this.state.fluxLibraries`.
  // @param {number} a - The index closest to the beginning of the array
  //                     representing the first item to be swapped.
  // @param {number} b - The index futhest from the beginning of the array
  //                     representing the second item to be swapped.
  swapIndexes: function(state, a, b) {
    const newOrder = state.fluxLibraries.slice(a, b + 1).reverse().toArray();
    const newState = state.fluxLibraries.splice(a, 2, ...newOrder);

    this.state = {
      fluxLibraries: newState
    };

    this.trigger(this.state);
  }
});