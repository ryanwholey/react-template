import {combineReducers} from 'redux';

const ui = (state = 'LIST', action) => {
  switch(action.type){
    case 'NAVIGATE_TO':
      return action.payload.page;
    default:
      return state;
  }
};

const movies = (state = {}, action) => {
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.payload
    case 'ERROR':
      return state;
    case 'FAVORITE':
     return Object.assign({}, state /* PUT SOMETHING HERE*/);
    default:
      return state;
  }
};

export default combineReducers({
  ui,
  movies,
});



