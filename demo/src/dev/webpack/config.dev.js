require('dotenv').config({ silent: true });
const webpack = require('webpack');

const { config, define } = require('./config.base');
const loaders = require('./loaders');

const plugins = config.plugins.concat([
  new webpack.DefinePlugin(Object.assign({}, define)),
]);

process.env.BABEL_ENV = 'production';

const devConfig = Object.assign({}, config, {
  devtool: 'source-map',
  plugins,
  module: {
    loaders: config.module.loaders.concat(loaders.css.dev),
  },
});

module.exports = devConfig;
