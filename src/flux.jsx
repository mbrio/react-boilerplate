import Marty from 'marty/dist/node/marty';
import FluxLibraryActions from './actions/FluxLibraryActions';
import FluxLibraryStore from './stores/FluxLibraryStore';

export default {
  stores: {
    fluxLibrary: Marty.register(FluxLibraryStore)
  },
  actions: {
    fluxLibrary: new FluxLibraryActions()
  }
};