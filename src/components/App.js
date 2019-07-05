import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
        App
          {/* <Header />
          <Route path="/" exact component={Content} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Auth} /> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
