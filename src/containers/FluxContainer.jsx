import React from 'react';
import Marty from 'marty/dist/node/marty';
import FluxStore from '../stores/FluxStore';

let fluxStore = new FluxStore();

// A state mixin to be used by `FluxList`.
let FluxState = Marty.createStateMixin({
  listenTo: [fluxStore],

  getState: function () {
    return {
      fluxLibraries: fluxStore.getState().fluxLibraries
    };
  }
});

export default React.createClass({
  displayName: 'FluxContainer',

  mixins: [FluxState],

  proptTypes: {
    component: React.PropTypes.object.isRequired
  },

  render: function () {
    const Component = this.props.component;

    return (
      <div>
        <Component fluxLibraries={this.state.fluxLibraries} />
      </div>
    );
  }
});
