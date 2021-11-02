import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar">
            <Link to="/" exact>
                <li className="nav-item">Home</li>
            </Link>
            <Link to="/about">
                <li className="nav-item">About</li>
            </Link>
        </nav>
    )
}

export default Nav