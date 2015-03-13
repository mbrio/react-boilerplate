import { Flux } from 'flummox';
import FluxActions from '../actions/FluxActions';
import FluxStore from '../stores/FluxStore';

export default class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('Flux', FluxActions);
    this.createStore('Flux', FluxStore, this);
  }
}