import { FETCH_POSTS } from '../../actions/posts/actionTypes';

const INITIAL_STATE = {};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default postsReducer;
