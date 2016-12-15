'use strict';
import * as types from '../constants/actionTypes';

export default function articleReducer(state = [], action){
  switch (action.type){
    case types.CREATE_ARTICLE:
      return [...state,
        Object.assign({}, action.article)
      ];

      default:
        return state;
  }
}