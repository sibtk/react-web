import React, { useEffect } from "react";
import FadeIn from "./FadeIn";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Project.scss";
import mock03 from '../assets/images/mock03.png';

const SkuStrategyTracker = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="projects-container case-study-center">
      <FadeIn transitionDuration={700}>
        <div className="project-case-card" style={{ margin: '0 auto' }}>
          <FadeIn transitionDuration={600} delay={0}>
            <img src={mock03} className="zoom" alt="SKU Strategy Tracker" width="100%" style={{ maxWidth: 500, borderRadius: 12, margin: '0 auto 32px auto', display: 'block' }}/>
          </FadeIn>
          <FadeIn transitionDuration={600} delay={100}>
            <h1 style={{fontSize: '2.3rem', display: 'flex', alignItems: 'center', gap: '0.5em'}}>📦 SKU Strategy Tracker Case Study</h1>
            <p><b>🏢 Company:</b> TechMecca (Lumeria)</p>
            <p><b>👤 Role:</b> Strategy & Operations Intern</p>
            <p><b>🧰 Tools:</b> Power BI, Excel, SQL, Notion, Figma</p>
            <hr style={{margin: '24px 0'}} />
            <h2 style={{marginTop: 24}}>🔹 Overview</h2>
            <p>TechMecca’s team was managing hundreds of SKUs without a clear system to track margins, velocity, or retention impact. I designed and built a centralized dashboard to make this data actionable, enabling leadership to identify underperformers, optimize vendor relationships, and double down on high-margin winners.</p>
            <h2 style={{marginTop: 24}}>🔹 The Problem</h2>
            <p>SKU data was siloed across spreadsheets, supplier reports, and backend systems, with no consolidated view. This created:</p>
            <ul>
              <li>Pricing inconsistencies across sales channels</li>
              <li>Excess inventory from low-velocity products</li>
              <li>Missed bundling/promo opportunities</li>
              <li>No clear tie between SKUs and retention behavior</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 The Solution</h2>
            <p>I built a multi-layered dashboard in <b>Power BI</b>, powered by SQL data pulls and Excel modeling. The core components included:</p>
            <ul>
              <li>📉 <b>Margin Tracker</b> to flag underperforming SKUs</li>
              <li>🔥 <b>Velocity Heatmaps</b> to surface product movement trends</li>
              <li>🔁 <b>Retention Indicators</b> tied to repeat order data</li>
              <li>🔎 <b>Category Drilldowns</b> for promo/bundling analysis</li>
              <li>🤝 <b>Vendor Insights</b> used for cost modeling + consolidation</li>
            </ul>
            <p>Data was refreshed weekly and integrated into ops workflows via Notion.</p>
            <h2 style={{marginTop: 24}}>🔹 Visuals</h2>
            <img src={mock03} className="zoom" alt="SKU Dashboard Preview" width="100%" style={{ maxWidth: 500, borderRadius: 12, margin: '0 auto 32px auto', display: 'block' }}/>
            <p style={{fontStyle:'italic', color:'#aaa'}}>Figma Mockup built to simulate the internal dashboard used by ops and strategy teams to flag low-margin SKUs and consolidate vendor insights.</p>
            <h2 style={{marginTop: 24}}>🔹 Outcomes</h2>
            <ul>
              <li>📊 Provided strategic visibility into 1,200+ SKUs across 5 product categories</li>
              <li>💸 Helped identify ~$80K in inventory tied up in low-performing products</li>
              <li>🤝 Supported a vendor consolidation initiative projected to cut costs by 8%</li>
              <li>📈 Contributed to a <b>12% QoQ margin improvement</b> through SKU rationalization and pricing changes</li>
              <li>🏆 Tool is now used by the ops lead and C-suite in bi-weekly planning meetings</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 What I Learned</h2>
            <p>This project was about <b>building clarity, not just dashboards</b>. I had to reverse-engineer leadership’s needs, prioritize signal over noise, and design something non-technical users could trust. It leveled up my product thinking, data storytelling, and my ability to align messy inputs with real business priorities.</p>
            <h2 style={{marginTop: 24}}>🔹 Preview Available</h2>
            <p>🖼️ Figma mockup available due to confidentiality. Loom walkthrough upon request.</p>
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

export default SkuStrategyTracker; 