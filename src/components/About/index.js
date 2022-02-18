import React, {useEffect, useRef, useState} from 'react';
import "./style.scss";
import gsap from 'gsap';
import SplitText from "../../utils/Split3.min";
import firstimg from   "../../images/Final Image 1.jpg";
import cn from 'classnames';
import useOnScreen from '../hooks/useOnScreen';



export default function About() {
    const ref = useRef();
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref)

    useEffect(()=> {
        if(onScreen) setReveal(onScreen);
    }, [onScreen]);


    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#about-info",{
                type: "lines",
                linesClass: "lineChildren",
            });
            
            gsap.to(split.lines, {
                duration: 1,
                y: -20,
                opacity: 1,
                stagger: 0.1,
                ease: "power4.out",
            });
       }
    },[reveal]);

    //for slide and close btn
    const content = document.getElementById("about-info");
    

    function slideOpen() {
        gsap.to(content,{xPercent:-65})
    }

    function slideClose() {
        gsap.to(content, {xPercent:0})
    }
    
   
    
    return (
        <section  className="about" data-scroll-section>
            <div className="about-content" id="about"> 
                <div id="about-visual">
                    <section className="about-heading">
                        A little bit about me
                    </section>
                    <section className="about-image">
                        <img src={firstimg} alt="image1" data-scroll/>
                        <h2 id="button1" onClick={slideOpen}> SLIDE  </h2>
                    </section> 
                </div>
            </div> 
            <div ref={ref} className={cn("about-info",{'is-reveal':reveal })} id="about-info">
                Hey! I am Joice. I'm a fourth year university student pursuing Computer Science, with 
                passion for Machine Learning, and Web Development. I aspire towards a career that will allow
                me to channel my creativity through crafting beautiful software and engaging experiences.
                    
                Always on the lookout for opportunites to learn, improve and  
                further build expertise in the field. 
                <h2 id="button2" onClick={slideClose} >
                    Close
                </h2>
            </div>    
        </section>
    )

    
}


