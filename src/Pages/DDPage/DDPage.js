import react from 'react';
import {useState, useEffect} from 'react';
import DropDown from '../../Components/DropDown/DropDown';
import Header from '../../Components/Header/Header';
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
        {
            id:4,
            value: 'Inception',
        },
        {
            id:5,
            value: 'Thor',
        },
        {
            id:6,
            value: 'Batman',
        },
    ];

    return(
        <div className="DDPage-cont">
            <Header/>
            <DropDown items={items} multiSelect/>
        </div>
    );
}

export default DDPage ;