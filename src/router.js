import React from 'react';
import { Router, Route } from 'dva/router';
import Login from './routes/Login';
import IndexPage from './routes/IndexPage'
import Products from './routes/Products';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/main" component={IndexPage} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
