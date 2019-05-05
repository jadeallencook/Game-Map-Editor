import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {};
    }

    handler(event) {
        event.preventDefault();
    }

    render() {
        return (
        <div className="Game">
            <h2>Game Overview</h2>
            <form onSubmit={this.handler.bind(this)}>
                <input type="text" value={this.props.game.title} />
                <input type="submit" value="Save" />
            </form>
        </div>
        );
    }
}

export default Game;
