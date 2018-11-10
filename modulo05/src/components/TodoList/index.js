import React, { Fragment } from "react";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TodosActions } from '../../store/ducks/todos';

const TodoList = ({todos, addTodo, removeTodo}) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li onClick={() => removeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
    <button onClick={() => addTodo('Novo todo')}>Add new todo</button>
  </Fragment>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
