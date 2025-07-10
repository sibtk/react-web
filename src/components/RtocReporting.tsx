import React, { useEffect } from "react";
import FadeIn from "./FadeIn";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Project.scss";
import mock01 from '../assets/images/mock01.png';

const RtocReporting = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  return (
    <div className="projects-container case-study-center">
      <FadeIn transitionDuration={700}>
        <div className="project-case-card">
          <FadeIn transitionDuration={600} delay={0}>
            <img src={mock01} className="zoom" alt="RTOC Reporting Automation" width="100%" style={{ maxWidth: 500, borderRadius: 12, margin: '0 auto 32px auto', display: 'block' }}/>
          </FadeIn>
          <FadeIn transitionDuration={600} delay={100}>
            <h1 style={{fontSize: '2.3rem', display: 'flex', alignItems: 'center', gap: '0.5em'}}>🛠️ Weekly RTOC Reporting Automation Case Study</h1>
            <p><b>🏢 Company:</b> Aquila Engineering</p>
            <p><b>👤 Role:</b> Product & Operations Intern</p>
            <p><b>🧰 Tools:</b> Power BI, Excel, Monday.com, SharePoint, Internal APIs</p>
            <hr style={{margin: '24px 0'}} />
            <h2 style={{marginTop: 24}}>🔹 Overview</h2>
            <p>This was the first project I shipped at Aquila, and the one I’ve chosen to showcase here because it’s easy to understand outside of the oil and gas space. <b>Goal:</b> eliminate a weekly reporting bottleneck that was wasting hours and causing constant versioning issues.</p>
            <h2 style={{marginTop: 24}}>🔹 The Problem</h2>
            <p>The Real-Time Operations Center (RTOC) was spending <b>4–6 hours every week</b> preparing static reports using Excel files, Monday.com boards, and internal dashboards. Reports were compiled manually, error-prone, and emailed around as PDFs — often outdated by the time they were opened.</p>
            <h2 style={{marginTop: 24}}>🔹 My Role</h2>
            <ul>
              <li>Scoped requirements with RTOC leadership, IT, and field ops</li>
              <li>Audited legacy Excel and SharePoint workflows</li>
              <li>Prioritized KPIs and phased in automation over two iterations</li>
              <li>Built and deployed the solution independently</li>
              <li>Created supporting documentation and trained internal users</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 The Solution</h2>
            <ul>
              <li>⚡ <b>Power BI</b> for real-time visualization of RTOC metrics</li>
              <li>📊 <b>Excel</b> as an interim data input layer for field engineers</li>
              <li>📝 <b>Monday.com</b> to sync ongoing work orders and task status</li>
              <li>🔌 <b>Internal APIs</b> to pipe data from existing systems</li>
              <li>🌐 <b>SharePoint</b> to host the live-access dashboard for weekly review</li>
            </ul>
            <p>The result: a dynamic, self-refreshing dashboard that replaced spreadsheets, manual cleanups, and weekly email chains.</p>
            <h2 style={{marginTop: 24}}>🔹 Results</h2>
            <ul>
              <li>⏱️ Reduced report prep time by <b>80%+</b></li>
              <li>✅ Decreased data-entry errors by <b>90%+</b></li>
              <li>📈 Enabled leadership to access data without delay or requests</li>
              <li>🤝 Supported 3+ operations teams with live metrics across asset performance</li>
              <li>🔄 Final dashboard is now being replicated for other internal functions</li>
            </ul>
            <h2 style={{marginTop: 24}}>🔹 What I Learned</h2>
            <p>This was a practical crash course in product thinking. I scoped, prioritized, shipped a usable MVP, then layered in automation. The biggest challenges weren’t technical — they were cross-functional. Managing handoffs between non-technical field engineers and data-driven leadership required clear documentation, phased rollout, and consistent follow-up.</p>
            <h2 style={{marginTop: 24}}>🔹 Feedback</h2>
            <blockquote style={{background:'#23244a', color:'#fff', borderLeft:'4px solid #6a5acd', padding:'16px 24px', borderRadius:'8px', margin:'16px 0'}}>
              <p style={{fontStyle:'italic', marginBottom: 0}}>“This saves us hours every week and gives us better visibility across field ops. Game-changer.”</p>
              <span style={{display:'block', marginTop:'8px', fontWeight:'bold'}}>— RTOC Operations Manager (via Teams)</span>
            </blockquote>
            <h2 style={{marginTop: 24}}>🔹 Dashboard Preview</h2>
            <p>🖼️ A blurred dashboard preview or Loom walkthrough is available upon request.</p>
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

export default RtocReporting; 