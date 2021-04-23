import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm border mb-4">
            <div className="container">
                <NavLink className="navbar-brand" to="/">News.kg</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/contacts">Contacts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;