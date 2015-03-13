import * as less from './FluxLibraryListItem.less';
import React from 'react';

// A UI element representing a single item within the Flex library list.
class FluxListItem extends React.Component {
  // Event handler for when the icon representing moving up is clicked.
  onMoveUp(ev) {
    ev.preventDefault();

    this.props.onMoveUp();
  }

  // Event handler for when the icon representing moving down is clicked.
  onMoveDown(ev) {
    ev.preventDefault();

    this.props.onMoveDown();
  }

  render() {
    return (
      <li className='flux-list-item list-group-item'>
        <a href={this.props.url} target='_blank'>{this.props.name}</a>
        <ul className='list-inline pull-right'>
          <li><a href='#' onClick={this.onMoveDown.bind(this)} className='glyphicon glyphicon-menu-down' title={'Move ' + this.props.name + ' Down'}></a></li>
          <li><a href='#' onClick={this.onMoveUp.bind(this)} className='glyphicon glyphicon-menu-up' title={'Move ' + this.props.name + ' Up'}></a></li>
        </ul>
      </li>
    );
  }
}

FluxListItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  onMoveDown: React.PropTypes.func.isRequired,
  onMoveUp: React.PropTypes.func.isRequired
};

export default FluxListItem;