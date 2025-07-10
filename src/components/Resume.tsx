import React, { useEffect } from 'react';
import '../assets/styles/Resume.scss';
import FadeIn from './FadeIn';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  const handleBackHome = () => {
    navigate('/', { replace: false });
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
  };
  return (
    <FadeIn transitionDuration={900}>
      <div className="resume-container">
        <div className="resume-header">
          <h1>Sibtain Khan</h1>
          <div className="resume-contact">
            <span>(346) 461-8852</span> | <span>Katy, TX 77449</span> | <a href="mailto:hello@sibtainkhan.com">hello@sibtainkhan.com</a><br />
            <a href="https://www.linkedin.com/in/sibtainkhan" target="_blank" rel="noopener noreferrer">linkedin.com/in/sibtainkhan</a> | <a href="https://sibtainkhan.com" target="_blank" rel="noopener noreferrer">sibtainkhan.com</a>
          </div>
          <a href="/Sibtain_Khan_Resume.pdf" className="download-btn" download>
            Download PDF
          </a>
        </div>
        <div className="resume-section">
          <h2>EDUCATION</h2>
          <p><strong>C. T. Bauer College of Business, University of Houston, Houston, TX</strong><br />
          Bachelor of Business Administration in Management Information Systems<br />
          Minor in Entrepreneurship · GPA: 4.0 <span className="resume-date">Expected May 2026</span></p>
        </div>
        <div className="resume-section">
          <h2>EXPERIENCE</h2>
          <div className="resume-job">
            <strong>Aquila Engineering, Houston, Texas</strong><br />
            Product Intern – Internal Tools | June 2025 - Present
            <ul>
              <li>Automated upstream reporting in Power BI, cutting prep time by 80% and reducing manual errors by 90%</li>
              <li>Built a BOP dashboard that improved visibility and cut issue response time by 30% across 3 departments</li>
              <li>Designed Monday.com intake workflows integrated with SharePoint to streamline field ops + IT requests</li>
              <li>Authored SOPs used by IT and cybersecurity, improving SLA compliance by 22% and onboarding efficiency</li>
              <li>Participated in sprint planning and backlog grooming; prioritized internal tooling requests across RTOC, product, and engineering leads</li>
            </ul>
          </div>
          <div className="resume-job">
            <strong>TechMecca LLC (Lumeria), Richmond, Texas</strong><br />
            Product Strategy Intern | January 2025 – June 2025
            <ul>
              <li>Designed Power BI and Excel dashboards to track SKU margins, velocity, and retention across 1,200+ products</li>
              <li>Ran SQL-driven pricing and churn analysis that supported a 12% QoQ margin improvement</li>
              <li>Created Figma wireframes to redesign internal ops tools, improving clarity and team adoption</li>
              <li>Standardized documentation using Notion and Lucidchart to support scale and process visibility</li>
              <li>Modeled vendor consolidation strategies, uncovering 8% cost savings and presenting findings to stakeholders</li>
              <li>Worked with ops, marketing, and purchasing teams to align pricing rollout with business priorities</li>
            </ul>
          </div>
          <div className="resume-job">
            <strong>Texas Real Estate Commission, Houston, Texas</strong><br />
            Real Estate Agent/Real Estate Strategy Consultant | March 2024 – Present
            <ul>
              <li>Closed $1.89M in residential sales across 2 deals, supporting both listing and buyer-side clients</li>
              <li>Advised 10+ agents and investors managing a combined $6.5M+ in active inventory</li>
              <li>Built custom ROI dashboards and comp scoring tools to track $10.2K+/mo in landlord income</li>
              <li>Automated lead tracking and CMA workflows using MLS integrations, cutting agent response time by 60%</li>
              <li>Supported investor clients with pricing, negotiation, transaction prep, and marketing strategy across 10+ properties</li>
            </ul>
          </div>
        </div>
        <div className="resume-section">
          <h2>PROJECTS</h2>
          <div className="resume-project">
            <strong>Weekly RTOC Reporting Automation – Aquila Engineering</strong><br />
            <em>Tools: Power BI, Excel, SharePoint, Internal APIs</em>
            <ul>
              <li>Automated upstream reporting with Power BI; cut prep time by 80% and reduced manual errors by 90%</li>
              <li>Used SharePoint integrations and internal APIs to enable real-time access across 3 teams</li>
            </ul>
          </div>
          <div className="resume-project">
            <strong>Real Estate ROI Dashboard – Personal Project</strong><br />
            <em>Tools: Retool, Excel, Google Sheets, MLS</em>
            <ul>
              <li>Built internal tool in Retool to score comps, filter DOM, and flag high-ROI listings; simulated $5M in pipeline</li>
              <li>Designed logic to dynamically adjust ROI thresholds by zip code and rental strategy (e.g, long-term or short-term)</li>
            </ul>
          </div>
          <div className="resume-project">
            <strong>SKU Strategy Tracker – TechMecca (Lumeria)</strong><br />
            <em>Tools: Power BI, SQL, Excel, Figma</em>
            <ul>
              <li>Created SKU dashboard to analyze margins, velocity, and gaps; supported vendor strategy driving 12% QoQ lift</li>
              <li>Integrated pricing flags to help ops team identify underperforming SKUs in bulk</li>
            </ul>
          </div>
        </div>
        <div className="resume-section">
          <h2>TOOLS & SKILLS</h2>
          <p><strong>Tools:</strong> Power BI, SQL, Excel, Monday, SharePoint, Notion, Lucidchart, Figma, Retool, CRM Systems, AI software</p>
          <p><strong>Skills:</strong> Workflow Automation, Process Improvement, Data-Driven Decisions, Stakeholder Communication</p>
        </div>
        <div className="resume-section">
          <h2>CERTIFICATIONS</h2>
          <p>Texas Real Estate License (TREC), Issued March 2024<br />
          Google Project Management Certificate (In Progress)</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
          <button className="about-work-btn" onClick={handleBackHome}>{'← Back to Home'}</button>
        </div>
      </div>
    </FadeIn>
  );
};

export default Resume; 