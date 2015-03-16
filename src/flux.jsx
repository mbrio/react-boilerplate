import Fluxxor from 'fluxxor';
import FluxLibraryStore from './stores/FluxLibraryStore';
import fluxLibraryActions from './actions/FluxLibraryActions';

const stores = {
  fluxLibrary: new FluxLibraryStore()
};

export default new Fluxxor.Flux(stores, fluxLibraryActions);