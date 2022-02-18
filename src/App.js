import './App.scss';
import React, { useRef,useState,useEffect} from 'react';
import Navbar  from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import useLocoScroll from './components/hooks/useLocoScroll';
import Timeline from './components/Timeline';
import Blog from './components/Blog';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import CustomCursor from './CustomCursor';




function App() {
  const [preloader, setPreloader] = useState(true);
  
  const [timer,setTimer] = useState(3);

  const id = useRef(null);
  
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  }

  useLocoScroll(!preloader);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    },1000);
  }, [])

  useEffect(() => {
    if (timer===0){
      clear();
    }
  }, [timer])

  return (
    <Router>
      
      {/* <CustomCursor /> */}
      {preloader ? (<div className="loader-wrapper absolute">
        <h6> Joice V Joseph </h6>
      </div>) : (
      <div className="main-container" id="main-container"
      data-scroll-container
      >
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Timeline/>
      <Gallery/>
      <Blog/>
      <ContactMe/>
      {/* <Footer/> */}
      {/* <Routes>
        <Route exact path="/home" component={Header} />
        <Route exact path="/about" render={() =>
          <Fragment>
            <FirstChild />
            <SecondChild />
          </Fragment>
        } />
        <Route exact path="/projects" component={Gallery} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact-content" component={ContactMe} />

      </Routes> */}
        
      </div>
      )}
     
    </Router>
  );
}

export default App;
