import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
const reduxAsyncConnect = require('redux-connect').reducer;

export default combineReducers({
  reduxAsyncConnect,
  routing,
});
