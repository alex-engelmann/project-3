import React from 'react';
import './index.css';
import spiral from "../../assets/TealBG1.jpg";
export default function Jumbotron() {
    return (
        <React.Fragment>
            <div className="jumbotron justify-content-center">
                <div className="container">
                    <h1 className="welcome">Welcome!</h1>
                    <img id="spiral" src={spiral} alt="spiral logo"></img>
                    <p className="lead">We hope you enjoy perusing our catalogue</p>
                </div>
            </div>
        </React.Fragment>
    )
}