'use strict';
import * as types from '../constants/actionTypes';
import articleApi from '../api/mockArticleApi';

export function loadArticlesSuccess(articles) {
  return {type: types.LOAD_ARTICLES_SUCESS, articles};
}

export function loadArticles(){
  return function(dispatch){
    return articleApi.getAllArticles()
    .then(articles => {
      dispatch(loadArticlesSuccess(articles))
    }).catch(error => {
      throw(error);
    });
  };
}