import React from 'react';
import "./style.scss";
import "react-vertical-timeline-component/style.min.css"
import {FaSchool,FaUniversity,FaBriefcase} from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const timeline = [
    {   
        icon:<FaBriefcase/>,
        title: "Computer Vision Intern at BraynixAI",
        description:"Part of medical image analysis team.",
        description1:"-Reading, understanding and extracting insights from various AI research papers.",
        description2:"-Prototyping and experimenting with various ML and deep learning techniques for performance." ,
        description3:"-Leveraging open source code and libraries to experiment and build novel solutions for healthcare app.",
        date:"Sep 2021 - Present",
        location:"Remote"
    },

    {
        title: "Machine Learning Intern at The Sparks Foundation",
        icon:<FaBriefcase/>,
        description:"-Analyzed data from various internal and external sources.", 
        description1:"-Performed exploratory data analysis and built basic Machine Learning models",
        date:"Jul 2020 - Aug 2020",
        location:"Remote"
    },
    {
        title: "Northern India Engineering College, GGSIPU",
        icon:<FaUniversity/>,
        description:"College-Pursuing BTech in CSE",
        date:"2018-2022",
        location:"New Delhi"
    },
    {
        title: "St.Paul's School",
        icon:<FaSchool/>,
        description:"High School - X, XII" ,
        date:"2015, 2017",
        location:"New Delhi"
    },
];

export default function Timeline(){

    return (
        <section className="timeline" data-scroll-section>
            <h1>Timeline</h1>
            <VerticalTimeline lineColor={'black'} >
                {
                    timeline.map(element=>{
                        return(
                            <VerticalTimelineElement
                                date={element.date}
                                dateClassName="date"
                                contentArrowStyle={{ borderRight: '0.8vw solid  black' }}
                                contentStyle={{ background: 'white', color: 'black' }}
                                iconStyle={{ background: 'white', color: 'black'}}
                                icon ={element.icon}>
                                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                <p id="description">{element.description}<br/>{element.description1}<br/>{element.description2}<br/>{element.description3}</p>
                                </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>

        </section>

    );
}