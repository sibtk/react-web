import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container" id="home">
      <div className="about-section hero-card">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQESP_2Kuxk9xw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718280707566?e=1757548800&v=beta&t=NL7zh0b3-bO95XOdFLGijYH7sr8_ebaGev8Hb8fJXJc" alt="Sibtain Khan" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/sibtainkhan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Sibtain Khan</h1>
          <p>Product Intern - Internal Tools & Dashboards</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/sibtainkhan" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
      <div className="about-container" style={{marginTop: 8}}>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a product-focused operations intern with experience designing internal tools, automating workflows, and supporting strategy teams across engineering and business units. At Aquila Engineering and TechMecca, I’ve helped optimize upstream reporting, reduce manual effort, and increase visibility across multimillions of dollars in operational assets.
          </p>
          <p>
            My work lives at the intersection of product development, process improvement, and stakeholder alignment, and I’m passionate about building scalable solutions that drive clarity, efficiency, and impact.
          </p>
        </div>
        <div className="about-cta">
          <a href="/about" className="learn-more-btn">Learn more</a>
        </div>
      </div>
    </div>
  );
}

export default Main;