import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header-container">
            <div className="mini-h-c">
                <ul className="header-navbar">
                    <Link className="navbar-item" activeClassName="is-active" to="/">
                    Home
                    </Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/ddpage">
                        Double select
                    </Link>
                    <Link className="navbar-item" activeClassName="is-active" to="/ticketing">
                        Ticketing
                    </Link>
                </ul> 
            </div>
        </div>
    );
}

export default Header;