import React from 'react';
import './Contact.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS

function ContactPage() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <div className="contact-icon">
          <a href="mailto:Bilalbaheer1@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://github.com/BilalBaheer" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/ahmadbilal17/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
