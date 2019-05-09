import React from 'react';
import './Overview.scss';
import firebase from '../firebase.temp.json';

const Overview = props => {
    const { uid } = props;
    const game = firebase.games[uid];
    return (uid && game) ? (
        <div className="Overview">
            <h2>Overview</h2>
            <form>
                <p>Basic information about your game.</p>
                <input type="text" className="bordered-input" defaultValue={game.title} />
                <p>Starting map/position when game loads.</p>
                <select defaultValue={game.start.map}>
                    {
                        game.maps.map(key => {
                            return (<option key={key} value={key}>{firebase.maps[key].title}</option>)
                        })
                    }
                </select>
                <br />
                <input type="number" className="bordered-input" defaultValue={game.start.x} />
                <input type="number" className="bordered-input" defaultValue={game.start.y} />
                <br />
                <input type="submit" className="btn" value="Save" />
            </form>
        </div>
    ) : null;
}

export default Overview;
