import React, { Component } from 'react';
import './Maps.scss';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: props.maps['map-abc123'],
            z: 'ground',
            size: 750
        };
        this.keys();
    }

    keys() {
        document.onkeydown = event => {
            const { key } = event;
            if (key === '-') {
                this.zoom(-25);
            } else if (key === '=') {
                this.zoom(25);
            }
        }
    }

    create(event) {
        event.preventDefault();
    }

    load(event) {
        console.log(event)
    }

    remove() {

    }

    zoom(num) {
        num = this.state.size + num;
        this.setState({
            ...this.state,
            size: (num > 500) ? num : 500
        })
    }

    image(x, y) {
        const map = this.state.map[this.state.z];
        const tile = this.props.tiles[this.state.z][map[y][x]];
        return `/images/tiles/${this.state.z}/${tile.image}`;
    }

    render() {
        return (
            <div className="Maps">
                <div>
                    <select value="none" className="dropdown" onChange={this.load.bind(this)}>
                        <option value="none" disabled>No Maps (Create A New One)</option>
                    </select>
                    <button className="btn danger clickable">Remove</button>
                    <form onSubmit={this.create.bind(this)}>
                        <input type="text" placeholder="Map Name" className="input" required />
                        <input type="number" placeholder="Height" className="input" required />
                        <input type="number" placeholder="Width" className="input" required />
                        <input type="submit" value="Create Map" className="btn clickable" required />
                    </form>
                </div>
                <div>
                    <div>
                        <h2>Editor</h2>
                        <select className="dropdown" onChange={event => this.setState({ ...this.state, z: event.target.value})}>
                            <option value="ground">Ground</option>
                            <option value="player">Player</option>
                            <option value="sky">Sky</option>
                        </select>
                        <input type="number" placeholder="Height" className="input" required />
                        <input type="number" placeholder="Width" className="input" required />
                        <h2>Tiles</h2>
                        <ul>
                            {
                                Object.keys(this.props.tiles[this.state.z]).map(key => {
                                    const { image } = this.props.tiles[this.state.z][key];
                                    return (
                                        <li 
                                            key={key}
                                            style={{
                                                backgroundImage: `url(/images/tiles/${this.state.z}/${image})`
                                            }}
                                            className="clickable"
                                        ></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <div style={{
                            height: `${this.state.size}px`,
                            width: `${this.state.size}px`
                        }}>
                            {
                                (() => {
                                    const grid = new Array(10).fill(new Array(10).fill(null));
                                    return grid.map((row, y) => {
                                        return row.map((column, x) => {
                                            return (
                                                <div 
                                                    data-x={x} 
                                                    data-y={y}
                                                    key={`tile-${x}-${y}`}
                                                    style={{
                                                        backgroundImage: `url(${this.image(x, y)})`
                                                    }}
                                                    className="clickable"
                                                ></div>
                                            )
                                        });
                                    });
                                })()
                            }
                        </div>
                    </div>
                    <ul>
                        <li className="clickable" onClick={() => this.zoom(25)}>+</li>
                        <li className="clickable" onClick={() => this.zoom(-25)}>-</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Maps;
