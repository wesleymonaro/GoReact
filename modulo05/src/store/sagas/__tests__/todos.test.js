import SagaTester from 'redux-saga-tester';
import rootSaga from '../index';
import api from '../../../services/api';
import MockAdapter from 'axios-mock-adapter';

import {
  Types as TodosTypes,
  Creators as TodosActions
} from '../../ducks/todos';

const apiMock = new MockAdapter(api);

describe('Todos Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    // let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  // afterEach(function() {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  // });


  it('should be able to fetch todos from API', async () => {

    const todosFixture = [
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar React" },
      { id: 2, text: "Entrar na comunidade" }
    ];

    apiMock.onGet('todos').reply(200, todosFixture);

    sagaTester.dispatch(TodosActions.getTodosRequest());

    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(TodosActions.getTodosSuccess(todosFixture))
  });

  it('should fail fi response is not ok', async () => {
    apiMock.onGet('todos').reply(400, {});

    sagaTester.dispatch(TodosActions.getTodosRequest());

    await sagaTester.waitFor(TodosTypes.GET_FAILURE);

    expect(sagaTester.getLatestCalledAction()).toEqual(TodosActions.getTodosFailure('Erro na requisição'))

  });
});
