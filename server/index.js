require('@babel/register')({
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env'],
    ['@babel/preset-stage-0', { decoratorsLegacy: true }],
  ],
});
require('./server');
