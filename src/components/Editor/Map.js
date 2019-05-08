import React from 'react';
import './Map.scss';

const Map = props => {

    function image(x, y) {
        const map = props.map.tiles;
        const tile = props.tiles[map[y][x].tile];
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
                                return (
                                    <div
                                        data-x={x}
                                        data-y={y}
                                        key={`tile-${x}-${y}`}
                                        style={{
                                            backgroundImage: `url(${image(x, y)})`,
                                            border: (props.layer === 'player') ? 'solid thin #FFF' : null
                                        }}
                                        className="clickable"
                                        onMouseEnter={event => (event.altKey) ? props.updateTile(x, y) : null}
                                        onClick={() => props.updateTile(x, y)}
                                    ></div>
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