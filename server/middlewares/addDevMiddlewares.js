import webpack from 'webpack'; /* eslint-disable-line import/no-extraneous-dependencies */
import devMiddleware from 'webpack-dev-middleware'; /* eslint-disable-line import/no-extraneous-dependencies */
import hotMiddleware from 'webpack-hot-middleware'; /* eslint-disable-line import/no-extraneous-dependencies */
import webpackConfig from '../../tools/webpack/webpack.config.dev';

const addDevMiddlewares = (app) => {
  const compiler = webpack(webpackConfig);

  compiler.apply(new webpack.ProgressPlugin());

  app.use(devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: true,
    noInfo: true,
    stats: 'minimal',
    serverSideRender: true,
  }));

  app.use(hotMiddleware(compiler));
};

export default addDevMiddlewares;
