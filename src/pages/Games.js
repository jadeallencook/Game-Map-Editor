import React, { Component } from 'react';
import './Games.scss';
import format from '../services/format-date';
import { Link } from 'react-router-dom';

class Games extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const { owner } = this.props.user.games;
        return (
            <div className="Games">
                <h2>Your Games</h2>
                <ul>
                    {
                        owner.map(uid => {
                            const game = this.props.games[uid];
                            return (
                                <Link to="/game" key={uid}>
                                    <li className="clickable" onClick={() => this.props.load(uid)}>
                                        <div></div>
                                        <p>{game.title}</p>
                                        <p>{format(game.created)}</p>
                                    </li>
                                </Link>
                            );
                        })
                    }
                </ul>
                <h2>Popular</h2>
                <ul>

                </ul>
            </div>
        );
    }
}

export default Games;
