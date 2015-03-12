import Marty from 'marty';
import Immutable from 'immutable';
import FluxConstants from '../constants/FluxConstants';

export default Marty.createStore({
  displayName: 'FluxStore',

  getInitialState: function () {
    return {
      fluxLibraries: Immutable.List([
        {
          name: 'Marty',
          url: 'https://github.com/jhollingworth/marty'
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
          name: 'Fluxxor',
          url: 'https://github.com/BinaryMuse/fluxxor'
        },
        {
          name: 'Reflux',
          url: 'https://github.com/spoike/refluxjs'
        }
      ])
    };
  },

  handlers: {
    moveUp: FluxConstants.MOVE_UP,
    moveDown: FluxConstants.MOVE_DOWN
  },

  moveUp: function (fluxLibrary) {
    const index = this.state.fluxLibraries.indexOf(fluxLibrary);

    if (index <= 0) {
      return;
    }

    const newIndex = index - 1;

    this.swapIndexes(newIndex, index);
  },

  moveDown: function (fluxLibrary) {
    const index = this.state.fluxLibraries.indexOf(fluxLibrary);

    if (index >= this.state.fluxLibraries.size - 1) {
      return;
    }

    const newIndex = index + 1;

    this.swapIndexes(index, newIndex);
  },

  swapIndexes: function (a, b) {
    const newOrder = this.state.fluxLibraries.slice(a, b + 1).reverse().toArray();
    const newState = this.state.fluxLibraries.splice(a, 2, ...newOrder);

    this.state.fluxLibraries = newState;
    this.hasChanged();
  }
});