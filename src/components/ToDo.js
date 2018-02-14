import React, { Component } from 'react';

class ToDo extends Component {
  deleteToDo(item, index) {
    this.props.deleteToDo(item, index);
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
