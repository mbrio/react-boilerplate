import * as less from './FluxLibraryListItem.less';
import React from 'react';

// A UI element representing a single item within the Flex library list.
export default React.createClass({
  displayName: 'FluxLibraryListItem',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    onMoveDown: React.PropTypes.func.isRequired,
    onMoveUp: React.PropTypes.func.isRequired
  },

  // Event handler for when the icon representing moving up is clicked.
  onMoveUp: function (ev) {
    ev.preventDefault();

    this.props.onMoveUp();
  },

  // Event handler for when the icon representing moving down is clicked.
  onMoveDown: function (ev) {
    ev.preventDefault();

    this.props.onMoveDown();
  },

  render: function () {
    return (
      <li className='flux-list-item list-group-item'>
        <a href={this.props.url} target='_blank'>{this.props.name}</a>
        <ul className='list-inline pull-right'>
          <li><a href='#' onClick={this.onMoveDown} className='glyphicon glyphicon-menu-down' title={'Move ' + this.props.name + ' Down'}></a></li>
          <li><a href='#' onClick={this.onMoveUp} className='glyphicon glyphicon-menu-up' title={'Move ' + this.props.name + ' Up'}></a></li>
        </ul>
      </li>
    );
  }
});
