'use strict';
import * as types from '../constants/actionTypes';

export function createArticle(article) {
  return {type: types.createArticle, article};
}