'use strict';
export function createArticle(article) {
  return {type: 'CREATE_ARTICLE', article};
}