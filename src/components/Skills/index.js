import React from 'react'
import "./style.scss";
import gsap from 'gsap';
 

export default function Skills() {
    
    return (
        <section className="skill" data-scroll-section>
            
            <div id="heading"> Skills</div>             
            <div id="sections">
                <div id="prog">
                    Programming
                    <div id="list">
                        <li/>C/C++
                        <li/>Python
                        <li/>SQL

                    </div>
                </div>

                <div id="webd">
                    Web Development
                    <div id="list">
                        <li/>HTML
                        <li/>CSS
                        <li/>JavaScript
                        <li/>React
                    </div>
                </div>
                <div id="ml">
                    Machine Learning
                    <div id="list">
                        <li/>Data Mining
                        <li/>Data Analysis
                        <li/>Data Visualization
                        <li/>Data Modeling
                        <li/>Deep Learning
                        <li/>Computer Vision
                    </div>
                </div>
            </div>
        </section>
    )
} 
