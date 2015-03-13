import React from 'react';

// A container that manages listening to changes form our Flux store. This
// component will update it's state when a Flux store's state has changed and
// pass it's properties, `store` and `actions` onto it's children.
class FluxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.setState = this.setState.bind(this);
    this.state = props.store.getState();
  }

  componentWillMount() {
    this.props.store.addListener('change', this.setState);
  }

  componentWillUnmount() {
    this.props.store.removeListener('change', this.setState);
  }

  render() {
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
}

FluxContainer.propTypes = {
  store: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default FluxContainer;