import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="nav">
                <div className="logo-container">
                    <NavLink className="home-link" to="/">
                                <span className="fas fa-dragon"></span>
                                <p className="header-title">alter<span>Ego</span></p>
                    </NavLink>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;