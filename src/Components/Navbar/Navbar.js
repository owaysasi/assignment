import React from 'react';
import Taskball from '../Taskball/Taskball';
import { useState } from 'react';
import './Navbar.css';

function Navbar({ snoozed }){

    const [ tickets , setTickets ] = useState([
        {
            _id: 123,
            Title: "New Task",
            Assignee: "Razan Khaled",
            Status: "New",
            Goal: "Buy a product",
        },
        {
            _id: 124,
            Title: "New Task",
            Assignee: "Oways Asi",
            Status: "New",
            Goal: "Ask for a business",
        },
        {
            _id: 125,
            Title: "New Task",
            Assignee: "Ali Mosa",
            Status: "New",
            Goal: "Buy a product",
        }
    ]);

    return(
        <div className="navbar-wrapper">
            <ul className="mini-navbar-wrapper">
                {tickets.map((ticket) => {
                    return(<Taskball key={ticket._id} snoozed={snoozed}/>);
                })}
            </ul>
        </div>
    );
}

export default Navbar;