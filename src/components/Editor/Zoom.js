import React from 'react';
import './Zoom.scss';

const Zoom = props => (
    <ul className="Zoom">
        <li className="clickable" onClick={() => props.zoom(25)}>+</li>
        <li className="clickable" onClick={() => props.zoom(-25)}>-</li>
    </ul>
);

export default Zoom;