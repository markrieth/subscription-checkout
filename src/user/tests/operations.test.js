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

describe('user operations', () => {
  
  afterEach(() => {
    axiosMock.reset();
  });
  
  afterAll(() => {
    axiosMock.restore();
  });
  
  describe('login', () => {
    it('creates LOGIN_SUCCESS when login has succeeded', () => {
      axiosMock
        .onPost(`${apiBase}/login`)
        .reply(200, {token: 'a_token'});

      const expectedActions = [
        { type: types.LOGIN_REQUEST, payload: {} },
        { type: types.LOGIN_SUCCESS, payload: { token: 'a_token' } }
      ];

      const store = mockStore({});
      const loginForm = {
        username: 'test',
        password: 'test'
      };

      return store
        .dispatch(operations.login(loginForm))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  
    it('creates LOGIN_FAILURE when login fails', () => {
      axiosMock
        .onPost(`${apiBase}/login`)
        .reply(500, {message: 'Oops'});
    
      const expectedActions = [
        { type: types.LOGIN_REQUEST, payload: {} },
        { type: types.LOGIN_FAILURE, payload: { data: { message: 'Oops'} } }
      ];
    
      const store = mockStore({});
      const loginForm = {
        username: 'test',
        password: 'test'
      };
    
      return store
        .dispatch(operations.login(loginForm))
        .then(() => {
          expect(store.getActions()[0]).toEqual(expectedActions[0]);
          expect(store.getActions()[1]).toMatchObject(expectedActions[1]);
        });
    });
    
    it('returns null and does not dispatch actions when invalid login form', () => {
      const loginForm = {}; // invalid login form
    
      const store = mockStore({});
      const actual = store.dispatch(operations.login(loginForm));
    
      expect(actual).toEqual(null);
      expect(store.getActions()).toEqual([]);
    
    });
  });
  
  describe('register', () => {
    it('creates REGISTER_SUCCESS when registering succeeds', () => {
      axiosMock
        .onPost(`${apiBase}/register`)
        .reply(200, {token: 'a_token'});
  
      const form = {
        username: 'test',
        password: 'test',
        phone: '5555555555'
      };
      const expectedActions = [
        { type: types.REGISTER_REQUEST, payload: {} },
        { type: types.REGISTER_SUCCESS, payload: { token: 'a_token' } }
      ];
      const store = mockStore({});
      store
        .dispatch(operations.register(form))
        .then(() => expect(store.getActions()).toEqual(expectedActions));
      
    })
  })
  
  it('creates REGISTER_FAILURE when registering fails', () => {
    axiosMock
      .onPost(`${apiBase}/register`)
      .reply(500, {message: 'failed'});
    
    const form = {
      username: 'test',
      password: 'test',
      phone: '5555555555'
    };
    const expectedActions = [
      { type: types.REGISTER_REQUEST, payload: {} },
      { type: types.REGISTER_SUCCESS, payload: { data: { message: 'failed' } } }
    ];
    const store = mockStore({});
    store
      .dispatch(operations.register(form))
      .then(() => {
        expect(store.getActions()[0]).toEqual(expectedActions[0]);
        expect(store.getActions()[1]).toMatchObject(expectedActions[1])
      });
    
  })
});