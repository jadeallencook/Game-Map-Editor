import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import firebase from './firebase.temp.json';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Games from './pages/Games';
import Editor from './pages/Editor';
import Settings from './pages/Settings';
import Overview from './pages/Overview';

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
          <Navbar />
          <Route exact path='/' component={(this.state.auth) ? () => {
            return (
              <Games 
                user={this.state.user}
                games={
                  (this.state.user) ? this.state.user.games.map(uid => {
                    let game = firebase.games[uid];
                    game.uid = uid;
                    return game;
                  }) : null
                } 
                load={this.load.bind(this)} 
              />
            );
          } : Login} />
          <Route path='/overview' component={() => {
            return (
              <Overview 
                uid={this.state.game} 
              />
            );
          }} />
          <Route path='/editor' component={() => {
            return (
              <Editor 
                game={this.state.game}
              />
            );
          }} />
          <Route path='/settings' component={Settings} />
        </Router>
      </div>
    );
  }
}

export default App;
