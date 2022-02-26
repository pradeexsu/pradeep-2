import React, { Component } from 'react';
import "./NavBar.css"

const NavBar = ({ isDarkMode, toggleMode }) => {
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"
    return (
        <div>
            <nav className={`navbar fixed-top  navbar-${background} pt-2 bg-${background}`}>
                <div className={`container-fluid text-${forground}`}>
                    <a className="navbar-brand cursive-font" href="#home">Pradeep</a>

                    <ul className="nav">
                        <li className="nav-item">
                            <a className={`nav-link text-${forground}`} href="#experence">Experence</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link text-${forground}`} href="#projects">Projects</a>
                        </li>

                        <li className="nav-item thumber-switch">
                            <span className="nav-link tumbler__wrapper" onClick={toggleMode}>
                                <span className={`tumbler ${isDarkMode ? "tumbler--night-mode" : ""}`}></span>
                                <img src="/sun.svg" id="Capa_1" />
                                <img src='/moon.svg' id="Capa_1" />
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


export default NavBar;