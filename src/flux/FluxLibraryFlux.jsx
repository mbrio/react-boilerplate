import { Flux } from 'flummox';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStore from '../stores/FluxLibraryStore';

export default class FluxLibraryFlux extends Flux {
  constructor() {
    super();

    this.createActions('FluxLibrary', FluxLibraryActions);
    this.createStore('FluxLibrary', FluxLibraryStore, this);
  }
}