import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Symptom Survey Automation </h3>
        <h5>Description: Automated Covid symptom survey for UC Davis students using Chrome Driver and Selenium 
         to input survey data quickly.  I made it quick and easy to input survey data. I also used the Beautiful 
         Soup module to efficiently gather data from structured HTML files. To save time, I set up a system to 
         remember repeated responses in the surveys. This made the process even smoother and more efficient for students.</h5>
        <p>Technologies: Python, Selenium, Chrome driver, Adobe XD, and Shell/Bash</p>
        <a href="project-url-11" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      <div className="project-item">
        <h3>Weather Site </h3>
        <h5>Description: Created a website using HTML, CSS, and JavaScript that offers real-time weather updates for 
            cities worldwide. By combining Master Pages, CSS, Navigation controls, HTML, and Bootstrap, I achieved a 
            consistent and appealing design. I also optimized the website for mobile devices using Media Queries to 
            ensure smooth navigation and user-friendly experience.</h5>
        <p>Technologies: Html, CSS, Bootstrap, JavaScript, and Adobe XD</p>
        <a href="https://github.com/BilalBaheer/Weather-App" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
      {/* Add more project items as needed */}
    </section>
  );
}

export default Projects;




