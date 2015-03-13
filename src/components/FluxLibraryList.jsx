import React from 'react';
import Marty from 'marty/dist/node/marty';
import FluxLibraryListItem from './FluxLibraryListItem';
import FluxLibraryActions from '../actions/FluxLibraryActions';
import FluxLibraryStore from '../stores/FluxLibraryStore';

// TODO: Find out if this is correct, documentation is scarce at the moment!
let fluxLibraryStore = Marty.register(FluxLibraryStore);
let fluxLibraryActions = new FluxLibraryActions();

// A UI element that represents the list of Flux libraries.
export default class FluxLibraryList extends Marty.Component {
  constructor(props, context) {
    this.listenTo = [fluxLibraryStore];

    super(props, context);
  }

  getState() {
    return {
      fluxLibraries: fluxLibraryStore.state.fluxLibraries
    };
  }

  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown(fluxLibrary) {
    fluxLibraryActions.moveDown(fluxLibrary);
  }

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp(fluxLibrary) {
    fluxLibraryActions.moveUp(fluxLibrary);
  }

  render() {
    const list = this.state.fluxLibraries.map(flux => {
      return <FluxLibraryListItem key={flux.url} url={flux.url} name={flux.name}
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