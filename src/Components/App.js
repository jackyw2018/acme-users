import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Narbar from './Navbar';
import Home from './Home';
import Users from './Users';

class App extends Component {
  styles = {
    h1: {
      textAlign: 'center',
      marginTop: '1rem',
    },
    Home: {
      marginTop: '1rem',
    },
  };
  render() {
    const { styles } = this;
    return (
      <Router>
        <h1 style={styles.h1}>Acme Users</h1>
        <Narbar />
        <hr />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/users/search/:searchTerm/:id" component={Users} />
          <Route path="/users/:id" component={Users} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    );
  }
}

export default App;
