import React from 'react';
import "./style.scss";
import { HashLink as Link } from 'react-router-hash-link';


export default function Footer(){
    return (<nav className="nav-top" >
        
            <div className="nav-item">
            <Link smooth to="#home" className="nav-link"><span className="nav-label" id="nav-label">Home</span></Link>
            </div>

            <div className="nav-item">
            <Link smooth to="#about" className="nav-link"><span className="nav-label" id="nav-label">About</span></Link>
            </div>

            <div className="nav-item">
            <Link smooth to="#projects" className="nav-link"> <span className="nav-label" id="nav-label">Projects</span></Link>
            </div>

            <div className="nav-item">
            <Link smooth to="#blog" className="nav-link"> <span className="nav-label" id="nav-label">Blog</span></Link>
            </div>

            <div className="nav-item">
            <Link smooth to="#contact-content" className="nav-link"> <span className="nav-label" id="nav-label">Contact</span></Link>
            </div>

    </nav>);
};
