'use strict';
export default function articleReducer(state = [], action){
  switch (action.type){
    case 'CREATE_ARTICLE':
      return [...state,
        Object.assign({}, action.article)
      ];

      default:
        return state;
  }
}