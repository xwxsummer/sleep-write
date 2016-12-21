import React from 'react';
import { Router, Route, browserHistory,IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import New from './components/New';

const Routes = () => (
      <Router history={browserHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
          <Route path='/posts/:id' component={ Post } />
          <Route path='/new' component={ New } />
        </Route>
      </Router>
)

export default Routes;
