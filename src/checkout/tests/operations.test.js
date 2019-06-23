import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as operations from '../operations';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from '../types';

const apiBase = process.env.REACT_APP_API_BASE;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('checkout operations', () => {
  
  afterEach(() => {
    axiosMock.reset();
  });
  
  afterAll(() => {
    axiosMock.restore();
  });
  
  describe('submitOrder', () => {
    it('creates SUBMIT_ORDER_SUCCESS when submitting checkout has succeeded', () => {
      axiosMock
        .onPost(`${apiBase}/order`)
        .reply(200, {confirmationId: 'ABC123'});
  
      const expectedActions = [
        { type: types.SUBMIT_ORDER_REQUEST, payload: {} },
        { type: types.SUBMIT_ORDER_SUCCESS, payload: { data: { confirmationId: 'ABC123' } } }
      ];
  
      const store = mockStore({});
      const submitOrderForm = {
        addressId: 1,
        subscription: 'year'
      };
  
      return store
        .dispatch(operations.submitOrder(submitOrderForm))
        .then(() => {
          const actualActions = store.getActions();
          expect(actualActions[0]).toEqual(expectedActions[0]);
          expect(actualActions[1]).toMatchObject(expectedActions[1]);
        });
    });
  })
});