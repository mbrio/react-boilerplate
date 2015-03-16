import { Actions } from 'minimal-flux';
import fluxLibraryConstants from '../constants/FluxLibraryConstants';

// Action that mutate data within the Flux library list.
export default class FluxLibraryActions extends Actions {
  // An Action that requests an item be moved up the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveUp(fluxLibrary) {
    this.dispatch(fluxLibraryConstants.moveUp, fluxLibrary);
  }

  // An Action that requests an item be moved down the Flux library list.
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveDown(fluxLibrary) {
    this.dispatch(fluxLibraryConstants.moveDown, fluxLibrary);
  }
}