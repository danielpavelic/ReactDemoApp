'use strict';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './assets/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/less/bootstrap.less';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
