import React, { Component } from 'react';
import './Editor.scss';
import firebase from '../firebase.temp.json';

import Toolbar from '../components/Editor/Toolbar';
import Sidebar from '../components/Editor/Sidebar';
import Map from '../components/Editor/Map';
import Zoom from '../components/Editor/Zoom';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null,
            maps: null,
            game: null,
            tile: null,
            tiles: null,
            selected: [0, 0],
            layer: 'ground',
            size: 600
        };
    }

    componentDidMount() {
        let { game } = this.props;
        game = (game) ? firebase.games[game] : null;
        const uid = (game) ? game.maps[0] : null;
        const maps = (game) ? game.maps.map(key => {
            return {
                title: firebase.maps[key].title,
                uid: key
            }
        }) : null;
        const tiles = firebase.tiles;
        const tile = Object.keys(tiles)[0];
        let map = (game && uid) ? firebase.maps[uid] : null;
        if (map) {
            map.uid = uid;
        }
        this.setState({
            ...this.state,
            game: game,
            map: map,
            maps: maps,
            tiles: tiles,
            tile: tile
        });
        this.keys();
    }

    keys() {
        document.onkeydown = event => {
            const { key } = event;
            if (key === '-') {
                this.zoom(-25);
            } else if (key === '=') {
                this.zoom(25);
            }
        }
    }

    zoom(num) {
        num = this.state.size + num;
        this.setState({
            ...this.state,
            size: (num > 500) ? num : 500
        })
    }

    loadMap(event) {
        const { value } = event.target;
        this.setState({
            ...this.state,
            map: firebase.maps[value]
        });
    }

    deleteMap(event) {
        event.preventDefault();
    }

    createMap(event) {
        event.preventDefault();
        const form = event.target;
        const inputs = form.querySelectorAll('input');
        const title = inputs[0].value;
    }

    setTile(uid) {
        this.setState({
            ...this.state,
            tile: uid
        });
    }

    updateTile(x, y) {
        if (this.state.layer === 'ground') {
            let map = this.state.map;
            map.tiles[y][x].tile = this.state.tile;
            this.setState({
                ...this.state,
                map: map
            });
        }
    }

    toggleLayer(event) {
        this.setState({
            ...this.state,
            layer: event.target.value
        });
    }

    updateSelected(y, x) {
        this.setState({
            ...this.state,
            selected: [y, x]
        })
    }

    render() {
        return (this.state.game && this.state.map && this.state.maps && this.state.tiles) ? (
            <div className="Editor">
                <Toolbar
                    loadMap={this.loadMap.bind(this)}
                    deleteMap={this.deleteMap.bind(this)}
                    createMap={this.createMap.bind(this)}
                    toggleLayer={this.toggleLayer.bind(this)}
                    maps={this.state.maps}
                    selected={this.state.selected}
                />
                <div>
                    <Sidebar
                        setTile={this.setTile.bind(this)}
                        tiles={this.state.tiles}
                        tile={this.state.tile}
                        layer={this.state.layer}
                    />
                    <Map
                        size={this.state.size}
                        map={this.state.map}
                        tiles={this.state.tiles}
                        layer={this.state.layer}
                        updateTile={this.updateTile.bind(this)}
                        selected={this.state.selected}
                        updateSelected={this.updateSelected.bind(this)}
                    />
                    <Zoom
                        zoom={this.zoom.bind(this)}
                    />
                </div>
            </div>
        ) : (
                <div className="Editor">
                    <h2>Loading Editor...</h2>
                </div>
            )
    }
}

export default Editor;
