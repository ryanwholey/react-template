import React from 'react';
import { render as Render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.jsx';
import store from './services/store.jsx';

Render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);