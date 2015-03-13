import { Store } from 'minimal-flux';
import Immutable from 'immutable';

// A Flux store that represents an immutable, ordered list of Flux library
// information.
export default class FluxLibraryStore extends Store {
  constructor(flux) {
    super(flux);

    this.handleAction('fluxLibrary.moveUp', this.moveUp);
    this.handleAction('fluxLibrary.moveDown', this.moveDown);

    this.state = {
      // We create our immutable data list of Flux libraries.
      fluxLibraries: Immutable.List([
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
        },
        {
          name: 'Reflux',
          url: 'https://github.com/spoike/refluxjs'
        }
      ])
    };
  }

  // Moves a Flux library up the list within `this.state.fluxLibraries`.
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveUp(fluxLibrary) {
    const state = this.getState();
    const index = state.fluxLibraries.indexOf(fluxLibrary);

    if (index <= 0) {
      return;
    }

    const newIndex = index - 1;

    this.swapIndexes(state, newIndex, index);
  }

  // Moves a Flux library down the list within `this.state.fluxLibraries`.
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveDown(fluxLibrary) {
    const state = this.getState();
    const index = state.fluxLibraries.indexOf(fluxLibrary);

    if (index >= state.fluxLibraries.size - 1) {
      return;
    }

    const newIndex = index + 1;

    this.swapIndexes(state, index, newIndex);
  }

  // Swaps two adjacent items within `this.state.fluxLibraries`.
  // @param {number} a - The index closest to the beginning of the array
  //                     representing the first item to be swapped.
  // @param {number} b - The index futhest from the beginning of the array
  //                     representing the second item to be swapped.
  swapIndexes(state, a, b) {
    const newOrder = state.fluxLibraries.slice(a, b + 1).reverse().toArray();
    const newState = state.fluxLibraries.splice(a, 2, ...newOrder);

    this.setState({
      fluxLibraries: newState
    });
  }
}