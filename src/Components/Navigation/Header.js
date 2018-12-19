import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="nav">
                    <div className="logo-container">
                        <span class="fas fa-dragon"></span>
                        <p className="header-title">game<span>Played</span></p>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;