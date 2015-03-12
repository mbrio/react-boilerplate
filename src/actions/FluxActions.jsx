import Marty from 'marty';
import FluxConstants from '../constants/FluxConstants';

export default Marty.createActionCreators({
  displayName: 'FluxActions',

  moveUp: FluxConstants.MOVE_UP(function (fluxLibrary) {
    this.dispatch(fluxLibrary);
  }),

  moveDown: FluxConstants.MOVE_DOWN(function (fluxLibrary) {
    this.dispatch(fluxLibrary);
  })
});