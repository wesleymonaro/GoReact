import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import TodoList from "../TodoList";

import createMockStore from 'redux-mock-store';
import { Creators as TodosActions } from '../../store/ducks/todos';

const INITIAL_STATE = {
  todos: [
    { id: 0, text: "Fazer café" },
    { id: 1, text: "Estudar React" },
    { id: 2, text: "Entrar na comunidade" }
  ]
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE)

describe("TodoList component", () => {
  it("should render todos", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    expect(wrapper.dive().find("li").length).toBe(3);
  });

  it("should be able to add new todo", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    wrapper.dive().find("button").simulate("click");

    expect(store.getActions()).toContainEqual(TodosActions.addTodo('Novo todo'));
  });

  it("should be able to remove todo", () => {
    const wrapper = shallow(<TodoList />, { context: { store } });

    wrapper
      .dive()
      .find("li")
      .first()
      .simulate("click");

    expect(store.getActions()).toContainEqual(TodosActions.removeTodo(INITIAL_STATE.todos[0].id));
  });


});
