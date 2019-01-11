import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="nav">
                    <NavLink className="home-link" to="/">
                        <div className="logo-container">
                                <span className="fas fa-dragon"></span>
                                <p className="header-title">alter<span>Ego</span></p>
                        </div>
                    </NavLink>
                </div>
            </header>
        );
    }
}

export default Header;