'use strict';
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Page from './components/common/Page';
import Article from './components/article/ArticlePage';
import ManageArticlePage from './components/article/ManageArticlePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="single-page" component={Page} />
    <Route path="article-page" component={Article} />
    <Route path="article" component={ManageArticlePage} />
    <Route path="article/:id" component={ManageArticlePage} />
  </Route>
);