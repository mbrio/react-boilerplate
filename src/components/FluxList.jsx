import React from 'react';
import Marty from 'marty/dist/node/marty';
import FluxListItem from './FluxListItem';
import FluxActions from '../actions/FluxActions';
import FluxStore from '../stores/FluxStore';

// TODO: Find out if this is correct, documentation is scarce at the moment!
let fluxStore = Marty.register(FluxStore);
let fluxActions = new FluxActions();

// A UI element that represents the list of Flux libraries.
export default class FluxList extends Marty.Component {
  constructor(props, context) {
    this.listenTo = [fluxStore];

    super(props, context);
  }

  getState() {
    return {
      fluxLibraries: fluxStore.state.fluxLibraries
    };
  }

  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown(fluxLibrary) {
    fluxActions.moveDown(fluxLibrary);
  }

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp(fluxLibrary) {
    fluxActions.moveUp(fluxLibrary);
  }

  render() {
    const list = this.state.fluxLibraries.map(flux => {
      return <FluxListItem key={flux.url} url={flux.url} name={flux.name}
        onMoveUp={this.moveLibraryUp.bind(this, flux)}
        onMoveDown={this.moveLibraryDown.bind(this, flux)} />;
    }).toArray();

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>What is your favorite Flux library?</div>
        <div className='panel-body'>
          <p>Click the arrows to move your favorite Flux library up or down the list.</p>
        </div>

        <ul className='list-group'>
          {list}
        </ul>
      </div>
    );
  }
}