import '../scss/base.scss';
import './style.scss';

import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Header from './Header';
import Content from './Content';
import Register from './Register';
import Auth from './Auth';


const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <div className="App__container">
          <Header />
          <Route path="/" exact component={Content} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Auth} />
        </div>
      </Router>
    </div>
  );
};

export default App;
