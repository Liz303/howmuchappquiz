import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Main from './components/Main';
import Counter from './components/Counter';
import Type from './components/Type';
import NoMatch from './components/NoMatch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/type" component={Type}/>
    <Route path="/counter" component={Counter} />
    <Route path="/*" component={NoMatch} />
  </Route>
);
