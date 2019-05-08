import React, { Component } from 'react';
import './Overview.scss';
import firebase from '../firebase.temp.json';

const Overview = props => {
    const { uid } = props;
    const game = firebase.games[uid];
    return (uid) ? (
        <div className="Overview">
            <h2>Overview</h2>
            <form>
                <input type="text" value={game.title} />
                <input type="submit" value="Save" />
            </form>
        </div>
    ) : null;
}

export default Overview;
