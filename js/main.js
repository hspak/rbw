import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import * as reducers from './reducers'
import {App, Home, About, ReduxDemo} from './components'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="redux" component={ReduxDemo} />
    </Route>
  </Router>
);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('mount')
);
