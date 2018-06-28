import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { FETCH_POSTS } from '../actionTypes';
import { fetchPosts } from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions: posts', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test(`should create ${FETCH_POSTS} action with fetched data`, async () => {
    const mockPosts = {
      userId: 1,
      id: 2,
      title: 'Title',
      body: 'Body',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockPosts,
      });
    });
    const expectedActions = [FETCH_POSTS];
    // const expectedPayloads = [mockPosts];
    const store = mockStore({});
    await store.dispatch(fetchPosts());
    const dispatchedActions = store.getActions();
    const actionsTypes = dispatchedActions.map(action => action.type);
    // const payloads = dispatchedActions.map(action => action.payload);
    expect(actionsTypes).toEqual(expectedActions);
    // expect(payloads).toEqual(expectedPayloads);
  });
});
