const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [['es2015', { modules: false }], 'stage-0'],
          plugins: ['lodash'],
        },
      },
    ],
  },
  css: {
    dev: {
      test: /\.(scss|css)$/,
      loaders: ['style-loader', 'css-loader?sourceMap&url=false', 'sass-loader?sourceMap'],
    },
    prod: {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            query: {
              minimize: true,
            },
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'sass-loader',
            query: {
              minimize: true,
            },
          },
        ],
      }),
    },
  },
};
