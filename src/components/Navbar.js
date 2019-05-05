import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = props => (
    <div className="Navbar">
        <Link className="clickable" to="/games">Games</Link>
        <Link className="clickable" to="/game">Overview</Link>
        <Link className="clickable" to="/maps">Maps</Link>
        <Link className="clickable" to="/players">Players</Link>
        <Link className="clickable" to="/enemies">Enemies</Link>
        <Link className="clickable" to="/objects">Objects</Link>
        <Link className="clickable" to="/items">Items</Link>
        <Link className="clickable" to="/settings">Settings</Link>
    </div>
);

export default Navbar;