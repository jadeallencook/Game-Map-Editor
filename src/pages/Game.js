import React, { Component } from 'react';
import './Game.scss';
import Sidebar from '../components/Sidebar';

class Game extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
        <div className="Game">
            <Sidebar />
            Game works!
        </div>
        );
    }
}

export default Game;
