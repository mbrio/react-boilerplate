import React from 'react';
import Marty from 'marty';
import FluxStore from '../stores/FluxStore';
import FluxActions from '../actions/FluxActions';
import FluxListItem from './FluxListItem';

// A state mixin to be used by `FluxList`.
let FluxState = Marty.createStateMixin({
  listenTo: [FluxStore],

  getState: function () {
    return {
      fluxLibraries: FluxStore.getState().fluxLibraries
    };
  }
});

// A UI element that represents the list of Flux libraries.
export default React.createClass({
  displayName: 'FluxList',

  mixins: [FluxState],

  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown: function (fluxLibrary) {
    FluxActions.moveDown(fluxLibrary);
  },

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp: function (fluxLibrary) {
    FluxActions.moveUp(fluxLibrary);
  },

  render: function () {
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
});
