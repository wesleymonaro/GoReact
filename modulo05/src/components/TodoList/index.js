import React, { Component } from 'react';

// import { Container } from './styles';

export default class TodoList extends Component {

  state = {
    todos: [],
  }

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
      </ul>
    )
  }
}
