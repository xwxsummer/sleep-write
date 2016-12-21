import React from 'react';
import { Router, Route, browserHistory,IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';

const Routes = () => (
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
        </Route>
      </Router>
)

export default Routes;
