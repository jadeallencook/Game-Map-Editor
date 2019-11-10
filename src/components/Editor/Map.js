import React from 'react';
import firebase from '../../firebase.temp.json';
import './Map.scss';

const Map = props => {

    function image(x, y) {
        const tile = props.tiles[props.map.tiles[y][x].tile];
        return `/images/tiles/${tile.image}`;
    }

    return (
        <div className="Map">
            <div style={{
                height: `${props.size}px`,
                width: `${props.size}px`
            }}>
                {
                    (() => {
                        const grid = new Array(10).fill(new Array(10).fill(null));
                        return grid.map((row, y) => {
                            return row.map((column, x) => {
                                const tile = props.map.tiles[y][x];
                                return (
                                    <div
                                        data-x={x}
                                        data-y={y}
                                        key={`tile-${x}-${y}`}
                                        style={{
                                            backgroundImage: `url(${image(x, y)})`,
                                            border: (props.layer === 'player') ? 'solid thin #FFF' : null,
                                            opacity: (
                                                props.selected[0] === y && 
                                                props.selected[1] === x &&
                                                props.layer === 'player'
                                            ) ? '0.5' : null
                                        }}
                                        className="clickable"
                                        onMouseEnter={event => (event.altKey) ? props.updateTile(x, y) : null}
                                        onClick={() => {
                                            if (props.layer === 'ground') {
                                                props.updateTile(x, y)
                                            } else if (props.layer === 'player') {
                                                props.updateSelected(y, x);
                                            }
                                        }}
                                    >
                                        {
                                            (tile.enemy && props.layer === 'player') ? (
                                                <div 
                                                    className="Enemy"
                                                    style={{
                                                        backgroundImage: `url(/images/enemies/${firebase.enemies[tile.enemy].image})`
                                                    }}
                                                ></div>
                                            ) : null
                                        }
                                    </div>
                                )
                            });
                        });
                    })()
                }
            </div>
        </div>
    )
}

export default Map;