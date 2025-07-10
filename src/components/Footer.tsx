import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/sibtainkhan/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Made by Sibtain Khan &mdash; <a href="mailto:hello@sibtainkhan.com">hello@sibtainkhan.com</a></p>
    </footer>
  );
}

export default Footer;