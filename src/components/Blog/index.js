import React from 'react';
import "./style.scss";
import blogimg from "../../images/blog2.jpg";

export default function Blog(){
    return(
        <section className="blog-container" data-scroll-section>
            <h1 className="blog-title" id="blog" >sharing concepts, ideas, and code.</h1>
            
            <div className="blog-list">

                <div></div>
                <div className="blog-item">
                
                <div className='text-info'>
                <div className='title'>
                    <h1>Monitor Social Distancing using Python, YOLOv5, OpenCV.</h1>
                    <p>Since the Pandemic, there is an increased need for maintaining appropriate social distance in public spaces. Having some knowledge in computer vision and given the context, I thought it could be interesting to make a rather meaningful object detection project by creating a model that can monitor social distancing by analyzing surveillance footage.</p>
                </div>
                    <h5>Published on January 2, 2022</h5>
                    <h5>7 min read</h5>
                    <a href="https://medium.com/@joicejoseph" target="_blank" rel="noopener noreferrer" >Read More</a>
                </div>
                <div className="blog-img"  style={{ backgroundImage: `url(${blogimg})` }} ></div> 
                </div>
                
                <div></div>

                

                
            </div>
            
        

        </section>
    )
}