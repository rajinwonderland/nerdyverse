import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import { Router, Route, IndexRoute, applyRouterMiddleware, browserHistory, routes, hashHistory } from 'react-router';
import useRelay from 'react-router-relay';
import config from './../config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App/App';
import Home from './components/Home/Home';
import GraphiQLModule from './components/GraphiQL/GraphiQL';
import { HomeQueries, prepareHomeParams } from './routes/HomeRoute';

var options = {};
if (localStorage.scapholdAuthToken) {
  options.headers = {
    Authorization: 'Bearer ' + localStorage.scapholdAuthToken
  }
}

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(config.scapholdUrl, options)
);

ReactDOM.render(
  <Router
    history={hashHistory}
    render={applyRouterMiddleware(useRelay)}
    routes={routes}
    environment={Relay.Store}
  >
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/graphiql" component={GraphiQLModule} />
  </Router>,
  document.getElementById('root')
);

/* Add queries={HomeQueries} prepareParams={prepareHomeParams} as attributes to the 'home' route to make queries defined in /routes/HomeRoute.js */
