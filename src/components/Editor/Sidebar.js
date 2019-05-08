import React from 'react';
import './Sidebar.scss';
import Tiles from '../../components/Editor/Sidebar/Tiles';

const Sidebar = props => (
    <div className="Sidebar">
        {
            (props.layer === 'ground') ? <Tiles
                tiles={props.tiles}
                setTile={props.setTile}
                tile={props.tile}
            /> : null
        }
        <h2>Tips</h2>
        <p>Use the +/- keys to zoom in and out.</p>
    </div>
)

export default Sidebar;