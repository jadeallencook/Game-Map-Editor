import React, { Component } from 'react';
import './Maps.scss';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMap: props.allMaps['map-abc123'],
            selectedMapKey: 'map-abc123',
            z: 'ground',
            size: 750,
            tile: Object.keys(props.tiles['ground'])[0]
        };
        this.keys();
    }

    keys() {
        document.onkeydown = event => {
            const { key } = event;
            if (key === '-') {
                this.zoomInOutMap(-25);
            } else if (key === '=') {
                this.zoomInOutMap(25);
            }
        }
    }

    createNewMap(event) {
        event.preventDefault();
        const form = event.target;
        const inputs = form.querySelectorAll('input');
        const title = inputs[0].value;
        const height = Number(inputs[1].value);
        const width = Number(inputs[2].value);
        console.log(title, height, width, this.props);
    }

    loadMap(event) {
        console.log(event)
    }

    remove() {

    }

    zoomInOutMap(num) {
        num = this.state.size + num;
        this.setState({
            ...this.state,
            size: (num > 500) ? num : 500
        })
    }

    getImageForTile(x, y) {
        const map = this.state.selectedMap[this.state.z];
        const tile = this.props.tiles[this.state.z][map[y][x]];
        return `/images/tiles/${this.state.z}/${tile.image}`;
    }

    updateTileInMap(x, y) {
        let map = this.state.selectedMap;
        map[this.state.z][y][x] = this.state.tile;
        this.setState({
            ...this.state,
            map: map
        });
    }

    render() {
        return (
            <div className="Maps">
                <div>
                    <select className="dropdown" value={this.state.selectedMapKey} onChange={this.loadMap.bind(this)}>
                        {
                            this.props.userMaps.map(key => {
                                return (
                                    <option 
                                        key={key}
                                        value={key}
                                    >{this.props.allMaps[key].title}</option>
                                );
                            })
                        }
                    </select>
                    <button className="btn danger clickable">Remove</button>
                    <form onSubmit={this.createNewMap.bind(this)}>
                        <input type="text" placeholder="Map Name" className="input" required />
                        <input type="number" placeholder="Height" className="input" required />
                        <input type="number" placeholder="Width" className="input" required />
                        <input type="submit" value="Create Map" className="btn clickable" required />
                    </form>
                </div>
                <div>
                    <div>
                        <h2>Editor</h2>
                        <p><b>Ground:</b> Map construction.</p>
                        <p><b>Player:</b> Events, objects, and enemies</p>
                        <p><b>Sky:</b> Events and walk unders.</p>
                        <br />
                        <select className="dropdown" onChange={event => this.setState({ ...this.state, z: event.target.value })}>
                            <option value="ground">Ground</option>
                            <option value="player">Player</option>
                            <option value="sky">Sky</option>
                        </select>
                        <input type="number" placeholder="Height" className="input" required />
                        <input type="number" placeholder="Width" className="input" required />
                        <h2>Tiles</h2>
                        <p>Hold down alt/option to draw with tile.</p>
                        <ul>
                            {
                                Object.keys(this.props.tiles[this.state.z]).map(key => {
                                    const { image } = this.props.tiles[this.state.z][key];
                                    return (
                                        <li
                                            key={key}
                                            style={{
                                                backgroundImage: `url(/images/tiles/${this.state.z}/${image})`,
                                                borderColor: (this.state.tile === key) ? '#FFF' : null
                                            }}
                                            className="clickable"
                                            onClick={() => this.setState({ ...this.state, tile: key })}
                                        ></li>
                                    );
                                })
                            }
                        </ul>
                        <h2>Tips</h2>
                        <p>Use the +/- keys to zoom in and out.</p>
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
                                                        backgroundImage: `url(${this.getImageForTile(x, y)})`
                                                    }}
                                                    className="clickable"
                                                    onMouseEnter={event => (event.altKey) ? this.updateTileInMap(x, y) : null}
                                                    onClick={() => this.updateTileInMap(x, y)}
                                                ></div>
                                            )
                                        });
                                    });
                                })()
                            }
                        </div>
                    </div>
                    <ul>
                        <li className="clickable" onClick={() => this.zoomInOutMap(25)}>+</li>
                        <li className="clickable" onClick={() => this.zoomInOutMap(-25)}>-</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Maps;
