import { Flux } from 'minimal-flux';
import FluxLibraryActions from './actions/FluxLibraryActions';
import FluxLibraryStore from './stores/FluxLibraryStore';

// The flux configuration for our application
export default new Flux({
  actions: {
    fluxLibrary: FluxLibraryActions
  },
  stores: {
    fluxLibrary: FluxLibraryStore
  }
});