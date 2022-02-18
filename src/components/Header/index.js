import React, {useEffect} from 'react';
// import gsap from 'gsap';
// import SplitText from "../../utils/Split3.min";
import "./style.scss";
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa';

export default function Header() {
    useEffect(() => {
        // const split = new SplitText("#static-text",{
        //     type: "lines",
        //     linesClass: "lineChildren",

        // });
        // gsap.to(split.lines, {
        //     duration: 1,
        //     y: 0,
        //     opacity: 1,
        //     stagger: 0.1,
        //     ease: "back",
        // });
    },[]);
    return (
        <section className="header-container" data-scroll-section>
            <div className="header-text" >
                <div className="static-text" id="static-text">
                        Hi.
                        <br/> 
                    <span >
                        I am Joice. 
                        <br/>
                    </span>
                </div>
                <div className="dynamic-text">
                    <span >
                        Programmer.
                    </span>
                </div>
                <div className="quote">
                    <FaQuoteLeft id="icons"/> Small steps in the right direction lead to better results. <FaQuoteRight  id="icons"/>
                    <br/>- Gradient Descent
                </div>
            </div>
        </section>
    );
};