import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '../../src/routes';

const renderHtml = (req, store) => {
  const staticContext = {};
  const APPLICATION = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={staticContext}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(APPLICATION);
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script async src="/vendors.js"></script>
      <script async src="/main.js"></script>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\u003c')}
      </script>
    </body>
    </html>
  `;
};

export default renderHtml;
