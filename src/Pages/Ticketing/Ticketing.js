import react from 'react';
import Classification from '../../Components/Classification/Classification';
import Conversation from '../../Components/Conversation/Conversation';
import './Ticketing.css';
import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar';

function Ticketing() {

    const [ taskName , setTaskName ] = useState("New Task");
    const [ enabled , setEnabled ] = useState(false);

    return(
        <div className="ticketing-cont">
            <Navbar/>
            <Classification setTaskName={setTaskName} setEnabled={setEnabled}/>
            <Conversation taskName={taskName} enabled={enabled}/>
        </div>
    );
}

export default Ticketing ;