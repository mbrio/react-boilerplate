import React from 'react';

export default React.createClass({
  displayName: 'FluxListItem',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    onMoveDown: React.PropTypes.func.isRequired,
    onMoveUp: React.PropTypes.func.isRequired
  },

  onMoveUp: function (ev) {
    ev.preventDefault();

    this.props.onMoveUp();
  },

  onMoveDown: function (ev) {
    ev.preventDefault();

    this.props.onMoveDown();
  },

  render: function () {
    return (
      <li className='list-group-item'>
        <a href={this.props.url} target='_blank'>{this.props.name}</a>
        <span className='badge'>
          <a href='#' onClick={this.onMoveDown}><span className='glyphicon glyphicon-menu-down' aria-hidden='true'></span></a>
          <a href='#' onClick={this.onMoveUp}><span className='glyphicon glyphicon-menu-up' aria-hidden='true'></span></a>
        </span>
      </li>
    );
  }
});
