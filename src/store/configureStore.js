'use strict';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default configureStore(initialState) {
  return createStore (
    rootReducer,
    initialState,
    applyMiddleware(
        reduxImmutableStateInvariant()
    )
  );
}