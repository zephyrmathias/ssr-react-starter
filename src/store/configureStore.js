import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = (initialState = {}) => {
  const middlewares = [thunk];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers').default; /* eslint-disable-line */
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};

export default configureStore;
