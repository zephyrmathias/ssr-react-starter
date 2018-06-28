import React from 'react';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../index';

describe('containers: <App />', () => {
  test('should render <App /> with routes properly', () => {
    const fakeRoutes = {
      component: () => (
        <div>
          fake component
        </div>
      ),
      routes: [
        {
          path: '/',
          exact: true,
          component: () => (
            <div>
              fake component
            </div>
          ),
        },
      ],
    };

    const tree = TestRenderer
      .create(
        <MemoryRouter>
          <App route={fakeRoutes} />
        </MemoryRouter>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
