import React, {useEffect, useState} from "react";
import "./navbar.style.css";
import Logo from "../../assets/images/logo.png";
import {Link, NavLink} from "react-router-dom";
import CustomButton from "../button/customButton";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <img className="navbar-brand" src={Logo} alt="diagnosify_logo"/>
            <span className="navbar-toggler" data-toggle="collapse" data-target="#menu">
                <span className="line line1"/>
                <span className="line" id="line-two"/>
                <span className="line" id="line-three"/>
            </span>
            <div id="menu" className="menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <span className="nav-link">
                        Home
                    </span>
                    </li>
                    <li className="dropdown nav-item">
                        <span className="drop-button nav-link">Services</span>
                        <div className="dropdown-content">
                            <a href="#">Scan image</a>
                            <a href="#">Get mobile app</a>
                        </div>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        About us
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className="nav-link">
                        <CustomButton text="Get Started"/>
                    </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
};


export default NavBar;
