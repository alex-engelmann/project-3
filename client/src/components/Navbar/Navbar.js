import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../images/newlogo.png";
export default function Navbar() {
    return (
        <React.Fragment>
            <div className='logo-grid' >
                <img src={logo} className="logo" alt="logo" ></img>
            </div>

            <div className='navbtn-grid' >
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation" ><i className="fas fa-bars fa-2x nav-btn"></i></button>
            </div>

            <div className='nav-grid collapse' id='nav-content'>
                <div>
                    <div className="router-link">
                        <Link className="text-decor" to="/">home</Link>
                    </div>
                    <div className="router-link">
                        <Link className="text-decor" to="/artwork">artwork</Link>
                    </div>
                    <div className="router-link">
                        <Link className="text-decor" to="/artists">artists</Link>
                    </div>
                    <div className="router-link">
                        <Link className="text-decor" to="/shopcart">shopping cart</Link>
                    </div>
                    <div className="router-link">
                        <Link className="text-decor" to="/about">about</Link>
                    </div>
                    <div className="router-link">
                        <Link className="text-decor" to="/contact">contact</Link>
                    </div>
                    <div className="router-link">
                        <div id="gSignInWrapper">
                            <button type="button" id="signInBtn" class="customGPlusSignIn btn btn-primary">
                                <span class="icon"></span>
                                <span class="buttonText">Sign In</span>
                            </button>
                        </div>
                    </div>
                    <div className="router-link">
                    <button type="button" class="btn btn-primary"onclick="signOut();">Sign out</button>
                    </div>
                    <div className="router-link">
                    <button type="button" class="btn btn-primary"onclick="getUserInfo();">Get current user info</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


