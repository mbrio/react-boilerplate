import Marty from 'marty/dist/node/marty';
import FluxConstants from '../constants/FluxConstants';

// Action that mutate data within the Flux library list.
export default class FluxActions extends Marty.ActionCreators {
  constructor(options) {
    // An Action that requests an item be moved up the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move up the list.
    this.moveUp = FluxConstants.MOVE_UP(function (fluxLibrary) {
      this.dispatch(fluxLibrary);
    });

    // An Action that requests an item be moved down the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move down the
    //                               list.
    this.moveDown = FluxConstants.MOVE_DOWN(function (fluxLibrary) {
      this.dispatch(fluxLibrary);
    });

    super(options);
  }
}