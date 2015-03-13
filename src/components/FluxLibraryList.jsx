import React from 'react';
import FluxListItem from './FluxLibraryListItem';

// A UI element that represents the list of Flux libraries.
class FluxList extends React.Component {
  // Requests a Flux library to be moved down within the list
  // @param {object} fluxLibrary - The flux library object to move down the
  //                               list.
  moveLibraryDown(fluxLibrary) {
    this.props.actions.moveDown(fluxLibrary);
  }

  // Requests a Flux library to be moved up within the list
  // @param {object} fluxLibrary - The flux library object to move up the list.
  moveLibraryUp(fluxLibrary) {
    this.props.actions.moveUp(fluxLibrary);
  }

  render() {
    const fluxState = this.props.store.getState();

    const list = fluxState.fluxLibraries.map(flux => {
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

FluxList.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default FluxList;