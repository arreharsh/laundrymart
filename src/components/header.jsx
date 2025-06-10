import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <NavLink to="/" className="logo">
                        <img src="/Assets/IMG_logo.png" alt="Laundry Mart" />
                    </NavLink>

                    <nav className="nav">
                        <ul className="nav-list">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="has-dropdown">
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Services
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/services?section=laundry">Laundry Services</NavLink></li>
                                    <li><NavLink to="/services?section=drycleaning">Dry Cleaning</NavLink></li>
                                    <li><NavLink to="/services?section=ironing">Ironing</NavLink></li>
                                    <li><NavLink to="/services?section=rafu">Rafu (Darning)</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu />
                </div>
            </div>

            <div className="mobile-nav">
                <div className="mobile-nav-inner">
                    <ul className="mobile-nav-list">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
