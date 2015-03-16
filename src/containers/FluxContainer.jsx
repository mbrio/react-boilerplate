import React from 'react';
import { ListenerMixin } from 'reflux';

// A container that manages listening to changes form our Flux store. This
// component will update it's state when a Flux store's state has changed and
// pass it's properties, `store` and `actions` onto it's children.
export default React.createClass({
  displayName: 'FluxContainer',

  mixins: [ListenerMixin],

  onStatusChange: function (status) {
    this.setState(status);
  },

  componentDidMount: function() {
    this.listenTo(this.props.store, this.onStatusChange);
    this.setState(this.props.store.state);
  },

  propTypes: {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  render: function () {
    const props = this.props;
    const children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, props);
    });

    if (children) {
      return (
        <div>{ children }</div>
      );
    } else {
      return (<div></div>);
    }
  }
});