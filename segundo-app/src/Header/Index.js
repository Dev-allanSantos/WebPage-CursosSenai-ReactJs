import React from 'react';
import './style.css';
import logo from '../images/senai-logo.png'

function Header() {
    return (
        <header>
            <img id='logosenai' src= {logo} alt="logo do Senai" />

            <h1> Suiço-Brasileiro Paulo Ernesto Tolle </h1>
        </header>
    );
}

export default Header;