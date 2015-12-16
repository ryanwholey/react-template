var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.jsx'
  ],
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders:[{
      test: /\.jsx?$/,
      loaders: ['react-hot','babel'],
      exclude: [/node_modules/]
    }],
  }
};
