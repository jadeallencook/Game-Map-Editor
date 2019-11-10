import React from 'react';
import './Player.scss';

const Player = props => (
    <div
        className="Player"
        id="player"
        style={{
            backgroundImage: `url(https://jadeallencook.github.io/Game-Map-Editor/build/images/players/${props.image})`,
            transform: `rotate(${props.facing * 90}deg)`
        }}
    ></div>
);

export default Player;