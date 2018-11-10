import React, { Component, Fragment } from 'react';

// import { Container } from './styles';

export default class TodoList extends Component {

  state = {
    todos: [],
  };

  addTodo = () => {
    this.setState({todos: [
      ...this.state.todos,
      {
        id: Math.random(),
        text: 'Novo Todo',
      }
    ]})
  }

  removeTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});
  }

  render() {
    return (
      <Fragment>

        <ul>
          {this.state.todos.map(todo => <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>{todo.text}</li>)}
        </ul>
        <button onClick={this.addTodo}>Adicionar todo</button>
      </Fragment>
    )
  }
}
