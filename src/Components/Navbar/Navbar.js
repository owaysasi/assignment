import React from 'react';
import Taskball from '../Taskball/Taskball';
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar-wrapper">
            <div className="mini-navbar-wrapepr">
                <Taskball/>
            </div>
        </div>
    );
}

export default Navbar;