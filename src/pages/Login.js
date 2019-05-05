import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {

    handler(event) {
        event.preventDefault();
        console.log(event.target);
    }

    render() {
        return (
        <div className="Login">
            <h1>RPG Maker Online</h1>
            <form onSubmit={this.handler.bind(this)}>
                <input type="text" />
                <input type="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
        );
    }
}

export default Login;
