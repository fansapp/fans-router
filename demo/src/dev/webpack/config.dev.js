require('dotenv').config({ silent: true });

const path = require('path');
const webpack = require('webpack');

const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 9000;
const HOT = process.env.HOT === 'true';

const { config, define } = require('./config.base');
const loaders = require('./loaders');

const plugins = config.plugins.concat([
  new webpack.DefinePlugin(Object.assign({}, define, {
    __HOT__: HOT,
  })),
]);

if (!HOT) {
  process.env.BABEL_ENV = 'production';
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

const devConfig = Object.assign({}, config, {
  devtool: 'source-map',
  plugins,
  module: {
    loaders: config.module.loaders.concat(loaders.css.dev),
  },
});

if (HOT) {
  devConfig.output = {
    path: path.join(__dirname, '../../../dist'),
    filename: 'js/[name].js',
    publicPath: `http://${SERVER_HOST}:${SERVER_PORT}/public/`,
  };

  devConfig.entry = config.entry.concat([
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://${SERVER_HOST}:${SERVER_PORT}/__webpack_hmr`,
    'webpack/hot/only-dev-server',
  ]);
}

module.exports = devConfig;
