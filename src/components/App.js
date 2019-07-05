import './style.scss';

import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Header from './Header';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          {/* <Route path="/" exact component={Content} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Auth} /> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
