import React from 'react';
import '../assets/styles/Contact.scss';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container contact-big contact-card">
        <div className="contact_wrapper">
          <div className="contact-icon-accent">
            <ContactMailIcon style={{ fontSize: 64 }} />
          </div>
          <h1>Contact Me</h1>
          <p className="contact-subtitle">Let's connect and build something great together.</p>
          <p style={{ fontSize: '1.3rem', margin: '24px 0', fontWeight: 500 }}>
            I'm always open to new opportunities and collaborations!
          </p>
          <p style={{ fontSize: '1.15rem', margin: '18px 0' }}>
            <a href="mailto:hello@sibtainkhan.com" className="email-link">hello@sibtainkhan.com</a>
          </p>
          <p style={{ fontSize: '1.15rem', margin: '18px 0' }}>
            <a href="https://www.linkedin.com/in/sibtainkhan/" className="linkedin-link" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;