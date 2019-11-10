import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.scss';

const Toolbar = props => (
    <div className="Toolbar">
        <Link to="/play" className="btn clickable">Play</Link>
    </div>
);

export default Toolbar;