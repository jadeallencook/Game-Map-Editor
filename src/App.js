import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import users from './templates/users.json';
import games from './templates/games.json';
import maps from './templates/maps.json';
import items from './templates/items.json';
import tiles from './templates/tiles.json';

import Navbar from './components/Navbar';

import Login from './pages/Login';
import Enemies from './pages/Enemies';
import Game from './pages/Game';
import Games from './pages/Games';
import Maps from './pages/Maps';
import Objects from './pages/Objects';
import Players from './pages/Players';
import Settings from './pages/Settings';
import Items from './pages/Items';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: true,
      user: users['user-abc123'],
      game: games[users['user-abc123'].games.owner[0]]
    };
  }

  load(uid) {
    this.setState({
      ...this.state,
      game: games[uid]
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path='/' component={(this.state.auth) ? () => {
            return <Games user={this.state.user} games={games} load={this.load.bind(this)} />
          } : Login} />
          <Route path='/enemies' component={Enemies} />
          <Route path='/game' component={() => {
            return <Game game={this.state.game} />
          }} />
          <Route path='/games' component={() => {
            return <Games user={this.state.user} games={games} load={this.load.bind(this)} />
          }} />
          <Route path='/maps' component={() => {
            return <Maps allMaps={maps} userMaps={this.state.game.maps} tiles={tiles} />
          }} />
          <Route path='/items' component={() => {
            return <Items items={items} game={this.state.game} />
          }} />
          <Route path='/objects' component={Objects} />
          <Route path='/players' component={Players} />
          <Route path='/settings' component={Settings} />
        </Router>
      </div>
    );
  }
}

export default App;
