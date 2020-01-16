import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from 'utils/history';

import store from './state/store';

import Layout from './layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </Provider>
    );
  }
}

export default App;
