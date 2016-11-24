import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import Type from './components/Type';
import Pages from './components/Pages';
import Product from './components/Product';
import NoMatch from './components/NoMatch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/type" component={Type}/>
    <Route path="/pages" component={Pages} />
    <Route path="/products" component={Product} />
    <Route path="/*" component={NoMatch} />
  </Route>
);
