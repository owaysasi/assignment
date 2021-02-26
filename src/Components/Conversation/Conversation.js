import react from 'react';
import interval from '../../pics/time.png';
import archive from '../../pics/archive.png';
import {useState, useEffect} from 'react';
import './Conversation.css';

function Conversation({ taskName, enabled }) {

    const [ msg , setMsg ] = useState("");
    const [ chat , setChat ] = useState([]);
    const [ time , setTime ] = useState([]);
    const [ seconds , setSeconds ] = useState(0);
    const [ minutes , setMinutes ] = useState(1);

    useEffect(()=>{
        let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
    });

    const handleSubmit = (e) => {
        let today = new Date();
        let currenttime = today.getHours()+":"+today.getMinutes();
        e.preventDefault();
        let convo = chat ;
        convo.push({
            msg:msg,
            ctime:currenttime,
        });
        setChat(convo);
        setMsg("");
        setTime(currenttime);
    }

    return(
        <div className="conversation-cont">
            <div className="chat-header">
                <h1 className="chat-header-title">{taskName}</h1>
                <div className="chat-header-icons">
                    <p className="chat-header-timer">{minutes}:{seconds}</p>
                    <img className="chat-header-snooze" src={interval}/>
                    <img className="chat-header-archive" src={archive}/>
                </div>
            </div>
            <div className="chat-history">
                {chat.map((val, index) => {
                    return (<div key={index} className="chatting-wrapper">
                                <p className="chatting">{val.msg}</p>
                                <p className="time">{val.ctime}</p>
                            </div>
                        );
                })}
            </div>
            <form className={`${enabled ? "chat-form" : "chat-form disabled"}`}  onSubmit={handleSubmit}>
                <input 
                    className="chat-sbmt-field" 
                    placeholder="say something ..."
                    value={msg}
                    onChange={(e) => {
                        e.preventDefault();
                        setMsg(e.target.value);
                }}/>
                <button className="chat-sbmt-btn" type="submit">send</button>
            </form>
        </div>
    );
}

export default Conversation ;