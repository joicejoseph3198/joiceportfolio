import React from 'react';
import "./style.scss";
import gsap from 'gsap';

export default function ContactMe() {
    
    //for btns

    function slideOpen() {
       gsap.to(["#contact-content","#contact-form"],{xPercent:-73})
    }

    function slideClose() {
        gsap.to(["#contact-content","#contact-form"],{xPercent:0})
    }
    

    return (
    <div className="contact-page" data-scroll-section>
        <div id="contact-content">
            <div id="header">
                That's enough about me. Let's talk about you. 
            </div>
            <p>
                Do you have any suggestions or feedback for my website? Would you have any work to offer me? 
                Feel free to leave a message. <br/>I would love to hear from you.
            </p>
            <br/>
        </div>
        <div className="form" id="contact-form">
            <div id="form-content">
                <div id="close-btn" onClick={slideClose}>close</div>
                <form action="https://formspree.io/f/xknkvqqj" method="post">
                    <div className="form-group">
                        <label for="name"> Name </label>
                        <input type="text" id="name" name="Name"/>
                    </div>
                    <div className="form-group">
                        <label for="name"> Email </label>
                        <input type="text" id="email" name="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="name"> Message </label>
                        <textarea id="message" name="Message"></textarea>
                    </div>
                    <button type="submit">Submit</button>

                </form>
                <div id="slide-btn" onClick={slideOpen}>slide</div>
            </div>
        </div>
    </div>
    )
};