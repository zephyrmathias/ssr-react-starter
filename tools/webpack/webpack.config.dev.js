const path = require('path');
const webpack = require('webpack');

const { HotModuleReplacementPlugin } = webpack;
const { DefinePlugin } = webpack;

const config = {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.jsx',
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   actions: path.join(process.cwd(), 'src/actions'),
    //   components: path.join(process.cwd(), 'src/components'),
    //   containers: path.join(process.cwd(), 'src/containers'),
    //   reducers: path.join(process.cwd(), 'src/reducers'),
    //   store: path.join(process.cwd(), 'src/store'),
    // },
  },
};

module.exports = config;
