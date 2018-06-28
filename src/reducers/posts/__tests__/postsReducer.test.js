import postsReducer from '../postsReducer';
import { FETCH_POSTS } from '../../../actions/posts/actionTypes';

describe('Reducers: postsReducer', () => {
  test('should return initial state', () => {
    const action = {};
    const state = postsReducer(undefined, action);
    expect(state).toEqual({});
  });

  test('should set posts for FETCH_POSTS action', () => {
    const action = {
      type: FETCH_POSTS,
      payload: {
        posts: 'mock posts',
      },
    };
    const state = postsReducer(undefined, action);
    expect(state).toEqual(action.payload);
  });
});
