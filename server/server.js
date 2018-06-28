import 'babel-polyfill';
import express from 'express';
import configureStore from '../src/store/configureStore';
import routes from '../src/routes';
import renderHtml from './helpers/renderHtml';
import setupMiddlewares from './middlewares/setupMiddlewares';
import getMatchedComponents from './helpers/getMatchedComponents';
import fetchAllNeededDataForStore from './helpers/fetchAllNeededDataForStore';

const app = express();

setupMiddlewares(app);

app.get('*', async (req, res) => {
  const initialState = {};
  const store = configureStore(initialState);
  const allMatchedComponents = await getMatchedComponents(routes, req.path);
  await fetchAllNeededDataForStore(allMatchedComponents, store, req.path);
  const html = renderHtml(req, store);
  res.send(html);
});

app.listen(3000, () => {
  console.log('running on 3000');
});
