import React, { useEffect } from "react";
import FadeIn from "./FadeIn";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Project.scss";
import mock02 from '../assets/images/mock02.png';

const RealEstateRoi = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="projects-container case-study-center">
      <FadeIn transitionDuration={700}>
        <div className="project-case-card">
          <FadeIn transitionDuration={600} delay={0}>
            <img src={mock02} className="zoom" alt="Real Estate ROI Dashboard" width="100%" style={{ maxWidth: 500, borderRadius: 12, margin: '0 auto 32px auto', display: 'block' }}/>
          </FadeIn>
          <FadeIn transitionDuration={600} delay={100}>
            <h1 style={{fontSize: '2.3rem', display: 'flex', alignItems: 'center', gap: '0.5em'}}>🧮 Real Estate ROI Dashboard</h1>
            <p><b>📂 Type:</b> Independent Project</p>
            <p><b>👤 Role:</b> Product Builder / Strategy Consultant</p>
            <p><b>🧰 Tools:</b> Retool, Airtable, Excel, Notion</p>
            <hr style={{margin: '24px 0'}} />
            <h2 style={{marginTop: 24}}>🔹 Overview</h2>
            <p>This project started as a tool I needed for myself and a few agent contacts — something fast, visual, and filterable to prioritize real estate investment opportunities. Over time, I turned it into a customizable internal dashboard designed for landlords, flippers, and small investor teams to score, track, and sort potential deals in real time.</p>
            <p>It’s the most self-contained “product” I’ve built to date, with clear logic, simple UX, and use cases that hold up even with fake or demo data.</p>
            <h2 style={{marginTop: 24}}>🔹 The Problem</h2>
            <p>Most small-scale investors and agents rely on messy spreadsheets, gut feel, or lagging MLS data to evaluate deals. There was no easy way to:</p>
            <ul>
              <li>Score deals based on ROI, DOM, and comp strength</li>
              <li>Prioritize high-return listings in an area</li>
              <li>Track lead source or listing updates in a centralized view</li>
              <li>Quickly filter out low-quality or low-yield properties</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 The Solution</h2>
            <p>I built a custom internal tool using <b>Retool</b> as the frontend and <b>Airtable</b> as the backend.</p>
            <p>The tool included:</p>
            <ul>
              <li>🧮 <b>Comp Score Calculator</b> based on ZIP code, DOM, rent potential, and listing price</li>
              <li>🏷️ <b>DOM + Price Filters</b> to auto-flag high-yield or underpriced properties</li>
              <li>⭐ <b>Priority Ranking System</b> with adjustable weights</li>
              <li>📋 <b>Agent Source + Deal Status Tracker</b> to record outreach, negotiations, and notes</li>
              <li>📅 Built-in <b>monthly ROI estimates</b> using simplified cap rate logic and rent comps</li>
            </ul>
            <p>The interface was built for speed: mobile-friendly, 3-click deep filtering, and structured like a dashboard, not a form.</p>
            <h2 style={{marginTop: 24}}>🔹 Outcomes</h2>
            <ul>
              <li>💰 Simulated <b>$5M+ in pipeline value</b> across test deals</li>
              <li>⏳ Reduced search + scoring time by 60% compared to spreadsheets</li>
              <li>🤝 Used by 10+ agents and investor contacts as a proof-of-concept</li>
              <li>🏡 Showcased during strategy consulting with clients managing over $6.5M in residential inventory</li>
              <li>🔄 Built versioning logic to support both investor view and listing agent workflows</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 What I Learned</h2>
            <p>This project sharpened my product instincts: I learned how to scope a lean MVP, design an intuitive UI, and model decision logic around actual user behavior. It also pushed me to think like both a builder and a strategist — how to balance simplicity with function, and how to support different user workflows without overcomplicating the core product.</p>
            <h2 style={{marginTop: 24}}>🔹 Preview Available</h2>
            <p>🖼️ A redacted live version or walkthrough Loom is available upon request. Demo screenshots can also be provided.</p>
          </FadeIn>
          <hr className="project-divider" />
          <FadeIn transitionDuration={600} delay={500}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="about-work-btn" onClick={() => navigate('/')}>{'← Back to Projects'}</button>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
};

export default RealEstateRoi; 