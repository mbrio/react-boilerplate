import React from 'react';
import FluxLibraryList from '../components/FluxLibraryList';

// A container that translates Flux state into component properties.
class FluxLibraryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.store.state;
  }

  onStatusChange(status) {
    this.setState(status);
  }

  componentDidMount() {
    this.listener = this.props.store.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    if (this.listener) {
      this.listener();
      this.listener = null;
    }
  }

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
    if (this.props.store && this.props.actions) {
      return (<FluxLibraryList fluxLibraries={this.state.fluxLibraries}
                               onMoveLibraryUp={this.moveLibraryUp.bind(this)}
                               onMoveLibraryDown={this.moveLibraryDown.bind(this)} />);
    } else {
      return (<div></div>);
    }
  }
}

FluxLibraryContainer.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default FluxLibraryContainer;