import React from 'react';
import './Toolbar.scss';

const Toolbar = props => (
    <div className="Toolbar">
        <button className="btn clickable">Play</button>
        <select className="dropdown" onChange={props.toggleLayer}>
            <option value="ground">Ground</option>
            <option value="player">Player</option>
        </select>
        <select className="dropdown" onChange={props.loadMap}>
            {
                props.maps.map(map => {
                    return (
                        <option
                            key={map.uid}
                            value={map.uid}
                        >{map.title}</option>
                    );
                })
            }
        </select>
        {
            (props.maps.length > 1) ? 
                <button className="btn danger clickable" onClick={props.deleteMap}>
                    Remove
                </button> 
            : null
        }
        <form onSubmit={props.createMap}>
            <input type="text" placeholder="Map Name" className="input" required />
            <input type="submit" value="Create Map" className="btn clickable" required />
        </form>
    </div>
);

export default Toolbar;