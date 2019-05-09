import React, { Component } from 'react';
import firebase from '../firebase.temp.json';
import './Play.scss';

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            map: null,
            events: null,
            player: {
                image: null,
                facing: 'up',
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
            if (keyCode === 37) {
                // left
                this.setState({
                    ...this.state,
                    player: {
                        ...this.state.player,
                        facing: 3,
                        position: {
                            ...this.state.player.position,
                            x: this.state.player.position.x - 1
                        }
                    }
                });
            } else if (keyCode === 38) {
                // up
                this.setState({
                    ...this.state,
                    player: {
                        ...this.state.player,
                        facing: 0,
                        position: {
                            ...this.state.player.position,
                            y: this.state.player.position.y - 1
                        }
                    }
                });
            } else if (keyCode === 39) {
                // right
                this.setState({
                    ...this.state,
                    player: {
                        ...this.state.player,
                        facing: 1,
                        position: {
                            ...this.state.player.position,
                            x: this.state.player.position.x + 1
                        }
                    }
                });
            } else if (keyCode === 40) {
                // down
                this.setState({
                    ...this.state,
                    player: {
                        ...this.state.player,
                        facing: 2,
                        position: {
                            ...this.state.player.position,
                            y: this.state.player.position.y + 1
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
                                        data-x={x}
                                        data-y={y}
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
                                                <div 
                                                    id="player"
                                                    style={{
                                                        backgroundImage: `url(/images/players/${this.state.player.image})`,
                                                        transform: `rotate(${
                                                            (() => {
                                                                const { facing } = this.state.player;
                                                                return facing * 90;
                                                            })()
                                                        }deg)`
                                                    }}
                                                ></div>
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
