import React, { Component } from 'react';
import './Items.scss';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            title: '',
            type: '',
            attack: 0,
            defense: 0,
            edit: false
        };
    }

    edit(selected, key) {
        const { uid, type, attack, defense } = selected;
        const item = this.props.items[type][uid];
        const { title, image } = item;
        this.setState({
            ...this.state,
            image: image,
            title: title,
            type: type,
            attack: (attack) ? attack : 0,
            defense: (defense) ? defense : 0
        })
    }

    remove(item, key) {
    }

    add() {

    }

    render() {
        const { items } = this.props.game;
        return (
            <div className="Items">
                <h2>Create</h2>
                <ul>
                    <li>
                        <div style={{
                            backgroundImage: `url(/images/${this.state.type}/${this.state.image})`
                        }}></div>
                        <form>
                            <input className="input" type="text" placeholder="Name" value={this.state.title} />
                            <select className="dropdown" value={this.state.type}>
                                <option>Weapon</option>
                                <option>Defense</option>
                                <option>Usable</option>
                            </select>
                            <input className="input" type="number" placeholder="Attack" value={this.state.attack} />
                            <input className="input" type="number" placeholder="Defense" value={this.state.defense} />
                            <input className="btn" type="submit" value="Add" onClick={() => this.add()}/>
                        </form>
                    </li>
                </ul>
                <h2>Currently Using</h2>
                <ul>
                    {
                        Object.keys(items).map((key, x) => {
                            const item = items[key];
                            const { attack, defense, type, uid } = item;
                            const { title, image } = this.props.items[type][uid];
                            return (
                                <li key={x}>
                                    <div style={{
                                        backgroundImage: `url(/images/${type}/${image})`
                                    }}></div>
                                    <ul>
                                        <li><h3>{title}</h3></li>
                                        <li><b>Type:</b> {type}</li>
                                        <li><b>Attack:</b> {(attack) ? attack : 0}</li>
                                        <li><b>Defense:</b> {(defense) ? defense : 0}</li>
                                        <li>
                                            <span className="primary-text clickable" onClick={() => this.edit(item, key)}>Edit</span>
                                            <span className="danger-text clickable" onClick={() => this.remove(item, key)}>Remove</span>
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Items;
