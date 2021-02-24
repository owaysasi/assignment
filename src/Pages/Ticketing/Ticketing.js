import react from 'react';
import {useState, useEffect} from 'react';
import './Ticketing.css';

function Ticketing() {

    return(
        <div className="ticketing-cont">
            <DropDown items={items} multiSelect/>
        </div>
    );
}

export default Ticketing ;