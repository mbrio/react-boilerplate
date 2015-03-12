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

    const newOrder = this.state.fluxLibraries.slice(newIndex, index + 1).reverse().toArray();
    const newState = this.state.fluxLibraries.splice(newIndex, 2, ...newOrder);

    this.state.fluxLibraries = newState;
    this.hasChanged();
  },

  moveDown: function (fluxLibrary) {
    const index = this.state.fluxLibraries.indexOf(fluxLibrary);

    if (index >= this.state.fluxLibraries.size - 1) {
      return;
    }

    const newIndex = index + 1;

    const newOrder = this.state.fluxLibraries.slice(index, newIndex + 1).reverse().toArray();
    const newState = this.state.fluxLibraries.splice(index, 2, ...newOrder);

    this.state.fluxLibraries = newState;
    this.hasChanged();
  }
});