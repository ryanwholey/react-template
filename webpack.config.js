var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/App.jsx'
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
