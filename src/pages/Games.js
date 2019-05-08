import React from 'react';
import './Games.scss';
import format from '../services/format-date';
import { Link } from 'react-router-dom';

const Games = props => {
    return (
        <div className="Games">
            <h2>Your Games</h2>
            <ul>
                {
                    (props.games) ? props.games.map(game => {
                        const { uid } = game;
                        return (
                            <Link to="/overview" key={uid} onClick={() => props.load(uid)}>
                                <li className="clickable">
                                    <div></div>
                                    <p>{game.title}</p>
                                    <p>{format(game.created)}</p>
                                </li>
                            </Link>
                        );
                    }) : null
                }
            </ul>
        </div>
    );
}

export default Games;
