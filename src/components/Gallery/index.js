import React, {useState, useEffect, useRef} from 'react';
import "./style.scss";
import {gsap} from 'gsap';
import useOnScreen from "../hooks/useOnScreen"
import ScrollTrigger from 'gsap/ScrollTrigger';
import cn from 'classnames';
import {FaGithub} from 'react-icons/fa';

const projects = [
    {
        
        title: "Object Detection",
        description:"Attempt at the 'Global Wheat Detection' Kaggle competition to detect wheat heads from outdoor images of wheat plants including wheat datasets from around the globe. Made use of the YOLOv5 to carry out object detection.",
        category:"Object Detection, Yolov5, Image Analysis",
        link: ""
    },

    {
        
        title: "Image Classification",
        description:"Using transfer learning to fine tune a CNN-VGG16 for classification of Oxford's Flowers-17 dataset using ImageNet weights",
        category:"Classification, Transfer Learning",
        link: ""
    },
    {
        
        title: "Semantic Segmentation",
        description:"Attempt at 'iMaterialist(Fashion)' Kaggle competition to develop algorithm that will help with an important step towards automatic product detection – to accurately assign segmentations and attribute labels for fashion images. ",
        category:"Computer Vision, Semantic Segmentation, Instance Segmentation, Mask R-CNN",
        link: ""
    },
    {
        
        title: "Visualization",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry." ,
        category:"EDA, Visualization",
        link: ""
    },
];

function GalleryItem({category,description,title,link,updateActiveProject,index}){
    
    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if(onScreen) {
            updateActiveProject(index);
        }
    }, [onScreen, index, updateActiveProject]);
    return (
        <div className={cn("gallery-item-wrapper", {'is-reveal':onScreen})}
        ref={ref}
        >  
            <div className="gallery-item">
                <div className="gallery-item-info">
                    <h1 className="gallery-item-title">{title} </h1>
                    <h6 className="gallery-item-description">{description}</h6>
                    <p className="gallery-item-category">{category}<a href={link} target="_blank" rel="noopener noreferrer"><FaGithub id="git"/></a></p>
                </div> 
            </div>   
        </div>
    );
}

export default function Gallery({index, columnOffset}) {
    const [activeProject,setActiveProject] = useState(1);
    const ref = useRef(null);
    const handleUpdateActiveProject = (index) => {
        setActiveProject(index + 1);
    };
    
    useEffect(() => {
        setTimeout(()=> {
            console.log(ref.current.offsetWidth);
            console.log(ref.current.clientWidth);
            console.log({ current: ref.current });
            let sections = gsap.utils.toArray(".gallery-item-wrapper");
            
            gsap.to(sections, {
                xPercent: -100 * (sections.length-1),
                ease: 'none',
                scrollTrigger: {
                    start : 'top top',
                    trigger: ref.current,
                    scroller: '#main-container',
                    pin: true,
                    scrub: 0.5,
                    span: 1/(sections.length-1),
                    end: ()=> `+=${ref.current.offsetWidth}`,

                },
            });
            ScrollTrigger.refresh();
        });
    }, []);

    

    return(
        <section data-scroll-section className="section-wrapper gallery-wrap" >
             <div id= "projects" className="gallery-heading">
                    Projects I have worked on
            </div>
            
            <div className="gallery" ref= {ref}>
                <div className="gallery-counter">
                    <span>{activeProject}</span>
                    <span className="divider"/>
                    <span>{projects.length}</span>
                </div>
                {projects.map((project,index) => (
                    <GalleryItem
                        index={index}
                        {...project}
                        updateActiveProject = {handleUpdateActiveProject}
                    />
                ))}
            </div>
        </section>
    );
}