require('dotenv').config({ silent: true });

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CreateFilePlugin = require('webpack-create-file-plugin');


// hash file for prod caching
const hash = Math.random().toString(36).substr(2, 20);

const { config, define } = require('./config.base');
const loaders = require('./loaders');

module.exports = Object.assign({}, config, {
  plugins: config.plugins.concat([
    new ExtractTextPlugin('dist/css/[name].css'),
    new webpack.DefinePlugin(Object.assign({}, define, {
      'process.env.NODE_ENV': JSON.stringify('production'),
      __HOT__: false,
    })),
    new CreateFilePlugin({
      files: [
        `dist/${hash}.hash`,
      ],
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]),
  module: {
    loaders: config.module.loaders.concat(loaders.css.prod),
  },
});
