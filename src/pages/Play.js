import React, { Component } from 'react';
import firebase from '../firebase.temp.json';
import Player from '../components/Play/Player';
import getNextPosition from '../services/get-next-position';
import './Play.scss';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            map: null,
            events: null,
            tiles: firebase.tiles,
            player: {
                image: null,
                facing: 0,
                position: {
                    x: null,
                    y: null
                },
                hearts: null,
                xp: null,
                attack: null,
                defense: null,
            }
        };
    }

    componentDidMount() {
        if (this.props.game) {
            const game = firebase.games[this.props.game];
            const { start } = game;
            const map = firebase.maps[start.map];
            const player = firebase.players[game.player];
            this.setState({
                ...this.state,
                title: game.title,
                map: map,
                player: {
                    image: player.image,
                    facing: 1,
                    position: {
                        x: start.x,
                        y: start.y
                    },
                    hearts: player.hearts,
                    xp: player.xp,
                    attack: player.attack,
                    defense: player.defense
                },
            })
        }
        document.onkeydown = event => {
            const { keyCode } = event;
            if (keyCode >= 37 && keyCode <= 40) {
                const direction = keyCode - 37;
                const nextPosition = getNextPosition(direction, { ...this.state.player.position });
                const nextTile = this.state.tiles[this.state.map.tiles[nextPosition.y][nextPosition.x].tile];
                let canMove = true;
                if (direction === 0 && !nextTile.walk[2]) canMove = false;
                if (direction === 1 && !nextTile.walk[3]) canMove = false;
                if (direction === 2 && !nextTile.walk[0]) canMove = false;
                if (direction === 3 && !nextTile.walk[1]) canMove = false;
                this.setState({
                    ...this.state,
                    player: {
                        ...this.state.player,
                        facing: direction,
                        position: {
                            ...(canMove) ? nextPosition : this.state.player.position
                        }
                    }
                });
            }
        }
    }

    render() {
        return (this.state.map) ? (
            <div className="Play">
                <h2>{this.state.title}</h2>
                <div id="game">
                    {
                        new Array(10).fill(null).map((column, y) => {
                            return new Array(10).fill(null).map((row, x) => {
                                const key = this.state.map.tiles[y][x].tile;
                                const image = firebase.tiles[key].image;
                                return (
                                    <div
                                        tile={key}
                                        key={`tile-${y}-${x}`}
                                        style={{
                                            backgroundImage: `url(/images/tiles/${image})`
                                        }}
                                    >
                                        {
                                            (
                                                this.state.player.position.x === x &&
                                                this.state.player.position.y === y
                                            ) ? (
                                                <Player 
                                                    facing={this.state.player.facing} 
                                                    image={this.state.player.image} 
                                                />
                                            ) : null
                                        }
                                    </div>
                                )
                            });
                        })
                    }
                </div>
            </div>
        ) : (
            <div className="Play">
                <h2>Loading game...</h2>
            </div>
        );
    }
}

export default Play;
