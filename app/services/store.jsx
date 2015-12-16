import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../services/reducer.jsx';

const store = applyMiddleware(thunk)(createStore)(reducer);

store.subscribe(() => {
  console.log('current state:', store.getState());
});

export default store;