import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Aggie Business & Technical Skills Club </h3>
        <p>Co-Founder/Vice President</p>
        <p>California, Davis</p>
        <p>Duration: January 2023 - Present</p>
          <li>Co-founded ABTS, a dynamic professional organization, and drove it's significant growth from 5 members to over 35+ within the first year. I Organized workshops, seminars, and networking events to create an environment suited to learning, collaboration, and networking, while leading impactful events. My leadership included the development and execution of comprehensive training programs, to ensure successful adoption and utilization of newly implemented technology, in particular Tableau. </li>
        
        <h3>The Common XR </h3>
        <p>Web Developer, Intern</p>
        <p>California, San Diego</p>
        <p>Duration: January 2022 - May 2022 </p>
          <li> Simplified user experience by creating a one-click executable for a Unity app using scripting. Thorough testing was done across different files to ensure that one-click executable is working without any errors. I also designed web pages in Adobe XD and brought them to life with JavaScript, HTML, CSS, and React. I improved various web pages to match business needs and enhance user satisfaction.</li>
          
        <h3>Norcon LLC </h3>
        <p>Co-Founder</p>
        <p>California, Los Angeles</p>
        <p>Duration: June 2021 – December 2021 </p>
        <li>Designed attractive ad banners and user interfaces using Adobe XD. I also created a website to increase our online presence and engage customers. I developed branded HTML email templates, social media content, and blogs to support our marketing efforts. By optimizing load times and implementing HTML App Caching, I improved the website's performance. Additionally, I utilized social media for targeted marketing campaigns to expand our reach and impact.</li>

      </div>
      {/* Add more experience items as needed */}
    </section>
  );
}

export default Experience;
