const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;


const config = {
  entry: [
    'babel-polyfill',
    'isomorphic-fetch',
    path.join(__dirname, '../../app'),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'dist/js/[name].js',
    publicPath: '/public',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      // Specify the common bundle's name.
      name: 'vendor',
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.includes('node_modules');
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
};

const define = {
  __DEBUG__: process.env.DEBUG || false,
  'process.env.SERVER_ENV': `"${process.env.SERVER_ENV}"`,
};

module.exports = {
  config,
  define,
};
