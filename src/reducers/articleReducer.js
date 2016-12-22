'use strict';
import * as types from '../constants/actionTypes';

export default function articleReducer(state = [], action){
  switch (action.type){
    case types.LOAD_ARTICLES_SUCESS:
      return action.articles;

      default:
        return state;
  }
}