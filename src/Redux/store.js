// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import profileReducer from './reducers'; 
const rootReducer = combineReducers({
  profile: profileReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
