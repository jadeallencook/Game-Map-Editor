import React from 'react';
import './Sidebar.scss';
import Tiles from '../../components/Editor/Sidebar/Tiles';
import Events from '../../components/Editor/Sidebar/Events';
import Enemies from '../../components/Editor/Sidebar/Enemies';
import Items from '../../components/Editor/Sidebar/Items';

const Sidebar = props => (
    <div className="Sidebar">
        {
            (props.layer === 'ground') ? <Tiles
                tiles={props.tiles}
                setTile={props.setTile}
                tile={props.tile}
            /> : (
                <div>
                    <Events />
                    <Enemies />
                    <Items />
                </div>
            )
        }
        <h2>Tips</h2>
        <p>Use the +/- keys to zoom in and out.</p>
    </div>
)

export default Sidebar;