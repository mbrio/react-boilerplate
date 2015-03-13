import { Actions } from 'flummox';

// Action that mutate data within the Flux library list.
export default class FluxActions extends Actions {
    // An Action that requests an item be moved up the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move up the list.
    moveUp(fluxLibrary) {
      return fluxLibrary;
    }

    // An Action that requests an item be moved down the Flux library list.
    // @param {object} fluxLibrary - The flux library object to move down the
    //                               list.
    moveDown(fluxLibrary) {
      return fluxLibrary;
    }
}