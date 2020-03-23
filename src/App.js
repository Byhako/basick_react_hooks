import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';
import MovieDetail from './pages/MovieDetail';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/movie/:id" component={MovieDetail} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
