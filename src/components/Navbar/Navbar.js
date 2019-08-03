import React from 'react';
import './Navbar.css';
import logo from "../images/TestLogo3.png";
export default function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#"><img id="navLogo" src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Browse
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Illustration</a>
                                <a className="dropdown-item" href="#">Graphic Design</a>
                                <a className="dropdown-item" href="#">Photography</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Discover</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                       
                    </ul>
                </div>
            </nav>
            </div>
    )
}


