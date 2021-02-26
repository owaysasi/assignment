import React from 'react';
import './Taskball.css';

function Taskball({ snoozed }){
    return(
        <div className="taskball-wrapper">
            <p className="taskball-title">NT</p>
            <div className={`taskball-status${snoozed ? " snoozed" : " active"}`}></div>
        </div> 
    );
}

export default Taskball;