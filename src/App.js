import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Enemies from './pages/Enemies';
import Game from './pages/Game';
import Games from './pages/Games';
import Maps from './pages/Maps';
import Objects from './pages/Objects';
import Player from './pages/Player';
import Settings from './pages/Settings';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: true
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path='/' component={(this.state.auth) ? Games : Login} />
          <Route path='/enemies' component={Enemies} />
          <Route path='/game' component={Game} />
          <Route path='/games' component={Games} />
          <Route path='/map' component={Maps} />
          <Route path='/objects' component={Objects} />
          <Route path='/player' component={Player} />
          <Route path='/settings' component={Settings} />
        </Router>
      </div>
    );
  }
}

export default App;
