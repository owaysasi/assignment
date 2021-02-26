import React from 'react';
import Taskball from '../Taskball/Taskball';
import './Navbar.css';

function Navbar({ snoozed }){
    return(
        <div className="navbar-wrapper">
            <div className="mini-navbar-wrapepr">
                <Taskball snoozed={snoozed}/>
            </div>
        </div>
    );
}

export default Navbar;