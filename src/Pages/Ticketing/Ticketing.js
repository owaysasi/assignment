import react from 'react';
import Classification from '../../Components/Classification/Classification';
import Conversation from '../../Components/Conversation/Conversation';
import Header from '../../Components/Header/Header';
import './Ticketing.css';
import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';

function Ticketing() {

    const [ taskName , setTaskName ] = useState("New Task");
    const [ enabled , setEnabled ] = useState(false);
    const [ snoozed , setSnoozed ] = useState(false);

    return(
        <div className="ticketing-cont">
            <Header/>
            <div className="mini-ticketing-cont">
                <Navbar snoozed={snoozed}/>
                <Classification setTaskName={setTaskName} setEnabled={setEnabled}/>
                <Conversation taskName={taskName} snoozed={snoozed} enabled={enabled} setSnoozed={setSnoozed}/>
            </div>
        </div>
    );
}

export default Ticketing ;