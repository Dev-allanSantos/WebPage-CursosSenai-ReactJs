import React from 'react';
import './style.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import {  faAt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUser} />
const element2 = <FontAwesomeIcon icon={faAt} />



export default function Footer(){
    return(
        <footer> 
            <p> 
                <div id='container1' margin='0px'>
                    <span > {element} </span>
                    Nome : Allan dos Santos Gama
                </div>
                
                <div id='container2' margin='0px'>
                    <span>{element2}</span>
                    Email : allan.gama720@gmail.com
                </div>
            </p> 
        </footer>
    );
}