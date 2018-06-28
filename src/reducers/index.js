import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducer';

const reducers = combineReducers({
  posts: postsReducer,
});

export default reducers;
