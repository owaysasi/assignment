import React from 'react';
import Header from '../../Components/Header/Header';
import Phone from '../../Components/Phone/Phone';
import './PhoneP.css';

function PhoneP(){
    return(
        <div className="phonep-wrapper">
            <Header/>
            <Phone/>
        </div> 
    );
}

export default PhoneP;