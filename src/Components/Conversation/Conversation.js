import react from 'react';
import {useState, useEffect} from 'react';
import './Conversation.css';

function Conversation() {

    const [ msg , setMsg ] = useState("");
    const [ chat , setChat ] = useState([]);
    const [ time , setTime ] = useState([]);

    // useEffect(() => {

    // });

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
            <div className="chat-history">
                {chat.map((val, index) => {
                    return (<div key={index} className="chatting-wrapper">
                                <p className="chatting">{val.msg}</p>
                                <p className="time">{val.ctime}</p>
                            </div>
                        );
                })}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
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