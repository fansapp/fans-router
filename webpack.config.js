const path = require('path');


module.exports = {
  entry: [
    path.join(__dirname, './src'),
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
    filename: 'dist/index.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
