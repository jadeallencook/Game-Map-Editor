import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import firebase from './firebase.temp.json';

import Editor from './pages/Editor';
import Play from './pages/Play';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: true,
      user: null,
      game: null
    };
  }

  componentDidMount() {
    this.login();
  }

  login() {
    const uid = 'e72e6e98404f5132e';
    const user = firebase.users[uid];
    this.setState({
      ...this.state,
      user: user,
      game: user.games[0]
    });
  }

  load(uid) {
    this.setState({
      ...this.state,
      game: uid
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={() => {
            return (
              <Editor 
                game={this.state.game}
              />
            );
          }} />
          <Route path='/play' component={() => {
            return (
              <Play 
                game={this.state.game}
              />
            );
          }} />
        </Router>
      </div>
    );
  }
}

export default App;
