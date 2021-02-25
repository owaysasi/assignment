import react from 'react';
import {useState, useEffect} from 'react';
import './Classification.css';

function Classification() {

    const [ taskName , setTaskName ] = useState("New Task");
    const [ goal, setGoal ] = useState();
    const [ remaining , setRemaining ] = useState(25)

    return(
        <div className="classification-cont">
            <h1 className="classify-title"><u>Classify</u></h1>
            <form>
                <label className="select-label">What's the user asking for</label>
                <select className="select-goal" name="goals" id="goals">
                    <option disabled selected value>select</option>
                    <option value="product">Buy a product</option>
                    <option value="cancel">Cancel an account</option>
                    <option value="gift">Buy and Recommend a gift</option>
                    <option value="ask">Ask for the business</option>
                </select>
                <br/>
                <label>Task name</label>
                <input 
                className="classify-task-name" 
                name="name" 
                placeholder="enter a name"
                onChange={(e) => {
                    setRemaining(25-e.target.value.length);
                }}/>
                <label className="remaining">characters left : {remaining}</label>
                <button className="btn-submit" type="submit">Procced</button>
            </form>
        </div>
    );
}

export default Classification ;