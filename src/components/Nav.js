import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <li className="navbar-link-home">Home</li>
            </Link>
            <Link to="/about">
                <li className="navbar-link-about">About</li>
            </Link>
        </nav>
    )
}

export default Nav