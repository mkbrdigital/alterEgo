import React, {Component} from 'react';
import './Homepage.scss';
// import * as api from '../../api';
import XboxGamertag from './XboxGamertag';


class Homepage extends Component {
    state = {
        username: "",
        password: "",
        loggedIn: false
    };

    render() {
        return (
            <div className="homepage--container">
                <XboxGamertag username={this.state.username}/>
            </div>
        )
    }
}

export default Homepage;