import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = props => (
    <div className="Navbar">
        <Link className="clickable" to="/games">Games</Link>
        <Link className="clickable" to="/game">Overview</Link>
        <Link className="clickable" to="/maps">Maps</Link>
        <Link className="clickable" to="/settings">Settings</Link>
    </div>
);

export default Navbar;