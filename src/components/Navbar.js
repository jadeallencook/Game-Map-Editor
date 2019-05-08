import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';


const Navbar = props => (
    <div className="Navbar">
        <Link className="clickable" to="/">Games</Link>
        <Link className="clickable" to="/overview">Overview</Link>
        <Link className="clickable" to="/editor">Editor</Link>
        <Link className="clickable" to="/settings">Settings</Link>
    </div>
);

export default Navbar;