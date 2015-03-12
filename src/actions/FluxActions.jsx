import Marty from 'marty';
import FluxConstants from '../constants/FluxConstants';

// Action that mutate data within the Flux library list.
export default Marty.createActionCreators({
  displayName: 'FluxActions',

  // An Action that requests an item be moved up the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveUp: FluxConstants.MOVE_UP(function (fluxLibrary) {
    this.dispatch(fluxLibrary);
  }),

  // An Action that requests an item be moved down the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveDown: FluxConstants.MOVE_DOWN(function (fluxLibrary) {
    this.dispatch(fluxLibrary);
  })
});