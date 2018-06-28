import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import configureStore from './store/configureStore';

const initialState = window.__PRELOADED_STATE__; /* eslint-disable-line no-underscore-dangle */

delete window.__PRELOADED_STATE__; /* eslint-disable-line no-underscore-dangle */

const store = configureStore(initialState);

const APPLICATION = (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </AppContainer>
);

const MOUNT_NODE = document.getElementById('app');

const renderApp = () => {
  ReactDOM.hydrate(
    APPLICATION,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./routes'], () => {
    renderApp();
  });
}

renderApp();
