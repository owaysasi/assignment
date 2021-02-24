import react from 'react';
import {useState, useEffect} from 'react';
import DropDown from '../../Components/DropDown/DropDown';
import './DDPage.css';

function DDPage() {

    const items=[
        {
            id:1,
            value: 'pulp fiction',
        },
        {
            id:2,
            value: 'the prestige',
        },
        {
            id:3,
            value: 'training day',
        },
    ];

    return(
        <div className="DDPage-cont">
            <DropDown items={items} multiSelect/>
        </div>
    );
}

export default DDPage ;