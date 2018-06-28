import addDevMiddlewares from './addDevMiddlewares';

const setupMiddlewares = (app) => {
  if (process.env.NODE_ENV === 'production') {
    //
  } else {
    addDevMiddlewares(app);
  }
};

export default setupMiddlewares;
