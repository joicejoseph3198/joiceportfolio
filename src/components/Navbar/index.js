import React from 'react'
import "./style.scss";

import {FaGithub} from 'react-icons/fa';
import {GrLinkedin,GrMail} from "react-icons/gr";




export default function Navbar() {


    
    return (
        <div id="home" className="navbar" data-scroll-section>
            <div>
                <ul className="item">
                    <div className="menu" id="menu" >
                     Work in Progress _ 
                    </div>
            
                </ul>
            </div>
            <div id="icons">
                <a href="https://github.com/joicejoseph3198" target="_blank" rel="noopener noreferrer"><FaGithub id="git"/></a>
                <a href="https://www.linkedin.com/in/joice-v-joseph-85311a1a1/" target="_blank" rel="noopener noreferrer"><GrLinkedin id="linkd"/></a>
                <a href="mailto:joice.joseph3198@gmail.com" target="_blank" rel="noopener noreferrer"><GrMail id="mail"/></a>
            </div>
        </div>
    )



    
} 
