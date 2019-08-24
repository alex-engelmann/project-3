import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../images/newlogo.png";
import Login from "../Login"
import Logout from "../Logout"

export default class Navbar extends React.Component {

    render() {
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
                            <Login></Login>
                        </div>
                        <div className="router-link">
                            <Logout></Logout>
                        </div>
                        {/* <div className="router-link">
                            <button type="button" className="btn btn-primary" onClick="getUserInfo();">Get current user info</button>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
        )

    }

}


