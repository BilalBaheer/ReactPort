import React from 'react';
import './AboutMe.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './skill';
import Projects from './Projects'; 
import ContactPage from './Contact';
import Footer from './Footerr'; 

function AboutMe() {
    return (
      <section className="about-me">
        <div className="about-me-content">
        <img src="./myPhoto.jpeg" alt="Profile" />
        <div className="about-me-intro">
            
            <h2>About Me</h2>
            <p>
              Hi there! I'm Bilal Baheer. I am a Senior at UC Davis pursuing a B.S in Computer Science.
              My academic journey has equipped me with a proficient skill set encompassing a range of 
              programming languages and cutting-edge technologies, including C, C++, Python, HTML, CSS,
              JavaScript, and React. I am a passionate web developer with a love for creating
              beautiful and functional websites. My journey began with learning HTML and
              CSS, and I've since dived into JavaScript and React to build interactive and
              responsive user interfaces.
            </p>
            <hr></hr>
            <br></br>
            <Experience />
            <hr></hr>
            <Projects />
            
            <Footer />
          </div>
          
        </div>
        <Education />
        <Skills />
        <ContactPage />
      </section>
      
    );
  }

export default AboutMe;
