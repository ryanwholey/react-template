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
      loader: 'babel',
      query: {
        presets: ['react','stage-0','es2015']
      },
      exclude: [/node_modules/]
    }],
  }
};
