import SagaTester from 'redux-saga-tester';
import rootSaga from '../index';

import {
  Types as TodosTypes,
  Creators as TodosActions
} from '../../ducks/todos';

describe('Todos Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    let originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    sagaTester = new SagaTester({});
    sagaTester.run(rootSaga);
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  });


  it('should be able to fetch todos from API', async () => {
    sagaTester.dispatch(TodosActions.getTodosRequest());

    await sagaTester.waitFor(TodosTypes.GET_SUCCESS);

    expect(sagaTester.getLatestCalledAction()).toEqual(TodosActions.getTodosSuccess([
      { id: 0, text: "Fazer café" },
      { id: 1, text: "Estudar React" },
      { id: 2, text: "Entrar na comunidade" }
    ]))
  })
});
