import React, { Component } from 'react';
import './Maps.scss';

class Maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: props.maps['map-abc123'],
            z: 'ground'
        };
    }

    create(event) {
        event.preventDefault();
    }

    load(event) {
        console.log(event)
    }

    remove() {

    }

    render() {
        return (
            <div className="Maps">
                <div>
                    <select value="none" className="dropdown">
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
                            <li>Grass</li>
                            <li>Gravel</li>
                            <li>Water</li>
                            <li>Other</li>
                        </ul>
                        <ul><li></li></ul>
                        <h2>Enemies</h2>
                        <h2>Items</h2>
                        <h2>Actions</h2>
                    </div>
                    <div>
                        <div>
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
                                                    className="clickable"
                                                ></div>
                                            )
                                        });
                                    });
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Maps;
