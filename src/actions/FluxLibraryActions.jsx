import fluxLibraryConstants from '../constants/FluxLibraryConstants';

// Action that mutate data within the Flux library list.
export default {
  // An Action that requests an item be moved up the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveUp: function (fluxLibrary) {
    this.dispatch(fluxLibraryConstants.MOVE_UP, fluxLibrary);
  },

  // An Action that requests an item be moved down the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveDown: function (fluxLibrary) {
    this.dispatch(fluxLibraryConstants.MOVE_DOWN, fluxLibrary);
  }
};