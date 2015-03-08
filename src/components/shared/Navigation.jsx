import React from 'react';
import Marty from 'marty';
import NavigationStore from '../../stores/NavigationStore';
import Router from 'react-router';
import classnames from 'classnames';
import * as less from './Navigation.less';

const { Link } = Router;

let NavigationState = Marty.createStateMixin({
  allNavItems: NavigationStore,
  getState: function () {
    return {};
  }
});

export default React.createClass({
  displayName: 'Navigation',

  mixins: [NavigationState],

  propTypes: {
    selected: React.PropTypes.string
  },

  render: function () {
    let navItems = [];

    for (let key in this.state.allNavItems) {
      const routeName = this.state.allNavItems[key];
      const classname = classnames({
        active: this.props.selected && key === this.props.selected
      });

      navItems.push(<li key={key} className={classname}><Link to={routeName}>{key}</Link></li>);
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            {navItems}
          </ul>
        </div>
      </nav>
    );
  }
});
