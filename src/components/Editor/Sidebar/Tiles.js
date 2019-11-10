import React from 'react';
import './Tiles.scss';

const Tiles = props => (
    <div className="Tiles">
        <h2>Tiles</h2>
        <p>Hold down alt/option to draw with tile.</p>
        <ul>
            {
                (props.tiles) ? Object.keys(props.tiles).map(uid => {
                    const { image, walk } = props.tiles[uid];
                    return (
                        <li
                            key={uid}
                            style={{
                                backgroundImage: `url(https://jadeallencook.github.io/Game-Map-Editor/build/images/tiles/${image})`,
                                borderTop: (props.tile === uid) ? `solid thin ${(!walk[0]) ? '#F00' : '#FFF'}` : null,
                                borderRight: (props.tile === uid) ? `solid thin ${(!walk[1]) ? '#F00' : '#FFF'}` : null,
                                borderBottom: (props.tile === uid) ? `solid thin ${(!walk[2]) ? '#F00' : '#FFF'}` : null,
                                borderLeft: (props.tile === uid) ? `solid thin ${(!walk[3]) ? '#F00' : '#FFF'}` : null
                            }}
                            className="clickable"
                            onClick={() => props.setTile(uid)}
                        ></li>
                    );
                }) : null
            }
        </ul>
    </div>
);

export default Tiles;