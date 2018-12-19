import React, {Component} from 'react';
import './Navigation.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="logo-container">
                    <span class="fas fa-dragon"></span>
                    <p className="header-title">gamePlayed</p>
                </div>
            </header>
        );
    }
}

export default Header;