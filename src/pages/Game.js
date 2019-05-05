import React, { Component } from 'react';
import './Game.scss';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    save(event) {
        event.preventDefault();
    }

    handler(event) {

    }

    render() {
        return (
        <div className="Game">
            <h2>Game Overview</h2>
            <form onSubmit={this.save.bind(this)}>
                <input type="text" value={this.props.game.title} onChange={this.handler.bind(this)} />
                <input type="submit" value="Save" />
            </form>
        </div>
        );
    }
}

export default Game;
