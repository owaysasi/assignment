import react from 'react';
import {useState, useEffect} from 'react';
import Classification from '../../Components/Classification/Classification';
import Conversation from '../../Components/Conversation/Conversation';
import './Ticketing.css';

function Ticketing() {

    return(
        <div className="ticketing-cont">
            <Conversation/>
        </div>
    );
}

export default Ticketing ;