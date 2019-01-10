import React, {Component} from 'react';
import './Homepage.scss';
// import * as api from '../../api';
import XboxGamertag from './XboxGamertag';

class Homepage extends Component {
    state = {
    };

    render() {
        return (
            <div className="homepage--container">
                <XboxGamertag></XboxGamertag>
            </div>
        )
    }
}

export default Homepage;