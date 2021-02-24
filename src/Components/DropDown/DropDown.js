import react from 'react';
import {useState, useEffect} from 'react';
import './DropDown.css';

function DropDown({ items =[], multiSelect = false }) {

    const [ open , setOpen ] = useState(false);
    const [ selection , setSelection ] = useState([]);
    const [ search , setSearch ] = useState();

    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)){
            if(!multiSelect){
                setSelection([item]);
            }else if(multiSelect){
                setSelection([...selection, item]);
            }
        }else{
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([... selectionAfterRemoval]);
        }
    }

    function isItemInSelection(item) {
        if(selection.find(current => current.id === item.id)){
            return true;
        }
        return false;
    }

    const toggle = () => setOpen(!open);

    return(
        <div className="DropDown-cont">
            <div
            tabIndex={0}
            className="dd-header"
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
            >
                <div className="dd-header-title">
                    <input 
                    className="dd-search" 
                    placeholder="Search for a movie"
                    onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className="dd-header-action">
                    <p>{open ? 'Close' : 'Open'}</p>
                </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {
                    items.map((item) => {
                        {if(item.value.includes(search)){
                            return(
                                <li className="dd-list-item" key={item.id}>
                                    <button type="button" onClick={() => handleOnClick(item)}>
                                        <span className="dd-select">{item.value}</span>
                                        <span className="dd-select-sign">{isItemInSelection(item)? '-' : '+'}</span>
                                    </button>
                                </li>
                            );
                            
                    }}}
                    )}
                </ul>
            )}
        </div>
    );
}

export default DropDown ;