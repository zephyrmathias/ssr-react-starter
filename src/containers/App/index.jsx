import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Header from '../../components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    <div>
      App
    </div>
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shape({
    component: PropTypes.func.isRequired,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.func.isRequired,
        path: PropTypes.string,
        exact: PropTypes.bool,
      }),
    ).isRequired,
  }).isRequired,
};


export default hot(module)(App);
