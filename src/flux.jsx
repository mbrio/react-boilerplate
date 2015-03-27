import { Flux } from 'flummox';
import FluxLibraryActions from './actions/FluxLibraryActions';
import FluxLibraryStore from './stores/FluxLibraryStore';

// The flux configuration for the application
class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('FluxLibrary', FluxLibraryActions);
    this.createStore('FluxLibrary', FluxLibraryStore, this);
  }
}

export default new AppFlux();