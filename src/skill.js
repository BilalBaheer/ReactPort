import React from 'react';
import './skill.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <ul>
            <h4>Programming Languages </h4>
            <li>C, C++, Python</li>
            <h4>Tools/Frameworks</h4>
            <li>HTML, CSS, JS</li>
            <li>React, Node.js</li>
            <li>SQL, Tableau</li>
            <h4>Languages </h4>
            <li> English, Farsi/Dari, 
            <br /> Pashto, Hindi, Urdu</li>
          </ul>
        </div>
        
        {/* Add more skill categories as needed */}
      </div>
    </section>
  );
}

export default Skills;
