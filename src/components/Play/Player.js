import React from 'react';
import './Player.scss';

const Player = props => (
    <div
        className="Player"
        id="player"
        style={{
            backgroundImage: `url(/images/players/${props.image})`,
            transform: `rotate(${props.facing * 90}deg)`
        }}
    ></div>
);

export default Player;