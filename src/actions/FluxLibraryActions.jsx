import Marty from 'marty/dist/node/marty';
import FluxLibraryConstants from '../constants/FluxLibraryConstants';

// Action that mutate data within the Flux library list.
export default class FluxLibraryActions extends Marty.ActionCreators {
    // An Action that requests an item be moved up the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move up the list.
    moveUp(fluxLibrary) {
      this.dispatch(FluxLibraryConstants.MOVE_UP, fluxLibrary);
    }

    // An Action that requests an item be moved down the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move down the
    //                               list.
    moveDown(fluxLibrary) {
      this.dispatch(FluxLibraryConstants.MOVE_DOWN, fluxLibrary);
    }
}