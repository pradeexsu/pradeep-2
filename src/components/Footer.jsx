import React from 'react';
import logo from '../logo.svg';
import "./Footer.css"
const Footer = ({ isDarkMode }) => {
    const forground = isDarkMode ? "light" : "dark"
    const background = isDarkMode ? "dark" : "light"

    return (
        <div >
            <footer className={`py-3 my-4 sticky-bottom bg-${background}`}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            <img src={logo} className="App-logo icons" alt="logo" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://linkedin.com/in/pradeep-swe" target="_blank" className="nav-link px-2 text-muted">
                            <img src="/icons/linkedin.svg" alt="logo" className="icons" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            <img src="/icons/javascript.svg" alt="logo" className='icons' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/sutharp777" target="_blank" className="nav-link px-2 text-muted">
                            <img src="/icons/github.svg" alt="logo" className='icons' />
                        </a>
                    </li>
                </ul>
                <div className='c-author'>
                    <span className={` text-${forground}`}>Built with 💛&nbsp; by </span>
                    <a target="_blank"
                        className={`c-author__link c-author__link-${forground}`} href="https://github.com/sutharp777">Pradeep</a>
                </div>

            </footer>
        </div>
    );
}

export default Footer;